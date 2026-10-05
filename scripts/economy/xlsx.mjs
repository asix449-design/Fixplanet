/**
 * A small reader for .xlsx workbooks, with no dependencies.
 * An .xlsx file is a zip archive of XML files. This reads the zip directory,
 * inflates the parts it needs and returns the cells of one sheet as text.
 * It reads values only (numbers and text); formulas, styles and charts are ignored.
 */
import { inflateRawSync } from 'node:zlib';
import { fail } from './lib.mjs';

const MAX_PART_BYTES = 40_000_000;

function readZipDirectory(buffer) {
  const minEnd = Math.max(0, buffer.length - 66_000);
  let end = -1;
  for (let i = buffer.length - 22; i >= minEnd; i -= 1) {
    if (buffer.readUInt32LE(i) === 0x06054b50) {
      end = i;
      break;
    }
  }
  if (end < 0) fail('Not a zip archive (no end of directory record); the download may be cut short');
  const count = buffer.readUInt16LE(end + 10);
  let offset = buffer.readUInt32LE(end + 16);
  const entries = new Map();
  for (let i = 0; i < count; i += 1) {
    if (offset + 46 > buffer.length || buffer.readUInt32LE(offset) !== 0x02014b50) fail('Broken zip directory');
    const method = buffer.readUInt16LE(offset + 10);
    const compressedSize = buffer.readUInt32LE(offset + 20);
    const size = buffer.readUInt32LE(offset + 24);
    const nameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const localOffset = buffer.readUInt32LE(offset + 42);
    const name = buffer.toString('utf8', offset + 46, offset + 46 + nameLength);
    entries.set(name, { method, compressedSize, size, localOffset });
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

function readPart(buffer, entries, name) {
  const entry = entries.get(name);
  if (!entry) fail(`Workbook part missing: ${name}`);
  if (entry.size > MAX_PART_BYTES) fail(`Workbook part too large: ${name}`);
  const at = entry.localOffset;
  if (at + 30 > buffer.length || buffer.readUInt32LE(at) !== 0x04034b50) fail(`Broken zip entry: ${name}`);
  const start = at + 30 + buffer.readUInt16LE(at + 26) + buffer.readUInt16LE(at + 28);
  const raw = buffer.subarray(start, start + entry.compressedSize);
  if (raw.length !== entry.compressedSize) fail(`Zip entry cut short: ${name}`);
  let data;
  if (entry.method === 0) data = raw;
  else if (entry.method === 8) {
    try {
      data = inflateRawSync(raw, { maxOutputLength: MAX_PART_BYTES });
    } catch (error) {
      fail(`Workbook part cannot be unpacked: ${name} (${error.code || error.message})`);
    }
  }
  else fail(`Unsupported zip method ${entry.method} in ${name}`);
  return data.toString('utf8');
}

function decodeXml(text) {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function textOf(xml) {
  let out = '';
  for (const match of xml.matchAll(/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/g)) out += match[1];
  return decodeXml(out);
}

function sharedStrings(xml) {
  if (!xml) return [];
  return [...xml.matchAll(/<si(?:\s[^>]*)?>([\s\S]*?)<\/si>/g)].map((match) => textOf(match[1]));
}

/** "AB" to 27, so the columns of a row can be addressed by number. */
export function columnNumber(letters) {
  let n = 0;
  for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n;
}

/**
 * Returns { sheets: [names], rows: Map(rowNumber -> Map(columnNumber -> { text, number|null, type })) }
 * for the sheet called sheetName.
 */
export function readSheet(buffer, sheetName) {
  const entries = readZipDirectory(buffer);
  const workbook = readPart(buffer, entries, 'xl/workbook.xml');
  const rels = readPart(buffer, entries, 'xl/_rels/workbook.xml.rels');
  const sheets = [...workbook.matchAll(/<sheet\s[^>]*>/g)].map((match) => {
    const tag = match[0];
    return {
      name: decodeXml((tag.match(/\sname="([^"]*)"/) || [])[1] || ''),
      rid: (tag.match(/\sr:id="([^"]*)"/) || [])[1] || '',
    };
  });
  const sheet = sheets.find((item) => item.name === sheetName);
  if (!sheet) fail(`Sheet "${sheetName}" not found; the workbook has: ${sheets.map((item) => item.name).join(', ')}`);
  let target = null;
  for (const match of rels.matchAll(/<Relationship\s[^>]*>/g)) {
    const tag = match[0];
    if ((tag.match(/\sId="([^"]*)"/) || [])[1] === sheet.rid) target = (tag.match(/\sTarget="([^"]*)"/) || [])[1];
  }
  if (!target) fail(`Sheet "${sheetName}" has no file in the workbook`);
  const path = target.startsWith('/') ? target.slice(1) : `xl/${target}`;
  const strings = sharedStrings(entries.has('xl/sharedStrings.xml') ? readPart(buffer, entries, 'xl/sharedStrings.xml') : '');
  const xml = readPart(buffer, entries, path);

  const rows = new Map();
  for (const rowMatch of xml.matchAll(/<row\s([^>]*?)(?:\/>|>([\s\S]*?)<\/row>)/g)) {
    if (rowMatch[2] === undefined) continue;
    const rowNumber = Number((rowMatch[1].match(/\sr="(\d+)"/) || rowMatch[1].match(/^r="(\d+)"/) || [])[1]);
    if (!Number.isInteger(rowNumber)) continue;
    const cells = new Map();
    for (const cellMatch of rowMatch[2].matchAll(/<c\s([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const attrs = cellMatch[1];
      const body = cellMatch[2];
      if (body === undefined) continue;
      const ref = (attrs.match(/(?:^|\s)r="([A-Z]+)\d+"/) || [])[1];
      if (!ref) continue;
      const type = (attrs.match(/(?:^|\s)t="(\w+)"/) || [])[1] || 'n';
      let text = null;
      if (type === 'inlineStr') {
        text = textOf(body);
      } else {
        const value = (body.match(/<v>([\s\S]*?)<\/v>/) || [])[1];
        if (value === undefined) continue;
        text = type === 's' ? strings[Number(value)] : decodeXml(value);
        if (text === undefined) fail(`Shared string ${value} is missing`);
      }
      const number = type === 'n' && /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/.test(text) ? Number(text) : null;
      cells.set(columnNumber(ref), { text, number, type });
    }
    rows.set(rowNumber, cells);
  }
  return { sheets: sheets.map((item) => item.name), rows };
}
