/**
 * Tests for the economy data pipeline. Run: npm run test:economy
 * (node --test scripts/economy/economy.test.mjs). No network: downloads are answered from
 * the fixtures in scripts/economy/fixtures and from a workbook built here with real values
 * (the last 30 months of the Pink Sheet of 2 October 2026).
 */
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { deflateRawSync } from 'node:zlib';
import { DataError, HTTP_DEFAULTS, SCHEMAS, jsonFile, toJson, validateSchema } from './lib.mjs';
import * as ecb from './ecb.mjs';
import * as pink from './pinksheet.mjs';
import { SOURCES, checkDirectory, payloadKey, runAll } from './pipeline.mjs';

HTTP_DEFAULTS.retryDelayMs = 1;
const here = path.dirname(fileURLToPath(import.meta.url));
const NOW = new Date('2026-10-05T06:40:00Z');

/* ---------- fixtures ---------- */

const ECB_CSV = await readFile(path.join(here, 'fixtures/ecb-exr.csv'), 'utf8');
const ECB_XML = await readFile(path.join(here, 'fixtures/ecb-daily.xml'), 'utf8');
const ECB_TEST = { ...ecb.CONFIG, window: 10 };

const MONTHS = [];
for (let i = 0; i < 30; i += 1) {
  const index = 2024 * 12 + 3 + i;
  MONTHS.push(`${Math.floor(index / 12)}M${String((index % 12) + 1).padStart(2, '0')}`);
}
const PINK_VALUES = {
  'Crude oil, Brent': [90.1, 82.0, 82.6, 85.3, 80.9, 74.3, 75.7, 74.4, 73.8, 79.2, 75.2, 72.6, 67.7, 64.2, 71.5, 71.0, 68.2, 68.0, 64.7, 63.6, 62.7, 66.8, 71.1, 103.7, 120.4, 107.5, 85.4, 83.4, 90.9, 116.8],
  'Natural gas, US': [1.6, 2.13, 2.51, 2.08, 1.99, 2.25, 2.21, 2.1, 3.02, 4.1, 4.22, 4.13, 3.4, 3.12, 3.02, 3.19, 2.91, 2.97, 3.2, 3.79, 4.25, 7.58, 3.61, 3.06, 2.77, 2.93, 3.15, 2.89, 2.77, 2.95],
  'Natural gas, Europe': [9.09, 10.12, 10.87, 10.35, 12.37, 11.78, 12.92, 13.93, 13.86, 14.66, 15.34, 13.24, 11.59, 11.66, 12.37, 11.62, 11.15, 11.12, 10.89, 10.42, 9.48, 11.76, 11.24, 17.91, 15.41, 16.17, 15.17, 18.06, 21.11, 25.42],
  'Liquefied natural gas, Japan': [11.88, 12.16, 12.13, 12.49, 13.32, 12.97, 12.54, 12.82, 12.64, 13.19, 12.78, 12.55, 12.68, 12.32, 12.17, 11.91, 11.79, 11.47, 11.1, 11.15, 11.32, 11.49, 11.32, 11.42, 15.65, 12.88, 11.79, 13.85, 15.27, 14.25],
  'Coal, Australian': [135.0, 142.0, 135.1, 137.6, 145.8, 139.2, 146.6, 142.1, 129.8, 118.6, 106.9, 104.0, 98.6, 104.4, 109.0, 112.9, 112.2, 106.3, 107.5, 112.6, 107.7, 109.8, 118.4, 138.6, 130.9, 136.9, 138.5, 131.9, 135.2, 147.1],
};
const PINK_TEST = {
  ...pink.CONFIG,
  minMonths: 24,
  series: pink.CONFIG.series.map((spec) => ({ ...spec, first: spec.id === 'lng_japan' ? '2024-06' : '2024-04' })),
};

/* A minimal .xlsx writer for the tests: a zip with stored and deflated parts. */
const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function zip(parts) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const [name, text, method] of parts) {
    const data = Buffer.from(text, 'utf8');
    const body = method === 8 ? deflateRawSync(data) : data;
    const nameBytes = Buffer.from(name);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(method, 8);
    local.writeUInt32LE(crc32(data), 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBytes.length, 26);
    locals.push(local, nameBytes, body);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(method, 10);
    central.writeUInt32LE(crc32(data), 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBytes.length, 28);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBytes);
    offset += 30 + nameBytes.length + body.length;
  }
  const directory = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(parts.length, 8);
  end.writeUInt16LE(parts.length, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, directory, end]);
}

