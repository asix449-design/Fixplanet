#!/usr/bin/env python3
"""Render Fix Planet detail maps from open data.

Detail frames are 7200×3600 (Equal Earth, fitted to a 2:1 canvas).
Card previews are 1600×800 JPEG downscales. No titles, labels, or
worded legends are drawn. A numeric colour bar is added only when the
script knows the data values.

Raw downloads stay in scripts/maps-real/raw/ and are gitignored.
Run from the repo root:

    python3 scripts/maps-real/render.py
    python3 scripts/maps-real/render.py choropleth woa minerals
    python3 scripts/maps-real/render.py gibs
"""

from __future__ import annotations

import csv
import io
import json
import sys
import urllib.request
from pathlib import Path

import h5py
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.collections import PolyCollection
from matplotlib.colors import LinearSegmentedColormap, LogNorm, Normalize
from matplotlib.cm import ScalarMappable
from PIL import Image, ImageDraw, ImageFont
from pyproj import Transformer

ROOT = Path(__file__).resolve().parents[2]
RAW = Path(__file__).resolve().parent / "raw"
PUBLIC = ROOT / "public" / "images"
NE_PATH = RAW / "ne_10m_admin_0_countries.geojson"

DETAIL_W, DETAIL_H = 7200, 3600
PREVIEW_W, PREVIEW_H = 1600, 800

OCEAN = np.array([232, 238, 242], dtype=np.uint8)
OCEAN_SAT = np.array([12, 32, 44], dtype=np.uint8)
LAND = np.array([214, 206, 192], dtype=np.uint8)
NODATA = np.array([186, 180, 168], dtype=np.uint8)
EDGE = (90, 84, 74, 180)
# Matches .map-card-art and .map-detail-art img in global.css.
PAGE_BG = (10, 22, 32)

# Natural Earth codes that differ from the ISO3 used by OWID / UN series.
ISO_ALIAS = {
    "KOS": "XKX",
    "PSX": "PSE",
    "SAH": "ESH",
    "SOL": "SOM",
}


def font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def projection_limits() -> tuple[float, float, float]:
    """Return (scale, half-width, half-height) in EPSG:8857 units for the canvas."""
    fwd = Transformer.from_crs("EPSG:4326", "EPSG:8857", always_xy=True)
    lons = np.linspace(-180, 180, 721)
    lats = np.linspace(-89.9, 89.9, 361)
    xs, _ = fwd.transform(lons, np.zeros_like(lons))
    _, ys = fwd.transform(np.zeros_like(lats), lats)
    xmax = float(np.nanmax(np.abs(xs)))
    ymax = float(np.nanmax(np.abs(ys)))
    scale = min(DETAIL_W / (2 * xmax), DETAIL_H / (2 * ymax))
    return scale, DETAIL_W / (2 * scale), DETAIL_H / (2 * scale)


def load_countries() -> list[dict]:
    geo = json.loads(NE_PATH.read_text())
    fwd = Transformer.from_crs("EPSG:4326", "EPSG:8857", always_xy=True)
    out = []
    for feature in geo["features"]:
        props = feature["properties"]
        code = props.get("ISO_A3_EH") or props.get("ADM0_A3") or props.get("ISO_A3")
        if not code or code in {"-99", "NAN"}:
            code = props.get("ADM0_A3") or ""
        code = ISO_ALIAS.get(code, code)
        if not code or len(code) != 3 or code == "-99":
            code = ""
        geom = feature["geometry"]
        polygons = []
        if geom["type"] == "Polygon":
            parts = [geom["coordinates"]]
        elif geom["type"] == "MultiPolygon":
            parts = geom["coordinates"]
        else:
            continue
        for poly in parts:
            if not poly:
                continue
            ring = np.asarray(poly[0], dtype=np.float64)
            if ring.shape[0] < 4:
                continue
            x, y = fwd.transform(ring[:, 0], ring[:, 1])
            xy = np.column_stack([x, y])
            if not np.isfinite(xy).all():
                continue
            polygons.append(xy)
        if polygons:
            out.append({"code": code, "polygons": polygons})
    return out


