import {
  getLawMeta,
  lawCategoryKeys,
  lawMeta,
  lawStatusKeys,
  type LawCategory,
  type LawCopy,
  type LawEntry,
  type LawStatus,
} from '../data/law';
import type { Locale } from './config';
import { en } from './law-en';
import { lv as lvEntries } from './law-lv';
import { pl as plEntries } from './law-pl';
import { ru as ruEntries } from './law-ru';

export type LawPage = {
  metaTitle: string;
  metaDescription: string;
  categoryMetaTitle: Record<LawCategory, string>;
  categoryMetaDescription: Record<LawCategory, string>;
  eyebrow: string;
  title: string;
  lead: string;
  honesty: string;
  filterAria: string;
  chooseCategory: string;
  tiles: Record<LawCategory, string>;
  cardCta: string;
  back: string;
  backCategory: string;
  what: string;
  where: string;
  effects: string;
  caveats: string;
  sourcesLabel: string;
  officialLabel: string;
  citationLabel: string;
  jurisdictionLabel: string;
  yearLabel: string;
  imageCredit: string;
  empty: string;
  heroAlt: string;
  categories: Record<LawCategory, string>;
  categoryLeads: Record<LawCategory, string>;
  status: Record<LawStatus, string>;
  statusLeads: Record<LawStatus, string>;
  ideaBanner: string;
  pendingBanner: string;
  openSource: string;
};

const pageEn: LawPage = {
  metaTitle: 'Law — Fix Planet',
  metaDescription:
    'A curated catalog of real environmental, AI-safety, and wildlife laws — enacted, under consideration, or clearly labeled ideas — with citations and sources.',
  categoryMetaTitle: {
    ecology: 'Ecology law — Fix Planet',
    ai: 'AI law — Fix Planet',
    animals: 'Animal and habitat law — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Enacted, pending, and proposed laws on climate, pollution, forests, and circular economy.',
    ai: 'Safety, risk, transparency, and liability rules for AI systems — not tech cheerleading.',
    animals: 'Wildlife trade, endangered species, and habitat instruments, with pending corridor bills and labeled ideas.',
  },
  eyebrow: 'Statute shelf',
  title: 'Law',
  lead: 'Three shelves of rules that try to protect living systems and constrain high-risk machines. Every card names a jurisdiction, a citation, a status, and a source. Ideas are labeled ideas.',
  honesty:
    'This is a curated catalog, not an encyclopedia and not legal advice. Enacted means a text in force. Under consideration means a bill or a formal negotiation that has not become law. Ideas are useful proposals that are not in force — including texts that once passed one chamber and then died. We do not invent statutes, dates, or impact statistics.',
  filterAria: 'Choose a law category',
  chooseCategory: 'Choose a field',
  tiles: {
    ecology: 'Climate, pollution, forests, land, and circular-economy rules.',
    ai: 'Risk tiers, transparency, high-risk systems, liability — the safety shelf.',
    animals: 'Wildlife trade, endangered species, habitats, and corridors.',
  },
  cardCta: 'Read the article →',
  back: '← Law',
  backCategory: '← Category',
  what: 'What it does',
  where: 'Where it applies / status',
  effects: 'Documented benefits or intended effects',
  caveats: 'Caveats',
  sourcesLabel: 'Sources',
  officialLabel: 'Official name',
  citationLabel: 'Citation',
  jurisdictionLabel: 'Jurisdiction',
  yearLabel: 'Year / status',
  imageCredit: 'Image',
  empty: 'No entries on this shelf yet.',
  heroAlt:
    'The European Parliament hemicycle — institutional backdrop for the Law section, not a photograph of a named vote',
  categories: {
    ecology: 'Ecology',
    ai: 'AI',
    animals: 'Animals',
  },
  categoryLeads: {
    ecology:
      'Environmental, climate, pollution, forest, and circular-economy instruments. Restoration and clean-air statutes sit next to a plastics negotiation that is still not a treaty.',
    ai: 'Safety, risk management, transparency, and liability — not generic tech optimism. High-risk systems and frontier reporting, with a withdrawn liability idea labeled as an idea.',
    animals:
      'Wildlife trade, endangered-species listing, habitat networks, and a live U.S. corridor bill. Habitat and species law, not a farmed-animal campaign page.',
  },
  status: {
    existing: 'Existing / enacted',
    pending: 'Under consideration',
    ideas: 'Ideas',
  },
  statusLeads: {
    existing: 'Texts that are in force — a statute, regulation, directive, or treaty that already binds someone.',
    pending:
      'Bills in a legislature or a formal intergovernmental negotiation. Not law yet. A first reading or an INC round is not an enactment.',
    ideas:
      'Useful proposed laws that are not in force. Some were formally filed and then withdrawn or left to die. They must not be read as enacted.',
  },
  ideaBanner: 'This is an idea — not enacted law.',
  pendingBanner: 'Under consideration — not enacted.',
  openSource: 'Open source →',
};