const COLUMNS = ['B', 'C', 'D', 'E', 'F'];
/** Builds a workbook shaped like the Pink Sheet; `edit` can change the cells before writing. */
function workbook(edit = (cells) => cells, sheetName = 'Monthly Prices') {
  const headers = ['Crude oil, Brent', 'Natural gas, US', 'Natural gas, Europe', 'Liquefied natural gas, Japan', 'Coal, Australian'];
  const units = ['($/bbl)', '($/mmbtu)', '($/mmbtu)', '($/mmbtu)', '($/mt)'];
  let cells = {
    A1: 'World Bank Commodity Price Data (The Pink Sheet)',
    A2: 'monthly prices in nominal US dollars, 1960 to present',
    A3: '(monthly series are available only in nominal US dollars)',
    A4: 'Updated on October 02, 2026',
  };
  headers.forEach((name, i) => {
    cells[`${COLUMNS[i]}5`] = name;
    cells[`${COLUMNS[i]}6`] = units[i];
  });
  MONTHS.forEach((label, row) => {
    cells[`A${7 + row}`] = label;
    headers.forEach((name, i) => {
      cells[`${COLUMNS[i]}${7 + row}`] = row < 2 && name.startsWith('Liquefied') ? '\u2026' : PINK_VALUES[name][row];
    });
  });
  cells = edit(cells) || cells;
  const strings = [];
  const stringIndex = (text) => {
    if (!strings.includes(text)) strings.push(text);
    return strings.indexOf(text);
  };
  const rows = new Map();
  for (const [ref, value] of Object.entries(cells)) {
    if (value === undefined) continue;
    const row = Number(ref.replace(/[A-Z]+/, ''));
    if (!rows.has(row)) rows.set(row, []);
    const xml = typeof value === 'number'
      ? `<c r="${ref}"><v>${value}</v></c>`
      : `<c r="${ref}" t="s"><v>${stringIndex(String(value))}</v></c>`;
    rows.get(row).push([ref, xml]);
  }
  const order = (ref) => ref.replace(/\d+/, '').padStart(3, ' ');
  const sheetXml = `<?xml version="1.0"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${[...rows.keys()]
    .sort((a, b) => a - b)
    .map((row) => `<row r="${row}">${rows.get(row).sort((a, b) => (order(a[0]) < order(b[0]) ? -1 : 1)).map((cell) => cell[1]).join('')}</row>`)
    .join('')}<row r="900" spans="1:1"/></sheetData></worksheet>`;
  const esc = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return zip([
    ['[Content_Types].xml', '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"/>', 0],
    ['xl/workbook.xml', `<?xml version="1.0"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Mismatch Details" sheetId="22" state="hidden" r:id="rId1"/><sheet name="${sheetName}" sheetId="24" r:id="rId2"/></sheets></workbook>`, 0],
    ['xl/_rels/workbook.xml.rels', '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId2" Type="x" Target="worksheets/sheet2.xml"/><Relationship Id="rId1" Type="x" Target="worksheets/sheet1.xml"/></Relationships>', 0],
    ['xl/sharedStrings.xml', `<?xml version="1.0"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">${strings.map((text) => `<si><t>${esc(text)}</t></si>`).join('')}</sst>`, 8],
    ['xl/worksheets/sheet1.xml', '<?xml version="1.0"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData/></worksheet>', 0],
    ['xl/worksheets/sheet2.xml', sheetXml, 8],
  ]);
}

const cellOf = (row, column) => `${column}${row}`;
const LAST_ROW = 7 + MONTHS.length - 1;

function build(edit, config = PINK_TEST) {
  return pink.buildDataset(pink.parseWorkbook(workbook(edit), config), config);
}
function pinkDataset(edit) {
  const dataset = build(edit);
  dataset.retrievedAt = NOW.toISOString();
  return dataset;
}
function ecbDataset(csv = ECB_CSV) {
  const dataset = ecb.buildDataset(ecb.parseCsv(csv), ECB_TEST);
  dataset.retrievedAt = NOW.toISOString();
  return dataset;
}
const copy = (value) => JSON.parse(JSON.stringify(value));
const rejects = (fn, pattern) => assert.throws(fn, (error) => error instanceof DataError && pattern.test(error.message), String(pattern));

/* ---------- the workbook reader and the Pink Sheet ---------- */

test('pink sheet: the workbook is read with the real values', () => {
  const dataset = build();
  assert.equal(dataset.publisherDate, '2026-10-02');
  assert.equal(dataset.dataAsOf, '2026-09');
  assert.equal(dataset.start, '2024-04');
  assert.equal(dataset.months, 30);
  const brent = dataset.series.find((item) => item.id === 'brent');
  assert.equal(brent.values.at(-1), 116.8);
  assert.equal(brent.values[0], 90.1);
  const lng = dataset.series.find((item) => item.id === 'lng_japan');
  assert.deepEqual(lng.values.slice(0, 3), [null, null, 12.13]);
  assert.equal(lng.first, '2024-06');
  assert.equal(lng.unit, '$/mmbtu');
  assert.deepEqual(validateSchema(dataset, { ...SCHEMAS.monthly, properties: { ...SCHEMAS.monthly.properties, retrievedAt: {} } }), []);
});

