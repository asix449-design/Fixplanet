import {
  getMigrationEntryMeta,
  migrationEntryMeta,
  type MigrationEntry,
  type MigrationEntryCopy,
  type MigrationShelf,
} from '../data/migration';
import {
  humanMapLinkMeta,
  type HumanMapExtraId,
  type HumanMapLinkId,
  type HumanMapLinkMeta,
} from '../data/human-map-links';
import {
  humanEventMeta,
  type HumanEventCoverage,
  type HumanEventId,
  type HumanEventMeta,
} from '../data/human-migration-events';
import type { Locale } from './config';
import { entries as enEntries, page as en } from './migration-en';
import { entries as lvEntries, page as lv } from './migration-lv';
import { entries as plEntries, page as pl } from './migration-pl';
import { entries as ruEntries, page as ru } from './migration-ru';

export type HumanSection = {
  id: string;
  title: string;
  body: string;
};

export type HumanEventCopy = {
  label: string;
  title: string;
  when: string;
  where: string;
  why: string;
  uncertainty: string;
  caption: string;
  imageAlt: string;
  license?: string;
};

export type HumanEventAtlasCopy = {
  title: string;
  lead: string;
  honesty: string;
  aria: string;
  scrubberAria: string;
  eventLabel: string;
  whenLabel: string;
  whereLabel: string;
  whyLabel: string;
  uncertaintyLabel: string;
  nearestNote: string;
  forthcomingNote: string;
  sourceLabel: string;
  licenseLabel: string;
  vintageLabel: string;
  schematicCredit: string;
  greatMigrationsCta: string;
  greatMigrationsNote: string;
  coverage: Record<HumanEventCoverage, string>;
  events: Record<HumanEventId, HumanEventCopy>;
};

export type HumanEventFrame = HumanEventMeta & HumanEventCopy;
/** @deprecated Prefer HumanEventFrame */
export type HumanEraFrame = HumanEventFrame;
export type HumanEraCopy = HumanEventCopy;
export type HumanEraAtlasCopy = HumanEventAtlasCopy;

export type HumanMapLinkCardCopy = {
  title: string;
  hook: string;
};

export type HumanMapLinksCopy = {
  title: string;
  lead: string;
  openMap: string;
  listedBy: string;
  extraLabels: Record<HumanMapExtraId, string>;
  cards: Record<HumanMapLinkId, HumanMapLinkCardCopy>;
};

export type HumanMapLinkCard = HumanMapLinkMeta & HumanMapLinkCardCopy;

export type MigrationPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  hubLead: string[];
  chooseShelf: string;
  filterAria: string;
  back: string;
  cardCta: string;
  primarySource: string;
  imageCredit: string;
  sourcesLabel: string;
  what: string;
  route: string;
  drivers: string;
  timing: string;
  pressure: string;
  wildlifeLink: string;
  tiles: Record<MigrationShelf, string>;
  hubTitles: {
    humans: string;
    'great-migrations': string;
  };
  entrances: {
    aria: string;
    refugees: { title: string; text: string };
    remittances: { title: string; text: string };
    missing: { title: string; text: string };
  };
  shelves: Record<MigrationShelf, string>;
  shelfLeads: Record<MigrationShelf, string>;
  humans: {
    heroEyebrow: string;
    scientificName: string;
    imageAlt: string;
    appearedLabel: string;
    appeared: string;
    populationLabel: string;
    population: string;
    framing: string[];
    wildlifePointer: string;
    wildlifeCta: string;
    greatMigrationsCta: string;
    greatMigrationsNote: string;
    mapTitle: string;
    mapAria: string;
    mapLead: string;
    mapAfrica: string;
    mapOut: string;
    mapAustralia: string;
    mapEurasia: string;
    mapAmericas: string;
    mapIslands: string;
    mapLegend: string;
    mapPinAfrica: string;
    mapPinOut: string;
    mapPinAustralia: string;
    mapPinEurasia: string;
    mapPinAmericas: string;
    mapPinIslands: string;
    mapSources: string;
    mapBaseCredit: string;
    honesty: string;
    mapLinks: HumanMapLinksCopy;
    eventAtlas: HumanEventAtlasCopy;
    sections: HumanSection[];
  };
  today: TodayShelfCopy;
};

export type TodayRefugeeCardId =
  | 'refugees-unhcr-stock-2025'
  | 'refugees-top-hosts-2025'
  | 'refugees-top-origins-2025'
  | 'refugees-neighbouring-hosts-2025'
  | 'refugees-returns-2025';

