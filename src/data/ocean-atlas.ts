import { cite, type PrimarySource } from './sources';

/** Oceans atlas thematic maps. Not Solutions→Oceans. */
export const oceanAtlasSlugs = [
  'ocean-acidification',
  'dissolved-oxygen',
  'sea-ice-extent',
  'sea-level',
] as const;

export type OceanAtlasSlug = (typeof oceanAtlasSlugs)[number];

export type OceanAtlasMeta = {
  slug: OceanAtlasSlug;
  preview: string;
  sourceOrg: string;
  /** Grid “Source:” link text. First URL in `sources` is the href. */
  sourceLabel: string;
  sourceUrl: string;
  sources: PrimarySource[];
  /** Natural Earth coastline under a Fix Planet field. */
  usesCoastline: boolean;
};

export const oceanAtlasLandCredit =
  'Coastline: Natural Earth 110m land, public domain.';

export const oceanAtlasMeta: OceanAtlasMeta[] = [
  {
    slug: 'ocean-acidification',
    preview: 'ocean-acidification.svg',
    sourceOrg: 'NOAA Ocean Acidification Program / PMEL Carbon Program',
    sourceLabel: 'NOAA Ocean Acidification Program / PMEL Carbon Program',
    sourceUrl: 'https://oceanacidification.noaa.gov/',
    usesCoastline: true,
    sources: [
      cite('NOAA Ocean Acidification Program — hub', 'https://oceanacidification.noaa.gov/'),
      cite(
        'NOAA OAP — What is ocean acidification?',
        'https://oceanacidification.noaa.gov/what-is-ocean-acidification/',
      ),
      cite(
        'NOAA PMEL Carbon Program — Ocean Acidification',
        'https://www.pmel.noaa.gov/co2/story/Ocean+Acidification',
      ),
      cite('NOAA PMEL Carbon Program — hub', 'https://www.pmel.noaa.gov/co2/'),
      cite(
        'NOAA PMEL — Observations and Data',
        'https://www.pmel.noaa.gov/co2/story/Observations+and+Data',
      ),
      cite(
        'NOAA PMEL — Hydrographic Cruises',
        'https://www.pmel.noaa.gov/co2/story/Hydrographic+Cruises',
      ),
      cite(
        'NOAA PMEL — Consensus OA trend assessments',
        'https://www.pmel.noaa.gov/co2/story/Reaching+Consensus+on+Assessments+of+Ocean+Acidification+Trends',
      ),
      cite(
        'NOAA PMEL — Buoys and Autonomous Systems',
        'https://www.pmel.noaa.gov/co2/story/Buoys+and+Autonomous+Systems',
      ),
      cite(
        'NCEI — Ocean Carbon & Acidification Data System (OCADS)',
        'https://www.ncei.noaa.gov/access/oads/',
      ),
      cite(
        'Copernicus Marine — data access (optional secondary)',
        'https://marine.copernicus.eu/access-data',
      ),
      cite(
        'Copernicus Marine — product catalogue (optional)',
        'https://data.marine.copernicus.eu/products',
      ),
    ],
  },
  {
    slug: 'dissolved-oxygen',
    preview: 'dissolved-oxygen.svg',
    sourceOrg: 'NOAA NCEI — World Ocean Atlas 2023',
    sourceLabel: 'NOAA NCEI — World Ocean Atlas 2023 (dissolved oxygen)',
    sourceUrl: 'https://www.ncei.noaa.gov/products/world-ocean-atlas',
    usesCoastline: true,
    sources: [
      cite(
        'NCEI — World Ocean Atlas (product hub)',
        'https://www.ncei.noaa.gov/products/world-ocean-atlas',
      ),
      cite(
        'NCEI — World Ocean Atlas 2023 access',
        'https://www.ncei.noaa.gov/access/world-ocean-atlas-2023/',
      ),
      cite(
        'WOA23 interactive selector',
        'https://www.ncei.noaa.gov/access/world-ocean-atlas-2023/bin/woa23.pl',
      ),
      cite(
        'WOA23 selector — oxygen parameter',
        'https://www.ncei.noaa.gov/access/world-ocean-atlas-2023/bin/woa23.pl?parameter=o',
      ),
      cite(
        'WOA23 documentation directory',
        'https://www.ncei.noaa.gov/data/oceans/woa/WOA23/DOCUMENTATION/',
      ),
      cite(
        'WOA23 Product Documentation (PDF)',
        'https://www.ncei.noaa.gov/data/oceans/woa/WOA23/DOCUMENTATION/WOA23_Product_Documentation.pdf',
      ),
      cite(
        'WOA23 Volume 3 — Dissolved Oxygen (PDF)',
        'https://www.ncei.noaa.gov/data/oceans/woa/WOA23/DOCUMENTATION/WOA23_Oxygen.pdf',
      ),
      cite('WOA23 data tree', 'https://www.ncei.noaa.gov/data/oceans/woa/WOA23/'),
      cite(
        'IPCC SROCC — Summary for Policymakers (secondary)',
        'https://www.ipcc.ch/srocc/chapter/summary-for-policymakers/',
      ),
      cite(
        'IPCC SROCC — Chapter 5 Changing Ocean (secondary)',
        'https://www.ipcc.ch/srocc/chapter/chapter-5/',
      ),
      cite('IPCC SROCC hub (secondary)', 'https://www.ipcc.ch/srocc/'),
    ],
  },
  {
    slug: 'sea-ice-extent',
    preview: 'sea-ice-extent.svg',
    sourceOrg: 'NSIDC — Sea Ice Index / Sea Ice Today',
    sourceLabel: 'NSIDC — Sea Ice Index / Sea Ice Today',
    sourceUrl: 'https://nsidc.org/sea-ice-today',
    usesCoastline: false,
    sources: [
      cite('NSIDC — Sea Ice Today', 'https://nsidc.org/sea-ice-today'),
      cite(
        'NSIDC — Sea Ice Index (daily / monthly viewer)',
        'https://nsidc.org/data/seaice_index',
      ),
      cite(
        'NSIDC — Sea Ice Index data & image archive',
        'https://nsidc.org/data/seaice_index/data-and-image-archive',
      ),
      cite('NSIDC — Sea Ice Today tools', 'https://nsidc.org/sea-ice-today/sea-ice-tools'),
      cite('NSIDC — Sea Ice Index G02135 v3', 'https://nsidc.org/data/g02135/versions/3'),
      cite(
        'NOAA/NSIDC — G02135 data FTP mirror',
        'https://noaadata.apps.nsidc.org/NOAA/G02135/',
      ),
      cite('NSIDC — Arctic Sea Ice News & Analysis', 'https://nsidc.org/arcticseaicenews/'),
      cite(
        'NSIDC — ChArctic interactive sea-ice graph',
        'https://nsidc.org/arcticseaicenews/charctic-interactive-sea-ice-graph/',
      ),
    ],
  },
  {
    slug: 'sea-level',
    preview: 'sea-level.svg',
    sourceOrg: 'NASA Sea Level Change Portal',
    sourceLabel: 'NASA Sea Level Change Portal',
    sourceUrl: 'https://sealevel.nasa.gov/',
    usesCoastline: false,
    sources: [
      cite('NASA Sea Level Change Portal — hub', 'https://sealevel.nasa.gov/'),
      cite(
        'NASA — Global Mean Sea Level (vital signs)',
        'https://sealevel.nasa.gov/vital-signs/global-mean-sea-level/',
      ),
      cite(
        'NASA — Sea Level 101 introduction',
        'https://sealevel.nasa.gov/sea-level-101/introduction/',
      ),
      cite('NASA — Assessment tools', 'https://sealevel.nasa.gov/tools'),
      cite(
        'NASA — IPCC AR6 Sea Level Projection Tool',
        'https://sealevel.nasa.gov/data_tools/17',
      ),
      cite('NASA — Sea Level Explorer', 'https://sealevel.nasa.gov/data_tools/22/'),
      cite(
        'Copernicus Marine — Ocean Climate Portal / Sea Level (secondary)',
        'https://marine.copernicus.eu/ocean-climate-portal/sea-level',
      ),
      cite(
        'Copernicus Marine — Ocean Monitoring Indicators',
        'https://marine.copernicus.eu/access-data/ocean-monitoring-indicators',
      ),
      cite(
        'Copernicus Marine — Global OMI sea-level anomalies product',
        'https://data.marine.copernicus.eu/product/GLOBAL_OMI_SL_area_averaged_anomalies/description',
      ),
      cite(
        'Copernicus Marine — Ocean Climate Portal hub',
        'https://marine.copernicus.eu/ocean-climate-portal',
      ),
      cite(
        'IPCC AR6 WG1 report (Numbers vintage for 3.7 mm/yr)',
        'https://www.ipcc.ch/report/ar6/wg1/',
      ),
    ],
  },
];

export const oceanAtlasPreviewSrc = (file: string) => `/images/oceans/${file}`;

export function isOceanAtlas(value: string | undefined): value is OceanAtlasSlug {
  return !!value && (oceanAtlasSlugs as readonly string[]).includes(value);
}

export function oceanAtlasPath(slug: OceanAtlasSlug): string {
  return `/oceans/${slug}`;
}
