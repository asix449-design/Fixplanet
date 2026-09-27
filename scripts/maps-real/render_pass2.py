#!/usr/bin/env python3
"""Second-pass real-data plates: trends, polar ice, heat stress, loss, extent.

    python3 scripts/maps-real/render_pass2.py sea-level heat ice
    python3 scripts/maps-real/render_pass2.py hansen gmw ifl
"""

from __future__ import annotations

import sys
import zipfile
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.colors import LinearSegmentedColormap, Normalize, TwoSlopeNorm
from PIL import Image

from render import (
    DETAIL_H,
    DETAIL_W,
    LAND,
    OCEAN,
    OCEAN_SAT,
    RAW,
    add_colorbar,
    base_map,
    composite_on_base,
    load_countries,
    projection_limits,
    reproject_rgba,
    save_pair,
)

ICE_CMAP = LinearSegmentedColormap.from_list(
    "iceconc",
    ["#071426", "#1a6f8c", "#b7e0ea", "#f4f8fb"],
)


def countries_and_base(ocean, land):
    scale, half_w, half_h = projection_limits()
    countries = load_countries()
    base = base_map(countries, half_w, half_h, ocean, land)
    return scale, base


def paint_equal_earth(rgba: Image.Image, scale: float, base: Image.Image, vmin, vmax, cmap, vcenter=None):
    overlay = reproject_rgba(rgba, scale)
    im = composite_on_base(base, overlay)
    return add_colorbar(im, vmin, vmax, cmap, False, vcenter=vcenter)


def colorize(values: np.ndarray, norm, cmap) -> np.ndarray:
    rgba = np.zeros(values.shape + (4,), dtype=np.uint8)
    good = np.isfinite(values)
    if not good.any():
        return rgba
    sample = np.clip(norm(values[good].astype(np.float64)), 0, 1)
    cols = cmap(sample)
    rgba[good, :3] = (cols[:, :3] * 255).astype(np.uint8)
    rgba[good, 3] = 230
    return rgba


def render_sea_level() -> None:
    lats, lons, vals = [], [], []
    with (RAW / "slr_map_ref.txt").open() as handle:
        for line in handle:
            if not line.strip() or line[0] == "#":
                continue
            lat_s, lon_s, val_s = line.split()
            lats.append(float(lat_s))
            lons.append(float(lon_s))
            vals.append(float(val_s))
    lat = np.asarray(lats)
    lon = np.asarray(lons)
    val = np.asarray(vals)
    # Exact 0.00 is the land / no-data fill in this ASCII grid.
    val[np.abs(val) < 1e-6] = np.nan
    grid = np.full((360, 720), np.nan, dtype=np.float32)
    row = np.rint((89.75 - lat) / 0.5).astype(np.int32)
    col = np.rint((lon + 179.75) / 0.5).astype(np.int32)
    ok = (row >= 0) & (row < 360) & (col >= 0) & (col < 720)
    grid[row[ok], col[ok]] = val[ok]
    vmin, vmax, center = -6.0, 8.0, 0.0
    norm = TwoSlopeNorm(vmin=vmin, vcenter=center, vmax=vmax)
    rgba = colorize(grid, norm, plt.get_cmap("RdBu_r"))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN_SAT), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, vmin, vmax, "RdBu_r", center)
    save_pair(im, "oceans", "sea-level")
    finite = grid[np.isfinite(grid)]
    print("sea-level", finite.min(), np.median(finite), finite.max(), "n", finite.size)


def render_heat() -> None:
    import h5py

    path = RAW / "ct5km_ssta_v3.1_20260925.nc"
    with h5py.File(path, "r") as handle:
        raw = handle["sea_surface_temperature_anomaly"][0]
        mask = handle["mask"][0]
    field = raw.astype(np.float32) * 0.01
    field[(raw == -32768) | (mask == 1)] = np.nan
    # North-up already: latitude runs from +90 toward -90.
    vmin, vmax, center = -2.0, 4.0, 0.0
    norm = TwoSlopeNorm(vmin=vmin, vcenter=center, vmax=vmax)
    rgba = colorize(field, norm, plt.get_cmap("coolwarm"))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN_SAT), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, vmin, vmax, "coolwarm", center)
    save_pair(im, "oceans", "marine-heatwaves")
    finite = field[np.isfinite(field)]
    print("heat", finite.min(), np.median(finite), finite.max())


