#!/usr/bin/env python3
"""Rasterize vector plates that are already downloaded."""

from __future__ import annotations

import sys
from pathlib import Path

import fiona
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import rasterio
from matplotlib.colors import ListedColormap, Normalize
from PIL import Image
from rasterio.features import rasterize
from rasterio.transform import from_bounds

sys.path.insert(0, str(Path(__file__).resolve().parent))
from render import LAND, OCEAN, RAW, composite_on_base, mask_inland_water, reproject_rgba, save_pair
from render_pass2 import colorize, countries_and_base, paint_equal_earth

GDB = (
    RAW
    / "aq40/Aqueduct40_waterrisk_download_Y2023M07D05/GDB/Aq40_Y2023D07M05.gdb"
)


def world_grid(res: float):
    height, width = int(round(180 / res)), int(round(360 / res))
    transform = from_bounds(-180, -90, 180, 90, width, height)
    return height, width, transform


def burn_score(field: str, res: float = 0.1) -> np.ndarray:
    height, width, transform = world_grid(res)
    shapes = []
    with fiona.open(GDB, layer="baseline_annual") as src:
        for feat in src:
            value = feat["properties"].get(field)
            if value is None or value < 0 or value > 5:
                continue
            shapes.append((feat["geometry"], float(value)))
    print(field, "shapes", len(shapes), flush=True)
    burned = rasterize(
        shapes,
        out_shape=(height, width),
        transform=transform,
        fill=-1,
        dtype="float32",
        all_touched=False,
    )
    return np.where(burned < 0, np.nan, burned)


def paint_score(grid: np.ndarray, folder: str, stem: str, cmap: str) -> None:
    grid = mask_inland_water(grid)
    norm = Normalize(0, 5)
    rgba = colorize(grid, norm, plt.get_cmap(cmap))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, 0, 5, cmap)
    save_pair(im, folder, stem)


def render_aqueduct() -> None:
    paint_score(burn_score("bws_score"), "maps", "water-stress", "YlOrRd")
    paint_score(burn_score("gtd_score"), "maps", "groundwater-whymap", "YlOrBr")
    paint_score(burn_score("rfr_score"), "maps", "flood-hazard-aqueduct", "Blues")


def render_gez() -> None:
    shp = Path("/tmp/gez/gez_2010_wgs84.shp")
    height, width, transform = world_grid(0.1)
    codes = []
    shapes = []
    with fiona.open(shp) as src:
        for feat in src:
            code = int(round(float(feat["properties"]["gez_code"])))
            codes.append(code)
            shapes.append((feat["geometry"], code))
    unique = sorted(set(codes))
    print("gez codes", unique, flush=True)
    lookup = {code: index + 1 for index, code in enumerate(unique)}
    indexed = [((geom, lookup[code])) for geom, code in shapes]
    burned = rasterize(
        indexed,
        out_shape=(height, width),
        transform=transform,
        fill=0,
        dtype="uint8",
        all_touched=False,
    )
    cmap = plt.get_cmap("tab20", len(unique))
    rgba = np.zeros(burned.shape + (4,), dtype=np.uint8)
    for index, code in enumerate(unique):
        mask = burned == index + 1
        color = cmap(index)
        rgba[mask, :3] = (np.array(color[:3]) * 255).astype(np.uint8)
        rgba[mask, 3] = 235
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    overlay = reproject_rgba(Image.fromarray(rgba, "RGBA"), scale)
    save_pair(composite_on_base(base, overlay), "forests", "ecological-zones")
    print("gez cells", int((burned > 0).sum()))


def render_ifl() -> None:
    import zipfile

    extract = RAW / "ifl2020"
    if not any(extract.rglob("*.shp")):
        extract.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(RAW / "IFL_2020.zip") as archive:
            archive.extractall(extract)
    shp = next(extract.rglob("*.shp"))
    print("ifl", shp, flush=True)
    height, width, transform = world_grid(0.05)
    with fiona.open(shp) as src:
        shapes = [(feat["geometry"], 1) for feat in src]
    print("ifl shapes", len(shapes), flush=True)
    burned = rasterize(
        shapes,
        out_shape=(height, width),
        transform=transform,
        fill=0,
        dtype="uint8",
        all_touched=True,
    )
    rgba = np.zeros(burned.shape + (4,), dtype=np.uint8)
    rgba[burned > 0] = (22, 92, 48, 235)
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    overlay = reproject_rgba(Image.fromarray(rgba, "RGBA"), scale)
    save_pair(composite_on_base(base, overlay), "maps", "intact-forest-landscapes")
    print("ifl cells", int((burned > 0).sum()))


if __name__ == "__main__":
    which = set(sys.argv[1:]) or {"aqueduct", "gez", "ifl"}
    if "gez" in which:
        render_gez()
    if "aqueduct" in which:
        render_aqueduct()
    if "ifl" in which:
        render_ifl()