def new_axes(half_w: float, half_h: float, ocean_rgb: tuple[int, int, int]):
    fig = plt.figure(figsize=(DETAIL_W / 100, DETAIL_H / 100), dpi=100)
    fig.patch.set_facecolor(tuple(c / 255 for c in ocean_rgb))
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(-half_w, half_w)
    ax.set_ylim(-half_h, half_h)
    ax.set_aspect("equal")
    ax.axis("off")
    ax.set_facecolor(tuple(c / 255 for c in ocean_rgb))
    return fig, ax


def fig_image(fig) -> Image.Image:
    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=100)
    plt.close(fig)
    im = Image.open(buf).convert("RGB")
    if im.size != (DETAIL_W, DETAIL_H):
        im = im.resize((DETAIL_W, DETAIL_H), Image.Resampling.LANCZOS)
    return im


_GLOBE_INSIDE: np.ndarray | None = None


def equal_earth_inside() -> np.ndarray:
    """Pixel mask for the Equal Earth globe. Corners of the 2:1 canvas are outside it.

    Inverse EPSG:8857 still returns finite lat/lon past the ±180° meridian, so a
    bounds check on latitude is not enough to keep rasters inside the outline.
    """
    global _GLOBE_INSIDE
    if _GLOBE_INSIDE is not None:
        return _GLOBE_INSIDE
    scale, _, _ = projection_limits()
    fwd = Transformer.from_crs("EPSG:4326", "EPSG:8857", always_xy=True)
    lats = np.linspace(-90.0, 90.0, 3601)
    edge_x, edge_y = fwd.transform(np.full(lats.shape, 180.0), lats)
    y_pix = DETAIL_H / 2.0 - edge_y * scale
    half = np.abs(np.asarray(edge_x, dtype=np.float64)) * scale
    order = np.argsort(y_pix)
    y_sorted = np.asarray(y_pix, dtype=np.float64)[order]
    half_sorted = half[order]
    finite = np.isfinite(y_sorted) & np.isfinite(half_sorted)
    y_sorted = y_sorted[finite]
    half_sorted = half_sorted[finite]
    rows = np.arange(DETAIL_H, dtype=np.float64) + 0.5
    half_row = np.interp(rows, y_sorted, half_sorted, left=0.0, right=0.0)
    cols = np.abs(np.arange(DETAIL_W, dtype=np.float64) + 0.5 - DETAIL_W / 2.0)
    _GLOBE_INSIDE = cols[None, :] <= (half_row[:, None] + 0.5)
    return _GLOBE_INSIDE


def inland_water_mask(height: int, width: int) -> np.ndarray:
    """North-up mask of inland water: Natural Earth lakes plus the Caspian hole in the land polygon.

    The Caspian is a hole in ne_10m_land, not a feature in ne_10m_lakes. The Black Sea
    stays out of this mask because it opens to the ocean.
    """
    cache = RAW / f"inland-water-{height}x{width}.npy"
    if cache.exists():
        return np.load(cache)
    import fiona
    from rasterio.features import rasterize
    from rasterio.transform import from_bounds
    from shapely.geometry import shape

    shapes: list = []
    with fiona.open(RAW / "ne_10m_lakes" / "ne_10m_lakes.shp") as src:
        shapes.extend(feat["geometry"] for feat in src if feat["geometry"])
    with fiona.open(RAW / "ne_10m_land" / "ne_10m_land.shp") as src:
        for feat in src:
            geom = shape(feat["geometry"])
            polys = geom.geoms if geom.geom_type == "MultiPolygon" else [geom]
            for poly in polys:
                for ring in poly.interiors:
                    shapes.append({"type": "Polygon", "coordinates": [list(ring.coords)]})
    burned = rasterize(
        [(geom, 1) for geom in shapes],
        out_shape=(height, width),
        transform=from_bounds(-180, -90, 180, 90, width, height),
        fill=0,
        dtype="uint8",
    )
    mask = burned.astype(bool)
    np.save(cache, mask)
    return mask


def mask_inland_water(field: np.ndarray) -> np.ndarray:
    """Drop inland-water cells from a north-up equirectangular grid."""
    masked = np.array(field, copy=True)
    masked[inland_water_mask(masked.shape[0], masked.shape[1])] = np.nan
    return masked


