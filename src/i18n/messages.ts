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
    wildlife: {
      title: 'Wildlife',
      metaTitle: 'Wildlife — Fix Planet',
      metaDescription: 'Protecting species and habitats — coming soon.',
      summary:
        'Coverage of species and habitats will appear here. This section is not published yet.',
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
    wildlife: {
      title: 'Природа',
      metaTitle: 'Природа — Fix Planet',
      metaDescription: 'Защита видов и мест обитания — скоро.',
      summary:
        'Материалы о видах и местах обитания появятся здесь. Раздел ещё не опубликован.',
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
    wildlife: {
      title: 'Przyroda',
      metaTitle: 'Przyroda — Fix Planet',
      metaDescription: 'Ochrona gatunków i siedlisk — wkrótce.',
      summary:
        'Materiały o gatunkach i siedliskach pojawią się tutaj. Ta część nie jest jeszcze opublikowana.',
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
    wildlife: {
      title: 'Savvaļa',
      metaTitle: 'Savvaļa — Fix Planet',
      metaDescription: 'Sugu un dzīvotņu aizsardzība — drīzumā.',
      summary:
        'Materiāli par sugām un dzīvotnēm parādīsies šeit. Šī sadaļa vēl nav publicēta.',
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
