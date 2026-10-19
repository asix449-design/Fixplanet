export const PERIODS: readonly ['month', 'year', '5y', 'all'];
export const CHART_W: number;
export const CHART_H: number;
export const SPARK_W: number;
export const SPARK_H: number;

export function lastIndex(values: readonly (number | null)[]): number;
export function firstIndex(values: readonly (number | null)[]): number;
export function storedDecimals(value: number): number;
export function formatExact(value: number, decimals: number, locale: string): string;
export function formatSigned(value: number, decimals: number, locale: string): string;
export function changeOf(points: readonly number[]): { abs: number; pct: number };
export function direction(abs: number): 'up' | 'down' | 'flat';
export function formatChange(abs: number, pct: number, decimals: number, locale: string, percent?: boolean): string;
export function sparkPath(
  values: readonly (number | null)[],
  breaks?: readonly boolean[] | null,
  w?: number,
  h?: number,
): string;
export function sparkTail(values: readonly (number | null)[], w?: number, h?: number): string;
export function chartPath(
  values: readonly (number | null)[],
  breaks: readonly boolean[] | null | undefined,
  w: number,
  h: number,
  top: number,
): string;

export interface SeriesWindow {
  times: string[];
  values: (number | null)[];
  breaks: boolean[];
  compare: number[];
  since: string;
  latest: number;
  latestAt: string;
  highlight: boolean;
}

export interface ChartWindow {
  times: string[];
  values: (number | null)[][];
  breaks: boolean[][];
}

export type EconomyPeriod = 'month' | 'year' | '5y' | 'all';

export function windowsFor(
  times: readonly string[],
  values: readonly (number | null)[],
  max?: number,
  mode?: 'monthly' | 'daily',
): Record<EconomyPeriod, SeriesWindow>;

export function chartWindows(
  times: readonly string[],
  seriesValues: readonly (readonly (number | null)[])[],
  max?: number,
): Record<EconomyPeriod, ChartWindow>;
