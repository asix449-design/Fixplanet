#!/usr/bin/env python3
"""Restyle Religion atlas plates toward the History of borders palette.

Target (same family as Javierfv1212 / unify-border-history-style.py):
  sea  #C9EDFB  land  #FFDF99

Does not invent religion polygons: only recolors existing seas / unclaimed land
(or physical terrain on process maps). Choropleth fills, hatching, symbols,
and labels stay.

Run from repo root: python3 scripts/unify-religion-history-style.py
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
RELIGION = ROOT / "public/images/maps/religion"
CATALOG = ROOT / "public/images/maps/world-religions.jpg"
ORIGINALS = Path("/tmp/religion-originals")

SEA = np.array([201, 237, 251], dtype=np.float32)
LAND = np.array([255, 223, 153], dtype=np.float32)


def hsv_np(arr: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    rgb = arr / 255.0
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    mx = np.max(rgb, axis=-1)
    mn = np.min(rgb, axis=-1)
    df = mx - mn
    h = np.zeros_like(mx)
    mask = df > 1e-6
    rmax = (mx == r) & mask
    gmax = (mx == g) & mask
    bmax = (mx == b) & mask
    h[rmax] = np.mod((g[rmax] - b[rmax]) / df[rmax], 6.0)
    h[gmax] = (b[gmax] - r[gmax]) / df[gmax] + 2.0
    h[bmax] = (r[bmax] - g[bmax]) / df[bmax] + 4.0
    h = h * 60.0
    s = np.divide(df, np.maximum(mx, 1e-6))
    return h, s, mx


def save_rgb(arr: np.ndarray, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    kwargs: dict = {"optimize": True}
    if dest.suffix.lower() in {".jpg", ".jpeg"}:
        kwargs.update(quality=88, progressive=True)
    im.save(dest, **kwargs)
    print(f"wrote {dest.relative_to(ROOT)} ({dest.stat().st_size // 1024} KB)")


def flood_from_border(mask: np.ndarray) -> np.ndarray:
    """True pixels connected to the image border (4-connected)."""
    reach = np.zeros_like(mask, dtype=bool)
    reach[0] = mask[0]
    reach[-1] = mask[-1]
    reach[:, 0] = mask[:, 0]
    reach[:, -1] = mask[:, -1]
    prev = 0
    while True:
        grow = reach.copy()
        grow[1:] |= reach[:-1]
        grow[:-1] |= reach[1:]
        grow[:, 1:] |= reach[:, :-1]
        grow[:, :-1] |= reach[:, 1:]
        grow &= mask
        n = int(grow.sum())
        if n == prev:
            return grow
        prev = n
        reach = grow


def load_rgb(path: Path) -> np.ndarray:
    return np.asarray(Image.open(path).convert("RGB")).astype(np.float32)


def white_ocean_interior(src: Path, dest: Path) -> None:
    """Near-white seas inside a framed plate; keep paper margins white."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_ink = v < 0.18
    near_white = (~is_ink) & (s < 0.10) & (v > 0.88)
    paper = flood_from_border(near_white)
    sea = near_white & ~paper
    out = arr.copy()
    out[sea] = SEA
    save_rgb(out, dest)


def white_ocean_all(src: Path, dest: Path) -> None:
    """Catalog-style: oceans are the white field; keep saturated fills and the credit bar."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_bar = v < 0.22
    near_white = (~is_bar) & (s < 0.12) & (v > 0.90)
    out = arr.copy()
    out[near_white] = SEA
    save_rgb(out, dest)


def christianity_to_600(src: Path, dest: Path) -> None:
    """White field is sea/paper; mauve is unmapped land; keep blue expansion fills."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_ink = v < 0.16
    is_blue = (~is_ink) & (h > 185) & (h < 245) & (s > 0.22)
    near_white = (~is_ink) & (~is_blue) & (s < 0.10) & (v > 0.88)
    is_field = (
        (~is_ink)
        & (~is_blue)
        & (~near_white)
        & (s < 0.18)
        & (v > 0.55)
        & (v < 0.92)
    )
    out = arr.copy()
    out[near_white] = SEA
    out[is_field] = LAND
    save_rgb(out, dest)


def grey_land_blue_sea(src: Path, dest: Path) -> None:
    """820 schematic: grey unclaimed land, medium-blue sea, keep religion fills."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_ink = (v < 0.16) | ((v < 0.28) & (s < 0.22))
    is_sea = (~is_ink) & (h > 185) & (h < 235) & (s > 0.20) & (v > 0.25)
    is_land = (~is_ink) & (~is_sea) & (s < 0.16) & (v > 0.38) & (v < 0.88)
    out = arr.copy()
    out[is_sea] = SEA
    out[is_land] = LAND
    save_rgb(out, dest)


def pale_sea_keep_fills(src: Path, dest: Path) -> None:
    """Shepherd / colonial plates: pale or cream seas, keep choropleth tints."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_ink = v < 0.18
    # Paper-white / grey-green / parchment seas — not a saturated religion fill.
    is_sea = (~is_ink) & (s < 0.22) & (v > 0.78) & (
        (h < 70) | (h > 80) | (s < 0.10)
    )
    # Don't eat yellow/gold religion blocks (higher chroma oranges).
    is_fill = (~is_ink) & (s > 0.22) & (v > 0.35)
    sea = is_sea & ~is_fill
    out = arr.copy()
    out[sea] = SEA
    save_rgb(out, dest)


