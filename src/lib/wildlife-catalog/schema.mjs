import { z } from 'astro/zod';

export const LOCALES = /** @type {const} */ (['en', 'ru', 'pl', 'lv']);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const https = z.string().url().startsWith('https://');
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const perLocale = (s) => z.object({ en: s, ru: s, pl: s, lv: s }).strict();
const Link = z.object({ id: z.string().optional(), label: z.string().min(1), url: https }).strict();

/* ---------- registry ---------- */
export const ScaleConfig = z.object({
  enabled: z.boolean(),
  unit: z.enum(['mm', 'm']),
  decimals: z.number().int().min(0).max(2),
  horizontal: z.enum(['length', 'wingspan']).default('length'),
  groups: z.array(z.object({
    id: z.enum(['small', 'medium', 'large']),
    maxSortKey: z.number().positive().optional(),          // metres (sortKey is always metres, also on mm shelves); omitted on the last (open) group; v3.3: Bob's registry-fragment values
    display: z.object({ unit: z.enum(['mm', 'cm', 'm']), decimals: z.number().int().min(0).max(2) }).strict().optional(),
  }).strict()).min(1).max(3),
  maxPerGroup: z.literal(20).default(20),                 // owner decision: max 20 per on-screen strip
  split: z.literal('auto').default('auto'),               // bigger groups split into ceil(n/20) even subgroups
}).strict();

export const Shelf = z.object({
  id: slug,
  kind: z.enum(['status', 'group', 'feature']),
  order: z.number().int(),
  icon: z.string(),
  enabled: z.boolean().default(true),
  mergeInto: slug.optional(),
  cards: z.boolean().default(true),
  statusRequired: z.boolean().default(false),              // v3.1: verified IUCN status needed for primary cards (C16)
  statusDisplay: z.enum(['default', 'none']).default('default'),   // v3.2: none = no status pill at all on this shelf (Domesticates; C18)
  cssStatus: z.string().optional(),
  headings: z.enum(['default', 'birds']).default('default'),
  cardOrder: z.enum(['file', 'commonName', 'sortKey']).default('file'),
  labels: perLocale(z.object({
    name: z.string(), status: z.string(), tile: z.string(), lead: z.string(), back: z.string().optional(),
  }).strict()),
  shelfSource: z.object({ url: https, label: perLocale(z.string()) }).strict().optional(),
  match: z.object({                                        // group shelves: what the primary-shelf policy expects here (C15)
    groups: z.array(z.enum(['mammal', 'bird', 'reptile', 'amphibian', 'fish', 'insect', 'invertebrate'])).optional(),
    domesticated: z.literal(true).optional(),
  }).strict().optional(),
  scale: ScaleConfig.optional(),
}).strict().refine((s) => s.enabled || !s.cards || !!s.mergeInto, 'disabled card shelf needs mergeInto')
  .refine((s) => !(s.statusDisplay === 'none' && s.statusRequired), 'statusDisplay none cannot be combined with statusRequired');

export const Registry = z.object({
  version: z.literal(1),
  hub: z.object({ labels: perLocale(z.object({ name: z.string() }).strict()) }).strict(),
  scaleLabels: perLocale(z.object({
    small: z.string(), medium: z.string(), large: z.string(),
    subgroup: z.string().refine((t) => t.includes('{group}') && t.includes('{i}'), 'needs {group} and {i}'),
    subgroupLong: z.string().refine((t) => t.includes('{group}') && t.includes('{i}'), 'needs {group} and {i}').optional(),   // v3.3: long form for headings / screen readers ("Средние, часть 1")
  }).strict()),
  options: z.object({
    breeds: z.enum(['cards', 'variants']),
    flagsOnExtinct: z.array(z.enum(['EW', 'PE'])),
  }).strict(),
  shelves: z.array(Shelf).min(1),
}).strict().refine((r) => !r.shelves.some((s) => s.id === 'prehistoric'), 'there is no prehistoric shelf');

/* ---------- size ---------- */
const LenUnit = z.enum(['mm', 'm']);
const MassUnit = z.enum(['g', 'kg', 't']);
const SrcUnit = z.enum(['mm', 'cm', 'm', 'g', 'kg', 't']);
const pair = z.tuple([z.number().positive(), z.number().positive()]);

const SizeSource = z.object({
  id: z.string(), url: https, title: z.string(),
  use: z.enum(['counted', 'support', 'excluded', 'estimate', 'derived']),
  value: z.number().positive().optional(),
  range: pair.optional(),
  unit: SrcUnit,
  quote: z.string().optional(),
}).strict();

