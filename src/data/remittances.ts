import type { Locale } from '../i18n/config';
import type { PrimarySource } from './sources';

export const remittanceIds = [
  'remittances-global-flows',
  'remittances-top-recipients',
  'remittances-gdp-share',
  'remittances-sending-cost',
  'remittances-wdi-series',
] as const;

export type RemittanceId = (typeof remittanceIds)[number];

export function isRemittanceId(value: string | undefined): value is RemittanceId {
  return !!value && (remittanceIds as readonly string[]).includes(value);
}

export const remittanceSourceKeys = [
  'brief40',
  'pressRelease',
  'peopleMove',
  'reliefWeb',
  'wdiReceived',
  'wdiGdp',
  'wdiPaid',
  'wdiCost',
  'dataBank',
  'knomadBrief',
  'laborMobility',
  'pricesWorldwide',
  'pricesIssue50',
] as const;

export type RemittanceSourceKey = (typeof remittanceSourceKeys)[number];

export const remittanceSourceUrls: Record<RemittanceSourceKey, string> = {
  brief40:
    'https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU1a9cf73b51fcad1425a1a0dd1cc8f2f3331ce.pdf',
  pressRelease:
    'https://www.worldbank.org/en/news/press-release/2024/06/26/remittances-slowed-in-2023-expected-to-grow-faster-in-2024',
  peopleMove:
    'https://blogs.worldbank.org/en/peoplemove/in-2024--remittance-flows-to-low--and-middle-income-countries-ar',
  reliefWeb:
    'https://reliefweb.int/report/world/remittances-slowed-2023-expected-grow-faster-2024-migration-and-development-brief-40-june-2024-enarru',
  wdiReceived: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT',
  wdiGdp: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS',
  wdiPaid: 'https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT',
  wdiCost: 'https://data.worldbank.org/indicator/SI.RMT.COST.IB.ZS',
  dataBank: 'https://databank.worldbank.org/source/world-development-indicators',
  knomadBrief: 'https://www.worldbank.org/en/brief/2024/09/18/remittances-knomad',
  laborMobility: 'https://www.worldbank.org/ext/en/topic/social-protection/migration',
  pricesWorldwide: 'https://remittanceprices.worldbank.org/',
  pricesIssue50:
    'https://remittanceprices.worldbank.org/sites/default/files/rpw_main_report_and_annex_q224.pdf',
};

