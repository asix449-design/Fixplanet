import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'What it is',
  why: 'Why it matters',
  how: 'How to read it',
  limits: 'Limits',
};

const mine = {
  operating: '#b2182b',
  proposed: '#0072b2',
  paused: '#8c8c8c',
  closed: '#e69f00',
};

const reserve = ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000', '#d9d9d9'];

const critical = ['#dadaeb', '#bcbddc', '#9e9ac8', '#6a51a3', '#3f007d', '#f4f3f0'];

const rare = ['#b2e2cc', '#66c2a4', '#238b45', '#00441b', '#f4f3f0'];

const lithium = ['#c6dbef', '#6baed6', '#2171b5', '#08306b', '#bdbdbd', '#f4f3f0'];

export const en: Record<string, MapCopy> = {
  'coal-mines': {
    title: 'Coal mines',
    cardMeta: 'Global Energy Monitor · about 7,000 mines · August 2026 release',
    hook: 'Operating, proposed and recently closed coal mines around the world, with their status, owners and output.',
    description:
      'The Global Coal Mine Tracker, published by the research group Global Energy Monitor, catalogues coal mines around the world. Its public page counts about 7,000 mines in 70 countries and about 5,300 mine owners. In the 2025 mine-level records, coal production from operating mines reached about 9.1 billion tonnes. The August 2026 release is the second version of a dataset first released in May 2026, and the data are updated in the second quarter of each year.',
    whyOnShelf:
      'Coal mines lock in decades of production. Global Energy Monitor counts 835 proposed coal mines under development, with a combined capacity of 2,521 million tonnes per year, about 11% more than in 2024. Of that capacity, 781 million tonnes per year is already under construction or in trial operation. Proposed mines alone could release 16.8 million tonnes of methane a year, on top of the carbon dioxide released when the coal is burned.',
    howToRead:
      'Each dot is a mine, coloured by status: operating, proposed, shelved or mothballed, and closed or cancelled. It lists operating, inactive and proposed mines that can produce 1 million tonnes per year or more, plus mines closed since 2015; in China the threshold is 0.45 million tonnes per year. China, India, Australia, Russia and South Africa hold over 90% of proposed capacity, and China alone accounts for 1,321 million tonnes per year, more than the rest of the world combined. Thermal coal for power stations makes up around 70% of proposed capacity; most of the rest is coal for steelmaking.',
    caveats:
      'Small mines appear only where the research team has had time to add them. Production figures are for saleable coal where possible, and where recent production is unknown the mine’s capacity is used instead. When a mine’s exact location is unknown, the dot sits at the closest approximate location. A proposed mine may never open.',
    licenseNote: realMapCredit('en', 'coal-mines') ?? '',
    imageAlt:
      'World map of coal mines as colored dots on pale land: red operating, blue proposed, grey shelved or mothballed, orange closed or cancelled',
    caption: 'Coal mines around the world by status, from the August 2026 release.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Map key',
        items: [
          { swatch: mine.operating, label: 'Red, operating' },
          { swatch: mine.proposed, label: 'Blue, proposed' },
          { swatch: mine.paused, label: 'Grey, shelved or mothballed' },
          { swatch: mine.closed, label: 'Orange, closed or cancelled' },
        ],
      },
    ],
    gridSource: cite(
      'Global Energy Monitor, Global Coal Mine Tracker',
      'https://globalenergymonitor.org/projects/global-coal-mine-tracker',
    ),
    sources: [
      cite(
        'Global Energy Monitor: Global Coal Mine Tracker',
        'https://globalenergymonitor.org/projects/global-coal-mine-tracker',
      ),
      cite(
        'Global Energy Monitor: Creative Commons Attribution 4.0 International Public License',
        'https://globalenergymonitor.org/creative-commons-license',
      ),
    ],
  },
  'coal-reserves': {
    title: 'Coal reserves',
    cardMeta: 'U.S. Energy Information Administration · proved reserves · 2023',
    hook: 'How much coal each country reports as proved reserves, the coal that known deposits can yield at today’s prices and with today’s technology.',
    description:
      'The U.S. Energy Information Administration, the statistics agency of the United States Department of Energy, publishes international energy data, including each country’s proved coal reserves in tonnes. Our World in Data republishes the series for 2008–2023, last updated on 30 June 2026. Proved reserves are the quantities that geological and engineering information shows can be recovered in the future from known deposits under existing economic and operating conditions.',
    whyOnShelf:
      'Reserves show how much coal a country could still mine and burn. In 2023 the largest proved reserves were in the United States (about 248 billion tonnes), Russia (about 162 billion), China (about 157 billion), Australia (about 150 billion) and India (about 128 billion). Together these five held about 72% of the world total of about 1,166 billion tonnes.',
    howToRead:
      'Each country is shaded by its proved coal reserves in the latest year available, in tonnes. The darker the colour, the larger the reserves. Countries that report no reserves share the lightest shade.',
    caveats:
      'Countries report their own estimates, so quality and how often they are revised vary. Reserve figures change when prices, mining technology or national reporting change. Coal resources, which also count deposits that would cost too much to mine today, are larger than proved reserves.',
    licenseNote: realMapCredit('en', 'coal-reserves') ?? '',
    imageAlt:
      'World map of proved coal reserves in 2023, pale beige for small or no reserves and dark red for the largest totals, grey where data are missing',
    caption: 'Proved coal reserves by country, 2023.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Proved coal reserves',
        items: [
          { swatch: reserve[0], label: 'Under 2 billion tonnes or none' },
          { swatch: reserve[1], label: '2 to 5 billion' },
          { swatch: reserve[2], label: '5 to 10 billion' },
          { swatch: reserve[3], label: '10 to 20 billion' },
          { swatch: reserve[4], label: '20 to 50 billion' },
          { swatch: reserve[5], label: '50 to 100 billion' },
          { swatch: reserve[6], label: '100 billion tonnes or more' },
          { swatch: reserve[7], label: 'Grey, no data' },
        ],
      },
    ],
    gridSource: cite(
      'U.S. Energy Information Administration, via Our World in Data',
      'https://ourworldindata.org/grapher/fossil-fuels?fuel=coal&metric=reserves&per_capita=total',
    ),
    sources: [
      cite(
        'Our World in Data: Coal reserves (data from the U.S. Energy Information Administration)',
        'https://ourworldindata.org/grapher/fossil-fuels?fuel=coal&metric=reserves&per_capita=total',
      ),
      cite(
        'U.S. Energy Information Administration: International energy data, coal and coke reserves',
        'https://www.eia.gov/international/data/world/coal-and-coke/coal-and-coke-reserves',
      ),
      cite(
        'U.S. Energy Information Administration: Copyrights and reuse',
        'https://www.eia.gov/about/copyrights_reuse.php',
      ),
    ],
  },
  'critical-mineral-production': {
    title: 'Critical mineral production',
    cardMeta: 'U.S. Geological Survey · mining and processing · 2023',
    hook: 'The countries that produced at least 5% of world output of key minerals in 2023, at the mine and at the refinery.',
    description:
      'In August 2025 the U.S. Geological Survey, the science agency of the United States Department of the Interior, published global maps of critical mineral production in 2023. They show every country that produced 5% or more of world output of a mineral, first at the mining stage, for 29 minerals, and then at the processing stage, for 18 minerals, where ores are refined and smelted into oxides, metals or alloys. The production figures come from the survey’s yearbook, Mineral Commodity Summaries 2025.',
    whyOnShelf:
      'A few countries dominate. China mined at least 5% of world output of 18 of the 29 minerals, followed by South Africa (10), Australia (8), Russia (8), the United States (8) and Brazil (7). In processing, China leads with 14 of the 18, followed by Japan (7), Russia (6), Canada (4) and the Republic of Korea (4). China’s share grows from mine to refinery: for cobalt it rises from 1% of mine output to 80% of processed output, and for aluminium from 21% to 59%.',
    howToRead:
      'The map shows the mining stage. The darker a country, the more minerals for which it mined at least 5% of world output. Trade shows where ore goes next: in 2023 Australia supplied 33% of world exports of metal ores and concentrates by value, followed by Brazil (11%), Chile and Peru (9% each) and South Africa (5%), while China bought 64% of imports.',
    caveats:
      'Some minor metals, such as gallium, germanium and indium, are recovered as by-products of processing copper and lead-zinc ores, so they appear only at the processing stage. Some processing figures for 2023 were estimated from earlier years. A pale country may still produce a mineral in smaller amounts. The maps were drawn when the official United States list of critical minerals, from 2022, had 50 entries; the final 2025 list, published on 7 November 2025, has 60. The maps also cover cadmium, copper, gold and molybdenum.',
    licenseNote: realMapCredit('en', 'critical-mineral-production') ?? '',
    imageAlt:
      'World map of countries that mined at least 5% of world output of selected minerals in 2023, pale lilac for one mineral and deep purple for the most',
    caption: 'Countries that mined at least 5% of world output of one or more selected minerals, 2023.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Minerals with at least 5% of world mine output',
        items: [
          { swatch: critical[0], label: '1' },
          { swatch: critical[1], label: '2 to 3' },
          { swatch: critical[2], label: '4 to 5' },
          { swatch: critical[3], label: '6 to 10' },
          { swatch: critical[4], label: '11 to 18' },
          { swatch: critical[5], label: 'Pale grey, none' },
        ],
      },
    ],
    gridSource: cite(
      'U.S. Geological Survey, Global Maps of Critical Mineral Production in 2023',
      'https://pubs.usgs.gov/publication/fs20253038',
    ),
    sources: [
      cite(
        'U.S. Geological Survey: Global Maps of Critical Mineral Production in 2023, Fact Sheet 2025–3038, August 2025',
        'https://pubs.usgs.gov/publication/fs20253038',
      ),
      cite(
        'U.S. Geological Survey: Mineral Commodity Summaries 2025',
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'Federal Register: Final 2025 List of Critical Minerals, 7 November 2025',
        'https://www.federalregister.gov/documents/2025/11/07/2025-19813/final-2025-list-of-critical-minerals',
      ),
    ],
  },
  'rare-earths': {
    title: 'Rare earths',
    cardMeta: 'U.S. Geological Survey · mine production and reserves · 2024',
    hook: 'Where rare earths, the metals in permanent magnets and catalysts, are mined, and how large known reserves are.',
    description:
      'The rare earths chapter of Mineral Commodity Summaries 2025, the yearbook of the U.S. Geological Survey, estimates world mine production at about 376,000 tonnes of rare-earth oxide equivalent in 2023 and about 390,000 tonnes in 2024. Rare-earth oxide equivalent is the common unit for adding up the different rare-earth elements. World reserves are more than 90 million tonnes. The count covers the lanthanides and yttrium and leaves out most scandium.',
    whyOnShelf:
      'Rare earths go into permanent magnets, catalysts, ceramics and glass, alloys and polishing powders. China’s production quota rose from 255,000 to 270,000 tonnes, about 69% of the world total in 2024, and China also holds the largest reserves, 44 million tonnes. The United States produced about 45,000 tonnes in mineral concentrates in 2024, yet relied on net imports for about 80% of the rare-earth compounds and metals it used. From 2020 to 2023, 70% of those imports came from China, 13% from Malaysia, 6% from Japan and 5% from Estonia.',
    howToRead:
      'The map shows estimated mine production in 2024, in tonnes of rare-earth oxide equivalent. The darker the colour, the larger the output. After China, the largest producers were the United States, Burma (31,000 tonnes), and Australia, Nigeria and Thailand (13,000 tonnes each). Brazil holds the second-largest reserves, 21 million tonnes, but mined only 20 tonnes in 2024.',
    caveats:
      'China’s figure is its official production quota, so undocumented mining is missing. Output for Australia, Burma, Madagascar, Malaysia, Nigeria, Thailand and Vietnam is estimated from China’s reported imports. Only limited quantities of rare earths were recovered by recycling in the United States, from batteries, permanent magnets and fluorescent lamps.',
    licenseNote: realMapCredit('en', 'rare-earths') ?? '',
    imageAlt:
      'World map of estimated rare-earth mine production in 2024, pale green for small output and dark green for the largest, with China darkest',
    caption: 'Estimated rare-earth mine production by country, 2024.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Mine production in 2024, tonnes of rare-earth oxide equivalent',
        items: [
          { swatch: rare[0], label: '1 to 999' },
          { swatch: rare[1], label: '1,000 to 9,999' },
          { swatch: rare[2], label: '10,000 to 49,999' },
          { swatch: rare[3], label: '50,000 or more' },
          { swatch: rare[4], label: 'Pale grey, no reported production' },
        ],
      },
    ],
    gridSource: cite(
      'U.S. Geological Survey, Rare Earths Statistics and Information',
      'https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information',
    ),
    sources: [
      cite(
        'U.S. Geological Survey: Rare Earths Statistics and Information',
        'https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information',
      ),
      cite(
        'U.S. Geological Survey: Mineral Commodity Summaries 2025, rare earths chapter',
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'U.S. Geological Survey: Mineral Commodity Summaries 2025 Data Release',
        'https://www.sciencebase.gov/catalog/item/677eaf95d34e760b392c4970',
      ),
    ],
  },
  lithium: {
    title: 'Lithium',
    cardMeta: 'U.S. Geological Survey · mine production and reserves · 2024',
    hook: 'Where lithium, the light metal in rechargeable batteries, is mined, and how large known reserves are.',
    description:
      'The lithium chapter of Mineral Commodity Summaries 2025, the yearbook of the U.S. Geological Survey, estimates that world lithium production, excluding the United States, rose by 18% to about 240,000 tonnes of lithium content in 2024, from 204,000 tonnes in 2023. World reserves are about 30 million tonnes, and measured and indicated resources total about 115 million tonnes.',
    whyOnShelf:
      'Batteries took an estimated 87% of lithium use worldwide, for electric vehicles, portable electronics, power tools and grid storage. World consumption in 2024 was estimated at 220,000 tonnes, 29% more than in 2023.',
    howToRead:
      'The map shows estimated mine production in 2024, in tonnes of lithium content. The darker the colour, the larger the output. Australia led with about 88,000 tonnes, followed by Chile (49,000), China (41,000), Zimbabwe (22,000) and Argentina (18,000). United States production is withheld to protect company data. Chile holds the largest reserves, 9.3 million tonnes.',
    caveats:
      'Prices swing widely. After high prices from 2021 to early 2023, the average United States price for lithium carbonate on fixed contracts fell to $14,000 per tonne in 2024, 66% lower than in 2023. Resource estimates keep growing as exploration continues, and reserve figures are revised from company and government reports.',
    licenseNote: realMapCredit('en', 'lithium') ?? '',
    imageAlt:
      'World map of estimated lithium mine production in 2024, pale blue for smaller output and dark blue for the largest, with the United States in mid grey',
    caption: 'Estimated lithium mine production by country, 2024.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Mine production in 2024, tonnes of lithium content',
        items: [
          { swatch: lithium[0], label: 'Under 5,000' },
          { swatch: lithium[1], label: '5,000 to 19,999' },
          { swatch: lithium[2], label: '20,000 to 49,999' },
          { swatch: lithium[3], label: '50,000 or more' },
          { swatch: lithium[4], label: 'Mid grey, withheld (United States)' },
          { swatch: lithium[5], label: 'Pale grey, no reported production' },
        ],
      },
    ],
    gridSource: cite(
      'U.S. Geological Survey, Lithium Statistics and Information',
      'https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information',
    ),
    sources: [
      cite(
        'U.S. Geological Survey: Lithium Statistics and Information',
        'https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information',
      ),
      cite(
        'U.S. Geological Survey: Mineral Commodity Summaries 2025, lithium chapter',
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'U.S. Geological Survey: Mineral Commodity Summaries 2025 Data Release',
        'https://www.sciencebase.gov/catalog/item/677eaf95d34e760b392c4970',
      ),
    ],
  },
};