test('pink sheet: a good dataset passes every rule', () => {
  pink.validateDataset(pinkDataset(), null, { now: NOW }, PINK_TEST);
});

test('pink sheet: layout changes are refused', () => {
  rejects(() => build((c) => ({ ...c, B6: '($/mt)' })), /Unit of "Crude oil, Brent"/);
  rejects(() => build((c) => ({ ...c, B5: 'Crude oil, Brent (renamed)' })), /Header "Crude oil, Brent" not found/);
  rejects(() => build((c) => ({ ...c, A2: 'monthly prices in constant 2010 US dollars' })), /nominal US dollars/);
  rejects(() => build((c) => ({ ...c, A4: 'Revised' })), /Updated on/);
  rejects(() => build((c) => ({ ...c, A1: 'Something else' })), /title/);
  rejects(() => pink.parseWorkbook(workbook((c) => c, 'Annual Prices'), PINK_TEST), /Sheet "Monthly Prices" not found/);
  rejects(() => build((c) => ({ ...c, [cellOf(10, 'A')]: '2024M09' })), /not consecutive/);
});

test('pink sheet: bad cells are refused', () => {
  rejects(() => build((c) => ({ ...c, [cellOf(15, 'B')]: 'n/a' })), /not a number/);
  rejects(() => build((c) => ({ ...c, [cellOf(15, 'B')]: '#N/A' })), /not a number/);
  const blank = build((c) => ({ ...c, [cellOf(15, 'C')]: undefined }));
  assert.equal(blank.series.find((item) => item.id === 'gas_us').values[8], null);
});

test('pink sheet: a damaged download is refused', () => {
  const file = workbook();
  rejects(() => pink.parseWorkbook(file.subarray(0, file.length - 60), PINK_TEST), /Not a zip archive/);
  rejects(() => pink.parseWorkbook(Buffer.from('<html>blocked</html>'), PINK_TEST), /Not a zip archive/);
});

test('pink sheet: sanity rules on values', () => {
  const noLatest = pinkDataset((c) => ({ ...c, [cellOf(LAST_ROW, 'B')]: '..' }));
  rejects(() => pink.validateDataset(noLatest, null, { now: NOW }, PINK_TEST), /newest month is missing/);
  const tenTimes = pinkDataset((c) => ({ ...c, [cellOf(LAST_ROW, 'B')]: 1168 }));
  rejects(() => pink.validateDataset(tenTimes, null, { now: NOW }, PINK_TEST), /outside the sane range/);
  const hole = pinkDataset((c) => ({ ...c, [cellOf(20, 'C')]: '..' }));
  rejects(() => pink.validateDataset(hole, null, { now: NOW }, PINK_TEST), /gap inside the series/);
  const wrongStart = pinkDataset((c) => ({ ...c, [cellOf(7, 'B')]: '..' }));
  rejects(() => pink.validateDataset(wrongStart, null, { now: NOW }, PINK_TEST), /first value is in 2024-05/);
  const future = pinkDataset((c) => ({ ...c, A4: 'Updated on December 24, 2026' }));
  rejects(() => pink.validateDataset(future, null, { now: NOW }, PINK_TEST), /does not fit the publication date|in the future/);
  const missingMonth = pinkDataset((c) => ({ ...c, A4: 'Updated on June 02, 2026' }));
  rejects(() => pink.validateDataset(missingMonth, null, { now: NOW }, PINK_TEST), /does not fit the publication date/);
  rejects(() => pink.validateDataset(pinkDataset(), null, { now: new Date('2026-12-30T00:00:00Z') }, PINK_TEST), /days old/);
});

test('pink sheet: comparison with the stored file', () => {
  const stored = pinkDataset();
  const next = (edit) => {
    const dataset = pinkDataset(edit);
    return dataset;
  };
  pink.validateDataset(next(), stored, { now: NOW }, PINK_TEST);

  const rewritten = next((c) => ({ ...c, [cellOf(12, 'B')]: 99.9 }));
  rejects(() => pink.validateDataset(rewritten, stored, { now: NOW }, PINK_TEST), /older values changed/);
  pink.validateDataset(rewritten, stored, { now: NOW, acceptRevisions: true }, PINK_TEST);

  const revisedRecent = next((c) => ({ ...c, [cellOf(LAST_ROW, 'B')]: 118.2 }));
  pink.validateDataset(revisedRecent, stored, { now: NOW }, PINK_TEST);

  const jump = next((c) => ({ ...c, [cellOf(LAST_ROW, 'B')]: 290 }));
  rejects(() => pink.validateDataset(jump, stored, { now: NOW }, PINK_TEST), /jump from/);

  const older = next((c) => ({ ...c, A4: 'Updated on September 01, 2026' }));
  rejects(() => pink.validateDataset(older, stored, { now: NOW }, PINK_TEST), /older than the stored one/);

  const shorter = copy(stored);
  shorter.dataAsOf = '2026-10';
  shorter.series.forEach((item) => { item.last = '2026-10'; });
  const longerStored = copy(stored);
  longerStored.dataAsOf = '2026-12';
  rejects(() => pink.validateDataset(next(), longerStored, { now: NOW }, PINK_TEST), /end earlier|older than/);

  const manyNew = copy(stored);
  manyNew.dataAsOf = '2026-05';
  rejects(() => pink.validateDataset(next(), manyNew, { now: NOW }, PINK_TEST), /new months at once/);
});