def clip_to_globe(im: Image.Image) -> Image.Image:
    """Paint every pixel outside the Equal Earth outline with the page background."""
    arr = np.array(im.convert("RGB"))
    if arr.shape[0] != DETAIL_H or arr.shape[1] != DETAIL_W:
        return im
    arr[~equal_earth_inside()] = PAGE_BG
    return Image.fromarray(arr, "RGB")


def base_map(countries: list[dict], half_w: float, half_h: float, ocean, land) -> Image.Image:
    cache = RAW / f"base-globe-{ocean[0]}-{ocean[1]}-{ocean[2]}-{land[0]}.png"
    if cache.exists():
        im = Image.open(cache).convert("RGB")
        if im.size == (DETAIL_W, DETAIL_H):
            return im
    fig, ax = new_axes(half_w, half_h, ocean)
    polys = [poly for country in countries for poly in country["polygons"]]
    coll = PolyCollection(
        polys,
        facecolors=tuple(c / 255 for c in land),
        edgecolors="none",
        antialiased=False,
    )
    ax.add_collection(coll)
    im = clip_to_globe(fig_image(fig))
    cache.parent.mkdir(parents=True, exist_ok=True)
    im.save(cache, "PNG")
    return im


_SUP = str.maketrans("0123456789-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁻")


def numeric_label(value: float) -> str:
    """Digits only, with a superscript power of ten when the number is huge."""
    av = abs(value)
    sign = "−" if value < 0 else ""
    if av == 0:
        return "0"
    if av >= 10000 or av < 0.01:
        exp = int(np.floor(np.log10(av)))
        mant = av / 10**exp
        power = str(exp).translate(_SUP)
        if abs(mant - 1) < 0.05:
            return f"{sign}10{power}"
        return f"{sign}{mant:.1f}×10{power}"
    if av >= 100:
        return sign + f"{av:.0f}"
    if av >= 10:
        return sign + f"{av:.1f}".rstrip("0").rstrip(".")
    return sign + f"{av:.2f}".rstrip("0").rstrip(".")


def add_colorbar(
    im: Image.Image,
    vmin: float,
    vmax: float,
    cmap_name: str,
    log: bool,
    vcenter: float | None = None,
) -> Image.Image:
    """Horizontal numeric scale. No unit words."""
    im = im.convert("RGB")
    draw = ImageDraw.Draw(im, "RGBA")
    cmap = plt.get_cmap(cmap_name)
    bar_w, bar_h = 2200, 72
    x0 = (im.width - bar_w) // 2
    y0 = im.height - 250
    draw.rectangle((x0 - 36, y0 - 110, x0 + bar_w + 36, y0 + bar_h + 28), fill=(12, 18, 22, 168))
    grad = np.linspace(0, 1, bar_w)
    colors = (cmap(grad)[:, :3] * 255).astype(np.uint8)
    bar = Image.fromarray(np.repeat(colors[None, :, :], bar_h, axis=0), "RGB")
    im.paste(bar, (x0, y0))
    draw = ImageDraw.Draw(im, "RGBA")
    if vcenter is not None:
        from matplotlib.colors import TwoSlopeNorm

        norm = TwoSlopeNorm(vmin=vmin, vcenter=vcenter, vmax=vmax)
    else:
        norm = LogNorm(vmin, vmax) if log else Normalize(vmin, vmax)
    ticks = np.geomspace(vmin, vmax, 5) if log else np.linspace(vmin, vmax, 5)
    face = font(72)
    for tick in ticks:
        t = float(np.clip(norm(tick), 0, 1))
        x = x0 + int(t * (bar_w - 1))
        draw.line((x, y0 + bar_h, x, y0 + bar_h + 16), fill=(236, 240, 234, 230), width=4)
        label = numeric_label(float(tick))
        bbox = draw.textbbox((0, 0), label, font=face)
        tw = bbox[2] - bbox[0]
        draw.text((x - tw / 2, y0 - 100), label, fill=(236, 240, 234, 240), font=face)
    return im


