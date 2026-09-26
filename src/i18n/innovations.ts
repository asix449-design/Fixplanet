import {
  getInnovationMeta,
  innovationAreaKeys,
  innovationMeta,
  type Innovation,
  type InnovationArea,
  type InnovationCopy,
} from '../data/innovations';
import type { Locale } from './config';
import { en } from './innovations-en';
import { pack } from './innovations-pack';
import { lv as lvEntries } from './innovations-lv';
import { pl as plEntries } from './innovations-pl';
import { ru as ruEntries } from './innovations-ru';

export type InnovationsPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  filterAria: string;
  chooseArea: string;
  tiles: Record<InnovationArea, string>;
  all: string;
  cardCta: string;
  back: string;
  what: string;
  problem: string;
  how: string;
  players: string;
  risks: string;
  sourcesLabel: string;
  primarySource: string;
  imageCredit: string;
  empty: string;
  heroAlt: string;
  areas: Record<InnovationArea, string>;
  areaLeads: Record<InnovationArea | 'all', string>;
  status: Record<'research' | 'pilot' | 'deployed' | 'myth-busted', string>;
};

const pageEn: InnovationsPage = {
  metaTitle: 'Innovations — Fix Planet',
  metaDescription:
    'Laboratories and plants that try to cut carbon, restore living systems, or produce energy — ecology, energy, and AI, with status and sources.',
  eyebrow: 'Labs and plants',
  title: 'Innovations',
  lead: 'Laboratories and plants that try to cut carbon, restore reefs and soils, or produce energy without pretending the laws of thermodynamics are optional. Three shelves: ecology, energy, and artificial intelligence.',
  filterAria: 'Filter innovations by area',
  chooseArea: 'Choose an area',
  tiles: {
    ecology: 'Carbon, reefs, protein, plastic — living systems and their waste.',
    energy: 'Fusion, geothermal, storage — and why perpetual motion fails.',
    ai: 'Models for Earth systems, materials, grids, and recycling.',
  },
  all: 'All',
  cardCta: 'Read the card →',
  back: '← Innovations',
  what: 'What it is',
  problem: 'Problem it targets',
  how: 'How it works',
  players: 'Status and players',
  risks: 'Risks and limits',
  sourcesLabel: 'Sources',
  primarySource: 'Source',
  imageCredit: 'Image',
  empty: 'No cards in this area yet.',
  heroAlt:
    'Anonymous dark armor with lime circuit lines overlooking a night Earth grid — generated site hero, not a film still and not a likeness of a named person',
  areas: {
    ecology: 'Ecology',
    energy: 'Energy',
    ai: 'Artificial intelligence',
  },
  areaLeads: {
    all: 'Each card is a real technology or a clearly labeled myth. Status means research, pilot, deployed, or myth-busted.',
    ecology:
      'Carbon removal, circular enzymes, coral husbandry — and now biodiversity evidence, nature-risk screens, and ocean-colour missions from 2024 on.',
    energy:
      'Dense energy that still obeys thermodynamics — fusion, geothermal, storage, hydrogen with losses stated, fission, space solar — and why a closed machine cannot run forever.',
    ai: 'Models and machines aimed at Earth systems, materials, grids, proteins, and recycling — plus methane and fire EO, flood AI, and geospatial embeddings from 2024 on. Weather AI still needs the satellites.',
  },
  status: {
    research: 'Research',
    pilot: 'Pilot',
    deployed: 'Deployed',
    'myth-busted': 'Myth-busted',
  },
};