test('pink sheet: the download link is found on the page', () => {
  const html = '<a href="https://thedocs.worldbank.org/en/doc/abc-0050012026/related/CMO-Historical-Data-Monthly.xlsx">XLS</a> <a href="https://thedocs.worldbank.org/en/doc/abc-0050012026/related/CMO-Historical-Data-Annual.xlsx">Annual</a>';
  assert.deepEqual(pink.discoverUrls(html), ['https://thedocs.worldbank.org/en/doc/abc-0050012026/related/CMO-Historical-Data-Monthly.xlsx']);
  assert.deepEqual(pink.discoverUrls('<p>no link</p>'), []);
});

/* ---------- ECB ---------- */

test('ecb: csv with quoted commas and Windows line ends', () => {
  const rows = ecb.parseCsv('A,B\r\n1,"x, ""y"""\r\n2,z\r\n');
  assert.deepEqual(rows, [{ A: '1', B: 'x, "y"' }, { A: '2', B: 'z' }]);
  rejects(() => ecb.parseCsv('A,B\n1,"open\n'), /quoted field/);
  rejects(() => ecb.parseCsv('A,B\n1,2,3\n'), /cells/);
});

test('ecb: the fixture becomes a dataset with the published values', () => {
  const dataset = ecbDataset();
  assert.equal(dataset.dataAsOf, '2026-10-02');
  assert.equal(dataset.dates.length, 10);
  const usd = dataset.series.find((item) => item.id === 'USD');
  const gbp = dataset.series.find((item) => item.id === 'GBP');
  const pln = dataset.series.find((item) => item.id === 'PLN');
  assert.equal(usd.values.at(-1), 1.1225);
  assert.equal(gbp.values.at(-1), 0.85033);
  assert.equal(pln.values.at(-1), 4.3775);
  assert.deepEqual([usd.decimals, gbp.decimals, pln.decimals], [4, 5, 4]);
  assert.equal(usd.key, 'EXR.D.USD.EUR.SP00.A');
  assert.equal(usd.name, 'US dollar/Euro ECB reference exchange rate');
  ecb.validateDataset(dataset, null, { now: NOW }, ECB_TEST);
  assert.deepEqual(validateSchema(dataset, SCHEMAS.daily), []);
});

test('ecb: bad rows are refused', () => {
  const lines = ECB_CSV.trim().split('\n');
  const edit = (from, to) => ECB_CSV.replace(from, to);
  const usdRow = lines.find((line) => line.startsWith('EXR.D.USD') && line.includes('2026-10-02'));
  rejects(() => ecbDataset(edit(usdRow, usdRow.replace(',1.1225,', ',,'))), /Bad value/);
  rejects(() => ecbDataset(edit(usdRow, usdRow.replace(',1.1225,', ',NaN,'))), /Bad value/);
  rejects(() => ecbDataset(edit(usdRow, usdRow.replace(',1.1225,A,', ',1.1225,E,'))), /Status "E"/);
  rejects(() => ecbDataset(edit(usdRow, usdRow.replace('2026-10-02', '2026-13-02'))), /Bad date/);
  rejects(() => ecbDataset(edit(usdRow, usdRow.replace('EXR.D.USD', 'EXR.D.JPY'))), /Unexpected series/);
  rejects(() => ecbDataset(lines.filter((line) => !line.startsWith('EXR.D.PLN')).join('\n')), /PLN.*missing/);
  rejects(() => ecbDataset(lines.filter((line) => line !== usdRow).join('\n')), /different dates/);
  rejects(() => ecbDataset(ECB_CSV.replace('OBS_VALUE', 'VALUE')), /OBS_VALUE is missing/);
});

