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
    'Land outlines: Wikimedia Commons BlankMap-World (public domain), restyled lime on black. Borders are a cartographic compromise, not a legal ruling. Not a population choropleth (a colour-by-count map).',
  emptyPanel: 'Choose a tablet. The map does not rank Africa → Europe as the world’s main movement.',
  layersLabel: 'Map layers',
  layerCamps: 'Refugee camps',
  layerDetections: 'EU border detections',
  layerIdp: 'Internal displacement',
  campsTitle: 'Largest UNHCR camps and settlements',
  campsLead:
    'Named UNHCR sites with a published headcount and date. These are people already living in a camp or settlement — not 2023 net migration and not “arrived this year.”',
  campsHonesty:
    'Sizes are operational figures for the date on each row. The list is curated, not a complete world census of every site. Click a marker for the source.',
  campsUnrwa:
    'UNRWA registers Palestine refugees separately. A camp population is not the same as that register. Post-2023 Gaza figures are unstable; this map does not invent a mixed UNHCR–UNRWA ranking.',
  campOpen: 'Open camp or settlement',
  campAsOf: 'Figure as of',
  campPeople: 'people',
  detectionsTitle: 'EU external-border detections (Frontex)',
  detectionsLead:
    'Detections of irregular crossings at the European Union’s external borders. The same person can be counted more than once. This is not a count of people, and it is not a global “breakthrough” map.',
  detectionsHonesty:
    'Frontex preliminary figures. 2024: just over 239,000 detections (−38% vs 2023). 2025: almost 178,000 (−26%), lowest since 2021. Route markers use a sourced year; where Frontex gave only a direction of change, no reliable headcount is shown.',
  detectionsMetric: 'Detections, not unique people',
  detectionsNoGlobal:
    'No comparable global series of border “breakthroughs” exists. Africa → Europe is not drawn as the world’s main story.',
  detectionsChange: 'vs previous year',
  detectionsOpen: 'Open EU route note',
  detectionsNationalities: 'Most frequently detected nationalities in 2025: Bangladeshi, Egyptian, Afghan — not a statement about who “arrives most” worldwide.',
  noHeadcount: 'No reliable headcount',
  idpTitle: 'Internal displacement (IDMC)',
  idpLead:
    'IDMC recorded more than 62.2 million internal displacements in 2025 (−6% vs 2024): 32.3 million from conflict and violence (record) and 29.9 million from disasters. Conflict led disasters for the first time; 42 countries recorded both.',
  idpDefinition:
    'IDMC counts people forced from home by conflict, violence, or disasters who have not crossed an international border. This is not UN DESA international migrant stock, not a Frontex detection count, and not a UNHCR camp headcount. Movements during the year (new or repeated) are not the same as year-end stock, and the same person can move more than once.',
  idpHonesty:
    'GRID 2026 covers calendar 2025 (report published 12 May 2026). Stock is people still living in internal displacement at year-end. Annual figures are counted movements, not unique people. Do not caption 32.3 million as 32.3 million unique people.',
  idpNoChoropleth:
    'Named crises below are sourced notes, not a colour-by-count world map. IDMC coverage is incomplete; this page does not invent a global choropleth or a “breakthrough” arrow layer from these totals.',
  idpMillion: 'million',
  idpMovementsUnit: 'movements, 2025',
  idpStockUnit: 'people, end-2025',
  idpConflictLabel: 'Conflict and violence',
  idpDisasterLabel: 'Disasters',
  idpCountriesLabel: 'countries and territories',
  idpBothLabel: 'countries with both triggers',
  idpCrisesTitle: 'Named crises — sourced notes, not a map',
  idpCards: {
    'idp-stock-2025': {
      tag: 'Stock · end-2025',
      title: 'People living in internal displacement',
      hook: 'More than 82.2 million people were living in internal displacement across 104 countries and territories at the end of 2025 — the first slight global decline in a decade, still near record levels.',
      detail: [
        'IDMC’s year-end stock of people who have been forced to flee their homes by conflict, violence, or disasters and have not crossed an international border. It is not UN DESA international migrant stock, not a Frontex detection count, and not a UNHCR camp headcount.',
        'Of that stock, more than 68.6 million were displaced by conflict and violence (54 countries/territories) and almost 13.6 million by disasters (82 countries/territories), as of 31 December 2025.',
        'GRID 2026 attributes much of the small global decline to returns in parts of Sudan, the DRC, and Syria — and warns that returns are not automatically durable solutions. Nearly three-quarters of countries hosting conflict IDPs still lacked up-to-date data by year-end.',
      ],
    },
    'idp-conflict-displacements-2025': {
      tag: 'Movements · 2025',
      title: 'Conflict and violence displacements',
      hook: 'Conflict and violence triggered a record 32.3 million internal displacements across 48 countries and territories in 2025 — about 60% above 2024, and more than disasters for the first time in IDMC’s series.',
      detail: [
        'Counted movements during the year (new or repeated). The same person can move more than once. Do not caption this as “32.3 million unique people.”',
        'GRID 2026 notes displacement was highly concentrated: Iran and the DRC each accounted for around a third of the global conflict-displacement total. International armed conflicts accounted for about 46% of conflict displacements; the number of countries with displacement linked to international conflicts rose from 6 in 2024 to 13 in 2025.',
        'Urban fighting around places such as El Fasher, Goma, and Tehran is named in the executive summary as feeding large, often repeated movements. Sudan remained the largest IDP-hosting crisis (about 9.1 million people living in displacement in Sudan at year-end).',
      ],
    },
    'idp-disaster-displacements-2025': {
      tag: 'Movements · 2025',
      title: 'Disaster displacements',
      hook: 'Disasters triggered 29.9 million internal displacements across 140 countries and territories in 2025 — down 35% from the extreme 2024 peak, still about 13% above the decade average.',
      detail: [
        'Storms: about 17.9 million movements (~60% of disaster displacements; second-highest annual storm figure on record). Floods: under 7.9 million (−31% vs the decade average). Wildfires: more than 694,000 movements (second-highest in a decade). Geophysical hazards: around 2.5 million, including large pre-emptive evacuations after major earthquakes.',
        'The Philippines alone recorded about 10.7 million disaster displacements in 2025 (~36% of the global disaster total in GRID’s map summary). That is mostly weather-hazard movement and evacuation accounting — not a claim that climate “explains” all migration on the page.',
        'Disaster IDP movements are real and sourced; they are still internal and are not the same series as the M49 net-migration tablets.',
      ],
    },
    'idp-movements-2025-overview': {
      tag: 'Overview · 2025',
      title: 'Internal displacements in 2025',
      hook: 'IDMC recorded more than 62.2 million internal displacements in 2025 (−6% vs 2024): 32.3 million from conflict and violence (record) and 29.9 million from disasters. Conflict led disasters for the first time; 42 countries recorded both.',
      detail: [
        'Movements during the year are not the year-end stock and not cross-border migration. The stock, conflict, and disaster panels give the splits. These totals are not a global “breakthrough” arrow layer.',
      ],
    },
  },
  idpCrisisCopy: {
    'sudan-stock': {
      place: 'Sudan',
      note: 'Largest IDP-hosting crisis at year-end 2025. About 9.1 million people were still living in internal displacement in Sudan. A year-end stock, not 2025 movements, and not a UNHCR camp headcount.',
    },
    'philippines-disaster-2025': {
      place: 'Philippines',
      note: 'About 10.7 million disaster displacements in 2025 — around 36% of the global disaster total in GRID’s map summary. Mostly weather-hazard movement and evacuation accounting, not a “climate migrant” world map.',
    },
  },
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
  campCopy: {
    'coxs-bazar': {
      name: 'Cox’s Bazar camps',
      country: 'Bangladesh',
      note: 'Government of Bangladesh / UNHCR: 33 camps in Cox’s Bazar district, including Kutupalong. Rohingya refugees from Myanmar. A further about 33,659 people on Bhasan Char are not added into this marker.',
    },
    dadaab: {
      name: 'Dadaab',
      country: 'Kenya',
      note: 'Dadaab camp complex, eastern Kenya. Figure as published for 31 December 2025. A complex, not a single tent city.',
    },
    'kakuma-kalobeyei': {
      name: 'Kakuma and Kalobeyei',
      country: 'Kenya',
      note: 'Kakuma 225,701; Kalobeyei 82,629; Eldoret 2,425 — the three sites UNHCR Kenya grouped in the 31 December 2025 update. Shown as one marker because they are one operation.',
    },
    bidibidi: {
      name: 'Bidibidi',
      country: 'Uganda',
      note: 'Bidibidi settlement, Yumbe District. Most residents were displaced from South Sudan. A settlement, not a walled camp.',
    },
    zaatari: {
      name: 'Zaatari',
      country: 'Jordan',
      note: 'Zaatari camp. Most residents were displaced from Syria. UNHCR operational figure, 31 August 2026.',
    },
  },
  routeCopy: {
    'central-mediterranean': {
      name: 'Central Mediterranean',
      note: 'About 67,000 detections in 2024 (−59% vs 2023), second among EU routes that year. In 2025 Frontex still called this the busiest route, broadly in line with 2024. Departures from Libya remain the named factor toward Italy. Not a unique-person count.',
    },
    'eastern-mediterranean': {
      name: 'Eastern Mediterranean',
      note: '69,400 detections in 2024 (+14%). In 2025 the route fell overall; the Libya–Crete corridor more than tripled. Do not read as all of Africa → Europe.',
    },
    'western-africa': {
      name: 'Western Africa (Canary Islands)',
      note: 'Almost 47,000 arrivals to the Canary Islands in 2024 — highest since Frontex records began in 2009. In 2025 detections on this route fell by around two-thirds (Mauritania, Morocco, Senegal).',
    },
    'western-mediterranean': {
      name: 'Western Mediterranean',
      note: 'Frontex reports an increase in 2025, mainly from Algeria. No reliable 2025 headcount is shown on the marker.',
    },
    'western-balkans': {
      name: 'Western Balkans',
      note: 'Detections fell 78% in 2024 and fell again in 2025. Frontex did not restate a 2025 headcount we can cite without inventing one.',
    },
  },
};
