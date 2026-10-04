import type { PrimarySource } from './sources';

export const citiesMobilitySlugs = [
  'bus-rapid-transit',
  'walking-and-cycling-networks',
  'congestion-charging',
  'low-emission-zones',
  'electric-buses',
] as const;

export const citiesPhotoSlugs = [
  'cool-roofs',
  'green-roofs',
  'permeable-pavement',
  'urban-tree-canopy',
  'rain-gardens-bioswales',
] as const;

export const citiesEncyclopediaSlugs = [
  ...citiesMobilitySlugs,
  ...citiesPhotoSlugs,
] as const;

export type CitiesMobilitySlug = (typeof citiesMobilitySlugs)[number];
export type CitiesPhotoSlug = (typeof citiesPhotoSlugs)[number];
export type CitiesEncyclopediaSlug = (typeof citiesEncyclopediaSlugs)[number];

export type CitiesImage = {
  file: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  width?: number;
  height?: number;
};

export type CitiesDetailCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  caption: string;
  credit: string;
  what: string[];
  why: string[];
  read: string[];
  limits: string[];
  sources: PrimarySource[];
  /** Colour key, same order as the swatches drawn in the figure. */
  legend?: string[];
  /** Numbered groups on a chart, same order as the axis numbers. */
  categories?: string[];
  findZone?: PrimarySource;
};

export type CitiesEncyclopedia = {
  slug: CitiesEncyclopediaSlug;
  image: CitiesImage;
} & CitiesDetailCopy;

/**
 * Colours are the ones painted by scripts/render-cities-mobility-figures.py.
 * Labels live in the locale copy, not in the bitmap.
 */
export const citiesLegendColors: Partial<Record<CitiesEncyclopediaSlug, readonly string[]>> = {
  'congestion-charging': ['#0b3a5b', '#1a7a6d', '#c47b2b'],
  'low-emission-zones': ['#2b6cb0', '#e08a1e', '#c0392b'],
  'electric-buses': ['#0b3a5b', '#1a7a6d', '#c47b2b', '#8c3a4b', '#3d6b9a', '#6b5b4b'],
};

function img(
  file: string,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
  width?: number,
  height?: number,
): CitiesImage {
  return { file, license, licenseUrl, sourceUrl, width, height };
}

export const citiesEncyclopediaMeta: { slug: CitiesEncyclopediaSlug; image: CitiesImage }[] = [
  {
    slug: 'bus-rapid-transit',
    image: img(
      'bus-rapid-transit.jpg',
      'CC BY-SA 4.0',
      'https://creativecommons.org/licenses/by-sa/4.0/',
      'https://commons.wikimedia.org/wiki/File:BRT_Bus_Station_in_Dar_es_Salaam_01.jpg',
    ),
  },
  {
    slug: 'walking-and-cycling-networks',
    image: img(
      'walking-and-cycling-networks.jpg',
      'CC BY 2.0',
      'https://creativecommons.org/licenses/by/2.0/',
      'https://commons.wikimedia.org/wiki/File:Holmens_Kanal_Cyclists_(15325678721).jpg',
    ),
  },
  {
    slug: 'congestion-charging',
    image: img(
      'congestion-charging.jpg',
      'CC BY 3.0 IGO',
      'https://creativecommons.org/licenses/by/3.0/igo/',
      'https://documents1.worldbank.org/curated/en/099031724120560318/pdf/P1766281e0163d01218640121bea8238a86.pdf',
    ),
  },
  {
    slug: 'low-emission-zones',
    image: img(
      'low-emission-zones.jpg',
      'CC BY 4.0',
      'https://creativecommons.org/licenses/by/4.0/',
      'https://www.eea.europa.eu/en/analysis/publications/europes-air-quality-status-2024#map-4-concentrations-of-no-2-in-2022-and-2023-in-relation-to-the-eu-annual-limit-value-and-the-who-annual-guideline-level',
    ),
  },
  {
    slug: 'electric-buses',
    image: img(
      'electric-buses.jpg',
      'CC BY 4.0',
      'https://creativecommons.org/licenses/by/4.0/',
      'https://www.iea.org/data-and-statistics/charts/electric-bus-sales-by-region-2020-2025',
    ),
  },
  {
    slug: 'cool-roofs',
    image: img(
      'cool-roofs-preview.jpg',
      'CC BY-SA 3.0',
      'https://creativecommons.org/licenses/by-sa/3.0/',
      'https://commons.wikimedia.org/wiki/File:Bermuda_roof.jpg',
      1280,
      804,
    ),
  },
  {
    slug: 'green-roofs',
    image: img(
      'green-roofs-preview.jpg',
      'CC BY-SA 3.0',
      'https://creativecommons.org/licenses/by-sa/3.0/',
      'https://commons.wikimedia.org/wiki/File:20080708_Chicago_City_Hall_Green_Roof.JPG',
      1280,
      960,
    ),
  },
  {
    slug: 'permeable-pavement',
    image: img(
      'permeable-pavement-preview.jpg',
      'CC BY-SA 3.0',
      'https://creativecommons.org/licenses/by-sa/3.0/',
      'https://commons.wikimedia.org/wiki/File:Demonstration_experiment_of_the_permeable_paving_(2012.10.07).jpg',
      1280,
      960,
    ),
  },
  {
    slug: 'urban-tree-canopy',
    image: img(
      'urban-tree-canopy-preview.jpg',
      'CC BY-SA 4.0',
      'https://creativecommons.org/licenses/by-sa/4.0/',
      'https://commons.wikimedia.org/wiki/File:Unter_den_Linden_Berlin.jpg',
      1280,
      883,
    ),
  },
  {
    slug: 'rain-gardens-bioswales',
    image: img(
      'rain-gardens-bioswales-preview.jpg',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Bioswale.jpg',
      'https://commons.wikimedia.org/wiki/File:Bioswale.jpg',
      1280,
      751,
    ),
  },
];

export function isCitiesEncyclopediaSlug(
  value: string | undefined,
): value is CitiesEncyclopediaSlug {
  return !!value && (citiesEncyclopediaSlugs as readonly string[]).includes(value);
}

export function citiesEncyclopediaPath(slug: CitiesEncyclopediaSlug): string {
  return `/solutions/cities/${slug}`;
}

export function citiesEncyclopediaImageSrc(image: CitiesImage): string {
  return `/images/solutions/${image.file}`;
}

export function getCitiesEncyclopediaMeta(slug: string) {
  return citiesEncyclopediaMeta.find((item) => item.slug === slug);
}
