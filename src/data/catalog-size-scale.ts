import { readFileSync } from 'node:fs';
import path from 'node:path';
import { localizePath, type Locale } from '../i18n';
import { composeScaleCaption, formatMeasure, measureMetres, splitGroup } from '../lib/wildlife-catalog/format.mjs';
import { readJson, readShelfFiles } from '../lib/wildlife-catalog/read.mjs';

/**
 * Size scale for catalogue shelves (endangered, extinct). Rows come from each
 * card's scale block. Captions are built here from stored metres, never stored.
 * Animals whose length uses a body-length method are drawn by height.
 */

const SHELVES = ['endangered', 'extinct'] as const;

type ScaleShelf = (typeof SHELVES)[number];

type SharedCopy = {
  height: string;
  length: string;
  unit_short: string;
  open_page: string;
  position: string;
  hint: string;
  section_title: string;
  section_lead: string;
};

const controls: Record<Locale, { prev: string; next: string }> = {
  en: { prev: 'Previous', next: 'Next' },
  ru: { prev: 'Назад', next: 'Дальше' },
  pl: { prev: 'Wstecz', next: 'Dalej' },
  lv: { prev: 'Atpakaļ', next: 'Tālāk' },
};

const filePageLabel: Record<Locale, string> = {
  en: 'file on Wikimedia Commons',
  ru: 'файл на Wikimedia Commons',
  pl: 'plik w Wikimedia Commons',
  lv: 'fails Wikimedia Commons',
};

export type CatalogScaleSource = { href: string; label: string };

export type CatalogScaleGeom = {
  vbW: number;
  vbH: number;
  groundY: number;
  mPerUnit: number;
  drawnLenM: number;
  drawnAboveM: number;
  tailM: number;
};

export type CatalogScaleAnimal = {
  slug: string;
  name: string;
  nameItalic?: boolean;
  caption: string;
  credit: string;
  licenceHref: string;
  filePageHref: string;
  filePageLabel: string;
  changes: string;
  href: string;
  heightLabel: string;
  lengthLabel: string;
  heightText: string;
  lengthText: string;
  sources: CatalogScaleSource[];
  estimate?: { href: string; label: string };
  photo: CatalogScaleGeom & { webp: string; png: string };
};

export type CatalogScaleGroup = {
  id: string;
  label: string;
  positionPattern: string;
  animals: CatalogScaleAnimal[];
  clientAnimals: Array<Omit<CatalogScaleAnimal, 'slug'> & { sil: CatalogScaleGeom; silhouetteCredit: string; liveFromCaption?: boolean }>;
};

export type CatalogScaleView = {
  title: string;
  lead: string;
  height: string;
  length: string;
  unit: string;
  openPage: string;
  hint: string;
  prev: string;
  next: string;
  sourcesLabel: string;
  badge?: string;
  badgeHint?: string;
  groups: CatalogScaleGroup[];
};

export type ScaleTrack = 'exact' | 'reconstruction';

type SizeMetric = {
  value?: number;
  mean?: number;
  unit?: string;
  kind?: string;
  range?: [number, number] | null;
  basis?: string;
};

type ShelfCard = {
  slug: string;
  scientificName?: string;
  size?: {
    height?: SizeMetric;
    length?: SizeMetric;
  };
  scale?: {
    show?: boolean;
    track?: ScaleTrack;
    basis?: string;
    sortKey?: number;
    sizeGroup?: string | null;
    order?: number | null;
    image?: {
      webp?: string;
      png?: string | null;
      pxW?: number;
      pxH?: number;
      kind?: string;
      licenseUrl?: string | null;
      sourceUrl?: string | null;
    } | null;
  };
};

type CopyCard = {
  commonName: string;
  scale?: {
    heightLabel: string;
    lengthLabel: string;
    captionExtra?: string;
    credit?: string;
    changes?: string;
    estimate?: { label: string; url: string };
    sources?: { label: string; url: string }[];
  };
};

