#!/usr/bin/env python3
"""Render aourednik historical-basemaps GeoJSON as school-GIS world plates.

Fills + large polity labels (stock SVGs are stroke-only). Modern Natural Earth
coastlines are the land base — schematic, not a cadastral survey.

Output: public/images/maps/borders/y1100.png, y1300.png, y1400.png,
y1500.png, y1700.png, y1800.png, y1900.png
Width 2560. Footer credits GPL-3.0 Corresponding Source; no © Fix Planet on geometry.

Run from repo root: python3 scripts/render-aourednik-borders.py
Optional years: python3 scripts/render-aourednik-borders.py 1400 1500
"""

from __future__ import annotations

import json
import math
import re
import urllib.request
from collections import defaultdict
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import patheffects
from matplotlib.collections import PatchCollection
from matplotlib.patches import PathPatch, Polygon
from matplotlib.path import Path as MplPath
from PIL import Image, ImageDraw, ImageFont
from shapely.geometry import GeometryCollection, MultiPolygon, Polygon as SPoly, box
from shapely.validation import make_valid

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/maps/borders"
CACHE = Path("/tmp/aourednik")
CACHE.mkdir(parents=True, exist_ok=True)

UA = "FixPlanetMapsBot/1.0 (https://fixplanet.org; GPL-3.0 historical-basemaps render)"
GEO_BASE = "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson"
LAND_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/"
    "ne_110m_land.geojson"
)

WIDTH = 2560
HEIGHT = 1280
FOOTER_H = 68
DPI = 100

SEA = "#c9edfb"
LAND = "#ffdf99"
INK = "#3a3228"
FOOTER_BG = "#2a2418"
FOOTER_FG = "#f3ead4"
HALO = "#f7efd8"

CULTURAL_RE = re.compile(
    r"hunter|gatherer|peoples|people|cultures|aboriginal|forag|fishing|"
    r"cereal farmer|bison|athabas|inupiaq|chukchi|cree|shoshoni|naskapi|"
    r"sahtu|obiwa|t['’]atsaot|papuan|polynesian|maori|ainu|thule|dorset|"
    r"khoisan|siberian|s[áa]mi|plain bison|pampas|amazon |savanna |"
    r"west african cereal|eastern north american|subarctic|plateau |"
    r"north american pacific|finno-ugric|paleo-siberian|arctic marine|"
    r"australian aboriginal|innu|montagnais|oromo|eyaak|yirandali|"
    r"wirangu|mingin|beothuk",
    re.I,
)

POLITY_RE = re.compile(
    r"empire|kingdom|khanate|caliphate|sultanate|viceroyalty|dynasty|"
    r"republic|commonwealth|duchy|shogunate|horde|confederation|emirate|"
    r"tsardom|principality|papal|france|spain|sweden|portugal|england|"
    r"japan|mali|ethiopia|morocco|tibet|novgorod|hungary|delhi|song|"
    r"yuan|seljuk|fatimid|byzantine|ottoman|mughal|safavid|qing|manchu|"
    r"muscov|liao|xixia|khmer|chola|ghaznavid|mamluk|peru|brazil|"
    r"new spain|dutch|prussia|denmark|norway|venice|hungary|ryazan|"
    r"united states|united kingdom|canada|brazil|argentina|mexico|"
    r"persia|afghanistan|austria|germany|italy|australia|louisiana|"
    r"granada|r[ií]o de la plata|rupert|quebec|maratha|raj|arabia|"
    r"egypt|bolivia|colombia|venezuela|chile|algeria|sokoto|burma|"
    r"greenland|indochina|cape colony|imperial japan|"
    r"timurid|aztec|inca|songhai|ming|kalmar|castile|castille|chim[uú]",
    re.I,
)

