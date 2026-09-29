#!/usr/bin/env python3
"""Text-free Crime-shelf figures for the 28 Sep 2026 pack.

No titles, legends, series names, axis titles, or stamps are drawn.
Years and tick numbers are the only glyphs. Raw downloads stay outside
the repo. Outputs land in public/images/maps/.
"""

from __future__ import annotations

import json
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import openpyxl
from matplotlib.collections import PolyCollection
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
SRC = Path("/tmp/crime-src")
OUT = ROOT / "public" / "images" / "maps"
NE_PATH = SRC / "ne_50m_admin_0_countries.geojson"

# EUDA European Drug Report 2026, table EDR26-Cocaine-6
# (edr2026-cocaine-table-8_en.csv), tonnes of cocaine seized.
# Order is the CSV "Country" rows used as stacked series.
COCAINE_YEARS = list(range(2014, 2025))
COCAINE = [
    ("Spain", [21.7, 21.6, 15.6, 41, 48.5, 37.9, 36.9, 48.9, 58.3, 118.3, 124]),
    ("France", [6.9, 10.9, 8.5, 17.5, 16.4, 15.8, 13.1, 26.5, 27.7, 23.2, 53.5]),
    ("Belgium", [9.3, 17.5, 30.3, 44.8, 53, 65.2, 70.3, 96.3, 110.9, 123, 44.7]),
    ("Netherlands", [8.8, 12, 15.6, 10.2, 40.1, 43.8, 48.9, 71.8, 51.4, 59.1, 37.6]),
    ("Portugal", [3.7, 6, 1, 2.7, 5.5, 10.6, 10.1, 9.9, 16.5, 21.7, 23]),
    ("Italy", [3.9, 4, 4.1, 4.1, 3.6, 8.2, 13.4, 20.1, 26.1, 17.8, 11]),
    ("Türkiye", [0.4, 0.5, 0.8, 1.5, 1.5, 1.6, 2, 2.8, 2.3, 2.5, 2.5]),
    ("Other countries", [3.8, 5.4, 5.9, 10.2, 5.6, 18.7, 18.5, 30, 31.9, 58.4, 36.7]),
]
COCAINE_COLORS = [
    "#1b4f72",
    "#148f77",
    "#b9770e",
    "#6c3483",
    "#1a5276",
    "#c0392b",
    "#d4ac0d",
    "#7f8c8d",
]

# ILO / Walk Free / IOM, Global Estimates of Modern Slavery (2022), Figure 1
# (PDF page 29). Millions, then prevalence per 1,000 population.
# Forced labour 27.6 and forced marriage 22.0 are the report's split of the
# same 49.6 million total (report pages 11 and 30).
SLAVERY_SPLIT = [("forced-labour", 27.6), ("forced-marriage", 22.0)]
SLAVERY_ROWS = [
    ("world", 49.6, 6.4),
    ("male", 22.8, 5.8),
    ("female", 26.7, 6.9),
    ("adults", 37.3, 6.9),
    ("children", 12.3, 5.2),
    ("africa", 7.0, 5.2),
    ("americas", 5.1, 5.0),
    ("arab", 1.7, 10.1),
    ("asia-pacific", 29.3, 6.8),
    ("europe-ca", 6.4, 6.9),
    ("high", 7.2, 5.9),
    ("upper-middle", 12.7, 4.4),
    ("lower-middle", 23.0, 7.8),
    ("low", 6.6, 9.6),
]

