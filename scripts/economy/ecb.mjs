/**
 * European Central Bank euro foreign exchange reference rates (dataflow EXR, daily).
 * Reuse policy: free reuse when the source is quoted ("Source: ECB statistics.") and the
 * statistics, metadata included, are not modified. So values are stored exactly as published:
 * no rounding, no unit change, no computed rates. The decimals the ECB publishes are kept per series.
 * Rates computed by us (cross rates, for example) must never be added to this file.
 */
import { DataError, assertRange, assertStep, daysBetween, fail, httpGet, isIsoDate, sha256, todayIso } from './lib.mjs';

export const API_BASE = 'https://data-api.ecb.europa.eu/service/data/EXR';
export const DAILY_XML_URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
export const PAGE_URL = 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html';

export const CONFIG = {
  id: 'ecb',
  file: 'ecb-fx.json',
  base: 'EUR',
  /** Observations requested for each currency (about one year of working days). */
  window: 260,
  staleAfterDays: 7,
  /** Longest gap between two reference dates (a weekend plus a TARGET holiday is 4 days). */
  maxGapDays: 6,
  /** Day on day ratio allowed (newer divided by older). */
  stepRatio: [0.93, 1.07],
  currencies: [
    { id: 'USD', min: 0.5, max: 2.5 },
    { id: 'GBP', min: 0.4, max: 1.5 },
    { id: 'PLN', min: 3, max: 7 },
  ],
};

export function seriesKey(currency) {
  return `EXR.D.${currency}.EUR.SP00.A`;
}

export function csvUrl(config = CONFIG) {
  const codes = config.currencies.map((item) => item.id).join('+');
  return `${API_BASE}/D.${codes}.EUR.SP00.A?lastNObservations=${config.window}&format=csvdata`;
}

/** Comma separated values with double quote escaping. Returns an array of row objects keyed by header. */
export function parseCsv(text) {
  const records = [];
  let field = '';
  let record = [];
  let quoted = false;
  const input = String(text).replace(/^\uFEFF/, '');
  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    if (quoted) {
      if (ch === '"' && input[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ',') {
      record.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && input[i + 1] === '\n') i += 1;
      record.push(field);
      field = '';
      if (record.some((cell) => cell !== '')) records.push(record);
      record = [];
    } else {
      field += ch;
    }
  }
  if (quoted) fail('CSV ends inside a quoted field');
  record.push(field);
  if (record.some((cell) => cell !== '')) records.push(record);
  if (records.length < 2) fail('CSV has no data rows');
  const header = records[0];
  return records.slice(1).map((cells) => {
    if (cells.length !== header.length) fail(`CSV row has ${cells.length} cells, header has ${header.length}`);
    return Object.fromEntries(header.map((name, index) => [name, cells[index]]));
  });
}