# Saturated school-atlas fills for named polities the plates must read at a glance.
COLOR_OVERRIDE = {
    "tsardom of muscovy": (139, 84, 40),
    "grand duchy of moscow": (139, 84, 40),
    "manchu empire": (132, 36, 78),
    "song empire": (150, 44, 70),
    "great khanate": (168, 40, 48),
    "ming chinese empire": (132, 36, 78),
    "blue horde": (64, 108, 176),
    "white horde": (196, 168, 96),
    "golden horde": (196, 148, 52),
    "kalmar union": (80, 140, 168),
    "timurid empire": (176, 124, 48),
    "timurid emirates": (176, 88, 72),
    "aztec empire": (46, 124, 72),
    "inca empire": (139, 84, 40),
    "songhai": (180, 120, 48),
    "castile": (86, 164, 86),
    "castille": (86, 164, 86),
    "poland-lithuania": (176, 72, 112),
    "shogun japan (kamakura)": (196, 48, 48),
    "chimú empire": (148, 96, 56),
    "chimu empire": (148, 96, 56),
    "safavid empire": (36, 132, 72),
    "mughal empire": (16, 92, 52),
    "ottoman empire": (196, 56, 56),
    "seljuk empire": (40, 128, 78),
    "seljuk caliphate": (40, 128, 78),
    "fatimid caliphate": (20, 96, 58),
    "sultanate of delhi": (18, 88, 50),
    "khanate of the golden horde": (196, 148, 52),
    "ilkhanate": (48, 120, 72),
    "chagatai khanate": (176, 124, 48),
    "byzantine empire": (112, 64, 148),
    "holy roman empire": (204, 164, 64),
    "kievan ser": (120, 72, 40),
    "kievan rus": (120, 72, 40),
    "almoravid dynasty": (180, 120, 48),
    "liao": (56, 96, 160),
    "xixia": (80, 140, 160),
    "tibet": (168, 124, 72),
    "mongols": (176, 132, 72),
    "cuman-kipchak confederation": (196, 168, 80),
    "viceroyalty of new spain": (86, 164, 86),
    "viceroyalty of peru": (46, 124, 72),
    "portuguese brazil": (28, 104, 58),
    "spain": (86, 164, 86),
    "france": (64, 96, 176),
    "kingdom of france": (64, 96, 176),
    "england": (196, 80, 92),
    "england and ireland": (196, 80, 92),
    "sweden": (64, 132, 176),
    "norway": (80, 140, 168),
    "denmark-norway": (80, 140, 168),
    "polish–lithuanian commonwealth": (176, 72, 112),
    "polish-lithuanian commonwealth": (176, 72, 112),
    "dutch east indies": (184, 140, 56),
    "dutch republic": (196, 156, 64),
    "morocco": (196, 112, 56),
    "mali": (196, 148, 56),
    "mamluke sultanate": (176, 56, 64),
    "ethiopia": (176, 88, 56),
    "khmer empire": (72, 140, 96),
    "cholas": (48, 112, 80),
    "chola empire": (48, 112, 80),
    "ghaznavid emirate": (128, 88, 48),
    "hungary": (176, 72, 72),
    "novgorod": (96, 80, 140),
    "ryazan": (148, 80, 80),
    "quazaq khanate": (188, 156, 72),
    "central asian khanates": (176, 148, 80),
    "khiva khanate": (164, 120, 64),
    "post-ming warlords": (148, 72, 88),
    "tokugawa shogunate": (196, 48, 48),
    "prussia": (64, 80, 140),
    "portugal": (32, 112, 72),
    "new france": (80, 112, 176),
    "russian empire": (139, 84, 40),
    "qing empire": (132, 36, 78),
    "united states of america": (56, 104, 176),
    "united states": (56, 104, 176),
    "rupert's land": (196, 80, 92),
    "viceroyalty of brazil": (28, 104, 58),
    "kingdom of brazil": (28, 104, 58),
    "viceroyalty of new granada": (56, 140, 96),
    "viceroyalty of the río de la plata": (80, 156, 80),
    "viceroyalty of the rio de la plata": (80, 156, 80),
    "luisiana": (120, 160, 88),
    "persia": (36, 132, 72),
    "maratha confederacy": (16, 92, 52),
    "united kingdom": (196, 80, 92),
    "united kingdom of great britain and ireland": (196, 80, 92),
    "canada": (196, 80, 92),
    "british raj": (196, 80, 92),
    "western australia (uk)": (196, 80, 92),
    "queensland (uk)": (196, 80, 92),
    "northern territory (uk)": (196, 80, 92),
    "south australia (uk)": (196, 80, 92),
    "new south wales (uk)": (196, 80, 92),
    "austria hungary": (176, 72, 112),
    "austrian empire": (176, 72, 112),
    "germany": (64, 80, 140),
    "argentina": (80, 148, 108),
    "mexico": (86, 164, 86),
    "imperial japan": (196, 48, 48),
    "japan": (196, 48, 48),
    "netherlands indies": (184, 140, 56),
    "french indochina": (64, 96, 176),
    "sweden–norway": (64, 132, 176),
    "sweden-norway": (64, 132, 176),
    "egypt": (196, 156, 64),
    "arabia": (196, 148, 56),
    "sokoto caliphate": (176, 124, 48),
}

