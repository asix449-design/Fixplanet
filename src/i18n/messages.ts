import type { Locale } from './config';
import type { TagKey } from '../data/solutions';

/**
 * All user-facing UI strings.
 *
 * To add a future string:
 * 1. Add the key to `en` below (this object is the source of truth).
 * 2. Add the same key to `ru`, `pl`, and `lv`.
 * 3. Read it with `getUi(locale).…` in the page or component.
 *
 * New pages: add `src/pages/your-page.astro` (English URL) and a thin
 * `src/pages/[locale]/your-page.astro` wrapper that reuses the same view.
 * The language switcher follows the current path automatically.
 */
const en = {
  skip: 'Skip to content',
  menu: 'Menu',
  primaryNav: 'Primary',
  homeAria: 'Fix Planet home',
  language: 'Language',
  location: 'England, UK',
  basedIn: 'Based in {location}',
  meta: {
    defaultTitle: 'Fix Planet — Problems. Fixes. Proof.',
    defaultDescription:
      'An atlas of Earth systems and of technologies that can still repair them — forests, oceans, wildlife, law, and sourced maps.',
  },
  nav: {
    solutions: 'Solutions',
    innovations: 'Innovations',
    terraforming: 'Terraforming',
    maps: 'Maps',
    law: 'Law',
    wildlife: 'Wildlife',
    migration: 'Migration',
    forests: 'Forests',
    oceans: 'Oceans',
    book: 'Book',
    about: 'About',
    donate: 'Donate',
  },
  home: {
    heroAria: 'Site sections',
    choosePath: 'Choose a direction',
    tagline: 'Analysis. Action. Result.',
    globeLabel: 'Interactive Earth — drag to rotate',
    heroAlt: 'Solarpunk green city of vertical forests in a mountain valley, with a river, launch beam, and a large planet in the sky',
    latest: 'Latest solutions',
    latestHeading: 'Problem–fix cards already in use.',
    viewAll: 'View all solutions →',
    featuresAria: 'What Fix Planet covers',
    tiles: {
      solutions: 'Technologies already in use: water, forests, waste, cities, materials, oceans, energy.',
      innovations: 'Laboratories and pilots — carbon, energy, AI — and why perpetual motion fails.',
      terraforming: 'Landscape megaprojects, and a separate shelf of climate interventions.',
      maps: 'Public maps of Earth systems and the political world.',
      law: 'Statutes, bills, and labeled ideas — ecology, AI, animals.',
      wildlife: 'Species, habitats, and how they changed after people spread.',
      migration: 'Human dispersal, historic mass movements, bird flyways, and mammal migrations — with the drivers on each card.',
      forests: 'What a forest is, how the canopy is mapped, and sourced numbers.',
      oceans: 'Currents, salinity, temperature, and pollution — sourced maps of the living ocean.',
      book: 'New World — what is broken, and what we can still fix.',
      about: 'The project and the curator behind Fix Planet.',
    },
  },
  features: {
    solutions: {
      title: 'Solutions that work',
      text: 'Technologies already in use, paired with a planetary problem.',
    },
    innovations: {
      title: 'Labs, with limits',
      text: 'Carbon, energy, and AI — plus the myths that do not belong.',
    },
    maps: {
      title: 'A sourced atlas',
      text: 'Conflict, Earth systems, and the political world, each with a named map.',
    },
    law: {
      title: 'Law, labeled',
      text: 'Texts in force, bills under consideration, and ideas that are not law yet.',
    },
    wildlife: {
      title: 'Wildlife',
      text: 'Species and habitats, and how they changed after people spread.',
    },
  },
  solutionsPage: {
    metaTitle: 'Solutions — Fix Planet',
    metaDescription:
      'Each card pairs a planetary problem with a technology already in use: water, forests, waste, cities, materials, oceans, energy.',
    eyebrow: 'Problem → Fix',
    title: 'Solutions',
    lead: 'Each card pairs a planetary problem with a technology already in use. Filter by topic, then follow the sources.',
    filterAria: 'Filter solutions by topic',
    chooseTopic: 'Choose a topic',
    all: 'All',
    allKey: 'all',
    problem: 'Problem',
    fix: 'Fix',
    explore: 'Explore solution →',
    primarySource: 'Source',
    back: '← Solutions',
    tags: {
      water: 'Water',
      forests: 'Forests',
      waste: 'Waste',
      cities: 'Cities',
      materials: 'Materials',
      oceans: 'Oceans',
      energy: 'Energy',
    } satisfies Record<TagKey, string>,
    tileLeads: {
      all: 'Every problem–fix card on one shelf.',
      water: 'Harvesting, reuse, desalination, recharge, and living filters already in use.',
      forests: 'Regeneration, agroforestry, careful logging, and fire-smart practice that keep forests working.',
      waste: 'Sorting, recycling, organics, and energy recovery already running at municipal scale.',
      cities: 'Cooler roofs, permeable streets, trees, and shared heat networks.',
      materials: 'Lower-carbon cement, mass timber, and cleaner steel paths.',
      oceans: 'Catching plastic, restoring shores, and fishing with less bycatch.',
      energy: 'Wind, solar, and heat pumps that already run on real grids.',
    } satisfies Record<TagKey | 'all', string>,
  },
  wildlifePage: {
    metaTitle: 'Wildlife — Fix Planet',
    metaDescription:
      'An encyclopedia of how animal populations changed after modern humans spread: surviving, endangered, and extinct species, plus a Homo sapiens shelf on origin, migration, and the large-mammal genera that vanished after first arrival.',
    eyebrow: 'Encyclopedia',
    title: 'Wildlife',
    lead: 'Where our species arose, where we went, and how the largest animals changed after we arrived as a new predator.',
    heroEyebrow: 'Our species',
    appearedLabel: 'Appeared',
    appeared:
      'About 300,000 years ago in Africa. Fossils from Jebel Irhoud, Morocco, date to around 315,000 years; genetic and fossil work places the origin of Homo sapiens on that continent at about 300,000 years. Africa later lost a relatively small share of its large-mammal genera (about 18–21 percent in the usual compilations), the usual reading being that many of those animals had already lived alongside hominins.',
    populationLabel: 'Population today',
    population:
      'About 8.2 billion people in 2025 (United Nations, World Population Prospects 2024, medium variant). The same revision put the mid-2024 world total at 8.2 billion. It is an official estimate, not a census of every person.',
    framing:
      'Where people arrived as a new predator, most of the largest animals disappeared within a few thousand years. The wave is not one date — it follows us: Australia about 50,000–40,000 years ago, the Americas about 15,000–10,000, islands in the last few thousand, and it has not stopped. On continents entered for the first time, about 70–90 percent of large-animal genera vanished (animals typically 44 kg and up). That is not 90 percent of all animals on Earth. About 20,000–15,000 years is when people reached the Americas — not when our species began, and not when people reached Australia.',
    imageAlt:
      'A modern adult human standing in a meadow, a respectful naturalistic figure representing Homo sapiens — not a portrait of a named person',
    scientificName: 'Homo sapiens',
    tabsAria: 'Wildlife shelves',
    chooseStatus: 'Choose a shelf',
    surviving: 'Surviving',
    endangered: 'Endangered',
    extinct: 'Extinct',
    'homo-sapiens': 'Homo sapiens',
    journeyCta: 'Migration · Humans →',
    journeyNote:
      'The journey — routes, dates, and drivers — is told under Migration. This shelf keeps the species frame: origin, numbers, and what vanished after first arrival.',
    tiles: {
      surviving: 'Still here, with ranges or numbers that shifted after people spread.',
      endangered: 'Threatened now, mainly because of people.',
      extinct: 'Gone. Most entries are clearly human-caused.',
      'homo-sapiens':
        'Origin in Africa, numbers today, and the large-mammal genera that vanished after first arrival. The route itself is under Migration.',
    },
    survivingLead:
      'Still here, with ranges or numbers that shifted after people spread — hunting, farms, later recovery, or boom. The dates differ by continent.',
    endangeredLead:
      'Threatened now, mainly because of people: habitat loss, hunting, bycatch, and a climate we have changed.',
    extinctLead:
      'Gone. Most entries are clearly human-caused. A few Late Pleistocene megafauna include climate as a second, honestly stated cause.',
    mapTitle: 'Where we went, and when',
    mapAria: 'World map of Homo sapiens dispersal with dated arrival steps',
    mapLead:
      'Large-animal loss follows this path. Percentages below are genera of large mammals, not of all animal species.',
    mapAfrica: 'Africa · origin ~300,000 years ago',
    mapOut: 'Out of Africa · ~70,000–50,000',
    mapAustralia: 'Australia / Sahul · ~65,000–50,000',
    mapEurasia: 'Eurasia · ~45,000–40,000',
    mapAmericas: 'Americas · ~20,000–15,000',
    mapIslands: 'Later islands · last few thousand years (New Zealand ~700)',
    mapLegend: 'Numbered arrival steps',
    mapPinAfrica: '~300,000 years',
    mapPinOut: '~70–50 thousand',
    mapPinAustralia: '~65–50 thousand',
    mapPinEurasia: '~45–40 thousand',
    mapPinAmericas: '~20–15 thousand',
    mapPinIslands: 'islands · NZ ~700 years',
    mapLossAfrica: '~18–21% of large-mammal genera lost',
    mapLossAustralia: '~88%',
    mapLossEurasia: '~35%',
    mapLossNorth: '~72%',
    mapLossSouth: '~83%',
    mapSources:
      'Arrival ranges, not exact years. Africa’s lower loss is the usual reading: animals there co-evolved with hominins. Continent percentages after Barnosky 2008 (and summaries such as Our World in Data; see also Andermann et al. 2020); Australia’s early site Madjedbebe, Clarkson et al. 2017. Human arrival fits the Late Quaternary pattern better than climate alone (Sandom et al. 2014); some species, including woolly mammoth, still need both.',
    mapBaseCredit:
      'Base land: NASA Blue Marble Next Generation (December 2004, public domain) — cloud-free physical Earth, not a political map.',
    cardCta: 'Read entry →',
    back: '← Wildlife',
    what: 'What it is',
    range: 'Range',
    story: 'What happened',
    when: 'When / status',
    humanRole: 'Human role',
    iucnLabel: 'IUCN',
    sourcesLabel: 'Sources',
    imageCredit: 'Image',
    functionallyExtinct: 'Functionally extinct',
    iucn: {
      EX: 'Extinct',
      EW: 'Extinct in the Wild',
      CR: 'Critically Endangered',
      CR_PE: 'Critically Endangered (Possibly Extinct)',
      EN: 'Endangered',
      VU: 'Vulnerable',
      NT: 'Near Threatened',
      LC: 'Least Concern',
    },
    status: {
      surviving: 'Surviving',
      endangered: 'Endangered',
      extinct: 'Extinct',
    },
  },
  about: {
    metaTitle: 'About — Fix Planet',
    metaDescription:
      'Fix Planet is curated by Aigars Abramovics: practical ways to heal water, forests, energy, waste, wildlife, and the rules that protect them.',
    eyebrow: 'The project',
    title: 'About Fix Planet',
    lead: 'A curated atlas of Earth systems and of what can still be repaired: water, forests, energy, waste, wildlife, and the rules that protect them.',
    p1: 'Fix Planet collects how those systems work and which technologies, laws, and habits already change them. Each card points to a named source.',
    p2Before: 'We pair each problem with a technology or approach that already works — then point to proof. The project is curated by ',
    p2After: ', an investor and writer focused on green technology and a livable future.',
    p3Before: 'The longer argument lives in the ',
    p3Book: 'Book',
    p3Mid: '. Day-to-day ideas also appear on X as ',
    p3After: '.',
    curator: 'Curator',
    curatorBlurb: 'Investor and writer focused on green technology and a livable future.',
    follow: 'Follow {handle} →',
    readBook: 'Read New World →',
    supportCta: 'Support Fix Planet →',
    supportNote:
      'Opens a Stripe checkout in a new tab. Support for the atlas — not a tax-deductible charity donation.',
  },
  book: {
    metaTitle: 'New World — Fix Planet',
    metaDescription:
      'New World by Aigars Abramovics: a clear look at what’s broken on our planet — and what we can still fix.',
    eyebrow: 'The book',
    title: 'New World',
    by: 'By Aigars Abramovics',
    coverAlt:
      'Front cover of New World: Earth in flames under the title NEW WORLD and the H.G. Wells quote Our true nationality is mankind',
    lead: 'A clear look at what’s broken on our planet — and what we can still fix: technologies, laws, and the choices that scale.',
    status: 'Status: Available',
    inside: 'Inside',
    bullets: [
      'Pressures on water, forests, climate, and wildlife',
      'Technologies already in use, not slogans',
      'Ideas for rules and habits that protect nature',
    ],
    buy: 'Buy on Amazon →',
  },
  stubs: {
    maps: {
      title: 'Maps',
      metaTitle: 'Maps — Fix Planet',
      metaDescription: 'Maps of solutions and projects around the world — coming soon.',
      summary:
        'A map of solutions and projects will appear here. Nothing has been published in this section yet.',
    },
    law: {
      title: 'Law',
      metaTitle: 'Law — Fix Planet',
      metaDescription: 'Legal frameworks to protect people and planet — coming soon.',
      summary:
        'Legal frameworks that protect people and planet will be collected here. This section is not published yet.',
    },
  },
  comingSoon: {
    badge: 'Coming soon',
    beforeLinks: 'This section is not live yet. Explore ',
    betweenLinks: ' or ',
    afterLinks: ' in the meantime.',
    solutionsLink: 'solutions',
    aboutLink: 'about Fix Planet',
  },
  donate: {
    metaTitle: 'Support Fix Planet',
    metaDescription:
      'Support Fix Planet through Stripe. This is support for the atlas, not a tax-deductible charity donation.',
    title: 'Support Fix Planet',
    lead: 'Fix Planet is a living atlas. Support keeps the encyclopedia public and independent.',
    useHeading: 'Where support goes',
    use: 'Research time, hosting, openly licensed maps, translations, and keeping the encyclopedia free to read.',
    statusHeading: 'How to support',
    status:
      'The button opens a Stripe checkout in a new tab. This is support for Fix Planet, not a tax-deductible charitable donation.',
    cta: 'Support Fix Planet',
    thanks: 'Thank you. Sharing the atlas and the book also helps.',
  },
  footer: {
    blurb:
      'An atlas of the living planet, and of technologies and rules that can still repair it.',
    explore: 'Explore',
    theBook: 'The book',
    comingSoon: 'Coming soon',
  },
  notFound: {
    metaTitle: 'Page not found — Fix Planet',
    metaDescription: 'That page does not exist on Fix Planet.',
    title: 'This page is missing',
    beforeLinks: 'The link may be out of date. Try the ',
    betweenLinks: ' or ',
    afterLinks: '.',
    homeLink: 'homepage',
    solutionsLink: 'solutions',
  },
};

