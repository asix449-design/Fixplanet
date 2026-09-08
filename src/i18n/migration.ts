import {
  getMigrationEntryMeta,
  migrationEntryMeta,
  type MigrationEntry,
  type MigrationEntryCopy,
  type MigrationShelf,
} from '../data/migration';
import type { TodayRegionId } from '../data/migration-today';
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
    eventAtlas: HumanEventAtlasCopy;
    sections: HumanSection[];
  };
  birds: {
    flywaysTitle: string;
    flywaysAria: string;
    flywaysLead: string;
    flywaysHonesty: string;
    flywaysLegend: string;
    flywayEastAtlantic: string;
    flywayMississippi: string;
    flywayPacificAmericas: string;
    flywayEaaf: string;
    flywayCentralAsian: string;
    flywayAfricanEurasian: string;
    flywaysSources: string;
    flywaysBaseCredit: string;
  };
  today: TodayShelfCopy;
};

export type TodayRegionCopy = {
  name: string;
  shortName: string;
  caption: string;
  originsIntro: string;
  corridorsIntro: string;
};

export type TodayShelfCopy = {
  mapTitle: string;
  mapAria: string;
  lead: string;
  honesty: string;
  tabletHint: string;
  netLabel: string;
  netUnitMillion: string;
  netUnitPeople: string;
  stockLabel: string;
  stockUnitMillion: string;
  originsTitle: string;
  originsHint: string;
  corridorsTitle: string;
  corridorsNote: string;
  close: string;
  openTablet: string;
  million: string;
  approx: string;
  intraCaption: string;
  remainderNote: string;
  stockNotFlow: string;
  arrowLegend: string;
  mapCredit: string;
  emptyPanel: string;
  regions: Record<TodayRegionId, TodayRegionCopy>;
  originNames: Record<TodayRegionId, string>;
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
  shelf: Exclude<MigrationShelf, 'humans' | 'today'>,
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

export { migrationShelfKeys } from '../data/migration';
