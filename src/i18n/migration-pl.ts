import type { MigrationPage } from './migration';
import type { MigrationEntryCopy } from '../data/migration';
import { plHumanEventAtlas } from './human-event-atlas-pl';
import { plToday } from './migration-today-pl';

export const page: MigrationPage = {
  metaTitle: 'Migracja — Fix Planet',
  metaDescription:
    'Dlaczego ludzie, ptaki i inne zwierzęta się przemieszczają: epoki lodowe i wybrzeża, historyczne ruchy masowe, szlaki i ogrodzenia. Encyklopedia z podanymi źródłami o rozprzestrzenianiu ludzi, wielkich migracjach i żywych trasach.',
  eyebrow: 'Encyklopedia',
  title: 'Migracja',
  hubLead: [
    'Migracja to ruch z przyczyną. Lądolody otwierają i zamykają mosty lądowe. Sezony przesuwają deszcz, trawę, owady i plankton. Wybrzeża, góry i pustynie są barierami, dopóki nimi nie są. Ludzie później dokładają ogrodzenia, światła, sieci, armie i cieplejszy klimat na te starsze zegary.',
    'Trzy półki, celowo osobno. Dziś to współczesna mapa międzynarodowa — migracja netto i zasób migrantów, tak podpisane. Ludzie to głęboka historia Homo sapiens i wędrówek ludów, w tym Attyli. Wielkie migracje to żywe ruchy masowe: gnu, przesunięcia arealów motyli, arktyczne szlaki. Półki Ptaki i Zwierzęta są tu zwinięte. Daty to zakresy z nazwanych źródeł, nie wymyślone ślady.',
  ],
  chooseShelf: 'Wybierz półkę',
  filterAria: 'Działy migracji',
  back: '← Migracja',
  cardCta: 'Czytaj kartę →',
  primarySource: 'Źródło',
  imageCredit: 'Zdjęcie',
  sourcesLabel: 'Źródła',
  what: 'Czym jest',
  route: 'Trasa',
  drivers: 'Dlaczego — czynniki',
  timing: 'Kiedy',
  pressure: 'Co się zmienia',
  wildlifeLink: 'Karta gatunku w Przyrodzie →',
  tiles: {
    today:
      'Migracja netto według regionów ONZ za 2023 i kto już gdzie mieszka — zasób, nie przyjazdy z tego roku.',
    humans: 'Najpierw mapy zdarzeń: z Afryki, Sahul, rolnictwo, bantu, austronezyjczycy, wędrówki ludów, handel niewolnikami. Nazwane ruchy, nie spis rok po roku.',
    'great-migrations':
      'Żywe ruchy masowe i przesunięcia z epoki lodu: gnu, motyle, ptaki arktyczne, step mamutowy, Beringia i powrót holocenu.',
    birds: 'Szlaki, sezony i gatunki, które wciąż przecinają półkule po pokarm i rozród.',
    animals: 'Gnu, karibu, wieloryby, nietoperze — wybrane migracje ssaków i ich czynniki.',
  },
  shelves: {
    today: 'Dziś',
    humans: 'Ludzie',
    'great-migrations': 'Wielkie migracje',
    birds: 'Ptaki',
    animals: 'Zwierzęta',
  },
  shelfLeads: {
    today:
      'Współczesna mapa migracji międzynarodowej. Na tabliczkach jest migracja netto głównych regionów ONZ za 2023 (World Population Prospects 2024) — nie wymyślone przyjazdy i wyjazdy. Osobno włączane są obozy UNHCR i wykrycia na granicach zewnętrznych UE (Frontex). Często dominuje ruch wewnątrzregionalny; Afryka → Europa nie jest rysowana jako główna historia świata.',
    humans:
      'Najpierw mapy: oś czasu wielkich udokumentowanych migracji człowieka, potem mała figura i encyklopedia. Homo sapiens powstał w Afryce około 300 000 lat temu. Na każdej karcie jest kiedy, gdzie i dlaczego — klimat, lód, rolnictwo, wojna, handel, imperium, niewolnictwo — tylko tam, gdzie to trzyma nauka. To nie mapa wszystkich ludzi co pięćdziesiąt lat. Attyla i wędrówki ludów zostają tutaj; żywe ruchy są na Wielkich migracjach.',
    'great-migrations':
      'Żywe ruchy masowe i przesunięcia arealów w epoce klimatu — nie wyjście z Afryki i nie druga karta Attyli. Wędrówki ludów zostają na Ludziach. Karty nazywają czynnik, sezon albo udokumentowane przesunięcie i źródło.',
    birds:
      'Sezonowa migracja ptaków to maszyna pokarmu i rozrodu. Większość gatunków dalekodystansowych gniazduje na wyższych szerokościach w długodniowym lecie, potem leci ku zimowemu pokarmowi. BirdLife i CMS opisują rodziny szlaków — schematyczne korytarze, nie ślady GPS każdego stada.',
    animals:
      'Migracji ssaków jest mniej, są cięższe i łatwiej je przerwać ogrodzeniem. Za deszczem idzie trawa; lód i owady pędzą karibu; wieloryby idą za krylem, a cielęta potrzebują ciepłych płycizn. Każda karta nazywa czynnik i presję.',
  },
  humans: {
    heroEyebrow: 'Nasz gatunek',
    scientificName: 'Homo sapiens',
    imageAlt:
      'Mały rysunek średniowiecznego chłopa w prostej czapce, brązowej tunice, z powrozem w pasie i motyką — nie król i nie portret konkretnej osoby',
    appearedLabel: 'Pojawił się',
    appeared:
      'Około 300 000 lat temu w Afryce. Skamieniałości z Dżabal Irhud w Maroku datuje się na około 315 000 lat (Hublin et al. 2017). Genetyka i zapis kopalny umieszczają pochodzenie Homo sapiens na tym kontynencie. Wcześniejsze gatunki Homo już opuściły Afrykę; ta strona to późniejsze, globalne rozprzestrzenienie naszego gatunku.',
    populationLabel: 'Populacja dziś',
    population:
      'Około 8,2 miliarda ludzi w 2025 roku (ONZ, World Population Prospects 2024, wariant średni). Ta liczba jest wynikiem drogi poniżej, nie jej przyczyną.',
    framing: [
      'Zwykła rama naukowa tej witryny: pochodzenie w Afryce ~300 tysięcy lat temu; Australia / Sahul około 65–50 tysięcy; trwała obecność w Europie około 45–40 tysięcy; Ameryki około 15–10 tysięcy, ze starszymi stanowiskami wciąż spornymi. To okna przybycia, nie lata marszu.',
      'Czynniki zmieniają się krokiem. Mokre i suche fazy w Afryce Północnej i Lewancie otwierały albo zamykały pustynne korytarze. Spadek poziomu morza w maksimach glacjalnych odsłonił Sundę i zwęził przerwy wodne do Sahulu. Lądolody blokowały, potem później oferowały, drogi w głąb Ameryk. Wybrzeża, rzeki i zwierzyna były zasobami. Późniejsze wyspy wymagały łodzi.',
    ],
    wildlifePointer:
      'Przyroda trzyma ramę gatunku — pochodzenie, liczby i rodzaje dużych ssaków, które zniknęły po pierwszym przybyciu. Ta półka ma drogę głębokiej historii.',
    wildlifeCta: 'Przyroda · Homo sapiens →',
    greatMigrationsCta: 'Wielkie migracje →',
    greatMigrationsNote:
      'Żywe ruchy masowe — gnu, motyle, ptaki arktyczne — są na osobnej półce. Karta wędrówek ludów powyżej to karta epoki Attyli; tam jej nie powielamy.',
    mapTitle: 'Dokąd poszliśmy i kiedy',
    mapAria: 'Mapa świata rozprzestrzeniania Homo sapiens z datowanymi etapami przybycia',
    mapLead:
      'Ponumerowane kroki to opublikowane okna przybycia. Linie to schemat dydaktyczny na NASA Blue Marble, nie rekonstrukcja każdej grupy ani twierdzenie, że ludzie szli tylko tymi strzałkami.',
    mapAfrica: 'Afryka · pochodzenie ~300 000 lat temu',
    mapOut: 'Z Afryki · ~70 000–50 000',
    mapAustralia: 'Australia / Sahul · ~65 000–50 000',
    mapEurasia: 'Eurazja · ~45 000–40 000',
    mapAmericas: 'Ameryki · ~15 000–10 000',
    mapIslands: 'Później wyspy · ostatnie kilka tysięcy lat (Nowa Zelandia ~700)',
    mapLegend: 'Ponumerowane etapy przybycia',
    mapPinAfrica: '~300 000 lat',
    mapPinOut: '~70–50 tysięcy',
    mapPinAustralia: '~65–50 tysięcy',
    mapPinEurasia: '~45–40 tysięcy',
    mapPinAmericas: '~15–10 tysięcy',
    mapPinIslands: 'wyspy · N. Zelandia ~700 lat',
    mapSources:
      'Zakresy przybycia, nie dokładne lata. Dżabal Irhud, Hublin et al. 2017; ekspansja późnego plejstocenu, która zostawiła większość żyjącego nieafrykańskiego pochodzenia, Bergström et al. 2020; Madjedbebe, Clarkson et al. 2017 (część badaczy woli późniejszą datę Sahulu wewnątrz okna 65–50 tysięcy). Czas korytarza wolnego od lodu, Pedersen et al. 2016. Klimat glacjalny i poziom morza: IPCC AR6. Wcześniejsze skamieniałości Lewantu (Skhul/Qafzeh) zapisują obecność bez trwałego ogólnoświatowego zastąpienia.',
    mapBaseCredit:
      'Podstawa lądu: NASA Blue Marble Next Generation (grudzień 2004, domena publiczna) — bezchmurna fizyczna Ziemia, nie mapa polityczna.',
    honesty:
      'Schemat datowanych okien na fizycznym obrazie Ziemi. To nie ślad GPS, nie drzewo genetyczne i nie twierdzenie, że sam klimat ruszył ludzi.',
    eventAtlas: plHumanEventAtlas,
    sections: [
      {
        id: 'origin',
        title: 'Afryka — pochodzenie, nie poczekalnia odlotów',
        body: 'Ludzie wyewoluowali w Afryce. Data ~300 000 lat to pochodzenie, nie pistolet startowy do marszu do Australii. Przez większość tego czasu gatunek żył na jednym kontynencie, z impulsami do Lewantu, które nie założyły późniejszego ogólnoświatowego wzoru. Duże ssaki Afryki żyły już obok homininów; dlatego ta strona nie traktuje afrykańskiej utraty megafauny jako fali „pierwszego kontaktu” w tym samym sensie co Sahul albo Ameryki.',
      },
      {
        id: 'out-of-africa',
        title: 'Z Afryki — korytarze klimatyczne',
        body: 'Ekspansja późnego plejstocenu około 70 000–50 000 lat temu to ta, która zostawiła większość pochodzenia ludzi żyjących dziś poza Afryką (syntezy genetyczne jak Bergström et al. 2020). Czynnikiem nie był jeden „pęd do odkrywania”. Okna zielonej Sahary i Lewantu, potem suche bariery, sterowały, kiedy pustynia była drogą, a kiedy murem. Nil, wybrzeża Morza Czerwonego i Bab al-Mandab to wielokrotnie omawiane korytarze; ta witryna nie wybiera jednego nieudowodnionego szlaku i nie rysuje go jako faktu.',
      },
      {
        id: 'sahul',
        title: 'Sahul — wybrzeża, szelfy i przerwy wodne',
        body: 'Australia, Nowa Gwinea i Tasmania były połączone jako Sahul, gdy poziom morza był niższy. Dotarcie i tak wymagało przepraw wodnych z Sundy. Madjedbebe w północnej Australii datowano na około 65 000 lat (Clarkson et al. 2017); inne przeglądy siadają później w oknie 65–50 tysięcy. Tak czy inaczej to dziesiątki tysiącleci przed Amerykami. Mieszanka czynników to glacjalny spadek poziomu morza odsłaniający szelfy, umiejętność wybrzeża i skakania po wyspach oraz tropikalne zasoby — nie wolne od lodu korytarze w głębi lądu.',
      },
      {
        id: 'eurasia',
        title: 'Eurazja — zimny step i spóźniona Europa',
        body: 'Współcześni ludzie byli w częściach Azji, zanim stali się liczni w Europie. Trwałą obecność europejską zwykle kładzie się około 45 000–40 000 lat temu, po populacjach neandertalczyków. Czynniki obejmują produktywność łowieckich krajobrazów stepu mamutowego w chłodnych stadiach, systemy rzeczne i powolne otwieranie wyższych szerokości, gdy klimat pozwolił. To nie ten sam zegar co Sahul.',
      },
      {
        id: 'americas',
        title: 'Ameryki — lód, wybrzeża i wciąż ruchoma debata',
        body: 'Beringia łączyła Syberię i Alaskę, gdy poziom morza był niski. Lądolody laurentyjski i kordylierski potem zablokowały wnętrze. Pedersen et al. 2016 argumentowali, że korytarz wolny od lodu stał się biologicznie drożny za późno dla pierwszych ludów, dlatego pacyficzna trasa przybrzeżna jest zwykłym modelem roboczym dla wejścia ~16 000–14 000 lat, z Clovis później. Ta encyklopedia używa roboczego okna witryny 15–10 tysięcy dla szerokiej obecności. Starsze twierdzenia (w tym White Sands, Nowy Meksyk) istnieją i pozostają sporne; nie są tu traktowane jako ustalone daty pierwszego przybycia. Załamanie megafauny w Amerykach to fala przybycia, którą kataloguje Przyroda — użyteczna jako kontekst, dlaczego nowy drapieżnik na nowym kontynencie ma znaczenie, nie lista gatunków do wklejenia na tę mapę.',
      },
      {
        id: 'islands',
        title: 'Późniejsze wyspy — łodzie, nie lód',
        body: 'Madagaskar, Oceania odległa i Nowa Zelandia to historie holocenu. Pierwsze osadnictwo Nowej Zelandii jest rzędu 700 lat temu (wczesny XIV wiek w zwykłym odczycie archeologicznym). Czynnikiem jest żegluga ku nowemu lądowi i ptakom, które nigdy nie widziały ludzi — nie korytarz lodowy. Wymierania wyspowe należą na półkę Wymarłych w Przyrodzie; to koniec migracji, nie szlak.',
      },
    ],
  },
  birds: {
    flywaysTitle: 'Główne rodziny szlaków',
    flywaysAria: 'Schematyczna mapa świata głównych rodzin ptasich szlaków',
    flywaysLead:
      'BirdLife i Konwencja o gatunkach wędrownych (CMS) opisują kilka rodzin szlaków łączących lęgowiska i zimowiska. Linie poniżej to schemat dydaktyczny na NASA Blue Marble — nie ślady satelitarne, nie każdy gatunek i nie granice polityczne.',
    flywaysHonesty:
      'Schemat. Prawdziwe stada idą wybrzeżami, mokradłami i kominami termicznymi wewnątrz tych obwiedni. Przelot szlamnika Alaska–Nowa Zelandia to pacyficzny skrót, nie średnia szlaku wschodnioazjatycko-australazjatyckiego.',
    flywaysLegend: 'Nazwane rodziny szlaków',
    flywayEastAtlantic: 'Wschodnioatlantycki',
    flywayMississippi: 'Missisipi / Ameryki',
    flywayPacificAmericas: 'Pacyficzne Ameryki',
    flywayEaaf: 'Wschodnioazjatycko-australazjatycki',
    flywayCentralAsian: 'Środkowoazjatycki',
    flywayAfricanEurasian: 'Wschodnioafrykańsko-zachodnioazjatycki',
    flywaysSources:
      'Program szlaków BirdLife International; CMS. Nazwy obwiedni nieco się różnią zależnie od autora (zestawienia Boere & Stroud). Ta płyta nie wymyśla siódmego „szlaku światowego”.',
    flywaysBaseCredit:
      'Podstawa lądu: NASA Blue Marble Next Generation (grudzień 2004, domena publiczna).',
  },
  today: plToday,
};