const pageRu: InnovationsPage = {
  metaTitle: 'Инновации — Fix Planet',
  metaDescription:
    'Лаборатории и установки, которые пытаются убрать углерод, восстановить живые системы или дать энергию — экология, энергия и ИИ, со статусом и источниками.',
  eyebrow: 'Лаборатории и установки',
  title: 'Инновации',
  lead: 'Лаборатории и установки, которые пытаются убрать углерод, восстановить рифы и почвы или дать энергию, не делая вид, что законы термодинамики необязательны. Три полки: экология, энергия и искусственный интеллект.',
  filterAria: 'Фильтр инноваций по области',
  chooseArea: 'Выберите область',
  tiles: {
    ecology: 'Углерод, рифы, белок, пластик — живые системы и их отходы.',
    energy: 'Синтез, геотермия, накопители — и почему вечный двигатель не работает.',
    ai: 'Модели для систем Земли, материалов, сетей и сортировки.',
  },
  all: 'Все',
  cardCta: 'Читать карточку →',
  back: '← Инновации',
  what: 'Что это',
  problem: 'Какую проблему закрывает',
  how: 'Как работает',
  players: 'Статус и участники',
  risks: 'Риски и пределы',
  sourcesLabel: 'Источники',
  primarySource: 'Источник',
  imageCredit: 'Изображение',
  empty: 'В этой области пока нет карточек.',
  heroAlt:
    'Безымянная тёмная броня с лаймовыми контурами схем над ночной сеткой Земли — сгенерированный герой раздела, не кадр фильма и не портрет конкретного человека',
  areas: {
    ecology: 'Экология',
    energy: 'Энергия',
    ai: 'Искусственный интеллект',
  },
  areaLeads: {
    all: 'Каждая карточка — реальная технология или явно помеченный миф. Статус: исследование, пилот, внедрение или разоблачённый миф.',
    ecology:
      'Улавливание углерода, ферменты, кораллы — и теперь доказательства биоразнообразия, скрининг рисков для природы и миссии цвета океана с 2024 года.',
    energy:
      'Плотная энергия в рамках термодинамики — термоядерный синтез, геотермия, накопители, водород с названными потерями, деление ядра, космос — и почему замкнутая машина не может крутиться вечно.',
    ai: 'Модели для систем Земли, материалов, сетей, белков и переработки — плюс EO метана и пожаров, ИИ паводков и геоэмбеддинги с 2024. Погодному ИИ по-прежнему нужны спутники.',
  },
  status: {
    research: 'Исследование',
    pilot: 'Пилот',
    deployed: 'Внедрено',
    'myth-busted': 'Миф',
  },
};

const pagePl: InnovationsPage = {
  metaTitle: 'Innowacje — Fix Planet',
  metaDescription:
    'Laboratoria i instalacje, które próbują ściąć węgiel, odbudować żywe systemy albo dać energię — ekologia, energia i SI, ze statusem i źródłami.',
  eyebrow: 'Laboratoria i instalacje',
  title: 'Innowacje',
  lead: 'Laboratoria i instalacje, które próbują ściąć węgiel, odbudować rafy i gleby albo dać energię, nie udając, że prawa termodynamiki są opcjonalne. Trzy półki: ekologia, energia i sztuczna inteligencja.',
  filterAria: 'Filtruj innowacje według dziedziny',
  chooseArea: 'Wybierz dziedzinę',
  tiles: {
    ecology: 'Węgiel, rafy, białko, plastik — żywe systemy i ich odpady.',
    energy: 'Fuzja, geotermia, magazyny — i dlaczego perpetuum mobile nie działa.',
    ai: 'Modele dla systemów Ziemi, materiałów, sieci i recyklingu.',
  },
  all: 'Wszystkie',
  cardCta: 'Czytaj kartę →',
  back: '← Innowacje',
  what: 'Czym jest',
  problem: 'Jaki problem adresuje',
  how: 'Jak działa',
  players: 'Status i gracze',
  risks: 'Ryzyka i granice',
  sourcesLabel: 'Źródła',
  primarySource: 'Źródło',
  imageCredit: 'Zdjęcie',
  empty: 'W tej dziedzinie nie ma jeszcze kart.',
  heroAlt:
    'Anonimowa ciemna zbroja z limonkowymi obwodami nad nocną siatką Ziemi — wygenerowany hero działu, nie klatka z filmu i nie podobizna konkretnej osoby',
  areas: {
    ecology: 'Ekologia',
    energy: 'Energia',
    ai: 'Sztuczna inteligencja',
  },
  areaLeads: {
    all: 'Każda karta to prawdziwa technologia albo jasno oznaczony mit. Status: badania, pilotaż, wdrożenie albo mit obalony.',
    ecology:
      'Usuwanie węgla, enzymy, korale — a teraz dowody bioróżnorodności, screening ryzyka dla przyrody i misje koloru oceanu od 2024.',
    energy:
      'Gęsta energia zgodna z termodynamiką — fuzja, geotermia, magazyny, wodór z podanymi stratami, rozszczepienie, słońce z orbity — oraz dlaczego zamknięta maszyna nie może kręcić się wiecznie.',
    ai: 'Modele dla systemów Ziemi, materiałów, sieci, białek i recyklingu — plus EO metanu i pożarów, AI powodzi i geo-embeddingi od 2024. AI pogodowe nadal potrzebuje satelitów.',
  },
  status: {
    research: 'Badania',
    pilot: 'Pilotaż',
    deployed: 'Wdrożone',
    'myth-busted': 'Mit',
  },
};

