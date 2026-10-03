import type { PrimarySource } from './sources';

/**
 * Materials encyclopedia articles. Older Materials cards stay hub-only.
 * Adding a card is a data change: append the slug here, an image row,
 * copy in the four `solutions-materials-*.ts` files, a `solutionMeta` row,
 * and `public/images/solutions/{slug}.jpg`.
 *
 * Structural steel reuse cites the Steel Construction Institute and the
 * Joint Research Centre. Do not add the Cleveland Steel and Tubes
 * life-cycle report or its figures.
 */
export const materialsEncyclopediaSlugs = [
  'wood-fibre-insulation',
  'cellulose-insulation',
  'engineered-bamboo',
  'recycled-gypsum',
  'structural-steel-reuse',
] as const;

export type MaterialsEncyclopediaSlug = (typeof materialsEncyclopediaSlugs)[number];

export type MaterialsImage = {
  file: string;
  width: number;
  height: number;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type MaterialsDetailCopy = {
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
};

export type MaterialsEncyclopedia = {
  slug: MaterialsEncyclopediaSlug;
  image: MaterialsImage;
} & MaterialsDetailCopy;

function img(
  file: string,
  width: number,
  height: number,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
): MaterialsImage {
  return { file, width, height, license, licenseUrl, sourceUrl };
}

const bySa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const bySa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const by = 'https://creativecommons.org/licenses/by/4.0/';

export const materialsEncyclopediaMeta: {
  slug: MaterialsEncyclopediaSlug;
  image: MaterialsImage;
}[] = [
  {
    slug: 'wood-fibre-insulation',
    image: img(
      'wood-fibre-insulation.jpg',
      1280,
      960,
      'CC BY-SA 4.0',
      bySa4,
      'https://commons.wikimedia.org/wiki/File:Fassadend%C3%A4mmung_mit_Pavatex-Holzfaserd%C3%A4mmplatten,_Sockelplatten_zur_Befestigung_von_Balkonen,_Am_Bach_23,_Lotschen,_99444_Blankenhain,_Th%C3%BCringen.jpg',
    ),
  },
  {
    slug: 'cellulose-insulation',
    image: img(
      'cellulose-insulation.jpg',
      1280,
      1228,
      'CC BY-SA 3.0',
      bySa3,
      'https://commons.wikimedia.org/wiki/File:Paper_insulation.jpg',
    ),
  },
  {
    slug: 'engineered-bamboo',
    image: img(
      'engineered-bamboo.jpg',
      1280,
      877,
      'CC BY-SA 4.0',
      bySa4,
      'https://commons.wikimedia.org/wiki/File:Strand-woven_Bamboo_Flooring.jpg',
    ),
  },
  {
    slug: 'recycled-gypsum',
    image: img(
      'recycled-gypsum.jpg',
      1000,
      977,
      'CC BY 4.0',
      by,
      'https://commons.wikimedia.org/wiki/File:Stapel_Gipskartonplatten.jpg',
    ),
  },
  {
    slug: 'structural-steel-reuse',
    image: img(
      'structural-steel-reuse.jpg',
      1280,
      960,
      'Public domain',
      'https://commons.wikimedia.org/wiki/Template:PD-USGov-DOE',
      'https://commons.wikimedia.org/wiki/File:SlatedForReuse_Hill_Iron_and_Steel_%2854264735079%29.jpg',
    ),
  },
];

export function isMaterialsEncyclopediaSlug(
  value: string | undefined,
): value is MaterialsEncyclopediaSlug {
  return !!value && (materialsEncyclopediaSlugs as readonly string[]).includes(value);
}

export function materialsEncyclopediaPath(slug: MaterialsEncyclopediaSlug): string {
  return `/solutions/materials/${slug}`;
}

export function materialsEncyclopediaImageSrc(image: MaterialsImage): string {
  return `/images/solutions/${image.file}`;
}

export function getMaterialsEncyclopediaMeta(slug: string) {
  return materialsEncyclopediaMeta.find((item) => item.slug === slug);
}