const sizeValue = (unit) => z.object({
  value: z.number().positive(),
  unit,
  mean: z.number().positive().optional(),
  range: pair.optional(),
  basis: z.string().min(3),
  confidence: z.enum(['range_midpoint', 'mean_of_sources', 'single_source', 'estimate']),
  approx: z.boolean(),
  kind: z.enum(['measured', 'derived']),
  derivation: z.object({
    method: z.enum(['body-proportion', 'unit-conversion']),   // published proportion or source only; no image-ratio
    from: z.enum(['height', 'length', 'wingspan', 'mass']).optional(),
    ratio: z.number().positive().optional(),
    note: z.string().trim().min(1),
  }).strict().nullish(),
  sources: z.array(SizeSource).default([]),
  suppliedBy: z.string(),
  checked: isoDate,
}).strict().superRefine((v, ctx) => {
  const need = (ok, message) => { if (!ok) ctx.addIssue({ code: z.ZodIssueCode.custom, message }); };
  need(v.kind !== 'derived' || !!v.derivation, 'derived figure needs derivation');
  need(v.kind !== 'derived' || v.sources.some((s) => s.use === 'derived'), 'derived figure needs a source with use: derived (C14)');
  need(!(v.kind === 'derived' || v.confidence === 'single_source' || v.confidence === 'estimate') || v.approx,
       'single-source, estimated or derived figure must be approx');
  need(v.kind !== 'measured' || v.sources.some((s) => s.use === 'counted' || s.use === 'estimate'),
       'measured figure needs a counted or estimate source');
});

/* ---------- geography ---------- */
const Geo = z.object({
  continents: z.array(z.enum(['AF', 'AN', 'AS', 'EU', 'NA', 'OC', 'SA'])).default([]),
  oceans: z.array(z.enum(['ATL', 'PAC', 'IND', 'ARC', 'SOU'])).default([]),
  regions: z.array(z.string().regex(/^\d{3}$/)).default([]),          // UN M49
  countries: z.array(z.string().regex(/^([A-Z]{2}|\*)$/)).default([]), // ISO 3166-1 alpha-2
}).strict();

