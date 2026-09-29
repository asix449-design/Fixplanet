import {
  getForestEncyclopediaMeta,
  forestEncyclopediaMeta,
  type ForestEncyclopedia,
  type ForestEncyclopediaSlug,
} from '../data/solutions-forests';
import type { SolutionCopy } from '../data/solutions';
import type { Locale } from './config';
import { en } from './solutions-forests-en';
import { lv } from './solutions-forests-lv';
import { pl } from './solutions-forests-pl';
import { ru } from './solutions-forests-ru';
import { detail as enPack, grid as enGrid, type ForestPackSlug } from './solutions-forests-pack-en';
import { detail as lvPack, grid as lvGrid } from './solutions-forests-pack-lv';
import { detail as plPack, grid as plGrid } from './solutions-forests-pack-pl';
import { detail as ruPack, grid as ruGrid } from './solutions-forests-pack-ru';

const copy: Record<Locale, Record<string, (typeof en)[string]>> = {
  en,
  ru,
  pl,
  lv,
};

const packDetail: Record<Locale, Record<ForestPackSlug, (typeof enPack)[ForestPackSlug]>> = {
  en: enPack,
  ru: ruPack,
  pl: plPack,
  lv: lvPack,
};

const packGrid: Record<Locale, Record<ForestPackSlug, SolutionCopy>> = {
  en: enGrid,
  ru: ruGrid,
  pl: plGrid,
  lv: lvGrid,
};

export const forestDetailHeadings: Record<
  Locale,
  { what: string; why: string; read: string; limits: string }
> = {
  en: {
    what: 'What it is',
    why: 'Why it matters',
    read: 'How to read it',
    limits: 'Limits',
  },
  ru: {
    what: 'Что это',
    why: 'Почему это важно',
    read: 'Как это читать',
    limits: 'Ограничения',
  },
  pl: {
    what: 'Czym to jest',
    why: 'Dlaczego to ważne',
    read: 'Jak to czytać',
    limits: 'Ograniczenia',
  },
  lv: {
    what: 'Kas tas ir',
    why: 'Kāpēc tas ir svarīgi',
    read: 'Kā to lasīt',
    limits: 'Ierobežojumi',
  },
};

export function getForestGrid(locale: Locale): Record<string, SolutionCopy> {
  return packGrid[locale];
}

function fieldsFor(locale: Locale, slug: ForestEncyclopediaSlug) {
  const legacy = copy[locale][slug] ?? copy.en[slug];
  if (legacy) return legacy;
  const packed = packDetail[locale][slug as ForestPackSlug] ?? packDetail.en[slug as ForestPackSlug];
  return packed;
}

export function getForestEncyclopediaPages(locale: Locale): ForestEncyclopedia[] {
  return forestEncyclopediaMeta.map((meta) => ({
    ...meta,
    ...fieldsFor(locale, meta.slug),
  }));
}

export function getForestEncyclopediaBySlug(
  locale: Locale,
  slug: string,
): ForestEncyclopedia | undefined {
  const meta = getForestEncyclopediaMeta(slug);
  if (!meta) return undefined;
  return { ...meta, ...fieldsFor(locale, meta.slug) };
}
