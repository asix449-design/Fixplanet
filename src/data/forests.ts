import type { HubIconName } from './hub';

export const forestPanelKeys = [
  'satellite',
  'history',
  'numbers',
  'outlook',
] as const;

export type ForestPanel = (typeof forestPanelKeys)[number];

/** Hub tiles only. Numbers stay as a sources deep-dive, not a duplicate shelf tile. */
export const forestHub = [
  { key: 'satellite', icon: 'grid' },
  { key: 'history', icon: 'compass' },
  { key: 'outlook', icon: 'leaf' },
] as const satisfies ReadonlyArray<{ key: ForestPanel; icon: HubIconName }>;

export type ForestFidelity = 'satellite' | 'reconstruction';

export type ForestFrameMeta = {
  id: string;
  mode: ForestFidelity;
  /** Sort key. BCE years are negative (approx.). */
  year: number;
  file: string;
  sourceOrg: string;
  sourceShort: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  vintage: string;
};

export type ForestStatMeta = {
  id: string;
  value: string;
  unitKey: 'billionHa' | 'millionHa' | 'millionHaYear' | 'percent';
  vintage: string;
  sourceShort: string;
  sourceUrl: string;
};

export type ForestFrameCopy = {
  label: string;
  title: string;
  caption: string;
  imageAlt: string;
};

export type ForestStatCopy = {
  label: string;
  text: string;
};

export type ForestFrame = ForestFrameMeta & ForestFrameCopy;
export type ForestStat = ForestStatMeta & ForestStatCopy;

/**
 * Hosted frames for the Forests scrubber.
 *
 * To add a satellite year frame:
 * 1. Export a NASA Worldview Snapshot (public domain): layer
 *    `MODIS_Terra_L3_NDVI_Monthly`, TIME=YYYY-07-01, BBOX=-90,-180,90,180,
 *    CRS=EPSG:4326, 2400×1200 JPEG, plus `Coastlines_15m`.
 *    Example:
 *    https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&TIME=2024-07-01T00:00:00Z&BBOX=-90,-180,90,180&CRS=EPSG:4326&LAYERS=MODIS_Terra_L3_NDVI_Monthly,Coastlines_15m&WRAP=day,x&FORMAT=image/jpeg&WIDTH=2400&HEIGHT=1200
 * 2. Save as `public/images/forests/ndvi-YYYY.jpg`.
 * 3. Append a row here (id `sat-YYYY`, year YYYY).
 * 4. Add the same id under `frames` in `src/i18n/forests-en.ts` (and -ru / -pl / -lv).
 * 5. Record the file in `public/images/forests/credits.json`.
 * 6. `npm run build`.
 *
 * These NDVI plates are canopy greenness, not Hansen 30 m loss pixels.
 * Do not invent a continuous year-by-year map from 10,000 BCE.
 */
export const satelliteFrames: ForestFrameMeta[] = [
  {
    id: 'sat-2001',
    mode: 'satellite',
    year: 2001,
    file: 'ndvi-2001.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2001',
  },
  {
    id: 'sat-2005',
    mode: 'satellite',
    year: 2005,
    file: 'ndvi-2005.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2005',
  },
  {
    id: 'sat-2010',
    mode: 'satellite',
    year: 2010,
    file: 'ndvi-2010.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2010',
  },
  {
    id: 'sat-2015',
    mode: 'satellite',
    year: 2015,
    file: 'ndvi-2015.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2015',
  },
  {
    id: 'sat-2020',
    mode: 'satellite',
    year: 2020,
    file: 'ndvi-2020.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2020',
  },
  {
    id: 'sat-2024',
    mode: 'satellite',
    year: 2024,
    file: 'ndvi-2024.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2024',
  },
  {
    id: 'sat-2025',
    mode: 'satellite',
    year: 2025,
    file: 'ndvi-2025.jpg',
    sourceOrg: 'NASA Worldview / GIBS; MODIS Terra L3 NDVI Monthly',
    sourceShort: 'NASA MODIS NDVI',
    sourceUrl: 'https://worldview.earthdata.nasa.gov/',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://www.earthdata.nasa.gov/learn/earth-observation-data-policy',
    vintage: 'July 2025',
  },
];

export const reconstructionFrames: ForestFrameMeta[] = [
  {
    id: 'recon-lgm',
    mode: 'reconstruction',
    year: -16000,
    file: 'recon-lgm.png',
    sourceOrg: 'Ray & Adams 2001; map by Locoluis after their GIS shapefile',
    sourceShort: 'Ray & Adams 2001',
    sourceUrl: 'https://intarch.ac.uk/journal/issue11/rayadams_toc.html',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    vintage: '~25,000–15,000 BP',
  },
  {
    id: 'recon-midholocene',
    mode: 'reconstruction',
    year: -4000,
    file: 'recon-midholocene.png',
    sourceOrg: 'Ville Koistinen, Wikimedia biome plate (hand-compiled from atlas sources)',
    sourceShort: 'Koistinen biomes',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vegetation.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    vintage: 'Recent-climate biome plate',
  },
  {
    id: 'recon-1700',
    mode: 'reconstruction',
    year: 1700,
    file: 'recon-1700.jpg',
    sourceOrg: 'Ellis et al.; NASA SEDAC Anthropogenic Biomes v2, 1700',
    sourceShort: 'Ellis / SEDAC 1700',
    sourceUrl:
      'https://sedac.ciesin.columbia.edu/data/set/anthromes-anthropogenic-biomes-world-v2-1700',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    vintage: '1700 reconstruction',
  },
  {
    id: 'recon-1900',
    mode: 'reconstruction',
    year: 1900,
    file: 'recon-1900.jpg',
    sourceOrg: 'Ellis et al.; NASA SEDAC Anthropogenic Biomes v2, 1900',
    sourceShort: 'Ellis / SEDAC 1900',
    sourceUrl:
      'https://sedac.ciesin.columbia.edu/data/set/anthromes-anthropogenic-biomes-world-v2-1900',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    vintage: '1900 reconstruction',
  },
  {
    id: 'recon-2000',
    mode: 'reconstruction',
    year: 2000,
    file: 'recon-2000.jpg',
    sourceOrg: 'Ellis et al.; NASA SEDAC Anthropogenic Biomes v2, 2000',
    sourceShort: 'Ellis / SEDAC 2000',
    sourceUrl:
      'https://sedac.ciesin.columbia.edu/data/set/anthromes-anthropogenic-biomes-world-v2-2000',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    vintage: '2000 reconstruction',
  },
];

