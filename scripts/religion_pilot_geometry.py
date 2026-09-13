#!/usr/bin/env python3
"""Hand-authored schematic religion regions for the 1–400 CE pilot.

Coarse ellipse unions — original Fix Planet artwork, not a trace of any
commercial atlas. Americas / Oceania are omitted here; the renderer paints
those lands unmapped gray.
"""

from __future__ import annotations

import json
import math
from pathlib import Path

from shapely.geometry import MultiPolygon, Point, Polygon, mapping
from shapely.ops import unary_union

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data/religion-pilot"


def ellipse(cx: float, cy: float, rx: float, ry: float, n: int = 28) -> Polygon:
    ring = [
        (cx + rx * math.cos(2 * math.pi * i / n), cy + ry * math.sin(2 * math.pi * i / n))
        for i in range(n)
    ]
    ring.append(ring[0])
    return Polygon(ring)


def union(parts: list[Polygon]) -> Polygon | MultiPolygon:
    geom = unary_union([p for p in parts if p.is_valid and not p.is_empty])
    if geom.is_empty:
        return Polygon()
    return geom


# --- shared umbrellas -------------------------------------------------------

def roman_pagan_core() -> list[Polygon]:
    """Mediterranean civic-cult wash — clipped to land in the renderer."""
    return [
        ellipse(12.0, 38.5, 22.0, 11.0),
        ellipse(-2.0, 51.5, 6.5, 4.8),
        ellipse(31.0, 28.0, 6.5, 7.0),
    ]


def zoroastrian_parthia() -> list[Polygon]:
    return [ellipse(55.0, 33.0, 14.0, 9.5), ellipse(47.0, 34.5, 6.0, 4.5)]


def zoroastrian_sasanian() -> list[Polygon]:
    return [ellipse(54.0, 32.8, 15.5, 10.0), ellipse(46.0, 34.0, 7.5, 5.2)]


def hindu_umbrella() -> list[Polygon]:
    return [ellipse(80.0, 21.0, 16.0, 16.5)]


def buddhist_year1() -> list[Polygon]:
    return [
        ellipse(83.0, 25.0, 7.5, 4.0),
        ellipse(80.7, 7.6, 1.6, 2.4),
        ellipse(70.0, 33.0, 5.0, 3.0),
    ]


def buddhist_kushan() -> list[Polygon]:
    return buddhist_year1() + [ellipse(68.0, 35.2, 6.5, 4.0)]


def buddhist_silk() -> list[Polygon]:
    return buddhist_kushan() + [ellipse(82.0, 40.0, 9.0, 3.0), ellipse(76.0, 39.2, 5.0, 2.4)]


def chinese_imperial() -> list[Polygon]:
    return [ellipse(112.0, 32.5, 14.0, 12.0)]


def african_trad() -> list[Polygon]:
    return [ellipse(18.0, 2.0, 36.0, 34.0)]


def local_trad() -> list[Polygon]:
    return [
        ellipse(20.0, 56.0, 36.0, 16.0),
        ellipse(80.0, 52.0, 42.0, 12.0),
        ellipse(46.0, 22.0, 10.0, 9.0),
        ellipse(105.0, 13.0, 14.0, 11.0),
        ellipse(134.0, 36.0, 10.0, 10.0),
        ellipse(40.0, 8.0, 6.0, 7.0),
        ellipse(-8.0, 53.2, 2.8, 2.8),
    ]


# --- points -----------------------------------------------------------------

CHRISTIAN_DOTS_1 = [
    ("Palestine", 35.22, 31.78),
    ("Antioch", 36.20, 36.20),
    ("Rome", 12.48, 41.90),
    ("Alexandria", 29.92, 31.20),
]

CHRISTIAN_DOTS_100 = CHRISTIAN_DOTS_1 + [
    ("Ephesus", 27.34, 37.94),
    ("Corinth", 22.93, 37.94),
    ("Carthage", 10.32, 36.85),
    ("Smyrna", 27.14, 38.42),
]

JEWISH_SPOTS = [
    ("Judea", 35.20, 31.70, 0.55, 0.75),
    ("Babylon", 44.45, 32.50, 0.75, 0.55),
    ("Alexandria", 29.92, 31.20, 0.38, 0.28),
    ("Rome", 12.50, 41.90, 0.28, 0.22),
    ("Sardis", 28.04, 38.49, 0.32, 0.24),
    ("Cyrene", 21.86, 32.82, 0.30, 0.22),
]


def christian_hatch_200() -> list[Polygon]:
    return [
        ellipse(36.4, 35.4, 4.0, 3.4),
        ellipse(32.0, 38.6, 7.5, 3.8),
        ellipse(30.8, 29.4, 3.4, 4.2),
        ellipse(12.6, 41.8, 2.0, 1.8),
        ellipse(10.3, 36.7, 2.2, 1.5),
    ]


def christian_hatch_300() -> list[Polygon]:
    return christian_hatch_200() + [
        ellipse(23.0, 38.6, 5.0, 3.8),
        ellipse(36.0, 33.2, 3.0, 3.0),
        ellipse(31.2, 27.0, 3.8, 4.8),
        ellipse(44.6, 40.4, 2.8, 2.0),
        ellipse(14.0, 41.2, 3.0, 2.4),
    ]


def christian_fill_400_east() -> list[Polygon]:
    return [
        ellipse(32.0, 36.5, 12.0, 8.0),
        ellipse(31.0, 27.0, 4.6, 6.2),
        ellipse(44.5, 40.3, 2.8, 2.0),
    ]