const ru: typeof en = {
  skip: 'Перейти к содержанию',
  menu: 'Меню',
  primaryNav: 'Основная навигация',
  homeAria: 'На главную Fix Planet',
  language: 'Язык',
  location: 'Англия, Великобритания',
  basedIn: 'База: {location}',
  meta: {
    defaultTitle: 'Fix Planet — Проблемы. Решения. Доказательства.',
    defaultDescription:
      'Атлас систем Земли и технологий, которые ещё могут их чинить, — леса, океаны, дикая природа, право и карты с источниками.',
  },
  nav: {
    solutions: 'Решения',
    innovations: 'Инновации',
    terraforming: 'Терраформинг',
    maps: 'Карты',
    law: 'Право',
    wildlife: 'Природа',
    migration: 'Миграция',
    forests: 'Леса',
    oceans: 'Океаны',
    book: 'Книга',
    about: 'О проекте',
    donate: 'Поддержать',
  },
  home: {
    heroAria: 'Разделы сайта',
    choosePath: 'Выберите направление',
    tagline: 'Анализ. Действия. Результат.',
    globeLabel: 'Интерактивная Земля — перетащите, чтобы вращать',
    heroAlt: 'Соларпанк-город вертикальных лесов в горной долине: река, луч старта и большая планета в небе',
    latest: 'Новые решения',
    latestHeading: 'Карточки «проблема — решение», уже в работе.',
    viewAll: 'Все решения →',
    featuresAria: 'О чём Fix Planet',
    tiles: {
      solutions: 'Технологии, которые уже используют: вода, леса, отходы, города, материалы, океаны, энергия.',
      innovations: 'Лаборатории и пилоты — углерод, энергия, ИИ — и почему вечный двигатель не работает.',
      terraforming: 'Ландшафтные мегапроекты и отдельная полка климатических вмешательств.',
      maps: 'Открытые карты систем Земли и политического мира.',
      law: 'Законы, законопроекты и помеченные идеи — экология, ИИ, животные.',
      wildlife: 'Виды, места обитания и то, как они изменились после расселения людей.',
      migration: 'Расселение человека, исторические массовые движения, пролётные пути птиц и миграции млекопитающих — с факторами на каждой карточке.',
      forests: 'Что такое лес, как видят крону спутники, цифры с источниками.',
      oceans: 'Течения, солёность, температура и загрязнение — карты живого океана с источниками.',
      book: 'New World — что сломано и что мы ещё можем исправить.',
      about: 'Проект и куратор Fix Planet.',
    },
  },
  features: {
    solutions: {
      title: 'Решения, которые работают',
      text: 'Технологии, которые уже используют, рядом с планетарной проблемой.',
    },
    innovations: {
      title: 'Лаборатории, с пределами',
      text: 'Углерод, энергия и ИИ — и мифы, которым там не место.',
    },
    maps: {
      title: 'Атлас с источниками',
      text: 'Конфликты, системы Земли и политический мир — у каждой карты названный источник.',
    },
    law: {
      title: 'Право, с пометками',
      text: 'Действующие тексты, рассматриваемые проекты и идеи, которые ещё не закон.',
    },
    wildlife: {
      title: 'Дикая природа',
      text: 'Виды и места обитания и то, как они изменились после расселения людей.',
    },
  },
  solutionsPage: {
    metaTitle: 'Решения — Fix Planet',
    metaDescription:
      'Карточки «проблема → технология»: вода, леса, отходы, города, материалы, океаны и энергия.',
    eyebrow: 'Проблема → Решение',
    title: 'Решения',
    lead: 'На каждой карточке — планетарная проблема и технология, которую уже используют. Отфильтруйте по теме и перейдите к источникам.',
    filterAria: 'Фильтр решений по теме',
    chooseTopic: 'Выберите тему',
    all: 'Все',
    allKey: 'all',
    problem: 'Проблема',
    fix: 'Решение',
    explore: 'Подробнее →',
    primarySource: 'Источник',
    back: '← Решения',
    tags: {
      water: 'Вода',
      forests: 'Леса',
      waste: 'Отходы',
      cities: 'Города',
      materials: 'Материалы',
      oceans: 'Океаны',
      energy: 'Энергия',
    },
    tileLeads: {
      all: 'Все карточки «проблема → решение» на одной полке.',
      water: 'Сбор, оборотное использование, опреснение, подпитка горизонтов и живые фильтры.',
      forests: 'Восстановление, агролесоводство, аккуратная рубка и огнестойкое хозяйство.',
      waste: 'Сортировка, переработка, органика и энергия из остаточных отходов.',
      cities: 'Холодные крыши, проницаемые улицы, деревья и общие теплосети.',
      materials: 'Цемент с меньшим углеродом, массивная древесина и более чистая сталь.',
      oceans: 'Перехват пластика, восстановление берегов и лов с меньшим приловом.',
      energy: 'Ветер, солнце и тепловые насосы, которые уже работают в реальных сетях.',
    },
  },
  wildlifePage: {
    metaTitle: 'Природа — Fix Planet',
    metaDescription:
      'Энциклопедия того, как изменились популяции животных после расселения современного человека: выжившие, находящиеся под угрозой и вымершие виды, плюс полка Homo sapiens — происхождение, расселение и роды крупных млекопитающих, исчезнувшие после первого прихода.',
    eyebrow: 'Энциклопедия',
    title: 'Природа',
    lead: 'Где возник наш вид, куда мы ушли и как изменились самые крупные животные после того, как мы пришли как новый хищник.',
    heroEyebrow: 'Наш вид',
    appearedLabel: 'Появился',
    appeared:
      'Около 300 000 лет назад в Африке. Находки из Джебель-Ирхуда в Марокко датируют примерно 315 000 лет; генетика и палеонтология помещают происхождение Homo sapiens на этот континент около 300 000 лет. Позже Африка потеряла сравнительно малую долю родов крупных млекопитающих (обычно приводят около 18–21 процента): многие из этих животных уже жили рядом с гомининами.',
    populationLabel: 'Численность сегодня',
    population:
      'Около 8,2 миллиарда человек в 2025 году (ООН, World Population Prospects 2024, средний вариант). Та же ревизия давала 8,2 миллиарда на середину 2024-го. Это официальная оценка, а не перепись каждого человека.',
    framing:
      'Там, где люди пришли как новый хищник, большая часть самых крупных животных исчезла за несколько тысяч лет. Волна — не одна дата: она идёт за нами. Австралия около 50–40 тысяч лет назад, Америка около 15–10 тысяч, острова за последние несколько тысяч — и она не остановилась. На континентах, куда люди вошли впервые, исчезло около 70–90 процентов родов крупных животных (обычно от 44 кг). Это не 90 процентов всех животных Земли. Около 20 000–15 000 лет — когда люди дошли до Америки, а не когда возник наш вид и не когда люди дошли до Австралии.',
    imageAlt:
      'Современный взрослый человек на лугу — спокойная натуралистичная фигура Homo sapiens, не портрет конкретного человека',
    scientificName: 'Homo sapiens',
    tabsAria: 'Разделы Природы',
    chooseStatus: 'Выберите раздел',
    surviving: 'Выжившие',
    endangered: 'Под угрозой',
    extinct: 'Вымершие',
    'homo-sapiens': 'Homo sapiens',
    journeyCta: 'Миграция · Люди →',
    journeyNote:
      'Путь — маршруты, даты и причины — рассказан в разделе «Миграция». Эта полка остаётся рамкой вида: происхождение, численность и то, что исчезло после первого прихода.',
    tiles: {
      surviving: 'Всё ещё здесь: ареал или численность сдвинулись после расселения людей.',
      endangered: 'Под угрозой сейчас — главным образом из-за людей.',
      extinct: 'Исчезли. Большинство карточек — явно по вине людей.',
      'homo-sapiens':
        'Происхождение в Африке, численность сегодня и роды крупных млекопитающих, исчезнувшие после первого прихода. Сам путь — в разделе «Миграция».',
    },
    survivingLead:
      'Всё ещё здесь, с ареалом или численностью, которые сдвинулись после расселения людей — охота, пашня, позднее восстановление или вспышка. Даты на континентах разные.',
    endangeredLead:
      'Под угрозой сейчас, главным образом из-за людей: потеря мест, охота, прилов и климат, который мы изменили.',
    extinctLead:
      'Исчезли. Большинство карточек — явно по вине людей. У нескольких представителей мегафауны позднего плейстоцена климат назван вторым, честно оговорённым фактором.',
    mapTitle: 'Куда мы ушли и когда',
    mapAria: 'Карта расселения Homo sapiens с датированными шагами',
    mapLead:
      'Исчезновение крупных животных идёт по этому пути. Доли ниже — роды крупных млекопитающих, а не все виды животных.',
    mapAfrica: 'Африка · происхождение ~300 000 лет назад',
    mapOut: 'Из Африки · ~70 000–50 000',
    mapAustralia: 'Австралия / Сахул · ~65 000–50 000',
    mapEurasia: 'Евразия · ~45 000–40 000',
    mapAmericas: 'Америка · ~20 000–15 000',
    mapIslands: 'Позднее острова · последние несколько тысяч лет (Новая Зеландия ~700)',
    mapLegend: 'Нумерованные шаги расселения',
    mapPinAfrica: '~300 000 лет',
    mapPinOut: '~70–50 тысяч',
    mapPinAustralia: '~65–50 тысяч',
    mapPinEurasia: '~45–40 тысяч',
    mapPinAmericas: '~20–15 тысяч',
    mapPinIslands: 'острова · Н. Зеландия ~700 лет',
    mapLossAfrica: 'потеряно ~18–21% родов крупных млекопитающих',
    mapLossAustralia: '~88%',
    mapLossEurasia: '~35%',
    mapLossNorth: '~72%',
    mapLossSouth: '~83%',
    mapSources:
      'Диапазоны прихода, не точные годы. Более низкая африканская потеря — обычное чтение: животные там эволюционировали рядом с гомининами. Доли по континентам — по Barnosky 2008 (и сводкам вроде Our World in Data; см. также Andermann et al. 2020); ранняя стоянка Маджедбебе, Clarkson et al. 2017. Приход людей лучше объясняет позднечетвертичный рисунок, чем один климат (Sandom et al. 2014); некоторым видам, включая шерстистого мамонта, нужны оба фактора.',
    mapBaseCredit:
      'Основа суши: NASA Blue Marble Next Generation (декабрь 2004, общественное достояние) — безоблачная физическая Земля, не политическая карта.',
    cardCta: 'Читать карточку →',
    back: '← Природа',
    what: 'Что это',
    range: 'Ареал',
    story: 'Что произошло',
    when: 'Когда / статус',
    humanRole: 'Роль человека',
    iucnLabel: 'МСОП',
    sourcesLabel: 'Источники',
    imageCredit: 'Изображение',
    functionallyExtinct: 'Функционально вымерший',
    iucn: {
      EX: 'Исчезнувший',
      EW: 'Исчез в дикой природе',
      CR: 'На грани исчезновения',
      CR_PE: 'На грани исчезновения (возможно, исчез)',
      EN: 'Исчезающий',
      VU: 'Уязвимый',
      NT: 'Близкий к уязвимому',
      LC: 'Вызывающий наименьшие опасения',
    },
    status: {
      surviving: 'Выживший',
      endangered: 'Под угрозой',
      extinct: 'Вымерший',
    },
  },
  about: {
    metaTitle: 'О проекте — Fix Planet',
    metaDescription:
      'Fix Planet ведёт Aigars Abramovics: практические способы восстановить воду, леса, энергию, отходы, дикую природу и правила, которые их защищают.',
    eyebrow: 'Проект',
    title: 'О Fix Planet',
    lead: 'Курируемый атлас систем Земли и того, что ещё можно починить: вода, леса, энергия, отходы, дикая природа и правила, которые их защищают.',
    p1: 'Fix Planet собирает, как эти системы устроены и какие технологии, законы и привычки уже их меняют. На каждой карточке — названный источник.',
    p2Before:
      'Каждую проблему мы связываем с технологией или подходом, которые уже работают, — и указываем на доказательства. Проект ведёт ',
    p2After:
      ', инвестор и автор, который занимается зелёными технологиями и будущим, в котором можно жить.',
    p3Before: 'Развёрнутый аргумент — в разделе ',
    p3Book: 'Книга',
    p3Mid: '. Повседневные идеи также появляются в X как ',
    p3After: '.',
    curator: 'Куратор',
    curatorBlurb:
      'Инвестор и автор, который занимается зелёными технологиями и будущим, в котором можно жить.',
    follow: 'Подписаться на {handle} →',
    readBook: 'Читать New World →',
    supportCta: 'Поддержать Fix Planet →',
    supportNote:
      'Открывает оплату Stripe в новой вкладке. Поддержка атласа — не благотворительный взнос с налоговым вычетом.',
  },
  book: {
    metaTitle: 'New World — Fix Planet',
    metaDescription:
      'New World Aigars Abramovics: ясный взгляд на то, что сломано на нашей планете, — и что мы ещё можем исправить.',
    eyebrow: 'Книга',
    title: 'New World',
    by: 'Автор: Aigars Abramovics',
    coverAlt:
      'Обложка New World: Земля в огне под названием NEW WORLD и цитатой Г. Дж. Уэллса Our true nationality is mankind',
    lead: 'Ясный взгляд на то, что сломано на нашей планете, — и что мы ещё можем исправить: технологии, законы и решения, которые масштабируются.',
    status: 'Статус: в продаже',
    inside: 'Содержание',
    bullets: [
      'Давление на воду, леса, климат и дикую природу',
      'Технологии, которые уже используют, а не лозунги',
      'Идеи правил и привычек, которые защищают природу',
    ],
    buy: 'Купить на Amazon →',
  },
  stubs: {
    maps: {
      title: 'Карты',
      metaTitle: 'Карты — Fix Planet',
      metaDescription: 'Карты решений и проектов по всему миру — скоро.',
      summary:
        'Карта решений и проектов появится здесь. В этом разделе пока ничего не опубликовано.',
    },
    law: {
      title: 'Право',
      metaTitle: 'Право — Fix Planet',
      metaDescription: 'Правовые рамки для защиты людей и планеты — скоро.',
      summary:
        'Здесь будут собраны правовые рамки, которые защищают людей и планету. Раздел ещё не опубликован.',
    },
  },
  comingSoon: {
    badge: 'Скоро',
    beforeLinks: 'Этот раздел ещё не открыт. Пока можно посмотреть ',
    betweenLinks: ' или ',
    afterLinks: '.',
    solutionsLink: 'решения',
    aboutLink: 'о проекте Fix Planet',
  },
  donate: {
    metaTitle: 'Поддержать Fix Planet',
    metaDescription:
      'Поддержите Fix Planet через Stripe. Это поддержка атласа, не благотворительный взнос с налоговым вычетом.',
    title: 'Поддержать Fix Planet',
    lead: 'Fix Planet — живой атлас. Поддержка держит энциклопедию открытой и независимой.',
    useHeading: 'Куда идут средства',
    use: 'Время на исследования, хостинг, карты с открытой лицензией, переводы и бесплатный доступ к энциклопедии.',
    statusHeading: 'Как поддержать',
    status:
      'Кнопка открывает оплату Stripe в новой вкладке. Это поддержка Fix Planet, не благотворительный взнос с налоговым вычетом.',
    cta: 'Поддержать Fix Planet',
    thanks: 'Спасибо. Помогает и то, что вы делитесь атласом и книгой.',
  },
  footer: {
    blurb:
      'Атлас живой планеты и технологий и правил, которые ещё могут её чинить.',
    explore: 'Разделы',
    theBook: 'Книга',
    comingSoon: 'Скоро',
  },
  notFound: {
    metaTitle: 'Страница не найдена — Fix Planet',
    metaDescription: 'Такой страницы на Fix Planet нет.',
    title: 'Этой страницы нет',
    beforeLinks: 'Ссылка могла устареть. Попробуйте ',
    betweenLinks: ' или ',
    afterLinks: '.',
    homeLink: 'главную',
    solutionsLink: 'решения',
  },
};

