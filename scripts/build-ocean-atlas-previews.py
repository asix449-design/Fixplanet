#!/usr/bin/env python3
"""Build Fix Planet Oceans atlas schematics.

Coastline for the global plates is Natural Earth 110m land (public domain).
Field colours, ice edges, and the sea-level curve are original Fix Planet
overviews — not NOAA, NSIDC, NASA, or Copernicus plates.
"""

from __future__ import annotations

import json
import math
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "oceans"
GEO = Path("/tmp/ne_110m_land.geojson")
GEO_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/"
    "master/geojson/ne_110m_land.geojson"
)

W, H = 1600, 800
LAND = "#d5cfc3"
LAND_EDGE = "#8d8678"
OCEAN_INK = "#e7eef2"


def ensure_land() -> dict:
    if not GEO.exists():
        urllib.request.urlretrieve(GEO_URL, GEO)
    return json.loads(GEO.read_text())


def xy(lon: float, lat: float) -> tuple[float, float]:
    return ((lon + 180.0) / 360.0 * W, (90.0 - lat) / 180.0 * H)


def land_path(geo: dict) -> str:
    parts: list[str] = []
    for feature in geo["features"]:
        for ring in feature["geometry"]["coordinates"]:
            cmds = []
            for i, (lon, lat) in enumerate(ring):
                x, y = xy(lon, lat)
                cmds.append(("M" if i == 0 else "L") + f"{x:.1f},{y:.1f}")
            cmds.append("Z")
            parts.append(" ".join(cmds))
    return " ".join(parts)


def ellipse(lon: float, lat: float, rx_deg: float, ry_deg: float) -> str:
    x, y = xy(lon, lat)
    rx = rx_deg / 360.0 * W
    ry = ry_deg / 180.0 * H
    return f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}"/>'


def band(lat0: float, lat1: float) -> str:
    _, y_hi = xy(0, max(lat0, lat1))
    _, y_lo = xy(0, min(lat0, lat1))
    return f'<rect x="0" y="{y_hi:.1f}" width="{W}" height="{y_lo - y_hi:.1f}"/>'


def graticule() -> str:
    lines = []
    for lon in range(-180, 181, 30):
        x, _ = xy(lon, 0)
        lines.append(
            f'<line x1="{x:.1f}" y1="0" x2="{x:.1f}" y2="{H}" stroke="{OCEAN_INK}" stroke-opacity="0.14"/>'
        )
    for lat in range(-60, 61, 30):
        _, y = xy(0, lat)
        lines.append(
            f'<line x1="0" y1="{y:.1f}" x2="{W}" y2="{y:.1f}" stroke="{OCEAN_INK}" stroke-opacity="0.14"/>'
        )
    return "\n".join(lines)


def legend_bar(x: float, y: float, c0: str, c1: str, left: str, right: str) -> str:
    return f"""
    <rect x="0" y="708" width="{W}" height="92" fill="#07141c"/>
    <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" fill="{OCEAN_INK}">
      <text x="{x}" y="{y}">{left}</text>
      <defs>
        <linearGradient id="legend" x1="0" x2="1">
          <stop offset="0" stop-color="{c0}"/>
          <stop offset="1" stop-color="{c1}"/>
        </linearGradient>
      </defs>
      <rect x="{x + 78}" y="{y - 18}" width="220" height="16" rx="8" fill="url(#legend)" stroke="{OCEAN_INK}" stroke-opacity="0.45"/>
      <text x="{x + 310}" y="{y}">{right}</text>
    </g>
    """


def frame(title: str, desc: str, ocean: str, body: str, land: str, overlay: str = "") -> str:
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
  <title>{title}</title>
  <desc>{desc} Coastline: Natural Earth 110m land, public domain. Field is a Fix Planet schematic, not an agency plate.</desc>
  <defs>
    <filter id="soft" x="-8%" y="-8%" width="116%" height="116%">
      <feGaussianBlur stdDeviation="7"/>
    </filter>
  </defs>
  <rect width="{W}" height="{H}" fill="{ocean}"/>
  {graticule()}
  <g filter="url(#soft)">{body}</g>
  <path d="{land}" fill="{LAND}" stroke="{LAND_EDGE}" stroke-width="0.6" fill-rule="evenodd"/>
  {overlay}