def render_ice_panel(path: Path) -> Image.Image:
    arr = np.array(Image.open(path))
    conc = np.clip(arr.astype(np.float32), 0, 1000) / 10.0
    land = arr >= 2500
    ocean = (~land) & (arr <= 1000)
    cmap = ICE_CMAP
    norm = Normalize(0, 100)
    rgb = np.zeros(arr.shape + (3,), dtype=np.uint8)
    rgb[:] = (7, 16, 32)
    if ocean.any():
        cols = cmap(norm(conc[ocean]))
        rgb[ocean] = (cols[:, :3] * 255).astype(np.uint8)
    rgb[land] = (186, 176, 160)
    return Image.fromarray(rgb, "RGB")


def render_ice() -> None:
    north = render_ice_panel(RAW / "N_202603_concentration_v4.0.tif")
    south = render_ice_panel(RAW / "S_202509_concentration_v4.0.tif")
    canvas = Image.new("RGB", (DETAIL_W, DETAIL_H), (7, 16, 32))
    margin = 120

    def place(im: Image.Image, slot: int) -> None:
        slot_w = DETAIL_W // 2
        avail_w = slot_w - margin * 2
        avail_h = DETAIL_H - 420
        scale = min(avail_w / im.width, avail_h / im.height)
        size = (max(1, int(im.width * scale)), max(1, int(im.height * scale)))
        resized = im.resize(size, Image.Resampling.NEAREST)
        x = slot * slot_w + (slot_w - size[0]) // 2
        y = (avail_h - size[1]) // 2 + 40
        canvas.paste(resized, (x, y))

    place(north, 0)
    place(south, 1)
    plt.colormaps.register(ICE_CMAP, name="iceconc", force=True)
    im = add_colorbar(canvas, 0, 100, "iceconc", False)
    save_pair(im, "oceans", "sea-ice-extent")
    print("ice", north.size, south.size)


def share_grid(counts: np.ndarray, pixels_per_cell: float, cmap_name: str, folder: str, stem: str, vmax_q=0.98):
    share = counts.astype(np.float32) / pixels_per_cell
    positive = share[share > 0]
    if positive.size < 10:
        raise SystemExit(f"{stem}: empty grid")
    vmax = float(np.quantile(positive, vmax_q))
    vmax = max(vmax, 1e-4)
    norm = Normalize(0, vmax)
    rgba = colorize(np.where(share > 0, share, np.nan), norm, plt.get_cmap(cmap_name))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, 0, vmax, cmap_name)
    save_pair(im, folder, stem)
    print(stem, "vmax", vmax, "positive cells", int(positive.size))


def render_ohc() -> None:
    import h5py

    path = RAW / "heat_content_anomaly_0-700_yearly.nc"
    with h5py.File(path, "r") as handle:
        lat = handle["lat"][:]
        field = handle["h18_hc"][-1, 0].astype(np.float64)
        fill = float(np.array(handle["h18_hc"].attrs["_FillValue"]).reshape(-1)[0])
    field[field > 1e20] = np.nan
    field[np.abs(field - fill) < 1e20] = np.nan
    if lat[0] < lat[-1]:
        field = field[::-1]
    finite = field[np.isfinite(field)]
    # Symmetric diverging range around the recent anomaly field.
    span = float(np.quantile(np.abs(finite), 0.98))
    span = max(span, 0.01)
    norm = TwoSlopeNorm(vmin=-span, vcenter=0, vmax=span)
    rgba = colorize(field, norm, plt.get_cmap("coolwarm"))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN_SAT), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, -span, span, "coolwarm", 0)
    save_pair(im, "oceans", "ocean-heat-content")
    print("ohc", finite.min(), np.median(finite), finite.max(), "span", span)