const pl: typeof en = {
  skip: 'Przejdź do treści',
  menu: 'Menu',
  primaryNav: 'Menu główne',
  homeAria: 'Strona główna Fix Planet',
  language: 'Język',
  location: 'Anglia, Wielka Brytania',
  basedIn: 'Siedziba: {location}',
  meta: {
    defaultTitle: 'Fix Planet — Problemy. Rozwiązania. Dowody.',
    defaultDescription:
      'Atlas systemów Ziemi i technologii, które jeszcze mogą je naprawić — lasy, oceany, przyroda, prawo i mapy ze źródłami.',
  },
  nav: {
    solutions: 'Rozwiązania',
    innovations: 'Innowacje',
    terraforming: 'Terraformowanie',
    maps: 'Mapy',
    law: 'Prawo',
    wildlife: 'Przyroda',
    migration: 'Migracja',
    forests: 'Lasy',
    oceans: 'Oceany',
    book: 'Książka',
    about: 'O projekcie',
    donate: 'Wesprzyj',
  },
  home: {
    heroAria: 'Działy serwisu',
    choosePath: 'Wybierz kierunek',
    tagline: 'Analiza. Działanie. Wynik.',
    globeLabel: 'Interaktywna Ziemia — przeciągnij, aby obrócić',
    heroAlt: 'Solarpunkowe zielone miasto pionowych lasów w górskiej dolinie: rzeka, promień startu i wielka planeta na niebie',
    latest: 'Najnowsze rozwiązania',
    latestHeading: 'Karty problem–rozwiązanie, już w użyciu.',
    viewAll: 'Wszystkie rozwiązania →',
    featuresAria: 'Co obejmuje Fix Planet',
    tiles: {
      solutions: 'Technologie już w użyciu: woda, lasy, odpady, miasta, materiały, oceany, energia.',
      innovations: 'Laboratoria i pilotaże — węgiel, energia, SI — i dlaczego perpetuum mobile nie działa.',
      terraforming: 'Megaprojekty krajobrazowe i osobna półka interwencji klimatycznych.',
      maps: 'Publiczne mapy systemów Ziemi i świata politycznego.',
      law: 'Ustawy, projekty i oznaczone idee — ekologia, SI, zwierzęta.',
      wildlife: 'Gatunki, siedliska i to, jak zmieniły się po rozprzestrzenieniu ludzi.',
      migration: 'Rozprzestrzenianie ludzi, historyczne ruchy masowe, szlaki ptaków i migracje ssaków — z czynnikami na każdej karcie.',
      forests: 'Czym jest las, jak satelita widzi korony, liczby ze źródłami.',
      oceans: 'Prądy, zasolenie, temperatura i zanieczyszczenie — mapy żywego oceanu ze źródłami.',
      book: 'New World — co jest zepsute i co wciąż możemy naprawić.',
      about: 'Projekt i kurator Fix Planet.',
    },
  },
  features: {
    solutions: {
      title: 'Rozwiązania, które działają',
      text: 'Technologie już w użyciu, zestawione z planetarnym problemem.',
    },
    innovations: {
      title: 'Laboratoria, z granicami',
      text: 'Węgiel, energia i SI — oraz mity, które tam nie należą.',
    },
    maps: {
      title: 'Atlas ze źródłami',
      text: 'Konflikty, systemy Ziemi i świat polityczny — każda mapa z nazwanym źródłem.',
    },
    law: {
      title: 'Prawo, z etykietą',
      text: 'Teksty obowiązujące, projekty rozpatrywane i idee, które jeszcze nie są prawem.',
    },
    wildlife: {
      title: 'Przyroda',
      text: 'Gatunki i siedliska i to, jak zmieniły się po rozprzestrzenieniu ludzi.',
    },
  },
  solutionsPage: {
    metaTitle: 'Rozwiązania — Fix Planet',
    metaDescription:
      'Karty problem → technologia: woda, lasy, odpady, miasta, materiały, oceany i energia.',
    eyebrow: 'Problem → Rozwiązanie',
    title: 'Rozwiązania',
    lead: 'Każda karta łączy planetarny problem z technologią, która już jest w użyciu. Filtruj według tematu, potem sprawdź źródła.',
    filterAria: 'Filtruj rozwiązania według tematu',
    chooseTopic: 'Wybierz temat',
    all: 'Wszystkie',
    allKey: 'all',
    problem: 'Problem',
    fix: 'Rozwiązanie',
    explore: 'Zobacz rozwiązanie →',
    primarySource: 'Źródło',
    back: '← Rozwiązania',
    tags: {
      water: 'Woda',
      forests: 'Lasy',
      waste: 'Odpady',
      cities: 'Miasta',
      materials: 'Materiały',
      oceans: 'Oceany',
      energy: 'Energia',
    },
    tileLeads: {
      all: 'Wszystkie karty problem → rozwiązanie na jednej półce.',
      water: 'Zbieranie, odzysk, odsalanie, zasilanie wód podziemnych i żywe filtry.',
      forests: 'Regeneracja, agroleśnictwo, ostrożna wycinka i gospodarka ognioodporna.',
      waste: 'Sortowanie, recykling, organika i odzysk energii w skali miasta.',
      cities: 'Chłodne dachy, przepuszczalne ulice, drzewa i wspólne sieci ciepła.',
      materials: 'Cement o niższym śladzie, drewno klejone i czystsza stal.',
      oceans: 'Przechwytywanie plastiku, odtwarzanie brzegów i połów z mniejszym przyłowem.',
      energy: 'Wiatr, słońce i pompy ciepła, które już działają w prawdziwych sieciach.',
    },
  },
  wildlifePage: {
    metaTitle: 'Przyroda — Fix Planet',
    metaDescription:
      'Encyklopedia tego, jak zmieniły się populacje zwierząt po rozprzestrzenieniu się współczesnego człowieka: gatunki, które przetrwały, zagrożone i wymarłe, plus półka Homo sapiens — pochodzenie, migracja i rodzaje dużych ssaków, które zniknęły po pierwszym przybyciu.',
    eyebrow: 'Encyklopedia',
    title: 'Przyroda',
    lead: 'Gdzie powstał nasz gatunek, dokąd poszedł i jak zmieniły się największe zwierzęta, gdy przyszliśmy jako nowy drapieżnik.',
    heroEyebrow: 'Nasz gatunek',
    appearedLabel: 'Pojawił się',
    appeared:
      'Około 300 000 lat temu w Afryce. Skamieniałości z Dżabal Irhud w Maroku datuje się na około 315 000 lat; genetyka i paleontologia umieszczają pochodzenie Homo sapiens na tym kontynencie około 300 000 lat. Afryka później straciła stosunkowo małą część rodzajów dużych ssaków (zwykle ok. 18–21 procent): wiele z tych zwierząt żyło już obok homininów.',
    populationLabel: 'Populacja dziś',
    population:
      'Około 8,2 miliarda ludzi w 2025 roku (ONZ, World Population Prospects 2024, wariant średni). Ta sama rewizja podała 8,2 miliarda w połowie 2024. To oficjalny szacunek, nie spis każdej osoby.',
    framing:
      'Gdzie ludzie przyszli jako nowy drapieżnik, większość największych zwierząt zniknęła w ciągu kilku tysięcy lat. Fala nie ma jednej daty — idzie za nami: Australia ok. 50–40 tysięcy lat temu, Ameryki ok. 15–10 tysięcy, wyspy w ostatnich kilku tysiącach, i nie ustała. Na kontynentach, na które ludzie weszli po raz pierwszy, zniknęło ok. 70–90 procent rodzajów dużych zwierząt (zazwyczaj od 44 kg). To nie 90 procent wszystkich zwierząt na Ziemi. Ok. 20 000–15 000 lat to moment, gdy ludzie dotarli do Ameryk — nie początek naszego gatunku i nie przybycie do Australii.',
    imageAlt:
      'Współczesny dorosły człowiek na łące — spokojna, naturalistyczna figura Homo sapiens, nie portret konkretnej osoby',
    scientificName: 'Homo sapiens',
    tabsAria: 'Działy Przyrody',
    chooseStatus: 'Wybierz dział',
    surviving: 'Przetrwałe',
    endangered: 'Zagrożone',
    extinct: 'Wymarłe',
    'homo-sapiens': 'Homo sapiens',
    journeyCta: 'Migracja · Ludzie →',
    journeyNote:
      'Droga — trasy, daty i przyczyny — jest w dziale Migracja. Ta półka zostaje ramą gatunku: pochodzenie, liczebność i to, co zniknęło po pierwszym przybyciu.',
    tiles: {
      surviving: 'Wciąż tu są: zasięg lub liczebność przesunęły się po rozprzestrzenieniu ludzi.',
      endangered: 'Zagrożone teraz — głównie przez ludzi.',
      extinct: 'Zniknęły. Większość kart ma jasną przyczynę ludzką.',
      'homo-sapiens':
        'Pochodzenie w Afryce, liczebność dziś i rodzaje dużych ssaków, które zniknęły po pierwszym przybyciu. Sama droga jest w dziale Migracja.',
    },
    survivingLead:
      'Wciąż tu są, z zasięgiem lub liczebnością, które przesunęły się po rozprzestrzenieniu ludzi — polowania, uprawa, późniejsza odbudowa albo wzrost. Daty różnią się kontynentami.',
    endangeredLead:
      'Zagrożone teraz, głównie przez ludzi: utrata siedlisk, polowania, przyłów i klimat, który zmieniliśmy.',
    extinctLead:
      'Zniknęły. Większość kart ma jasną przyczynę ludzką. Przy kilku przedstawicielach megafauny późnego plejstocenu klimat jest drugim, uczciwie nazwanym czynnikiem.',
    mapTitle: 'Dokąd poszliśmy i kiedy',
    mapAria: 'Mapa świata rozprzestrzeniania Homo sapiens z datowanymi krokami',
    mapLead:
      'Ubytek wielkich zwierząt idzie tą drogą. Odsetki poniżej to rodzaje dużych ssaków, nie wszystkie gatunki zwierząt.',
    mapAfrica: 'Afryka · pochodzenie ~300 000 lat temu',
    mapOut: 'Z Afryki · ~70 000–50 000',
    mapAustralia: 'Australia / Sahul · ~65 000–50 000',
    mapEurasia: 'Eurazja · ~45 000–40 000',
    mapAmericas: 'Ameryki · ~20 000–15 000',
    mapIslands: 'Później wyspy · ostatnie kilka tysięcy lat (Nowa Zelandia ~700)',
    mapLegend: 'Ponumerowane etapy przybycia',
    mapPinAfrica: '~300 000 lat',
    mapPinOut: '~70–50 tysięcy',
    mapPinAustralia: '~65–50 tysięcy',
    mapPinEurasia: '~45–40 tysięcy',
    mapPinAmericas: '~20–15 tysięcy',
    mapPinIslands: 'wyspy · N. Zelandia ~700 lat',
    mapLossAfrica: '~18–21% rodzajów dużych ssaków utraconych',
    mapLossAustralia: '~88%',
    mapLossEurasia: '~35%',
    mapLossNorth: '~72%',
    mapLossSouth: '~83%',
    mapSources:
      'Zakresy przybycia, nie dokładne lata. Niższa strata Afryki to zwykły odczyt: zwierzęta ewoluowały tam obok homininów. Odsetki kontynentów za Barnosky 2008 (i streszczenia jak Our World in Data; zob. też Andermann et al. 2020); wczesne stanowisko Madjedbebe, Clarkson et al. 2017. Przybycie ludzi lepiej tłumaczy późnoczwartorzędowy wzór niż sam klimat (Sandom et al. 2014); niektóre gatunki, w tym mamut włochaty, wciąż wymagają obu.',
    mapBaseCredit:
      'Podstawa lądu: NASA Blue Marble Next Generation (grudzień 2004, domena publiczna) — bezchmurna fizyczna Ziemia, nie mapa polityczna.',
    cardCta: 'Czytaj hasło →',
    back: '← Przyroda',
    what: 'Czym jest',
    range: 'Zasięg',
    story: 'Co się stało',
    when: 'Kiedy / status',
    humanRole: 'Rola człowieka',
    iucnLabel: 'IUCN',
    sourcesLabel: 'Źródła',
    imageCredit: 'Zdjęcie',
    functionallyExtinct: 'Funkcjonalnie wymarły',
    iucn: {
      EX: 'Wymarły',
      EW: 'Wymarły na wolności',
      CR: 'Krytycznie zagrożony',
      CR_PE: 'Krytycznie zagrożony (prawdopodobnie wymarły)',
      EN: 'Zagrożony',
      VU: 'Narażony',
      NT: 'Bliski zagrożenia',
      LC: 'Najmniejszej troski',
    },
    status: {
      surviving: 'Przetrwały',
      endangered: 'Zagrożony',
      extinct: 'Wymarły',
    },
  },
  about: {
    metaTitle: 'O projekcie — Fix Planet',
    metaDescription:
      'Fix Planet prowadzi Aigars Abramovics: praktyczne sposoby naprawy wody, lasów, energii, odpadów, przyrody i reguł, które je chronią.',
    eyebrow: 'Projekt',
    title: 'O Fix Planet',
    lead: 'Kuratorowany atlas systemów Ziemi i tego, co jeszcze da się naprawić: woda, lasy, energia, odpady, przyroda i reguły, które je chronią.',
    p1: 'Fix Planet zbiera, jak te systemy działają i które technologie, prawa i nawyki już je zmieniają. Każda karta wskazuje nazwane źródło.',
    p2Before:
      'Każdy problem łączymy z technologią lub podejściem, które już działa — i wskazujemy dowody. Projekt prowadzi ',
    p2After:
      ', inwestor i autor skupiony na zielonych technologiach i przyszłości, w której da się żyć.',
    p3Before: 'Szerszy argument jest w ',
    p3Book: 'Książce',
    p3Mid: '. Codzienne idee pojawiają się też na X jako ',
    p3After: '.',
    curator: 'Kurator',
    curatorBlurb:
      'Inwestor i autor skupiony na zielonych technologiach i przyszłości, w której da się żyć.',
    follow: 'Obserwuj {handle} →',
    readBook: 'Czytaj New World →',
    supportCta: 'Wesprzyj Fix Planet →',
    supportNote:
      'Otwiera kasę Stripe w nowej karcie. Wsparcie atlasu — nie darowizna charytatywna z odliczeniem podatkowym.',
  },
  book: {
    metaTitle: 'New World — Fix Planet',
    metaDescription:
      'New World Aigarsa Abramovicsa: jasne spojrzenie na to, co na naszej planecie jest zepsute — i co wciąż możemy naprawić.',
    eyebrow: 'Książka',
    title: 'New World',
    by: 'Autor: Aigars Abramovics',
    coverAlt:
      'Okładka New World: Ziemia w płomieniach pod tytułem NEW WORLD i cytatem H.G. Wellsa Our true nationality is mankind',
    lead: 'Jasne spojrzenie na to, co na naszej planecie jest zepsute — i co wciąż możemy naprawić: technologie, prawo i wybory, które da się skalować.',
    status: 'Status: dostępna',
    inside: 'W środku',
    bullets: [
      'Presja na wodę, lasy, klimat i przyrodę',
      'Technologie już w użyciu, nie hasła',
      'Idee reguł i nawyków, które chronią naturę',
    ],
    buy: 'Kup na Amazon →',
  },
  stubs: {
    maps: {
      title: 'Mapy',
      metaTitle: 'Mapy — Fix Planet',
      metaDescription: 'Mapy rozwiązań i projektów na całym świecie — wkrótce.',
      summary:
        'Tutaj pojawi się mapa rozwiązań i projektów. W tej części nie opublikowano jeszcze nic.',
    },
    law: {
      title: 'Prawo',
      metaTitle: 'Prawo — Fix Planet',
      metaDescription: 'Ramy prawne chroniące ludzi i planetę — wkrótce.',
      summary:
        'Tutaj zbierzemy ramy prawne chroniące ludzi i planetę. Ta część nie jest jeszcze opublikowana.',
    },
  },
  comingSoon: {
    badge: 'Wkrótce',
    beforeLinks: 'Ta część nie jest jeszcze dostępna. W międzyczasie zobacz ',
    betweenLinks: ' albo ',
    afterLinks: '.',
    solutionsLink: 'rozwiązania',
    aboutLink: 'o Fix Planet',
  },
  donate: {
    metaTitle: 'Wesprzyj Fix Planet',
    metaDescription:
      'Wesprzyj Fix Planet przez Stripe. To wsparcie atlasu, nie darowizna charytatywna z odliczeniem podatkowym.',
    title: 'Wesprzyj Fix Planet',
    lead: 'Fix Planet to żywy atlas. Wsparcie utrzymuje encyklopedię publiczną i niezależną.',
    useHeading: 'Na co idzie wsparcie',
    use: 'Czas na badania, hosting, mapy na otwartej licencji, tłumaczenia i darmowy dostęp do encyklopedii.',
    statusHeading: 'Jak wesprzeć',
    status:
      'Przycisk otwiera kasę Stripe w nowej karcie. To wsparcie Fix Planet, nie darowizna charytatywna z odliczeniem podatkowym.',
    cta: 'Wesprzyj Fix Planet',
    thanks: 'Dziękujemy. Udostępnianie atlasu i książki też pomaga.',
  },
  footer: {
    blurb:
      'Atlas żywej planety oraz technologii i reguł, które jeszcze mogą ją naprawić.',
    explore: 'Przeglądaj',
    theBook: 'Książka',
    comingSoon: 'Wkrótce',
  },
  notFound: {
    metaTitle: 'Nie znaleziono strony — Fix Planet',
    metaDescription: 'Tej strony nie ma na Fix Planet.',
    title: 'Brakuje tej strony',
    beforeLinks: 'Link mógł być nieaktualny. Spróbuj ',
    betweenLinks: ' albo ',
    afterLinks: '.',
    homeLink: 'strony głównej',
    solutionsLink: 'rozwiązań',
  },
};

