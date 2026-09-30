import type { ForestEncyclopediaCopy, FigureCreditPart } from '../data/solutions-forests';
import type { SolutionCopy } from '../data/solutions';
import type { ForestPackSlug } from './solutions-forests-pack-en';

function credit(lead: string, licence: string, href: string, tail = ''): FigureCreditPart[] {
  return [{ text: lead }, { text: licence, href }, ...(tail ? [{ text: tail }] : [])];
}

const bysa2 = 'https://creativecommons.org/licenses/by-sa/2.0/';
const bysa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const bysa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const cc0 = 'https://creativecommons.org/publicdomain/zero/1.0/';
const commonsTimber =
  'https://commons.wikimedia.org/wiki/File:Timber_Stack,_Sinkside_Hill_Near_Trowupburn_-_geograph.org.uk_-_6552952.jpg';
const commonsBorneo = 'https://commons.wikimedia.org/wiki/File:Borneo_rainforest.jpg';
const commonsPlenter = 'https://commons.wikimedia.org/wiki/File:Plenterwald_April_2004.jpg';
const commonsApache = 'https://commons.wikimedia.org/wiki/File:White_Mountain_Apache_Arizona-105.jpg';
const commonsClt = 'https://commons.wikimedia.org/wiki/File:Brettsperrholzkonstruktion.jpg';

export const grid: Record<ForestPackSlug, SolutionCopy> = {
  'forest-certification': {
    problemTitle: 'Drewno i papier bez wiarygodnego śladu prowadzącego do lasu',
    fixTitle: 'Certyfikacja lasów',
    problem: 'Drewno i papier bez wiarygodnego śladu prowadzącego do lasu',
    fix: 'Niezależni audytorzy sprawdzają, jak prowadzi się gospodarkę w lesie, a oznakowanie towarzyszy drewnu od przetwórstwa aż do gotowego wyrobu. Forest Stewardship Council (FSC) i Program Uznawania Systemów Certyfikacji Leśnej to dwa międzynarodowe systemy tego rodzaju, a każdy z nich publikuje własne dane o certyfikowanych lasach.',
    imageAlt: 'Ścięte kłody ułożone w wzgórzach koło Trowupburn w Northumberland w Anglii.',
    sourceLabel: 'Forest Stewardship Council (FSC)',
  },
  'redd-plus': {
    problemTitle: 'Emisje węgla z wyciętych i zdegradowanych lasów',
    fixTitle: 'Płatności REDD+',
    problem: 'Emisje węgla z wyciętych i zdegradowanych lasów',
    fix: 'W systemie ograniczania emisji z wylesiania i degradacji lasów (REDD+) kraj otrzymuje zapłatę po tym, jak zweryfikowanymi pomiarami wykaże, że jego lasy wyemitowały mniej węgla. Partnerstwo Banku Światowego na rzecz węgla leśnego płaci za takie wyniki. W 2024 roku jego płatności za wyniki wzrosły z 53,2 mln do 164,5 mln dolarów amerykańskich.',
    imageAlt: 'Las deszczowy w Parku Narodowym Kinabalu na Borneo.',
    sourceLabel: 'Partnerstwo na rzecz węgla leśnego',
  },
  'closer-to-nature-forestry': {
    problemTitle: 'Lasy po zrębach zupełnych tracące różnorodność siedlisk',
    fixTitle: 'Leśnictwo bliższe naturze',
    problem: 'Lasy po zrębach zupełnych tracące różnorodność siedlisk',
    fix: 'Leśnictwo bliższe naturze pozyskuje drewno, naśladując sposób, w jaki las odnawia się sam: mieszane gatunki i wiek drzew, małe luki zamiast dużych zrębów zupełnych oraz łagodne pozyskanie, które zostawia na miejscu siedliska, glebę i mikroklimat lasu. Komisja Europejska opublikowała wytyczne na ten temat w 2023 roku dla lasów użytkowanych gospodarczo poza obszarami chronionymi.',
    imageAlt: 'Bukowy las przebierkowy w lesie miejskim Mühlhausen w Turyngii w Niemczech, wiosną.',
    sourceLabel: 'Komisja Europejska',
  },
  'enrichment-planting': {
    problemTitle: 'Wycięty las, w którym pożądane gatunki odnawiają się zbyt słabo',
    fixTitle: 'Nasadzenia wzbogacające',
    problem: 'Wycięty las, w którym pożądane gatunki odnawiają się zbyt słabo',
    fix: 'Nasadzenia wzbogacające umieszczają wyhodowane w szkółce sadzonki w lukach lub liniach sadzenia wewnątrz istniejącego lasu, gdzie naturalne odnowienie pożądanych gatunków jest zbyt słabe. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa (FAO) zauważa, że powszechnie stosowano je do odtwarzania wyciętego lasu pierwotnego i zwiększania wartości drewna w lesie wtórnym.',
    imageAlt: 'Pracownik leśnictwa plemienia Apaczów Białych Gór sadzi sadzonkę sosny żółtej narzędziem ręcznym w Arizonie.',
    sourceLabel: 'FAO',
  },
  'mass-timber': {
    problemTitle: 'Projekty budowlane z niewieloma dostawcami drewna inżynierskiego',
    fixTitle: 'Drewno konstrukcyjne wielkowymiarowe',
    problem: 'Projekty budowlane z niewieloma dostawcami drewna inżynierskiego',
    fix: 'Drewno konstrukcyjne wielkowymiarowe tworzy stropy, ściany i dachy z grubych paneli i belek z drewna inżynierskiego, takich jak drewno klejone krzyżowo i drewno klejone warstwowo. Służba Leśna Departamentu Rolnictwa Stanów Zjednoczonych nazywa te wyroby odnawialną alternatywą dla zwykłych materiałów budowlanych, która magazynuje węgiel, i wspiera producentów dotacjami.',
    imageAlt: 'Wnętrze budynku zbudowanego z paneli z drewna klejonego krzyżowo.',
    sourceLabel: 'Służba Leśna Stanów Zjednoczonych',
  },
};

