import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';
import { climateSwatches as sw } from './maps-climate-swatches';

const heads = {
  what: 'What it is',
  why: 'Why it matters',
  how: 'How to read it',
  limits: 'Limits',
};

export const en: Record<string, MapCopy> = {
  'surface-temperature-anomalies': {
    title: 'Surface temperature anomalies',
    cardMeta: 'Goddard Institute for Space Studies · 2025 · against 1951 to 1980',
    hook: 'Surface temperature across the globe in 2025, shown as the difference from the 1951 to 1980 average.',
    description:
      'The Goddard Institute for Space Studies, part of the National Aeronautics and Space Administration, publishes a global surface temperature analysis. It combines land weather-station records with an analysis of sea-surface temperatures, and the analysis includes more than 25,000 meteorological stations. Results are anomalies in degrees Celsius: how much warmer or cooler a place is than its own 1951 to 1980 average. Monthly values reach back to 1880, and the tables are updated every month.',
    whyOnShelf:
      'Averaged over the whole globe, 2023 was 1.17 °C above the 1951 to 1980 average, 2024 was 1.29 °C above and 2025 was 1.19 °C above. The space agency describes 2025 as tied with 2023 within the margin of error, with 2024 still the hottest year on record. In 2025 the northern hemisphere was 1.49 °C above and the southern hemisphere 0.89 °C above; the band from 64 degrees north to the pole was 2.99 °C above.',
    howToRead:
      'Each square is 2 by 2 degrees and shows the average of its twelve monthly anomalies for 2025. Shades of orange and red are warmer than the 1951 to 1980 average, light blue is cooler, and grey squares have no value. Almost every square is warmer, and the strongest warming is in the far north.',
    caveats:
      'Values are smoothed over a radius of 1200 kilometres, so places with few stations borrow from distant ones, and the ocean part rests on sea-surface temperature analyses. A few squares have no value. Against a different baseline period, such as the pre-industrial period, the numbers change.',
    licenseNote: realMapCredit('en', 'surface-temperature-anomalies') ?? '',
    imageAlt:
      'World map of the 2025 surface temperature anomaly on a 2 by 2 degree grid. Most of the globe is orange and red, the far north is darkest red, and a few squares are grey.',
    caption:
      'Surface temperature anomaly in 2025 on a 2 by 2 degree grid, against the 1951 to 1980 average.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Shading shows the 2025 anomaly in degrees Celsius against 1951 to 1980.',
        items: [
          { swatch: sw.temp.below0, label: 'Light blue, below 0' },
          { swatch: sw.temp.to05, label: 'Pale peach, 0 to 0.5' },
          { swatch: sw.temp.to1, label: 'Peach, 0.5 to 1' },
          { swatch: sw.temp.to15, label: 'Salmon, 1 to 1.5' },
          { swatch: sw.temp.to2, label: 'Coral, 1.5 to 2' },
          { swatch: sw.temp.to3, label: 'Red, 2 to 3' },
          { swatch: sw.temp.to4, label: 'Dark red, 3 to 4' },
          { swatch: sw.temp.above4, label: 'Maroon, 4 or above' },
          { swatch: sw.temp.none, label: 'Grey, no value' },
        ],
      },
    ],
    sources: [
      cite(
        'Goddard Institute for Space Studies: GISS Surface Temperature Analysis (GISTEMP v4)',
        'https://data.giss.nasa.gov/gistemp/',
      ),
      cite(
        'Goddard Institute for Space Studies: GISTEMP v4 Data Downloads',
        'https://data.giss.nasa.gov/gistemp/data_v4.html',
      ),
      cite(
        'Goddard Institute for Space Studies: Global-mean monthly, seasonal, and annual means, 1880 to present (table)',
        'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv',
      ),
      cite(
        'Goddard Institute for Space Studies: Zonal annual means, 1880 to present (table)',
        'https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv',
      ),
      cite(
        'NASA Science: Global Temperature',
        'https://science.nasa.gov/earth/explore/earth-indicators/global-temperature/',
      ),
      cite(
        'NOAA Physical Sciences Laboratory: GISS Surface Temperature Analysis (GISTEMP), gridded data',
        'https://psl.noaa.gov/data/gridded/data.gistemp.html',
      ),
      cite(
        'NASA Earthdata: Data Use and Citation Guidance',
        'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance',
      ),
    ],
  },
  'land-precipitation': {
    title: 'Land precipitation',
    cardMeta: 'Global Precipitation Climatology Centre · 2024 · annual total',
    hook: 'Total rain and snow that fell on land in 2024, in millimetres, from rain-gauge stations on a 0.5 degree grid.',
    description:
      'The Global Precipitation Climatology Centre supports climate monitoring and research. It is operated by the Deutscher Wetterdienst (German Weather Service) under the auspices of the World Meteorological Organization. From rain-gauge stations on land it builds gridded monthly precipitation, and its monthly analysis comes at several grid sizes from 0.25 to 2.5 degrees and covers the period from 1891 to the present. The map uses the 0.5 degree grid.',
    whyOnShelf:
      'The record runs from 1891, so the product that maps 2024 also supports comparisons across more than a century. The producer recommends the monthly analysis for checking hydrometeorological models and for studying the water cycle.',
    howToRead:
      'Each square is 0.5 by 0.5 degrees and shows the total precipitation of 2024 in millimetres, the sum of the twelve monthly values. One millimetre is one litre of water on each square metre. Pale yellow is dry, and the greens grow darker as the yearly total rises. The largest totals are in the wet tropics, and the driest squares lie in deserts.',
    caveats:
      'Only land is covered. A square is coloured only when all twelve months have a value, and everything else, including all ocean, is light grey-blue. The number of stations behind the monthly values varies from fewer than 10,000 to more than 52,000 across the world, so sparsely observed regions are less certain. The producer advises users to take the number of stations per square into account and to apply correction factors for systematic gauge measuring errors. The product is updated at irregular intervals.',
    licenseNote: realMapCredit('en', 'land-precipitation') ?? '',
    imageAlt:
      'World map of total precipitation on land in 2024. Wet tropics are dark green, deserts are pale yellow, and the ocean is light grey-blue.',
    caption: 'Total precipitation on land in 2024 on a 0.5 degree grid, from rain-gauge stations.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Shading shows the total precipitation of 2024 in millimetres.',
        items: [
          { swatch: sw.rain.under100, label: 'Pale yellow, under 100' },
          { swatch: sw.rain.to250, label: 'Light yellow, 100 to 250' },
          { swatch: sw.rain.to500, label: 'Pale green, 250 to 500' },
          { swatch: sw.rain.to1000, label: 'Light green, 500 to 1,000' },
          { swatch: sw.rain.to1500, label: 'Green, 1,000 to 1,500' },
          { swatch: sw.rain.to2000, label: 'Medium green, 1,500 to 2,000' },
          { swatch: sw.rain.to3000, label: 'Dark green, 2,000 to 3,000' },
          { swatch: sw.rain.above3000, label: 'Very dark green, 3,000 or more' },
          { swatch: sw.rain.none, label: 'Light grey-blue, no value' },
        ],
      },
    ],
    sources: [
      cite(
        'Deutscher Wetterdienst: Global Precipitation Climatology Centre (GPCC)',
        'https://www.dwd.de/EN/ourservices/gpcc/gpcc.html',
      ),
      cite(
        'Deutscher Wetterdienst: Product Access (GPCC)',
        'https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html',
      ),
      cite(
        'Deutscher Wetterdienst: Download GPCC Products',
        'https://opendata.dwd.de/climate_environment/GPCC/html/download_gate.html',
      ),
      cite(
        'Rustemeier, E., Finger, P., Schirmeister, Z. and Ziese, M. (2025): GPCC Precipitation Analysis Monthly Version 2025 at 0.5 degree, Deutscher Wetterdienst, digital object identifier 10.5676/DWD_GPCC/MONTHLY_V2025_050',
        'https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050',
      ),
    ],
  },
  'drought-index': {
    title: 'Drought',
    cardMeta: 'Spanish National Research Council · December 2024 · 12-month scale',
    hook: 'How much drier or wetter than usual the twelve months to December 2024 were on land, counting rainfall and evaporation.',
    description:
      'The Standardised Precipitation Evapotranspiration Index is published by the Spanish National Research Council (Consejo Superior de Investigaciones Científicas). It uses the monthly difference between precipitation and potential evapotranspiration, the water the air could draw from the ground and plants. This simple climatic water balance is calculated at different time scales. The global database has a 0.5 degree grid and monthly values from January 1901 to December 2024, with time scales from 1 to 48 months, and it covers land only. It is built on monthly climate data from the Climatic Research Unit at the University of East Anglia.',
    whyOnShelf:
      'Because the index counts evaporation as well as rainfall, it responds to heat as well as to missing rain. The different time scales suit different parts of the water system, from soil moisture over a few months to rivers and groundwater over a year or more.',
    howToRead:
      'Each square shows the 12-month value for December 2024, which covers January to December 2024. The value is a standard score for that place. Zero is a typical year, negative values are drier than usual and shown in brown, and positive values are wetter than usual and shown in teal. The darker the colour, the further from usual.',
    caveats:
      'The current version of the database ends in December 2024. Only land with data is coloured, from about 56 degrees south to about 84 degrees north; ocean and the rest of the globe are light grey-blue. Evaporation demand is calculated from climate data. Each colour compares a place with its own history, so equal colours in a wet region and in a dry region mean different amounts of water.',
    licenseNote: realMapCredit('en', 'drought-index') ?? '',
    imageAlt:
      'World map of the 12-month drought index for December 2024. Drier than usual land is brown, wetter than usual land is teal, and the ocean is light grey-blue.',
    caption: 'Drought index on a 12-month scale for December 2024, on a 0.5 degree grid over land.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Shading shows the 12-month index for December 2024.',
        items: [
          { swatch: sw.drought.belowM2, label: 'Dark brown, below minus 2' },
          { swatch: sw.drought.toM15, label: 'Brown, minus 2 to minus 1.5' },
          { swatch: sw.drought.toM1, label: 'Light brown, minus 1.5 to minus 1' },
          { swatch: sw.drought.toM05, label: 'Sand, minus 1 to minus 0.5' },
          { swatch: sw.drought.near, label: 'Near white, minus 0.5 to 0.5' },
          { swatch: sw.drought.to1, label: 'Pale teal, 0.5 to 1' },
          { swatch: sw.drought.to15, label: 'Teal, 1 to 1.5' },
          { swatch: sw.drought.to2, label: 'Dark teal, 1.5 to 2' },
          { swatch: sw.drought.above2, label: 'Very dark teal, above 2' },
          { swatch: sw.drought.none, label: 'Light grey-blue, no value' },
        ],
      },
    ],
    sources: [
      cite(
        'Spanish National Research Council: Data base, SPEI, The Standardised Precipitation-Evapotranspiration Index (SPEIbase)',
        'https://spei.csic.es/database.html',
      ),
      cite(
        'Spanish National Research Council: Information, SPEI, The Standardised Precipitation-Evapotranspiration Index',
        'https://spei.csic.es/home.html',
      ),
      cite(
        'Vicente-Serrano, S. M., Beguería, S. and López-Moreno, J. I. (2010): A Multiscalar Global Drought Dataset: The SPEIbase, American Meteorological Society, Bulletin of the American Meteorological Society',
        'https://doi.org/10.1175/2010BAMS2988.1',
      ),
      cite(
        'Open Data Commons: Open Database License (ODbL) v1.0',
        'https://opendatacommons.org/licenses/odbl/1-0/',
      ),
    ],
  },
  'outdoor-heat-stress': {
    title: 'Outdoor heat stress',
    cardMeta: 'Copernicus Climate Change Service · 2025 · against 1991 to 2020',
    hook: 'How many more or fewer days than usual brought strong heat stress outdoors in 2025, on land worldwide except Antarctica.',
    description:
      'The Copernicus Climate Change Service offers a dataset of thermal comfort indices, produced by the European Centre for Medium-Range Weather Forecasts from its atmospheric reanalysis, which combines model data with observations from across the world into a complete and consistent description of the climate. One of them is the Universal Thermal Climate Index, a feels-like temperature in degrees Celsius that combines air temperature, humidity, wind and radiation. The data cover the globe except Antarctica on a 0.25 degree grid, from January 1940 to near real time. A day with at least strong heat stress is a day on which the feels-like temperature reaches 32 °C or more.',
    whyOnShelf:
      'In 2025, 50% of the globe\'s land, excluding Antarctica, had more days than average with at least strong heat stress. In parts of the southern United States and eastern Asia there were up to 45 more such days than average, and central Africa had up to around 110 more days with very strong heat stress, a feels-like temperature of 38 °C or above. Most of Australia and parts of northern Africa and the Arabian Peninsula had more extreme heat stress days than average. Up to a third of the globe, including southern Africa and southern Asia, had fewer heat stress days than average.',
    howToRead:
      'Each colour shows how many days more or fewer than the 1991 to 2020 average had at least strong heat stress in 2025. Brown and orange mean more days, near white and cream mean close to the average, and purple means fewer days. The stronger the colour, the larger the difference. The ocean and Antarctica are left blank.',
    caveats:
      'The feels-like temperature is calculated from reanalysis output on a 0.25 degree grid, and Antarctica is outside the dataset. The map shows only the change in the number of days compared with the 1991 to 2020 average. The heat stress categories begin at 26 °C for moderate, 32 °C for strong, 38 °C for very strong and 46 °C for extreme. Downloading the gridded data needs a free account of the Copernicus Climate Data Store.',
    licenseNote: realMapCredit('en', 'outdoor-heat-stress') ?? '',
    imageAlt:
      'World map of the 2025 change in days with strong outdoor heat stress. Brown and orange mark more days than average, purple marks fewer days, and Antarctica is blank.',
    caption:
      'Change in the number of days with at least strong outdoor heat stress in 2025, against the 1991 to 2020 average. The picture is the published figure from the Global Climate Highlights 2025 report, with the colours changed and the map turned so north is up.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Colours show the change in the number of days with at least strong heat stress in 2025 compared with the 1991 to 2020 average.',
        items: [
          { swatch: sw.heat.fewer50, label: 'Dark purple, at least 50 fewer days' },
          { swatch: sw.heat.fewer25, label: 'Purple, 25 to 50 fewer' },
          { swatch: sw.heat.fewer10, label: 'Lilac, 10 to 25 fewer' },
          { swatch: sw.heat.fewer1, label: 'Pale lilac, 1 to 10 fewer' },
          { swatch: sw.heat.nearFewer, label: 'Near white, up to 1 fewer' },
          { swatch: sw.heat.nearMore, label: 'Cream, up to 1 more' },
          { swatch: sw.heat.more1, label: 'Light orange, 1 to 10 more' },
          { swatch: sw.heat.more10, label: 'Orange, 10 to 25 more' },
          { swatch: sw.heat.more25, label: 'Brown, 25 to 50 more' },
          { swatch: sw.heat.more50, label: 'Dark brown, at least 50 more days' },
          { swatch: sw.heat.ocean, label: 'Grey-blue, ocean and Antarctica, no value' },
        ],
      },
    ],
    sources: [
      cite(
        'Copernicus Climate Change Service: Global Climate Highlights 2025',
        'https://climate.copernicus.eu/global-climate-highlights-2025',
      ),
      cite(
        'Copernicus Climate Change Service: Global Climate Highlights 2025, full report (PDF)',
        'https://climate.copernicus.eu/sites/default/files/custom-uploads/GCH-2025/GCH2025-full-report.pdf',
      ),
      cite(
        'Copernicus Climate Data Store: Thermal comfort indices derived from ERA5 reanalysis',
        'https://cds.climate.copernicus.eu/datasets/derived-utci-historical?tab=overview',
      ),
      cite(
        'Copernicus Climate Change Service: European State of the Climate 2025, Thermal stress',
        'https://climate.copernicus.eu/esotc/2025/thermal-stress',
      ),
      cite(
        'Copernicus Climate Data Store: Licence to use Copernicus Products',
        'https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products',
      ),
    ],
  },
  'land-snow-cover': {
    title: 'Land snow cover',
    cardMeta: 'National Snow and Ice Data Center · March 2026 · 0.05 degree',
    hook: 'Share of days with snow on the ground across the world\'s land in March 2026, seen by a satellite instrument.',
    description:
      'The National Snow and Ice Data Center in the United States distributes a monthly snow cover product from the Moderate Resolution Imaging Spectroradiometer, an instrument on the Terra satellite of the National Aeronautics and Space Administration. It gives the monthly mean snow cover in cells of 0.05 degrees, about 5 kilometres, on a global grid, and it is derived from the daily product. Monthly values run from 1 March 2000 to the present.',
    whyOnShelf:
      'Snow cover changes with the seasons and from year to year. Because the record begins in March 2000, the same month can be compared across more than twenty-five years with one instrument and one method.',
    howToRead:
      'Each cell shows the average percentage of snow cover during the month, taken over days when the satellite had a clear view. Darker blue means snow covered the ground on more days, from under 10 percent in the palest blue to 90 percent or more in the darkest. The warm sand colour on land means under 0.5 percent snow, or no usable observation. Ocean is light grey-blue. Antarctica is outside the map.',
    caveats:
      'Cloud and darkness hide the ground from the satellite. Days without a clear view are left out of the monthly mean, and in the polar night there is no observation, so the far north is partly blank in winter. The product sets very low averages to zero. Its accuracy for snow is 88 to 93 percent in published studies, and spurious snow has been seen in places without snow. The product maps Antarctica as fully snow covered for visual reasons, which is why the continent is left off. A free Earthdata Login account is needed to download the original files.',
    licenseNote: realMapCredit('en', 'land-snow-cover') ?? '',
    imageAlt:
      'World map of average snow cover on land in March 2026. Northern land is blue where snow was common, snow-free land is sand coloured, the ocean is light grey-blue, and Antarctica is left off.',
    caption:
      'Average snow cover on land in March 2026 on a 0.05 degree grid, from the Terra satellite. Antarctica is left off the map.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Shading shows the average snow cover during March 2026, in percent of days with a clear view.',
        items: [
          { swatch: sw.snow.under05, label: 'Sand, under 0.5' },
          { swatch: sw.snow.to10, label: 'Very pale blue, 0.5 to 10' },
          { swatch: sw.snow.to25, label: 'Pale blue, 10 to 25' },
          { swatch: sw.snow.to50, label: 'Light blue, 25 to 50' },
          { swatch: sw.snow.to75, label: 'Medium blue, 50 to 75' },
          { swatch: sw.snow.to90, label: 'Blue, 75 to 90' },
          { swatch: sw.snow.to100, label: 'Dark blue, 90 to 100' },
          { swatch: sw.snow.ocean, label: 'Light grey-blue, ocean' },
        ],
      },
    ],
    sources: [
      cite(
        'National Snow and Ice Data Center: MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61',
        'https://nsidc.org/data/mod10cm/versions/61',
      ),
      cite(
        'National Snow and Ice Data Center: MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61, User Guide (PDF)',
        'https://nsidc.org/sites/default/files/mod10cm-v061-userguide_0.pdf',
      ),
      cite(
        'Hall, D. K. and Riggs, G. A. (2021): MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61, National Snow and Ice Data Center, digital object identifier 10.5067/MODIS/MOD10CM.061',
        'https://doi.org/10.5067/MODIS/MOD10CM.061',
      ),
      cite(
        'NASA Earthdata: Data Use and Citation Guidance',
        'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance',
      ),
    ],
  },
};