PALETTE = [
    (196, 80, 68),
    (48, 96, 164),
    (52, 140, 84),
    (204, 156, 52),
    (132, 72, 160),
    (204, 104, 52),
    (48, 140, 148),
    (168, 64, 96),
    (88, 124, 56),
    (72, 88, 148),
    (176, 88, 64),
    (80, 148, 108),
    (148, 96, 56),
    (96, 116, 176),
    (160, 80, 120),
]

DISPLAY = {
    "Tsardom of Muscovy": "Russia",
    "Grand Duchy of Moscow": "Muscovy",
    "Manchu Empire": "Qing Dynasty",
    "Safavid Empire": "Safavid Empire",
    "Mughal Empire": "Mughal Empire",
    "Ottoman Empire": "Ottoman Empire",
    "Song Empire": "Song",
    "Great Khanate": "Yuan",
    "Ming Chinese Empire": "Ming",
    "Kalmar Union": "Kalmar Union",
    "Blue Horde": "Blue Horde",
    "White Horde": "White Horde",
    "Golden Horde": "Golden Horde",
    "Timurid Empire": "Timurid Empire",
    "Timurid Emirates": "Timurid Emirates",
    "Aztec Empire": "Aztec Empire",
    "Inca Empire": "Inca Empire",
    "Songhai": "Songhai",
    "Poland-Lithuania": "Poland-Lithuania",
    "Shogun Japan (Kamakura)": "Japan",
    "Castile": "Castile",
    "Castille": "Castile",
    "Khanate of the Golden Horde": "Golden Horde",
    "Ilkhanate": "Ilkhanate",
    "Chagatai Khanate": "Chagatai",
    "Sultanate of Delhi": "Delhi",
    "Seljuk Empire": "Seljuk",
    "Seljuk Caliphate": "Seljuk",
    "Fatimid Caliphate": "Fatimid",
    "Byzantine Empire": "Byzantine Empire",
    "Holy Roman Empire": "Holy Roman Empire",
    "Kievan Rus": "Kievan Rus",
    "Almoravid dynasty": "Almoravid",
    "Viceroyalty of New Spain": "New Spain",
    "Viceroyalty of Peru": "Peru",
    "Portuguese Brazil": "Brazil",
    "Polish–Lithuanian Commonwealth": "Poland–Lithuania",
    "England and Ireland": "England",
    "Kingdom of France": "France",
    "Dutch East Indies": "Dutch East Indies",
    "Tokugawa shogunate": "Japan",
    "Mamluke Sultanate": "Mamluks",
    "Quazaq Khanate": "Kazakh Khanate",
    "central Asian khanates": "Central Asian khanates",
    "Ghaznavid Emirate": "Ghaznavid",
    "Post-Ming Warlords": "Post-Ming",
    "Russian Empire": "Russia",
    "Qing Empire": "Qing Dynasty",
    "United States of America": "United States",
    "Rupert's Land": "Rupert's Land",
    "Viceroyalty of Brazil": "Brazil",
    "Kingdom of Brazil": "Brazil",
    "Viceroyalty of New Granada": "New Granada",
    "Viceroyalty of the Río de la Plata": "Río de la Plata",
    "Luisiana": "Louisiana",
    "Persia": "Persia",
    "Maratha Confederacy": "Maratha",
    "United Kingdom": "United Kingdom",
    "United Kingdom of Great Britain and Ireland": "United Kingdom",
    "British Raj": "British Raj",
    "Western Australia (UK)": "Australia",
    "Austria Hungary": "Austria-Hungary",
    "Austrian Empire": "Austria",
    "Imperial Japan": "Japan",
    "Netherlands Indies": "Dutch East Indies",
    "French Indochina": "French Indochina",
    "Sweden–Norway": "Sweden–Norway",
    "Denmark-Norway": "Denmark–Norway",
}

