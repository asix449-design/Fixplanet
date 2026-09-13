#!/usr/bin/env python3
"""Render Fix Planet religion-pilot schematics on aourednik underlays.

Religion polygons are original Fix Planet artwork (see religion_pilot_geometry.py
and data/religion-pilot/*.geojson). The political/coast underlay is aourednik
historical-basemaps (GPL-3.0). Do not copy proprietary geometry into this file.

Year 1 has no world_1 — uses world_100 and marks nearest.
Years 500–900 use world_500 … world_900 (clip_to_land).
Year 600 writes y0600-schematic.png and must not overwrite y0600.png
(the Christianity-to-600 process companion). Years 700–900 write
y0700.png / y0800.png / y0900.png with no on-image legend.

Output (2560 wide, tan land / soft blue sea, credit footer):
  public/images/maps/religion/y0001-schematic.png
  public/images/maps/religion/y0100.png
  public/images/maps/religion/y0200.png
  public/images/maps/religion/y0300.png
  public/images/maps/religion/y0400.png
  public/images/maps/religion/y0500.png
  public/images/maps/religion/y0600-schematic.png
  public/images/maps/religion/y0700.png
  public/images/maps/religion/y0800.png
  public/images/maps/religion/y0900.png

Run from repo root: python3 scripts/render-religion-pilot.py
"""

from __future__ import annotations

import json
import sys
import urllib.request
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.collections import PatchCollection
from matplotlib.patches import Circle, PathPatch
from matplotlib.path import Path as MplPath
from PIL import Image, ImageDraw, ImageFont
from shapely.geometry import MultiPolygon, Polygon, box, shape
from shapely.ops import unary_union
from shapely.validation import make_valid

from religion_pilot_geometry import write_geojson, year_layers

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/maps/religion"
CACHE = Path("/tmp/aourednik")
CACHE.mkdir(parents=True, exist_ok=True)
LEGEND = json.loads((ROOT / "data/religion-pilot/legend.json").read_text(encoding="utf-8"))

UA = "FixPlanetMapsBot/1.0 (https://fixplanet.org; GPL-3.0 historical-basemaps religion-pilot render)"
GEO_BASE = "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson"
LAND_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/"
    "ne_110m_land.geojson"
)

WIDTH = 2560
HEIGHT = 1280
FOOTER_H = 72
DPI = 100

SEA = "#c9edfb"
LAND = "#ffdf99"
INK = "#3a3228"
FOOTER_BG = "#2a2418"
FOOTER_FG = "#f3ead4"
HALO = "#f7efd8"
OUTLINE = "#c4b48a"

WORLD = box(-179.999, -89.9, 179.999, 89.9)

YEARS = {
    1: 100,  # nearest underlay
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
}

FOOTER = (
    "Religion fills © Fix Planet schematic reconstruction · "
    "Basemap historical-basemaps (GPL-3.0) · Not a census"
)

LEGEND_ORDER = [
    "roman_pagan",
    "christian",
    "islam",
    "jewish",
    "zoroastrian",
    "hindu",
    "buddhist",
    "chinese_imperial",
    "dao_folk",
    "manichaean",
    "african_trad",
    "local_trad",
    "unmapped",
]

LEGEND_LABELS = {
    "roman_pagan": "Roman civic / pagan",
    "christian": "Christian (dot / hatch)",
    "islam": "Islam",
    "jewish": "Jewish communities",
    "zoroastrian": "Zoroastrian-leaning",
    "hindu": "Hindu umbrella",
    "buddhist": "Buddhist corridors",
    "chinese_imperial": "Chinese imperial",
    "dao_folk": "Dao / folk (merged)",
    "manichaean": "Manichaean (hatch)",
    "african_trad": "African traditions",
    "local_trad": "Local traditions",
    "unmapped": "Unmapped (not invented)",
}


def fetch(url: str, dest: Path) -> Path:
    if dest.exists() and dest.stat().st_size > 1000:
        return dest
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as res:
        dest.write_bytes(res.read())
    return dest


def load_json(url: str, dest: Path) -> dict:
    return json.loads(fetch(url, dest).read_text(encoding="utf-8"))


def unwrap_ring(ring: list) -> list[tuple[float, float]]:
    if not ring:
        return []
    out = [(float(ring[0][0]), float(ring[0][1]))]
    for pt in ring[1:]:
        lon, lat = float(pt[0]), float(pt[1])
        prev = out[-1][0]
        if lon - prev > 180:
            lon -= 360
        elif prev - lon > 180:
            lon += 360
        out.append((lon, lat))
    return out


def polygon_from_rings(rings: list) -> Polygon | None:
    if not rings:
        return None
    outer = unwrap_ring(rings[0])
    if len(outer) < 4:
        return None
    holes = []
    for hole in rings[1:]:
        h = unwrap_ring(hole)
        if len(h) >= 4:
            holes.append(h)
    try:
        poly = make_valid(Polygon(outer, holes))
    except Exception:
        return None
    if poly.is_empty:
        return None
    return poly