# US State Department INCSR 2025 Vol. 2, pp. 14–15.
# "Major Money Laundering Jurisdictions in 2024" (81).
ML_ISO = {
    "AFG", "ALB", "DZA", "ATG", "ARG", "ABW", "BHS", "BRB", "BEL", "BLZ",
    "BOL", "BRA", "VGB", "MMR", "CPV", "KHM", "CAN", "CYM", "CHN", "COL",
    "CRI", "CUW", "CYP", "DMA", "DOM", "ECU", "SLV", "DEU", "GHA", "GTM",
    "GNB", "GUY", "HTI", "HND", "HKG", "IND", "IDN", "IRN", "IRQ", "ITA",
    "JAM", "KAZ", "KEN", "KGZ", "LAO", "LBR", "MAC", "MYS", "MEX", "MOZ",
    "NLD", "NIC", "NGA", "PAK", "PAN", "PRY", "PER", "PHL", "KNA", "LCA",
    "VCT", "SEN", "SXM", "ZAF", "ESP", "SUR", "SYR", "TJK", "TWN", "TZA",
    "THA", "TTO", "TUR", "TKM", "UKR", "ARE", "GBR", "USA", "UZB", "VEN",
    "VNM",
}
# Named small territories, drawn as dots even when a polygon exists.
ML_DOTS = {
    "ABW": (12.52, -69.97),
    "CUW": (12.17, -68.99),
    "SXM": (18.04, -63.06),
    "CYM": (19.31, -81.25),
    "VGB": (18.42, -64.62),
    "HKG": (22.32, 114.17),
    "MAC": (22.16, 113.54),
}

CHART_BG = "#f7f4ee"
OCEAN = "#d5e2ea"
LAND = "#e7e2d8"
NODATA = "#d5d0c8"
ML_HIT = "#6c2c5a"

# World Bank WGI 2026, sheet rl, Governance score (0-100), year 2025.
WGI_BREAKS = [0, 30, 45, 60, 75, 90, 100]
WGI_COLORS = ["#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c", "#08306b"]


def load_countries() -> list[dict]:
    geo = json.loads(NE_PATH.read_text())
    out = []
    for feature in geo["features"]:
        props = feature["properties"]
        code = props.get("ISO_A3_EH") or props.get("ADM0_A3") or ""
        if code in {"-99", "NAN", None}:
            code = props.get("ADM0_A3") or ""
        if code == "KOS":
            code = "XKX"
        geom = feature["geometry"]
        if geom["type"] == "Polygon":
            parts = [geom["coordinates"]]
        elif geom["type"] == "MultiPolygon":
            parts = geom["coordinates"]
        else:
            continue
        polygons = []
        for poly in parts:
            ring = np.asarray(poly[0], dtype=np.float64)
            if ring.shape[0] < 4:
                continue
            polygons.append(ring)
        if polygons and code and code != "-99":
            out.append({"code": code, "polygons": polygons})
    return out


