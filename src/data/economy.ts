import { localizePath, type Locale } from '../i18n/config';

/**
 * Economy routes, sources and figure cards.
 * Nothing is published unless PUBLIC_ECONOMY_PREVIEW is "true".
 * economyReleasedPr stays 0 until a later data release raises it.
 */

export const economyVisible = import.meta.env.PUBLIC_ECONOMY_PREVIEW === 'true';

export const economyReleasedPr = 0;

const economyPreview = import.meta.env.PUBLIC_ECONOMY_PREVIEW === 'true';

export type EconomyTabSlug =
  | 'overview'
  | 'energy'
  | 'power-gas-europe'
  | 'carbon-climate'
  | 'renewables'
  | 'companies'
  | 'crypto'
  | 'sources';

export type EconomyIcon = 'grid' | 'bolt' | 'city' | 'droplet' | 'sun';

export type EconomySourceId =
  | 'ecb'
  | 'eia'
  | 'wb_pink'
  | 'eurostat'
  | 'gie'
  | 'wb_carbon'
  | 'noaa'
  | 'irena'
  | 'coingecko'
  | 'tradingview';

export type EconomyFigureId =
  | 'o_oil'
  | 'o_gas'
  | 'o_euro'
  | 'o_crypto'
  | 'o_storm'
  | 'e_oil5y'
  | 'e_brent_long'
  | 'e_gas_regions'
  | 'e_coal'
  | 'p_household'
  | 'p_gasstore'
  | 'c_pricing'
  | 'c_storm'
  | 'r_costs'
  | 's_quotes'
  | 'k_coins'
  | 'k_euro';

export type EconomyCadence =
  | 'daily'
  | 'monthly'
  | 'half-yearly'
  | 'yearly'
  | 'static'
  | 'live-delayed'
  | 'crypto-3x';

export type EconomyFigureKind = 'number' | 'table' | 'line' | 'bars' | 'panel';

export interface EconomyTab {
  slug: EconomyTabSlug;
  key: EconomyTabSlug;
  route: string;
  icon: EconomyIcon;
  livePr: number;
  figures: EconomyFigureId[];
  sources: EconomySourceId[];
}

export interface EconomySource {
  url: string;
  terms: string[];
  credit: string;
  cadence: EconomyCadence;
  modify: string;
  licenceUrl?: string;
  creditLinks?: Record<string, string>;
}

export interface EconomyFigure {
  tab: EconomyTabSlug;
  source: EconomySourceId;
  url: string;
  kind: EconomyFigureKind;
  cadence: EconomyCadence;
  dataPr: number;
}

export const economyTabs: EconomyTab[] = [
  {
    slug: "overview",
    key: "overview",
    route: "/economy",
    icon: "grid",
    livePr: 3,
    figures: ["o_oil", "o_gas", "o_euro", "o_crypto", "o_storm"],
    sources: ["eia", "gie", "ecb", "coingecko", "noaa"],
  },
  {
    slug: "energy",
    key: "energy",
    route: "/economy/energy",
    icon: "bolt",
    livePr: 3,
    figures: ["e_oil5y", "e_brent_long", "e_gas_regions", "e_coal"],
    sources: ["eia", "wb_pink"],
  },
  {
    slug: "power-gas-europe",
    key: "power-gas-europe",
    route: "/economy/power-gas-europe",
    icon: "city",
    livePr: 4,
    figures: ["p_household", "p_gasstore"],
    sources: ["eurostat", "gie"],
  },
  {
    slug: "carbon-climate",
    key: "carbon-climate",
    route: "/economy/carbon-climate",
    icon: "droplet",
    livePr: 5,
    figures: ["c_pricing", "c_storm"],
    sources: ["wb_carbon", "noaa"],
  },
  {
    slug: "renewables",
    key: "renewables",
    route: "/economy/renewables",
    icon: "sun",
    livePr: 5,
    figures: ["r_costs"],
    sources: ["irena"],
  },
  {
    slug: "companies",
    key: "companies",
    route: "/economy/companies",
    icon: "grid",
    livePr: 7,
    figures: ["s_quotes"],
    sources: ["tradingview"],
  },
  {
    slug: "crypto",
    key: "crypto",
    route: "/economy/crypto",
    icon: "bolt",
    livePr: 3,
    figures: ["k_coins", "k_euro"],
    sources: ["coingecko", "ecb"],
  },
  {
    slug: "sources",
    key: "sources",
    route: "/economy/sources",
    icon: "grid",
    livePr: 3,
    figures: [],
    sources: ["ecb", "eia", "wb_pink", "eurostat", "gie", "wb_carbon", "noaa", "irena", "coingecko", "tradingview"],
  },
];