export type TodayRefugeeCardCopy = {
  tag: string;
  title: string;
  hook: string;
  figure: string;
  unit: string;
  rows: { label: string; figure: string }[];
  detail: string[];
};

export type TodayCampId =
  | 'coxs-bazar'
  | 'dadaab'
  | 'kakuma-kalobeyei'
  | 'bidibidi'
  | 'zaatari';

export type TodayRouteId =
  | 'central-mediterranean'
  | 'eastern-mediterranean'
  | 'western-africa'
  | 'western-mediterranean'
  | 'western-balkans';

export type TodayShelfCopy = {
  approx: string;
  idpTitle: string;
  idpLead: string;
  idpDefinition: string;
  idpHonesty: string;
  idpNotes: string;
  idpMillion: string;
  idpMovementsUnit: string;
  idpStockUnit: string;
  idpConflictLabel: string;
  idpDisasterLabel: string;
  idpCountriesLabel: string;
  idpBothLabel: string;
  idpCrisesTitle: string;
  idpSourceSummary: string;
  idpSourcePdf: string;
  idpSourceHub: string;
  idpCards: Record<
    | 'idp-stock-2025'
    | 'idp-conflict-displacements-2025'
    | 'idp-disaster-displacements-2025'
    | 'idp-movements-2025-overview',
    { tag: string; title: string; hook: string; detail: string[] }
  >;
  idpCrisisCopy: Record<string, { place: string; note: string }>;
  refugeesTitle: string;
  refugeesLead: string;
  refugeesDefinition: string;
  refugeesHonesty: string;
  refugeesSourceTrends: string;
  refugeesSourcePdf: string;
  refugeesSourceFinder: string;
  refugeesSourcePress: string;
  refugeesSourceHosting: string;
  refugeesCards: Record<TodayRefugeeCardId, TodayRefugeeCardCopy>;
  campsTitle: string;
  campsLead: string;
  campsHonesty: string;
  campsRegister: string;
  campAsOf: string;
  campPeople: string;
  campCopy: Record<TodayCampId, { name: string; country: string; note: string; source: string }>;
  detectionsTitle: string;
  detectionsLead: string;
  detectionsHonesty: string;
  detectionsMetric: string;
  detectionsChange: string;
  detectionsLower: string;
  detectionsHigher: string;
  detectionsPeople: string;
  detectionsUncounted: string;
  detectionsRoutesTitle: string;
  detectionsNationalities: string;
  detectionsSource2024: string;
  detectionsSource2025: string;
  yearCopy: Record<'2024' | '2025', { note: string }>;
  routeCopy: Record<TodayRouteId, { name: string; note: string }>;
};

const pages: Record<Locale, MigrationPage> = { en, ru, pl, lv };

const copy: Record<Locale, Record<string, MigrationEntryCopy>> = {
  en: enEntries,
  ru: ruEntries,
  pl: plEntries,
  lv: lvEntries,
};

export function getMigrationPage(locale: Locale): MigrationPage {
  return pages[locale];
}

export function getMigrationEntries(locale: Locale): MigrationEntry[] {
  return migrationEntryMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getMigrationByShelf(
  locale: Locale,
  shelf: Exclude<MigrationShelf, 'humans'>,
): MigrationEntry[] {
  return getMigrationEntries(locale).filter((item) => item.shelf === shelf);
}

export function getMigrationBySlug(
  locale: Locale,
  slug: string,
): MigrationEntry | undefined {
  const meta = getMigrationEntryMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][slug] ?? copy.en[slug];
  if (!fields) return undefined;
  return { ...meta, ...fields };
}

export function getHumanMigrationEvents(locale: Locale): HumanEventFrame[] {
  const atlas = pages[locale].humans.eventAtlas;
  const fallback = pages.en.humans.eventAtlas;
  return humanEventMeta.map((meta) => {
    const fields = atlas.events[meta.id] ?? fallback.events[meta.id];
    return { ...meta, ...fields };
  });
}

export const getHumanMigrationEras = getHumanMigrationEvents;

export function getHumanMapLinks(locale: Locale): HumanMapLinkCard[] {
  const cards = pages[locale].humans.mapLinks.cards;
  const fallback = pages.en.humans.mapLinks.cards;
  return humanMapLinkMeta.map((meta) => {
    const fields = cards[meta.id] ?? fallback[meta.id];
    return { ...meta, ...fields };
  });
}

export { migrationShelfKeys } from '../data/migration';
