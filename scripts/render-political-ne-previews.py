#!/usr/bin/env python3
"""Render Political-shelf thumbnails from Natural Earth public-domain vectors.

Outputs 1600×800 JPEGs:
  public/images/maps/disputed-breakaway-areas.jpg
  public/images/maps/states-provinces.jpg
  public/images/maps/land-boundary-lines.jpg

Run from repo root: python3 scripts/render-political-ne-previews.py
"""

from __future__ import annotations

import io
import zipfile
from pathlib import Path
from urllib.request import Request, urlopen

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import shapefile
from matplotlib.collections import LineCollection, PatchCollection
from matplotlib.patches import Polygon
from PIL import Image, ImageDraw, ImageFont
from shapely.geometry import shape as shapely_shape
from shapely.geometry.base import BaseGeometry

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/maps"
CACHE = Path("/tmp/ne-political")
CACHE.mkdir(parents=True, exist_ok=True)

UA = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
)

W, H = 1600, 800
FOOTER_H = 34
DPI = 100

LAND_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/"
    "ne_110m_land.geojson"
)
ZIPS = {
    "disputed": "https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_0_disputed_areas.zip",
    "admin1": "https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_1_states_provinces.zip",
    "lines": "https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_0_boundary_lines_land.zip",
}

SEA_A = "#9ec4d6"
LAND_A = "#ebe2d2"
DISPUTED = "#e23a28"
DISPUTED_EDGE = "#5a120c"

SEA_B = "#d5e3d8"
LAND_B = "#f7f2e8"
ADMIN1 = "#4a382c"

SEA_C = "#e4edf2"
LAND_C = "#fbf7ef"
BOUNDARY = "#1c1916"

FOOTER_BG = "#121816"
FOOTER_FG = "#ecf0ea"


def fetch(url: str, dest: Path) -> Path:
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = Request(url, headers={"User-Agent": UA})
    with urlopen(req, timeout=120) as res:
        dest.write_bytes(res.read())
    print(f"downloaded {dest.name} ({dest.stat().st_size // 1024} KB)")
    return dest


def unzip_shp(url: str, key: str) -> Path:
    zpath = fetch(url, CACHE / f"{key}.zip")
    target = CACHE / key
    target.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(zpath) as zf:
        zf.extractall(target)
        shps = [n for n in zf.namelist() if n.lower().endswith(".shp") and not n.startswith("__")]
    if not shps:
        raise SystemExit(f"no shapefile in {zpath}")
    return target / shps[0]


def load_geoms(shp_path: Path) -> list[BaseGeometry]:
    reader = shapefile.Reader(str(shp_path))
    geoms: list[BaseGeometry] = []
    for sr in reader.shapeRecords():
        try:
            geom = shapely_shape(sr.shape.__geo_interface__)
        except Exception:
            continue
        if geom.is_empty:
            continue
        geoms.append(geom)
    return geoms


def load_land() -> list[BaseGeometry]:
    import json

    path = fetch(LAND_URL, CACHE / "ne_110m_land.geojson")
    data = json.loads(path.read_text(encoding="utf-8"))
    geoms = []
    for feat in data["features"]:
        geom = shapely_shape(feat["geometry"])
        if not geom.is_empty:
            geoms.append(geom)
    return geoms


def iter_polys(geom: BaseGeometry):
    if geom.geom_type == "Polygon":
        yield geom
    elif geom.geom_type == "MultiPolygon":
        yield from geom.geoms


def iter_lines(geom: BaseGeometry):
    if geom.geom_type in {"LineString", "LinearRing"}:
        yield geom
    elif geom.geom_type == "MultiLineString":
        yield from geom.geoms
    elif geom.geom_type == "GeometryCollection":
        for part in geom.geoms:
            yield from iter_lines(part)
    elif geom.geom_type in {"Polygon", "MultiPolygon"}:
        for poly in iter_polys(geom):
            yield poly.exterior
            for ring in poly.interiors:
                yield ring


def poly_patches(geoms: list[BaseGeometry], facecolor: str, edgecolor: str, lw: float) -> list:
    patches = []
    for geom in geoms:
        for poly in iter_polys(geom):
            coords = list(poly.exterior.coords)
            if len(coords) < 3:
                continue
            patches.append(
                Polygon(
                    coords,
                    closed=True,
                    facecolor=facecolor,
                    edgecolor=edgecolor,
                    linewidth=lw,
                )
            )
    return patches


