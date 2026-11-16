import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { locales, type Locale } from '../../i18n/config';

/**
 * Generic value scales. One registry entry per scale, then
 * src/data/value-scales/<id>/meta.json plus en, ru, pl and lv copy.
 * Nature size scales are a separate loader and are not read here.
 */

const DATA_ROOT = path.join(process.cwd(), 'src/data/value-scales');

const chrome: Record<Locale, {
  prev: string;
  next: string;
  hint: string;
  position: string;
  sources: string;
}> = {
  en: {
    prev: 'Previous',
    next: 'Next',
    hint: 'Swipe or press the arrow keys',
    position: '{n} of {total}',
    sources: 'Sources',
  },
  ru: {
    prev: 'Назад',
    next: 'Дальше',
    hint: 'Листайте или нажимайте клавиши со стрелками',
    position: '{n} из {total}',
    sources: 'Источники',
  },
  pl: {
    prev: 'Wstecz',
    next: 'Dalej',
    hint: 'Przesuń palcem lub naciśnij klawisze strzałek',
    position: '{n} z {total}',
    sources: 'Źródła',
  },
  lv: {
    prev: 'Atpakaļ',
    next: 'Tālāk',
    hint: 'Velciet ar pirkstu vai spiediet bulttaustiņus',
    position: '{n} no {total}',
    sources: 'Avoti',
  },
};

type Qualifier = 'about' | 'more_than' | 'up_to' | 'can_be';

const qualifierWords: Record<Locale, Record<Qualifier, string>> = {
  en: { about: 'about', more_than: 'more than', up_to: 'up to', can_be: 'can be' },
  ru: { about: 'около', more_than: 'более', up_to: 'до', can_be: 'может быть' },
  pl: { about: 'około', more_than: 'ponad', up_to: 'nawet o', can_be: 'może być' },
  lv: { about: 'aptuveni', more_than: 'vairāk nekā', up_to: 'līdz pat', can_be: 'var būt' },
};

const rangeWord: Record<Locale, string> = {
  en: 'to',
  ru: 'до',
  pl: 'do',
  lv: 'līdz',
};

function isQualifier(value: string | null): value is Qualifier {
  return value === 'about' || value === 'more_than' || value === 'up_to' || value === 'can_be';
}

const licencePhrases = [
  'Creative Commons Attribution-ShareAlike 4.0',
  'Creative Commons Attribution-ShareAlike 3.0',
  'Creative Commons «Атрибуция, на тех же условиях» 4.0',
  'Creative Commons «Атрибуция, на тех же условиях» 3.0',
  'Creative Commons Uznanie autorstwa na tych samych warunkach 4.0',
  'Creative Commons Uznanie autorstwa na tych samych warunkach 3.0',
  'Creative Commons «Ar autora norādi, tādos pašos noteikumos» 4.0',
  'Creative Commons «Ar autora norādi, tādos pašos noteikumos» 3.0',
  'Creative Commons Attribution-ShareAlike 2.0',
  'Creative Commons Attribution 4.0',
  'Creative Commons Attribution 2.0',
  'Creative Commons «Атрибуция, на тех же условиях» 2.0',
  'Creative Commons «Атрибуция» 4.0',
  'Creative Commons «Атрибуция» 2.0',
  'Creative Commons Uznanie autorstwa na tych samych warunkach 2.0',
  'Creative Commons Uznanie autorstwa 4.0',
  'Creative Commons Uznanie autorstwa 2.0',
  'Creative Commons «Ar autora norādi, tādos pašos noteikumos» 2.0',
  'Creative Commons «Ar autora norādi» 4.0',
  'Creative Commons «Ar autora norādi» 2.0',
  'public domain',
  'общественное достояние',
  'domena publiczna',
  'publiskais īpašums',
];

type NumberFormat = { thousands: string; decimal: string };

type RegistryScale = {
  id: string;
  unit: string;
  shape: string;
  tabs: string[];
  defaultTab: string;
  numberFormat: Record<Locale, NumberFormat>;
};

type RegistryFile = { scales: RegistryScale[] };

type MetaImage = {
  src: string;
  pxW: number;
  pxH: number;
  author: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
  changed: boolean;
};

