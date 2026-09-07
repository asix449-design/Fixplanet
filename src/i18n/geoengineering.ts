import {
  getGeoMeta,
  geoShelfKeys,
  geoMeta,
  type GeoCopy,
  type GeoProject,
  type GeoShelf,
  type GeoStatus,
} from '../data/geoengineering';
import type { Locale } from './config';
import { en } from './geoengineering-en';
import { lv as lvEntries } from './geoengineering-lv';
import { pl as plEntries } from './geoengineering-pl';
import { ru as ruEntries } from './geoengineering-ru';

export type GeoPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  honesty: string;
  naming: string;
  filterAria: string;
  chooseShelf: string;
  tiles: Record<GeoShelf, string>;
  all: string;
  cardCta: string;
  back: string;
  plan: string;
  construction: string;
  outcome: string;
  lessons: string;
  sourcesLabel: string;
  jurisdictionLabel: string;
  yearLabel: string;
  imageCredit: string;
  empty: string;
  heroAlt: string;
  shelves: Record<GeoShelf, string>;
  shelfLeads: Record<GeoShelf | 'all', string>;
  status: Record<GeoStatus, string>;
  researchBanner: string;
  proposedBanner: string;
};

const pageEn: GeoPage = {
  metaTitle: 'Geoengineering — Fix Planet',
  metaDescription:
    'A curated catalog of landscape megaprojects and a smaller shelf of climate-intervention proposals: what was planned, what was built, why it stalled, with sources.',
  eyebrow: 'Failure archaeology',
  title: 'Geoengineering',
  lead: 'The public word often means climate geoengineering. This catalog is mostly something older and heavier: canals, inland seas, desert walls of trees. A smaller shelf holds climate interventions so the terms stay apart.',
  honesty:
    'Every card names a jurisdiction, years, a status, and sources. Status is proposed, partial, built and struggling, failed, ongoing, or research — not a pitch deck. We do not invent hectare counts, collapse dates, or “all the trees died on Tuesday.” Mixed evidence is written as mixed.',
  naming:
    '“Geoengineering” in headlines usually means solar or marine climate hacks. Here it is the nav label for Earth-transformation megaprojects. Climate intervention sits on its own shelf and is not sold as a ready fix.',
  filterAria: 'Filter projects by shelf',
  chooseShelf: 'Choose a shelf',
  tiles: {
    water: 'Canals, river transfers, inland seas — water moved as if it were surplus.',
    desert: 'Walls of trees, mega-planting, oasis agriculture — greening as a campaign.',
    climate: 'SAI, ocean fertilization, cloud brightening — proposals and trials, not a thermostat.',
  },
  all: 'All',
  cardCta: 'Read the card →',
  back: '← Geoengineering',
  plan: 'The plan',
  construction: 'Construction / status',
  outcome: 'What went wrong — or only partly worked',
  lessons: 'Lessons',
  sourcesLabel: 'Sources',
  jurisdictionLabel: 'Jurisdiction',
  yearLabel: 'Years / status',
  imageCredit: 'Image',
  empty: 'No cards on this shelf yet.',
  heroAlt:
    'NASA photograph of the Toshka Lakes in Egypt’s Western Desert — carved water in dry land, the section theme, not a finished New Valley',
  shelves: {
    water: 'Water & diversion',
    desert: 'Desert greening',
    climate: 'Climate intervention',
  },
  shelfLeads: {
    all: 'Landscape megaprojects first; climate interventions last and labelled. Every card is a real scheme with a sourced status.',
    water:
      'Canals, pumps, fossil aquifers and inland-sea dreams. Some pipes exist. Few of the climates they promised do.',
    desert:
      'Shelterbelts and “green walls.” Count surviving cover and water cost, not seedlings in a press release.',
    climate:
      'Research and contested outdoor trials. Not deployed planetary engineering. Not a substitute for cutting emissions.',
  },
  status: {
    proposed: 'Proposed',
    partial: 'Partial',
    'built-struggling': 'Built, struggling',
    failed: 'Failed',
    ongoing: 'Ongoing',
    research: 'Research',
  },
  researchBanner: 'Research / proposal — not a deployed planetary fix.',
  proposedBanner: 'Proposed — not built.',
};

