# Real-data maps

These scripts replace Fix Planet schematic plates with maps drawn from the cited open data. Detail frames are 7200×3600 pixels in the Equal Earth projection (EPSG:8857), fitted to a 2:1 canvas. Card previews are 1600×800 JPEG derivatives. Images contain no titles, place names, or worded legends. Where the script has the numeric values, it draws a colour bar of numbers only. Units live in the localized credit on the page.

## Regenerate

From the repository root, with Python 3 and the packages listed below:

```bash
python3 scripts/maps-real/render.py
python3 scripts/maps-real/render.py choropleth
python3 scripts/maps-real/render.py gibs
python3 scripts/maps-real/render.py woa
python3 scripts/maps-real/render.py minerals
python3 scripts/maps-real/aggregate_tiles.py gmw hansen
python3 scripts/maps-real/render_pass2.py sea-level heat ice ohc ph hansen gmw burned
python3 scripts/maps-real/render_vectors.py gez aqueduct ifl
python3 scripts/maps-real/render_forest_pack.py lesiv carbon peat render
python3 scripts/maps-real/render_remittances.py
```

`render_pass2.py`, `render_vectors.py`, and `render_forest_pack.py` also need `rasterio`. The forest pack reads PEATMAP shapefiles with `fiona`. Raw downloads stay in `scripts/maps-real/raw/`.

## Still schematic, and why

- Primary humid tropical forests, forest landscape integrity, HydroLAKES, and GLWD: the public pages did not offer a direct file this run could fetch (GLAD has no bare raster link; HydroSHEDS returned 403; the FLII site did not serve a raster).
- Coral reefs and marine fisheries: no open reef polygon or stock-status grid with a licence that clearly allows this site to draw it was retrieved. Allen Coral Atlas and UNEP-WCMC were not available as a simple open download here.
- Languages (UNESCO Atlas and the Endangered Languages Project): Glottolog coordinates are a different classification. The card text is the UNESCO degree framework and says it is not a Glottolog map, so the schematic stays.
- Global Peace Index and the Fragile States Index: the publishers’ score tables are not released under a licence that clearly allows a redistributed choropleth. They stay schematic.
- ACLED and the Heidelberg Conflict Barometer: no open download that can stand in for those datasets. They stay schematic. No other conflict dataset was substituted under their names.

Install once:

```bash
pip install pillow numpy matplotlib pyproj h5py
```

Downloads are stored in `scripts/maps-real/raw/` and are listed in `.gitignore`. Do not commit them. The script expects the OWID CSV files, the Natural Earth GeoJSON, the World Ocean Atlas NetCDF, and the USGS MRDS zip to already be in `raw/` under the names in the table below. GIBS layers are fetched when `gibs` runs.

## Sources