def project(lon: np.ndarray, lat: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    # Equirectangular. Antarctica is clipped so the inhabited world fills the frame.
    lat = np.clip(lat, -58, 84)
    return lon, lat


def split_france_overseas(countries: list[dict]) -> list[dict]:
    """Give French Guiana, Martinique and Réunion their own codes.

    Natural Earth draws them as parts of France. WGI scores those three
    separately. Guadeloupe and Mayotte stay with France; WGI has no row
    for them.
    """
    out = []
    for country in countries:
        if country["code"] != "FRA":
            out.append(country)
            continue
        buckets: dict[str, list] = {"FRA": [], "GUF": [], "MTQ": [], "REU": []}
        for ring in country["polygons"]:
            lon = float(ring[:, 0].mean())
            lat = float(ring[:, 1].mean())
            if -56 < lon < -50 and 1 < lat < 7:
                buckets["GUF"].append(ring)
            elif -62.2 < lon < -60.5 and 14.2 < lat < 15.2:
                buckets["MTQ"].append(ring)
            elif 54 < lon < 57 and -22 < lat < -20:
                buckets["REU"].append(ring)
            else:
                buckets["FRA"].append(ring)
        for code, rings in buckets.items():
            if rings:
                out.append({"code": code, "polygons": rings})
    return out


def draw_world(
    path: Path,
    paint,
    dots: list[tuple[float, float, str]] | None = None,
    width=1800,
    height=920,
    prepare=None,
):
    countries = load_countries()
    if prepare:
        countries = prepare(countries)
    fig = plt.figure(figsize=(width / 100, height / 100), dpi=100)
    fig.patch.set_facecolor(OCEAN)
    ax = fig.add_axes([0.01, 0.02, 0.98, 0.96])
    ax.set_xlim(-180, 180)
    ax.set_ylim(-58, 84)
    ax.set_aspect("equal")
    ax.axis("off")
    ax.set_facecolor(OCEAN)
    polys = []
    colors = []
    for country in countries:
        color = paint(country["code"])
        for ring in country["polygons"]:
            x, y = project(ring[:, 0], ring[:, 1])
            polys.append(np.column_stack([x, y]))
            colors.append(color)
    coll = PolyCollection(
        polys,
        facecolors=colors,
        edgecolors=(0.55, 0.52, 0.48, 0.55),
        linewidths=0.25,
        antialiased=False,
    )
    ax.add_collection(coll)
    if dots:
        for lat, lon, color in dots:
            ax.scatter(
                [lon],
                [lat],
                s=160,
                c=color,
                edgecolors="white",
                linewidths=1.3,
                zorder=5,
            )
    fig.savefig(path, dpi=100, facecolor=fig.get_facecolor())
    plt.close(fig)
    im = Image.open(path).convert("RGB")
    if im.size != (width, height):
        im = im.resize((width, height), Image.Resampling.LANCZOS)
    im.save(path, "PNG", optimize=True)
    return im.size


def crop_prison():
    src = Image.open(SRC / "prison.png").convert("RGB")
    # Title/subtitle end by y=66. Colour-bar labels start at y=480.
    # Footer credit and the OWID stamp sit below that.
    cropped = src.crop((48, 72, 836, 456))
    # Pad so the frame colour is the chart's own white, not a cut edge.
    pad = 12
    canvas = Image.new("RGB", (cropped.width + pad * 2, cropped.height + pad * 2), (255, 255, 255))
    canvas.paste(cropped, (pad, pad))
    out = OUT / "prison-population-rate.jpg"
    canvas.save(out, "JPEG", quality=92, optimize=True)
    return out, canvas.size


def draw_cocaine():
    years = np.array(COCAINE_YEARS)
    series = [np.array(values, dtype=float) for _, values in COCAINE]
    total = np.sum(series, axis=0)
    fig = plt.figure(figsize=(16, 9), dpi=100)
    fig.patch.set_facecolor(CHART_BG)
    ax = fig.add_axes([0.08, 0.12, 0.88, 0.82])
    ax.set_facecolor(CHART_BG)
    bottom = np.zeros_like(total)
    for values, color in zip(series, COCAINE_COLORS):
        ax.bar(years, values, bottom=bottom, width=0.72, color=color, linewidth=0)
        bottom += values
    ax.set_xlim(2013.4, 2024.6)
    ax.set_ylim(0, 500)
    ax.set_xticks(years)
    ax.set_yticks([0, 100, 200, 300, 400, 500])
    ax.tick_params(axis="both", labelsize=16, colors="#1c1c1c", length=0)
    ax.yaxis.grid(True, color="#e0dbd2", linewidth=0.8)
    ax.set_axisbelow(True)
    for spine in ax.spines.values():
        spine.set_visible(False)
    fig.savefig(OUT / "drug-trafficking-flows.png", dpi=100, facecolor=fig.get_facecolor())
    plt.close(fig)
    im = Image.open(OUT / "drug-trafficking-flows.png").convert("RGB")
    im.save(OUT / "drug-trafficking-flows.png", "PNG", optimize=True)
    print("cocaine totals", [round(float(v), 1) for v in total], "max", float(total.max()))
    return im.size


def draw_slavery():
    width, height = 1600, 1180
    bg = (247, 244, 238)
    im = Image.new("RGB", (width, height), bg)
    draw = ImageDraw.Draw(im)
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 20)
    ink = (28, 28, 28)
    split_colors = [(140, 47, 57), (26, 107, 122)]
    million_color = (140, 47, 57)
    rate_color = (26, 107, 122)

    def bar(x, y, w, h, value, scale, color):
        length = max(2, int(w * (value / scale)))
        draw.rectangle([x, y, x + length, y + h], fill=color)
        label = f"{value:.1f}" if isinstance(value, float) else str(value)
        draw.text((x + length + 8, y - 2), label, fill=ink, font=font)

    # Split of the 49.6 million total.
    y = 36
    for (key, value), color in zip(SLAVERY_SPLIT, split_colors):
        bar(70, y, 620, 28, value, 49.6, color)
        y += 48

    # Figure 1, millions (left) and per 1,000 (right). Index numbers match the HTML legend.
    left_x, right_x = 70, 860
    y = 180
    for index, (_key, millions, rate) in enumerate(SLAVERY_ROWS, start=1):
        draw.text((28, y - 1), str(index), fill=ink, font=font)
        bar(left_x, y, 520, 22, millions, 49.6, million_color)
        bar(right_x, y, 420, 22, rate, 10.1, rate_color)
        y += 64
    out = OUT / "modern-slavery.png"
    im.save(out, "PNG", optimize=True)
    return im.size