def render_ph() -> None:
    import h5py

    path = RAW / "OceanSODA_ETHZ-v2025.nc"
    with h5py.File(path, "r") as handle:
        year = handle["year"][:]
        lat = handle["lat"][:]
        early = np.where((year >= 1985) & (year <= 1989))[0]
        late = np.where((year >= 2020) & (year <= 2024))[0]
        ph = handle["ph_total"]
        before = np.nanmean(ph[early], axis=0)
        after = np.nanmean(ph[late], axis=0)
    delta = after - before
    if lat[0] < lat[-1]:
        delta = delta[::-1]
    finite = delta[np.isfinite(delta)]
    vmin, vmax, center = -0.12, 0.02, 0.0
    norm = TwoSlopeNorm(vmin=vmin, vcenter=center, vmax=vmax)
    rgba = colorize(delta, norm, plt.get_cmap("RdBu"))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN_SAT), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, vmin, vmax, "RdBu", center)
    save_pair(im, "oceans", "ocean-acidification")
    print("ph delta", finite.min(), np.median(finite), finite.max())


def render_hansen() -> None:
    counts = np.load(RAW / "hansen_loss_0p02.npy")
    # 0.02° cells, Hansen pixels are 0.00025°.
    share_grid(counts, (0.02 / 0.00025) ** 2, "YlOrBr", "maps", "forest-cover-loss", 0.995)


def render_gmw() -> None:
    counts = np.load(RAW / "gmw_v3_2020_0p02.npy")
    # GMW v3 tiles are 4500 pixels per degree.
    share_grid(counts, (0.02 / (1 / 4500)) ** 2, "BuGn", "maps", "mangrove-extent", 0.99)


def render_ifl() -> None:
    import rasterio
    from rasterio.features import rasterize

    path = RAW / "IFL_2020.zip"
    extract = RAW / "ifl2020"
    if not any(extract.glob("*.shp")):
        extract.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(path) as archive:
            archive.extractall(extract)
    shp = next(extract.rglob("*.shp"))
    print("ifl", shp)
    with rasterio.open(shp) as src:
        geoms = [feat["geometry"] for feat in src]
    res = 0.05
    height, width = int(180 / res), int(360 / res)
    transform = rasterio.transform.from_bounds(-180, -90, 180, 90, width, height)
    burned = rasterize(
        [(geom, 1) for geom in geoms],
        out_shape=(height, width),
        transform=transform,
        fill=0,
        dtype="uint8",
        all_touched=True,
    )
    # from_bounds north-up: row 0 is north. rasterize uses that transform.
    share_grid(burned.astype(np.uint16), 1.0, "Greens", "maps", "intact-forest-landscapes", 1.0)


def render_burned() -> None:
    """Annual burned fraction, 2023, from MODIS MCD64CMQ (0.25°, hectares / cell area)."""
    frac = np.load(RAW / "mcd64_2023_frac.npy")
    # A handful of cells exceed one cell-area when months overlap. The bar stops at 1.
    shown = np.clip(frac, 0, 1)
    norm = Normalize(0, 1)
    rgba = colorize(shown, norm, plt.get_cmap("YlOrRd"))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, 0, 1, "YlOrRd")
    save_pair(im, "forests", "burned-area")
    finite = frac[np.isfinite(frac)]
    print("burned-area max", float(np.nanmax(frac)), "positive", int((finite > 0).sum()))


def main() -> None:
    which = set(sys.argv[1:]) or {"sea-level", "heat", "ice"}
    if "sea-level" in which:
        render_sea_level()
    if "heat" in which:
        render_heat()
    if "ohc" in which:
        render_ohc()
    if "ph" in which:
        render_ph()
    if "ice" in which:
        render_ice()
    if "hansen" in which:
        render_hansen()
    if "gmw" in which:
        render_gmw()
    if "ifl" in which:
        render_ifl()
    if "burned" in which:
        render_burned()


if __name__ == "__main__":
    main()
