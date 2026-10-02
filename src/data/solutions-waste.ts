import type { PrimarySource } from './sources';

export const wasteEncyclopediaSlugs = [
  'deposit-return-systems',
  'extended-producer-responsibility-packaging',
  'e-waste-recycling',
  'lithium-ion-battery-recycling',
  'food-waste-reduction',
] as const;

export type WasteEncyclopediaSlug = (typeof wasteEncyclopediaSlugs)[number];

export type WasteImage = {
  file: string;
  width: number;
  height: number;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type WasteDetailCopy = {
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

export type WasteEncyclopedia = {
  slug: WasteEncyclopediaSlug;
  image: WasteImage;
} & WasteDetailCopy;

function img(
  file: string,
  width: number,
  height: number,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
): WasteImage {
  return { file, width, height, license, licenseUrl, sourceUrl };
}

const by = 'https://creativecommons.org/licenses/by/4.0/';
const bySa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const bySa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc0 = 'https://creativecommons.org/publicdomain/zero/1.0/';

export const wasteEncyclopediaMeta: { slug: WasteEncyclopediaSlug; image: WasteImage }[] = [
  {
    slug: 'deposit-return-systems',
    image: img(
      'deposit-return-systems.jpg',
      1344,
      1385,
      'CC BY 4.0',
      by,
      'https://commons.wikimedia.org/wiki/File:Krefeld,_Germany_-_Bottle_reverse_vending_machine_in_Rewe.jpg',
    ),
  },
  {
    slug: 'extended-producer-responsibility-packaging',
    image: img(
      'extended-producer-responsibility-packaging.jpg',
      1280,
      960,
      'CC BY-SA 4.0',
      bySa4,
      'https://commons.wikimedia.org/wiki/File:Contenedores_de_reciclaje_Almer%C3%ADa.jpg',
    ),
  },
  {
    slug: 'e-waste-recycling',
    image: img(
      'e-waste-recycling.jpg',
      960,
      1275,
      'CC0 1.0',
      cc0,
      'https://commons.wikimedia.org/wiki/File:Electronic_junk_separation_in_view_of_recycling_3.jpg',
    ),
  },
  {
    slug: 'lithium-ion-battery-recycling',
    image: img(
      'lithium-ion-battery-recycling.jpg',
      1280,
      933,
      'CC BY-SA 3.0',
      bySa3,
      'https://commons.wikimedia.org/wiki/File:Lithium-Ion_Battery_for_BMW_i3_-_Battery_Pack.JPG',
    ),
  },
  {
    slug: 'food-waste-reduction',
    image: img(
      'food-waste-reduction.jpg',
      1280,
      960,
      'CC0 1.0',
      cc0,
      'https://commons.wikimedia.org/wiki/File:Treasure_trove_of_wasted_food.JPG',
    ),
  },
];

export function isWasteEncyclopediaSlug(
  value: string | undefined,
): value is WasteEncyclopediaSlug {
  return !!value && (wasteEncyclopediaSlugs as readonly string[]).includes(value);
}

export function wasteEncyclopediaPath(slug: WasteEncyclopediaSlug): string {
  return `/solutions/waste/${slug}`;
}

export function wasteEncyclopediaImageSrc(image: WasteImage): string {
  return `/images/solutions/${image.file}`;
}

export function getWasteEncyclopediaMeta(slug: string) {
  return wasteEncyclopediaMeta.find((item) => item.slug === slug);
}
