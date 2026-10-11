import type { HubIconName } from './hub';
import type { PrimarySource } from './sources';

export type { PrimarySource } from './sources';

export const wildlifeStatusKeys = [
  'surviving',
  'endangered',
  'extinct',
  'insects',
  'domesticates',
  'birds',
] as const;

export type WildlifeStatus = (typeof wildlifeStatusKeys)[number];

export const wildlifeHubKeys = [
  ...wildlifeStatusKeys,
  'homo-sapiens',
] as const;

export type WildlifeHubKey = (typeof wildlifeHubKeys)[number];

export const wildlifeHub = [
  { key: 'surviving', icon: 'paw' },
  { key: 'endangered', icon: 'alert' },
  { key: 'extinct', icon: 'gone' },
  { key: 'homo-sapiens', icon: 'human' },
  { key: 'insects', icon: 'insect' },
  { key: 'domesticates', icon: 'horse' },
  { key: 'birds', icon: 'bird' },
] as const satisfies ReadonlyArray<{
  key: WildlifeHubKey;
  icon: HubIconName;
}>;

export const iucnKeys = [
  'EX',
  'EW',
  'CR',
  'CR_PE',
  'EN',
  'VU',
  'NT',
  'LC',
] as const;

export type IucnKey = (typeof iucnKeys)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
  width?: number;
  height?: number;
  /** Detail page shows the whole frame. Hub thumbnails stay cover-cropped. */
  fit?: 'natural';
};

export type SpeciesMeta = {
  slug: string;
  scientificName: string;
  status: WildlifeStatus;
  /** Omit when the pack has no global IUCN assessment (ESA-listed insects; livestock). */
  iucn?: IucnKey;
  /** Extra card label when IUCN CR still overstates a wild breeding population. */
  functionallyExtinct?: boolean;
  image: ImageCredit;
  /** Official IUCN / agency pages — not image credits. Optional until a row is sewn. */
  primarySources?: PrimarySource[];
};

export type SpeciesCopy = {
  commonName: string;
  hook: string;
  imageAlt: string;
  what: string;
  range: string;
  story: string;
  when: string;
  humanRole: string;
  sources: string;
  /** Shelf badge beside the status pill. */
  tag?: string;
  /** Visible figure caption. Alt text stays in imageAlt. */
  caption?: string;
  /** Localized credit line. The license code is linked separately. */
  photoCredit?: string;
  /** Localized license link text. Falls back to image.license. */
  licenseLabel?: string;
  /** Grid source line under the card. */
  gridSource?: PrimarySource;
  /** Numbered detail-page sources. Replaces the shared English list. */
  sourcesList?: PrimarySource[];
  /** Status word on the detail pill, in place of an IUCN code. */
  statusPill?: string;
  /** Licence deed URL when the credit names a Creative Commons licence. */
  licenseUrl?: string;
  /** Label before the linked file page, when the credit uses the pack layout. */
  filePageLabel?: string;
};

export type Species = SpeciesMeta & SpeciesCopy;

export const humanHeroImage: ImageCredit = {
  file: 'homo-sapiens.png',
  credit: 'Generated naturalistic figure for Fix Planet — not a portrait of a named person',
  license: 'Site asset',
  sourceUrl: '',
};

/**
 * Species cards live in `src/data/wildlife-catalog/<shelf>/`.
 * Pages read them through the catalogue loader. This module keeps the hub
 * keys, shared types, and image paths.
 */

export function isWildlifeStatus(value: string | undefined): value is WildlifeStatus {
  return !!value && (wildlifeStatusKeys as readonly string[]).includes(value);
}

export function isWildlifeHubKey(value: string | undefined): value is WildlifeHubKey {
  return !!value && (wildlifeHubKeys as readonly string[]).includes(value);
}

export function wildlifeImageSrc(image: ImageCredit): string {
  return `/images/wildlife/${image.file}`;
}

/** Hub-only hero. Species shelves keep the blurred section backdrop. */
export const wildlifeHubBackdrop = {
  file: 'wildlife-hub-bg.jpg',
  credit: 'Founder-supplied deer drinking from a river at sunset',
  license: 'Site asset',
  width: 864,
  height: 1152,
} as const;

export const wildlifeHubSrc = `/images/wildlife/${wildlifeHubBackdrop.file}`;
export const wildlifeSectionSrc = '/images/wildlife/wildlife-section-bg.jpg';

export function wildlifeHubPath(key: WildlifeHubKey): string {
  return `/wildlife/${key}`;
}

export function wildlifeHubTilePath(item: (typeof wildlifeHub)[number]): string {
  return wildlifeHubPath(item.key);
}

export function wildlifeStatusPath(status: WildlifeStatus): string {
  return wildlifeHubPath(status);
}

export function wildlifePrimarySource(
  sources: readonly PrimarySource[] | undefined,
): PrimarySource | undefined {
  return sources?.[0];
}
