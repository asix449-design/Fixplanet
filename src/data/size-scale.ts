import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { localizePath, type Locale } from '../i18n';

/**
 * Surviving size scale. Pack files in ./size-scale/packs and copy in
 * ./size-scale/copy are merged here. A later pack is another JSON file in
 * those folders plus silhouette SVGs; this module does not need a code change.
 *
 * `width_m` in the pack files is the chart Length (nose or bill to tail tip).
 * That key stays in the data files and is not rendered.
 */

type ScaleBasis = 'width' | 'height';

type PackRow = {
  slug: string;
  order: number;
  height_m: number;
  width_m: number;
  height_range_m: [number, number];
  width_range_m: [number, number];
  confidence_height: string;
  confidence_width: string;
  sort_key_m: number;
  scale_basis: ScaleBasis;
  silhouette_file: string;
  credit: string;
  svg: {
    viewBox_w: number;
    viewBox_h: number;
    ground_y: number;
    shoulder_y: number;
  };
};

type PackFile = {
  pack: string;
  position_total?: number;
  rows: PackRow[];
};

type AnimalCopy = {
  name: string;
  height_label: string;
  length_label: string;
  caption: string;
  sources: string[];
};

type SharedCopy = {
  height: string;
  length: string;
  unit_short: string;
  unit_word: string;
  open_page: string;
  position: string;
  hint: string;
  section_title: string;
  section_lead: string;
};

type CopyFile = {
  lang: Locale;
  shared?: SharedCopy;
  animals: Record<string, AnimalCopy>;
};

type CreditImage = {
  slug: string;
  credit_line: string;
};

const packModules = import.meta.glob('./size-scale/packs/*.json', {
  eager: true,
}) as Record<string, { default: PackFile }>;

const copyModules = import.meta.glob('./size-scale/copy/*.json', {
  eager: true,
}) as Record<string, { default: CopyFile }>;

const aboutWord: Record<Locale, string> = {
  en: 'about',
  ru: 'около',
  pl: 'około',
  lv: 'apmēram',
};

const silhouetteLead: Record<Locale, string> = {
  en: 'Silhouette:',
  ru: 'Силуэт:',
  pl: 'Sylwetka:',
  lv: 'Siluets:',
};

const oryxDrawing: Record<Locale, string> = {
  en: 'original Fix Planet drawing',
  ru: 'оригинальный рисунок Fix Planet',
  pl: 'oryginalny rysunek Fix Planet',
  lv: 'Fix Planet oriģinālais zīmējums',
};

const changeNote: Record<Locale, string> = {
  en: 'Background removed',
  ru: 'Фон удалён',
  pl: 'Usunięto tło',
  lv: 'Fons noņemts',
};

const filePageLabel: Record<Locale, string> = {
  en: 'file on Wikimedia Commons',
  ru: 'файл на Wikimedia Commons',
  pl: 'plik w Wikimedia Commons',
  lv: 'fails Wikimedia Commons',
};

type PhotoFile = {
  png: string;
  webp: string;
  pxW: number;
  pxH: number;
  credits: Record<Locale, string>;
  licenceHref: string;
  filePage?: string;
  changed?: boolean;
};

type PhotoCatalog = { images: Record<string, PhotoFile> };

const photoCatalog = JSON.parse(
  readFileSync(path.join(process.cwd(), 'src/data/size-scale/photos.json'), 'utf8'),
) as PhotoCatalog;

const controls: Record<Locale, { prev: string; next: string }> = {
  en: { prev: 'Previous', next: 'Next' },
  ru: { prev: 'Назад', next: 'Дальше' },
  pl: { prev: 'Wstecz', next: 'Dalej' },
  lv: { prev: 'Atpakaļ', next: 'Tālāk' },
};

const locales: Locale[] = ['en', 'ru', 'pl', 'lv'];

function silhouetteDirectory(): string {
  const fromCwd = path.join(process.cwd(), 'public/images/wildlife/silhouettes');
  if (existsSync(fromCwd)) return fromCwd;
  return fromCwd;
}

