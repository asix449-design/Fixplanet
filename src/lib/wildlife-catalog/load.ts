import { toSpecies } from './adapter.mjs';
import { readJson, readShelfFiles } from './read.mjs';
import { refineCatalog } from './refine.mjs';
import {
  CopyFile,
  IucnCategoryNames,
  LOCALES,
  MeasureMethods,
  MetaFile,
  NumberFormat,
  Registry,
  StatusLabels,
} from './schema.mjs';

type ShelfBundle = {
  meta: ReturnType<typeof MetaFile.parse>;
  copy: Record<string, ReturnType<typeof CopyFile.parse>>;
};

export type WildlifeCatalog = ReturnType<typeof loadWildlifeCatalog>;

let cached: WildlifeCatalog | undefined;

/**
 * Reads registry.json and the per-shelf catalogue. The 97 migrated cards live in
 * the shelf folders. Pages render `speciesFromCatalog`, which maps those cards
 * back to the Species shape.
 */
export function loadWildlifeCatalog() {
  if (cached) return cached;
  const registry = Registry.parse(readJson('registry.json'));
  const rules = readJson('rules.json');
  IucnCategoryNames.parse(Object.fromEntries(LOCALES.map((loc) => [loc, rules.iucnCategoryNames[loc]])));
  NumberFormat.parse(rules.numberFormat);
  MeasureMethods.parse(rules.measureMethods);
  const statusLabels = StatusLabels.parse(readJson('status-labels.json'));
  const baseline = readJson('legacy-baseline.json');
  const groups = readJson('legacy-groups.json');

  const rawShelves = readShelfFiles();
  const fileShelves: Record<string, ShelfBundle> = {};
  for (const [id, shelf] of Object.entries(rawShelves)) {
    fileShelves[id] = {
      meta: MetaFile.parse(shelf.meta),
      copy: Object.fromEntries(LOCALES.map((loc) => [loc, CopyFile.parse(shelf.copy[loc])])),
    };
  }

  const legacyShelves: Record<string, ShelfBundle> = {};
  const refine = refineCatalog({ registry, fileShelves, legacyShelves, rules, statusLabels });
  const refineFail = refine.filter((item) => item.level !== 'warn');
  if (refineFail.length) {
    const lines = refineFail.slice(0, 20).map((item) => `${item.rule} ${item.slug} ${item.locale} ${item.field}: ${item.message}`);
    throw new Error(`catalogue cross-checks failed (${refineFail.length}):\n${lines.join('\n')}`);
  }

  const cardCount = Object.values(fileShelves).reduce((sum, shelf) => sum + shelf.meta.cards.length, 0);
  cached = { registry, rules, statusLabels, baseline, groups, fileShelves, legacyShelves, legacyCards: cardCount, cardCount, refine };
  return cached;
}

/** Species slugs in the historical speciesMeta order (legacy-groups.json key order). */
export function wildlifeCardSlugs(): string[] {
  const catalog = loadWildlifeCatalog();
  const present = new Set<string>();
  for (const shelf of Object.values(catalog.fileShelves)) {
    for (const card of shelf.meta.cards) present.add(card.slug);
  }
  const ordered = Object.keys(catalog.groups.cards).filter((slug) => present.has(slug));
  for (const slug of present) {
    if (!ordered.includes(slug)) ordered.push(slug);
  }
  return ordered;
}

/**
 * Page view of the catalogue. Missing locale copy falls back to English,
 * matching the previous speciesMeta reader.
 */
export function speciesFromCatalog(locale: string) {
  const catalog = loadWildlifeCatalog();
  const bySlug = new Map<string, ReturnType<typeof toSpecies>>();
  for (const shelf of Object.values(catalog.fileShelves)) {
    for (const card of shelf.meta.cards) {
      const copy = shelf.copy[locale]?.cards?.[card.slug] ?? shelf.copy.en?.cards?.[card.slug];
      if (copy) bySlug.set(card.slug, toSpecies(card, copy));
    }
  }
  return wildlifeCardSlugs().flatMap((slug) => {
    const species = bySlug.get(slug);
    return species ? [species] : [];
  });
}
