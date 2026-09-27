#!/usr/bin/env python3
"""Real-data plates for the four Forests atlas cards added in 2026-09.

    python3 scripts/maps-real/render_forest_pack.py lesiv
    python3 scripts/maps-real/render_forest_pack.py carbon peat
    python3 scripts/maps-real/render_forest_pack.py render

Raw downloads stay in scripts/maps-real/raw/ and are gitignored.
Tree cover (MOD44B) is not rendered here: the Collection 6.1 granules
redirect to an Earthdata login, and no public mosaic of that product
was available.
"""

from __future__ import annotations

import csv
import io
import json
import sys
import urllib.request
import zipfile
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.colors import Normalize
from PIL import Image

from render import (
    LAND,
    OCEAN,
    RAW,
    choropleth,
    inland_water_mask,
    load_countries,
    projection_limits,
    save_pair,
)
from render_pass2 import colorize, countries_and_base, paint_equal_earth, share_grid

RES = 0.02
NLAT = int(180 / RES)
NLON = int(360 / RES)
PLANTED = (31, 32)
UA = "Mozilla/5.0 (compatible; FixPlanetMapBot/1.0)"

FRA_BULK = (
    "https://fra-data.fao.org/api/file/bulk-download"
    "?assessmentName=fra&cycleName=2025&countryIso=WO"
    "&includeClimaticDomain=false&includeVoluntaryUpdates=true&lang=en"
)
PEAT_ZIPS = {
    "Africa.zip": "https://archive.researchdata.leeds.ac.uk/251/4/Africa.zip",
    "Asia.zip": "https://archive.researchdata.leeds.ac.uk/251/5/Asia.zip",
    "Europe.zip": "https://archive.researchdata.leeds.ac.uk/251/6/Europe.zip",
    "North_America.zip": "https://archive.researchdata.leeds.ac.uk/251/11/North_America.zip",
    "Oceania.zip": "https://archive.researchdata.leeds.ac.uk/251/12/Oceania.zip",
    "South_America.zip": "https://archive.researchdata.leeds.ac.uk/251/13/South_America.zip",
}
NE_ZIPS = {
    "ne_10m_lakes.zip": "https://naciscdn.org/naturalearth/10m/physical/ne_10m_lakes.zip",
    "ne_10m_land.zip": "https://naciscdn.org/naturalearth/10m/physical/ne_10m_land.zip",
}


def fetch(url: str, dest: Path) -> None:
    if dest.exists() and dest.stat().st_size > 1000:
        print("have", dest.name, flush=True)
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    print("get", url, flush=True)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=180) as response, dest.open("wb") as handle:
        while True:
            block = response.read(1 << 20)
            if not block:
                break
            handle.write(block)
    print("wrote", dest, dest.stat().st_size, flush=True)


def ensure_water() -> None:
    for name, url in NE_ZIPS.items():
        dest = RAW / name
        folder = RAW / name.replace(".zip", "")
        if any(folder.glob("*.shp")):
            continue
        fetch(url, dest)
        folder.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(dest) as archive:
            archive.extractall(folder)


