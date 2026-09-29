#!/usr/bin/env python3
"""Real-data plates for the four Forests atlas cards added in 2026-09.

    python3 scripts/maps-real/render_forest_pack.py lesiv
    python3 scripts/maps-real/render_forest_pack.py carbon peat
    python3 scripts/maps-real/render_forest_pack.py worldcover
    python3 scripts/maps-real/render_forest_pack.py render

Raw downloads stay in scripts/maps-real/raw/ and are gitignored.
Tree cover is the share of ESA WorldCover 2021 v200 class 10 (10 m)
on the 0.02° grid. Tiles are read from the public AWS bucket and not kept.
"""

from __future__ import annotations

import csv
import io
import json
import os
import sys
import tempfile
import urllib.parse
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
WC_LIST = "https://esa-worldcover.s3.eu-central-1.amazonaws.com/"
WC_PREFIX = "v200/2021/map/"
WC_BASE = WC_LIST + WC_PREFIX
TREE_CLASS = 10
# Map pixel is 1/12000 degree. 0.02° is exactly 240 pixels on a side.
WC_BIN = 240


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


def list_worldcover_maps() -> list[str]:
    import xml.etree.ElementTree as ET

    ns = {"s3": "http://s3.amazonaws.com/doc/2006-03-01/"}
    keys: list[str] = []
    token = None
    while True:
        params = {"list-type": "2", "prefix": WC_PREFIX, "max-keys": "1000"}
        if token:
            params["continuation-token"] = token
        url = WC_LIST + "?" + urllib.parse.urlencode(params)
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=120) as response:
            root = ET.fromstring(response.read())
        for node in root.findall("s3:Contents", ns):
            key = node.findtext("s3:Key", default="", namespaces=ns)
            if key.endswith("_Map.tif"):
                keys.append(key)
        truncated = (root.findtext("s3:IsTruncated", default="false", namespaces=ns) or "").lower() == "true"
        if not truncated:
            break
        token = root.findtext("s3:NextContinuationToken", default=None, namespaces=ns)
        if not token:
            break
    if len(keys) < 2000:
        raise SystemExit(f"WorldCover map listing looks short: {len(keys)} tiles")
    return keys


def count_worldcover_tile(key: str) -> tuple[int, int, np.ndarray, int]:
    """Download one 3° COG, count class-10 pixels in each 0.02° cell, delete the file."""
    import time
    import urllib.error

    last: Exception | None = None
    for attempt in range(4):
        try:
            return _count_worldcover_tile_once(key)
        except (TimeoutError, urllib.error.URLError, ConnectionError, OSError) as exc:
            last = exc
            time.sleep(3 * (attempt + 1))
    if last is not None:
        raise last
    raise RuntimeError(key)


