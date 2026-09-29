#!/usr/bin/env python3
"""Population plates from UN WPP 2024 and GHSL R2023A.

Country choropleths use Natural Earth 1:50m. Settlement grids are the
2020 epoch of GHS-SMOD and GHS-BUILT-S (30 arc-second), the latest
satellite-based epoch in R2023A, counted onto a
0.02° grid. Detail frames are 7200×3600 Equal Earth. Previews are
1600×800. No words are drawn; numeric colour bars only.

    python3 scripts/maps-real/render_population.py
    python3 scripts/maps-real/render_population.py choropleth smod built
"""

from __future__ import annotations

import csv
import gzip
import sys
from pathlib import Path

import numpy as np
import rasterio
from matplotlib.collections import PolyCollection
from matplotlib.colors import LogNorm, TwoSlopeNorm
from PIL import Image
from rasterio.windows import Window

from render import (
    DETAIL_H,
    DETAIL_W,
    EDGE,
    LAND,
    NODATA,
    OCEAN,
    RAW,
    add_colorbar,
    base_map,
    clip_to_globe,
    composite_on_base,
    equal_earth_inside,
    fig_image,
    inland_water_mask,
    load_countries,
    mask_inland_water,
    new_axes,
    projection_limits,
    save_pair,
)
from render_pass2 import colorize

NE_50 = RAW / "ne_50m_admin_0_countries.geojson"
WPP = RAW / "WPP2024_Demographic_Indicators_Medium.csv.gz"
SMOD_TIF = RAW / "GHS_SMOD_E2020_GLOBE_R2023A_4326_30ss_V2_0.tif"
BUILT_TIF = RAW / "GHS_BUILT_S_E2020_GLOBE_R2023A_4326_30ss_V1_0.tif"
RES = 0.02
NLAT = int(180 / RES)
NLON = int(360 / RES)

# GHS-SMOD L2 codes grouped the way Degree of Urbanisation level 1 groups them.
RURAL = (11, 12, 13)
TOWNS = (21, 22, 23)
CITIES = (30,)
SMOD_COLOR = {
    11: (168, 178, 150),
    12: (168, 178, 150),
    13: (168, 178, 150),
    21: (214, 132, 46),
    22: (214, 132, 46),
    23: (214, 132, 46),
    30: (148, 32, 36),
}


def read_wpp() -> tuple[dict[str, float], dict[str, float], dict[str, float]]:
    """Medium variant, 2024. Population is people on 1 July. Growth is percent per year."""
    population: dict[str, float] = {}
    growth: dict[str, float] = {}
    world: dict[str, float] = {}
    with gzip.open(WPP, "rt", encoding="utf-8-sig", newline="") as handle:
        for row in csv.DictReader(handle):
            if row["Variant"] != "Medium" or row["Time"] != "2024":
                continue
            if row["LocTypeName"] == "World":
                world = {
                    "population": float(row["TPopulation1July"]) * 1000.0,
                    "growth": float(row["PopGrowthRate"]),
                }
                continue
            if row["LocTypeName"] != "Country/Area":
                continue
            code = (row.get("ISO3_code") or "").strip()
            if len(code) != 3:
                continue
            population[code] = float(row["TPopulation1July"]) * 1000.0
            growth[code] = float(row["PopGrowthRate"])
    if len(population) < 200 or not world:
        raise SystemExit(f"WPP parse failed: {len(population)} countries")
    return population, growth, world


def matched_values(countries: list[dict], values: dict[str, float]) -> tuple[dict[str, float], list[str]]:
    have = {country["code"] for country in countries if country["code"]}
    used = {code: value for code, value in values.items() if code in have and np.isfinite(value)}
    missing = sorted(code for code in values if code not in have)
    return used, missing