def christian_urban_400_west() -> list[Polygon]:
    return [
        ellipse(12.4, 42.0, 4.0, 4.2),
        ellipse(9.5, 35.4, 4.2, 2.4),
        ellipse(-4.5, 38.2, 5.2, 2.6),
        ellipse(3.5, 43.6, 4.6, 2.6),
        ellipse(38.5, 14.8, 2.4, 2.6),
        ellipse(32.4, 18.2, 2.0, 2.2),
    ]


def rural_pagan_hatch_400() -> list[Polygon]:
    return [
        ellipse(1.5, 47.8, 7.0, 4.8),
        ellipse(-1.6, 52.6, 3.6, 3.8),
        ellipse(21.0, 44.5, 7.0, 4.2),
        ellipse(-5.5, 41.8, 5.2, 3.6),
        ellipse(11.0, 44.8, 4.0, 2.8),
    ]


def manichaean_hatch() -> list[Polygon]:
    return [ellipse(48.0, 33.2, 5.0, 3.2)]


def buddhist_china_hatch() -> list[Polygon]:
    return [ellipse(110.0, 33.5, 6.5, 4.0)]


def year_layers(year: int) -> dict[str, list]:
    """Return style buckets for one year: fill / hatch / dots."""
    fills: list[tuple[str, list[Polygon]]] = [
        ("local_trad", local_trad()),
        ("african_trad", african_trad()),
        ("hindu", hindu_umbrella()),
        ("chinese_imperial", chinese_imperial()),
    ]
    hatches: list[tuple[str, list[Polygon]]] = []
    dots: list[tuple[str, float, float]] = []

    if year <= 100:
        fills.append(("roman_pagan", roman_pagan_core()))
        fills.append(("zoroastrian", zoroastrian_parthia()))
        fills.append(("buddhist", buddhist_kushan() if year == 100 else buddhist_year1()))
        dots = [("christian", lon, lat) for _, lon, lat in (CHRISTIAN_DOTS_100 if year == 100 else CHRISTIAN_DOTS_1)]
    elif year == 200:
        fills.append(("roman_pagan", roman_pagan_core()))
        fills.append(("zoroastrian", zoroastrian_sasanian()))
        fills.append(("buddhist", buddhist_silk()))
        hatches.append(("christian", christian_hatch_200()))
        hatches.append(("manichaean", manichaean_hatch()))
        hatches.append(("buddhist", buddhist_china_hatch()))
        dots = [("christian", lon, lat) for _, lon, lat in CHRISTIAN_DOTS_100]
    elif year == 300:
        fills.append(("roman_pagan", roman_pagan_core()))
        fills.append(("zoroastrian", zoroastrian_sasanian()))
        fills.append(("buddhist", buddhist_silk()))
        hatches.append(("christian", christian_hatch_300()))
        hatches.append(("manichaean", manichaean_hatch()))
        hatches.append(("buddhist", buddhist_china_hatch()))
        dots = [("christian", lon, lat) for _, lon, lat in CHRISTIAN_DOTS_100]
    else:  # 400
        fills.append(("roman_pagan", roman_pagan_core()))
        fills.append(("zoroastrian", zoroastrian_sasanian()))
        fills.append(("buddhist", buddhist_silk()))
        fills.append(("christian", christian_fill_400_east()))
        hatches.append(("christian", christian_urban_400_west()))
        hatches.append(("roman_pagan", rural_pagan_hatch_400()))
        hatches.append(("manichaean", manichaean_hatch()))
        hatches.append(("buddhist", buddhist_china_hatch()))
        dots = [("christian", lon, lat) for _, lon, lat in CHRISTIAN_DOTS_100]

    jewish = [("jewish", ellipse(lon, lat, rx, ry)) for _, lon, lat, rx, ry in JEWISH_SPOTS]
    return {"fills": fills, "hatches": hatches, "dots": dots, "spots": jewish}


def feature(geom, **props) -> dict:
    return {"type": "Feature", "properties": props, "geometry": mapping(geom)}


def collection_for(year: int) -> dict:
    layers = year_layers(year)
    feats: list[dict] = []
    for rid, parts in layers["fills"]:
        geom = union(parts)
        if not geom.is_empty:
            feats.append(feature(geom, id=rid, style="fill", year=year))
    for rid, parts in layers["hatches"]:
        geom = union(parts)
        if not geom.is_empty:
            feats.append(feature(geom, id=rid, style="hatch", year=year))
    for rid, parts in [("jewish", [p for _, p in layers["spots"]])]:
        geom = union(parts)
        if not geom.is_empty:
            feats.append(feature(geom, id=rid, style="spot", year=year))
    for rid, lon, lat in layers["dots"]:
        feats.append(feature(Point(lon, lat), id=rid, style="dot", year=year))
    return {
        "type": "FeatureCollection",
        "name": f"fixplanet-religion-pilot-{year}",
        "properties": {
            "year": year,
            "author": "Fix Planet schematic reconstruction",
            "note": "Original artwork. Not a census. Americas/Oceania omitted.",
        },
        "features": feats,
    }


def write_geojson() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for year in (1, 100, 200, 300, 400):
        dest = OUT / f"y{year:04d}.geojson"
        dest.write_text(json.dumps(collection_for(year), indent=2), encoding="utf-8")
        print(f"wrote {dest.relative_to(ROOT)}")


if __name__ == "__main__":
    write_geojson()
