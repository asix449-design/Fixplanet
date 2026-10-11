import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { LOCALES } from './schema.mjs';
import { compilePatterns, scanText } from './c17.mjs';
import { composeScaleCaption, formatMeasure, measureMetres, numberMultiset, sameMultiset } from './format.mjs';

const PROSE = ['commonName', 'hook', 'imageAlt', 'what', 'range', 'story', 'when', 'humanRole', 'badgeText', 'statusPill', 'breedName'];
const CJK = /\p{Script=Han}/u;
const COUNT_WORDS = {
  en: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
  ru: ['один', 'одна', 'одно', 'два', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать'],
  pl: ['jeden', 'jedna', 'dwa', 'dwie', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć', 'dziesięć', 'jedenaście', 'dwanaście'],
  lv: ['viens', 'viena', 'divi', 'divas', 'trīs', 'četri', 'pieci', 'piecas', 'seši', 'septiņi', 'astoņi', 'deviņi', 'desmit', 'vienpadsmit', 'divpadsmit'],
};

function push(out, row) {
  out.push({ level: 'fail', count: 1, pattern: '', ...row });
}

function shelfMap(registry) {
  return Object.fromEntries(registry.shelves.map((s) => [s.id, s]));
}

function originalIucn(card) {
  if (!card.iucn) return undefined;
  if (card.iucn.category === 'CR' && card.flags?.possiblyExtinct) return 'CR_PE';
  return card.iucn.category;
}

/** Header read for png, jpeg, and webp. No image dependency. */
export function imageSize(file) {
  const buf = fs.readFileSync(file);
  if (buf.length > 24 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let o = 2;
    while (o + 8 < buf.length) {
      if (buf[o] !== 0xff) break;
      const marker = buf[o + 1];
      if (marker === 0xd8 || marker === 0xd9) { o += 2; continue; }
      const len = buf.readUInt16BE(o + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { h: buf.readUInt16BE(o + 5), w: buf.readUInt16BE(o + 7) };
      }
      o += 2 + len;
    }
  }
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8X') return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
    if (chunk === 'VP8L') {
      const b = buf.readUInt32LE(21);
      return { w: (b & 0x3fff) + 1, h: ((b >> 14) & 0x3fff) + 1 };
    }
    if (chunk === 'VP8 ') {
      return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    }
  }
  return null;
}

function bannedCharCount(text, chars) {
  let n = 0;
  for (const ch of chars) n += text.split(ch).length - 1;
  if (text.includes('**')) n += text.split('**').length - 1;
  const cjk = text.match(CJK);
  if (cjk) n += cjk.length;
  return n;
}

function wholeWord(text, word) {
  const re = new RegExp(`(?<![\\p{L}\\p{N}])${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}])`, 'iu');
  return re.test(text);
}

function latinTokens(text) {
  return text.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || [];
}

function allowedLatin(card, rules) {
  const set = new Set();
  const add = (s) => { for (const w of latinTokens(String(s))) set.add(w.toLowerCase()); };
  add(card.scientificName || '');
  if (card.taxon) add(`${card.taxon.class || ''} ${card.taxon.order || ''} ${card.taxon.family || ''}`);
  for (const phrase of rules.latinAllowlist || []) add(phrase);
  return set;
}

function publicStrings(card, copy) {
  /** @type {{ field: string, text: string, kind: 'prose' | 'source' | 'scale' }[]} */
  const rows = [];
  const add = (field, text, kind) => { if (text != null && text !== '') rows.push({ field, text: String(text), kind }); };
  for (const field of PROSE) add(field, copy[field], 'prose');
  add('sourcesNote', copy.sourcesNote, 'source');
  add('image.caption', copy.image?.caption, 'prose');
  add('image.credit', copy.image?.credit, 'source');
  add('image.licenseLabel', copy.image?.licenseLabel, 'source');
  add('image.filePageLabel', copy.image?.filePageLabel, 'source');
  for (const [i, src] of (copy.sources || []).entries()) add(`sources.${i}.label`, src.label, 'source');
  if (copy.gridSource) add('gridSource.label', copy.gridSource.label, 'source');
  if (copy.scale) {
    add('scale.heightLabel', copy.scale.heightLabel, 'scale');
    add('scale.lengthLabel', copy.scale.lengthLabel, 'scale');
    add('scale.captionExtra', copy.scale.captionExtra, 'scale');
    add('scale.credit', copy.scale.credit, 'source');
    add('scale.changes', copy.scale.changes, 'scale');
    for (const [i, src] of (copy.scale.sources || []).entries()) add(`scale.sources.${i}.label`, src.label, 'source');
  }
  for (const breed of Object.values(copy.breeds || {})) {
    add('breeds.name', breed.name, 'prose');
    add('breeds.text', breed.text, 'prose');
  }
  void card;
  return rows;
}

const C17_FIELDS = new Set([
  ...PROSE, 'sourcesNote', 'image.caption', 'scale.heightLabel', 'scale.lengthLabel', 'scale.captionExtra', 'scale.changes', 'breeds.name', 'breeds.text',
]);

/**
 * C1..C19 over one catalogue (JSON shelves + adapted legacy shelves).
 * Legacy cards are checked. Known legacy violations are removed later by the baseline.
 */
export function checkCatalogue({ registry, rules, fileShelves, legacyShelves, repoRoot }) {
  const findings = [];
  const shelves = shelfMap(registry);
  const patterns = compilePatterns(rules.statusAbbreviations || []);
  const chars = rules.bannedChars || [];
  const allShelves = { ...fileShelves, ...legacyShelves };

  findings.push(...checkLabelPlaceholders(registry));
  findings.push(...checkDuplicateSlugs(fileShelves));

  for (const shelf of registry.shelves) {
    for (const loc of LOCALES) {
      const labels = shelf.labels[loc];
      for (const field of ['name', 'status', 'tile', 'lead', 'back']) {
        if (!labels[field]) continue;
        const text = labels[field];
        const n = bannedCharCount(text, chars);
        if (n) push(findings, { rule: 'C1', slug: shelf.id, locale: loc, field: `labels.${field}`, count: n, message: 'banned character in shelf label' });
        scanBannedWords(findings, rules, shelf.id, loc, `labels.${field}`, text, false);
        if (field === 'lead') checkLead(findings, shelf.id, loc, text);
        if (loc !== 'en') scanC17Field(findings, patterns, shelf.id, loc, `labels.${field}`, text);
      }
    }
    if (shelf.shelfSource) {
      for (const loc of LOCALES) {
        const text = shelf.shelfSource.label[loc];
        const n = bannedCharCount(text, chars);
        if (n) push(findings, { rule: 'C1', slug: shelf.id, locale: loc, field: 'shelfSource.label', count: n, message: 'banned character in shelf source' });
      }
    }
  }

  for (const shelf of Object.values(allShelves)) {
    for (const card of shelf.meta.cards) {
      checkCard(findings, card, shelf, { shelves, rules, patterns, chars, repoRoot });
    }
  }

  checkRemovedSlugs(findings, allShelves, repoRoot);
  return findings;
}

const PLACEHOLDER_LABELS = new Set(['...', '…', 'tbd']);

/**
 * Fail when the same slug appears twice in one shelf file or across shelf files.
 * Shelf folders are the catalogue; legacy adaptation is not part of this scan.
 */
export function checkDuplicateSlugs(fileShelves) {
  const findings = [];
  const seen = new Map();
  for (const [dir, shelf] of Object.entries(fileShelves || {})) {
    const shelfId = shelf.meta?.shelf || dir;
    for (const card of shelf.meta?.cards || []) {
      const prev = seen.get(card.slug);
      if (prev) {
        push(findings, {
          rule: 'C21',
          slug: card.slug,
          locale: '*',
          field: 'slug',
          message: `duplicate slug in ${prev} and ${shelfId}`,
        });
      } else {
        seen.set(card.slug, shelfId);
      }
    }
  }
  return findings;
}

/**
 * Fail when any registry label is a placeholder or blank.
 * Covers hub.labels, scaleLabels, shelf labels, and shelfSource.label.
 */
export function checkLabelPlaceholders(registry) {
  const findings = [];
  const scan = (text, slug, locale, field) => {
    if (typeof text !== 'string') return;
    const trimmed = text.trim();
    if (trimmed === '' || PLACEHOLDER_LABELS.has(trimmed.toLowerCase())) {
      push(findings, {
        rule: 'C20',
        slug,
        locale,
        field,
        message: `placeholder label ${JSON.stringify(text)}`,
      });
    }
  };
  const walk = (node, slug, locale, field) => {
    if (typeof node === 'string') {
      scan(node, slug, locale, field);
      return;
    }
    if (!node || typeof node !== 'object') return;
    for (const [key, value] of Object.entries(node)) {
      const loc = key === 'en' || key === 'ru' || key === 'pl' || key === 'lv' ? key : locale;
      walk(value, slug, loc, `${field}.${key}`);
    }
  };
  if (registry.hub?.labels) walk(registry.hub.labels, 'hub', '*', 'hub.labels');
  if (registry.scaleLabels) walk(registry.scaleLabels, '*', '*', 'scaleLabels');
  for (const shelf of registry.shelves || []) {
    if (shelf.labels) walk(shelf.labels, shelf.id, '*', 'labels');
    if (shelf.shelfSource?.label) walk(shelf.shelfSource.label, shelf.id, '*', 'shelfSource.label');
  }
  return findings;
}

function checkLead(findings, slug, loc, text) {
  if (text.includes('{count}')) return;
  if (/\d/.test(text)) {
    push(findings, { rule: 'C11', slug, locale: loc, field: 'labels.lead', message: 'lead hard-codes a digit' });
    return;
  }
  const words = COUNT_WORDS[loc] || [];
  for (const word of words) {
    if (wholeWord(text, word)) {
      push(findings, { rule: 'C11', slug, locale: loc, field: 'labels.lead', message: `lead hard-codes "${word}"` });
      return;
    }
  }
}

function scanBannedWords(findings, rules, slug, loc, field, text, scale) {
  for (const word of rules.bannedWords?.global || []) {
    if (wholeWord(text, word)) push(findings, { rule: 'C2', slug, locale: loc, field, message: `banned word ${word}` });
  }
  if (scale) {
    for (const word of rules.bannedWords?.scaleOnly || []) {
      if (wholeWord(text, word)) push(findings, { rule: 'C2', slug, locale: loc, field, message: `scale banned word ${word}` });
    }
  }
}

function scanC17Field(findings, patterns, slug, loc, field, text) {
  for (const hit of scanText(text, patterns)) {
    findings.push({
      level: hit.level,
      rule: 'C17',
      slug,
      locale: loc,
      field,
      pattern: hit.id,
      count: hit.count,
      message: `${hit.id} x${hit.count}`,
    });
  }
}

function checkCard(findings, card, shelf, ctx) {
  const { rules, patterns, chars, shelves, repoRoot } = ctx;
  const legacy = !!card.provenance?.migratedFrom;
  const creditChars = bannedCharCount(card.image?.credit || '', chars);
  if (creditChars) push(findings, { rule: 'C1', slug: card.slug, locale: '*', field: 'image.credit', count: creditChars, message: 'banned character in image credit' });
  for (const src of card.primarySources || []) {
    const n = bannedCharCount(src.label, chars);
    if (n) push(findings, { rule: 'C1', slug: card.slug, locale: '*', field: 'primarySources.label', count: n, message: 'banned character in primary source label' });
    checkUrl(findings, card.slug, '*', 'primarySources.url', src.url);
  }
  checkImage(findings, card, rules, repoRoot);
  checkC16(findings, card, shelves);
  checkC18(findings, card, shelf, shelves);
  checkC19(findings, card, rules);
  checkC14(findings, card);
  checkC15(findings, card);

  const byLoc = {};
  for (const loc of LOCALES) byLoc[loc] = shelf.copy[loc]?.cards?.[card.slug];
  const urlSets = {};
  for (const loc of LOCALES) {
    const copy = byLoc[loc];
    if (!copy) continue;
    for (const row of publicStrings(card, copy)) {
      if (!row.text.trim()) push(findings, { rule: 'C12', slug: card.slug, locale: loc, field: row.field, message: 'empty public string' });
      if (row.text !== row.text.trim()) push(findings, { rule: 'C12', slug: card.slug, locale: loc, field: row.field, message: 'leading or trailing whitespace' });
      const n = bannedCharCount(row.text, chars);
      if (n) push(findings, { rule: 'C1', slug: card.slug, locale: loc, field: row.field, count: n, message: 'banned character' });
      scanBannedWords(findings, rules, card.slug, loc, row.field, row.text, row.kind === 'scale');
      if (loc !== 'en' && C17_FIELDS.has(row.field)) scanC17Field(findings, patterns, card.slug, loc, row.field, row.text);
      if (loc !== 'en') checkScript(findings, card, rules, loc, row);
      if (loc !== 'en' && row.kind === 'prose') checkStopwords(findings, rules, card.slug, loc, row.field, row.text);
    }
    if (copy.scale?.captionExtra && !/[.!?…]$/.test(copy.scale.captionExtra.trim())) {
      push(findings, { rule: 'C12', slug: card.slug, locale: loc, field: 'scale.captionExtra', message: 'captionExtra must end with a full stop' });
    }
    const urls = (copy.sources || []).map((s) => s.url).sort();
    urlSets[loc] = urls.join('\n');
    for (const src of copy.sources || []) checkUrl(findings, card.slug, loc, 'sources.url', src.url);
    if (copy.gridSource) checkUrl(findings, card.slug, loc, 'gridSource.url', copy.gridSource.url);
    checkC6(findings, card, copy, loc, rules);
  }
  const present = LOCALES.filter((l) => urlSets[l] != null);
  if (present.length > 1) {
    const first = urlSets[present[0]];
    for (const loc of present.slice(1)) {
      if (urlSets[loc] !== first) {
        push(findings, { rule: 'C10', slug: card.slug, locale: loc, field: 'sources', message: 'source URL set differs across locales' });
      }
    }
  }
  checkC5(findings, card, byLoc);
  if (legacy) checkLegacyRendered(findings, card, byLoc, patterns);
  void legacy;
}

function checkScript(findings, card, rules, loc, row) {
  if (loc === 'ru') {
    if (row.kind === 'prose' || row.kind === 'scale') {
      const allow = allowedLatin(card, rules);
      const stray = latinTokens(row.text).filter((w) => !allow.has(w.toLowerCase()));
      if (stray.length) {
        push(findings, { rule: 'C3', slug: card.slug, locale: loc, field: row.field, count: stray.length, message: `Latin: ${stray.slice(0, 4).join(', ')}` });
      }
    } else if (!/[\u0400-\u04FF]/.test(row.text)) {
      push(findings, { rule: 'C3', slug: card.slug, locale: loc, field: row.field, message: 'RU source field has no Cyrillic word' });
    }
  } else if (/[\u0400-\u04FF]/.test(row.text)) {
    push(findings, { rule: 'C3', slug: card.slug, locale: loc, field: row.field, message: 'Cyrillic in PL/LV' });
  }
}

function checkStopwords(findings, rules, slug, loc, field, text) {
  for (const word of rules.englishStopwords || []) {
    if (wholeWord(text, word)) {
      push(findings, { rule: 'C4', slug, locale: loc, field, message: `English stopword ${word}` });
      return;
    }
  }
}

function checkC5(findings, card, byLoc) {
  const fields = new Set();
  for (const loc of LOCALES) {
    if (!byLoc[loc]) continue;
    for (const row of publicStrings(card, byLoc[loc])) if (row.kind === 'prose') fields.add(row.field);
  }
  for (const field of fields) {
    const sets = LOCALES.filter((l) => byLoc[l]).map((l) => {
      const row = publicStrings(card, byLoc[l]).find((r) => r.field === field);
      return numberMultiset(row?.text || '');
    });
    const first = sets[0];
    if (sets.some((s) => !sameMultiset(s, first))) {
      push(findings, { rule: 'C5', slug: card.slug, locale: '*', field, message: 'number multiset differs across locales' });
    }
  }
}

function checkUrl(findings, slug, loc, field, url) {
  if (!url) return;
  if (!url.startsWith('https://')) push(findings, { rule: 'C10', slug, locale: loc, field, message: 'URL is not https' });
  if (/britannica\.com/i.test(url)) push(findings, { rule: 'C10', slug, locale: loc, field, message: 'britannica.com is blocked' });
}

function checkImage(findings, card, rules, repoRoot) {
  const image = card.image;
  const file = path.join(repoRoot, 'public/images/wildlife', image.file);
  const base = image.file.replace(/\.[^.]+$/, '');
  if (base !== card.slug) push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'image.file', message: 'image basename must equal slug' });
  if (!fs.existsSync(file)) {
    push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'image.file', message: 'card image missing' });
  } else if (image.width || image.height) {
    const size = imageSize(file);
    if (!size || size.w !== image.width || size.h !== image.height) {
      push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'image', message: `pixel size ${size ? `${size.w}x${size.h}` : 'unreadable'} != ${image.width}x${image.height}` });
    }
  }
  const licenses = rules.licences || { ok: [], warn: [] };
  const license = image.license || '';
  if (!license) {
    if (image.kind !== 'illustration' || image.credit !== 'Fix Planet illustration' || image.sourceUrl !== '') {
      push(findings, { rule: 'C8', slug: card.slug, locale: '*', field: 'image.license', message: 'empty licence only for a Fix Planet illustration' });
    }
  } else if (licenses.warn?.includes(license)) {
    findings.push({ level: 'warn', rule: 'C8', slug: card.slug, locale: '*', field: 'image.license', pattern: '', count: 1, message: `licence ${license} is legacy-warn` });
  } else if (!licenses.ok?.includes(license)) {
    push(findings, { rule: 'C8', slug: card.slug, locale: '*', field: 'image.license', message: `licence not allowed: ${license}` });
  }
  if (/^CC /i.test(license)) {
    if (image.sourceUrl && !image.sourceUrl.startsWith('https://commons.wikimedia.org/')) {
      push(findings, { rule: 'C8', slug: card.slug, locale: '*', field: 'image.sourceUrl', message: 'CC image needs a commons sourceUrl' });
    }
    if (!card.provenance?.migratedFrom && !image.licenseUrl) {
      push(findings, { rule: 'C8', slug: card.slug, locale: '*', field: 'image.licenseUrl', message: 'new CC image needs licenseUrl' });
    }
  }
  if (card.scale?.image?.webp) {
    const cut = path.join(repoRoot, 'public', card.scale.image.webp.replace(/^\//, ''));
    if (!fs.existsSync(cut)) push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'scale.image.webp', message: 'cutout missing' });
    else {
      const size = imageSize(cut);
      if (!size || size.w !== card.scale.image.pxW || size.h !== card.scale.image.pxH) {
        push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'scale.image', message: 'cutout pixel size mismatch' });
      }
      const legacy = !!card.provenance?.migratedFrom;
      const maxSide = rules.cutout?.maxLongSidePx ?? 1200;
      const maxKB = rules.cutout?.maxKB ?? 120;
      if (!legacy) {
        if (card.scale.image.png) push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'scale.image.png', message: 'new cutout png must be null' });
        if (size && Math.max(size.w, size.h) > maxSide) push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'scale.image', message: 'cutout long side over the limit' });
        const kb = fs.statSync(cut).size / 1024;
        if (kb > maxKB) push(findings, { rule: 'C7', slug: card.slug, locale: '*', field: 'scale.image.webp', message: 'cutout over the size limit' });
      }
    }
  }
}