# Forced large labels + size + preferred lon/lat (school-atlas placement).
FORCE_LABELS = {
    1100: {
        "Song Empire": (107, 33, 52),
        "Seljuk Empire": (48, 34, 36),
        "Fatimid Caliphate": (32, 26, 28),
        "Kievan Rus": (36, 54, 32),
        "Byzantine Empire": (30, 40, 22),
        "Holy Roman Empire": (10, 49, 18),
        "Almoravid dynasty": (-4, 28, 22),
        "Tibet": (88, 32, 28),
        "Liao": (118, 44, 26),
        "Mongols": (108, 48, 26),
        "Cuman-Kipchak confederation": (68, 48, 20),
        "Khmer Empire": (104, 13, 18),
    },
    1400: {
        "Great Khanate": (110, 36, 52),
        "Timurid Empire": (62, 36, 32),
        "Sultanate of Delhi": (78, 24, 28),
        "Mamluke Sultanate": (32, 28, 22),
        "Mali": (-6, 14, 28),
        "Kalmar Union": (16, 62, 18),
        "Holy Roman Empire": (10, 49, 18),
        "Byzantine Empire": (30, 40, 18),
        "Chagatai Khanate": (78, 42, 22),
        "Tibet": (88, 32, 22),
        "France": (2, 47, 20),
        "Castile": (-4, 40, 18),
        "Poland-Lithuania": (24, 52, 16),
        "Novgorod": (36, 58, 18),
        "Blue Horde": (52, 50, 18),
        "White Horde": (70, 50, 16),
        "Shogun Japan (Kamakura)": (138, 36, 16),
    },
    1300: {
        "Great Khanate": (110, 36, 52),
        "Khanate of the Golden Horde": (60, 52, 28),
        "Ilkhanate": (52, 34, 28),
        "Chagatai Khanate": (78, 42, 24),
        "Sultanate of Delhi": (78, 24, 28),
        "Mali": (-6, 14, 28),
        "Mamluke Sultanate": (32, 28, 22),
        "Holy Roman Empire": (10, 49, 18),
        "Grand Duchy of Moscow": (40, 56, 22),
        "Tibet": (88, 32, 24),
        "France": (2, 47, 20),
        "Byzantine Empire": (30, 40, 18),
    },
    1500: {
        "Ming Chinese Empire": (110, 36, 52),
        "Grand Duchy of Moscow": (70, 58, 36),
        "Ottoman Empire": (36, 38, 26),
        "Aztec Empire": (-100, 20, 22),
        "Inca Empire": (-72, -12, 24),
        "Songhai": (0, 16, 22),
        "Timurid Emirates": (62, 34, 20),
        "Sultanate of Delhi": (78, 24, 24),
        "Mamluke Sultanate": (32, 28, 20),
        "Chagatai Khanate": (78, 42, 20),
        "Tibet": (88, 32, 20),
        "Kalmar Union": (16, 62, 16),
        "Holy Roman Empire": (10, 49, 16),
        "Poland-Lithuania": (24, 52, 16),
        "Portugal": (-8, 39, 16),
        "England": (-2, 53, 16),
        "Japan": (138, 36, 16),
        "Golden Horde": (50, 50, 16),
        "White Horde": (70, 50, 14),
    },
    1700: {
        "Tsardom of Muscovy": (95, 60, 72),
        "Manchu Empire": (108, 36, 44),
        "Safavid Empire": (54, 32, 28),
        "Mughal Empire": (78, 24, 32),
        "Ottoman Empire": (36, 38, 26),
        "Viceroyalty of New Spain": (-104, 24, 28),
        "Viceroyalty of Peru": (-72, -12, 26),
        "Portuguese Brazil": (-50, -10, 26),
        "Sweden": (18, 62, 22),
        "Polish–Lithuanian Commonwealth": (24, 52, 16),
        "France": (2, 47, 20),
        "Spain": (-4, 40, 20),
        "Tibet": (88, 32, 22),
        "Dutch East Indies": (118, -2, 16),
        "Tokugawa shogunate": (138, 36, 18),
        "Holy Roman Empire": (10, 49, 16),
        "England and Ireland": (-2, 53, 16),
        "Quazaq Khanate": (68, 48, 16),
    },
    1800: {
        "Russian Empire": (95, 60, 72),
        "Qing Empire": (108, 36, 44),
        "Ottoman Empire": (36, 38, 26),
        "United States of America": (-96, 38, 22),
        "Rupert's Land": (-100, 58, 22),
        "Viceroyalty of New Spain": (-104, 24, 24),
        "Viceroyalty of Brazil": (-50, -10, 26),
        "Viceroyalty of Peru": (-72, -12, 20),
        "Viceroyalty of New Granada": (-72, 4, 16),
        "Viceroyalty of the Río de la Plata": (-62, -32, 16),
        "Luisiana": (-92, 32, 16),
        "Persia": (54, 32, 22),
        "Maratha Confederacy": (76, 20, 18),
        "Dutch East Indies": (118, -2, 16),
        "Sweden": (18, 62, 18),
        "Denmark-Norway": (10, 64, 14),
        "France": (2, 47, 18),
        "Spain": (-4, 40, 18),
        "United Kingdom": (-2, 54, 14),
        "Japan": (138, 36, 16),
        "Austrian Empire": (16, 48, 14),
    },
    1900: {
        "Russian Empire": (95, 60, 72),
        "Manchu Empire": (108, 36, 44),
        "United States of America": (-98, 40, 24),
        "Canada": (-106, 58, 28),
        "Kingdom of Brazil": (-50, -10, 26),
        "British Raj": (78, 22, 28),
        "Ottoman Empire": (36, 38, 22),
        "Argentina": (-64, -34, 20),
        "Mexico": (-102, 24, 20),
        "Persia": (54, 32, 20),
        "Western Australia (UK)": (132, -25, 22),
        "Netherlands Indies": (118, -2, 16),
        "Sweden–Norway": (16, 62, 16),
        "France": (2, 47, 18),
        "Germany": (10, 51, 16),
        "Austria Hungary": (16, 48, 14),
        "United Kingdom of Great Britain and Ireland": (-2, 54, 14),
        "Imperial Japan": (138, 36, 16),
        "French Indochina": (106, 16, 14),
        "Egypt": (30, 26, 16),
        "Arabia": (46, 24, 16),
    },
}