const pageRu: LawPage = {
  metaTitle: 'Право — Fix Planet',
  metaDescription:
    'Каталог реальных законов об окружающей среде, безопасности ИИ и дикой природе — принятых, рассматриваемых или явно помеченных как идеи — с цитатами и источниками.',
  categoryMetaTitle: {
    ecology: 'Экологическое право — Fix Planet',
    ai: 'Право ИИ — Fix Planet',
    animals: 'Право животных и местообитаний — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Принятые, рассматриваемые и предложенные законы о климате, загрязнении, лесах и циркулярной экономике.',
    ai: 'Правила безопасности, риска, прозрачности и ответственности для систем ИИ — не реклама технологий.',
    animals: 'Торговля дикими видами, исчезающие виды и местообитания, плюс законопроекты о коридорах и помеченные идеи.',
  },
  eyebrow: 'Полка статутов',
  title: 'Право',
  lead: 'Три полки правил, которые пытаются защитить живые системы и ограничить опасные машины. На каждой карточке — юрисдикция, цитата, статус и источник. Идеи помечены как идеи.',
  honesty:
    'Это курируемый каталог, не энциклопедия и не юридическая консультация. «Принято» значит, что текст действует. «На рассмотрении» — законопроект или формальные переговоры, которые ещё не стали законом. «Идеи» — полезные предложения, которые не действуют, в том числе тексты, прошедшие одну палату и умершие. Мы не выдумываем статуты, даты и цифры эффекта.',
  filterAria: 'Выберите область права',
  chooseCategory: 'Выберите область',
  tiles: {
    ecology: 'Климат, загрязнение, леса, земля и циркулярная экономика.',
    ai: 'Уровни риска, прозрачность, высокорисковые системы, ответственность.',
    animals: 'Торговля дикими видами, исчезающие виды, местообитания и коридоры.',
  },
  cardCta: 'Читать статью →',
  back: '← Право',
  backCategory: '← Раздел',
  what: 'Что делает',
  where: 'Где действует / статус',
  effects: 'Документированные выгоды или заявленный эффект',
  caveats: 'Оговорки',
  sourcesLabel: 'Источники',
  officialLabel: 'Официальное название',
  citationLabel: 'Цитата',
  jurisdictionLabel: 'Юрисдикция',
  yearLabel: 'Год / статус',
  imageCredit: 'Изображение',
  empty: 'На этой полке пока нет записей.',
  heroAlt:
    'Полукруг Европейского парламента — институциональный фон раздела «Право», не снимок конкретного голосования',
  categories: {
    ecology: 'Экология',
    ai: 'ИИ',
    animals: 'Животные',
  },
  categoryLeads: {
    ecology:
      'Инструменты по среде, климату, загрязнению, лесам и циркулярной экономике. Рядом с законами о восстановлении и чистом воздухе — переговоры о пластике, которые ещё не договор.',
    ai: 'Безопасность, риск, прозрачность и ответственность — не технооптимизм. Высокий риск и отчётность по frontier-моделям; отозванная идея об ответственности помечена как идея.',
    animals:
      'Торговля дикими видами, списки исчезающих, сети местообитаний и живой американский законопроект о коридорах. Право видов и местообитаний, не кампания о фермерских животных.',
  },
  status: {
    existing: 'Действующие',
    pending: 'На рассмотрении',
    ideas: 'Идеи',
  },
  statusLeads: {
    existing: 'Тексты, которые действуют: закон, регламент, директива или договор, который уже кого-то связывает.',
    pending:
      'Законопроекты в парламенте или формальные межгосударственные переговоры. Ещё не закон. Первое чтение или раунд INC — не принятие.',
    ideas:
      'Полезные предложенные законы, которые не действуют. Некоторые официально вносили, потом отозвали или дали умереть. Их нельзя читать как принятый закон.',
  },
  ideaBanner: 'Это идея — не принятый закон.',
  pendingBanner: 'На рассмотрении — не принято.',
  openSource: 'Открыть источник →',
};