const pageRu: GeoPage = {
  metaTitle: 'Геоинженерия — Fix Planet',
  metaDescription:
    'Каталог ландшафтных мегапроектов и отдельная полка климатических вмешательств: что планировали, что построили, почему застопорилось — с источниками.',
  eyebrow: 'Археология провалов',
  title: 'Геоинженерия',
  lead: 'В заголовках это слово чаще значит климатическую геоинженерию. Здесь каталог в основном о другом: каналы, внутренние моря, стены деревьев. Климатические вмешательства стоят на отдельной полке, чтобы термины не смешивались.',
  honesty:
    'На каждой карточке — юрисдикция, годы, статус и источники. Статус: предложен, частичный, построен и буксует, провален, идёт, исследование — не презентация для инвесторов. Мы не выдумываем гектары, даты «всё погибло» и мультяшный рок. Смешанные данные так и написаны.',
  naming:
    '«Геоинженерия» в новостях обычно про солнце и океан как климатический рычаг. Здесь это пункт меню для мегапроектов преобразования Земли. Климатическое вмешательство — отдельная полка и не продаётся как готовое решение.',
  filterAria: 'Фильтр проектов по полке',
  chooseShelf: 'Выберите полку',
  tiles: {
    water: 'Каналы, переброски рек, внутренние моря — вода как будто лишняя.',
    desert: 'Стены деревьев, мегапосадки, оазисное земледелие — озеленение как кампания.',
    climate: 'SAI, удобрение океана, осветление облаков — опыты и проекты, не термостат.',
  },
  all: 'Все',
  cardCta: 'Читать карточку →',
  back: '← Геоинженерия',
  plan: 'Замысел',
  construction: 'Строительство / статус',
  outcome: 'Что пошло не так — или сработало лишь частично',
  lessons: 'Уроки',
  sourcesLabel: 'Источники',
  jurisdictionLabel: 'Юрисдикция',
  yearLabel: 'Годы / статус',
  imageCredit: 'Изображение',
  empty: 'На этой полке пока нет карточек.',
  heroAlt:
    'Снимок NASA озёр Тошка в Западной пустыне Египта — вырезанная вода в сухой земле, тема раздела, не готовая Новая долина',
  shelves: {
    water: 'Вода и переброски',
    desert: 'Озеленение пустынь',
    climate: 'Климатическое вмешательство',
  },
  shelfLeads: {
    all: 'Сначала ландшафтные мегапроекты; климатические вмешательства — в конце и с пометкой. Каждая карточка — реальная схема с источником.',
    water:
      'Каналы, насосы, ископаемые водоносные горизонты и мечты о внутренних морях. Трубы иногда есть. Обещанного климата — почти нет.',
    desert:
      'Лесополосы и «зелёные стены». Считайте живой покров и цену воды, а не саженцы в пресс-релизе.',
    climate:
      'Исследования и спорные полевые опыты. Не развёрнутая инженерия планеты. Не замена сокращению выбросов.',
  },
  status: {
    proposed: 'Предложен',
    partial: 'Частично',
    'built-struggling': 'Построен, буксует',
    failed: 'Провален',
    ongoing: 'Идёт',
    research: 'Исследование',
  },
  researchBanner: 'Исследование / предложение — не развёрнутое планетарное решение.',
  proposedBanner: 'Предложено — не построено.',
};

