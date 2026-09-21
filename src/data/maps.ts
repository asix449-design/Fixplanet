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
  /** Optional grid meta line. Defaults to sourceShort · year. */
  cardMeta?: string;
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
    slug: 'groundwater-whymap',
    category: 'water',
    year: '2008',
    sourceShort: 'BGR / UNESCO · WHYMAP',
    sourceOrg: 'BGR / UNESCO — WHYMAP Groundwater Resources of the World',
    sourceUrl: 'https://www.whymap.org/whymap/EN/Maps_Data/Gwr/gwr_node_en.html',
    openMapUrl: 'https://www.whymap.org/whymap/EN/Maps_Data/Gwr/gwr_node_en.html',
    preview: 'groundwater-whymap.jpg',
    previewKind: 'schematic',
    cardMeta: 'BGR / UNESCO · WHYMAP · Groundwater Resources of the World',
    sources: [
      {
        label: 'BGR / UNESCO — WHYMAP Groundwater Resources of the World',
        url: 'https://www.whymap.org/whymap/EN/Maps_Data/Gwr/gwr_node_en.html',
      },
      { label: 'WHYMAP hub', url: 'https://www.whymap.org/' },
      {
        label: 'WHYMAP GWR shapefile (BGR download)',
        url: 'https://download.bgr.de/bgr/grundwasser/whymap/shp/WHYMAP_GWR_v1.zip',
      },
      {
        label: 'Richts et al. 2011 (WHYMAP chapter, Springer)',
        url: 'https://doi.org/10.1007/978-90-481-3426-7_10',
      },
    ],
  },
  {
    slug: 'global-lakes-hydrolakes',
    category: 'water',
    year: '2016',
    sourceShort: 'HydroSHEDS · HydroLAKES',
    sourceOrg: 'HydroSHEDS — HydroLAKES',
    sourceUrl: 'https://www.hydrosheds.org/products/hydrolakes',
    openMapUrl: 'https://www.hydrosheds.org/products/hydrolakes',
    preview: 'global-lakes-hydrolakes.jpg',
    previewKind: 'schematic',
    cardMeta: 'HydroSHEDS · HydroLAKES · Messager et al. 2016',
    sources: [
      {
        label: 'HydroSHEDS — HydroLAKES',
        url: 'https://www.hydrosheds.org/products/hydrolakes',
      },
      {
        label: 'Messager et al. 2016 — Nature Communications',
        url: 'https://doi.org/10.1038/ncomms13603',
      },
      { label: 'HydroSHEDS hub', url: 'https://www.hydrosheds.org/' },
      {
        label: 'HydroSHEDS — HydroBASINS (live sibling)',
        url: 'https://www.hydrosheds.org/products/hydrobasins',
      },
    ],
  },
  {
    slug: 'lakes-wetlands-glwd',
    category: 'water',
    year: '2025',
    sourceShort: 'HydroSHEDS · GLWD v2',
    sourceOrg: 'HydroSHEDS — GLWD v2',
    sourceUrl: 'https://www.hydrosheds.org/products/glwd',
    openMapUrl: 'https://www.hydrosheds.org/products/glwd',
    preview: 'lakes-wetlands-glwd.jpg',
    previewKind: 'schematic',
    cardMeta: 'HydroSHEDS · GLWD v2 · Lehner et al. 2025',
    sources: [
      {
        label: 'HydroSHEDS — GLWD v2',
        url: 'https://www.hydrosheds.org/products/glwd',
      },
      {
        label: 'Lehner et al. 2025 — ESSD (GLWD v2 paper)',
        url: 'https://doi.org/10.5194/essd-17-2277-2025',
      },
      {
        label: 'WWF — GLWD overview (v1 context / legacy levels)',
        url: 'https://www.worldwildlife.org/our-work/science/global-lakes-and-wetlands-database/',
      },
      {
        label: 'Figshare dataset DOI (download mirror)',
        url: 'https://doi.org/10.6084/m9.figshare.28519994',
      },
    ],
  },
  {
    slug: 'flood-hazard-aqueduct',
    category: 'water',
    year: '2020',
    sourceShort: 'WRI · Aqueduct Floods',
    sourceOrg: 'World Resources Institute, Aqueduct Floods',
    sourceUrl: 'https://www.wri.org/data/aqueduct-floods',
    openMapUrl: 'https://www.wri.org/applications/aqueduct/floods/',
    preview: 'flood-hazard-aqueduct.jpg',
    previewKind: 'schematic',
    cardMeta: 'WRI · Aqueduct Floods · riverine & coastal',
    sources: [
      {
        label: 'WRI — Aqueduct Floods',
        url: 'https://www.wri.org/data/aqueduct-floods',
      },
      {
        label: 'WRI — Aqueduct Floods Hazard Maps',
        url: 'https://www.wri.org/data/aqueduct-floods-hazard-maps',
      },
      {
        label: 'Aqueduct Floods interactive application',
        url: 'https://www.wri.org/applications/aqueduct/floods/',
      },
      {
        label: 'WRI Data Explorer — hazard maps dataset',
        url: 'https://datasets.wri.org/datasets/aqueduct-floods-hazard-maps',
      },
      {
        label: 'WRI Aqueduct Water Risk Atlas (live sibling)',
        url: 'https://www.wri.org/aqueduct',
      },
    ],
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