const pagePl: LawPage = {
  metaTitle: 'Prawo — Fix Planet',
  metaDescription:
    'Katalog prawdziwych ustaw środowiskowych, bezpieczeństwa SI i ochrony dzikich gatunków — uchwalonych, rozpatrywanych albo jasno oznaczonych jako idee — z cytatami i źródłami.',
  categoryMetaTitle: {
    ecology: 'Prawo ekologiczne — Fix Planet',
    ai: 'Prawo SI — Fix Planet',
    animals: 'Prawo zwierząt i siedlisk — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Ustawy uchwalone, procedowane i proponowane: klimat, zanieczyszczenia, lasy, gospodarka o obiegu zamkniętym.',
    ai: 'Bezpieczeństwo, ryzyko, przejrzystość i odpowiedzialność systemów SI — nie reklama technologii.',
    animals: 'Handel gatunkami, gatunki zagrożone, siedliska, projekty korytarzy i oznaczone idee.',
  },
  eyebrow: 'Półka statutów',
  title: 'Prawo',
  lead: 'Trzy półki reguł, które próbują chronić żywe systemy i ograniczać ryzykowne maszyny. Na każdej karcie: jurysdykcja, cytat, status i źródło. Idee są oznaczone jako idee.',
  honesty:
    'To kuratorski katalog, nie encyklopedia i nie porada prawna. „Uchwalone” znaczy, że tekst obowiązuje. „Rozpatrywane” to projekt ustawy albo formalne negocjacje, które nie stały się prawem. „Idee” to użyteczne propozycje, które nie obowiązują — w tym teksty, które przeszły jedną izbę i padły. Nie wymyślamy statutów, dat ani statystyk skutku.',
  filterAria: 'Wybierz dziedzinę prawa',
  chooseCategory: 'Wybierz dziedzinę',
  tiles: {
    ecology: 'Klimat, zanieczyszczenia, lasy, ziemia i obieg zamknięty.',
    ai: 'Poziomy ryzyka, przejrzystość, systemy wysokiego ryzyka, odpowiedzialność.',
    animals: 'Handel dzikimi gatunkami, gatunki zagrożone, siedliska i korytarze.',
  },
  cardCta: 'Czytaj artykuł →',
  back: '← Prawo',
  backCategory: '← Dział',
  what: 'Co robi',
  where: 'Gdzie obowiązuje / status',
  effects: 'Udokumentowane korzyści albo zamierzony skutek',
  caveats: 'Zastrzeżenia',
  sourcesLabel: 'Źródła',
  officialLabel: 'Nazwa oficjalna',
  citationLabel: 'Cytat',
  jurisdictionLabel: 'Jurysdykcja',
  yearLabel: 'Rok / status',
  imageCredit: 'Zdjęcie',
  empty: 'Na tej półce nie ma jeszcze wpisów.',
  heroAlt:
    'Hemicycle Parlamentu Europejskiego — instytucjonalne tło działu Prawo, nie zdjęcie konkretnego głosowania',
  categories: {
    ecology: 'Ekologia',
    ai: 'SI',
    animals: 'Zwierzęta',
  },
  categoryLeads: {
    ecology:
      'Instrumenty środowiskowe, klimatyczne, antyzanieczyszczeniowe, leśne i cyrkularne. Obok ustaw o restytucji i czystym powietrzu — negocjacje o plastiku, które nie są jeszcze traktatem.',
    ai: 'Bezpieczeństwo, ryzyko, przejrzystość i odpowiedzialność — nie technologiczny optymizm. Wysokie ryzyko i raportowanie modeli granicznych; wycofana dyrektywa o odpowiedzialności jest ideą.',
    animals:
      'Handel dzikimi gatunkami, listy zagrożonych, sieci siedlisk i żywy amerykański projekt o korytarzach. Prawo gatunków i siedlisk, nie kampania o zwierzętach hodowlanych.',
  },
  status: {
    existing: 'Obowiązujące',
    pending: 'Rozpatrywane',
    ideas: 'Idee',
  },
  statusLeads: {
    existing: 'Teksty, które obowiązują: ustawa, rozporządzenie, dyrektywa albo traktat, który już kogoś wiąże.',
    pending:
      'Projekty w parlamencie albo formalne negocjacje międzyrządowe. Jeszcze nie prawo. Pierwsze czytanie albo runda INC to nie uchwalenie.',
    ideas:
      'Użyteczne propozycje, które nie obowiązują. Niektóre formalnie złożono, potem wycofano albo zostawiono. Nie wolno ich czytać jako uchwalonego prawa.',
  },
  ideaBanner: 'To jest idea — nie uchwalone prawo.',
  pendingBanner: 'Rozpatrywane — nie uchwalone.',
  openSource: 'Otwórz źródło →',
};