def save_pair(im: Image.Image, folder: str, stem: str, preview: Image.Image | None = None) -> None:
    detail_dir = PUBLIC / folder / "detail"
    detail_dir.mkdir(parents=True, exist_ok=True)
    preview_path = PUBLIC / folder / f"{stem}.jpg"
    detail = detail_dir / f"{stem}.webp"
    rgb = im.convert("RGB")
    rgb.save(detail, "WEBP", quality=82, method=4)
    card = (preview if preview is not None else rgb).convert("RGB")
    card.resize((PREVIEW_W, PREVIEW_H), Image.Resampling.LANCZOS).save(
        preview_path, "JPEG", quality=84, optimize=True, progressive=True
    )
    print(f"wrote {folder}/{stem}.jpg and detail/{stem}.webp")


def choropleth(
    countries: list[dict],
    values: dict[str, float],
    folder: str,
    stem: str,
    cmap_name: str,
    log: bool,
    half_w: float,
    half_h: float,
) -> dict:
    positive = np.array([v for v in values.values() if v > 0], dtype=np.float64)
    if positive.size < 5:
        raise SystemExit(f"{stem}: not enough positive values")
    vmin = float(np.quantile(positive, 0.05))
    vmax = float(positive.max())
    if vmin <= 0:
        vmin = float(positive.min())
    if vmax <= vmin:
        vmax = vmin * 10
    norm = LogNorm(vmin, vmax) if log else Normalize(vmin, vmax)
    cmap = plt.get_cmap(cmap_name)
    fig, ax = new_axes(half_w, half_h, tuple(int(c) for c in OCEAN))
    # Unclassified land first.
    base_polys = []
    colored = []
    colors = []
    matched = 0
    for country in countries:
        value = values.get(country["code"]) if country["code"] else None
        if value is None or not np.isfinite(value) or value <= 0:
            base_polys.extend(country["polygons"])
            continue
        matched += 1
        rgba = cmap(float(np.clip(norm(value), 0, 1)))
        for poly in country["polygons"]:
            colored.append(poly)
            colors.append(rgba)
    if base_polys:
        ax.add_collection(
            PolyCollection(
                base_polys,
                facecolors=tuple(c / 255 for c in NODATA),
                edgecolors=tuple(c / 255 for c in EDGE),
                linewidths=0.35,
                antialiased=False,
            )
        )
    ax.add_collection(
        PolyCollection(
            colored,
            facecolors=colors,
            edgecolors=tuple(c / 255 for c in EDGE),
            linewidths=0.35,
            antialiased=False,
        )
    )
    im = add_colorbar(clip_to_globe(fig_image(fig)), vmin, vmax, cmap_name, log)
    save_pair(im, folder, stem)
    return {"matched_countries": matched, "vmin": vmin, "vmax": vmax, "log": log}


def read_owid(path: Path, value_column: str, year: int | None, aggregate: str) -> tuple[dict[str, float], int]:
    buckets: dict[str, list[tuple[int, float]]] = {}
    with path.open(newline="") as handle:
        for row in csv.DictReader(handle):
            code = (row.get("Code") or "").strip()
            if not code or code.startswith("OWID"):
                continue
            raw = (row.get(value_column) or "").strip()
            if not raw:
                continue
            buckets.setdefault(code, []).append((int(row["Year"]), float(raw)))
    counts: dict[int, int] = {}
    for pairs in buckets.values():
        for y, _ in pairs:
            counts[y] = counts.get(y, 0) + 1
    if year is None or counts.get(year, 0) < 40:
        year = max(y for y, n in counts.items() if n >= 40)
    values: dict[str, float] = {}
    for code, pairs in buckets.items():
        chosen = [v for y, v in pairs if y == year] if aggregate == "year" else [v for y, v in pairs if 2001 <= y <= year]
        if aggregate == "year" and chosen:
            values[code] = chosen[-1]
        elif aggregate == "sum" and chosen:
            values[code] = float(sum(chosen))
    return values, year


