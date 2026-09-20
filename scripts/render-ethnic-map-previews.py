#!/usr/bin/env python3
"""Render Maps → Ethnolinguistic preview JPEGs (1600×800) from CC / PD sources.

Outputs:
  public/images/maps/endangered-languages-unesco.jpg
  public/images/maps/wals-language-structures.jpg
  public/images/maps/language-areas-asher-moseley.jpg
  public/images/maps/endangered-languages-project.jpg

Run from repo root: python3 scripts/render-ethnic-map-previews.py
"""

from __future__ import annotations

import csv
import hashlib
import json
import math
from colorsys import hsv_to_rgb
from pathlib import Path
from urllib.request import Request, urlopen

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.collections import PatchCollection
from matplotlib.patches import Circle, Polygon
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/maps"
CACHE = Path("/tmp/ethnic-src")
CACHE.mkdir(parents=True, exist_ok=True)

UA = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
)

W, H = 1600, 800
FOOTER_H = 34
DPI = 100
MAP_H = H - FOOTER_H

LAND_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/"
    "ne_110m_land.geojson"
)

UNESCO_DEGREES = [
    ("Vulnerable", "#F6E05E"),
    ("Definitely endangered", "#ED8936"),
    ("Severely endangered", "#E53E3E"),
    ("Critically endangered", "#9B2C2C"),
    ("Extinct", "#1A202C"),
]

UNESCO_CLUSTERS = [
    (-122, 48, 7, (0, 1, 2, 3)),
    (-102, 20, 6, (1, 2, 3)),
    (-70, -16, 7, (0, 1, 2, 3)),
    (-62, -6, 6, (1, 2, 3)),
    (-7, 53, 5, (2, 3, 4)),
    (18, 66, 5, (1, 2, 3)),
    (44, 42, 5, (1, 2, 3)),
    (95, 62, 7, (1, 2, 3, 4)),
    (142, 43, 4, (2, 3, 4)),
    (24, -24, 5, (0, 1, 2)),
    (38, 8, 6, (0, 1, 2)),
    (80, 30, 5, (1, 2, 3)),
    (102, 20, 5, (1, 2, 3)),
    (140, -6, 9, (0, 1, 2, 3)),
    (134, -22, 7, (1, 2, 3, 4)),
    (172, -41, 4, (1, 2, 3)),
    (-157, 20.5, 4, (2, 3, 4)),
]

ELP_DEGREES = [
    ("At risk", "#9AE6B4"),
    ("Threatened", "#38B2AC"),
    ("Endangered", "#4299E1"),
    ("Severely endangered", "#805AD5"),
    ("Critically endangered", "#D53F8C"),
    ("Dormant / awakening", "#E2E8F0"),
]

ELP_CLUSTERS = [
    (-142, 64, 6, (2, 3, 4, 5)),
    (-124, 46, 6, (1, 2, 3, 5)),
    (-90, 16, 6, (1, 2, 3)),
    (-72, -14, 6, (0, 1, 2, 3)),
    (-54, 4, 5, (1, 2, 3)),
    (-6, 54, 4, (3, 4, 5)),
    (14, 64, 5, (2, 3, 4)),
    (44, 42, 5, (1, 2, 3)),
    (108, 60, 6, (2, 3, 4, 5)),
    (34, 2, 6, (0, 1, 2)),
    (46, -18, 5, (1, 2, 3)),
    (86, 27, 5, (1, 2, 3)),
    (124, 8, 6, (0, 1, 2, 3)),
    (144, -6, 8, (0, 1, 2, 3)),
    (132, -24, 7, (2, 3, 4, 5)),
    (173, -42, 4, (2, 3, 5)),
]

WALS_COLORS = {
    "1": "#1D4ED8",
    "2": "#93C5FD",
    "3": "#E2E8F0",
    "4": "#E879F9",
    "5": "#BE123C",
}
WALS_LABELS = [
    ("Small", "#1D4ED8"),
    ("Mod. small", "#93C5FD"),
    ("Average", "#E2E8F0"),
    ("Mod. large", "#E879F9"),
    ("Large", "#BE123C"),
]


def fetch(url: str, dest: Path) -> Path:
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    req = Request(url, headers={"User-Agent": UA})
    with urlopen(req, timeout=180) as res:
        dest.write_bytes(res.read())
    print(f"downloaded {dest.name} ({dest.stat().st_size // 1024} KB)")
    return dest


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    path = Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
    if path.exists():
        return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def credit_bar(im: Image.Image, text: str) -> Image.Image:
    im = im.convert("RGB").copy()
    draw = ImageDraw.Draw(im)
    draw.rectangle((0, im.height - FOOTER_H, im.width, im.height), fill=(18, 24, 22))
    draw.text((16, im.height - 25), text, fill=(236, 240, 234), font=load_font(15))
    return im