def as_polygons(geom) -> list[Polygon]:
    if geom is None or geom.is_empty:
        return []
    kind = geom.geom_type
    if kind == "Polygon" and geom.area > 0.02:
        return [geom]
    if kind == "MultiPolygon":
        return [g for g in geom.geoms if g.geom_type == "Polygon" and g.area > 0.02]
    if kind in {"GeometryCollection", "MultiLineString"}:
        out: list[Polygon] = []
        for g in getattr(geom, "geoms", []):
            out.extend(as_polygons(g))
        return out
    return []


def shapely_translate(poly: Polygon, dx: float) -> Polygon:
    if dx == 0:
        return poly
    return Polygon(
        [(x + dx, y) for x, y in poly.exterior.coords],
        [[(x + dx, y) for x, y in ring.coords] for ring in poly.interiors],
    )


def clipped_parts(geom: dict) -> list[Polygon]:
    kind = geom.get("type")
    coords = geom.get("coordinates") or []
    polys: list[Polygon] = []
    if kind == "Polygon":
        polys.extend(as_polygons(polygon_from_rings(coords)))
    elif kind == "MultiPolygon":
        for rings in coords:
            polys.extend(as_polygons(polygon_from_rings(rings)))
    else:
        return []
    out: list[Polygon] = []
    for poly in polys:
        for shift in (0, -360, 360):
            moved = shapely_translate(poly, shift)
            out.extend(as_polygons(moved.intersection(WORLD)))
    return out


def mpl_patch(poly: Polygon, **kwargs) -> PathPatch:
    verts = []
    codes = []

    def add_ring(coords):
        pts = list(coords)
        if len(pts) < 3:
            return
        verts.extend(pts)
        codes.append(MplPath.MOVETO)
        codes.extend([MplPath.LINETO] * (len(pts) - 2))
        codes.append(MplPath.CLOSEPOLY)

    add_ring(poly.exterior.coords)
    for hole in poly.interiors:
        add_ring(hole.coords)
    return PathPatch(MplPath(verts, codes), **kwargs)


def is_unmapped_centroid(lon: float, lat: float) -> bool:
    if lat < -55:
        return True
    if lon < -25:
        return True
    if 110 < lon < 180 and -48 < lat < -10:
        return True
    if lon > 163 and lat < 20:
        return True
    if lon < -140:
        return True
    return False


def land_split(land: dict) -> tuple[list[Polygon], list[Polygon]]:
    mapped: list[Polygon] = []
    unmapped: list[Polygon] = []
    for feat in land["features"]:
        for poly in clipped_parts(feat["geometry"]):
            c = poly.centroid
            if is_unmapped_centroid(c.x, c.y):
                unmapped.append(poly)
            else:
                mapped.append(poly)
    return mapped, unmapped


def clip_to_land(geom, land_union):
    if geom is None or geom.is_empty or land_union is None or land_union.is_empty:
        return geom
    parts = []
    for piece in iter_polys(make_valid(geom)):
        try:
            clipped = piece.intersection(land_union)
        except Exception:
            continue
        if clipped is None or clipped.is_empty:
            continue
        parts.extend(iter_polys(make_valid(clipped)))
    if not parts:
        return Polygon()
    return unary_union(parts)


def iter_polys(geom):
    if geom is None or geom.is_empty:
        return
    if geom.geom_type == "Polygon":
        yield geom
    elif geom.geom_type == "MultiPolygon":
        yield from geom.geoms
    elif hasattr(geom, "geoms"):
        for g in geom.geoms:
            yield from iter_polys(g)


def paint_legend(draw: ImageDraw.ImageDraw, year: int, colors: dict[str, str]) -> None:
    ids = [
        rid
        for rid in LEGEND_ORDER
        if not (year < 200 and rid == "manichaean")
        and not (year < 700 and rid == "islam")
    ]
    pad, sw, row_h, box_w = 14, 18, 22, 268
    box_h = pad * 2 + 28 + row_h * len(ids)
    x, y = 16, 16
    draw.rectangle((x, y, x + box_w, y + box_h), fill="#f7efd8", outline=INK, width=2)
    title_font = load_font(18)
    item_font = load_font(14)
    title = f"{year} CE  ·  schematic"
    if year == 1:
        title = "1 CE · schematic reconstruction"
    draw.text((x + pad, y + 10), title, fill=INK, font=title_font)
    row_y = y + 38
    for rid in ids:
        hex_color = colors[rid]
        rgb = tuple(int(hex_color[i : i + 2], 16) for i in (1, 3, 5))
        draw.rectangle((x + pad, row_y + 2, x + pad + sw, row_y + 2 + sw - 4), fill=rgb, outline=INK)
        draw.text((x + pad + sw + 8, row_y + 1), LEGEND_LABELS[rid], fill=INK, font=item_font)
        row_y += row_h


