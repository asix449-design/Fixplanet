import type { SpeciesCopy } from '../data/wildlife';
import { cite } from '../data/sources';

const condorSpecies =
  'https://www.fws.gov/species/california-condor-gymnogyps-californianus';
const condorProgram = 'https://www.fws.gov/program/california-condor-recovery';
const condorPdf =
  'https://www.fws.gov/sites/default/files/documents/2026-02/2025-california-condor-population-status_508-compliant.pdf';
const craneSpecies = 'https://www.fws.gov/species/whooping-crane-grus-americana';
const cranePress =
  'https://www.fws.gov/press-release/2025-06/2025-wintering-whooping-crane-count';
const cranePdf =
  'https://www.fws.gov/sites/default/files/documents/2026-03/2024-2025-whcr-recovery-activities-report-w-appendices.pdf';
const puffinSheet =
  'https://datazone.birdlife.org/species/factsheet/atlantic-puffin-fratercula-arctica';
const puffinNews =
  'https://www.birdlife.org/news/2022/04/06/seabird-of-the-month-atlantic-puffin-fratercula-arctica/';
const puffinPdf =
  'https://www.unep-aewa.org/sites/default/files/document/aewa_mop8_inf_16_guidance_atlantic_puffin.pdf';
const penguinSheet =
  'https://datazone.birdlife.org/species/factsheet/african-penguin-spheniscus-demersus';
const penguinNews =
  'https://www.birdlife.org/news/2024/11/20/african-penguin-on-the-brink-of-extinction/';
const penguinZa = 'https://www.birdlife.org.za/red-list/african-penguin/';
const sanccob = 'https://sanccob.co.za/about-sanccob/';
const albatrossPdf = 'https://www.acap.aq/resources/acap-species/304-wandering-albatross/file';
const albatrossHub = 'https://www.acap.aq/resources/acap-species';
const albatrossSheet =
  'https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans';

const cc25 = 'https://creativecommons.org/licenses/by-sa/2.5/';
const cc30 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc40 = 'https://creativecommons.org/licenses/by-sa/4.0/';

