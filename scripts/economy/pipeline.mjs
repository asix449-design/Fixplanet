/**
 * Runs one source: download, build, validate, write the data file only when everything passes,
 * and keep the manifest up to date. A source that fails leaves its previous good file untouched.
 */
import { readFile, readdir, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { DataError, SCHEMAS, jsonFile, sha256, validateSchema } from './lib.mjs';
import * as pink from './pinksheet.mjs';
import * as ecb from './ecb.mjs';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const SOURCES = [
  {
    id: pink.CONFIG.id,
    file: pink.CONFIG.file,
    schemaName: 'monthly',
    module: pink,
    entryStatic(dataset) {
      return {
        file: pink.CONFIG.file,
        title: 'World Bank Commodity Price Data (The Pink Sheet), monthly prices in nominal US dollars',
        frequency: 'monthly',
        staleAfterDays: pink.CONFIG.staleAfterDays,
        source: {
          organisation: 'World Bank',
          name: 'Commodity Price Data (The Pink Sheet)',
          page: pink.PAGE_URL,
          termsUrls: [
            'https://datacatalog.worldbank.org/public-licenses',
            'https://datacatalog.worldbank.org/search/dataset/0038238/commodity-prices-history-and-projections',
            'https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets',
          ],
        },
        licence: {
          name: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
          url: 'https://creativecommons.org/licenses/by/4.0/',
          terms:
            'CC BY 4.0 with the World Bank additional terms: give credit, indicate changes (translations included), do not imply endorsement by the World Bank and do not use its logo.',
        },
        attribution: {
          credit: 'World Bank Commodity Markets (Pink Sheet), CC BY 4.0',
          edition: dataset ? `${MONTHS[Number(dataset.publisherDate.slice(5, 7)) - 1]} ${dataset.publisherDate.slice(0, 4)}` : null,
        },
        modified: true,
        changes: [
          'Five series are taken from the sheet Monthly Prices: Crude oil, Brent; Natural gas, US; Natural gas, Europe; Liquefied natural gas, Japan; Coal, Australian. All other series are left out.',
          'Month labels such as 2026M09 are written as 2026-09, and the values of each series are listed from the first month of the file.',
          'Cells the workbook marks as missing are stored as null.',
          'Values are the numbers in the workbook, in the units the workbook gives. Nothing is rounded or converted in the data file; rounding for display is done on the page.',
        ],
      };
    },
    summarize(dataset) {
      return dataset.series.map((item) => ({
        id: item.id,
        name: item.name,
        unit: item.unit,
        first: item.first,
        last: item.last,
        count: item.values.filter((value) => value !== null).length,
      }));
    },
  },
  {
    id: ecb.CONFIG.id,
    file: ecb.CONFIG.file,
    schemaName: 'daily',
    module: ecb,
    entryStatic() {
      return {
        file: ecb.CONFIG.file,
        title: 'Euro foreign exchange reference rates',
        frequency: 'daily',
        staleAfterDays: ecb.CONFIG.staleAfterDays,
        source: {
          organisation: 'European Central Bank',
          name: 'Euro foreign exchange reference rates (ECB Data Portal dataflow EXR)',
          page: ecb.PAGE_URL,
          termsUrls: [
            'https://www.ecb.europa.eu/stats/ecb_statistics/governance_and_quality_framework/html/usage_policy.en.html',
            'https://data.ecb.europa.eu/help/api/data',
          ],
        },
        licence: {
          name: 'ECB reuse policy for statistics of the European System of Central Banks',
          url: 'https://www.ecb.europa.eu/stats/ecb_statistics/governance_and_quality_framework/html/usage_policy.en.html',
          terms:
            'Free reuse on the condition that the source is quoted ("Source: ECB statistics.") and the statistics, metadata included, are not modified. The reference rates are published for information only.',
        },
        attribution: { credit: 'Source: ECB statistics.', edition: null },
        modified: false,
        changes: [
          'Layout only: the dates are listed once and each currency has one list of values in the same order.',
          'Values, decimals and series titles are as published by the ECB. Nothing is rounded, converted or computed. Rates computed by Fix Planet (cross rates, for example) never go into this file.',
        ],
      };
    },
    summarize(dataset) {
      return dataset.series.map((item) => ({
        id: item.id,
        name: item.name,
        unit: item.unit,
        first: dataset.dates[0],
        last: dataset.dates[dataset.dates.length - 1],
        count: item.values.length,
      }));
    },
  },
];

/** The stored data without the retrieval time, so a quiet day makes no change. */
export function payloadKey(dataset) {
  if (!dataset) return '';
  const { retrievedAt, ...rest } = dataset;
  return JSON.stringify(rest);
}

export async function readJsonIfExists(file) {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw new DataError(`${path.basename(file)} cannot be read: ${error.message}`);
  }
}