def render_choropleths(countries, half_w, half_h) -> list[dict]:
    jobs = [
        (
            "maps",
            "consumption-co2-emissions",
            RAW / "consumption-co2-emissions.csv",
            "Annual consumption-based CO₂ emissions",
            2024,
            "year",
            "YlOrRd",
        ),
        (
            "maps",
            "methane-emissions",
            RAW / "methane-emissions.csv",
            "Annual methane emissions including land use",
            2024,
            "year",
            "YlOrBr",
        ),
        (
            "maps",
            "mismanaged-plastic-waste",
            RAW / "plastic-waste-mismanaged.csv",
            "Mismanaged plastic waste",
            2019,
            "year",
            "OrRd",
        ),
        (
            "maps",
            "military-expenditure-sipri",
            RAW / "military-spending-sipri.csv",
            "Military expenditure",
            2024,
            "year",
            "Blues",
        ),
    ]
    reports = []
    for folder, stem, path, column, year, aggregate, cmap_name in jobs:
        values, used_year = read_owid(path, column, year, aggregate)
        stats = choropleth(countries, values, folder, stem, cmap_name, True, half_w, half_h)
        stats.update({"id": stem, "folder": folder, "year": used_year, "rows": len(values)})
        reports.append(stats)
        print(stem, stats)
    return reports


def gibs_png(layer: str, when: str | None, width: int, height: int) -> Image.Image:
    url = (
        "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&VERSION=1.1.1"
        f"&REQUEST=GetMap&LAYERS={layer}&SRS=EPSG:4326&BBOX=-180,-90,180,90"
        f"&WIDTH={width}&HEIGHT={height}&FORMAT=image/png&TRANSPARENT=TRUE"
    )
    if when:
        url += f"&TIME={when}"
    req = urllib.request.Request(url, headers={"User-Agent": "FixPlanetMapBot/1.0"})
    data = urllib.request.urlopen(req, timeout=180).read()
    return Image.open(io.BytesIO(data)).convert("RGBA")


def reproject_rgba(src: Image.Image, scale: float) -> Image.Image:
    """Sample an equirectangular RGBA image onto the Equal Earth canvas."""
    arr = np.asarray(src)
    sh, sw = arr.shape[:2]
    inv = Transformer.from_crs("EPSG:8857", "EPSG:4326", always_xy=True)
    out = np.zeros((DETAIL_H, DETAIL_W, 4), dtype=np.uint8)
    cols = np.arange(DETAIL_W)
    xx = (cols + 0.5 - DETAIL_W / 2) / scale
    for r0 in range(0, DETAIL_H, 240):
        r1 = min(DETAIL_H, r0 + 240)
        rows = np.arange(r0, r1)
        yy = (DETAIL_H / 2 - (rows + 0.5)) / scale
        lon, lat = inv.transform(np.broadcast_to(xx, (rows.size, cols.size)), yy[:, None] * np.ones((1, cols.size)))
        lon = np.asarray(lon)
        lat = np.asarray(lat)
        valid = np.isfinite(lon) & np.isfinite(lat) & (lat >= -90) & (lat <= 90)
        valid &= equal_earth_inside()[r0:r1]
        sx = (lon + 180.0) / 360.0 * sw - 0.5
        sy = (90.0 - lat) / 180.0 * sh - 0.5
        x0 = np.floor(sx).astype(np.int32)
        y0 = np.floor(sy).astype(np.int32)
        x1 = x0 + 1
        y1 = y0 + 1
        # Longitude wraps at the antimeridian; latitude does not.
        valid &= (y0 >= 0) & (y1 < sh)
        wx = (sx - x0).astype(np.float32)
        wy = (sy - y0).astype(np.float32)
        x0c = np.mod(x0, sw)
        x1c = np.mod(x1, sw)
        y0c = np.clip(y0, 0, sh - 1)
        y1c = np.clip(y1, 0, sh - 1)
        Ia = arr[y0c, x0c].astype(np.float32)
        Ib = arr[y0c, x1c].astype(np.float32)
        Ic = arr[y1c, x0c].astype(np.float32)
        Id = arr[y1c, x1c].astype(np.float32)
        wx = wx[..., None]
        wy = wy[..., None]
        sample = Ia * (1 - wx) * (1 - wy) + Ib * wx * (1 - wy) + Ic * (1 - wx) * wy + Id * wx * wy
        sample[~valid] = 0
        out[r0:r1] = sample.astype(np.uint8)
    return Image.fromarray(out, "RGBA")