export function c16Issues(card, shelves) {
  const issues = [];
  if (card.provenance?.migratedFrom) return issues;
  const shelf = shelves[card.primaryShelf];
  const i = card.iucn;
  const iucnOk = !!(i && i.category !== 'NE' && i.verifiedVia && i.checkedAt && i.assessmentUrl);
  const notAssessed = !i || (i.category === 'NE' && i.verifiedVia === 'gbif' && !!i.evidence);
  const otherOk = (card.otherStatus || []).length > 0 && card.otherStatus.every((o) => o.value && o.recordUrl && o.checkedAt);
  const periodOk = !!card.extinctionPeriod?.sourceUrl && !!card.extinctionPeriod?.quote && !!card.extinctionPeriod?.checkedAt && !!card.extinctionPeriod?.humanLink?.sourceUrl && !!card.extinctionPeriod?.humanLink?.quote;
  if (shelf?.statusRequired) {
    if (iucnOk) { /* status pill */ }
    else if (notAssessed && otherOk) { /* other-system pill */ }
    else if (card.primaryShelf === 'extinct' && !i && periodOk) { /* extinction period */ }
    else issues.push('status shelf needs a verified IUCN category, a verified otherStatus, or a sourced extinction period');
  } else if (i) {
    if (i.category === 'NE') {
      if (i.verifiedVia !== 'gbif' || !i.evidence) issues.push('NE needs GBIF evidence');
    } else if (!iucnOk) issues.push('stated status is unverified');
  }
  if (card.extinctionPeriod && card.primaryShelf !== 'extinct') issues.push('extinctionPeriod only on Extinct');
  if (card.extinctionPeriod && i && i.category !== 'NE') issues.push('extinctionPeriod cannot sit beside an IUCN category');
  if (i?.iucnTaxonId && i.assessmentUrl && !i.assessmentUrl.includes(`/species/${i.iucnTaxonId}/`)) issues.push('assessmentUrl taxon id mismatch');
  if (i && i.scope && i.scope !== 'global' && i.verifiedVia && i.verifiedVia !== 'iucn') issues.push('regional scope needs verifiedVia iucn');
  if ((card.flags?.possiblyExtinct || card.flags?.possiblyExtinctInWild) && i?.verifiedVia && i.verifiedVia !== 'iucn') issues.push('Possibly Extinct needs verifiedVia iucn');
  if (card.extinctionPeriod?.basis === 'radiocarbon') {
    issues.push('WARN radiocarbon age must be calibrated or reworded');
  }
  for (const tag of card.tags || []) {
    if (shelves[tag]?.statusRequired && !(iucnOk || (notAssessed && otherOk))) issues.push(`drop tag ${tag}`);
  }
  return issues;
}

