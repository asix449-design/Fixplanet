import type { PrimarySource } from './sources';
import { cite } from './sources';

export const humanEventIds = [
  'out-of-africa',
  'sahul',
  'americas',
  'neolithic',
  'bantu',
  'austronesian',
  'steppe',
  'migration-period',
  'islamic',
  'mongol',
  'atlantic-slave',
  'european-emigration',
] as const;

export type HumanEventId = (typeof humanEventIds)[number];

export type HumanEventKind = 'schematic' | 'plate';

export type HumanEventCoverage =
  | 'schematic'
  | 'farming-europe'
  | 'culture-horizon'
  | 'regional'
  | 'seafaring'
  | 'conquest'
  | 'empire-extent'
  | 'forced-trade'
  | 'flow-snapshot';

export type HumanSchematicPin = 'africa' | 'out' | 'sahul' | 'americas' | 'bantu';

export type HumanEventMeta = {
  id: HumanEventId;
  kind: HumanEventKind;
  highlight: readonly HumanSchematicPin[];
  coverage: HumanEventCoverage;
  nearest: boolean;
  mapForthcoming?: boolean;
  plate?: string;
  plateWidth?: number;
  plateHeight?: number;
  sourceShort: string;
  sourceOrg: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  vintage: string;
  greatMigrationsLink?: boolean;
};

export const humanEventPreviewSrc = (file: string) =>
  file.startsWith('/') ? file : `/images/migration/eras/${file}`;

/**
 * Event cards — major documented movements, not a 50-year grid and not
 * “where everyone was.” Pleistocene frames are teaching arrows on NASA
 * Blue Marble. Later frames are published plates. Coverage gaps are labeled
 * the same way as the Religion atlas. No invented global choropleths.
 */
