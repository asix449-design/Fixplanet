#!/usr/bin/env python3
"""Build unique /maps catalog previews from hosted originals + Fix Planet schematics.

Run from the repo root after placing source files in /tmp/map-src (see comments).
Outputs 1600×800 JPEGs into public/images/maps/.
"""

from __future__ import annotations

import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/maps"
SVG_BASE = OUT / "world-countries.svg"
SRC = Path("/tmp/map-src")

W, H = 1600, 800


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def fit_card(im: Image.Image, bg: tuple[int, int, int] = (255, 255, 255)) -> Image.Image:
    im = im.convert("RGB")
    src_ratio = im.width / im.height
    target_ratio = W / H
    if src_ratio > target_ratio:
        new_w = int(im.height * target_ratio)
        left = (im.width - new_w) // 2
        im = im.crop((left, 0, left + new_w, im.height))
    else:
        new_h = int(im.width / target_ratio)
        top = (im.height - new_h) // 2
        im = im.crop((0, top, im.width, top + new_h))
    return im.resize((W, H), Image.Resampling.LANCZOS)


def credit_bar(im: Image.Image, text: str, fill: tuple[int, int, int] = (18, 24, 22)) -> Image.Image:
    im = im.convert("RGB").copy()
    draw = ImageDraw.Draw(im)
    bar_h = 34
    draw.rectangle((0, im.height - bar_h, im.width, im.height), fill=fill)
    draw.text((14, im.height - 24), text, fill=(236, 240, 234), font=load_font(16))
    return im


def save_jpg(im: Image.Image, name: str) -> None:
    dest = OUT / name
    im.convert("RGB").save(dest, "JPEG", quality=86, optimize=True, progressive=True)
    print(f"wrote {dest.name} ({dest.stat().st_size // 1024} KB)")


def css_fills(groups: dict[str, list[str]]) -> str:
    rules = []
    for color, codes in groups.items():
        selectors = []
        for code in codes:
            selectors.append(f".{code}")
            selectors.append(f"#{code}")
            selectors.append(f"#{code} path")
            selectors.append(f"#{code} .landxx")
        rules.append(f"{', '.join(selectors)} {{ fill: {color} !important; }}")
    return "\n".join(rules)


def render_svg(theme_css: str, overlays: str, dest_name: str, credit: str | None = None) -> None:
    svg = SVG_BASE.read_text(encoding="utf-8")
    extra = f"\n{theme_css}\n"
    if "</style>" not in svg:
        raise SystemExit("world-countries.svg is missing a style block")
    svg = svg.replace("</style>", extra + "</style>", 1)
    if overlays:
        svg = svg.replace("</svg>", overlays + "\n</svg>", 1)
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False, encoding="utf-8") as tmp:
        tmp.write(svg)
        tmp_path = Path(tmp.name)
    png_path = tmp_path.with_suffix(".png")
    subprocess.run(
        ["rsvg-convert", "-w", str(W), "-h", str(H), "-o", str(png_path), str(tmp_path)],
        check=True,
    )
    im = Image.open(png_path).convert("RGB")
    im = fit_card(im)
    if credit:
        im = credit_bar(im, credit)
    save_jpg(im, dest_name)
    tmp_path.unlink(missing_ok=True)
    png_path.unlink(missing_ok=True)


def circles(points: list[tuple[float, float, float, str, float]]) -> str:
    """points are SVG pixels on BlankMap-World (not lon/lat)."""
    parts = ['<g id="fixplanet-overlay" pointer-events="none">']
    for x, y, r, color, opacity in points:
        parts.append(
            f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="{color}" fill-opacity="{opacity}" '
            f'stroke="#fff7e6" stroke-width="0.6" stroke-opacity="0.45"/>'
        )
    parts.append("</g>")
    return "\n".join(parts)


def ellipses(blobs: list[tuple[float, float, float, float, str, float]]) -> str:
    """blobs are SVG pixels on BlankMap-World (not lon/lat)."""
    parts = ['<g id="fixplanet-overlay" pointer-events="none">']
    for x, y, rx, ry, color, opacity in blobs:
        parts.append(
            f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx}" ry="{ry}" fill="{color}" '
            f'fill-opacity="{opacity}"/>'
        )
    parts.append("</g>")
    return "\n".join(parts)


