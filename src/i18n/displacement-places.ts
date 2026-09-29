import type { Locale } from './config';

type Trio = readonly [name: string, from: string, to: string];

const rows: Record<string, Record<Locale, Trio>> = {
  Sudan: {
    en: ['Sudan', 'Sudan', 'Sudan'],
    ru: ['Судан', 'Судана', 'Судан'],
    pl: ['Sudan', 'Sudanu', 'Sudanu'],
    lv: ['Sudāna', 'Sudānas', 'Sudānu'],
  },
  Chad: {
    en: ['Chad', 'Chad', 'Chad'],
    ru: ['Чад', 'Чада', 'Чад'],
    pl: ['Czad', 'Czadu', 'Czadu'],
    lv: ['Čada', 'Čadas', 'Čadu'],
  },
  Egypt: {
    en: ['Egypt', 'Egypt', 'Egypt'],
    ru: ['Египет', 'Египта', 'Египет'],
    pl: ['Egipt', 'Egiptu', 'Egiptu'],
    lv: ['Ēģipte', 'Ēģiptes', 'Ēģipti'],
  },
  Libya: {
    en: ['Libya', 'Libya', 'Libya'],
    ru: ['Ливия', 'Ливии', 'Ливию'],
    pl: ['Libia', 'Libii', 'Libię'],
    lv: ['Lībija', 'Lībijas', 'Lībiju'],
  },
  'South Sudan': {
    en: ['South Sudan', 'South Sudan', 'South Sudan'],
    ru: ['Южный Судан', 'Южного Судана', 'Южный Судан'],
    pl: ['Sudan Południowy', 'Sudanu Południowego', 'Sudanu Południowego'],
    lv: ['Dienvidsudāna', 'Dienvidsudānas', 'Dienvidsudānu'],
  },
  Syria: {
    en: ['Syria', 'Syria', 'Syria'],
    ru: ['Сирия', 'Сирии', 'Сирию'],
    pl: ['Syria', 'Syrii', 'Syrię'],
    lv: ['Sīrija', 'Sīrijas', 'Sīriju'],
  },
  Türkiye: {
    en: ['Türkiye', 'Türkiye', 'Türkiye'],
    ru: ['Турция', 'Турции', 'Турцию'],
    pl: ['Turcja', 'Turcji', 'Turcji'],
    lv: ['Turcija', 'Turcijas', 'Turciju'],
  },
  Germany: {
    en: ['Germany', 'Germany', 'Germany'],
    ru: ['Германия', 'Германии', 'Германию'],
    pl: ['Niemcy', 'Niemiec', 'Niemiec'],
    lv: ['Vācija', 'Vācijas', 'Vāciju'],
  },
  Lebanon: {
    en: ['Lebanon', 'Lebanon', 'Lebanon'],
    ru: ['Ливан', 'Ливана', 'Ливан'],
    pl: ['Liban', 'Libanu', 'Libanu'],
    lv: ['Libāna', 'Libānas', 'Libānu'],
  },
  Jordan: {
    en: ['Jordan', 'Jordan', 'Jordan'],
    ru: ['Иордания', 'Иордании', 'Иорданию'],
    pl: ['Jordania', 'Jordanii', 'Jordanii'],
    lv: ['Jordānija', 'Jordānijas', 'Jordāniju'],
  },
  Ukraine: {
    en: ['Ukraine', 'Ukraine', 'Ukraine'],
    ru: ['Украина', 'Украины', 'Украину'],
    pl: ['Ukraina', 'Ukrainy', 'Ukrainę'],
    lv: ['Ukraina', 'Ukrainas', 'Ukrainu'],
  },
  Poland: {
    en: ['Poland', 'Poland', 'Poland'],
    ru: ['Польша', 'Польши', 'Польшу'],
    pl: ['Polska', 'Polski', 'Polskę'],
    lv: ['Polija', 'Polijas', 'Poliju'],
  },
  Czechia: {
    en: ['Czechia', 'Czechia', 'Czechia'],
    ru: ['Чехия', 'Чехии', 'Чехию'],
    pl: ['Czechy', 'Czech', 'Czech'],
    lv: ['Čehija', 'Čehijas', 'Čehiju'],
  },
  'Russian Federation': {
    en: ['Russian Federation', 'Russian Federation', 'Russian Federation'],
    ru: ['Российская Федерация', 'Российской Федерации', 'Российскую Федерацию'],
    pl: ['Federacja Rosyjska', 'Federacji Rosyjskiej', 'Federacji Rosyjskiej'],
    lv: ['Krievijas Federācija', 'Krievijas Federācijas', 'Krievijas Federāciju'],
  },
  Afghanistan: {
    en: ['Afghanistan', 'Afghanistan', 'Afghanistan'],
    ru: ['Афганистан', 'Афганистана', 'Афганистан'],
    pl: ['Afganistan', 'Afganistanu', 'Afganistanu'],
    lv: ['Afganistāna', 'Afganistānas', 'Afganistānu'],
  },
  Iran: {
    en: ['Iran', 'Iran', 'Iran'],
    ru: ['Иран', 'Ирана', 'Иран'],
    pl: ['Iran', 'Iranu', 'Iranu'],
    lv: ['Irāna', 'Irānas', 'Irānu'],
  },
  Pakistan: {
    en: ['Pakistan', 'Pakistan', 'Pakistan'],
    ru: ['Пакистан', 'Пакистана', 'Пакистан'],
    pl: ['Pakistan', 'Pakistanu', 'Pakistanu'],
    lv: ['Pakistāna', 'Pakistānas', 'Pakistānu'],
  },
  'the Democratic Republic of the Congo': {
    en: [
      'the Democratic Republic of the Congo',
      'the Democratic Republic of the Congo',
      'the Democratic Republic of the Congo',
    ],
    ru: [
      'Демократическая Республика Конго',
      'Демократической Республики Конго',
      'Демократическую Республику Конго',
    ],
    pl: [
      'Demokratyczna Republika Konga',
      'Demokratycznej Republiki Konga',
      'Demokratycznej Republiki Konga',
    ],
    lv: [
      'Kongo Demokrātiskā Republika',
      'Kongo Demokrātiskās Republikas',
      'Kongo Demokrātisko Republiku',
    ],
  },
  Uganda: {
    en: ['Uganda', 'Uganda', 'Uganda'],
    ru: ['Уганда', 'Уганды', 'Уганду'],
    pl: ['Uganda', 'Ugandy', 'Ugandę'],
    lv: ['Uganda', 'Ugandas', 'Ugandu'],
  },
  Burundi: {
    en: ['Burundi', 'Burundi', 'Burundi'],
    ru: ['Бурунди', 'Бурунди', 'Бурунди'],
    pl: ['Burundi', 'Burundi', 'Burundi'],
    lv: ['Burundija', 'Burundijas', 'Burundiju'],
  },
  Rwanda: {
    en: ['Rwanda', 'Rwanda', 'Rwanda'],
    ru: ['Руанда', 'Руанды', 'Руанду'],
    pl: ['Rwanda', 'Rwandy', 'Rwandę'],
    lv: ['Ruanda', 'Ruandas', 'Ruandu'],
  },
  Tanzania: {
    en: ['Tanzania', 'Tanzania', 'Tanzania'],
    ru: ['Танзания', 'Танзании', 'Танзанию'],
    pl: ['Tanzania', 'Tanzanii', 'Tanzanii'],
    lv: ['Tanzānija', 'Tanzānijas', 'Tanzāniju'],
  },
  Myanmar: {
    en: ['Myanmar', 'Myanmar', 'Myanmar'],
    ru: ['Мьянма', 'Мьянмы', 'Мьянму'],
    pl: ['Mjanma', 'Mjanmy', 'Mjanmę'],
    lv: ['Mjanma', 'Mjanmas', 'Mjanmu'],
  },
  Bangladesh: {
    en: ['Bangladesh', 'Bangladesh', 'Bangladesh'],
    ru: ['Бангладеш', 'Бангладеш', 'Бангладеш'],
    pl: ['Bangladesz', 'Bangladeszu', 'Bangladeszu'],
    lv: ['Bangladeša', 'Bangladešas', 'Bangladešu'],
  },
  Malaysia: {
    en: ['Malaysia', 'Malaysia', 'Malaysia'],
    ru: ['Малайзия', 'Малайзии', 'Малайзию'],
    pl: ['Malezja', 'Malezji', 'Malezję'],
    lv: ['Malaizija', 'Malaizijas', 'Malaiziju'],
  },
  India: {
    en: ['India', 'India', 'India'],
    ru: ['Индия', 'Индии', 'Индию'],
    pl: ['Indie', 'Indii', 'Indii'],
    lv: ['Indija', 'Indijas', 'Indiju'],
  },
  Thailand: {
    en: ['Thailand', 'Thailand', 'Thailand'],
    ru: ['Таиланд', 'Таиланда', 'Таиланд'],
    pl: ['Tajlandia', 'Tajlandii', 'Tajlandię'],
    lv: ['Taizeme', 'Taizemes', 'Taizemi'],
  },
  Haiti: {
    en: ['Haiti', 'Haiti', 'Haiti'],
    ru: ['Гаити', 'Гаити', 'Гаити'],
    pl: ['Haiti', 'Haiti', 'Haiti'],
    lv: ['Haiti', 'Haiti', 'Haiti'],
  },
  'United States of America': {
    en: ['United States of America', 'United States of America', 'United States of America'],
    ru: ['Соединённые Штаты Америки', 'Соединённых Штатов Америки', 'Соединённые Штаты Америки'],
    pl: ['Stany Zjednoczone', 'Stanów Zjednoczonych', 'Stanów Zjednoczonych'],
    lv: ['Amerikas Savienotās Valstis', 'Amerikas Savienoto Valstu', 'Amerikas Savienotās Valstis'],
  },
  Brazil: {
    en: ['Brazil', 'Brazil', 'Brazil'],
    ru: ['Бразилия', 'Бразилии', 'Бразилию'],
    pl: ['Brazylia', 'Brazylii', 'Brazylię'],
    lv: ['Brazīlija', 'Brazīlijas', 'Brazīliju'],
  },
  Mexico: {
    en: ['Mexico', 'Mexico', 'Mexico'],
    ru: ['Мексика', 'Мексики', 'Мексику'],
    pl: ['Meksyk', 'Meksyku', 'Meksyku'],
    lv: ['Meksika', 'Meksikas', 'Meksiku'],
  },
  Canada: {
    en: ['Canada', 'Canada', 'Canada'],
    ru: ['Канада', 'Канады', 'Канаду'],
    pl: ['Kanada', 'Kanady', 'Kanadę'],
    lv: ['Kanāda', 'Kanādas', 'Kanādu'],
  },
  Somalia: {
    en: ['Somalia', 'Somalia', 'Somalia'],
    ru: ['Сомали', 'Сомали', 'Сомали'],
    pl: ['Somalia', 'Somalii', 'Somalię'],
    lv: ['Somālija', 'Somālijas', 'Somāliju'],
  },
  Kenya: {
    en: ['Kenya', 'Kenya', 'Kenya'],
    ru: ['Кения', 'Кении', 'Кению'],
    pl: ['Kenia', 'Kenii', 'Kenię'],
    lv: ['Kenija', 'Kenijas', 'Keniju'],
  },
  Ethiopia: {
    en: ['Ethiopia', 'Ethiopia', 'Ethiopia'],
    ru: ['Эфиопия', 'Эфиопии', 'Эфиопию'],
    pl: ['Etiopia', 'Etiopii', 'Etiopię'],
    lv: ['Etiopija', 'Etiopijas', 'Etiopiju'],
  },
  Yemen: {
    en: ['Yemen', 'Yemen', 'Yemen'],
    ru: ['Йемен', 'Йемена', 'Йемен'],
    pl: ['Jemen', 'Jemenu', 'Jemenu'],
    lv: ['Jemena', 'Jemenas', 'Jemenu'],
  },
  Venezuela: {
    en: ['Venezuela', 'Venezuela', 'Venezuela'],
    ru: ['Венесуэла', 'Венесуэлы', 'Венесуэлу'],
    pl: ['Wenezuela', 'Wenezueli', 'Wenezuelę'],
    lv: ['Venecuēla', 'Venecuēlas', 'Venecuēlu'],
  },
  Colombia: {
    en: ['Colombia', 'Colombia', 'Colombia'],
    ru: ['Колумбия', 'Колумбии', 'Колумбию'],
    pl: ['Kolumbia', 'Kolumbii', 'Kolumbię'],
    lv: ['Kolumbija', 'Kolumbijas', 'Kolumbiju'],
  },
  Peru: {
    en: ['Peru', 'Peru', 'Peru'],
    ru: ['Перу', 'Перу', 'Перу'],
    pl: ['Peru', 'Peru', 'Peru'],
    lv: ['Peru', 'Peru', 'Peru'],
  },
  Chile: {
    en: ['Chile', 'Chile', 'Chile'],
    ru: ['Чили', 'Чили', 'Чили'],
    pl: ['Chile', 'Chile', 'Chile'],
    lv: ['Čīle', 'Čīles', 'Čīli'],
  },
  Ecuador: {
    en: ['Ecuador', 'Ecuador', 'Ecuador'],
    ru: ['Эквадор', 'Эквадора', 'Эквадор'],
    pl: ['Ekwador', 'Ekwadoru', 'Ekwadoru'],
    lv: ['Ekvadora', 'Ekvadoras', 'Ekvadoru'],
  },
  'Gaza Strip': {
    en: ['Gaza Strip', 'Gaza Strip', 'Gaza Strip'],
    ru: ['сектор Газа', 'сектора Газа', 'сектор Газа'],
    pl: ['Strefa Gazy', 'Strefy Gazy', 'Strefę Gazy'],
    lv: ['Gazas josla', 'Gazas joslas', 'Gazas joslu'],
  },
  Netherlands: {
    en: ['Netherlands', 'Netherlands', 'Netherlands'],
    ru: ['Нидерланды', 'Нидерландов', 'Нидерланды'],
    pl: ['Holandia', 'Holandii', 'Holandii'],
    lv: ['Nīderlande', 'Nīderlandes', 'Nīderlandi'],
  },
  Spain: {
    en: ['Spain', 'Spain', 'Spain'],
    ru: ['Испания', 'Испании', 'Испанию'],
    pl: ['Hiszpania', 'Hiszpanii', 'Hiszpanię'],
    lv: ['Spānija', 'Spānijas', 'Spāniju'],
  },
  'Pakistan (flood-affected provinces)': {
    en: [
      'Pakistan, flood-affected provinces',
      'Pakistan, flood-affected provinces',
      'Pakistan, flood-affected provinces',
    ],
    ru: [
      'Пакистан, провинции, затронутые наводнением',
      'Пакистана, провинций, затронутых наводнением',
      'Пакистан, провинции, затронутые наводнением',
    ],
    pl: [
      'Pakistan, prowincje dotknięte powodzią',
      'Pakistanu, prowincji dotkniętych powodzią',
      'Pakistanu, prowincji dotkniętych powodzią',
    ],
    lv: [
      'Pakistāna, plūdu skartās provinces',
      'Pakistānas, plūdu skartajām provincēm',
      'Pakistānu, plūdu skartās provinces',
    ],
  },
  'Punjab province, Pakistan': {
    en: ['Punjab province, Pakistan', 'Punjab province, Pakistan', 'Punjab province, Pakistan'],
    ru: ['провинция Пенджаб, Пакистан', 'провинции Пенджаб, Пакистан', 'провинцию Пенджаб, Пакистан'],
    pl: ['prowincja Pendżab, Pakistan', 'prowincji Pendżab, Pakistan', 'prowincję Pendżab, Pakistan'],
    lv: ['Pendžabas province, Pakistāna', 'Pendžabas provinces, Pakistāna', 'Pendžabas provinci, Pakistānu'],
  },
};