export const entries: Record<string, MigrationEntryCopy> = {
  'mammoth-steppe-collapse': {
    title: 'Zanik stepu mamutowego',
    hook: 'Nie ucieczka na północ w Arktykę: zimny suchy step od Europy po Alaskę ustąpił lasom, mokradłom i tundrze — a ostatnie areały kilku olbrzymów skurczyły się na wschód.',
    imageAlt:
      'Zimny suchy step o zmierzchu z odległym mamutem i koniem — znak utraconego stepu mamutowego, nie nazwane stanowisko kości',
    what: 'Między około 20 000 a 8 000 lat temu step mamutowy — nazwa Guthriego na zimny, suchy, wysoko produktywny pas traw od zachodniej Europy przez Syberię po Alaskę — ustąpił wilgotniejszej mozaice lasu, bagna i tundry. Konie, bizony stepowe, nosorożce włochate i mamuty nie tylko wymierały lokalnie. Datowane ostatnie zapisy pokazują kurczenie i przesuwanie arealów. Dla północnej Eurazji ostatnie kieszenie lądowe leżą we wnętrzu wschodu — Syberia Zachodnia, Zauralie, potem refugia wyspowe — nie prosty marsz „na północ w Arktykę”. To karta przesunięcia arealu. Strony gatunków są na półce wymarłych w Przyrodzie.',
    route:
      'Plejstoceńska obwiednia szła ze zachodu na wschód, nie polarna autostrada. Gdy Europa zarastała lasem, datowane ostatnie jelenie olbrzymie (Megaloceros) wcześniej znikają na zachodzie i trwają na Syberii Zachodniej do około 7700 lat (Stuart, Kosintsev, Higham i Lister 2004). Mamuty znikają z większej części lądu koło granicy plejstocen–holocen, potem żyją na Wyspie Wrangla do około 4000 lat — równocześnie z wczesnymi państwami brązu, nie z ostatnim pulsem lodu (Vartanyan, Garutt i Sher 1993). Pasy Ałtaju–Sajanu i kazachskich stepów–gór są bliższe plejstoceńskiej mieszance niż Europa Zachodnia; to reszta biogeograficzna, nie GPS każdego stada na wschód.',
    drivers:
      'Klimat i roślinność to nazwane czynniki pierwszego rzędu: ocieplenie, wilgotniejsze gleby, zabagnienie i las zwarty zabierają suchą trawę gildii stepowej (Guthrie 2001; kontrast jelenia olbrzymiego i mamuta u Stuart et al. 2004). Polowanie ludzi jest realne tam, gdzie daty i archeologia się pokrywają; to nie hasło jednej przyczyny. Izolacja wyspowa (Wrangel) to późniejszy, mniejszy zegar.',
    timing:
      'Ostatnie maksimum glacjalne około 26–19 tysięcy lat; główna zmiana roślinności w następnych tysiącleciach. Jeleń olbrzymi: ~7700 lat na Syberii Zachodniej. Mamuty Wrangla: do ~4000 lat. Osadowe DNA z Alaski (Haile et al. 2009) daje mamuta i konia do około 10 500 lat — później niż kości. Późniejsze przeglądy kostne Arktyki kwestionują ten „widmowy” areał. Strona oznacza spór, nie wybiera hasła.',
    pressure:
      'Step jako biom holaraktyczny zniknął. Zostały fragmenty i analogie. Nie czytajcie współczesnego stada reniferów jako ocalałego stepu mamutowego. Listy gatunków są w Przyrodzie; tej karcie należy ruch.',
    sourcesNote:
      'Guthrie 2001 o biomie. Stuart et al. 2004 o holoceńskim jeleniu olbrzymim Syberii i kontraście z Wranglem. Vartanyan et al. 1993 o Wranglu. Haile et al. 2009 o sedaDNA Alaski, z adnotacją późniejszego sporu.',
  },
  'beringian-land-bridge': {
    title: 'Most beringijski',
    hook: 'Gdy morze opadło, Syberia i Alaska były jedną równiną. Konie szły nią w obie strony. Nie każdy olbrzym dał radę.',
    imageAlt:
      'Wietrzna równina beringijska z odległymi końmi i zimną mgłą — znak mostu, nie datowana przeprawa',
    what: 'Przy glacjalnie niskim poziomie morza most beringijski łączył północno-wschodnią Syberię z Alaską w ciągłą, często mokrą i surową równinę — w maksimum setki kilometrów, w niektórych rekonstrukcjach blisko 1600 km. To filtr, nie wolna autostrada. Starożytne genomy koni pokazują powtarzaną wymianę w obie strony. Linia uralo-arktyczna wchodziła do Ameryki Północnej kilka razy między około 50 000 a 19 000 lat; wcześniejsze impulsy ze wschodu na zachód zostawiły ślady w Eurazji (Vershinina, Librado i in., Science 2025; Vershinina et al. 2021). Bisony później szły korytarzem bezlodowym w obie strony, gdy się otworzył. Nosorożec włochaty nigdy nie dotarł do Ameryk. Wielbłąd amerykański i niedźwiedź krótkopyski nigdy do Azji. Nieobecność też jest świadectwem.',
    route:
      'Zachód–wschód i wschód–zachód przez odsłonięty szelf, potem — gdy tarcze laurentyjska i kordylierska zaczęły się rozchodzić — korytarzem bezlodowym zachodniej Kanady. Heintzman et al. (2016) datują pierwsze południowe bisony w korytarzu około 13 400 lat, północne około 13 000. Konie, które później weszły w korytarz, nie rozeszły się daleko; praca z 2025 czyta odlodzony grunt jako zbyt mokry dla krio-ksericznego stepu. Pacyficzne drogi brzegowe w genomach koni to osobna, wcześniejsza historia, nie drugi most.',
    drivers:
      'Poziom morza i lód. Gdy ocean jest niski, szelf jest lądem; gdy tarcze zamykają wodę, most istnieje. Siedlisko na moście — wilgoć, trawa, góry — decydowało, kto może przeżyć dość długo, by przejść. To nie strzałka „z Afryki” przyklejona do zwierząt.',
    timing:
      'Ostatnia długa faza otwarta obejmuje przedział ~50–19 tysięcy lat dla klina koni w genomach z 2025. Korytarz bezlodowy to drzwi najpóźniejszego plejstocenu (zamknięty po ~23 000 do ~13 400). Holoceński zalew kończy most jako ląd.',
    pressure:
      'Most jest pod wodą. Lekcja to przepuszczalność: jedne gatunki szły wielokrotnie, inne nigdy. Nie wymyślajcie spisu każdej przeprawy i nie traktujcie Beringii jak pustej drogi.',
    sourcesNote:
      'Genomy koni Science 2025 — dwukierunkowy ruch późnego plejstocenu i linia uralska. Vershinina et al. 2021 — wcześniejsze impulsy i filtr. Heintzman et al. 2016 — bisony w korytarzu. Nieobecności nosorożca / wielbłąda / niedźwiedzia krótkopyskiego to standardowy zapis holaraktyczny.',
  },
  'postglacial-colonization': {
    title: 'Po lodzie — Europa i Ameryka Północna',
    hook: 'Gdy lód odsłonił ziemię, drzewa, jelenie, niedźwiedzie i wilki weszły — z południowych refugiów, a na północy z Beringii.',
    imageAlt:
      'Skraj wczesnoholoceńskiego lasu z jeleniem szlachetnym przy linii drzew — znak powrotu po lodzie, nie nazwany profil pyłkowy',
    what: 'Po ostatnim maksimum glacjalnym (~26–19 tysięcy lat temu) ogromne obszary Europy i Ameryki Północnej znów stały się zdatne do życia. To najlepiej udokumentowana holoceńska „wielka migracja” bioty — nie jeden gatunek i nie jeden rok. Mapy genetyczne Hewitta (1999, 2000) to rama europejska: gatunki umiarkowane czekały na Iberii, we Włoszech, na Bałkanach i w niektórych północnych kieszeniach (Karpaty i inne), potem się rozszerzały. Różne gatunki używały różnych półwyspów — jego paradygmaty konika polnego, jeża i niedźwiedzia. Ameryka Północna ma własne źródła południowe / wschodnie / beringijskie. Karta nie wymyśla haseł kilometrów na wiek dla każdego drzewa.',
    route:
      'Jeleń szlachetny i sarna: południowe refugia w szczycie chłodu, potem ostry wchód do Europy Środkowej w Bølling–Allerød (~14,7 tysiąca lat) i na równiny północne we wczesnym holocenie — wzorzec Sommera i współpracowników z datowanych kości i pyłków. Niedźwiedź brunatny, jeż i mysz zaroślowa idą strefami szwu Hewitta, gdzie spotykały się rozszerzające genomy. Wilk szary to inna geometria: spora część żywej różnorodności idzie od późnoplejstoceńskiej ekspansji z Beringii, nie od prostego spaceru z Iberii. W Ameryce Północnej korytarz bezlodowy (Heintzman et al. 2016) to późne drzwi, nie pierwsza droga ludzi. Drzewa ciągnęły faunę: gatunki borealne szły za ociepleniem w tempie pyłkowym, przez tysiąclecia, nie przez sezon.',
    drivers:
      'Najpierw klimat: odwrót lodu, dłuższe sezony, gleby, które utrzymają drzewa. Potem siedlisko. Jeleń nie zajmie równiny, która jest jeszcze lodem albo jeszcze suchym stepem. Ludzie wchodzą w już ruchome pole; nie są nazwaną przyczyną pierwszej holoceńskiej granicy lasu.',
    timing:
      'LGM ~26–19 ka; Bølling–Allerød ~14,7 ka; wczesnoholoceńskie wypełnianie północnej Europy. Zespoły fennoskandzkie i borealne składały się przez tysiące lat. „Już skolonizowane ok. 9500 lat” w warstwach jaskiń to lokalne datowane poziomy, nie spis Europy.',
    pressure:
      'Holoceński las sam jest dziś cięty, ogrzewany i ogrodzony. Ta karta to migracja po zejściu lodu. Późniejsza zmiana krajobrazu przez ludzi należy na inne półki. Nie wkładajcie plejstoceńskich Ludzi (z Afryki) w ten powrót bioty.',
    sourcesNote:
      'Hewitt 1999 i 2000 o refugiach i strefach szwu. Heintzman et al. 2016 o zegarze korytarza północnoamerykańskiego. Datowanie jelenia szlachetnego idzie za szkołą Sommera — jako wzorzec, nie nowa tabela radiowęglowa ułożona tutaj.',
  },
  'butterfly-range-shifts': {
    title: 'Przesunięcia arealów motyli',
    hook: 'Nie jedna przeprawa: wiele gatunków przesunęło się ku biegunom albo w górę stoku, gdy klimat się ociepla — a nieliczne wciąż lecą przez kontynenty.',
    imageAlt: 'Rusałka osetnik na polnym kwiecie — dalekodystansowy migrant jako znak klimatycznych przesunięć motyli',
    what: '„Masowe” nie oznacza tu pętli Serengeti. To dwa fakty ze źródłami. Po pierwsze, zespoły motyli przesunęły areały lęgowe ku biegunom i w górę stoku: dostojka Edith w zachodniej Ameryce Północnej (Parmesan 1996) i globalny odcisk wielu taksonów (Parmesan & Yohe 2003). Po drugie, nieliczne gatunki odbywają prawdziwe dalekie migracje sezonowe. Rusałka osetnik (Vanessa cardui) jest najlepiej udokumentowana: wielopokoleniowe obiegi między tropikalną Afryką a Europą (Stefanescu et al. 2013). Ta karta nie wymyśla jednej światowej autostrady motyli.',
    route:
      'Przesunięcia arealów są lokalne lub regionalne: kolonie gasną na ciepłym albo suchym skraju i pojawiają się dalej na północ albo wyżej. Osetniki idą sezonowym obiegiem, który może łączyć Sahel i Maghreb z Europą i z powrotem — łańcuch pokoleń, nie jeden owad na całą mapę. Monarcha w Amerykach to inny system; nie naklejamy go tutaj jako tej samej historii.',
    drivers:
      'Dla przesunięć arealów czynnikiem jest klimat: ocieplenie i suszenie, które psują dawne miejsce lęgowe i otwierają nowe. Dla osetnika — sezonowe pulsy roślin żywicielskich i nektaru. Ani jedno, ani drugie nie jest korytarzem epoki lodowej w ludzkim sensie.',
    timing:
      'Prace o przesunięciu arealu mówią o dekadach, nie o kalendarzu migracji. Pulses osetnika są sezonowe i zmieniają się z rokiem; „lata inwazji” w Europie to udokumentowane szczyty, nie stały rozkład jazdy.',
    pressure:
      'Klimat nadal przesuwa obwiednię. Utrata siedlisk (łąki, rośliny żywicielskie) może zablokować przesunięcie, które na mapie wygląda łatwo. Spadek owadów to osobna, szersza presja; karta nie wymyśla światowego spisu motyli.',
    sourcesNote:
      'Parmesan 1996 i Parmesan & Yohe 2003 to nazwane prace o przesunięciu arealu. Stefanescu et al. 2013 to obieg osetnika. „Masowe” jest oznaczone tymi dwoma znaczeniami, nie jako analogon gnu.',
  },
  'arctic-migratory-birds': {
    title: 'Arktyczne ptaki wędrowne',
    hook: 'Rybitwy, sokoły wędrowne, siewkowce, gęsi: arktyczne lato to puls pokarmu, a zima jest gdzie indziej.',
    imageAlt: 'Rybitwy popielate nad zimnym północnym brzegiem — znak wysokiej szerokości, nie nazwana kolonia',
    what: 'To karta klasy, nie druga encyklopedia rybitwy popielatej i nie trzecia strona „szlaków po lodzie”. Wiele ptaków lęgowych na arktycznej i subarktycznej tundrze odlatuje, gdy gasną światło i owady. Rybitwy popielate lecą od bieguna do bieguna (Egevang et al. 2010). Sokoły wędrowne idą za ofiarą wzdłuż wybrzeży i szlaków. Siewkowce stagingują na nielicznych mulistych płyciznach. Gęsi idą za trawą i odwilżą. BirdLife i CMS opisują rodziny szlaków; syntezą regionalną jest CAFF. Sezonowa migracja istniała już w zlodowaceniu (modele na dziesiątki tysięcy lat). Po lodzie zmieniła się geografia: lęgi ścisnęły się na południe, zwłaszcza w Ameryce Północnej pod tarczą laurentyjską, potem holocen znów otworzył arktyczne lato.',
    route:
      'Lęgi w długim arktycznym dniu; zimowiska na umiarkowanych albo tropikalnych mokradłach, wybrzeżach albo — u rybitw — przy antarktycznym lodzie paku. Szlaki wschodnioatlantycki, wschodnioazjatycko-australazjatycki, Missisipi i pacyficzno-amerykański niosą lęgowce arktyczne. Gu et al. (Nature, 2021) śledzili euroazjatyckie arktyczne sokoły wędrowne na pięciu współczesnych szlakach i wiążą je z przesunięciem lęgowisk od LGM do holocenu. Linie to obwiednie, nie GPS każdego stada. Przelot szlamnika Alaska–Nowa Zelandia to pacyficzne skrócenie, nie średnia.',
    drivers:
      'Sezonowa produkcja. Lata wysokich szerokości dają długi dzień i wybuch owadów, ryb i nowej trawy. Polarne zimy nie. Wiatr i wybrzeża prowadzą tanią trasą. To zegar pokarmu i rozrodu, nie historia uchodźców.',
    timing:
      'Na północ wiosną półkuli północnej, na południe po lęgach. U niektórych populacji przylot przyspieszył, gdy wiosny się ocieplają — fenologia, nie nowy szlak. Rekordowe kilometry to nazwane prace telemetryczne.',
    pressure:
      'Klimat przesuwa krawędź lodu, daty odwilży i ofiary. Rekultywacja Morza Żółtego i innych przystanków zabiera stacje paliw. Polowania, niepokój i rybołówstwo dokładają lokalne straty. CAFF i BirdLife traktują migrantów arktycznych jako wspólny problem szlaków, nie muzeum jednego gatunku. Karta rybitwy popielatej zostaje pod starym głębokim adresem, jeśli chcesz samą pracę o 70 000 km.',
    sourcesNote:
      'Egevang et al. 2010 o rybitwach; Gu et al. 2021 o złożeniu szlaków sokoła wędrownego po lodzie; szlaki BirdLife; CAFF; CMS. Karta nie wymyśla spisu wszystkich arktycznych migrantów ani drugiej encyklopedii ptasich szlaków.',
  },
  'hunnic-invasion': {
    title: 'Hunicka presja na Rzym',
    hook: 'Nie wyjście z Afryki: stepowa siła IV–V wieku, której nacisk pomógł zepchnąć Gotów i inne ludy na rzymskie rubieże.',
    imageAlt:
      'Muzealna kopia huńskiego kotła brązowego, typ IV–V wieku, sfotografowana w Kazaniu — replika, nie oryginalne znalezisko grobowe',
    what: 'Hunowie byli konną, wieloetniczną grupą stepową, którą rzymscy autorzy jasno opisują w latach 370. n.e. na północ od Morza Czarnego. Głębsze pochodzenie nie jest ustalone. Związek z Xiongnu chińskiej granicy to stara hipoteza, nie dowód. Ammianus Marcellinus jest najpełniejszą bliską czasowo relacją o wstrząsie, który zagnał Gotów nad Dunaj; Jordanes, piszący w VI wieku, jest późniejszy i bardziej mityczny — tradycja, nie spis. Ta karta nie jest portretem Attyli jako przeznaczenia rasy. To nazwany ruch w zapisie późnoantycznym.',
    route:
      'Rzymska geografia lat 370. umieszcza aktywność huńską na wschód i północ od Morza Czarnego, potem presję na Alanów i Gotów na zachód ku Dunajowi. W 376 Tervingowie i Greutungowie prosili o przejście do cesarstwa. Same grupy huńskie nie były jeszcze wtedy główną siłą na Dunaju; odczyt Heathera z Ammianusa: kaskada była realna, ale to nie jednorazowy pochód Hunów do Italii w 376. W latach 430–450 huńska polityka pod Ruą, potem Attylą, opierała się na Kotlinie Karpackiej, łupiła obie połowy cesarstwa, biła się na Polach Katalaunijskich w 451, weszła do Italii w 452 i rozpadła się po śmierci Attyli w 453.',
    drivers:
      'Presja wojskowa i polityczna to czynnik, który źródła nazywają dla 376: Goci nad rzeką z powodu Hunów (Ammianus; sekwencja jest w każdym poważnym opracowaniu). Kaskadowe przesunięcie — Alanowie, Goci, później grupy związane z przejściem Renu w 406 — to mechanizm, nie nacjonalistyczny „najazd na cywilizację”. Klimat jest późniejszym, węższym argumentem. Hakenbeck i Büntgen (2022) na podstawie hydroklimatu z przyrostów drzew proponują, że silne susze w Kotlinie Karpackiej w latach 430–450 zaburzyły utrzymanie i mogły nasilić huńskie rajdy jako bufor. To o rajdach epoki Attyli, nie o udowodnionej przyczynie pojawienia się w latach 370., i nie o późnoantycznej małej epoce lodowej od 536, która jest po Attyli. Suszę trzymajcie jako hipotezę z niepewnością, nie jako hasło.',
    timing:
      'Wyraźna wzmianka rzymska: lata 370. Przejście Dunaju przez Gotów: 376. Adrianopol: 378. Szczyt Attyli: lata 440.–452. Śmierć: 453. Niemiecka etykieta historiograficzna Völkerwanderung („okres wędrówek ludów”) to rama XIX wieku dla tych stuleci. To nazwa półki w starych podręcznikach, nie opowieść rasowa i nie data pochodzenia Homo sapiens.',
    pressure:
      'Zachodni rząd cesarski nie strawił przejścia z 376; Adrianopol i późniejsze wojny domowe znaczyły nie mniej niż jakakolwiek stepowa „horda”. Późniejszy europejski nacjonalizm przerabiał Attylę na bicz albo przodka. Ta encyklopedia nie robi ani jednego, ani drugiego. Huńska polityka rozpadła się po 453; grupy następcze nad Dunajem to inna karta, jeśli ta półka urośnie. Nie wrzucajcie tego ruchu na półkę plejstoceńskich Ludzi.',
    sourcesNote:
      'Ammianus 31 to główna relacja o 376. Heather 1995 to standardowy odczyt polityczno-wojskowy. Hakenbeck & Büntgen 2022 to artykuł klimatyczny o rajdach z lat 430–450 — tak opisany. Zdjęcie to muzealna kopia kotła z 2006, nie wykopany oryginał.',
  },
  'arctic-tern': {
    title: 'Rybitwa popielata',
    hook: 'Najdłuższy regularny dojazd na Ziemi: polarne lato do polarnego lata, za światłem i pokarmem.',
    imageAlt: 'Rybitwa popielata zawisa nad tundrą na Amsterdamøya, Svalbard',
    what: 'Rybitwa popielata gniazduje w Arktyce i subarktyce, a przeciwną porę spędza w wodach antarktycznych. To mała rybitwa, IUCN: najmniejszej troski, sławna dlatego, że geolokatory pokazały pętlę rzędu 70 000 kilometrów — nie dlatego, że jest rzadka.',
    route:
      'Grenlandzkie i inne północnoatlantyckie ptaki lęgowe śledzone przez Egevang et al. (2010) opuszczały kolonie, pauzowały na Atlantyku Północnym, przecinały ku wybrzeżu Afryki Zachodniej albo leciały dalej i docierały do antarktycznego paku lodowego, zanim wróciły. Populacje pacyficzne mają równoległy wzór biegun–biegun. Ślad układa się z płatów pokarmu, nie jest prostą południkową linią.',
    drivers:
      'Czynnikiem jest sezonowa produkcja. Lata wysokich szerokości dają długie dni i obfitość drobnych ryb i bezkręgowców; polarne zimy — nie. Podążanie za latem dookoła globu to strategia pokarmowa. Wiatr i fronty oceaniczne sterują tanią trasą. To nie ucieczka przed epokami lodowymi w ludzkim sensie — to roczny zegar fotoperiodu i żeru.',
    timing:
      'Lęgi w północnym lecie; wody antarktyczne w południowym lecie. Egevang et al. oszacowali około 70 900 km dla ptaków grenlandzkich. Późniejsze śledzenie innych populacji dało jeszcze dłuższe sumy. „Najdłuższą migrację” traktuj jako klasę bardzo długich pętli pelagicznych, nie jedną świętą liczbę.',
    pressure:
      'Klimat przesuwa krawędź lodu i porę zdobyczy. Zabudowa wybrzeża i niepokojenie kolonii oraz rybołówstwo, które zabiera ryby paszowe, znaczą więcej niż ogrodzenie. Gatunek jest wciąż szeroko rozsiedlony. Dojazd nie jest eksponatem muzealnym.',
    sourcesNote:
      'Dystans z Egevang et al., PNAS, 2010. IUCN: najmniejszej troski. Późniejsze prace wydłużają niektóre ślady; nie wymyślają innej historii gatunku.',
  },
  'bar-tailed-godwit': {
    title: 'Szlamnik',
    hook: 'Alaska do Nowej Zelandii bez lądowania: jelito skurczone pod paliwo i Morze Żółte, które wciąż musi być na drodze powrotnej.',
    imageAlt: 'Szlamnik stoi w płytkiej wodzie',
    what: 'Szlamnik to duży siewkowaty. Podgatunek baueri gniazduje na Alasce i zimuje w Nowej Zelandii i wschodniej Australii. IUCN uznaje gatunek za bliskiego zagrożenia, bo kilka populacji spada, zwłaszcza tam, gdzie wschodnioazjatyckie błota pływowe zamieniono w ląd.',
    route:
      'Gill et al. (2009) i Battley et al. (2012) udokumentowali południowe loty bez lądowania z Alaski do Nowej Zelandii — ptaki Battleya średnio 11 680 km w 9,4 dnia, bez żerowania. Na północ wiele ptaków przystaje na Morzu Żółtym. To inny, zależny od postoju odcinek, nie kolejne bezprzystankowe przecięcie oceanu.',
    drivers:
      'Lęgi są zsynchronizowane z krótkim arktycznym latem owadów i pokarmu tundry. Zimowiska na południu dają pokarm strefy pływowej, gdy Alaska jest zamarznięta. Południowy odcinek bez lądowania jest możliwy, bo ptaki kurczą narządy trawienne i ładują tłuszcz — fizjologiczny zakład na czysty Pacyfik. Powrót zależy od nietkniętych błot pływowych Morza Żółtego: pokarm, nie siła woli.',
    timing:
      'Na południe jesienią północną; na północ wiosną północną, z postojem na Morzu Żółtym u baueri. Nagłówkowe „najdłuższe bez lądowania” traktuj jako śledzone osobniki w nazwanych pracach, nie średnią gatunku co roku.',
    pressure:
      'Zasypanie błot Morza Żółtego (Saemangeum i inne) zabrało siedlisko postojowe. To ludzka bariera w sensie szlaku: ptaki wciąż potrafią lecieć, ale skład paliwa jest mniejszy. Polowania i niepokojenie dokładają lokalne straty. Klimat przesuwa arktyczne okna lęgów względem odwilży.',
    sourcesNote:
      'Gill 2009 i Battley 2012 to główne prace śledzeniowe cytowane tutaj. IUCN: bliski zagrożenia dla gatunku jako całości.',
  },
  'barn-swallow': {
    title: 'Dymówka',
    hook: 'Zwykły cud: mały owadożerca, który wciąż spina palearktyczne lata z afrykańskimi zimami.',
    imageAlt: 'Dymówka siedzi na suchej łodydze',
    what: 'Dymówka jest jedną z najszerzej rozsiedlonych jaskółek, IUCN: najmniejszej troski. Ptaki europejskie i północnoazjatyckie to dalekodystansowi wędrowcy; niektóre populacje tropikalne ruszają się mniej. Jest tu jako znajomy ptak szlaku, nie rekord ekstremalnego dystansu.',
    route:
      'Lęgowe ptaki zachodniej Palearktyki ściągają się przez Morze Śródziemne i Saharę ku południowoafrykańskim zimowiskom; wschodnie ptaki używają tras azjatyckich. Sahara to bariera ciepła i pustki, przecinana według rozkładu, nie mur, który kończy drogę. Populacje amerykańskie tego samego gatunku mają własny system północ–południe.',
    drivers:
      'Owady powietrzne szczytują z umiarkowanymi latami. Afrykańskie zimowiska trzymają owady, gdy Europa jest zimna. Gniazdowanie na stodołach i mostach to ludzki bonus, nie pierwotny czynnik — jaskinie i klify były pierwsze. Pogoda w dniach przelotu zabija więcej ptaków niż brak „instynktu”.',
    timing:
      'Na północ wiosną północną, na południe jesienią. Daty przylotu przesunęły się wcześniej w częściach Europy, gdy wiosny się ocieplają — zmiana fenologii, nie nowy szlak.',
    pressure:
      'Intensyfikacja rolnictwa zmniejsza zdobycz owadzią. Susza na afrykańskich zimowiskach i burze na przecięciach Sahary dokładają śmiertelność. Gatunek zostaje pospolity; pospolity to nie to samo co niepoliczalny na zawsze.',
    sourcesNote:
      'IUCN: najmniejszej troski; karta BirdLife dla zasięgu i rodziny szlaku. Ta karta nie wymyśla jednego śladu GPS „jaskółki”.',
  },
  'white-stork': {
    title: 'Bocian biały',
    hook: 'Szybujący wędrowiec, który traktuje Morze Śródziemne jako problem: woda nie ma kominów termicznych, więc ptaki idą dookoła.',
    imageAlt: 'Bocian biały w locie z nadajnikiem GPS',
    what: 'Bocian biały to duży szybujący ptak mokradeł i pól, IUCN: najmniejszej troski po krachu XX wieku i późniejszej odbudowie w częściach Europy. To gatunek flagowy systemu szlaku afrykańsko-euroazjatyckiego.',
    route:
      'Większość zachodnich ptaków przecina Cieśninę Gibraltarską; wschodnie używają Bosforu i Lewantu — dwa wąskie mosty lądowe wokół morza, które nie daje wznoszącego powietrza. Potem idą afrykańskim Ryftem i sawannami. Rosnący udział zachodnich bocianów zimuje teraz w południowej Europie na wysypiskach. To skrócona migracja, nie nowy gatunek.',
    drivers:
      'Bociany potrzebują kominów termicznych, więc są wędrowcami mostów lądowych. Lęgi są zsynchronizowane z europejskimi wiosnami i wybuchem płazów, owadów i drobnych kręgowców. Pokarm poza lęgami w Afryce to sezonowe mokradła i łąki. Wysypiska później stały się dopłatą energetyczną, która pozwala części ptaków ominąć Saharę.',
    timing:
      'Na południe po północnym sezonie lęgowym; na północ wiosną. Młode mogą brać inne trasy niż dorosłe. Nadajniki (jak na fotografii) są tym, skąd to wiemy — nie folklor o dzieciach.',
    pressure:
      'Linie energetyczne, osuszanie mokradeł i susza wzdłuż afrykańskiej trasy. Zimowanie na wysypiskach w Iberii to prawdziwa zmiana zachowania z mieszanymi skutkami (łatwe kalorie, brudne). Gatunek odbił w Europie pod ochroną i platformami gniazd; to zarządzanie, nie gwarancja dla afrykańskich etapów.',
    sourcesNote:
      'IUCN: najmniejszej troski; karta BirdLife. AEWA obejmuje wiele mokradeł, których te ptaki używają. Zimowanie na wysypiskach jest w literaturze śledzeniowej; nie jest tu wymyślone.',
  },
  'amur-falcon': {
    title: 'Sokół amurski',
    hook: 'Mały sokół z rosyjskiego Dalekiego Wschodu, który przecina Indie i Morze Arabskie, by spędzić północną zimę w południowej Afryce.',
    imageAlt: 'Sokół amurski w locie na bladym niebie',
    what: 'Sokół amurski gniazduje we wschodniej Azji (rosyjski Daleki Wschód, północne Chiny, sąsiednie regiony) i zimuje w południowej Afryce. IUCN: najmniejszej troski. Wśród ptaków drapieżnych jest jednym z najdłuższych regularnych wędrowców.',
    route:
      'Ptaki opuszczają wschodnią Azję, przystają w północno-wschodnich Indiach (Nagaland stał się sławny z masakry i z odwrócenia ochronnego), potem przecinają Ocean Indyjski / Morze Arabskie ku wschodniej i południowej Afryce. Przecięcie oceanu to prawdziwa bariera wodna, nie szybujący skok mostu lądowego jak gibraltarski u bociana.',
    drivers:
      'Lęgi idą za wschodnioazjatyckim letnim impulsem owadów (zwłaszcza latających termitów i innych rojów). Afrykańskie zimowiska dają drugie lato tej samej klasy zdobyczy. Trasa to korytarz pokarmu z groźnym morzem w środku, nie historia klimatycznych uchodźców.',
    timing:
      'Na południe jesienią północną, ze skupionym przelotem przez północno-wschodnie Indie; na północ wiosną północną. Daty to okna sezonowe, nie jeden dzień kalendarza.',
    pressure:
      'Zbiór nocujących ptaków w Nagalandzie był dość duży, by zrobić międzynarodowe wiadomości; lokalna ochrona potem zamieniła te same noclegownie w gospodarkę oglądania. To ludzka presja odwrócona w jednym wąskim gardle, nie globalne odwołanie alarmu. Zmiana siedlisk i pestycydy na obu końcach szlaku zostają zwykłymi zagrożeniami.',
    sourcesNote:
      'IUCN: najmniejszej troski; notatki CMS o odwróceniu w Nagalandzie. Ta karta nie wymyśla rekordu kilometrów; „wśród najdłuższych migracji ptaków drapieżnych” to uczciwa klasa.',
  },
  'bar-headed-goose': {
    title: 'Gęś tybetańska',
    hook: 'Gęś, która przecina Himalaje, bo jeziora lęgowe leżą na północ od muru, a zimowiska — na południe od niego.',
    imageAlt: 'Gęś tybetańska stoi w płytkiej wodzie',
    what: 'Gęś tybetańska gniazduje na wysokich płaskowyżach Azji Środkowej i zimuje w Azji Południowej. IUCN: najmniejszej troski. Hawkes et al. (2011) pokazali ptaki lecące nad grzbietami Himalajów, a nie tylko przeciskające się najniższymi dolinami.',
    route:
      'Na północ od Himalajów w sezonie lęgowym (Wyżyna Tybetańska i sąsiednie jeziora); na południe na subkontynent indyjski zimą. Łańcuch górski jest barierą. Ptaki idą nad nim według rozkładu, używając wiatrów i fizjologii dostrojonej do rzadkiego powietrza — nie tunelu przez pasmo.',
    drivers:
      'Lęgi na ubogich w drapieżniki, bogatych w pokarm mokradłach płaskowyżu latem; zimowy pokarm na indyjskich nizinach, gdy płaskowyż zamarza. Himalaje to geografia, nie sezon. Tlen i wiatr to bezpośrednie fizyczne czynniki tego, jak przecinają, nie dlaczego.',
    timing:
      'Na południe jesienią, na północ wiosną, zsynchronizowane z odwilżą i zamarzaniem na płaskowyżu. Dokładne wysokości przecinania grzbietów różnią się osobnikiem i pogodą; praca w PNAS jest nazwanym źródłem, nie folklorem „za każdym razem nad Everestem”.',
    pressure:
      'Utrata mokradeł na zimowiskach, polowania i infrastruktura energetyczna. Zmiana klimatu przesuwa śnieg i lód jezior na lęgowym płaskowyżu. Gatunek nie jest globalnie rzadki; przecięcie wciąż zależy od mokradeł po obu stronach muru.',
    sourcesNote:
      'Hawkes et al., PNAS, 2011, to cytowana tu praca o fizjologii i locie. IUCN: najmniejszej troski.',
  },
  wildebeest: {
    title: 'Gnu pręgowane',
    hook: 'Deszcz pisze mapę: ponad milion zwierząt wciąż idzie za nową trawą wokół Serengeti–Mara.',
    imageAlt: 'Cielę gnu pręgowanego stoi obok matki na otwartej łące',
    what: 'Gnu pręgowane to pasąca się antylopa wschodnich i południowoafrykańskich sawann, IUCN: najmniejszej troski. Populacja Serengeti–Mara jest tą sławną wędrowną; inne populacje ruszają się mniej albo wcale. UNESCO wpisuje Park Narodowy Serengeti między innymi za ten sezonowy ruch.',
    route:
      'W zwykłym roku wielkie stado Serengeti cieli się na południowych krótkich trawach w porze deszczowej, potem idzie na zachód i północ, gdy te równiny wysychają, przekracza do kenijskiej Masai Mara w porze suchej i wraca na południe, gdy deszcze wracają. Przeprawy rzeczne na Marze są wąskim gardłem tej pętli, nie osobną migracją.',
    drivers:
      'Holdo, Holt & Fryxell (2009) oraz starsze prace Sinclair–Mduma o Serengeti traktują pętlę jako sprzężenie opadu, azotu trawy i zagęszczenia pasących się. Zwierzęta idą za nową, pożywną trawą i wodą powierzchniową. Drapieżniki idą za pasącymi się. To zegar zasobów, nie korytarz epoki lodowej.',
    timing:
      'Wycielenie na południowych równinach w porze deszczowej (mniej więcej styczeń–marzec w wielu latach); obecność pory suchej na północy (środek roku). Dokładne tygodnie przesuwają się z deszczem. Turystyczne kalendarze „Wielkiej Migracji” traktuj jako przybliżenia.',
    pressure:
      'Ogrodzenia, farmy i drogi mogą przeciąć pętlę, która działa tylko wtedy, gdy równiny zostają połączone. Lata suszy już zabijają cielęta. System Serengeti–Mara jest wciąż duży; ten sam gatunek gdzie indziej został zredukowany do osiadłych fragmentów. Ten kontrast jest punktem ochrony.',
    sourcesNote:
      'Wpis UNESCO Serengeti; Holdo et al. 2009 dla mechanizmu deszcz–trawa; IUCN: najmniejszej troski dla gatunku. Wielkość stada jest rzędu miliona plus w tym ekosystemie i jest liczona, nie zgadywana tu jako slogan.',
  },
  caribou: {
    title: 'Karibu / renifer',
    hook: 'Ten sam gatunek: tundrowe stada, które wciąż idą setki kilometrów między miejscami wycielenia a zimowymi lasami.',
    imageAlt: 'Renifer idzie po nagim północnym gruncie',
    what: 'Rangifer tarandus to karibu w Ameryce Północnej i renifer w Eurazji. IUCN uznaje gatunek za narażony, bo wiele dzikich stad spadło, nawet gdy część domowych reniferów zostaje liczna. Zdjęcie to zwierzę fennoskandzkie; ekologia poniżej obejmuje dzikie stada wędrowne, w tym stado Porcupine z Alaska–Yukon.',
    route:
      'Stada cielące się na tundrze idą na północ albo na półwyspy po ulgę od owadów i pożywną nową paszę latem, potem na południe albo w las borealny i tajgę po zimowe porosty i schronienie. Joly et al. (2019) udokumentowali jedne z najdłuższych lądowych migracji na kontynencie. Trasy są tradycyjne i też plastyczne, gdy lód, śnieg albo zabudowa je blokuje.',
    drivers:
      'Miejsca wycielenia wybiera się dla paszy i, często, mniejszej liczby drapieżników. Letnie owady (gzy, komary) mogą pchać zwierzęta na wietrzne wybrzeża. Zimowy pokarm to porost pod śniegiem — problem klimatu i skorupy śnieżnej tak samo jak dystansu. To sezonowy zegar arktyczny, z lodem i śniegiem jako barierami.',
    timing:
      'Na północ ku wycieleniu wiosną; ruchy letnie za owadami i pokarmem; na południe jesienią. Terminy dróg lodowych i migracji mogą zderzyć się z kalendarzami przemysłu.',
    pressure:
      'Ślady przemysłowe, drogi i proponowana eksploatacja ropy na terenach wycielenia (przybrzeżna równina Arctic Refuge jest amerykańskim politycznym punktem zapalnym dla stada Porcupine). Klimat zmienia skorupę śniegu, zdarzenia oblodzenia i sezony owadów. IUCN: narażony to ostrzeżenie na poziomie gatunku; niektóre stada są stabilne albo odbudowują się, inne — nie.',
    sourcesNote:
      'IUCN: narażony; Joly et al. 2019 dla ruchów dalekodystansowych; strony USFWS o stadzie Porcupine. Hodowla domowego renifera to równoległa ludzka historia, nie podstawiona tu za dziką migrację.',
  },
  'humpback-whale': {
    title: 'Długopłetwiec',
    hook: 'Żeruj w zimnym, cielej w ciepłym: dojazd biegun–tropiki w każdym basenie oceanu, który wciąż ma zdobycz.',
    imageAlt: 'Długopłetwiec nurkuje, widać czarno-białe płetwy ogonowe',
    what: 'Długopłetwiec to fiszbinowiec o długich płetwach piersiowych. IUCN uznał go za najmniejszej troski w 2018 po odbudowie w kilku basenach oceanicznych po przemysłowym wielorybnictwie. Niektóre stada zostają małe. Przyroda trzyma kartę gatunku; ta strona to migracja.',
    route:
      'W każdym oceanie wiele populacji żeruje na wysokich szerokościach latem i płynie do tropikalnych albo subtropikalnych miejsc rozrodu zimą — na przykład żerowiska Pacyfiku Północnego do Hawajów albo Meksyku, albo żerowanie Oceanu Południowego do Wielkiej Rafy Koralowej i innych tropikalnych wybrzeży. Nie każdy osobnik migruje co roku. Przecięcia równika różnią się populacją; nie rysuj jednego globalnego toru wyścigowego.',
    drivers:
      'Polarne i subpolarne lata dają gęsty kryl i drobne ryby. Cielęta mają mniej tłuszczu i korzystają z cieplejszych, cichszych wód z mniejszą liczbą drapieżników. Kopulacja jest związana z tymi miejscami rozrodu. Czynnikiem jest rozdział pokarmu i rozrodu w szerokości geograficznej, nie szlak kominów termicznych.',
    timing:
      'Żerowanie w lecie wysokich szerokości; rozród w zimie niskich szerokości tej półkuli. Populacje południowej i północnej półkuli są na przeciwnych kalendarzach.',
    pressure:
      'Splątanie w sprzęcie rybackim, zderzenia ze statkami, hałas i zmieniająca się mapa kryla, gdy oceany się ocieplają. Komercyjne wielorybnictwo nie jest już głównym globalnym czynnikiem; odbudowa jest realna w kilku stadach i niepełna w innych. Ramę ochronną zobacz w Przyrodzie.',
    sourcesNote:
      'IUCN 2018: najmniejszej troski; profil NOAA Fisheries dla stad USA i wzoru żerowanie/rozród. To nie spis zwierząt każdego basenu.',
  },
  'gray-whale': {
    title: 'Płetwal szary',
    hook: 'Wśród najdłuższych dojazdów ssaków, które wciąż działają: arktyczne żerowanie do meksykańskich lagun, wzdłuż jednego zaludnionego wybrzeża.',
    imageAlt: 'Płetwal szary wystawia głowę nad wodę',
    what: 'Płetwal szary to fiszbinowiec Pacyfiku Północnego. Stado wschodniego Pacyfiku Północnego to to, którego migrację ogląda się z amerykańskiego wybrzeża zachodniego; stado zachodnie jest znacznie mniejsze i zagrożone w ocenie IUCN tej populacji. Gatunek jako całość jest najmniejszej troski.',
    route:
      'Wieloryby wschodniego Pacyfiku żerują w morzach Beringa i Czukockim latem, potem idą wybrzeżem Ameryki Północnej do zimowych lagun w Kalifornii Dolnej. NOAA opisuje pętlę rzędu 15 000–20 000 km. Ślad jest przybrzeżny, dlatego ludzie go widzą — i dlatego statki i sieci siedzą na tej samej linii.',
    drivers:
      'Arktyczne denne obunogi i inna zdobycz dna morskiego to letni zasób. Cielęta rodzą się w ciepłych, płytkich lagunach. Pokrywa lodowa historycznie ustalała, kiedy północ się otwierała. To szerokościowy rozdział pokarmu i rozrodu z przybrzeżnym ograniczeniem, nie wędrówka po otwartym oceanie jak niektóre odcinki długopłetwca.',
    timing:
      'Na południe jesienią i zimą północną; na północ wiosną, krowy z cielętami później niż pierwsza fala. Lód i zdobycz w Arktyce mogą opóźnić albo zagłodzić rok — nietypowe zdarzenia śmiertelności udokumentowano, gdy ten system zawodzi.',
    pressure:
      'Zderzenia ze statkami i splątanie na ruchliwym wybrzeżu; niepokojenie w lagunach; ocieplenie Arktyki, które przestawia zdobycz i lód. Stado wschodnie odbiło się po wielorybnictwie; ta odbudowa nie jest tarczą przeciw przesunięciu sieci pokarmowej w Morzu Beringa.',
    sourcesNote:
      'Profil NOAA Fisheries płetwala szarego dla trasy wschodniego Pacyfiku Północnego i klasy dystansu; IUCN dla statusu, w tym osobnego zagrożenia stada zachodniego.',
  },
  'mexican-free-tailed-bat': {
    title: 'Molosek brazylijski',
    hook: 'Dziesiątki milionów opuszczają teksańskie jaskinie o zmierzchu po owady — i wiele z tych samych zwierząt też dojeżdża sezonowo ku Meksykowi.',
    imageAlt: 'Kolumna molosków brazylijskich wylewa się z jaskini Bracken o zmierzchu',
    what: 'Tadarida brasiliensis to mały, szybki owadożerny nietoperz Ameryk, IUCN: najmniejszej troski. Jaskinia Bracken w Teksasie trzyma największą znaną kolonię — rzędu 15 milionów zwierząt w sezonie, zarządzaną przez Bat Conservation International. Zdjęcie to wieczorne wyloty, codzienny puls; migracja to sezonowe przesunięcie wielu (nie wszystkich) umiarkowanych kolonii.',
    route:
      'Część populacji jest osiadła. Wiele umiarkowanych kolonii Ameryki Północnej idzie ku Meksykowi i południu USA na zimę. Szlak to szerokie nocne niebo, nie przybrzeżne błoto. Kolonie rozrodcze w południowo-środkowych USA skupiają samice latem.',
    drivers:
      'Owady powietrzne. Letnie kolonie rozrodcze siedzą tam, gdzie noce dają dość ciem i chrząszczy, by odchować młode. Zimowe spadki owadów pchają część nietoperzy na południe. Dzienna kolumna w Bracken to lokalne żniwo owadów nad polami — pionowy dojazd na wierzchu sezonowego.',
    timing:
      'Wieczorne wyloty odbywają się co noc w sezonie. Ruch sezonowy jest między letnimi koloniami rozrodczymi a zimowiskami, zsynchronizowany z fenologią owadów. Nie każdy osobnik migruje.',
    pressure:
      'Niepokojenie jaskiń, pestycydy, które zabierają zdobycz, i turbiny, które siedzą w nocnych szlakach. Zespół białego nosa był katastrofą dla innych nietoperzy Ameryki Północnej; historia tego gatunku to wciąż głównie siedlisko, owady i zderzenia. Guano historycznie zrobiło z jaskiń zasób przemysłowy; ochrona to odwróciła w Bracken.',
    sourcesNote:
      'IUCN: najmniejszej troski; Bat Conservation International o jaskini Bracken. Wielkość kolonii to zarządzany szacunek rzędu wielkości, nie spis każdego nietoperza w Amerykach.',
  },
  'straw-coloured-fruit-bat': {
    title: 'Rudawka palowa',
    hook: 'Afrykańskie masowe zgromadzenie rudawki: miliony zbiegają się w maleńkim zambijskim lesie bagiennym, gdy drzewa owocują.',
    imageAlt: 'Rudawka palowa wisi na gałęzi',
    what: 'Eidolon helvum to duża afrykańska rudawka owocożerna, IUCN: bliski zagrożenia. Park Narodowy Kasanka w Zambii gości jedno z najgęstszych skupień ssaków na Ziemi każdej wiosny półkuli południowej — rzędu kilku milionów nietoperzy na kilku hektarach lasu bagiennego mushitu — potem zwierzęta się rozpraszają.',
    route:
      'Richter & Cumming (2008) oznaczyli nietoperze satelitarnie i pokazali dalekodystansowe ruchy przez Afrykę Środkową, nie jeden dojazd między dwoma punktami. Kasanka jest sezonowym węzłem, gdzie owocujące drzewa skupiają zwierzęta, które poza tym krążą po mozaice lasu deszczowego i sawanny. Traktuj to jako zgromadzenie na impulsie zasobu, z długimi przejściami między noclegowniami.',
    drivers:
      'Owoce. Drzewa owocują w przestrzeni i czasie; nietoperze śledzą tę fenologię. Las bagienny Kasanki daje krótki, gęsty plon. To migracja śledzenia zasobu, bliższa gnu-i-trawie niż arktycznemu fotoperiodowi. Woda i drzewa noclegowe są lokalnymi ograniczeniami.',
    timing:
      'Szczyt w Kasance to zwykle październik–grudzień. Przez resztę roku te same zwierzęta są gdzie indziej w szerokim afrykańskim zasięgu. Nie zamrażaj gatunku jako „nietoperza z Kasanki”.',
    pressure:
      'Polowania na mięso dzikich zwierząt, utrata drzew w noclegowniach i status bliskiego zagrożenia, który już sygnalizuje spadek w częściach zasięgu. Widowisko Kasanki może wyglądać na nieskończone z czatowni i wciąż siedzieć wewnątrz spadającej populacji regionalnej. Siedlisko poza parkiem to reszta trasy.',
    sourcesNote:
      'Richter & Cumming 2008 dla śladów satelitarnych; IUCN: bliski zagrożenia. Liczby Kasanki są sławne i wciąż szacunkami gęstej noclegowni, nie spisem kontynentalnym.',
  },
};
