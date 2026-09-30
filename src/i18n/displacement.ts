import type { Locale } from './config';
import {
  displacementCrisisNames,
  displacementInside,
  displacementPlaces,
} from './displacement-places';

export type DisplacementDef = { title: string; body: string };

export type DisplacementPage = {
  title: string;
  lead: string;
  mapLabel: string;
  legendTitle: string;
  crisesTitle: string;
  showLegend: string;
  hideLegend: string;
  loading: string;
  mapFailed: string;
  dataFailed: string;
  cause: string;
  started: string;
  startUnverified: string;
  flows: string;
  otherFigures: string;
  approximate: string;
  source: string;
  asOf: string;
  anotherSource: string;
  thicknessTitle: string;
  thicknessNote: string;
  ringTitle: string;
  ringNote: string;
  arrowTitle: string;
  arrowNote: string;
  movementsNote: string;
  sourcesLink: string;
  fromTo: string;
  insideCount: string;
  insideOrigin: string;
  partRefugees: string;
  partAsylum: string;
  partOther: string;
  partSeparate: string;
  contextMovements: string;
  contextReturns: string;
  contextWorldwide: string;
  contextDroughtSum: string;
  contextRohingya: string;
  groups: Record<string, string>;
  sourceNames: Record<string, string>;
  places: ReturnType<typeof displacementPlaces>;
  inside: Record<string, string>;
  crises: Record<string, string>;
  sourcesTitle: string;
  sourcesLead: string;
  defTitle: string;
  defs: DisplacementDef[];
  creditsTitle: string;
  creditsLead: string;
  osmCredit: string;
  listTitle: string;
  licenceBy: string;
  licenceIgo: string;
  licencePage: string;
  licenceOdbl: string;
  pillBy: string;
  pillIgo: string;
  termsLabel: string;
  deedLabel: string;
  openSource: string;
  watchTitle: string;
  watchPlay: string;
  watchPrivacy: string;
  watchOpen: string;
  watchReport: string;
  watchLength: string;
  watchLanguage: string;
  watchChannel: string;
  watchScopeLaterFloods: string;
  watchScopeWholeCountry: string;
  watchScopeSomalia: string;
  videosTitle: string;
  videosLead: string;
  licenceYoutube: string;
  licenceCcBy: string;
};

const groups: Record<Locale, Record<string, string>> = {
  en: {
    internally_displaced: 'Internally displaced',
    refugees_and_asylum_seekers: 'Refugees and asylum-seekers',
    refugees_asylum_seekers_and_others_in_need_of_international_protection:
      'Refugees, asylum-seekers and other people in need of international protection',
    new_displacements_movements_during_year: 'Displacements during the year',
    new_displacements_movements_caused_by_floods: 'Displacements caused by floods',
    new_displacements_movements_caused_by_drought: 'Displacements caused by drought',
    internally_displaced_by_flood_event_at_year_end:
      'People still displaced by floods at year end',
    palestine_refugees_under_UNRWA_mandate_internally_displaced:
      'Palestine refugees under the mandate of the United Nations Relief and Works Agency for Palestine Refugees in the Near East who are internally displaced',
  },
  ru: {
    internally_displaced: 'Внутренне перемещённые',
    refugees_and_asylum_seekers: 'Беженцы и лица, ищущие убежища',
    refugees_asylum_seekers_and_others_in_need_of_international_protection:
      'Беженцы, лица, ищущие убежища, и другие лица, нуждающиеся в международной защите',
    new_displacements_movements_during_year: 'Случаи перемещения в течение года',
    new_displacements_movements_caused_by_floods: 'Случаи перемещения из-за наводнений',
    new_displacements_movements_caused_by_drought: 'Случаи перемещения из-за засухи',
    internally_displaced_by_flood_event_at_year_end:
      'Люди, остававшиеся перемещёнными из-за наводнений на конец года',
    palestine_refugees_under_UNRWA_mandate_internally_displaced:
      'Палестинские беженцы под мандатом Ближневосточного агентства Организации Объединённых Наций для помощи палестинским беженцам и организации работ, находящиеся во внутреннем перемещении',
  },
  pl: {
    internally_displaced: 'Osoby wewnętrznie przesiedlone',
    refugees_and_asylum_seekers: 'Uchodźcy i osoby ubiegające się o azyl',
    refugees_asylum_seekers_and_others_in_need_of_international_protection:
      'Uchodźcy, osoby ubiegające się o azyl i inne osoby potrzebujące ochrony międzynarodowej',
    new_displacements_movements_during_year: 'Przypadki przemieszczenia w ciągu roku',
    new_displacements_movements_caused_by_floods: 'Przypadki przemieszczenia z powodu powodzi',
    new_displacements_movements_caused_by_drought: 'Przypadki przemieszczenia z powodu suszy',
    internally_displaced_by_flood_event_at_year_end:
      'Osoby nadal przesiedlone z powodu powodzi na koniec roku',
    palestine_refugees_under_UNRWA_mandate_internally_displaced:
      'Uchodźcy palestyńscy pod mandatem Agencji Narodów Zjednoczonych do spraw Pomocy Uchodźcom Palestyńskim na Bliskim Wschodzie, żyjący na wewnętrznym przesiedleniu',
  },
  lv: {
    internally_displaced: 'Iekšēji pārvietotie',
    refugees_and_asylum_seekers: 'Bēgļi un patvēruma meklētāji',
    refugees_asylum_seekers_and_others_in_need_of_international_protection:
      'Bēgļi, patvēruma meklētāji un citas personas, kurām nepieciešama starptautiskā aizsardzība',
    new_displacements_movements_during_year: 'Pārvietošanās gadījumi gada laikā',
    new_displacements_movements_caused_by_floods: 'Pārvietošanās gadījumi plūdu dēļ',
    new_displacements_movements_caused_by_drought: 'Pārvietošanās gadījumi sausuma dēļ',
    internally_displaced_by_flood_event_at_year_end:
      'Cilvēki, kas gada beigās joprojām bija pārvietoti plūdu dēļ',
    palestine_refugees_under_UNRWA_mandate_internally_displaced:
      'Palestīnas bēgļi Apvienoto Nāciju Palīdzības un darba aģentūras Palestīnas bēgļiem Tuvajos Austrumos pilnvarojumā, kas dzīvo iekšējā pārvietošanā',
  },
};

