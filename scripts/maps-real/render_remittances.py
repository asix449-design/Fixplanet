#!/usr/bin/env python3
"""Remittance plates for the Migration shelf.

Choropleths use World Bank World Development Indicators (CC BY 4.0),
joined to Natural Earth countries. The flow bars are the low- and
middle-income row of Migration and Development Brief 40, Table 1.1
(CC BY 3.0 IGO), 2017–2023 only. The world lines are WDI personal
remittances received and paid.

2024 is the latest year with a broad country set. 2025 is published
for some economies and for the world aggregate, but country coverage
falls sharply, so it is not drawn.

No titles, place names, or unit words are drawn. Axis ticks and the
colour bar are numbers only.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image, ImageDraw

sys.path.insert(0, str(Path(__file__).resolve().parent))
import render as maps  # noqa: E402

RAW = maps.RAW
FOLDER = "migration/remittances"

# Brief 40 Table 1.1, low- and middle-income countries, current US$ billions.
# 2024f is omitted: it predates the later author update quoted in the text.
LMIC_FLOWS = [
    (2017, 475),
    (2018, 522),
    (2019, 548),
    (2020, 542),
    (2021, 601),
    (2022, 651),
    (2023, 656),
]

RECEIVED_CODE = "BX.TRF.PWKR.CD.DT"
GDP_CODE = "BX.TRF.PWKR.DT.GD.ZS"
PAID_CODE = "BM.TRF.PWKR.CD.DT"
COST_CODE = "SI.RMT.COST.IB.ZS"


def load_real_iso3() -> set[str]:
    rows = json.loads((RAW / "wdi-countries.json").read_text())[1]
    return {row["id"] for row in rows if row["region"]["id"] != "NA"}


def load_indicator(path: Path) -> list[dict]:
    return json.loads(path.read_text())[1]


def country_year(
    rows: list[dict],
    year: int,
    real: set[str],
    *,
    positive_only: bool,
) -> dict[str, float]:
    values: dict[str, float] = {}
    for row in rows:
        if row.get("date") != str(year) or row.get("value") is None:
            continue
        code = row.get("countryiso3code") or ""
        if code not in real:
            continue
        value = float(row["value"])
        if positive_only and value <= 0:
            continue
        values[code] = value
    return values


def coverage(rows: list[dict], real: set[str]) -> dict[str, int]:
    counts: dict[str, int] = {}
    for row in rows:
        code = row.get("countryiso3code") or ""
        if code not in real or row.get("value") is None or float(row["value"]) <= 0:
            continue
        counts[row["date"]] = counts.get(row["date"], 0) + 1
    return counts


def world_series(rows: list[dict], last_year: int) -> list[tuple[int, float]]:
    points = []
    for row in rows:
        if row.get("value") is None:
            continue
        year = int(row["date"])
        if year > last_year:
            continue
        points.append((year, float(row["value"])))
    points.sort()
    return points


def chart_canvas() -> Image.Image:
    """Light plate, same 7200×3600 frame as the maps. Not a globe."""
    return Image.new("RGB", (maps.DETAIL_W, maps.DETAIL_H), tuple(int(c) for c in maps.OCEAN))


def draw_ticks(draw: ImageDraw.ImageDraw, ticks: list[tuple[float, float, str]], face) -> None:
    ink = (36, 42, 48, 255)
    for x, y, label in ticks:
        bbox = draw.textbbox((0, 0), label, font=face)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.text((x - tw / 2, y - th / 2), label, fill=ink, font=face)


def render_flow_bars() -> None:
    im = chart_canvas()
    draw = ImageDraw.Draw(im, "RGBA")
    left, right = 700, maps.DETAIL_W - 420
    top, bottom = 420, maps.DETAIL_H - 520
    vmax = 700
    years = [year for year, _ in LMIC_FLOWS]
    vals = [value for _, value in LMIC_FLOWS]
    slot = (right - left) / len(vals)
    bar_w = slot * 0.62
    cmap = plt.get_cmap("YlOrRd")
    norm_lo, norm_hi = 450, 700
    face = maps.font(120)
    small = maps.font(92)
    for i, (year, value) in enumerate(LMIC_FLOWS):
        cx = left + slot * (i + 0.5)
        h = (value / vmax) * (bottom - top)
        x0 = cx - bar_w / 2
        y0 = bottom - h
        t = float(np.clip((value - norm_lo) / (norm_hi - norm_lo), 0, 1))
        rgba = cmap(0.25 + 0.7 * t)
        colour = tuple(int(c * 255) for c in rgba[:3])
        draw.rectangle((x0, y0, x0 + bar_w, bottom), fill=colour)
        draw_ticks(draw, [(cx, y0 - 90, maps.numeric_label(value))], face)
        draw_ticks(draw, [(cx, bottom + 80, str(year))], small)
    for tick in (0, 200, 400, 600):
        y = bottom - (tick / vmax) * (bottom - top)
        draw.line((left - 24, y, right, y), fill=(90, 98, 104, 90), width=3)
        draw_ticks(draw, [(left - 180, y, maps.numeric_label(tick))], small)
    maps.save_pair(im, FOLDER, "remittances-global-flows")


def render_world_lines(received: list[tuple[int, float]], paid: list[tuple[int, float]]) -> None:
    im = chart_canvas()
    draw = ImageDraw.Draw(im, "RGBA")
    left, right = 780, maps.DETAIL_W - 360
    top, bottom = 380, maps.DETAIL_H - 480
    vmax = 900e9
    xmin, xmax = 1966, 2024

    def xy(year: int, value: float) -> tuple[float, float]:
        x = left + (year - xmin) / (xmax - xmin) * (right - left)
        y = bottom - (value / vmax) * (bottom - top)
        return x, y

    small = maps.font(92)
    for tick in (0, 200, 400, 600, 800):
        y = bottom - (tick / 900) * (bottom - top)
        draw.line((left - 16, y, right, y), fill=(90, 98, 104, 90), width=3)
        draw_ticks(draw, [(left - 200, y, maps.numeric_label(tick))], small)
    for year in (1970, 1980, 1990, 2000, 2010, 2020, 2024):
        x, _ = xy(year, 0)
        draw.line((x, bottom, x, bottom + 18), fill=(36, 42, 48, 200), width=4)
        draw_ticks(draw, [(x, bottom + 90, str(year))], small)

    def stroke(points: list[tuple[int, float]], colour: tuple[int, int, int], width: int) -> None:
        coords = [xy(year, value) for year, value in points]
        draw.line(coords, fill=colour + (255,), width=width, joint="curve")

    # Orange: received. Blue: paid. The caption names the colours.
    stroke(paid, (36, 92, 158), 18)
    stroke(received, (214, 96, 24), 26)
    maps.save_pair(im, FOLDER, "remittances-wdi-series")


def main() -> None:
    real = load_real_iso3()
    received_rows = load_indicator(RAW / "wdi-received.json")
    gdp_rows = load_indicator(RAW / "wdi-gdp.json")
    cost_rows = load_indicator(RAW / "wdi-cost.json")
    print("received coverage", coverage(received_rows, real))
    print("gdp coverage", coverage(gdp_rows, real))
    print("cost coverage", coverage(cost_rows, real))

    countries = maps.load_countries()
    _, half_w, half_h = maps.projection_limits()

    received_2024 = country_year(received_rows, 2024, real, positive_only=True)
    gdp_2024 = country_year(gdp_rows, 2024, real, positive_only=True)
    cost_2023 = country_year(cost_rows, 2023, real, positive_only=True)

    reports = []
    for stem, values, cmap, log in (
        ("remittances-top-recipients", received_2024, "YlOrRd", True),
        ("remittances-gdp-share", gdp_2024, "YlOrBr", True),
        ("remittances-sending-cost", cost_2023, "PuRd", True),
    ):
        stats = maps.choropleth(countries, values, FOLDER, stem, cmap, log, half_w, half_h)
        stats.update({"id": stem, "economies": len(values)})
        reports.append(stats)
        print(stem, stats)

    render_flow_bars()
    received_line = [
        (year, value)
        for year, value in world_series(load_indicator(RAW / "wld-received.json"), 2024)
        if year >= 1970
    ]
    paid_line = world_series(load_indicator(RAW / "wld-paid.json"), 2024)
    render_world_lines(received_line, paid_line)
    print(
        "lines",
        "received",
        received_line[0][0],
        received_line[-1][0],
        round(received_line[-1][1] / 1e9, 1),
        "paid",
        paid_line[0][0],
        paid_line[-1][0],
        round(paid_line[-1][1] / 1e9, 1),
    )
    (RAW / "remittances-render.json").write_text(json.dumps(reports, indent=2))


if __name__ == "__main__":
    main()