test('ecb: sanity rules', () => {
  const lastUsd = (value) => {
    const dataset = ecbDataset();
    dataset.series[0].values[9] = value;
    return dataset;
  };
  assert.equal(ecbDataset().series[0].id, 'USD');
  rejects(() => ecb.validateDataset(lastUsd(11.225), null, { now: NOW }, ECB_TEST), /outside the sane range/);
  rejects(() => ecb.validateDataset(lastUsd(1.3), null, { now: NOW }, ECB_TEST), /jump from/);
  rejects(() => ecb.validateDataset(lastUsd(-1), null, { now: NOW }, ECB_TEST), /sane range/);
  const weekend = ecbDataset();
  weekend.dates[9] = '2026-10-03';
  weekend.dataAsOf = '2026-10-03';
  rejects(() => ecb.validateDataset(weekend, null, { now: NOW }, ECB_TEST), /weekend/);
  const backwards = ecbDataset();
  backwards.dates[5] = backwards.dates[4];
  rejects(() => ecb.validateDataset(backwards, null, { now: NOW }, ECB_TEST), /not increasing/);
  const gap = ecbDataset();
  gap.dates[5] = '2026-09-10';
  gap.dates[4] = '2026-09-09';
  gap.dates[3] = '2026-09-08';
  gap.dates[2] = '2026-09-07';
  gap.dates[1] = '2026-09-04';
  gap.dates[0] = '2026-09-03';
  rejects(() => ecb.validateDataset(gap, null, { now: NOW }, ECB_TEST), /gap of/);
  rejects(() => ecb.validateDataset(ecbDataset(), null, { now: new Date('2026-10-20T00:00:00Z') }, ECB_TEST), /days old/);
  const derived = ecbDataset();
  derived.series[0].key = 'EXR.D.GBP.USD.SP00.A';
  rejects(() => ecb.validateDataset(derived, null, { now: NOW }, ECB_TEST), /not a published ECB key/);
  assert.ok(validateSchema(derived, SCHEMAS.daily).length > 0);
});

test('ecb: a value never has more decimals than the ECB publishes', () => {
  const dataset = ecbDataset();
  assert.deepEqual(dataset.series.map((item) => item.decimals), [4, 5, 4]);
  ecb.validateDataset(dataset, null, { now: NOW }, ECB_TEST);
  dataset.series[1].decimals = 2;
  rejects(() => ecb.validateDataset(dataset, null, { now: NOW }, ECB_TEST), /more decimals than the 2/);
  const fine = ecbDataset();
  fine.series[0].decimals = 9;
  assert.ok(validateSchema(fine, SCHEMAS.daily).length > 0);
});

test('ecb: comparison with the stored file and with the daily file', () => {
  const stored = ecbDataset();
  ecb.validateDataset(ecbDataset(), stored, { now: NOW }, ECB_TEST);
  const revised = ecbDataset();
  revised.series[1].values[3] += 0.0001;
  rejects(() => ecb.validateDataset(revised, stored, { now: NOW }, ECB_TEST), /differ from the stored ones/);
  ecb.validateDataset(revised, stored, { now: NOW, acceptRevisions: true }, ECB_TEST);
  const ahead = ecbDataset();
  const behind = copy(ahead);
  behind.dataAsOf = '2026-10-05';
  rejects(() => ecb.validateDataset(ahead, behind, { now: NOW }, ECB_TEST), /moved back/);

  const daily = ecb.parseDailyXml(ECB_XML);
  assert.equal(daily.date, '2026-10-02');
  assert.equal(daily.rates.USD, '1.1225');
  assert.deepEqual(ecb.crossCheck(ecbDataset(), daily), { compared: true, note: null });
  const wrong = copy(daily);
  wrong.rates.PLN = '4.4000';
  rejects(() => ecb.crossCheck(ecbDataset(), wrong), /differs from the daily file/);
  assert.equal(ecb.crossCheck(ecbDataset(), { ...daily, date: '2026-10-01' }).compared, false);
  rejects(() => ecb.parseDailyXml('<html>maintenance</html>'), /no dated Cube/);
});

/* ---------- JSON helpers ---------- */

test('json: arrays of values stay on one line and the text reads back', () => {
  const text = jsonFile({ a: [1, 2, null], b: { c: 'x' }, d: [{ e: 1 }], f: [] });
  assert.equal(text, '{\n  "a": [1, 2, null],\n  "b": {\n    "c": "x"\n  },\n  "d": [\n    {\n      "e": 1\n    }\n  ],\n  "f": []\n}\n');
  assert.deepEqual(JSON.parse(text), { a: [1, 2, null], b: { c: 'x' }, d: [{ e: 1 }], f: [] });
  assert.equal(toJson('a"b'), '"a\\"b"');
});

test('schema checker: the small subset behaves', () => {
  const schema = { type: 'object', required: ['a'], additionalProperties: false, properties: { a: { type: 'integer', minimum: 1 }, b: { enum: ['x'] }, c: { type: 'array', items: { pattern: '^z$' } } } };
  assert.deepEqual(validateSchema({ a: 1, b: 'x', c: ['z'] }, schema), []);
  assert.equal(validateSchema({}, schema).length, 1);
  assert.equal(validateSchema({ a: 0 }, schema).length, 1);
  assert.equal(validateSchema({ a: 1.5 }, schema).length, 1);
  assert.equal(validateSchema({ a: 1, d: 1 }, schema).length, 1);
  assert.equal(validateSchema({ a: 1, b: 'y' }, schema).length, 1);
  assert.equal(validateSchema({ a: 1, c: ['y'] }, schema).length, 1);
  assert.equal(validateSchema({ a: NaN }, schema).length > 0, true);
});

/* ---------- the whole run, with a pretend network ---------- */