/** Readable source titles. English titles stay in parentheses where the translation keeps them. */
export const remittanceSourceLabels: Record<Locale, Record<RemittanceSourceKey, string>> = {
  en: {
    brief40: 'World Bank — Migration and Development Brief 40 (June 2024)',
    pressRelease:
      'World Bank — press release, 26 June 2024: Remittances Slowed in 2023, Expected to Grow Faster in 2024',
    peopleMove:
      'World Bank PeopleMove — remittance flows to low- and middle-income countries, 18 December 2024',
    reliefWeb: 'ReliefWeb — Migration and Development Brief 40 (June 2024)',
    wdiReceived:
      'World Bank — World Development Indicators, personal remittances received (current US dollars)',
    wdiGdp:
      'World Bank — World Development Indicators, personal remittances received as a share of GDP',
    wdiPaid: 'World Bank — World Development Indicators, personal remittances paid (current US dollars)',
    wdiCost: 'World Bank — World Development Indicators, average cost of sending remittances to a country',
    dataBank: 'World Bank DataBank — World Development Indicators',
    knomadBrief: 'World Bank — Remittances (KNOMAD programme, 2013–2024)',
    laborMobility: 'World Bank Group — Migration and Labor Mobility',
    pricesWorldwide: 'World Bank — Remittance Prices Worldwide',
    pricesIssue50: 'World Bank — Remittance Prices Worldwide, Issue 50 (June 2024)',
  },
  ru: {
    brief40:
      'Всемирный банк — «Миграция и развитие», выпуск 40 (Migration and Development Brief 40), июнь 2024 г.',
    pressRelease:
      'Всемирный банк — пресс-релиз от 26 июня 2024 г.: «Рост денежных переводов замедлился в 2023 году, в 2024 году ожидается ускорение» (Remittances Slowed in 2023, Expected to Grow Faster in 2024)',
    peopleMove:
      'Блог Всемирного банка PeopleMove — денежные переводы в страны с низким и средним уровнем дохода, 18 декабря 2024 г.',
    reliefWeb:
      'ReliefWeb — доклад Всемирного банка «Миграция и развитие», выпуск 40 (Migration and Development Brief 40), июнь 2024 г.',
    wdiReceived:
      'Всемирный банк — World Development Indicators («Показатели мирового развития»): личные переводы полученные (в текущих долларах США)',
    wdiGdp:
      'Всемирный банк — World Development Indicators («Показатели мирового развития»): личные полученные переводы как доля ВВП',
    wdiPaid:
      'Всемирный банк — World Development Indicators («Показатели мирового развития»): личные переводы отправленные (в текущих долларах США)',
    wdiCost:
      'Всемирный банк — World Development Indicators («Показатели мирового развития»): средняя стоимость отправки денежных переводов в страну',
    dataBank:
      'Всемирный банк, DataBank — база World Development Indicators («Показатели мирового развития»)',
    knomadBrief: 'Всемирный банк — денежные переводы (программа KNOMAD, 2013–2024)',
    laborMobility:
      'Группа Всемирного банка — «Миграция и трудовая мобильность» (Migration and Labor Mobility)',
    pricesWorldwide:
      'Всемирный банк — Remittance Prices Worldwide («Цены на денежные переводы в мире»)',
    pricesIssue50:
      'Всемирный банк — Remittance Prices Worldwide («Цены на денежные переводы в мире»), выпуск 50, июнь 2024 г.',
  },
  pl: {
    brief40:
      'Bank Światowy — „Migracja i rozwój”, nr 40 (Migration and Development Brief 40), czerwiec 2024 r.',
    pressRelease:
      'Bank Światowy — komunikat prasowy z 26 czerwca 2024 r.: „Przekazy pieniężne zwolniły w 2023 r., w 2024 r. oczekiwany szybszy wzrost” (Remittances Slowed in 2023, Expected to Grow Faster in 2024)',
    peopleMove:
      'Blog Banku Światowego PeopleMove — przekazy pieniężne do krajów o niskim i średnim dochodzie, 18 grudnia 2024 r.',
    reliefWeb:
      'ReliefWeb — raport Banku Światowego „Migracja i rozwój”, nr 40 (Migration and Development Brief 40), czerwiec 2024 r.',
    wdiReceived:
      'Bank Światowy — World Development Indicators („Wskaźniki rozwoju świata”): przekazy osobiste otrzymane (w bieżących USD)',
    wdiGdp:
      'Bank Światowy — World Development Indicators („Wskaźniki rozwoju świata”): przekazy osobiste otrzymane jako udział w PKB',
    wdiPaid:
      'Bank Światowy — World Development Indicators („Wskaźniki rozwoju świata”): przekazy osobiste wysłane (w bieżących USD)',
    wdiCost:
      'Bank Światowy — World Development Indicators („Wskaźniki rozwoju świata”): średni koszt wysłania przekazów pieniężnych do kraju',
    dataBank:
      'Bank Światowy, DataBank — baza World Development Indicators („Wskaźniki rozwoju świata”)',
    knomadBrief: 'Bank Światowy — przekazy pieniężne (program KNOMAD, 2013–2024)',
    laborMobility:
      'Grupa Banku Światowego — „Migracja i mobilność siły roboczej” (Migration and Labor Mobility)',
    pricesWorldwide:
      'Bank Światowy — Remittance Prices Worldwide („Ceny przekazów pieniężnych na świecie”)',
    pricesIssue50:
      'Bank Światowy — Remittance Prices Worldwide („Ceny przekazów pieniężnych na świecie”), nr 50, czerwiec 2024 r.',
  },
  lv: {
    brief40:
      'Pasaules Banka — „Migrācija un attīstība”, 40. izdevums (Migration and Development Brief 40), 2024. gada jūnijs',
    pressRelease:
      'Pasaules Banka — preses relīze, 2024. gada 26. jūnijs: „Naudas pārvedumu pieaugums 2023. gadā palēninājās, 2024. gadā gaidāms straujāks kāpums” (Remittances Slowed in 2023, Expected to Grow Faster in 2024)',
    peopleMove:
      'Pasaules Bankas emuārs PeopleMove — naudas pārvedumi uz zemu un vidēju ienākumu valstīm, 2024. gada 18. decembris',
    reliefWeb:
      'ReliefWeb — Pasaules Bankas ziņojums „Migrācija un attīstība”, 40. izdevums (Migration and Development Brief 40), 2024. gada jūnijs',
    wdiReceived:
      'Pasaules Banka — World Development Indicators („Pasaules attīstības rādītāji”): saņemtie personīgie pārvedumi (faktiskajās cenās, USD)',
    wdiGdp:
      'Pasaules Banka — World Development Indicators („Pasaules attīstības rādītāji”): saņemtie personīgie pārvedumi kā IKP daļa',
    wdiPaid:
      'Pasaules Banka — World Development Indicators („Pasaules attīstības rādītāji”): nosūtītie personīgie pārvedumi (faktiskajās cenās, USD)',
    wdiCost:
      'Pasaules Banka — World Development Indicators („Pasaules attīstības rādītāji”): vidējās izmaksas, sūtot naudas pārvedumus uz valsti',
    dataBank:
      'Pasaules Banka, DataBank — datubāze World Development Indicators („Pasaules attīstības rādītāji”)',
    knomadBrief: 'Pasaules Banka — naudas pārvedumi (programma KNOMAD, 2013–2024)',
    laborMobility:
      'Pasaules Bankas grupa — „Migrācija un darbaspēka mobilitāte” (Migration and Labor Mobility)',
    pricesWorldwide:
      'Pasaules Banka — Remittance Prices Worldwide („Naudas pārvedumu cenas pasaulē”)',
    pricesIssue50:
      'Pasaules Banka — Remittance Prices Worldwide („Naudas pārvedumu cenas pasaulē”), 50. izdevums, 2024. gada jūnijs',
  },
};