const pageLv: InnovationsPage = {
  metaTitle: 'Inovācijas — Fix Planet',
  metaDescription:
    'Laboratorijas un iekārtas, kas mēģina nogriezt oglekli, atjaunot dzīvās sistēmas vai dot enerģiju — ekoloģija, enerģija un MI, ar statusu un avotiem.',
  eyebrow: 'Laboratorijas un iekārtas',
  title: 'Inovācijas',
  lead: 'Laboratorijas un iekārtas, kas mēģina nogriezt oglekli, atjaunot rifus un augsni vai dot enerģiju, neizliekoties, ka termodinamikas likumi ir neobligāti. Trīs plaukti: ekoloģija, enerģija un mākslīgais intelekts.',
  filterAria: 'Filtrēt inovācijas pēc jomas',
  chooseArea: 'Izvēlies jomu',
  tiles: {
    ecology: 'Ogleklis, rifi, olbaltumvielas, plastmasa — dzīvās sistēmas un to atkritumi.',
    energy: 'Kodolsintēze, ģeotermija, uzkrāšana — un kāpēc mūžīgais dzinējs neizdodas.',
    ai: 'Modeļi Zemes sistēmām, materiāliem, tīkliem un šķirošanai.',
  },
  all: 'Visas',
  cardCta: 'Lasīt kartīti →',
  back: '← Inovācijas',
  what: 'Kas tas ir',
  problem: 'Kādu problēmu risina',
  how: 'Kā tas darbojas',
  players: 'Statuss un dalībnieki',
  risks: 'Riski un robežas',
  sourcesLabel: 'Avoti',
  primarySource: 'Avots',
  imageCredit: 'Attēls',
  empty: 'Šajā jomā vēl nav kartīšu.',
  heroAlt:
    'Anonīmas tumšas bruņas ar laima shēmu līnijām virs nakts Zemes tīkla — ģenerēts sadaļas hero, ne filmas kadrs un ne konkrētas personas līdzība',
  areas: {
    ecology: 'Ekoloģija',
    energy: 'Enerģija',
    ai: 'Mākslīgais intelekts',
  },
  areaLeads: {
    all: 'Katra kartīte ir īsta tehnoloģija vai skaidri marķēts mīts. Statuss: pētījums, izmēģinājums, ieviests vai atmaskots mīts.',
    ecology:
      'Oglekļa uztveršana, enzīmi, koraļļi — un tagad bioloģiskās daudzveidības pierādījumi, dabas riska skrīnings un okeāna krāsas misijas no 2024. gada.',
    energy:
      'Blīva enerģija termodinamikas ietvaros — kodolsintēze, ģeotermija, uzkrāšana, ūdeņradis ar nosauktiem zudumiem, skaldīšana, Saule no orbītas — un kāpēc slēgta mašīna nevar griezties mūžīgi.',
    ai: 'Modeļi Zemes sistēmām, materiāliem, tīkliem, olbaltumvielām un pārstrādei — plus metāna un uguns EO, plūdu AI un ģeoembeddingi no 2024. Laikapstākļu AI joprojām vajag satelītus.',
  },
  status: {
    research: 'Pētījums',
    pilot: 'Izmēģinājums',
    deployed: 'Ieviests',
    'myth-busted': 'Mīts',
  },
};

const page: Record<Locale, InnovationsPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const copy: Record<Locale, Record<string, InnovationCopy>> = {
  en: { ...en, ...pack.en },
  ru: { ...ruEntries, ...pack.ru },
  pl: { ...plEntries, ...pack.pl },
  lv: { ...lvEntries, ...pack.lv },
};

export function getInnovationsPage(locale: Locale): InnovationsPage {
  return page[locale];
}

export function getInnovations(locale: Locale): Innovation[] {
  return innovationMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getInnovationsByArea(locale: Locale, area: InnovationArea): Innovation[] {
  return getInnovations(locale).filter((item) => item.area === area);
}

export function getInnovationBySlug(
  locale: Locale,
  slug: string,
): Innovation | undefined {
  const meta = getInnovationMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][slug] ?? copy.en[slug];
  if (!fields) return undefined;
  return { ...meta, ...fields };
}

export { innovationAreaKeys };
