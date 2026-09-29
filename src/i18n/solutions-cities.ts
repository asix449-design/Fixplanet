import {
  citiesEncyclopediaMeta,
  citiesLegendColors,
  getCitiesEncyclopediaMeta,
  type CitiesDetailCopy,
  type CitiesEncyclopedia,
  type CitiesEncyclopediaSlug,
} from '../data/solutions-cities';
import type { SolutionCopy } from '../data/solutions';
import type { Locale } from './config';
import { detail as enDetail, grid as enGrid } from './solutions-cities-en';
import { detail as lvDetail, grid as lvGrid } from './solutions-cities-lv';
import { detail as plDetail, grid as plGrid } from './solutions-cities-pl';
import { detail as ruDetail, grid as ruGrid } from './solutions-cities-ru';

const gridCopy: Record<Locale, Record<CitiesEncyclopediaSlug, SolutionCopy>> = {
  en: enGrid,
  ru: ruGrid,
  pl: plGrid,
  lv: lvGrid,
};

const detailCopy: Record<Locale, Record<CitiesEncyclopediaSlug, CitiesDetailCopy>> = {
  en: enDetail,
  ru: ruDetail,
  pl: plDetail,
  lv: lvDetail,
};

export const citiesDetailHeadings: Record<
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

export function getCitiesGrid(locale: Locale): Record<string, SolutionCopy> {
  return gridCopy[locale];
}

export function getCitiesEncyclopediaBySlug(
  locale: Locale,
  slug: string,
): CitiesEncyclopedia | undefined {
  const meta = getCitiesEncyclopediaMeta(slug);
  if (!meta) return undefined;
  const fields = detailCopy[locale][meta.slug] ?? detailCopy.en[meta.slug];
  return { ...meta, ...fields };
}

export function getCitiesEncyclopediaPages(locale: Locale): CitiesEncyclopedia[] {
  const fields = detailCopy[locale];
  return citiesEncyclopediaMeta.map((meta) => ({
    ...meta,
    ...(fields[meta.slug] ?? detailCopy.en[meta.slug]),
  }));
}

export { citiesLegendColors };