export const humanEventMeta: HumanEventMeta[] = [
  {
    id: 'out-of-africa',
    kind: 'schematic',
    highlight: ['africa', 'out'],
    coverage: 'schematic',
    nearest: false,
    sourceShort: 'Bergström 2020',
    sourceOrg: 'Bergström et al., Science, 2020 — Late Pleistocene expansion',
    sourceUrl: 'https://www.science.org/doi/10.1126/science.aay5012',
    license: 'Site schematic on NASA Blue Marble (public domain)',
    licenseUrl: 'https://earthobservatory.nasa.gov/images/7373/december-blue-marble',
    vintage: '~70,000–50,000 years ago',
  },
  {
    id: 'sahul',
    kind: 'schematic',
    highlight: ['sahul'],
    coverage: 'schematic',
    nearest: false,
    sourceShort: 'Clarkson 2017',
    sourceOrg: 'Clarkson et al., Nature, 2017 — Madjedbebe',
    sourceUrl: 'https://www.nature.com/articles/nature22968',
    license: 'Site schematic on NASA Blue Marble (public domain)',
    licenseUrl: 'https://earthobservatory.nasa.gov/images/7373/december-blue-marble',
    vintage: '~65,000–50,000 years ago',
  },
  {
    id: 'americas',
    kind: 'schematic',
    highlight: ['americas'],
    coverage: 'schematic',
    nearest: false,
    sourceShort: 'Pedersen 2016',
    sourceOrg: 'Pedersen et al., PNAS, 2016 — ice-free corridor timing',
    sourceUrl: 'https://www.pnas.org/doi/10.1073/pnas.1518482113',
    license: 'Site schematic on NASA Blue Marble (public domain)',
    licenseUrl: 'https://earthobservatory.nasa.gov/images/7373/december-blue-marble',
    vintage: '~16,000–11,000 years ago (working window)',
  },
  {
    id: 'neolithic',
    kind: 'plate',
    highlight: [],
    coverage: 'farming-europe',
    nearest: false,
    plate: 'neolithic-europe.png',
    plateWidth: 1920,
    plateHeight: 1211,
    sourceShort: 'Gronenborn 2021',
    sourceOrg:
      'Gronenborn, Horejs, Börner & Ober — expansion of farming in western Eurasia, 9600–4000 BCE',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Expansion_of_farming_in_western_Eurasia,_9600%E2%80%934000_BCE.png',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    vintage: '~9600–4000 BCE (western Eurasia)',
  },
  {
    id: 'bantu',
    kind: 'schematic',
    highlight: ['bantu'],
    coverage: 'schematic',
    nearest: false,
    mapForthcoming: true,
    sourceShort: 'Grollemund 2015',
    sourceOrg: 'Grollemund et al., PNAS, 2015 — Bantu expansion through the rainforest',
    sourceUrl: 'https://www.pnas.org/doi/10.1073/pnas.1503793112',
    license: 'Site schematic on NASA Blue Marble (public domain)',
    licenseUrl: 'https://earthobservatory.nasa.gov/images/7373/december-blue-marble',
    vintage: '~4000–1000 BCE, continuing into the 1st millennium CE',
  },
  {
    id: 'austronesian',
    kind: 'plate',
    highlight: [],
    coverage: 'seafaring',
    nearest: false,
    plate: 'austronesian.png',
    plateWidth: 1920,
    plateHeight: 775,
    sourceShort: 'Bellwood / Benton',
    sourceOrg: 'Pavljenko after Bellwood et al. 2011 / Benton et al. 2012 — Austronesian dispersal',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Chronological_dispersal_of_Austronesian_people_across_the_Pacific.svg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    vintage: '~3000 BCE to ~1200 CE',
  },
  {
    id: 'steppe',
    kind: 'plate',
    highlight: [],
    coverage: 'culture-horizon',
    nearest: false,
    plate: 'yamnaya-horizon.jpg',
    plateWidth: 1674,
    plateHeight: 906,
    sourceShort: 'Haak 2015',
    sourceOrg: 'Haak et al., Nature, 2015 — steppe migration into Europe; Yamnaya horizon plate by Krakkos',
    sourceUrl: 'https://www.nature.com/articles/nature14317',
    license: 'Map: CC BY-SA 4.0 (Krakkos). Paper: Nature',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    vintage: 'Yamnaya horizon ~3300–2600 BCE; related movements into the 3rd–2nd millennium BCE',
  },
  {
    id: 'migration-period',
    kind: 'plate',
    highlight: [],
    coverage: 'regional',
    nearest: false,
    plate: 'migration-period.jpg',
    plateWidth: 1920,
    plateHeight: 1358,
    sourceShort: 'MapMaster',
    sourceOrg: 'MapMaster — invasions of the Roman Empire, 100–500 CE',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Invasions_of_the_Roman_Empire_1.png',
    license: 'CC BY-SA 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/',
    vintage: '100–500 CE (schematic)',
    greatMigrationsLink: true,
  },
  {
    id: 'islamic',
    kind: 'plate',
    highlight: [],
    coverage: 'conquest',
    nearest: false,
    plate: 'caliphate-expansion.png',
    plateWidth: 1920,
    plateHeight: 881,
    sourceShort: 'DieBuche',
    sourceOrg: 'DieBuche — expansion of the caliphate, 622–750 CE (Wikimedia Commons, public domain)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_expansion_of_Caliphate.svg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    vintage: '622–750 CE',
  },
  {
    id: 'mongol',
    kind: 'plate',
    highlight: [],
    coverage: 'empire-extent',
    nearest: false,
    plate: 'mongol-empire.png',
    plateWidth: 1280,
    plateHeight: 1280,
    sourceShort: 'Ali Zifan',
    sourceOrg: 'Ali Zifan — Mongol Empire at greatest extent (Wikimedia Commons)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mongol_Empire_(greatest_extent).svg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    vintage: 'c. 1206–1294 CE',
  },
  {
    id: 'atlantic-slave',
    kind: 'plate',
    highlight: [],
    coverage: 'forced-trade',
    nearest: false,
    plate: 'atlantic-slave-trade.png',
    plateWidth: 1920,
    plateHeight: 874,
    sourceShort: 'Eltis atlas',
    sourceOrg:
      'KuroNekoNiyah after Eltis & Richardson, Atlas of the Transatlantic Slave Trade (2010), Map 1',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:African_Slave_Trade.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    vintage: 'c. 1500–1860s CE',
  },
  {
    id: 'european-emigration',
    kind: 'plate',
    highlight: [],
    coverage: 'flow-snapshot',
    nearest: false,
    plate: 'minard-emigrants-1858.jpg',
    plateWidth: 1920,
    plateHeight: 1429,
    sourceShort: 'Minard 1862',
    sourceOrg:
      'Charles Joseph Minard — worldwide emigrants in 1858 (published 1862). One-year flow, not a century census',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Charles_Joseph_Minard_-_%C3%89migrants_du_Globe.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    vintage: '1858 (one year); mass emigration ~1840–1914',
  },
];

