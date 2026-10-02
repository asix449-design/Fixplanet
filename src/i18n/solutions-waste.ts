import {
  getWasteEncyclopediaMeta,
  wasteEncyclopediaMeta,
  type WasteDetailCopy,
  type WasteEncyclopedia,
  type WasteEncyclopediaSlug,
} from '../data/solutions-waste';
import type { SolutionCopy } from '../data/solutions';
import type { Locale } from './config';
import { detail as enDetail, grid as enGrid } from './solutions-waste-en';
import { detail as lvDetail, grid as lvGrid } from './solutions-waste-lv';
import { detail as plDetail, grid as plGrid } from './solutions-waste-pl';
import { detail as ruDetail, grid as ruGrid } from './solutions-waste-ru';

const gridCopy: Record<Locale, Record<WasteEncyclopediaSlug, SolutionCopy>> = {
  en: enGrid,
  ru: ruGrid,
  pl: plGrid,
  lv: lvGrid,
};

const detailCopy: Record<Locale, Record<WasteEncyclopediaSlug, WasteDetailCopy>> = {
  en: enDetail,
  ru: ruDetail,
  pl: plDetail,
  lv: lvDetail,
};

export const wasteDetailHeadings: Record<
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

export function getWasteGrid(locale: Locale): Record<string, SolutionCopy> {
  return gridCopy[locale];
}

export function getWasteEncyclopediaBySlug(
  locale: Locale,
  slug: string,
): WasteEncyclopedia | undefined {
  const meta = getWasteEncyclopediaMeta(slug);
  if (!meta) return undefined;
  const fields = detailCopy[locale][meta.slug] ?? detailCopy.en[meta.slug];
  return { ...meta, ...fields };
}

export function getWasteEncyclopediaPages(locale: Locale): WasteEncyclopedia[] {
  const fields = detailCopy[locale];
  return wasteEncyclopediaMeta.map((meta) => ({
    ...meta,
    ...(fields[meta.slug] ?? detailCopy.en[meta.slug]),
  }));
}