def legend_box(items: list[tuple[str, str]], x: float = 72, y: float = 1188) -> str:
    """Simple color key in SVG pixel space (BlankMap-World)."""
    parts = [
        '<g id="fixplanet-legend" pointer-events="none" '
        'font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="26">'
        f'<rect x="{x - 18}" y="{y - 28}" width="520" height="{36 + 36 * len(items)}" '
        'fill="#f7f4ee" fill-opacity="0.88" stroke="#3d4a42" stroke-width="0.8"/>'
    ]
    for i, (color, label) in enumerate(items):
        yy = y + i * 34
        parts.append(
            f'<rect x="{x}" y="{yy - 16}" width="30" height="22" fill="{color}" '
            'stroke="#1a1a1a" stroke-width="0.7"/>'
        )
        parts.append(f'<text x="{x + 42}" y="{yy}" fill="#1a1a1a">{label}</text>')
    parts.append("</g>")
    return "\n".join(parts)


def lake_cluster(
    cx: float, cy: float, n: int, spread: float, r: float, color: str, opacity: float = 0.9
) -> list[tuple[float, float, float, str, float]]:
    """A handful of shoreline dots around a lake district — not a count."""
    pts: list[tuple[float, float, float, str, float]] = []
    for i in range(n):
        ang = (i * 2.399) % 6.2832
        rad = spread * (0.18 + (i % 5) * 0.16)
        pts.append((cx + rad * __import__("math").cos(ang), cy + rad * __import__("math").sin(ang), r * (0.7 + (i % 3) * 0.18), color, opacity))
    return pts


def groundwater_whymap() -> None:
    """Blue sedimentary / green complex / brown local-shallow — not Aqueduct stress."""
    css = """
    .oceanxx { fill: #d7e4ec !important; stroke: none !important; }
    .landxx { fill: #efe6d4 !important; stroke: #8a7a62 !important; stroke-width: 0.28 !important; }
    .antxx { fill: #f4f1ea !important; }
    .circlexx, .subxx, .noxx, .unxx { opacity: 0 !important; }
    """
    sedimentary = [
        (1380, 520, 95, 42, "#2f6f9a", 0.72),  # Nubian / Sahara
        (1588, 500, 55, 32, "#3a7ca5", 0.7),  # Arabian
        (2260, 780, 70, 38, "#2f6f9a", 0.68),  # Great Artesian
        (430, 400, 48, 22, "#3a7ca5", 0.7),  # High Plains
        (420, 470, 40, 16, "#3a7ca5", 0.55),  # Gulf Coast aquifer
        (1850, 250, 80, 30, "#2f6f9a", 0.62),  # West Siberian
        (740, 690, 70, 36, "#3a7ca5", 0.58),  # Amazon basin sediments
        (1460, 700, 48, 28, "#3a7ca5", 0.55),  # Congo basin
        (1820, 480, 70, 22, "#2f6f9a", 0.7),  # Indo-Gangetic
        (2020, 380, 42, 18, "#3a7ca5", 0.62),  # North China Plain
        (1450, 280, 70, 22, "#3a7ca5", 0.5),  # North European plain
        (700, 820, 36, 18, "#3a7ca5", 0.5),  # Paraná / Pampas
    ]
    complex_fold = [
        (680, 760, 18, 70, "#4f8a4a", 0.7),  # Andes
        (380, 380, 16, 55, "#5b8f5a", 0.62),  # Rockies
        (1750, 380, 90, 18, "#4f8a4a", 0.7),  # Alpine–Himalaya
        (1555, 680, 14, 55, "#5b8f5a", 0.62),  # East African rift
        (2160, 400, 22, 18, "#5b8f5a", 0.55),  # Japan
        (1650, 430, 28, 16, "#4f8a4a", 0.55),  # Zagros
    ]
    local_shallow = [
        (520, 260, 70, 40, "#a67c52", 0.55),  # Canadian Shield
        (1480, 180, 45, 22, "#a67c52", 0.55),  # Baltic Shield
        (780, 760, 40, 28, "#b08968", 0.45),  # Brazilian Shield
        (1480, 760, 55, 40, "#a67c52", 0.5),  # African shields
        (2180, 800, 40, 22, "#a67c52", 0.5),  # Western Australia
        (2050, 220, 50, 22, "#b08968", 0.4),  # Siberian shield
    ]
    overlay = ellipses(local_shallow + sedimentary + complex_fold).replace(
        "</g>", legend_box(
            [
                ("#2f6f9a", "sedimentary basins"),
                ("#4f8a4a", "complex folded / faulted"),
                ("#a67c52", "local and shallow"),
            ]
        )
        + "\n</g>",
        1,
    )
    render_svg(
        css,
        overlay,
        "groundwater-whymap.jpg",
        "Fix Planet overview · WHYMAP aquifer environments · not Aqueduct stress",
    )