export const detail: Record<ForestPackSlug, ForestEncyclopediaCopy> = {
  'forest-certification': {
    title: 'Certyfikacja lasów',
    hook: 'Certyfikacja lasów to system, w którym niezależni audytorzy sprawdzają lasy i firmy z branży drzewnej według opublikowanych standardów.',
    imageAlt: grid['forest-certification'].imageAlt,
    caption: 'Ścięte kłody ułożone w wzgórzach koło Trowupburn w Northumberland w Anglii.',
    figureCredit: credit(
      'Zdjęcie: Geoff Holland, geograph.org.uk, za pośrednictwem Wikimedia Commons, ',
      'licencja Creative Commons Uznanie autorstwa, na tych samych warunkach 2.0 Ogólna',
      bysa2,
      '.',
    ),
    what: [
      'Certyfikacja lasów to system, w którym niezależni audytorzy sprawdzają lasy i firmy z branży drzewnej według opublikowanych standardów. Forest Stewardship Council (FSC) jest międzynarodową organizacją non-profit, która ustala standardy odpowiedzialnej gospodarki leśnej i łańcuchów dostaw produktów leśnych. Jej system obejmuje dwa powiązane rodzaje certyfikatów. Certyfikat gospodarki leśnej potwierdza, że las jest zarządzany odpowiedzialnie, według zasad i kryteriów Forest Stewardship Council. Certyfikat łańcucha dostaw śledzi certyfikowany materiał na każdym etapie przetwarzania, produkcji i dystrybucji. Program Uznawania Systemów Certyfikacji Leśnej (Programme for the Endorsement of Forest Certification) jest globalnym sojuszem krajowych systemów certyfikacji. Uznaje on systemy, które krajowe organizacje opracowują z udziałem wielu zainteresowanych stron i dostosowują do lokalnych priorytetów i warunków. Program powstał w 1999 roku, gdy drobni i rodzinni właściciele lasów w Europie stworzyli system pozwalający wykazać ich zrównoważoną gospodarkę leśną, a dziś ma ponad 80 członków.',
    ],
    why: [
      'Bez sprawdzalnego śladu deklaracja o zrównoważonym drewnie to tylko wydrukowane hasło. Forest Stewardship Council podaje, że według jego standardów certyfikowano ponad 160 mln hektarów lasu i ponad 70 000 organizacji. Program Uznawania Systemów Certyfikacji Leśnej podaje 297 mln hektarów certyfikowanego lasu i 29 800 firm z certyfikatem łańcucha dostaw. Obie grupy danych pochodzą ze stron internetowych samych organizacji. Forest Stewardship Council ma trzy izby o równych prawach głosu: środowiskową, społeczną i gospodarczą. Głosuje w nich ponad 1200 członków, od ludów tubylczych po globalne firmy.',
    ],
    read: [
      'Audyty prowadzą niezależne zewnętrzne jednostki certyfikujące. Firma zgłasza się do takiej jednostki, przechodzi audyt na miejscu i, jeśli spełnia wymagania, otrzymuje certyfikat ważny pięć lat, a potem podlega corocznym audytom. Znaku Forest Stewardship Council i deklaracji o produktach mogą używać wyłącznie posiadacze certyfikatu, dzięki czemu drewno można prześledzić od lasu do rynku. Gdy widzisz oznakowanie, zapytaj, który system je wydał i czy certyfikat obejmuje las, łańcuch dostaw, czy jedno i drugie.',
    ],
    limits: [
      'Liczby mierzą uczestnictwo: hektary certyfikowanego lasu i liczbę certyfikowanych organizacji. Każda organizacja podaje własne dane o własnym systemie. Certyfikat gospodarki leśnej obejmuje skontrolowany las, a certyfikat łańcucha dostaw obejmuje obrót drewnem po jego opuszczeniu lasu, więc oznakowanie na wyrobie odzwierciedla to, co obejmuje jego certyfikat. Forest Stewardship Council podaje, że publikuje wykaz aktywnych dochodzeń wobec organizacji, które mogą zagrażać wiarygodności jego systemu.',
    ],
    sources: [
      { label: 'Forest Stewardship Council: jak działa system (How the FSC System Works)', url: 'https://fsc.org/en/how-the-fsc-system-works' },
      { label: 'Forest Stewardship Council: o nas (About us)', url: 'https://fsc.org/en/about-us' },
      { label: 'Program Uznawania Systemów Certyfikacji Leśnej: czym jest ten program (What is PEFC?)', url: 'https://pefc.org/discover-pefc/what-is-pefc' },
      { label: 'Wikimedia Commons: stos kłód na wzgórzu Sinkside koło Trowupburn, zdjęcie (Timber Stack, Sinkside Hill Near Trowupburn)', url: commonsTimber },
    ],
  },
  'redd-plus': {
    title: 'Płatności REDD+',
    hook: 'Ograniczanie emisji z wylesiania i degradacji lasów (REDD+) obejmuje działania w krajach rozwijających się, które zmniejszają emisje z wylesiania i degradacji lasów, chronią zasoby węgla w lasach, zapewniają zrównoważoną gospodarkę leśną i zwiększają zasoby węgla w lasach.',
    imageAlt: grid['redd-plus'].imageAlt,
    caption: 'Las deszczowy w Parku Narodowym Kinabalu na Borneo.',
    figureCredit: credit(
      'Zdjęcie: Dukeabruzzi, za pośrednictwem Wikimedia Commons, ',
      'licencja Creative Commons Uznanie autorstwa, na tych samych warunkach 4.0 Międzynarodowa',
      bysa4,
      '.',
    ),
    what: [
      'Ograniczanie emisji z wylesiania i degradacji lasów (REDD+) obejmuje działania w krajach rozwijających się, które zmniejszają emisje z wylesiania i degradacji lasów, chronią zasoby węgla w lasach, zapewniają zrównoważoną gospodarkę leśną i zwiększają zasoby węgla w lasach. Partnerstwo Banku Światowego na rzecz węgla leśnego (Forest Carbon Partnership Facility) jest globalnym partnerstwem rządów, przedsiębiorstw, społeczeństwa obywatelskiego i organizacji ludów tubylczych, które zajmuje się tymi działaniami. Współpracuje z 47 krajami rozwijającymi się w Afryce, Azji oraz Ameryce Łacińskiej i na Karaibach oraz z 17 darczyńcami, których wpłaty i zobowiązania wynoszą 1,3 mld dolarów amerykańskich. Partnerstwo prowadzi dwa fundusze. Fundusz Gotowości działał w latach 2008 do 2022 z łącznym finansowaniem 472 mln dolarów amerykańskich i pomagał krajom się przygotować: opracować krajowe strategie REDD+, ustalić referencyjne poziomy emisji, zbudować systemy pomiaru, raportowania i weryfikacji emisji oraz stworzyć krajowe struktury zarządzania z zabezpieczeniami środowiskowymi i społecznymi. Fundusz Węglowy testuje płatności za wyniki dla krajów, które przeszły etap gotowości i osiągnęły weryfikowalne ograniczenie emisji w sektorze leśnym i w szerszym użytkowaniu gruntów. Jego bieżące finansowanie wynosi 900 mln dolarów amerykańskich.',
    ],
    why: [
      'Płatność za wynik wiąże pieniądze z zmierzonymi rezultatami: wypłaca się ją dopiero po osiągnięciu i zweryfikowaniu ograniczenia emisji. Partnerstwo podaje, że w 2024 roku ponad trzykrotnie zwiększyło płatności za wyniki, z 53,2 mln dolarów amerykańskich w 2023 roku do 164,5 mln, i że było na drodze do zapłaty za ponad 35 mln jednostek ograniczenia emisji, co według niego stanowi ponad 10 procent wszystkich transakcji ograniczenia emisji na światowych rynkach węglowych w 2023 roku. Wszystkie 15 krajów Funduszu Węglowego zgłosiło już ograniczenie emisji.',
    ],
    read: [
      'Płatność jest ostatnim krokiem w ciągu zdarzeń. Najpierw kraj przygotowuje strategie, referencyjne poziomy emisji i systemy pomiaru. Potem ogranicza emisje z lasów i użytkowania gruntów. Następnie ograniczenia są weryfikowane i dopiero wtedy następuje płatność. Kraje Funduszu Węglowego wprowadzają też mechanizmy podziału korzyści, aby wpływy trafiały do ludzi na miejscu. W Mozambiku na przykład Partnerstwo i partnerski program dążą do tego, by kobiety stanowiły co najmniej 50 procent beneficjentów programu ograniczania emisji.',
    ],
    limits: [
      'Dane o płatnościach i ograniczeniach podaje samo Partnerstwo Banku Światowego na rzecz węgla leśnego. Fundusz Gotowości działał do 2022 roku, a Fundusz Węglowy przedłużono do grudnia 2028 roku. Partnerstwo zaznacza, że kluczowe jest utrzymanie tempa i długoterminowej trwałości programów ograniczania emisji po zakończeniu jego działalności, oraz że Bank Światowy potwierdził wykonalność podejścia do ograniczania emisji, więc teraz trzeba upowszechnić ulepszony model.',
    ],
    sources: [
      { label: 'Partnerstwo Banku Światowego na rzecz węgla leśnego: o partnerstwie (About the FCPF)', url: 'https://www.forestcarbonpartnership.org/about' },
      { label: 'Partnerstwo Banku Światowego na rzecz węgla leśnego: dynamika w dziedzinie węgla leśnego, rok 2024 i dalej (Momentum in Forest Carbon Progress, 2024 and Beyond)', url: 'https://www.forestcarbonpartnership.org/results-story/momentum-forest-carbon-progress-2024-and-beyond' },
      { label: 'Wikimedia Commons: las deszczowy na Borneo, zdjęcie (Borneo rainforest)', url: commonsBorneo },
    ],
  },
  'closer-to-nature-forestry': {
    title: 'Leśnictwo bliższe naturze',
    hook: 'Unijna strategia leśna do 2030 roku definiuje gospodarkę leśną bliższą naturze jako praktyki zapewniające wielofunkcyjne lasy dzięki połączeniu celów ochrony różnorodności biologicznej, zachowania zasobów węgla i dochodów z drewna.',
    imageAlt: grid['closer-to-nature-forestry'].imageAlt,
    caption: 'Bukowy las przebierkowy w lesie miejskim Mühlhausen w Turyngii w Niemczech, wiosną.',
    figureCredit: credit(
      'Zdjęcie: Michael Fiegle, za pośrednictwem Wikimedia Commons, ',
      'licencja Creative Commons Uznanie autorstwa, na tych samych warunkach 3.0 Unported',
      bysa3,
      '.',
    ),
    what: [
      'Unijna strategia leśna do 2030 roku definiuje gospodarkę leśną bliższą naturze jako praktyki zapewniające wielofunkcyjne lasy dzięki połączeniu celów ochrony różnorodności biologicznej, zachowania zasobów węgla i dochodów z drewna. 27 lipca 2023 roku Komisja Europejska opublikowała wytyczne dotyczące tego podejścia w dokumencie roboczym swoich służb, który przekazała także Radzie Unii Europejskiej. Wytyczne dotyczą lasów użytkowanych gospodarczo do pozyskania drewna i innych produktów leśnych, poza wyznaczonymi obszarami chronionymi. Ich ogólne zasady to: uczyć się od procesów naturalnych i pozwalać im się rozwijać, utrzymywać różnorodność i złożoność struktur leśnych, łączyć funkcje lasu w różnych skalach, stosować różne systemy hodowli lasu oparte na wzorcach naturalnych zaburzeń w regionie oraz pozyskiwać drewno z małym oddziaływaniem, poświęcając tyle samo uwagi temu, co zostaje w lesie, co temu, co się z niego zabiera.',
    ],
    why: [
      'Wytyczne wskazują dwa główne cele: zwiększanie złożoności strukturalnej i wspieranie naturalnej dynamiki lasu. Opisują lasy bardziej zróżnicowane pod względem wysokości, średnicy, wieku i gatunków. Drzewostany o zróżnicowanej strukturze gatunkowej są bardziej odporne i lepiej dostosowują się do zmiany klimatu i zaburzeń, a jeśli jeden gatunek zostanie dotknięty przez szkodnika, inne gatunki mogą przetrwać i przynieść dochód. Wytyczne stwierdzają, że zręby zupełne zmniejszają złożoność środowiska, zmieniają naturalne procesy ekosystemowe i zmniejszają różnorodność siedlisk. Zainteresowanie leśnictwem o ciągłej pokrywie leśnej, w którym po pozyskaniu drewna las zachowuje okap drzew, rośnie w Danii, Niemczech, Irlandii i Holandii, a niektóre państwa członkowskie wprowadziły pokrewne zasady lub obowiązkowe przepisy.',
    ],
    read: [
      'Technika pozyskania, którą proponują wytyczne, to cięcia częściowe: wybór pojedynczych drzew, wybór grupowy albo luki o powierzchni co najwyżej 0,2 do 0,5 hektara, które naśladują naturalne zaburzenia zamiast zrębów zupełnych na dużych powierzchniach. Praktyka w Europie bywa różna. Wytyczne podają, że w Europie Zachodniej najczęściej stosuje się leśnictwo o ciągłej pokrywie leśnej, że w Europie Środkowej i Wschodniej przeważa podejście Pro Silva i inne, a na północnym wschodzie widoczna jest idea naśladowania naturalnych zaburzeń i zachowywania naturalnych struktur, takich jak martwe drewno. W Alpach zręby zupełne większe niż 0,5 hektara są rzadkie, a w niektórych krajach nawet zakazane z powodu ryzyka erozji gleby, osuwisk i lawin. Europejski Instytut Leśnictwa zaproponował definicję, siedem zasad przewodnich i listę kontrolną tej koncepcji w raporcie z 2022 roku.',
    ],
    limits: [
      'Wytyczne określają się jako całkowicie dobrowolne i podają, że nie stawiają wiążących warunków, na przykład dla pomocy państwa lub unijnego finansowania gospodarki leśnej. Jak zauważają ich autorzy, główną barierą wskazywaną przez respondentów ankiety była ekonomia: przekonanie, że praktyki przyjazne różnorodności biologicznej zmniejszają dochód z lasu, przynajmniej w krótkim okresie. Tam, gdzie naturalne zaburzenia zostały ograniczone lub wyeliminowane, według wytycznych mogą być potrzebne niewielkie zręby zupełne jako część odtwarzającej gospodarki leśnej, by tymczasowo naśladować naturalne zaburzenia.',
    ],
    sources: [
      { label: 'Komisja Europejska, Dyrekcja Generalna ds. Środowiska: wytyczne dotyczące gospodarki leśnej bliższej naturze (Guidelines on Closer-to-Nature Forest Management)', url: 'https://environment.ec.europa.eu/publications/guidelines-closer-nature-forest-management_en' },
      { label: 'Rada Unii Europejskiej: dokument roboczy służb Komisji, wytyczne dotyczące gospodarki leśnej bliższej naturze (Guidelines on Closer-to-Nature Forest Management)', url: 'https://data.consilium.europa.eu/doc/document/ST-12232-2023-INIT/en/pdf' },
      { label: 'Europejski Instytut Leśnictwa: gospodarka leśna bliższa naturze, seria „Od nauki do polityki”, nr 12 (Closer-to-Nature Forest Management, From Science to Policy 12)', url: 'https://efi.int/publication/closer-to-nature-forest-management' },
      { label: 'Wikimedia Commons: bukowy las przebierkowy, kwiecień 2004, zdjęcie (Plenterwald April 2004)', url: commonsPlenter },
    ],
  },
  'enrichment-planting': {
    title: 'Nasadzenia wzbogacające',
    hook: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa (FAO) opisuje nasadzenia wzbogacające jako przesadzanie wyhodowanych w szkółce sadzonek lub samosiewów, czyli młodych drzew zebranych z dna lasu, w naturalne prześwity lasu, luki powstałe przy wycince albo linie lub pasy specjalnie w tym celu wycięte.',
    imageAlt: grid['enrichment-planting'].imageAlt,
    caption: 'Pracownik leśnictwa plemienia Apaczów Białych Gór sadzi sadzonkę sosny żółtej narzędziem ręcznym w Arizonie.',
    figureCredit: credit(
      'Zdjęcie: Beverly Moseley, Służba Ochrony Zasobów Naturalnych Departamentu Rolnictwa Stanów Zjednoczonych, ',
      'domena publiczna',
      commonsApache,
      ', za pośrednictwem Wikimedia Commons.',
    ),
    what: [
      'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa (FAO) opisuje nasadzenia wzbogacające jako przesadzanie wyhodowanych w szkółce sadzonek lub samosiewów, czyli młodych drzew zebranych z dna lasu, w naturalne prześwity lasu, luki powstałe przy wycince albo linie lub pasy specjalnie w tym celu wycięte. Mogą być stosowne tam, gdzie naturalne odnowienie pożądanych gatunków jest niewystarczające lub nierównomierne, oraz by wspierać wybrane, zwykle cenne gatunki, które słabo odnawiają się same. Dwa najczęstsze warianty to sadzenie w liniach i sadzenie w lukach. Wybór zależy głównie od stanu drzewostanu, a sadzenie w lukach zwykle zaleca się w lasach nadmiernie wyciętych, gdzie linie sadzenia trudniej otworzyć i utrzymać.',
    ],
    why: [
      'FAO zauważa, że nasadzenia wzbogacające powszechnie stosowano do odtwarzania wyciętych lasów pierwotnych oraz do zwiększania zasobów drewna i wartości gospodarczej lasów wtórnych. Zdegradowane lasy pierwotne stają się dominującym typem lasu w wielu krajach i coraz częściej muszą pełnić produkcyjne i środowiskowe funkcje lasów pierwotnych.',
    ],
    read: [
      'FAO wymienia, czego wymaga sukces: odpowiedniego światła, właściwego nadzoru i późniejszej pielęgnacji, zwłaszcza po to, by regulować oświetlenie i ograniczać konkurencję innych roślin. Stan sadzonek w chwili sadzenia jest ważnym czynnikiem, a FAO uznaje za kluczowe użycie wysokiej jakości materiału sadzeniowego. Odpowiednie gatunki prawdopodobnie dają cenne drewno, szybko rosną, regularnie kwitną i owocują, znoszą szeroki zakres warunków i niedobór wilgoci oraz nie mają poważnych szkodników. Przykład FAO z Malezji pokazuje rozmaitość metod. W Sabahu doświadczalne nasadzenia wzbogacające objęły 10 000 hektarów wyciętego lasu: zaczynano od drzew sadzonych co 3 metry w rzędach oddalonych o 10 metrów, każdy rząd wycinano jako pas o szerokości 2 metrów, a pielenie może trwać do sześciu lat po posadzeniu. Na Półwyspie Malajskim, gdzie zostało więcej dużych drzew okapu, a cień spowalnia wzrost sadzonek, w doświadczeniu stosuje się sadzonki do 2 metrów wysokości sadzone w dołach wykopanych małym ciągnikiem ze świdrem.',
    ],
    limits: [
      'W towarzyszącej publikacji FAO o lasach wtórnych stwierdzono, że korzyści ekonomiczne nasadzeń wzbogacających są wciąż niejasne, choć w warunkach doświadczalnych uzyskuje się obiecujące wyniki. Podano tam także, że nie ma jednej recepty odpowiedniej do wszystkich sytuacji. W Sabahu ekonomii pomogły płatności za pochłanianie węgla w miarę odtwarzania się lasu, a doświadczenia na Półwyspie Malajskim były na wczesnym etapie.',
    ],
    sources: [
      { label: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: hodowla lasu w lasach naturalnych, moduł Zestawu narzędzi zrównoważonej gospodarki leśnej (Silviculture in Natural Forests)', url: 'https://www.fao.org/sustainable-forest-management-toolbox/modules/silviculture-in-natural-forests/en' },
      { label: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: hodowla lasu w lasach naturalnych, podstawowa wiedza, PDF (Silviculture in Natural Forests, Basic knowledge)', url: 'https://www.fao.org/sustainable-forest-management/toolbox/modules/silviculture-in-natural-forests/basic-knowledge/en/?type=111' },
      { label: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: jak pomóc lasom odzyskać okrywę, zarządzanie lasami wtórnymi, nierozpoznane możliwości (Helping forests take cover, Secondary forest management: the unrecognised opportunities)', url: 'https://www.fao.org/4/ae945e/ae945e0c.htm' },
      { label: 'Wikimedia Commons: sadzenie sadzonki sosny żółtej, plemię Apaczów Białych Gór, zdjęcie (White Mountain Apache Arizona-105)', url: commonsApache },
    ],
  },
  'mass-timber': {
    title: 'Drewno konstrukcyjne wielkowymiarowe',
    hook: 'Drewno konstrukcyjne wielkowymiarowe to rodzina wyrobów z drewna inżynierskiego do elementów nośnych budynków.',
    imageAlt: grid['mass-timber'].imageAlt,
    caption: 'Wnętrze budynku zbudowanego z paneli z drewna klejonego krzyżowo.',
    figureCredit: credit(
      'Zdjęcie: RoterRolf, za pośrednictwem Wikimedia Commons, ',
      'przekazanie do domeny publicznej Creative Commons CC0 1.0 Uniwersalna',
      cc0,
      '.',
    ),
    what: [
      'Drewno konstrukcyjne wielkowymiarowe to rodzina wyrobów z drewna inżynierskiego do elementów nośnych budynków. Panele z drewna klejonego krzyżowo składają się z kilku warstw desek ułożonych na krzyż, zwykle pod kątem 90 stopni, i sklejonych po szerokich bokach. Panel ma co najmniej trzy warstwy, zwykle nieparzystą ich liczbę, a od trzech do siedmiu warstw jest częste. Drewno klejone warstwowo to wyrób inżynierski o określonej wytrzymałości, z dwóch lub więcej warstw desek sklejonych tak, że włókna wszystkich warstw biegną równolegle do długości. Te definicje podaje Służba Leśna Departamentu Rolnictwa Stanów Zjednoczonych w rozdziale Podręcznika drewna klejonego krzyżowo oraz w swoim Podręczniku drewna.',
    ],
    why: [
      'Służba Leśna Departamentu Rolnictwa Stanów Zjednoczonych podaje, że drewno klejone krzyżowo i drewno klejone warstwowo są odnawialną alternatywą dla zwykłych materiałów budowlanych, która magazynuje węgiel, a przy tym oferują wytrzymałość, odporność ogniową i swobodę projektowania. Podręcznik drewna dodaje, że panele z drewna klejonego krzyżowo stanowią alternatywę dla części zastosowań budowlanych, w których obecnie używa się betonu, muru lub stali. Agencja mówi, że luka w krajowej produkcji spowolniła upowszechnienie tych wyrobów, a zwiększanie podaży pomaga obniżać koszty deweloperów. Jej program dotacji na innowacje w drewnie, uruchomiony w 2015 roku, wymienia drewno konstrukcyjne wielkowymiarowe wśród krajowych obszarów priorytetowych.',
    ],
    read: [
      'Brian Brashaw, zastępca dyrektora Służby Leśnej ds. innowacji w drewnie, powiedział w 2025 roku, że od 2015 roku w Stanach Zjednoczonych powstało 13 nowych zakładów drewna konstrukcyjnego wielkowymiarowego, obsługujących rynki budynków komercyjnych, użyteczności publicznej i wielorodzinnych. Liczba ta pochodzi z jego wypowiedzi w materiale Służby Leśnej. Agencja podaje, że jej dotacje wspierają producentów, którzy pozyskują drewno ze zrównoważonych źródeł, ograniczają odpady i tworzą miejsca pracy we wspólnotach wiejskich. Gdy spotkasz twierdzenie o budynku z drewna konstrukcyjnego wielkowymiarowego, sprawdź, z czego zrobiono wyrób, gdzie wyrosło drewno i co źródło mówi o węglu.',
    ],
    limits: [
      'Wykorzystane tu materiały Służby Leśnej opisują magazynowanie węgla ogólnie i nie podają wartości węgla dla żadnego pojedynczego budynku. W Podręczniku drewna klejonego krzyżowo stwierdzono, że panele z tego drewna mają stosunkowo dużą zdolność magazynowania wilgoci, ale niską paroprzepuszczalność, więc panele nadmiernie zawilgocone w czasie budowy mogą wchłonąć dużo wilgoci i wolno schnąć, i zaleca się dodatkową barierę powietrzną. Liczba 13 nowych zakładów dotyczy wyłącznie Stanów Zjednoczonych.',
    ],
    sources: [
      { label: 'Służba Leśna Departamentu Rolnictwa Stanów Zjednoczonych: zwiększanie produkcji drewna konstrukcyjnego wielkowymiarowego, zamykanie luk i pobudzanie innowacji (Scaling up mass timber: Closing gaps, fueling innovation)', url: 'https://www.fs.usda.gov/about-agency/features/scaling-mass-timber-closing-gaps-fueling-innovation' },
      { label: 'Służba Leśna Departamentu Rolnictwa Stanów Zjednoczonych: innowacje w drewnie (Wood Innovations)', url: 'https://www.fs.usda.gov/science-technology/energy-forest-products/wood-innovation' },
      { label: 'Dział Badań i Rozwoju Służby Leśnej Departamentu Rolnictwa Stanów Zjednoczonych: rozdział 1, wprowadzenie do drewna klejonego krzyżowo, z Podręcznika drewna klejonego krzyżowo, 2013 (Chapter 1, Introduction to cross-laminated timber, CLT Handbook)', url: 'https://research.fs.usda.gov/treesearch/46203' },
      { label: 'Dział Badań i Rozwoju Służby Leśnej Departamentu Rolnictwa Stanów Zjednoczonych: rozdział 12, właściwości mechaniczne materiałów kompozytowych na bazie drewna, z Podręcznika drewna, 2021 (Chapter 12, Mechanical properties of wood-based composite materials, Wood Handbook)', url: 'https://research.fs.usda.gov/treesearch/62260' },
      { label: 'Wikimedia Commons: konstrukcja z drewna klejonego krzyżowo, zdjęcie (Brettsperrholzkonstruktion)', url: commonsClt },
    ],
  },
};