def paint_legend(im: Image.Image, title: str, items: list[tuple[str, str]], box_fill: tuple[int, int, int]) -> Image.Image:
    im = im.convert("RGB").copy()
    draw = ImageDraw.Draw(im)
    title_font = load_font(15)
    item_font = load_font(13)
    pad = 12
    swatch = 11
    gap = 16
    title_w = draw.textlength(title, font=title_font)
    item_w = sum(swatch + 6 + draw.textlength(label, font=item_font) + gap for label, _ in items)
    box_w = int(max(title_w, item_w) + pad * 2)
    box_h = 52
    x0, y0 = 18, MAP_H - box_h - 16
    draw.rounded_rectangle((x0, y0, x0 + box_w, y0 + box_h), radius=8, fill=box_fill)
    draw.text((x0 + pad, y0 + 6), title, fill=(247, 250, 252), font=title_font)
    x = x0 + pad
    y = y0 + 30
    for label, color in items:
        draw.ellipse((x, y, x + swatch, y + swatch), fill=color, outline=(247, 250, 252))
        draw.text((x + swatch + 6, y - 2), label, fill=(237, 242, 247), font=item_font)
        x += swatch + 6 + int(draw.textlength(label, font=item_font)) + gap
    return im


def save_jpg(im: Image.Image, name: str) -> None:
    dest = OUT / name
    im.convert("RGB").save(dest, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"wrote {dest.name} ({dest.stat().st_size // 1024} KB)")


def load_land() -> list[list[tuple[float, float]]]:
    path = fetch(LAND_URL, CACHE / "ne_110m_land.geojson")
    data = json.loads(path.read_text(encoding="utf-8"))
    rings: list[list[tuple[float, float]]] = []
    for feat in data["features"]:
        geom = feat["geometry"]
        coords = geom["coordinates"]
        if geom["type"] == "Polygon":
            rings.append([(float(x), float(y)) for x, y in coords[0]])
        elif geom["type"] == "MultiPolygon":
            for poly in coords:
                rings.append([(float(x), float(y)) for x, y in poly[0]])
    return rings


def world_ax(fig, sea: str, land: str, land_edge: str, rings: list):
    ax = fig.add_axes((0, 0, 1, 1))
    fig.patch.set_facecolor(sea)
    ax.set_facecolor(sea)
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_axis_off()
    for ring in rings:
        xs = [p[0] for p in ring]
        ys = [p[1] for p in ring]
        ax.fill(xs, ys, facecolor=land, edgecolor=land_edge, linewidth=0.35, zorder=1, closed=True)
    return ax


def fig_to_image(fig) -> Image.Image:
    fig.canvas.draw()
    w, h = fig.canvas.get_width_height()
    buf = fig.canvas.buffer_rgba()
    im = Image.frombuffer("RGBA", (w, h), buf, "raw", "RGBA", 0, 1).convert("RGB")
    plt.close(fig)
    return im.resize((W, MAP_H), Image.Resampling.LANCZOS)


def jitter(i: int, n: int, spread: float) -> tuple[float, float]:
    angle = (i * 2.399963) % 6.283185
    radius = spread * ((i + 1) / n) ** 0.55
    return radius * math.cos(angle), radius * math.sin(angle)


def stack_map(map_im: Image.Image, credit: str) -> Image.Image:
    canvas = Image.new("RGB", (W, H), (18, 24, 22))
    canvas.paste(map_im, (0, 0))
    return credit_bar(canvas, credit)


def unesco_preview(rings: list) -> None:
    fig = plt.figure(figsize=(W / DPI, MAP_H / DPI), dpi=DPI)
    ax = world_ax(fig, "#1B3A4B", "#D9CDB8", "#8A7B66", rings)
    for lon, lat, n, degrees in UNESCO_CLUSTERS:
        for i in range(n):
            dx, dy = jitter(i, n, 6.5)
            color = UNESCO_DEGREES[degrees[i % len(degrees)]][1]
            ax.add_patch(
                Circle(
                    (lon + dx, lat + dy),
                    1.55,
                    facecolor=color,
                    edgecolor="#1A202C",
                    linewidth=0.4,
                    zorder=3,
                )
            )
    im = paint_legend(
        stack_map(fig_to_image(fig), "UNESCO / Moseley (ed.) 2010  ·  Atlas degrees schematic  ·  not a census of peoples"),
        "UNESCO Atlas degrees  (vulnerable → extinct)",
        UNESCO_DEGREES,
        (15, 23, 42),
    )
    save_jpg(im, "endangered-languages-unesco.jpg")


