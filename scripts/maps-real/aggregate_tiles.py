#!/usr/bin/env python3
"""Aggregate fine rasters to a 0.02° count grid.

Hansen Global Forest Change lossyear tiles and Global Mangrove Watch v3
GeoTIFFs are counted into scripts/maps-real/raw/*.npy and then deleted.
"""

from __future__ import annotations

import io
import sys
import urllib.request
import zipfile
from pathlib import Path

import numpy as np
import rasterio
from rasterio.io import MemoryFile
from rasterio.windows import Window

RAW = Path(__file__).resolve().parent / "raw"
RES = 0.02
NLAT = int(180 / RES)
NLON = int(360 / RES)


def accumulate(dataset, grid: np.ndarray, positive) -> int:
    """Sum positive pixels into the 0.02° grid.

    Hansen and GMW tiles are north-up degree grids. When the pixel size
    divides 0.02° evenly, sum by reshaping instead of scattering points.
    """
    transform = dataset.transform
    pixel = abs(float(transform.a))
    if pixel <= 0 or abs(float(transform.b)) > 1e-12 or abs(float(transform.d)) > 1e-12:
        return _accumulate_scatter(dataset, grid, positive)
    factor = RES / pixel
    if abs(factor - round(factor)) > 1e-3:
        return _accumulate_scatter(dataset, grid, positive)
    factor = int(round(factor))
    # Corner of pixel (0, 0) must sit on a 0.02° boundary.
    if abs((transform.c + 180) / RES - round((transform.c + 180) / RES)) > 1e-3:
        return _accumulate_scatter(dataset, grid, positive)
    if abs((90 - transform.f) / RES - round((90 - transform.f) / RES)) > 1e-3:
        return _accumulate_scatter(dataset, grid, positive)
    col0 = int(round((transform.c + 180) / RES))
    row0 = int(round((90 - transform.f) / RES))
    counted = 0
    step = factor * 40
    for y0 in range(0, dataset.height, step):
        height = min(step, dataset.height - y0)
        usable_h = (height // factor) * factor
        if usable_h == 0:
            continue
        block = dataset.read(1, window=Window(0, y0, dataset.width, usable_h))
        usable_w = (block.shape[1] // factor) * factor
        mask = positive(block[:, :usable_w])
        bins_y = usable_h // factor
        bins_x = usable_w // factor
        counts = mask.reshape(bins_y, factor, bins_x, factor).sum(axis=(1, 3)).astype(np.uint32)
        gy0 = row0 + y0 // factor
        gx0 = col0
        gy1 = min(NLAT, gy0 + bins_y)
        gx1 = min(NLON, gx0 + bins_x)
        if gy0 < 0 or gx0 < 0 or gy1 <= gy0 or gx1 <= gx0:
            continue
        grid[gy0:gy1, gx0:gx1] += counts[: gy1 - gy0, : gx1 - gx0].astype(np.uint16)
        counted += int(counts.sum())
    return counted


def _accumulate_scatter(dataset, grid: np.ndarray, positive) -> int:
    transform = dataset.transform
    counted = 0
    for row0 in range(0, dataset.height, 600):
        height = min(600, dataset.height - row0)
        block = dataset.read(1, window=Window(0, row0, dataset.width, height))
        ys, xs = np.nonzero(positive(block))
        if ys.size == 0:
            continue
        lons = transform.c + (xs + 0.5) * transform.a + (ys + row0) * transform.b
        lats = transform.f + (xs + 0.5) * transform.d + (ys + row0) * transform.e
        xi = np.floor((lons + 180.0) / RES).astype(np.int32)
        yi = np.floor((90.0 - lats) / RES).astype(np.int32)
        ok = (xi >= 0) & (xi < NLON) & (yi >= 0) & (yi < NLAT)
        np.add.at(grid, (yi[ok], xi[ok]), 1)
        counted += int(ok.sum())
    return counted


def hansen_names() -> list[str]:
    names = []
    for north in range(80, -60, -10):
        lat = f"{north:02d}N" if north >= 0 else f"{-north:02d}S"
        for east in range(-180, 180, 10):
            lon = f"{east:03d}E" if east >= 0 else f"{-east:03d}W"
            names.append(f"Hansen_GFC-2024-v1.12_lossyear_{lat}_{lon}.tif")
    return names


def run_hansen() -> None:
    grid = np.zeros((NLAT, NLON), dtype=np.uint16)
    out = RAW / "hansen_loss_0p02.npy"
    base = "https://storage.googleapis.com/earthenginepartners-hansen/GFC-2024-v1.12/"
    names = hansen_names()
    for index, name in enumerate(names, 1):
        url = base + name
        try:
            payload = urllib.request.urlopen(url, timeout=120).read()
        except Exception as exc:
            print(f"{index}/{len(names)} miss {name} {type(exc).__name__}", flush=True)
            continue
        if len(payload) < 2000:
            print(f"{index}/{len(names)} tiny {name} {len(payload)}", flush=True)
            continue
        with MemoryFile(payload) as mem:
            with mem.open() as dataset:
                n = accumulate(dataset, grid, lambda block: block > 0)
        print(f"{index}/{len(names)} {name} {len(payload)/1e6:.1f}MB loss-px {n} grid {int((grid>0).sum())}", flush=True)
        if index % 20 == 0:
            np.save(out, grid)
    np.save(out, grid)
    print("wrote", out, "cells", int((grid > 0).sum()))


def run_gmw() -> None:
    grid = np.zeros((NLAT, NLON), dtype=np.uint16)
    out = RAW / "gmw_v3_2020_0p02.npy"
    zpath = RAW / "gmw_v3_2020_gtiff.zip"
    with zipfile.ZipFile(zpath) as archive:
        tifs = [info for info in archive.infolist() if info.filename.lower().endswith((".tif", ".tiff"))]
        print("gmw tiles", len(tifs), flush=True)
        for index, info in enumerate(tifs, 1):
            payload = archive.read(info)
            with MemoryFile(payload) as mem:
                with mem.open() as dataset:
                    n = accumulate(dataset, grid, lambda block: block > 0)
            if index % 50 == 0 or index == len(tifs):
                print(f"gmw {index}/{len(tifs)} {info.filename} px {n}", flush=True)
    np.save(out, grid)
    print("wrote", out, "cells", int((grid > 0).sum()))


if __name__ == "__main__":
    which = set(sys.argv[1:]) or {"hansen", "gmw"}
    RAW.mkdir(parents=True, exist_ok=True)
    if "gmw" in which:
        run_gmw()
    if "hansen" in which:
        run_hansen()
