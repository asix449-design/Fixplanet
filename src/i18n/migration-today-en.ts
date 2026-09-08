import type { TodayShelfCopy } from './migration';

export const enToday: TodayShelfCopy = {
  mapTitle: 'Net migration, 2023',
  mapAria:
    'Black world map with lime country outlines and tablets for the six UN major regions showing 2023 net migration',
  lead:
    'Tablets show net migration for calendar year 2023 — immigrants minus emigrants — for the six UN M49 major regions. That is a residual, not a count of who arrived and who left. Click a tablet for who already lives there, from the 2024 migrant stock, and for a few documented corridors.',
  honesty:
    'We do not invent annual arrivals and departures. A complete global flow matrix does not exist. Net migration (UN World Population Prospects 2024, 2023 estimates) is the honest “in versus out” figure. The people-from-where lists are stock: persons born elsewhere who were living in the region on 1 July 2024 (UN DESA International Migrant Stock 2024). Stock is not “arrived this year.” Arrows are schematic for named corridors, not drawn volumes.',
  tabletHint: 'Open a UN region. Tablets are labeled net migration, not arrivals.',
  netLabel: 'Net migration, UN WPP 2024',
  netUnitMillion: 'million people, 2023',
  netUnitPeople: 'people, 2023',
  stockLabel: 'International migrant stock, mid-2024',
  stockUnitMillion: 'million residents born abroad or in another country of the region',
  originsTitle: 'Who lives there, by region of birth',
  originsHint:
    'Migrant stock, mid-2024. Figures marked “about” follow IOM wording. Remainder includes other regions and unknown origin — we do not invent the gap.',
  corridorsTitle: 'Documented corridors',
  corridorsNote:
    'Country pairs are migrant-stock corridors (IOM World Migration Report 2026, citing UN DESA 2025). They accumulate years of movement. They are not 2023 flows and not drawn to scale.',
  close: 'Close',
  openTablet: 'Show origins and corridors for',
  million: 'million',
  approx: 'about',
  intraCaption:
    'Intra-regional migration often dominates. In 2024, 74% of Europe-born international migrants lived in another European country; 64% of sub-Saharan Africa-born migrants lived in that region; 45% of all international migrants lived in their region of birth. Africa → Europe is a real corridor. It is not the main global story.',
  remainderNote: 'Other regions and unknown origin not listed — the published split does not fill 100%.',
  stockNotFlow: 'Stock, not this year’s arrivals',
  arrowLegend: 'Schematic corridor — not a volume',
  mapCredit:
    'Land outlines: Wikimedia Commons BlankMap-World (public domain), restyled lime on black. Borders are a cartographic compromise, not a legal ruling. Not a population choropleth.',
  emptyPanel: 'Choose a tablet. The map does not rank Africa → Europe as the world’s main movement.',
  regions: {
    africa: {
      name: 'Africa',
      shortName: 'Africa',
      caption:
        'Africa had a net outflow in 2023. Most African-born international migrants still live in another African country — about 25 million in 2024 — more than the 11 million in Europe. The largest corridors IOM names on the continent are intra-African labour and displacement routes, not the Mediterranean.',
      originsIntro:
        'Of 29.2 million international migrants living in Africa in mid-2024, IOM (UN DESA) counts about 25 million born elsewhere in Africa. Non-African-born residents are few: about 1.3 million from Asia and about 583,000 from Europe.',
      corridorsIntro:
        'Largest named African corridors: Burkina Faso → Côte d’Ivoire (labour), South Sudan → Sudan, Sudan → Chad, South Sudan → Uganda (displacement). Extra-regional stock includes Egypt → Saudi Arabia and North Africa → France / Spain. Those last two are real; they are not the African average.',
    },
    asia: {
      name: 'Asia',
      shortName: 'Asia',
      caption:
        'Asia had the largest regional net outflow in 2023. That does not mean “Asia empties toward Europe.” About 74 million Asian-born international migrants lived in another Asian country in 2024 — Gulf labour, South-East Asian work, and long displacement corridors such as Afghanistan → Iran and Syria → Türkiye.',
      originsIntro:
        'Asia hosted 92.2 million international migrants in mid-2024. IOM counts about 74 million of them as born in Asia, about 6.7 million in Africa, and about 5 million in Europe (including Europeans in Central Asia after the Soviet breakup).',
      corridorsIntro:
        'IMS 2024’s largest inter-regional corridor that stays in the wider Asia–West Asia grouping is Central and Southern Asia → Northern Africa and Western Asia (20 million) — Gulf work, not Europe. Country stock: Afghanistan → Iran about 3.7 million; Syria → Türkiye about 3.6 million.',
    },
    europe: {
      name: 'Europe',
      shortName: 'Europe',
      caption:
        'Europe was a net receiver in 2023. Almost half of the 94 million international migrants living in Europe in 2024 were born in Europe (about 45 million), including Ukrainians displaced since 2022. Asian-born residents (20 million) outnumber African-born residents (about 10.6 million).',
      originsIntro:
        'Destination stock, mid-2024: about 45 million born in Europe, 20 million in Asia, about 10.6 million in Africa, about 6 million in Latin America and the Caribbean. The rest is Northern America, Oceania, and unknown origin. IOM also notes that 74% of all Europe-born migrants worldwide live in another European country.',
      corridorsIntro:
        'Half of IOM’s top European country corridors are intra-regional; several end in Germany. Ukraine → Germany rose from about 270,000 residents in 2020 to more than 1.4 million in 2024. Russian-born populations in former Soviet states are stock created when borders moved in 1991 — not a 2023 wave.',
    },
    'latin-america-caribbean': {
      name: 'Latin America and the Caribbean',
      shortName: 'Lat. America & Carib.',
      caption:
        'The region had a net outflow in 2023. Extra-regional stock is large: 27 million people born in Latin America and the Caribbean lived in Northern America in 2024, and about 6 million in Europe. Inside the region, about 14 million international migrants are intra-regional — much of the recent rise is Venezuelan displacement to Colombia, Peru, and neighbours.',
      originsIntro:
        '17.5 million international migrants lived in the region in mid-2024. IOM counts about 14 million born elsewhere in the region, about 1.3 million in Northern America, and about 1.2 million in Europe.',
      corridorsIntro:
        'Mexico → United States, about 11 million residents in 2024, is the world’s largest country corridor (down from a 2015 high near 12 million). Eight of the region’s ten largest country corridors end in the United States. The two intra-regional exceptions IOM names are Venezuela → Colombia and Venezuela → Peru.',
    },
    'northern-america': {
      name: 'Northern America',
      shortName: 'N. America',
      caption:
        'Northern America (United States, Canada, and a few North Atlantic territories — not Mexico) had the largest regional net inflow in 2023. The living stock is led by people born in Latin America and the Caribbean (27 million) and in Asia (about 20 million), then Europe (about 6.6 million) and Africa (about 2.7 million).',
      originsIntro:
        '61.2 million international migrants lived in Northern America in mid-2024. The 27 million from Latin America and the Caribbean is the largest inter-regional stock corridor in the IMS 2024 key facts. Intra-regional Canada–United States movement exists; IOM does not treat it as the main story.',
      corridorsIntro:
        'Mexico → United States remains the single largest country pair. Asian-born residents of Northern America are about 20 million. These are stocks of many decades, not a 2023 arrival list.',
    },
    oceania: {
      name: 'Oceania',
      shortName: 'Oceania',
      caption:
        'Oceania was a small net receiver in 2023. International migrants are 21% of residents — the highest regional share — almost all in Australia and New Zealand. IOM counts more than 8.6 million migrants from outside the region; Asian-born residents are about 5 million, European-born about 2.5 million.',
      originsIntro:
        '9.9 million international migrants lived in Oceania in mid-2024. The outside-the-region total is about 8.6 million. Intra-Oceania stock is the remainder, including New Zealand → Australia.',
      corridorsIntro:
        'IOM’s top five corridors involving Oceania all end in Australia: United Kingdom (about 1 million), India (about 876,000), China (about 656,000), then New Zealand (about 588,000). The last is intra-regional.',
    },
  },
  originNames: {
    africa: 'Africa',
    asia: 'Asia',
    europe: 'Europe',
    'latin-america-caribbean': 'Latin America and the Caribbean',
    'northern-america': 'Northern America',
    oceania: 'Oceania',
  },
};
