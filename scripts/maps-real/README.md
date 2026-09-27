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
```

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
| `forest-cover-loss` | Hansen Global Forest Change / Global Forest Watch tree-cover loss, summed 2001–2024, via Our World in Data | https://ourworldindata.org/grapher/tree-cover-loss.csv | CC BY (Hansen / UMD / Global Forest Watch; Our World in Data) |
| `nitrogen-dioxide-no2` | Copernicus Sentinel-5P TROPOMI tropospheric NO₂, mean of 1–16 June 2024, NASA GIBS | https://gibs.earthdata.nasa.gov/ (layer `TROPOMI_L2_Nitrogen_Dioxide_Tropospheric_Column`) | Copernicus Sentinel data (ESA), accessed through NASA GIBS |
| `canopy-height` | NASA GEDI L3 mean RH100 canopy height, April 2019–March 2023, NASA GIBS | layer `GEDI_ISS_L3_Canopy_Height_Mean_RH100_201904-202303` | Public domain (NASA) |
| `aboveground-biomass` | NASA GEDI L4B mean aboveground biomass density, April 2019–March 2023, NASA GIBS | layer `GEDI_ISS_L4B_Aboveground_Biomass_Density_Mean_201904-202303` | Public domain (NASA) |
| `sea-ice-extent` | NSIDC AMSR2 sea-ice concentration, 12 km, 15 March 2024, NASA GIBS | layer `AMSRU2_Sea_Ice_Concentration_12km` | Public domain (NASA / NSIDC) |
| `sea-level` | NASA JPL MEaSUREs gridded sea-surface height anomalies v1812, 15 June 2018 | layer `JPL_MEaSUREs_L4_Sea_Surface_Height_Anomalies` | Public domain (NASA) |
| `marine-heatwaves` | NASA GHRSST MUR L4 sea-surface temperature anomalies, 15 August 2024 | layer `GHRSST_L4_MUR_Sea_Surface_Temperature_Anomalies` | Public domain (NASA) |
| `mangrove-extent` | Mangrove forest distribution, 2000, NASA GIBS | layer `Mangrove_Forest_Distribution_2000` | Public domain (NASA visualization of the Giri et al. mangrove map) |
| `dissolved-oxygen` | NOAA World Ocean Atlas 2023 dissolved oxygen, annual 1° climatology 1965–2022. The map is the minimum of the objectively analyzed field between 100 m and 1000 m. | https://www.ncei.noaa.gov/data/oceans/woa/WOA23/DATA/oxygen/netcdf/all/1.00/woa23_all_o00_01.nc | Public domain (NOAA). Cite Garcia et al., World Ocean Atlas 2023 Volume 3, NOAA Atlas NESDIS 91. |
| `mineral-resources` | USGS Mineral Resources Data System deposit locations | https://mrdata.usgs.gov/mrds/mrds-csv.zip | Public domain (USGS) |

GIBS GetMap endpoint:

```text
https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap
```

Country choropleths use a logarithmic colour scale. The bar’s end numbers are the smallest plotted value (5th percentile of positive countries) and the largest country value. Land with no number stays a neutral grey.

## Outputs

- `public/images/<section>/detail/<stem>.webp` — 7200×3600
- `public/images/<section>/<stem>.jpg` — 1600×800