def global_lakes_hydrolakes() -> None:
    """Shoreline / lake-density dots — not river-basin fills, not stress."""
    css = """
    .oceanxx { fill: #c5d9e8 !important; stroke: none !important; }
    .landxx { fill: #f3efe4 !important; stroke: #9aa39c !important; stroke-width: 0.25 !important; }
    .antxx { fill: #f7f4ee !important; }
    .circlexx, .subxx, .noxx, .unxx { opacity: 0 !important; }
    """
    lake = "#1d4e89"
    districts = [
        *lake_cluster(510, 365, 8, 42, 9.5, lake),  # Great Lakes
        *lake_cluster(480, 250, 16, 80, 6.0, lake, 0.85),  # Canadian Shield
        *lake_cluster(1475, 195, 14, 42, 6.2, lake),  # Fennoscandia
        *lake_cluster(2000, 210, 8, 40, 5.5, lake, 0.7),  # Siberian lakes
        *lake_cluster(1555, 700, 6, 28, 8.0, lake),  # East African Great Lakes
        *lake_cluster(1688, 345, 4, 22, 11.0, lake),  # Caspian
        *lake_cluster(2048, 275, 3, 14, 8.5, lake),  # Baikal
        *lake_cluster(1960, 430, 10, 36, 4.8, lake, 0.8),  # Tibetan plateau
        *lake_cluster(700, 900, 7, 28, 5.5, lake, 0.85),  # Patagonia
        *lake_cluster(760, 700, 9, 48, 4.5, lake, 0.7),  # Amazon
        *lake_cluster(2055, 430, 5, 22, 5.0, lake, 0.75),  # Yangtze / Dongting
        *lake_cluster(1575, 240, 5, 20, 6.0, lake, 0.8),  # Ladoga / Onega
        *lake_cluster(400, 220, 6, 28, 5.5, lake, 0.8),  # Great Bear / Slave
        *lake_cluster(530, 575, 3, 10, 5.0, lake, 0.8),  # Nicaragua
        *lake_cluster(675, 775, 2, 8, 6.0, lake, 0.85),  # Titicaca
        *lake_cluster(2025, 555, 3, 12, 5.0, lake, 0.75),  # Tonle Sap
        *lake_cluster(1488, 888, 3, 14, 5.5, lake, 0.75),  # southern Africa
        *lake_cluster(2240, 820, 3, 16, 4.5, lake, 0.6),  # Australian
        *lake_cluster(1720, 348, 2, 10, 6.0, "#3a6ea5", 0.55),  # Aral remnant
    ]
    overlay = circles(districts).replace(
        "</g>",
        legend_box([("#1d4e89", "lakes and reservoirs ≥10 ha")], x=72, y=1248)
        + "\n</g>",
        1,
    )
    render_svg(
        css,
        overlay,
        "global-lakes-hydrolakes.jpg",
        "Fix Planet overview · HydroLAKES shoreline density · not HydroBASINS",
    )


