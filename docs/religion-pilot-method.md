# Religions schematic shelf (1–1500 CE) — overlay method

Sixteen flat shelf cards (1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500). No globe, no Three.js, no Cesium, no year slider on a sphere. Do not add 1600 schematic plates here.

## What is original

Religion fills, hatches, and urban dots are **Fix Planet schematic reconstructions**.
They live as GeoJSON under `data/religion-pilot/` and are authored as coarse
Old-World washes (ellipse unions), not as a census and not as state-religion
polygons. Coordinates were written in-house from public historical knowledge
(Mediterranean civic cult, Parthian/Sasanian Iran, Indic and Han umbrellas,
tiny first-century Christian urban points). They were **not** traced from
Paradox, EU4, CK, GeaCron, Euratlas, Omniatlas, Maps of War, Hammond, Faruqi,
or Reddit state-religion maps.

Oceania is left **unmapped gray**. Americas stay unmapped through 1200; from 1300
they take a coarse indigenous local-traditions wash (not a census). We do not
invent Oceania fills.

## What is the underlay

Coastline / land underlays come from
[aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)
(`world_100` … `world_1500`), GPL-3.0.

There is **no `world_1`**. The year-1 card uses `world_100` as the nearest
underlay. Public copy does not name the underlay file.

Corresponding Source for the GPL basemap:
<https://github.com/aourednik/historical-basemaps>

Render does **not** vendor those GeoJSON files into this repository. The
script fetches them at build time (see `scripts/render-religion-pilot.py`).
Do **not** put © Fix Planet on GPL geometry. Religion artwork is a separate
layer.

Modern Natural Earth 110m land is used only as a clip so washes stay on land.
It is not a political layer.

## Companions (not the game layer)

- `public/images/maps/religion/y0001.png` — Élisée Reclus 1905 Old-World plate
  (public domain). Museum companion for year 1. Not the schematic shelf card.
- `public/images/maps/religion/y0600.png` — spread of Christianity to AD 600
  (CC BY-SA 3.0). Process companion on the 600 step (schematic is primary).
  Linked from 300/400/500. Do not overwrite this file when rendering 600.

## How to re-render

```bash
python3 scripts/render-religion-pilot.py
```

Writes `y0001-schematic.png`, `y0100.png`–`y0500.png`, `y0600-schematic.png`,
`y0700.png` / `y0800.png` / `y0900.png`, `y1000.png` / `y1100.png` /
`y1200.png`, and `y1300.png` / `y1400.png` / `y1500.png` at 2560×1280 plus a
credit footer.
Does **not** overwrite `y0600.png`. Years 700–1500 have no on-image legend.
Palette: tan land `#FFDF99`, sea `#C9EDFB` (same family as History of borders
plates). All fills use `clip_to_land`. Islam is a public legend color from 700.
The Fährtenleser “spread until 1500” companion is kept as `y1500-spread.png`
for unpublished later steps. Do not add 1600.