export const humanEventSources: PrimarySource[] = [
  cite(
    'Bergström et al., Science, 2020 — origins and expansion of modern humans',
    'https://www.science.org/doi/10.1126/science.aay5012',
  ),
  cite(
    'Clarkson et al., Nature, 2017 — Madjedbebe, Australia, ~65,000 years',
    'https://www.nature.com/articles/nature22968',
  ),
  cite(
    'Pedersen et al., PNAS, 2016 — ice-free corridor too late for the first Americans',
    'https://www.pnas.org/doi/10.1073/pnas.1518482113',
  ),
  cite(
    'Gronenborn, Horejs, Börner & Ober — expansion of farming in western Eurasia, 9600–4000 BCE (CC BY 4.0)',
    'https://commons.wikimedia.org/wiki/File:Expansion_of_farming_in_western_Eurasia,_9600%E2%80%934000_BCE.png',
  ),
  cite(
    'Lazaridis et al., Nature, 2016 — genomic history of the Near East (farmer ancestry)',
    'https://www.nature.com/articles/nature19310',
  ),
  cite(
    'Grollemund et al., PNAS, 2015 — Bantu expansion through the Central African rainforest',
    'https://www.pnas.org/doi/10.1073/pnas.1503793112',
  ),
  cite(
    'Patin et al., Science, 2017 — dispersals of Bantu-speaking populations',
    'https://www.science.org/doi/10.1126/science.aal1988',
  ),
  cite(
    'Bellwood et al. 2011 / Benton et al. 2012 — Austronesian chronological dispersal',
    'https://commons.wikimedia.org/wiki/File:Chronological_dispersal_of_Austronesian_people_across_the_Pacific.svg',
  ),
  cite(
    'Haak et al., Nature, 2015 — massive migration from the steppe into Europe',
    'https://www.nature.com/articles/nature14317',
  ),
  cite(
    'Anthony, The Horse, the Wheel, and Language, 2007 — archaeological Yamnaya context (not a racial map)',
    'https://press.princeton.edu/books/paperback/9780691147925/the-horse-the-wheel-and-language',
  ),
  cite(
    'MapMaster after Cornell & Matthews and others — invasions of the Roman Empire',
    'https://commons.wikimedia.org/wiki/File:Invasions_of_the_Roman_Empire_1.png',
  ),
  cite(
    'Kennedy, The Great Arab Conquests, 2007 — 7th–8th c. expansions as war and settlement, not a census',
    'https://www.weidenfeldandnicolson.co.uk/titles/hugh-kennedy/the-great-arab-conquests/9780297866169/',
  ),
  cite(
    'DieBuche, Wikimedia Commons — expansion of the caliphate 622–750 CE (public domain)',
    'https://commons.wikimedia.org/wiki/File:Map_of_expansion_of_Caliphate.svg',
  ),
  cite(
    'Jackson, The Mongols and the West, 1221–1410 — conquest, flight, and resettlement',
    'https://www.routledge.com/The-Mongols-and-the-West-1221-1410/Jackson/p/book/9781138848689',
  ),
  cite(
    'Eltis & Richardson, Atlas of the Transatlantic Slave Trade, 2010; SlaveVoyages database',
    'https://www.slavevoyages.org/',
  ),
  cite(
    'Hatton & Williamson, The Age of Mass Migration, 1998 — 19th–early 20th c. Atlantic emigration',
    'https://academic.oup.com/book/10169',
  ),
  cite(
    'Minard, 1862 — worldwide emigrants in the year 1858 (one-year flow map, public domain)',
    'https://commons.wikimedia.org/wiki/File:Charles_Joseph_Minard_-_%C3%89migrants_du_Globe.jpg',
  ),
  cite(
    'IPCC AR6 WGI — glacial–interglacial climate, ice sheets, and sea level (Pleistocene context)',
    'https://www.ipcc.ch/report/ar6/wg1/',
  ),
];

/** @deprecated Use humanEventMeta — kept so older imports still type-check during the rename. */
export const humanEraMeta = humanEventMeta;
export const humanEraIds = humanEventIds;
export const humanEraPreviewSrc = humanEventPreviewSrc;
export const humanEraSources = humanEventSources;
export type HumanEraId = HumanEventId;
export type HumanEraKind = HumanEventKind;
export type HumanEraCoverage = HumanEventCoverage;
export type HumanEraMeta = HumanEventMeta;