const PAGE = '<a href="https://thedocs.worldbank.org/en/doc/test/related/CMO-Historical-Data-Monthly.xlsx">Monthly</a>';
const XLSX_URL = 'https://thedocs.worldbank.org/en/doc/test/related/CMO-Historical-Data-Monthly.xlsx';

function network(overrides = {}) {
  const calls = [];
  const table = {
    [pink.PAGE_URL]: () => new Response(PAGE, { status: 200 }),
    [XLSX_URL]: () => new Response(workbook(), { status: 200 }),
    [ecb.csvUrl(ECB_TEST)]: () => new Response(ECB_CSV, { status: 200 }),
    [ecb.DAILY_XML_URL]: () => new Response(ECB_XML, { status: 200 }),
    ...overrides,
  };
  const fetchImpl = async (url) => {
    calls.push(url);
    const handler = table[url];
    if (!handler) return new Response('not found', { status: 404 });
    return handler();
  };
  fetchImpl.calls = calls;
  return fetchImpl;
}

const testSources = [
  { ...SOURCES[0], module: { fetchDataset: (c) => pink.fetchDataset({ ...c, config: PINK_TEST }), validateDataset: (d, p, o) => pink.validateDataset(d, p, o, PINK_TEST), ageInDays: pink.ageInDays } },
  { ...SOURCES[1], module: { fetchDataset: (c) => ecb.fetchDataset({ ...c, config: ECB_TEST }), validateDataset: (d, p, o) => ecb.validateDataset(d, p, o, ECB_TEST), ageInDays: ecb.ageInDays } },
];

async function withTempDir(fn) {
  const dir = await mkdtemp(path.join(tmpdir(), 'economy-test-'));
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}
const run = (dir, fetchImpl, extra = {}) => runAll({ dir, fetchImpl, now: NOW, sources: testSources, ...extra });
const read = (dir, name) => readFile(path.join(dir, name), 'utf8');

test('run: first run writes both files and the manifest, the second run changes nothing', async () => {
  await withTempDir(async (dir) => {
    const first = await run(dir, network());
    assert.deepEqual(first.results.map((item) => item.result), ['updated', 'updated']);
    assert.equal(first.manifestChanged, true);
    const before = { pink: await read(dir, 'pink-sheet.json'), ecb: await read(dir, 'ecb-fx.json'), manifest: await read(dir, 'manifest.json') };
    const manifest = JSON.parse(before.manifest);
    assert.equal(manifest.datasets.wb_pink.status, 'ok');
    assert.equal(manifest.datasets.wb_pink.attribution.edition, 'October 2026');
    assert.equal(manifest.datasets.ecb.modified, false);
    assert.equal(manifest.datasets.ecb.attribution.credit, 'Source: ECB statistics.');
    assert.equal(manifest.datasets.wb_pink.source.downloadUrl, XLSX_URL);
    assert.equal(manifest.datasets.wb_pink.checksums.sourceBytes, workbook().length);
    assert.equal(manifest.datasets.ecb.checksums.output, (await import('./lib.mjs')).sha256(before.ecb));
    assert.deepEqual(await checkDirectory({ dir, now: NOW, sources: testSources }), { invalid: [], attention: [] });

    const later = await runAll({ dir, fetchImpl: network(), now: new Date('2026-10-06T06:40:00Z'), sources: testSources });
    assert.deepEqual(later.results.map((item) => item.result), ['unchanged', 'unchanged']);
    assert.equal(later.manifestChanged, false);
    assert.equal(await read(dir, 'pink-sheet.json'), before.pink);
    assert.equal(await read(dir, 'ecb-fx.json'), before.ecb);
    assert.equal(await read(dir, 'manifest.json'), before.manifest);
  });
});

test('run: bad data leaves the previous good files untouched and the manifest records the failure', async () => {
  await withTempDir(async (dir) => {
    await run(dir, network());
    const good = { pink: await read(dir, 'pink-sheet.json'), ecb: await read(dir, 'ecb-fx.json') };
    const badCsv = ECB_CSV.replace('1.1225', '11.225');
    const badBook = workbook((c) => ({ ...c, [cellOf(LAST_ROW, 'B')]: '..' }));
    const bad = network({
      [ecb.csvUrl(ECB_TEST)]: () => new Response(badCsv, { status: 200 }),
      [XLSX_URL]: () => new Response(badBook, { status: 200 }),
    });
    const second = await run(dir, bad);
    assert.deepEqual(second.results.map((item) => item.result), ['failed', 'failed']);
    assert.equal(await read(dir, 'pink-sheet.json'), good.pink);
    assert.equal(await read(dir, 'ecb-fx.json'), good.ecb);
    let manifest = JSON.parse(await read(dir, 'manifest.json'));
    assert.equal(manifest.datasets.ecb.status, 'failed');
    assert.equal(manifest.datasets.ecb.consecutiveFailures, 1);
    assert.match(manifest.datasets.ecb.lastError, /sane range|jump|differs from the daily file/);
    assert.equal(manifest.datasets.ecb.dataAsOf, '2026-10-02');
    assert.equal(manifest.datasets.wb_pink.consecutiveFailures, 1);
    await run(dir, bad);
    manifest = JSON.parse(await read(dir, 'manifest.json'));
    assert.equal(manifest.datasets.ecb.consecutiveFailures, 2);
    const state = await checkDirectory({ dir, now: NOW, sources: testSources });
    assert.deepEqual(state.invalid, []);
    assert.equal(state.attention.length, 2);

    const healed = await run(dir, network());
    assert.deepEqual(healed.results.map((item) => item.result), ['unchanged', 'unchanged']);
    manifest = JSON.parse(await read(dir, 'manifest.json'));
    assert.equal(manifest.datasets.ecb.status, 'ok');
    assert.equal(manifest.datasets.ecb.consecutiveFailures, 0);
    assert.equal(manifest.datasets.ecb.lastError, null);
    assert.deepEqual((await checkDirectory({ dir, now: NOW, sources: testSources })).attention, []);
  });
});