function checkC16(findings, card, shelves) {
  for (const message of c16Issues(card, shelves)) {
    const level = message.startsWith('WARN') ? 'warn' : 'fail';
    findings.push({ level, rule: 'C16', slug: card.slug, locale: '*', field: 'iucn', pattern: '', count: 1, message });
  }
}

function checkC18(findings, card, shelf, shelves) {
  const display = shelves[card.primaryShelf]?.statusDisplay || 'default';
  if (display !== 'none') return;
  for (const loc of LOCALES) {
    const copy = shelf.copy[loc]?.cards?.[card.slug];
    if (copy?.statusPill) push(findings, { rule: 'C18', slug: card.slug, locale: loc, field: 'statusPill', message: 'statusDisplay none forbids statusPill' });
  }
}

function bodyLengthMethods(rules) {
  return Object.values(rules.measureMethods || {}).filter((method) => method && method.basis && method.lengthLabel);
}

function methodApplies(lengthBasis, method) {
  const basis = String(lengthBasis || '').toLowerCase();
  const needle = String(method.basis || '').toLowerCase();
  if (!basis || !needle) return false;
  if (basis.includes(needle)) return true;
  return needle.includes('trunk') && basis.includes('without the trunk and tusks');
}

function checkC19(findings, card, rules) {
  if (!card.scale || card.scale.show !== true) return;
  const lengthBasis = card.size?.length?.basis || '';
  for (const method of bodyLengthMethods(rules)) {
    if (!methodApplies(lengthBasis, method)) continue;
    const required = method.scaleBasisRequired || 'height';
    if (card.scale.basis !== required) {
      push(findings, { rule: 'C19', slug: card.slug, locale: '*', field: 'scale.basis', message: `body-length measure requires scale.basis ${required}` });
    }
  }
}