const sourceNames: Record<Locale, Record<string, string>> = {
  en: {
    unhcr_api:
      'United Nations High Commissioner for Refugees, Refugee Population Statistics Database',
    unhcr_gt: 'United Nations High Commissioner for Refugees, Global Trends',
    unhcr_methodology: 'United Nations High Commissioner for Refugees, methodology notes',
    unhcr_web_sudan: 'United Nations High Commissioner for Refugees',
    unhcr_web_syria: 'United Nations High Commissioner for Refugees',
    unhcr_web_ukraine: 'United Nations High Commissioner for Refugees',
    unhcr_web_rohingya: 'United Nations High Commissioner for Refugees',
    idmc_hdx: 'Internal Displacement Monitoring Centre',
    idmc_hdx_pak: 'Internal Displacement Monitoring Centre',
    idmc_hdx_som: 'Internal Displacement Monitoring Centre',
    idmc_hdx_eth: 'Internal Displacement Monitoring Centre',
    idmc_hdx_ken: 'Internal Displacement Monitoring Centre',
  },
  ru: {
    unhcr_api:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев',
    unhcr_gt:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев, обзор мировых тенденций',
    unhcr_methodology:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев, заметки о методе',
    unhcr_web_sudan:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев',
    unhcr_web_syria:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев',
    unhcr_web_ukraine:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев',
    unhcr_web_rohingya:
      'Управление Верховного комиссара Организации Объединённых Наций по делам беженцев',
    idmc_hdx: 'Центр мониторинга внутренних перемещений',
    idmc_hdx_pak: 'Центр мониторинга внутренних перемещений',
    idmc_hdx_som: 'Центр мониторинга внутренних перемещений',
    idmc_hdx_eth: 'Центр мониторинга внутренних перемещений',
    idmc_hdx_ken: 'Центр мониторинга внутренних перемещений',
  },
  pl: {
    unhcr_api: 'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców',
    unhcr_gt: 'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców, przegląd trendów światowych',
    unhcr_methodology:
      'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców, uwagi o metodzie',
    unhcr_web_sudan: 'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców',
    unhcr_web_syria: 'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców',
    unhcr_web_ukraine: 'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców',
    unhcr_web_rohingya: 'Wysoki Komisarz Narodów Zjednoczonych do spraw Uchodźców',
    idmc_hdx: 'Centrum Monitorowania Wewnętrznych Przesiedleń',
    idmc_hdx_pak: 'Centrum Monitorowania Wewnętrznych Przesiedleń',
    idmc_hdx_som: 'Centrum Monitorowania Wewnętrznych Przesiedleń',
    idmc_hdx_eth: 'Centrum Monitorowania Wewnętrznych Przesiedleń',
    idmc_hdx_ken: 'Centrum Monitorowania Wewnętrznych Przesiedleń',
  },
  lv: {
    unhcr_api: 'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs',
    unhcr_gt:
      'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs, pasaules tendenču pārskats',
    unhcr_methodology:
      'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs, piezīmes par metodi',
    unhcr_web_sudan: 'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs',
    unhcr_web_syria: 'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs',
    unhcr_web_ukraine: 'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs',
    unhcr_web_rohingya: 'Apvienoto Nāciju Organizācijas Augstā komisāra bēgļu jautājumos birojs',
    idmc_hdx: 'Iekšējās pārvietošanas uzraudzības centrs',
    idmc_hdx_pak: 'Iekšējās pārvietošanas uzraudzības centrs',
    idmc_hdx_som: 'Iekšējās pārvietošanas uzraudzības centrs',
    idmc_hdx_eth: 'Iekšējās pārvietošanas uzraudzības centrs',
    idmc_hdx_ken: 'Iekšējās pārvietošanas uzraudzības centrs',
  },
};