type ShelfFile = {
  meta: { cards: ShelfCard[] };
  copy: Record<string, { cards?: Record<string, CopyCard> }>;
};

type RegistryScale = {
  enabled?: boolean;
  groups: { id: 'small' | 'medium' | 'large'; maxSortKey?: number }[];
  maxPerGroup?: number;
};

type ReconstructionLabels = {
  title: string;
  badge: string;
  badgeHint: string;
  lead: string;
  caption: string;
  estimateLine: string;
  range: string;
};

type RegistryFile = {
  scaleLabels: Record<Locale, {
    small: string;
    medium: string;
    large: string;
    subgroup: string;
    tracks?: { exact?: { title?: string }; reconstruction?: ReconstructionLabels };
  }>;
  shelves: { id: string; scale?: RegistryScale }[];
};

type RulesFile = {
  numberFormat: Parameters<typeof formatMeasure>[2];
  illustrationLine?: Partial<Record<Locale, string>>;
  measureMethods?: Record<string, Method>;
};

let shelvesCache: Record<string, ShelfFile> | undefined;
let registryCache: RegistryFile | undefined;
let rulesCache: RulesFile | undefined;

function shelves(): Record<string, ShelfFile> {
  if (!shelvesCache) shelvesCache = readShelfFiles() as Record<string, ShelfFile>;
  return shelvesCache;
}

function registry(): RegistryFile {
  if (!registryCache) registryCache = readJson('registry.json') as RegistryFile;
  return registryCache;
}

function rules(): RulesFile {
  if (!rulesCache) rulesCache = readJson('rules.json') as RulesFile;
  return rulesCache;
}

function isScaleShelf(shelf: string): shelf is ScaleShelf {
  return (SHELVES as readonly string[]).includes(shelf);
}

function sharedCopy(locale: Locale): SharedCopy {
  const file = path.join(process.cwd(), 'src/data/size-scale/copy', `${locale}.json`);
  const data = JSON.parse(readFileSync(file, 'utf8')) as { shared?: SharedCopy };
  if (!data.shared?.section_title || !data.shared.position.includes('{n}') || !data.shared.position.includes('{total}')) {
    throw new Error(`Size scale shared labels are missing for ${locale}`);
  }
  return data.shared;
}

