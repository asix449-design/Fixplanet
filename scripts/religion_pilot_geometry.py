#!/usr/bin/env python3
"""Hand-authored schematic religion regions for the 1–1500 CE shelf.

Coarse ellipse unions — original Fix Planet artwork, not a trace of any
commercial atlas. Oceania is omitted here; the renderer paints those lands
unmapped gray. Americas stay unmapped through 1200; from 1300 they take an
indigenous local-traditions wash. Do not add 1600+.
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


def christian_fill_500() -> list[Polygon]:
    return christian_fill_400_east() + [
        ellipse(12.5, 42.0, 9.5, 7.5),
        ellipse(5.0, 44.0, 9.0, 6.5),
        ellipse(-1.0, 48.0, 7.0, 5.5),
        ellipse(-3.0, 40.0, 6.5, 5.5),
        ellipse(10.0, 36.0, 11.0, 4.5),
        ellipse(28.0, 42.0, 7.5, 5.5),
        ellipse(44.0, 45.0, 6.5, 5.5),
        ellipse(38.0, 12.0, 7.0, 8.0),
        ellipse(32.0, 17.0, 5.5, 5.5),
        ellipse(30.0, 39.0, 15.0, 8.5),
    ]


def christian_fill_600() -> list[Polygon]:
    return christian_fill_500() + [
        ellipse(28.0, 40.0, 18.0, 10.5),
        ellipse(3.0, 45.0, 11.0, 7.5),
        ellipse(-1.0, 52.0, 5.5, 5.0),
        ellipse(20.0, 45.0, 8.5, 6.5),
        ellipse(38.0, 35.0, 5.5, 4.5),
        ellipse(39.0, 12.0, 7.5, 8.5),
        ellipse(10.0, 36.0, 13.0, 5.0),
    ]


def rural_pagan_hatch_500() -> list[Polygon]:
    return [
        ellipse(2.0, 46.0, 7.0, 5.5),
        ellipse(-2.0, 52.0, 4.0, 3.5),
        ellipse(-4.0, 40.0, 5.0, 4.0),
        ellipse(11.0, 44.5, 3.5, 2.5),
        ellipse(21.0, 44.5, 5.5, 3.5),
    ]


def rural_pagan_hatch_600() -> list[Polygon]:
    return [
        ellipse(2.0, 47.0, 6.0, 4.5),
        ellipse(-1.0, 52.0, 3.5, 3.0),
        ellipse(8.0, 45.0, 4.0, 2.8),
    ]


def manichaean_hatch_500() -> list[Polygon]:
    return manichaean_hatch() + [ellipse(70.0, 40.0, 5.5, 2.8)]


def manichaean_hatch_600() -> list[Polygon]:
    return manichaean_hatch_500() + [ellipse(108.0, 38.0, 4.0, 2.5)]


def buddhist_se_asia() -> list[Polygon]:
    return buddhist_silk() + [ellipse(100.0, 18.0, 5.5, 4.5), ellipse(95.0, 30.0, 5.5, 4.0)]


def roman_pagan_residual_600() -> list[Polygon]:
    return [ellipse(2.0, 46.0, 5.0, 4.0), ellipse(-2.0, 52.0, 3.0, 2.8)]


def islamic_umayyad_700() -> list[Polygon]:
    """Iberia–Maghreb–Libya–Egypt–Arabia–Iran–Transoxiana/Sind wash."""
    return [
        ellipse(-4.5, 39.8, 6.8, 5.6),
        ellipse(-6.0, 34.0, 10.5, 4.8),
        ellipse(3.5, 33.2, 10.0, 4.2),
        ellipse(13.5, 31.6, 8.5, 3.8),
        ellipse(20.5, 31.8, 6.2, 3.4),
        ellipse(31.0, 27.5, 7.0, 7.2),
        ellipse(38.0, 33.2, 6.2, 5.4),
        ellipse(44.0, 33.0, 6.5, 5.2),
        ellipse(46.0, 22.0, 10.5, 9.2),
        ellipse(54.0, 32.6, 14.5, 9.8),
        ellipse(66.5, 38.2, 8.5, 5.2),
        ellipse(68.2, 26.2, 5.8, 4.6),
    ]


def islamic_abbasid_800() -> list[Polygon]:
    return islamic_umayyad_700() + [
        ellipse(70.5, 39.4, 9.5, 5.6),
        ellipse(71.0, 28.0, 5.4, 4.2),
    ]


def islamic_successor_900() -> list[Polygon]:
    return islamic_abbasid_800() + [
        ellipse(72.0, 40.2, 10.5, 6.0),
        ellipse(70.5, 26.8, 6.8, 5.2),
    ]


def zoroastrian_remnant_iran() -> list[Polygon]:
    return [ellipse(54.0, 32.4, 8.0, 5.5)]


def christian_fill_700() -> list[Polygon]:
    """Byzantium, Italy, Frankish core, Britain; light Aksum/Nubia. Not Iberia."""
    return [
        ellipse(29.0, 39.5, 13.5, 8.8),
        ellipse(21.0, 43.8, 6.5, 5.2),
        ellipse(12.5, 42.2, 8.2, 6.6),
        ellipse(3.2, 46.4, 8.2, 6.0),
        ellipse(-1.2, 52.6, 5.2, 4.6),
        ellipse(38.0, 12.2, 5.2, 6.2),
        ellipse(32.2, 16.8, 3.6, 4.0),
    ]


def christian_fill_800() -> list[Polygon]:
    return christian_fill_700() + [
        ellipse(4.5, 47.6, 9.5, 6.8),
        ellipse(8.0, 49.0, 6.5, 5.0),
    ]


def christian_fill_900() -> list[Polygon]:
    return christian_fill_800() + [
        ellipse(22.0, 43.2, 8.0, 6.0),
        ellipse(18.0, 44.8, 6.5, 5.0),
    ]


def buddhist_se_asia_900() -> list[Polygon]:
    return buddhist_se_asia() + [
        ellipse(102.0, 14.2, 7.2, 6.0),
        ellipse(108.0, 15.8, 5.2, 4.6),
    ]


def islamic_1000() -> list[Polygon]:
    """Abbasid-successor belt plus a fuller Ghaznavid east. No Sahel wash."""
    return islamic_successor_900() + [
        ellipse(67.0, 33.4, 8.2, 5.6),
        ellipse(69.5, 30.0, 5.6, 4.4),
    ]


def islamic_1100() -> list[Polygon]:
    return islamic_1000() + [
        ellipse(66.0, 32.2, 7.4, 5.0),
    ]


def islamic_1200() -> list[Polygon]:
    """Ghurid / early Delhi edge on the Indus — still not a painted India."""
    return islamic_1100() + [
        ellipse(72.8, 28.4, 6.2, 4.8),
        ellipse(74.5, 31.2, 4.6, 3.6),
    ]


def christian_fill_1000() -> list[Polygon]:
    """Latin West + Byzantium + cautious Hungary / Kievan Rus. Still open north."""
    return christian_fill_900() + [
        ellipse(19.4, 47.4, 5.4, 4.2),
        ellipse(31.6, 50.4, 5.8, 4.4),
    ]


def christian_fill_1100() -> list[Polygon]:
    return christian_fill_1000() + [
        ellipse(19.8, 52.0, 5.2, 4.0),
        ellipse(11.2, 58.6, 4.0, 3.4),
    ]


def christian_fill_1200() -> list[Polygon]:
    return christian_fill_1100() + [
        ellipse(24.0, 53.6, 5.6, 4.2),
        ellipse(34.0, 52.2, 6.0, 4.6),
    ]


def buddhist_se_asia_1000() -> list[Polygon]:
    return buddhist_se_asia_900()


def buddhist_se_asia_1100() -> list[Polygon]:
    return buddhist_se_asia_900() + [
        ellipse(100.8, 16.4, 6.4, 5.2),
    ]


def buddhist_se_asia_1200() -> list[Polygon]:
    return buddhist_se_asia_1100() + [
        ellipse(104.5, 13.6, 6.8, 5.4),
        ellipse(110.0, 14.8, 4.8, 4.0),
    ]


def islamic_without_iberia() -> list[Polygon]:
    """1200 Islamic belt minus the wide al-Andalus ellipse."""
    return islamic_1200()[1:]


def granada_pocket() -> list[Polygon]:
    return [ellipse(-3.8, 37.15, 1.7, 1.15)]


def anatolia_ottoman_fringe() -> list[Polygon]:
    """Early Ottoman west-Anatolia fringe — not a majority wash."""
    return [ellipse(28.0, 40.1, 2.5, 1.9)]


def anatolia_ottoman_majority() -> list[Polygon]:
    return [ellipse(32.4, 39.2, 6.8, 3.9)]


def islamic_1300() -> list[Polygon]:
    """Mamluk Egypt–Syria, Maghreb–Libya, Granada pocket, Anatolia fringe."""
    return islamic_without_iberia() + granada_pocket() + anatolia_ottoman_fringe()


def islamic_1400() -> list[Polygon]:
    """Anatolia already majority Islamic; Timur zone; Granada still."""
    return islamic_without_iberia() + granada_pocket() + anatolia_ottoman_majority() + [
        ellipse(66.5, 36.4, 8.2, 5.6),
    ]


def islamic_1500() -> list[Polygon]:
    """No Granada. Anatolia Ottoman. No solid Islamic wash of SE Europe."""
    return islamic_without_iberia() + anatolia_ottoman_majority()


def christian_iberia() -> list[Polygon]:
    return [ellipse(-4.2, 40.4, 6.6, 5.4)]


def christian_fill_1300() -> list[Polygon]:
    """Iberia Christian except Granada; Anatolia still mostly Christian."""
    return christian_fill_1200() + christian_iberia() + [
        ellipse(24.8, 54.8, 5.2, 4.0),
    ]


def christian_fill_1400() -> list[Polygon]:
    """Same Latin/Byzantine hold; Ottoman Anatolia is painted by Islam on top."""
    return christian_fill_1300()


def christian_colonial_1500() -> list[Polygon]:
    """Light colonial edge: Caribbean / coastal Mexico only."""
    return [
        ellipse(-72.0, 18.6, 4.6, 2.3),
        ellipse(-96.4, 19.3, 3.4, 2.1),
    ]


def christian_fill_1500() -> list[Polygon]:
    """All Iberia Christian; Balkans still Christian; colonial edge."""
    return christian_fill_1400() + christian_colonial_1500()


def americas_local() -> list[Polygon]:
    """Aztec Mesoamerica + Andes + other indigenous wash. Not a census."""
    return [
        ellipse(-100.0, 48.0, 32.0, 16.5),
        ellipse(-99.0, 19.6, 10.5, 7.8),
        ellipse(-68.5, -12.5, 8.2, 16.5),
        ellipse(-58.0, -8.0, 16.5, 18.5),
    ]


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
    elif year == 400:
        fills.append(("roman_pagan", roman_pagan_core()))
        fills.append(("zoroastrian", zoroastrian_sasanian()))
        fills.append(("buddhist", buddhist_silk()))
        fills.append(("christian", christian_fill_400_east()))
        hatches.append(("christian", christian_urban_400_west()))
        hatches.append(("roman_pagan", rural_pagan_hatch_400()))
        hatches.append(("manichaean", manichaean_hatch()))
        hatches.append(("buddhist", buddhist_china_hatch()))
        dots = [("christian", lon, lat) for _, lon, lat in CHRISTIAN_DOTS_100]
    elif year == 500:
        fills.append(("roman_pagan", roman_pagan_core()))
        fills.append(("zoroastrian", zoroastrian_sasanian()))
        fills.append(("buddhist", buddhist_se_asia()))
        fills.append(("christian", christian_fill_500()))
        hatches.append(("roman_pagan", rural_pagan_hatch_500()))
        hatches.append(("manichaean", manichaean_hatch_500()))
        hatches.append(("buddhist", buddhist_china_hatch()))
        dots = [("christian", lon, lat) for _, lon, lat in CHRISTIAN_DOTS_100]
    elif year == 600:
        fills.append(("roman_pagan", roman_pagan_residual_600()))
        fills.append(("zoroastrian", zoroastrian_sasanian()))
        fills.append(("buddhist", buddhist_se_asia()))
        fills.append(("christian", christian_fill_600()))
        hatches.append(("roman_pagan", rural_pagan_hatch_600()))
        hatches.append(("manichaean", manichaean_hatch_600()))
        hatches.append(("buddhist", buddhist_china_hatch()))
        dots = [("christian", lon, lat) for _, lon, lat in CHRISTIAN_DOTS_100]
    elif year == 700:
        fills.append(("buddhist", buddhist_se_asia()))
        fills.append(("christian", christian_fill_700()))
        fills.append(("islam", islamic_umayyad_700()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 800:
        fills.append(("buddhist", buddhist_se_asia()))
        fills.append(("christian", christian_fill_800()))
        fills.append(("islam", islamic_abbasid_800()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 900:  # Abbasid-successor belt; no deep Sahel Islam
        fills.append(("buddhist", buddhist_se_asia_900()))
        fills.append(("christian", christian_fill_900()))
        fills.append(("islam", islamic_successor_900()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 1000:
        fills.append(("buddhist", buddhist_se_asia_1000()))
        fills.append(("christian", christian_fill_1000()))
        fills.append(("islam", islamic_1000()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 1100:
        fills.append(("buddhist", buddhist_se_asia_1100()))
        fills.append(("christian", christian_fill_1100()))
        fills.append(("islam", islamic_1100()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 1200:
        fills.append(("buddhist", buddhist_se_asia_1200()))
        fills.append(("christian", christian_fill_1200()))
        fills.append(("islam", islamic_1200()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 1300:
        fills.append(("local_trad", americas_local()))
        fills.append(("buddhist", buddhist_se_asia_1200()))
        fills.append(("christian", christian_fill_1300()))
        fills.append(("islam", islamic_1300()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 1400:
        fills.append(("local_trad", americas_local()))
        fills.append(("buddhist", buddhist_se_asia_1200()))
        fills.append(("christian", christian_fill_1400()))
        fills.append(("islam", islamic_1400()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    elif year == 1500:
        fills.append(("local_trad", americas_local()))
        fills.append(("buddhist", buddhist_se_asia_1200()))
        fills.append(("christian", christian_fill_1500()))
        fills.append(("islam", islamic_1500()))
        hatches.append(("zoroastrian", zoroastrian_remnant_iran()))
        hatches.append(("buddhist", buddhist_china_hatch()))
    else:
        raise ValueError(f"no schematic layers for year {year}")

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
    for year in (1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500):
        dest = OUT / f"y{year:04d}.geojson"
        dest.write_text(json.dumps(collection_for(year), indent=2), encoding="utf-8")
        print(f"wrote {dest.relative_to(ROOT)}")


if __name__ == "__main__":
    write_geojson()