const insideRows: Record<string, Record<Locale, string>> = {
  'inside Sudan': {
    en: 'Inside Sudan',
    ru: 'Внутри Судана',
    pl: 'Wewnątrz Sudanu',
    lv: 'Sudānas iekšienē',
  },
  'inside Syria': {
    en: 'Inside Syria',
    ru: 'Внутри Сирии',
    pl: 'Wewnątrz Syrii',
    lv: 'Sīrijas iekšienē',
  },
  'inside Ukraine': {
    en: 'Inside Ukraine',
    ru: 'Внутри Украины',
    pl: 'Wewnątrz Ukrainy',
    lv: 'Ukrainas iekšienē',
  },
  'inside Afghanistan': {
    en: 'Inside Afghanistan',
    ru: 'Внутри Афганистана',
    pl: 'Wewnątrz Afganistanu',
    lv: 'Afganistānas iekšienē',
  },
  'inside the Democratic Republic of the Congo': {
    en: 'Inside the Democratic Republic of the Congo',
    ru: 'Внутри Демократической Республики Конго',
    pl: 'Wewnątrz Demokratycznej Republiki Konga',
    lv: 'Kongo Demokrātiskās Republikas iekšienē',
  },
  'inside Myanmar': {
    en: 'Inside Myanmar',
    ru: 'Внутри Мьянмы',
    pl: 'Wewnątrz Mjanmy',
    lv: 'Mjanmas iekšienē',
  },
  'inside Haiti': {
    en: 'Inside Haiti',
    ru: 'Внутри Гаити',
    pl: 'Wewnątrz Haiti',
    lv: 'Haiti iekšienē',
  },
  'inside Somalia': {
    en: 'Inside Somalia',
    ru: 'Внутри Сомали',
    pl: 'Wewnątrz Somalii',
    lv: 'Somālijas iekšienē',
  },
  'inside Kenya': {
    en: 'Inside Kenya',
    ru: 'Внутри Кении',
    pl: 'Wewnątrz Kenii',
    lv: 'Kenijas iekšienē',
  },
  'inside Ethiopia': {
    en: 'Inside Ethiopia',
    ru: 'Внутри Эфиопии',
    pl: 'Wewnątrz Etiopii',
    lv: 'Etiopijas iekšienē',
  },
  'inside Yemen': {
    en: 'Inside Yemen',
    ru: 'Внутри Йемена',
    pl: 'Wewnątrz Jemenu',
    lv: 'Jemenas iekšienē',
  },
  'inside South Sudan': {
    en: 'Inside South Sudan',
    ru: 'Внутри Южного Судана',
    pl: 'Wewnątrz Sudanu Południowego',
    lv: 'Dienvidsudānas iekšienē',
  },
  'inside Colombia': {
    en: 'Inside Colombia',
    ru: 'Внутри Колумбии',
    pl: 'Wewnątrz Kolumbii',
    lv: 'Kolumbijas iekšienē',
  },
  'inside Pakistan': {
    en: 'Inside Pakistan',
    ru: 'Внутри Пакистана',
    pl: 'Wewnątrz Pakistanu',
    lv: 'Pakistānas iekšienē',
  },
  'inside the State of Palestine': {
    en: 'Inside the State of Palestine',
    ru: 'Внутри Государства Палестина',
    pl: 'Wewnątrz Państwa Palestyna',
    lv: 'Palestīnas Valsts iekšienē',
  },
  'inside the Gaza Strip': {
    en: 'Inside the Gaza Strip',
    ru: 'Внутри сектора Газа',
    pl: 'Wewnątrz Strefy Gazy',
    lv: 'Gazas joslas iekšienē',
  },
};

