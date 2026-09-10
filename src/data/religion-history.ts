export const RELIGION_ATLAS_SLUG = 'religious';

export type ReligionCoverage =
  | 'old-world'
  | 'christianity-expansion'
  | 'state-religion'
  | 'europe-mediterranean'
  | 'spread-to-year'
  | 'colonial-atlas'
  | 'intelligence-atlas'
  | 'majority-modern';

export type ReligionFrameMeta = {
  year: number;
  label: string;
  sourceYear: string;
  preview: string;
  coverage: ReligionCoverage;
  nearest: boolean;
  sourceShort: string;
  sourceOrg: string;
  sourceUrl: string;
  commonsUrl: string;
  license: string;
  licenseUrl: string;
};

export const religionHistoryPreviewSrc = (file: string) =>
  file.startsWith('/') ? file : `/images/maps/religion/${file}`;

/**
 * Century steps from the start of the Common Era to now.
 * Religion maps for early centuries are sparse and contested. Each frame is a
 * published plate — atlas, government sheet, or openly licensed reconstruction.
 * We do not invent majority polygons. When a century has no honest sheet,
 * the nearest sourced plate is shown and marked as a gap.
 */
export const religionHistoryFrames: ReligionFrameMeta[] = [
  {
    year: 1,
    label: '1',
    sourceYear: 'antiquity (1905 reconstruction)',
    preview: 'y0001.png',
    coverage: 'old-world',
    nearest: false,
    sourceShort: 'Reclus',
    sourceOrg: 'Élisée Reclus, L’Homme et la Terre (1905 plate of Old-World religions)',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Planche_VI_-_Principales_religions_de_l%27ancien_monde_-_liv3-ch09.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Planche_VI_-_Principales_religions_de_l%27ancien_monde_-_liv3-ch09.png',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 100,
    label: '100',
    sourceYear: 'antiquity (1905 reconstruction)',
    preview: 'y0001.png',
    coverage: 'old-world',
    nearest: true,
    sourceShort: 'Reclus',
    sourceOrg: 'Élisée Reclus, L’Homme et la Terre (1905 plate of Old-World religions)',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Planche_VI_-_Principales_religions_de_l%27ancien_monde_-_liv3-ch09.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Planche_VI_-_Principales_religions_de_l%27ancien_monde_-_liv3-ch09.png',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 200,
    label: '200',
    sourceYear: 'antiquity (1905 reconstruction)',
    preview: 'y0001.png',
    coverage: 'old-world',
    nearest: true,
    sourceShort: 'Reclus',
    sourceOrg: 'Élisée Reclus, L’Homme et la Terre (1905 plate of Old-World religions)',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Planche_VI_-_Principales_religions_de_l%27ancien_monde_-_liv3-ch09.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Planche_VI_-_Principales_religions_de_l%27ancien_monde_-_liv3-ch09.png',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 300,
    label: '300',
    sourceYear: 'to 600 CE',
    preview: 'y0600.png',
    coverage: 'christianity-expansion',
    nearest: true,
    sourceShort: 'Atlas of World History',
    sourceOrg: 'Geuiwogbil after Atlas of World History; Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    year: 400,
    label: '400',
    sourceYear: 'to 600 CE',
    preview: 'y0600.png',
    coverage: 'christianity-expansion',
    nearest: true,
    sourceShort: 'Atlas of World History',
    sourceOrg: 'Geuiwogbil after Atlas of World History; Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    year: 500,
    label: '500',
    sourceYear: 'to 600 CE',
    preview: 'y0600.png',
    coverage: 'christianity-expansion',
    nearest: true,
    sourceShort: 'Atlas of World History',
    sourceOrg: 'Geuiwogbil after Atlas of World History; Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    year: 600,
    label: '600',
    sourceYear: 'to 600 CE',
    preview: 'y0600.png',
    coverage: 'christianity-expansion',
    nearest: false,
    sourceShort: 'Atlas of World History',
    sourceOrg: 'Geuiwogbil after Atlas of World History; Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    commonsUrl:
      'https://commons.wikimedia.org/wiki/File:Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    year: 700,
    label: '700',
    sourceYear: '820 CE',
    preview: 'y0820.png',
    coverage: 'state-religion',
    nearest: true,
    sourceShort: 'Wikimedia 820',
    sourceOrg: 'Wikimedia Commons, State Religions 820 AD (after World in 820)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:State_Religions_820_AD.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:State_Religions_820_AD.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 800,
    label: '800',
    sourceYear: '820 CE',
    preview: 'y0820.png',
    coverage: 'state-religion',
    nearest: true,
    sourceShort: 'Wikimedia 820',
    sourceOrg: 'Wikimedia Commons, State Religions 820 AD (after World in 820)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:State_Religions_820_AD.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:State_Religions_820_AD.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 900,
    label: '900',
    sourceYear: '820 CE',
    preview: 'y0820.png',
    coverage: 'state-religion',
    nearest: true,
    sourceShort: 'Wikimedia 820',
    sourceOrg: 'Wikimedia Commons, State Religions 820 AD (after World in 820)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:State_Religions_820_AD.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:State_Religions_820_AD.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 1000,
    label: '1000',
    sourceYear: 'c. 1097',
    preview: 'y1097.jpg',
    coverage: 'europe-mediterranean',
    nearest: true,
    sourceShort: 'Shepherd',
    sourceOrg: 'William R. Shepherd, Historical Atlas (1911), religions about 1097',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Europe_mediterranean_1097.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Europe_mediterranean_1097.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 1100,
    label: '1100',
    sourceYear: 'c. 1097',
    preview: 'y1097.jpg',
    coverage: 'europe-mediterranean',
    nearest: false,
    sourceShort: 'Shepherd',
    sourceOrg: 'William R. Shepherd, Historical Atlas (1911), religions about 1097',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Europe_mediterranean_1097.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Europe_mediterranean_1097.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 1200,
    label: '1200',
    sourceYear: 'c. 1097',
    preview: 'y1097.jpg',
    coverage: 'europe-mediterranean',
    nearest: true,
    sourceShort: 'Shepherd',
    sourceOrg: 'William R. Shepherd, Historical Atlas (1911), religions about 1097',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Europe_mediterranean_1097.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Europe_mediterranean_1097.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 1300,
    label: '1300',
    sourceYear: 'spread to 1500',
    preview: 'y1500.png',
    coverage: 'spread-to-year',
    nearest: true,
    sourceShort: 'Fährtenleser',
    sourceOrg: 'Fährtenleser, Wikimedia Commons — spread of world religions until 1500',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 1400,
    label: '1400',
    sourceYear: 'spread to 1500',
    preview: 'y1500.png',
    coverage: 'spread-to-year',
    nearest: true,
    sourceShort: 'Fährtenleser',
    sourceOrg: 'Fährtenleser, Wikimedia Commons — spread of world religions until 1500',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 1500,
    label: '1500',
    sourceYear: 'spread to 1500',
    preview: 'y1500.png',
    coverage: 'spread-to-year',
    nearest: false,
    sourceShort: 'Fährtenleser',
    sourceOrg: 'Fährtenleser, Wikimedia Commons — spread of world religions until 1500',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 1600,
    label: '1600',
    sourceYear: 'spread to 1500',
    preview: 'y1500.png',
    coverage: 'spread-to-year',
    nearest: true,
    sourceShort: 'Fährtenleser',
    sourceOrg: 'Fährtenleser, Wikimedia Commons — spread of world religions until 1500',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Medieval-World-Religions.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    year: 1700,
    label: '1700',
    sourceYear: '1821',
    preview: 'y1821.jpg',
    coverage: 'colonial-atlas',
    nearest: true,
    sourceShort: 'Woodbridge',
    sourceOrg: 'William C. Woodbridge, Moral & political chart of the inhabited world (1821)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Civilization_and_religion_map_1821.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Civilization_and_religion_map_1821.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 1800,
    label: '1800',
    sourceYear: '1821',
    preview: 'y1821.jpg',
    coverage: 'colonial-atlas',
    nearest: true,
    sourceShort: 'Woodbridge',
    sourceOrg: 'William C. Woodbridge, Moral & political chart of the inhabited world (1821)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Civilization_and_religion_map_1821.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Civilization_and_religion_map_1821.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 1900,
    label: '1900',
    sourceYear: '1883',
    preview: 'y1883.jpg',
    coverage: 'colonial-atlas',
    nearest: true,
    sourceShort: 'Dobbins',
    sourceOrg: 'Frank Stockton Dobbins, Errors of the Church (1883 world-religions plate)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1883_religions_map.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:1883_religions_map.jpg',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  {
    year: 2000,
    label: '2000',
    sourceYear: '1943',
    preview: 'y1943.jpg',
    coverage: 'intelligence-atlas',
    nearest: true,
    sourceShort: 'US Army 1943',
    sourceOrg: 'U.S. Army Service Forces, Atlas of World Maps (1943), Religions plate',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Religions_10.jpg',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Religions_10.jpg',
    license: 'Public domain',
    licenseUrl: 'https://www.usa.gov/government-works',
  },
  {
    year: 2020,
    label: '2020',
    sourceYear: '2000s majority regions',
    preview: '/images/maps/world-religions.jpg',
    coverage: 'majority-modern',
    nearest: false,
    sourceShort: 'TheGreenEditor',
    sourceOrg: 'TheGreenEditor, Wikimedia Commons majority-religion regions; Pew for composition tables',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Religion_distribution.png',
    commonsUrl: 'https://commons.wikimedia.org/wiki/File:Religion_distribution.png',
    license: 'Public domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
];