const pagePl: GeoPage = {
  metaTitle: 'Geoinżynieria — Fix Planet',
  metaDescription:
    'Katalog megaprojektów krajobrazowych i osobna półka interwencji klimatycznych: co planowano, co zbudowano, dlaczego stanęło — ze źródłami.',
  eyebrow: 'Archeologia porażek',
  title: 'Geoinżynieria',
  lead: 'W nagłówkach to słowo zwykle znaczy geoinżynierię klimatu. Ten katalog jest głównie o czymś starszym: kanały, morza śródlądowe, mury drzew. Interwencje klimatyczne stoją na osobnej półce, żeby pojęć nie mieszać.',
  honesty:
    'Każda karta ma jurysdykcję, lata, status i źródła. Status: zaproponowany, częściowy, zbudowany i w tarapatach, nieudany, trwający albo badania — nie pitch. Nie zmyślamy hektarów ani daty, w której „wszystkie lasy padły”. Mieszane dowody zostają mieszane.',
  naming:
    '„Geoinżynieria” w mediach to zwykle haki słoneczne albo morskie. Tutaj to etykieta menu dla megaprojektów przekształcania Ziemi. Interwencja klimatyczna ma własną półkę i nie jest sprzedawana jako gotowa naprawa.',
  filterAria: 'Filtruj projekty według półki',
  chooseShelf: 'Wybierz półkę',
  tiles: {
    water: 'Kanały, przerzuty rzek, morza śródlądowe — woda traktowana jak nadwyżka.',
    desert: 'Mury drzew, megasadzenie, rolnictwo oazowe — zazielenianie jako kampania.',
    climate: 'SAI, nawożenie oceanu, rozjaśnianie chmur — próby i projekty, nie termostat.',
  },
  all: 'Wszystkie',
  cardCta: 'Czytaj kartę →',
  back: '← Geoinżynieria',
  plan: 'Plan',
  construction: 'Budowa / status',
  outcome: 'Co poszło nie tak — albo zadziałało tylko częściowo',
  lessons: 'Wnioski',
  sourcesLabel: 'Źródła',
  jurisdictionLabel: 'Jurysdykcja',
  yearLabel: 'Lata / status',
  imageCredit: 'Zdjęcie',
  empty: 'Na tej półce nie ma jeszcze kart.',
  heroAlt:
    'Zdjęcie NASA jezior Toshka na Pustyni Zachodniej Egiptu — wycięta woda w suchym lądzie, tło działu, nie skończona Nowa Dolina',
  shelves: {
    water: 'Woda i przerzuty',
    desert: 'Zazielenianie pustyń',
    climate: 'Interwencja klimatyczna',
  },
  shelfLeads: {
    all: 'Najpierw megaprojekty krajobrazowe; interwencje klimatyczne na końcu i z etykietą. Każda karta to prawdziwy schemat ze źródłem.',
    water:
      'Kanały, pompy, kopalne wodonośne i sny o morzach w głębi lądu. Rury czasem stoją. Klimat, który obiecywano — rzadko.',
    desert:
      'Pasy wiatrochronne i „zielone mury”. Licz przetrwałą pokrywę i koszt wody, nie sadzonki z komunikatu.',
    climate:
      'Badania i sporne próby w terenie. Nie wdrożona inżynieria planety. Nie substytut cięcia emisji.',
  },
  status: {
    proposed: 'Zaproponowany',
    partial: 'Częściowy',
    'built-struggling': 'Zbudowany, w tarapatach',
    failed: 'Nieudany',
    ongoing: 'Trwa',
    research: 'Badania',
  },
  researchBanner: 'Badania / propozycja — nie wdrożona naprawa planety.',
  proposedBanner: 'Zaproponowane — nie zbudowane.',
};