# Year-specific label text. 1400 must keep “Great Khanate” — do not show Yuan or Ming.
DISPLAY_YEAR = {
    1400: {
        "Great Khanate": "Great Khanate",
        "Kalmar Union": "Kalmar-Union",
        "Holy Roman Empire": "Holyroman-Empire",
        "Blue Horde": "Blueghorde",
        "White Horde": "Whitehorde",
        "Byzantine Empire": "Byzantine-Empire",
        "Poland-Lithuania": "Poland-Lithuania",
        "Shogun Japan (Kamakura)": "Japan",
        "Mamluke Sultanate": "Mameluks",
        "Sultanate of Delhi": "Delhi",
        "Chagatai Khanate": "Chagatai",
        "Timurid Empire": "Timurid Empire",
    },
    1500: {
        "Grand Duchy of Moscow": "Muscovy",
        "Ming Chinese Empire": "Ming",
        "Aztec Empire": "Aztec-Empire",
        "Inca Empire": "Inca-Empire",
        "Kalmar Union": "Kalmar-Union",
        "Holy Roman Empire": "Holyroman-Empire",
        "Golden Horde": "Golden-Horde",
        "White Horde": "White-Horde",
        "Poland-Lithuania": "Poland-Lithuania",
        "Mamluke Sultanate": "Mameluks",
        "Sultanate of Delhi": "Delhi",
        "Chagatai Khanate": "Chagatai",
        "Timurid Emirates": "Timurid Emirates",
        "Ottoman Empire": "Ottoman Empire",
    },
}


def label_text(year: int, name: str) -> str:
    return DISPLAY_YEAR.get(year, {}).get(name) or DISPLAY.get(name, name)


FOOTER = (
    "Historical basemaps © André Ourednik et al. · GPL-3.0 · "
    "github.com/aourednik/historical-basemaps · Approximate borders"
)

WORLD = box(-179.999, -89.9, 179.999, 89.9)


def fetch(url: str, dest: Path) -> Path:
    if dest.exists() and dest.stat().st_size > 1000:
        return dest
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as res:
        dest.write_bytes(res.read())
    return dest


def load_json(url: str, dest: Path) -> dict:
    return json.loads(fetch(url, dest).read_text(encoding="utf-8"))