def wgi_color(score: float | None) -> str:
    if score is None:
        return NODATA
    for limit, color in zip(WGI_BREAKS[1:], WGI_COLORS):
        if score < limit or (limit == 100 and score <= 100):
            return color
    return WGI_COLORS[-1]


def load_wgi() -> dict[str, float]:
    wb = openpyxl.load_workbook(SRC / "wgi.xlsx", read_only=True, data_only=True)
    ws = wb["rl"]
    rows = ws.iter_rows(values_only=True)
    next(rows)
    scores = {}
    for row in rows:
        if row[5] != 2025 or row[6] != "rl":
            continue
        scores[str(row[2])] = float(row[12])
    return scores


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    assert len(ML_ISO) == 81, len(ML_ISO)
    prison_path, prison_size = crop_prison()
    print("prison", prison_size, prison_path)
    print("cocaine", draw_cocaine())
    print("slavery", draw_slavery())

    countries = load_countries()
    codes = {c["code"] for c in countries}
    missing = sorted(ML_ISO - codes)
    print("ml polygons missing", missing)
    dots = []
    dotted = set()
    for iso, (lat, lon) in ML_DOTS.items():
        dots.append((lat, lon, ML_HIT))
        dotted.add(iso)
    for country in countries:
        if country["code"] not in ML_ISO or country["code"] in dotted:
            continue
        pts = np.concatenate(country["polygons"], axis=0)
        span = max(pts[:, 0].max() - pts[:, 0].min(), pts[:, 1].max() - pts[:, 1].min())
        if span < 1.6:
            dots.append((float(pts[:, 1].mean()), float(pts[:, 0].mean()), ML_HIT))
            dotted.add(country["code"])
    print("ml dots", len(dots), sorted(dotted))
    size = draw_world(
        OUT / "basel-aml-index.png",
        lambda code: ML_HIT if code in ML_ISO else LAND,
        dots=dots,
    )
    print("ml map", size)

    scores = load_wgi()
    print("wgi economies", len(scores))
    scored_countries = split_france_overseas(countries)
    codes = {c["code"] for c in scored_countries}
    unmatched = sorted(set(scores) - codes)
    print("wgi without polygon", unmatched)
    wgi_dots = []
    for country in scored_countries:
        score = scores.get(country["code"])
        if score is None:
            continue
        pts = np.concatenate(country["polygons"], axis=0)
        span = max(pts[:, 0].max() - pts[:, 0].min(), pts[:, 1].max() - pts[:, 1].min())
        if span < 1.6:
            wgi_dots.append((float(pts[:, 1].mean()), float(pts[:, 0].mean()), wgi_color(score)))
    print("wgi dots", len(wgi_dots))
    bins = [0] * len(WGI_COLORS)
    for value in scores.values():
        for i, limit in enumerate(WGI_BREAKS[1:]):
            if value < limit or (i == len(WGI_COLORS) - 1 and value <= 100):
                bins[i] += 1
                break
    print("wgi bin counts", list(zip(WGI_BREAKS[1:], bins)))
    size = draw_world(
        OUT / "rule-of-law-index.png",
        lambda code: wgi_color(scores.get(code)),
        dots=wgi_dots,
        prepare=split_france_overseas,
    )
    print("wgi map", size)


if __name__ == "__main__":
    main()
