import {
  getWaterEncyclopediaMeta,
  waterEncyclopediaMeta,
  type WaterEncyclopedia,
  type WaterEncyclopediaSlug,
} from '../data/solutions-water';
import type { Locale } from './config';
import { en } from './solutions-water-en';
import { lv } from './solutions-water-lv';
import { pl } from './solutions-water-pl';
import { ru } from './solutions-water-ru';

const copy: Record<Locale, Record<WaterEncyclopediaSlug, (typeof en)[WaterEncyclopediaSlug]>> = {
  en,
  ru,
  pl,
  lv,
};

export function getWaterEncyclopediaPages(locale: Locale): WaterEncyclopedia[] {
  const fields = copy[locale];
  return waterEncyclopediaMeta.map((meta) => ({
    ...meta,
    ...(fields[meta.slug] ?? en[meta.slug]),
  }));
}

export function getWaterEncyclopediaBySlug(
  locale: Locale,
  slug: string,
): WaterEncyclopedia | undefined {
  const meta = getWaterEncyclopediaMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][meta.slug] ?? en[meta.slug];
  return { ...meta, ...fields };
}
