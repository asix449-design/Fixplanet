#!/usr/bin/env python3
"""Orthographic still of the Home globe from the NASA Blue Marble day map."""

from __future__ import annotations

import math
import struct
import subprocess
import sys
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/home/earth-day.jpg"
OUT = ROOT / "public/images/home/earth-globe-still.png"
SRC_W, SRC_H = 2048, 1024
SIZE = 900
RADIUS = 390


def load_jpeg_rgb(path: Path, width: int, height: int) -> bytes:
    raw = subprocess.check_output(
        [
            "ffmpeg",
            "-hide_banner",
            "-loglevel",
            "error",
            "-i",
            str(path),
            "-f",
            "rawvideo",
            "-pix_fmt",
            "rgb24",
            "-",
        ]
    )
    expected = width * height * 3
    if len(raw) != expected:
        raise SystemExit(f"unexpected raw size {len(raw)} != {expected}")
    return raw


def sample(rgb: bytes, u: float, v: float) -> tuple[int, int, int]:
    x = min(SRC_W - 1, max(0, int(u * SRC_W)))
    y = min(SRC_H - 1, max(0, int(v * SRC_H)))
    i = (y * SRC_W + x) * 3
    return rgb[i], rgb[i + 1], rgb[i + 2]


def write_png(path: Path, width: int, height: int, rgba: bytearray) -> None:
    def chunk(tag: bytes, data: bytes) -> bytes:
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        )

    raw = bytearray()
    stride = width * 4
    for y in range(height):
        raw.append(0)
        raw.extend(rgba[y * stride : (y + 1) * stride])
    path.write_bytes(
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
        + chunk(b"IEND", b"")
    )


def render(rgb: bytes) -> bytearray:
    # Match EarthGlobe.astro: earth.rotation.y = 0.22, x = 0.16
    rot_y = 0.22
    rot_x = 0.16
    cy, sy = math.cos(rot_y), math.sin(rot_y)
    cx, sx = math.cos(rot_x), math.sin(rot_x)
    # Directional light from (-1.6, 0.35, 1.8)
    lx, ly, lz = -1.6, 0.35, 1.8
    llen = math.sqrt(lx * lx + ly * ly + lz * lz)
    lx, ly, lz = lx / llen, ly / llen, lz / llen

    out = bytearray(SIZE * SIZE * 4)
    mid = (SIZE - 1) / 2.0
    for py in range(SIZE):
        for px in range(SIZE):
            nx = (px - mid) / RADIUS
            ny = (mid - py) / RADIUS
            r2 = nx * nx + ny * ny
            i = (py * SIZE + px) * 4
            if r2 > 1.08:
                continue
            if r2 > 1.0:
                # soft atmosphere rim
                t = (1.08 - r2) / 0.08
                out[i] = int(110 * t)
                out[i + 1] = int(182 * t)
                out[i + 2] = int(255 * t)
                out[i + 3] = int(90 * t)
                continue

            nz = math.sqrt(max(0.0, 1.0 - r2))
            # camera-space normal -> rotate inverse of earth
            # apply Rx then Ry (same order as Three.js Euler default XYZ? Three.js default is XYZ.
            # Mesh rotation x then y: first Rx, then Ry on the object.
            # Inverse for sampling: Ry^-1 then Rx^-1.
            x1 = cy * nx + sy * nz
            y1 = ny
            z1 = -sy * nx + cy * nz
            x2 = x1
            y2 = cx * y1 - sx * z1
            z2 = sx * y1 + cx * z1

            lon = math.atan2(x2, z2)
            lat = math.asin(max(-1.0, min(1.0, y2)))
            u = 0.5 + lon / (2.0 * math.pi)
            v = 0.5 - lat / math.pi
            u -= math.floor(u)
            v = min(0.9999, max(0.0, v))
            r, g, b = sample(rgb, u, v)

            ndotl = max(0.0, x2 * lx + y2 * ly + z2 * lz)
            shade = 0.42 + 1.15 * ndotl
            # ocean specular: blue-dominant pixels
            if b > r + 12 and b > g + 4 and b > 70:
                half = (lx + 0.0, ly + 0.0, lz + 1.0)
                hl = math.sqrt(half[0] ** 2 + half[1] ** 2 + half[2] ** 2)
                hx, hy, hz = half[0] / hl, half[1] / hl, half[2] / hl
                spec = max(0.0, x2 * hx + y2 * hy + z2 * hz) ** 18
                shade += 0.28 * spec

            edge = 1.0 - r2
            rim = (1.0 - edge) ** 2
            r = min(255, int(r * shade + 40 * rim))
            g = min(255, int(g * shade + 70 * rim))
            b = min(255, int(b * shade + 110 * rim))
            out[i] = r
            out[i + 1] = g
            out[i + 2] = b
            out[i + 3] = 255
    return out


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"missing {SRC}")
    rgb = load_jpeg_rgb(SRC, SRC_W, SRC_H)
    write_png(OUT, SIZE, SIZE, render(rgb))
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)", file=sys.stderr)


if __name__ == "__main__":
    main()
