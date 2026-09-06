#!/usr/bin/env python3
"""Compose dark + emissive Earth textures from NASA public-domain rasters."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
MAPS = ROOT / "public/images/maps"
HOME = ROOT / "public/images/home"
W, H = 2048, 1024


def load_rgb(path: Path, size: tuple[int, int]) -> Image.Image:
    return Image.open(path).convert("RGB").resize(size, Image.Resampling.LANCZOS)


def dark_color(marble: Image.Image) -> Image.Image:
    dark = ImageEnhance.Brightness(marble).enhance(0.16)
    dark = ImageEnhance.Color(dark).enhance(0.28)
    dark = ImageEnhance.Contrast(dark).enhance(1.25)
    black = Image.new("RGB", marble.size, (4, 4, 5))
    mixed = Image.blend(black, dark, 0.62)
    # Crush remaining ocean blues toward black.
    px = mixed.load()
    src = marble.load()
    w, h = mixed.size
    for y in range(h):
        for x in range(w):
            r, g, b = src[x, y]
            if b > r + 12 and b > g + 4:
                pr, pg, pb = px[x, y]
                px[x, y] = (pr // 5, pg // 5, max(pb // 8, 6))
    return mixed


def emissive(marble: Image.Image, night: Image.Image) -> Image.Image:
    night_gray = ImageOps.grayscale(night)
    night_gray = ImageEnhance.Contrast(night_gray).enhance(2.4)
    night_gray = ImageEnhance.Brightness(night_gray).enhance(1.15)
    lights = ImageOps.colorize(night_gray, black="#000000", mid="#4a1208", white="#ff5a14")

    edges = ImageOps.grayscale(marble).filter(ImageFilter.FIND_EDGES)
    edges = ImageEnhance.Contrast(edges).enhance(2.6)
    edges = ImageEnhance.Brightness(edges).enhance(0.85)
    cracks = ImageOps.colorize(edges, black="#000000", mid="#3a0c04", white="#ff3a0a")

    glow = ImageChops.add(lights, cracks)
    return ImageEnhance.Brightness(glow).enhance(1.2)


def orthographic(color: Image.Image, emissive_map: Image.Image, size: int = 900) -> Image.Image:
    """Front-facing still: Africa / Europe toward camera, slight north tilt."""
    lon0 = math.radians(18)
    lat0 = math.radians(12)
    src_w, src_h = color.size
    out = Image.new("RGB", (size, size), (0, 0, 0))
    op = out.load()
    cp = color.load()
    ep = emissive_map.load()
    r = (size - 1) / 2
    cx = cy = r
    sin_lat0, cos_lat0 = math.sin(lat0), math.cos(lat0)
    for y in range(size):
        ny = (cy - y) / r
        for x in range(size):
            nx = (x - cx) / r
            rr = nx * nx + ny * ny
            if rr > 1:
                continue
            nz = math.sqrt(1 - rr)
            # Rotate so lat0 faces camera, then lon0.
            y2 = ny * cos_lat0 + nz * sin_lat0
            z2 = -ny * sin_lat0 + nz * cos_lat0
            x2 = nx
            lat = math.asin(max(-1, min(1, y2)))
            lon = math.atan2(x2, z2) + lon0
            u = (lon / math.pi + 1) * 0.5
            v = 0.5 - lat / math.pi
            sx = int(u * src_w) % src_w
            sy = min(src_h - 1, max(0, int(v * src_h)))
            cr, cg, cb = cp[sx, sy]
            er, eg, eb = ep[sx, sy]
            # Limb darkening + additive crack glow.
            limb = 0.55 + 0.45 * nz
            op[x, y] = (
                min(255, int(cr * limb + er * 0.95)),
                min(255, int(cg * limb + eg * 0.55)),
                min(255, int(cb * limb + eb * 0.35)),
            )
    return out


def main() -> None:
    HOME.mkdir(parents=True, exist_ok=True)
    marble = load_rgb(MAPS / "blue-marble-sm.jpg", (W, H))
    night = load_rgb(MAPS / "earth-at-night.jpg", (W, H))
    color = dark_color(marble)
    glow = emissive(marble, night)
    still = orthographic(color, glow)
    color.save(HOME / "earth-dark.jpg", quality=86, optimize=True)
    glow.save(HOME / "earth-emissive.jpg", quality=86, optimize=True)
    still.save(HOME / "earth-globe-still.jpg", quality=88, optimize=True)
    print("wrote", HOME / "earth-dark.jpg")
    print("wrote", HOME / "earth-emissive.jpg")
    print("wrote", HOME / "earth-globe-still.jpg")


if __name__ == "__main__":
    main()