test('run: one source can fail while the other is updated', async () => {
  await withTempDir(async (dir) => {
    await run(dir, network());
    const newer = ECB_CSV.trim().split('\n');
    const header = newer[0];
    const rows = newer.slice(1).map((line) => line.replace('2026-10-02', '2026-10-05'));
    const csv = `${header}\n${rows.join('\n')}\n`;
    const split = network({
      [ecb.csvUrl(ECB_TEST)]: () => new Response(csv, { status: 200 }),
      [XLSX_URL]: () => new Response('server error', { status: 500 }),
      [ecb.DAILY_XML_URL]: () => new Response('down', { status: 503 }),
    });
    const result = await runAll({ dir, fetchImpl: split, now: new Date('2026-10-05T06:40:00Z'), sources: testSources });
    assert.deepEqual(result.results.map((item) => `${item.id}:${item.result}`), ['wb_pink:failed', 'ecb:updated']);
    const stored = JSON.parse(await read(dir, 'ecb-fx.json'));
    assert.equal(stored.dataAsOf, '2026-10-05');
    assert.ok(split.calls.filter((url) => url === XLSX_URL).length >= 2, 'the download was tried again');
  });
});

test('run: a disagreement with the daily file stops the update', async () => {
  await withTempDir(async (dir) => {
    const wrong = ECB_XML.replace("rate='4.3775'", "rate='4.4775'");
    const result = await run(dir, network({ [ecb.DAILY_XML_URL]: () => new Response(wrong, { status: 200 }) }));
    assert.equal(result.results[1].result, 'failed');
    assert.match(result.results[1].message, /differs from the daily file/);
  });
});

test('run: the first run with nothing to fall back on fails without a manifest entry', async () => {
  await withTempDir(async (dir) => {
    const down = network({ [XLSX_URL]: () => new Response('x', { status: 404 }), [pink.FALLBACK_URL]: () => new Response('x', { status: 404 }) });
    const result = await run(dir, down);
    assert.equal(result.results[0].result, 'failed');
    assert.equal(result.results[1].result, 'updated');
    const manifest = JSON.parse(await read(dir, 'manifest.json'));
    assert.deepEqual(Object.keys(manifest.datasets), ['ecb']);
  });
});

test('run: a changed history needs ECONOMY_ACCEPT_REVISIONS', async () => {
  await withTempDir(async (dir) => {
    await run(dir, network());
    const revised = workbook((c) => ({ ...c, [cellOf(12, 'B')]: 99.9 }));
    const net = network({ [XLSX_URL]: () => new Response(revised, { status: 200 }) });
    assert.equal((await run(dir, net)).results[0].result, 'failed');
    assert.equal((await run(dir, net, { acceptRevisions: true })).results[0].result, 'updated');
    const stored = JSON.parse(await read(dir, 'pink-sheet.json'));
    assert.equal(stored.series[0].values[5], 99.9);
  });
});

