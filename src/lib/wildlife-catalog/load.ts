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
  ReconstructionRules,
  Registry,
  StatusLabels,
} from './schema.mjs';

type ShelfBundle = {
  meta: ReturnType<typeof MetaFile.parse>;
  copy: Record<string, ReturnType<typeof CopyFile.parse>>;
};

type RawShelves = ReturnType<typeof readShelfFiles>;

export type WildlifeCatalog = ReturnType<typeof loadWildlifeCatalog>;

let cached: WildlifeCatalog | undefined;
let rawCache: { groups: { cards: Record<string, unknown> }; shelves: RawShelves } | undefined;

/** Shelf JSON as stored. Pages use this; the checker validates the same files with zod. */
function rawCatalogue() {
  if (!rawCache) {
    rawCache = {
      groups: readJson('legacy-groups.json'),
      shelves: readShelfFiles(),
    };
  }
  return rawCache;
}

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
  if (rules.reconstruction != null) ReconstructionRules.parse(rules.reconstruction);
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
  const { groups, shelves } = rawCatalogue();
  const present = new Set<string>();
  for (const shelf of Object.values(shelves)) {
    const cards = (shelf.meta as { cards?: { slug: string }[] }).cards || [];
    for (const card of cards) present.add(card.slug);
  }
  const ordered = Object.keys(groups.cards).filter((slug) => present.has(slug));
  for (const slug of present) {
    if (!ordered.includes(slug)) ordered.push(slug);
  }
  return ordered;
}

/**
 * Page view of the catalogue. Missing locale copy falls back to English,
 * matching the previous speciesMeta reader. Does not re-run the zod checks;
 * `npm run check:wildlife` already parsed these files.
 */
export function speciesFromCatalog(locale: string) {
  const { shelves } = rawCatalogue();
  const bySlug = new Map<string, ReturnType<typeof toSpecies>>();
  for (const shelf of Object.values(shelves)) {
    const meta = shelf.meta as { cards: Parameters<typeof toSpecies>[0][] };
    const copy = shelf.copy as Record<string, { cards?: Record<string, Parameters<typeof toSpecies>[1]> }>;
    for (const card of meta.cards) {
      const fields = copy[locale]?.cards?.[card.slug] ?? copy.en?.cards?.[card.slug];
      if (fields) bySlug.set(card.slug, toSpecies(card, fields));
    }
  }
  return wildlifeCardSlugs().flatMap((slug) => {
    const species = bySlug.get(slug);
    return species ? [species] : [];
  });
}
