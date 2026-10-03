import type { RemittanceCopy } from './remittances';

export const enRemittances: RemittanceCopy = {
  layer: 'Remittances',
  title: 'Remittances',
  cards: {
    'remittances-global-flows': {
      tag: 'Flows · Low and middle income',
      title: 'Remittances to developing countries',
      hook: 'Low- and middle-income countries received an estimated $656 billion in officially recorded remittances in 2023, and World Bank authors put the 2024 total near $685 billion — still larger than foreign direct investment and official development assistance combined.',
      figure: '656',
      unit: 'billion US dollars, 2023',
      rows: [
        { label: '2023', figure: '$656 billion (+0.7%)' },
        { label: '2024 estimate', figure: 'about $685 billion (+5.8%)' },
      ],
      sections: [
        {
          heading: 'What the number is',
          body: 'Officially recorded money migrants send home to low- and middle-income countries. The World Bank’s Migration and Development Brief 40 (June 2024) puts the 2023 total at about $656 billion (+0.7% after the strong post-pandemic years). An 18 December 2024 PeopleMove update by the same research team estimates about $685 billion for 2024 (+5.8%). Informal channels mean the true total is larger.',
        },
        {
          heading: 'Why it matters',
          body: 'For many countries these flows are the largest stable source of external finance — often bigger than foreign direct investment or aid. They support household consumption, education, health, and current-account buffers when other capital flows swing.',
        },
        {
          heading: 'How to read it',
          body: 'These are estimates of the money sent during each calendar year. Regional growth is uneven; Migration and Development Brief 40 and the December 2024 update publish the regional tables behind the headline.',
        },
      ],
      plate: 'Chart: low- and middle-income remittances, 2017–2023, World Bank Migration and Development Brief 40. The number is billions of US dollars.',
    },
    'remittances-top-recipients': {
      tag: 'Recipients · 2024 estimates',
      title: 'Where remittances arrive',
      hook: 'Five countries were expected to receive the largest remittance inflows in 2024: India ~$129B, Mexico ~$68B, China ~$48B, the Philippines ~$40B, and Pakistan ~$33B.',
      figure: '138',
      unit: 'billion US dollars, India on the 2024 map',
      rows: [
        { label: 'India, 2024 estimate', figure: '~$129 billion' },
        { label: 'Mexico, 2024 estimate', figure: '~$68 billion' },
        { label: 'China, 2024 estimate', figure: '~$48 billion' },
        { label: 'Philippines, 2024 estimate', figure: '~$40 billion' },
        { label: 'Pakistan, 2024 estimate', figure: '~$33 billion' },
      ],
      sections: [
        {
          heading: 'What the list is',
          body: 'Estimated 2024 inflows in US dollars to the largest receiving countries among low- and middle-income economies, from the World Bank PeopleMove update of 18 December 2024. Migration and Development Brief 40’s 2023 ranking was the same five names in the same order (India $120B · Mexico $66B · China $50B · Philippines $39B · Pakistan $27B).',
        },
        {
          heading: 'Why it matters',
          body: 'Large absolute receipts shape national foreign-exchange markets and household incomes in the biggest origin–destination systems — especially India–Gulf/OECD, Mexico–United States, and the Philippines’ long-standing overseas-worker corridors.',
        },
        {
          heading: 'How to read it',
          body: 'Ranking by dollar volume shows where the most money arrives; dependence on remittances is measured as a share of GDP. China can rank high in dollars while remittances are a small share of its GDP; a small island economy can sit far down this list and still be highly dependent.',
        },
      ],
      plate: 'Map: personal remittances received, 2024, World Bank World Development Indicators. These figures follow balance-of-payments definitions and differ from the estimates in the list.',
    },
    'remittances-gdp-share': {
      tag: 'Dependence · 2024 estimates',
      title: 'Remittances as a share of GDP',
      hook: 'In smaller economies remittances can dwarf other finance: Tajikistan ~45% of GDP, Tonga ~38%, then Nicaragua, Lebanon, and Samoa around 26–27% in the 2024 estimates.',
      figure: '47',
      unit: 'percent of GDP, Tajikistan on the 2024 map',
      rows: [
        { label: 'Tajikistan, 2024 estimate', figure: '~45% of GDP' },
        { label: 'Tonga, 2024 estimate', figure: '~38% of GDP' },
        { label: 'Nicaragua, Lebanon, and Samoa, 2024 estimates', figure: 'about 26–27% of GDP' },
      ],
      sections: [
        {
          heading: 'What the list is',
          body: 'Estimated remittance inflows as a percentage of GDP for the most dependent countries in the 2024 PeopleMove update. Migration and Development Brief 40’s 2023 dependence list was similar in spirit (Tonga 41% · Tajikistan 39% · Lebanon 31% · Samoa 28% · Nicaragua 27%).',
        },
        {
          heading: 'Why it matters',
          body: 'Where remittances are a double-digit share of GDP they finance current-account gaps, household consumption, and often fiscal stability more than foreign direct investment or aid. Shocks to host-country labour markets or to corridors then transmit quickly into domestic demand.',
        },
        {
          heading: 'How to read it',
          body: 'Share of GDP answers a different question from absolute US$ volume. India can lead the world in dollars and still show a modest GDP share; Tonga or Tajikistan can sit outside the top five by dollar volume and still be among the most remittance-dependent economies on Earth.',
        },
      ],
      plate: 'Map: personal remittances received as a share of GDP, 2024, World Bank World Development Indicators. These figures follow balance-of-payments definitions and differ from the estimates in the list.',
    },
    'remittances-sending-cost': {
      tag: 'Prices · RPW',
      title: 'Cost of sending money home',
      hook: 'Sending remittances still costs about 6.4% of the amount on a global average — more than double the Sustainable Development Goal (SDG) target of 3% — and the World Bank’s Remittance Prices Worldwide website, updated 18 August 2025, shows about 6.36%.',
      figure: '6.4',
      unit: 'percent, global average, late 2023',
      rows: [
        { label: 'Global average, fourth quarter 2023', figure: '6.4%' },
        { label: 'Remittance Prices Worldwide, 18 August 2025', figure: 'about 6.36%' },
        { label: 'Sustainable Development Goal target', figure: '3%' },
      ],
      sections: [
        {
          heading: 'What the number is',
          body: 'The World Bank Remittance Prices Worldwide (RPW) database tracks the cost of sending a typical small transfer (often benchmarked at $200) across hundreds of country corridors. Migration and Development Brief 40 reported a global average of 6.4% in the fourth quarter of 2023 (up from 6.2% a year earlier). The Remittance Prices Worldwide website, last updated 18 August 2025, highlights a global average near 6.36% across 367 corridors (48 sending / 105 receiving countries).',
        },
        {
          heading: 'Why it matters',
          body: 'Every percentage point of fee is money that does not reach households. Digital channels are usually cheaper than non-digital ones; Sub-Saharan corridors have often been among the most expensive. The SDG 10 target is to bring the global average to 3% by 2030 — current averages remain well above that line.',
        },
        {
          heading: 'How to read it',
          body: 'A global average hides corridor extremes: some corridors cost several times the average. Remittance Prices Worldwide measures the price of a transfer; on its website readers can compare costs corridor by corridor.',
        },
      ],
      plate: 'Map: average cost of sending remittances to a country, 2023, World Bank World Development Indicators. These figures differ from the global averages in the text.',
    },
  },
};
