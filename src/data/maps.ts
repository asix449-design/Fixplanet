import type { HubIconName } from './hub';
import type { PrimarySource } from './sources';

export const mapCategoryKeys = [
  'history-of-borders',
  'religious',
  'conflicts',
  'ethnic',
  'crime',
  'pollution',
  'subsurface',
  'political',
  'forests',
  'water',
  'population',
] as const;

export type MapCategory = (typeof mapCategoryKeys)[number];

export const mapHub = [
  { key: 'history-of-borders', icon: 'compass', lead: true },
  { key: 'religious', icon: 'book' },
  { key: 'conflicts', icon: 'alert' },
  { key: 'ethnic', icon: 'globe' },
  { key: 'crime', icon: 'scales' },
  { key: 'pollution', icon: 'recycle' },
  { key: 'subsurface', icon: 'hex' },
  { key: 'political', icon: 'city' },
  { key: 'forests', icon: 'trees' },
  { key: 'water', icon: 'droplet' },
  { key: 'population', icon: 'terrain' },
] as const satisfies ReadonlyArray<{
  key: MapCategory;
  icon: HubIconName;
  lead?: boolean;
}>;

/** Retired hub slugs → current path (no locale prefix). */
export const retiredMapPaths: Record<string, string> = {
  all: '/maps',
  'oil-gas': '/maps/subsurface',
  minerals: '/maps/subsurface',
  protected: '/maps/forests',
};

export type MapMeta = {
  slug: string;
  category: MapCategory;
  /** Dataset vintage shown on cards — not a live scrape. */
  year: string;
  sourceShort: string;
  sourceOrg: string;
  sourceUrl: string;
  openMapUrl: string;
  /** Hosted preview in /public/images/maps/ */
  preview: string;
  previewKind: 'photo' | 'outline' | 'schematic';
  /** Optional clickable citations. First row is the grid Source link. */
  sources?: PrimarySource[];
};

export type MapCopy = {
  title: string;
  hook: string;
  description: string;
  howToRead: string;
  caveats: string;
  licenseNote: string;
  imageAlt: string;
  /** When set, the detail page uses What / Why on this shelf headings. */
  whyOnShelf?: string;
};

export type MapEntry = MapMeta & MapCopy;

/**
 * Curated first set. To add a map:
 * 1. Add a row here (English slug, category, year, named source, URLs, preview).
 * 2. Add the same slug to en/ru/pl/lv in `src/i18n/maps.ts`.
 * 3. Drop a licensed preview in `public/images/maps/` (see credits.json). Do not reuse Blue Marble as a stand-in.
 * 4. `npm run build`.
 *
 * Do not invent country-level crime or conflict numbers. Prefer a hosted open map or a labeled Fix Planet overview.
 */
