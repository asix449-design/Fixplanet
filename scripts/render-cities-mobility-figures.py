#!/usr/bin/env python3
"""Redraw Cities mobility figures from cited data. No words in the bitmaps.

D — World Bank, Urban and Interurban Road Pricing (August 2023), Table 4.7,
    percent change during the Stockholm pricing trial. CC BY 3.0 IGO.
    City centre / municipality of Stockholm / 35 km² area.

E — EEA Air Quality e-Reporting annual means for nitrogen dioxide, 2022 and
    2023, the station data behind Map 4 of Europe's air quality status 2024.
    Classes: at or below 10, above 10 up to 40, above 40 (µg/m³).
    Frame: longitude −25 to 45, latitude 34 to 72. CC BY 4.0.
    Coastlines: Natural Earth 50m (public domain), not part of the EEA data.

F — IEA chart series "Electric bus sales by region, 2020-2025"
    (thousands of buses), CC BY 4.0. Stack order bottom to top matches the
    chart CSV columns: China, Europe, United States, India, Latin America,
    rest of world.
"""

from __future__ import annotations

import csv
import json
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "solutions"
RAW = Path("/tmp/cities-src")

# Shared with the HTML legends in src/i18n/solutions-cities-*.ts
D_COLORS = ("#0b3a5b", "#1a7a6d", "#c47b2b")
E_COLORS = ("#2b6cb0", "#e08a1e", "#c0392b")  # <=10, (10, 40], >40
F_COLORS = ("#0b3a5b", "#1a7a6d", "#c47b2b", "#8c3a4b", "#3d6b9a", "#6b5b4b")

# Table 4.7 percent change (negative = reduction). Order: NOx, CO, PM10, VOCs, benzene, CO2.
# Each triple is city centre, municipality of Stockholm, 35 km² area.
TABLE_47 = [
    (-8.5, -2.7, -1.3),
    (-14.0, -5.1, -2.9),
    (-13.0, -3.4, -1.5),
    (-14.0, -5.2, -2.9),
    (-14.0, -5.3, -3.0),
    (-13.0, -5.4, -2.7),
]

# IEA data-chart-csv, units: thousand buses.
IEA_YEARS = [2020, 2021, 2022, 2023, 2024, 2025]
IEA_SERIES = [
    [51.6, 41.2, 43.6, 24.3, 39.5, 40.1],
    [2.5, 4.0, 5.0, 8.4, 9.7, 12.5],
    [0.7, 0.5, 1.8, 2.9, 3.0, 1.8],
    [2.2, 1.2, 2.0, 2.3, 3.2, 4.3],
    [0.6, 0.2, 1.3, 1.9, 0.9, 3.1],
    [2.2, 2.6, 4.7, 5.9, 5.8, 6.1],
]

W, H, DPI = 1600, 1200, 100


def _blank(fig_color="#f7f4ee"):
    fig = plt.figure(figsize=(W / DPI, H / DPI), dpi=DPI, facecolor=fig_color)
    return fig


def render_stockholm() -> None:
    fig = _blank()
    ax = fig.add_axes([0.08, 0.10, 0.88, 0.82])
    ax.set_facecolor("#f7f4ee")
    n = len(TABLE_47)
    width = 0.22
    xs = list(range(n))
    for series, color, shift in zip(
        zip(*TABLE_47),
        D_COLORS,
        (-width, 0, width),
    ):
        ax.bar(
            [x + shift for x in xs],
            series,
            width=width * 0.92,
            color=color,
            zorder=3,
        )
    ax.axhline(0, color="#1c1c1c", linewidth=0.8, zorder=2)
    ax.set_xlim(-0.6, n - 0.4)
    ax.set_ylim(-16, 1.2)
    ax.set_yticks([0, -5, -10, -15])
    ax.set_xticks(xs)
    ax.set_xticklabels([str(i) for i in range(1, n + 1)])
    ax.tick_params(colors="#1c1c1c", labelsize=14, length=0)
    for spine in ax.spines.values():
        spine.set_color("#cfc8bc")
    ax.yaxis.grid(True, color="#e4ddd0", zorder=0)
    ax.set_axisbelow(True)
    fig.savefig(OUT / "congestion-charging.jpg", pil_kwargs={"quality": 92})
    plt.close(fig)


def _iter_rings(geom):
    gtype = geom.get("type")
    coords = geom.get("coordinates") or []
    if gtype == "Polygon":
        if coords:
            yield coords[0]
    elif gtype == "MultiPolygon":
        for poly in coords:
            if poly:
                yield poly[0]


