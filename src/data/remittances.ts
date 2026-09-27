import { cite, type PrimarySource } from './sources';

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

const brief40 = cite(
  'World Bank — Migration and Development Brief 40 (June 2024)',
  'https://documents1.worldbank.org/curated/en/099714008132436612/pdf/IDU1a9cf73b51fcad1425a1a0dd1cc8f2f3331ce.pdf',
);

const pressRelease = cite(
  'World Bank — press release, 26 June 2024: Remittances Slowed in 2023, Expected to Grow Faster in 2024',
  'https://www.worldbank.org/en/news/press-release/2024/06/26/remittances-slowed-in-2023-expected-to-grow-faster-in-2024',
);

const peopleMove = cite(
  'World Bank PeopleMove — remittance flows to low- and middle-income countries, 18 December 2024',
  'https://blogs.worldbank.org/en/peoplemove/in-2024--remittance-flows-to-low--and-middle-income-countries-ar',
);

const reliefWeb = cite(
  'ReliefWeb — Migration and Development Brief 40 (June 2024)',
  'https://reliefweb.int/report/world/remittances-slowed-2023-expected-grow-faster-2024-migration-and-development-brief-40-june-2024-enarru',
);

const wdiReceived = cite(
  'World Bank — World Development Indicators, personal remittances received (current US dollars)',
  'https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT',
);

const wdiGdp = cite(
  'World Bank — World Development Indicators, personal remittances received as a share of GDP',
  'https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS',
);

const wdiPaid = cite(
  'World Bank — World Development Indicators, personal remittances paid (current US dollars)',
  'https://data.worldbank.org/indicator/BM.TRF.PWKR.CD.DT',
);

const wdiCost = cite(
  'World Bank — World Development Indicators, average cost of sending remittances to a country',
  'https://data.worldbank.org/indicator/SI.RMT.COST.IB.ZS',
);

const dataBank = cite(
  'World Bank DataBank — World Development Indicators',
  'https://databank.worldbank.org/source/world-development-indicators',
);

const knomadBrief = cite(
  'World Bank — Remittances (KNOMAD programme, 2013–2024)',
  'https://www.worldbank.org/en/brief/2024/09/18/remittances-knomad',
);

const laborMobility = cite(
  'World Bank Group — Migration and Labor Mobility',
  'https://www.worldbank.org/ext/en/topic/social-protection/migration',
);

const pricesWorldwide = cite(
  'World Bank — Remittance Prices Worldwide',
  'https://remittanceprices.worldbank.org/',
);

const pricesIssue50 = cite(
  'World Bank — Remittance Prices Worldwide, Issue 50 (June 2024)',
  'https://remittanceprices.worldbank.org/sites/default/files/rpw_main_report_and_annex_q224.pdf',
);

export type RemittanceMeta = {
  id: RemittanceId;
  preview: string;
  /** 7200×3600 frame. */
  detail: string;
  /** Short source code for the grid. Not a file stem. */
  sourceLabel: string;
  sourceUrl: string;
  sources: PrimarySource[];
};

export const remittanceMeta: RemittanceMeta[] = [
  {
    id: 'remittances-global-flows',
    preview: 'remittances-global-flows.jpg',
    detail: 'detail/remittances-global-flows.webp',
    sourceLabel: 'Brief 40',
    sourceUrl: brief40.url,
    sources: [brief40, pressRelease, peopleMove, reliefWeb],
  },
  {
    id: 'remittances-top-recipients',
    preview: 'remittances-top-recipients.jpg',
    detail: 'detail/remittances-top-recipients.webp',
    sourceLabel: 'WDI',
    sourceUrl: wdiReceived.url,
    sources: [wdiReceived, peopleMove, brief40, pressRelease],
  },
  {
    id: 'remittances-gdp-share',
    preview: 'remittances-gdp-share.jpg',
    detail: 'detail/remittances-gdp-share.webp',
    sourceLabel: 'WDI',
    sourceUrl: wdiGdp.url,
    sources: [wdiGdp, peopleMove, brief40],
  },
  {
    id: 'remittances-sending-cost',
    preview: 'remittances-sending-cost.jpg',
    detail: 'detail/remittances-sending-cost.webp',
    sourceLabel: 'WDI',
    sourceUrl: wdiCost.url,
    sources: [wdiCost, pricesWorldwide, pricesIssue50, brief40, pressRelease],
  },
  {
    id: 'remittances-wdi-series',
    preview: 'remittances-wdi-series.jpg',
    detail: 'detail/remittances-wdi-series.webp',
    sourceLabel: 'WDI',
    sourceUrl: wdiReceived.url,
    sources: [wdiReceived, wdiGdp, wdiPaid, dataBank, knomadBrief, laborMobility],
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