const lv: typeof en = {
  skip: 'Pāriet uz saturu',
  menu: 'Izvēlne',
  primaryNav: 'Galvenā navigācija',
  homeAria: 'Fix Planet sākums',
  language: 'Valoda',
  location: 'Anglija, Apvienotā Karaliste',
  basedIn: 'Bāze: {location}',
  meta: {
    defaultTitle: 'Fix Planet — Problēmas. Risinājumi. Pierādījumi.',
    defaultDescription:
      'Atlants Zemes sistēmām un tehnoloģijām, kas tās vēl var labot, — meži, okeāni, savvaļa, tiesības un kartes ar avotiem.',
  },
  nav: {
    solutions: 'Risinājumi',
    innovations: 'Inovācijas',
    terraforming: 'Terraformēšana',
    maps: 'Kartes',
    law: 'Tiesības',
    wildlife: 'Savvaļa',
    migration: 'Migrācija',
    forests: 'Meži',
    oceans: 'Okeāni',
    book: 'Grāmata',
    about: 'Par projektu',
    donate: 'Atbalstīt',
  },
  home: {
    heroAria: 'Vietnes sadaļas',
    choosePath: 'Izvēlies virzienu',
    tagline: 'Analīze. Rīcība. Rezultāts.',
    globeLabel: 'Interaktīva Zeme — velc, lai pagrieztu',
    heroAlt: 'Solarpanka zaļā pilsēta ar vertikāliem mežiem kalnu ielejā: upe, starta stars un liela planēta debesīs',
    latest: 'Jaunākie risinājumi',
    latestHeading: 'Kartītes «problēma — risinājums», jau lietošanā.',
    viewAll: 'Visi risinājumi →',
    featuresAria: 'Ko aptver Fix Planet',
    tiles: {
      solutions: 'Tehnoloģijas, ko jau lieto: ūdens, meži, atkritumi, pilsētas, materiāli, okeāni, enerģija.',
      innovations: 'Laboratorijas un izmēģinājumi — ogleklis, enerģija, MI — un kāpēc mūžīgais dzinējs neizdodas.',
      terraforming: 'Ainavu megaprojekti un atsevišķs plaukts klimata iejaukšanās.',
      maps: 'Publiskas kartes par Zemes sistēmām un politisko pasauli.',
      law: 'Likumi, projekti un marķētas idejas — ekoloģija, MI, dzīvnieki.',
      wildlife: 'Sugas, dzīvotnes un tas, kā tās mainījās pēc cilvēku izplatīšanās.',
      migration: 'Cilvēku izplatība, vēsturiskas masu kustības, putnu lidojumu ceļi un zīdītāju migrācijas — ar dzinējspēkiem katrā kartītē.',
      forests: 'Kas ir mežs, kā satelīts redz vainagu, skaitļi ar avotiem.',
      oceans: 'Straumes, sāļums, temperatūra un piesārņojums — dzīvā okeāna kartes ar avotiem.',
      book: 'New World — kas ir salūzis un ko vēl varam salabot.',
      about: 'Projekts un Fix Planet kurators.',
    },
  },
  features: {
    solutions: {
      title: 'Risinājumi, kas darbojas',
      text: 'Tehnoloģijas, ko jau lieto, līdzās planētas problēmai.',
    },
    innovations: {
      title: 'Laboratorijas ar robežām',
      text: 'Ogleklis, enerģija un MI — un mīti, kas tur neder.',
    },
    maps: {
      title: 'Atlants ar avotiem',
      text: 'Konflikti, Zemes sistēmas un politiskā pasaule — katrai kartei nosaukts avots.',
    },
    law: {
      title: 'Tiesības ar etiķeti',
      text: 'Spēkā esoši teksti, izskatīšanā esoši projekti un idejas, kas vēl nav likums.',
    },
    wildlife: {
      title: 'Savvaļa',
      text: 'Sugas un dzīvotnes un tas, kā tās mainījās pēc cilvēku izplatīšanās.',
    },
  },
  solutionsPage: {
    metaTitle: 'Risinājumi — Fix Planet',
    metaDescription:
      'Kartītes «problēma → tehnoloģija»: ūdens, meži, atkritumi, pilsētas, materiāli, okeāni un enerģija.',
    eyebrow: 'Problēma → Risinājums',
    title: 'Risinājumi',
    lead: 'Katra karte savieno planētas problēmu ar tehnoloģiju, ko jau lieto. Filtrē pēc tēmas un dodies pie avotiem.',
    filterAria: 'Filtrēt risinājumus pēc tēmas',
    chooseTopic: 'Izvēlies tēmu',
    all: 'Visi',
    allKey: 'all',
    problem: 'Problēma',
    fix: 'Risinājums',
    explore: 'Skatīt risinājumu →',
    primarySource: 'Avots',
    back: '← Risinājumi',
    tags: {
      water: 'Ūdens',
      forests: 'Meži',
      waste: 'Atkritumi',
      cities: 'Pilsētas',
      materials: 'Materiāli',
      oceans: 'Okeāni',
      energy: 'Enerģija',
    },
    tileLeads: {
      all: 'Visas «problēma → risinājums» kartītes vienā plauktā.',
      water: 'Vākšana, atkārtota izmantošana, atsāļošana, gruntsūdeņu papildināšana un dzīvie filtri.',
      forests: 'Atjaunošana, agromežsaimniecība, rūpīga ciršana un ugunsdroša prakse.',
      waste: 'Šķirošana, pārstrāde, organika un enerģijas atgūšana pilsētas mērogā.',
      cities: 'Vēsie jumti, caurlaidīgas ielas, koki un kopīgi siltumtīkli.',
      materials: 'Cements ar mazāku oglekli, masīvkoksne un tīrāks tērauds.',
      oceans: 'Plastmasas uztveršana, krastu atjaunošana un zvejas ar mazāku piezveju.',
      energy: 'Vējš, saule un siltumsūkņi, kas jau darbojas īstos tīklos.',
    },
  },
  wildlifePage: {
    metaTitle: 'Savvaļa — Fix Planet',
    metaDescription:
      'Enciklopēdija par to, kā dzīvnieku populācijas mainījās pēc mūsdienu cilvēka izplatīšanās: izdzīvojušās, apdraudētās un izmirstās sugas, plus Homo sapiens plaukts — izcelsme, migrācija un lielo zīdītāju ģintis, kas izzuda pēc pirmās ierašanās.',
    eyebrow: 'Enciklopēdija',
    title: 'Savvaļa',
    lead: 'Kur radās mūsu suga, kur gāja un kā mainījās lielākie dzīvnieki pēc tam, kad ienācām kā jauns plēsējs.',
    heroEyebrow: 'Mūsu suga',
    appearedLabel: 'Parādījās',
    appeared:
      'Ap 300 000 gadiem Āfrikā. Fosīlijas no Džebel Irhūdas Marokā datē ap 315 000 gadiem; ģenētika un paleontoloģija Homo sapiens izcelsmi liek šajā kontinentā ap 300 000 gadiem. Āfrika vēlāk zaudēja samērā mazu daļu lielo zīdītāju ģinšu (parasti ap 18–21 procentu): daudzi no šiem dzīvniekiem jau dzīvoja līdzās hominīniem.',
    populationLabel: 'Skaits šodien',
    population:
      'Ap 8,2 miljardiem cilvēku 2025. gadā (ANO, World Population Prospects 2024, vidējais variants). Tā pati revīzija 2024. gada vidum deva 8,2 miljardus. Tas ir oficiāls vērtējums, ne katra cilvēka skaitīšana.',
    framing:
      'Tur, kur cilvēki ienāca kā jauns plēsējs, lielākā daļa lielāko dzīvnieku izzuda dažu tūkstošu gadu laikā. Vilnis nav viens datums — tas iet mums līdzi: Austrālija ap 50–40 tūkstošiem gadu, Amerika ap 15–10 tūkstošiem, salas pēdējos dažos tūkstošos, un tas nav apstājies. Kontinentos, kuros cilvēki ienāca pirmo reizi, izzuda ap 70–90 procentiem lielo dzīvnieku ģinšu (parasti no 44 kg). Tas nav 90 procenti visu dzīvnieku uz Zemes. Ap 20 000–15 000 gadu ir brīdis, kad cilvēki sasniedza Ameriku — ne mūsu sugas sākums un ne ierašanās Austrālijā.',
    imageAlt:
      'Mūsdienu pieaugušais cilvēks pļavā — mierīga, naturālistiska Homo sapiens figūra, ne konkrētas personas portrets',
    scientificName: 'Homo sapiens',
    tabsAria: 'Savvaļas sadaļas',
    chooseStatus: 'Izvēlies sadaļu',
    surviving: 'Izdzīvojušie',
    endangered: 'Apdraudētie',
    extinct: 'Izmirušie',
    'homo-sapiens': 'Homo sapiens',
    journeyCta: 'Migrācija · Cilvēki →',
    journeyNote:
      'Ceļš — maršruti, datumi un iemesli — ir sadaļā Migrācija. Šis plaukts paliek sugas rāmis: izcelsme, skaits un tas, kas izzuda pēc pirmās ierašanās.',
    tiles: {
      surviving: 'Joprojām šeit: areāls vai skaits pārbīdījās pēc cilvēku izplatīšanās.',
      endangered: 'Apdraudēti tagad — galvenokārt cilvēku dēļ.',
      extinct: 'Izzuduši. Lielākā daļa karšu ir skaidri cilvēku izraisītas.',
      'homo-sapiens':
        'Izcelsme Āfrikā, skaits šodien un lielo zīdītāju ģintis, kas izzuda pēc pirmās ierašanās. Pats ceļš ir sadaļā Migrācija.',
    },
    survivingLead:
      'Joprojām šeit, ar areālu vai skaitu, kas pārbīdījās pēc cilvēku izplatīšanās — medības, tīrumi, vēlāka atjaunošanās vai uzplaukums. Datumi pa kontinentiem atšķiras.',
    endangeredLead:
      'Apdraudēti tagad, galvenokārt cilvēku dēļ: dzīvotņu zudums, medības, piezveja un klimats, ko esam mainījuši.',
    extinctLead:
      'Izzuduši. Lielākā daļa karšu ir skaidri cilvēku izraisītas. Dažiem vēlā pleistocēna megafaunas pārstāvjiem klimats ir otrs, godīgi nosaukts cēlonis.',
    mapTitle: 'Kur gājām un kad',
    mapAria: 'Homo sapiens izplatības pasaules karte ar datētiem soļiem',
    mapLead:
      'Lielo dzīvnieku zudums iet pa šo ceļu. Procenti zemāk ir lielo zīdītāju ģintis, ne visas dzīvnieku sugas.',
    mapAfrica: 'Āfrika · izcelsme ~300 000 gadu',
    mapOut: 'No Āfrikas · ~70 000–50 000',
    mapAustralia: 'Austrālija / Sahula · ~65 000–50 000',
    mapEurasia: 'Eirāzija · ~45 000–40 000',
    mapAmericas: 'Amerika · ~20 000–15 000',
    mapIslands: 'Vēlāk salas · pēdējie daži tūkstoši gadu (Jaunzēlande ~700)',
    mapLegend: 'Numurēti ierašanās soļi',
    mapPinAfrica: '~300 000 gadu',
    mapPinOut: '~70–50 tūkstoši',
    mapPinAustralia: '~65–50 tūkstoši',
    mapPinEurasia: '~45–40 tūkstoši',
    mapPinAmericas: '~20–15 tūkstoši',
    mapPinIslands: 'salas · JZ ~700 gadi',
    mapLossAfrica: 'zaudētas ~18–21% lielo zīdītāju ģinšu',
    mapLossAustralia: '~88%',
    mapLossEurasia: '~35%',
    mapLossNorth: '~72%',
    mapLossSouth: '~83%',
    mapSources:
      'Ierašanās diapazoni, ne precīzi gadi. Āfrikas mazāko zudumu parasti skaidro ar to, ka dzīvnieki tur evolūcijā jau bija līdzās hominīniem. Kontinentu procenti pēc Barnosky 2008 (un kopsavilkumiem kā Our World in Data; skat. arī Andermann et al. 2020); Austrālijas agrā vieta Madjedbebe, Clarkson et al. 2017. Cilvēku ierašanās vēlo kvartāru labāk izskaidro nekā klimats viens (Sandom et al. 2014); dažām sugām, tostarp vilnainajam mamutam, joprojām vajag abus.',
    mapBaseCredit:
      'Sauszemes pamats: NASA Blue Marble Next Generation (2004. gada decembris, sabiedriskais īpašums) — bez mākoņiem fiziskā Zeme, ne politiskā karte.',
    cardCta: 'Lasīt šķirkli →',
    back: '← Savvaļa',
    what: 'Kas tas ir',
    range: 'Areāls',
    story: 'Kas notika',
    when: 'Kad / statuss',
    humanRole: 'Cilvēka loma',
    iucnLabel: 'IUCN',
    sourcesLabel: 'Avoti',
    imageCredit: 'Attēls',
    functionallyExtinct: 'Funkcionāli izmiris',
    iucn: {
      EX: 'Izmiris',
      EW: 'Izmiris savvaļā',
      CR: 'Kritiski apdraudēts',
      CR_PE: 'Kritiski apdraudēts (iespējams, izmiris)',
      EN: 'Apdraudēts',
      VU: 'Ievainojams',
      NT: 'Tuvu apdraudējumam',
      LC: 'Vismazāk apdraudēts',
    },
    status: {
      surviving: 'Izdzīvojis',
      endangered: 'Apdraudēts',
      extinct: 'Izmiris',
    },
  },
  about: {
    metaTitle: 'Par projektu — Fix Planet',
    metaDescription:
      'Fix Planet vada Aigars Abramovics: praktiski veidi, kā dziedēt ūdeni, mežus, enerģiju, atkritumus, savvaļas dabu un noteikumus, kas tos sargā.',
    eyebrow: 'Projekts',
    title: 'Par Fix Planet',
    lead: 'Kurēts atlants Zemes sistēmām un tam, ko vēl var salabot: ūdens, meži, enerģija, atkritumi, savvaļas daba un noteikumi, kas tos sargā.',
    p1: 'Fix Planet vāc, kā šīs sistēmas darbojas un kuras tehnoloģijas, likumi un ieradumi tās jau maina. Katrai kartītei ir nosaukts avots.',
    p2Before:
      'Katrai problēmai mēs pievienojam tehnoloģiju vai pieeju, kas jau darbojas, — un norādām uz pierādījumiem. Projektu vada ',
    p2After:
      ', investors un autors, kura uzmanības centrā ir zaļās tehnoloģijas un nākotne, kurā var dzīvot.',
    p3Before: 'Plašākais arguments ir ',
    p3Book: 'Grāmatā',
    p3Mid: '. Ikdienas idejas parādās arī X kā ',
    p3After: '.',
    curator: 'Kurators',
    curatorBlurb:
      'Investors un autors, kura uzmanības centrā ir zaļās tehnoloģijas un nākotne, kurā var dzīvot.',
    follow: 'Sekot {handle} →',
    readBook: 'Lasīt New World →',
    supportCta: 'Atbalstīt Fix Planet →',
    supportNote:
      'Atver Stripe kasi jaunā cilnē. Atbalsts atlantam — ne labdarības ziedojums ar nodokļu atvieglojumu.',
  },
  book: {
    metaTitle: 'New World — Fix Planet',
    metaDescription:
      'New World, Aigars Abramovics: skaidrs skats uz to, kas uz mūsu planētas ir salūzis, — un ko mēs vēl varam salabot.',
    eyebrow: 'Grāmata',
    title: 'New World',
    by: 'Autors: Aigars Abramovics',
    coverAlt:
      'New World vāks: Zeme liesmās zem nosaukuma NEW WORLD un H. G. Velsa citāta Our true nationality is mankind',
    lead: 'Skaidrs skats uz to, kas uz mūsu planētas ir salūzis, — un ko mēs vēl varam salabot: tehnoloģijas, likumi un izvēles, kas mērogojas.',
    status: 'Statuss: pieejama',
    inside: 'Iekšā',
    bullets: [
      'Spiediens uz ūdeni, mežiem, klimatu un savvaļas dabu',
      'Tehnoloģijas, ko jau lieto, ne saukļi',
      'Idejas noteikumiem un ieradumiem, kas sargā dabu',
    ],
    buy: 'Pirkt Amazon →',
  },
  stubs: {
    maps: {
      title: 'Kartes',
      metaTitle: 'Kartes — Fix Planet',
      metaDescription: 'Risinājumu un projektu kartes visā pasaulē — drīzumā.',
      summary:
        'Šeit parādīsies risinājumu un projektu karte. Šajā sadaļā vēl nekas nav publicēts.',
    },
    law: {
      title: 'Tiesības',
      metaTitle: 'Tiesības — Fix Planet',
      metaDescription: 'Tiesiskais ietvars cilvēku un planētas aizsardzībai — drīzumā.',
      summary:
        'Šeit tiks savākti tiesiskie ietvari, kas sargā cilvēkus un planētu. Šī sadaļa vēl nav publicēta.',
    },
  },
  comingSoon: {
    badge: 'Drīzumā',
    beforeLinks: 'Šī sadaļa vēl nav atvērta. Pa to laiku apskati ',
    betweenLinks: ' vai uzzini ',
    afterLinks: '.',
    solutionsLink: 'risinājumus',
    aboutLink: 'par Fix Planet',
  },
  donate: {
    metaTitle: 'Atbalstīt Fix Planet',
    metaDescription:
      'Atbalsti Fix Planet caur Stripe. Tas ir atbalsts atlantam, ne labdarības ziedojums ar nodokļu atvieglojumu.',
    title: 'Atbalsti Fix Planet',
    lead: 'Fix Planet ir dzīvais atlants. Atbalsts tur enciklopēdiju atklātu un neatkarīgu.',
    useHeading: 'Kur iet atbalsts',
    use: 'Pētījumu laiks, hostings, atklāti licencētas kartes, tulkojumi un bezmaksas enciklopēdija.',
    statusHeading: 'Kā atbalstīt',
    status:
      'Poga atver Stripe kasi jaunā cilnē. Tas ir atbalsts Fix Planet, ne labdarības ziedojums ar nodokļu atvieglojumu.',
    cta: 'Atbalstīt Fix Planet',
    thanks: 'Paldies. Palīdz arī dalīšanās ar atlantu un grāmatu.',
  },
  footer: {
    blurb:
      'Dzīvās planētas atlants un tehnoloģijas un noteikumi, kas to vēl var labot.',
    explore: 'Sadaļas',
    theBook: 'Grāmata',
    comingSoon: 'Drīzumā',
  },
  notFound: {
    metaTitle: 'Lapa nav atrasta — Fix Planet',
    metaDescription: 'Šādas lapas Fix Planet nav.',
    title: 'Šīs lapas nav',
    beforeLinks: 'Saite varētu būt novecojusi. Mēģini ',
    betweenLinks: ' vai ',
    afterLinks: '.',
    homeLink: 'sākumlapu',
    solutionsLink: 'risinājumus',
  },
};

export const ui = { en, ru, pl, lv } as const;

export type Ui = typeof en;

export function getUi(locale: Locale): Ui {
  return ui[locale];
}

export function basedIn(locale: Locale): string {
  const copy = ui[locale];
  return copy.basedIn.replace('{location}', copy.location);
}