export const economySources: Record<EconomySourceId, EconomySource> = {
  ecb: {
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
    terms: ["https://www.ecb.europa.eu/stats/ecb_statistics/governance_and_quality_framework/html/usage_policy.en.html"],
    credit: "Source: ECB statistics.",
    cadence: "daily",
    modify: "none: show rates unmodified, no rounding",
  },
  eia: {
    url: "https://www.eia.gov/dnav/pet/pet_pri_spt_s1_d.htm",
    terms: ["https://www.eia.gov/about/copyrights_reuse.php"],
    credit: "Source: U.S. Energy Information Administration ({publicationDate}).",
    cadence: "daily",
    modify: "{publicationDate} = month and year of the data release, for example Oct 2026",
  },
  wb_pink: {
    url: "https://www.worldbank.org/en/research/commodity-markets",
    terms: ["https://datacatalog.worldbank.org/public-licenses", "https://creativecommons.org/licenses/by/4.0/", "https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets"],
    credit: "World Bank Commodity Markets (Pink Sheet), CC BY 4.0",
    cadence: "monthly",
    modify: "state changes (units converted, values rounded)",
    licenceUrl: "https://creativecommons.org/licenses/by/4.0/",
    creditLinks: {
      "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
    },
  },
  eurostat: {
    url: "https://ec.europa.eu/eurostat/databrowser/view/nrg_pc_204/default/table",
    terms: ["https://ec.europa.eu/eurostat/help/copyright-notice"],
    credit: "Source: Eurostat, https://ec.europa.eu/eurostat/databrowser/view/nrg_pc_204/default/table, {accessDate}",
    cadence: "half-yearly",
    modify: "{accessDate} = date of the last download (fetchedAt); state changes and add the Eurostat non-responsibility sentence",
  },
  gie: {
    url: "https://agsi.gie.eu/",
    terms: ["https://agsi.gie.eu/data-usage"],
    credit: "Source: Gas Infrastructure Europe (GIE), AGSI+",
    cadence: "daily",
    modify: "none required beyond the clear indication of GIE",
  },
  wb_carbon: {
    url: "https://openknowledge.worldbank.org/entities/publication/64c7e4b9-bdd4-4761-9f3f-35fcccb4b7ef",
    terms: ["https://creativecommons.org/licenses/by/3.0/igo/"],
    credit: "World Bank. 2026. State and Trends of Carbon Pricing 2026. World Bank, Washington, DC. doi: 10.1596/978-1-4648-2348-0. License: Creative Commons Attribution CC BY 3.0 IGO",
    cadence: "yearly",
    modify: "link to the licence, indicate that the layout is changed, imply no endorsement by the World Bank",
    licenceUrl: "https://creativecommons.org/licenses/by/3.0/igo/",
    creditLinks: {
      "Creative Commons Attribution CC BY 3.0 IGO": "https://creativecommons.org/licenses/by/3.0/igo/",
    },
  },
  noaa: {
    url: "https://www.ncei.noaa.gov/access/billions/",
    terms: ["https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.nodc:0209268"],
    credit: "NOAA National Centers for Environmental Information (NCEI) U.S. Billion-Dollar Weather and Climate Disasters (2025). https://www.ncei.noaa.gov/access/billions/, DOI: 10.25921/stkw-7w73",
    cadence: "static",
    modify: "none",
  },
  irena: {
    url: "https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2026/Jul/IRENA_TEC_RPGC_2025_Executive_summary_2026.pdf",
    terms: [],
    credit: "IRENA (2026), Renewable power generation costs in 2025, International Renewable Energy Agency, Abu Dhabi.",
    cadence: "yearly",
    modify: "none required",
  },
  coingecko: {
    url: "https://www.coingecko.com/",
    terms: ["https://www.coingecko.com/en/api_terms", "https://brand.coingecko.com/resources/attribution-guide"],
    credit: "Powered by CoinGecko",
    cadence: "crypto-3x",
    modify: "text at least 10 pt, linked to coingecko.com, next to the data",
    creditLinks: {
      "Powered by CoinGecko": "https://www.coingecko.com/",
    },
  },
  tradingview: {
    url: "https://www.tradingview.com/widget/",
    terms: ["https://www.tradingview.com/policies/"],
    credit: "Charts by TradingView",
    cadence: "live-delayed",
    modify: "never alter the link inside the panel; our line is additional, at least 13 px",
    creditLinks: {
      "Charts by TradingView": "https://www.tradingview.com/",
    },
  },
};

