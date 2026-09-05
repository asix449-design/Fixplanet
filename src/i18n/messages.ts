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
    maps: 'Maps',
    law: 'Law',
    wildlife: 'Wildlife',
    forests: 'Forests',
    book: 'Book',
    about: 'About',
  },
  home: {
    heroAria: 'Introduction',
    heroTitle: 'Problems. Fixes. Proof.',
    heroLead:
      'A living atlas of technologies that repair the planet — clear problems, working solutions, real evidence.',
    heroAlt: 'Sunlit meadow bordered by trees under a clear sky',
    browseSolutions: 'Browse solutions',
    readBook: 'Read the book',
    latest: 'Latest solutions',
    latestHeading: 'Real solutions. Measurable impact.',
    viewAll: 'View all solutions →',
    featuresAria: 'What Fix Planet covers',
  },
  features: {
    solutions: {
      title: 'Solutions that work',
      text: 'Proven technologies with real-world impact.',
    },
    maps: {
      title: 'Mapped for action',
      text: 'Explore solutions and projects around the world.',
    },
    law: {
      title: 'Law for the future',
      text: 'Legal frameworks to protect people and planet.',
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
  },
  wildlifePage: {
    metaTitle: 'Wildlife — Fix Planet',
    metaDescription:
      'An encyclopedia of how animal populations changed after modern humans spread: surviving, endangered, and extinct species of the last 20,000 years.',
    eyebrow: 'Encyclopedia',
    title: 'Wildlife',
    lead: 'Our species first, then the animals whose numbers and ranges shifted under human pressure in the Late Pleistocene and Holocene.',
    heroEyebrow: 'Our species',
    appearedLabel: 'Appeared',
    appeared:
      'About 300,000 years ago in Africa. Fossils from Jebel Irhoud, Morocco, date to around 315,000 years; genetic and fossil work places the origin of Homo sapiens on that continent at about 300,000 years. This is the species origin — not the start of the lists below.',
    populationLabel: 'Population today',
    population:
      'About 8.2 billion people in 2025 (United Nations, World Population Prospects 2024, medium variant). The same revision put the mid-2024 world total at 8.2 billion. It is an official estimate, not a census of every person.',
    framing:
      'The rest of this tab is about how other animals changed after modern humans became a widespread pressure on large fauna. The lists use the last ~20,000 years — Late Pleistocene into the Holocene — not the 300,000-year origin of our species.',
    imageAlt:
      'A modern adult human standing in a meadow, a respectful naturalistic figure representing Homo sapiens — not a portrait of a named person',
    scientificName: 'Homo sapiens',
    tabsAria: 'Filter species by status',
    surviving: 'Surviving',
    endangered: 'Endangered',
    extinct: 'Extinct',
    survivingLead:
      'Still here, with ranges or numbers that shifted under human pressure since about 20,000 years ago — hunting, farms, later recovery, or boom.',
    endangeredLead:
      'Threatened now, mainly because of people: habitat loss, hunting, bycatch, and a climate we have changed.',
    extinctLead:
      'Gone. Most entries are clearly human-caused. A few Late Pleistocene megafauna include climate as a second, honestly stated cause.',
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
    forests: {
      title: 'Forests',
      metaTitle: 'Forests — Fix Planet',
      metaDescription: 'Forest solutions and evidence — coming soon.',
      summary:
        'Forest solutions and evidence will be gathered here. This section is not published yet.',
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
    maps: 'Карты',
    law: 'Право',
    wildlife: 'Природа',
    forests: 'Леса',
    book: 'Книга',
    about: 'О проекте',
  },
  home: {
    heroAria: 'Введение',
    heroTitle: 'Проблемы. Решения. Доказательства.',
    heroLead:
      'Живой атлас технологий, которые восстанавливают планету, — ясные проблемы, работающие решения, реальные доказательства.',
    heroAlt: 'Солнечный луг у кромки леса под ясным небом',
    browseSolutions: 'Смотреть решения',
    readBook: 'Читать книгу',
    latest: 'Новые решения',
    latestHeading: 'Реальные решения. Измеримый результат.',
    viewAll: 'Все решения →',
    featuresAria: 'О чём Fix Planet',
  },
  features: {
    solutions: {
      title: 'Решения, которые работают',
      text: 'Проверенные технологии с реальным эффектом.',
    },
    maps: {
      title: 'Карта для действий',
      text: 'Решения и проекты по всему миру.',
    },
    law: {
      title: 'Право будущего',
      text: 'Правовые рамки для защиты людей и планеты.',
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
  },
  wildlifePage: {
    metaTitle: 'Природа — Fix Planet',
    metaDescription:
      'Энциклопедия того, как изменились популяции животных после расселения современного человека: выжившие, находящиеся под угрозой и вымершие виды последних 20 000 лет.',
    eyebrow: 'Энциклопедия',
    title: 'Природа',
    lead: 'Сначала наш вид, затем животные, чья численность и ареал сдвинулись под давлением людей в позднем плейстоцене и голоцене.',
    heroEyebrow: 'Наш вид',
    appearedLabel: 'Появился',
    appeared:
      'Около 300 000 лет назад в Африке. Находки из Джебель-Ирхуда в Марокко датируют примерно 315 000 лет; генетика и палеонтология помещают происхождение Homo sapiens на этот континент около 300 000 лет. Это происхождение вида — не начало списков ниже.',
    populationLabel: 'Численность сегодня',
    population:
      'Около 8,2 миллиарда человек в 2025 году (ООН, World Population Prospects 2024, средний вариант). Та же ревизия давала 8,2 миллиарда на середину 2024-го. Это официальная оценка, а не перепись каждого человека.',
    framing:
      'Дальше речь о том, как изменились другие животные, когда современный человек стал широким давлением на крупную фауну. Списки берут последние ~20 000 лет — поздний плейстоцен и голоцен — а не 300 000 лет происхождения нашего вида.',
    imageAlt:
      'Современный взрослый человек на лугу — спокойная натуралистичная фигура Homo sapiens, не портрет конкретного человека',
    scientificName: 'Homo sapiens',
    tabsAria: 'Фильтр видов по статусу',
    surviving: 'Выжившие',
    endangered: 'Под угрозой',
    extinct: 'Вымершие',
    survivingLead:
      'Всё ещё здесь, с ареалом или численностью, которые сдвинулись под давлением людей примерно за 20 000 лет — охота, пашня, позднее восстановление или вспышка.',
    endangeredLead:
      'Под угрозой сейчас, главным образом из-за людей: потеря мест, охота, прилов и климат, который мы изменили.',
    extinctLead:
      'Исчезли. Большинство карточек — явно по вине людей. У нескольких представителей мегафауны позднего плейстоцена климат назван вторым, честно оговорённым фактором.',
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
    forests: {
      title: 'Леса',
      metaTitle: 'Леса — Fix Planet',
      metaDescription: 'Лесные решения и доказательства — скоро.',
      summary:
        'Здесь будут собраны лесные решения и доказательства. Раздел ещё не опубликован.',
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
    maps: 'Mapy',
    law: 'Prawo',
    wildlife: 'Przyroda',
    forests: 'Lasy',
    book: 'Książka',
    about: 'O projekcie',
  },
  home: {
    heroAria: 'Wprowadzenie',
    heroTitle: 'Problemy. Rozwiązania. Dowody.',
    heroLead:
      'Żywy atlas technologii, które naprawiają planetę — jasne problemy, działające rozwiązania, realne dowody.',
    heroAlt: 'Słoneczna łąka przy skraju lasu pod bezchmurnym niebem',
    browseSolutions: 'Przeglądaj rozwiązania',
    readBook: 'Czytaj książkę',
    latest: 'Najnowsze rozwiązania',
    latestHeading: 'Realne rozwiązania. Mierzalny efekt.',
    viewAll: 'Wszystkie rozwiązania →',
    featuresAria: 'Co obejmuje Fix Planet',
  },
  features: {
    solutions: {
      title: 'Rozwiązania, które działają',
      text: 'Sprawdzone technologie z realnym skutkiem.',
    },
    maps: {
      title: 'Mapa do działania',
      text: 'Rozwiązania i projekty na całym świecie.',
    },
    law: {
      title: 'Prawo dla przyszłości',
      text: 'Ramy prawne chroniące ludzi i planetę.',
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
  },
  wildlifePage: {
    metaTitle: 'Przyroda — Fix Planet',
    metaDescription:
      'Encyklopedia tego, jak zmieniły się populacje zwierząt po rozprzestrzenieniu się współczesnego człowieka: gatunki, które przetrwały, zagrożone i wymarłe z ostatnich 20 000 lat.',
    eyebrow: 'Encyklopedia',
    title: 'Przyroda',
    lead: 'Najpierw nasz gatunek, potem zwierzęta, których liczebność i zasięg przesunęły się pod presją ludzi w późnym plejstocenie i holocenie.',
    heroEyebrow: 'Nasz gatunek',
    appearedLabel: 'Pojawił się',
    appeared:
      'Około 300 000 lat temu w Afryce. Skamieniałości z Dżabal Irhud w Maroku datuje się na około 315 000 lat; genetyka i paleontologia umieszczają pochodzenie Homo sapiens na tym kontynencie około 300 000 lat. To pochodzenie gatunku — nie początek list poniżej.',
    populationLabel: 'Populacja dziś',
    population:
      'Około 8,2 miliarda ludzi w 2025 roku (ONZ, World Population Prospects 2024, wariant średni). Ta sama rewizja podała 8,2 miliarda w połowie 2024. To oficjalny szacunek, nie spis każdej osoby.',
    framing:
      'Reszta tej części jest o tym, jak zmieniły się inne zwierzęta, gdy współczesny człowiek stał się szeroką presją na wielką faunę. Listy biorą ostatnie ~20 000 lat — późny plejstocen i holocen — nie 300 000 lat pochodzenia naszego gatunku.',
    imageAlt:
      'Współczesny dorosły człowiek na łące — spokojna, naturalistyczna figura Homo sapiens, nie portret konkretnej osoby',
    scientificName: 'Homo sapiens',
    tabsAria: 'Filtruj gatunki według statusu',
    surviving: 'Przetrwałe',
    endangered: 'Zagrożone',
    extinct: 'Wymarłe',
    survivingLead:
      'Wciąż tu są, z zasięgiem lub liczebnością, które przesunęły się pod presją ludzi od około 20 000 lat — polowania, uprawa, późniejsza odbudowa albo wzrost.',
    endangeredLead:
      'Zagrożone teraz, głównie przez ludzi: utrata siedlisk, polowania, przyłów i klimat, który zmieniliśmy.',
    extinctLead:
      'Zniknęły. Większość kart ma jasną przyczynę ludzką. Przy kilku przedstawicielach megafauny późnego plejstocenu klimat jest drugim, uczciwie nazwanym czynnikiem.',
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
    forests: {
      title: 'Lasy',
      metaTitle: 'Lasy — Fix Planet',
      metaDescription: 'Leśne rozwiązania i dowody — wkrótce.',
      summary:
        'Tutaj zbierzemy leśne rozwiązania i dowody. Ta część nie jest jeszcze opublikowana.',
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
    maps: 'Kartes',
    law: 'Tiesības',
    wildlife: 'Savvaļa',
    forests: 'Meži',
    book: 'Grāmata',
    about: 'Par projektu',
  },
  home: {
    heroAria: 'Ievads',
    heroTitle: 'Problēmas. Risinājumi. Pierādījumi.',
    heroLead:
      'Dzīvais atlants tehnoloģijām, kas labo planētu, — skaidras problēmas, risinājumi, kas darbojas, īsti pierādījumi.',
    heroAlt: 'Saules apspīdēta pļava pie koku joslas zem skaidrām debesīm',
    browseSolutions: 'Skatīt risinājumus',
    readBook: 'Lasīt grāmatu',
    latest: 'Jaunākie risinājumi',
    latestHeading: 'Īsti risinājumi. Izmērāms efekts.',
    viewAll: 'Visi risinājumi →',
    featuresAria: 'Ko aptver Fix Planet',
  },
  features: {
    solutions: {
      title: 'Risinājumi, kas darbojas',
      text: 'Pārbaudītas tehnoloģijas ar reālu ietekmi.',
    },
    maps: {
      title: 'Karte rīcībai',
      text: 'Risinājumi un projekti visā pasaulē.',
    },
    law: {
      title: 'Tiesības nākotnei',
      text: 'Tiesiskais ietvars cilvēku un planētas aizsardzībai.',
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
  },
  wildlifePage: {
    metaTitle: 'Savvaļa — Fix Planet',
    metaDescription:
      'Enciklopēdija par to, kā dzīvnieku populācijas mainījās pēc mūsdienu cilvēka izplatīšanās: izdzīvojušās, apdraudētās un izmirstās sugas pēdējos 20 000 gados.',
    eyebrow: 'Enciklopēdija',
    title: 'Savvaļa',
    lead: 'Vispirms mūsu suga, tad dzīvnieki, kuru skaits un areāls pārbīdījās cilvēku spiediena dēļ vēlajā pleistocēnā un holocēnā.',
    heroEyebrow: 'Mūsu suga',
    appearedLabel: 'Parādījās',
    appeared:
      'Ap 300 000 gadiem Āfrikā. Fosīlijas no Džebel Irhūdas Marokā datē ap 315 000 gadiem; ģenētika un paleontoloģija Homo sapiens izcelsmi liek šajā kontinentā ap 300 000 gadiem. Tā ir sugas izcelsme — ne zemāk esošo sarakstu sākums.',
    populationLabel: 'Skaits šodien',
    population:
      'Ap 8,2 miljardiem cilvēku 2025. gadā (ANO, World Population Prospects 2024, vidējais variants). Tā pati revīzija 2024. gada vidum deva 8,2 miljardus. Tas ir oficiāls vērtējums, ne katra cilvēka skaitīšana.',
    framing:
      'Tālāk šī cilne ir par to, kā citi dzīvnieki mainījās, kad mūsdienu cilvēks kļuva par plašu spiedienu uz lielo faunu. Saraksti ņem pēdējos ~20 000 gadus — vēlo pleistocēnu un holocēnu —, ne 300 000 gadus mūsu sugas izcelsmes.',
    imageAlt:
      'Mūsdienu pieaugušais cilvēks pļavā — mierīga, naturālistiska Homo sapiens figūra, ne konkrētas personas portrets',
    scientificName: 'Homo sapiens',
    tabsAria: 'Filtrēt sugas pēc statusa',
    surviving: 'Izdzīvojušie',
    endangered: 'Apdraudētie',
    extinct: 'Izmirušie',
    survivingLead:
      'Joprojām šeit, ar areālu vai skaitu, kas pārbīdījās cilvēku spiediena dēļ kopš ap 20 000 gadiem — medības, tīrumi, vēlāka atjaunošanās vai uzplaukums.',
    endangeredLead:
      'Apdraudēti tagad, galvenokārt cilvēku dēļ: dzīvotņu zudums, medības, piezveja un klimats, ko esam mainījuši.',
    extinctLead:
      'Izzuduši. Lielākā daļa karšu ir skaidri cilvēku izraisītas. Dažiem vēlā pleistocēna megafaunas pārstāvjiem klimats ir otrs, godīgi nosaukts cēlonis.',
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
    forests: {
      title: 'Meži',
      metaTitle: 'Meži — Fix Planet',
      metaDescription: 'Meža risinājumi un pierādījumi — drīzumā.',
      summary:
        'Šeit tiks savākti meža risinājumi un pierādījumi. Šī sadaļa vēl nav publicēta.',
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