def polity_name(props: dict) -> str:
    for key in ("NAME", "ABBREVN", "SUBJECTO", "PARTOF"):
        val = props.get(key)
        if isinstance(val, str) and val.strip():
            return val.strip()
    return ""


def is_cultural(name: str) -> bool:
    return bool(name) and bool(CULTURAL_RE.search(name))


def color_for(name: str) -> tuple[int, int, int]:
    key = name.lower()
    if key in COLOR_OVERRIDE:
        return COLOR_OVERRIDE[key]
    acc = sum(ord(c) * (i + 3) for i, c in enumerate(key))
    return PALETTE[acc % len(PALETTE)]


def hex_rgb(rgb: tuple[int, int, int]) -> str:
    return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}"


def unwrap_ring(ring: list) -> list[tuple[float, float]]:
    if not ring:
        return []
    out = [(float(ring[0][0]), float(ring[0][1]))]
    for pt in ring[1:]:
        lon, lat = float(pt[0]), float(pt[1])
        prev = out[-1][0]
        if lon - prev > 180:
            lon -= 360
        elif prev - lon > 180:
            lon += 360
        out.append((lon, lat))
    return out


def polygon_from_rings(rings: list) -> SPoly | None:
    if not rings:
        return None
    outer = unwrap_ring(rings[0])
    if len(outer) < 4:
        return None
    holes = []
    for hole in rings[1:]:
        h = unwrap_ring(hole)
        if len(h) >= 4:
            holes.append(h)
    try:
        poly = SPoly(outer, holes)
        poly = make_valid(poly)
    except Exception:
        return None
    if poly.is_empty:
        return None
    return poly


def as_polygons(geom) -> list[SPoly]:
    if geom is None or geom.is_empty:
        return []
    kind = geom.geom_type
    if kind == "Polygon" and geom.area > 0.02:
        return [geom]
    if kind == "MultiPolygon":
        return [g for g in geom.geoms if g.geom_type == "Polygon" and g.area > 0.02]
    if kind in {"GeometryCollection", "MultiLineString"}:
        out: list[SPoly] = []
        for g in getattr(geom, "geoms", []):
            out.extend(as_polygons(g))
        return out
    return []


def clipped_parts(geom: dict) -> list[SPoly]:
    kind = geom.get("type")
    coords = geom.get("coordinates") or []
    polys: list[SPoly] = []
    if kind == "Polygon":
        polys.extend(as_polygons(polygon_from_rings(coords)))
    elif kind == "MultiPolygon":
        for rings in coords:
            polys.extend(as_polygons(polygon_from_rings(rings)))
    else:
        return []

    out: list[SPoly] = []
    for poly in polys:
        for shift in (0, -360, 360):
            moved = shapely_translate(poly, shift)
            out.extend(as_polygons(moved.intersection(WORLD)))
    return out


def shapely_translate(poly: SPoly, dx: float) -> SPoly:
    if dx == 0:
        return poly
    return SPoly(
        [(x + dx, y) for x, y in poly.exterior.coords],
        [[(x + dx, y) for x, y in ring.coords] for ring in poly.interiors],
    )


def mpl_patch(poly: SPoly, **kwargs) -> PathPatch:
    verts = []
    codes = []

    def add_ring(coords):
        pts = list(coords)
        if len(pts) < 3:
            return
        verts.extend(pts)
        codes.append(MplPath.MOVETO)
        codes.extend([MplPath.LINETO] * (len(pts) - 2))
        codes.append(MplPath.CLOSEPOLY)

    add_ring(poly.exterior.coords)
    for hole in poly.interiors:
        add_ring(hole.coords)
    path = MplPath(verts, codes)
    return PathPatch(path, **kwargs)


def land_patches(land: dict) -> list[PathPatch]:
    patches = []
    for feat in land["features"]:
        for poly in clipped_parts(feat["geometry"]):
            patches.append(
                mpl_patch(poly, facecolor=LAND, edgecolor="#c4b48a", linewidth=0.2, zorder=1)
            )
    return patches