def stamp_inland_water(im: Image.Image) -> Image.Image:
    """Paint Natural Earth lakes and the Caspian onto an Equal Earth plate."""
    mask = inland_water_mask(1800, 3600)
    scale, _, _ = projection_limits()
    from pyproj import Transformer

    inv = Transformer.from_crs("EPSG:8857", "EPSG:4326", always_xy=True)
    arr = np.array(im.convert("RGB"))
    sh, sw = mask.shape
    cols = np.arange(DETAIL_W)
    xx = (cols + 0.5 - DETAIL_W / 2.0) / scale
    inside = equal_earth_inside()
    for r0 in range(0, DETAIL_H, 300):
        r1 = min(DETAIL_H, r0 + 300)
        rows = np.arange(r0, r1)
        yy = (DETAIL_H / 2.0 - (rows + 0.5)) / scale
        lon, lat = inv.transform(
            np.broadcast_to(xx, (rows.size, cols.size)),
            yy[:, None] * np.ones((1, cols.size)),
        )
        lon = np.asarray(lon)
        lat = np.asarray(lat)
        sy = np.floor((90.0 - lat) / 180.0 * sh).astype(np.int32)
        sx = np.floor((lon + 180.0) / 360.0 * sw).astype(np.int32)
        ok = inside[r0:r1] & (sy >= 0) & (sy < sh) & (sx >= 0) & (sx < sw) & np.isfinite(lat)
        water = np.zeros(ok.shape, dtype=bool)
        water[ok] = mask[sy[ok], sx[ok]]
        arr[r0:r1][water] = OCEAN
    return Image.fromarray(arr, "RGB")


def draw_choropleth(
    countries: list[dict],
    values: dict[str, float],
    stem: str,
    cmap_name: str,
    norm,
    half_w: float,
    half_h: float,
    vmin: float,
    vmax: float,
    log: bool,
    vcenter: float | None,
) -> None:
    fig, ax = new_axes(half_w, half_h, tuple(int(c) for c in OCEAN))
    base_polys = []
    colored = []
    colors = []
    matched = 0
    for country in countries:
        value = values.get(country["code"]) if country["code"] else None
        if value is None or not np.isfinite(value):
            base_polys.extend(country["polygons"])
            continue
        sample = float(np.clip(norm(value), 0, 1))
        if not np.isfinite(sample):
            base_polys.extend(country["polygons"])
            continue
        matched += 1
        rgba = plt_cmap(cmap_name)(sample)
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
    im = stamp_inland_water(clip_to_globe(fig_image(fig)))
    im = add_colorbar(im, vmin, vmax, cmap_name, log, vcenter=vcenter)
    save_pair(im, "maps", stem)
    print(stem, "matched", matched, "vmin", vmin, "vmax", vmax, flush=True)


def plt_cmap(name: str):
    import matplotlib.pyplot as plt

    return plt.get_cmap(name)


def render_choropleths() -> None:
    population, growth, world = read_wpp()
    print(
        "WPP 2024 medium world",
        round(world["population"]),
        "growth",
        world["growth"],
        "countries",
        len(population),
        flush=True,
    )
    scale, half_w, half_h = projection_limits()
    countries = load_countries(NE_50)
    print("countries loaded", len(countries), "scale", scale, flush=True)
    pop_used, pop_missing = matched_values(countries, population)
    grow_used, grow_missing = matched_values(countries, growth)
    print("population unmatched", pop_missing, flush=True)
    print("growth unmatched", grow_missing, flush=True)
    positive = np.array([value for value in pop_used.values() if value > 0], dtype=np.float64)
    vmin = float(np.quantile(positive, 0.05))
    vmax = float(positive.max())
    pop_norm = LogNorm(vmin, vmax)
    draw_choropleth(
        countries, pop_used, "world-population", "YlOrBr", pop_norm, half_w, half_h, vmin, vmax, True, None
    )
    rates = np.array(list(grow_used.values()), dtype=np.float64)
    low = float(np.quantile(rates, 0.02))
    high = float(np.quantile(rates, 0.98))
    if low >= 0:
        low = float(rates.min())
    if high <= 0:
        high = float(rates.max())
    grow_norm = TwoSlopeNorm(vmin=low, vcenter=0.0, vmax=high)
    draw_choropleth(
        countries, grow_used, "population-growth", "RdBu_r", grow_norm, half_w, half_h, low, high, False, 0.0
    )
    neg = int((rates < 0).sum())
    print("growth negative", neg, "of", rates.size, "p02", low, "p98", high, flush=True)
    named = ("AGO", "CAF", "COD", "NER", "SOM", "IND", "CHN")
    for code in named:
        print(code, "pop", pop_used.get(code), "growth", grow_used.get(code), flush=True)