export const forestFrames: ForestFrameMeta[] = [
  ...reconstructionFrames,
  ...satelliteFrames,
];

export const forestFrameSrc = (file: string) => `/images/forests/${file}`;

export const gfwMapUrl = 'https://www.globalforestwatch.org/map/';
export const gfw2024Url = 'https://gfr.wri.org/global-tree-cover-loss-data-2024';
export const gfw2025Url =
  'https://www.wri.org/news/release-tropical-rainforest-loss-drops-36-2025-fires-threaten-global-progress';
export const faoFra2025Url =
  'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en';
export const crowther2015Url = 'https://doi.org/10.1038/nature14967';
export const ellis2021Url = 'https://doi.org/10.1073/pnas.2023483118';
export const hansen2013Url = 'https://doi.org/10.1126/science.1244693';

export const longViewImage = {
  file: 'anthromes-12k-timeline.png',
  sourceOrg: 'Erle Ellis, Anthromes 12K DGG v1 (after Ellis et al. 2021)',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anthromes_map_and_timeline_(10,000_BCE_to_2017_CE).png',
  license: 'CC BY 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  vintage: '10,000 BCE–2017',
} as const;

export const forestBackdrop = {
  file: 'forests-section-bg.jpg',
  sourceOrg: 'Michael Schweppe',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Redwood_National_Park,_fog_in_the_forest.jpg',
  license: 'CC BY-SA 2.0',
} as const;

/** Hub-only hero. Shelf pages keep `forestBackdrop`. */
export const forestHubBackdrop = {
  file: 'forests-hub-bg.jpg',
  sourceOrg: 'Quarkgluonplasma',
  sourceUrl:
    'https://commons.wikimedia.org/wiki/File:G._Zlatoust,_Chelyabinskaya_oblast%27,_Russia_-_panoramio_(45).jpg',
  license: 'CC BY-SA 3.0',
  width: 1920,
  height: 2880,
} as const;

/**
 * Published figures only. Do not invent hectare counts or a single “forests gone on DATE”.
 * FAO forest (land use) ≠ Hansen/GFW tree cover (canopy ≥ ~5 m, 30 m pixels).
 */
export const forestStats: ForestStatMeta[] = [
  {
    id: 'remaining',
    value: '4.14',
    unitKey: 'billionHa',
    vintage: 'FRA 2025',
    sourceShort: 'FAO FRA 2025',
    sourceUrl: faoFra2025Url,
  },
  {
    id: 'deforestationSince1990',
    value: '489',
    unitKey: 'millionHa',
    vintage: '1990–2025',
    sourceShort: 'FAO FRA 2025',
    sourceUrl: faoFra2025Url,
  },
  {
    id: 'netLossRecent',
    value: '4.12',
    unitKey: 'millionHaYear',
    vintage: '2015–2025',
    sourceShort: 'FAO FRA 2025',
    sourceUrl: faoFra2025Url,
  },
  {
    id: 'grossDeforestation',
    value: '10.9',
    unitKey: 'millionHaYear',
    vintage: '2015–2025',
    sourceShort: 'FAO FRA 2025',
    sourceUrl: faoFra2025Url,
  },
  {
    id: 'primaryRemaining',
    value: '1.18',
    unitKey: 'billionHa',
    vintage: 'FRA 2025',
    sourceShort: 'FAO FRA 2025',
    sourceUrl: faoFra2025Url,
  },
  {
    id: 'tropicalPrimary2024',
    value: '6.7',
    unitKey: 'millionHa',
    vintage: '2024',
    sourceShort: 'UMD GLAD / GFW',
    sourceUrl: gfw2024Url,
  },
  {
    id: 'tropicalPrimary2025',
    value: '4.3',
    unitKey: 'millionHa',
    vintage: '2025',
    sourceShort: 'UMD GLAD / GFW',
    sourceUrl: gfw2025Url,
  },
  {
    id: 'holoceneTrees',
    value: '~46',
    unitKey: 'percent',
    vintage: 'Crowther 2015',
    sourceShort: 'Crowther et al. 2015',
    sourceUrl: crowther2015Url,
  },
];

/**
 * Headline figures on the Forests hub hero. Full notes and the rest of the
 * published set stay on `/forests/numbers`. Ids must exist in `forestStats`.
 */
export const forestHeroStatIds = [
  'remaining',
  'primaryRemaining',
  'netLossRecent',
  'tropicalPrimary2025',
] as const satisfies ReadonlyArray<(typeof forestStats)[number]['id']>;

export function isForestPanel(value: string | undefined): value is ForestPanel {
  return !!value && (forestPanelKeys as readonly string[]).includes(value);
}

export function forestPanelPath(panel: ForestPanel): string {
  return `/forests/${panel}`;
}

export function getForestFrameMeta(id: string): ForestFrameMeta | undefined {
  return forestFrames.find((item) => item.id === id);
}