function readSvg(fileName: string): { raw: string; html: string; basis: ScaleBasis; viewBox: number[]; groundY: number; shoulderY: number } {
  const filePath = path.join(silhouetteDirectory(), fileName);
  if (!existsSync(filePath)) {
    throw new Error(`Size scale silhouette is missing: ${fileName}`);
  }
  const raw = readFileSync(filePath, 'utf8');
  const viewBox = (raw.match(/viewBox="([^"]+)"/)?.[1] ?? '')
    .trim()
    .split(/[\s,]+/)
    .map(Number);
  const groundY = Number(raw.match(/data-ground-y="([^"]+)"/)?.[1]);
  const shoulderY = Number(raw.match(/data-shoulder-y="([^"]+)"/)?.[1]);
  const basis = raw.match(/data-scale-basis="([^"]+)"/)?.[1];
  if (viewBox.length !== 4 || viewBox.some((n) => !Number.isFinite(n))) {
    throw new Error(`Size scale silhouette has a bad viewBox: ${fileName}`);
  }
  if (!Number.isFinite(groundY) || !Number.isFinite(shoulderY)) {
    throw new Error(`Size scale silhouette is missing ground or shoulder: ${fileName}`);
  }
  if (basis !== 'width' && basis !== 'height') {
    throw new Error(`Size scale silhouette has a bad scale basis: ${fileName}`);
  }
  if (!raw.includes('fill="currentColor"') || !raw.includes('data-facing="right"')) {
    throw new Error(`Size scale silhouette must face right and use currentColor: ${fileName}`);
  }
  const html = raw
    .replace(/\sdata-scale-basis="[^"]*"/, '')
    .replace('<svg ', '<svg class="size-scale-svg size-scale-drawn" ');
  return { raw, html, basis, viewBox, groundY, shoulderY };
}

function formatMeasure(n: number, locale: Locale, approx: boolean, unit: string): string {
  const num = n.toFixed(1).replace('.', locale === 'en' ? '.' : ',');
  const body = `${num} ${unit}`;
  return approx ? `${aboutWord[locale]} ${body}` : body;
}

function splitSource(line: string): { href: string; label: string } {
  const match = line.match(/^(.*)\s(https?:\/\/\S+)$/);
  if (!match) return { href: '', label: line };
  return { href: match[2], label: line };
}

function nearly(a: number, b: number): boolean {
  return Math.abs(a - b) <= 0.2;
}

function localizeSilhouette(credit: string, locale: Locale): string {
  const body = credit.startsWith('Silhouette:') ? credit.slice('Silhouette:'.length) : ` ${credit}`;
  return `${silhouetteLead[locale]}${body}`.replace('original Fix Planet drawing', oryxDrawing[locale]);
}

type Geom = {
  vbW: number;
  vbH: number;
  groundY: number;
  mPerUnit: number;
  drawnLenM: number;
  drawnAboveM: number;
  tailM: number;
};

function geomFrom(vbW: number, vbH: number, groundY: number, mPerUnit: number): Geom {
  return {
    vbW,
    vbH,
    groundY,
    mPerUnit,
    drawnLenM: vbW * mPerUnit,
    drawnAboveM: groundY * mPerUnit,
    tailM: Math.max(0, vbH - groundY) * mPerUnit,
  };
}

const rows = Object.keys(packModules)
  .sort()
  .flatMap((key) => packModules[key].default.rows);

rows.sort((a, b) => a.sort_key_m - b.sort_key_m || a.order - b.order);

const seen = new Set<string>();
for (const row of rows) {
  if (seen.has(row.slug)) throw new Error(`Duplicate size scale slug: ${row.slug}`);
  seen.add(row.slug);
  if (!(row.sort_key_m > 0) || !(row.height_m > 0) || !(row.width_m > 0)) {
    throw new Error(`Size scale row has empty measurements: ${row.slug}`);
  }
}

for (let i = 1; i < rows.length; i += 1) {
  if (rows[i].sort_key_m < rows[i - 1].sort_key_m) {
    throw new Error('Size scale rows are out of order');
  }
}

/** Live row count. The position label uses this, so a later pack updates it. */
export const SIZE_SCALE_TOTAL = rows.length;

/**
 * Combined count the pack templates assumed (Pack A plus a later pack of 7).
 * The label does not use this while fewer rows are present.
 */
