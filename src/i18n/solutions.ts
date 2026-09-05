import { solutionMeta, type Solution, type SolutionCopy } from '../data/solutions';
import type { Locale } from './config';

const en: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Freshwater scarcity',
    fixTitle: 'Drip irrigation',
    problem: 'Dry regions lose most irrigation water to evaporation and runoff.',
    fix: 'Drip irrigation delivers water to the root — less waste, higher yield.',
    imageAlt: 'Young corn plant in dry soil watered by a black drip-irrigation line',
  },
  'constructed-wetlands': {
    problemTitle: 'River & coastal pollution',
    fixTitle: 'Constructed wetlands',
    problem: 'Nutrients and sewage feed toxic algae and kill fish.',
    fix: 'Constructed wetlands filter water as living treatment systems.',
    imageAlt: 'Constructed wetland with reeds, clear shallow water, and a wooden boardwalk',
  },
  'sustainable-forestry': {
    problemTitle: 'Deforestation',
    fixTitle: 'Sustainable forestry',
    problem: 'Slow-growing timber drives logging of old forests.',
    fix: 'Fast-growing plantation species and sustainable forestry for building wood — pressure off wild forests.',
    imageAlt: 'Misty forestry track with stacked logs and rows of plantation trees',
  },
  'anaerobic-digesters': {
    problemTitle: 'Food waste & methane',
    fixTitle: 'Anaerobic digesters',
    problem: 'Landfilled food waste releases methane, a potent greenhouse gas.',
    fix: 'Anaerobic digesters turn waste into biogas and soil fertilizer.',
    imageAlt: 'Aerial view of three green-domed anaerobic digester tanks in farmland',
  },
  'cool-roofs': {
    problemTitle: 'Urban heat',
    fixTitle: 'Cool roofs',
    problem: 'Dark roofs and asphalt trap heat and spike energy use.',
    fix: 'Cool roofs and reflective coatings lower temperatures and cut AC demand.',
    imageAlt: 'Urban rooftops coated in reflective white cool-roof material',
  },
  'lower-clinker-cement': {
    problemTitle: 'Cement emissions',
    fixTitle: 'Lower-clinker cements',
    problem: 'Ordinary cement is a major source of global CO₂.',
    fix: 'Lower-clinker cements (e.g. calcined clay & limestone blends) cut emissions at scale.',
    imageAlt: 'Cement plant with piles of pale powder, crushed stone, and sand',
  },
  'river-interceptors': {
    problemTitle: 'Plastic leakage',
    fixTitle: 'River interceptor barriers',
    problem: 'Rivers carry most plastic to the sea.',
    fix: 'River interceptor barriers catch litter upstream — cheaper than ocean cleanup alone.',
    imageAlt: 'Floating river boom with yellow buoys holding back plastic bottles and litter',
  },
  'solar-microgrids': {
    problemTitle: 'Unreliable dirty power',
    fixTitle: 'Solar microgrids',
    problem: 'Fossil grids lock in emissions and leave remote places in the dark.',
    fix: 'Solar microgrids deliver clean, local power where big plants don’t reach.',
    imageAlt: 'Rural solar panel arrays and a control cabinet beside a village field',
  },
};

const ru: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Нехватка пресной воды',
    fixTitle: 'Капельное орошение',
    problem: 'В засушливых регионах большая часть поливной воды уходит на испарение и сток.',
    fix: 'Капельное орошение подаёт воду к корню — меньше потерь, выше урожай.',
    imageAlt: 'Молодой кукурузный росток в сухой почве, который поливает чёрная капельная лента',
  },
  'constructed-wetlands': {
    problemTitle: 'Загрязнение рек и побережий',
    fixTitle: 'Искусственные водно-болотные угодья',
    problem: 'Питательные вещества и сточные воды кормят токсичные водоросли и губят рыбу.',
    fix: 'Искусственные водно-болотные угодья фильтруют воду как живые очистные системы.',
    imageAlt: 'Искусственное болото с камышом, прозрачной мелкой водой и деревянным настилом',
  },
  'sustainable-forestry': {
    problemTitle: 'Вырубка лесов',
    fixTitle: 'Устойчивое лесное хозяйство',
    problem: 'Медленно растущая древесина подталкивает к рубке старых лесов.',
    fix: 'Быстрорастущие плантационные породы и устойчивое лесное хозяйство для стройматериалов — нагрузка с диких лесов снимается.',
    imageAlt: 'Туманная лесная дорога со штабелями брёвен и рядами плантационных деревьев',
  },
  'anaerobic-digesters': {
    problemTitle: 'Пищевые отходы и метан',
    fixTitle: 'Анаэробные дигестеры',
    problem: 'Пищевые отходы на свалках выделяют метан — сильный парниковый газ.',
    fix: 'Анаэробные дигестеры превращают отходы в биогаз и удобрение для почвы.',
    imageAlt: 'Вид сверху: три зелёных купола анаэробных реакторов среди полей',
  },
  'cool-roofs': {
    problemTitle: 'Городская жара',
    fixTitle: 'Холодные крыши',
    problem: 'Тёмные крыши и асфальт удерживают тепло и резко повышают расход энергии.',
    fix: 'Холодные крыши и светоотражающие покрытия снижают температуру и потребность в кондиционерах.',
    imageAlt: 'Городские крыши, покрытые белым светоотражающим материалом',
  },
  'lower-clinker-cement': {
    problemTitle: 'Выбросы цемента',
    fixTitle: 'Цементы с меньшим содержанием клинкера',
    problem: 'Обычный цемент — один из главных источников CO₂ в мире.',
    fix: 'Цементы с меньшим содержанием клинкера (например, смеси с прокалённой глиной и известняком) снижают выбросы в промышленных масштабах.',
    imageAlt: 'Цементный завод с кучами светлого порошка, щебня и песка',
  },
  'river-interceptors': {
    problemTitle: 'Утечка пластика',
    fixTitle: 'Речные барьеры-перехватчики',
    problem: 'Большую часть пластика в море приносят реки.',
    fix: 'Речные барьеры-перехватчики ловят мусор выше по течению — дешевле, чем одна лишь очистка океана.',
    imageAlt: 'Плавающий речной бон с жёлтыми буями, удерживающий пластиковые бутылки и мусор',
  },
  'solar-microgrids': {
    problemTitle: 'Грязная и ненадёжная энергия',
    fixTitle: 'Солнечные микросети',
    problem: 'Ископаемые сети закрепляют выбросы и оставляют удалённые места без света.',
    fix: 'Солнечные микросети дают чистую местную энергию там, куда большие станции не достают.',
    imageAlt: 'Сельские ряды солнечных панелей и шкаф управления у деревенского поля',
  },
};