/* ---------- card meta ---------- */
export const CardMeta = z.object({
  slug,
  scientificName: z.string().min(3),
  rank: z.enum(['species', 'subspecies', 'population', 'breed', 'group']),
  parentSpecies: slug.nullish(),
  breeds: z.array(z.object({ id: slug, sourceUrl: https.optional() }).strict()).optional(),   // v3.4: breeds live inside the species card (registry options.breeds: variants); names/text in copy.breeds
  primaryShelf: slug,
  tags: z.array(slug),
  group: z.enum(['mammal', 'bird', 'reptile', 'amphibian', 'fish', 'insect', 'invertebrate']),
  taxon: z.object({ class: z.string(), order: z.string().optional(), family: z.string().optional() }).strict().optional(),
  primaryShelfOverride: z.object({ reason: z.string().trim().min(1) }).strict().optional(),
  iucn: z.object({
    category: z.enum(['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE']),
    scope: z.string().regex(/^(global|europe|mediterranean|national-[A-Z]{2})$/).default('global'),
    verifiedVia: z.enum(['gbif', 'iucn']).optional(),      // required on new cards (C16); absent on legacy until verified
    checkedAt: isoDate.optional(),                          // required on new cards (C16)
    assessmentUrl: z.string().regex(/^https:\/\/www\.iucnredlist\.org\/species\/\d+\/\d+$/).optional(),   // required on new cards except NE (C16)
    evidence: z.object({                                    // NE only: proof the GBIF lookup was genuinely empty
      matchUrl: https, usageKey: z.number().int().positive(),
      matchType: z.literal('EXACT'), rank: z.enum(['SPECIES', 'SUBSPECIES']),
      taxonomicStatus: z.enum(['ACCEPTED', 'SYNONYM']),
      categoryUrl: https, categoryResponse: z.enum(['NE', 'empty']),
    }).strict().optional(),
    iucnTaxonId: z.string().regex(/^\d+$/).optional(),
    assessedYear: z.number().int().optional(),
  }).strict().superRefine((i, ctx) => {
    const need = (ok, message) => { if (!ok) ctx.addIssue({ code: z.ZodIssueCode.custom, message }); };
    need(i.category !== 'NE' || (i.verifiedVia === 'gbif' && !!i.evidence && !!i.checkedAt), 'NE needs verifiedVia gbif, checkedAt and evidence');
    need(i.category !== 'NE' || (i.scope === 'global' && !i.assessmentUrl), 'NE is global and has no assessment page');
    need(i.category === 'NE' || !i.evidence, 'evidence is only for NE');
    need(i.scope === 'global' || i.verifiedVia === undefined || i.verifiedVia === 'iucn', 'regional assessment must be verified on iucnredlist.org');
  }).optional(),
  otherStatus: z.array(z.discriminatedUnion('system', [
    z.object({ system: z.literal('NatureServe'), value: z.string().regex(/^[GNST]([1-5HXU]|NR|NU|NNR|NA)(T([1-5HXU]|NR))?Q?$/),
               recordUrl: z.string().regex(/^https:\/\/explorer\.natureserve\.org\//), checkedAt: isoDate }).strict(),
    z.object({ system: z.literal('US ESA'), value: z.enum(['LE', 'LT', 'PE', 'PT', 'C', 'XE', 'XN', 'SAE', 'SAT']),
               recordUrl: z.string().regex(/^https:\/\/(ecos\.fws\.gov|www\.fws\.gov)\//), checkedAt: isoDate }).strict(),
    z.object({ system: z.literal('OSPAR'), value: z.literal('Threatened and/or declining'),     // v3.2: OSPAR List (Agreement 2008-06), North-East Atlantic
               regions: z.array(z.enum(['I', 'II', 'III', 'IV', 'V'])).min(1),                 // regions where listed as threatened and/or declining
               regionNote: z.string().optional(),                                              // e.g. "Region III only east of 5° W"
               recordUrl: z.string().regex(/^https:\/\/www\.ospar\.org\//), checkedAt: isoDate }).strict(),
  ])).optional(),
  flags: z.object({
    extinctInWild: z.boolean().optional(),
    possiblyExtinct: z.boolean().optional(),
    possiblyExtinctInWild: z.boolean().optional(),
    functionallyExtinct: z.boolean().optional(),
  }).strict(),
  extinction: z.object({
    year: z.number().int().optional(),
    yearTo: z.number().int().nullish(),
    bp: pair.nullish(),
    period: z.string().nullish(),
    lastRecord: z.number().int().nullish(),
    declared: z.object({ year: z.number().int(), by: z.string() }).strict().nullish(),
    approx: z.boolean(),
    sourceIds: z.array(z.string()).default([]),
  }).strict().refine((e) => e.year != null || e.bp != null || e.period != null || e.lastRecord != null,
                     'extinction needs a date').optional(),
  extinctionPeriod: z.object({                             // v3.3 ruling (a): pre-1500 extinction shown on the pill instead of an IUCN category (Extinct shelf, C16)
    kind: z.enum(['extinct', 'lastRecord']),                // lastRecord = youngest dated record, not a dated extinction
    yearsAgo: z.number().positive().optional(),             // single figure ...
    yearsAgoRange: z.tuple([z.number().positive(), z.number().positive()]).optional(),   // ... or [older, younger]
    basis: z.enum(['calendar', 'radiocarbon']).default('calendar'),
    approx: z.boolean(),                                    // true = rendered with about / около / około / apmēram
    text: z.string().min(1),                                // EN wording as in the CSV, e.g. "about 14,000 years ago"
    sourceUrl: https, quote: z.string().min(1), checkedAt: isoDate,
    humanLink: z.object({ kind: z.enum(['role', 'coexistence']), sourceUrl: https, quote: z.string().min(1) }).strict(),
  }).strict().refine((e) => (e.yearsAgo != null) !== (e.yearsAgoRange != null), 'extinctionPeriod needs yearsAgo or yearsAgoRange')
    .refine((e) => !e.yearsAgoRange || e.yearsAgoRange[0] > e.yearsAgoRange[1], 'yearsAgoRange is [older, younger]').optional(),
  range: z.object({
    realm: z.array(z.enum(['terrestrial', 'freshwater', 'marine'])).min(1),
    current: Geo.default({}),
    former: Geo.optional(),
    islandEndemic: z.boolean().optional(),
  }).strict().optional(),
  size: z.object({
    height: sizeValue(LenUnit).optional(),
    length: sizeValue(LenUnit).optional(),
    wingspan: sizeValue(LenUnit).optional(),
    mass: sizeValue(MassUnit).optional(),
  }).strict().optional(),
  scale: z.object({
    show: z.boolean(),
    basis: z.enum(['height', 'length']),
    sortKey: z.number().positive(),
    sizeGroup: z.enum(['small', 'medium', 'large']).nullish(),
    order: z.number().int().nullish(),
    image: z.object({                                       // null while a row waits for an image (then show: false)
      webp: z.string().regex(/^\/images\/wildlife\/size-scale\/[a-z0-9-]+\.webp$/),
      png: z.string().regex(/^\/images\/wildlife\/size-scale\/[a-z0-9-]+\.png$/).nullish(),
      pxW: z.number().int().positive(), pxH: z.number().int().positive(),
      kind: z.enum(['photo', 'illustration']),
      author: z.string().nullish(), license: z.string().nullish(),
      licenseUrl: https.nullish(), sourceUrl: https.nullish(),
      changed: z.boolean().default(false),
    }).strict().nullish(),
    silhouette: z.object({
      file: z.string(), credit: z.string(),
      viewBox_w: z.number(), viewBox_h: z.number(), ground_y: z.number(), shoulder_y: z.number(),
    }).strict().nullish(),
  }).strict().optional(),
  image: z.object({
    file: z.string().regex(/^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/),
    kind: z.enum(['photo', 'specimen', 'artwork', 'illustration']),
    credit: z.string().min(1),
    license: z.string(),
    licenseUrl: https.optional(),
    sourceUrl: z.union([https, z.literal('')]),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
    fit: z.literal('natural').optional(),
    noText: z.literal(true).optional(),
  }).strict(),
  primarySources: z.array(Link).default([]),
  domestication: z.object({
    wildAncestor: z.string().optional(),
    origin: Geo.optional(),
    yearsAgo: z.object({ from: z.number().positive(), to: z.number().positive(), approx: z.boolean() }).strict().optional(),
    formed: z.object({ year: z.number().int(), approx: z.boolean() }).strict().optional(),
    sourceIds: z.array(z.string()).default([]),
  }).strict().optional(),
  provenance: z.object({
    batch: z.string().optional(),
    added: isoDate,
    migratedFrom: z.literal('speciesMeta').optional(),
    suppliedBy: z.array(z.string()).default([]),
  }).strict(),
}).strict().refine((c) => c.era == null && c.primaryShelf !== 'prehistoric' && !(c.tags || []).includes('prehistoric'),
  'there is no prehistoric shelf');

/* ---------- rules.json: IUCN category names (v3.2) ---------- */
const IUCN_CODES = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE'];
const CodeMap = (v) => z.object(Object.fromEntries(IUCN_CODES.map((c) => [c, v]))).strict();
const CategoryNames = z.object({
  sourceUrl: https.nullable(),                               // official source of the names; null only while names are placeholders
  suppliedBy: z.string().optional(),
  receivedAt: isoDate.optional(),                            // v3.3
  names: CodeMap(z.string().min(1).nullable()),              // card forms; null = placeholder
  officialNames: CodeMap(z.string().min(1)).optional(),      // v3.3: the form as the source writes it (detail pages, glossaries)
  nameSources: z.record(z.enum(IUCN_CODES), https).optional(),          // v3.3: per-code source when not the locale sourceUrl
  needsNativeReview: z.array(z.enum(IUCN_CODES)).optional(),            // v3.3: card form not verbatim in a source; S14 WARN, not FAIL
  note: z.string().optional(),
}).strict().refine((n) => Object.values(n.names).every((v) => v === null) || !!n.sourceUrl, 'names need sourceUrl')
  .refine((n) => (n.needsNativeReview || []).every((c) => n.names[c] != null), 'needsNativeReview only on filled names');
export const IucnCategoryNames = perLocale(CategoryNames);

/* ---------- rules.json: numberFormat + measureMethods (v3.3.3) ---------- */
const UnitWords = perLocale(z.object({ m: z.string().min(1), cm: z.string().min(1), mm: z.string().min(1) }).strict());
export const NumberFormat = z.object({
  _note: z.string().optional(),
  rounding: z.literal('half-up'),                         // v3.3.3: explicit; do not infer from zeroGuard prose
  promoteAfterRounding: z.literal(true),                  // v3.3.3: data rule; after rounding, move to next unit at threshold
  thresholdsM: z.object({
    mmMaxExclusive: z.number().positive(),
    cmMaxExclusive: z.number().positive(),
  }).strict(),
  decimals: z.object({
    mm: z.number().int().min(0).max(2),
    mmFallback: z.number().int().min(0).max(2),
    mmFallbackMax: z.number().int().min(0).max(2),        // v3.3.3: second mm guard (2 decimals); still 0 => C6 fail
    cm: z.number().int().min(0).max(2),
    m: z.number().int().min(0).max(2),
  }).strict(),
  units: UnitWords,
  decimalSeparator: perLocale(z.string().min(1).max(1)),
  zeroGuard: z.string().min(1),
}).strict();

export const MeasureMethod = z.object({
  _note: z.string().optional(),
  appliesTo: z.string().min(1),
  basis: z.string().min(3),
  definition: z.string().min(1),
  primarySource: z.string().min(1),
  support: z.string().optional(),
  kitBodyType: z.string().optional(),
  mammothNote: z.string().optional(),
  scaleBasisRequired: z.enum(['height', 'length']).optional(),  // v3.3.3: body-length methods require height scaling (C19)
  lengthLabel: perLocale(z.string().min(1)),
}).strict();

export const MeasureMethods = z.object({
  proboscideanBodyLength: MeasureMethod,
}).strict().passthrough();   // allow future method keys; Registry must NOT gain methodLabels (single source = lengthLabel here)

/* ---------- status-labels.json (v3.3, 2.11) ---------- */
const Label = z.object({
  text: z.string().min(1).nullable(), sourceUrl: https.nullable(), quote: z.string().optional(),
  needsNativeReview: z.boolean().optional(), note: z.string().optional(), verified: z.string().optional(),
}).strict().refine((l) => l.text === null || !!l.sourceUrl || l.needsNativeReview === true || /composed template/.test(l.note || ''),
  'a filled label needs sourceUrl, needsNativeReview or a composed-template note');
const SourceRef = z.object({ title: z.string(), url: https }).passthrough();
const LocaleLabels = z.object({
  sourceUrl: https, sources: z.array(SourceRef).min(1),
  iucnCategory: z.object({ card: Label, short: Label, full: Label, orgName: Label }).strict(),
  assessor: z.object({ iucn: z.string(), natureServe: z.string(), usEsa: z.string(), ospar: z.string() }).strict(),
  otherSystem: z.object({ card: Label }).strict(),
  notEvaluated: z.object({ card: Label, detail: Label }).strict(),
  systems: z.object({
    natureServe: z.object({ name: Label, intro: Label }).strict(),
    usEsa: z.object({ name: Label, intro: Label }).strict(),
    ospar: z.object({ name: Label, full: Label, intro: Label }).strict(),
  }).strict(),
  ospar: z.object({ threatenedDeclining: z.string().nullable(), regions: z.string().nullable() }).strict(),
  scope: z.object({ global: z.string().nullable(), europe: z.string().nullable(), mediterranean: z.string().nullable(), national: z.string().nullable() }).strict(),
  natureServe: z.record(z.string().nullable()),
  usEsa: z.record(z.string().nullable()),
  sizeGroups: z.object({ small: z.string(), medium: z.string(), large: z.string(), subgroup: z.string(), subgroupLong: z.string(), impliedNoun: z.string().optional() }).strict(),
  extinctionPeriod: z.object({ extinct: Label, extinctRange: Label, lastRecord: Label, lastRecordRange: Label,
    years: z.record(z.string()), yearsPluralRule: z.string(), needsNativeReview: z.boolean() }).strict(),
  noIucnBefore1500: Label,
}).strict();
export const StatusLabels = z.object({ _note: z.string().optional(), version: isoDate, en: LocaleLabels, ru: LocaleLabels, pl: LocaleLabels, lv: LocaleLabels }).strict();

export const MetaFile = z.object({ shelf: slug, cards: z.array(CardMeta) }).strict();

/* ---------- per-locale copy ---------- */
const ScaleCopy = z.object({
  heightLabel: z.string().min(1), lengthLabel: z.string().min(1),
  captionExtra: z.string().optional(), credit: z.string().optional(), changes: z.string().optional(),
  sources: z.array(Link).min(1),
}).strict();

export const CardCopy = z.object({
  commonName: z.string().min(1), hook: z.string().min(1), imageAlt: z.string().min(1),
  what: z.string().min(1), range: z.string().min(1), story: z.string().min(1),
  when: z.string().min(1), humanRole: z.string().min(1),
  sources: z.array(Link).default([]),
  sourcesNote: z.string().optional(),
  gridSource: Link.optional(),
  badgeText: z.string().optional(),
  statusPill: z.string().optional(),
  breedName: z.string().optional(),
  breeds: z.record(z.string(), z.object({ name: z.string().min(1), text: z.string().optional() }).strict()).optional(),   // v3.4: per-locale breed section on the species card, keyed by meta.breeds[].id
  image: z.object({
    caption: z.string().optional(), credit: z.string().optional(),
    licenseLabel: z.string().optional(), filePageLabel: z.string().optional(),
  }).strict().optional(),
  scale: ScaleCopy.optional(),
}).strict();

export const CopyFile = z.object({
  locale: z.enum(LOCALES), shelf: slug, cards: z.record(slug, CardCopy),
}).strict();