</svg>
"""


def acidification(land: str) -> str:
    lower = "#163e5c"
    higher = "#e4d2a4"
    body = "\n".join(
        [
            f'<g fill="{lower}" fill-opacity="0.92">',
            band(-90, -55),
            band(68, 90),
            ellipse(-115, -2, 48, 16),
            ellipse(-82, -18, 14, 22),
            ellipse(-122, 32, 12, 16),
            ellipse(62, 16, 16, 10),
            ellipse(8, -22, 12, 18),
            "</g>",
            f'<g fill="{higher}" fill-opacity="0.78">',
            ellipse(-155, 28, 36, 14),
            ellipse(-120, -28, 34, 13),
            ellipse(-42, 30, 26, 12),
            ellipse(-18, -28, 22, 12),
            ellipse(78, -24, 28, 12),
            "</g>",
        ]
    )
    return frame(
        "Ocean acidification — Fix Planet schematic",
        "Surface-ocean pH schematic: cooler, lower-pH basins distinguished from higher-pH water. Not sea-surface temperature and not a pollution plume.",
        "#2f6a62",
        body,
        land,
        legend_bar(48, 760, lower, higher, "pH −", "pH +"),
    )


def oxygen(land: str) -> str:
    body = "\n".join(
        [
            '<g fill="#c56a32" fill-opacity="0.9">',
            ellipse(-112, -1, 42, 15),
            ellipse(-18, 2, 22, 16),
            ellipse(63, 15, 16, 11),
            "</g>",
        ]
    )
    return frame(
        "Dissolved oxygen — Fix Planet schematic",
        "Open-ocean dissolved-oxygen schematic with low-oxygen tongues in the eastern tropical Pacific, eastern Atlantic, and Arabian Sea. Not coastal dead-zone pins.",
        "#1a4f78",
        body,
        land,
        legend_bar(48, 760, "#1a4f78", "#c56a32", "O₂", "OMZ"),
    )


def polar_ring(cx: float, cy: float, r0: float, r1, gap: tuple[float, float] | None = None) -> str:
    """Annulus, optionally open between two degrees (0 = east, CCW). r1 may be a function of degrees."""
    pts = []
    outer = []
    for deg in range(0, 361, 3):
        if gap and gap[0] <= deg <= gap[1]:
            continue
        rad = math.radians(deg)
        radius = r1(deg) if callable(r1) else r1
        outer.append((cx + radius * math.cos(rad), cy - radius * math.sin(rad)))
    inner = []
    for deg in range(360, -1, -3):
        if gap and gap[0] <= deg <= gap[1]:
            continue
        rad = math.radians(deg)
        inner.append((cx + r0 * math.cos(rad), cy - r0 * math.sin(rad)))
    seq = outer + inner
    if not seq:
        return ""
    cmds = [f"M{seq[0][0]:.1f},{seq[0][1]:.1f}"]
    cmds += [f"L{x:.1f},{y:.1f}" for x, y in seq[1:]]
    cmds.append("Z")
    return " ".join(cmds)


def blob(cx: float, cy: float, radius_fn) -> str:
    pts = []
    for deg in range(0, 361, 3):
        rad = math.radians(deg)
        r = radius_fn(deg)
        pts.append((cx + r * math.cos(rad), cy - r * math.sin(rad)))
    cmds = [f"M{pts[0][0]:.1f},{pts[0][1]:.1f}"]
    cmds += [f"L{x:.1f},{y:.1f}" for x, y in pts[1:]]
    cmds.append("Z")
    return " ".join(cmds)


def sea_ice() -> str:
    ax, ay = 430, 390
    bx, by = 1170, 390

    def arctic_ice(deg: float) -> float:
        # Fuller toward the Canadian Arctic / Greenland, pulled back toward the Atlantic.
        return 148 + 28 * math.cos(math.radians(deg - 300)) - 22 * math.cos(math.radians(deg - 270))

    def arctic_median(deg: float) -> float:
        return arctic_ice(deg) + 26 + 8 * math.sin(math.radians(2 * deg))

    def ant_land(deg: float) -> float:
        pen = 46 * math.exp(-((deg - 110) ** 2) / 180)
        return 108 + 10 * math.sin(math.radians(3 * deg)) + pen

    def ant_ice(deg: float) -> float:
        return 176 + 14 * math.sin(math.radians(deg + 20))

    def ant_median(deg: float) -> float:
        return ant_ice(deg) + 22 + 6 * math.cos(math.radians(2 * deg))

    def coast(deg: float) -> float:
        return 268 + 18 * math.sin(math.radians(2 * deg))

    arctic_land = polar_ring(ax, ay, 188, coast, gap=(250, 292))
    # Second gap suggestion: Bering, a narrow cut at the top.
    bering = polar_ring(ax, ay, 200, 310, gap=(78, 102))
    greenland = blob(ax + 70, ay + 40, lambda d: 54 + 8 * math.sin(math.radians(2 * d)))

    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
  <title>Sea ice extent — Fix Planet schematic</title>
  <desc>Arctic and Antarctic sea-ice extent schematic. Filled ice against a dashed 1981–2010 median outline. Not sea-surface temperature and not land ice. Fix Planet overview after NSIDC Sea Ice Index.</desc>
  <rect width="{W}" height="{H}" fill="#07141c"/>
  <g>
    <circle cx="{ax}" cy="{ay}" r="318" fill="#0c3348"/>
    <path d="{blob(ax, ay, arctic_ice)}" fill="#f4f8fb"/>
    <path d="{blob(ax, ay, arctic_median)}" fill="none" stroke="#9eb4c4" stroke-width="3" stroke-dasharray="11 8"/>
    <path d="{arctic_land}" fill="{LAND}"/>
    <path d="{bering}" fill="#0c3348"/>
    <path d="{greenland}" fill="{LAND}" stroke="{LAND_EDGE}" stroke-width="1"/>
  </g>
  <g>
    <circle cx="{bx}" cy="{by}" r="318" fill="#0c3348"/>
    <path d="{blob(bx, by, ant_ice)}" fill="#f4f8fb"/>
    <path d="{blob(bx, by, ant_median)}" fill="none" stroke="#9eb4c4" stroke-width="3" stroke-dasharray="11 8"/>
    <path d="{blob(bx, by, ant_land)}" fill="{LAND}" stroke="{LAND_EDGE}" stroke-width="1"/>
  </g>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" fill="{OCEAN_INK}">
    <rect x="48" y="728" width="28" height="16" fill="#f4f8fb"/>
    <text x="86" y="742">≥15%</text>
    <line x1="200" y1="736" x2="268" y2="736" stroke="#9eb4c4" stroke-width="3" stroke-dasharray="11 8"/>
    <text x="280" y="742">1981–2010</text>
  </g>
</svg>
"""