const pl: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Niedobór słodkiej wody',
    fixTitle: 'Nawadnianie kropelkowe',
    problem: 'W suchych regionach większość wody irygacyjnej ucieka przez parowanie i spływ.',
    fix: 'Nawadnianie kropelkowe dostarcza wodę do korzenia — mniej strat, wyższy plon.',
    imageAlt: 'Młoda kukurydza w suchej glebie podlewana czarną linią kroplującą',
  },
  'constructed-wetlands': {
    problemTitle: 'Zanieczyszczenie rzek i wybrzeży',
    fixTitle: 'Sztuczne mokradła',
    problem: 'Składniki odżywcze i ścieki karmią toksyczne glony i zabijają ryby.',
    fix: 'Sztuczne mokradła filtrują wodę jak żywe systemy oczyszczania.',
    imageAlt: 'Sztuczne mokradło z trzciną, płytką czystą wodą i drewnianą kładką',
  },
  'sustainable-forestry': {
    problemTitle: 'Wylesianie',
    fixTitle: 'Zrównoważona gospodarka leśna',
    problem: 'Wolno rosnące drewno pcha do wycinki starych lasów.',
    fix: 'Szybko rosnące gatunki plantacyjne i zrównoważona gospodarka leśna na drewno budowlane — mniej presji na lasy naturalne.',
    imageAlt: 'Zamglona leśna droga ze stosami kłód i rzędami drzew plantacyjnych',
  },
  'anaerobic-digesters': {
    problemTitle: 'Odpady spożywcze i metan',
    fixTitle: 'Fermentatory beztlenowe',
    problem: 'Żywność na wysypiskach uwalnia metan, silny gaz cieplarniany.',
    fix: 'Fermentatory beztlenowe zamieniają odpady w biogaz i nawóz do gleby.',
    imageAlt: 'Widok z lotu ptaka: trzy zielone kopuły fermentatorów beztlenowych wśród pól',
  },
  'cool-roofs': {
    problemTitle: 'Miejski upał',
    fixTitle: 'Chłodne dachy',
    problem: 'Ciemne dachy i asfalt zatrzymują ciepło i windują zużycie energii.',
    fix: 'Chłodne dachy i powłoki odbijające obniżają temperaturę i ograniczają klimatyzację.',
    imageAlt: 'Miejskie dachy pokryte białą, odbijającą powłoką',
  },
  'lower-clinker-cement': {
    problemTitle: 'Emisje cementu',
    fixTitle: 'Cementy o niższym udziale klinkieru',
    problem: 'Zwykły cement to jedno z głównych źródeł globalnego CO₂.',
    fix: 'Cementy o niższym udziale klinkieru (np. mieszanki z kalcynowaną gliną i wapieniem) tną emisje na skalę przemysłową.',
    imageAlt: 'Cementownia z hałdami jasnego proszku, tłucznia i piasku',
  },
  'river-interceptors': {
    problemTitle: 'Wyciek plastiku',
    fixTitle: 'Rzeczne bariery przechwytujące',
    problem: 'Większość plastiku do morza niosą rzeki.',
    fix: 'Rzeczne bariery przechwytujące łapią śmieci w górze rzeki — taniej niż sama zbiórka z oceanu.',
    imageAlt: 'Pływająca zapora rzeczna z żółtymi bojami, zatrzymująca butelki i śmieci',
  },
  'solar-microgrids': {
    problemTitle: 'Brudna i zawodna energia',
    fixTitle: 'Mikrosieci słoneczne',
    problem: 'Sieci oparte na paliwach kopalnych utrwalają emisje i zostawiają odległe miejsca w ciemności.',
    fix: 'Mikrosieci słoneczne dają czystą, lokalną energię tam, gdzie wielkie elektrownie nie sięgają.',
    imageAlt: 'Wiejskie rzędy paneli słonecznych i szafka sterownicza przy polu',
  },
};

