#!/usr/bin/env python3
"""Build lime-on-black country line data + a static Home globe still."""

from __future__ import annotations

import json
import math
import struct
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
GEO = ROOT / "public/data/ne_110m_admin_0_countries.geojson"
GEO_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson"
BIN = ROOT / "public/data/earth-countries.bin"
STILL = ROOT / "public/images/home/earth-globe-still.png"
LIME = (192, 255, 0, 255)
BLACK = (0, 0, 0, 255)
RING = (192, 255, 0, 230)


def lonlat_to_xyz(lon: float, lat: float, radius: float = 1.0) -> tuple[float, float, float]:
    phi = math.radians(90.0 - lat)
    theta = math.radians(lon + 180.0)
    x = -radius * math.sin(phi) * math.cos(theta)
    y = radius * math.cos(phi)
    z = radius * math.sin(phi) * math.sin(theta)
    return x, y, z


def rings_from_geom(geom: dict) -> list[list[list[float]]]:
    kind = geom.get("type")
    coords = geom.get("coordinates") or []
    if kind == "Polygon":
        return coords
    if kind == "MultiPolygon":
        out: list[list[list[float]]] = []
        for poly in coords:
            out.extend(poly)
        return out
    return []


def collect_segments(features: list[dict]) -> list[float]:
    verts: list[float] = []
    for feat in features:
        geom = feat.get("geometry") or {}
        for ring in rings_from_geom(geom):
            if len(ring) < 2:
                continue
            pts = ring[:]
            if pts[0] != pts[-1]:
                pts.append(pts[0])
            for i in range(len(pts) - 1):
                lon1, lat1 = float(pts[i][0]), float(pts[i][1])
                lon2, lat2 = float(pts[i + 1][0]), float(pts[i + 1][1])
                if abs(lon1 - lon2) > 180:
                    continue
                x1, y1, z1 = lonlat_to_xyz(lon1, lat1)
                x2, y2, z2 = lonlat_to_xyz(lon2, lat2)
                verts.extend((x1, y1, z1, x2, y2, z2))
    return verts


def project(lon: float, lat: float, lon0: float, lat0: float) -> tuple[float, float, float] | None:
    """Orthographic, Africa / Europe facing."""
    lon = math.radians(lon)
    lat = math.radians(lat)
    lon0 = math.radians(lon0)
    lat0 = math.radians(lat0)
    cos_c = math.sin(lat0) * math.sin(lat) + math.cos(lat0) * math.cos(lat) * math.cos(lon - lon0)
    if cos_c < 0:
        return None
    x = math.cos(lat) * math.sin(lon - lon0)
    y = math.cos(lat0) * math.sin(lat) - math.sin(lat0) * math.cos(lat) * math.cos(lon - lon0)
    return x, y, cos_c


def draw_still(features: list[dict], size: int = 900) -> None:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 255))
    draw = ImageDraw.Draw(img)
    cx = cy = (size - 1) / 2
    r = size * 0.46
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(5, 5, 5, 255), outline=RING, width=2)
    lon0, lat0 = 18.0, 12.0
    for feat in features:
        geom = feat.get("geometry") or {}
        for ring in rings_from_geom(geom):
            screen: list[tuple[float, float]] = []
            for pt in ring:
                proj = project(float(pt[0]), float(pt[1]), lon0, lat0)
                if proj is None:
                    if len(screen) >= 2:
                        draw.line(screen, fill=LIME, width=1)
                    screen = []
                    continue
                x, y, _ = proj
                screen.append((cx + x * r, cy - y * r))
            if len(screen) >= 2:
                draw.line(screen, fill=LIME, width=1)
    img.save(STILL, optimize=True)
    print("still", STILL, img.size)


def ensure_geojson() -> None:
    if GEO.exists():
        return
    import urllib.request

    GEO.parent.mkdir(parents=True, exist_ok=True)
    urllib.request.urlretrieve(GEO_URL, GEO)


def main() -> None:
    ensure_geojson()
    geo = json.loads(GEO.read_text())
    features = geo["features"]
    verts = collect_segments(features)
    BIN.parent.mkdir(parents=True, exist_ok=True)
    packed = struct.pack(f"<{len(verts)}f", *verts)
    BIN.write_bytes(packed)
    print("bin", BIN, "floats", len(verts), "bytes", len(packed))
    draw_still(features)


if __name__ == "__main__":
    main()
