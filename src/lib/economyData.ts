import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale } from '../i18n/config';
import { chartWindows, lastIndex, storedDecimals, windowsFor } from './economySeries.mjs';

export {
  changeOf,
  chartPath,
  chartWindows,
  direction,
  formatChange,
  formatExact,
  formatSigned,
  lastIndex,
  sparkPath,
  sparkTail,
  storedDecimals,
  windowsFor,
} from './economySeries.mjs';

interface PinkSeries { id: string; unit: string; values: (number | null)[]; note?: string }
interface PinkFile { publisherDate: string; dataAsOf: string; start: string; series: PinkSeries[] }
interface EcbSeries { id: string; decimals: number; values: (number | null)[] }
interface EcbFile { publisherDate: string; dataAsOf: string; dates: string[]; series: EcbSeries[] }
interface EcbMonthlyFile { publisherDate: string; dataAsOf: string; start: string; months: string[]; series: EcbSeries[] }

const TAGS: Record<Locale, string> = { en: 'en-GB', ru: 'ru-RU', pl: 'pl-PL', lv: 'lv-LV' };
const cache = new Map<string, unknown>();

function readData<T>(name: string): T {
  if (!cache.has(name)) {
    const file = join(process.cwd(), 'public', 'data', 'economy', name);
    cache.set(name, JSON.parse(readFileSync(file, 'utf8')));
  }
  return cache.get(name) as T;
}

export function monthAt(start: string, index: number): string {
  const [y, m] = start.split('-').map(Number);
  const n = y * 12 + (m - 1) + index;
  return `${Math.floor(n / 12)}-${String((n % 12) + 1).padStart(2, '0')}`;
}

export function pinkSeries(id: string) {
  const data = readData<PinkFile>('pink-sheet.json');
  const s = data.series.find((x) => x.id === id);
  if (!s) throw new Error(`pink-sheet.json has no series ${id}`);
  const i = lastIndex(s.values);
  if (i < 0) throw new Error(`pink-sheet.json series ${id} is empty`);
  return { values: s.values, start: data.start, latest: s.values[i] as number, month: monthAt(data.start, i), publisherDate: data.publisherDate };
}

export function ecbRate(code: string) {
  const data = readData<EcbFile>('ecb-fx.json');
  const s = data.series.find((x) => x.id === code);
  if (!s) throw new Error(`ecb-fx.json has no series ${code}`);
  const i = lastIndex(s.values);
  if (i < 0) throw new Error(`ecb-fx.json series ${code} is empty`);
  return { value: s.values[i] as number, decimals: s.decimals, date: data.dates[i] };
}

export function formatMonth(ym: string, locale: Locale): string {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(TAGS[locale], { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, 1)));
}

export function formatDay(ymd: string, locale: Locale): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Intl.DateTimeFormat(TAGS[locale], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, d)));
}

interface ManifestDataset { status: string; staleAfterDays: number; publisherDate: string; dataAsOf: string }

function monthTimes(start: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) => monthAt(start, index));
}

/** One Pink Sheet series, with a window for every period button. */
export function pinkWindows(id: string) {
  const series = pinkSeries(id);
  const times = monthTimes(series.start, series.values.length);
  return { ...series, decimals: storedDecimals(series.latest), windows: windowsFor(times, series.values) };
}

/** ECB reference rate. Month and Year use the daily file. 5 years and All use the monthly averages. */
export function ecbWindows(code: string) {
  const daily = ecbRate(code);
  const data = readData<EcbFile>('ecb-fx.json');
  const series = data.series.find((item) => item.id === code);
  if (!series) throw new Error(`ecb-fx.json has no series ${code}`);
  const monthly = readData<EcbMonthlyFile>('ecb-fx-monthly.json');
  const monthSeries = monthly.series.find((item) => item.id === code);
  if (!monthSeries) throw new Error(`ecb-fx-monthly.json has no series ${code}`);
  const dailyWindows = windowsFor(data.dates, series.values, 120, 'daily');
  const monthWindows = windowsFor(monthly.months, monthSeries.values);
  return {
    value: daily.value,
    decimals: daily.decimals,
    date: daily.date,
    windows: {
      month: { ...dailyWindows.month, scale: 'day' as const },
      year: { ...dailyWindows.year, scale: 'day' as const },
      '5y': { ...monthWindows['5y'], scale: 'month' as const },
      all: { ...monthWindows.all, scale: 'month' as const },
    },
  };
}

/** Long Pink Sheet chart windows. Every series in one chart shares the kept points. */
export function pinkChart(keys: string[]) {
  const loaded = keys.map((id) => pinkSeries(id));
  const start = loaded[0].start;
  const times = monthTimes(start, loaded[0].values.length);
  return {
    start,
    publisherDate: loaded[0].publisherDate,
    series: loaded,
    windows: chartWindows(times, loaded.map((item) => item.values)),
  };
}

/** dataAsOf of a dataset when its refresh is failing or older than staleAfterDays at build time, otherwise null. */
export function economyStaleSince(dataset: 'wb_pink' | 'ecb' | 'ecb_monthly', now: number = Date.now()): string | null {
  const m = readData<{ datasets: Record<string, ManifestDataset> }>('manifest.json').datasets[dataset];
  if (!m) throw new Error(`manifest.json has no dataset ${dataset}`);
  const [y, mo, d] = m.publisherDate.split('-').map(Number);
  const late = now - Date.UTC(y, mo - 1, d) > m.staleAfterDays * 86400000;
  return m.status !== 'ok' || late ? m.dataAsOf : null;
}
