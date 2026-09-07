#!/usr/bin/env python3
"""Restyle History of borders frames onto the early-century atlas palette.

Target (Javierfv1212 years 1–500 / 700 / 900):
  sea  #C9EDFB  land  #FFDF99  white paper margin  #FFFFFF

Does not invent borders: only recolors existing sheets, swaps in same-family
Commons plates, or 4-colors present-day BlankMap-World country polygons.

Run from repo root: python3 scripts/unify-border-history-style.py
"""

from __future__ import annotations

import re
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BORDERS = ROOT / "public/images/maps/borders"
SVG_BASE = ROOT / "public/images/maps/world-countries.svg"
CAND = Path("/tmp/border-candidates")

SEA = np.array([201, 237, 251], dtype=np.float32)
LAND = np.array([255, 223, 153], dtype=np.float32)

# Atlas fills for present-day country polygons (muted, educational-atlas).
ATLAS = [
    (196, 92, 74),  # terra-cotta
    (47, 92, 154),  # roman blue
    (61, 138, 84),  # leaf
    (139, 90, 173),  # parthian violet
    (212, 160, 74),  # gold
    (192, 106, 56),  # ochre
    (58, 138, 138),  # teal
    (138, 90, 58),  # umber
    (106, 138, 184),  # steel
    (160, 80, 112),  # rose
    (122, 154, 58),  # olive
    (74, 106, 138),  # slate
]

# Neighbor-aware overrides so large landmasses don't share a fill.
COLOR_OVERRIDE = {
    "us": 0, "ca": 8, "mx": 2, "gl": 3, "cu": 4, "gt": 5, "ht": 6,
    "br": 4, "ar": 1, "co": 5, "pe": 6, "ve": 7, "cl": 2, "bo": 0,
    "gy": 3, "sr": 8, "ec": 9, "py": 10, "uy": 11, "fk": 0,
    "ru": 1, "cn": 4, "mn": 2, "kz": 0, "in": 5, "pk": 6, "af": 7,
    "ir": 2, "iq": 1, "sa": 4, "tr": 0, "sy": 9, "ye": 5, "om": 6,
    "uz": 8, "tm": 10, "kg": 9, "tj": 3, "np": 0, "bd": 2, "mm": 1,
    "th": 7, "vn": 6, "la": 0, "kh": 8, "my": 2, "id": 5, "ph": 4,
    "jp": 0, "kr": 5, "kp": 9, "tw": 1, "mn": 2,
    "au": 2, "nz": 0, "pg": 4, "fj": 5, "sb": 6,
    "cd": 4, "za": 0, "ng": 1, "eg": 5, "dz": 2, "sd": 6, "ss": 6,
    "et": 7, "ly": 8, "ml": 9, "ne": 10, "td": 3, "ao": 1, "mz": 5,
    "ke": 2, "tz": 8, "ug": 0, "cm": 7, "gh": 4, "ci": 6, "ma": 1,
    "so": 9, "er": 10, "mg": 3, "zw": 11, "bw": 5, "na": 7, "zm": 2,
    "fr": 1, "de": 4, "es": 5, "it": 2, "gb": 0, "pl": 6, "ua": 7,
    "pt": 9, "nl": 8, "be": 10, "ch": 3, "at": 0, "cz": 5, "ro": 1,
    "hu": 8, "gr": 4, "se": 2, "no": 5, "fi": 9, "dk": 7, "ie": 11,
    "by": 4, "lt": 0, "lv": 10, "ee": 3, "md": 9, "bg": 6, "rs": 11,
    "ba": 1, "hr": 5, "sk": 2, "si": 7, "al": 8, "mk": 0, "me": 4,
    "ge": 5, "am": 6, "az": 7, "il": 8, "jo": 10, "lb": 3, "cy": 2,
    "ae": 0, "qa": 1, "kw": 2, "bh": 4, "ps": 5,
}


def load_font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


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
    Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB").save(
        dest,
        optimize=True,
        **({"quality": 88, "progressive": True} if dest.suffix.lower() in {".jpg", ".jpeg"} else {}),
    )
    print(f"wrote {dest.relative_to(ROOT)} ({dest.stat().st_size // 1024} KB)")