def composite_on_base(base: Image.Image, overlay: Image.Image) -> Image.Image:
    return Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")


def render_gibs_layer(base: Image.Image, scale: float, layer: str, when: str | None, folder: str, stem: str, width: int = 4096) -> None:
    dates = [when]
    if when and "Sea_Surface_Height" in layer:
        dates = ["2019-12-26", "2019-06-15", "2018-06-15", "2016-06-15"]
    src = None
    used = when
    for date in dates:
        print(f"GIBS {layer} {date or 'static'} …")
        candidate = gibs_png(layer, date, width, width // 2)
        opaque = int((np.asarray(candidate)[:, :, 3] > 10).sum())
        print("  opaque", opaque)
        if opaque > 1500:
            src = candidate
            used = date
            break
    if src is None:
        print("skip empty", stem)
        return
    print("  using", used)
    overlay = reproject_rgba(src, scale)
    save_pair(composite_on_base(base, overlay), folder, stem)


def country_edges(countries: list[dict], half_w: float, half_h: float) -> Image.Image:
    """Coastline and country outline, transparent everywhere else."""
    cache = RAW / "country-edges.png"
    if cache.exists():
        im = Image.open(cache).convert("RGBA")
        if im.size == (DETAIL_W, DETAIL_H):
            return im
    fig = plt.figure(figsize=(DETAIL_W / 100, DETAIL_H / 100), dpi=100)
    fig.patch.set_alpha(0)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(-half_w, half_w)
    ax.set_ylim(-half_h, half_h)
    ax.set_aspect("equal")
    ax.axis("off")
    ax.set_facecolor((0, 0, 0, 0))
    polys = [poly for country in countries for poly in country["polygons"]]
    ax.add_collection(
        PolyCollection(
            polys,
            facecolors=(0, 0, 0, 0),
            edgecolors=(0.22, 0.20, 0.18, 0.9),
            linewidths=1.15,
            antialiased=True,
        )
    )
    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=100, transparent=True)
    plt.close(fig)
    im = Image.open(buf).convert("RGBA")
    if im.size != (DETAIL_W, DETAIL_H):
        im = im.resize((DETAIL_W, DETAIL_H), Image.Resampling.LANCZOS)
    arr = np.array(im)
    arr[~equal_earth_inside(), 3] = 0
    im = Image.fromarray(arr, "RGBA")
    cache.parent.mkdir(parents=True, exist_ok=True)
    im.save(cache, "PNG")
    return im


def _temis_month(path: Path) -> np.ndarray:
    """North-up grid of a TEMIS monthly file, in 10^15 molecules/cm². Fill and negatives are NaN."""
    import gzip

    lines = gzip.open(path, "rt").read().splitlines()
    lat_idx = [i for i, line in enumerate(lines) if line.startswith("lat=")]
    if len(lat_idx) != 1440:
        raise SystemExit(f"{path.name}: expected 1440 latitudes, got {len(lat_idx)}")
    rows = []
    for i, start in enumerate(lat_idx):
        end = lat_idx[i + 1] if i + 1 < len(lat_idx) else len(lines)
        blob = "".join(lines[start + 1 : end]).encode("ascii")
        if len(blob) != 2880 * 4:
            raise SystemExit(f"{path.name}: latitude row {i} has {len(blob)} bytes")
        rows.append(np.char.strip(np.frombuffer(blob, dtype="S4")).astype(np.int16))
    # File order is south to north. Units in the file are 10^13 molecules/cm².
    south_up = np.vstack(rows).astype(np.float32)
    south_up[south_up < 0] = np.nan
    return south_up[::-1] * 0.01