export const birdsEn: Record<string, SpeciesCopy> = {
  'california-condor': {
    commonName: 'California condor',
    tag: 'Recovery · western North America',
    statusPill: 'Recovery',
    hook: 'North America’s largest land bird. Only 23 survived in 1982; captive breeding and release have helped the species recover, and lead poisoning still kills birds in the wild.',
    imageAlt:
      'A California condor in flight at Bitter Creek National Wildlife Refuge, California, against a clear blue sky.',
    caption:
      'A California condor in flight at Bitter Creek National Wildlife Refuge, California, against a clear blue sky.',
    photoCredit:
      'Photo: U.S. Fish and Wildlife Service, Pacific Southwest Region, via Wikimedia Commons, public domain.',
    filePageLabel: 'File page',
    gridSource: cite('U.S. Fish and Wildlife Service, California condor', condorSpecies),
    what: 'The California condor (Gymnogyps californianus) is the largest land bird in North America. Its wingspan is about 2.9 m (9.5 feet), and an adult stands 0.9 to 1.1 m (3 to 3.5 feet) tall and weighs 8 to 11 kg (17 to 25 pounds). Condors eat carrion, such as the carcasses of deer, cattle, whales and seals, and find it by sight or by following other scavengers.',
    range:
      'Free-flying condors live in four areas: Arizona and Utah, California, the Pacific Northwest and Baja California in Mexico. Of the 392 wild birds at the end of 2025, 98 lived in Arizona and Utah, 216 in California, 25 in the Pacific Northwest and 53 in Baja California. The Pacific Northwest group is classed as experimental. Condors roost on large trees, snags, rocky outcrops and cliffs, and nest in caves and on ledges of steep rocky terrain, or in cavities and broken tops of old conifers. They forage over open grasslands, oak savanna foothills and beaches beside coastal mountains, and can fly up to 400 km (250 miles) in a day.',
    story:
      'In 1982 only 23 condors survived anywhere, and by 1987 all wild condors had been taken into a captive breeding programme. The federal government listed the species as endangered in 1967. Since 1992 the U.S. Fish and Wildlife Service has released captive-bred condors into the wild. In 2004 the first chick successfully hatched in the wild, and in 2008 more condors were flying free than living in captivity for the first time. Lead from spent ammunition remains the main cause of death in the wild: from 1992 through 2025, 161 free-flying condors died of confirmed lead poisoning.',
    when: 'As of 31 December 2025 the world population was 607 condors (570 a year earlier): 392 in the wild and 215 in captivity. The 1996 recovery plan sets the goal of two wild, geographically separate, self-sustaining populations, each with 150 birds and at least 15 breeding pairs, and a third population kept in captivity.',
    humanRole:
      'The California Condor Recovery Program is led by the same service, with partners that include state agencies, the government of Mexico, the Yurok Tribe, zoos and non-profit groups. They breed the birds, release them and monitor them in the field. Hunters and ranchers are asked to use non-lead ammunition, because lead fragments left in carcasses poison the condors that eat them.',
    sources: '',
    sourcesList: [
      cite(
        'U.S. Fish and Wildlife Service: California Condor (Gymnogyps californianus)',
        condorSpecies,
      ),
      cite('U.S. Fish and Wildlife Service: California Condor Recovery Program', condorProgram),
      cite(
        'U.S. Fish and Wildlife Service: California Condor Recovery Program 2025 Annual Population Status (PDF)',
        condorPdf,
      ),
    ],
  },
  'whooping-crane': {
    commonName: 'Whooping crane',
    tag: 'Recovery · Canada to Texas',
    statusPill: 'Recovery',
    hook: 'North America’s tallest bird. Only 16 were left in 1941; the one wild flock that sustains itself is now estimated at 557 and still migrates between northern Canada and the Texas coast.',
    imageAlt:
      'A whooping crane in flight over Texas, with white body, black wingtips and a red crown against a pale sky.',
    caption:
      'A whooping crane in flight over Texas, with white body, black wingtips and a red crown against a pale sky.',
    photoCredit:
      'Photo: John Noll, U.S. Department of Agriculture, via Wikimedia Commons, public domain.',
    filePageLabel: 'File page',
    gridSource: cite(
      'U.S. Fish and Wildlife Service, 2025 wintering whooping crane count',
      cranePress,
    ),
    what: 'The whooping crane (Grus americana) is the tallest bird in North America. Its plumage is almost entirely snowy white, with black wingtips, a red crown and sparse black feathers on the cheeks. An adult stands about 1.5 m (5 feet) tall, has a wingspan of more than 2.1 m (7 feet) and weighs 6.0 to 7.8 kg (13.2 to 17.2 pounds). The name probably comes from the loud, single-note call the birds repeat when alarmed.',
    range:
      'The only remaining wild, self-sustaining population, the Aransas-Wood Buffalo population, breeds in and around Wood Buffalo National Park in the Canadian provinces of Alberta and the Northwest Territories. Each year it migrates more than 4,000 km (2,500 miles) through the Canadian prairies and the U.S. Great Plains to the mid-coast of Texas, where it winters in and near Aransas National Wildlife Refuge. Reintroduced flocks live in Wisconsin and Louisiana, and a discontinued reintroduction programme in Florida still holds birds.',
    story:
      'Shooting and the conversion of prairie to farmland cut a historical population of more than 10,000 birds to only 16 in 1941: 14 adults and 2 juveniles. Strict legal protection, habitat preservation, captive breeding and cooperation between Canada and the United States rebuilt the Aransas-Wood Buffalo population, which has grown by about 4 percent a year over the long term. In the winter of 2024 to 2025 a survey by the U.S. Fish and Wildlife Service estimated 557 whooping cranes, a record and the first estimate above 550.',
    when: 'The whooping crane is still listed as endangered in both countries. As of January 2025 the reintroduced flocks held 149 cranes, down from 162 a year earlier. Wild-raised young join those flocks at a low rate, so their numbers depend on new releases, and adult deaths are higher there than in the Aransas-Wood Buffalo population. Wetland drainage, drought linked to climate change, and wind farms and power lines along the migration route remain threats.',
    humanRole:
      'Agencies in both countries and their partners count the birds, monitor nests, protect habitat and raise cranes in captivity for release into the reintroduced flocks. Counts on the Texas coast and in the breeding grounds in Canada show how the wild population changes from year to year.',
    sources: '',
    sourcesList: [
      cite('U.S. Fish and Wildlife Service: Whooping Crane (Grus americana)', craneSpecies),
      cite(
        'U.S. Fish and Wildlife Service: 2025 Wintering Whooping Crane Count (press release)',
        cranePress,
      ),
      cite(
        'U.S. Fish and Wildlife Service and Environment and Climate Change Canada: Whooping Crane Status, 2024 Breeding Season to 2025 Spring Migration (PDF, February 2026)',
        cranePdf,
      ),
    ],
  },
  'atlantic-puffin': {
    commonName: 'Atlantic puffin',
    tag: 'Seabird · North Atlantic',
    statusPill: 'Vulnerable',
    hook: 'A small seabird of the cold North Atlantic. Millions remain, but in Europe the population is estimated to have fallen by 68 percent in 50 years as seas warm and fish stocks change.',
    imageAlt:
      'An Atlantic puffin in profile, showing the orange, yellow and blue-grey bill and the white face.',
    caption:
      'An Atlantic puffin in profile, showing the orange, yellow and blue-grey bill and the white face.',
    photoCredit: 'Photo: Andreas Trepte, via Wikimedia Commons, licence',
    licenseLabel: 'Creative Commons Attribution-ShareAlike 2.5',
    licenseUrl: cc25,
    filePageLabel: 'File page',
    gridSource: cite('BirdLife International, Atlantic puffin', puffinNews),
    what: 'The Atlantic puffin (Fratercula arctica) is a seabird of the colder waters of the North Atlantic, with a wingspan of 47 to 63 cm. Its Latin name means "little brother of the north". It nests on grassy slopes of steep sea cliffs, in burrows dug in the ground or between rocks, and lays one egg. While feeding, a puffin can stay under water for up to one minute and dive as deep as 40 m. It can hold several small fish in its beak in one dive, and the average catch is about 10 fish per trip.',
    range:
      'Puffins breed mainly in Europe: on the coast of Brittany in France, in Ireland, the United Kingdom, Iceland, Greenland, Norway, the Faroe Islands and northern Russia. Iceland holds about 60 percent of the population. Away from the colonies they spend the months from August to early spring on the open ocean far from land, and some go as far south as the Mediterranean Sea. They hunt 100 km or more from the nesting site, and usually closer while feeding chicks.',
    story:
      'BirdLife International, a global partnership of bird conservation organisations, gives a global population of 7.4 to 8.24 million mature individuals and describes it as decreasing. In Europe the population is estimated to have fallen by 68 percent over the past 50 years. Its main threats are climate change, overfishing, marine pollution and oil spills, invasive predators, offshore energy construction, accidental catch in fishing gear and hunting for food. The guidance for the species describes climate change as the primary pressure, working on a population already stressed by overexploited prey stocks such as sand eels, sprats, herring and capelin.',
    when: 'The International Union for Conservation of Nature lists the Atlantic puffin as Vulnerable worldwide and as Endangered in Europe. The population is still decreasing.',
    humanRole:
      'The guidance, prepared for the Agreement on the Conservation of African-Eurasian Migratory Waterbirds, recommends managing fisheries so that enough prey is left for the birds, protecting prey habitat such as sandbanks and adding marine protected areas, including in international waters. It also recommends continuing to remove invasive predators from breeding colonies where feasible, and counting colonies and beached birds to follow how many adults survive.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: Atlantic Puffin Fratercula arctica factsheet',
        puffinSheet,
      ),
      cite(
        'BirdLife International: Seabird of the month, Atlantic Puffin (6 April 2022)',
        puffinNews,
      ),
      cite(
        'Agreement on the Conservation of African-Eurasian Migratory Waterbirds: Species Conservation Guidance for the Atlantic Puffin (PDF, May 2022)',
        puffinPdf,
      ),
    ],
  },
  'african-penguin': {
    commonName: 'African penguin',
    tag: 'Critically Endangered · southern Africa',
    statusPill: 'Critically Endangered',
    hook: 'A small penguin of the coasts of South Africa and Namibia. Fewer than 32,000 are left in the wild, and in November 2024 its status was raised to Critically Endangered.',
    imageAlt:
      'African penguins resting and walking on pale sand among granite boulders at Boulders Beach, Simon’s Town, South Africa.',
    caption:
      'African penguins resting and walking on pale sand among granite boulders at Boulders Beach, Simon’s Town, South Africa.',
    photoCredit: 'Photo: Krigore, via Wikimedia Commons, licence',
    licenseLabel: 'Creative Commons Attribution-ShareAlike 4.0',
    licenseUrl: cc40,
    filePageLabel: 'File page',
    gridSource: cite(
      'BirdLife International, African penguin on the brink of extinction',
      penguinNews,
    ),
    what: 'The African penguin (Spheniscus demersus) is a small, sociable penguin with tuxedo-like black and white plumage. It lives on the coasts of southern Africa and feeds mainly on sardines and anchovies.',
    range:
      'Once, millions of these birds lived along the coasts of South Africa and Namibia. Today the colonies are much smaller. Visitors see them in large groups at places such as Boulders Beach near Simon’s Town and Stony Point, but the main pressures on the birds are at sea, out of sight.',
    story:
      'About 97 percent of the population has been lost. Fewer than 32,000 birds remain in the wild, and the number of breeding pairs fell below 10,000 for the first time. The main cause is a shortage of food: commercial purse-seine fishing competes with the penguins for sardines and anchovies, and climate change is shifting where those fish are found. Young penguins search for food in increasingly unproductive areas, juvenile survival has plummeted, and adults have been reported abandoning their nests. Avian flu has also contributed, but the combined effects of fishing and climate change remain the most critical threats.',
    when: 'In November 2024 BirdLife International, the global partnership of bird conservation organisations, reported that the International Union for Conservation of Nature had moved the African penguin from Endangered to Critically Endangered. The partnership warns that without urgent action the species could vanish from the wild in fewer than 4,000 days.',
    humanRole:
      'BirdLife South Africa, the South African member of that partnership, and the Southern African Foundation for the Conservation of Coastal Birds have filed a court case against the South African minister responsible for fisheries and the environment. They want the current closures of waters around penguin islands to purse-seine fishing, which they call biologically meaningless, replaced by zones that cover the penguins’ main feeding grounds around six major colonies while keeping the effect on the fishing industry small.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: African Penguin Spheniscus demersus factsheet',
        penguinSheet,
      ),
      cite(
        'BirdLife International: African Penguin on the Brink of Extinction (20 November 2024)',
        penguinNews,
      ),
      cite(
        'BirdLife South Africa: African Penguin newly classified as Critically Endangered as breeding pairs fall below 10,000',
        penguinZa,
      ),
      cite(
        'Southern African Foundation for the Conservation of Coastal Birds: About us',
        sanccob,
      ),
    ],
  },
  'wandering-albatross': {
    commonName: 'Wandering albatross',
    tag: 'Vulnerable · Southern Ocean',
    statusPill: 'Vulnerable',
    hook: 'A giant seabird that nests on a few Southern Ocean islands and breeds only every second year. Numbers have fallen where longline fishing is linked to lower adult survival.',
    imageAlt:
      'A wandering albatross in flight low over deep blue water east of the Tasman Peninsula, Tasmania, Australia.',
    caption:
      'A wandering albatross in flight low over deep blue water east of the Tasman Peninsula, Tasmania, Australia.',
    photoCredit: 'Photo: JJ Harrison, via Wikimedia Commons, licence',
    licenseLabel: 'Creative Commons Attribution-ShareAlike 3.0',
    licenseUrl: cc30,
    filePageLabel: 'File page',
    gridSource: cite(
      'Agreement on the Conservation of Albatrosses and Petrels, wandering albatross assessment',
      albatrossPdf,
    ),
    what: 'The wandering albatross (Diomedea exulans), sometimes called the snowy albatross, is a very large seabird of the Southern Ocean. It breeds every second year, and a nesting cycle just exceeds one year. Eggs are laid over about five weeks in December and January and hatch mostly in March, after 78 to 79 days of incubation. On South Georgia most chicks fledge in December, after 278 days in the nest.',
    range:
      'Wandering albatrosses breed on the French Crozet Islands and Kerguelen Islands, on South Africa’s Prince Edward Islands (including Marion Island), on Australia’s Macquarie Island and on South Georgia. Data submitted in 2007 gave about 8,050 breeding pairs a year. The three island groups of the Indian Ocean, Prince Edward, Crozet and Kerguelen, hold about 82 percent of the world population, and the Prince Edward Islands alone about 3,580 pairs, or 44 percent. Macquarie Island has only 5 to 10 pairs a year. All breeding sites are legally protected and access to them is restricted.',
    story:
      'The figure of about 8,050 pairs is 5 percent below the 8,500 pairs of 1998, which were thought to represent about 28,000 mature individuals and a total population of 55,000. All populations have decreased at some stage over the last 25 years, and the South Georgia population has declined continuously. Adult survival on South Georgia is the lowest of all breeding sites, 92.6 percent, down from 94 percent between 1972 and 1985. The assessment links this fall to the growth of longline fisheries aimed at species other than tuna in the mid to late 1990s. The populations of Crozet, Kerguelen and the Prince Edward Islands have increased recently.',
    when: 'The International Union for Conservation of Nature has listed the wandering albatross as Vulnerable since 2000, and the species is on Annex 1 of the Agreement on the Conservation of Albatrosses and Petrels. That agreement’s species page still shows the status as Vulnerable. The population figures above are the most recent in the assessment, which rests on data submitted in 2007.',
    humanRole:
      'The assessment calls for confirming which areas of the ocean overlap with fisheries where effective measures against accidental catch and observer programmes are not yet in place. A three-year programme of satellite tracking of young and immature birds began in 2007 to show where they meet fishing fleets. Birds from the Prince Edward Islands and Crozet, for example, overlap with intense tuna longline fishing south of South Africa, where accidental catch rates are high.',
    sources: '',
    sourcesList: [
      cite(
        'Agreement on the Conservation of Albatrosses and Petrels: Wandering Albatross Diomedea exulans species assessment (PDF)',
        albatrossPdf,
      ),
      cite(
        'Agreement on the Conservation of Albatrosses and Petrels: species assessments',
        albatrossHub,
      ),
      cite(
        'BirdLife International DataZone: Snowy Albatross Diomedea exulans factsheet',
        albatrossSheet,
      ),
    ],
  },
};