export const economyFigures: Record<EconomyFigureId, EconomyFigure> = {
  o_oil: {
    tab: "overview",
    source: "eia",
    url: "https://www.eia.gov/dnav/pet/pet_pri_spt_s1_d.htm",
    kind: "number",
    cadence: "daily",
    dataPr: 3,
  },
  o_gas: {
    tab: "overview",
    source: "gie",
    url: "https://agsi.gie.eu/",
    kind: "number",
    cadence: "daily",
    dataPr: 3,
  },
  o_euro: {
    tab: "overview",
    source: "ecb",
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
    kind: "table",
    cadence: "daily",
    dataPr: 3,
  },
  o_crypto: {
    tab: "overview",
    source: "coingecko",
    url: "https://www.coingecko.com/",
    kind: "table",
    cadence: "crypto-3x",
    dataPr: 3,
  },
  o_storm: {
    tab: "overview",
    source: "noaa",
    url: "https://www.ncei.noaa.gov/access/billions/",
    kind: "number",
    cadence: "static",
    dataPr: 5,
  },
  e_oil5y: {
    tab: "energy",
    source: "eia",
    url: "https://www.eia.gov/dnav/pet/pet_pri_spt_s1_d.htm",
    kind: "line",
    cadence: "daily",
    dataPr: 3,
  },
  e_brent_long: {
    tab: "energy",
    source: "wb_pink",
    url: "https://www.worldbank.org/en/research/commodity-markets",
    kind: "line",
    cadence: "monthly",
    dataPr: 3,
  },
  e_gas_regions: {
    tab: "energy",
    source: "wb_pink",
    url: "https://www.worldbank.org/en/research/commodity-markets",
    kind: "line",
    cadence: "monthly",
    dataPr: 3,
  },
  e_coal: {
    tab: "energy",
    source: "wb_pink",
    url: "https://www.worldbank.org/en/research/commodity-markets",
    kind: "line",
    cadence: "monthly",
    dataPr: 3,
  },
  p_household: {
    tab: "power-gas-europe",
    source: "eurostat",
    url: "https://ec.europa.eu/eurostat/databrowser/view/nrg_pc_204/default/table",
    kind: "bars",
    cadence: "half-yearly",
    dataPr: 4,
  },
  p_gasstore: {
    tab: "power-gas-europe",
    source: "gie",
    url: "https://agsi.gie.eu/",
    kind: "line",
    cadence: "daily",
    dataPr: 4,
  },
  c_pricing: {
    tab: "carbon-climate",
    source: "wb_carbon",
    url: "https://openknowledge.worldbank.org/entities/publication/64c7e4b9-bdd4-4761-9f3f-35fcccb4b7ef",
    kind: "table",
    cadence: "yearly",
    dataPr: 5,
  },
  c_storm: {
    tab: "carbon-climate",
    source: "noaa",
    url: "https://www.ncei.noaa.gov/access/billions/",
    kind: "line",
    cadence: "static",
    dataPr: 5,
  },
  r_costs: {
    tab: "renewables",
    source: "irena",
    url: "https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2026/Jul/IRENA_TEC_RPGC_2025_Executive_summary_2026.pdf",
    kind: "bars",
    cadence: "yearly",
    dataPr: 5,
  },
  s_quotes: {
    tab: "companies",
    source: "tradingview",
    url: "https://www.tradingview.com/widget/",
    kind: "panel",
    cadence: "live-delayed",
    dataPr: 7,
  },
  k_coins: {
    tab: "crypto",
    source: "coingecko",
    url: "https://www.coingecko.com/",
    kind: "table",
    cadence: "crypto-3x",
    dataPr: 3,
  },
  k_euro: {
    tab: "crypto",
    source: "ecb",
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
    kind: "table",
    cadence: "daily",
    dataPr: 3,
  },
};

const overview = economyTabs.find((tab) => tab.slug === 'overview');
if (!overview) {
  throw new Error('Economy overview tab is missing');
}
export const overviewTab: EconomyTab = overview;

export function economyTabLive(tab: { livePr: number }): boolean {
  return economyPreview || (economyVisible && tab.livePr <= economyReleasedPr);
}

export function economyFigureLive(fig: { dataPr: number }): boolean {
  return economyPreview || fig.dataPr <= economyReleasedPr;
}

export function isEconomyTab(value: string | undefined): value is EconomyTabSlug {
  return !!value && economyTabs.some((tab) => tab.slug === value);
}

export function economyTabPath(slug: string, locale: Locale): string {
  const tab = economyTabs.find((item) => item.slug === slug);
  return localizePath(tab ? tab.route : '/economy', locale);
}

export function liveEconomyTabs(): EconomyTab[] {
  return economyTabs.filter((tab) => economyTabLive(tab));
}

/** Sources whose figure cards are live. The sources tab has no cards of its own, so it uses every live card. */
export function economySourcesForTab(tab: EconomyTab): EconomySourceId[] {
  const live = new Set<EconomySourceId>();
  const figureIds = tab.figures.length > 0 ? tab.figures : (Object.keys(economyFigures) as EconomyFigureId[]);
  for (const id of figureIds) {
    const fig = economyFigures[id];
    if (economyFigureLive(fig)) live.add(fig.source);
  }
  return tab.sources.filter((id) => live.has(id));
}

/** Credit lines with unfilled date placeholders are omitted until a data release supplies them. */
export function economyCreditReady(credit: string): boolean {
  return !credit.includes('{publicationDate}') && !credit.includes('{accessDate}');
}