function checkC14(findings, card) {
  for (const metric of ['height', 'length', 'wingspan', 'mass']) {
    const value = card.size?.[metric];
    if (!value || value.kind !== 'derived') continue;
    if (!value.derivation?.note?.trim()) push(findings, { rule: 'C14', slug: card.slug, locale: '*', field: `size.${metric}`, message: 'derived figure needs a note' });
    if (!['body-proportion', 'unit-conversion'].includes(value.derivation?.method)) {
      push(findings, { rule: 'C14', slug: card.slug, locale: '*', field: `size.${metric}`, message: 'derivation method must be published' });
    }
    if (!(value.sources || []).some((s) => s.use === 'derived')) {
      push(findings, { rule: 'C14', slug: card.slug, locale: '*', field: `size.${metric}`, message: 'derived figure needs use:derived' });
    }
  }
}

function checkC15(findings, card) {
  if (card.primaryShelfOverride?.reason) return;
  const cat = card.iucn?.category;
  const extinctish = cat === 'EX' || cat === 'EW' || card.flags?.possiblyExtinct || card.flags?.possiblyExtinctInWild;
  const threatened = cat === 'CR' || cat === 'EN' || cat === 'VU';
  const warn = (message) => findings.push({ level: 'warn', rule: 'C15', slug: card.slug, locale: '*', field: 'primaryShelf', pattern: '', count: 1, message });
  if (card.group === 'insect') {
    if (card.primaryShelf !== 'insects') warn('insect primary shelf is Insects');
    if (extinctish && !(card.tags || []).includes('extinct')) warn('insect missing extinct tag');
    if ((cat === 'CR' || cat === 'EN') && !(card.tags || []).includes('endangered')) warn('insect missing endangered tag');
    return;
  }
  if (extinctish && card.primaryShelf !== 'extinct') warn('EX/EW/PE primary shelf is Extinct');
  if (threatened && card.primaryShelf !== 'endangered' && card.primaryShelf !== 'surviving') warn('CR/EN/VU primary shelf is a status shelf');
  if (card.group === 'bird' && (extinctish || threatened) && !(card.tags || []).includes('birds')) warn('missing birds tag');
  if (!extinctish && !threatened && card.group === 'bird' && card.primaryShelf !== 'birds') warn('bird primary shelf is Birds');
  if (!extinctish && !threatened && (card.domestication || card.rank === 'breed') && card.primaryShelf !== 'domesticates') {
    warn('domesticated primary shelf is Domesticates');
  }
}

