import {
  getMigrationEntryMeta,
  migrationEntryMeta,
  type MigrationEntry,
  type MigrationEntryCopy,
  type MigrationShelf,
} from '../data/migration';
import {
  humanEraMeta,
  type HumanEraCoverage,
  type HumanEraId,
  type HumanEraMeta,
} from '../data/human-migration-eras';
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

export type HumanEraCopy = {
  label: string;
  title: string;
  where: string;
  why: string;
  uncertainty: string;
  caption: string;
  imageAlt: string;
};

export type HumanEraAtlasCopy = {
  title: string;
  lead: string;
  honesty: string;
  aria: string;
  scrubberAria: string;
  eraLabel: string;
  whereLabel: string;
  whyLabel: string;
  uncertaintyLabel: string;
  nearestNote: string;
  sourceLabel: string;
  licenseLabel: string;
  vintageLabel: string;
  schematicCredit: string;
  greatMigrationsCta: string;
  greatMigrationsNote: string;
  coverage: Record<HumanEraCoverage, string>;
  eras: Record<HumanEraId, HumanEraCopy>;
};

export type HumanEraFrame = HumanEraMeta & HumanEraCopy;

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
    eraAtlas: HumanEraAtlasCopy;
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

export function getHumanMigrationEras(locale: Locale): HumanEraFrame[] {
  const atlas = pages[locale].humans.eraAtlas;
  const fallback = pages.en.humans.eraAtlas;
  return humanEraMeta.map((meta) => {
    const fields = atlas.eras[meta.id] ?? fallback.eras[meta.id];
    return { ...meta, ...fields };
  });
}

export { migrationShelfKeys } from '../data/migration';