const pageLv: GeoPage = {
  metaTitle: 'Ģeoinženierija — Fix Planet',
  metaDescription:
    'Kurēts ainavu megaprojektu katalogs un atsevišķs plaukts klimata iejaukšanās priekšlikumiem: kas tika plānots, kas uzbūvēts, kāpēc apstājās — ar avotiem.',
  eyebrow: 'Izgāšanās arheoloģija',
  title: 'Ģeoinženierija',
  lead: 'Virsrakstos šis vārds parasti nozīmē klimata ģeoinženieriju. Šis katalogs pārsvarā ir par kaut ko vecāku: kanāli, iekšzemes jūras, koku sienas. Klimata iejaukšanās stāv atsevišķā plauktā, lai terminus nesajauktu.',
  honesty:
    'Katrā kartītē ir jurisdikcija, gadi, statuss un avoti. Statuss: ierosināts, daļējs, uzbūvēts un buksē, izgāzies, notiek vai pētījums — ne investoru stāsts. Mēs neizdomājam hektārus un datumu, kad «visi koki nomira». Jaukti pierādījumi paliek jaukti.',
  naming:
    '«Ģeoinženierija» ziņās parasti ir Saules vai okeāna klimata sviras. Šeit tas ir izvēlnes vārds Zemes pārveides megaprojektiem. Klimata iejaukšanās ir savs plaukts un netiek pārdota kā gatavs risinājums.',
  filterAria: 'Filtrēt projektus pēc plaukta',
  chooseShelf: 'Izvēlies plauktu',
  tiles: {
    water: 'Kanāli, upju pārliešana, iekšzemes jūras — ūdens it kā būtu pārpalikums.',
    desert: 'Koku sienas, milzu stādīšana, oāžu lauksaimniecība — apzaļumošana kā kampaņa.',
    climate: 'SAI, okeāna mēslošana, mākoņu gaišināšana — mēģinājumi, ne termostats.',
  },
  all: 'Visi',
  cardCta: 'Lasīt kartīti →',
  back: '← Ģeoinženierija',
  plan: 'Plāns',
  construction: 'Būvniecība / statuss',
  outcome: 'Kas nogāja greizi — vai izdevās tikai daļēji',
  lessons: 'Mācības',
  sourcesLabel: 'Avoti',
  jurisdictionLabel: 'Jurisdikcija',
  yearLabel: 'Gadi / statuss',
  imageCredit: 'Attēls',
  empty: 'Šajā plauktā vēl nav kartīšu.',
  heroAlt:
    'NASA foto ar Toškas ezeriem Ēģiptes Rietumu tuksnesī — izgriezts ūdens sausā zemē, sadaļas fons, ne pabeigta Jaunā ieleja',
  shelves: {
    water: 'Ūdens un novadīšana',
    desert: 'Tuksnešu apzaļumošana',
    climate: 'Klimata iejaukšanās',
  },
  shelfLeads: {
    all: 'Vispirms ainavu megaprojekti; klimata iejaukšanās — beigās un ar etiķeti. Katra kartīte ir īsta shēma ar avotu.',
    water:
      'Kanāli, sūkņi, fosilie ūdensnesēji un sapņi par iekšzemes jūrām. Caurules reizēm ir. Solītais klimats — reti.',
    desert:
      'Vējiaizsargjoslas un «zaļās sienas». Skaiti izdzīvojušo segumu un ūdens cenu, ne stādus paziņojumā.',
    climate:
      'Pētījumi un strīdīgi lauka mēģinājumi. Ne ieviesta planētas inženierija. Ne emisiju samazināšanas aizstājējs.',
  },
  status: {
    proposed: 'Ierosināts',
    partial: 'Daļējs',
    'built-struggling': 'Uzbūvēts, buksē',
    failed: 'Izgāzies',
    ongoing: 'Notiek',
    research: 'Pētījums',
  },
  researchBanner: 'Pētījums / priekšlikums — ne ieviests planētas labojums.',
  proposedBanner: 'Ierosināts — nav uzbūvēts.',
};

const page: Record<Locale, GeoPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const copy: Record<Locale, Record<string, GeoCopy>> = {
  en,
  ru: ruEntries,
  pl: plEntries,
  lv: lvEntries,
};

export function getGeoPage(locale: Locale): GeoPage {
  return page[locale];
}

export function getGeoProjects(locale: Locale): GeoProject[] {
  return geoMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getGeoProjectsByShelf(locale: Locale, shelf: GeoShelf): GeoProject[] {
  return getGeoProjects(locale).filter((item) => item.shelf === shelf);
}

export function getGeoBySlug(locale: Locale, slug: string): GeoProject | undefined {
  const meta = getGeoMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][slug] ?? copy.en[slug];
  if (!fields) return undefined;
  return { ...meta, ...fields };
}

export { geoShelfKeys };
