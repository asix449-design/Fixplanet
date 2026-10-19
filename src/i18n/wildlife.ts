import type { Species, WildlifeStatus } from '../data/wildlife';
import { speciesFromCatalog } from '../lib/wildlife-catalog/load';
import type { Locale } from './config';

const byLocale = new Map<Locale, Species[]>();

/** Catalogue cards in the historical shelf order, with English copy when a locale is missing. */
export function getWildlifeSpecies(locale: Locale): Species[] {
  const hit = byLocale.get(locale);
  if (hit) return hit;
  const list = speciesFromCatalog(locale) as Species[];
  byLocale.set(locale, list);
  return list;
}

export function getWildlifeByStatus(
  locale: Locale,
  status: WildlifeStatus,
): Species[] {
  return getWildlifeSpecies(locale).filter((item) => item.status === status);
}

export function getWildlifeBySlug(
  locale: Locale,
  slug: string,
): Species | undefined {
  return getWildlifeSpecies(locale).find((item) => item.slug === slug);
}
