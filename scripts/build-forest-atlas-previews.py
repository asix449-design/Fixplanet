#!/usr/bin/env python3
"""Build Fix Planet Forests atlas schematics.

Coastline is Natural Earth 110m land (public domain).
Field colours are original schematics after the named publishers —
NASA GEDI / ORNL DAAC, NASA LP DAAC / FIRMS, and FAO / FRA.
"""

from __future__ import annotations

import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "forests"
GEO = Path("/tmp/ne_110m_land.geojson")
GEO_URL = (
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/"
    "master/geojson/ne_110m_land.geojson"
)

W, H = 1600, 800
LAND = "#d5cfc3"
LAND_EDGE = "#8d8678"
INK = "#e7eef2"
OCEAN = "#1c3330"


def ensure_land() -> dict:
    if not GEO.exists():
        urllib.request.urlretrieve(GEO_URL, GEO)
    return json.loads(GEO.read_text())


def xy(lon: float, lat: float) -> tuple[float, float]:
    return ((lon + 180.0) / 360.0 * W, (90.0 - lat) / 180.0 * H)


def land_path(geo: dict) -> str:
    parts: list[str] = []
    for feature in geo["features"]:
        geom = feature["geometry"]
        polygons = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
        for polygon in polygons:
            for ring in polygon:
                cmds = []
                for i, (lon, lat) in enumerate(ring):
                    x, y = xy(lon, lat)
                    cmds.append(("M" if i == 0 else "L") + f"{x:.1f},{y:.1f}")
                cmds.append("Z")
                parts.append(" ".join(cmds))
    return " ".join(parts)


def ellipse(lon: float, lat: float, rx_deg: float, ry_deg: float, rotate: float = 0) -> str:
    x, y = xy(lon, lat)
    rx = rx_deg / 360.0 * W
    ry = ry_deg / 180.0 * H
    spin = f' transform="rotate({rotate:.0f} {x:.1f} {y:.1f})"' if rotate else ""
    return f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}"{spin}/>'


def band(lat0: float, lat1: float) -> str:
    _, y_hi = xy(0, max(lat0, lat1))
    _, y_lo = xy(0, min(lat0, lat1))
    return f'<rect x="0" y="{y_hi:.1f}" width="{W}" height="{y_lo - y_hi:.1f}"/>'


def graticule() -> str:
    lines = []
    for lon in range(-180, 181, 30):
        x, _ = xy(lon, 0)
        lines.append(
            f'<line x1="{x:.1f}" y1="0" x2="{x:.1f}" y2="{H}" stroke="{INK}" stroke-opacity="0.14"/>'
        )
    for lat in range(-60, 61, 30):
        _, y = xy(0, lat)
        lines.append(
            f'<line x1="0" y1="{y:.1f}" x2="{W}" y2="{y:.1f}" stroke="{INK}" stroke-opacity="0.14"/>'
        )
    return "\n".join(lines)


def legend_bar(left: str, right: str, c0: str, c1: str) -> str:
    return f"""
    <rect x="0" y="708" width="{W}" height="92" fill="#07141c"/>
    <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" fill="{INK}">
      <text x="48" y="760">{left}</text>
      <defs>
        <linearGradient id="legend" x1="0" x2="1">
          <stop offset="0" stop-color="{c0}"/>
          <stop offset="1" stop-color="{c1}"/>
        </linearGradient>
      </defs>
      <rect x="210" y="742" width="220" height="16" rx="8" fill="url(#legend)" stroke="{INK}" stroke-opacity="0.45"/>
      <text x="448" y="760">{right}</text>
    </g>
    """


def zone_legend() -> str:
    chips = [
        ("#1f6b45", "Tropical"),
        ("#c4a35a", "Subtropical"),
        ("#7d9a6a", "Temperate"),
        ("#3d5c6e", "Boreal"),
        ("#d5e4ea", "Polar"),
    ]
    parts = [
        f'<rect x="0" y="708" width="{W}" height="92" fill="#07141c"/>',
        f'<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="20" fill="{INK}">',
    ]
    x = 48
    for color, label in chips:
        parts.append(
            f'<rect x="{x}" y="742" width="22" height="16" rx="3" fill="{color}" stroke="{INK}" stroke-opacity="0.45"/>'
        )
        parts.append(f'<text x="{x + 30}" y="757">{label}</text>')
        x += 36 + len(label) * 11
    parts.append("</g>")
    return "\n".join(parts)


def frame(title: str, desc: str, body: str, land: str, overlay: str) -> str:
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
  <title>{title}</title>
  <desc>{desc} Coastline: Natural Earth 110m land, public domain. Field is an original schematic, not an agency plate.</desc>
  <defs>
    <filter id="soft" x="-8%" y="-8%" width="116%" height="116%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
    <mask id="landmask">
      <rect width="{W}" height="{H}" fill="black"/>
      <path d="{land}" fill="white" fill-rule="evenodd"/>
    </mask>
  </defs>
  <rect width="{W}" height="{H}" fill="{OCEAN}"/>
  {graticule()}
  <path d="{land}" fill="{LAND}" stroke="{LAND_EDGE}" stroke-width="0.6" fill-rule="evenodd"/>
  <g mask="url(#landmask)" filter="url(#soft)">{body}</g>
  {overlay}
