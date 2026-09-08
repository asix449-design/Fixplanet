import type { MigrationPage } from './migration';
import type { MigrationEntryCopy } from '../data/migration';

export const page: MigrationPage = {
  metaTitle: 'Migracja — Fix Planet',
  metaDescription:
    'Dlaczego ludzie, ptaki i inne zwierzęta się przemieszczają: epoki lodowe i wybrzeża, historyczne ruchy masowe, szlaki i ogrodzenia. Encyklopedia z podanymi źródłami o rozprzestrzenianiu ludzi, wielkich migracjach i żywych trasach.',
  eyebrow: 'Encyklopedia',
  title: 'Migracja',
  hubLead: [
    'Migracja to ruch z przyczyną. Lądolody otwierają i zamykają mosty lądowe. Sezony przesuwają deszcz, trawę, owady i plankton. Wybrzeża, góry i pustynie są barierami, dopóki nimi nie są. Ludzie później dokładają ogrodzenia, światła, sieci, armie i cieplejszy klimat na te starsze zegary.',
    'Cztery półki, celowo osobno. Głęboka historia Homo sapiens wychodzącego z Afryki to nie Attyla. Historyczne „wielkie migracje” to nazwane ruchy masowe w źródłach pisanych. Ptaki i inne zwierzęta wciąż odbywają sezonowe trasy. Na każdej karcie są czynniki. Daty to zakresy z nazwanych źródeł, nie wymyślone ślady.',
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
    humans: 'Najpierw mapy epok: z Afryki, Sahul, Ameryki, holocen, starożytność, wędrówki ludów. Okna dat, nie spis rok po roku.',
    'great-migrations':
      'Historyczne ruchy masowe w źródłach pisanych. Pierwsza karta: hunicka presja na świat rzymski.',
    birds: 'Szlaki, sezony i gatunki, które wciąż przecinają półkule po pokarm i rozród.',
    animals: 'Gnu, karibu, wieloryby, nietoperze — wybrane migracje ssaków i ich czynniki.',
  },
  shelves: {
    humans: 'Ludzie',
    'great-migrations': 'Wielkie migracje',
    birds: 'Ptaki',
    animals: 'Zwierzęta',
  },
  shelfLeads: {
    humans:
      'Najpierw mapy: wielkie epoki migracji, potem mała figura i encyklopedia. Homo sapiens powstał w Afryce około 300 000 lat temu. Korytarze, wybrzeża, lód i pokarm są na każdej epoce. Utrata megafauny pojawia się tylko tam, gdzie tłumaczy trasę; katalog Wymarłych zostaje w Przyrodzie. Attyla to inny zegar: Wielkie migracje.',
    'great-migrations':
      'Nazwane ruchy masowe w czasie historycznym — nie wyjście z Afryki. Pierwsza karta to hunicka presja na późny świat rzymski. Później można dodać kolejne wpisy; to nie podręcznik o każdym ludzie Völkerwanderung.',
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
      'Historyczne ruchy masowe w źródłach pisanych — Hunowie i późniejsze karty — są na osobnej półce. Ta strona to późny plejstocen i holocen, nie Attyla.',
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
    eraAtlas: {
      title: 'Epoki migracji',
      lead:
        'Duże okresy, nie każdy rok. Kroki plejstocenu to schemat dydaktyczny na NASA Blue Marble. Późniejsze kroki to opublikowane płyty. Nie rysujemy globalnego choroplethu ludności dla 50 n.e. ani żadnego innego dowolnego roku.',
      honesty:
        'Okna przybycia, nie lata marszu. Rolnictwo holocenu, arkusz polityczny ok. 1 n.e., schemat okresu wędrówek ludów i żegluga austronezyjska to płyty z oznaczonymi lukami pokrycia — ta sama uczciwość co atlas religii. Hunicka presja jest na Wielkich migracjach; ten scrubber tam kieruje zamiast dublować półkę.',
      aria: 'Mapa epok wielkich migracji ludzkich',
      scrubberAria: 'Przejdź do epoki migracji',
      eraLabel: 'Epoka',
      whereLabel: 'Gdzie',
      whyLabel: 'Dlaczego — czynniki',
      uncertaintyLabel: 'Niepewność',
      nearestNote: 'Najbliższa otwarcie licencjonowana płyta — nie spis dokładnego roku.',
      sourceLabel: 'Źródło',
      licenseLabel: 'Licencja',
      vintageLabel: 'Datowanie',
      schematicCredit:
        'Podstawa schematu: NASA Blue Marble Next Generation (grudzień 2004, domena publiczna) — fizyczna Ziemia, nie mapa polityczna i nie raster ludności.',
      greatMigrationsCta: 'Wielkie migracje · Hunowie →',
      greatMigrationsNote:
        'Nazwane ruchy masowe w źródłach pisanych są na tamtej półce. Ta płyta to regionalny schemat 100–500 n.e., nie druga encyklopedia huńska.',
      coverage: {
        schematic: 'Schemat dydaktyczny · datowane okna przybycia',
        agriculture: 'Ośrodki i rozprzestrzenianie rolnictwa — nie spis wszystkich ludzi',
        polities: 'Rekonstrukcja polityczna ~1 n.e. — nie choropleth ludności',
        regional: 'Europa i Morze Śródziemne — luka dla reszty świata',
        seafaring: 'Żegluga austronezyjska — Pacyfik i Ocean Indyjski, nie spis świata',
      },
      eras: {
        origin: {
          label: 'Afryka · pochodzenie',
          title: 'Afryka — pochodzenie, nie poczekalnia',
          where: 'Afryka. Dżabal Irhud w Maroku to nazwane okno skamieniałości około 315 000 lat.',
          why: 'To pochodzenie, nie strzał startowy. Przez większość tego czasu gatunek żył na jednym kontynencie.',
          uncertainty:
            'Wcześniejsze gatunki Homo już opuściły Afrykę. Skamieniałości Lewantu (Skhul/Qafzeh) zapisują obecność bez trwałego ogólnoświatowego zastąpienia.',
          caption: 'Tylko pinezka 1. Jeszcze bez strzałek. Data ~300 000 lat to miejsce gatunku, nie trop z Afryki.',
          imageAlt: 'NASA Blue Marble z pinezką na Afryce oznaczającą pochodzenie Homo sapiens',
        },
        'out-of-africa': {
          label: 'Z Afryki',
          title: 'Z Afryki — korytarze klimatyczne',
          where: 'Z Afryki do Lewantu i dalej, około 70 000–50 000 lat temu.',
          why: 'Okna zielonej Sahary i Lewantu, potem suche bariery. Nil, wybrzeża Morza Czerwonego i Bab al-Mandab to omawiane korytarze, nie jedna udowodniona autostrada.',
          uncertainty:
            'Genetyka (Bergström et al. 2020) wspiera ekspansję późnego plejstocenu, która zostawiła większość żyjącego nieafrykańskiego pochodzenia. Dokładna trasa nie jest rysowana jako fakt.',
          caption: 'Strzałka z Afryki ku Lewantowi. Schemat datowanego okna, nie GPS każdej grupy.',
          imageAlt: 'Schematyczna strzałka z Afryki ku Azji Południowo-Zachodniej na NASA Blue Marble',
        },
        sahul: {
          label: 'Sahul',
          title: 'Sahul — wybrzeża, szelfy i przerwy wodne',
          where: 'Australia, Nowa Gwinea i Tasmania były połączone jako Sahul, gdy poziom morza był niższy.',
          why: 'Glacjalny spadek poziomu morza odsłonił Sundę i zwęził przerwy wodne. Dotarcie do Sahulu i tak wymagało łodzi lub tratw, nie bezlodowego korytarza w głębi lądu.',
          uncertainty:
            'Madjedbebe datuje się około 65 000 lat (Clarkson et al. 2017); część przeglądów siada później w oknie 65–50 tysięcy. Tak czy inaczej to dziesiątki tysiącleci przed Amerykami.',
          caption: 'Strzałka ku Sahulowi. Umiejętność przybrzeżna i wyspiarska, nie rok marszu.',
          imageAlt: 'Schematyczna strzałka z Sundy ku Sahulowi na NASA Blue Marble',
        },
        eurasia: {
          label: 'Eurazja',
          title: 'Eurazja — zimny step i spóźniona Europa',
          where: 'Części Azji przed trwałą obecnością w Europie około 45 000–40 000 lat temu.',
          why: 'Łowieckie krajobrazy stepu mamutowego, rzeki i powolne otwieranie wyższych szerokości, gdy klimat pozwalał.',
          uncertainty:
            'To nie ten sam zegar co Sahul. Neandertalczycy już byli w Europie; trwała obecność Homo sapiens to zwykłe późniejsze okno.',
          caption: 'Strzałka do Europy. Datowana obecność, nie twierdzenie, że szli tylko tą linią.',
          imageAlt: 'Schematyczna strzałka do Europy na NASA Blue Marble',
        },
        americas: {
          label: 'Ameryki',
          title: 'Ameryki — lód, wybrzeża i wciąż otwarty spór',
          where: 'Beringia, potem Ameryki. Robocze okno tutaj: około 15 000–10 000 lat dla szerokiej obecności.',
          why: 'Niski poziom morza połączył Syberię i Alaskę. Lądolody zablokowały wnętrze. Pacyficzna trasa przybrzeżna to zwykły model roboczy po Pedersen et al. 2016.',
          uncertainty:
            'Starsze twierdzenia (w tym White Sands) istnieją i pozostają sporne; tutaj nie są traktowane jako ustalone daty pierwszego przybycia. To nie spis z 50 n.e.',
          caption: 'Strzałka do Ameryk. Lód i wybrzeża, nie ślad GPS rok po roku.',
          imageAlt: 'Schematyczna strzałka do Ameryk na NASA Blue Marble',
        },
        holocene: {
          label: 'Holocen · rolnictwo',
          title: 'Holocen — ekspansje neolityczne',
          where:
            'Niezależne ośrodki rolnictwa (Żyzny Półksiężyc, Chiny, Nowa Gwinea, Ameryki, Afryka) i późniejsze rozprzestrzenianie.',
          why: 'Uprawy i zwierzęta umożliwiły gęstsze, bardziej osiadłe populacje. Rodziny językowe często szły z rolnictwem, ale nie jako jedna fala światowa.',
          uncertainty:
            'Diamond 2003 ryc. 1 w rysunku Iana Alexandra. Synteza z 2003: Amazonia jako ośrodek pominięta; daty przybliżone. To rolnictwo, nie mapa wszystkich ludzi.',
          caption: 'Opublikowany schemat ośrodków i rozprzestrzeniania rolnictwa. Nie choropleth ludności holocenu.',
          imageAlt: 'Mapa świata neolitycznych ośrodków rolnictwa i strzałek rozprzestrzeniania według Diamond 2003',
        },
        antiquity: {
          label: 'Starożytność ~1 n.e.',
          title: 'Starożytność klasyczna — migawka polityczna',
          where: 'Zamieszkany Stary Świat w rekonstrukcji około 1 n.e.',
          why: 'Cesarstwa, królestwa i nazwane ludy — handel, danina i armie, nie spis wsi.',
          uncertainty:
            'Arkusz Historii granic na 1 n.e.: ustroje, nie gęstość ludności. Ameryki i większość Oceanii nie są tu spisem. Nie wymyślamy globalnego choroplethu dla 50 n.e.',
          caption: 'Rekonstrukcja polityczna ze źródłem. Uczciwa luka: to nie „wszyscy w 50 n.e.”.',
          imageAlt: 'Polityczna mapa świata zrekonstruowana na 1 n.e., nie mapa gęstości ludności',
        },
        'migration-period': {
          label: 'Wędrówki ludów',
          title: 'Okres wędrówek ludów — 100–500 n.e.',
          where: 'Europa i Morze Śródziemne: Goci, Wandalowie, Frankowie, Hunowie i inni na płycie dydaktycznej.',
          why: 'Presja na granicach, stres klimatyczny w niektórych dekadach i polityka późnego świata rzymskiego. Hunicka presja na Rzym to pierwsza karta Wielkich migracji.',
          uncertainty:
            'Schemat MapMastera według nazwanych atlasów. Tylko Europa. Strzałki to wielkie najazdy, nie GPS każdej grupy. Daty obejmują stulecia.',
          caption:
            'Schemat regionalny, 100–500 n.e. Link do Wielkich migracji dla półki huńskiej — ta strona nie dubluje tamtej karty.',
          imageAlt: 'Mapa wielkich najazdów na Cesarstwo Rzymskie ok. 100–500 n.e., Europa i Morze Śródziemne',
        },
        'later-seafaring': {
          label: 'Późniejsza żegluga',
          title: 'Późniejsze epoki — łodzie, nie lód',
          where: 'Rozprzestrzenianie austronezyjskie przez Pacyfik i Ocean Indyjski; Daleka Oceania i Nowa Zelandia znacznie później.',
          why: 'Żegluga ku nowym wyspom. Pierwsze osadnictwo Nowej Zelandii to rząd 700 lat temu w zwykłym odczycie archeologicznym.',
          uncertainty:
            'Chronologia Bellwood / Benton w rysunku na Wikimedia. Tylko Pacyfik i Ocean Indyjski. Nadal nie hostujemy globalnego rastra ludności 1500 ani 1800.',
          caption:
            'Płyta późniejszej epoki ze źródłem. Madagaskar, Daleka Oceania i Nowa Zelandia to historie holocenu, nie korytarz lodowy.',
          imageAlt: 'Chronologiczna mapa rozprzestrzeniania austronezyjskiego przez Pacyfik',
        },
      },
    },
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
};

export const entries: Record<string, MigrationEntryCopy> = {
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