const page: Record<Locale, Omit<DisplacementPage, 'places' | 'inside' | 'crises' | 'groups' | 'sourceNames'>> = {
  en: {
    title: 'Forced displacement: causes and flows',
    lead: 'Each crisis has a point for its cause and lines toward the places where people from that crisis were counted. A thicker line is a larger count. Each arrow is an approximate direction, with the count and the date.',
    mapLabel: 'Globe of forced displacement, causes and flows',
    legendTitle: 'Legend',
    crisesTitle: 'Crises',
    showLegend: 'Legend',
    hideLegend: 'Hide legend',
    loading: 'Loading the globe',
    mapFailed: 'The globe could not be loaded.',
    dataFailed: 'The crisis file could not be loaded.',
    cause: 'Cause',
    started: 'Started',
    startUnverified: 'Start date not verified',
    flows: 'Counts',
    otherFigures: 'Other dated figures',
    approximate: 'Approximate direction',
    source: 'Source',
    asOf: 'As of {date}',
    anotherSource: 'Another source, {source}, {date}: {count}',
    thicknessTitle: 'Line thickness',
    thicknessNote:
      'Line thickness follows the count. The three samples are the smallest arrow count, a middle count, and the largest arrow count on this map.',
    ringTitle: 'Ring',
    ringNote:
      'A ring marks a count inside the country. People on a date and displacements during a year each keep their own ring. Arrows are for people counted in another country.',
    arrowTitle: 'Arrow',
    arrowNote: 'An arrow is an approximate direction toward the country where people were counted.',
    movementsNote: 'Repeated moves by the same person are counted each time.',
    sourcesLink: 'Sources, definitions and licences',
    fromTo: '{count} from {from} to {to}',
    insideCount: '{count}, {place}',
    insideOrigin: '{count}, {origin}, {place}',
    partRefugees: 'Refugees',
    partAsylum: 'Asylum-seekers',
    partOther: 'Other people in need of international protection',
    partSeparate: 'Other people listed beside this count',
    contextMovements: 'Displacements during {year}',
    contextReturns: 'People recorded as returned during {year}',
    contextWorldwide:
      'People from Venezuela counted worldwide as refugees, asylum-seekers, or other people in need of international protection',
    contextDroughtSum: 'Sum of the three 2022 drought counts',
    contextRohingya: 'Registered Rohingya refugees in Bangladesh',
    sourcesTitle: 'Sources, definitions and licences',
    sourcesLead:
      'How this globe counts people, which databases the figures come from, and the licences those databases carry.',
    defTitle: 'Definitions',
    defs: [
      {
        title: 'People outside their country',
        body: 'A person outside their own country is counted in one group: recognised refugees, people seeking asylum, or other people in need of international protection. The arrow count is the sum of the groups named on that line.',
      },
      {
        title: 'People still inside their country',
        body: 'Internally displaced people have left their homes and are still inside their own country on the date given. On the globe they are a ring, with the count and the date beside them.',
      },
      {
        title: 'A count of people on a date',
        body: 'A count of people is the number in a group on a stated date. For most arrows that date is the end of 2025. The card prints the date next to each count.',
      },
      {
        title: 'Displacements during a year',
        body: 'A displacement count records moves during a year. The same person can be counted more than once. That count stays on its own line, with its own date, beside the count of people.',
      },
      {
        title: 'Arrows',
        body: 'An arrow starts at the cause point and ends at an approximate country centre, or at a capital for a very large country. The line is an approximate direction. The label carries who was counted, where, how many, and the date.',
      },
      {
        title: 'Start dates',
        body: 'A start date appears when a named source confirms it. Ukraine is confirmed as February 2022. When a start date is not confirmed, the card says “Start date not verified” and leaves the date blank.',
      },
      {
        title: 'Venezuela',
        body: 'The sources used for Venezuela leave the cause open. The card uses the wording “Other or not yet classified”. The point uses the same red as conflict.',
      },
    ],
    creditsTitle: 'Credits and licences',
    creditsLead:
      'Fix Planet drew this map. The figures are cited to the databases named here.',
    osmCredit:
      'Coordinates on this map are approximate country centres and capitals. Map data: OpenStreetMap contributors.',
    listTitle: 'Numbered sources',
    licenceBy: 'Creative Commons Attribution 4.0 International',
    licenceIgo: 'Creative Commons Attribution 3.0 IGO',
    licencePage: 'The page belongs to the publisher. The card cites the figure and the date.',
    licenceOdbl: 'Open Database Licence',
    pillBy: 'CC BY 4.0',
    pillIgo: 'CC BY-IGO',
    termsLabel: 'Terms of use for the datasets',
    deedLabel: 'Licence deed',
    openSource: 'Open the source',
    watchTitle: 'Watch',
    watchPlay: 'Watch a short video',
    watchPrivacy: 'YouTube loads when you press this button.',
    watchOpen: 'Open on YouTube',
    watchReport: 'Watch report (Al Jazeera)',
    watchLength: 'Length {duration}',
    watchLanguage: 'The video is in English and comes from the publisher\'s own channel.',
    watchChannel: 'It comes from the publisher\'s own channel.',
    watchScopeLaterFloods: 'This is a later report on floods in Pakistan.',
    watchScopeWholeCountry: 'The report covers Colombia as a whole.',
    watchScopeSomalia: 'The report covers Somalia.',
    videosTitle: 'Videos',
    videosLead:
      'Short videos from the crisis cards. Each one is on the publisher\'s own channel.',
    licenceYoutube: 'Standard YouTube licence',
    licenceCcBy: 'Creative Commons Attribution',
  },
  ru: {
    title: 'Вынужденное перемещение: причины и направления',
    lead: 'У каждого кризиса есть точка причины и линии к местам, где учтены люди из этого кризиса. Чем толще линия, тем больше число. Каждая стрелка показывает приблизительное направление, число и дату.',
    mapLabel: 'Глобус вынужденного перемещения: причины и направления',
    legendTitle: 'Легенда',
    crisesTitle: 'Кризисы',
    showLegend: 'Легенда',
    hideLegend: 'Скрыть легенду',
    loading: 'Глобус загружается',
    mapFailed: 'Глобус не загрузился.',
    dataFailed: 'Файл с данными о кризисах не загрузился.',
    cause: 'Причина',
    started: 'Начало',
    startUnverified: 'Дата начала не подтверждена',
    flows: 'Числа',
    otherFigures: 'Другие числа с датой',
    approximate: 'Приблизительное направление',
    source: 'Источник',
    asOf: 'По состоянию на {date}',
    anotherSource: 'Другой источник, {source}, {date}: {count}',
    thicknessTitle: 'Толщина линии',
    thicknessNote:
      'Толщина линии зависит от числа. Три образца: наименьшее число на стрелке, среднее и наибольшее на этой карте.',
    ringTitle: 'Кольцо',
    ringNote:
      'Кольцо отмечает число внутри страны. Число людей на дату и число случаев перемещения за год стоят отдельными кольцами. Стрелки ведут к людям, учтённым в другой стране.',
    arrowTitle: 'Стрелка',
    arrowNote: 'Стрелка показывает приблизительное направление к стране, где людей учли.',
    movementsNote: 'Повторные перемещения одного человека учитываются каждый раз.',
    sourcesLink: 'Источники, определения и лицензии',
    fromTo: '{count} из {from} в {to}',
    insideCount: '{count}, {place}',
    insideOrigin: '{count}, {origin}, {place}',
    partRefugees: 'Беженцы',
    partAsylum: 'Лица, ищущие убежища',
    partOther: 'Другие лица, нуждающиеся в международной защите',
    partSeparate: 'Другие люди, указанные рядом с этим числом',
    contextMovements: 'Случаи перемещения в {year} году',
    contextReturns: 'Люди, учтённые как вернувшиеся в {year} году',
    contextWorldwide:
      'Люди из Венесуэлы, учтённые по всему миру как беженцы, лица, ищущие убежища, или другие лица, нуждающиеся в международной защите',
    contextDroughtSum: 'Сумма трёх подсчётов засухи за 2022 год',
    contextRohingya: 'Зарегистрированные беженцы рохинджа в Бангладеш',
    sourcesTitle: 'Источники, определения и лицензии',
    sourcesLead:
      'Как этот глобус считает людей, из каких баз взяты числа и какие лицензии у этих баз.',
    defTitle: 'Определения',
    defs: [
      {
        title: 'Люди за пределами своей страны',
        body: 'Человек за пределами своей страны учтён в одной группе: признанные беженцы, лица, ищущие убежища, или другие лица, нуждающиеся в международной защите. Число на стрелке складывает группы, названные в этой строке.',
      },
      {
        title: 'Люди, которые остаются внутри своей страны',
        body: 'Внутренне перемещённые люди покинули дом и на указанную дату остаются внутри своей страны. На глобусе это кольцо, рядом число и дата.',
      },
      {
        title: 'Число людей на дату',
        body: 'Число людей: величина группы на названную дату. У большинства стрелок дата приходится на конец 2025 года. Карточка печатает дату рядом с каждым числом.',
      },
      {
        title: 'Случаи перемещения за год',
        body: 'Число случаев перемещения считает переезды в течение года. Один человек может быть учтён несколько раз. Это число стоит отдельной строкой, со своей датой, рядом с числом людей.',
      },
      {
        title: 'Стрелки',
        body: 'Стрелка начинается в точке причины и заканчивается в приблизительном центре страны или в столице очень большой страны. Линия показывает приблизительное направление. Подпись говорит, кого учли, где, сколько и на какую дату.',
      },
      {
        title: 'Даты начала',
        body: 'Дата начала показана, когда её подтверждает названный источник. Для Украины подтверждён февраль 2022 года. Если дата начала не подтверждена, карточка пишет «Дата начала не подтверждена» и оставляет дату пустой.',
      },
      {
        title: 'Венесуэла',
        body: 'Источники по Венесуэле оставляют причину открытой. Карточка использует формулировку «Иная или ещё не определённая причина». Точка того же красного цвета, что и конфликт.',
      },
    ],
    creditsTitle: 'Указание источников и лицензии',
    creditsLead:
      'Эту карту собрал Fix Planet. Числа указаны по базам, названным здесь.',
    osmCredit:
      'Координаты на этой карте: приблизительные центры стран и столицы. Картографические данные: участники OpenStreetMap.',
    listTitle: 'Нумерованный список источников',
    licenceBy: 'Creative Commons «С указанием авторства» 4.0 Международная',
    licenceIgo: 'Creative Commons «С указанием авторства» 3.0 для межправительственных организаций',
    licencePage: 'Страница принадлежит издателю. Карточка приводит число и дату.',
    licenceOdbl: 'Открытая лицензия баз данных',
    pillBy: 'CC BY 4.0',
    pillIgo: 'CC BY-IGO',
    termsLabel: 'Условия использования наборов данных',
    deedLabel: 'Текст лицензии',
    openSource: 'Открыть источник',
    watchTitle: 'Просмотр',
    watchPlay: 'Смотреть короткое видео',
    watchPrivacy: 'YouTube загружается после нажатия этой кнопки.',
    watchOpen: 'Открыть на YouTube',
    watchReport: 'Смотреть репортаж (Al Jazeera)',
    watchLength: 'Длительность {duration}',
    watchLanguage: 'Видео на английском языке. Оно размещено на собственном канале издателя.',
    watchChannel: 'Видео размещено на собственном канале издателя.',
    watchScopeLaterFloods: 'Это более поздний репортаж о наводнениях в Пакистане.',
    watchScopeWholeCountry: 'Репортаж охватывает Колумбию в целом.',
    watchScopeSomalia: 'Репортаж охватывает Сомали.',
    videosTitle: 'Видео',
    videosLead:
      'Короткие видео из карточек кризисов. Каждое размещено на собственном канале издателя.',
    licenceYoutube: 'Стандартная лицензия YouTube',
    licenceCcBy: 'Creative Commons с указанием авторства',
  },
  pl: {
    title: 'Przymusowe przesiedlenia: przyczyny i kierunki',
    lead: 'Każdy kryzys ma punkt przyczyny i linie do miejsc, w których policzono ludzi z tego kryzysu. Grubsza linia oznacza większą liczbę. Każda strzałka to przybliżony kierunek, z liczbą i datą.',
    mapLabel: 'Globus przymusowych przesiedleń: przyczyny i kierunki',
    legendTitle: 'Legenda',
    crisesTitle: 'Kryzysy',
    showLegend: 'Legenda',
    hideLegend: 'Ukryj legendę',
    loading: 'Globus się wczytuje',
    mapFailed: 'Globusa nie udało się wczytać.',
    dataFailed: 'Pliku z danymi o kryzysach nie udało się wczytać.',
    cause: 'Przyczyna',
    started: 'Początek',
    startUnverified: 'Data początku nie jest potwierdzona',
    flows: 'Liczby',
    otherFigures: 'Inne liczby z datą',
    approximate: 'Przybliżony kierunek',
    source: 'Źródło',
    asOf: 'Stan na {date}',
    anotherSource: 'Inne źródło, {source}, {date}: {count}',
    thicknessTitle: 'Grubość linii',
    thicknessNote:
      'Grubość linii zależy od liczby. Trzy próbki to najmniejsza liczba na strzałce, środkowa i największa na tej mapie.',
    ringTitle: 'Pierścień',
    ringNote:
      'Pierścień oznacza liczbę wewnątrz kraju. Liczba osób na datę i liczba przemieszczeń w ciągu roku mają osobne pierścienie. Strzałki prowadzą do osób policzonych w innym kraju.',
    arrowTitle: 'Strzałka',
    arrowNote: 'Strzałka pokazuje przybliżony kierunek do kraju, w którym osoby policzono.',
    movementsNote: 'Ponowne przemieszczenia tej samej osoby są liczone za każdym razem.',
    sourcesLink: 'Źródła, definicje i licencje',
    fromTo: '{count} z {from} do {to}',
    insideCount: '{count}, {place}',
    insideOrigin: '{count}, {origin}, {place}',
    partRefugees: 'Uchodźcy',
    partAsylum: 'Osoby ubiegające się o azyl',
    partOther: 'Inne osoby potrzebujące ochrony międzynarodowej',
    partSeparate: 'Inne osoby podane obok tej liczby',
    contextMovements: 'Przypadki przemieszczenia w {year} roku',
    contextReturns: 'Osoby odnotowane jako powracające w {year} roku',
    contextWorldwide:
      'Osoby z Wenezueli policzone na świecie jako uchodźcy, osoby ubiegające się o azyl albo inne osoby potrzebujące ochrony międzynarodowej',
    contextDroughtSum: 'Suma trzech liczb suszy za 2022 rok',
    contextRohingya: 'Zarejestrowani uchodźcy rohingja w Bangladeszu',
    sourcesTitle: 'Źródła, definicje i licencje',
    sourcesLead:
      'Jak ten globus liczy ludzi, z których baz pochodzą liczby i jakie licencje niosą te bazy.',
    defTitle: 'Definicje',
    defs: [
      {
        title: 'Ludzie poza swoim krajem',
        body: 'Osoba poza własnym krajem jest liczona w jednej grupie: uznani uchodźcy, osoby ubiegające się o azyl albo inne osoby potrzebujące ochrony międzynarodowej. Liczba na strzałce sumuje grupy nazwane w tym wierszu.',
      },
      {
        title: 'Ludzie, którzy zostają w swoim kraju',
        body: 'Osoby wewnętrznie przesiedlone opuściły dom i w podanej dacie nadal są w swoim kraju. Na globusie jest to pierścień, obok liczba i data.',
      },
      {
        title: 'Liczba osób na datę',
        body: 'Liczba osób to wielkość grupy w podanym dniu. Dla większości strzałek data to koniec 2025 roku. Karta drukuje datę przy każdej liczbie.',
      },
      {
        title: 'Przemieszczenia w ciągu roku',
        body: 'Liczba przemieszczeń liczy przeprowadzki w ciągu roku. Ta sama osoba może być policzona więcej niż raz. Ta liczba stoi w osobnym wierszu, z własną datą, obok liczby osób.',
      },
      {
        title: 'Strzałki',
        body: 'Strzałka zaczyna się w punkcie przyczyny i kończy w przybliżonym środku kraju albo w stolicy bardzo dużego kraju. Linia to przybliżony kierunek. Podpis mówi, kogo policzono, gdzie, ile i na jaką datę.',
      },
      {
        title: 'Daty początku',
        body: 'Data początku pojawia się, gdy potwierdza ją nazwane źródło. Dla Ukrainy potwierdzony jest luty 2022 roku. Gdy data początku nie jest potwierdzona, karta pisze „Data początku nie jest potwierdzona” i zostawia datę pustą.',
      },
      {
        title: 'Wenezuela',
        body: 'Źródła dotyczące Wenezueli zostawiają przyczynę otwartą. Karta używa sformułowania „Inna lub jeszcze nieokreślona przyczyna”. Punkt ma ten sam czerwony kolor co konflikt.',
      },
    ],
    creditsTitle: 'Źródła i licencje',
    creditsLead:
      'Tę mapę zestawił Fix Planet. Liczby są cytowane według baz nazwanych tutaj.',
    osmCredit:
      'Współrzędne na tej mapie to przybliżone środki krajów i stolice. Dane mapy: współtwórcy OpenStreetMap.',
    listTitle: 'Numerowana lista źródeł',
    licenceBy: 'Creative Commons Uznanie autorstwa 4.0 Międzynarodowa',
    licenceIgo: 'Creative Commons Uznanie autorstwa 3.0 dla organizacji międzyrządowych',
    licencePage: 'Strona należy do wydawcy. Karta podaje liczbę i datę.',
    licenceOdbl: 'Otwarta licencja baz danych',
    pillBy: 'CC BY 4.0',
    pillIgo: 'CC BY-IGO',
    termsLabel: 'Warunki korzystania ze zbiorów danych',
    deedLabel: 'Tekst licencji',
    openSource: 'Otwórz źródło',
    watchTitle: 'Film',
    watchPlay: 'Obejrzyj krótki film',
    watchPrivacy: 'YouTube wczytuje się po naciśnięciu tego przycisku.',
    watchOpen: 'Otwórz na YouTube',
    watchReport: 'Obejrzyj reportaż (Al Jazeera)',
    watchLength: 'Czas trwania {duration}',
    watchLanguage: 'Film jest po angielsku i pochodzi z własnego kanału wydawcy.',
    watchChannel: 'Film pochodzi z własnego kanału wydawcy.',
    watchScopeLaterFloods: 'To późniejszy reportaż o powodziach w Pakistanie.',
    watchScopeWholeCountry: 'Reportaż obejmuje całą Kolumbię.',
    watchScopeSomalia: 'Reportaż obejmuje Somalię.',
    videosTitle: 'Filmy',
    videosLead: 'Krótkie filmy z kart kryzysów. Każdy film pochodzi z własnego kanału wydawcy.',
    licenceYoutube: 'Standardowa licencja YouTube',
    licenceCcBy: 'Creative Commons Uznanie autorstwa',
  },
  lv: {
    title: 'Piespiedu pārvietošana: cēloņi un virzieni',
    lead: 'Katrai krīzei ir cēloņa punkts un līnijas uz vietām, kur saskaitīti cilvēki no šīs krīzes. Biezāka līnija nozīmē lielāku skaitu. Katra bulta ir aptuvens virziens ar skaitu un datumu.',
    mapLabel: 'Piespiedu pārvietošanas globuss: cēloņi un virzieni',
    legendTitle: 'Leģenda',
    crisesTitle: 'Krīzes',
    showLegend: 'Leģenda',
    hideLegend: 'Slēpt leģendu',
    loading: 'Globuss ielādējas',
    mapFailed: 'Globusu neizdevās ielādēt.',
    dataFailed: 'Krīžu datu failu neizdevās ielādēt.',
    cause: 'Cēlonis',
    started: 'Sākums',
    startUnverified: 'Sākuma datums nav apstiprināts',
    flows: 'Skaitļi',
    otherFigures: 'Citi skaitļi ar datumu',
    approximate: 'Aptuvens virziens',
    source: 'Avots',
    asOf: 'Uz {date}',
    anotherSource: 'Cits avots, {source}, {date}: {count}',
    thicknessTitle: 'Līnijas biezums',
    thicknessNote:
      'Līnijas biezums seko skaitam. Trīs paraugi ir mazākais bultas skaitlis, vidējais un lielākais šajā kartē.',
    ringTitle: 'Gredzens',
    ringNote:
      'Gredzens atzīmē skaitu valsts iekšienē. Cilvēku skaits datumā un pārvietošanās gadījumi gada laikā katrs paliek savā gredzenā. Bultas ved pie cilvēkiem, kas saskaitīti citā valstī.',
    arrowTitle: 'Bulta',
    arrowNote: 'Bulta rāda aptuvenu virzienu uz valsti, kur cilvēki saskaitīti.',
    movementsNote: 'Atkārtotas vienas personas pārvietošanās tiek skaitītas katru reizi.',
    sourcesLink: 'Avoti, definīcijas un licences',
    fromTo: '{count} no {from} uz {to}',
    insideCount: '{count}, {place}',
    insideOrigin: '{count}, {origin}, {place}',
    partRefugees: 'Bēgļi',
    partAsylum: 'Patvēruma meklētāji',
    partOther: 'Citas personas, kurām nepieciešama starptautiskā aizsardzība',
    partSeparate: 'Citi cilvēki, kas norādīti blakus šim skaitlim',
    contextMovements: 'Pārvietošanās gadījumi {year}. gadā',
    contextReturns: 'Cilvēki, kas {year}. gadā reģistrēti kā atgriezušies',
    contextWorldwide:
      'Cilvēki no Venecuēlas, kas visā pasaulē saskaitīti kā bēgļi, patvēruma meklētāji vai citas personas, kurām nepieciešama starptautiskā aizsardzība',
    contextDroughtSum: 'Trīs 2022. gada sausuma skaitļu summa',
    contextRohingya: 'Reģistrētie rohindžu bēgļi Bangladešā',
    sourcesTitle: 'Avoti, definīcijas un licences',
    sourcesLead: 'Kā šis globuss skaita cilvēkus, no kurām bāzēm ņemti skaitļi un kādas licences šīm bāzēm ir.',
    defTitle: 'Definīcijas',
    defs: [
      {
        title: 'Cilvēki ārpus savas valsts',
        body: 'Cilvēks ārpus savas valsts ir saskaitīts vienā grupā: atzītie bēgļi, patvēruma meklētāji vai citas personas, kurām nepieciešama starptautiskā aizsardzība. Skaitlis uz bultas saskaita grupas, kas nosauktas šajā rindā.',
      },
      {
        title: 'Cilvēki, kas paliek savā valstī',
        body: 'Iekšēji pārvietotie cilvēki ir pametuši mājas un norādītajā datumā joprojām ir savā valstī. Globusā tas ir gredzens, blakus skaitlis un datums.',
      },
      {
        title: 'Cilvēku skaits datumā',
        body: 'Cilvēku skaits ir grupas lielums nosauktajā datumā. Lielākajai daļai bultu datums ir 2025. gada beigas. Kartīte drukā datumu pie katra skaitļa.',
      },
      {
        title: 'Pārvietošanās gada laikā',
        body: 'Pārvietošanās skaits reģistrē pārcelšanās gada laikā. Viena persona var tikt saskaitīta vairāk nekā vienu reizi. Šis skaitlis paliek atsevišķā rindā ar savu datumu, blakus cilvēku skaitam.',
      },
      {
        title: 'Bultas',
        body: 'Bulta sākas cēloņa punktā un beidzas aptuvenā valsts centrā vai ļoti lielas valsts galvaspilsētā. Līnija ir aptuvens virziens. Paraksts pasaka, kurš saskaitīts, kur, cik un kurā datumā.',
      },
      {
        title: 'Sākuma datumi',
        body: 'Sākuma datums parādās, kad to apstiprina nosaukts avots. Ukrainai apstiprināts ir 2022. gada februāris. Ja sākuma datums nav apstiprināts, kartīte raksta „Sākuma datums nav apstiprināts” un atstāj datumu tukšu.',
      },
      {
        title: 'Venecuēla',
        body: 'Avoti par Venecuēlu atstāj cēloni atvērtu. Kartīte lieto formulējumu „Cits vai vēl nenoteikts cēlonis”. Punkts ir tādā pašā sarkanā krāsā kā konflikts.',
      },
    ],
    creditsTitle: 'Avoti un licences',
    creditsLead:
      'Šo karti salika Fix Planet. Skaitļi ir citēti pēc šeit nosauktajām bāzēm.',
    osmCredit:
      'Koordinātas šajā kartē ir aptuveni valstu centri un galvaspilsētas. Kartes dati: OpenStreetMap dalībnieki.',
    listTitle: 'Numurēts avotu saraksts',
    licenceBy: 'Creative Commons Attiecinājums 4.0 Starptautiskā',
    licenceIgo: 'Creative Commons Attiecinājums 3.0 starpvaldību organizācijām',
    licencePage: 'Lapa pieder izdevējam. Kartīte min skaitli un datumu.',
    licenceOdbl: 'Atvērtā datubāzu licence',
    pillBy: 'CC BY 4.0',
    pillIgo: 'CC BY-IGO',
    termsLabel: 'Datu kopu lietošanas noteikumi',
    deedLabel: 'Licences teksts',
    openSource: 'Atvērt avotu',
    watchTitle: 'Video',
    watchPlay: 'Skatīties īsu video',
    watchPrivacy: 'YouTube ielādējas pēc šīs pogas nospiešanas.',
    watchOpen: 'Atvērt vietnē YouTube',
    watchReport: 'Skatīties reportāžu (Al Jazeera)',
    watchLength: 'Ilgums {duration}',
    watchLanguage: 'Video ir angļu valodā un nāk no izdevēja paša kanāla.',
    watchChannel: 'Video nāk no izdevēja paša kanāla.',
    watchScopeLaterFloods: 'Šis ir vēlāks ziņojums par plūdiem Pakistānā.',
    watchScopeWholeCountry: 'Ziņojums aptver visu Kolumbiju.',
    watchScopeSomalia: 'Ziņojums aptver Somāliju.',
    videosTitle: 'Video',
    videosLead: 'Īsi video no krīžu kartītēm. Katrs nāk no izdevēja paša kanāla.',
    licenceYoutube: 'YouTube standarta licence',
    licenceCcBy: 'Creative Commons Attiecinājums',
  },
};