def recolor_base(im: Image.Image, mode: str) -> np.ndarray:
    """Replace unclaimed land + sea with the Javierfv1212 parchment palette."""
    arr = np.asarray(im.convert("RGB")).astype(np.float32)
    h, s, v = hsv_np(arr)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    is_ink = (v < 0.20) & (s < 0.55)
    out = arr.copy()

    if mode == "white_ocean":
        is_sea = (~is_ink) & (s < 0.10) & (v > 0.90)
        is_land = (~is_ink) & (s < 0.12) & (v > 0.55) & (v <= 0.90)
    elif mode == "white_land":
        is_sea = (~is_ink) & (((h > 185) & (h < 230) & (s > 0.08) & (v > 0.55)) | ((b > r + 8) & (b > g - 5) & (s < 0.35) & (v > 0.70)))
        is_land = (~is_ink) & (s < 0.08) & (v > 0.88)
    elif mode == "grey_land_blue_sea":
        is_sea = (~is_ink) & (h > 185) & (h < 235) & (s > 0.08) & (v > 0.18)
        is_land = (~is_ink) & (s < 0.14) & (v > 0.45) & (v < 0.95)
    else:
        raise ValueError(mode)

    out[is_sea] = SEA
    out[is_land] = LAND
    # Soften leftover grey hillshade toward tan without touching vivid fills.
    leftover_grey = (~is_ink) & (~is_sea) & (~is_land) & (s < 0.18) & (v > 0.35)
    out[leftover_grey] = LAND
    return out


def flatten_terrain(im: Image.Image) -> np.ndarray:
    """Lessman DEM sheets → flat tan land / soft blue sea; keep political tints + labels."""
    arr = np.asarray(im.convert("RGB")).astype(np.float32)
    h, s, v = hsv_np(arr)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    is_ink = (v < 0.18) | ((v < 0.28) & (s < 0.25) & (np.maximum(np.maximum(r, g), b) < 80))
    # Water: cyan through deep blue, including bathymetric greens-blues.
    is_sea = (~is_ink) & (
        ((h > 170) & (h < 230) & (s > 0.12) & (v > 0.22))
        | ((b > r + 25) & (b > 90) & (g > 70) & (s > 0.15))
    )
    # Terrain greens / yellows / browns (low–mid saturation hillshade).
    is_terrain = (~is_ink) & (~is_sea) & (
        ((h > 28) & (h < 165) & (s > 0.08) & (s < 0.72) & (v > 0.18))
        | ((g > r - 10) & (g > b + 8) & (g > 70) & (s < 0.75))
    )
    out = arr.copy()
    out[is_sea] = SEA
    out[is_terrain] = LAND
    # Flatten remaining political overlays: keep hue, lift toward a solid blob.
    rest = ~(is_ink | is_sea | is_terrain)
    if np.any(rest):
        tint = arr[rest]
        # Mix toward a mid-value version of the same hue so hillshade dies.
        mx = np.max(tint, axis=1, keepdims=True)
        mn = np.min(tint, axis=1, keepdims=True)
        chroma = mx - mn
        # Re-light to atlas-like mid brightness.
        scale = np.where(mx > 1e-3, 200.0 / mx, 1.0)
        lifted = np.clip(tint * scale, 0, 255)
        out[rest] = 0.72 * lifted + 0.28 * tint
        # Grey leftovers after flatten → land.
        h2, s2, v2 = hsv_np(out)
        leftover = rest & (s2 < 0.16) & (v2 > 0.35)
        out[leftover] = LAND
    return out


def fit_width(arr: np.ndarray, width: int = 1920) -> np.ndarray:
    im = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    if im.width == width:
        return arr
    h = max(1, round(im.height * (width / im.width)))
    return np.asarray(im.resize((width, h), Image.Resampling.LANCZOS)).astype(np.float32)


def process_file(src: Path, dest: Path, mode: str, width: int = 1920) -> None:
    im = Image.open(src)
    if mode == "terrain":
        arr = flatten_terrain(im)
    else:
        arr = recolor_base(im, mode)
    arr = fit_width(arr, width)
    save_rgb(arr, dest)


def country_codes(svg: str) -> list[str]:
    skip = {
        "landxx", "coastxx", "oceanxx", "circlexx", "subxx", "antxx", "noxx",
        "limitxx", "unxx", "eu", "eaeu",
    }
    codes: set[str] = set()
    for m in re.finditer(r'class="([^"]+)"', svg):
        for tok in m.group(1).split():
            if len(tok) == 2 and tok.isalpha() and tok not in skip:
                codes.add(tok)
    return sorted(codes)