export const SIZE_SCALE_PLANNED_TOTAL = Object.keys(packModules)
  .sort()
  .reduce((max, key) => Math.max(max, packModules[key].default.position_total ?? 0), SIZE_SCALE_TOTAL);

const credits = JSON.parse(
  readFileSync(path.join(silhouetteDirectory(), 'credits.json'), 'utf8'),
) as { images: CreditImage[] };

const creditBySlug = new Map(credits.images.map((image) => [image.slug, image.credit_line]));

const geometry = rows.map((row) => {
  const svg = readSvg(row.silhouette_file);
  if (svg.basis !== row.scale_basis) {
    throw new Error(`Scale basis mismatch for ${row.slug}`);
  }
  const [, , vbW, vbH] = svg.viewBox;
  if (!nearly(vbW, row.svg.viewBox_w) || !nearly(vbH, row.svg.viewBox_h)) {
    throw new Error(`viewBox mismatch for ${row.slug}`);
  }
  if (!nearly(svg.groundY, row.svg.ground_y) || !nearly(svg.shoulderY, row.svg.shoulder_y)) {
    throw new Error(`Ground or shoulder mismatch for ${row.slug}`);
  }
  const span = svg.groundY - svg.shoulderY;
  if (!(span > 0)) throw new Error(`Shoulder line is below the ground for ${row.slug}`);
  const mPerUnit = svg.basis === 'height' ? row.height_m / span : row.width_m / vbW;
  const credit = creditBySlug.get(row.slug);
  if (!credit) throw new Error(`Missing silhouette credit for ${row.slug}`);
  if (credit !== row.credit) {
    throw new Error(`Credit line mismatch for ${row.slug}`);
  }
  const photoFile = photoCatalog.images[row.slug];
  const photo = photoFile
    ? geomFrom(
        photoFile.pxW,
        photoFile.pxH,
        photoFile.pxH,
        row.scale_basis === 'height' ? row.height_m / photoFile.pxH : row.width_m / photoFile.pxW,
      )
    : null;
  return {
    row,
    html: svg.html,
    sil: geomFrom(vbW, vbH, svg.groundY, mPerUnit),
    photo,
    photoFile: photoFile ?? null,
    credit,
  };
});

const copyByLang = new Map<Locale, { shared: SharedCopy | null; animals: Record<string, AnimalCopy> }>();

for (const key of Object.keys(copyModules).sort()) {
  const file = copyModules[key].default;
  if (!locales.includes(file.lang)) throw new Error(`Unknown size scale language: ${file.lang}`);
  const slot = copyByLang.get(file.lang) ?? { shared: null, animals: {} };
  if (file.shared) {
    if (slot.shared) throw new Error(`Duplicate shared labels for ${file.lang}`);
    slot.shared = file.shared;
  }
  for (const [slug, animal] of Object.entries(file.animals)) {
    if (slot.animals[slug]) throw new Error(`Duplicate copy for ${file.lang} ${slug}`);
    slot.animals[slug] = animal;
  }
  copyByLang.set(file.lang, slot);
}

export type SizeScaleSource = { href: string; label: string };

export type SizeScaleGeom = Geom & { tailM: number };

export type SizeScalePhoto = SizeScaleGeom & {
  png: string;
  webp: string;
};

export type SizeScaleAnimal = {
  slug: string;
  name: string;
  caption: string;
  credit: string;
  silhouetteCredit: string;
  licenceHref: string;
  filePageHref: string;
  filePageLabel: string;
  href: string;
  heightLabel: string;
  lengthLabel: string;
  heightText: string;
  lengthText: string;
  sources: SizeScaleSource[];
  svg: string;
  photo: SizeScalePhoto | null;
  sil: SizeScaleGeom;
};

export type SizeScaleView = {
  total: number;
  title: string;
  lead: string;
  height: string;
  length: string;
  unit: string;
  openPage: string;
  hint: string;
  positionPattern: string;
  prev: string;
  next: string;
  sourcesLabel: string;
  animals: SizeScaleAnimal[];
  clientAnimals: Array<Omit<SizeScaleAnimal, 'svg' | 'slug'>>;
};

const sharedKeys: (keyof SharedCopy)[] = [
  'height',
  'length',
  'unit_short',
  'unit_word',
  'open_page',
  'position',
  'hint',
  'section_title',
  'section_lead',
];

