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
    humans: 'Najpierw mapy zdarzeń: z Afryki, Sahul, rolnictwo, bantu, austronezyjczycy, wędrówki ludów, handel niewolnikami. Nazwane ruchy, nie spis rok po roku.',
    'great-migrations':
      'Żywe ruchy masowe i przesunięcia z epoki lodu: gnu, motyle, ptaki arktyczne, step mamutowy, Beringia i powrót holocenu.',
  },
  hubTitles: {
    humans: 'Migracje ludzi',
    'great-migrations': 'Migracje zwierząt',
  },
  entrances: {
    aria: 'Powiązane strony',
    refugees: {
      title: 'Uchodźcy i wykrycia na granicy',
      text: 'Pięć dużych obozów na 31 sierpnia 2026 roku, pięć kart trendów z 2025 roku oraz wykrycia na zewnętrznych granicach Unii Europejskiej w 2024 i 2025 roku.',
    },
    remittances: {
      title: 'Przekazy pieniężne',
      text: 'Pieniądze, które migranci wysyłają do domu: przepływy światowe, najwięksi odbiorcy, udział w gospodarce kraju i koszt wysłania.',
    },
    missing: {
      title: 'Zaginieni migranci',
      text: 'Zgony i zaginięcia na szlakach migracyjnych w projekcie zaginionych migrantów.',
    },
  },
  shelves: {
    humans: 'Ludzie',
    'great-migrations': 'Wielkie migracje',
  },
  shelfLeads: {
    humans:
      'Najpierw mapy: oś czasu wielkich udokumentowanych migracji człowieka, potem mała figura i encyklopedia. Homo sapiens powstał w Afryce około 300 000 lat temu. Na każdej karcie jest kiedy, gdzie i dlaczego — klimat, lód, rolnictwo, wojna, handel, imperium, niewolnictwo — tylko tam, gdzie to trzyma nauka. To nie mapa wszystkich ludzi co pięćdziesiąt lat. Attyla i wędrówki ludów zostają tutaj; żywe ruchy są na Wielkich migracjach.',
    'great-migrations':
      'Żywe ruchy masowe i przesunięcia arealów w epoce klimatu — nie wyjście z Afryki i nie druga karta Attyli. Wędrówki ludów zostają na Ludziach. Karty nazywają czynnik, sezon albo udokumentowane przesunięcie i źródło.',
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
    mapLinks: {
      title: 'Mapy wczesnych migracji',
      lead:
        'Publiczne mapy dydaktyczne — otwierane na ich stronach. Daty zostają przy nazwanym źródle. To nie GPS każdej grupy.',
      openMap: 'Otwórz mapę →',
      listedBy: 'Wymienione w',
      extraLabels: {
        'odyssey-exhibit': 'Strona wystawy',
        'fossil-wikipedia': 'Lista skamieniałości w Wikipedii',
        'era-australopithecus': 'Epoka australopiteków',
        'era-erectus': 'Epoka Homo erectus',
        'era-sapiens': 'Epoka Homo sapiens',
      },
      cards: {
        'human-odyssey': {
          title: 'Human Odyssey Map',
          hook:
            'Interaktywna mapa California Academy of Sciences: zarys archeologiczny, genetyczny i klimatyczny rozprzestrzeniania Homo sapiens z Afryki, z osią klimatu. Mapa pulpitu Akademii; zaznaczają, że nie jest zbudowana na telefony.',
        },
        'early-fossils': {
          title: 'Wczesne stanowiska skamieniałości Homo sapiens',
          hook:
            'Globalne miejsca wczesnych znalezisk, ze źródeł Wikipedii.',
        },
        'hominid-evolution': {
          title: 'Mapy ewolucji hominidów (~7 mln lat)',
          hook:
            'Atlas of Human Evolution: trzy mapy epok — australopiteki, Homo erectus i Homo sapiens — z własnymi etykietami atlasu.',
        },
      },
    },
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
    what: 'Po ostatnim maksimum glacjalnym (~26–19 tysięcy lat temu) ogromne obszary Europy i Ameryki Północnej znów stały się zdatne do życia. To najlepiej udokumentowana holoceńska „wielka migracja” bioty — nie jeden gatunek i nie jeden rok. Mapy genetyczne Hewitta (1999, 2000) to rama europejska: gatunki umiarkowane czekały na Iberii, we Włoszech, na Bałkanach i w niektórych północnych kieszeniach (Karpaty i inne), potem się rozszerzały. Różne gatunki używały różnych półwyspów — jego paradygmaty konika polnego, jeża i niedźwiedzia. Ameryka Północna ma własne źródła południowe / wschodnie / beringijskie. Dwie opublikowane prędkości drzew dotyczą nazwanych wschodnioamerykańskich iglaków (Payette et al. 2022). To nie hasło dla każdego drzewa.',
    route:
      'Jeleń szlachetny i sarna: południowe refugia w szczycie chłodu (LGM i wczesny późny glacjał), potem nagły zasięg w Europie Środkowej na początku interstadiału grenlandzkiego 1 / Bølling–Allerød (~14,7 tysiąca lat) i na północne niziny europejskie we wczesnym holocenie (Sommer & Zachos 2009). Niedźwiedź brunatny, jeż i mysz zaroślowa idą strefami szwu Hewitta, gdzie spotykały się rozszerzające genomy. Wilk szary to inna geometria: Loog et al. (2020) modelują żywą różnorodność mitochondrialną jako ekspansję z Beringii — albo pobliskiej Azji Północno-Wschodniej — pod koniec ostatniego maksimum glacjalnego, nie jako prosty spacer z Iberii. W Ameryce Północnej korytarz bezlodowy (Heintzman et al. 2016) to późne drzwi, nie pierwsza droga ludzi. Drzewa ciągnęły faunę. Payette et al. (2022) z datowanych makroskamieniałości dają świerkowi czarnemu średnio 25 km na wiek od krawędzi lodu Bølling–Allerød i sosnie Banksa 19 km na wiek z niezlodowaciałej wschodniej Ameryki Północnej do jej subarktycznej granicy, gdzie ten pochód zatrzymał się około 3000 lat temu. Fennoskandzkie ekosystemy roślinne składały się przez tysiąclecia; Alsos et al. (2022) znajdują stabilizację różnorodności cech i funkcji około 8000 lat temu, nawet gdy gatunki wciąż napływały.',
    drivers:
      'Najpierw klimat: odwrót lodu, dłuższe sezony, gleby, które utrzymają drzewa. Potem siedlisko. Jeleń nie zajmie równiny, która jest jeszcze lodem albo jeszcze suchym stepem. Ludzie wchodzą w już ruchome pole; nie są nazwaną przyczyną pierwszej holoceńskiej granicy lasu.',
    timing:
      'LGM ~26–19 ka; Bølling–Allerød ~14,7 ka; wczesnoholoceńskie wypełnianie północnej Europy. Jedna jaskinia arktyczno-norweska — Nygrotta (Boilard et al. 2024) — ma już słodkowodne ryby, niedźwiedzia brunatnego, leminga norweskiego i zająca bielaka w warstwie sprzed około 9500 lat: kolonizacja tuż za lokalnym lodem. Około 5800 lat późniejsza warstwa tej jaskini zapisuje odejście gatunków zimnolubnych z tego profilu. To datowane poziomy jednej jaskini, nie spis Europy.',
    pressure:
      'Holoceński las sam jest dziś cięty, ogrzewany i ogrodzony. Ta karta to migracja po zejściu lodu. Późniejsza zmiana krajobrazu przez ludzi należy na inne półki. Nie wkładajcie plejstoceńskich Ludzi (z Afryki) w ten powrót bioty.',
    sourcesNote:
      'Hewitt 1999 i 2000 o refugiach i strefach szwu. Sommer & Zachos 2009 o zegarze jeleni. Loog et al. 2020 o ekspansji wilka. Payette et al. 2022 o dwóch nazwanych prędkościach drzew Ameryki Północnej. Alsos et al. 2022 o stabilizacji cech Fennoskandii od ~8 ka. Boilard et al. 2024 o Nygrottcie. Heintzman et al. 2016 o zegarze korytarza północnoamerykańskiego.',
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
    what: 'Wiele ptaków lęgowych na arktycznej i subarktycznej tundrze odlatuje, gdy gasną światło i owady. Rybitwy popielate lecą od bieguna do bieguna (Egevang i współpracownicy, 2010). Sokoły wędrowne idą za ofiarą wzdłuż wybrzeży i szlaków. Siewkowce zatrzymują się na nielicznych mulistych płyciznach. Gęsi idą za trawą i odwilżą. Międzynarodowa organizacja ochrony ptaków i Konwencja o ochronie wędrownych gatunków dzikich zwierząt opisują rodziny szlaków. Syntezą regionalną jest grupa robocza Rady Arktycznej do ochrony arktycznej flory i fauny. Sezonowa migracja istniała już w zlodowaceniu (modele na dziesiątki tysięcy lat). Po lodzie zmieniła się geografia: lęgi ścisnęły się na południe, zwłaszcza w Ameryce Północnej pod tarczą laurentyjską, potem holocen znów otworzył arktyczne lato. Thorup i współpracownicy w czasopiśmie Narodowej Akademii Nauk Stanów Zjednoczonych w 2021 roku odtwarzają przeszłość afro-palearktycznej pętli gąsiorka przez 120 000 lat: sezonowa migracja prawdopodobnie trwała w zlodowaceniu, często wewnątrz Afryki. Odpowiednie europejskie siedliska letnie znów się rozszerzyły po maksimum ostatniego zlodowacenia. To modelowany przykład klasy.',
    route:
      'Lęgi w długim arktycznym dniu; zimowiska na umiarkowanych albo tropikalnych mokradłach, wybrzeżach albo — u rybitw — przy antarktycznym lodzie paku. Szlaki wschodnioatlantycki, wschodnioazjatycko-australazjatycki, Missisipi i pacyficzno-amerykański niosą lęgowce arktyczne. Gu et al. (Nature, 2021) śledzili euroazjatyckie arktyczne sokoły wędrowne na pięciu współczesnych szlakach i wiążą je z przesunięciem lęgowisk od LGM do holocenu. Model gąsiorka Thorupa to afro-palearktyczny odpowiednik: pętla przetrwała zlodowacenie, przesuwając szerokość lęgową, nie wymyślając migracji od zera. Linie to obwiednie, nie GPS każdego stada. Przelot szlamnika Alaska–Nowa Zelandia to pacyficzne skrócenie, nie średnia.',
    drivers:
      'Sezonowa produkcja. Lata wysokich szerokości dają długi dzień i wybuch owadów, ryb i nowej trawy. Polarne zimy nie. Wiatr i wybrzeża prowadzą tanią trasą. To zegar pokarmu i rozrodu, nie historia uchodźców.',
    timing:
      'Na północ wiosną półkuli północnej, na południe po lęgach. U niektórych populacji przylot przyspieszył, gdy wiosny się ocieplają — fenologia, nie nowy szlak. Rekordowe kilometry to nazwane prace telemetryczne.',
    pressure:
      'Klimat przesuwa krawędź lodu, daty odwilży i ofiary. Rekultywacja Morza Żółtego i innych przystanków zabiera stacje paliw. Polowania, niepokój i rybołówstwo dokładają lokalne straty. CAFF i BirdLife traktują migrantów arktycznych jako wspólny problem szlaków.',
    sourcesNote:
      'Egevang et al. 2010 o rybitwach; Gu et al. 2021 o złożeniu szlaków sokoła wędrownego po lodzie; Thorup et al. 2021 o pętli gąsiorka przez 120 000 lat; szlaki BirdLife; CAFF; CMS.',
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
};
