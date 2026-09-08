import type { PrimarySource } from './sources';
import { cite } from './sources';

export const humanEraIds = [
  'origin',
  'out-of-africa',
  'sahul',
  'eurasia',
  'americas',
  'holocene',
  'antiquity',
  'migration-period',
  'later-seafaring',
] as const;

export type HumanEraId = (typeof humanEraIds)[number];

export type HumanEraKind = 'schematic' | 'plate';

export type HumanEraCoverage =
  | 'schematic'
  | 'agriculture'
  | 'polities'
  | 'regional'
  | 'seafaring';

export type HumanSchematicPin = 'africa' | 'out' | 'sahul' | 'eurasia' | 'americas' | 'islands';

export type HumanEraMeta = {
  id: HumanEraId;
  kind: HumanEraKind;
  /** Pins/arrows to light on the Blue Marble schematic. Empty when `kind` is plate. */
  highlight: readonly HumanSchematicPin[];
  coverage: HumanEraCoverage;
  nearest: boolean;
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

export const humanEraPreviewSrc = (file: string) =>
  file.startsWith('/') ? file : `/images/migration/eras/${file}`;

/**
 * Honest era steps — not year-by-year GPS of everyone, and not invented
 * global population choropleths. Pleistocene frames are the site’s teaching
 * schematic on NASA Blue Marble. Later frames are published plates; gaps
 * (Americas on the 1 CE sheet, Pacific-only Austronesian, Europe-only
 * Migration Period) are labeled the same way as the Religion atlas.
 */
export const humanEraMeta: HumanEraMeta[] = [
  {
    id: 'origin',
    kind: 'schematic',
    highlight: ['africa'],
    coverage: 'schematic',
    nearest: false,
    sourceShort: 'Hublin 2017',
    sourceOrg: 'Hublin et al., Nature, 2017 — Jebel Irhoud, Morocco',
    sourceUrl: 'https://www.nature.com/articles/nature22336',
    license: 'Site schematic on NASA Blue Marble (public domain)',
    licenseUrl: 'https://earthobservatory.nasa.gov/images/7373/december-blue-marble',
    vintage: '~300,000 years ago',
  },
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
    highlight: ['out', 'sahul'],
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
    id: 'eurasia',
    kind: 'schematic',
    highlight: ['out', 'eurasia'],
    coverage: 'schematic',
    nearest: false,
    sourceShort: 'Bergström 2020',
    sourceOrg: 'Bergström et al., Science, 2020 — Eurasian presence after the expansion',
    sourceUrl: 'https://www.science.org/doi/10.1126/science.aay5012',
    license: 'Site schematic on NASA Blue Marble (public domain)',
    licenseUrl: 'https://earthobservatory.nasa.gov/images/7373/december-blue-marble',
    vintage: '~45,000–40,000 years ago in Europe',
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
    vintage: '~15,000–10,000 years ago (working window)',
  },
  {
    id: 'holocene',
    kind: 'plate',
    highlight: [],
    coverage: 'agriculture',
    nearest: false,
    plate: 'holocene-agriculture.png',
    plateWidth: 1920,
    plateHeight: 848,
    sourceShort: 'Diamond 2003',
    sourceOrg:
      'Ian Alexander after Diamond, Science, 2003 — centres of origin and spread of agriculture',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Centres_of_origin_and_spread_of_agriculture_labelled.svg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    vintage: '2003 synthesis (map 2023)',
  },
  {
    id: 'antiquity',
    kind: 'plate',
    highlight: [],
    coverage: 'polities',
    nearest: false,
    plate: '/images/maps/borders/y0001.png',
    plateWidth: 1600,
    plateHeight: 800,
    sourceShort: 'Javierfv1212',
    sourceOrg: 'Javierfv1212, World in 1 CE — Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_in_1_CE.png',
    license: 'Public domain (CC0)',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    vintage: '1 CE reconstruction',
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
    id: 'later-seafaring',
    kind: 'plate',
    highlight: [],
    coverage: 'seafaring',
    nearest: false,
    plate: 'austronesian.png',
    plateWidth: 1920,
    plateHeight: 775,
    sourceShort: 'Bellwood / Benton',
    sourceOrg:
      'Pavljenko after Bellwood et al. 2011 / Benton et al. 2012 — Austronesian dispersal',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Chronological_dispersal_of_Austronesian_people_across_the_Pacific.svg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    vintage: 'Holocene, to ~1200 CE',
  },
];

export const humanEraSources: PrimarySource[] = [
  cite(
    'Hublin et al., Nature, 2017 — Jebel Irhoud, Morocco, ~315,000 years',
    'https://www.nature.com/articles/nature22336',
  ),
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
    'IPCC AR6 WGI — glacial–interglacial climate, ice sheets, and sea level (context)',
    'https://www.ipcc.ch/report/ar6/wg1/',
  ),
  cite(
    'Diamond, Science, 2003 — farmers and their languages: first expansions (Fig. 1)',
    'https://doi.org/10.1126/science.1078208',
  ),
  cite(
    'Javierfv1212, Wikimedia Commons — World in 1 CE (polities, not a census)',
    'https://commons.wikimedia.org/wiki/File:World_in_1_CE.png',
  ),
  cite(
    'MapMaster after Cornell & Matthews and others — invasions of the Roman Empire',
    'https://commons.wikimedia.org/wiki/File:Invasions_of_the_Roman_Empire_1.png',
  ),
  cite(
    'Bellwood et al. 2011 / Benton et al. 2012 — Austronesian chronological dispersal',
    'https://commons.wikimedia.org/wiki/File:Chronological_dispersal_of_Austronesian_people_across_the_Pacific.svg',
  ),
];