def accumulate_codes(path: Path, codes: tuple[int, ...]) -> np.ndarray:
    """Majority of selected class codes on the 0.02° grid. 0 means none."""
    hist = np.zeros((len(codes), NLAT, NLON), dtype=np.uint8)
    index = {code: i for i, code in enumerate(codes)}
    with rasterio.open(path) as dataset:
        width = dataset.width
        transform = dataset.transform
        cols = np.arange(width)
        lon = transform.c + (cols + 0.5) * transform.a
        gx = np.floor((lon + 180.0) / RES).astype(np.int32)
        for y0 in range(0, dataset.height, 400):
            height = min(400, dataset.height - y0)
            block = dataset.read(1, window=Window(0, y0, width, height))
            rows = np.arange(y0, y0 + height)
            lat = transform.f + (rows + 0.5) * transform.e
            gy = np.floor((90.0 - lat) / RES).astype(np.int32)
            gy_ok = (gy >= 0) & (gy < NLAT)
            if not gy_ok.any():
                continue
            for code, slot in index.items():
                ys, xs = np.nonzero(block == code)
                if ys.size == 0:
                    continue
                yy = gy[ys]
                xx = gx[xs]
                ok = (yy >= 0) & (yy < NLAT) & (xx >= 0) & (xx < NLON)
                if not ok.any():
                    continue
                np.add.at(hist[slot], (yy[ok], xx[ok]), 1)
            print("smod rows", y0 + height, flush=True)
    winner = np.argmax(hist, axis=0)
    total = hist.sum(axis=0)
    grid = np.zeros((NLAT, NLON), dtype=np.uint8)
    present = total > 0
    grid[present] = np.asarray(codes, dtype=np.uint8)[winner[present]]
    del hist
    return grid