def sea_level() -> str:
    pts = []
    for i in range(81):
        t = i / 80
        x = 170 + t * 1260
        y = 560 - (250 * (t ** 1.15))
        pts.append(f"{x:.1f},{y:.1f}")
    line = " ".join(pts)
    grid = []
    for y in (220, 320, 420, 520):
        grid.append(
            f'<line x1="150" y1="{y}" x2="1460" y2="{y}" stroke="{OCEAN_INK}" stroke-opacity="0.16"/>'
        )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
  <title>Sea level — Fix Planet schematic</title>
  <desc>Global mean sea-level time-series schematic for the satellite altimetry era since about 1993. A Fix Planet overview, not the NASA series and not one tide-gauge day.</desc>
  <rect width="{W}" height="{H}" fill="#07141c"/>
  {"".join(grid)}
  <line x1="150" y1="120" x2="150" y2="600" stroke="{OCEAN_INK}" stroke-opacity="0.7" stroke-width="2"/>
  <line x1="150" y1="600" x2="1460" y2="600" stroke="{OCEAN_INK}" stroke-opacity="0.7" stroke-width="2"/>
  <polyline points="{line}" fill="none" stroke="#c8f54a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
  <text x="150" y="660" fill="{OCEAN_INK}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28">1993</text>
</svg>
"""


def marine_heatwaves(land: str) -> str:
    warm = "#f0a05a"
    hot = "#e25b2a"
    body = "\n".join(
        [
            f'<g fill="{warm}" fill-opacity="0.9">',
            ellipse(-148, 44, 16, 7),
            ellipse(-162, 14, 12, 5),
            ellipse(18, 38, 11, 4),
            ellipse(118, -26, 13, 5),
            "</g>",
            f'<g fill="{hot}" fill-opacity="0.92">',
            ellipse(-78, 16, 9, 5),
            ellipse(128, -2, 14, 6),
            ellipse(-128, 0, 11, 4),
            ellipse(55, 14, 8, 4),
            "</g>",
        ]
    )
    return frame(
        "Marine heatwaves — Fix Planet schematic",
        "Discrete warm-event patches. A temporary extreme, separate from average sea-surface temperature and from heat stored through the water column.",
        "#12344c",
        body,
        land,
        legend_bar(48, 760, "#12344c", hot, "usual", "heatwave"),
    )


def ocean_heat_content() -> str:
    def curve(power: float, amp: float) -> str:
        pts = []
        for i in range(81):
            t = i / 80
            x = 220 + t * 1160
            y = 560 - amp * (t**power)
            pts.append(f"{x:.1f},{y:.1f}")
        return " ".join(pts)

    grid = []
    for y in (200, 300, 400, 500):
        grid.append(
            f'<line x1="180" y1="{y}" x2="1420" y2="{y}" stroke="{OCEAN_INK}" stroke-opacity="0.16"/>'
        )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
  <title>Ocean heat content — Fix Planet schematic</title>
  <desc>Heat stored through the water column, shown as two rising series for the upper and deeper layers. Not a sea-surface temperature map.</desc>
  <rect width="{W}" height="{H}" fill="#07141c"/>
  {"".join(grid)}
  <line x1="180" y1="140" x2="180" y2="580" stroke="{OCEAN_INK}" stroke-opacity="0.7" stroke-width="2"/>
  <line x1="180" y1="580" x2="1420" y2="580" stroke="{OCEAN_INK}" stroke-opacity="0.7" stroke-width="2"/>
  <polyline points="{curve(1.05, 180)}" fill="none" stroke="#f0a05a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
  <polyline points="{curve(1.2, 280)}" fill="none" stroke="#e25b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" fill="{OCEAN_INK}">
    <line x1="180" y1="660" x2="230" y2="660" stroke="#f0a05a" stroke-width="4"/>
    <text x="246" y="666">0–700 m</text>
    <line x1="420" y1="660" x2="470" y2="660" stroke="#e25b2a" stroke-width="4"/>
    <text x="486" y="666">0–2000 m</text>
  </g>
</svg>
"""