</svg>
"""


def gedi_limit() -> str:
    lines = []
    for lat in (52, -52):
        _, y = xy(0, lat)
        lines.append(
            f'<line x1="0" y1="{y:.1f}" x2="{W}" y2="{y:.1f}" stroke="{INK}" stroke-dasharray="8 7" stroke-opacity="0.55"/>'
        )
    _, y = xy(0, 52)
    lines.append(
        f'<text x="24" y="{y - 8:.1f}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" fill="{INK}">GEDI ±52°</text>'
    )
    return "\n".join(lines)


def canopy(land: str) -> str:
    short, tall = "#d7c48a", "#143d22"
    mid = "#3f7a45"
    body = "\n".join(
        [
            f'<g fill="{tall}" fill-opacity="0.92">',
            ellipse(-62, -4, 28, 16),
            ellipse(22, 1, 18, 12),
            ellipse(114, -2, 22, 10),
            ellipse(102, 2, 16, 8),
            "</g>",
            f'<g fill="{mid}" fill-opacity="0.88">',
            ellipse(-100, 52, 36, 8),
            ellipse(80, 54, 48, 7),
            ellipse(-70, 48, 18, 6),
            ellipse(135, 50, 16, 6),
            "</g>",
            f'<g fill="{short}" fill-opacity="0.8">',
            ellipse(20, 18, 22, 10),
            ellipse(-108, 34, 16, 8),
            ellipse(70, 38, 20, 8),
            ellipse(134, -24, 18, 10),
            ellipse(-66, -22, 12, 8),
            "</g>",
            f'<g fill="#0e1a14" fill-opacity="0.45">',
            band(52, 90),
            band(-90, -52),
            "</g>",
        ]
    )
    return frame(
        "Canopy height — schematic",
        "Mean canopy height: taller tropical and boreal stands, shorter drylands. Coverage fades outside about ±52° latitude.",
        body,
        land,
        gedi_limit() + legend_bar("short", "tall", short, tall),
    )


def biomass(land: str) -> str:
    low, high = "#e4d7b0", "#1a3f28"
    mid = "#6a8f45"
    body = "\n".join(
        [
            f'<g fill="{high}" fill-opacity="0.92">',
            ellipse(-62, -5, 26, 14),
            ellipse(23, 0, 16, 11),
            ellipse(112, -1, 24, 11),
            "</g>",
            f'<g fill="{mid}" fill-opacity="0.75">',
            ellipse(-95, 50, 30, 7),
            ellipse(90, 52, 40, 6),
            ellipse(28, -12, 10, 8),
            "</g>",
            f'<g fill="{low}" fill-opacity="0.85">',
            ellipse(18, 20, 24, 12),
            ellipse(-110, 36, 14, 8),
            ellipse(78, 40, 18, 8),
            ellipse(133, -25, 16, 12),
            ellipse(-100, 10, 8, 14),
            "</g>",
            f'<g fill="#0e1a14" fill-opacity="0.45">',
            band(52, 90),
            band(-90, -52),
            "</g>",
        ]
    )
    return frame(
        "Aboveground biomass density — schematic",
        "Aboveground biomass density in tonnes per hectare: denser moist tropics, sparser drylands. A density field, not a national carbon-stock total.",
        body,
        land,
        gedi_limit() + legend_bar("low Mg/ha", "high Mg/ha", low, high),
    )


def burned(land: str) -> str:
    scar, hot = "#e7d7c3", "#9a3412"
    body = "\n".join(
        [
            f'<g fill="{hot}" fill-opacity="0.9">',
            ellipse(22, 8, 16, 8, -18),
            ellipse(28, 2, 8, 5, 24),
            ellipse(110, -14, 10, 6, -30),
            ellipse(134, -20, 12, 5, 12),
            ellipse(100, 58, 18, 5, -8),
            ellipse(-62, -8, 7, 4, 20),
            ellipse(-118, 54, 10, 4, -12),
            ellipse(-8, 40, 8, 4, 16),
            ellipse(20, -8, 6, 3, -10),
            "</g>",
            f'<g fill="#c45c2a" fill-opacity="0.75">',
            ellipse(18, 12, 10, 4, 8),
            ellipse(124, 4, 8, 3, -20),
            ellipse(-90, 48, 8, 3, 6),
            "</g>",
        ]
    )
    return frame(
        "Burned area — schematic",
        "Fire-scar footprints on land. Scars are burned area, not live hotspot points alone.",
        body,
        land,
        legend_bar("land", "burn scar", scar, hot),
    )


def zones(land: str) -> str:
    body = "\n".join(
        [
            '<g fill-opacity="0.88">',
            f'<g fill="#d5e4ea">{band(66.5, 90)}{band(-90, -66.5)}</g>',
            f'<g fill="#3d5c6e">{band(55, 66.5)}{band(-66.5, -55)}</g>',
            f'<g fill="#7d9a6a">{band(35, 55)}{band(-55, -35)}</g>',
            f'<g fill="#c4a35a">{band(23.5, 35)}{band(-35, -23.5)}</g>',
            f'<g fill="#1f6b45">{band(-23.5, 23.5)}</g>',
            "</g>",
        ]
    )
    return frame(
        "Ecological zones — schematic",
        "Climatic-ecological bands used as a reporting frame: tropical, subtropical, temperate, boreal, and polar. Not a yearly loss map and not a biome reconstruction.",
        body,
        land,
        zone_legend(),
    )


def main() -> None:
    geo = ensure_land()
    land = land_path(geo)
    OUT.mkdir(parents=True, exist_ok=True)
    files = {
        "canopy-height.svg": canopy(land),
        "aboveground-biomass.svg": biomass(land),
        "burned-area.svg": burned(land),
        "ecological-zones.svg": zones(land),
    }
    for name, svg in files.items():
        (OUT / name).write_text(svg)
        print(name, len(svg))


if __name__ == "__main__":
    main()