export const mapMeta: MapMeta[] = [
  {
    slug: 'armed-conflict-events',
    category: 'conflicts',
    year: '2024–2025',
    sourceShort: 'ACLED',
    sourceOrg: 'Armed Conflict Location & Event Data Project (ACLED)',
    sourceUrl: 'https://acleddata.com/',
    openMapUrl: 'https://acleddata.com/conflict-watchlist-2025/',
    preview: 'armed-conflict-events.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'battle-related-deaths',
    category: 'conflicts',
    year: '1989–2024',
    sourceShort: 'UCDP / OWID',
    sourceOrg: 'Uppsala Conflict Data Program; Our World in Data',
    sourceUrl: 'https://ucdp.uu.se/',
    openMapUrl: 'https://ourworldindata.org/war-and-peace',
    preview: 'battle-related-deaths.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'language-families',
    category: 'ethnic',
    year: '2024',
    sourceShort: 'Glottolog',
    sourceOrg: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    sourceUrl: 'https://glottolog.org/',
    openMapUrl: 'https://glottolog.org/glottolog/map',
    preview: 'language-families.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'world-religions',
    category: 'religious',
    year: '2010–2020',
    sourceShort: 'Pew Research',
    sourceOrg: 'Pew Research Center',
    sourceUrl: 'https://www.pewresearch.org/religion/',
    openMapUrl:
      'https://www.pewresearch.org/religion/feature/religious-composition-by-country-2010-2050/',
    preview: 'world-religions.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'homicide-rates',
    category: 'crime',
    year: '2019–2023',
    sourceShort: 'UNODC / OWID',
    sourceOrg: 'United Nations Office on Drugs and Crime; Our World in Data',
    sourceUrl: 'https://www.unodc.org/unodc/en/data-and-analysis/global-study-on-homicide.html',
    openMapUrl: 'https://ourworldindata.org/homicides',
    preview: 'homicide-rates.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'organized-crime-index',
    category: 'crime',
    year: 'Index 2025 (covers 2024)',
    sourceShort: 'GI-TOC',
    sourceOrg: 'Global Initiative against Transnational Organized Crime (GI-TOC)',
    sourceUrl: 'https://ocindex.net/2025/',
    openMapUrl: 'https://ocindex.net/2025/',
    preview: 'organized-crime-index.jpg',
    previewKind: 'photo',
    sources: [
      { label: 'Organized Crime Index 2025 heatmap', url: 'https://ocindex.net/2025/' },
      { label: 'About the Index', url: 'https://ocindex.net/about' },
      { label: 'Downloads', url: 'https://ocindex.net/downloads' },
    ],
  },
  {
    slug: 'corruption-perceptions-index',
    category: 'crime',
    year: 'CPI 2025',
    sourceShort: 'Transparency International',
    sourceOrg: 'Transparency International; Our World in Data',
    sourceUrl: 'https://www.transparency.org/en/cpi/2025',
    openMapUrl: 'https://ourworldindata.org/grapher/ti-corruption-perception-index',
    preview: 'corruption-perceptions-index.jpg',
    previewKind: 'photo',
    sources: [
      { label: 'Corruption Perceptions Index 2025', url: 'https://www.transparency.org/en/cpi/2025' },
      {
        label: 'Our World in Data — CPI open map',
        url: 'https://ourworldindata.org/grapher/ti-corruption-perception-index',
      },
      { label: 'Our World in Data — Corruption', url: 'https://ourworldindata.org/corruption' },
    ],
  },
  {
    slug: 'trafficking-in-persons',
    category: 'crime',
    year: '2024 report',
    sourceShort: 'UNODC GLOTIP',
    sourceOrg: 'United Nations Office on Drugs and Crime — Global Report on Trafficking in Persons',
    sourceUrl: 'https://www.unodc.org/unodc/en/data-and-analysis/glotip.html',
    openMapUrl: 'https://www.unodc.org/unodc/en/data-and-analysis/glotip.html',
    preview: 'trafficking-in-persons.jpg',
    previewKind: 'photo',
    sources: [
      {
        label: 'UNODC Global Report on Trafficking in Persons',
        url: 'https://www.unodc.org/unodc/en/data-and-analysis/glotip.html',
      },
      {
        label: 'UNODC trafficking in persons research',
        url: 'https://www.unodc.org/unodc/en/data-and-analysis/tip.html',
      },
      { label: 'UNODC data portal', url: 'https://data.unodc.org/' },
    ],
  },
  {
    slug: 'air-quality-pm25',
    category: 'pollution',
    year: '2019–2022',
    sourceShort: 'WHO / OWID',
    sourceOrg: 'World Health Organization; Our World in Data; NASA Earth observations',
    sourceUrl: 'https://www.who.int/data/gho/data/themes/air-pollution',
    openMapUrl: 'https://ourworldindata.org/air-pollution',
    preview: 'air-quality-pm25.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'co2-emissions',
    category: 'pollution',
    year: '2023',
    sourceShort: 'Global Carbon Project',
    sourceOrg: 'Global Carbon Project; Our World in Data',
    sourceUrl: 'https://www.globalcarbonproject.org/',
    openMapUrl: 'https://ourworldindata.org/co2-emissions',
    preview: 'co2-emissions.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'oil-gas-reserves',
    category: 'subsurface',
    year: '2023–2024',
    sourceShort: 'EIA',
    sourceOrg: 'U.S. Energy Information Administration',
    sourceUrl: 'https://www.eia.gov/international/overview/world.php',
    openMapUrl: 'https://www.eia.gov/international/data/world',
    preview: 'oil-gas-reserves.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'mineral-resources',
    category: 'subsurface',
    year: '2024',
    sourceShort: 'USGS',
    sourceOrg: 'U.S. Geological Survey, Mineral Resources Program',
    sourceUrl: 'https://www.usgs.gov/programs/mineral-resources-program',
    openMapUrl: 'https://mrdata.usgs.gov/',
    preview: 'mineral-resources.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'world-countries',
    category: 'political',
    year: '2024',
    sourceShort: 'Natural Earth',
    sourceOrg: 'Natural Earth',
    sourceUrl: 'https://www.naturalearthdata.com/',
    openMapUrl: 'https://www.naturalearthdata.com/downloads/',
    preview: 'world-countries.jpg',
    previewKind: 'outline',
  },
  {
    slug: 'states-provinces',
    category: 'political',
    year: '2024',
    sourceShort: 'Natural Earth',
    sourceOrg: 'Natural Earth',
    sourceUrl:
      'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/',
    openMapUrl:
      'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/',
    preview: 'states-provinces.jpg',
    previewKind: 'outline',
    sources: [
      {
        label: 'Natural Earth 10m Admin 1 – States, provinces',
        url: 'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/',
      },
      {
        label: 'NACIS 10m states and provinces download',
        url: 'https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_1_states_provinces.zip',
      },
    ],
  },
  {
    slug: 'disputed-breakaway-areas',
    category: 'political',
    year: '2024',
    sourceShort: 'Natural Earth',
    sourceOrg: 'Natural Earth',
    sourceUrl:
      'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-breakaway-disputed-areas/',
    openMapUrl:
      'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-breakaway-disputed-areas/',
    preview: 'disputed-breakaway-areas.jpg',
    previewKind: 'outline',
    sources: [
      {
        label: 'Natural Earth 10m Admin 0 – Breakaway, disputed areas',
        url: 'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-breakaway-disputed-areas/',
      },
      {
        label: 'Natural Earth',
        url: 'https://www.naturalearthdata.com/',
      },
      {
        label: 'NACIS 10m disputed areas download',
        url: 'https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_0_disputed_areas.zip',
      },
      {
        label: 'Natural Earth vectors on GitHub',
        url: 'https://github.com/nvkelso/natural-earth-vector',
      },
    ],
  },
  {
    slug: 'land-boundary-lines',
    category: 'political',
    year: '2024',
    sourceShort: 'Natural Earth',
    sourceOrg: 'Natural Earth',
    sourceUrl:
      'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-boundary-lines/',
    openMapUrl:
      'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-boundary-lines/',
    preview: 'land-boundary-lines.jpg',
    previewKind: 'outline',
    sources: [
      {
        label: 'Natural Earth 10m Admin 0 – Boundary lines',
        url: 'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-boundary-lines/',
      },
      {
        label: 'NACIS 10m land boundary lines download',
        url: 'https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_0_boundary_lines_land.zip',
      },
    ],
  },
  {
    slug: 'forest-cover-loss',
    category: 'forests',
    year: '2001–2023',
    sourceShort: 'Hansen / GFW',
    sourceOrg: 'Hansen / University of Maryland; Global Forest Watch; NASA',
    sourceUrl: 'https://www.globalforestwatch.org/',
    openMapUrl: 'https://www.globalforestwatch.org/map/',
    preview: 'forest-cover-loss.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'protected-areas',
    category: 'forests',
    year: '2024',
    sourceShort: 'WDPA',
    sourceOrg: 'UNEP-WCMC and IUCN, World Database on Protected Areas (Protected Planet)',
    sourceUrl: 'https://www.protectedplanet.net/',
    openMapUrl: 'https://www.protectedplanet.net/en',
    preview: 'protected-areas.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'intact-forest-landscapes',
    category: 'forests',
    year: '2000–2025',
    sourceShort: 'IFL',
    sourceOrg: 'Intact Forest Landscapes Mapping Team (UMD GLAD and partners)',
    sourceUrl: 'https://intactforests.org/data.ifl.html',
    openMapUrl: 'https://intactforests.org/data.ifl.html',
    preview: 'intact-forest-landscapes.jpg',
    previewKind: 'schematic',
    sources: [
      {
        label: 'Intact Forest Landscapes — data download (IFL 2000–2025)',
        url: 'https://intactforests.org/data.ifl.html',
      },
      {
        label: 'Zenodo — Intact Forest Landscapes Extent and Change, 2000–2025',
        url: 'https://zenodo.org/records/18011599',
      },
      {
        label: 'Greenpeace — World Intact Forest Landscapes map viewer',
        url: 'https://maps.greenpeace.org/maps/gpint/world-ifl/',
      },
      {
        label: 'Potapov et al. 2017 (PMC full text)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5604104/',
      },
    ],
  },
  {
    slug: 'mangrove-extent',
    category: 'forests',
    year: '1985–2025',
    sourceShort: 'GMW',
    sourceOrg: 'Global Mangrove Watch (JAXA, Aberystwyth University, and partners)',
    sourceUrl: 'https://www.globalmangrovewatch.org/',
    openMapUrl: 'https://www.globalmangrovewatch.org/',
    preview: 'mangrove-extent.jpg',
    previewKind: 'schematic',
    sources: [
      {
        label: 'Global Mangrove Watch — map platform',
        url: 'https://www.globalmangrovewatch.org/',
      },
      {
        label: 'JAXA EORC — Global Mangrove Watch dataset (v4.1)',
        url: 'https://www.eorc.jaxa.jp/ALOS/en/dataset/gmw_e.htm',
      },
      {
        label: 'Zenodo — Global Mangrove Watch timeseries v4.1.12',
        url: 'https://zenodo.org/records/21346457',
      },
      {
        label: 'Mangrove Alliance — GMW 4.1 launch note',
        url: 'https://www.mangrovealliance.org/news/global-mangrove-watch-4-launch',
      },
    ],
  },
  {
    slug: 'primary-humid-tropical-forests',
    category: 'forests',
    year: '2001',
    sourceShort: 'UMD GLAD',
    sourceOrg: 'University of Maryland GLAD — Primary Humid Tropical Forests',
    sourceUrl: 'https://glad.umd.edu/dataset/primary-forest-humid-tropics',
    openMapUrl: 'https://glad.umd.edu/dataset/primary-forest-humid-tropics',
    preview: 'primary-humid-tropical-forests.jpg',
    previewKind: 'schematic',
    sources: [
      {
        label: 'GLAD UMD — Primary Humid Tropical Forests dataset',
        url: 'https://glad.umd.edu/dataset/primary-forest-humid-tropics',
      },
      {
        label: 'Google Earth Engine catalog — UMD/GLAD Primary Humid Tropical Forests v1',
        url: 'https://developers.google.com/earth-engine/datasets/catalog/UMD_GLAD_PRIMARY_HUMID_TROPICAL_FORESTS_v1',
      },
    ],
  },
  {
    slug: 'forest-landscape-integrity',
    category: 'forests',
    year: '~2019',
    sourceShort: 'FLII',
    sourceOrg: 'Grantham et al., Nature Communications 2020 — Forest Landscape Integrity Index',
    sourceUrl: 'https://www.nature.com/articles/s41467-020-19493-3',
    openMapUrl: 'https://www.nature.com/articles/s41467-020-19493-3',
    preview: 'forest-landscape-integrity.jpg',
    previewKind: 'schematic',
    sources: [
      {
        label: 'Grantham et al. 2020 — Nature Communications (FLII paper)',
        url: 'https://www.nature.com/articles/s41467-020-19493-3',
      },
      {
        label: 'Forest Landscape Integrity — download data',
        url: 'https://www.forestlandscapeintegrity.com/download-data',
      },
      {
        label: 'Nature Communications PDF',
        url: 'https://www.nature.com/articles/s41467-020-19493-3.pdf',
      },
    ],
  },
  {
    slug: 'water-stress',
    category: 'water',
    year: '2023',
    sourceShort: 'WRI Aqueduct',
    sourceOrg: 'World Resources Institute, Aqueduct Water Risk Atlas',
    sourceUrl: 'https://www.wri.org/aqueduct',
    openMapUrl: 'https://www.wri.org/applications/aqueduct/water-risk-atlas/',
    preview: 'water-stress.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'population-density',
    category: 'population',
    year: '2020',
    sourceShort: 'SEDAC / WorldPop',
    sourceOrg: 'NASA SEDAC Gridded Population of the World; WorldPop; UN WPP',
    sourceUrl: 'https://sedac.ciesin.columbia.edu/data/collection/gpw-v4',
    openMapUrl: 'https://sedac.ciesin.columbia.edu/mapping/popest/sedac-maps/',
    preview: 'population-density.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'earth-at-night',
    category: 'population',
    year: '2012',
    sourceShort: 'NASA Black Marble',
    sourceOrg: 'NASA Earth Observatory / Suomi NPP VIIRS',
    sourceUrl: 'https://visibleearth.nasa.gov/images/79765/night-lights-2012-flat-map',
    openMapUrl: 'https://earthobservatory.nasa.gov/features/NightLights',
    preview: 'earth-at-night.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'global-river-basins',
    category: 'water',
    year: '2013',
    sourceShort: 'HydroBASINS',
    sourceOrg: 'HydroSHEDS — HydroBASINS',
    sourceUrl: 'https://www.hydrosheds.org/products/hydrobasins',
    openMapUrl: 'https://www.hydrosheds.org/products/hydrobasins',
    preview: 'global-river-basins.jpg',
    previewKind: 'outline',
  },
  {
    slug: 'freshwater-aquastat',
    category: 'water',
    year: '2022',
    sourceShort: 'FAO AQUASTAT',
    sourceOrg: 'FAO AQUASTAT',
    sourceUrl: 'https://www.fao.org/aquastat/en/',
    openMapUrl: 'https://www.fao.org/aquastat/en/',
    preview: 'freshwater-aquastat.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'exclusive-economic-zones',
    category: 'political',
    year: '2023',
    sourceShort: 'Marine Regions',
    sourceOrg: 'Marine Regions — EEZ (Flanders Marine Institute)',
    sourceUrl: 'https://www.marineregions.org/eez.php',
    openMapUrl: 'https://www.marineregions.org/eez.php',
    preview: 'exclusive-economic-zones.jpg',
    previewKind: 'outline',
  },
  {
    slug: 'living-languages-count',
    category: 'ethnic',
    year: '2026',
    sourceShort: 'Ethnologue',
    sourceOrg: 'Ethnologue — How many languages (SIL International)',
    sourceUrl: 'https://www.ethnologue.com/insights/how-many-languages/',
    openMapUrl: 'https://www.ethnologue.com/insights/how-many-languages/',
    preview: 'living-languages-count.jpg',
    previewKind: 'outline',
  },
];

