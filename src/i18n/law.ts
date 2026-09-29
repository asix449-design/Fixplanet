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
import { lawAiPackEn, lawAiPackLv, lawAiPackPl, lawAiPackRu } from './law-ai-pack';
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
  aiCardCta: string;
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
  hubHeroAlt: string;
  photoCredit: string;
  categories: Record<LawCategory, string>;
  categoryLeads: Record<LawCategory, string>;
  status: Record<LawStatus, string>;
  statusLeads: Record<LawStatus, string>;
  aiStatusLeads: Record<LawStatus, string>;
  ideaBanner: string;
  pendingBanner: string;
  aiIdeaBanner: string;
  aiPendingBanner: string;
  related: string;
  openSource: string;
};

const pageEn: LawPage = {
  metaTitle: 'Law — Fix Planet',
  metaDescription:
    'Environmental, AI-safety, and wildlife law: texts in force, bills under consideration, and proposals labeled as ideas, with citations.',
  categoryMetaTitle: {
    ecology: 'Ecology law — Fix Planet',
    ai: 'AI law — Fix Planet',
    animals: 'Animal and habitat law — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Climate, pollution, forest, and circular-economy instruments — enacted, pending, or proposed.',
    ai: 'Safety, risk, transparency, and liability rules for AI systems.',
    animals: 'Wildlife trade, endangered species, habitats, corridor bills, and one labeled companion-animal idea.',
  },
  eyebrow: 'Rules for living systems',
  title: 'Law',
  lead: 'Environmental statutes, rules for high-risk AI, and instruments that protect wildlife and habitats. Each article names a jurisdiction, a citation, and whether the text is in force, still under consideration, or only an idea.',
  honesty:
    'Not legal advice. “In force” means a statute, regulation, or treaty that already binds someone. Ideas stay labeled as ideas — including bills that died after one chamber.',
  filterAria: 'Choose a law category',
  chooseCategory: 'Choose a field',
  tiles: {
    ecology: 'Climate, pollution, forests, land, circular economy.',
    ai: 'Risk tiers, transparency, high-risk systems, liability.',
    animals: 'Wildlife trade, endangered species, habitats, corridors.',
  },
  cardCta: 'Read the article →',
  aiCardCta: 'Read the article',
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
  hubHeroAlt:
    'Golden scales of justice on a lit circular plinth beside a bronze Lady Justice statue in a dark marble lobby at night',
  photoCredit: 'Photo: founder-supplied scales of justice.',
  categories: {
    ecology: 'Ecology',
    ai: 'AI',
    animals: 'Animals',
  },
  categoryLeads: {
    ecology:
      'Climate, pollution, forest, land, and circular-economy instruments. Restoration and clean-air statutes sit next to a plastics negotiation that is still not a treaty.',
    ai: 'Safety, risk management, transparency, and liability for high-risk and frontier systems. A withdrawn liability text is labeled as an idea. Also here: the Council of Europe’s treaty on artificial intelligence, human rights, democracy and the rule of law; the ethics recommendation of the United Nations Educational, Scientific and Cultural Organization (UNESCO); the AI principles of the Organisation for Economic Co-operation and Development (OECD); the AI Risk Management Framework of the U.S. National Institute of Standards and Technology; and the United Kingdom’s approach of regulating AI through its existing regulators.',
    animals:
      'Wildlife trade, endangered-species listing, habitat networks, a live U.S. corridor bill, and one clearly labeled idea about intentional companion-animal cruelty. Habitat and species law first; the companion-animal card is an idea, not a statute.',
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
  aiStatusLeads: {
    existing: 'Texts that are in force: a statute, regulation, directive, or treaty that already binds someone.',
    pending:
      'Bills in a legislature and formal intergovernmental negotiations. A first reading, and a round of an intergovernmental negotiating committee, are stages on the way to a later decision.',
    ideas:
      'Useful proposed laws that remain proposals. Some were formally filed and then withdrawn or left to lapse. Read them as proposals.',
  },
  ideaBanner: 'This is an idea — not enacted law.',
  pendingBanner: 'Under consideration — not enacted.',
  aiIdeaBanner: 'This text is a proposal.',
  aiPendingBanner: 'This text is under consideration.',
  related: 'Related',
  openSource: 'Open source →',
};

const pageRu: LawPage = {
  metaTitle: 'Право — Fix Planet',
  metaDescription:
    'Экологическое право, безопасность ИИ и защита диких видов: действующие тексты, рассматриваемые проекты и предложения, помеченные как идеи, с цитатами.',
  categoryMetaTitle: {
    ecology: 'Экологическое право — Fix Planet',
    ai: 'Право ИИ — Fix Planet',
    animals: 'Право животных и местообитаний — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Климат, загрязнение, леса и циркулярная экономика — принятые, рассматриваемые или предложенные акты.',
    ai: 'Правила безопасности, риска, прозрачности и ответственности для систем ИИ.',
    animals: 'Торговля дикими видами, исчезающие виды, местообитания, коридоры и одна помеченная идея о животных-компаньонах.',
  },
  eyebrow: 'Правила для живых систем',
  title: 'Право',
  lead: 'Экологические законы, правила для высокорискового ИИ и инструменты, которые защищают дикие виды и местообитания. В каждой статье — юрисдикция, цитата и то, действует ли текст, ещё рассматривается или это только идея.',
  honesty:
    'Не юридическая консультация. «Действует» значит закон, регламент или договор, который уже кого-то связывает. Идеи так и подписаны — в том числе законопроекты, прошедшие одну палату и умершие.',
  filterAria: 'Выберите область права',
  chooseCategory: 'Выберите область',
  tiles: {
    ecology: 'Климат, загрязнение, леса, земля, циркулярная экономика.',
    ai: 'Уровни риска, прозрачность, высокорисковые системы, ответственность.',
    animals: 'Торговля дикими видами, исчезающие виды, местообитания, коридоры.',
  },
  cardCta: 'Читать статью →',
  aiCardCta: 'Читать статью',
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
  hubHeroAlt:
    'Золотые весы правосудия на подсвеченном круглом подиуме рядом с бронзовой статуей Фемиды в тёмном мраморном холле ночью',
  photoCredit: 'Фото: снимок основателя — золотые весы правосудия.',
  categories: {
    ecology: 'Экология',
    ai: 'ИИ',
    animals: 'Животные',
  },
  categoryLeads: {
    ecology:
      'Климат, загрязнение, леса, земля и циркулярная экономика. Рядом с законами о восстановлении и чистом воздухе — переговоры о пластике, которые ещё не договор.',
    ai: 'Безопасность, риск, прозрачность и ответственность для высокорисковых и передовых систем. Отозванный текст об ответственности помечен как идея. Здесь также: договор Совета Европы об искусственном интеллекте, правах человека, демократии и верховенстве права; рекомендация по этике Организации Объединённых Наций по вопросам образования, науки и культуры (ЮНЕСКО); принципы искусственного интеллекта Организации экономического сотрудничества и развития (ОЭСР); рамочная программа управления рисками искусственного интеллекта Национального института стандартов и технологий США; и британский подход, при котором искусственный интеллект регулируют уже существующие надзорные органы.',
    animals:
      'Торговля дикими видами, списки исчезающих, сети местообитаний, живой американский законопроект о коридорах и одна явно помеченная идея о паритете умышленной жестокости к животному-компаньону. Сначала право видов и местообитаний; карточка о компаньонах — идея, не статут.',
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
  aiStatusLeads: {
    existing: 'Тексты, которые уже действуют: закон, регламент, директива или договор, который уже кого-то связывает.',
    pending:
      'Законопроекты в парламенте и формальные межгосударственные переговоры. Первое чтение и раунд межправительственного переговорного комитета являются этапами на пути к позднейшему решению.',
    ideas:
      'Полезные предложенные законы, которые остаются предложениями. Некоторые официально вносили, потом отозвали или оставили без движения. Читайте их как предложения.',
  },
  ideaBanner: 'Это идея — не принятый закон.',
  pendingBanner: 'На рассмотрении — не принято.',
  aiIdeaBanner: 'Этот текст остаётся предложением.',
  aiPendingBanner: 'Этот текст на рассмотрении.',
  related: 'Смежные',
  openSource: 'Открыть источник →',
};

const pagePl: LawPage = {
  metaTitle: 'Prawo — Fix Planet',
  metaDescription:
    'Prawo środowiskowe, bezpieczeństwo SI i ochrona dzikich gatunków: teksty obowiązujące, projekty rozpatrywane i propozycje oznaczone jako idee, z cytatami.',
  categoryMetaTitle: {
    ecology: 'Prawo ekologiczne — Fix Planet',
    ai: 'Prawo SI — Fix Planet',
    animals: 'Prawo zwierząt i siedlisk — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Klimat, zanieczyszczenia, lasy i obieg zamknięty — ustawy uchwalone, procedowane albo proponowane.',
    ai: 'Bezpieczeństwo, ryzyko, przejrzystość i odpowiedzialność systemów SI.',
    animals: 'Handel gatunkami, gatunki zagrożone, siedliska, projekty korytarzy i jedna oznaczona idea o zwierzętach towarzyszących.',
  },
  eyebrow: 'Reguły dla żywych systemów',
  title: 'Prawo',
  lead: 'Ustawy środowiskowe, reguły dla SI wysokiego ryzyka i instrumenty chroniące dzikie gatunki i siedliska. W każdym artykule: jurysdykcja, cytat i to, czy tekst obowiązuje, jest jeszcze rozpatrywany, czy to tylko idea.',
  honesty:
    'To nie porada prawna. „Obowiązuje” znaczy ustawa, rozporządzenie albo traktat, który już kogoś wiąże. Idee zostają ideami — także projekty, które przeszły jedną izbę i padły.',
  filterAria: 'Wybierz dziedzinę prawa',
  chooseCategory: 'Wybierz dziedzinę',
  tiles: {
    ecology: 'Klimat, zanieczyszczenia, lasy, ziemia, obieg zamknięty.',
    ai: 'Poziomy ryzyka, przejrzystość, systemy wysokiego ryzyka, odpowiedzialność.',
    animals: 'Handel dzikimi gatunkami, gatunki zagrożone, siedliska, korytarze.',
  },
  cardCta: 'Czytaj artykuł →',
  aiCardCta: 'Czytaj artykuł',
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
  hubHeroAlt:
    'Złote wagi sprawiedliwości na podświetlonym okrągłym podium obok brązowego posągu Temidy w ciemnym marmurowym holu nocą',
  photoCredit: 'Zdjęcie: zdjęcie założyciela — złote wagi sprawiedliwości.',
  categories: {
    ecology: 'Ekologia',
    ai: 'SI',
    animals: 'Zwierzęta',
  },
  categoryLeads: {
    ecology:
      'Klimat, zanieczyszczenia, lasy, ziemia i obieg zamknięty. Obok ustaw o restytucji i czystym powietrzu — negocjacje o plastiku, które nie są jeszcze traktatem.',
    ai: 'Bezpieczeństwo, ryzyko, przejrzystość i odpowiedzialność systemów wysokiego ryzyka i granicznych. Wycofany tekst o odpowiedzialności jest ideą. Znajdziesz tu także: traktat Rady Europy o sztucznej inteligencji, prawach człowieka, demokracji i praworządności; zalecenie w sprawie etyki Organizacji Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury; zasady dotyczące sztucznej inteligencji Organizacji Współpracy Gospodarczej i Rozwoju; ramy zarządzania ryzykiem sztucznej inteligencji Narodowego Instytutu Standaryzacji i Technologii Stanów Zjednoczonych; oraz brytyjskie podejście, w którym sztuczną inteligencję regulują istniejące organy nadzoru.',
    animals:
      'Handel dzikimi gatunkami, listy zagrożonych, sieci siedlisk, żywy amerykański projekt o korytarzach i jedna jasno oznaczona idea o parytecie umyślnego znęcania się nad zwierzęciem towarzyszącym. Najpierw prawo gatunków i siedlisk; karta o zwierzętach towarzyszących jest ideą, nie statutem.',
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
  aiStatusLeads: {
    existing: 'Teksty, które obowiązują: ustawa, rozporządzenie, dyrektywa albo traktat, który już kogoś wiąże.',
    pending:
      'Projekty w parlamencie i formalne negocjacje międzyrządowe. Pierwsze czytanie oraz runda międzyrządowego komitetu negocjacyjnego są etapami na drodze do późniejszej decyzji.',
    ideas:
      'Użyteczne propozycje, które pozostają propozycjami. Niektóre formalnie złożono, potem wycofano albo pozostawiono bez uchwalenia. Czytaj je jako propozycje.',
  },
  ideaBanner: 'To jest idea — nie uchwalone prawo.',
  pendingBanner: 'Rozpatrywane — nie uchwalone.',
  aiIdeaBanner: 'Ten tekst pozostaje propozycją.',
  aiPendingBanner: 'Ten tekst jest w trakcie rozpatrywania.',
  related: 'Powiązane',
  openSource: 'Otwórz źródło →',
};

const pageLv: LawPage = {
  metaTitle: 'Tiesības — Fix Planet',
  metaDescription:
    'Vides tiesības, MI drošība un savvaļas sugu aizsardzība: spēkā esoši teksti, izskatīšanā esoši projekti un priekšlikumi, kas marķēti kā idejas, ar citātiem.',
  categoryMetaTitle: {
    ecology: 'Ekoloģijas tiesības — Fix Planet',
    ai: 'MI tiesības — Fix Planet',
    animals: 'Dzīvnieku un dzīvotņu tiesības — Fix Planet',
  },
  categoryMetaDescription: {
    ecology: 'Klimats, piesārņojums, meži un aprites ekonomika — pieņemti, izskatīšanā vai ierosināti akti.',
    ai: 'MI sistēmu drošība, risks, caurredzamība un atbildība.',
    animals: 'Savvaļas tirdzniecība, apdraudētās sugas, dzīvotnes, koridoru likumprojekti un viena marķēta ideja par kompanjondzīvniekiem.',
  },
  eyebrow: 'Noteikumi dzīvajām sistēmām',
  title: 'Tiesības',
  lead: 'Vides likumi, noteikumi augsta riska MI un instrumenti, kas sargā savvaļas sugas un dzīvotnes. Katrā rakstā: jurisdikcija, citāts un tas, vai teksts ir spēkā, vēl izskatīšanā, vai tā ir tikai ideja.',
  honesty:
    'Nav juridiska konsultācija. «Spēkā» nozīmē likumu, regulu vai līgumu, kas jau kādu saista. Idejas paliek idejas — arī projekti, kas izgāja vienu palātu un nomira.',
  filterAria: 'Izvēlies tiesību jomu',
  chooseCategory: 'Izvēlies jomu',
  tiles: {
    ecology: 'Klimats, piesārņojums, meži, zeme, aprites ekonomika.',
    ai: 'Riska līmeņi, caurredzamība, augsta riska sistēmas, atbildība.',
    animals: 'Savvaļas tirdzniecība, apdraudētās sugas, dzīvotnes, koridori.',
  },
  cardCta: 'Lasīt rakstu →',
  aiCardCta: 'Lasīt rakstu',
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
  hubHeroAlt:
    'Zelta taisnības svari uz apgaismota apaļa podiuma blakus bronzas Tēmisas statujai tumšā marmora vestibilā naktī',
  photoCredit: 'Foto: dibinātāja piegādāti zelta taisnības svari.',
  categories: {
    ecology: 'Ekoloģija',
    ai: 'MI',
    animals: 'Dzīvnieki',
  },
  categoryLeads: {
    ecology:
      'Klimats, piesārņojums, meži, zeme un aprites ekonomika. Blakus atjaunošanas un tīrā gaisa statūtiem — plastmasas sarunas, kas vēl nav līgums.',
    ai: 'Drošība, risks, caurredzamība un atbildība augsta riska un robežsistēmām. Atsaukts atbildības teksts ir ideja. Šeit arī: Eiropas Padomes līgums par mākslīgo intelektu, cilvēktiesībām, demokrātiju un tiesiskumu; Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācijas ieteikums par ētiku; Ekonomiskās sadarbības un attīstības organizācijas mākslīgā intelekta principi; Amerikas Savienoto Valstu Nacionālā standartu un tehnoloģiju institūta mākslīgā intelekta risku pārvaldības ietvars; un Apvienotās Karalistes pieeja, kurā mākslīgo intelektu regulē esošās uzraudzības iestādes.',
    animals:
      'Savvaļas tirdzniecība, apdraudēto saraksti, dzīvotņu tīkli, dzīvs ASV koridoru likumprojekts un viena skaidri marķēta ideja par tīšas cietsirdības pret kompanjondzīvnieku paritāti. Vispirms sugu un dzīvotņu tiesības; kompanjonu kartīte ir ideja, ne statūts.',
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
  aiStatusLeads: {
    existing: 'Teksti, kas ir spēkā: likums, regula, direktīva vai līgums, kas jau kādu saista.',
    pending:
      'Likumprojekti parlamentā un formālas starpvaldību sarunas. Pirmais lasījums un starpvaldību sarunu komitejas kārta ir posmi ceļā uz vēlāku lēmumu.',
    ideas:
      'Noderīgi ierosināti likumi, kas paliek priekšlikumi. Dažus formāli iesniedza, tad atsauca vai atstāja bez tālākas virzības. Lasi tos kā priekšlikumus.',
  },
  ideaBanner: 'Šī ir ideja — ne pieņemts likums.',
  pendingBanner: 'Izskatīšanā — nav pieņemts.',
  aiIdeaBanner: 'Šis teksts paliek priekšlikums.',
  aiPendingBanner: 'Šis teksts ir izskatīšanā.',
  related: 'Saistītie',
  openSource: 'Atvērt avotu →',
};

const page: Record<Locale, LawPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const copy: Record<Locale, Record<string, LawCopy>> = {
  en: { ...en, ...lawAiPackEn },
  ru: { ...ruEntries, ...lawAiPackRu },
  pl: { ...plEntries, ...lawAiPackPl },
  lv: { ...lvEntries, ...lawAiPackLv },
};

const aiLiveSlugs = [
  'eu-ai-act',
  'korea-ai-basic-act',
  'china-generative-ai',
  'california-sb-53',
  'canada-c-36',
  'ai-civil-liability',
] as const;

const aiNewSlugs = [
  'coe-ai-framework-convention',
  'unesco-ai-ethics',
  'oecd-ai-principles',
  'nist-ai-rmf',
  'uk-ai-regulation',
] as const;

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

/** Live AI cards point at the five new texts. Each new card points at the other four. */
export function getRelatedLaws(locale: Locale, slug: string): LawEntry[] {
  const slugs = (aiLiveSlugs as readonly string[]).includes(slug)
    ? [...aiNewSlugs]
    : (aiNewSlugs as readonly string[]).includes(slug)
      ? aiNewSlugs.filter((item) => item !== slug)
      : [];
  return slugs.flatMap((item) => {
    const entry = getLawBySlug(locale, item);
    return entry ? [entry] : [];
  });
}

export { lawCategoryKeys, lawStatusKeys };
