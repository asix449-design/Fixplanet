import type { MissingMigrantId, MissingMigrantMeta } from '../data/missing-migrants';
import { missingMigrantMeta } from '../data/missing-migrants';
import type { PrimarySource } from '../data/sources';
import type { Locale } from './config';
import { enMissingMigrants } from './missing-migrants-en';
import { lvMissingMigrants } from './missing-migrants-lv';
import { plMissingMigrants } from './missing-migrants-pl';
import { ruMissingMigrants } from './missing-migrants-ru';

export type MissingMigrantSection = {
  heading: string;
  body: string;
};

export type MissingMigrantCardCopy = {
  title: string;
  meta: string;
  blurb: string;
  caption: string;
  credit: string;
  sections: MissingMigrantSection[];
  sources: PrimarySource[];
};

export type MissingMigrantsCopy = {
  layer: string;
  title: string;
  lede: string;
  cards: Record<MissingMigrantId, MissingMigrantCardCopy>;
};

export type MissingMigrantCard = MissingMigrantMeta & MissingMigrantCardCopy;

const copy: Record<Locale, MissingMigrantsCopy> = {
  en: enMissingMigrants,
  ru: ruMissingMigrants,
  pl: plMissingMigrants,
  lv: lvMissingMigrants,
};

export type MissingMigrantShelf = Omit<MissingMigrantsCopy, 'cards'> & {
  cards: MissingMigrantCard[];
};

export function getMissingMigrants(locale: Locale): MissingMigrantShelf {
  const fields = copy[locale];
  return {
    layer: fields.layer,
    title: fields.title,
    lede: fields.lede,
    cards: missingMigrantMeta.map((meta) => ({
      ...meta,
      ...fields.cards[meta.id],
    })),
  };
}

export function getMissingMigrant(locale: Locale, id: MissingMigrantId): MissingMigrantCard {
  const fields = copy[locale].cards[id];
  const meta = missingMigrantMeta.find((item) => item.id === id);
  if (!meta || !fields) throw new Error(`Unknown missing-migrant card: ${id}`);
  return { ...meta, ...fields };
}