/** Reads the official daily file: { date, rates: { USD: '1.1225', ... } }. */
export function parseDailyXml(xml) {
  const day = String(xml).match(/<Cube\s+time=['"](\d{4}-\d{2}-\d{2})['"]\s*>([\s\S]*?)<\/Cube>/);
  if (!day) fail('The daily XML has no dated Cube');
  const rates = {};
  for (const match of day[2].matchAll(/<Cube\s+currency=['"]([A-Z]{3})['"]\s+rate=['"]([0-9.]+)['"]\s*\/>/g)) rates[match[1]] = match[2];
  if (Object.keys(rates).length < 10) fail('The daily XML lists fewer than 10 currencies');
  return { date: day[1], rates };
}

export function buildDataset(rows, config = CONFIG) {
  const wanted = new Map(config.currencies.map((item) => [seriesKey(item.id), item.id]));
  const byKey = new Map();
  for (const row of rows) {
    for (const column of ['KEY', 'TIME_PERIOD', 'OBS_VALUE', 'OBS_STATUS', 'CURRENCY', 'CURRENCY_DENOM', 'TITLE', 'DECIMALS', 'UNIT']) {
      if (!(column in row)) fail(`CSV column ${column} is missing`);
    }
    const currency = wanted.get(row.KEY);
    if (!currency) fail(`Unexpected series ${row.KEY}`);
    if (row.CURRENCY !== currency || row.CURRENCY_DENOM !== config.base) fail(`Series ${row.KEY} is not ${currency} per ${config.base}`);
    if (!isIsoDate(row.TIME_PERIOD)) fail(`Bad date "${row.TIME_PERIOD}" in ${row.KEY}`);
    if (!/^\d+(\.\d+)?$/.test(row.OBS_VALUE)) fail(`Bad value "${row.OBS_VALUE}" in ${row.KEY} on ${row.TIME_PERIOD}`);
    if (row.OBS_STATUS !== 'A') fail(`Status "${row.OBS_STATUS}" in ${row.KEY} on ${row.TIME_PERIOD}, expected A (normal value)`);
    if (!byKey.has(row.KEY)) byKey.set(row.KEY, { rows: [], title: row.TITLE, decimals: Number(row.DECIMALS), unit: row.UNIT });
    const entry = byKey.get(row.KEY);
    if (entry.title !== row.TITLE || entry.decimals !== Number(row.DECIMALS)) fail(`Metadata of ${row.KEY} changes between rows`);
    entry.rows.push([row.TIME_PERIOD, Number(row.OBS_VALUE)]);
  }
  for (const key of wanted.keys()) if (!byKey.has(key)) fail(`Series ${key} is missing`);

  const first = byKey.get(seriesKey(config.currencies[0].id)).rows.map(([date]) => date);
  const series = config.currencies.map((item) => {
    const entry = byKey.get(seriesKey(item.id));
    const dates = entry.rows.map(([date]) => date);
    if (dates.length !== first.length || dates.some((date, index) => date !== first[index])) {
      fail(`${item.id} has different dates from ${config.currencies[0].id}`);
    }
    return {
      id: item.id,
      key: seriesKey(item.id),
      name: entry.title,
      unit: entry.unit,
      decimals: entry.decimals,
      values: entry.rows.map(([, value]) => value),
    };
  });
  const last = first[first.length - 1];
  return {
    schema: 'fixplanet.economy.dataset/1',
    id: config.id,
    kind: 'daily-rates',
    base: config.base,
    retrievedAt: '',
    publisherDate: last,
    dataAsOf: last,
    dates: first,
    series,
  };
}

/** Days since the newest reference date. */
export function ageInDays(dataset, now) {
  return daysBetween(dataset.dataAsOf, todayIso(now));
}

function decimalsOf(value) {
  return String(value).split('.')[1]?.length ?? 0;
}

export function validateDataset(dataset, previous, options = {}, config = CONFIG) {
  const { now = new Date(), acceptRevisions = false, checkFreshness = true } = options;
  const { dates } = dataset;
  if (dates.length < Math.min(config.window, 200)) fail(`Only ${dates.length} dates, expected at least ${Math.min(config.window, 200)}`);
  if (dataset.dataAsOf !== dates[dates.length - 1]) fail('dataAsOf is not the newest date');
  dates.forEach((date, index) => {
    if (!isIsoDate(date)) fail(`Bad date ${date}`);
    const weekday = new Date(`${date}T00:00:00Z`).getUTCDay();
    if (weekday === 0 || weekday === 6) fail(`${date} is a weekend day`);
    if (index > 0) {
      const gap = daysBetween(dates[index - 1], date);
      if (gap <= 0) fail(`Dates are not increasing at ${date}`);
      if (gap > config.maxGapDays) fail(`A gap of ${gap} days before ${date}`);
    }
  });
  for (const spec of config.currencies) {
    const item = dataset.series.find((entry) => entry.id === spec.id);
    if (!item) fail(`Series ${spec.id} is missing`);
    if (item.key !== seriesKey(spec.id)) fail(`${spec.id}: series key ${item.key} is not a published ECB key`);
    if (item.values.length !== dates.length) fail(`${spec.id}: ${item.values.length} values for ${dates.length} dates`);
    if (!Number.isInteger(item.decimals) || item.decimals < 0 || item.decimals > 8) fail(`${spec.id}: decimals ${item.decimals} is not a whole number from 0 to 8`);
    item.values.forEach((value, index) => {
      assertRange(value, spec.min, spec.max, `${spec.id} ${dates[index]}`);
      if (decimalsOf(value) > item.decimals) fail(`${spec.id} ${dates[index]}: ${value} has more decimals than the ${item.decimals} the ECB publishes`);
      if (index > 0) assertStep(item.values[index - 1], value, config.stepRatio[0], config.stepRatio[1], `${spec.id} ${dates[index]}`);
    });
  }
  const age = ageInDays(dataset, now);
  if (age < -1) fail(`Newest date ${dataset.dataAsOf} is in the future`);
  if (checkFreshness && age > config.staleAfterDays) fail(`Newest rates are from ${dataset.dataAsOf}, ${age} days old (limit ${config.staleAfterDays})`);

  if (!previous) return;
  if (dataset.dataAsOf < previous.dataAsOf) fail(`The newest date moved back from ${previous.dataAsOf} to ${dataset.dataAsOf}`);
  const index = new Map(dataset.dates.map((date, position) => [date, position]));
  const changed = [];
  for (const old of previous.series) {
    const item = dataset.series.find((entry) => entry.id === old.id);
    if (!item) fail(`Series ${old.id} disappeared`);
    previous.dates.forEach((date, position) => {
      const at = index.get(date);
      if (at === undefined) return;
      if (item.values[at] !== old.values[position]) changed.push(`${old.id} ${date}`);
    });
  }
  if (changed.length && !acceptRevisions) {
    fail(`${changed.length} published rates differ from the stored ones (first ${changed[0]}); the ECB does not normally revise reference rates. Check, then run with ECONOMY_ACCEPT_REVISIONS=1`);
  }
}

/** Compares the newest day of the data API with the official daily file. A mismatch on the same date is an error. */
export function crossCheck(dataset, daily) {
  if (daily.date !== dataset.dataAsOf) return { compared: false, note: `The daily file is dated ${daily.date}, the data API ends ${dataset.dataAsOf}` };
  for (const item of dataset.series) {
    const published = daily.rates[item.id];
    if (published === undefined) fail(`The daily file has no ${item.id}`);
    const last = item.values[item.values.length - 1];
    if (Number(published) !== last) fail(`${item.id} on ${daily.date}: data API ${last} differs from the daily file ${published}`);
  }
  return { compared: true, note: null };
}

export async function fetchDataset(context) {
  const { fetchImpl, config = CONFIG } = context;
  const csv = await httpGet(csvUrl(config), { fetchImpl, accept: 'text/csv', maxBytes: 2_000_000 });
  const dataset = buildDataset(parseCsv(csv.buffer.toString('utf8')), config);
  let cross = { compared: false, note: 'not run' };
  let daily = null;
  try {
    const file = await httpGet(DAILY_XML_URL, { fetchImpl, accept: 'application/xml,text/xml', maxBytes: 200_000 });
    daily = parseDailyXml(file.buffer.toString('utf8'));
  } catch (error) {
    if (!(error instanceof DataError)) throw error;
    console.error(`ECB daily file not compared: ${error.message}`);
    cross = { compared: false, note: error.message };
  }
  if (daily) cross = crossCheck(dataset, daily);
  if (cross.note) console.error(`ECB cross check: ${cross.note}`);
  return { dataset, source: { downloadUrl: csvUrl(config), sha256: sha256(csv.buffer), bytes: csv.buffer.length }, cross };
}