function buildLocale(locale: Locale, sourcesLabel: string): SizeScaleView {
  const slot = copyByLang.get(locale);
  if (!slot?.shared) throw new Error(`Size scale shared labels are missing for ${locale}`);
  const shared = slot.shared;
  for (const key of sharedKeys) {
    if (!shared[key]) throw new Error(`Size scale label ${key} is missing for ${locale}`);
  }
  if (!shared.position.includes('{n}') || !shared.position.includes('{total}')) {
    throw new Error(`Size scale position label is missing its placeholders for ${locale}`);
  }
  const animals: SizeScaleAnimal[] = geometry.map((item) => {
    const copy = slot.animals[item.row.slug];
    if (!copy) throw new Error(`Size scale copy is missing for ${locale} ${item.row.slug}`);
    const heightText = formatMeasure(
      item.row.height_m,
      locale,
      item.row.confidence_height === 'estimate',
      shared.unit_short,
    );
    const lengthText = formatMeasure(
      item.row.width_m,
      locale,
      item.row.confidence_width === 'estimate',
      shared.unit_short,
    );
    if (!copy.caption.includes(heightText) || !copy.caption.includes(lengthText)) {
      throw new Error(`Caption does not match the figures for ${locale} ${item.row.slug}`);
    }
    const nums = [...copy.caption.matchAll(/\d+(?:[.,]\d+)?/g)].map((match) =>
      Number(match[0].replace(',', '.')),
    );
    if (
      nums.length < 2 ||
      Math.abs(nums[0] - item.row.height_m) > 1e-9 ||
      Math.abs(nums[1] - item.row.width_m) > 1e-9
    ) {
      throw new Error(`Caption figures differ for ${locale} ${item.row.slug}`);
    }
    const silhouetteCredit = localizeSilhouette(item.credit, locale);
    const photoCredit = item.photoFile?.credits[locale] ?? '';
    const licenceHref = item.photoFile?.licenceHref ?? '';
    const filePage = photoCredit ? (item.photoFile?.filePage ?? '') : '';
    const changed = Boolean(photoCredit && item.photoFile?.changed);
    const credit = photoCredit
      ? (changed ? `${photoCredit}. ${changeNote[locale]}` : photoCredit)
      : silhouetteCredit;
    return {
      slug: item.row.slug,
      name: copy.name,
      caption: copy.caption,
      credit,
      silhouetteCredit,
      licenceHref: photoCredit ? licenceHref : '',
      filePageHref: filePage,
      filePageLabel: filePage ? filePageLabel[locale] : '',
      href: localizePath(`/wildlife/${item.row.slug}`, locale),
      heightLabel: copy.height_label,
      lengthLabel: copy.length_label,
      heightText,
      lengthText,
      sources: copy.sources.map(splitSource),
      svg: item.html,
      photo: item.photo && item.photoFile
        ? { ...item.photo, png: item.photoFile.png, webp: item.photoFile.webp }
        : null,
      sil: item.sil,
    };
  });

  const positionPattern = shared.position.replaceAll('{total}', String(SIZE_SCALE_TOTAL));
  const view: SizeScaleView = {
    total: SIZE_SCALE_TOTAL,
    title: shared.section_title,
    lead: shared.section_lead,
    height: shared.height,
    length: shared.length,
    unit: shared.unit_short,
    openPage: shared.open_page,
    hint: shared.hint,
    positionPattern,
    prev: controls[locale].prev,
    next: controls[locale].next,
    sourcesLabel,
    animals,
    clientAnimals: animals.map(({ svg: _svg, slug: _slug, ...rest }) => rest),
  };
  const packed = JSON.stringify(view.clientAnimals) + positionPattern + view.title + view.lead + view.hint;
  if (/estimate|\bwidth\b|Notes for Jimmy|\u2014|\u2013/.test(packed)) {
    throw new Error(`Size scale public text failed the hygiene check for ${locale}`);
  }
  return view;
}

const views = new Map<Locale, SizeScaleView>();

export function getSizeScale(locale: Locale, sourcesLabel: string): SizeScaleView {
  const cached = views.get(locale);
  if (cached) return cached;
  const view = buildLocale(locale, sourcesLabel);
  views.set(locale, view);
  return view;
}