def lakes_wetlands_glwd() -> None:
    """Open water / marsh / peat / intermittent — not a second HydroLAKES shoreline layer."""
    css = """
    .oceanxx { fill: #b9cfc4 !important; stroke: none !important; }
    .landxx { fill: #efe8d6 !important; stroke: #7d8a72 !important; stroke-width: 0.25 !important; }
    .antxx { fill: #f2eee6 !important; }
    .circlexx, .subxx, .noxx, .unxx { opacity: 0 !important; }
    """
    open_water = [
        (510, 365, 38, 16, "#1a6b8a", 0.85),  # Great Lakes
        (1555, 700, 22, 40, "#1a6b8a", 0.8),  # East African lakes
        (1688, 345, 28, 16, "#1a6b8a", 0.85),  # Caspian
        (2048, 275, 14, 8, "#1a6b8a", 0.8),  # Baikal
        (1475, 195, 22, 12, "#1a6b8a", 0.55),  # Fennoscandian lakes
    ]
    marsh = [
        (760, 760, 36, 20, "#3d9a5a", 0.75),  # Pantanal
        (470, 470, 22, 12, "#3d9a5a", 0.7),  # Everglades / Gulf
        (1520, 620, 28, 16, "#3d9a5a", 0.75),  # Sudd
        (1630, 430, 20, 12, "#3d9a5a", 0.7),  # Mesopotamian marshes
        (2020, 555, 22, 12, "#3d9a5a", 0.7),  # Mekong
        (1480, 700, 24, 16, "#4eaa68", 0.55),  # Congo wetlands
        (760, 690, 40, 18, "#4eaa68", 0.45),  # Amazon várzea
    ]
    peat = [
        (520, 240, 70, 28, "#6b4a2a", 0.7),  # Hudson Bay lowlands
        (1900, 230, 80, 28, "#6b4a2a", 0.65),  # West Siberian peat
        (2080, 660, 28, 14, "#6b4a2a", 0.75),  # Indonesia peat
        (1475, 200, 30, 14, "#7a5a38", 0.45),  # Fennoscandian peat
        (1460, 720, 22, 14, "#6b4a2a", 0.5),  # Congo peat
    ]
    intermittent = [
        (1380, 560, 70, 22, "#d4a017", 0.55),  # Sahel / Chad
        (2240, 800, 50, 22, "#d4a017", 0.5),  # Australian intermittent
        (1750, 380, 36, 16, "#d4a017", 0.45),  # Central Asia
        (1488, 820, 28, 14, "#d4a017", 0.4),  # Kalahari pans
    ]
    overlay = ellipses(intermittent + peat + marsh + open_water).replace(
        "</g>",
        legend_box(
            [
                ("#1a6b8a", "open water"),
                ("#3d9a5a", "marsh / vegetated wetland"),
                ("#6b4a2a", "peatland"),
                ("#d4a017", "intermittent water"),
            ],
            x=72,
            y=1128,
        )
        + "\n</g>",
        1,
    )
    render_svg(
        css,
        overlay,
        "lakes-wetlands-glwd.jpg",
        "Fix Planet overview · GLWD inland-water classes · not HydroLAKES shorelines",
    )


