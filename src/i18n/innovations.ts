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
    'A curated catalog of real frontier technologies — ecology, energy, and AI — with status, players, limits, and named sources. No free-energy scams.',
  eyebrow: 'Frontier watch',
  title: 'Innovations',
  lead: 'Working attempts and serious laboratories — not press-kit miracles. Three shelves: ecology, energy, and artificial intelligence. Each card names the problem, the method, who is doing it, and what still fails.',
  filterAria: 'Filter innovations by area',
  chooseArea: 'Choose an area',
  tiles: {
    ecology: 'Carbon, reefs, protein, plastic — living systems and their waste.',
    energy: 'Fusion, geothermal, storage — energy that obeys thermodynamics.',
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
  imageCredit: 'Image',
  empty: 'No cards in this area yet.',
  heroAlt:
    'Earth with faint circuit traces — the Innovations section theme, not a photograph of a named satellite',
  areas: {
    ecology: 'Ecology',
    energy: 'Energy',
    ai: 'Artificial intelligence',
  },
  areaLeads: {
    all: 'Every card below is a real technology or a clearly labeled myth. Status means research, pilot, deployed, or myth-busted — not a stock pitch.',
    ecology:
      'Carbon, reefs, protein, plastic, methane, and membranes: projects that try to repair living systems or shrink their waste.',
    energy:
      'Dense and abundant energy that obeys thermodynamics — fusion, geothermal, storage, hydrogen with losses stated, fission, space solar — plus why perpetual motion fails.',
    ai: 'Models and machines aimed at Earth systems, materials, grids, proteins, recycling, and quantum chemistry hopes. Not chatbot hype.',
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
    'Каталог реальных передовых технологий — экология, энергия и ИИ — со статусом, участниками, ограничениями и названными источниками. Без скама «бесплатной энергии».',
  eyebrow: 'Дозор на рубеже',
  title: 'Инновации',
  lead: 'Серьёзные попытки и лаборатории — не чудеса из пресс-китов. Три полки: экология, энергия и искусственный интеллект. На каждой карточке — проблема, метод, кто этим занимается и что пока не получается.',
  filterAria: 'Фильтр инноваций по области',
  chooseArea: 'Выберите область',
  tiles: {
    ecology: 'Углерод, рифы, белок, пластик — живые системы и их отходы.',
    energy: 'Синтез, геотермия, накопители — энергия в рамках термодинамики.',
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
  imageCredit: 'Изображение',
  empty: 'В этой области пока нет карточек.',
  heroAlt:
    'Земля со следами схем — тема раздела «Инновации», не снимок конкретного спутника',
  areas: {
    ecology: 'Экология',
    energy: 'Энергия',
    ai: 'Искусственный интеллект',
  },
  areaLeads: {
    all: 'Каждая карточка — реальная технология или явно помеченный миф. Статус: исследование, пилот, внедрение или разоблачённый миф — не реклама акций.',
    ecology:
      'Углерод, рифы, белок, пластик, метан и мембраны: проекты, которые чинят живые системы или уменьшают их отходы.',
    energy:
      'Плотная и обильная энергия в рамках термодинамики — термоядерный синтез, геотермия, накопители, водород с честными потерями, деление ядра, космос — и почему вечный двигатель не работает.',
    ai: 'Модели и машины для систем Земли, материалов, сетей, белков, сортировки отходов и надежд квантовой химии. Не хайп чат-ботов.',
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
    'Katalog prawdziwych technologii granicznych — ekologia, energia i SI — ze statusem, graczami, limitami i nazwanymi źródłami. Bez oszustw „darmowej energii”.',
  eyebrow: 'Posterunek na froncie',
  title: 'Innowacje',
  lead: 'Poważne próby i laboratoria — nie cuda z teczek prasowych. Trzy półki: ekologia, energia i sztuczna inteligencja. Na każdej karcie: problem, metoda, kto to robi i co jeszcze nie działa.',
  filterAria: 'Filtruj innowacje według dziedziny',
  chooseArea: 'Wybierz dziedzinę',
  tiles: {
    ecology: 'Węgiel, rafy, białko, plastik — żywe systemy i ich odpady.',
    energy: 'Fuzja, geotermia, magazyny — energia zgodna z termodynamiką.',
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
  imageCredit: 'Zdjęcie',
  empty: 'W tej dziedzinie nie ma jeszcze kart.',
  heroAlt:
    'Ziemia z śladami obwodów — tło działu Innowacje, nie zdjęcie konkretnego satelity',
  areas: {
    ecology: 'Ekologia',
    energy: 'Energia',
    ai: 'Sztuczna inteligencja',
  },
  areaLeads: {
    all: 'Każda karta to prawdziwa technologia albo jasno oznaczony mit. Status: badania, pilotaż, wdrożenie albo mit obalony — nie pitch giełdowy.',
    ecology:
      'Węgiel, rafy, białko, plastik, metan i membrany: projekty, które naprawiają żywe systemy albo zmniejszają ich odpady.',
    energy:
      'Gęsta i obfita energia zgodna z termodynamiką — fuzja, geotermia, magazyny, wodór z podanymi stratami, rozszczepienie, słońce z orbity — oraz dlaczego perpetuum mobile nie działa.',
    ai: 'Modele i maszyny dla systemów Ziemi, materiałów, sieci, białek, recyklingu i nadziei chemii kwantowej. Nie hype chatbotów.',
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
    'Kurēts reālu pierobežas tehnoloģiju katalogs — ekoloģija, enerģija un MI — ar statusu, dalībniekiem, robežām un nosauktiem avotiem. Bez «brīvās enerģijas» krāpšanas.',
  eyebrow: 'Pierobežas sardze',
  title: 'Inovācijas',
  lead: 'Nopietni mēģinājumi un laboratorijas — ne preses komplektu brīnumi. Trīs plaukti: ekoloģija, enerģija un mākslīgais intelekts. Katrā kartītē: problēma, metode, kas to dara un kas vēl neizdodas.',
  filterAria: 'Filtrēt inovācijas pēc jomas',
  chooseArea: 'Izvēlies jomu',
  tiles: {
    ecology: 'Ogleklis, rifi, olbaltumvielas, plastmasa — dzīvās sistēmas un to atkritumi.',
    energy: 'Kodolsintēze, ģeotermija, uzkrāšana — enerģija termodinamikas ietvaros.',
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
  imageCredit: 'Attēls',
  empty: 'Šajā jomā vēl nav kartīšu.',
  heroAlt:
    'Zeme ar shēmu pēdām — sadaļas Inovācijas fons, ne konkrēta satelīta foto',
  areas: {
    ecology: 'Ekoloģija',
    energy: 'Enerģija',
    ai: 'Mākslīgais intelekts',
  },
  areaLeads: {
    all: 'Katra kartīte ir īsta tehnoloģija vai skaidri marķēts mīts. Statuss: pētījums, izmēģinājums, ieviests vai atmaskots mīts — ne biržas stāsts.',
    ecology:
      'Ogleklis, rifi, olbaltumvielas, plastmasa, metāns un membrānas: projekti, kas labo dzīvās sistēmas vai samazina to atkritumus.',
    energy:
      'Blīva un bagāta enerģija termodinamikas ietvaros — kodolsintēze, ģeotermija, uzkrāšana, ūdeņradis ar godīgiem zudumiem, skaldīšana, Saule no orbītas — un kāpēc mūžīgais dzinējs neizdodas.',
    ai: 'Modeļi un mašīnas Zemes sistēmām, materiāliem, tīkliem, olbaltumvielām, šķirošanai un kvantu ķīmijas cerībām. Ne tērzēšanas robotu haips.',
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
  en,
  ru: ruEntries,
  pl: plEntries,
  lv: lvEntries,
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