def accumulate_lesiv(name: str, total: np.ndarray) -> dict:
    """Count planted pixels from one tile in row strips. A full tile is 1.6 GB."""
    import rasterio
    from rasterio.windows import Window

    zip_path = RAW / "tiles-v3.2.zip"
    path = f"/vsizip/{zip_path}/tiles v3.2/{name}"
    planted = 0
    classes = np.zeros(256, dtype=np.int64)
    pixel = None
    with rasterio.Env(GDAL_CACHEMAX=64):
        with rasterio.open(path) as src:
            transform = src.transform
            pixel = abs(float(transform.a))
            for y0 in range(0, src.height, 1500):
                height = min(1500, src.height - y0)
                block = src.read(1, window=Window(0, y0, src.width, height))
                classes += np.bincount(block.ravel(), minlength=256)
                mask = block == PLANTED[0]
                mask |= block == PLANTED[1]
                ys, xs = np.nonzero(mask)
                planted += int(ys.size)
                if ys.size:
                    lons = transform.c + (xs + 0.5) * transform.a
                    lats = transform.f + (ys + y0 + 0.5) * transform.e
                    xi = np.floor((lons + 180.0) / RES).astype(np.int32)
                    yi = np.floor((90.0 - lats) / RES).astype(np.int32)
                    ok = (xi >= 0) & (xi < NLON) & (yi >= 0) & (yi < NLAT)
                    np.add.at(total, (yi[ok], xi[ok]), 1)
                del block, mask
    return {
        "planted": planted,
        "pixel": pixel,
        "classes": {str(i): int(c) for i, c in enumerate(classes) if c},
    }


def aggregate_lesiv() -> None:
    zip_path = RAW / "tiles-v3.2.zip"
    if not zip_path.exists():
        raise SystemExit("missing tiles-v3.2.zip")
    with zipfile.ZipFile(zip_path) as archive:
        names = [Path(info.filename).name for info in archive.infolist() if info.filename.endswith(".tif")]
    print("lesiv tiles", len(names), flush=True)
    total = np.zeros((NLAT, NLON), dtype=np.uint32)
    classes: dict[str, int] = {}
    planted = 0
    pixel = None
    for done, name in enumerate(names, 1):
        stats = accumulate_lesiv(name, total)
        planted += stats["planted"]
        pixel = stats["pixel"]
        for key, count in stats["classes"].items():
            classes[key] = classes.get(key, 0) + count
        print(f"{done}/{len(names)} {name} planted {stats['planted']}", flush=True)
    out = RAW / "lesiv_planted_0p02.npy"
    np.save(out, total)
    meta = {
        "planted_pixels": planted,
        "pixel_deg": pixel,
        "pixels_per_cell": (RES / pixel) ** 2 if pixel else None,
        "classes": classes,
        "classes_in_plate": list(PLANTED),
    }
    (RAW / "lesiv_planted_meta.json").write_text(json.dumps(meta, indent=2))
    print("lesiv grid", int((total > 0).sum()), "meta", meta["pixels_per_cell"], flush=True)


def fra_values() -> dict[str, float]:
    dest = RAW / "fra-bulk.zip"
    fetch(FRA_BULK, dest)
    wanted = {
        "agb": "2d_carbon_agb_total_",
        "bgb": "2d_carbon_bgb_total_",
    }
    found: dict[str, str] = {}
    with zipfile.ZipFile(dest) as archive:
        for info in archive.infolist():
            base = Path(info.filename).name
            for key, prefix in wanted.items():
                if base.startswith(prefix) and base.endswith(".csv"):
                    found[key] = info.filename
        if set(found) != set(wanted):
            raise SystemExit(f"FRA zip missing carbon tables: {found}")
        tables = {}
        for key, name in found.items():
            text = archive.read(name).decode("utf-8-sig")
            tables[key] = list(csv.DictReader(io.StringIO(text)))
    values: dict[str, float] = {}
    for row in tables["agb"]:
        iso = (row.get("iso3") or "").strip()
        if len(iso) != 3:
            continue
        above = (row.get("2025") or "").strip()
        if not above:
            continue
        below_row = next((item for item in tables["bgb"] if (item.get("iso3") or "").strip() == iso), None)
        below = (below_row.get("2025") or "").strip() if below_row else ""
        if not below:
            continue
        values[iso] = float(above) + float(below)
    print("carbon countries", len(values), "sum Mt", round(sum(values.values()), 1), flush=True)
    return values


def render_carbon() -> None:
    values = fra_values()
    scale, half_w, half_h = projection_limits()
    countries = load_countries()
    stats = choropleth(countries, values, "forests", "forest-carbon-stock", "YlOrBr", True, half_w, half_h)
    print("carbon", stats, "scale", scale, flush=True)