def flood_hazard_aqueduct() -> None:
    """Riverine + coastal inundation schematic — not baseline water-stress choropleth."""
    css = """
    .oceanxx { fill: #16324a !important; stroke: none !important; }
    .landxx { fill: #e4e0d4 !important; stroke: #6a7268 !important; stroke-width: 0.28 !important; }
    .antxx { fill: #eef1f2 !important; }
    .circlexx, .subxx, .noxx, .unxx { opacity: 0 !important; }
    """
    coastal = [
        (1865, 500, 32, 14, "#5ec8f0", 0.9),  # Ganges–Brahmaputra delta
        (2020, 560, 30, 14, "#5ec8f0", 0.88),  # Mekong delta
        (1548, 500, 20, 12, "#5ec8f0", 0.85),  # Nile delta
        (1438, 265, 22, 12, "#5ec8f0", 0.9),  # Rhine / Netherlands
        (470, 470, 32, 14, "#5ec8f0", 0.85),  # Mississippi / Gulf
        (2080, 430, 40, 14, "#5ec8f0", 0.85),  # China coast
        (2100, 640, 24, 12, "#5ec8f0", 0.8),  # Jakarta / N Java
        (1488, 300, 16, 10, "#5ec8f0", 0.75),  # Po / Venice
        (2260, 720, 18, 10, "#5ec8f0", 0.6),  # N Australia
        (580, 620, 18, 10, "#5ec8f0", 0.65),  # Guianas / Orinoco
        (2180, 560, 16, 10, "#5ec8f0", 0.7),  # Philippines
        (500, 430, 22, 10, "#5ec8f0", 0.6),  # US Atlantic
        (1285, 575, 16, 10, "#5ec8f0", 0.55),  # Niger delta
        (2120, 720, 16, 10, "#5ec8f0", 0.55),  # N Australia / Gulf of Carpentaria
    ]
    riverine = [
        (1860, 470, 55, 10, "#3d8ec9", 0.75),  # Ganges corridor
        (2040, 400, 50, 10, "#3d8ec9", 0.7),  # Yangtze
        (430, 400, 55, 10, "#3d8ec9", 0.7),  # Mississippi
        (740, 700, 60, 16, "#3d8ec9", 0.55),  # Amazon floodplain
        (1360, 560, 40, 10, "#3d8ec9", 0.65),  # Niger / inland delta
        (1430, 280, 28, 8, "#3d8ec9", 0.6),  # Rhine–Danube
        (1780, 470, 28, 8, "#3d8ec9", 0.65),  # Indus
        (1480, 620, 22, 10, "#3d8ec9", 0.55),  # Nile / Sudd
        (700, 640, 22, 8, "#3d8ec9", 0.5),  # Magdalena / Orinoco
        (2050, 500, 22, 8, "#3d8ec9", 0.5),  # Pearl / Red
    ]
    overlay = ellipses(riverine + coastal).replace(
        "</g>",
        legend_box(
            [
                ("#3d8ec9", "riverine inundation"),
                ("#5ec8f0", "coastal inundation"),
            ],
            x=72,
            y=1218,
        )
        + "\n</g>",
        1,
    )
    render_svg(
        css,
        overlay,
        "flood-hazard-aqueduct.jpg",
        "Fix Planet overview · Aqueduct Floods hazard · not baseline water stress",
    )


def water_cards() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    groundwater_whymap()
    global_lakes_hydrolakes()
    lakes_wetlands_glwd()
    flood_hazard_aqueduct()


def process_owid(src: Path, dest: str, credit: str, crop: tuple[int, int, int, int]) -> None:
    im = Image.open(src).convert("RGB")
    im = im.crop(crop)
    im = fit_card(im)
    im = ImageEnhance.Contrast(im).enhance(1.08)
    im = credit_bar(im, credit, fill=(20, 28, 36))
    save_jpg(im, dest)


def process_hosted(src: Path, dest: str, credit: str, crop: tuple[int, int, int, int] | None = None) -> None:
    im = Image.open(src).convert("RGB")
    if crop:
        im = im.crop(crop)
    im = fit_card(im)
    im = credit_bar(im, credit)
    save_jpg(im, dest)


