import { speciesMeta } from '../../data/wildlife';
import { wildlifeCopy } from '../../i18n/wildlife';
import { adaptLegacyCatalogue } from './adapter.mjs';
import { readJson, readShelfFiles } from './read.mjs';
import { attachBaseline, refineCatalog } from './refine.mjs';
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

/**
 * Reads registry.json and the shelf folders, then adapts the current speciesMeta
 * and i18n copy into the same model. Pages keep reading speciesMeta in PR 1a;
 * this module is what the checker and later migrations use.
 */
export function loadWildlifeCatalog() {
  const registry = Registry.parse(readJson('registry.json'));
  const rules = readJson('rules.json');
  IucnCategoryNames.parse(Object.fromEntries(LOCALES.map((loc) => [loc, rules.iucnCategoryNames[loc]])));
  NumberFormat.parse(rules.numberFormat);
  MeasureMethods.parse(rules.measureMethods);
  const statusLabels = StatusLabels.parse(readJson('status-labels.json'));
  const baseline = readJson('legacy-baseline.json');
  const groups = readJson('legacy-groups.json');

  const rawShelves = readShelfFiles();
  const fileShelves: Record<string, { meta: ReturnType<typeof MetaFile.parse>; copy: Record<string, ReturnType<typeof CopyFile.parse>> }> = {};
  for (const [id, shelf] of Object.entries(rawShelves)) {
    fileShelves[id] = {
      meta: MetaFile.parse(shelf.meta),
      copy: Object.fromEntries(LOCALES.map((loc) => [loc, CopyFile.parse(shelf.copy[loc])])),
    };
  }

  const legacy = adaptLegacyCatalogue(speciesMeta, wildlifeCopy, groups);
  if (legacy.unmapped.length) {
    throw new Error(`unmapped legacy copy fields:\n${legacy.unmapped.join('\n')}`);
  }
  const legacyShelves: typeof fileShelves = {};
  let legacyCards = 0;
  for (const [id, shelf] of Object.entries(legacy.shelves)) {
    legacyCards += shelf.meta.cards.length;
    legacyShelves[id] = {
      meta: MetaFile.parse(shelf.meta),
      copy: Object.fromEntries(LOCALES.map((loc) => [loc, CopyFile.parse(shelf.copy[loc])])),
    };
  }

  attachBaseline(legacyShelves, baseline);
  const refine = refineCatalog({ registry, fileShelves, legacyShelves, rules, statusLabels });
  const refineFail = refine.filter((item) => item.level !== 'warn');
  if (refineFail.length) {
    const lines = refineFail.slice(0, 20).map((item) => `${item.rule} ${item.slug} ${item.locale} ${item.field}: ${item.message}`);
    throw new Error(`catalogue cross-checks failed (${refineFail.length}):\n${lines.join('\n')}`);
  }

  return { registry, rules, statusLabels, baseline, groups, fileShelves, legacyShelves, legacyCards, refine };
}
