import { LOCALES } from './schema.mjs';

const COPY_KNOWN = new Set([
  'commonName', 'hook', 'imageAlt', 'what', 'range', 'story', 'when', 'humanRole',
  'sources', 'sourcesList', 'gridSource', 'tag', 'statusPill', 'caption', 'photoCredit',
  'licenseLabel', 'filePageLabel', 'licenseUrl',
]);

const IUCN_ASSESSMENT = /^https:\/\/www\.iucnredlist\.org\/species\/\d+\/\d+$/;

/**
 * Map one current speciesMeta row plus its four locale copies into CardMeta + CardCopy.
 * Rank stays `species`. Group, class, and order come from legacy-groups.json (GBIF).
 */
export function adaptLegacyCard(meta, copyByLoc, groupInfo) {
  const flags = {};
  let iucn;
  if (meta.iucn) {
    iucn = { category: meta.iucn === 'CR_PE' ? 'CR' : meta.iucn };
    if (meta.iucn === 'CR_PE') flags.possiblyExtinct = true;
    if (meta.iucn === 'EW') flags.extinctInWild = true;
    const assessment = (meta.primarySources || []).find((p) => IUCN_ASSESSMENT.test(p.url));
    if (assessment) iucn.assessmentUrl = assessment.url;
  }
  if (meta.functionallyExtinct) flags.functionallyExtinct = true;

  const licenseUrl = copyByLoc.en?.licenseUrl;
  const image = {
    file: meta.image.file,
    credit: meta.image.credit,
    license: meta.image.license,
    sourceUrl: meta.image.sourceUrl,
    kind: meta.image.license ? 'photo' : 'illustration',
  };
  if (meta.image.width) image.width = meta.image.width;
  if (meta.image.height) image.height = meta.image.height;
  if (meta.image.fit) image.fit = meta.image.fit;
  if (licenseUrl) image.licenseUrl = licenseUrl;

  const taxon = {};
  if (groupInfo.class) taxon.class = groupInfo.class;
  if (groupInfo.order) taxon.order = groupInfo.order;
  const card = {
    slug: meta.slug,
    scientificName: meta.scientificName,
    rank: 'species',
    parentSpecies: null,
    primaryShelf: meta.status,
    tags: [],
    group: groupInfo.group,
    ...(taxon.class ? { taxon } : {}),
    flags,
    ...(iucn ? { iucn } : {}),
    image,
    primarySources: meta.primarySources || [],
    provenance: { migratedFrom: 'speciesMeta', added: '2026-10-08', suppliedBy: [] },
  };

  /** @type {Record<string, object>} */
  const copy = {};
  const unmapped = [];
  for (const loc of LOCALES) {
    const c = copyByLoc[loc];
    if (!c) continue;
    const o = {
      commonName: c.commonName,
      hook: c.hook,
      imageAlt: c.imageAlt,
      what: c.what,
      range: c.range,
      story: c.story,
      when: c.when,
      humanRole: c.humanRole,
      sources: c.sourcesList || [],
    };
    if (c.sources) o.sourcesNote = c.sources;
    if (c.gridSource) o.gridSource = c.gridSource;
    if (c.tag) o.badgeText = c.tag;
    if (c.statusPill) o.statusPill = c.statusPill;
    const img = {};
    if (c.caption) img.caption = c.caption;
    if (c.photoCredit) img.credit = c.photoCredit;
    if (c.licenseLabel) img.licenseLabel = c.licenseLabel;
    if (c.filePageLabel) img.filePageLabel = c.filePageLabel;
    if (Object.keys(img).length) o.image = img;
    for (const k of Object.keys(c)) {
      if (!COPY_KNOWN.has(k) && !['slug', 'scientificName', 'status', 'iucn', 'functionallyExtinct', 'image', 'primarySources'].includes(k)) {
        unmapped.push(`${loc}.${k}`);
      }
    }
    copy[loc] = o;
  }
  return { card, copy, unmapped };
}

/**
 * @param {readonly { slug: string, status: string, scientificName: string, iucn?: string, functionallyExtinct?: boolean, image: object, primarySources?: object[] }[]} metaList
 * @param {Record<string, Record<string, object>>} copyByLocale slug maps, no English fallback applied
 * @param {{ cards: Record<string, { group: string }> }} groups
 */
export function adaptLegacyCatalogue(metaList, copyByLocale, groups) {
  /** @type {Record<string, { meta: { shelf: string, cards: object[] }, copy: Record<string, { locale: string, shelf: string, cards: Record<string, object> }> }>} */
  const shelves = {};
  const unmapped = [];
  for (const meta of metaList) {
    const groupInfo = groups.cards[meta.slug];
    if (!groupInfo) throw new Error(`legacy-groups.json has no row for ${meta.slug}`);
    const copyByLoc = Object.fromEntries(LOCALES.map((loc) => [loc, copyByLocale[loc]?.[meta.slug]]));
    const adapted = adaptLegacyCard(meta, copyByLoc, groupInfo);
    if (adapted.unmapped.length) unmapped.push(`${meta.slug}: ${adapted.unmapped.join(', ')}`);
    const id = meta.status;
    const bucket = shelves[id] ??= { meta: { shelf: id, cards: [] }, copy: {} };
    bucket.meta.cards.push(adapted.card);
    for (const loc of LOCALES) {
      if (!adapted.copy[loc]) continue;
      const file = bucket.copy[loc] ??= { locale: loc, shelf: id, cards: {} };
      file.cards[meta.slug] = adapted.copy[loc];
    }
  }
  return { shelves, unmapped };
}

/**
 * CardMeta + one locale's CardCopy -> the Species shape pages render.
 */
export function toSpecies(card, copy) {
  let iucn = card.iucn?.category;
  if (card.iucn?.category === 'CR' && card.flags?.possiblyExtinct) iucn = 'CR_PE';
  const image = {
    file: card.image.file,
    credit: card.image.credit,
    license: card.image.license,
    sourceUrl: card.image.sourceUrl,
  };
  if (card.image.width) image.width = card.image.width;
  if (card.image.height) image.height = card.image.height;
  if (card.image.fit) image.fit = card.image.fit;
  /** @type {Record<string, unknown>} */
  const species = {
    slug: card.slug,
    scientificName: card.scientificName,
    status: card.primaryShelf,
    image,
    commonName: copy.commonName,
    hook: copy.hook,
    imageAlt: copy.imageAlt,
    what: copy.what,
    range: copy.range,
    story: copy.story,
    when: copy.when,
    humanRole: copy.humanRole,
    sources: copy.sourcesNote || '',
  };
  if (iucn) species.iucn = iucn;
  if (card.flags?.functionallyExtinct) species.functionallyExtinct = true;
  if (card.primarySources?.length) species.primarySources = card.primarySources.map((p) => ({ label: p.label, url: p.url }));
  if (copy.badgeText) species.tag = copy.badgeText;
  if (copy.statusPill) species.statusPill = copy.statusPill;
  if (copy.gridSource) species.gridSource = { label: copy.gridSource.label, url: copy.gridSource.url };
  if (copy.sources?.length) species.sourcesList = copy.sources.map((p) => ({ label: p.label, url: p.url }));
  if (copy.image?.caption) species.caption = copy.image.caption;
  if (copy.image?.credit) species.photoCredit = copy.image.credit;
  if (copy.image?.licenseLabel) species.licenseLabel = copy.image.licenseLabel;
  if (copy.image?.filePageLabel) species.filePageLabel = copy.image.filePageLabel;
  if (card.image.licenseUrl) species.licenseUrl = card.image.licenseUrl;
  return species;
}