export function getDisplacementPage(locale: Locale): DisplacementPage {
  return {
    ...page[locale],
    groups: groups[locale],
    sourceNames: sourceNames[locale],
    places: displacementPlaces(locale),
    inside: displacementInside(locale),
    crises: displacementCrisisNames(locale),
  };
}

export const DISPLACEMENT_SOURCES_PATH = '/migration/displacement-sources';

/** Source ids shown on the sources page, in list order. */
export const DISPLACEMENT_SOURCE_IDS = [
  'unhcr_api',
  'unhcr_gt',
  'unhcr_methodology',
  'unhcr_web_sudan',
  'unhcr_web_syria',
  'unhcr_web_ukraine',
  'unhcr_web_rohingya',
  'idmc_hdx',
  'idmc_hdx_pak',
  'idmc_hdx_som',
  'idmc_hdx_eth',
  'idmc_hdx_ken',
] as const;

export type DisplacementSourceId = (typeof DISPLACEMENT_SOURCE_IDS)[number];

export function displacementLicenceKind(id: string): 'by' | 'igo' | 'page' {
  if (id.startsWith('idmc_')) return 'igo';
  if (id.startsWith('unhcr_web') || id === 'unhcr_gt' || id === 'unhcr_methodology') return 'page';
  return 'by';
}