def armed_conflict() -> None:
    """Dot-density schematic of well-known recent reporting theaters — not event counts."""
    css = """
    .oceanxx { fill: #0b1822 !important; stroke: none !important; }
    .landxx { fill: #6d8899 !important; stroke: #243845 !important; stroke-width: 0.4 !important; }
    .antxx { fill: #d5dde2 !important; }
    """
    # SVG pixels on BlankMap-World — theaters of public reporting, not event tallies.
    theaters = [
        (1528, 258, 16, "#ff3b3b", 0.95),  # Ukraine
        (1556, 428, 9, "#ff5a2e", 0.95),  # Levant
        (1588, 400, 8, "#ff6b35", 0.8),  # Syria
        (1605, 418, 7, "#ff6b35", 0.75),  # Iraq
        (1625, 578, 10, "#ff4d4d", 0.85),  # Yemen
        (1485, 625, 13, "#ff2a2a", 0.9),  # Sudan
        (1565, 620, 9, "#ff6b35", 0.8),  # Ethiopia
        (1614, 678, 8, "#ff7a45", 0.8),  # Somalia
        (1470, 705, 11, "#ff4d4d", 0.85),  # eastern DRC
        (1420, 655, 7, "#ff7a45", 0.7),  # CAR
        (1321, 630, 9, "#ff6b35", 0.8),  # Nigeria
        (1265, 575, 8, "#ff7a45", 0.75),  # Mali
        (1295, 600, 7, "#ff7a45", 0.7),  # Burkina Faso
        (1355, 575, 7, "#ff7a45", 0.7),  # Niger
        (1993, 515, 11, "#ff3b3b", 0.9),  # Myanmar
        (1860, 430, 7, "#ff8a4d", 0.65),  # Afghanistan
        (1800, 450, 6, "#ff8a4d", 0.55),  # NW Pakistan
        (452, 417, 9, "#ff6b35", 0.8),  # Mexico
        (410, 390, 6, "#ff8a4d", 0.6),
        (744, 537, 6, "#ff6b35", 0.75),  # Haiti
        (1385, 500, 6, "#ff8a4d", 0.55),  # Libya
        (620, 640, 6, "#ff8a4d", 0.55),  # Colombia
        (1540, 270, 6, "#ffb347", 0.55),
        (2005, 545, 5, "#ffb347", 0.45),
        (680, 500, 4, "#ffb347", 0.4),
    ]
    render_svg(
        css,
        circles(theaters),
        "armed-conflict-events.jpg",
        "Fix Planet overview · reported-conflict theaters · not ACLED counts",
    )


def minerals() -> None:
    css = """
    .oceanxx { fill: #102029 !important; stroke: none !important; }
    .landxx { fill: #d7c4a3 !important; stroke: #8a7354 !important; stroke-width: 0.35 !important; }
    .antxx { fill: #e8e4dc !important; }
    """
    # Well-known mining districts (USGS-style points on the SVG), not reserve tonnages.
    gold = [
        (1488, 888, 10, "#e6b422", 0.95),  # Witwatersrand
        (300, 370, 9, "#e6b422", 0.92),  # Nevada
        (2280, 820, 9, "#e6b422", 0.92),  # WA goldfields
        (670, 705, 8, "#e6b422", 0.88),  # Peru
        (1280, 640, 8, "#e6b422", 0.88),  # Ghana
        (2050, 220, 7, "#e6b422", 0.75),  # Siberia
        (1810, 500, 6, "#e6b422", 0.7),
    ]
    copper = [
        (685, 815, 10, "#c45c26", 0.95),  # Chile
        (665, 735, 8, "#c45c26", 0.85),  # southern Peru
        (1480, 760, 9, "#c45c26", 0.92),  # Copperbelt
        (1495, 780, 7, "#c45c26", 0.8),
        (340, 420, 8, "#c45c26", 0.85),  # Arizona
        (2100, 680, 8, "#c45c26", 0.85),  # Indonesia
        (1980, 360, 6, "#c45c26", 0.7),
    ]
    iron = [
        (2220, 780, 10, "#5c4033", 0.92),  # Pilbara
        (780, 720, 9, "#5c4033", 0.88),  # Carajás
        (1840, 520, 7, "#5c4033", 0.75),  # India
        (2000, 380, 7, "#5c4033", 0.7),
        (1420, 180, 6, "#5c4033", 0.65),  # Nordics
    ]
    lithium = [
        (695, 830, 9, "#4ecdc4", 0.92),  # lithium triangle
        (705, 850, 7, "#4ecdc4", 0.8),
        (2260, 850, 8, "#4ecdc4", 0.85),  # Greenbushes area
        (310, 390, 6, "#4ecdc4", 0.65),
    ]
    rare_earth = [
        (1990, 340, 9, "#6b2d5b", 0.92),  # Bayan Obo
        (2270, 800, 6, "#6b2d5b", 0.7),
        (320, 400, 6, "#6b2d5b", 0.6),
    ]
    render_svg(
        css,
        circles(gold + copper + iron + lithium + rare_earth),
        "mineral-resources.jpg",
        "Fix Planet overview · USGS-style districts · gold, copper, iron, lithium, REE",
    )


