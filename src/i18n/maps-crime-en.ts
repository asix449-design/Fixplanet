import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'What it is',
  why: 'Why it matters',
  how: 'How to read it',
  limits: 'Limits',
};

const prison = '#8c2f39';
const teal = '#1a6b7a';

export const en: Record<string, MapCopy> = {
  'prison-population-rate': {
    title: 'Prison population rate',
    cardMeta: 'World Prison Brief data, prisoners per 100,000 people.',
    hook: 'How many people each country holds in prison for every 100,000 residents, counting pre-trial detainees, from the World Prison Brief database.',
    description:
      'The World Prison Brief is a free online database of prison systems around the world, hosted by the Institute for Crime & Justice Policy Research (ICPR) at Birkbeck, University of London. It ranks countries by prison population rate: everyone held in prison, including pre-trial detainees and remand prisoners, per 100,000 people. Our World in Data, a non-profit statistics website, shows the same series on a world map (data from 1993 to 2026).',
    whyOnShelf:
      'The rate shows how heavily a country relies on imprisonment. In the list of 224 prison systems, El Salvador has the highest rate at 1,659 per 100,000 people, followed by Cuba (794), Turkmenistan (about 576) and the United States (542).',
    howToRead:
      'Figures come mainly from governments and other official sources, and country pages are updated monthly, so the latest year differs from country to country. The rate reflects sentencing laws, the use of pre-trial detention and the capacity of courts as well as crime levels. On the map, darker shades mean more prisoners per 100,000 people; where a 2026 figure is missing, the closest year between 2018 and 2025 is shown.',
    caveats:
      'The World Prison Brief publishes the shares of pre-trial detainees, women and foreign nationals among prisoners, and prison occupancy, as separate lists; the map shows the overall rate only. Countries define who counts as a prisoner in different ways.',
    licenseNote: realMapCredit('en', 'prison-population-rate') ?? '',
    imageAlt:
      'World map of prisoners per 100,000 people, pale land for lower rates and dark magenta for higher rates, with no title or legend text on the image',
    caption:
      'Prisoners per 100,000 people by country in 2026 or the latest year available, including pre-trial detainees.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Prisoners per 100,000 people',
        items: [
          { swatch: '#e7e7e7', label: 'No data' },
          { swatch: '#feebe2', label: '0 to 100' },
          { swatch: '#fcc5c0', label: '100 to 200' },
          { swatch: '#fa9fb5', label: '200 to 300' },
          { swatch: '#f768a1', label: '300 to 400' },
          { swatch: '#dd3497', label: '400 to 500' },
          { swatch: '#ac027d', label: '500 to 600' },
          { swatch: '#7a0177', label: '600 and above' },
        ],
      },
    ],
    gridSource: cite(
      'World Prison Brief (ICPR), prison population rate',
      'https://www.prisonstudies.org/highest-to-lowest/prison_population_rate',
    ),
    sources: [
      cite('World Prison Brief (ICPR): home page', 'https://www.prisonstudies.org/'),
      cite(
        'World Prison Brief: Highest to Lowest, prison population rate',
        'https://www.prisonstudies.org/highest-to-lowest/prison_population_rate',
      ),
      cite(
        'World Prison Brief: World Prison Brief data',
        'https://www.prisonstudies.org/world-prison-brief-data',
      ),
      cite(
        'ICPR: World Prison Brief project page',
        'https://icpr.org.uk/theme/prisons-and-use-imprisonment/world-prison-brief',
      ),
      cite(
        'Our World in Data: Prison population rate (interactive map and data)',
        'https://ourworldindata.org/grapher/prison-population-rate',
      ),
      cite(
        'Our World in Data: Prison population rate (PNG chart)',
        'https://ourworldindata.org/grapher/prison-population-rate.png',
      ),
    ],
  },
  'drug-trafficking-flows': {
    title: 'Drug trafficking flows',
    cardMeta:
      'UN Office on Drugs and Crime, World Drug Report 2026, route maps based on reported seizures.',
    hook: 'The main routes of cocaine, heroin and methamphetamine trafficking between world regions, mapped by the UN Office on Drugs and Crime from drug seizures reported for 2021 to 2024.',
    description:
      'The World Drug Report 2026 from the United Nations Office on Drugs and Crime (UNODC) comes with a statistical annex that includes three world maps of the main trafficking flows of methamphetamine, cocaine and heroin. Each map summarises drug seizures reported for 2021 to 2024. Companion maps show the main departure or transit countries and the main destination countries for each drug, and annex tables cover cultivation, manufacture, seizures, prices and purity.',
    whyOnShelf:
      'The maps show how drugs travel from producing regions through transit hubs to consumer markets. Europe is one example: the European Union Drugs Agency (EUDA) reports that EU countries seized 330 tonnes of cocaine in 2024, after a record 419 tonnes in 2023, with Spain (124 tonnes) and France (53.5 tonnes) reporting the largest amounts.',
    howToRead:
      'The width of each route reflects the total amount seized on it, rated from very low to very high. Routes come from what UN Member States report in their annual questionnaires, in reports of individual seizures and in other official documents. Arrows point in the direction of trafficking: a route starts where a shipment departed or was last seen and ends where it was consumed or headed next, so the start of an arrow can lie in a different country from the one where the drug was produced. UNODC describes the routes as broadly indicative; smaller secondary routes may be missing.',
    caveats:
      'Seizures depend on where and how intensively authorities search, so heavily policed routes can look larger. The preview chart covers the 27 EU countries, Norway and Türkiye; the UNODC maps cover the whole world.',
    licenseNote: realMapCredit('en', 'drug-trafficking-flows') ?? '',
    imageAlt:
      'Stacked columns of cocaine seized from 2014 to 2024, eight coloured bands and year labels, with no country names on the image',
    caption: 'Cocaine seized in the 27 EU countries, Norway and Türkiye, 2014 to 2024, in tonnes, by country.',
    figureTitle: 'Cocaine seized in Europe, 2014 to 2024',
    sectionHeads: heads,
    legend: [
      {
        title: 'Tonnes, from the bottom of each column',
        items: [
          { swatch: '#1b4f72', label: 'Spain' },
          { swatch: '#148f77', label: 'France' },
          { swatch: '#b9770e', label: 'Belgium' },
          { swatch: '#6c3483', label: 'Netherlands' },
          { swatch: '#1a5276', label: 'Portugal' },
          { swatch: '#c0392b', label: 'Italy' },
          { swatch: '#d4ac0d', label: 'Türkiye' },
          { swatch: '#7f8c8d', label: 'Other countries' },
        ],
      },
    ],
    gridSource: cite(
      'UNODC, World Drug Report 2026 Statistical Annex',
      'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026-annex.html',
    ),
    sources: [
      cite(
        'UNODC: World Drug Report 2026',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026.html',
      ),
      cite(
        'UNODC: World Drug Report 2026, Statistical Annex',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026-annex.html',
      ),
      cite(
        'UNODC: Main cocaine trafficking flows as described in reported seizures, 2021–2024 (map)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/04_Main_cocaine_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: Main heroin trafficking flows as described in reported seizures, 2021–2024 (map)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/07_Main_heroin_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: Main methamphetamine trafficking flows as described in reported seizures, 2021–2024 (map)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/01_Main_methamphetamine_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: World Drug Report 2025, Maps (previous edition)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2025-maps.html',
      ),
      cite(
        'EUDA: Cocaine, the current situation in Europe (European Drug Report 2026)',
        'https://www.euda.europa.eu/publications/european-drug-report/2026/cocaine_en',
      ),
      cite(
        'EUDA: Trends in the quantities of cocaine seizures, tonnes, 2014–2024',
        'https://www.euda.europa.eu/sites/default/files/data/data-nodes/33313/versions/56/edr2026-cocaine-table-8_en.csv',
      ),
    ],
  },
  'modern-slavery': {
    title: 'Modern slavery',
    cardMeta:
      'Walk Free Global Slavery Index 2023 and the 2021 global estimates by the International Labour Organization, Walk Free and the International Organization for Migration.',
    hook: "Estimated prevalence of modern slavery, meaning forced labour and forced marriage, in 160 countries, from Walk Free's Global Slavery Index, built on global estimates of about 50 million people in modern slavery in 2021.",
    description:
      'Walk Free, an international human rights group, publishes the Global Slavery Index. Its 2023 edition estimates how many people live in modern slavery in 160 countries, using nationally representative household surveys and a statistical model of each country’s vulnerability. It builds on the Global Estimates of Modern Slavery by the International Labour Organization (ILO), Walk Free and the International Organization for Migration (IOM): about 50 million people (49.6 million) were in modern slavery on any given day in 2021, about 28 million in forced labour and 22 million in forced marriage, about 10 million more than in the 2016 estimates.',
    whyOnShelf:
      'The estimates include people who never appear in police or court records. The Index finds the highest prevalence in North Korea (104.6 per 1,000 people), Eritrea (90.3) and Mauritania (32.0), and the strongest government responses in the United Kingdom, Australia and the Netherlands. By region, the global estimates show the highest prevalence in the Arab States (10.1 per 1,000 people) and the largest number of people in Asia and the Pacific (29.3 million).',
    howToRead:
      "Country figures are estimated prevalence per 1,000 people, based on surveys and modelling, so each figure carries a margin of uncertainty. Walk Free's interactive map shows each country's estimated prevalence, vulnerability and government response. The preview chart shows the global estimates by sex, age, region and income group, in millions of people and per 1,000 population.",
    caveats:
      'The global estimates leave out some forms of exploitation, such as organ trafficking and the recruitment of children by armed forces, and surveys are difficult and dangerous in countries in deep, ongoing conflict. Walk Free describes its estimate as conservative.',
    licenseNote: realMapCredit('en', 'modern-slavery') ?? '',
    imageAlt:
      'Bars for people in modern slavery in 2021, with the numbers 27.6, 22.0, 49.6 and the Figure 1 breakdown, and no category names on the image',
    caption:
      'People in modern slavery in 2021, in millions and per 1,000 population, by sex, age, region and income group.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Forced labour and forced marriage, millions of people',
        items: [
          { swatch: prison, label: 'Forced labour, 27.6' },
          { swatch: teal, label: 'Forced marriage, 22.0' },
        ],
      },
      {
        title: 'Number of people, millions (left bars, same row numbers)',
        items: [
          { swatch: prison, label: '1 World, 49.6' },
          { swatch: prison, label: '2 Male, 22.8' },
          { swatch: prison, label: '3 Female, 26.7' },
          { swatch: prison, label: '4 Adults, 37.3' },
          { swatch: prison, label: '5 Children, 12.3' },
          { swatch: prison, label: '6 Africa, 7.0' },
          { swatch: prison, label: '7 Americas, 5.1' },
          { swatch: prison, label: '8 Arab States, 1.7' },
          { swatch: prison, label: '9 Asia and the Pacific, 29.3' },
          { swatch: prison, label: '10 Europe and Central Asia, 6.4' },
          { swatch: prison, label: '11 High income, 7.2' },
          { swatch: prison, label: '12 Upper-middle income, 12.7' },
          { swatch: prison, label: '13 Lower-middle income, 23.0' },
          { swatch: prison, label: '14 Low income, 6.6' },
        ],
      },
      {
        title: 'Prevalence per 1,000 population (right bars)',
        items: [
          { swatch: teal, label: '1 World, 6.4' },
          { swatch: teal, label: '2 Male, 5.8' },
          { swatch: teal, label: '3 Female, 6.9' },
          { swatch: teal, label: '4 Adults, 6.9' },
          { swatch: teal, label: '5 Children, 5.2' },
          { swatch: teal, label: '6 Africa, 5.2' },
          { swatch: teal, label: '7 Americas, 5.0' },
          { swatch: teal, label: '8 Arab States, 10.1' },
          { swatch: teal, label: '9 Asia and the Pacific, 6.8' },
          { swatch: teal, label: '10 Europe and Central Asia, 6.9' },
          { swatch: teal, label: '11 High income, 5.9' },
          { swatch: teal, label: '12 Upper-middle income, 4.4' },
          { swatch: teal, label: '13 Lower-middle income, 7.8' },
          { swatch: teal, label: '14 Low income, 9.6' },
        ],
      },
    ],
    gridSource: cite('Walk Free, Global Slavery Index 2023', 'https://www.walkfree.org/global-slavery-index/'),
    sources: [
      cite('Walk Free: Global Slavery Index', 'https://www.walkfree.org/global-slavery-index/'),
      cite('Walk Free: Global Slavery Index map', 'https://www.walkfree.org/global-slavery-index/map/'),
      cite(
        'Walk Free: Global findings',
        'https://www.walkfree.org/global-slavery-index/findings/global-findings/',
      ),
      cite('Walk Free: Downloads', 'https://www.walkfree.org/global-slavery-index/downloads/'),
      cite(
        'Walk Free: The Global Slavery Index 2023',
        'https://cdn.walkfree.org/content/uploads/2023/05/17114737/Global-Slavery-Index-2023.pdf',
      ),
      cite(
        'ILO: Global Estimates of Modern Slavery: Forced Labour and Forced Marriage',
        'https://www.ilo.org/publications/major-publications/global-estimates-modern-slavery-forced-labour-and-forced-marriage',
      ),
      cite(
        'ILO, Walk Free and IOM: Global Estimates of Modern Slavery, September 2022',
        'https://www.ilo.org/sites/default/files/2025-09/ILO_GEMS-2022_Report_EN_Web.pdf',
      ),
      cite(
        'ILO: 50 million people worldwide in modern slavery (news release)',
        'https://www.ilo.org/resource/news/50-million-people-worldwide-modern-slavery-0',
      ),
    ],
  },
  'basel-aml-index': {
    title: 'Money-laundering risk',
    cardMeta: 'Basel Anti-Money Laundering (AML) Index 2025, Public Edition, 177 jurisdictions.',
    hook: 'Risk scores from 0 to 10 for how exposed each country is to money laundering and related financial crime, and how well it can counter them, from the Basel Institute on Governance.',
    description:
      'The Basel AML Index (AML stands for anti-money laundering) is an independent ranking maintained since 2012 by the International Centre for Asset Recovery at the Basel Institute on Governance. Its 14th Public Edition, published in December 2025, scores 177 countries and jurisdictions on a scale from 0 to 10, where 10 means the highest risk. The score combines 17 indicators from publicly accessible sources in five domains: the quality of rules against money laundering and the financing of terrorism and of weapons of mass destruction; corruption and fraud; financial transparency and standards; public transparency and accountability; and legal and political risks.',
    whyOnShelf:
      'The Basel Institute links money laundering to crimes such as corruption, fraud, environmental crime and drug trafficking. In 2025, Myanmar (8.18), Haiti (8.12) and the Democratic Republic of the Congo (7.63) have the highest risk scores, and Finland (3.03), Iceland (3.04) and San Marino (3.08) the lowest. The global average edged down from 5.30 to 5.28; more than half of jurisdictions improved their scores while 43% worsened.',
    howToRead:
      'A higher score means greater assessed vulnerability and weaker capacity to counter money laundering. The score is a composite risk assessment built from other organisations’ data, with the largest weight (35%) on evaluations by the Financial Action Task Force (FATF), the intergovernmental body that sets global standards in this field. Only jurisdictions with enough data are ranked. The preview map shows the 81 jurisdictions that the US State Department named as major money-laundering jurisdictions for 2024; its report is one of the public sources behind the Index.',
    caveats:
      'Data collection for the 2025 edition closed on 10 November 2025. Russia is excluded from the Public Edition following the suspension of its membership of the FATF. A separate Expert Edition, updated quarterly, covers 203 jurisdictions with scores for each indicator. The US list marks countries whose financial institutions handle significant amounts of proceeds from international drug trafficking, and it carries no sanctions.',
    licenseNote: realMapCredit('en', 'basel-aml-index') ?? '',
    imageAlt:
      'World map with major money-laundering jurisdictions named by the US State Department for 2024 in purple, other countries in beige, and small territories as dots',
    caption:
      'The 81 jurisdictions named by the US State Department as major money-laundering jurisdictions for 2024. This map shows that US State Department list, not scores from the Basel Anti-Money Laundering Index.',
    figureTitle: 'Major money-laundering jurisdictions named by the US State Department, 2024',
    sectionHeads: heads,
    legend: [
      {
        title: 'US State Department list for 2024. Small territories are drawn as dots.',
        items: [
          { swatch: '#6c2c5a', label: 'Named major money-laundering jurisdiction' },
          { swatch: '#e7e2d8', label: 'Not on that list' },
        ],
      },
    ],
    gridSource: cite(
      'Basel Institute on Governance, Basel AML Index 2025',
      'https://index.baselgovernance.org/',
    ),
    sources: [
      cite('Basel AML Index: interactive map', 'https://index.baselgovernance.org/'),
      cite('Basel AML Index: Public Ranking', 'https://index.baselgovernance.org/ranking'),
      cite(
        'Basel Institute on Governance: Basel AML Index overview',
        'https://baselgovernance.org/basel-aml-index',
      ),
      cite(
        'Basel Institute on Governance: Basel AML Index 2025 reveals uneven progress in the global fight against financial crime (news, 8 December 2025)',
        'https://baselgovernance.org/resources/news/basel-aml-index-2025-reveals-uneven-progress-global-fight-against-financial-crime',
      ),
      cite(
        'Basel Institute on Governance: Basel AML Index 2025, 14th Public Edition',
        'https://index.baselgovernance.org/api/assets/1cdb5e5f-f4c2-4738-918b-f2c4271c6313/Basel%20AML%20Index%202025.pdf',
      ),
      cite(
        'US Department of State: 2025 International Narcotics Control Strategy Report',
        'https://www.state.gov/2025-international-narcotics-control-strategy-report',
      ),
      cite(
        'US Department of State: 2025 International Narcotics Control Strategy Report, Volume 2: Money Laundering',
        'https://www.state.gov/wp-content/uploads/2025/03/2025-International-Narcotics-Control-Strategy-Volume-2-Accessible.pdf',
      ),
    ],
  },
  'rule-of-law-index': {
    title: 'Rule of Law Index',
    cardMeta: 'World Justice Project, Rule of Law Index 2025, 143 countries and jurisdictions.',
    hook: 'How people and legal experts in 143 countries experience limits on government power, corruption, open government, fundamental rights, order and security, regulation, and civil and criminal justice, scored from 0 to 1 by the World Justice Project.',
    description:
      'The World Justice Project (WJP), a non-profit organisation, has published the Rule of Law Index every year since 2009. The 2025 edition covers 143 countries and jurisdictions, home to 95% of the world’s population, and draws on more than 215,000 household surveys and 4,100 surveys of legal practitioners and experts. Countries are scored from 0 to 1, where 1 means the strongest adherence to the rule of law, on eight factors: constraints on government powers, absence of corruption, open government, fundamental rights, order and security, regulatory enforcement, civil justice and criminal justice.',
    whyOnShelf:
      'The Index measures how the rule of law is experienced in daily life, from safety and the courts to checks on officials. In 2025, the rule of law declined in 68% of countries, up from 57% the year before, making it the eighth year in a row with more declines than improvements. Denmark, Norway, Finland, Sweden and New Zealand rank highest; Venezuela, Afghanistan, Cambodia, Haiti and Nicaragua rank lowest. Qatar joined the Index for the first time.',
    howToRead:
      "Each score summarises survey answers from ordinary people and legal experts in that country. A decline means a country's score fell from 2024 to 2025; countries that declined lost 1.07% of their score on average, while those that improved gained 0.52%. Factor scores and country profiles are on the WJP Index website. The preview map uses a separate open dataset, the World Bank's Worldwide Governance Indicators: a rule-of-law score from 0 to 100 for 215 economies in 2025, built from 35 cross-country sources of household surveys, firm surveys and expert assessments.",
    caveats:
      'Some indicators have data for only part of the 143 countries. The World Bank score on the preview map reflects perceptions of contract enforcement, property rights, the police, the courts and the likelihood of crime and violence, and it has its own scale and ranking.',
    licenseNote: realMapCredit('en', 'rule-of-law-index') ?? '',
    imageAlt:
      'World map of the World Bank rule-of-law score for 2025, light blue for lower scores and dark blue for higher scores, with small economies as dots',
    caption:
      "Rule-of-law score from 0 to 100 in the World Bank's Worldwide Governance Indicators, 2025, for 215 economies.",
    figureTitle: 'World Bank Worldwide Governance Indicators: Rule of Law, 2025',
    sectionHeads: heads,
    legend: [
      {
        title: 'World Bank governance score, 0 to 100',
        items: [
          { swatch: '#d5d0c8', label: 'No data' },
          { swatch: '#c6dbef', label: 'Under 30' },
          { swatch: '#9ecae1', label: '30 to 45' },
          { swatch: '#6baed6', label: '45 to 60' },
          { swatch: '#3182bd', label: '60 to 75' },
          { swatch: '#08519c', label: '75 to 90' },
          { swatch: '#08306b', label: '90 to 100' },
        ],
      },
    ],
    gridSource: cite(
      'World Justice Project, Rule of Law Index 2025',
      'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release',
    ),
    sources: [
      cite(
        'World Justice Project: WJP Rule of Law Index (interactive)',
        'https://worldjusticeproject.org/index/',
      ),
      cite(
        'World Justice Project: WJP Rule of Law Index 2025 Global Press Release',
        'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release',
      ),
      cite(
        'World Justice Project: Global Press Release',
        'https://worldjusticeproject.org/sites/default/files/documents/Global%20Press%20Release_EN.pdf',
      ),
      cite(
        'World Justice Project: WJP Rule of Law Index 2025',
        'https://worldjusticeproject.org/rule-of-law-index/downloads/WJPIndex2025.pdf',
      ),
      cite(
        'World Bank: Worldwide Governance Indicators',
        'https://www.worldbank.org/en/publication/worldwide-governance-indicators',
      ),
      cite(
        'World Bank Data Catalog: Worldwide Governance Indicators',
        'https://datacatalog.worldbank.org/search/dataset/0038026/worldwide-governance-indicators',
      ),
      cite(
        'World Bank: WGI 2026 Governance Estimates and Scores, 1996–2025',
        'https://datacatalogfiles.worldbank.org/ddh-published/0038026/DR0095947/WGI%202026%20Governance%20Estimates%20and%20Scores%20%281996-2025%29.xlsx',
      ),
    ],
  },
};
