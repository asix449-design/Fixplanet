import type { TodayShelfCopy } from './migration';

export const enToday: TodayShelfCopy = {
  approx: 'about',
  idpTitle: 'Internal displacement',
  idpLead:
    'The Internal Displacement Monitoring Centre recorded more than 62.2 million internal displacements in 2025, 6 percent fewer than in 2024: 32.3 million from conflict and violence, a record, and 29.9 million from disasters. Conflict led disasters for the first time in this series. 42 countries recorded both.',
  idpDefinition:
    'The centre counts people forced from home by conflict, violence, or disasters who remain inside their country. A movement during the year can be new or repeated. The year end stock is the number of people still living in internal displacement on 31 December.',
  idpHonesty:
    'The Global Report on Internal Displacement 2026 covers calendar 2025. The report was published on 12 May 2026. Stock is people still living in internal displacement at year end. Annual figures count movements. The same person can move more than once, so 32.3 million counts movements.',
  idpNotes:
    'The named crises are short notes with a figure and a source from the same report.',
  idpMillion: 'million',
  idpMovementsUnit: 'movements in 2025',
  idpStockUnit: 'people at the end of 2025',
  idpConflictLabel: 'Conflict and violence',
  idpDisasterLabel: 'Disasters',
  idpCountriesLabel: 'countries and territories',
  idpBothLabel: 'countries with both triggers',
  idpCrisesTitle: 'Named crises',
  idpSourceSummary:
    'Internal Displacement Monitoring Centre, summary of the Global Report on Internal Displacement 2026 (12 May 2026)',
  idpSourcePdf: 'Global Report on Internal Displacement 2026, full report',
  idpSourceHub: 'Internal Displacement Monitoring Centre, displacement data',
  idpCards: {
    'idp-stock-2025': {
      tag: 'Stock, end of 2025',
      title: 'People living in internal displacement',
      hook: 'More than 82.2 million people were living in internal displacement across 104 countries and territories at the end of 2025. That is the first slight global decline in a decade, still near record levels.',
      detail: [
        'Year end count of people forced to flee their homes by conflict, violence, or disasters who remain inside their country.',
        'Of that stock, more than 68.6 million were displaced by conflict and violence (54 countries and territories) and almost 13.6 million by disasters (82 countries and territories), as of 31 December 2025.',
        'The 2026 report attributes much of the small global decline to returns in parts of Sudan, the Democratic Republic of the Congo, and Syria. It also says a return still needs safety and services before it becomes a lasting solution. Nearly three quarters of countries hosting people displaced by conflict still lacked up to date data by year end.',
      ],
    },
    'idp-conflict-displacements-2025': {
      tag: 'Movements, 2025',
      title: 'Conflict and violence displacements',
      hook: 'Conflict and violence triggered a record 32.3 million internal displacements across 48 countries and territories in 2025, about 60 percent above 2024, and above disasters for the first time in this series.',
      detail: [
        'Counted movements during the year, new or repeated. The same person can move more than once, so 32.3 million counts movements.',
        'The report says displacement was highly concentrated. Iran and the Democratic Republic of the Congo each accounted for around a third of the global conflict displacement total. International armed conflicts accounted for about 46 percent of conflict displacements. The number of countries with displacement linked to international conflicts rose from 6 in 2024 to 13 in 2025.',
        'The executive summary names urban fighting around El Fasher, Goma, and Tehran as feeding large, often repeated movements. Sudan remained the largest crisis for people living in internal displacement, about 9.1 million people in Sudan at year end.',
      ],
    },
    'idp-disaster-displacements-2025': {
      tag: 'Movements, 2025',
      title: 'Disaster displacements',
      hook: 'Disasters triggered 29.9 million internal displacements across 140 countries and territories in 2025, 35 percent below the 2024 peak and about 13 percent above the decade average.',
      detail: [
        'Storms: about 17.9 million movements, around 60 percent of disaster displacements, the second highest annual storm figure on record. Floods: under 7.9 million, 31 percent below the decade average. Wildfires: more than 694,000 movements, the second highest in a decade. Geophysical hazards: around 2.5 million, including large evacuations ahead of major earthquakes.',
        'The Philippines alone recorded about 10.7 million disaster displacements in 2025, about 36 percent of the global disaster total in the report’s map summary. The figure counts weather hazard movements and evacuations.',
        'These disaster figures count movements inside countries during 2025.',
      ],
    },
    'idp-movements-2025-overview': {
      tag: 'Overview, 2025',
      title: 'Internal displacements in 2025',
      hook: 'The centre recorded more than 62.2 million internal displacements in 2025, 6 percent fewer than in 2024: 32.3 million from conflict and violence, a record, and 29.9 million from disasters. Conflict led disasters for the first time. 42 countries recorded both.',
      detail: [
        'Movements during the year sit beside the year end stock on the cards above. The stock, conflict, and disaster panels give the splits.',
      ],
    },
  },
  idpCrisisCopy: {
    'sudan-stock': {
      place: 'Sudan',
      note: 'Largest crisis for people living in internal displacement at the end of 2025. About 9.1 million people were still living in internal displacement in Sudan. The figure is the year end stock.',
    },
    'philippines-disaster-2025': {
      place: 'Philippines',
      note: 'About 10.7 million disaster displacements in 2025, around 36 percent of the global disaster total in the report’s map summary. The figure counts weather hazard movements and evacuations during the year.',
    },
  },
  refugeesTitle: 'Refugees under UNHCR mandate',
  refugeesLead:
    'People who fled across an international border and remain under the mandate of the United Nations refugee agency (UNHCR). Global Trends 2025, published on 11 June 2026, puts that stock at 35.6 million at the end of 2025, about 3 percent fewer than a year earlier, still near record levels.',
  refugeesDefinition:
    'People who crossed an international border and whom UNHCR counts as refugees, people in a refugee like situation, or other people in need of international protection, on 31 December 2025. Asylum seekers waiting for a decision are listed beside this stock.',
  refugeesHonesty:
    'Global Trends 2025 covers calendar 2025. Stock is the population on 31 December 2025. Returns are movements during that year. The lists below come from the report and the Refugee Data Finder.',
  refugeesSourceTrends: 'UNHCR, Global Trends',
  refugeesSourcePdf: 'UNHCR, Global Trends 2025 (June 2026)',
  refugeesSourceFinder: 'UNHCR, Refugee Data Finder',
  refugeesSourcePress: 'UNHCR press release, 11 June 2026',
  refugeesSourceHosting: 'UNHCR, refugee hosting metrics',
  refugeesCards: {
    'refugees-unhcr-stock-2025': {
      tag: 'Stock, end of 2025',
      title: 'Refugees under UNHCR mandate',
      hook: '35.6 million people were refugees, people in a refugee like situation, or other people in need of international protection under the UNHCR mandate at the end of 2025, about 3 percent fewer than a year earlier, still near record levels.',
      figure: '35.6',
      unit: 'million people, end of 2025',
      rows: [
        { label: 'Refugees, including refugee like situations', figure: '28.5 million' },
        { label: 'Other people in need of international protection', figure: '7.2 million' },
        { label: 'Palestine refugees under UNRWA', figure: 'about 6 million' },
        { label: 'Asylum seekers waiting for a decision', figure: 'almost 9 million' },
      ],
      detail: [
        'Year end stock of people who fled across an international border and need international protection under the UNHCR mandate. It includes about 28.5 million refugees, including people in a refugee like situation, and 7.2 million other people in need of international protection.',
        'About 6 million Palestine refugees under the United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA) sit beside this figure. Together, the broader refugees figure is about 41.6 million. Almost 9 million asylum seekers were still waiting for a decision at the end of 2025.',
        'Global Trends 2025 links the decline mainly to returns in large situations, especially Afghanistan, Syria, and Sudan, and notes that many returns happened under pressure, into fragile conditions.',
      ],
    },
    'refugees-top-hosts-2025': {
      tag: 'Hosts, end of 2025',
      title: 'Where refugees are hosted',
      hook: 'Five countries hosted about one third of refugees and other people in need of international protection under this scope at the end of 2025: Colombia 2.8 million, Germany 2.7 million, Türkiye 2.4 million, Uganda 1.9 million, Iran 1.7 million.',
      figure: '1/3',
      unit: 'in five host countries, end of 2025',
      rows: [
        { label: 'Colombia', figure: '2.8 million' },
        { label: 'Germany', figure: '2.7 million' },
        { label: 'Türkiye', figure: '2.4 million' },
        { label: 'Uganda', figure: '1.9 million' },
        { label: 'Iran', figure: '1.7 million' },
      ],
      detail: [
        'End of 2025 host stocks from Global Trends and the Refugee Data Finder, for refugees, people in a refugee like situation, and other people in need of international protection.',
        'Colombia’s figure is driven largely by Venezuelans with protection status. Germany and Türkiye are high income and upper middle income hosts with different legal pathways. Uganda and Iran are major neighbouring hosts. Low and middle income countries host 68 percent of this population. Least developed countries host 26 percent, about 9.4 million people.',
        'Cox’s Bazar and Dadaab appear in the camp list on this page. A large host country can have few large camps. Most refugees worldwide live outside camps.',
      ],
    },
    'refugees-top-origins-2025': {
      tag: 'Origins, end of 2025',
      title: 'Where refugees come from',
      hook: 'About two thirds of refugees and other people in need of international protection under this scope came from five countries at the end of 2025: Venezuela 6.5 million, Ukraine 5.2 million, Syria 4.9 million, Afghanistan 3.7 million, Sudan 2.8 million.',
      figure: '2/3',
      unit: 'from five countries of origin, end of 2025',
      rows: [
        { label: 'Venezuela', figure: '6.5 million' },
        { label: 'Ukraine', figure: '5.2 million' },
        { label: 'Syria', figure: '4.9 million' },
        { label: 'Afghanistan', figure: '3.7 million' },
        { label: 'Sudan', figure: '2.8 million' },
      ],
      detail: [
        'Origin stocks for the same population as the host list. More than 70 percent come from six countries when South Sudan is included with those five.',
        'Syrian refugee numbers fell to about 4.9 million by the end of 2025 after large returns. Afghan numbers fell to about 3.7 million. Ukrainian figures remain high under temporary protection and related statuses counted in this scope. Venezuelans remain the largest origin group among other people in need of international protection across the Americas.',
        'About 5.4 million people were forced to flee across a border during 2025. That flow is counted apart from this stock.',
      ],
    },
    'refugees-neighbouring-hosts-2025': {
      tag: 'Pattern, end of 2025',
      title: 'Most refugees stay nearby',
      hook: '65 percent of refugees and other people in need of international protection lived in countries neighbouring their origin at the end of 2025. 68 percent were hosted in low and middle income countries.',
      figure: '65%',
      unit: 'in neighbouring countries, end of 2025',
      rows: [
        { label: 'Neighbouring countries', figure: '65%' },
        { label: 'Low and middle income countries', figure: '68%' },
        { label: 'Protracted situations, five years or more', figure: 'about 70%' },
      ],
      detail: [
        'These shares describe where the stock lives. Detections at the external borders of the European Union are in the border section on this page.',
        'About 70 percent of refugees under this scope were in protracted situations, five years or more without an immediate lasting solution. Global Trends 2025 counts about 24.9 million people in just over 1,300 such situations in low and middle income countries.',
        'Neighbouring and lower income hosting is the lasting pattern in this series.',
      ],
    },
    'refugees-returns-2025': {
      tag: 'Returns, 2025',
      title: 'Refugee returns in 2025',
      hook: 'Nearly 4.4 million refugees returned to their countries of origin in 2025, among the highest return years on record. Over 90 percent went back to three countries: Afghanistan (about 1.9 million), Syria (about 1.3 million), and Sudan (about 651,500).',
      figure: '4.4',
      unit: 'million returns in 2025',
      rows: [
        { label: 'Afghanistan', figure: 'about 1.9 million' },
        { label: 'Syria', figure: 'about 1.3 million' },
        { label: 'Sudan', figure: 'about 651,500' },
      ],
      detail: [
        'Refugee returns during calendar 2025, as reported in Global Trends. The agency warns that many returns happened under adverse circumstances, to areas where insecurity and weak services persist. A return counts as a movement during the year.',
        'Returns of people displaced inside their own country are in the internal displacement section on the migration page. Resettlement and sponsorship arrivals fell by more than half, to about 81,800 in 2025.',
        'Return volume rose. Safety and reintegration often lagged that headline.',
      ],
    },
  },
  campsTitle: 'Largest camps and settlements',
  campsLead:
    'Five named settlements with a published headcount. The date on each card is the date of that figure: 31 August 2026.',
  campsHonesty:
    'Sizes are operational figures for the date on each card. The list is these five large named settlements.',
  campsRegister:
    'The United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA) keeps its own register of Palestine refugees. The five settlements below use published headcounts for those named sites.',
  campAsOf: 'Figure as of',
  campPeople: 'people',
  campCopy: {
    'coxs-bazar': {
      name: 'Cox’s Bazar camps',
      country: 'Bangladesh',
      note: 'Government of Bangladesh and UNHCR: 33 camps in Cox’s Bazar district, including Kutupalong. Rohingya refugees from Myanmar. A further 33,514 people on Bhasan Char are published as their own figure.',
      source: 'Bangladesh population figures, 31 August 2026',
    },
    dadaab: {
      name: 'Dadaab',
      country: 'Kenya',
      note: 'Dadaab camp complex in eastern Kenya, from the Kenya statistics package as of 31 August 2026. Several camps in one operation.',
      source: 'Kenya statistics package, 31 August 2026',
    },
    'kakuma-kalobeyei': {
      name: 'Kakuma and Kalobeyei',
      country: 'Kenya',
      note: 'Kakuma 234,542, Kalobeyei 86,547, and Eldoret 2,573, grouped as one Kakuma area operation in the Kenya statistics package, 31 August 2026.',
      source: 'Kenya statistics package, 31 August 2026',
    },
    bidibidi: {
      name: 'Bidibidi',
      country: 'Uganda',
      note: 'Bidibidi settlement, Yumbe District. Most residents were displaced from South Sudan.',
      source: 'Uganda settlement figures, 31 August 2026',
    },
    zaatari: {
      name: 'Zaatari',
      country: 'Jordan',
      note: 'Zaatari camp. Most residents were displaced from Syria. Jordan population figures, 31 August 2026.',
      source: 'Jordan population figures, 31 August 2026',
    },
  },
  detectionsTitle: 'European Union border detections, 2024 and 2025',
  detectionsLead:
    'Detections of irregular crossings at the external borders of the European Union, published by the European Border and Coast Guard Agency (Frontex). The same release names five routes.',
  detectionsHonesty:
    '2024: just over 239,000 detections, 38 percent below 2023. 2025: almost 178,000 detections, 26 percent below 2024, the lowest since 2021. Where a route has a published count, the row shows that count.',
  detectionsMetric:
    'A detection records a crossing. The same person can be recorded more than once, at different places.',
  detectionsChange: 'Compared with the previous year',
  detectionsLower: 'lower',
  detectionsHigher: 'higher',
  detectionsPeople: 'detections',
  detectionsUncounted: 'No separate count is published for this route.',
  detectionsRoutesTitle: 'Routes',
  detectionsNationalities:
    'The nationalities detected most often in 2025 were Bangladeshi, Egyptian, and Afghan.',
  detectionsSource2024: 'Frontex, irregular border crossings into the European Union in 2024',
  detectionsSource2025: 'Frontex, irregular border crossings in 2025',
  yearCopy: {
    '2024': {
      note: 'Just over 239,000 detections, 38 percent below 2023. Lowest since 2021 at the time of the 2024 release.',
    },
    '2025': {
      note: 'Almost 178,000 detections, 26 percent below 2024. Lowest since 2021, and under half of the 2023 total.',
    },
  },
  routeCopy: {
    'central-mediterranean': {
      name: 'Central Mediterranean',
      note: 'About 67,000 detections in 2024, 59 percent below 2023, second among European Union routes that year. In 2025 the agency still called this the busiest route, broadly in line with 2024. Departures from Libya remain the named factor toward Italy.',
    },
    'eastern-mediterranean': {
      name: 'Eastern Mediterranean',
      note: '69,400 detections in 2024, 14 percent above 2023. In 2025 the route fell overall. The corridor from Libya to Crete more than tripled.',
    },
    'western-africa': {
      name: 'Western Africa, Canary Islands',
      note: 'Almost 47,000 arrivals to the Canary Islands in 2024, the highest since the agency’s records began in 2009. In 2025 detections on this route fell by around two thirds, from Mauritania, Morocco, and Senegal.',
    },
    'western-mediterranean': {
      name: 'Western Mediterranean',
      note: 'The agency reports an increase in 2025, mainly from Algeria.',
    },
    'western-balkans': {
      name: 'Western Balkans',
      note: 'Detections fell 78 percent in 2024 and fell again in 2025.',
    },
  },
};