function checkC6(findings, card, copy, loc, rules) {
  if (!copy.scale || !card.size) return;
  const height = measureMetres(card.size.height);
  const length = measureMetres(card.size.length);
  const fmtH = height ? formatMeasure(height, loc, rules.numberFormat) : null;
  const fmtL = length ? formatMeasure(length, loc, rules.numberFormat) : null;
  const caption = composeScaleCaption(copy.scale.heightLabel, fmtH, copy.scale.lengthLabel, fmtL, copy.scale.captionExtra);
  if (height) {
    const shown = fmtH;
    if (shown == null) push(findings, { rule: 'C6', slug: card.slug, locale: loc, field: 'scale', message: 'height displays as 0' });
    else if (caption && !caption.includes(shown)) push(findings, { rule: 'C6', slug: card.slug, locale: loc, field: 'scale', message: `caption missing ${shown}` });
  }
  if (length) {
    const shown = fmtL;
    if (shown == null) push(findings, { rule: 'C6', slug: card.slug, locale: loc, field: 'scale', message: 'length displays as 0' });
    else if (caption && !caption.includes(shown)) push(findings, { rule: 'C6', slug: card.slug, locale: loc, field: 'scale', message: `caption missing ${shown}` });
  }
  const lengthBasis = card.size.length?.basis || '';
  for (const method of bodyLengthMethods(rules)) {
    if (!methodApplies(lengthBasis, method)) continue;
    const label = method.lengthLabel?.[loc];
    if (!label || !caption.toLowerCase().includes(label.toLowerCase())) {
      push(findings, { rule: 'C6', slug: card.slug, locale: loc, field: 'scale.lengthLabel', message: 'caption must spell the body-length label' });
    }
  }
}

