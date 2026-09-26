import type { TodayShelfCopy } from './migration';

export const plToday: TodayShelfCopy = {
  mapTitle: 'Migracja netto, 2023',
  mapAria:
    'Czarna mapa świata z limonkowymi konturami państw i tabliczkami sześciu głównych regionów ONZ z migracją netto za 2023',
  lead:
    'Tabliczki pokazują migrację netto za rok kalendarzowy 2023 — imigranci minus emigranci — dla sześciu głównych regionów UN M49. To reszta, nie spis kto przyjechał i kto wyjechał. Kliknij tabliczkę: kto już tam mieszka według zasobu migrantów 2024 oraz kilka udokumentowanych korytarzy.',
  honesty:
    'Nie wymyślamy rocznych przyjazdów i wyjazdów. Pełnej światowej macierzy przepływów nie ma. Uczciwa liczba „w kontra wy” to migracja netto (ONZ, World Population Prospects 2024, szacunki za 2023). Listy skąd ludzie to zasób: osoby urodzone gdzie indziej, które mieszkały w regionie 1 lipca 2024 (UN DESA, International Migrant Stock 2024). Zasób to nie „przyjechali w tym roku”. Strzałki są schematem nazwanych korytarzy, nie narysowanymi wolumenami.',
  tabletHint: 'Otwórz region ONZ. Na tabliczkach jest migracja netto, nie przyjazdy.',
  netLabel: 'Migracja netto, UN WPP 2024',
  netUnitMillion: 'mln osób, 2023',
  netUnitPeople: 'osób, 2023',
  stockLabel: 'Zasób migrantów międzynarodowych, środek 2024',
  stockUnitMillion: 'mln mieszkańców urodzonych za granicą albo w innym kraju regionu',
  originsTitle: 'Kto tam mieszka, według regionu urodzenia',
  originsHint:
    'Zasób migrantów, środek 2024. Oznaczenie „ok.” powtarza sformułowanie IOM. Reszta to inne regiony i nieznane pochodzenie — luki nie uzupełniamy.',
  corridorsTitle: 'Udokumentowane korytarze',
  corridorsNote:
    'Pary krajów to korytarze zasobu (IOM World Migration Report 2026, za UN DESA 2025). To suma lat ruchu, nie przepływy 2023 i nie skala strzałek.',
  close: 'Zamknij',
  openTablet: 'Pokaż pochodzenie i korytarze dla',
  million: 'mln',
  approx: 'ok.',
  intraCaption:
    'Często dominuje migracja wewnątrzregionalna. W 2024 r. 74% międzynarodowych migrantów urodzonych w Europie mieszkało w innym kraju europejskim; 64% urodzonych w Afryce Subsaharyjskiej — w tym regionie; 45% wszystkich międzynarodowych migrantów — w regionie urodzenia. Korytarz Afryka → Europa jest prawdziwy. To nie główna historia świata.',
  remainderNote: 'Inne regiony i nieznane pochodzenie nie są wymienione — opublikowany podział nie zamyka 100%.',
  stockNotFlow: 'Zasób, nie przyjazdy tego roku',
  arrowLegend: 'Schematyczny korytarz — nie wolumen',
  mapCredit:
    'Kontury lądu: Wikimedia Commons BlankMap-World (domena publiczna), przestylizowane na limonkę na czerni. Granice to kompromis kartograficzny, nie rozstrzygnięcie prawne. To nie choropleth ludności.',
  emptyPanel: 'Wybierz tabliczkę. Mapa nie stawia Afryki → Europy jako głównego ruchu świata.',
  layersLabel: 'Warstwy mapy',
  layerCamps: 'Obozy dla uchodźców',
  layerDetections: 'Wykrycia na granicach UE',
  layerIdp: 'Wewnętrzne przesiedlenie',
  layerRefugees: 'Uchodźcy (UNHCR)',
  campsTitle: 'Największe obozy i osiedla UNHCR',
  campsLead:
    'Nazwane ośrodki UNHCR z opublikowaną liczbą i datą. To ludzie już mieszkający w obozie lub osiedlu — nie migracja netto z 2023 r. i nie „przybysze z tego roku”.',
  campsHonesty:
    'Liczby to dane operacyjne na datę w każdym wierszu. Lista jest wyselekcjonowana, nie pełny spis wszystkich ośrodków świata. Kliknij znacznik, żeby zobaczyć źródło.',
  campsUnrwa:
    'UNRWA prowadzi osobny rejestr uchodźców palestyńskich. Liczba w obozie to nie ten rejestr. Dane z Gazy po 2023 r. są niestabilne; ta mapa nie miesza UNHCR i UNRWA w jeden ranking.',
  campOpen: 'Otwórz obóz lub osiedle',
  campAsOf: 'Liczba na dzień',
  campPeople: 'osób',
  detectionsTitle: 'Wykrycia na granicach zewnętrznych UE (Frontex)',
  detectionsLead:
    'Wykrycia nieregularnych przekroczeń granic zewnętrznych Unii Europejskiej. Ta sama osoba może być policzona więcej niż raz. To nie jest liczba ludzi i nie jest światowa mapa „przełamań”.',
  detectionsHonesty:
    'Wstępne dane Frontexu. 2024: nieco ponad 239 000 wykryć (−38% wobec 2023). 2025: prawie 178 000 (−26%), najniżej od 2021. Znaczniki tras mają rok źródła; tam gdzie Frontex podał tylko kierunek zmiany, nie ma wymyślonej liczby.',
  detectionsMetric: 'Wykrycia, nie unikalne osoby',
  detectionsNoGlobal:
    'Nie ma porównywalnego światowego szeregu „przełamań granicy”. Afryka → Europa nie jest rysowana jako główna historia świata.',
  detectionsChange: 'wobec poprzedniego roku',
  detectionsOpen: 'Otwórz notatkę o trasie UE',
  detectionsNationalities: 'Najczęściej wykrywane obywatelstwa w 2025 r.: Bangladesz, Egipt, Afganistan — to nie teza o tym, kto „przyjeżdża najczęściej” na świecie.',
  noHeadcount: 'Bez wymyślonej liczby',
  idpTitle: 'Wewnętrzne przesiedlenie (IDMC)',
  idpLead:
    'Ponad 62,2 mln wewnętrznych przesiedleń w 2025 (−6% vs 2024): 32,3 mln z konfliktu i przemocy (rekord) oraz 29,9 mln z katastrof. Konflikt po raz pierwszy wyprzedził katastrofy; w 42 krajach wystąpiły oba.',
  idpDefinition:
    'IDMC liczy ludzi zmuszonych do opuszczenia domu przez konflikt, przemoc lub katastrofy, którzy nie przekroczyli granicy międzynarodowej. To nie międzynarodowy migrant stock UN DESA, nie wykrycia Frontexu i nie headcount obozów UNHCR. Ruchy w ciągu roku (nowe lub powtórne) to nie to samo co stan na koniec roku; ta sama osoba może się przesunąć więcej niż raz.',
  idpHonesty:
    'GRID 2026 obejmuje rok kalendarzowy 2025 (raport opublikowany 12 maja 2026). Stan to ludzie, którzy nadal żyją w wewnętrznym przesiedleniu na koniec roku. Liczby roczne to policzone ruchy, nie unikalne osoby. Nie podpisuj 32,3 mln jako 32,3 mln unikalnych ludzi.',
  idpNoChoropleth:
    'Nazwane kryzysy poniżej to notatki ze źródłem, nie mapa świata kolorowana liczbą. Pokrycie IDMC jest niepełne; strona nie rysuje globalnego choroplethu ani warstwy «strzałki przełomu» z tych sum.',
  idpMillion: 'mln',
  idpMovementsUnit: 'ruchów, 2025',
  idpStockUnit: 'osób, koniec 2025',
  idpConflictLabel: 'Konflikt i przemoc',
  idpDisasterLabel: 'Katastrofy',
  idpCountriesLabel: 'krajów i terytoriów',
  idpBothLabel: 'krajów z oboma czynnikami',
  idpCrisesTitle: 'Nazwane kryzysy — notatki ze źródłem, nie mapa',
  idpCards: {
    'idp-stock-2025': {
      tag: 'Stan · koniec 2025',
      title: 'Ludzie w wewnętrznym przesiedleniu',
      hook: 'Ponad 82,2 mln ludzi żyło w wewnętrznym przesiedleniu w 104 krajach i terytoriach na koniec 2025 — pierwszy od dekady lekki spadek, liczby wciąż blisko rekordu.',
      detail: [
        'Stan IDMC: ludzie zmuszeni do opuszczenia domu przez konflikt, przemoc lub katastrofy, którzy nie przekroczyli granicy międzynarodowej. Ponad 68,6 mln — konflikt/przemoc; prawie 13,6 mln — katastrofy (na 31 grudnia 2025). To nie międzynarodowy migrant stock i nie headcount obozów UNHCR.',
      ],
    },
    'idp-conflict-displacements-2025': {
      tag: 'Ruchy · 2025',
      title: 'Przesiedlenia z powodu konfliktu i przemocy',
      hook: 'Konflikt i przemoc wywołały rekordowe 32,3 mln wewnętrznych przesiedleń w 48 krajach w 2025 — około 60% powyżej 2024 i po raz pierwszy więcej niż katastrofy.',
      detail: [
        'To ruchy w ciągu roku (nowe lub powtórne), nie unikalne osoby. Iran i DRC — około jednej trzeciej światowego wyniku każdy. Międzynarodowe konflikty zbrojne — około 46%. W Sudanie pod koniec roku w wewnętrznym przesiedleniu pozostawało około 9,1 mln ludzi.',
      ],
    },
    'idp-disaster-displacements-2025': {
      tag: 'Ruchy · 2025',
      title: 'Przesiedlenia z powodu katastrof',
      hook: 'Katastrofy wywołały 29,9 mln wewnętrznych przesiedleń w 140 krajach w 2025 — o 35% poniżej szczytu 2024, wciąż około 13% powyżej średniej dekady.',
      detail: [
        'Burze ~17,9 mln; powodzie <7,9 mln; pożary >694 tys.; geofizyka ~2,5 mln. Na Filipiny przypadło około 10,7 mln przesiedleń katastroficznych (~36% światowego disaster-wyniku). To nie mapa «migrantów klimatycznych» i nie międzynarodowy net migration.',
      ],
    },
    'idp-movements-2025-overview': {
      tag: 'Przegląd · 2025',
      title: 'Wewnętrzne przesiedlenia w 2025',
      hook: 'Ponad 62,2 mln wewnętrznych przesiedleń w 2025 (−6% vs 2024): 32,3 mln z konfliktu i przemocy (rekord) oraz 29,9 mln z katastrof. Konflikt po raz pierwszy wyprzedził katastrofy; w 42 krajach wystąpiły oba.',
      detail: [
        'Kafelek wprowadzający warstwy. Raz: ruchy ≠ stan ≠ migracja transgraniczna. Szczegóły A–C. Nie rysować globalnej «strzałki przełomu» z tych sum.',
      ],
    },
  },
  refugeesTitle: 'Uchodźcy pod mandatem UNHCR',
  refugeesLead:
    'Ludzie, którzy uciekli przez granicę międzynarodową i pozostają pod mandatem UNHCR. Global Trends 2025, opublikowany 11 czerwca 2026, szacuje ten stan na koniec 2025 roku na 35,6 mln — około 3% mniej niż rok wcześniej, wciąż blisko rekordu.',
  refugeesDefinition:
    'Osoba przekroczyła granicę międzynarodową, a UNHCR liczy ją jako uchodźcę, osobę w sytuacji zbliżonej do statusu uchodźcy albo inną osobę potrzebującą ochrony międzynarodowej. To nie liczba nazwanych obozów UNHCR, nie wewnętrzne przesiedlenie według IDMC, nie uchodźcy palestyńscy pod mandatem UNRWA, nie stan migrantów międzynarodowych UN DESA i nie wykrycia Frontexu. Osoby ubiegające się o azyl, które wciąż czekają na decyzję, liczy się osobno.',
  refugeesHonesty:
    'Global Trends 2025 obejmuje rok kalendarzowy 2025. Stan to ludność na 31 grudnia 2025. Powroty to ruchy w ciągu tego roku. Listy poniżej są wybrane z raportu i z otwartej bazy wskaźników UNHCR, a nie pełnym spisem krajów na tej stronie.',
  refugeesNoChoropleth:
    'Nie ma mapy świata kolorowanej liczbą. Szeregi krajów przyjmujących i krajów pochodzenia to krótkie listy ze źródłami, nie wymyślone kształty państw. Nazwane obozy zostają na warstwie obozów.',
  refugeesCards: {
    'refugees-unhcr-stock-2025': {
      tag: 'Stan · koniec 2025',
      title: 'Uchodźcy pod mandatem UNHCR',
      hook: '35,6 mln osób było na koniec 2025 roku uchodźcami, osobami w sytuacji zbliżonej do statusu uchodźcy albo innymi osobami potrzebującymi ochrony międzynarodowej pod mandatem UNHCR — około 3% mniej niż rok wcześniej, wciąż blisko rekordu.',
      figure: '35,6',
      unit: 'mln osób, koniec 2025',
      rows: [
        { label: 'Uchodźcy, w tym sytuacja zbliżona', figure: '28,5 mln' },
        { label: 'Inne osoby potrzebujące ochrony międzynarodowej', figure: '7,2 mln' },
        { label: 'Uchodźcy palestyńscy pod mandatem UNRWA (osobno)', figure: 'około 6 mln' },
        { label: 'Osoby ubiegające się o azyl, czekają na decyzję (osobno)', figure: 'prawie 9 mln' },
      ],
      detail: [
        'Stan UNHCR na koniec roku: ludzie, którzy uciekli przez granicę międzynarodową i potrzebują ochrony międzynarodowej pod jego mandatem. Około 28,5 mln to uchodźcy, wliczając osoby w sytuacji zbliżonej do statusu uchodźcy. 7,2 mln to inne osoby potrzebujące ochrony międzynarodowej. To nie liczba ludzi w obozach, nie wewnętrzne przesiedlenie według IDMC, nie stan migrantów międzynarodowych UN DESA i nie wykrycia Frontexu.',
        'Około 6 mln uchodźców palestyńskich pod mandatem UNRWA stoi obok tej liczby, a nie w jej środku. Razem z UNRWA szersze spojrzenie na uchodźców daje około 41,6 mln. Prawie 9 mln osób ubiegających się o azyl na koniec 2025 roku wciąż czekało na decyzję — liczy się je osobno.',
        'Global Trends 2025 wiąże spadek głównie z powrotami w dużych sytuacjach, zwłaszcza do Afganistanu, Syrii i Sudanu, i zaznacza, że wiele powrotów odbyło się pod presją, do kruchych warunków.',
      ],
    },
    'refugees-top-hosts-2025': {
      tag: 'Kraje przyjmujące · koniec 2025',
      title: 'Gdzie żyją uchodźcy',
      hook: 'Pięć krajów przyjmowało około jednej trzeciej uchodźców i innych osób potrzebujących ochrony międzynarodowej w zakresie UNHCR na koniec 2025: Kolumbia 2,8 mln, Niemcy 2,7 mln, Turcja 2,4 mln, Uganda 1,9 mln, Iran 1,7 mln.',
      figure: '1/3',
      unit: 'w pięciu krajach przyjmujących, koniec 2025',
      rows: [
        { label: 'Kolumbia', figure: '2,8 mln' },
        { label: 'Niemcy', figure: '2,7 mln' },
        { label: 'Turcja', figure: '2,4 mln' },
        { label: 'Uganda', figure: '1,9 mln' },
        { label: 'Iran', figure: '1,7 mln' },
      ],
      detail: [
        'Stany krajów przyjmujących na koniec 2025 roku według Global Trends i otwartej bazy wskaźników UNHCR: uchodźcy, osoby w sytuacji zbliżonej i inne osoby potrzebujące ochrony międzynarodowej. To nie ranking wielkości obozów i nie lista tego, kto przyjął najwięcej przyjazdów w tym roku.',
        'Liczba Kolumbii w dużej mierze opiera się na Wenezuelczykach ze statusem ochrony. Niemcy i Turcja to kraje o wysokim i wyższym średnim dochodzie, z różnymi ścieżkami prawnymi. Uganda i Iran to duzi sąsiedzi krajów pochodzenia. Kraje o niskim i średnim dochodzie nadal przyjmują 68% tej ludności. Kraje najsłabiej rozwinięte — 26% (około 9,4 mln).',
        'Nazwane obozy UNHCR, w tym Cox’s Bazar i Dadaab, zostają na warstwie obozów. Duży kraj przyjmujący może mieć niewiele dużych obozów. Większość uchodźców na świecie nie mieszka w obozach.',
      ],
    },
    'refugees-top-origins-2025': {
      tag: 'Kraje pochodzenia · koniec 2025',
      title: 'Skąd pochodzą uchodźcy',
      hook: 'Około dwóch trzecich uchodźców i innych osób potrzebujących ochrony międzynarodowej w zakresie UNHCR pochodziło na koniec 2025 z zaledwie pięciu krajów: Wenezuela 6,5 mln, Ukraina 5,2 mln, Syria 4,9 mln, Afganistan 3,7 mln, Sudan 2,8 mln.',
      figure: '2/3',
      unit: 'z pięciu krajów pochodzenia, koniec 2025',
      rows: [
        { label: 'Wenezuela', figure: '6,5 mln' },
        { label: 'Ukraina', figure: '5,2 mln' },
        { label: 'Syria', figure: '4,9 mln' },
        { label: 'Afganistan', figure: '3,7 mln' },
        { label: 'Sudan', figure: '2,8 mln' },
      ],
      detail: [
        'Stany według kraju pochodzenia dla tej samej ludności UNHCR co lista krajów przyjmujących. Gdy do tych pięciu dodać Sudan Południowy, z sześciu krajów pochodzi ponad 70%.',
        'Syryjski stan spadł do końca 2025 roku do około 4,9 mln po dużych powrotach. Afgański — do około 3,7 mln. Liczby ukraińskie pozostają wysokie: ochrona tymczasowa i pokrewne statusy wchodzą w ten zakres. Wenezuelczycy pozostają największą grupą pochodzenia wśród innych osób potrzebujących ochrony międzynarodowej w obu Amerykach.',
        'Około 5,4 mln osób zostało zmuszonych do ucieczki przez granicę w ciągu 2025 roku. To ruch w danym roku, a nie ten stan.',
      ],
    },
    'refugees-neighbouring-hosts-2025': {
      tag: 'Układ · koniec 2025',
      title: 'Większość uchodźców zostaje blisko',
      hook: '65% uchodźców i innych osób potrzebujących ochrony międzynarodowej mieszkało na koniec 2025 w krajach sąsiadujących z krajem pochodzenia. 68% przyjmowały kraje o niskim i średnim dochodzie.',
      figure: '65%',
      unit: 'w krajach sąsiednich, koniec 2025',
      rows: [
        { label: 'Kraje sąsiednie', figure: '65%' },
        { label: 'Kraje o niskim i średnim dochodzie', figure: '68%' },
        { label: 'Sytuacje przewlekłe, pięć lat lub dłużej', figure: 'około 70%' },
      ],
      detail: [
        'Te udziały odpowiadają na pytanie, gdzie znajduje się stan, a nie który szlak Unii Europejskiej jest najbardziej obciążony. Wykrycia Frontexu pozostają osobnym liczeniem nieuregulowanych przekroczeń na granicach zewnętrznych UE.',
        'Około 70% uchodźców w tym zakresie było w sytuacjach przewlekłych — pięć lat lub dłużej bez bliskiego trwałego rozwiązania. Global Trends 2025 liczy około 24,9 mln osób w nieco ponad 1 300 takich sytuacjach w krajach o niskim i średnim dochodzie.',
        'Przyjmowanie u sąsiadów i w krajach o niższym dochodzie to trwały układ w szeregach UNHCR. Z tych udziałów nie wynika, że główną historią uchodźców świata jest droga z Afryki do Europy.',
      ],
    },
    'refugees-returns-2025': {
      tag: 'Powroty · 2025',
      title: 'Powroty uchodźców w 2025',
      hook: 'Prawie 4,4 mln uchodźców wróciło do krajów pochodzenia w 2025 roku — jeden z najwyższych lat powrotów w szeregu. Ponad 90% wróciło do zaledwie trzech krajów: Afganistanu (około 1,9 mln), Syrii (około 1,3 mln) i Sudanu (około 651 500).',
      figure: '4,4',
      unit: 'mln powrotów, 2025',
      rows: [
        { label: 'Afganistan', figure: 'około 1,9 mln' },
        { label: 'Syria', figure: 'około 1,3 mln' },
        { label: 'Sudan', figure: 'około 651 500' },
      ],
      detail: [
        'Powroty uchodźców w roku kalendarzowym 2025 według Global Trends. UNHCR ostrzega, że wiele powrotów odbyło się w trudnych warunkach, do miejsc, gdzie utrzymuje się zagrożenie i słabe usługi. Powrót sam w sobie nie jest trwałym rozwiązaniem.',
        'Powroty osób przesiedlonych wewnątrz własnego kraju to inny szereg i zostają na warstwie wewnętrznego przesiedlenia. Przyjazdy w ramach przesiedlenia i programów sponsorskich spadły o ponad połowę, do około 81 800 w 2025 roku.',
        'Skala powrotów wzrosła. Bezpieczeństwo i ponowne urządzenie się na miejscu często nie dorównywały tej liczbie.',
      ],
    },
  },
  idpCrisisCopy: {
    'sudan-stock': {
      place: 'Sudan',
      note: 'Największy kryzys pod względem ludzi w wewnętrznym przesiedleniu na koniec 2025. Około 9,1 mln ludzi nadal żyło w wewnętrznym przesiedleniu w Sudanie. To stan na koniec roku, nie ruchy 2025 i nie headcount obozów UNHCR.',
    },
    'philippines-disaster-2025': {
      place: 'Filipiny',
      note: 'Około 10,7 mln przesiedleń katastroficznych w 2025 — około 36% światowego disaster-wyniku w podsumowaniu mapy GRID. Głównie ruch i ewakuacje z zagrożeń pogodowych, nie światowa mapa «migrantów klimatycznych».',
    },
  },
  regions: {
    africa: {
      name: 'Afryka',
      shortName: 'Afryka',
      caption:
        'Afryka miała w 2023 r. odpływ netto. Większość międzynarodowych migrantów urodzonych w Afryce nadal mieszka w innym kraju afrykańskim — około 25 milionów w 2024 r., więcej niż 11 milionów w Europie. Największe korytarze, które IOM nazywa na kontynencie, to wewnątrzafrykańskie drogi pracy i przesiedleń, nie Morze Śródziemne.',
      originsIntro:
        'Z 29,2 mln międzynarodowych migrantów mieszkających w Afryce w połowie 2024 r. IOM (UN DESA) liczy około 25 mln urodzonych gdzie indziej w Afryce. Urodzonych poza Afryką jest niewielu: około 1,3 mln z Azji i około 583 tys. z Europy.',
      corridorsIntro:
        'Największe nazwane korytarze afrykańskie: Burkina Faso → Côte d’Ivoire (praca), Sudan Południowy → Sudan, Sudan → Czad, Sudan Południowy → Uganda (przesiedlenia). Zasób pozaregionalny obejmuje Egipt → Arabię Saudyjską oraz Afrykę Północną → Francję / Hiszpanię. Te ostatnie są prawdziwe; nie są afrykańską średnią.',
    },
    asia: {
      name: 'Azja',
      shortName: 'Azja',
      caption:
        'Azja miała w 2023 r. największy regionalny odpływ netto. To nie znaczy „Azja pustoszeje ku Europie”. Około 74 mln międzynarodowych migrantów urodzonych w Azji mieszkało w 2024 r. w innym kraju azjatyckim — praca w Zatoce, praca w Azji Południowo-Wschodniej i długie korytarze przesiedleń jak Afganistan → Iran i Syria → Turcja.',
      originsIntro:
        'W połowie 2024 r. w Azji mieszkało 92,2 mln międzynarodowych migrantów. IOM liczy około 74 mln z nich jako urodzonych w Azji, około 6,7 mln w Afryce i około 5 mln w Europie (w tym Europejczyków w Azji Środkowej po rozpadzie ZSRR).',
      corridorsIntro:
        'Największy korytarz międzyregionalny IMS 2024 w szerszej grupie Azja–Azja Zachodnia to Azja Środkowa i Południowa → Afryka Północna i Azja Zachodnia (20 mln) — praca w Zatoce, nie Europa. Zasób krajowy: Afganistan → Iran około 3,7 mln; Syria → Turcja około 3,6 mln.',
    },
    europe: {
      name: 'Europa',
      shortName: 'Europa',
      caption:
        'Europa była w 2023 r. odbiorcą netto. Prawie połowa z 94 mln międzynarodowych migrantów mieszkających w Europie w 2024 r. urodziła się w Europie (około 45 mln), w tym Ukraińcy przesiedleni od 2022 r. Urodzeni w Azji (20 mln) są liczniejsi niż urodzeni w Afryce (około 10,6 mln).',
      originsIntro:
        'Zasób docelowy, środek 2024: około 45 mln urodzonych w Europie, 20 mln w Azji, około 10,6 mln w Afryce, około 6 mln w Ameryce Łacińskiej i na Karaibach. Reszta to Ameryka Północna, Oceania i nieznane pochodzenie. IOM dodaje, że 74% wszystkich migrantów urodzonych w Europie mieszka w innym kraju europejskim.',
      corridorsIntro:
        'Połowa największych europejskich korytarzy krajowych IOM jest wewnątrzregionalna; kilka kończy się w Niemczech. Ukraina → Niemcy wzrosła z około 270 tys. mieszkańców w 2020 r. do ponad 1,4 mln w 2024 r. Ludność urodzona w Rosji w byłych państwach radzieckich to zasób powstały, gdy w 1991 r. przesunęły się granice — nie fala 2023.',
    },
    'latin-america-caribbean': {
      name: 'Ameryka Łacińska i Karaiby',
      shortName: 'Am. Łac. i Karaiby',
      caption:
        'Region miał w 2023 r. odpływ netto. Zasób pozaregionalny jest duży: 27 mln osób urodzonych w Ameryce Łacińskiej i na Karaibach mieszkało w 2024 r. w Ameryce Północnej, około 6 mln w Europie. Wewnątrz regionu około 14 mln międzynarodowych migrantów to ruch wewnątrzregionalny — sporo z niedawnego wzrostu to przesiedlenia z Wenezueli do Kolumbii, Peru i sąsiadów.',
      originsIntro:
        'W połowie 2024 r. w regionie mieszkało 17,5 mln międzynarodowych migrantów. IOM liczy około 14 mln urodzonych gdzie indziej w regionie, około 1,3 mln w Ameryce Północnej i około 1,2 mln w Europie.',
      corridorsIntro:
        'Meksyk → Stany Zjednoczone, około 11 mln mieszkańców w 2024 r., to największy korytarz krajowy świata (spadek z szczytu 2015 blisko 12 mln). Osiem z dziesięciu największych korytarzy krajowych regionu kończy się w USA. Dwa wyjątki wewnątrzregionalne, które wymienia IOM, to Wenezuela → Kolumbia i Wenezuela → Peru.',
    },
    'northern-america': {
      name: 'Ameryka Północna',
      shortName: 'Am. Północna',
      caption:
        'Ameryka Północna (Stany Zjednoczone, Kanada i kilka terytoriów północnoatlantyckich — nie Meksyk) miała w 2023 r. największy regionalny napływ netto. W żywym zasobie prowadzą osoby urodzone w Ameryce Łacińskiej i na Karaibach (27 mln) oraz w Azji (około 20 mln), potem Europa (około 6,6 mln) i Afryka (około 2,7 mln).',
      originsIntro:
        'W połowie 2024 r. w Ameryce Północnej mieszkało 61,2 mln międzynarodowych migrantów. 27 mln z Ameryki Łacińskiej i Karaibów to największy korytarz międzyregionalny w kluczowych faktach IMS 2024. Ruch Kanada–USA istnieje; IOM nie czyni go główną opowieścią.',
      corridorsIntro:
        'Meksyk → Stany Zjednoczone pozostaje największą parą krajów. Urodzeni w Azji mieszkańcy Ameryki Północnej to około 20 mln. To zasoby wielu dekad, nie lista przyjazdów z 2023 r.',
    },
    oceania: {
      name: 'Oceania',
      shortName: 'Oceania',
      caption:
        'Oceania była w 2023 r. niewielkim odbiorcą netto. Międzynarodowi migranci to 21% mieszkańców — najwyższy udział regionalny — niemal wszyscy w Australii i Nowej Zelandii. IOM liczy ponad 8,6 mln migrantów spoza regionu; urodzeni w Azji to około 5 mln, w Europie około 2,5 mln.',
      originsIntro:
        'W połowie 2024 r. w Oceanii mieszkało 9,9 mln międzynarodowych migrantów. Suma spoza regionu to około 8,6 mln. Zasób wewnątrz Oceanii to reszta, w tym Nowa Zelandia → Australia.',
      corridorsIntro:
        'Pięć największych korytarzy IOM z udziałem Oceanii kończy się w Australii: Wielka Brytania (około 1 mln), Indie (około 876 tys.), Chiny (około 656 tys.), potem Nowa Zelandia (około 588 tys.). Ten ostatni jest wewnątrzregionalny.',
    },
  },
  originNames: {
    africa: 'Afryka',
    asia: 'Azja',
    europe: 'Europa',
    'latin-america-caribbean': 'Ameryka Łacińska i Karaiby',
    'northern-america': 'Ameryka Północna',
    oceania: 'Oceania',
  },
  campCopy: {
    'coxs-bazar': {
      name: 'Obozy Cox’s Bazar',
      country: 'Bangladesz',
      note: 'Rząd Bangladeszu / UNHCR: 33 obozy w dystrykcie Cox’s Bazar, w tym Kutupalong. Uchodźcy Rohingya z Mjanmy. Dalsze 33 514 osób na Bhasan Char nie wchodzi w ten znacznik.',
    },
    dadaab: {
      name: 'Dadaab',
      country: 'Kenia',
      note: 'Kompleks obozów Dadaab we wschodniej Kenii. Pakiet statystyk Kenii na 31 sierpnia 2026 (rząd / UNHCR). Kompleks, nie jedno miasto namiotów.',
    },
    'kakuma-kalobeyei': {
      name: 'Kakuma i Kalobeyei',
      country: 'Kenia',
      note: 'Kakuma 234 542, Kalobeyei 86 547 i Eldoret 2 573, zgrupowane jako jedna operacja obszaru Kakumy w pakiecie statystyk Kenii, 31 sierpnia 2026.',
    },
    bidibidi: {
      name: 'Bidibidi',
      country: 'Uganda',
      note: 'Osiedle Bidibidi, dystrykt Yumbe. Główny kontyngent to przesiedleni z Sudanu Południowego. Osiedle, nie obóz z murem.',
    },
    zaatari: {
      name: 'Zaatari',
      country: 'Jordania',
      note: 'Obóz Zaatari. Główny kontyngent to przesiedleni z Syrii. Dane ludności UNHCR dla Jordanii, 31 sierpnia 2026.',
    },
  },
  routeCopy: {
    'central-mediterranean': {
      name: 'Centralny Śródziemnomorski',
      note: 'Około 67 000 wykryć w 2024 (−59% wobec 2023), druga trasa UE w tamtym roku. W 2025 Frontex nadal nazywał ją najruchliwszą, zbliżoną do 2024. Wyjazdy z Libii to wskazany czynnik w stronę Włoch. Nie liczba unikalnych osób.',
    },
    'eastern-mediterranean': {
      name: 'Wschodni Śródziemnomorski',
      note: '69 400 wykryć w 2024 (+14%). W 2025 trasa spadła ogółem; korytarz Libia–Kreta wzrósł ponad trzykrotnie. Nie czytaj jako całej Afryki → Europy.',
    },
    'western-africa': {
      name: 'Afryka Zachodnia (Wyspy Kanaryjskie)',
      note: 'Prawie 47 000 przyjazdów na Wyspy Kanaryjskie w 2024 — najwyżej od początku ewidencji Frontexu w 2009. W 2025 wykrycia na tej trasie spadły o około dwie trzecie (Mauretania, Maroko, Senegal).',
    },
    'western-mediterranean': {
      name: 'Zachodni Śródziemnomorski',
      note: 'Frontex zgłasza wzrost w 2025, głównie z Algierii. Na znaczniku nie ma wymyślonej liczby za 2025.',
    },
    'western-balkans': {
      name: 'Bałkany Zachodnie',
      note: 'Wykrycia spadły o 78% w 2024 i znów w 2025. Frontex nie powtórzył liczby za 2025, którą można by podać bez wymysłu.',
    },
  },
};