def load_font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def add_patches(ax, polys, facecolor, edgecolor, lw, z, alpha=0.82, hatch=None):
    patches = [
        mpl_patch(
            p,
            facecolor=facecolor,
            edgecolor=edgecolor,
            linewidth=lw,
            alpha=alpha,
            hatch=hatch,
            zorder=z,
        )
        for p in polys
        if p.area > 0.01
    ]
    if patches:
        ax.add_collection(PatchCollection(patches, match_original=True))


def render_year(year: int) -> Path:
    underlay_year = YEARS[year]
    geo = load_json(
        f"{GEO_BASE}/world_{underlay_year}.geojson",
        CACHE / f"world_{underlay_year}.geojson",
    )
    land = load_json(LAND_URL, CACHE / "ne_110m_land.geojson")
    mapped, unmapped = land_split(land)
    land_union = unary_union(mapped) if mapped else WORLD

    fig_w = WIDTH / DPI
    fig_h = HEIGHT / DPI
    fig, ax = plt.subplots(figsize=(fig_w, fig_h), dpi=DPI)
    fig.subplots_adjust(0, 0, 1, 1)
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_aspect("auto")
    ax.axis("off")
    fig.patch.set_facecolor(SEA)
    ax.set_facecolor(SEA)

    add_patches(ax, mapped, LAND, "#9a8c68", 0.45, 1, alpha=1.0)
    add_patches(ax, unmapped, LEGEND["colors"]["unmapped"], "#8e897f", 0.35, 1, alpha=1.0)

    # Faint aourednik polity outlines — underlay only, not religion fills.
    outline_patches = []
    for feat in geo["features"]:
        for poly in clipped_parts(feat["geometry"]):
            outline_patches.append(
                mpl_patch(
                    poly,
                    facecolor="none",
                    edgecolor="#8a7d62",
                    linewidth=0.18,
                    alpha=0.35,
                    zorder=2,
                )
            )
    if outline_patches:
        ax.add_collection(PatchCollection(outline_patches, match_original=True))

    layers = year_layers(year)
    colors = LEGEND["colors"]

    for rid, parts in layers["fills"]:
        geom = clip_to_land(unary_union(parts), land_union)
        add_patches(ax, list(iter_polys(geom)), colors[rid], INK, 0.22, 3, alpha=0.78)

    for rid, parts in layers["hatches"]:
        geom = clip_to_land(unary_union(parts), land_union)
        hatch = "///" if rid == "christian" else ("xxx" if rid == "manichaean" else "\\\\")
        add_patches(
            ax,
            list(iter_polys(geom)),
            colors[rid],
            INK,
            0.25,
            4,
            alpha=0.55,
            hatch=hatch,
        )

    spot_union = unary_union([p for _, p in layers["spots"]])
    add_patches(ax, list(iter_polys(spot_union)), colors["jewish"], INK, 0.35, 5, alpha=0.9)

    for _, lon, lat in layers["dots"]:
        ax.add_patch(
            Circle(
                (lon, lat),
                1.65,
                facecolor=colors["christian"],
                edgecolor="#f7efd8",
                linewidth=1.4,
                zorder=6,
            )
        )

    if year == 1:
        dest_name = "y0001-schematic.png"
    elif year == 600:
        dest_name = "y0600-schematic.png"
    else:
        dest_name = f"y{year:04d}.png"
    dest = OUT / dest_name
    tmp = CACHE / f"religion_{year}.png"
    fig.savefig(tmp, dpi=DPI, facecolor=fig.get_facecolor())
    plt.close(fig)

    im = Image.open(tmp).convert("RGB")
    if im.size != (WIDTH, HEIGHT):
        im = im.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", (WIDTH, HEIGHT + FOOTER_H), FOOTER_BG)
    canvas.paste(im, (0, 0))
    draw = ImageDraw.Draw(canvas)
    year_font = load_font(40)
    foot_font = load_font(18)
    label = f"{year} CE"
    if year == 1:
        label = "1 CE · schematic reconstruction"
    draw.text(
        (WIDTH - 28, HEIGHT - 70),
        label,
        fill=INK,
        font=year_font,
        stroke_width=3,
        stroke_fill=HALO,
        anchor="rt",
    )
    draw.text((24, HEIGHT + 24), FOOTER, fill=FOOTER_FG, font=foot_font)
    if year < 700:
        paint_legend(draw, year, colors)
    dest.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(dest, "PNG", optimize=True)
    print(f"wrote {dest.relative_to(ROOT)} ({dest.stat().st_size // 1024} KB) {canvas.size}")
    return dest


def main(years: list[int] | None = None) -> None:
    write_geojson()
    OUT.mkdir(parents=True, exist_ok=True)
    for year in years or (1, 100, 200, 300, 400, 500, 600, 700, 800, 900):
        render_year(year)


if __name__ == "__main__":
    years = [int(a) for a in sys.argv[1:] if a.isdigit()]
    main(years or None)