def elp_preview(rings: list) -> None:
    fig = plt.figure(figsize=(W / DPI, MAP_H / DPI), dpi=DPI)
    ax = world_ax(fig, "#0B1220", "#3D4A63", "#718096", rings)
    for lon, lat, n, degrees in ELP_CLUSTERS:
        for i in range(n):
            dx, dy = jitter(i + 4, n, 6.2)
            color = ELP_DEGREES[degrees[i % len(degrees)]][1]
            ax.add_patch(
                Circle(
                    (lon + dx, lat + dy),
                    1.4,
                    facecolor=color,
                    edgecolor="#0B1220",
                    linewidth=0.35,
                    zorder=3,
                )
            )
    im = paint_legend(
        stack_map(
            fig_to_image(fig),
            "Endangered Languages Project  ·  catalogue schematic  ·  not UNESCO Atlas degrees",
        ),
        "ELP catalogue vitality  (not the 2010 UN atlas)",
        ELP_DEGREES,
        (24, 16, 48),
    )
    save_jpg(im, "endangered-languages-project.jpg")


def wals_preview(rings: list) -> None:
    langs_path = CACHE / "wals-languages.csv"
    values_path = CACHE / "wals-values.csv"
    coords: dict[str, tuple[float, float]] = {}
    with langs_path.open(encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            try:
                coords[row["ID"]] = (float(row["Longitude"]), float(row["Latitude"]))
            except (KeyError, TypeError, ValueError):
                continue
    points: list[tuple[float, float, str]] = []
    with values_path.open(encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if row.get("Parameter_ID") != "1A":
                continue
            loc = coords.get(row.get("Language_ID", ""))
            color = WALS_COLORS.get(str(row.get("Value", "")))
            if loc and color:
                points.append((loc[0], loc[1], color))
    fig = plt.figure(figsize=(W / DPI, MAP_H / DPI), dpi=DPI)
    ax = world_ax(fig, "#D5E3EC", "#F7F1E6", "#6B6258", rings)
    order = {color: i for i, color in enumerate(c for _, c in WALS_LABELS)}
    points.sort(key=lambda p: order.get(p[2], 0))
    xs, ys, cs = zip(*points) if points else ([], [], [])
    ax.scatter(xs, ys, c=cs, s=28, linewidths=0.35, edgecolors="#1A202C", zorder=3)
    im = paint_legend(
        stack_map(
            fig_to_image(fig),
            "WALS Online  ·  Dryer & Haspelmath / Max Planck EVA  ·  CC BY 4.0  ·  feature 1A",
        ),
        "WALS 1A  ·  Consonant inventories (Maddieson)",
        WALS_LABELS,
        (26, 32, 44),
    )
    save_jpg(im, "wals-language-structures.jpg")


def _iter_polys(geom: dict):
    gtype = geom.get("type")
    coords = geom.get("coordinates") or []
    if gtype == "Polygon":
        if coords:
            yield coords[0]
    elif gtype == "MultiPolygon":
        for poly in coords:
            if poly:
                yield poly[0]


def area_color(key: str) -> str:
    digest = hashlib.md5(key.encode("utf-8")).digest()
    hue = digest[0] / 255.0
    sat = 0.28 + (digest[1] / 255.0) * 0.28
    val = 0.62 + (digest[2] / 255.0) * 0.22
    r, g, b = hsv_to_rgb(hue, sat, val)
    return f"#{int(r * 255):02x}{int(g * 255):02x}{int(b * 255):02x}"


def asher_preview(rings: list) -> None:
    src = CACHE / "asher-traditional.geojson"
    print(f"loading {src} ({src.stat().st_size // 1024} KB)")
    data = json.loads(src.read_text(encoding="utf-8"))
    features = data.get("features") or []
    fig = plt.figure(figsize=(W / DPI, MAP_H / DPI), dpi=DPI)
    ax = world_ax(fig, "#C5D6DE", "#F4EFE6", "#C4B8A4", rings)
    patches: list[Polygon] = []
    colors: list[str] = []
    for feat in features:
        props = feat.get("properties") or {}
        key = str(props.get("cldf:languageReference") or props.get("title") or "x")
        fill = area_color(key)
        geom = feat.get("geometry") or {}
        for ring in _iter_polys(geom):
            if len(ring) < 3:
                continue
            patches.append(Polygon([(x, y) for x, y in ring], closed=True))
            colors.append(fill)
    print(f"asher patches: {len(patches)}")
    ax.add_collection(
        PatchCollection(
            patches,
            facecolor=colors,
            edgecolor="#4A4033",
            linewidths=0.07,
            alpha=0.86,
            zorder=2,
        )
    )
    im = paint_legend(
        stack_map(
            fig_to_image(fig),
            "Ranacher et al., Scientific Data 2025  ·  Glottography/asher2007world  ·  CC BY 4.0",
        ),
        "Asher & Moseley language areas  ·  Glottocode-linked polygons",
        [],
        (26, 32, 44),
    )
    save_jpg(im, "language-areas-asher-moseley.jpg")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    rings = load_land()
    unesco_preview(rings)
    wals_preview(rings)
    asher_preview(rings)
    elp_preview(rings)


if __name__ == "__main__":
    main()
