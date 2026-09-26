import { cite, type PrimarySource } from './sources';

/** Forests atlas thematic layers: height, biomass density, burned area, ecological zones. */
export const forestAtlasSlugs = [
  'canopy-height',
  'aboveground-biomass',
  'burned-area',
  'ecological-zones',
] as const;

export type ForestAtlasSlug = (typeof forestAtlasSlugs)[number];

export type ForestAtlasMeta = {
  slug: ForestAtlasSlug;
  preview: string;
  sourceOrg: string;
  /** Grid “Source:” link text. First URL in `sources` is the href. */
  sourceLabel: string;
  sourceUrl: string;
  sources: PrimarySource[];
  /** Natural Earth coastline under a schematic field. */
  usesCoastline: boolean;
};

export const forestAtlasLandCredit =
  'Coastline: Natural Earth 110m land, public domain.';

export const forestAtlasMeta: ForestAtlasMeta[] = [
  {
    slug: 'canopy-height',
    preview: 'canopy-height.svg',
    sourceOrg: 'NASA GEDI / ORNL DAAC',
    sourceLabel: 'NASA GEDI L3 / ORNL DAAC',
    sourceUrl:
      'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l3-landsurface-metrics-v2-1952-2',
    usesCoastline: true,
    sources: [
      cite(
        'Earthdata — GEDI L3 Gridded Land Surface Metrics v2',
        'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l3-landsurface-metrics-v2-1952-2',
      ),
      cite('DOI — ORNL DAAC 1952', 'https://doi.org/10.3334/ORNLDAAC/1952'),
      cite(
        'ORNL DAAC — dsviewer 1952',
        'https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1952',
      ),
      cite('GEDI mission hub (UMD)', 'https://gedi.umd.edu/'),
      cite('GEDI data page (UMD)', 'https://gedi.umd.edu/data/'),
      cite(
        'Potapov et al. Nature Ecol Evol 2021 (optional secondary)',
        'https://www.nature.com/articles/s41559-021-01415-1',
      ),
      cite(
        'GLAD — GEDI canopy height (optional secondary)',
        'https://glad.umd.edu/dataset/gedi',
      ),
    ],
  },
  {
    slug: 'aboveground-biomass',
    preview: 'aboveground-biomass.svg',
    sourceOrg: 'NASA GEDI / ORNL DAAC',
    sourceLabel: 'NASA GEDI L4B / ORNL DAAC',
    sourceUrl:
      'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l4b-gridded-biomass-v2-1-2299-2.1',
    usesCoastline: true,
    sources: [
      cite(
        'Earthdata — GEDI L4B Gridded Biomass v2.1',
        'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l4b-gridded-biomass-v2-1-2299-2.1',
      ),
      cite('DOI — ORNL DAAC 2299', 'https://doi.org/10.3334/ORNLDAAC/2299'),
      cite(
        'ORNL DAAC — dsviewer 2299',
        'https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=2299',
      ),
      cite(
        'ORNL — GEDI L4B Gridded Biomass user guide',
        'https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html',
      ),
    ],
  },
  {
    slug: 'burned-area',
    preview: 'burned-area.svg',
    sourceOrg: 'NASA LP DAAC / FIRMS',
    sourceLabel: 'NASA MODIS MCD64A1 / FIRMS',
    sourceUrl: 'https://www.earthdata.nasa.gov/data/catalog/lpcloud-mcd64a1-061',
    usesCoastline: true,
    sources: [
      cite(
        'Earthdata — MCD64A1.061 catalog',
        'https://www.earthdata.nasa.gov/data/catalog/lpcloud-mcd64a1-061',
      ),
      cite(
        'LP DAAC — MCD64A1 v061 product',
        'https://lpdaac.usgs.gov/products/mcd64a1v061/',
      ),
      cite(
        'LAADS — MCD64A1 product page',
        'https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/MCD64A1/',
      ),
      cite('FIRMS hub', 'https://firms.modaps.eosdis.nasa.gov/'),
      cite('FIRMS map', 'https://firms.modaps.eosdis.nasa.gov/map/'),
      cite(
        'Earthdata — FIRMS learn page',
        'https://www.earthdata.nasa.gov/learn/find-data/near-real-time/firms',
      ),
      cite('GFED hub (secondary)', 'https://www.globalfiredata.org/'),
      cite('GFED data (secondary)', 'https://www.globalfiredata.org/data.html'),
      cite(
        'Earth Observatory — MOD14A1 fire map (secondary)',
        'https://earthobservatory.nasa.gov/global-maps/MOD14A1_M_FIRE',
      ),
    ],
  },
  {
    slug: 'ecological-zones',
    preview: 'ecological-zones.svg',
    sourceOrg: 'FAO / FRA',
    sourceLabel: 'FAO Global Ecological Zones / FRA',
    sourceUrl: 'https://data.apps.fao.org/catalog/dataset/2fb209d0-fd34-4e5e-a3d8-a13c241eb61b',
    usesCoastline: true,
    sources: [
      cite(
        'FAO data catalog — Global Ecological Zones dataset',
        'https://data.apps.fao.org/catalog/dataset/2fb209d0-fd34-4e5e-a3d8-a13c241eb61b',
      ),
      cite(
        'FAO — GEZ PDF (ap861e00)',
        'https://www.fao.org/4/ap861e/ap861e00.pdf',
      ),
      cite(
        'FAO — GEZ PDF alternate (/3/ap861e)',
        'https://www.fao.org/3/ap861e/ap861e.pdf',
      ),
      cite(
        'Open Knowledge — GEZ handle',
        'https://openknowledge.fao.org/handle/20.500.14283/ap861e',
      ),
      cite(
        'FAO — Forest Resources Assessment hub',
        'https://www.fao.org/forest-resources-assessment/en/',
      ),
    ],
  },
];

export const forestAtlasPreviewSrc = (file: string) => `/images/forests/${file}`;

export function isForestAtlas(value: string | undefined): value is ForestAtlasSlug {
  return !!value && (forestAtlasSlugs as readonly string[]).includes(value);
}

export function forestAtlasPath(slug: ForestAtlasSlug): string {
  return `/forests/${slug}`;
}