def water_stress() -> None:
    """Regional bands from well-known arid vs water-rich geography (WRI Aqueduct theme)."""
    extreme = "sa ye om ae qa bh kw iq jo sy lb eg ly tn eh ps il".split()
    high = "dz ma ir pk in tm uz kg tj za es mx au sd so dj er af".split()
    medium = "us cn tr gr it pt cl ar ke tz ng th vn".split()
    low = "br co pe ve gy sr bo ec cd cg ga cm ca no se fi id pg nz is ru".split()
    css = f"""
    .oceanxx {{ fill: #0c3a4a !important; stroke: none !important; }}
    .landxx {{ fill: #d9c27a !important; stroke: #2a4a52 !important; stroke-width: 0.3 !important; }}
    .antxx {{ fill: #e8eef2 !important; }}
    {css_fills({
        "#1b7f6a": low,
        "#e6c229": medium,
        "#e07b00": high,
        "#c0392b": extreme,
    })}
    """
    render_svg(
        css,
        "",
        "water-stress.jpg",
        "Fix Planet overview · arid vs water-rich regions · based on WRI Aqueduct themes",
    )


def forest_loss() -> None:
    css = """
    .oceanxx { fill: #081612 !important; stroke: none !important; }
    .landxx { fill: #2f5a32 !important; stroke: #16301c !important; stroke-width: 0.3 !important; }
    .antxx { fill: #dfe8e4 !important; }
    """
    # Known Hansen / GFW loss frontiers as magenta patches — not annual pixel counts.
    blobs = [
        (700, 700, 70, 36, "#ff2d6a", 0.62),  # Amazon arc
        (780, 780, 36, 20, "#ff4d88", 0.45),  # Cerrado
        (1440, 690, 42, 24, "#ff2d6a", 0.55),  # Congo basin edge
        (1610, 800, 18, 12, "#ff4d88", 0.5),  # Madagascar
        (2080, 660, 34, 16, "#ff2d6a", 0.6),  # Borneo
        (2000, 675, 22, 12, "#ff4d88", 0.55),  # Sumatra
        (2280, 705, 20, 12, "#ff4d88", 0.45),  # New Guinea
        (2020, 555, 18, 12, "#ff6b9d", 0.45),  # Mekong
        (520, 230, 50, 18, "#ff6b9d", 0.38),  # boreal Canada
        (2000, 210, 55, 18, "#ff6b9d", 0.32),  # Siberia
    ]
    extra_green = css_fills(
        {
            "#1e7a3a": "br pe co ve gy sr bo cd cg ga cm id my pg".split(),
            "#4a7a3a": "ca ru se fi no us".split(),
        }
    )
    render_svg(
        css + extra_green,
        ellipses(blobs),
        "forest-cover-loss.jpg",
        "Fix Planet overview · tree-cover loss frontiers · based on Hansen / GFW",
    )


