/**
 * World Bank Commodity Price Data ("Pink Sheet"), monthly prices in nominal US dollars.
 * Licence: Creative Commons Attribution 4.0 (CC BY 4.0), with the World Bank additional terms.
 * The workbook link carries a hash that changes between releases, so the link is read from the
 * Commodity Markets page. Five energy series are kept; everything else in the workbook is left out.
 */
import { DataError, assertRange, assertStep, daysBetween, fail, httpGet, isIsoDate, isIsoMonth, monthAt, monthEndDate, monthIndex, sha256, todayIso } from './lib.mjs';
import { readSheet, columnNumber } from './xlsx.mjs';

export const PAGE_URL = 'https://www.worldbank.org/en/research/commodity-markets';
/** Used only when the page lists no link and the manifest has none either. Known good on 2026-10-04. */
export const FALLBACK_URL =
  'https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Historical-Data-Monthly.xlsx';

/** Only these hosts may serve the workbook. The page is third-party content, so its links are not trusted. */
const WORKBOOK_HOSTS = new Set(['thedocs.worldbank.org', 'pubdocs.worldbank.org', 'www.worldbank.org']);

export function isAllowedWorkbookUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && WORKBOOK_HOSTS.has(url.hostname) && /\/CMO-Historical-Data-Monthly\.xlsx$/.test(url.pathname);
  } catch {
    return false;
  }
}