def land_base() -> tuple[float, Image.Image]:
    scale, half_w, half_h = projection_limits()
    countries = load_countries(NE_50)
    base = base_map(countries, half_w, half_h, tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    return scale, base


def render_smod() -> None:
    print("aggregating SMOD", flush=True)
    grid = accumulate_codes(SMOD_TIF, RURAL + TOWNS + CITIES)
    # Inland water is not a settlement class.
    water = inland_water_mask(NLAT, NLON)
    grid[water] = 0
    counts = {code: int((grid == code).sum()) for code in RURAL + TOWNS + CITIES}
    print("smod cells", counts, flush=True)
    rgba = np.zeros((NLAT, NLON, 4), dtype=np.uint8)
    for code, color in SMOD_COLOR.items():
        rgba[grid == code, :3] = color
        rgba[grid == code, 3] = 235
    del grid
    scale, base = land_base()
    from render import reproject_rgba

    overlay = reproject_rgba(Image.fromarray(rgba, "RGBA"), scale)
    save_pair(clip_to_globe(composite_on_base(base, overlay)), "maps", "cities-and-towns")
    write_class_previews({"cities"})


def accumulate_built(path: Path) -> np.ndarray:
    total = np.zeros((NLAT, NLON), dtype=np.float32)
    with rasterio.open(path) as dataset:
        width = dataset.width
        transform = dataset.transform
        cols = np.arange(width)
        lon = transform.c + (cols + 0.5) * transform.a
        gx = np.floor((lon + 180.0) / RES).astype(np.int32)
        for y0 in range(0, dataset.height, 400):
            height = min(400, dataset.height - y0)
            block = dataset.read(1, window=Window(0, y0, width, height))
            ys, xs = np.nonzero(block > 0)
            if ys.size:
                rows = y0 + ys
                lat = transform.f + (rows + 0.5) * transform.e
                gy = np.floor((90.0 - lat) / RES).astype(np.int32)
                xx = gx[xs]
                ok = (gy >= 0) & (gy < NLAT) & (xx >= 0) & (xx < NLON)
                np.add.at(total, (gy[ok], xx[ok]), block[ys[ok], xs[ok]].astype(np.float32))
            print("built rows", y0 + height, flush=True)
    lat = 90.0 - (np.arange(NLAT) + 0.5) * RES
    radius = 6371008.8
    cell = (radius ** 2) * np.deg2rad(RES) * np.deg2rad(RES) * np.cos(np.deg2rad(lat))
    fraction = total / cell[:, None].astype(np.float32)
    np.clip(fraction, 0, 1, out=fraction)
    fraction[total <= 0] = np.nan
    return mask_inland_water(fraction)


def render_built() -> None:
    print("aggregating GHS-BUILT-S", flush=True)
    fraction = accumulate_built(BUILT_TIF)
    percent = fraction * 100.0
    finite = percent[np.isfinite(percent)]
    vmin = max(0.1, float(np.quantile(finite, 0.05)))
    vmax = float(min(100.0, np.quantile(finite, 0.995)))
    if vmax <= vmin:
        vmax = 100.0
    print("built percent p05", float(np.quantile(finite, 0.05)), "vmin", vmin, "vmax", vmax, "n", finite.size, flush=True)
    norm = LogNorm(vmin, vmax)
    import matplotlib.pyplot as plt

    rgba = colorize(percent, norm, plt.get_cmap("YlOrRd"))
    # Hide cells below the bar floor so empty land stays the base map.
    rgba[~(np.isfinite(percent) & (percent >= vmin))] = 0
    scale, base = land_base()
    from render import add_colorbar as _bar
    from render import reproject_rgba

    overlay = reproject_rgba(Image.fromarray(rgba, "RGBA"), scale)
    im = clip_to_globe(composite_on_base(base, overlay))
    save_pair(_bar(im, vmin, vmax, "YlOrRd", True), "maps", "built-up-surface")
    write_class_previews({"built"})


def _blocks(im: Image.Image, factor: int = 4) -> np.ndarray:
    arr = np.asarray(im.convert("RGB"))
    height, width = arr.shape[:2]
    height = height // factor * factor
    width = width // factor * factor
    blocks = arr[:height, :width].reshape(height // factor, factor, width // factor, factor, 3)
    blocks = np.transpose(blocks, (0, 2, 1, 3, 4))
    return blocks.reshape(height // factor, width // factor, factor * factor, 3).astype(np.int16)


def write_class_previews(which: set[str] | None = None) -> None:
    """Card JPEGs for the two grids. A plain Lanczos average hides cities and built-up."""
    from render import PUBLIC

    which = which or {"cities", "built"}
    if "cities" in which:
        _write_cities_preview(PUBLIC)
    if "built" in which:
        _write_built_preview(PUBLIC)
    print("rewrote grid previews", sorted(which), flush=True)


def _write_cities_preview(public: Path) -> None:
    flat = _blocks(Image.open(public / "maps" / "detail" / "cities-and-towns.webp"))
    red, green, blue = flat[..., 0], flat[..., 1], flat[..., 2]
    city = (red > 100) & (red > green + 25) & (red > blue + 25) & (green < 120)
    town = (red > 160) & (green > 90) & (green < 200) & (blue < 140) & (red > blue + 40) & ~city
    rural = (green > 140) & (blue > 110) & (red > 120) & (red < 220) & ~city & ~town
    chosen = flat.mean(axis=2)
    chosen[rural.any(axis=-1)] = (168, 178, 150)
    chosen[town.any(axis=-1)] = (214, 132, 46)
    chosen[city.any(axis=-1)] = (148, 32, 36)
    Image.fromarray(np.clip(chosen, 0, 255).astype(np.uint8), "RGB").resize(
        (1600, 800), Image.Resampling.BOX
    ).save(public / "maps" / "cities-and-towns.jpg", "JPEG", quality=84, optimize=True, progressive=True)


def _write_built_preview(public: Path) -> None:
    flat = _blocks(Image.open(public / "maps" / "detail" / "built-up-surface.webp"))
    score = flat[..., 0] - flat[..., 2]
    pick = np.argmax(score, axis=-1)
    warm = np.take_along_axis(flat, pick[..., None, None], axis=2).squeeze(2)
    mean = flat.mean(axis=2)
    use = score.max(axis=-1) > 30
    chosen = np.where(use[..., None], warm, mean)
    Image.fromarray(np.clip(chosen, 0, 255).astype(np.uint8), "RGB").resize(
        (1600, 800), Image.Resampling.BOX
    ).save(public / "maps" / "built-up-surface.jpg", "JPEG", quality=84, optimize=True, progressive=True)


def main() -> None:
    which = set(sys.argv[1:]) or {"choropleth", "smod", "built"}
    if "choropleth" in which:
        render_choropleths()
    if "smod" in which:
        render_smod()
    if "built" in which:
        render_built()
    if "previews" in which:
        write_class_previews()


if __name__ == "__main__":
    main()
