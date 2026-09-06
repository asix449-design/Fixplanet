export const mapCategoryKeys = [
  'conflicts',
  'ethnic',
  'religious',
  'crime',
  'pollution',
  'oil-gas',
  'minerals',
  'political',
  'forests',
  'protected',
  'water',
  'population',
] as const;

export type MapCategory = (typeof mapCategoryKeys)[number];

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
};

export type MapCopy = {
  title: string;
  hook: string;
  description: string;
  howToRead: string;
  caveats: string;
  licenseNote: string;
  imageAlt: string;
};

export type MapEntry = MapMeta & MapCopy;

/**
 * Curated first set. To add a map:
 * 1. Add a row here (English slug, category, year, named source, URLs, preview).
 * 2. Add the same slug to en/ru/pl/lv in `src/i18n/maps.ts`.
 * 3. Drop a licensed preview in `public/images/maps/` or reuse blue-marble-sm.jpg as a schematic.
 * 4. `npm run build`.
 *
 * Do not invent numbers. Prefer a source link over a fake choropleth.
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
    preview: 'blue-marble-sm.jpg',
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
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'language-families',
    category: 'ethnic',
    year: '2024',
    sourceShort: 'Glottolog',
    sourceOrg: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    sourceUrl: 'https://glottolog.org/',
    openMapUrl: 'https://glottolog.org/glottolog/map',
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
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
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'homicide-rates',
    category: 'crime',
    year: '2019–2023',
    sourceShort: 'UNODC / OWID',
    sourceOrg: 'United Nations Office on Drugs and Crime; Our World in Data',
    sourceUrl: 'https://www.unodc.org/unodc/en/data-and-analysis/global-study-on-homicide.html',
    openMapUrl: 'https://ourworldindata.org/homicides',
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'air-quality-pm25',
    category: 'pollution',
    year: '2019–2022',
    sourceShort: 'WHO / OWID',
    sourceOrg: 'World Health Organization; Our World in Data; NASA Earth observations',
    sourceUrl: 'https://www.who.int/data/gho/data/themes/air-pollution',
    openMapUrl: 'https://ourworldindata.org/air-pollution',
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'co2-emissions',
    category: 'pollution',
    year: '2023',
    sourceShort: 'Global Carbon Project',
    sourceOrg: 'Global Carbon Project; Our World in Data',
    sourceUrl: 'https://www.globalcarbonproject.org/',
    openMapUrl: 'https://ourworldindata.org/co2-emissions',
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'oil-gas-reserves',
    category: 'oil-gas',
    year: '2023–2024',
    sourceShort: 'EIA',
    sourceOrg: 'U.S. Energy Information Administration',
    sourceUrl: 'https://www.eia.gov/international/overview/world.php',
    openMapUrl: 'https://www.eia.gov/international/data/world',
    preview: 'blue-marble-sm.jpg',
    previewKind: 'schematic',
  },
  {
    slug: 'mineral-resources',
    category: 'minerals',
    year: '2024',
    sourceShort: 'USGS',
    sourceOrg: 'U.S. Geological Survey, Mineral Resources Program',
    sourceUrl: 'https://www.usgs.gov/programs/mineral-resources-program',
    openMapUrl: 'https://mrdata.usgs.gov/',
    preview: 'blue-marble-sm.jpg',
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
    preview: 'world-countries.svg',
    previewKind: 'outline',
  },
  {
    slug: 'forest-cover-loss',
    category: 'forests',
    year: '2001–2023',
    sourceShort: 'Hansen / GFW',
    sourceOrg: 'Hansen / University of Maryland; Global Forest Watch; NASA',
    sourceUrl: 'https://www.globalforestwatch.org/',
    openMapUrl: 'https://www.globalforestwatch.org/map/',
    preview: 'blue-marble.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'protected-areas',
    category: 'protected',
    year: '2024',
    sourceShort: 'WDPA',
    sourceOrg: 'UNEP-WCMC and IUCN, World Database on Protected Areas (Protected Planet)',
    sourceUrl: 'https://www.protectedplanet.net/',
    openMapUrl: 'https://www.protectedplanet.net/en',
    preview: 'blue-marble.jpg',
    previewKind: 'photo',
  },
  {
    slug: 'water-stress',
    category: 'water',
    year: '2023',
    sourceShort: 'WRI Aqueduct',
    sourceOrg: 'World Resources Institute, Aqueduct Water Risk Atlas',
    sourceUrl: 'https://www.wri.org/aqueduct',
    openMapUrl: 'https://www.wri.org/applications/aqueduct/water-risk-atlas/',
    preview: 'blue-marble-sm.jpg',
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
    preview: 'earth-at-night.jpg',
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

export function mapCategoryPath(category: MapCategory | 'all' = 'all'): string {
  return category === 'all' ? '/maps' : `/maps/${category}`;
}