def _count_worldcover_tile_once(key: str) -> tuple[int, int, np.ndarray, int]:
    import rasterio
    from rasterio.windows import Window

    name = Path(key).name
    url = WC_BASE + name
    fd, tmp_name = tempfile.mkstemp(suffix=".tif")
    os.close(fd)
    dest = Path(tmp_name)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=300) as response, dest.open("wb") as handle:
            while True:
                block = response.read(1 << 20)
                if not block:
                    break
                handle.write(block)
        with rasterio.Env(GDAL_CACHEMAX=32):
            with rasterio.open(dest) as src:
                left, _bottom, _right, top = src.bounds
                yi0 = int(np.floor((90.0 - top) / RES + 1e-6))
                xi0 = int(np.floor((left + 180.0) / RES + 1e-6))
                if abs((90.0 - yi0 * RES) - top) > 1e-4 or abs((-180.0 + xi0 * RES) - left) > 1e-4:
                    raise RuntimeError(f"{name} is not aligned to the 0.02° grid ({left}, {top})")
                if src.width % WC_BIN or src.height % WC_BIN:
                    raise RuntimeError(f"{name} size {src.width}x{src.height} is not a multiple of {WC_BIN}")
                nlat = src.height // WC_BIN
                nlon = src.width // WC_BIN
                counts = np.zeros((nlat, nlon), dtype=np.uint32)
                step = WC_BIN * 10
                for y0 in range(0, src.height, step):
                    height = min(step, src.height - y0)
                    block = src.read(1, window=Window(0, y0, src.width, height))
                    rows = height // WC_BIN
                    binned = (block == TREE_CLASS).reshape(rows, WC_BIN, nlon, WC_BIN).sum(axis=(1, 3))
                    counts[y0 // WC_BIN : y0 // WC_BIN + rows] = binned
        return yi0, xi0, counts, int(counts.sum())
    finally:
        dest.unlink(missing_ok=True)


def _save_worldcover_ckpt(total: np.ndarray, done: set[str]) -> None:
    """One file so a resume cannot add a tile twice."""
    tmp = RAW / "worldcover_tree_ckpt_tmp"
    np.savez(tmp, grid=total, done=np.array(sorted(done)))
    os.replace(Path(str(tmp) + ".npz"), RAW / "worldcover_tree_ckpt.npz")


def _load_worldcover_ckpt() -> tuple[np.ndarray, set[str]] | None:
    path = RAW / "worldcover_tree_ckpt.npz"
    if not path.exists():
        return None
    bundle = np.load(path, allow_pickle=False)
    done = set(bundle["done"].astype(str).tolist())
    return bundle["grid"], done


def aggregate_worldcover() -> None:
    from concurrent.futures import ProcessPoolExecutor, as_completed

    keys = list_worldcover_maps()
    loaded = _load_worldcover_ckpt()
    if loaded is None:
        total = np.zeros((NLAT, NLON), dtype=np.uint32)
        done: set[str] = set()
    else:
        total, done = loaded
        print("resume", len(done), "of", len(keys), flush=True)
    pending = [key for key in keys if Path(key).name not in done]
    print("worldcover tiles", len(keys), "pending", len(pending), flush=True)
    if not pending and (RAW / "worldcover_tree_0p02.npy").exists():
        print("worldcover already aggregated", flush=True)
        return
    finished = 0
    with ProcessPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(count_worldcover_tile, key): key for key in pending}
        for future in as_completed(futures):
            key = futures[future]
            name = Path(key).name
            yi0, xi0, counts, tile_trees = future.result()
            y1, x1 = yi0 + counts.shape[0], xi0 + counts.shape[1]
            if yi0 >= 0 and xi0 >= 0 and y1 <= NLAT and x1 <= NLON:
                total[yi0:y1, xi0:x1] += counts
            else:
                raise RuntimeError(f"{name} falls outside the global grid ({yi0}, {xi0}, {counts.shape})")
            done.add(name)
            finished += 1
            if finished % 50 == 0 or finished == len(pending):
                _save_worldcover_ckpt(total, done)
                print(f"{len(done)}/{len(keys)} {name} tile_trees {tile_trees}", flush=True)
    np.save(RAW / "worldcover_tree_0p02.npy", total)
    meta = {
        "tiles": len(keys),
        "tree_pixels": int(total.sum()),
        "pixel_deg": 1 / 12000,
        "pixels_per_cell": WC_BIN * WC_BIN,
        "class": TREE_CLASS,
        "product": "ESA WorldCover 10 m 2021 v200",
    }
    (RAW / "worldcover_tree_meta.json").write_text(json.dumps(meta, indent=2))
    print("worldcover cells", int((total > 0).sum()), "trees", meta["tree_pixels"], flush=True)


def render_tree() -> None:
    ensure_water()
    counts = np.load(RAW / "worldcover_tree_0p02.npy")
    meta = json.loads((RAW / "worldcover_tree_meta.json").read_text())
    water = inland_water_mask(counts.shape[0], counts.shape[1])
    counts = np.array(counts, copy=True)
    counts[water] = 0
    share_grid(counts, float(meta["pixels_per_cell"]), "Greens", "forests", "tree-cover", 0.98)
    print("tree meta", meta["tree_pixels"], "per cell", meta["pixels_per_cell"], flush=True)


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
    if "worldcover" in which and "render" not in which:
        aggregate_worldcover()
    if "render" in which:
        if (RAW / "lesiv_planted_0p02.npy").exists():
            render_planted()
        if (RAW / "peatmap_0p02.npy").exists():
            render_peat()
        else:
            aggregate_peat()
            render_peat()
        if (RAW / "worldcover_tree_0p02.npy").exists() and (RAW / "worldcover_tree_meta.json").exists():
            render_tree()
        elif "worldcover" in which:
            aggregate_worldcover()
            render_tree()
        render_carbon()


if __name__ == "__main__":
    main()