def line_segments(geoms: list[BaseGeometry]) -> list[list[tuple[float, float]]]:
    segs = []
    for geom in geoms:
        for line in iter_lines(geom):
            coords = list(line.coords)
            if len(coords) >= 2:
                segs.append(coords)
    return segs


def load_font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def finish(fig: plt.Figure, dest: Path, credit: str) -> None:
    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=DPI)
    plt.close(fig)
    buf.seek(0)
    im = Image.open(buf).convert("RGB")
    im = im.resize((W, H), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(im)
    draw.rectangle((0, H - FOOTER_H, W, H), fill=FOOTER_BG)
    draw.text((14, H - 24), credit, fill=FOOTER_FG, font=load_font(16))
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=86, optimize=True, progressive=True)
    print(f"wrote {dest.name} ({dest.stat().st_size // 1024} KB)")


def new_axes(sea: str) -> tuple[plt.Figure, plt.Axes]:
    fig_w = W / DPI
    fig_h = H / DPI
    fig, ax = plt.subplots(figsize=(fig_w, fig_h), dpi=DPI)
    fig.subplots_adjust(0, 0, 1, 1)
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_aspect("auto")
    ax.axis("off")
    fig.patch.set_facecolor(sea)
    ax.set_facecolor(sea)
    return fig, ax


def highlight_disputed(geoms: list[BaseGeometry]) -> list[BaseGeometry]:
    """Slight degree-buffer so small Natural Earth polygons still read at thumbnail scale."""
    out = []
    for geom in geoms:
        try:
            grown = geom.buffer(0.55)
        except Exception:
            grown = geom
        out.append(grown if not grown.is_empty else geom)
    return out


def render_disputed(land: list[BaseGeometry], disputed: list[BaseGeometry]) -> None:
    fig, ax = new_axes(SEA_A)
    land_c = PatchCollection(poly_patches(land, LAND_A, "#c9bba6", 0.25), match_original=True)
    land_c.set_zorder(1)
    ax.add_collection(land_c)
    marks = PatchCollection(
        poly_patches(highlight_disputed(disputed), DISPUTED, DISPUTED_EDGE, 0.55),
        match_original=True,
    )
    marks.set_zorder(3)
    ax.add_collection(marks)
    finish(
        fig,
        OUT / "disputed-breakaway-areas.jpg",
        "Natural Earth · public domain · Admin 0 breakaway and disputed areas · a thumbnail is not a court ruling",
    )


def render_admin1(land: list[BaseGeometry], admin1: list[BaseGeometry]) -> None:
    fig, ax = new_axes(SEA_B)
    ax.add_collection(
        PatchCollection(poly_patches(land, LAND_B, "#ddd4c4", 0.2), match_original=True)
    )
    segs = line_segments(admin1)
    ax.add_collection(
        LineCollection(segs, colors=ADMIN1, linewidths=0.28, linestyles="solid", zorder=3)
    )
    finish(
        fig,
        OUT / "states-provinces.jpg",
        "Natural Earth · public domain · Admin 1 states and provinces · a thumbnail is not a court ruling",
    )


def render_lines(land: list[BaseGeometry], lines: list[BaseGeometry]) -> None:
    fig, ax = new_axes(SEA_C)
    ax.add_collection(
        PatchCollection(poly_patches(land, LAND_C, "#e6ddd0", 0.15), match_original=True)
    )
    segs = line_segments(lines)
    ax.add_collection(
        LineCollection(segs, colors=BOUNDARY, linewidths=0.7, linestyles="solid", zorder=3)
    )
    finish(
        fig,
        OUT / "land-boundary-lines.jpg",
        "Natural Earth · public domain · Admin 0 land boundary lines · a thumbnail is not a court ruling",
    )


def main() -> None:
    land = load_land()
    disputed = load_geoms(unzip_shp(ZIPS["disputed"], "disputed"))
    admin1 = load_geoms(unzip_shp(ZIPS["admin1"], "admin1"))
    lines = load_geoms(unzip_shp(ZIPS["lines"], "lines"))
    print(f"features land={len(land)} disputed={len(disputed)} admin1={len(admin1)} lines={len(lines)}")
    render_disputed(land, disputed)
    render_admin1(land, admin1)
    render_lines(land, lines)


if __name__ == "__main__":
    main()
