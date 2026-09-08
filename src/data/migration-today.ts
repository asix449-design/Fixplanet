import { cite, type PrimarySource } from './sources';
import todayJson from '../../public/data/migration-today.json';

export const todayRegionIds = [
  'africa',
  'asia',
  'europe',
  'latin-america-caribbean',
  'northern-america',
  'oceania',
] as const;

export type TodayRegionId = (typeof todayRegionIds)[number];

export type TodayOriginRow = {
  id: TodayRegionId | string;
  value: number;
  approx: boolean;
};

export type TodayCorridor = {
  id: string;
  from: string;
  to: string;
  fromRegion: TodayRegionId;
  toRegion: TodayRegionId;
  stock: number | null;
  approx: boolean;
  year: number;
  kind: 'intra-regional' | 'inter-regional';
  note: string;
};

export type TodayDataset = {
  title: string;
  committed: string;
  notes: string[];
  netMigration: {
    year: number;
    unit: string;
    indicator: string;
    sourceId: string;
    sourceLabel: string;
    sourceUrl: string;
    citation: string;
    geography: string;
    estimateNote: string;
    worldNet: number;
    regions: Record<TodayRegionId, number>;
  };
  migrantStock: {
    year: number;
    asOf: string;
    unit: string;
    sourceId: string;
    sourceLabel: string;
    sourceUrl: string;
    citation: string;
    world: number;
    regions: Record<
      TodayRegionId,
      { destination: number; origins: TodayOriginRow[] }
    >;
  };
  intraRegional: {
    sourceId: string;
    note: string;
    europeBornLivingInEurope: number;
    oceaniaBornLivingInOceania: number;
    subSaharanAfricaBornLivingInRegion: number;
    worldwideLivingInRegionOfBirth: number;
  };
  corridors: TodayCorridor[];
};

export const todayDataset = todayJson as TodayDataset;

/** Overlay positions on the BlankMap-World frame (percent of map box). */
export const todayTabletLayout: Record<
  TodayRegionId,
  { left: number; top: number }
> = {
  'northern-america': { left: 18, top: 28 },
  europe: { left: 49, top: 22 },
  asia: { left: 70, top: 32 },
  africa: { left: 49, top: 52 },
  'latin-america-caribbean': { left: 26, top: 62 },
  oceania: { left: 86, top: 68 },
};

/** Schematic arrow endpoints, percent of the map box. Not volumes. */
export const todayRegionAnchors: Record<
  TodayRegionId,
  { x: number; y: number }
> = {
  'northern-america': { x: 20, y: 34 },
  europe: { x: 51, y: 30 },
  asia: { x: 72, y: 38 },
  africa: { x: 51, y: 56 },
  'latin-america-caribbean': { x: 28, y: 64 },
  oceania: { x: 86, y: 70 },
};

export const todaySources: PrimarySource[] = [
  cite(
    'United Nations, World Population Prospects 2024 — net number of migrants, 2023 estimates',
    'https://population.un.org/wpp/',
  ),
  cite(
    'United Nations, International Migrant Stock 2024: Key facts and figures (UN DESA/POP/2024/DC/NO. 13)',
    'https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2025_intlmigstock_2024_key_facts_and_figures_advance-unedited.pdf',
  ),
  cite(
    'IOM World Migration Report 2026, chapter 3 — regional migrant stock and corridors (citing UN DESA 2025)',
    'https://worldmigrationreport.iom.int/what-we-do/world-migration-report-2026/chapter-3/africa',
  ),
  cite(
    'UN M49 geographic regions used for the tablets',
    'https://unstats.un.org/unsd/methodology/m49/',
  ),
];

export function isTodayRegion(value: string | undefined): value is TodayRegionId {
  return !!value && (todayRegionIds as readonly string[]).includes(value);
}

export function corridorsForRegion(region: TodayRegionId): TodayCorridor[] {
  return todayDataset.corridors.filter(
    (row) => row.fromRegion === region || row.toRegion === region,
  );
}

export function formatSignedCount(value: number, locale: string): string {
  const abs = Math.abs(value);
  const sign = value > 0 ? '+' : value < 0 ? '−' : '';
  if (abs >= 1_000_000) {
    const millions = abs / 1_000_000;
    const digits = millions >= 10 ? 1 : 2;
    return `${sign}${millions.toLocaleString(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    })}`;
  }
  return `${sign}${abs.toLocaleString(locale)}`;
}

export function formatStockCount(value: number, locale: string): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    const digits = millions >= 10 ? 1 : millions >= 1 ? 1 : 2;
    return millions.toLocaleString(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  }
  return value.toLocaleString(locale);
}