def render_no2() -> None:
    """Annual mean tropospheric NO₂ for 2024 from the KNMI/TEMIS monthly grids.

    Daily swaths leave stripes. The monthly means are already gap-filled, and the
    twelve months of 2024 are averaged with equal weight. Values below zero and the
    TEMIS fill (−999) are dropped. The colour is a log scale from 1×10¹⁵ to 1.2×10¹⁶
    molecules/cm² so clean air stays the base map and the urban columns read as orange
    to deep red. Country outlines are drawn on top.
    """
    import urllib.request

    folder = RAW / "no2"
    folder.mkdir(parents=True, exist_ok=True)
    months = []
    for month in range(1, 13):
        name = f"no2_2024{month:02d}.asc.gz"
        path = folder / name
        if not path.exists():
            url = f"https://d1qb6yzwaaq4he.cloudfront.net/tropomi/no2/2024/{month:02d}/{name}"
            print("download", url)
            req = urllib.request.Request(url, headers={"User-Agent": "FixPlanetMapBot/1.0"})
            path.write_bytes(urllib.request.urlopen(req, timeout=180).read())
        months.append(_temis_month(path))
        print(name, "finite", float(np.isfinite(months[-1]).mean()))
    stack = np.stack(months, axis=0)
    count = np.isfinite(stack).sum(axis=0)
    total = np.nansum(stack, axis=0)
    field = np.divide(total, count, out=np.full(count.shape, np.nan, np.float32), where=count > 0)
    finite = field[np.isfinite(field)]
    print(
        "no2 annual",
        "coverage",
        float(np.isfinite(field).mean()),
        "p50",
        float(np.percentile(finite, 50)),
        "p99",
        float(np.percentile(finite, 99)),
        "max",
        float(finite.max()),
    )
    # 10^15 molecules/cm². Background ocean sits near 0.2 and stays unpainted.
    vmin, vmax = 1.0, 12.0
    # Skip the pale-yellow end of YlOrRd so a moderate column still reads on beige land.
    hot = LinearSegmentedColormap.from_list("no2hot", plt.get_cmap("YlOrRd")(np.linspace(0.32, 1.0, 256)))
    plt.colormaps.register(hot, name="no2hot", force=True)
    norm = LogNorm(vmin, vmax)
    rgba = np.zeros(field.shape + (4,), dtype=np.uint8)
    show = np.isfinite(field) & (field >= vmin * 0.75)
    sample = np.clip(norm(np.clip(field[show], vmin, vmax)), 0, 1)
    rgba[show, :3] = (hot(sample)[:, :3] * 255).astype(np.uint8)
    fade = np.clip((field[show] - vmin * 0.75) / (vmin * 0.25), 0, 1)
    rgba[show, 3] = (50 + 185 * fade).astype(np.uint8)
    scale, half_w, half_h = projection_limits()
    countries = load_countries()
    base = base_map(countries, half_w, half_h, tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    painted = composite_on_base(base, reproject_rgba(Image.fromarray(rgba, "RGBA"), scale))
    outlined = Image.alpha_composite(painted.convert("RGBA"), country_edges(countries, half_w, half_h)).convert("RGB")
    save_pair(add_colorbar(outlined, vmin * 1e15, vmax * 1e15, "no2hot", True), "maps", "nitrogen-dioxide-no2")


def render_gibs(scale: float, countries, half_w, half_h) -> None:
    base = base_map(countries, half_w, half_h, tuple(int(c) for c in OCEAN_SAT), tuple(int(c) for c in LAND))
    layers = [
        ("GEDI_ISS_L3_Canopy_Height_Mean_RH100_201904-202303", None, "forests", "canopy-height", 4096),
        ("GEDI_ISS_L4B_Aboveground_Biomass_Density_Mean_201904-202303", None, "forests", "aboveground-biomass", 4096),
    ]
    for layer, when, folder, stem, width in layers:
        render_gibs_layer(base, scale, layer, when, folder, stem, width)


def render_woa(scale: float, countries, half_w, half_h) -> None:
    path = RAW / "woa23_all_o00_01.nc"
    with h5py.File(path, "r") as handle:
        depth = handle["depth"][:]
        lat = handle["lat"][:]
        lon = handle["lon"][:]
        field = handle["o_an"][0]
    band = (depth >= 100) & (depth <= 1000)
    slab = field[band].astype(np.float64)
    slab[slab > 1e6] = np.nan
    slab[slab < 0] = np.nan
    omz = np.nanmin(slab, axis=0)
    # Paint an equirectangular grid, then reuse the Equal Earth sampler.
    # WOA longitudes run 0.5..359.5 or -179.5..179.5.
    order = np.argsort(lon)
    lon = lon[order]
    omz = omz[:, order]
    if float(lon.min()) >= 0:
        # Shift to -180..180.
        split = int(np.searchsorted(lon, 180))
        lon = np.concatenate([lon[split:] - 360, lon[:split]])
        omz = np.concatenate([omz[:, split:], omz[:, :split]], axis=1)
    finite = omz[np.isfinite(omz)]
    vmin = float(np.quantile(finite, 0.02))
    vmax = float(np.quantile(finite, 0.98))
    norm = Normalize(vmin, vmax)
    cmap = plt.get_cmap("viridis_r")
    # Build a north-up image, then punch out inland water (Caspian and lakes).
    if lat[0] < lat[-1]:
        omz = omz[::-1]
    omz = mask_inland_water(omz)
    rgba = np.zeros(omz.shape + (4,), dtype=np.uint8)
    good = np.isfinite(omz)
    cols = cmap(norm(np.clip(omz, vmin, vmax)))
    rgba[good, :3] = (cols[good, :3] * 255).astype(np.uint8)
    rgba[good, 3] = 255
    src = Image.fromarray(rgba, "RGBA").resize((3600, 1800), Image.Resampling.NEAREST)
    base = base_map(countries, half_w, half_h, tuple(int(c) for c in OCEAN_SAT), tuple(int(c) for c in LAND))
    overlay = reproject_rgba(src, scale)
    im = add_colorbar(composite_on_base(base, overlay), vmin, vmax, "viridis_r", False)
    save_pair(im, "oceans", "dissolved-oxygen")
    print("oxygen", vmin, vmax)


def render_minerals(scale: float, countries, half_w, half_h) -> None:
    import zipfile

    lats = []
    lons = []
    with zipfile.ZipFile(RAW / "mrds-csv.zip") as archive:
        with archive.open("mrds.csv") as handle:
            text = io.TextIOWrapper(handle, encoding="latin1", newline="")
            for row in csv.DictReader(text):
                try:
                    lat = float(row["latitude"])
                    lon = float(row["longitude"])
                except (TypeError, ValueError):
                    continue
                if not (-90 <= lat <= 90 and -180 <= lon <= 180):
                    continue
                if abs(lat) < 0.01 and abs(lon) < 0.01:
                    continue
                lats.append(lat)
                lons.append(lon)
    print("mineral points", len(lats))
    fwd = Transformer.from_crs("EPSG:4326", "EPSG:8857", always_xy=True)
    xs, ys = fwd.transform(np.asarray(lons), np.asarray(lats))
    fig, ax = new_axes(half_w, half_h, tuple(int(c) for c in OCEAN))
    polys = [poly for country in countries for poly in country["polygons"]]
    ax.add_collection(
        PolyCollection(
            polys,
            facecolors=tuple(c / 255 for c in LAND),
            edgecolors=tuple(c / 255 for c in EDGE),
            linewidths=0.3,
            antialiased=False,
        )
    )
    ax.scatter(xs, ys, s=28, c="#9a3412", alpha=0.35, linewidths=0, rasterized=True)
    save_pair(clip_to_globe(fig_image(fig)), "maps", "mineral-resources")


def main() -> None:
    which = set(sys.argv[1:]) or {"choropleth", "woa", "minerals", "gibs"}
    RAW.mkdir(parents=True, exist_ok=True)
    scale, half_w, half_h = projection_limits()
    print("scale", scale, "half", half_w, half_h)
    countries = load_countries()
    print("countries", len(countries))
    if "choropleth" in which:
        render_choropleths(countries, half_w, half_h)
    if "woa" in which:
        render_woa(scale, countries, half_w, half_h)
    if "minerals" in which:
        render_minerals(scale, countries, half_w, half_h)
    if "gibs" in which:
        render_gibs(scale, countries, half_w, half_h)
    if "no2" in which:
        render_no2()


if __name__ == "__main__":
    main()