export function remittanceSourcesFor(
  locale: Locale,
  keys: readonly RemittanceSourceKey[],
): PrimarySource[] {
  const labels = remittanceSourceLabels[locale];
  return keys.map((key) => ({ label: labels[key], url: remittanceSourceUrls[key] }));
}

export type RemittanceMeta = {
  id: RemittanceId;
  preview: string;
  /** 7200×3600 frame. */
  detail: string;
  /** Short source code for the grid. Not a file stem. */
  sourceLabel: string;
  sourceUrl: string;
  sourceKeys: readonly RemittanceSourceKey[];
  sources: PrimarySource[];
};

export const remittanceMeta: RemittanceMeta[] = [
  {
    id: 'remittances-global-flows',
    preview: 'remittances-global-flows.jpg',
    detail: 'detail/remittances-global-flows.webp',
    sourceLabel: 'Brief 40',
    sourceUrl: remittanceSourceUrls.brief40,
    sourceKeys: ['brief40', 'pressRelease', 'peopleMove', 'reliefWeb'],
    sources: remittanceSourcesFor('en', ['brief40', 'pressRelease', 'peopleMove', 'reliefWeb']),
  },
  {
    id: 'remittances-top-recipients',
    preview: 'remittances-top-recipients.jpg',
    detail: 'detail/remittances-top-recipients.webp',
    sourceLabel: 'WDI',
    sourceUrl: remittanceSourceUrls.wdiReceived,
    sourceKeys: ['wdiReceived', 'peopleMove', 'brief40', 'pressRelease'],
    sources: remittanceSourcesFor('en', ['wdiReceived', 'peopleMove', 'brief40', 'pressRelease']),
  },
  {
    id: 'remittances-gdp-share',
    preview: 'remittances-gdp-share.jpg',
    detail: 'detail/remittances-gdp-share.webp',
    sourceLabel: 'WDI',
    sourceUrl: remittanceSourceUrls.wdiGdp,
    sourceKeys: ['wdiGdp', 'peopleMove', 'brief40'],
    sources: remittanceSourcesFor('en', ['wdiGdp', 'peopleMove', 'brief40']),
  },
  {
    id: 'remittances-sending-cost',
    preview: 'remittances-sending-cost.jpg',
    detail: 'detail/remittances-sending-cost.webp',
    sourceLabel: 'WDI',
    sourceUrl: remittanceSourceUrls.wdiCost,
    sourceKeys: ['wdiCost', 'pricesWorldwide', 'pricesIssue50', 'brief40', 'pressRelease'],
    sources: remittanceSourcesFor('en', [
      'wdiCost',
      'pricesWorldwide',
      'pricesIssue50',
      'brief40',
      'pressRelease',
    ]),
  },
  {
    id: 'remittances-wdi-series',
    preview: 'remittances-wdi-series.jpg',
    detail: 'detail/remittances-wdi-series.webp',
    sourceLabel: 'WDI',
    sourceUrl: remittanceSourceUrls.wdiReceived,
    sourceKeys: ['wdiReceived', 'wdiGdp', 'wdiPaid', 'dataBank', 'knomadBrief', 'laborMobility'],
    sources: remittanceSourcesFor('en', [
      'wdiReceived',
      'wdiGdp',
      'wdiPaid',
      'dataBank',
      'knomadBrief',
      'laborMobility',
    ]),
  },
];

export function getRemittanceMeta(id: RemittanceId): RemittanceMeta {
  const meta = remittanceMeta.find((item) => item.id === id);
  if (!meta) throw new Error(`Unknown remittance card: ${id}`);
  return meta;
}

export function remittanceSrc(file: string): string {
  return `/images/migration/remittances/${file}`;
}