test('check: damaged or inconsistent files are found', async () => {
  await withTempDir(async (dir) => {
    await run(dir, network());
    const check = () => checkDirectory({ dir, now: NOW, sources: testSources });
    const original = { pink: await read(dir, 'pink-sheet.json'), ecb: await read(dir, 'ecb-fx.json'), manifest: await read(dir, 'manifest.json') };

    await writeFile(path.join(dir, 'ecb-fx.json'), original.ecb.replace('1.1225', '1.1226'));
    assert.match((await check()).invalid.join('\n'), /checksum differs/);
    await writeFile(path.join(dir, 'ecb-fx.json'), original.ecb.slice(0, 400));
    assert.match((await check()).invalid.join('\n'), /not valid JSON|checksum/);
    await writeFile(path.join(dir, 'ecb-fx.json'), original.ecb);

    await writeFile(path.join(dir, 'pink-sheet.json'), original.pink.replace('116.8', 'null'));
    assert.match((await check()).invalid.join('\n'), /checksum differs/);
    await writeFile(path.join(dir, 'pink-sheet.json'), original.pink);

    const forged = JSON.parse(original.manifest);
    forged.datasets.ecb.attribution.credit = 'Rates by Fix Planet';
    await writeFile(path.join(dir, 'manifest.json'), JSON.stringify(forged));
    assert.match((await check()).invalid.join('\n'), /credit line differs/);
    forged.datasets.ecb.attribution.credit = 'Source: ECB statistics.';
    forged.datasets.ecb.modified = true;
    await writeFile(path.join(dir, 'manifest.json'), JSON.stringify(forged));
    assert.match((await check()).invalid.join('\n'), /modified must be false/);
    delete forged.datasets.wb_pink;
    await writeFile(path.join(dir, 'manifest.json'), JSON.stringify(forged));
    assert.match((await check()).invalid.join('\n'), /datasets are ecb/);

    await writeFile(path.join(dir, 'manifest.json'), original.manifest);
    await writeFile(path.join(dir, 'ecb-fx.json.tmp'), 'x');
    assert.match((await check()).invalid.join('\n'), /leftover temporary file/);
    await rm(path.join(dir, 'ecb-fx.json.tmp'));
    await rm(path.join(dir, 'pink-sheet.json'));
    assert.match((await check()).invalid.join('\n'), /cannot be read/);
    await writeFile(path.join(dir, 'pink-sheet.json'), original.pink);

    const stale = await checkDirectory({ dir, now: new Date('2026-10-20T00:00:00Z'), sources: testSources });
    assert.deepEqual(stale.invalid, []);
    assert.match(stale.attention.join('\n'), /ecb: data end 2026-10-02, 18 days old/);
  });
});

test('payload key ignores the retrieval time only', () => {
  const a = pinkDataset();
  const b = copy(a);
  b.retrievedAt = '2026-10-06T06:40:00.000Z';
  assert.equal(payloadKey(a), payloadKey(b));
  b.series[0].values[3] = 5;
  assert.notEqual(payloadKey(a), payloadKey(b));
  assert.equal(payloadKey(null), '');
});

/* ---------- hardening: untrusted links, damaged archives, a crash between two writes ---------- */

test('pink sheet: only World Bank addresses are followed from the page', () => {
  const html = [
    '<a href="https://evil.example.net/x/CMO-Historical-Data-Monthly.xlsx">a</a>',
    '<a href="http://169.254.169.254/latest/CMO-Historical-Data-Monthly.xlsx">b</a>',
    `<a href="${XLSX_URL}">c</a>`,
  ].join('');
  assert.deepEqual(pink.discoverUrls(html), [XLSX_URL]);
  assert.equal(pink.isAllowedWorkbookUrl('https://thedocs.worldbank.org.evil.example/a/CMO-Historical-Data-Monthly.xlsx'), false);
  assert.equal(pink.isAllowedWorkbookUrl('http://thedocs.worldbank.org/a/CMO-Historical-Data-Monthly.xlsx'), false);
});

test('run: a damaged archive is a failed source, not a crash, and the other source still runs', async () => {
  await withTempDir(async (dir) => {
    await run(dir, network());
    const broken = Buffer.from(workbook());
    // Spoil the first bytes of the compressed sheet so that inflate itself throws.
    const sheetAt = broken.indexOf(Buffer.from([0x50, 0x4b, 0x03, 0x04]), broken.indexOf(Buffer.from('xl/worksheets/sheet2.xml')) - 30);
    const dataAt = sheetAt + 30 + 'xl/worksheets/sheet2.xml'.length;
    for (let i = 0; i < 4; i += 1) broken[dataAt + i] = 0xff;
    const out = await run(dir, network({ [XLSX_URL]: () => new Response(broken, { status: 200 }) }));
    assert.deepEqual(out.results.map((item) => item.result), ['failed', 'unchanged']);
    assert.equal(JSON.parse(await read(dir, 'manifest.json')).datasets.wb_pink.status, 'failed');
  });
});

test('run: a manifest left behind by a killed job is repaired by the next run', async () => {
  await withTempDir(async (dir) => {
    await run(dir, network());
    const manifestBefore = await read(dir, 'manifest.json');
    const stored = JSON.parse(await read(dir, 'pink-sheet.json'));
    stored.retrievedAt = '2026-10-01T00:00:00.000Z';
    await writeFile(path.join(dir, 'pink-sheet.json'), jsonFile(stored));
    await writeFile(path.join(dir, 'manifest.json'), manifestBefore);
    assert.ok((await checkDirectory({ dir, now: NOW, sources: testSources })).invalid.length > 0);
    await run(dir, network());
    assert.deepEqual(await checkDirectory({ dir, now: NOW, sources: testSources }), { invalid: [], attention: [] });
  });
});
