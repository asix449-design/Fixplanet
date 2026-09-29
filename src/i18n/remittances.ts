import type { RemittanceId, RemittanceMeta } from '../data/remittances';
import { remittanceMeta, remittanceSourcesFor } from '../data/remittances';
import type { Locale } from './config';
import { enRemittances } from './remittances-en';
import { lvRemittances } from './remittances-lv';
import { plRemittances } from './remittances-pl';
import { ruRemittances } from './remittances-ru';

export type RemittanceSection = {
  heading?: string;
  body: string;
};

export type RemittanceCardCopy = {
  tag: string;
  title: string;
  hook: string;
  figure: string;
  unit: string;
  rows: { label: string; figure: string }[];
  sections: RemittanceSection[];
  /** What the plate shows. Separate from cited estimates when they differ. */
  plate: string;
};

export type RemittanceCopy = {
  layer: string;
  title: string;
  cards: Record<RemittanceId, RemittanceCardCopy>;
};

export type RemittanceCard = RemittanceMeta & RemittanceCardCopy;

const copy: Record<Locale, RemittanceCopy> = {
  en: enRemittances,
  ru: ruRemittances,
  pl: plRemittances,
  lv: lvRemittances,
};

export type RemittanceShelf = Omit<RemittanceCopy, 'cards'> & { cards: RemittanceCard[] };

export function getRemittances(locale: Locale): RemittanceShelf {
  const fields = copy[locale];
  return {
    layer: fields.layer,
    title: fields.title,
    cards: remittanceMeta.map((meta) => ({
      ...meta,
      ...fields.cards[meta.id],
      sources: remittanceSourcesFor(locale, meta.sourceKeys),
    })),
  };
}

export function getRemittance(locale: Locale, id: RemittanceId): RemittanceCard {
  const fields = copy[locale].cards[id];
  const meta = remittanceMeta.find((item) => item.id === id);
  if (!meta || !fields) throw new Error(`Unknown remittance card: ${id}`);
  return { ...meta, ...fields, sources: remittanceSourcesFor(locale, meta.sourceKeys) };
}
