import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale } from '../i18n/config';

interface PinkSeries { id: string; unit: string; values: (number | null)[]; note?: string }
interface PinkFile { publisherDate: string; dataAsOf: string; start: string; series: PinkSeries[] }
interface EcbSeries { id: string; decimals: number; values: (number | null)[] }
interface EcbFile { publisherDate: string; dataAsOf: string; dates: string[]; series: EcbSeries[] }

const TAGS: Record<Locale, string> = { en: 'en-GB', ru: 'ru-RU', pl: 'pl-PL', lv: 'lv-LV' };
const cache = new Map<string, unknown>();

function readData<T>(name: string): T {
  if (!cache.has(name)) {
    const file = join(process.cwd(), 'public', 'data', 'economy', name);
    cache.set(name, JSON.parse(readFileSync(file, 'utf8')));
  }
  return cache.get(name) as T;
}

function lastIndex(values: (number | null)[]): number {
  for (let i = values.length - 1; i >= 0; i--) if (values[i] != null) return i;
  return -1;
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

export function storedDecimals(value: number): number {
  const text = String(value);
  const dot = text.indexOf('.');
  return dot < 0 ? 0 : text.length - dot - 1;
}

export function formatExact(value: number, decimals: number, locale: Locale): string {
  return new Intl.NumberFormat(TAGS[locale], { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: false }).format(value);
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

/** dataAsOf of a dataset when its refresh is failing or older than staleAfterDays at build time, otherwise null. */
export function economyStaleSince(dataset: 'wb_pink' | 'ecb', now: number = Date.now()): string | null {
  const m = readData<{ datasets: Record<string, ManifestDataset> }>('manifest.json').datasets[dataset];
  if (!m) throw new Error(`manifest.json has no dataset ${dataset}`);
  const [y, mo, d] = m.publisherDate.split('-').map(Number);
  const late = now - Date.UTC(y, mo - 1, d) > m.staleAfterDays * 86400000;
  return m.status !== 'ok' || late ? m.dataAsOf : null;
}
