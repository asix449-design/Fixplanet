#!/usr/bin/env node
/**
 * Wildlife catalogue checker (C1–C22 and S1–S15).
 *
 *   node scripts/wildlife-catalog/check.mjs [--json report.json] [--shelf <id>] [--write-baseline] [--no-baseline]
 *
 * The migrated cards live in the per-shelf JSON files. The checker parses them
 * with the same zod schemas as the loader and subtracts legacy-baseline.json.
 * The baseline may only shrink. C21 fails when a slug is repeated across shelf files.
 * C22 fails when one source list names the same URL twice after normalization.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createServer } from 'vite';
import { checkCatalogue, checkCredits } from '../../src/lib/wildlife-catalog/checks.mjs';
import { subtract, violationKey } from '../../src/lib/wildlife-catalog/c17.mjs';
import { LOCALES } from '../../src/lib/wildlife-catalog/schema.mjs';
import { runSelfTests } from './selftest.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const baselinePath = path.join(repoRoot, 'src/data/wildlife-catalog/legacy-baseline.json');

function gitText(args) {
  return execFileSync('git', args, { cwd: repoRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function loadMergeBaseBaseline() {
  try {
    const base = gitText(['merge-base', 'HEAD', 'origin/main']);
    return JSON.parse(gitText(['show', `${base}:src/data/wildlife-catalog/legacy-baseline.json`]));
  } catch {
    return null;
  }
}

function growthFindings(current, previous) {
  if (!previous) return [];
  const prev = new Map((previous.violations || []).map((v) => [violationKey(v), v]));
  const out = [];
  for (const v of current.violations || []) {
    const old = prev.get(violationKey(v));
    if (!old) out.push(v);
    else if ((v.count ?? 1) > (old.count ?? 1)) out.push(v);
  }
  for (const row of current.localeFallback || []) {
    const known = (previous.localeFallback || []).some((old) => old.slug === row.slug && old.locale === row.locale);
    if (!known) out.push({ rule: 'S4', slug: row.slug, locale: row.locale, field: 'localeFallback', message: 'new locale fallback' });
  }
  return out;
}

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  configFile: path.join(repoRoot, 'astro.config.mjs'),
});

let catalog;
let live;
try {
  const mod = await server.ssrLoadModule('/src/lib/wildlife-catalog/load.ts');
  const i18n = await server.ssrLoadModule('/src/i18n/wildlife.ts');
  catalog = mod.loadWildlifeCatalog();
  live = Object.fromEntries(LOCALES.map((loc) => [loc, i18n.getWildlifeSpecies(loc)]));
} catch (error) {
  await server.close();
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
await server.close();

const shelfFilter = option('--shelf');
const fileShelves = shelfFilter
  ? Object.fromEntries(Object.entries(catalog.fileShelves).filter(([id]) => id === shelfFilter))
  : catalog.fileShelves;

const findings = [
  ...checkCatalogue({
    registry: catalog.registry,
    rules: catalog.rules,
    fileShelves,
    legacyShelves: {},
    repoRoot,
  }),
  ...checkCredits(fileShelves, repoRoot),
];

if (flag('--write-baseline')) {
  if (fs.existsSync(baselinePath)) {
    console.error('legacy-baseline.json already exists; --write-baseline refuses to replace it. The file may only shrink.');
    process.exit(1);
  }
}

const baseline = flag('--no-baseline') ? { version: 1, localeFallback: [], violations: [] } : catalog.baseline;
const result = subtract(findings, baseline);
const grew = flag('--no-baseline') ? [] : growthFindings(baseline, loadMergeBaseBaseline());
const refineWarn = (catalog.refine || []).filter((item) => item.level === 'warn');

let selfTestError = null;
try {
  runSelfTests(catalog, live);
} catch (error) {
  selfTestError = error instanceof Error ? error.message : String(error);
}

const cards = catalog.cardCount;
const locales = LOCALES.length;
const failCount = result.fail.length + result.stale.length + grew.length + (selfTestError ? 1 : 0);
const byRule = (rows) => {
  const counts = {};
  for (const row of rows) counts[row.rule] = (counts[row.rule] || 0) + 1;
  return counts;
};

console.log(`wildlife catalogue: ${cards} cards x ${locales} locales`);
console.log(`schema and S-checks: 0 errors (${refineWarn.length} warnings)`);
console.log(`checker FAIL ${result.fail.length} | stale baseline ${result.stale.length} | baseline growth ${grew.length} | WARN ${result.warn.length + refineWarn.length}`);
console.log(`C17 covered by baseline: ${result.covered.filter((row) => row.rule === 'C17').length}`);
if (result.fail.length) console.log('fail by rule', JSON.stringify(byRule(result.fail)));
if (result.stale.length) console.log('stale by rule', JSON.stringify(byRule(result.stale)));
const show = [...result.fail.slice(0, 8), ...result.stale.slice(0, 4).map((row) => ({ ...row, message: 'stale baseline entry' })), ...grew.slice(0, 4).map((row) => ({ ...row, message: row.message || 'baseline grew' }))];
for (const row of show) {
  console.log(`  ${row.rule} ${row.slug} ${row.locale} ${row.field}${row.pattern ? ` ${row.pattern}` : ''}: ${row.message || ''}`);
}
if (selfTestError) console.log(`self-test FAIL: ${selfTestError}`);

const reportPath = option('--json');
if (reportPath) {
  fs.writeFileSync(reportPath, `${JSON.stringify({ cards, locales, fail: result.fail, stale: result.stale, grew, warn: result.warn.length }, null, 2)}\n`);
}

if (failCount > 0) process.exit(1);
console.log('PASS');