type MetaItem = {
  slug: string;
  tab: string;
  order: number;
  value: number;
  qualifier: Qualifier | null;
  unit: string;
  period: string;
  image: MetaImage | null;
  sources: string[];
  linkTo: string | null;
  /** A different measure drawn as a lighter outlined square. Omitted on solid marks. */
  mark?: 'outline' | null;
  /** High end of a bar range band. Omitted on a single value. */
  valueHigh?: number | null;
  /** Separate readings on one bar, drawn as marks rather than a band. */
  marks?: number[] | null;
};

type MetaFile = {
  items: MetaItem[];
  unit?: string;
  shape?: string;
  /** Right end of a bar axis. Omitted on area squares. */
  axisMax?: number;
};

type CopyItem = {
  name: string;
  valueLine: string;
  hook: string;
  detail: string;
  caption: string;
  credit: string;
  sources: string[];
};

type CopyFile = {
  title: string;
  lead: string;
  axisLabel: string;
  tabs: Record<string, string>;
  items: Record<string, CopyItem>;
};

export type ValueScaleSource = { label: string; href: string };

export type ValueScaleItem = {
  slug: string;
  name: string;
  valueLine: string;
  hook: string;
  detail: string;
  caption: string;
  creditBefore: string;
  licenceLabel: string;
  creditAfter: string;
  licenceHref: string;
  sources: ValueScaleSource[];
  value: number;
  formattedValue: string;
  qualifierLabel: string;
  weight: number;
  image: { src: string; pxW: number; pxH: number } | null;
  linkTo: string | null;
  mark: 'outline' | null;
  /** Compact figure for a bar row, without the unit. Same digits as formattedValue on an area square. */
  spanLabel: string;
  /** Share of the axis drawn solid, from zero to the low end. Zero on area squares and on mark bars. */
  solidShare: number;
  /** Share of the axis drawn as the lighter range band. Zero when there is no range. */
  bandShare: number;
  /** Tick positions for separate readings on one bar. */
  markTicks: { label: string; share: number }[];
};

export type ValueScaleTab = {
  id: string;
  label: string;
  items: ValueScaleItem[];
};

export type ValueScaleView = {
  id: string;
  shape: string;
  unit: string;
  title: string;
  lead: string;
  axisLabel: string;
  defaultTab: string;
  prev: string;
  next: string;
  hint: string;
  position: string;
  sourcesLabel: string;
  /** Formatted right end of a bar axis. Empty on an area square. */
  axisMaxLabel: string;
  tabs: ValueScaleTab[];
};

let registryCache: RegistryFile | undefined;

function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(file, 'utf8')) as T;
}

function registry(): RegistryFile {
  if (!registryCache) registryCache = readJson<RegistryFile>(path.join(DATA_ROOT, 'registry.json'));
  return registryCache;
}

export function formatScaleValue(value: number, format: NumberFormat): string {
  if (!Number.isFinite(value)) throw new Error(`Value scale number is not finite: ${value}`);
  const negative = value < 0;
  const abs = Math.abs(value);
  const raw = Number.isInteger(abs) ? abs.toFixed(0) : trimFraction(abs.toFixed(8));
  const [intPart, fracPart] = raw.split('.');
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, format.thousands);
  const text = fracPart ? `${grouped}${format.decimal}${fracPart}` : grouped;
  return negative ? `-${text}` : text;
}

