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
};
