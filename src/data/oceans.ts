import type { HubIconName } from './hub';

export const oceanPanelKeys = [
  'currents',
  'salinity',
  'sst',
  'pollution',
  'numbers',
] as const;

export type OceanPanel = (typeof oceanPanelKeys)[number];

/** Hub tiles only. Numbers stay as a sources deep-dive, not a duplicate shelf tile. */
export const oceanHub = [
  { key: 'currents', icon: 'wave' },
  { key: 'salinity', icon: 'droplet' },
  { key: 'sst', icon: 'grid' },
  { key: 'pollution', icon: 'alert' },
] as const satisfies ReadonlyArray<{ key: OceanPanel; icon: HubIconName }>;

export type OceanFrameMode = 'sst' | 'sst-anomaly' | 'salinity' | 'currents';

export type OceanFrameMeta = {
  id: string;
  mode: OceanFrameMode;
  year: number;
  file: string;
  sourceOrg: string;
  sourceShort: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  vintage: string;
};

export type OceanStatUnit =
  | 'percent'
  | 'pH'
  | 'millionTonnes'
  | 'trillion'
  | 'sites'
  | 'ohc'
  | 'earthSurface'
  | 'mmYear'
  | 'oxygen'
  | 'stocks'
  | 'coral'
  | 'mpa'
  | 'millionHa';

export type OceanStatMeta = {
  id: string;
  value: string;
  unitKey: OceanStatUnit;
  vintage: string;
  sourceShort: string;
  sourceUrl: string;
};

export type OceanFrameCopy = {
  label: string;
  title: string;
  caption: string;
  imageAlt: string;
};

export type OceanStatCopy = {
  label: string;
  text: string;
};

export type OceanPollutionMeta = {
  id: string;
  file: string;
  sourceOrg: string;
  sourceShort: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  vintage: string;
  seeAlsoId?: string;
};

export type OceanPollutionCopy = {
  title: string;
  lead: string;
  caption: string;
  imageAlt: string;
  seeAlso?: string;
};

export type OceanFrame = OceanFrameMeta & OceanFrameCopy;
export type OceanStat = OceanStatMeta & OceanStatCopy;
export type OceanPollution = OceanPollutionMeta & OceanPollutionCopy;

/**
 * Hosted frames for the Oceans page.
 *
 * SST: NASA Worldview Snapshot of GHRSST MUR L4 absolute SST (and, separately,
 * MUR SST anomaly). 2400×1200, coastlines. Example:
 * https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&TIME=2024-07-01T00:00:00Z&BBOX=-90,-180,90,180&CRS=EPSG:4326&LAYERS=GHRSST_L4_MUR_Sea_Surface_Temperature,Coastlines_15m&WRAP=day,x&FORMAT=image/jpeg&WIDTH=2400&HEIGHT=1200
 *
 * Do not invent a live global current animation. OSCAR GIBS snapshots of
 * zonal/meridional components do not render as a speed map here; we host a
 * labeled schematic and send readers to Copernicus / ESR OSCAR.
 *
 * Do not invent a single “pollution” raster. Five subtropical garbage
 * patches, a North Pacific (GPGP) model, oil, chlorophyll, and hypoxia
 * are different datasets.
 */
export const sstFrames: OceanFrameMeta[] = [
  {
    id: 'sst-2003',
    mode: 'sst',
    year: 2003,
    file: 'sst-2003.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature',
    sourceShort: 'NASA GHRSST MUR',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2003',
  },
  {
    id: 'sst-2010',
    mode: 'sst',
    year: 2010,
    file: 'sst-2010.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature',
    sourceShort: 'NASA GHRSST MUR',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2010',
  },
  {
    id: 'sst-2015',
    mode: 'sst',
    year: 2015,
    file: 'sst-2015.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature',
    sourceShort: 'NASA GHRSST MUR',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2015',
  },
  {
    id: 'sst-2020',
    mode: 'sst',
    year: 2020,
    file: 'sst-2020.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature',
    sourceShort: 'NASA GHRSST MUR',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2020',
  },
  {
    id: 'sst-2024',
    mode: 'sst',
    year: 2024,
    file: 'sst-2024.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature',
    sourceShort: 'NASA GHRSST MUR',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2024',
  },
  {
    id: 'sst-2025',
    mode: 'sst',
    year: 2025,
    file: 'sst-2025.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature',
    sourceShort: 'NASA GHRSST MUR',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2025',
  },
];