export const birdsRu: Record<string, SpeciesCopy> = {
  'california-condor': {
    commonName: 'Калифорнийский кондор',
    tag: 'Восстановление · запад Северной Америки',
    statusPill: 'Восстановление',
    hook: 'Крупнейшая сухопутная птица Северной Америки. В 1982 году их осталось 23; разведение в неволе и выпуск помогли виду восстановиться, но в дикой природе кондоры по-прежнему гибнут от отравления свинцом.',
    imageAlt:
      'Калифорнийский кондор в полёте над национальным заповедником дикой природы Биттер-Крик в Калифорнии на фоне чистого голубого неба.',
    caption:
      'Калифорнийский кондор в полёте над национальным заповедником дикой природы Биттер-Крик в Калифорнии на фоне чистого голубого неба.',
    photoCredit:
      'Фото: Служба охраны рыбных ресурсов и диких животных США, Тихоокеанский юго-западный регион, через Викисклад, общественное достояние.',
    filePageLabel: 'Страница файла',
    gridSource: cite(
      'Служба охраны рыбных ресурсов и диких животных США, калифорнийский кондор',
      condorSpecies,
    ),
    what: 'Калифорнийский кондор (Gymnogyps californianus) является самой крупной сухопутной птицей Северной Америки. Размах его крыльев около 2,9 м (9,5 фута), взрослая птица ростом от 0,9 до 1,1 м (от 3 до 3,5 фута) весит от 8 до 11 кг (от 17 до 25 фунтов). Кондоры питаются падалью, например тушами оленей, коров, китов и тюленей, и находят её зрением или следуя за другими падальщиками.',
    range:
      'Свободно летающие кондоры живут в четырёх районах: в Аризоне и Юте, в Калифорнии, на Тихоокеанском северо-западе США и в мексиканской Нижней Калифорнии. Из 392 диких птиц на конец 2025 года 98 жили в Аризоне и Юте, 216 в Калифорнии, 25 на Тихоокеанском северо-западе и 53 в Нижней Калифорнии. Группа на Тихоокеанском северо-западе считается экспериментальной. Кондоры ночуют на крупных деревьях, сухостое, скальных выступах и утёсах, а гнездятся в пещерах и на уступах крутых скалистых склонов или в дуплах и сломанных вершинах старых хвойных деревьев. Кормятся они над открытыми лугами, предгорьями с дубовыми саваннами и пляжами рядом с прибрежными горами и могут пролетать до 400 км (250 миль) за день.',
    story:
      'В 1982 году во всём мире осталось только 23 кондора, а к 1987 году всех диких кондоров взяли в программу разведения в неволе. В 1967 году вид внесли в федеральный список видов, находящихся под угрозой исчезновения. С 1992 года Служба охраны рыбных ресурсов и диких животных США выпускает выращенных в неволе кондоров на волю. В 2004 году в дикой природе впервые успешно вылупился птенец, а в 2008 году на воле впервые летало больше кондоров, чем жило в неволе. Свинец из израсходованных боеприпасов остаётся главной причиной гибели птиц в дикой природе: с 1992 по 2025 год подтверждена гибель от отравления свинцом 161 свободно летающего кондора.',
    when: 'На 31 декабря 2025 года в мире насчитывалось 607 кондоров (годом раньше 570): 392 в дикой природе и 215 в неволе. План восстановления 1996 года ставит целью две дикие, географически разделённые, самоподдерживающиеся популяции, каждую не менее чем из 150 птиц и 15 гнездящихся пар, и ещё одну популяцию в неволе.',
    humanRole:
      'Программу восстановления калифорнийского кондора ведёт та же служба вместе с партнёрами: ведомствами штатов, правительством Мексики, племенем юрок, зоопарками и некоммерческими организациями. Они разводят птиц, выпускают их и наблюдают за ними в природе. Охотников и скотоводов просят использовать боеприпасы без свинца, потому что осколки свинца в тушах отравляют кондоров, которые их едят.',
    sources: '',
    sourcesList: [
      cite(
        'Служба охраны рыбных ресурсов и диких животных США: калифорнийский кондор, Gymnogyps californianus (U.S. Fish and Wildlife Service: California Condor)',
        condorSpecies,
      ),
      cite(
        'Служба охраны рыбных ресурсов и диких животных США: Программа восстановления калифорнийского кондора (U.S. Fish and Wildlife Service: California Condor Recovery Program)',
        condorProgram,
      ),
      cite(
        'Служба охраны рыбных ресурсов и диких животных США: ежегодный статус популяции Программы восстановления калифорнийского кондора за 2025 год, документ (U.S. Fish and Wildlife Service: California Condor Recovery Program 2025 Annual Population Status)',
        condorPdf,
      ),
    ],
  },
  'whooping-crane': {
    commonName: 'Американский журавль',
    tag: 'Восстановление · от Канады до Техаса',
    statusPill: 'Восстановление',
    hook: 'Самая высокая птица Северной Америки. В 1941 году их осталось 16; единственная дикая стая, которая сама себя поддерживает, сейчас оценивается в 557 птиц и по-прежнему летает между севером Канады и побережьем Техаса.',
    imageAlt:
      'Американский журавль в полёте над Техасом: белое тело, чёрные концы крыльев и красная макушка на фоне бледного неба.',
    caption:
      'Американский журавль в полёте над Техасом: белое тело, чёрные концы крыльев и красная макушка на фоне бледного неба.',
    photoCredit:
      'Фото: Джон Нолл, Министерство сельского хозяйства США, через Викисклад, общественное достояние.',
    filePageLabel: 'Страница файла',
    gridSource: cite(
      'Служба охраны рыбных ресурсов и диких животных США, зимний учёт американских журавлей 2025 года',
      cranePress,
    ),
    what: 'Американский журавль (Grus americana) является самой высокой птицей Северной Америки. Оперение почти целиком белоснежное, концы крыльев чёрные, макушка красная, а на щеках редкие чёрные перья. Взрослая птица ростом около 1,5 м (5 футов), размах её крыльев более 2,1 м (7 футов), а масса составляет от 6,0 до 7,8 кг (от 13,2 до 17,2 фунта). Название, вероятно, происходит от громкого однотонного крика, который птицы повторяют при тревоге.',
    range:
      'Единственная сохранившаяся дикая самоподдерживающаяся популяция, популяция Арансас и Вуд-Баффало, гнездится в национальном парке Вуд-Баффало и вокруг него в канадских провинциях Альберта и Северо-Западные территории. Каждый год она пролетает более 4000 км (2500 миль) через канадские прерии и Великие равнины США к средней части побережья Техаса, где зимует в национальном заповеднике дикой природы Арансас и рядом с ним. Интродуцированные стаи живут в Висконсине и Луизиане, а прекращённая программа во Флориде всё ещё удерживает там птиц.',
    story:
      'Отстрел и превращение прерий в пашню сократили историческую популяцию из более чем 10 000 птиц до всего 16 в 1941 году: 14 взрослых и 2 молодых. Строгая правовая защита, сохранение мест обитания, разведение в неволе и сотрудничество Канады и США восстановили популяцию Арансас и Вуд-Баффало, которая в долгосрочной перспективе растёт примерно на 4 процента в год. Зимой 2024 и 2025 годов учёт Службы охраны рыбных ресурсов и диких животных США оценил численность в 557 американских журавлей: это рекорд и первая оценка выше 550.',
    when: 'Американский журавль по-прежнему внесён в списки видов под угрозой исчезновения в обеих странах. В январе 2025 года в интродуцированных стаях было 149 журавлей, годом раньше 162. Молодые птицы, выросшие в природе, пополняют эти стаи медленно, поэтому их численность зависит от новых выпусков, а смертность взрослых птиц там выше, чем в популяции Арансас и Вуд-Баффало. Угрозами остаются осушение водно-болотных угодий, засухи, связанные с изменением климата, а также ветровые электростанции и линии электропередачи на пути миграции.',
    humanRole:
      'Ведомства обеих стран и их партнёры считают птиц, следят за гнёздами, охраняют места обитания и выращивают журавлей в неволе для выпуска в интродуцированные стаи. Учёты на побережье Техаса и в местах гнездования в Канаде показывают, как меняется дикая популяция из года в год.',
    sources: '',
    sourcesList: [
      cite(
        'Служба охраны рыбных ресурсов и диких животных США: американский журавль, Grus americana (U.S. Fish and Wildlife Service: Whooping Crane)',
        craneSpecies,
      ),
      cite(
        'Служба охраны рыбных ресурсов и диких животных США: зимний учёт американских журавлей 2025 года, пресс-релиз (U.S. Fish and Wildlife Service: 2025 Wintering Whooping Crane Count)',
        cranePress,
      ),
      cite(
        'Служба охраны рыбных ресурсов и диких животных США и Министерство окружающей среды и изменения климата Канады: состояние американского журавля, от гнездового сезона 2024 года до весенней миграции 2025 года, документ, февраль 2026 (U.S. Fish and Wildlife Service and Environment and Climate Change Canada: Whooping Crane Status, 2024 Breeding Season to 2025 Spring Migration)',
        cranePdf,
      ),
    ],
  },
  'atlantic-puffin': {
    commonName: 'Атлантический тупик',
    tag: 'Морская птица · Северная Атлантика',
    statusPill: 'Уязвимый',
    hook: 'Небольшая морская птица холодной Северной Атлантики. Миллионы птиц остаются, но в Европе численность, по оценкам, за 50 лет упала на 68 процентов из-за потепления морей и изменения запасов рыбы.',
    imageAlt: 'Атлантический тупик в профиль: оранжевый, жёлтый и сизо-серый клюв и белое лицо.',
    caption: 'Атлантический тупик в профиль: оранжевый, жёлтый и сизо-серый клюв и белое лицо.',
    photoCredit: 'Фото: Андреас Трепте, через Викисклад, лицензия',
    licenseLabel: 'Creative Commons «С указанием авторства, на тех же условиях» 2.5',
    licenseUrl: cc25,
    filePageLabel: 'Страница файла',
    gridSource: cite('BirdLife International, атлантический тупик', puffinNews),
    what: 'Атлантический тупик (Fratercula arctica) является морской птицей более холодных вод Северной Атлантики, размах его крыльев составляет от 47 до 63 см. Латинское название означает «маленький брат севера». Тупик гнездится на травянистых склонах крутых морских скал, в норах, вырытых в земле или между камнями, и откладывает одно яйцо. Во время охоты он может оставаться под водой до одной минуты и нырять на глубину до 40 м. За одно погружение он удерживает в клюве несколько мелких рыб, а средний улов за вылет составляет около 10 рыб.',
    range:
      'Тупики гнездятся в основном в Европе: на побережье Бретани во Франции, в Ирландии, Великобритании, Исландии, Гренландии, Норвегии, на Фарерских островах и на севере России. В Исландии держится около 60 процентов популяции. Вдали от колоний они проводят время с августа до начала весны в открытом океане, далеко от суши, а некоторые уходят на юг до Средиземного моря. Они охотятся в 100 км и более от места гнездования, а при выкармливании птенцов обычно ближе.',
    story:
      'Международное партнёрство организаций по охране птиц указывает мировую численность от 7,4 до 8,24 млн взрослых особей и называет её сокращающейся. В Европе численность, по оценкам, за последние 50 лет упала на 68 процентов. Главные угрозы: изменение климата, чрезмерный вылов рыбы, загрязнение морей и разливы нефти, инвазивные хищники, строительство морских энергетических объектов, случайный прилов в рыболовных снастях и охота ради пищи. В руководстве по сохранению вида изменение климата названо главным давлением на популяцию, которая и без того ослаблена чрезмерной добычей кормовых рыб: песчанок, шпрота, сельди и мойвы.',
    when: 'Международный союз охраны природы относит атлантического тупика к уязвимым видам в мире и к видам под угрозой исчезновения в Европе. Численность продолжает сокращаться.',
    humanRole:
      'Руководство, подготовленное для Соглашения по сохранению афро-евразийских мигрирующих водно-болотных птиц, рекомендует вести рыболовство так, чтобы птицам оставалось достаточно корма, охранять места обитания кормовых рыб, например песчаные банки, и создавать новые морские охраняемые районы, в том числе в международных водах. Оно также рекомендует и дальше удалять инвазивных хищников из гнездовых колоний там, где это возможно, и считать колонии и погибших птиц на берегу, чтобы следить за выживаемостью взрослых.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: видовая карточка атлантического тупика, Fratercula arctica (BirdLife International DataZone: Atlantic Puffin Fratercula arctica factsheet)',
        puffinSheet,
      ),
      cite(
        'BirdLife International: морская птица месяца, атлантический тупик, 6 апреля 2022 года (BirdLife International: Seabird of the month, Atlantic Puffin)',
        puffinNews,
      ),
      cite(
        'Соглашение по сохранению афро-евразийских мигрирующих водно-болотных птиц: руководство по сохранению атлантического тупика, документ, май 2022 года (Agreement on the Conservation of African-Eurasian Migratory Waterbirds: Species Conservation Guidance for the Atlantic Puffin)',
        puffinPdf,
      ),
    ],
  },
  'african-penguin': {
    commonName: 'Африканский пингвин',
    tag: 'Под угрозой исчезновения · юг Африки',
    statusPill: 'На грани исчезновения',
    hook: 'Небольшой пингвин побережий Южной Африки и Намибии. В дикой природе осталось менее 32 000 птиц, а в ноябре 2024 года его статус повысили до «находящегося на грани исчезновения».',
    imageAlt:
      'Африканские пингвины отдыхают и ходят по светлому песку среди гранитных валунов на пляже Боулдерс в Саймонс-Тауне, ЮАР.',
    caption:
      'Африканские пингвины отдыхают и ходят по светлому песку среди гранитных валунов на пляже Боулдерс в Саймонс-Тауне, ЮАР.',
    photoCredit: 'Фото: Krigore, через Викисклад, лицензия',
    licenseLabel: 'Creative Commons «С указанием авторства, на тех же условиях» 4.0',
    licenseUrl: cc40,
    filePageLabel: 'Страница файла',
    gridSource: cite(
      'BirdLife International, африканский пингвин на грани исчезновения',
      penguinNews,
    ),
    what: 'Африканский пингвин (Spheniscus demersus) является небольшим общительным пингвином с чёрно-белым оперением, похожим на фрак. Он живёт на побережьях юга Африки и питается главным образом сардинами и анчоусами.',
    range:
      'Когда-то эти птицы жили миллионами вдоль берегов Южной Африки и Намибии. Сегодня колонии намного меньше. Посетители видят пингвинов большими группами в таких местах, как пляж Боулдерс близ Саймонс-Тауна и Стоуни-Пойнт, но главные угрозы для птиц находятся в море, вне поля зрения.',
    story:
      'Утрачено около 97 процентов популяции. В дикой природе осталось менее 32 000 птиц, а число гнездящихся пар впервые упало ниже 10 000. Главная причина в нехватке корма: промышленный кошельковый лов конкурирует с пингвинами за сардин и анчоусов, а изменение климата сдвигает места, где эта рыба держится. Молодые пингвины ищут пищу во всё менее продуктивных районах, выживаемость молодняка резко упала, а взрослые, по сообщениям, бросают гнёзда. Свой вклад внёс и птичий грипп, но главными угрозами остаются совместное действие рыболовства и изменения климата.',
    when: 'В ноябре 2024 года международное партнёрство организаций по охране птиц сообщило, что Международный союз охраны природы перевёл африканского пингвина из категории «под угрозой исчезновения» в категорию «на грани исчезновения». Партнёрство предупреждает, что без срочных мер вид может исчезнуть из дикой природы менее чем за 4000 дней.',
    humanRole:
      'Южноафриканский член этого партнёрства и Южноафриканский фонд охраны прибрежных птиц подали в суд на министра ЮАР, отвечающего за рыболовство и окружающую среду. Они добиваются, чтобы нынешние закрытия вод вокруг островов с пингвинами для кошелькового лова, которые они называют биологически бессмысленными, заменили зонами, охватывающими главные места кормления пингвинов у шести крупных колоний, при этом лишь слегка затрагивающими рыбную отрасль.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: видовая карточка африканского пингвина, Spheniscus demersus (BirdLife International DataZone: African Penguin Spheniscus demersus factsheet)',
        penguinSheet,
      ),
      cite(
        'BirdLife International: африканский пингвин на грани исчезновения, 20 ноября 2024 года (BirdLife International: African Penguin on the Brink of Extinction)',
        penguinNews,
      ),
      cite(
        'BirdLife South Africa: африканский пингвин отнесён к видам на грани исчезновения, число гнездящихся пар упало ниже 10 000 (BirdLife South Africa: African Penguin newly classified as Critically Endangered as breeding pairs fall below 10,000)',
        penguinZa,
      ),
      cite(
        'Южноафриканский фонд охраны прибрежных птиц: о нас (Southern African Foundation for the Conservation of Coastal Birds: About us)',
        sanccob,
      ),
    ],
  },
  'wandering-albatross': {
    commonName: 'Странствующий альбатрос',
    tag: 'Уязвимый вид · Южный океан',
    statusPill: 'Уязвимый',
    hook: 'Огромная морская птица, гнездящаяся на нескольких островах Южного океана и размножающаяся лишь раз в два года. Численность сократилась там, где ярусный лов связан со снижением выживаемости взрослых птиц.',
    imageAlt:
      'Странствующий альбатрос в полёте низко над тёмно-синей водой к востоку от полуострова Тасман, Тасмания, Австралия.',
    caption:
      'Странствующий альбатрос в полёте низко над тёмно-синей водой к востоку от полуострова Тасман, Тасмания, Австралия.',
    photoCredit: 'Фото: JJ Harrison, через Викисклад, лицензия',
    licenseLabel: 'Creative Commons «С указанием авторства, на тех же условиях» 3.0',
    licenseUrl: cc30,
    filePageLabel: 'Страница файла',
    gridSource: cite(
      'Соглашение о сохранении альбатросов и буревестников, оценка странствующего альбатроса',
      albatrossPdf,
    ),
    what: 'Странствующий альбатрос (Diomedea exulans), которого иногда называют снежным альбатросом, является очень крупной морской птицей Южного океана. Он размножается раз в два года, а гнездовой цикл немного превышает один год. Яйца откладываются в течение примерно пяти недель в декабре и январе и вылупляются в основном в марте, после 78 и 79 дней насиживания. На Южной Георгии большинство птенцов оперяются в декабре, пробыв в гнезде 278 дней.',
    range:
      'Странствующие альбатросы гнездятся на французских островах Крозе и Кергелен, на принадлежащих Южной Африке островах Принс-Эдуард (включая остров Марион), на австралийском острове Маккуори и на Южной Георгии. По данным, представленным в 2007 году, это около 8050 гнездящихся пар в год. Три островные группы Индийского океана, Принс-Эдуард, Крозе и Кергелен, дают около 82 процентов мировой популяции, а одни острова Принс-Эдуард около 3580 пар, или 44 процента. На острове Маккуори только от 5 до 10 пар в год. Все места гнездования охраняются законом, а доступ к ним ограничен.',
    story:
      'Около 8050 пар на 5 процентов меньше, чем 8500 пар в 1998 году, которые, как считалось, соответствовали примерно 28 000 взрослых особей и общей численности 55 000. Все популяции в какой-то момент за последние 25 лет сокращались, а популяция Южной Георгии сокращается непрерывно. Выживаемость взрослых птиц на Южной Георгии самая низкая из всех мест гнездования, 92,6 процента, против 94 процентов с 1972 по 1985 год. Оценка связывает это падение с ростом ярусного промысла, нацеленного на другие виды рыбы, кроме тунца, в середине и конце 1990-х годов. Популяции Крозе, Кергелена и островов Принс-Эдуард в последнее время выросли.',
    when: 'Международный союз охраны природы относит странствующего альбатроса к уязвимым видам с 2000 года, а вид входит в приложение 1 Соглашения о сохранении альбатросов и буревестников. На странице видов этого соглашения статус по-прежнему указан как уязвимый. Приведённые выше данные о численности являются самыми свежими в оценке, которая опирается на данные, представленные в 2007 году.',
    humanRole:
      'Оценка призывает уточнить, какие районы океана пересекаются с промыслом там, где пока нет действенных мер против случайного прилова и программ наблюдателей. Трёхлетняя программа спутникового слежения за молодыми и неполовозрелыми птицами началась в 2007 году, чтобы показать, где они встречаются с рыболовными флотами. Птицы с островов Принс-Эдуард и Крозе, например, пересекаются с интенсивным ярусным ловом тунца к югу от Южной Африки, где уровень случайного прилова высок.',
    sources: '',
    sourcesList: [
      cite(
        'Соглашение о сохранении альбатросов и буревестников: оценка вида «странствующий альбатрос», Diomedea exulans, документ (Agreement on the Conservation of Albatrosses and Petrels: Wandering Albatross Diomedea exulans species assessment)',
        albatrossPdf,
      ),
      cite(
        'Соглашение о сохранении альбатросов и буревестников: оценки видов (Agreement on the Conservation of Albatrosses and Petrels: ACAP species assessments)',
        albatrossHub,
      ),
      cite(
        'BirdLife International DataZone: видовая карточка снежного альбатроса, Diomedea exulans (BirdLife International DataZone: Snowy Albatross Diomedea exulans factsheet)',
        albatrossSheet,
      ),
    ],
  },
};