def color_for(code: str) -> tuple[int, int, int]:
    idx = COLOR_OVERRIDE.get(code, sum(map(ord, code)) % len(ATLAS))
    return ATLAS[idx % len(ATLAS)]


def render_present_day(dest: Path, year_label: str) -> None:
    import io

    import cairosvg

    svg = SVG_BASE.read_text(encoding="utf-8")
    rules = [
        ".oceanxx { fill: #c9edfb !important; stroke: #2a2418 !important; stroke-width: 1.1 !important; }",
        ".landxx { fill: #ffdf99 !important; stroke: #4a4033 !important; stroke-width: 0.4 !important; }",
        ".antxx, .aq, #aq, #aq path { fill: #f3e6c8 !important; stroke: #9aa39c !important; stroke-width: 0.3 !important; }",
        ".circlexx, .subxx, .noxx, .unxx, .limitxx { opacity: 0 !important; }",
    ]
    for code in country_codes(svg):
        if code == "aq":
            continue
        r, g, b = color_for(code)
        hexcol = f"#{r:02x}{g:02x}{b:02x}"
        rules.append(
            f".{code}, #{code}, #{code} path, #{code} .landxx {{ "
            f"fill: {hexcol} !important; stroke: #4a4033 !important; stroke-width: 0.4 !important; }}"
        )
    extra = "\n".join(rules) + "\n"
    if "</style>" not in svg:
        raise SystemExit("world-countries.svg missing style block")
    svg = svg.replace("</style>", extra + "</style>", 1)
    png = cairosvg.svg2png(
        bytestring=svg.encode("utf-8"),
        output_width=1920,
        background_color="white",
    )
    im = Image.open(io.BytesIO(png)).convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    im = Image.alpha_composite(bg, im).convert("RGB")
    draw = ImageDraw.Draw(im)
    font = load_font(28)
    # Year mark in the south Pacific, matching atlas plates that letter the date on the sheet.
    draw.text((48, im.height - 56), year_label, fill=(42, 36, 28), font=font)
    save_rgb(np.asarray(im).astype(np.float32), dest)


def copy_png(src: Path, dest: Path, width: int = 1920) -> None:
    im = Image.open(src).convert("RGB")
    arr = fit_width(np.asarray(im).astype(np.float32), width)
    save_rgb(arr, dest)


def main() -> None:
    BORDERS.mkdir(parents=True, exist_ok=True)
    originals = Path("/tmp/border-originals")
    originals.mkdir(parents=True, exist_ok=True)
    for name in ("y0600.jpg", "y0800.jpg", "y1025.jpg", "y1100.jpg", "y1200.jpg", "y1600.png", "y1700.png", "y1815.jpg", "y1914.jpg", "y2000.jpg"):
        src = BORDERS / name
        dest = originals / name
        if src.exists() and not dest.exists():
            dest.write_bytes(src.read_bytes())

    # Same-family Javierfv1212-style plate for the 800 step (750 CE, labeled nearest).
    copy_png(CAND / "y0750.png", BORDERS / "y0750.png")

    # Lessman DEM sheets cannot keep empire tints once hillshade is flattened;
    # those years use nearest matching-style world plates instead (see border-history.ts).

    # OER / grey-land teaching maps.
    process_file(originals / "y1200.jpg", BORDERS / "y1200.jpg", "grey_land_blue_sea")
    process_file(originals / "y1914.jpg", BORDERS / "y1914.jpg", "grey_land_blue_sea")

    # Babelia 1648 (nearest sheet for 1600) — grey land / white sea.
    process_file(CAND / "y1648.png", BORDERS / "y1648.png", "white_ocean")

    # Exact-year 1700 Urnanabha — white land / pale blue sea.
    process_file(originals / "y1700.png", BORDERS / "y1700.png", "white_land")

    # 1815 Congress of Vienna — grey land / light blue sea.
    process_file(originals / "y1815.jpg", BORDERS / "y1815.jpg", "grey_land_blue_sea")

    # Present-day 4-color country fills on BlankMap-World.
    render_present_day(BORDERS / "y2000.png", "2000")
    render_present_day(BORDERS / "y2020.png", "2020")


if __name__ == "__main__":
    import sys

    if "--present-day" in sys.argv:
        BORDERS.mkdir(parents=True, exist_ok=True)
        render_present_day(BORDERS / "y2000.png", "2000")
        render_present_day(BORDERS / "y2020.png", "2020")
    else:
        main()