const pageLv: LawPage = {
  metaTitle: 'Tiesības — Fix Planet',
  metaDescription:
    'Kurēts reālu vides, MI drošības un savvaļas sugu likumu katalogs — spēkā esoši, izskatīšanā vai skaidri marķēti kā idejas — ar citātiem un avotiem.',
  categoryMetaTitle: {
    ecology: 'Ekoloģijas tiesības — Fix Planet',
    ai: 'MI tiesības — Fix Planet',
    animals: 'Dzīvnieku un dzīvotņu tiesības — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Pieņemti, izskatīšanā un ierosināti likumi par klimatu, piesārņojumu, mežiem un aprites ekonomiku.',
    ai: 'MI sistēmu drošība, risks, caurredzamība un atbildība — ne tehnoloģiju reklāma.',
    animals: 'Savvaļas tirdzniecība, apdraudētās sugas, dzīvotnes, koridoru likumprojekti un marķētas idejas.',
  },
  eyebrow: 'Statūtu plaukts',
  title: 'Tiesības',
  lead: 'Trīs plaukti ar noteikumiem, kas mēģina sargāt dzīvās sistēmas un ierobežot bīstamas mašīnas. Katrā kartītē: jurisdikcija, citāts, statuss un avots. Idejas ir marķētas kā idejas.',
  honesty:
    'Šis ir kurēts katalogs, ne enciklopēdija un ne juridiska konsultācija. «Spēkā» nozīmē, ka teksts darbojas. «Izskatīšanā» ir likumprojekts vai formālas sarunas, kas vēl nav likums. «Idejas» ir noderīgi priekšlikumi, kas nav spēkā, arī teksti, kas izgāja vienu palātu un nomira. Mēs neizdomājam statūtus, datumus un ietekmes statistiku.',
  filterAria: 'Izvēlies tiesību jomu',
  chooseCategory: 'Izvēlies jomu',
  tiles: {
    ecology: 'Klimats, piesārņojums, meži, zeme un aprites ekonomika.',
    ai: 'Riska līmeņi, caurredzamība, augsta riska sistēmas, atbildība.',
    animals: 'Savvaļas tirdzniecība, apdraudētās sugas, dzīvotnes un koridori.',
  },
  cardCta: 'Lasīt rakstu →',
  back: '← Tiesības',
  backCategory: '← Sadaļa',
  what: 'Ko tas dara',
  where: 'Kur piemēro / statuss',
  effects: 'Dokumentēti ieguvumi vai iecerētais efekts',
  caveats: 'Atrunas',
  sourcesLabel: 'Avoti',
  officialLabel: 'Oficiālais nosaukums',
  citationLabel: 'Citāts',
  jurisdictionLabel: 'Jurisdikcija',
  yearLabel: 'Gads / statuss',
  imageCredit: 'Attēls',
  empty: 'Šajā plauktā vēl nav ierakstu.',
  heroAlt:
    'Eiropas Parlamenta hemikikls — sadaļas Tiesības institucionālais fons, ne konkrēta balsojuma foto',
  categories: {
    ecology: 'Ekoloģija',
    ai: 'MI',
    animals: 'Dzīvnieki',
  },
  categoryLeads: {
    ecology:
      'Vides, klimata, piesārņojuma, mežu un aprites instrumenti. Blakus atjaunošanas un tīrā gaisa statūtiem — plastmasas sarunas, kas vēl nav līgums.',
    ai: 'Drošība, risks, caurredzamība un atbildība — ne tehnoloģiju optimisms. Augsts risks un robežmodeļu ziņošana; atsaukta atbildības ideja ir ideja.',
    animals:
      'Savvaļas tirdzniecība, apdraudēto saraksti, dzīvotņu tīkli un dzīvs ASV koridoru likumprojekts. Sugu un dzīvotņu tiesības, ne lauksaimniecības dzīvnieku kampaņa.',
  },
  status: {
    existing: 'Spēkā / pieņemti',
    pending: 'Izskatīšanā',
    ideas: 'Idejas',
  },
  statusLeads: {
    existing: 'Teksti, kas ir spēkā — likums, regula, direktīva vai līgums, kas jau kādu saista.',
    pending:
      'Likumprojekti parlamentā vai formālas starpvalstu sarunas. Vēl nav likums. Pirmais lasījums vai INC kārta nav pieņemšana.',
    ideas:
      'Noderīgi ierosināti likumi, kas nav spēkā. Dažus formāli iesniedza, tad atsauca vai ļāva nomirt. Tos nedrīkst lasīt kā pieņemtu likumu.',
  },
  ideaBanner: 'Šī ir ideja — ne pieņemts likums.',
  pendingBanner: 'Izskatīšanā — nav pieņemts.',
  openSource: 'Atvērt avotu →',
};

const page: Record<Locale, LawPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const copy: Record<Locale, Record<string, LawCopy>> = {
  en,
  ru: ruEntries,
  pl: plEntries,
  lv: lvEntries,
};

export function getLawPage(locale: Locale): LawPage {
  return page[locale];
}

export function getLaws(locale: Locale): LawEntry[] {
  return lawMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getLawsByCategory(locale: Locale, category: LawCategory): LawEntry[] {
  return getLaws(locale).filter((item) => item.category === category);
}

export function getLawsByShelf(
  locale: Locale,
  category: LawCategory,
  status: LawStatus,
): LawEntry[] {
  return getLawsByCategory(locale, category).filter((item) => item.status === status);
}

export function getLawBySlug(locale: Locale, slug: string): LawEntry | undefined {
  const meta = getLawMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][slug] ?? copy.en[slug];
  if (!fields) return undefined;
  return { ...meta, ...fields };
}

export { lawCategoryKeys, lawStatusKeys };
