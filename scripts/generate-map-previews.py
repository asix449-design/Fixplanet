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


def legend_bar(
    im: Image.Image,
    swatches: list[tuple[tuple[int, int, int], str]],
    credit: str,
    fill: tuple[int, int, int] = (18, 24, 22),
) -> Image.Image:
    """Swatch row plus credit. Labels name the overview bands, not publisher scores."""
    im = im.convert("RGB").copy()
    draw = ImageDraw.Draw(im)
    bar_h = 58
    draw.rectangle((0, im.height - bar_h, im.width, im.height), fill=fill)
    font = load_font(15)
    x = 14
    y = im.height - bar_h + 8
    for color, label in swatches:
        draw.rectangle((x, y, x + 18, y + 14), fill=color, outline=(236, 240, 234))
        draw.text((x + 24, y - 2), label, fill=(236, 240, 234), font=font)
        bbox = draw.textbbox((0, 0), label, font=font)
        x += 24 + (bbox[2] - bbox[0]) + 22
    draw.text((14, im.height - 26), credit, fill=(236, 240, 234), font=font)
    return im


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


def render_svg_image(theme_css: str, overlays: str) -> Image.Image:
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
    im = fit_card(Image.open(png_path).convert("RGB"))
    tmp_path.unlink(missing_ok=True)
    png_path.unlink(missing_ok=True)
    return im


def render_svg(theme_css: str, overlays: str, dest_name: str, credit: str | None = None) -> None:
    im = render_svg_image(theme_css, overlays)
    if credit:
        im = credit_bar(im, credit)
    save_jpg(im, dest_name)


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


def conflicts_schematic(
    groups: dict[str, list[str]],
    ocean: str,
    land: str,
    ant: str,
    stroke: str,
    dest: str,
    swatches: list[tuple[tuple[int, int, int], str]],
    credit: str,
) -> None:
    """Country bands for a Fix Planet overview. Unlisted countries stay the land colour."""
    css = f"""
    .oceanxx {{ fill: {ocean} !important; stroke: none !important; }}
    .landxx {{ fill: {land} !important; stroke: {stroke} !important; stroke-width: 0.28 !important; }}
    .antxx {{ fill: {ant} !important; }}
    .circlexx, .subxx, .noxx, .unxx {{ opacity: 0 !important; }}
    {css_fills(groups)}
    """
    im = render_svg_image(css, "")
    im = legend_bar(im, swatches, credit)
    save_jpg(im, dest)


def global_peace_index() -> None:
    """Peacefulness palette. Bands are orientation, not GPI 2026 scores."""
    more = "is ie nz at sg ch pt si jp cz dk fi no se nl ca au".split()
    less = "ua ye sd ss so cd mm sy af ml bf ne ng et ly ht ps il iq".split()
    conflicts_schematic(
        {"#1e8a4a": more, "#c0392b": less},
        ocean="#e4eef2",
        land="#d9ded8",
        ant="#f4f7f8",
        stroke="#8a938c",
        dest="global-peace-index.jpg",
        swatches=[
            ((30, 138, 74), "More peaceful"),
            ((192, 57, 43), "Less peaceful"),
            ((217, 222, 216), "Not classed here"),
        ],
        credit="Fix Planet overview · peacefulness bands · not GPI scores · IEP / Vision of Humanity",
    )


def fragile_states_index() -> None:
    """Fragility palette. Darker = higher fragility on this overview, not FSI scores."""
    higher = "ye so ss sd sy cd af cf td ht ml ly iq mm bf ne ng et".split()
    lower = "is no fi se dk ch nz ie lu at ca au nl sg jp pt si".split()
    conflicts_schematic(
        {"#5c2e24": higher, "#f4e4c4": lower},
        ocean="#c5d0d4",
        land="#d4cdc2",
        ant="#f7f4ee",
        stroke="#8d8478",
        dest="fragile-states-index.jpg",
        swatches=[
            ((92, 46, 36), "Higher fragility"),
            ((244, 228, 196), "Lower fragility"),
            ((212, 205, 194), "Not classed here"),
        ],
        credit="Fix Planet overview · fragility bands · not FSI scores · Fund for Peace",
    )


def military_expenditure_sipri() -> None:
    """Spending level (not share of GDP). Darker = larger budgets. Not Milex figures."""
    largest = "us cn ru".split()
    large = "in sa gb de fr jp kr ua".split()
    conflicts_schematic(
        {"#0a335c": largest, "#3d78b4": large},
        ocean="#8aa4b8",
        land="#e3e8ee",
        ant="#f4f7fa",
        stroke="#6d7c88",
        dest="military-expenditure-sipri.jpg",
        swatches=[
            ((10, 51, 92), "Largest spenders"),
            ((61, 120, 180), "Other large spenders"),
            ((227, 232, 238), "Not classed here"),
        ],
        credit="Fix Planet overview · spending level · not share of GDP · not SIPRI Milex figures",
    )


def conflict_barometer_hiik() -> None:
    """Intensity bands, not event pins and not one class for every conflict in a country."""
    war = "ua sd mm ye sy so cd".split()
    violent = "ml bf ne ng af iq ly ht cf ps il et".split()
    conflicts_schematic(
        {"#8e1e32": war, "#e07a2f": violent},
        ocean="#243140",
        land="#c9cfd4",
        ant="#e8eef2",
        stroke="#5c6870",
        dest="conflict-barometer-hiik.jpg",
        swatches=[
            ((142, 30, 50), "War-intensity band"),
            ((224, 122, 47), "Violent-conflict band"),
            ((201, 207, 212), "Not classed here"),
        ],
        credit="Fix Planet overview · intensity bands · not HIIK scores · not ACLED pins",
    )


def conflicts_cards() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    global_peace_index()
    fragile_states_index()
    military_expenditure_sipri()
    conflict_barometer_hiik()


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
    elif sys.argv[1:] == ["conflicts"]:
        conflicts_cards()
    else:
        main()