def flatten_physical(src: Path, dest: Path) -> None:
    """Process map on physical terrain: tan land, soft blue sea, keep symbols."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    is_ink = (v < 0.18) | ((v < 0.30) & (s < 0.22) & (np.maximum(np.maximum(r, g), b) < 85))
    is_sea = (~is_ink) & (
        ((h > 185) & (h < 240) & (s > 0.08) & (v > 0.35))
        | ((b > r + 12) & (b > g - 4) & (s > 0.10) & (v > 0.55))
    )
    is_terrain = (~is_ink) & (~is_sea) & (
        ((h > 25) & (h < 170) & (s > 0.10) & (s < 0.75) & (v > 0.18) & (v < 0.92))
        | ((s < 0.16) & (v > 0.40) & (v < 0.88))
    )
    out = arr.copy()
    out[is_sea] = SEA
    out[is_terrain] = LAND
    save_rgb(out, dest)


def flood_mask(mask: np.ndarray, seeds: list[tuple[int, int]]) -> np.ndarray:
    """4-connected flood through True pixels, starting at seed coordinates."""
    h, w = mask.shape
    reach = np.zeros_like(mask, dtype=bool)
    for y, x in seeds:
        if 0 <= y < h and 0 <= x < w and mask[y, x]:
            reach[y, x] = True
    prev = 0
    while True:
        grow = reach.copy()
        grow[1:] |= reach[:-1]
        grow[:-1] |= reach[1:]
        grow[:, 1:] |= reach[:, :-1]
        grow[:, :-1] |= reach[:, 1:]
        grow &= mask
        n = int(grow.sum())
        if n == prev:
            return grow
        prev = n
        reach = grow


def dobbins_hemispheres(src: Path, dest: Path) -> None:
    """1883 hemispheres: blue paper + oceans; keep cream uncolored land and fills."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    hh, ww = arr.shape[:2]
    is_ink = v < 0.20
    is_cream = (~is_ink) & (h > 22) & (h < 55) & (s > 0.10) & (s < 0.32) & (v > 0.72)
    is_fill = (~is_ink) & (s > 0.28) & ~((h > 22) & (h < 55) & (s < 0.42) & (v > 0.78))
    walk = is_cream & ~is_fill
    paper = flood_from_border(walk)
    # Pacific (west disc) and Indian Ocean (east disc) — not the parchment land.
    ocean = flood_mask(
        walk,
        [
            (int(hh * 0.42), int(ww * 0.22)),
            (int(hh * 0.55), int(ww * 0.78)),
            (int(hh * 0.38), int(ww * 0.12)),
        ],
    )
    out = arr.copy()
    out[paper | ocean] = SEA
    save_rgb(out, dest)


def cream_seas(src: Path, dest: Path) -> None:
    """Aged-paper oceans (Woodbridge). Keep hatched land, emblems, and ink."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_ink = v < 0.22
    is_cream = (~is_ink) & (h > 22) & (h < 55) & (s > 0.10) & (s < 0.32) & (v > 0.72)
    is_fill = (~is_ink) & (s > 0.28) & ~((h > 22) & (h < 55) & (s < 0.42) & (v > 0.78))
    sea = is_cream & ~is_fill
    out = arr.copy()
    out[sea] = SEA
    save_rgb(out, dest)


def wartime_sheet(src: Path, dest: Path) -> None:
    """1943 plate is already close; unify leftover paper/sea, keep tints."""
    arr = load_rgb(src)
    h, s, v = hsv_np(arr)
    is_ink = v < 0.16
    is_fill = (~is_ink) & (s > 0.18) & (v > 0.28)
    is_sea = (~is_ink) & (~is_fill) & (
        ((h > 175) & (h < 230) & (s > 0.04) & (v > 0.70))
        | ((s < 0.10) & (v > 0.82))
    )
    out = arr.copy()
    out[is_sea] = SEA
    leftover = (~is_ink) & (~is_fill) & (~is_sea) & (s < 0.16) & (v > 0.55) & (v < 0.90)
    out[leftover] = LAND
    save_rgb(out, dest)


def backup_if_needed(src: Path) -> Path:
    ORIGINALS.mkdir(parents=True, exist_ok=True)
    dest = ORIGINALS / src.name
    if not dest.exists():
        dest.write_bytes(src.read_bytes())
    return dest


def main() -> None:
    jobs = [
        ("y0001.png", white_ocean_interior),
        ("y0600.png", christianity_to_600),
        ("y0820.png", grey_land_blue_sea),
        ("y1097.jpg", pale_sea_keep_fills),
        ("y1500.png", flatten_physical),
        ("y1821.jpg", cream_seas),
        ("y1883.jpg", dobbins_hemispheres),
        ("y1943.jpg", wartime_sheet),
    ]
    for name, fn in jobs:
        src = backup_if_needed(RELIGION / name)
        fn(src, RELIGION / name)

    cat_src = backup_if_needed(CATALOG)
    white_ocean_all(cat_src, CATALOG)


if __name__ == "__main__":
    main()