export const mapPreviewSrc = (file: string) => `/images/maps/${file}`;

export function isMapCategory(value: string | undefined): value is MapCategory {
  return !!value && (mapCategoryKeys as readonly string[]).includes(value);
}

export function getMapMeta(slug: string): MapMeta | undefined {
  return mapMeta.find((item) => item.slug === slug);
}

export function mapsByCategory(category: MapCategory): MapMeta[] {
  return mapMeta.filter((item) => item.category === category);
}

export function mapPrimarySource(item: MapMeta): PrimarySource | undefined {
  return item.sources?.[0];
}

export function mapCategoryPath(category: MapCategory): string {
  return `/maps/${category}`;
}

/** Hub-only hero. Category shelves keep the Blue Marble page hero. */
export const mapsHubBackdrop = {
  file: 'maps-hub-bg.jpg',
  credit: 'Founder-supplied Earth at night from space',
  license: 'Site asset',
  width: 1280,
  height: 720,
} as const;

export const mapsHubSrc = `/images/maps/${mapsHubBackdrop.file}`;

/** Query or path slug → localized-ready site path, or undefined if it is not a maps shelf. */
export function mapShelfRedirect(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  if (value in retiredMapPaths) return retiredMapPaths[value];
  if (isMapCategory(value)) return `/maps/${value}`;
  return undefined;
}