def world_countries() -> None:
    css = """
    .oceanxx { fill: #b9d4e3 !important; stroke: none !important; }
    .landxx { fill: #f4efe4 !important; stroke: #3d4a42 !important; stroke-width: 0.55 !important; }
    .antxx { fill: #f7f4ee !important; stroke: #9aa39c !important; }
    .circlexx, .subxx, .noxx, .unxx { opacity: 0 !important; }
    """
    render_svg(
        css,
        "",
        "world-countries.jpg",
        "Natural Earth / Wikimedia BlankMap-World · public domain · borders are a cartographic compromise",
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    process_owid(
        SRC / "owid-conflict-deaths.png",
        "battle-related-deaths.jpg",
        "Our World in Data · UCDP · CC BY · deaths in armed conflicts (map export)",
        (8, 128, 842, 502),
    )
    process_owid(
        SRC / "owid-homicide.png",
        "homicide-rates.jpg",
        "Our World in Data · UNODC · CC BY · intentional homicide rate (map export)",
        (8, 128, 842, 502),
    )
    process_owid(
        SRC / "owid-pm25.png",
        "air-quality-pm25.jpg",
        "Our World in Data · SatPM / Washington Univ. · CC BY · PM2.5 exposure (map export)",
        (8, 128, 842, 502),
    )
    process_owid(
        SRC / "owid-co2.png",
        "co2-emissions.jpg",
        "Our World in Data · Global Carbon Budget · CC BY · territorial CO₂ (map export)",
        (8, 128, 842, 502),
    )
    process_owid(
        SRC / "owid-protected.png",
        "protected-areas.jpg",
        "Our World in Data · WDPA / UNEP-WCMC / IUCN via World Bank · CC BY",
        (8, 128, 842, 502),
    )
    process_hosted(
        SRC / "lang-families.png",
        "language-families.jpg",
        "Wikimedia Commons · PiMaster3 · CC BY-SA 3.0 · primary language families",
        (0, 0, 1520, 740),
    )
    process_hosted(
        SRC / "religion.png",
        "world-religions.jpg",
        "Wikimedia Commons · TheGreenEditor · public domain · majority-religion regions (not Pew artwork)",
        (0, 36, 1336, 680),
    )
    process_hosted(
        SRC / "eia-shale.png",
        "oil-gas-reserves.jpg",
        "U.S. EIA · assessed shale-gas basins · public domain (U.S. government work)",
        (0, 28, 1280, 700),
    )
    process_hosted(
        SRC / "pop-density.png",
        "population-density.jpg",
        "Wikimedia Commons · Junuxx · CC BY-SA 3.0 · country/region population density",
    )
    armed_conflict()
    minerals()
    water_stress()
    forest_loss()
    world_countries()


def organized_crime_index() -> None:
    """Licensed port photo — criminal-markets context, not the GI-TOC heatmap."""
    process_hosted(
        SRC / "le-havre-containers.jpg",
        "organized-crime-index.jpg",
        "Wikimedia Commons · Philippe Alès · CC BY-SA 3.0 · Le Havre container terminal",
        (0, 352, 4288, 2496),
    )


def trafficking_in_persons() -> None:
    """Licensed awareness photo — not a UNODC GLOTIP plate, not victims."""
    process_hosted(
        SRC / "redeemer-blue-tip.jpg",
        "trafficking-in-persons.jpg",
        "Agência Brasil · Vladimir Platonow · CC BY 3.0 BR · lit against trafficking",
        (0, 40, 4000, 2040),
    )


def corruption_perceptions_index(src: Path | None = None) -> None:
    """CPI 2025 Commons choropleth (CC BY-SA 4.0) — not a homicide remix."""
    candidate = src or SRC / "cpi-2025.svg"
    if not candidate.exists():
        raise SystemExit(f"missing {candidate}")
    if candidate.suffix.lower() == ".svg":
        png_path = Path("/tmp/map-src/cpi-2025.png")
        png_path.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            ["rsvg-convert", "-w", "2754", "-h", "1398", "-o", str(png_path), str(candidate)],
            check=True,
        )
        im = Image.open(png_path).convert("RGB")
    else:
        im = Image.open(candidate).convert("RGB")
    im = fit_card(im)
    im = credit_bar(
        im,
        "Wikimedia Commons · Cnscrptr & ConnerMiner · CC BY-SA 4.0 · CPI 2025 (TI data)",
        fill=(20, 28, 36),
    )
    save_jpg(im, "corruption-perceptions-index.jpg")


def crime_cards() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    organized_crime_index()
    trafficking_in_persons()
    src = SRC / "cpi-2025.svg"
    if src.exists() or (SRC / "cpi-2025.png").exists():
        corruption_perceptions_index(src if src.exists() else SRC / "cpi-2025.png")


if __name__ == "__main__":
    import sys

    if sys.argv[1:] == ["crime"]:
        crime_cards()
    elif sys.argv[1:] == ["water"]:
        water_cards()
    else:
        main()
