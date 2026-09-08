import {
  currentFrames,
  oceanHeroStatIds,
  oceanPanelKeys,
  oceanStats,
  pollutionStills,
  salinityFrames,
  sstAnomalyFrames,
  sstFrames,
  type OceanFrame,
  type OceanFrameCopy,
  type OceanPanel,
  type OceanPollution,
  type OceanPollutionCopy,
  type OceanStat,
  type OceanStatCopy,
} from '../data/oceans';
import type { Locale } from './config';
import { en } from './oceans-en';
import { lv } from './oceans-lv';
import { pl } from './oceans-pl';
import { ru } from './oceans-ru';

export type OceansPage = {
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
  tiles: Record<OceanPanel, string>;
  panels: Record<OceanPanel, string>;
  leads: Record<OceanPanel, string[]>;
  honestyCurrents: string;
  honestySalinity: string;
  honestySst: string;
  honestyPollution: string;
  modeSst: string;
  modeAnomaly: string;
  fidelitySst: string;
  fidelityAnomaly: string;
  fidelitySalinity: string;
  fidelityCurrents: string;
  scrubberAria: string;
  salinityAria: string;
  yearLabel: string;
  sourceLabel: string;
  licenseLabel: string;
  vintageLabel: string;
  howToReadSst: string;
  caveatsSst: string;
  howToReadSalinity: string;
  openWorldviewSst: string;
  openWorldviewAnom: string;
  openWorldviewSmap: string;
  openOscar: string;
  openCopernicus: string;
  openNoaaPollution: string;
  openNoaaPatches: string;
  openOceanColor: string;
  oscarNote: string;
  smapNote: string;
  numbersNote: string;
  distinguishTitle: string;
  distinguish: string;
  pollutionKinds: Record<
    'patches' | 'plastics' | 'oil' | 'nutrient' | 'deadzones',
    OceanPollutionCopy
  >;
  units: Record<
    | 'percent'
    | 'pH'
    | 'millionTonnes'
    | 'trillion'
    | 'sites'
    | 'ohc'
    | 'earthSurface'
    | 'mmYear'
    | 'oxygen'
    | 'stocks'
    | 'coral'
    | 'mpa'
    | 'millionHa',
    string
  >;
  frames: Record<string, OceanFrameCopy>;
  stats: Record<string, OceanStatCopy>;
};

const page: Record<Locale, OceansPage> = { en, ru, pl, lv };

export function getOceansPage(locale: Locale): OceansPage {
  return page[locale];
}

export function getOceanSstFrames(locale: Locale, mode: 'sst' | 'sst-anomaly' = 'sst'): OceanFrame[] {
  const copy = page[locale].frames;
  const fallback = page.en.frames;
  const meta = mode === 'sst-anomaly' ? sstAnomalyFrames : sstFrames;
  return meta.map((item) => {
    const fields = copy[item.id] ?? fallback[item.id];
    return { ...item, ...fields };
  });
}

export function getOceanSalinityFrames(locale: Locale): OceanFrame[] {
  const copy = page[locale].frames;
  const fallback = page.en.frames;
  return salinityFrames.map((item) => {
    const fields = copy[item.id] ?? fallback[item.id];
    return { ...item, ...fields };
  });
}

export function getOceanCurrentFrames(locale: Locale): OceanFrame[] {
  const copy = page[locale].frames;
  const fallback = page.en.frames;
  return currentFrames.map((item) => {
    const fields = copy[item.id] ?? fallback[item.id];
    return { ...item, ...fields };
  });
}

export function getOceanPollution(locale: Locale): OceanPollution[] {
  const copy = page[locale].pollutionKinds;
  return pollutionStills.map((item) => ({
    ...item,
    ...copy[item.id as keyof typeof copy],
  }));
}

export function getOceanStats(locale: Locale): OceanStat[] {
  const copy = page[locale].stats;
  const fallback = page.en.stats;
  return oceanStats.map((item) => {
    const fields = copy[item.id] ?? fallback[item.id];
    return { ...item, ...fields };
  });
}

export function getOceanHeroStats(locale: Locale): OceanStat[] {
  const byId = new Map(getOceanStats(locale).map((stat) => [stat.id, stat]));
  return oceanHeroStatIds.flatMap((id) => {
    const stat = byId.get(id);
    return stat ? [stat] : [];
  });
}

export { oceanPanelKeys };