def load_font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def render_year(year: int) -> Path:
    geo = load_json(f"{GEO_BASE}/world_{year}.geojson", CACHE / f"world_{year}.geojson")
    land = load_json(LAND_URL, CACHE / "ne_110m_land.geojson")

    groups: dict[str, list[SPoly]] = defaultdict(list)
    cultural: list[SPoly] = []
    unnamed: list[SPoly] = []
    for feat in geo["features"]:
        props = feat.get("properties") or {}
        name = polity_name(props)
        parts = clipped_parts(feat["geometry"])
        if not parts:
            continue
        if not name:
            unnamed.extend(parts)
            continue
        area = sum(p.area for p in parts)
        if is_cultural(name) or (area < 25 and not POLITY_RE.search(name)):
            cultural.extend(parts)
            continue
        groups[name].extend(parts)

    fig_w = WIDTH / DPI
    fig_h = HEIGHT / DPI
    fig, ax = plt.subplots(figsize=(fig_w, fig_h), dpi=DPI)
    fig.subplots_adjust(0, 0, 1, 1)
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_aspect("auto")
    ax.axis("off")
    fig.patch.set_facecolor(SEA)
    ax.set_facecolor(SEA)

    ax.add_collection(PatchCollection(land_patches(land), match_original=True))

    # Unnamed / cultural stay tan — they are not invented states.
    tan_patches = [
        mpl_patch(p, facecolor=LAND, edgecolor="#d4c49a", linewidth=0.15, zorder=2)
        for p in unnamed + cultural
    ]
    if tan_patches:
        ax.add_collection(PatchCollection(tan_patches, match_original=True))

    areas = {name: sum(p.area for p in polys) for name, polys in groups.items()}
    for name, polys in groups.items():
        fill = hex_rgb(color_for(name))
        patches = [
            mpl_patch(
                p,
                facecolor=fill,
                edgecolor=INK,
                linewidth=0.35,
                zorder=3,
            )
            for p in polys
        ]
        ax.add_collection(PatchCollection(patches, match_original=True))

    forced = FORCE_LABELS[year]
    # Draw forced labels first (largest), then a few extra large named states.
    placed: list[tuple[float, float, float, float]] = []

    def overlaps(x, y, w, h) -> bool:
        for px, py, pw, ph in placed:
            if abs(x - px) < (w + pw) * 0.55 and abs(y - py) < (h + ph) * 0.8:
                return True
        return False

    def draw_label(text: str, lon: float, lat: float, size: float) -> None:
        # Approximate collision box in data units.
        w = size * 0.22 * max(1, len(text) * 0.32)
        h = size * 0.28
        if overlaps(lon, lat, w, h) and text not in {label_text(year, k) for k in forced}:
            return
        txt = ax.text(
            lon,
            lat,
            text,
            fontsize=size * 0.72,
            fontweight="bold",
            color=INK,
            ha="center",
            va="center",
            zorder=5,
            clip_on=True,
        )
        txt.set_path_effects(
            [patheffects.withStroke(linewidth=max(3.0, size * 0.08), foreground=HALO)]
        )
        placed.append((lon, lat, w, h))

    for name, (lon, lat, size) in forced.items():
        if name not in groups:
            continue
        draw_label(label_text(year, name), lon, lat, size)

    dest = OUT / f"y{year:04d}.png"
    tmp = CACHE / f"render_{year}.png"
    fig.savefig(tmp, dpi=DPI, facecolor=fig.get_facecolor())
    plt.close(fig)

    im = Image.open(tmp).convert("RGB")
    if im.size != (WIDTH, HEIGHT):
        im = im.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", (WIDTH, HEIGHT + FOOTER_H), FOOTER_BG)
    canvas.paste(im, (0, 0))
    draw = ImageDraw.Draw(canvas)
    year_font = load_font(40)
    foot_font = load_font(20)
    draw.text(
        (WIDTH - 200, HEIGHT - 72),
        str(year),
        fill=INK,
        font=year_font,
        stroke_width=3,
        stroke_fill=HALO,
    )
    draw.text((24, HEIGHT + 20), FOOTER, fill=FOOTER_FG, font=foot_font)
    dest.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(dest, "PNG", optimize=True)
    print(f"wrote {dest.relative_to(ROOT)} ({dest.stat().st_size // 1024} KB) {canvas.size} polities={len(groups)}")
    return dest


def main(years: list[int] | None = None) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for year in years or (1100, 1300, 1400, 1500, 1700, 1800, 1900):
        render_year(year)


if __name__ == "__main__":
    import sys

    years = [int(a) for a in sys.argv[1:] if a.isdigit()]
    main(years or None)
