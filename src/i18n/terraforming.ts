import {
  getGeoMeta,
  geoShelfKeys,
  geoMeta,
  type GeoCopy,
  type GeoProject,
  type GeoShelf,
  type GeoStatus,
} from '../data/terraforming';
import type { Locale } from './config';
import { en } from './terraforming-en';
import { lv as lvEntries } from './terraforming-lv';
import { pl as plEntries } from './terraforming-pl';
import { ru as ruEntries } from './terraforming-ru';

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
  metaTitle: 'Terraforming — Fix Planet',
  metaDescription:
    'Canals, inland seas, and desert belts of trees: landscape megaprojects, plus a separate shelf of climate-intervention proposals, with sources.',
  eyebrow: 'Remaking landscapes',
  title: 'Terraforming',
  lead: 'Canals, inland seas, walls of trees: plans to remake Earth’s surface at the scale of a country or a basin. A smaller shelf holds climate-intervention proposals — solar and marine — kept apart so the terms do not mix.',
  honesty:
    'Each card names a jurisdiction, years, a status, and sources. Mixed results stay mixed.',
  naming:
    'The catalog is called Terraforming because the cards are primarily Earth-transformation megaprojects. Climate geoengineering sits on its own shelf.',
  filterAria: 'Filter projects by shelf',
  chooseShelf: 'Choose a shelf',
  tiles: {
    water: 'Canals, river transfers, inland seas.',
    desert: 'Shelterbelts, mega-planting, oasis agriculture.',
    climate: 'Solar and marine climate proposals, still research.',
  },
  all: 'All',
  cardCta: 'Read the card →',
  back: '← Terraforming',
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
    all: 'Most of these schemes tried to move water or plant a dry belt. A few later ideas try to change the planet’s energy budget instead — still research.',
    water:
      'Canals, pumps, fossil aquifers, and inland-sea dreams. Some pipes exist. Few of the climates they promised do.',
    desert:
      'Shelterbelts and green walls. Surviving cover and water cost matter more than seedlings in a press release.',
    climate:
      'Research and a few outdoor trials. Not deployed planetary engineering, and not a substitute for cutting emissions.',
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
  metaTitle: 'Терраформинг — Fix Planet',
  metaDescription:
    'Каналы, внутренние моря и лесные пояса в пустыне: ландшафтные мегапроекты и отдельная полка климатических вмешательств, с источниками.',
  eyebrow: 'Переделка ландшафта',
  title: 'Терраформинг',
  lead: 'Каналы, внутренние моря, стены деревьев: замыслы переделать поверхность Земли в масштабе страны или бассейна. Климатические вмешательства — солнечные и морские — стоят на отдельной полке, чтобы термины не смешивались.',
  honesty:
    'На каждой карточке — юрисдикция, годы, статус и источники. Смешанные итоги так и написаны.',
  naming:
    'Каталог называется «Терраформинг», потому что карточки — прежде всего мегапроекты преобразования ландшафта. Климатическая геоинженерия — отдельная полка.',
  filterAria: 'Фильтр проектов по полке',
  chooseShelf: 'Выберите полку',
  tiles: {
    water: 'Каналы, переброски рек, внутренние моря.',
    desert: 'Лесополосы, мегапосадки, оазисное земледелие.',
    climate: 'Солнечные и морские климатические предложения, пока исследования.',
  },
  all: 'Все',
  cardCta: 'Читать карточку →',
  back: '← Терраформинг',
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
    all: 'Большинство схем пытались перебросить воду или засадить сухой пояс. Несколько более поздних идей бьют уже не по ландшафту, а по энергетическому бюджету планеты — пока это исследования.',
    water:
      'Каналы, насосы, ископаемые водоносные горизонты и мечты о внутренних морях. Трубы иногда есть. Обещанного климата — почти нет.',
    desert:
      'Лесополосы и зелёные стены. Живой покров и цена воды значат больше, чем саженцы в пресс-релизе.',
    climate:
      'Исследования и несколько полевых опытов. Не развёрнутая инженерия планеты и не замена сокращению выбросов.',
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
  metaTitle: 'Terraformowanie — Fix Planet',
  metaDescription:
    'Kanały, morza śródlądowe i pasy drzew na pustyni: megaprojekty krajobrazowe i osobna półka interwencji klimatycznych, ze źródłami.',
  eyebrow: 'Przekształcanie krajobrazu',
  title: 'Terraformowanie',
  lead: 'Kanały, morza śródlądowe, mury drzew: plany przebudowy powierzchni Ziemi w skali kraju albo basenu. Interwencje klimatyczne — słoneczne i morskie — stoją na osobnej półce, żeby pojęć nie mieszać.',
  honesty:
    'Każda karta ma jurysdykcję, lata, status i źródła. Mieszane wyniki zostają mieszane.',
  naming:
    'Katalog nazywa się Terraformowanie, bo karty to przede wszystkim megaprojekty przekształcania Ziemi. Geoinżynieria klimatu ma własną półkę.',
  filterAria: 'Filtruj projekty według półki',
  chooseShelf: 'Wybierz półkę',
  tiles: {
    water: 'Kanały, przerzuty rzek, morza śródlądowe.',
    desert: 'Pasy wiatrochronne, megasadzenie, rolnictwo oazowe.',
    climate: 'Słoneczne i morskie propozycje klimatyczne, na razie badania.',
  },
  all: 'Wszystkie',
  cardCta: 'Czytaj kartę →',
  back: '← Terraformowanie',
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
    all: 'Większość tych planów chciała przerzucić wodę albo obsadzić suchy pas. Kilka późniejszych idei próbuje zmienić bilans energetyczny planety — na razie badania.',
    water:
      'Kanały, pompy, kopalne wodonośne i sny o morzach w głębi lądu. Rury czasem stoją. Klimat, który obiecywano — rzadko.',
    desert:
      'Pasy wiatrochronne i zielone mury. Przetrwała pokrywa i koszt wody znaczą więcej niż sadzonki z komunikatu.',
    climate:
      'Badania i kilka prób w terenie. Nie wdrożona inżynieria planety i nie substytut cięcia emisji.',
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
  metaTitle: 'Terraformēšana — Fix Planet',
  metaDescription:
    'Kanāli, iekšzemes jūras un koku joslas tuksnesī: ainavu megaprojekti un atsevišķs plaukts klimata iejaukšanās priekšlikumiem, ar avotiem.',
  eyebrow: 'Ainavas pārveidošana',
  title: 'Terraformēšana',
  lead: 'Kanāli, iekšzemes jūras, koku sienas: plāni pārveidot Zemes virsmu valsts vai baseina mērogā. Klimata iejaukšanās — Saules un jūras — stāv atsevišķā plauktā, lai terminus nesajauktu.',
  honesty:
    'Katrā kartītē ir jurisdikcija, gadi, statuss un avoti. Jaukti iznākumi paliek jaukti.',
  naming:
    'Katalogs saucas Terraformēšana, jo kartītes ir vispirms Zemes pārveides megaprojekti. Klimata ģeoinženierija ir savs plaukts.',
  filterAria: 'Filtrēt projektus pēc plaukta',
  chooseShelf: 'Izvēlies plauktu',
  tiles: {
    water: 'Kanāli, upju pārliešana, iekšzemes jūras.',
    desert: 'Vējiaizsargjoslas, milzu stādīšana, oāžu lauksaimniecība.',
    climate: 'Saules un jūras klimata priekšlikumi, pagaidām pētījumi.',
  },
  all: 'Visi',
  cardCta: 'Lasīt kartīti →',
  back: '← Terraformēšana',
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
    all: 'Lielākā daļa shēmu gribēja pārliet ūdeni vai apstādīt sauso joslu. Dažas vēlākas idejas mēģina mainīt planētas enerģijas bilanci — pagaidām pētījumi.',
    water:
      'Kanāli, sūkņi, fosilie ūdensnesēji un sapņi par iekšzemes jūrām. Caurules reizēm ir. Solītais klimats — reti.',
    desert:
      'Vējiaizsargjoslas un zaļās sienas. Izdzīvojušais segums un ūdens cena nozīmē vairāk nekā stādi paziņojumā.',
    climate:
      'Pētījumi un daži lauka mēģinājumi. Ne ieviesta planētas inženierija un ne emisiju samazināšanas aizstājējs.',
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