def render_no2() -> dict:
    stations = []
    with (RAW / "no2.csv").open(newline="") as handle:
        for row in csv.DictReader(handle):
            if row["inAQReportYN"] != "Yes" or row["DataCovFilterYN"] != "Yes":
                continue
            if not row["AirPollutionLevel"] or not row["Latitude"] or not row["Longitude"]:
                continue
            lat = float(row["Latitude"])
            lon = float(row["Longitude"])
            if not (-25 <= lon <= 45 and 34 <= lat <= 72):
                continue
            level = float(row["AirPollutionLevel"])
            if level > 40:
                klass = 2
            elif level > 10:
                klass = 1
            else:
                klass = 0
            stations.append((int(row["YearOfStatistics"]), lon, lat, klass))

    countries = json.loads((RAW / "ne_50m_admin_0_countries.geojson").read_text())
    fig = _blank("#d5e3ee")
    counts = {}
    for panel, year in enumerate((2022, 2023)):
        ax = fig.add_axes([0.03 + panel * 0.49, 0.08, 0.45, 0.84])
        ax.set_facecolor("#d5e3ee")
        ax.set_xlim(-25, 45)
        ax.set_ylim(34, 72)
        ax.set_aspect("equal", adjustable="box")
        for feature in countries["features"]:
            geom = feature.get("geometry")
            if not geom:
                continue
            for ring in _iter_rings(geom):
                if len(ring) < 4:
                    continue
                # cheap reject
                xs = [pt[0] for pt in ring]
                ys = [pt[1] for pt in ring]
                if max(xs) < -25 or min(xs) > 45 or max(ys) < 34 or min(ys) > 72:
                    continue
                ax.add_patch(
                    Polygon(
                        ring,
                        closed=True,
                        facecolor="#efe8dc",
                        edgecolor="#b7b0a4",
                        linewidth=0.25,
                        zorder=1,
                    )
                )
        buckets = {0: [], 1: [], 2: []}
        for y, lon, lat, klass in stations:
            if y == year:
                buckets[klass].append((lon, lat))
        counts[year] = {k: len(v) for k, v in buckets.items()}
        for klass, color, size in ((0, E_COLORS[0], 7), (1, E_COLORS[1], 8), (2, E_COLORS[2], 16)):
            pts = buckets[klass]
            if not pts:
                continue
            ax.scatter(
                [p[0] for p in pts],
                [p[1] for p in pts],
                s=size,
                c=color,
                linewidths=0,
                zorder=3 + klass,
                alpha=0.9,
            )
        ax.set_xticks([])
        ax.set_yticks([])
        for spine in ax.spines.values():
            spine.set_visible(False)
        ax.text(
            0.04,
            0.96,
            str(year),
            transform=ax.transAxes,
            ha="left",
            va="top",
            fontsize=16,
            color="#1c1c1c",
            fontfamily="DejaVu Sans",
        )
    fig.savefig(OUT / "low-emission-zones.jpg", pil_kwargs={"quality": 92})
    plt.close(fig)
    return counts


def render_buses() -> None:
    fig = _blank()
    ax = fig.add_axes([0.09, 0.12, 0.86, 0.80])
    ax.set_facecolor("#f7f4ee")
    bottoms = [0.0] * len(IEA_YEARS)
    for series, color in zip(IEA_SERIES, F_COLORS):
        ax.bar(
            IEA_YEARS,
            series,
            bottom=bottoms,
            width=0.72,
            color=color,
            zorder=3,
        )
        bottoms = [b + v for b, v in zip(bottoms, series)]
    ax.set_ylim(0, 80)
    ax.set_yticks([0, 20, 40, 60, 80])
    ax.set_xticks(IEA_YEARS)
    ax.tick_params(colors="#1c1c1c", labelsize=14, length=0)
    for spine in ax.spines.values():
        spine.set_color("#cfc8bc")
    ax.yaxis.grid(True, color="#e4ddd0", zorder=0)
    ax.set_axisbelow(True)
    fig.savefig(OUT / "electric-buses.jpg", pil_kwargs={"quality": 92})
    plt.close(fig)
    print("2025 stack", [series[-1] for series in IEA_SERIES], "sum", round(sum(s[-1] for s in IEA_SERIES), 1))
    print("2024 sum", round(sum(s[-2] for s in IEA_SERIES), 1))
    print("2020 China share", round(100 * IEA_SERIES[0][0] / sum(s[0] for s in IEA_SERIES), 1))
    print("2025 China share", round(100 * IEA_SERIES[0][-1] / sum(s[-1] for s in IEA_SERIES), 1))


def save_photo(src: Path, dest: Path, max_w: int = 2400) -> None:
    im = Image.open(src).convert("RGB")
    if im.width > max_w:
        height = round(im.height * max_w / im.width)
        im = im.resize((max_w, height), Image.Resampling.LANCZOS)
    im.save(dest, "JPEG", quality=90, optimize=True)
    print(dest.name, im.size)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    render_stockholm()
    counts = render_no2()
    render_buses()
    save_photo(RAW / "raw" / "brt.jpg", OUT / "bus-rapid-transit.jpg")
    save_photo(RAW / "raw" / "cycle.jpg", OUT / "walking-and-cycling-networks.jpg")
    print("NO2 counts", counts)


if __name__ == "__main__":
    main()
