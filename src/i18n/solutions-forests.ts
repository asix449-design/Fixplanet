import {
  getForestEncyclopediaMeta,
  forestEncyclopediaMeta,
  type ForestEncyclopedia,
  type ForestEncyclopediaSlug,
} from '../data/solutions-forests';
import type { Locale } from './config';
import { en } from './solutions-forests-en';
import { lv } from './solutions-forests-lv';
import { pl } from './solutions-forests-pl';
import { ru } from './solutions-forests-ru';

const copy: Record<Locale, Record<ForestEncyclopediaSlug, (typeof en)[ForestEncyclopediaSlug]>> = {
  en,
  ru,
  pl,
  lv,
};

export function getForestEncyclopediaPages(locale: Locale): ForestEncyclopedia[] {
  const fields = copy[locale];
  return forestEncyclopediaMeta.map((meta) => ({
    ...meta,
    ...(fields[meta.slug] ?? en[meta.slug]),
  }));
}

export function getForestEncyclopediaBySlug(
  locale: Locale,
  slug: string,
): ForestEncyclopedia | undefined {
  const meta = getForestEncyclopediaMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][meta.slug] ?? en[meta.slug];
  return { ...meta, ...fields };
}