function checkLegacyRendered(findings, card, byLoc, patterns) {
  const code = originalIucn(card);
  if (!code) return;
  const il = { ru: 'МСОП', pl: 'IUCN', lv: 'IUCN' };
  for (const loc of ['ru', 'pl', 'lv']) {
    const copy = byLoc[loc];
    if (!copy) continue;
    if (!copy.statusPill) {
      scanC17Field(findings, patterns, card.slug, loc, 'render.detailIucnPill', `${il[loc]}: ${code} · name`);
    }
    if (code === 'EW' || card.flags?.functionallyExtinct) {
      scanC17Field(findings, patterns, card.slug, loc, 'render.cardIucnTag', code);
    }
  }
}

function checkRemovedSlugs(findings, allShelves, repoRoot) {
  let previous = null;
  try {
    const base = execFileSync('git', ['merge-base', 'HEAD', 'origin/main'], { cwd: repoRoot, encoding: 'utf8' }).trim();
    const text = execFileSync('git', ['show', `${base}:src/data/wildlife.ts`], { cwd: repoRoot, encoding: 'utf8' });
    previous = [...text.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  } catch {
    return;
  }
  const now = new Set();
  for (const shelf of Object.values(allShelves)) for (const card of shelf.meta.cards) now.add(card.slug);
  let redirects = '';
  try {
    redirects = fs.readFileSync(path.join(repoRoot, 'astro.config.mjs'), 'utf8');
  } catch { /* missing config fails closed below */ }
  for (const slug of previous) {
    if (now.has(slug)) continue;
    if (!redirects.includes(`/wildlife/${slug}`)) {
      push(findings, { rule: 'C13', slug, locale: '*', field: 'slug', message: 'removed slug needs a redirect' });
    }
  }
}

export function checkCredits(fileShelves, repoRoot) {
  const findings = [];
  const creditsPath = path.join(repoRoot, 'public/images/wildlife/credits.json');
  if (!fs.existsSync(creditsPath)) return findings;
  const credits = JSON.parse(fs.readFileSync(creditsPath, 'utf8'));
  const bySlug = new Map(credits.map((row) => [row.slug, row]));
  for (const shelf of Object.values(fileShelves)) {
    for (const card of shelf.meta.cards) {
      const row = bySlug.get(card.slug);
      if (!row || row.file !== card.image.file || row.license !== card.image.license || row.sourceUrl !== card.image.sourceUrl) {
        push(findings, { rule: 'C9', slug: card.slug, locale: '*', field: 'credits', message: 'credits.json is out of sync with meta' });
      }
    }
  }
  return findings;
}
