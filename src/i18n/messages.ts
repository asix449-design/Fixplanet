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
      'A living atlas of technologies that repair the planet — clear problems, working solutions, real evidence.',
  },
  nav: {
    solutions: 'Solutions',
    innovations: 'Innovations',
    terraforming: 'Terraforming',
    maps: 'Maps',
    law: 'Law',
    wildlife: 'Wildlife',
    forests: 'Forests',
    book: 'Book',
    about: 'About',
    donate: 'Donate',
  },
  home: {
    heroAria: 'Site sections',
    choosePath: 'Choose a direction',
    tagline: 'Analysis. Action. Result. The planet will not wait.',
    globeLabel: 'Interactive Earth — drag to rotate',
    heroAlt: 'Solarpunk green city of vertical forests in a mountain valley, with a river, launch beam, and a large planet in the sky',
    latest: 'Latest solutions',
    latestHeading: 'Real solutions. Measurable impact.',
    viewAll: 'View all solutions →',
    featuresAria: 'What Fix Planet covers',
    tiles: {
      solutions: 'Proven technologies with real-world impact.',
      innovations: 'Labs and pilots aimed at planetary-scale problems.',
      terraforming: 'Landscape megaprojects and a separate shelf of climate interventions — failure-honest.',
      maps: 'A sourced atlas of Earth systems and the political world.',
      law: 'Real statutes, pending bills, and labeled ideas — ecology, AI, animals.',
      wildlife: 'Species, habitats, and how they changed after we spread.',
      forests: 'Satellite canopy, reconstructions, and sourced forest numbers.',
      book: 'New World — what’s broken, and what we can still fix.',
      about: 'The project and the curator behind Fix Planet.',
    },
  },
  features: {
    solutions: {
      title: 'Solutions that work',
      text: 'Proven technologies with real-world impact.',
    },
    innovations: {
      title: 'Frontier, with proof',
      text: 'Labs and pilots that aim at planetary-scale problems — and the myths that do not.',
    },
    maps: {
      title: 'Mapped for action',
      text: 'A sourced atlas of conflict, Earth systems, and the political world.',
    },
    law: {
      title: 'Law for the future',
      text: 'Enacted rules, bills under consideration, and ideas that are not law yet.',
    },
    wildlife: {
      title: 'Wildlife matters',
      text: 'Protecting species and habitats is our shared duty.',
    },
  },
  solutionsPage: {
    metaTitle: 'Solutions — Fix Planet',
    metaDescription:
      'Problem-to-technology cards: water, forests, waste, cities, materials, oceans, and energy.',
    eyebrow: 'Problem → Fix',
    title: 'Solutions',
    lead: 'Each card pairs a planetary problem with a technology that already works. Filter by topic, then follow the proof.',
    filterAria: 'Filter solutions by topic',
    chooseTopic: 'Choose a topic',
    all: 'All',
    allKey: 'all',
    problem: 'Problem',
    fix: 'Fix',
    explore: 'Explore solution →',
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
      water: 'Irrigation and wetlands that already clean and save water.',
      forests: 'Forestry that keeps forests standing and productive.',
      waste: 'Turning organic waste into energy and useful material.',
      cities: 'Cooler roofs and streets that cut urban heat.',
      materials: 'Lower-carbon cement and other building materials.',
      oceans: 'Catching plastic and waste before they reach the sea.',
      energy: 'Clean power that already works at community scale.',
    } satisfies Record<TagKey | 'all', string>,
  },
  wildlifePage: {
    metaTitle: 'Wildlife — Fix Planet',
    metaDescription:
      'An encyclopedia of how animal populations changed after modern humans spread: surviving, endangered, and extinct species, with a map of when people reached each continent.',
    eyebrow: 'Encyclopedia',
    title: 'Wildlife',
    lead: 'Our species first — where we arose, where we went, and how the largest animals changed after we arrived as a new predator.',
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
    tabsAria: 'Filter species by status',
    chooseStatus: 'Choose a status',
    surviving: 'Surviving',
    endangered: 'Endangered',
    extinct: 'Extinct',
    tiles: {
      surviving: 'Still here, with ranges or numbers that shifted after people spread.',
      endangered: 'Threatened now, mainly because of people.',
      extinct: 'Gone. Most entries are clearly human-caused.',
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
    iucn: {
      EX: 'Extinct',
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
    lead: 'Practical ways to heal the systems we depend on — collected, paired with proof, and kept honest.',
    p1: 'Fix Planet collects practical ways to heal the systems we depend on: water, forests, energy, waste, wildlife, and the rules that protect them.',
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
      'Solutions that already exist, not slogans',
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
    metaTitle: 'Donate — Fix Planet',
    metaDescription:
      'Support Fix Planet when donations open. No checkout on this page yet.',
    title: 'Support Fix Planet',
    lead: 'Fix Planet is a living atlas. When donations open, they will keep the atlas public and independent.',
    useHeading: 'Where support will go',
    use: 'Research time, hosting, openly licensed maps, translations, and keeping the encyclopedia free to read. Not ads. Not a political campaign.',
    statusHeading: 'Payments are not open yet',
    status:
      'There is no checkout on this page. We have not connected Stripe, PayPal, or Link. When a real processor is live, this page will send you there.',
    thanks: 'If you want to help before then, share the atlas and the book.',
  },
  footer: {
    blurb:
      'A living atlas of technologies that repair the planet. Clear problems, working solutions, real evidence.',
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
      'Живой атлас технологий, которые восстанавливают планету, — ясные проблемы, работающие решения, реальные доказательства.',
  },
  nav: {
    solutions: 'Решения',
    innovations: 'Инновации',
    terraforming: 'Терраформинг',
    maps: 'Карты',
    law: 'Право',
    wildlife: 'Природа',
    forests: 'Леса',
    book: 'Книга',
    about: 'О проекте',
    donate: 'Поддержать',
  },
  home: {
    heroAria: 'Разделы сайта',
    choosePath: 'Выберите направление',
    tagline: 'Анализ. Действия. Результат. Планета не ждёт.',
    globeLabel: 'Интерактивная Земля — перетащите, чтобы вращать',
    heroAlt: 'Соларпанк-город вертикальных лесов в горной долине: река, луч старта и большая планета в небе',
    latest: 'Новые решения',
    latestHeading: 'Реальные решения. Измеримый результат.',
    viewAll: 'Все решения →',
    featuresAria: 'О чём Fix Planet',
    tiles: {
      solutions: 'Проверенные технологии с реальным эффектом.',
      innovations: 'Лаборатории и пилоты для планетарных проблем.',
      terraforming: 'Ландшафтные мегапроекты и отдельная полка климатических вмешательств — без прикрас.',
      maps: 'Атлас с источниками: системы Земли и политический мир.',
      law: 'Реальные статуты, рассматриваемые проекты и помеченные идеи — экология, ИИ, животные.',
      wildlife: 'Виды, места обитания и то, как они изменились после нашего расселения.',
      forests: 'Спутниковая крона, реконструкции и лесные цифры с источниками.',
      book: 'New World — что сломано и что мы ещё можем исправить.',
      about: 'Проект и куратор Fix Planet.',
    },
  },
  features: {
    solutions: {
      title: 'Решения, которые работают',
      text: 'Проверенные технологии с реальным эффектом.',
    },
    innovations: {
      title: 'Рубеж — с доказательствами',
      text: 'Лаборатории и пилоты, которые целятся в планетарные проблемы, — и мифы, которые туда не входят.',
    },
    maps: {
      title: 'Карта для действий',
      text: 'Атлас с источниками: конфликты, системы Земли и политический мир.',
    },
    law: {
      title: 'Право будущего',
      text: 'Действующие правила, законопроекты на рассмотрении и идеи, которые ещё не закон.',
    },
    wildlife: {
      title: 'Дикая природа важна',
      text: 'Защита видов и мест обитания — наша общая обязанность.',
    },
  },
  solutionsPage: {
    metaTitle: 'Решения — Fix Planet',
    metaDescription:
      'Карточки «проблема → технология»: вода, леса, отходы, города, материалы, океаны и энергия.',
    eyebrow: 'Проблема → Решение',
    title: 'Решения',
    lead: 'На каждой карточке — планетарная проблема и технология, которая уже работает. Отфильтруйте по теме и перейдите к доказательствам.',
    filterAria: 'Фильтр решений по теме',
    chooseTopic: 'Выберите тему',
    all: 'Все',
    allKey: 'all',
    problem: 'Проблема',
    fix: 'Решение',
    explore: 'Подробнее →',
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
      water: 'Орошение и болота, которые уже чистят и берегут воду.',
      forests: 'Лесное хозяйство, которое оставляет лес стоять.',
      waste: 'Органические отходы в энергию и полезный материал.',
      cities: 'Прохладные крыши и улицы, которые снижают жару в городе.',
      materials: 'Цемент с меньшим углеродом и другие материалы.',
      oceans: 'Пластик и отходы — перехватить до моря.',
      energy: 'Чистая энергия, которая уже работает в сообществах.',
    },
  },
  wildlifePage: {
    metaTitle: 'Природа — Fix Planet',
    metaDescription:
      'Энциклопедия того, как изменились популяции животных после расселения современного человека: выжившие, находящиеся под угрозой и вымершие виды, с картой того, когда люди дошли до каждого континента.',
    eyebrow: 'Энциклопедия',
    title: 'Природа',
    lead: 'Сначала наш вид — где мы возникли, куда ушли и как изменились самые крупные животные после того, как мы пришли как новый хищник.',
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
    tabsAria: 'Фильтр видов по статусу',
    chooseStatus: 'Выберите статус',
    surviving: 'Выжившие',
    endangered: 'Под угрозой',
    extinct: 'Вымершие',
    tiles: {
      surviving: 'Всё ещё здесь: ареал или численность сдвинулись после расселения людей.',
      endangered: 'Под угрозой сейчас — главным образом из-за людей.',
      extinct: 'Исчезли. Большинство карточек — явно по вине людей.',
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
    iucn: {
      EX: 'Исчезнувший',
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
    lead: 'Практические способы восстановить системы, от которых мы зависим, — собранные, сопоставленные с доказательствами и без прикрас.',
    p1: 'Fix Planet собирает практические способы восстановить системы, от которых мы зависим: воду, леса, энергию, отходы, дикую природу и правила, которые их защищают.',
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
      'Решения, которые уже существуют, а не лозунги',
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
    metaTitle: 'Поддержать — Fix Planet',
    metaDescription:
      'Поддержите Fix Planet, когда откроются пожертвования. Оплаты на этой странице пока нет.',
    title: 'Поддержать Fix Planet',
    lead: 'Fix Planet — живой атлас. Когда пожертвования откроются, они помогут держать атлас открытым и независимым.',
    useHeading: 'Куда пойдут средства',
    use: 'Время на исследования, хостинг, карты с открытой лицензией, переводы и бесплатный доступ к энциклопедии. Не реклама. Не политическая кампания.',
    statusHeading: 'Оплаты ещё нет',
    status:
      'На этой странице нет оформления платежа. Stripe, PayPal и Link ещё не подключены. Когда появится настоящий процессор, мы отправим вас туда.',
    thanks: 'Пока можно помочь иначе — делиться атласом и книгой.',
  },
  footer: {
    blurb:
      'Живой атлас технологий, которые восстанавливают планету. Ясные проблемы, работающие решения, реальные доказательства.',
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
      'Żywy atlas technologii, które naprawiają planetę — jasne problemy, działające rozwiązania, realne dowody.',
  },
  nav: {
    solutions: 'Rozwiązania',
    innovations: 'Innowacje',
    terraforming: 'Terraformowanie',
    maps: 'Mapy',
    law: 'Prawo',
    wildlife: 'Przyroda',
    forests: 'Lasy',
    book: 'Książka',
    about: 'O projekcie',
    donate: 'Wesprzyj',
  },
  home: {
    heroAria: 'Działy serwisu',
    choosePath: 'Wybierz kierunek',
    tagline: 'Analiza. Działanie. Wynik. Planeta nie poczeka.',
    globeLabel: 'Interaktywna Ziemia — przeciągnij, aby obrócić',
    heroAlt: 'Solarpunkowe zielone miasto pionowych lasów w górskiej dolinie: rzeka, promień startu i wielka planeta na niebie',
    latest: 'Najnowsze rozwiązania',
    latestHeading: 'Realne rozwiązania. Mierzalny efekt.',
    viewAll: 'Wszystkie rozwiązania →',
    featuresAria: 'Co obejmuje Fix Planet',
    tiles: {
      solutions: 'Sprawdzone technologie z realnym skutkiem.',
      innovations: 'Laboratoria i pilotaże wobec problemów planetarnych.',
      terraforming: 'Megaprojekty krajobrazowe i osobna półka interwencji klimatycznych — bez hype’u.',
      maps: 'Atlas ze źródłami: systemy Ziemi i świat polityczny.',
      law: 'Prawdziwe statuty, rozpatrywane projekty i oznaczone idee — ekologia, SI, zwierzęta.',
      wildlife: 'Gatunki, siedliska i to, jak zmieniły się po naszym rozprzestrzenieniu.',
      forests: 'Satelitarna korona, rekonstrukcje i leśne liczby ze źródłami.',
      book: 'New World — co jest zepsute i co wciąż możemy naprawić.',
      about: 'Projekt i kurator Fix Planet.',
    },
  },
  features: {
    solutions: {
      title: 'Rozwiązania, które działają',
      text: 'Sprawdzone technologie z realnym skutkiem.',
    },
    innovations: {
      title: 'Granica, z dowodem',
      text: 'Laboratoria i pilotaże wobec problemów planetarnych — oraz mity, które tam nie należą.',
    },
    maps: {
      title: 'Mapa do działania',
      text: 'Atlas ze źródłami: konflikty, systemy Ziemi i świat polityczny.',
    },
    law: {
      title: 'Prawo dla przyszłości',
      text: 'Obowiązujące reguły, rozpatrywane projekty i idee, które jeszcze nie są prawem.',
    },
    wildlife: {
      title: 'Przyroda ma znaczenie',
      text: 'Ochrona gatunków i siedlisk to nasz wspólny obowiązek.',
    },
  },
  solutionsPage: {
    metaTitle: 'Rozwiązania — Fix Planet',
    metaDescription:
      'Karty problem → technologia: woda, lasy, odpady, miasta, materiały, oceany i energia.',
    eyebrow: 'Problem → Rozwiązanie',
    title: 'Rozwiązania',
    lead: 'Każda karta łączy planetarny problem z technologią, która już działa. Filtruj według tematu, potem sprawdź dowody.',
    filterAria: 'Filtruj rozwiązania według tematu',
    chooseTopic: 'Wybierz temat',
    all: 'Wszystkie',
    allKey: 'all',
    problem: 'Problem',
    fix: 'Rozwiązanie',
    explore: 'Zobacz rozwiązanie →',
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
      water: 'Nawadnianie i mokradła, które już czyszczą i oszczędzają wodę.',
      forests: 'Leśnictwo, które zostawia lasy stojące.',
      waste: 'Odpady organiczne w energię i użyteczny materiał.',
      cities: 'Chłodniejsze dachy i ulice, które tną upał w mieście.',
      materials: 'Cement o niższym śladzie i inne materiały budowlane.',
      oceans: 'Plastik i odpady — zatrzymać zanim dotrą do morza.',
      energy: 'Czysta energia, która już działa w społecznościach.',
    },
  },
  wildlifePage: {
    metaTitle: 'Przyroda — Fix Planet',
    metaDescription:
      'Encyklopedia tego, jak zmieniły się populacje zwierząt po rozprzestrzenieniu się współczesnego człowieka: gatunki, które przetrwały, zagrożone i wymarłe, z mapą tego, kiedy ludzie dotarli na każdy kontynent.',
    eyebrow: 'Encyklopedia',
    title: 'Przyroda',
    lead: 'Najpierw nasz gatunek — gdzie powstał, dokąd poszedł i jak zmieniły się największe zwierzęta, gdy przyszliśmy jako nowy drapieżnik.',
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
    tabsAria: 'Filtruj gatunki według statusu',
    chooseStatus: 'Wybierz status',
    surviving: 'Przetrwałe',
    endangered: 'Zagrożone',
    extinct: 'Wymarłe',
    tiles: {
      surviving: 'Wciąż tu są: zasięg lub liczebność przesunęły się po rozprzestrzenieniu ludzi.',
      endangered: 'Zagrożone teraz — głównie przez ludzi.',
      extinct: 'Zniknęły. Większość kart ma jasną przyczynę ludzką.',
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
    iucn: {
      EX: 'Wymarły',
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
    lead: 'Praktyczne sposoby naprawy systemów, od których zależymy — zebrane, zestawione z dowodami i trzymane w ryzach uczciwości.',
    p1: 'Fix Planet zbiera praktyczne sposoby naprawy systemów, od których zależymy: wody, lasów, energii, odpadów, przyrody i reguł, które je chronią.',
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
      'Rozwiązania, które już istnieją, nie hasła',
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
    metaTitle: 'Wesprzyj — Fix Planet',
    metaDescription:
      'Wesprzyj Fix Planet, gdy darowizny będą otwarte. Na tej stronie nie ma jeszcze płatności.',
    title: 'Wesprzyj Fix Planet',
    lead: 'Fix Planet to żywy atlas. Gdy darowizny będą otwarte, utrzymają atlas publiczny i niezależny.',
    useHeading: 'Na co pójdzie wsparcie',
    use: 'Czas na badania, hosting, mapy na otwartej licencji, tłumaczenia i darmowy dostęp do encyklopedii. Nie reklamy. Nie kampania polityczna.',
    statusHeading: 'Płatności nie są jeszcze otwarte',
    status:
      'Na tej stronie nie ma kasy. Nie podłączyliśmy Stripe, PayPal ani Link. Gdy pojawi się prawdziwy operator, ta strona tam Cię skieruje.',
    thanks: 'Do tego czasu możesz pomóc, udostępniając atlas i książkę.',
  },
  footer: {
    blurb:
      'Żywy atlas technologii, które naprawiają planetę. Jasne problemy, działające rozwiązania, realne dowody.',
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
      'Dzīvais atlants tehnoloģijām, kas labo planētu, — skaidras problēmas, risinājumi, kas darbojas, īsti pierādījumi.',
  },
  nav: {
    solutions: 'Risinājumi',
    innovations: 'Inovācijas',
    terraforming: 'Terraformēšana',
    maps: 'Kartes',
    law: 'Tiesības',
    wildlife: 'Savvaļa',
    forests: 'Meži',
    book: 'Grāmata',
    about: 'Par projektu',
    donate: 'Atbalstīt',
  },
  home: {
    heroAria: 'Vietnes sadaļas',
    choosePath: 'Izvēlies virzienu',
    tagline: 'Analīze. Rīcība. Rezultāts. Planēta negaida.',
    globeLabel: 'Interaktīva Zeme — velc, lai pagrieztu',
    heroAlt: 'Solarpanka zaļā pilsēta ar vertikāliem mežiem kalnu ielejā: upe, starta stars un liela planēta debesīs',
    latest: 'Jaunākie risinājumi',
    latestHeading: 'Īsti risinājumi. Izmērāms efekts.',
    viewAll: 'Visi risinājumi →',
    featuresAria: 'Ko aptver Fix Planet',
    tiles: {
      solutions: 'Pārbaudītas tehnoloģijas ar reālu ietekmi.',
      innovations: 'Laboratorijas un izmēģinājumi pret planētas mēroga problēmām.',
      terraforming: 'Ainavu megaprojekti un atsevišķs plaukts klimata iejaukšanās — bez haipa.',
      maps: 'Atlants ar avotiem: Zemes sistēmas un politiskā pasaule.',
      law: 'Īsti statūti, izskatīti projekti un marķētas idejas — ekoloģija, MI, dzīvnieki.',
      wildlife: 'Sugas, dzīvotnes un tas, kā tās mainījās pēc mūsu izplatīšanās.',
      forests: 'Satelīta vainags, rekonstrukcijas un meža skaitļi ar avotiem.',
      book: 'New World — kas ir salūzis un ko vēl varam salabot.',
      about: 'Projekts un Fix Planet kurators.',
    },
  },
  features: {
    solutions: {
      title: 'Risinājumi, kas darbojas',
      text: 'Pārbaudītas tehnoloģijas ar reālu ietekmi.',
    },
    innovations: {
      title: 'Pierobeža ar pierādījumiem',
      text: 'Laboratorijas un izmēģinājumi pret planētas mēroga problēmām — un mīti, kas tur neder.',
    },
    maps: {
      title: 'Karte rīcībai',
      text: 'Atlants ar avotiem: konflikti, Zemes sistēmas un politiskā pasaule.',
    },
    law: {
      title: 'Tiesības nākotnei',
      text: 'Spēkā esoši noteikumi, izskatīšanā esoši projekti un idejas, kas vēl nav likums.',
    },
    wildlife: {
      title: 'Savvaļas daba ir svarīga',
      text: 'Sugu un dzīvotņu aizsardzība ir mūsu kopīgais pienākums.',
    },
  },
  solutionsPage: {
    metaTitle: 'Risinājumi — Fix Planet',
    metaDescription:
      'Kartītes «problēma → tehnoloģija»: ūdens, meži, atkritumi, pilsētas, materiāli, okeāni un enerģija.',
    eyebrow: 'Problēma → Risinājums',
    title: 'Risinājumi',
    lead: 'Katra karte savieno planētas problēmu ar tehnoloģiju, kas jau darbojas. Filtrē pēc tēmas un dodies pie pierādījumiem.',
    filterAria: 'Filtrēt risinājumus pēc tēmas',
    chooseTopic: 'Izvēlies tēmu',
    all: 'Visi',
    allKey: 'all',
    problem: 'Problēma',
    fix: 'Risinājums',
    explore: 'Skatīt risinājumu →',
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
      water: 'Apūdeņošana un mitrāji, kas jau tīra un taupa ūdeni.',
      forests: 'Mežsaimniecība, kas atstāj mežus stāvus.',
      waste: 'Organiskie atkritumi enerģijā un noderīgā materiālā.',
      cities: 'Vēsāki jumti un ielas, kas samazina pilsētas karstumu.',
      materials: 'Cements ar mazāku oglekli un citi būvmateriāli.',
      oceans: 'Plastmasa un atkritumi — noķert pirms jūras.',
      energy: 'Tīra enerģija, kas jau darbojas kopienu mērogā.',
    },
  },
  wildlifePage: {
    metaTitle: 'Savvaļa — Fix Planet',
    metaDescription:
      'Enciklopēdija par to, kā dzīvnieku populācijas mainījās pēc mūsdienu cilvēka izplatīšanās: izdzīvojušās, apdraudētās un izmirstās sugas, ar karti, kad cilvēki sasniedza katru kontinentu.',
    eyebrow: 'Enciklopēdija',
    title: 'Savvaļa',
    lead: 'Vispirms mūsu suga — kur tā radās, kur gāja un kā mainījās lielākie dzīvnieki pēc tam, kad ienācām kā jauns plēsējs.',
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
    tabsAria: 'Filtrēt sugas pēc statusa',
    chooseStatus: 'Izvēlies statusu',
    surviving: 'Izdzīvojušie',
    endangered: 'Apdraudētie',
    extinct: 'Izmirušie',
    tiles: {
      surviving: 'Joprojām šeit: areāls vai skaits pārbīdījās pēc cilvēku izplatīšanās.',
      endangered: 'Apdraudēti tagad — galvenokārt cilvēku dēļ.',
      extinct: 'Izzuduši. Lielākā daļa karšu ir skaidri cilvēku izraisītas.',
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
    iucn: {
      EX: 'Izmiris',
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
    lead: 'Praktiski veidi, kā dziedēt sistēmas, no kurām esam atkarīgi, — savākti, savienoti ar pierādījumiem un turēti godīgi.',
    p1: 'Fix Planet vāc praktiskus veidus, kā dziedēt sistēmas, no kurām esam atkarīgi: ūdeni, mežus, enerģiju, atkritumus, savvaļas dabu un noteikumus, kas tos sargā.',
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
      'Risinājumi, kas jau pastāv, ne saukļi',
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
    metaTitle: 'Atbalstīt — Fix Planet',
    metaDescription:
      'Atbalsti Fix Planet, kad ziedojumi būs atvērti. Šajā lapā vēl nav norēķinu.',
    title: 'Atbalsti Fix Planet',
    lead: 'Fix Planet ir dzīvais atlants. Kad ziedojumi būs atvērti, tie palīdzēs turēt atlantu atvērtu un neatkarīgu.',
    useHeading: 'Kur ies atbalsts',
    use: 'Pētījumu laiks, hostings, atklāti licencētas kartes, tulkojumi un bezmaksas enciklopēdija. Ne reklāmas. Ne politiska kampaņa.',
    statusHeading: 'Maksājumi vēl nav atvērti',
    status:
      'Šajā lapā nav kases. Stripe, PayPal un Link vēl nav pieslēgti. Kad būs īsts procesors, šī lapa tevi tur aizvedīs.',
    thanks: 'Līdz tam vari palīdzēt, daloties ar atlantu un grāmatu.',
  },
  footer: {
    blurb:
      'Dzīvais atlants tehnoloģijām, kas labo planētu. Skaidras problēmas, risinājumi, kas darbojas, īsti pierādījumi.',
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