export const CONFIG = {
  id: 'wb_pink',
  file: 'pink-sheet.json',
  sheet: 'Monthly Prices',
  titleCell: { row: 1, text: 'Pink Sheet' },
  subtitleCell: { row: 2, text: 'monthly prices in nominal US dollars' },
  updatedPattern: /^Updated on ([A-Z][a-z]+) (\d{1,2}), (\d{4})$/,
  staleAfterDays: 45,
  /** Fewest months a workbook must hold. */
  minMonths: 120,
  /** Months allowed between the previous last month and the new last month. */
  maxNewMonths: 3,
  /** Older months may not change; the newest months may be revised by the publisher. */
  revisableMonths: 3,
  /** Month on month ratio allowed for the newest months (newer divided by older). */
  stepRatio: [0.4, 2.5],
  series: [
    { id: 'brent', header: 'Crude oil, Brent', unit: '$/bbl', min: 0.5, max: 400, first: '1960-01' },
    { id: 'gas_us', header: 'Natural gas, US', unit: '$/mmbtu', min: 0.05, max: 40, first: '1960-01' },
    { id: 'gas_europe', header: 'Natural gas, Europe', unit: '$/mmbtu', min: 0.05, max: 150, first: '1960-01' },
    {
      id: 'lng_japan',
      header: 'Liquefied natural gas, Japan',
      unit: '$/mmbtu',
      min: 0.5,
      max: 100,
      first: '1977-01',
      note: 'The workbook says the two most recent monthly averages are estimates.',
    },
    { id: 'coal_australia', header: 'Coal, Australian', unit: '$/mt', min: 5, max: 1000, first: '1970-01' },
  ],
  /** Missing value marks used in the workbook. */
  missing: new Set(['', '..', '...', '\u2026']),
};

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function discoverUrls(html) {
  const found = new Set();
  for (const match of String(html).matchAll(/https?:\/\/[^"'\s<>)]*CMO-Historical-Data-Monthly\.xlsx/g)) {
    const link = match[0].replace(/^http:/, 'https:');
    if (isAllowedWorkbookUrl(link)) found.add(link);
  }
  return [...found];
}

function cellText(rows, row, col) {
  return rows.get(row)?.get(col)?.text?.trim() ?? '';
}

/** Reads the workbook bytes and returns the parsed table; throws DataError for any layout change. */
export function parseWorkbook(buffer, config = CONFIG) {
  const { rows } = readSheet(buffer, config.sheet);

  const title = cellText(rows, config.titleCell.row, 1);
  if (!title.includes(config.titleCell.text)) fail(`Unexpected sheet title: "${title}"`);
  const subtitle = cellText(rows, config.subtitleCell.row, 1);
  if (!subtitle.includes(config.subtitleCell.text)) fail(`Unexpected sheet subtitle: "${subtitle}" (the workbook must stay in nominal US dollars)`);

  let updated = null;
  for (let row = 3; row <= 5; row += 1) {
    const match = cellText(rows, row, 1).match(config.updatedPattern);
    if (match) {
      const month = MONTH_NAMES.indexOf(match[1]);
      if (month < 0) fail(`Unknown month name in "${match[0]}"`);
      updated = `${match[3]}-${String(month + 1).padStart(2, '0')}-${String(Number(match[2])).padStart(2, '0')}`;
    }
  }
  if (!updated || !isIsoDate(updated)) fail('The "Updated on" date was not found in the first rows');

  let headerRow = null;
  for (const [rowNumber, cells] of rows) {
    if ([...cells.values()].some((cell) => cell.text.trim() === config.series[0].header)) {
      headerRow = rowNumber;
      break;
    }
  }
  if (headerRow === null) fail(`Header "${config.series[0].header}" not found`);
  const columns = {};
  for (const spec of config.series) {
    const hits = [...rows.get(headerRow)].filter(([, cell]) => cell.text.trim() === spec.header);
    if (hits.length !== 1) fail(`Header "${spec.header}" found ${hits.length} times, expected once`);
    columns[spec.id] = hits[0][0];
    const unit = cellText(rows, headerRow + 1, columns[spec.id]);
    if (unit !== `(${spec.unit})`) fail(`Unit of "${spec.header}" is "${unit}", expected "(${spec.unit})"`);
  }

  const months = [];
  const values = Object.fromEntries(config.series.map((spec) => [spec.id, []]));
  let seenData = false;
  for (const rowNumber of [...rows.keys()].sort((a, b) => a - b)) {
    if (rowNumber <= headerRow + 1) continue;
    const label = cellText(rows, rowNumber, columnNumber('A'));
    const match = label.match(/^(\d{4})M(\d{2})$/);
    if (!match) {
      if (seenData && label !== '') break;
      continue;
    }
    seenData = true;
    const month = `${match[1]}-${match[2]}`;
    if (!isIsoMonth(month)) fail(`Bad month label "${label}"`);
    if (months.length && monthIndex(month) !== monthIndex(months[months.length - 1]) + 1) {
      fail(`Months are not consecutive: ${months[months.length - 1]} then ${month}`);
    }
    months.push(month);
    for (const spec of config.series) {
      const cell = rows.get(rowNumber)?.get(columns[spec.id]);
      if (!cell || (cell.type !== 'n' && config.missing.has(cell.text.trim()))) {
        values[spec.id].push(null);
      } else if (cell.number === null || !Number.isFinite(cell.number)) {
        fail(`${spec.header} ${month}: "${cell.text}" is not a number`);
      } else {
        values[spec.id].push(cell.number);
      }
    }
  }
  if (months.length < config.minMonths) fail(`Only ${months.length} months found, expected at least ${config.minMonths}`);
  return { updated, months, values };
}

/** Turns the parsed table into the stored dataset. The pipeline fills retrievedAt. */
export function buildDataset(parsed, config = CONFIG) {
  const { updated, months, values } = parsed;
  const start = months[0];
  const series = config.series.map((spec) => {
    const list = values[spec.id];
    const present = list.map((value, index) => (value === null ? -1 : index)).filter((index) => index >= 0);
    if (present.length === 0) fail(`${spec.header}: no values`);
    return {
      id: spec.id,
      name: spec.header,
      unit: spec.unit,
      ...(spec.note ? { note: spec.note } : {}),
      first: months[present[0]],
      last: months[present[present.length - 1]],
      values: list,
    };
  });
  return {
    schema: 'fixplanet.economy.dataset/1',
    id: config.id,
    kind: 'monthly-series',
    retrievedAt: '',
    publisherDate: updated,
    dataAsOf: months[months.length - 1],
    start,
    months: months.length,
    series,
  };
}

/** Days since the end of the newest month. */
export function ageInDays(dataset, now) {
  return daysBetween(monthEndDate(dataset.dataAsOf), todayIso(now));
}

/** Sanity rules. `previous` is the stored dataset or null. Throws DataError. */
export function validateDataset(dataset, previous, options = {}, config = CONFIG) {
  const { now = new Date(), acceptRevisions = false, checkFreshness = true } = options;
  if (dataset.months !== dataset.series[0].values.length) fail('Month count does not match the values');
  for (const spec of config.series) {
    const item = dataset.series.find((entry) => entry.id === spec.id);
    if (!item) fail(`Series ${spec.id} is missing`);
    if (item.values.length !== dataset.months) fail(`${spec.id}: ${item.values.length} values for ${dataset.months} months`);
    if (item.first !== spec.first) fail(`${spec.id}: first value is in ${item.first}, expected ${spec.first}`);
    if (item.last !== dataset.dataAsOf) fail(`${spec.id}: the newest month is missing (last is ${item.last}, data ends ${dataset.dataAsOf})`);
    const firstIndex = monthIndex(item.first) - monthIndex(dataset.start);
    item.values.forEach((value, index) => {
      if (value === null) {
        if (index > firstIndex) fail(`${spec.id}: a gap inside the series at ${monthAt(monthIndex(dataset.start) + index)}`);
        return;
      }
      assertRange(value, spec.min, spec.max, `${spec.id} ${monthAt(monthIndex(dataset.start) + index)}`);
    });
  }
  // Freshness: the newest month must be the month before the publication date, or one earlier.
  const lag = monthIndex(dataset.publisherDate.slice(0, 7)) - monthIndex(dataset.dataAsOf);
  if (lag < 0 || lag > 2) fail(`Newest month ${dataset.dataAsOf} does not fit the publication date ${dataset.publisherDate}`);
  const age = ageInDays(dataset, now);
  if (checkFreshness && age > config.staleAfterDays) fail(`Data end in ${dataset.dataAsOf}, which is ${age} days old (limit ${config.staleAfterDays})`);
  if (daysBetween(dataset.publisherDate, todayIso(now)) < -2) fail(`Publication date ${dataset.publisherDate} is in the future`);

  if (!previous) return;
  const dayLag = daysBetween(previous.publisherDate, dataset.publisherDate);
  if (dayLag < 0) fail(`The new edition (${dataset.publisherDate}) is older than the stored one (${previous.publisherDate})`);
  const grew = monthIndex(dataset.dataAsOf) - monthIndex(previous.dataAsOf);
  if (grew < 0) fail(`The data end earlier (${dataset.dataAsOf}) than before (${previous.dataAsOf})`);
  if (grew > config.maxNewMonths) fail(`${grew} new months at once; at most ${config.maxNewMonths} are expected`);
  if (dataset.start !== previous.start) fail(`The series now start in ${dataset.start}, they started in ${previous.start}`);
  for (const item of dataset.series) {
    const old = previous.series.find((entry) => entry.id === item.id);
    if (!old) continue;
    const frozenUntil = monthIndex(previous.dataAsOf) - config.revisableMonths;
    const changed = [];
    old.values.forEach((value, index) => {
      if (monthIndex(dataset.start) + index > frozenUntil) return;
      const next = item.values[index];
      const same = value === next || (value !== null && next !== null && Math.abs(value - next) <= 1e-9 * Math.max(1, Math.abs(value)));
      if (!same) changed.push(monthAt(monthIndex(dataset.start) + index));
    });
    if (changed.length && !acceptRevisions) {
      fail(`${item.id}: ${changed.length} older values changed (first ${changed[0]}); check the release notes, then run with ECONOMY_ACCEPT_REVISIONS=1`);
    }
    const from = Math.max(0, item.values.length - 1 - (config.revisableMonths + grew));
    for (let index = from + 1; index < item.values.length; index += 1) {
      assertStep(item.values[index - 1], item.values[index], config.stepRatio[0], config.stepRatio[1], `${item.id} ${monthAt(monthIndex(dataset.start) + index)}`);
    }
  }
}

/**
 * Downloads and builds the dataset. `context.previousUrl` is the link used last time.
 * Returns { dataset, source: { downloadUrl, sha256, bytes } }.
 */
export async function fetchDataset(context) {
  const { fetchImpl, previousUrl, config = CONFIG } = context;
  const candidates = [];
  try {
    const page = await httpGet(PAGE_URL, { fetchImpl, accept: 'text/html', maxBytes: 5_000_000, allowUrl: (link) => /(^|\.)worldbank\.org$/.test(new URL(link).hostname) });
    candidates.push(...discoverUrls(page.buffer.toString('utf8')));
  } catch (error) {
    if (!(error instanceof DataError)) throw error;
    console.error(`Commodity Markets page failed: ${error.message}`);
  }
  if (previousUrl && isAllowedWorkbookUrl(previousUrl) && !candidates.includes(previousUrl)) candidates.push(previousUrl);
  if (!candidates.includes(FALLBACK_URL)) candidates.push(FALLBACK_URL);

  let lastError = null;
  for (const url of candidates) {
    try {
      const file = await httpGet(url, { fetchImpl, accept: '*/*', maxBytes: 20_000_000, allowUrl: isAllowedWorkbookUrl });
      const dataset = buildDataset(parseWorkbook(file.buffer, config), config);
      return { dataset, source: { downloadUrl: url, sha256: sha256(file.buffer), bytes: file.buffer.length } };
    } catch (error) {
      if (!(error instanceof DataError)) throw error;
      lastError = error;
      console.error(`Pink Sheet candidate failed (${url}): ${error.message}`);
    }
  }
  throw new DataError(`No Pink Sheet workbook could be read. Last problem: ${lastError?.message}`);
}