def render_planted() -> None:
    ensure_water()
    counts = np.load(RAW / "lesiv_planted_0p02.npy")
    meta = json.loads((RAW / "lesiv_planted_meta.json").read_text())
    water = inland_water_mask(counts.shape[0], counts.shape[1])
    counts = np.array(counts, copy=True)
    counts[water] = 0
    share_grid(counts, float(meta["pixels_per_cell"]), "YlGn", "forests", "planted-forests", 0.98)
    print("planted meta", meta["planted_pixels"], "per cell", meta["pixels_per_cell"], flush=True)


def aggregate_peat() -> None:
    import rasterio
    from rasterio.features import rasterize

    folder = RAW / "peatmap"
    folder.mkdir(parents=True, exist_ok=True)
    for name, url in PEAT_ZIPS.items():
        dest = folder / name
        extract = folder / name.replace(".zip", "")
        fetch(url, dest)
        if not any(extract.rglob("*.shp")):
            extract.mkdir(parents=True, exist_ok=True)
            with zipfile.ZipFile(dest) as archive:
                archive.extractall(extract)
    import fiona
    from rasterio.warp import transform_geom

    transform = rasterio.transform.from_bounds(-180, -90, 180, 90, NLON, NLAT)
    burned = np.zeros((NLAT, NLON), dtype=np.uint8)
    polygons = 0
    for shp in sorted(folder.rglob("*.shp")):
        with fiona.open(shp) as src:
            crs = src.crs
            geoms = [feat["geometry"] for feat in src if feat["geometry"]]
        if not geoms:
            continue
        # PEATMAP ships in World Cylindrical Equal Area (ESRI:54034).
        if crs and crs.to_string() not in {"EPSG:4326", "OGC:CRS84"}:
            geoms = [transform_geom(crs, "EPSG:4326", geom, antimeridian_cutting=True) for geom in geoms]
        part = rasterize(
            [(geom, 1) for geom in geoms],
            out_shape=(NLAT, NLON),
            transform=transform,
            fill=0,
            dtype="uint8",
            all_touched=True,
        )
        burned = np.maximum(burned, part)
        polygons += len(geoms)
        print("peat", shp.name, len(geoms), "cells", int(burned.sum()), flush=True)
        del geoms, part
    if polygons == 0:
        raise SystemExit("PEATMAP shapefiles had no geometries")
    np.save(RAW / "peatmap_0p02.npy", burned)
    print("peat cells", int(burned.sum()), flush=True)


def render_peat() -> None:
    ensure_water()
    grid = np.load(RAW / "peatmap_0p02.npy").astype(np.float32)
    grid[inland_water_mask(grid.shape[0], grid.shape[1])] = np.nan
    norm = Normalize(0, 1)
    rgba = colorize(np.where(grid > 0, grid, np.nan), norm, plt.get_cmap("BuPu"))
    scale, base = countries_and_base(tuple(int(c) for c in OCEAN), tuple(int(c) for c in LAND))
    im = paint_equal_earth(Image.fromarray(rgba, "RGBA"), scale, base, 0, 1, "BuPu")
    save_pair(im, "forests", "peatlands")
    print("peat positive", int(np.nansum(grid > 0)), flush=True)


def main() -> None:
    which = set(sys.argv[1:]) or {"lesiv", "carbon", "peat", "render"}
    if "lesiv" in which:
        aggregate_lesiv()
    if "carbon" in which:
        render_carbon()
    if "peat" in which and "render" not in which:
        aggregate_peat()
    if "render" in which:
        if (RAW / "lesiv_planted_0p02.npy").exists():
            render_planted()
        if (RAW / "peatmap_0p02.npy").exists():
            render_peat()
        else:
            aggregate_peat()
            render_peat()
        render_carbon()


if __name__ == "__main__":
    main()