export const sstAnomalyFrames: OceanFrameMeta[] = [
  {
    id: 'sst-anom-2020',
    mode: 'sst-anomaly',
    year: 2020,
    file: 'sst-anom-2020.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature Anomalies',
    sourceShort: 'NASA MUR SST anomaly',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2020',
  },
  {
    id: 'sst-anom-2022',
    mode: 'sst-anomaly',
    year: 2022,
    file: 'sst-anom-2022.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature Anomalies',
    sourceShort: 'NASA MUR SST anomaly',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2022',
  },
  {
    id: 'sst-anom-2023',
    mode: 'sst-anomaly',
    year: 2023,
    file: 'sst-anom-2023.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature Anomalies',
    sourceShort: 'NASA MUR SST anomaly',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2023',
  },
  {
    id: 'sst-anom-2024',
    mode: 'sst-anomaly',
    year: 2024,
    file: 'sst-anom-2024.jpg',
    sourceOrg: 'NASA Worldview / GIBS; GHRSST L4 MUR Sea Surface Temperature Anomalies',
    sourceShort: 'NASA MUR SST anomaly',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '1 July 2024',
  },
];

export const salinityFrames: OceanFrameMeta[] = [
  {
    id: 'sal-2011',
    mode: 'salinity',
    year: 2011,
    file: 'salinity-aquarius-2011.jpg',
    sourceOrg: 'NASA / JPL-Caltech, Aquarius mission first global salinity map',
    sourceShort: 'NASA Aquarius 2011',
    sourceUrl: 'https://www.jpl.nasa.gov/images/pia14786-aquarius-unveils-the-salty-sea/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.jpl.nasa.gov/jpl-image-use-policy/',
    vintage: '25 Aug–11 Sep 2011',
  },
  {
    id: 'sal-atlantic',
    mode: 'salinity',
    year: 2011,
    file: 'salinity-aquarius.jpg',
    sourceOrg: 'NASA / JPL-Caltech, Aquarius sea-surface salinity visualization',
    sourceShort: 'NASA Aquarius Atlantic',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aquarius_Sea_Surface_Salinity.jpg',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.jpl.nasa.gov/jpl-image-use-policy/',
    vintage: 'Aquarius-era 3-D view',
  },
];

export const currentFrames: OceanFrameMeta[] = [
  {
    id: 'currents-1943',
    mode: 'currents',
    year: 1943,
    file: 'currents-gyres-1943.jpg',
    sourceOrg: 'United States Army Service Forces, Atlas of World Maps (1943)',
    sourceShort: 'US Army 1943 schematic',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ocean_currents_1943_(borderless)3.png',
    license: 'Public domain (US government)',
    licenseUrl: 'https://commons.wikimedia.org/wiki/File:Ocean_currents_1943_(borderless)3.png',
    vintage: '1943 schematic',
  },
];

export const pollutionStills: OceanPollutionMeta[] = [
  {
    id: 'patches',
    file: 'plastic-five-gyres-2014.png',
    sourceOrg: 'Eriksen et al. 2014, PLOS ONE; modelled floating-plastic count density in five subtropical gyres',
    sourceShort: 'Eriksen et al. 2014',
    sourceUrl: 'https://doi.org/10.1371/journal.pone.0111913',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    vintage: '2007–2013 surveys; 2014 model',
    seeAlsoId: 'plastics',
  },
  {
    id: 'plastics',
    file: 'plastic-gpgp-2015.jpg',
    sourceOrg: 'Lebreton et al. 2018, Scientific Reports; modelled North Pacific plastic mass',
    sourceShort: 'Lebreton et al. 2018',
    sourceUrl: 'https://doi.org/10.1038/s41598-018-22939-w',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    vintage: 'August 2015 model',
    seeAlsoId: 'patches',
  },
  {
    id: 'oil',
    file: 'oil-dwh-2010.jpg',
    sourceOrg: 'NASA Terra MODIS, Deepwater Horizon oil slick',
    sourceShort: 'NASA MODIS 2010',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Deepwater_Horizon_oil_spill_-_May_24,_2010.jpg',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: '24 May 2010',
  },
  {
    id: 'nutrient',
    file: 'chl-2019.png',
    sourceOrg: 'NASA ocean color / chlorophyll-a concentration (global composite)',
    sourceShort: 'NASA chlorophyll-a',
    sourceUrl: 'https://oceancolor.gsfc.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'October 2019',
  },
  {
    id: 'deadzones',
    file: 'dead-zones.jpg',
    sourceOrg: 'NASA Earth Observatory after Robert Diaz, VIMS; GSFC Ocean Color',
    sourceShort: 'NASA EO / Diaz',
    sourceUrl: 'https://earthobservatory.nasa.gov/images/44677/aquatic-dead-zones',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://earthobservatory.nasa.gov/image-use-policy',
    vintage: '2008 compilation',
  },
];