const lv: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Saldūdens trūkums',
    fixTitle: 'Pilienveida apūdeņošana',
    problem: 'Sausajos reģionos lielākā daļa apūdeņošanas ūdens zūd iztvaikošanā un notecē.',
    fix: 'Pilienveida apūdeņošana nogādā ūdeni pie saknes — mazāk zudumu, lielāka raža.',
    imageAlt: 'Jauns kukurūzas augs sausā augsnē, ko laista melna pilienu līnija',
  },
  'constructed-wetlands': {
    problemTitle: 'Upju un piekrastes piesārņojums',
    fixTitle: 'Mākslīgie mitrāji',
    problem: 'Barības vielas un notekūdeņi baro toksiskās aļģes un nogalina zivis.',
    fix: 'Mākslīgie mitrāji filtrē ūdeni kā dzīvas attīrīšanas sistēmas.',
    imageAlt: 'Mākslīgs mitrājs ar niedrēm, skaidru seklu ūdeni un koka laipu',
  },
  'sustainable-forestry': {
    problemTitle: 'Mežu izciršana',
    fixTitle: 'Ilgtspējīga mežsaimniecība',
    problem: 'Lēni augoša koksne mudina cirst vecos mežus.',
    fix: 'Ātraudzīgas plantāciju sugas un ilgtspējīga mežsaimniecība būvkoksnei — mazāks spiediens uz savvaļas mežiem.',
    imageAlt: 'Miglaina meža ceļa josla ar sakrautiem baļķiem un plantāciju koku rindām',
  },
  'anaerobic-digesters': {
    problemTitle: 'Pārtikas atkritumi un metāns',
    fixTitle: 'Anaerobās digestācijas iekārtas',
    problem: 'Poligonā noglabāti pārtikas atkritumi izdala metānu — spēcīgu siltumnīcefekta gāzi.',
    fix: 'Anaerobās digestācijas iekārtas pārvērš atkritumus biogāzē un augsnes mēslojumā.',
    imageAlt: 'Skats no gaisa: trīs zaļi anaerobo digestoru kupoli lauksaimniecības zemē',
  },
  'cool-roofs': {
    problemTitle: 'Pilsētas karstums',
    fixTitle: 'Vēsie jumti',
    problem: 'Tumši jumti un asfalts uzkrāj siltumu un strauji palielina enerģijas patēriņu.',
    fix: 'Vēsie jumti un atstarojoši pārklājumi pazemina temperatūru un samazina gaisa kondicionēšanas slodzi.',
    imageAlt: 'Pilsētas jumti, pārklāti ar baltu, atstarojošu materiālu',
  },
  'lower-clinker-cement': {
    problemTitle: 'Cementa emisijas',
    fixTitle: 'Cements ar mazāku klinkera daļu',
    problem: 'Parastais cements ir viens no galvenajiem globālā CO₂ avotiem.',
    fix: 'Cements ar mazāku klinkera daļu (piemēram, kalcinēta māla un kaļķakmens maisījumi) samazina emisijas rūpnieciskā mērogā.',
    imageAlt: 'Cementa rūpnīca ar gaiša pulvera, šķembu un smilšu kaudzēm',
  },
  'river-interceptors': {
    problemTitle: 'Plastmasas noplūde',
    fixTitle: 'Upes uztvērējbarjeras',
    problem: 'Lielāko daļu plastmasas uz jūru aiznes upes.',
    fix: 'Upes uztvērējbarjeras ķer atkritumus augštecē — lētāk nekā tikai okeāna tīrīšana.',
    imageAlt: 'Peldošs upes bums ar dzeltenām bojām, kas aiztur plastmasas pudeles un atkritumus',
  },
  'solar-microgrids': {
    problemTitle: 'Netīra un nestabila enerģija',
    fixTitle: 'Saules mikrotīkli',
    problem: 'Fosilo kurināmo tīkli nostiprina emisijas un atstāj nomaļas vietas tumsā.',
    fix: 'Saules mikrotīkli dod tīru, vietēju enerģiju tur, kur lielās stacijas nesniedzas.',
    imageAlt: 'Lauku saules paneļu rindas un vadības skapis pie ciema lauka',
  },
};

const copy: Record<Locale, Record<string, SolutionCopy>> = { en, ru, pl, lv };

export function getSolutions(locale: Locale): Solution[] {
  return solutionMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getLatestSolutions(locale: Locale): Solution[] {
  return getSolutions(locale).filter((solution) => solution.latest);
}
