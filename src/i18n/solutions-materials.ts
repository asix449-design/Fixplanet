import {
  getMaterialsEncyclopediaMeta,
  materialsEncyclopediaMeta,
  type MaterialsDetailCopy,
  type MaterialsEncyclopedia,
  type MaterialsEncyclopediaSlug,
} from '../data/solutions-materials';
import type { SolutionCopy } from '../data/solutions';
import type { Locale } from './config';
import { detail as enDetail, grid as enGrid } from './solutions-materials-en';
import { detail as lvDetail, grid as lvGrid } from './solutions-materials-lv';
import { detail as plDetail, grid as plGrid } from './solutions-materials-pl';
import { detail as ruDetail, grid as ruGrid } from './solutions-materials-ru';

const gridCopy: Record<Locale, Record<MaterialsEncyclopediaSlug, SolutionCopy>> = {
  en: enGrid,
  ru: ruGrid,
  pl: plGrid,
  lv: lvGrid,
};

const detailCopy: Record<Locale, Record<MaterialsEncyclopediaSlug, MaterialsDetailCopy>> = {
  en: enDetail,
  ru: ruDetail,
  pl: plDetail,
  lv: lvDetail,
};

export const materialsDetailHeadings: Record<
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

export function getMaterialsGrid(locale: Locale): Record<string, SolutionCopy> {
  return gridCopy[locale];
}

export function getMaterialsEncyclopediaBySlug(
  locale: Locale,
  slug: string,
): MaterialsEncyclopedia | undefined {
  const meta = getMaterialsEncyclopediaMeta(slug);
  if (!meta) return undefined;
  const fields = detailCopy[locale][meta.slug] ?? detailCopy.en[meta.slug];
  return { ...meta, ...fields };
}

export function getMaterialsEncyclopediaPages(locale: Locale): MaterialsEncyclopedia[] {
  const fields = detailCopy[locale];
  return materialsEncyclopediaMeta.map((meta) => ({
    ...meta,
    ...(fields[meta.slug] ?? detailCopy.en[meta.slug]),
  }));
}