export async function readManifest(dir) {
  const manifest = await readJsonIfExists(path.join(dir, 'manifest.json'));
  return manifest || { schema: 'fixplanet.economy.manifest/1', datasets: {} };
}

async function writeAtomic(file, text) {
  const temp = `${file}.tmp`;
  await writeFile(temp, text);
  await rename(temp, file);
}

export async function writeManifestIfChanged(dir, manifest) {
  const file = path.join(dir, 'manifest.json');
  const text = jsonFile(manifest);
  let current = null;
  try {
    current = await readFile(file, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (current === text) return false;
  await writeAtomic(file, text);
  return true;
}

/**
 * context: { dir, manifest, now, fetchImpl, acceptRevisions }
 * Returns { id, result: 'updated' | 'unchanged' | 'failed', message }.
 * The manifest object in context is changed in place; the caller writes it.
 */
export async function runSource(def, context) {
  const { dir, manifest, now, fetchImpl, acceptRevisions = false } = context;
  const file = path.join(dir, def.file);
  let previous = null;
  try {
    previous = await readJsonIfExists(file);
  } catch (error) {
    // A damaged stored file: nothing to compare with. Leave everything alone; check-economy reports it.
    return { id: def.id, result: 'failed', message: error.message, first: true };
  }
  const previousEntry = manifest.datasets[def.id] || null;
  const stamp = now.toISOString();

  try {
    const built = await def.module.fetchDataset({ fetchImpl, previousUrl: previousEntry?.source?.downloadUrl });
    const dataset = built.dataset;
    dataset.retrievedAt = stamp;
    def.module.validateDataset(dataset, previous, { now, acceptRevisions });
    const problems = validateSchema(dataset, SCHEMAS[def.schemaName]);
    if (problems.length) throw new DataError(`Schema: ${problems.slice(0, 3).join('; ')}`);

    const unchanged = previous !== null && payloadKey(previous) === payloadKey(dataset);
    const stored = unchanged ? previous : dataset;
    let text;
    if (unchanged) {
      text = await readFile(file, 'utf8');
    } else {
      text = jsonFile(dataset);
      await writeAtomic(file, text);
    }
    const keepOld = unchanged && previousEntry && previousEntry.status === 'ok';
    const entry = {
      ...def.entryStatic(stored),
      publisherDate: stored.publisherDate,
      dataAsOf: stored.dataAsOf,
      retrievedAt: stored.retrievedAt,
      status: 'ok',
      consecutiveFailures: 0,
      lastError: null,
      lastFailureAt: null,
      checksums: keepOld
        ? { ...previousEntry.checksums, output: sha256(text), outputBytes: Buffer.byteLength(text) }
        : {
            algorithm: 'sha256',
            output: sha256(text),
            outputBytes: Buffer.byteLength(text),
            source: built.source.sha256,
            sourceBytes: built.source.bytes,
          },
      series: def.summarize(stored),
    };
    entry.source.downloadUrl = keepOld ? previousEntry.source.downloadUrl : built.source.downloadUrl;
    manifest.datasets[def.id] = entry;
    return { id: def.id, result: unchanged ? 'unchanged' : 'updated', message: `data end ${stored.dataAsOf}`, cross: built.cross?.note || null };
  } catch (caught) {
    // Any failure of one source (a bug included) must not stop the other source or the manifest.
    if (!(caught instanceof DataError)) console.error(caught?.stack || String(caught));
    const error = caught instanceof DataError ? caught : new DataError(`Unexpected ${caught?.name || 'error'}: ${caught?.message || caught}`);
    if (!previous || !previousEntry) {
      // Nothing good to fall back on: leave the manifest alone and let the run fail.
      return { id: def.id, result: 'failed', message: error.message, first: true };
    }
    manifest.datasets[def.id] = {
      ...previousEntry,
      ...def.entryStatic(previous),
      source: { ...def.entryStatic(previous).source, downloadUrl: previousEntry.source.downloadUrl },
      status: 'failed',
      consecutiveFailures: previousEntry.consecutiveFailures + 1,
      lastError: error.message.slice(0, 300),
      lastFailureAt: stamp,
    };
    return { id: def.id, result: 'failed', message: error.message };
  }
}

export async function runAll(options) {
  const { dir, now = new Date(), fetchImpl = fetch, acceptRevisions = false, only = null, sources = SOURCES } = options;
  const manifest = await readManifest(dir);
  const results = [];
  let manifestChanged = false;
  for (const def of sources) {
    if (only && !only.includes(def.id)) continue;
    results.push(await runSource(def, { dir, manifest, now, fetchImpl, acceptRevisions }));
    // Written after every source, so a later crash or a job timeout cannot leave data and manifest apart.
    manifestChanged = (await writeManifestIfChanged(dir, manifest)) || manifestChanged;
  }
  return { results, manifestChanged };
}

/**
 * Reads the stored files and returns { invalid, attention }, two lists of messages.
 * invalid: a file is damaged or does not match the manifest. attention: the files are fine
 * but the last refresh failed or the data are older than the limit for the source.
 */
export async function checkDirectory(options) {
  const { dir, now = new Date(), sources = SOURCES } = options;
  const invalid = [];
  const attention = [];

  const readText = async (file) => {
    try {
      return await readFile(path.join(dir, file), 'utf8');
    } catch (error) {
      invalid.push(`${file}: cannot be read (${error.code || error.message})`);
      return null;
    }
  };
  const parse = (file, text) => {
    try {
      return JSON.parse(text);
    } catch (error) {
      invalid.push(`${file}: not valid JSON (${error.message})`);
      return null;
    }
  };

  const manifestText = await readText('manifest.json');
  const manifest = manifestText === null ? null : parse('manifest.json', manifestText);
  if (manifest) {
    for (const problem of validateSchema(manifest, SCHEMAS.manifest)) invalid.push(`manifest.json: ${problem}`);
    const ids = Object.keys(manifest.datasets || {}).sort();
    const expected = sources.map((def) => def.id).sort();
    if (ids.join() !== expected.join()) invalid.push(`manifest.json: datasets are ${ids.join(', ')}, expected ${expected.join(', ')}`);

    for (const def of sources) {
      const entry = manifest.datasets?.[def.id];
      if (!entry) continue;
      for (const problem of validateSchema(entry, SCHEMAS.manifestEntry, `manifest.${def.id}`)) invalid.push(problem);
      const wanted = def.entryStatic(null);
      if (entry.file !== def.file) invalid.push(`manifest.${def.id}: file is ${entry.file}, expected ${def.file}`);
      if (entry.attribution?.credit !== wanted.attribution.credit) invalid.push(`manifest.${def.id}: the credit line differs from the required "${wanted.attribution.credit}"`);
      if (entry.modified !== wanted.modified) invalid.push(`manifest.${def.id}: modified must be ${wanted.modified}`);
      if (entry.licence?.url !== wanted.licence.url) invalid.push(`manifest.${def.id}: licence link differs`);
      if (entry.staleAfterDays !== wanted.staleAfterDays) invalid.push(`manifest.${def.id}: staleAfterDays must be ${wanted.staleAfterDays}`);

      const text = await readText(def.file);
      if (text === null) continue;
      if (sha256(text) !== entry.checksums?.output) invalid.push(`${def.file}: checksum differs from the manifest`);
      if (Buffer.byteLength(text) !== entry.checksums?.outputBytes) invalid.push(`${def.file}: size differs from the manifest`);
      const dataset = parse(def.file, text);
      if (!dataset) continue;
      const problems = validateSchema(dataset, SCHEMAS[def.schemaName]);
      problems.forEach((problem) => invalid.push(`${def.file}: ${problem}`));
      if (problems.length) continue;
      if (dataset.id !== def.id) invalid.push(`${def.file}: id is ${dataset.id}`);
      for (const key of ['publisherDate', 'dataAsOf', 'retrievedAt']) {
        if (dataset[key] !== entry[key]) invalid.push(`${def.file}: ${key} ${dataset[key]} differs from the manifest ${entry[key]}`);
      }
      try {
        def.module.validateDataset(dataset, null, { now, checkFreshness: false });
      } catch (error) {
        if (!(error instanceof DataError)) throw error;
        invalid.push(`${def.file}: ${error.message}`);
        continue;
      }
      if (JSON.stringify(def.summarize(dataset)) !== JSON.stringify(entry.series)) invalid.push(`manifest.${def.id}: series summary differs from ${def.file}`);

      const age = def.module.ageInDays(dataset, now);
      if (age > entry.staleAfterDays) attention.push(`${def.id}: data end ${dataset.dataAsOf}, ${age} days old (limit ${entry.staleAfterDays})`);
      if (entry.status !== 'ok') attention.push(`${def.id}: last refresh failed ${entry.consecutiveFailures} time(s) in a row: ${entry.lastError}`);
    }
  }
  try {
    for (const name of await readdir(dir)) if (name.endsWith('.tmp')) invalid.push(`${name}: leftover temporary file`);
  } catch {
    invalid.push('the data folder cannot be read');
  }
  return { invalid, attention };
}
