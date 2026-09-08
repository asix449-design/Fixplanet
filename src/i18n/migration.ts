import {
  getMigrationEntryMeta,
  migrationEntryMeta,
  type MigrationEntry,
  type MigrationEntryCopy,
  type MigrationShelf,
} from '../data/migration';
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

export { migrationShelfKeys } from '../data/migration';