def coral_reefs(land: str) -> str:
    reefs = [
        (-84, 17, 8, 4),
        (-70, 18, 6, 3),
        (38, 22, 3, 8),
        (43, 14, 3, 5),
        (50, -6, 5, 4),
        (73, 4, 4, 3),
        (95, 6, 5, 3),
        (122, 5, 8, 4),
        (128, -2, 10, 5),
        (146, -16, 4, 9),
        (166, -16, 7, 4),
        (-157, 20, 4, 3),
        (-150, -17, 9, 4),
        (-175, -18, 6, 3),
    ]
    dots = "\n".join(ellipse(lon, lat, rx, ry) for lon, lat, rx, ry in reefs)
    return frame(
        "Coral reefs — Fix Planet schematic",
        "Reef regions drawn as discrete marks along tropical coasts. Hard-coral status context, not a restoration plan.",
        "#0e3f4c",
        "",
        land,
        f'<g fill="#ee8b6a" fill-opacity="0.92">{dots}</g>\n'
        + legend_bar(48, 760, "#0e3f4c", "#ee8b6a", "ocean", "reefs"),
    )


def marine_fisheries() -> str:
    track_x, track_y, track_w, track_h = 180, 300, 1240, 88
    over_w = track_w * 0.355
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
  <title>Marine fisheries — Fix Planet schematic</title>
  <desc>Share of assessed marine stocks classified as overfished. A status chart, not fishing gear and not a protected-area map.</desc>
  <rect width="{W}" height="{H}" fill="#07141c"/>
  <rect x="{track_x}" y="{track_y}" width="{track_w}" height="{track_h}" rx="8" fill="#1c4d62"/>
  <rect x="{track_x}" y="{track_y}" width="{over_w:.1f}" height="{track_h}" rx="8" fill="#e25b2a"/>
  <g font-family="ui-sans-serif, system-ui, sans-serif" fill="{OCEAN_INK}">
    <text x="{track_x}" y="260" font-size="28">Assessed marine stocks</text>
    <text x="{track_x}" y="440" font-size="28">35.5% overfished</text>
  </g>
</svg>
"""


def new_atlas_svgs(land: str) -> dict[str, str]:
    return {
        "marine-heatwaves.svg": marine_heatwaves(land),
        "ocean-heat-content.svg": ocean_heat_content(),
        "coral-reefs.svg": coral_reefs(land),
        "marine-fisheries.svg": marine_fisheries(),
    }


def main() -> None:
    geo = ensure_land()
    land = land_path(geo)
    OUT.mkdir(parents=True, exist_ok=True)
    files = {
        "ocean-acidification.svg": acidification(land),
        "dissolved-oxygen.svg": oxygen(land),
        "sea-ice-extent.svg": sea_ice(),
        "sea-level.svg": sea_level(),
        **new_atlas_svgs(land),
    }
    for name, svg in files.items():
        path = OUT / name
        path.write_text(svg)
        print(f"{path.name} {path.stat().st_size}")


def write_new_only() -> None:
    svg = (OUT / "ocean-acidification.svg").read_text()
    marker = '<path d="'
    start = svg.find(marker)
    if start < 0:
        raise SystemExit("existing coastline path not found")
    start += len(marker)
    land = svg[start : svg.find('"', start)]
    OUT.mkdir(parents=True, exist_ok=True)
    for name, body in new_atlas_svgs(land).items():
        path = OUT / name
        path.write_text(body)
        print(f"{path.name} {path.stat().st_size}")


if __name__ == "__main__":
    import sys

    if "--new-only" in sys.argv:
        write_new_only()
    else:
        main()