export const oceanStats: OceanStatMeta[] = [
  {
    id: 'oceanCover',
    value: '~71',
    unitKey: 'earthSurface',
    vintage: 'IPCC SROCC 2019',
    sourceShort: 'IPCC SROCC',
    sourceUrl: 'https://www.ipcc.ch/srocc/chapter/summary-for-policymakers/',
  },
  {
    id: 'heatShare',
    value: '~90',
    unitKey: 'percent',
    vintage: 'IPCC AR6 2021',
    sourceShort: 'IPCC AR6 WG1',
    sourceUrl: 'https://www.ipcc.ch/report/ar6/wg1/',
  },
  {
    id: 'seaLevel',
    value: '3.7',
    unitKey: 'mmYear',
    vintage: '2006–2018',
    sourceShort: 'IPCC AR6 WG1',
    sourceUrl: 'https://www.ipcc.ch/report/ar6/wg1/',
  },
  {
    id: 'ohcRecord',
    value: '2023–24',
    unitKey: 'ohc',
    vintage: 'Cheng et al. 2024',
    sourceShort: 'Cheng et al. 2024',
    sourceUrl: 'https://doi.org/10.1007/s00376-024-3378-5',
  },
  {
    id: 'phDrop',
    value: '~0.1',
    unitKey: 'pH',
    vintage: 'IPCC AR6 / NOAA PMEL',
    sourceShort: 'IPCC AR6; NOAA PMEL',
    sourceUrl: 'https://www.pmel.noaa.gov/co2/story/Ocean+Acidification',
  },
  {
    id: 'oxygenLoss',
    value: '0.5–3.3',
    unitKey: 'oxygen',
    vintage: '1970–2010',
    sourceShort: 'IPCC SROCC',
    sourceUrl: 'https://www.ipcc.ch/srocc/chapter/summary-for-policymakers/',
  },
  {
    id: 'plasticLand',
    value: '4.8–12.7',
    unitKey: 'millionTonnes',
    vintage: '2010, Jambeck 2015',
    sourceShort: 'Jambeck et al. 2015',
    sourceUrl: 'https://doi.org/10.1126/science.1260352',
  },
  {
    id: 'plasticFloat',
    value: '5.25',
    unitKey: 'trillion',
    vintage: 'Eriksen 2014',
    sourceShort: 'Eriksen et al. 2014',
    sourceUrl: 'https://doi.org/10.1371/journal.pone.0111913',
  },
  {
    id: 'overfished',
    value: '35.5',
    unitKey: 'stocks',
    vintage: 'FAO 2025 (2021 status)',
    sourceShort: 'FAO marine stocks 2025',
    sourceUrl:
      'https://www.fao.org/newsroom/detail/fao-releases-the-most-detailed-global-assessment-of-marine-fish-stocks-to-date/en',
  },
  {
    id: 'coralLost',
    value: '~14',
    unitKey: 'coral',
    vintage: '2009–2018',
    sourceShort: 'GCRMN 2020',
    sourceUrl: 'https://doi.org/10.59387/wotj9184',
  },
  {
    id: 'deadZones',
    value: '>500',
    unitKey: 'sites',
    vintage: 'Breitburg 2018',
    sourceShort: 'Breitburg et al. 2018',
    sourceUrl: 'https://doi.org/10.1126/science.aam7240',
  },
  {
    id: 'mpaCover',
    value: '8.4',
    unitKey: 'mpa',
    vintage: 'Protected Planet 2024',
    sourceShort: 'Protected Planet Report 2024',
    sourceUrl: 'https://digitalreport.protectedplanet.net/',
  },
  {
    id: 'mangroveArea',
    value: '15.9',
    unitKey: 'millionHa',
    vintage: 'FRA 2025',
    sourceShort: 'FAO FRA 2025',
    sourceUrl:
      'https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/forest-characteristics.html',
  },
];

