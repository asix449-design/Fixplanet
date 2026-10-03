import todayJson from '../../public/data/migration-today.json';

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

export type TodayCamp = {
  id: TodayCampId;
  population: number;
  asOf: string;
  sourceUrl: string;
};

export type TodayDetectionYear = {
  year: 2024 | 2025;
  total: number;
  approx: boolean;
  changeVsPrev: number;
};

export type TodayDetectionRoute = {
  id: TodayRouteId;
  year: number;
  detections: number | null;
  approx: boolean;
};

export type TodayIdpCrisis = {
  id: string;
  figure: number;
  approx: boolean;
};

export type TodayInternalDisplacement = {
  sourceSummaryUrl: string;
  sourcePdfUrl: string;
  sourceHubUrl: string;
  stockEnd2025: {
    figure: number;
    conflictStock: number;
    disasterStock: number;
    countries: number;
    conflictCountries: number;
    disasterCountries: number;
  };
  movements2025: {
    total: number;
    conflict: number;
    disaster: number;
    conflictCountries: number;
    disasterCountries: number;
    bothCountries: number;
  };
  crises: TodayIdpCrisis[];
};

export type TodayDataset = {
  camps: { sites: TodayCamp[] };
  borderDetections: {
    source2024Url: string;
    source2025Url: string;
    years: TodayDetectionYear[];
    routes: TodayDetectionRoute[];
  };
  internalDisplacement: TodayInternalDisplacement;
};

export const todayDataset = todayJson as TodayDataset;

export const refugeeSourceUrls = {
  trends: 'https://www.unhcr.org/global-trends',
  pdf: 'https://www.unhcr.org/sites/default/files/2026-06/global-trends-report-2025.pdf',
  finder: 'https://www.unhcr.org/refugee-statistics',
  press:
    'https://www.unhcr.org/news/press-releases/7-10-refugees-living-long-term-displacement-unhcr-chief-calls-renewed-push',
  hosting:
    'https://www.unhcr.org/refugee-statistics/insights/explainers/refugee-hosting-metrics.html',
} as const;

export function formatStockCount(value: number, locale: string): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    const digits = millions >= 10 ? 1 : 1;
    return millions.toLocaleString(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
  }
  return value.toLocaleString(locale);
}

export function formatPeopleCount(value: number, locale: string): string {
  return value.toLocaleString(locale);
}

const lvMonthLocative: Record<string, string> = {
  janvāris: 'janvārī',
  februāris: 'februārī',
  marts: 'martā',
  aprīlis: 'aprīlī',
  maijs: 'maijā',
  jūnijs: 'jūnijā',
  jūlijs: 'jūlijā',
  augusts: 'augustā',
  septembris: 'septembrī',
  oktobris: 'oktobrī',
  novembris: 'novembrī',
  decembris: 'decembrī',
};

export function formatAsOf(iso: string, locale: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const formatted = new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  if (locale !== 'lv') return formatted;
  return formatted.replace(
    /\b(janvāris|februāris|marts|aprīlis|maijs|jūnijs|jūlijs|augusts|septembris|oktobris|novembris|decembris)\b/,
    (monthName) => lvMonthLocative[monthName] ?? monthName,
  );
}