| Output | Dataset | URL | Licence |
| --- | --- | --- | --- |
| Natural Earth 1:10m countries (boundaries for every choropleth and the land underlay) | `ne_10m_admin_0_countries.geojson` | https://github.com/nvkelso/natural-earth-vector | Public domain |
| `consumption-co2-emissions` | Global Carbon Project consumption-based CO₂, 2023, via Our World in Data | https://ourworldindata.org/grapher/consumption-co2-emissions.csv | CC BY (Global Carbon Project / Our World in Data) |
| `methane-emissions` | EDGAR methane emissions including land use, 2024, via Our World in Data | https://ourworldindata.org/grapher/methane-emissions.csv | CC BY (EDGAR / European Commission JRC; Our World in Data) |
| `mismanaged-plastic-waste` | Meijer et al. 2021 mismanaged plastic waste, year 2019, via Our World in Data | https://ourworldindata.org/grapher/plastic-waste-mismanaged.csv | CC BY |
| `military-expenditure-sipri` | SIPRI Military Expenditure Database, 2024, via Our World in Data | https://ourworldindata.org/grapher/military-spending-sipri.csv | SIPRI terms; OWID republication is CC BY. Attribute SIPRI. |
| `forest-cover-loss` | Hansen Global Forest Change v1.12 lossyear, share of 30 m pixels lost 2001–2024 on a 0.02° grid | https://storage.googleapis.com/earthenginepartners-hansen/GFC-2024-v1.12/ | CC BY 4.0 (Hansen / UMD / Google / USGS / NASA) |
| `nitrogen-dioxide-no2` | Copernicus Sentinel-5P TROPOMI tropospheric NO₂, annual mean of the twelve 2024 KNMI/TEMIS monthly grids (0.125°). Negatives and the −999 fill are dropped. Log scale from 1×10¹⁵ molecules/cm² | https://www.temis.nl/airpollution/no2col/no2month_tropomi.php | Copernicus Sentinel data (ESA), KNMI/TEMIS |
| `canopy-height` | NASA GEDI L3 mean RH100 canopy height, April 2019–March 2023, NASA GIBS | layer `GEDI_ISS_L3_Canopy_Height_Mean_RH100_201904-202303` | Public domain (NASA) |
| `aboveground-biomass` | NASA GEDI L4B mean aboveground biomass density, April 2019–March 2023, NASA GIBS | layer `GEDI_ISS_L4B_Aboveground_Biomass_Density_Mean_201904-202303` | Public domain (NASA) |
| `sea-ice-extent` | NSIDC Sea Ice Index G02135 v4 monthly concentration. Arctic March 2026 and Antarctic September 2025, side by side in polar stereographic | https://noaadata.apps.nsidc.org/NOAA/G02135/ | Public domain (NSIDC / NOAA) |
| `sea-level` | NOAA Laboratory for Satellite Altimetry regional sea-level trend, 1992.96–2025.10, millimetres per year | https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_map_ref.txt | NOAA LSA. Acknowledge: “Altimetry data are provided by NOAA Laboratory for Satellite Altimetry.” |
| `marine-heatwaves` | NOAA Coral Reef Watch 5 km sea-surface temperature anomaly, 25 September 2026 | https://www.star.nesdis.noaa.gov/pub/sod/mecb/crw/data/5km/v3.1_op/nc/v1.0/daily/ssta/2026/ | Public domain (NOAA) |
| `mangrove-extent` | Global Mangrove Watch v3, 2020 extent, share of ~25 m pixels on a 0.02° grid | https://zenodo.org/records/6894273 | CC BY 4.0 |
| `ocean-heat-content` | NOAA NCEI yearly ocean heat content anomaly, 0–700 m, 2025, 10¹⁸ joules per 1° cell | https://www.ncei.noaa.gov/data/oceans/woa/DATA_ANALYSIS/3M_HEAT_CONTENT/NETCDF/heat_content/heat_content_anomaly_0-700_yearly.nc | Public domain (NOAA) |
| `ocean-acidification` | OceanSODA-ETHZ v2025 surface pH change, 1985–1989 mean to 2020–2024 mean | https://www.ncei.noaa.gov/data/oceans/ncei/ocads/data/0220059/ | NOAA NCEI OCADS / OceanSODA-ETHZ |
| `burned-area` | MODIS MCD64CMQ Collection 6.1, 2023 annual burned fraction (sum of monthly burned area ÷ 0.25° cell area). Public SFTP `fuoco.geog.umd.edu`, user `fire` (password in the MCD64 user guide) | `data/MODIS/C61/MCD64CMQ/` | NASA MODIS / University of Maryland distribution |
| `ecological-zones` | FAO Global Ecological Zones 2010 shapefile | https://storage.googleapis.com/fao-maps-catalog-data/uuid/2fb209d0-fd34-4e5e-a3d8-a13c241eb61b/resources/gez2010.zip | FAO |
| `water-stress` | WRI Aqueduct 4.0 baseline water stress score, 0–5 | https://files.wri.org/aqueduct/aqueduct-4-0-water-risk-data.zip | CC BY 4.0. Cite Kuzma et al. 2023 |
| `groundwater-whymap` | WRI Aqueduct 4.0 baseline groundwater table decline score, 0–5. The page slug is unchanged; the plate is not WHYMAP | same Aqueduct 4.0 zip | CC BY 4.0 |
| `flood-hazard-aqueduct` | WRI Aqueduct 4.0 baseline riverine flood risk score, 0–5. Not an inundation-depth raster | same Aqueduct 4.0 zip | CC BY 4.0 |
| `intact-forest-landscapes` | Intact Forest Landscapes 2020 extent | https://intactforests.org/shp/IFL_2020.zip | CC BY 4.0 (IFL Mapping Team) |
| `planted-forests` | Lesiv et al. 2022 forest management, 2015. Share of 100 m pixels in class 31 (planted, rotation > 15 years) or 32 (short-rotation timber plantation) on a 0.02° grid. Class 40 oil palm is excluded | https://zenodo.org/records/5879022 | CC BY 4.0 |
| `forest-carbon-stock` | FAO FRA 2025 country tables, living-biomass carbon in 2025 (aboveground + belowground), million tonnes. Log choropleth. Soil, litter and dead wood are not drawn | https://fra-data.fao.org/ | FAO FRA country statistics |
| `peatlands` | PEATMAP peat polygons (Xu et al. 2018). A 0.02° cell is marked when a polygon touches it | https://doi.org/10.5518/252 | CC BY 4.0 |
| `tree-cover` | ESA WorldCover 10 m 2021 v200. Share of 10 m pixels in class 10 (tree cover) on a 0.02° grid. Class 95 mangroves are excluded | https://doi.org/10.5281/zenodo.7254221 | CC BY 4.0. Contains modified Copernicus Sentinel data (2021) |
| `dissolved-oxygen` | NOAA World Ocean Atlas 2023 dissolved oxygen, annual 1° climatology 1965–2022. The map is the minimum of the objectively analyzed field between 100 m and 1000 m. | https://www.ncei.noaa.gov/data/oceans/woa/WOA23/DATA/oxygen/netcdf/all/1.00/woa23_all_o00_01.nc | Public domain (NOAA). Cite Garcia et al., World Ocean Atlas 2023 Volume 3, NOAA Atlas NESDIS 91. |
| `remittances-top-recipients` | World Bank World Development Indicators, personal remittances received (current US$), 2024. Log choropleth. 2025 is only partly reported and is not drawn | World Bank API | CC BY 4.0 |
| `remittances-gdp-share` | World Bank World Development Indicators, personal remittances received as a percentage of GDP, 2024. Log choropleth | World Bank API | CC BY 4.0 |
| `remittances-sending-cost` | World Bank World Development Indicators, average cost of sending remittances to a country (%), 2023. Positive values only. Log choropleth | World Bank API | CC BY 4.0 |
| `remittances-global-flows` | Migration and Development Brief 40, Table 1.1, low- and middle-income total, 2017–2023, billions of US dollars. Bars, not a map | World Bank Brief 40 PDF | CC BY 3.0 IGO |
| `remittances-wdi-series` | World Bank World Development Indicators world totals: personal remittances received 1970–2024 (orange) and paid 1966–2024 (blue), billions of current US dollars | World Bank API | CC BY 4.0 |
| `mineral-resources` | USGS Mineral Resources Data System deposit locations | https://mrdata.usgs.gov/mrds/mrds-csv.zip | Public domain (USGS) |

GIBS GetMap endpoint:

```text
https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap
```

Country choropleths use a logarithmic colour scale. The bar’s end numbers are the smallest plotted value (5th percentile of positive countries) and the largest country value. Land with no number stays a neutral grey.

## Outputs

- `public/images/<section>/detail/<stem>.webp` — 7200×3600
- `public/images/<section>/<stem>.jpg` — 1600×800
