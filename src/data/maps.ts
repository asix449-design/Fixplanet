import type { HubIconName } from './hub';

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
  'battle-related-deaths': '/maps/conflicts',
  'homicide-rates': '/maps',
  'air-quality-pm25': '/maps',
  'co2-emissions': '/maps',
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

const atlasShelves = new Set<MapCategory>(['history-of-borders', 'religious']);

/** Atlas shelves stay on the hub even with an empty catalog grid. */
export function mapShelfVisibleOnHub(category: MapCategory): boolean {
  return atlasShelves.has(category) || mapsByCategory(category).length > 0;
}

export function mapCategoryPath(category: MapCategory): string {
  return `/maps/${category}`;
}

/** Query or path slug → localized-ready site path, or undefined if it is not a maps shelf. */
export function mapShelfRedirect(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  if (value in retiredMapPaths) return retiredMapPaths[value];
  if (isMapCategory(value)) return `/maps/${value}`;
  return undefined;
}