function trimFraction(fixed: string): string {
  return fixed.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

function splitCredit(credit: string, licenceHref: string): { before: string; label: string; after: string } {
  for (const phrase of licencePhrases) {
    const at = credit.indexOf(phrase);
    if (at < 0) continue;
    const before = credit.slice(0, at);
    const after = credit.slice(at + phrase.length);
    if (`${before}${phrase}${after}` !== credit) throw new Error('Value scale credit split failed');
    if (!licenceHref) throw new Error(`Value scale licence phrase has no URL: ${phrase}`);
    return { before, label: phrase, after };
  }
  throw new Error(`Value scale credit has no linked licence phrase: ${credit}`);
}

function assertNumberFormat(format: NumberFormat, locale: string, id: string): void {
  if (!format || typeof format.thousands !== 'string' || format.thousands.length < 1) {
    throw new Error(`Value scale ${id} is missing a thousands separator for ${locale}`);
  }
  if (typeof format.decimal !== 'string' || format.decimal.length < 1) {
    throw new Error(`Value scale ${id} is missing a decimal mark for ${locale}`);
  }
}

function loadScale(entry: RegistryScale, locale: Locale): ValueScaleView {
  if (entry.shape !== 'area-square' && entry.shape !== 'bar') {
    throw new Error(`Value scale ${entry.id} uses unsupported shape ${entry.shape}`);
  }
  const bar = entry.shape === 'bar';
  if (!entry.tabs.length) throw new Error(`Value scale ${entry.id} has no tabs`);
  if (!entry.tabs.includes(entry.defaultTab)) {
    throw new Error(`Value scale ${entry.id} default tab ${entry.defaultTab} is not in its tab list`);
  }
  for (const code of locales) assertNumberFormat(entry.numberFormat[code], code, entry.id);

  const dir = path.join(DATA_ROOT, entry.id);
  const meta = readJson<MetaFile>(path.join(dir, 'meta.json'));
  if (bar) {
    if (!(typeof meta.axisMax === 'number' && meta.axisMax > 0)) {
      throw new Error(`Value scale ${entry.id} needs a positive axis max`);
    }
    if (meta.unit !== entry.unit || meta.shape !== entry.shape) {
      throw new Error(`Value scale ${entry.id} meta does not match the registry`);
    }
  }
  const axisMax = bar ? (meta.axisMax as number) : 0;
  const copy = readJson<CopyFile>(path.join(dir, `${locale}.json`));
  if (!copy.title || !copy.lead || !copy.axisLabel) {
    throw new Error(`Value scale ${entry.id} copy is incomplete for ${locale}`);
  }

  const seen = new Set<string>();
  const byTab = new Map<string, ValueScaleItem[]>();
  for (const tab of entry.tabs) byTab.set(tab, []);

  const sorted = [...meta.items].sort((a, b) => a.order - b.order);
  for (const item of sorted) {
    if (seen.has(item.slug)) throw new Error(`Value scale ${entry.id} repeats ${item.slug}`);
    seen.add(item.slug);
    if (!byTab.has(item.tab)) throw new Error(`Value scale ${entry.id} item ${item.slug} uses unknown tab ${item.tab}`);
    if (!(item.value > 0)) throw new Error(`Value scale ${entry.id} item ${item.slug} needs a positive value`);
    if (item.qualifier !== null && !isQualifier(item.qualifier)) {
      throw new Error(`Value scale ${entry.id} item ${item.slug} has qualifier ${item.qualifier}`);
    }
    const high = item.valueHigh ?? null;
    const marks = item.marks ?? null;
    if (!bar && (high != null || (marks != null && marks.length > 0))) {
      throw new Error(`Value scale ${entry.id} item ${item.slug} uses a bar range on an area square`);
    }
    if (bar) {
      if (item.value > axisMax) throw new Error(`Value scale ${entry.id} item ${item.slug} is above the axis`);
      if (high != null && marks != null) {
        throw new Error(`Value scale ${entry.id} item ${item.slug} has both a band and marks`);
      }
      if (high != null && (!(high > item.value) || high > axisMax)) {
        throw new Error(`Value scale ${entry.id} item ${item.slug} has a bad range`);
      }
      if (marks != null) {
        if (marks.length < 2) throw new Error(`Value scale ${entry.id} item ${item.slug} needs two marks`);
        for (let i = 0; i < marks.length; i += 1) {
          if (!(marks[i] > 0) || marks[i] > axisMax || (i > 0 && !(marks[i] > marks[i - 1]))) {
            throw new Error(`Value scale ${entry.id} item ${item.slug} has a bad mark`);
          }
        }
        if (item.value !== marks[0]) {
          throw new Error(`Value scale ${entry.id} item ${item.slug} value must be the low mark`);
        }
      }
      if ((item.qualifier === 'up_to' || item.qualifier === 'can_be') && (high != null || marks != null)) {
        throw new Error(`Value scale ${entry.id} item ${item.slug} qualifier does not apply to a range`);
      }
    }
    if (item.mark != null && item.mark !== 'outline') {
      throw new Error(`Value scale ${entry.id} item ${item.slug} has mark ${item.mark}`);
    }
    const text = copy.items[item.slug];
    if (!text?.name || !text.valueLine || !text.hook || !text.detail || text.caption == null || text.credit == null) {
      throw new Error(`Value scale ${entry.id} is missing ${locale} copy for ${item.slug}`);
    }
    if (!Array.isArray(text.sources) || text.sources.length !== item.sources.length) {
      throw new Error(`Value scale ${entry.id} source labels for ${item.slug} do not match ${locale}`);
    }
    let image: ValueScaleItem['image'] = null;
    let licenceHref = '';
    if (item.image) {
      if (!text.caption || !text.credit) {
        throw new Error(`Value scale ${entry.id} photo for ${item.slug} needs a caption and a credit in ${locale}`);
      }
      if (!item.image.src || !(item.image.pxW > 0) || !(item.image.pxH > 0) || !item.image.licenceUrl) {
        throw new Error(`Value scale ${entry.id} image for ${item.slug} is incomplete`);
      }
      const file = path.join(process.cwd(), 'public', item.image.src.replace(/^\//, ''));
      if (!existsSync(file)) throw new Error(`Value scale image is missing: ${item.image.src}`);
      image = { src: item.image.src, pxW: item.image.pxW, pxH: item.image.pxH };
      licenceHref = item.image.licenceUrl;
    } else if (text.caption || text.credit) {
      throw new Error(`Value scale ${entry.id} item ${item.slug} has a caption or credit without a photo in ${locale}`);
    }
    const credit = text.credit ? splitCredit(text.credit, licenceHref) : { before: '', label: '', after: '' };
    const words = qualifierWords[locale];
    const format = entry.numberFormat[locale];
    const formattedValue = formatScaleValue(item.value, format);
    let spanLabel = formattedValue;
    let solidShare = 0;
    let bandShare = 0;
    let markTicks: ValueScaleItem['markTicks'] = [];
    if (bar) {
      if (marks != null) {
        spanLabel = marks.map((n) => formatScaleValue(n, format)).join(` ${rangeWord[locale]} `);
        markTicks = marks.map((n) => ({ label: formatScaleValue(n, format), share: n / axisMax }));
      } else if (high != null) {
        spanLabel = `${formattedValue} ${rangeWord[locale]} ${formatScaleValue(high, format)}`;
        solidShare = item.value / axisMax;
        bandShare = (high - item.value) / axisMax;
      } else {
        if (item.qualifier === 'up_to' || item.qualifier === 'can_be') {
          spanLabel = `${words[item.qualifier]} ${formattedValue}`;
        }
        solidShare = item.value / axisMax;
      }
    }
    byTab.get(item.tab)?.push({
      slug: item.slug,
      name: text.name,
      valueLine: text.valueLine,
      hook: text.hook,
      detail: text.detail,
      caption: text.caption,
      creditBefore: credit.before,
      licenceLabel: credit.label,
      creditAfter: credit.after,
      licenceHref,
      sources: text.sources.map((label, index) => ({ label, href: item.sources[index] })),
      value: item.value,
      formattedValue,
      qualifierLabel: item.qualifier ? words[item.qualifier] : '',
      weight: Math.sqrt(item.value),
      image,
      linkTo: item.linkTo,
      mark: item.mark === 'outline' ? 'outline' : null,
      spanLabel,
      solidShare,
      bandShare,
      markTicks,
    });
  }

  const tabs: ValueScaleTab[] = entry.tabs.map((id) => {
    const label = copy.tabs[id];
    const items = byTab.get(id) ?? [];
    if (!label) throw new Error(`Value scale ${entry.id} is missing the ${locale} label for tab ${id}`);
    if (!items.length) throw new Error(`Value scale ${entry.id} tab ${id} has no items`);
    if (bar) {
      for (let i = 1; i < items.length; i += 1) {
        if (items[i].value < items[i - 1].value) {
          throw new Error(`Value scale ${entry.id} tab ${id} is not ordered by the low end`);
        }
      }
    }
    return { id, label, items };
  });

  const ui = chrome[locale];
  return {
    id: entry.id,
    shape: entry.shape,
    unit: entry.unit,
    title: copy.title,
    lead: copy.lead,
    axisLabel: copy.axisLabel,
    defaultTab: entry.defaultTab,
    prev: ui.prev,
    next: ui.next,
    hint: ui.hint,
    position: ui.position,
    sourcesLabel: ui.sources,
    axisMaxLabel: bar ? formatScaleValue(axisMax, entry.numberFormat[locale]) : '',
    tabs,
  };
}

export function getValueScale(id: string, locale: Locale): ValueScaleView {
  const entry = registry().scales.find((scale) => scale.id === id);
  if (!entry) throw new Error(`Value scale ${id} is not in the registry`);
  return loadScale(entry, locale);
}