function geom(vbW: number, vbH: number, groundY: number, mPerUnit: number): CatalogScaleGeom {
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

/** Body-length methods are drawn by height, even when the cutout is a side view. */
function drawBasis(card: { scale?: { basis?: string }; size?: { length?: { basis?: string } } }, methods: Method[]): 'height' | 'length' {
  const lengthBasis = (card.size?.length?.basis || '').toLowerCase();
  for (const method of methods) {
    const needle = (method.basis || '').toLowerCase();
    if (!needle || !method.scaleBasisRequired) continue;
    if (lengthBasis.includes(needle) || (needle.includes('trunk') && lengthBasis.includes('without the trunk and tusks'))) {
      return method.scaleBasisRequired === 'length' ? 'length' : 'height';
    }
  }
  return card.scale?.basis === 'height' ? 'height' : 'length';
}

function groupIdFor(sortKey: number, sizeGroup: string | null | undefined, groups: { id: string; maxSortKey?: number }[]): string {
  if (sizeGroup === 'small' || sizeGroup === 'medium' || sizeGroup === 'large') return sizeGroup;
  for (const group of groups) {
    if (group.maxSortKey == null || sortKey <= group.maxSortKey) return group.id;
  }
  return groups[groups.length - 1]?.id || 'large';
}

function chunkLabel(name: string, labels: { subgroup?: string }, index: number, count: number): string {
  if (count <= 1) return name;
  return (labels.subgroup || '{group} {i}').replaceAll('{group}', name).replaceAll('{i}', String(index + 1));
}

type Method = { basis?: string; scaleBasisRequired?: string };

function cardTrack(card: ShelfCard): ScaleTrack {
  return card.scale?.track === 'reconstruction' ? 'reconstruction' : 'exact';
}

function rangeMetres(metric: SizeMetric | undefined): [number, number] | null {
  const range = metric?.range;
  if (!range || range.length !== 2 || !(range[0] > 0) || !(range[1] > 0)) return null;
  const factor = metric?.unit === 'mm' ? 0.001 : 1;
  return [range[0] * factor, range[1] * factor];
}

function reconstructionFigure(metric: SizeMetric | undefined, point: string, locale: Locale, numberFormat: RulesFile['numberFormat'], rangeTemplate: string): string {
  const range = rangeMetres(metric);
  if (!range) return point;
  const a = formatMeasure(range[0], locale, numberFormat);
  const b = formatMeasure(range[1], locale, numberFormat);
  if (!a || !b) return point;
  return rangeTemplate.replaceAll('{a}', a).replaceAll('{b}', b);
}

export function hasCatalogScale(shelf: string, track: ScaleTrack = 'exact'): boolean {
  if (!isScaleShelf(shelf)) return false;
  const spec = registry().shelves.find((item) => item.id === shelf);
  if (!spec?.scale?.enabled) return false;
  return (shelves()[shelf]?.meta.cards || []).some((card) => card.scale?.show && card.scale.image?.webp && cardTrack(card) === track);
}

export function getCatalogSizeScale(shelf: string, locale: Locale, sourcesLabel: string, track: ScaleTrack = 'exact'): CatalogScaleView | null {
  if (!hasCatalogScale(shelf, track) || !isScaleShelf(shelf)) return null;
  const spec = registry().shelves.find((item) => item.id === shelf);
  const scale = spec?.scale;
  if (!scale?.enabled) return null;
  const bundle = shelves()[shelf];
  const labels = registry().scaleLabels[locale];
  const shared = sharedCopy(locale);
  const ruleFile = rules();
  const methods = Object.values(ruleFile.measureMethods || {});
  const numberFormat = ruleFile.numberFormat;
  const illustration = ruleFile.illustrationLine?.[locale] || ruleFile.illustrationLine?.en || '';

  const trackLabels = labels.tracks?.reconstruction;
  if (track === 'reconstruction' && !trackLabels) return null;

  const rows = bundle.meta.cards
    .filter((card) => card.scale?.show && card.scale.image?.webp && card.scale.image.pxW && card.scale.image.pxH && cardTrack(card) === track)
    .map((card) => {
      const copy = bundle.copy[locale]?.cards?.[card.slug] ?? bundle.copy.en?.cards?.[card.slug];
      if (!copy?.scale) return null;
      const heightM = measureMetres(card.size?.height);
      const lengthM = measureMetres(card.size?.length);
      const heightText = heightM ? formatMeasure(heightM, locale, numberFormat) : null;
      const lengthText = lengthM ? formatMeasure(lengthM, locale, numberFormat) : null;
      const image = card.scale?.image;
      const sortKey = card.scale?.sortKey;
      if (!heightText || !lengthText || !heightM || !lengthM || !image?.webp || !image.pxW || !image.pxH || !(sortKey > 0)) return null;
      const basis = drawBasis(card, methods);
      const mPerUnit = basis === 'height' ? heightM / image.pxH : lengthM / image.pxW;
      const photoGeom = geom(image.pxW, image.pxH, image.pxH, mPerUnit);
      const filePage = image.sourceUrl || '';
      const credit = copy.scale.credit?.trim() || (image.kind === 'illustration' ? illustration : '');
      const heightCaption = track === 'reconstruction' && trackLabels
        ? reconstructionFigure(card.size?.height, heightText, locale, numberFormat, trackLabels.range)
        : heightText;
      const lengthCaption = track === 'reconstruction' && trackLabels
        ? reconstructionFigure(card.size?.length, lengthText, locale, numberFormat, trackLabels.range)
        : lengthText;
      const caption = track === 'reconstruction' && trackLabels
        ? [trackLabels.caption
          .replaceAll('{heightLabel}', copy.scale.heightLabel)
          .replaceAll('{h}', heightCaption)
          .replaceAll('{lengthLabel}', copy.scale.lengthLabel)
          .replaceAll('{l}', lengthCaption), copy.scale.captionExtra].filter(Boolean).join(' ')
        : composeScaleCaption(copy.scale.heightLabel, heightText, copy.scale.lengthLabel, lengthText, copy.scale.captionExtra);
      const estimate = track === 'reconstruction' && trackLabels && copy.scale.estimate
        ? { href: copy.scale.estimate.url, label: trackLabels.estimateLine.replaceAll('{source}', copy.scale.estimate.label) }
        : undefined;
      return {
        sortKey,
        order: card.scale?.order ?? 0,
        group: groupIdFor(sortKey, card.scale?.sizeGroup, scale.groups),
        animal: {
          slug: card.slug,
          name: copy.commonName,
          nameItalic: copy.commonName === card.scientificName,
          caption,
          credit,
          licenceHref: image.licenseUrl || '',
          filePageHref: filePage,
          filePageLabel: filePage ? filePageLabel[locale] : '',
          changes: copy.scale.changes || '',
          href: localizePath(`/wildlife/${card.slug}`, locale),
          heightLabel: copy.scale.heightLabel,
          lengthLabel: copy.scale.lengthLabel,
          heightText,
          lengthText,
          sources: (copy.scale.sources || []).map((source) => ({ href: source.url, label: source.label })),
          estimate,
          photo: { ...photoGeom, webp: image.webp, png: image.png || image.webp },
        } satisfies CatalogScaleAnimal,
      };
    })
    .filter((row): row is NonNullable<typeof row> => row != null);

  if (!rows.length) return null;

  const byGroup = new Map<string, typeof rows>();
  for (const id of scale.groups.map((group) => group.id)) byGroup.set(id, []);
  for (const row of rows) {
    const list = byGroup.get(row.group) || [];
    list.push(row);
    byGroup.set(row.group, list);
  }

  const groups: CatalogScaleGroup[] = [];
  for (const specGroup of scale.groups) {
    const members = (byGroup.get(specGroup.id) || []).slice().sort((a, b) => a.sortKey - b.sortKey || a.order - b.order || a.animal.slug.localeCompare(b.animal.slug));
    if (!members.length) continue;
    const chunks = splitGroup(members, scale.maxPerGroup || 20);
    chunks.forEach((chunk, index) => {
      const animals = chunk.map((row) => row.animal);
      const id = chunks.length > 1 ? `${specGroup.id}-${index + 1}` : specGroup.id;
      groups.push({
        id,
        label: chunkLabel(labels[specGroup.id], labels, index, chunks.length),
        positionPattern: shared.position.replaceAll('{total}', String(animals.length)),
        animals,
        clientAnimals: animals.map(({ slug: _slug, ...animal }) => ({
          ...animal,
          liveFromCaption: track === 'reconstruction',
          silhouetteCredit: animal.credit,
          sil: {
            vbW: animal.photo.vbW,
            vbH: animal.photo.vbH,
            groundY: animal.photo.groundY,
            mPerUnit: animal.photo.mPerUnit,
            drawnLenM: animal.photo.drawnLenM,
            drawnAboveM: animal.photo.drawnAboveM,
            tailM: animal.photo.tailM,
          },
        })),
      });
    });
  }

  if (!groups.length) return null;

  return {
    title: track === 'reconstruction' && trackLabels ? trackLabels.title : (labels.tracks?.exact?.title || shared.section_title),
    lead: track === 'reconstruction' && trackLabels ? trackLabels.lead : shared.section_lead,
    badge: track === 'reconstruction' ? trackLabels?.badge : undefined,
    badgeHint: track === 'reconstruction' ? trackLabels?.badgeHint : undefined,
    height: shared.height,
    length: shared.length,
    unit: shared.unit_short,
    openPage: shared.open_page,
    hint: shared.hint,
    prev: controls[locale].prev,
    next: controls[locale].next,
    sourcesLabel,
    groups,
  };
}