export const oceanFrameSrc = (file: string) => `/images/oceans/${file}`;

export const oceanBackdrop = {
  file: 'oceans-section-bg.jpg',
  sourceOrg: 'NASA / ISS Expedition 56',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:ISS-56_Pacific_Ocean_with_sunglint.jpg',
  license: 'Public domain (NASA)',
} as const;

/** Hub-only hero. Shelf pages keep `oceanBackdrop`. */
export const oceanHubBackdrop = {
  file: 'oceans-hub-bg.jpg',
  sourceOrg: 'bigwavephoto',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sun_breaking_through_clouds_over_ocean.jpg',
  license: 'CC BY-SA 4.0',
  width: 1920,
  height: 1280,
} as const;

/**
 * Headline figures on the Oceans hub hero. Full notes and the rest of the
 * published set stay on `/oceans/numbers`. Ids must exist in `oceanStats`.
 */
export const oceanHeroStatIds = [
  'oceanCover',
  'heatShare',
  'seaLevel',
  'phDrop',
  'oxygenLoss',
  'plasticLand',
  'overfished',
  'coralLost',
] as const satisfies ReadonlyArray<(typeof oceanStats)[number]['id']>;

export const worldviewSstUrl =
  'https://worldview.earthdata.nasa.gov/?v=-180,-90,180,90&l=GHRSST_L4_MUR_Sea_Surface_Temperature,Coastlines_15m';
export const worldviewSstAnomUrl =
  'https://worldview.earthdata.nasa.gov/?v=-180,-90,180,90&l=GHRSST_L4_MUR_Sea_Surface_Temperature_Anomalies,Coastlines_15m';
export const worldviewSmapUrl =
  'https://worldview.earthdata.nasa.gov/?v=-180,-90,180,90&l=SMAP_L3_Sea_Surface_Salinity_REMSS_Monthly,Coastlines_15m';
export const worldviewChlUrl =
  'https://worldview.earthdata.nasa.gov/?v=-180,-90,180,90&l=VIIRS_SNPP_L2_Chlorophyll_A,Coastlines_15m';
export const oscarEsrUrl = 'https://www.esr.org/data-products/oscar/';
export const copernicusMarineUrl = 'https://data.marine.copernicus.eu/viewer';
export const noaaPollutionUrl = 'https://www.ospo.noaa.gov/products/ocean/marinepollution/';
export const noaaGarbagePatchesUrl =
  'https://marinedebris.noaa.gov/discover-marine-debris/garbage-patches';
export const nasaOceanColorUrl = 'https://oceancolor.gsfc.nasa.gov/';
export const woa2023Url = 'https://www.ncei.noaa.gov/products/world-ocean-atlas';
export const ipccAr6Url = 'https://www.ipcc.ch/report/ar6/wg1/';
export const ipccSroccSpmUrl = 'https://www.ipcc.ch/srocc/chapter/summary-for-policymakers/';
export const cheng2024Url = 'https://doi.org/10.1007/s00376-024-3378-5';
export const breitburg2018Url = 'https://doi.org/10.1126/science.aam7240';
export const faoMarineStocks2025Url =
  'https://www.fao.org/newsroom/detail/fao-releases-the-most-detailed-global-assessment-of-marine-fish-stocks-to-date/en';
export const gcrmn2020Url = 'https://doi.org/10.59387/wotj9184';
export const protectedPlanet2024Url = 'https://digitalreport.protectedplanet.net/';
export const faoFra2025MangroveUrl =
  'https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/forest-characteristics.html';

export function isOceanPanel(value: string | undefined): value is OceanPanel {
  return !!value && (oceanPanelKeys as readonly string[]).includes(value);
}

export function oceanPanelPath(panel: OceanPanel): string {
  return `/oceans/${panel}`;
}