export type PlaceForms = { name: string; from: string; to: string };

export function displacementPlaces(locale: Locale): Record<string, PlaceForms> {
  const out: Record<string, PlaceForms> = {};
  for (const [key, row] of Object.entries(rows)) {
    const [name, from, to] = row[locale];
    out[key] = { name, from, to };
  }
  return out;
}

export function displacementInside(locale: Locale): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, row] of Object.entries(insideRows)) out[key] = row[locale];
  return out;
}

const crisisRows: Record<string, Record<Locale, string>> = {
  sudan: { en: 'Sudan', ru: 'Судан', pl: 'Sudan', lv: 'Sudāna' },
  syria: { en: 'Syria', ru: 'Сирия', pl: 'Syria', lv: 'Sīrija' },
  ukraine: { en: 'Ukraine', ru: 'Украина', pl: 'Ukraina', lv: 'Ukraina' },
  afghanistan: { en: 'Afghanistan', ru: 'Афганистан', pl: 'Afganistan', lv: 'Afganistāna' },
  'dr-congo': {
    en: 'Democratic Republic of the Congo',
    ru: 'Демократическая Республика Конго',
    pl: 'Demokratyczna Republika Konga',
    lv: 'Kongo Demokrātiskā Republika',
  },
  'myanmar-rohingya': {
    en: 'Myanmar, including Rohingya',
    ru: 'Мьянма, включая рохинджа',
    pl: 'Mjanma, w tym Rohingja',
    lv: 'Mjanma, tostarp rohindži',
  },
  haiti: { en: 'Haiti', ru: 'Гаити', pl: 'Haiti', lv: 'Haiti' },
  somalia: { en: 'Somalia', ru: 'Сомали', pl: 'Somalia', lv: 'Somālija' },
  venezuela: { en: 'Venezuela', ru: 'Венесуэла', pl: 'Wenezuela', lv: 'Venecuēla' },
  'gaza-palestine': {
    en: 'Gaza Strip and the State of Palestine',
    ru: 'Сектор Газа и Государство Палестина',
    pl: 'Strefa Gazy i Państwo Palestyna',
    lv: 'Gazas josla un Palestīnas Valsts',
  },
  'pakistan-floods': {
    en: 'Pakistan floods, 2022 and 2025 monsoons',
    ru: 'Наводнения в Пакистане, муссоны 2022 и 2025 годов',
    pl: 'Powodzie w Pakistanie, monsuny 2022 i 2025',
    lv: 'Plūdi Pakistānā, 2022. un 2025. gada musoni',
  },
  yemen: { en: 'Yemen', ru: 'Йемен', pl: 'Jemen', lv: 'Jemena' },
  'south-sudan': {
    en: 'South Sudan',
    ru: 'Южный Судан',
    pl: 'Sudan Południowy',
    lv: 'Dienvidsudāna',
  },
  colombia: { en: 'Colombia', ru: 'Колумбия', pl: 'Kolumbia', lv: 'Kolumbija' },
  'horn-of-africa-drought': {
    en: 'Horn of Africa drought: Somalia, Ethiopia, Kenya',
    ru: 'Засуха на Африканском Роге: Сомали, Эфиопия, Кения',
    pl: 'Susza na Rogu Afryki: Somalia, Etiopia, Kenia',
    lv: 'Sausums Āfrikas ragā: Somālija, Etiopija, Kenija',
  },
};

export function displacementCrisisNames(locale: Locale): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, row] of Object.entries(crisisRows)) out[key] = row[locale];
  return out;
}
