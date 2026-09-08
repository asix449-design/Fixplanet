import {
  forestFrames,
  forestHeroStatIds,
  forestStats,
  type ForestFrame,
  type ForestFrameCopy,
  type ForestPanel,
  type ForestStat,
  type ForestStatCopy,
} from '../data/forests';
import type { Locale } from './config';
import { en } from './forests-en';
import { lv } from './forests-lv';
import { pl } from './forests-pl';
import { ru } from './forests-ru';

export type ForestsPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  hubLead: string[];
  choosePanel: string;
  heroNote: string;
  heroSources: string;
  filterAria: string;
  back: string;
  tiles: Record<ForestPanel, string>;
  panels: Record<ForestPanel, string>;
  leads: Record<ForestPanel, string[]>;
  honestySatellite: string;
  honestyReconstruction: string;
  modeSatellite: string;
  modeReconstruction: string;
  fidelitySatellite: string;
  fidelityReconstruction: string;
  scrubberAria: string;
  yearLabel: string;
  eraLabel: string;
  openGfw: string;
  gfwNote: string;
  sourceLabel: string;
  licenseLabel: string;
  vintageLabel: string;
  howToRead: string;
  caveats: string;
  distinguishTitle: string;
  distinguish: string;
  numbersNote: string;
  trendTitle: string;
  trendLead: string;
  longViewCaption: string;
  longViewAlt: string;
  scenarioTitle: string;
  scenarioLead: string;
  scenarios: Record<'continued' | 'slower' | 'restore', { title: string; text: string }>;
  worksTitle: string;
  worksLead: string;
  works: Record<'soy' | 'indonesia' | 'indigenous' | 'protected', { title: string; text: string }>;
  mapsLink: string;
  mapsLinkCta: string;
  units: Record<
    'billionHa' | 'millionHa' | 'millionHaYear' | 'percent' | 'ofLand' | 'gigatonnesC' | 'trillionTrees',
    string
  >;
  frames: Record<string, ForestFrameCopy>;
  stats: Record<string, ForestStatCopy>;
};

const page: Record<Locale, ForestsPage> = { en, ru, pl, lv };

export function getForestsPage(locale: Locale): ForestsPage {
  return page[locale];
}

export function getForestFrames(
  locale: Locale,
  mode?: 'satellite' | 'reconstruction',
): ForestFrame[] {
  const copy = page[locale].frames;
  const fallback = page.en.frames;
  return forestFrames
    .filter((meta) => !mode || meta.mode === mode)
    .map((meta) => {
      const fields = copy[meta.id] ?? fallback[meta.id];
      return { ...meta, ...fields };
    });
}

export function getForestStats(locale: Locale): ForestStat[] {
  const copy = page[locale].stats;
  const fallback = page.en.stats;
  return forestStats.map((meta) => {
    const fields = copy[meta.id] ?? fallback[meta.id];
    return { ...meta, ...fields };
  });
}

export function getForestHeroStats(locale: Locale): ForestStat[] {
  const byId = new Map(getForestStats(locale).map((stat) => [stat.id, stat]));
  return forestHeroStatIds.flatMap((id) => {
    const stat = byId.get(id);
    return stat ? [stat] : [];
  });
}

export { forestPanelKeys };
