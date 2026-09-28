import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'Czym to jest',
  why: 'Dlaczego to ważne',
  how: 'Jak to czytać',
  limits: 'Ograniczenia',
};

const prison = '#8c2f39';
const teal = '#1a6b7a';

export const pl: Record<string, MapCopy> = {
  'prison-population-rate': {
    title: 'Wskaźnik populacji więziennej',
    cardMeta: 'Dane Światowego przeglądu więziennictwa, liczba więźniów na 100 000 osób.',
    hook: 'Ile osób przebywa w więzieniach w poszczególnych krajach na każde 100 000 mieszkańców, łącznie z tymczasowo aresztowanymi, według bazy „Światowy przegląd więziennictwa”.',
    description:
      '„Światowy przegląd więziennictwa” to bezpłatna internetowa baza danych o systemach więziennych na świecie, prowadzona przez Instytut Badań nad Przestępczością i Polityką Wymiaru Sprawiedliwości przy Birkbeck, Uniwersytet Londyński. Baza szereguje kraje według wskaźnika populacji więziennej: liczby wszystkich osób przebywających w więzieniach, w tym tymczasowo aresztowanych, na 100 000 mieszkańców. Niekomercyjny serwis statystyczny Our World in Data („Nasz świat w danych”) pokazuje ten sam szereg na mapie świata (dane z lat 1993–2026).',
    whyOnShelf:
      'Wskaźnik pokazuje, jak często państwo sięga po karę więzienia. Na liście 224 systemów więziennych najwyższy wskaźnik ma Salwador: 1659 na 100 000 osób, a dalej Kuba (794), Turkmenistan (około 576) i Stany Zjednoczone (542).',
    howToRead:
      'Dane pochodzą głównie od rządów i innych źródeł oficjalnych, a strony krajów są aktualizowane co miesiąc, więc najnowszy rok różni się w zależności od kraju. Na wskaźnik wpływają przepisy o karach, stosowanie aresztu tymczasowego i przepustowość sądów, a także poziom przestępczości. Im ciemniejszy kolor na mapie, tym więcej więźniów na 100 000 osób; gdy brakuje danych za 2026 rok, pokazano najbliższy rok z okresu 2018–2025.',
    caveats:
      'Odsetek tymczasowo aresztowanych, kobiet i cudzoziemców wśród więźniów oraz zapełnienie więzień „Światowy przegląd więziennictwa” publikuje jako osobne listy; mapa pokazuje tylko wskaźnik ogólny. Kraje różnie definiują, kogo liczy się jako więźnia.',
    licenseNote: realMapCredit('pl', 'prison-population-rate') ?? '',
    imageAlt:
      'Mapa świata: więźniowie na 100 000 osób, jasny ląd przy niższym wskaźniku i ciemny fiolet przy wyższym, bez tytułu i legendy na obrazie',
    caption:
      'Liczba więźniów na 100 000 osób według krajów w 2026 roku lub w ostatnim dostępnym roku, łącznie z tymczasowo aresztowanymi.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Więźniowie na 100 000 osób',
        items: [
          { swatch: '#e7e7e7', label: 'Brak danych' },
          { swatch: '#feebe2', label: 'od 0 do 100' },
          { swatch: '#fcc5c0', label: 'od 100 do 200' },
          { swatch: '#fa9fb5', label: 'od 200 do 300' },
          { swatch: '#f768a1', label: 'od 300 do 400' },
          { swatch: '#dd3497', label: 'od 400 do 500' },
          { swatch: '#ac027d', label: 'od 500 do 600' },
          { swatch: '#7a0177', label: '600 i więcej' },
        ],
      },
    ],
    gridSource: cite(
      '„Światowy przegląd więziennictwa”, wskaźnik populacji więziennej',
      'https://www.prisonstudies.org/highest-to-lowest/prison_population_rate',
    ),
    sources: [
      cite(
        '„Światowy przegląd więziennictwa” (World Prison Brief), ICPR: strona główna',
        'https://www.prisonstudies.org/',
      ),
      cite(
        '„Światowy przegląd więziennictwa”: kraje według wskaźnika populacji więziennej, od najwyższego do najniższego (Highest to Lowest: Prison population rate)',
        'https://www.prisonstudies.org/highest-to-lowest/prison_population_rate',
      ),
      cite(
        '„Światowy przegląd więziennictwa”: przegląd danych (World Prison Brief data)',
        'https://www.prisonstudies.org/world-prison-brief-data',
      ),
      cite(
        'Instytut Badań nad Przestępczością i Polityką Wymiaru Sprawiedliwości: strona projektu (World Prison Brief)',
        'https://icpr.org.uk/theme/prisons-and-use-imprisonment/world-prison-brief',
      ),
      cite(
        'Our World in Data: wskaźnik populacji więziennej, interaktywna mapa i dane (Prison population rate)',
        'https://ourworldindata.org/grapher/prison-population-rate',
      ),
      cite(
        'Our World in Data: wskaźnik populacji więziennej, obraz mapy w formacie PNG',
        'https://ourworldindata.org/grapher/prison-population-rate.png',
      ),
    ],
  },
  'drug-trafficking-flows': {
    title: 'Szlaki przemytu narkotyków',
    cardMeta:
      '„Światowy raport narkotykowy” 2026 Biura Narodów Zjednoczonych ds. Narkotyków i Przestępczości, mapy szlaków na podstawie zgłoszonych przechwyceń.',
    hook: 'Główne szlaki przemytu kokainy, heroiny i metamfetaminy między regionami świata na mapach Biura Narodów Zjednoczonych ds. Narkotyków i Przestępczości, opracowanych na podstawie przechwyceń zgłoszonych za lata 2021–2024.',
    description:
      '„Światowy raport narkotykowy” 2026 Biura Narodów Zjednoczonych ds. Narkotyków i Przestępczości ma aneks statystyczny z trzema mapami świata, które pokazują główne przepływy metamfetaminy, kokainy i heroiny. Każda mapa podsumowuje przechwycenia narkotyków zgłoszone za lata 2021–2024. Dodatkowe mapy pokazują główne kraje wyjazdu lub tranzytu oraz główne kraje docelowe dla każdego narkotyku, a tabele aneksu obejmują uprawy, produkcję, przechwycenia, ceny i czystość.',
    whyOnShelf:
      'Mapy pokazują, jak narkotyki wędrują z regionów produkcji przez węzły tranzytowe na rynki zbytu. Przykładem jest Europa: według Agencji Unii Europejskiej ds. Narkotyków państwa Unii Europejskiej przechwyciły w 2024 roku 330 ton kokainy, po rekordowych 419 tonach w 2023 roku; najwięcej zgłosiły Hiszpania (124 tony) i Francja (53,5 tony).',
    howToRead:
      'Grubość każdego szlaku odpowiada łącznej ilości narkotyków przechwyconej na tej trasie, w skali od bardzo niskiej do bardzo wysokiej. Trasy opierają się na informacjach, które państwa członkowskie Organizacji Narodów Zjednoczonych podają w corocznych kwestionariuszach, w raportach o pojedynczych przechwyceniach i w innych dokumentach urzędowych. Strzałki wskazują kierunek przemytu: trasa zaczyna się tam, skąd przesyłka wyruszyła lub gdzie ją ostatnio widziano, a kończy tam, gdzie jest konsumowana lub dokąd zmierza dalej, dlatego początek strzałki może leżeć w innym kraju niż kraj produkcji. Biuro Narodów Zjednoczonych ds. Narkotyków i Przestępczości określa trasy jako orientacyjne; mniejsze trasy poboczne mogą być pominięte.',
    caveats:
      'Przechwycenia zależą od tego, gdzie i jak intensywnie działają służby, więc silnie kontrolowane trasy mogą wyglądać na większe. Ilustracja obejmuje 27 państw Unii Europejskiej, Norwegię i Turcję; mapy Biura Narodów Zjednoczonych ds. Narkotyków i Przestępczości obejmują cały świat.',
    licenseNote: realMapCredit('pl', 'drug-trafficking-flows') ?? '',
    imageAlt:
      'Kolumny przechwyconej kokainy od 2014 do 2024, osiem kolorowych pasów i lata, bez nazw krajów na obrazie',
    caption:
      'Kokaina przechwycona w 27 państwach Unii Europejskiej, Norwegii i Turcji w latach 2014–2024, w tonach, według krajów.',
    figureTitle: 'Kokaina przechwycona w Europie, 2014–2024',
    sectionHeads: heads,
    legend: [
      {
        title: 'Tony, od dołu każdej kolumny',
        items: [
          { swatch: '#1b4f72', label: 'Hiszpania' },
          { swatch: '#148f77', label: 'Francja' },
          { swatch: '#b9770e', label: 'Belgia' },
          { swatch: '#6c3483', label: 'Holandia' },
          { swatch: '#1a5276', label: 'Portugalia' },
          { swatch: '#c0392b', label: 'Włochy' },
          { swatch: '#d4ac0d', label: 'Turcja' },
          { swatch: '#7f8c8d', label: 'Pozostałe kraje' },
        ],
      },
    ],
    gridSource: cite(
      'Biuro Narodów Zjednoczonych ds. Narkotyków i Przestępczości, aneks statystyczny „Światowego raportu narkotykowego” 2026',
      'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026-annex.html',
    ),
    sources: [
      cite(
        'UNODC: „Światowy raport narkotykowy” 2026 (World Drug Report 2026)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026.html',
      ),
      cite(
        'UNODC: „Światowy raport narkotykowy” 2026, aneks statystyczny (Statistical Annex)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026-annex.html',
      ),
      cite(
        'UNODC: główne szlaki przemytu kokainy według zgłoszonych przechwyceń, 2021–2024, mapa PDF (Main cocaine trafficking flows as described in reported seizures)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/04_Main_cocaine_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: główne szlaki przemytu heroiny według zgłoszonych przechwyceń, 2021–2024, mapa PDF (Main heroin trafficking flows)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/07_Main_heroin_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: główne szlaki przemytu metamfetaminy według zgłoszonych przechwyceń, 2021–2024, mapa PDF (Main methamphetamine trafficking flows)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/01_Main_methamphetamine_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: „Światowy raport narkotykowy” 2025, mapy (poprzednie wydanie, World Drug Report 2025 Maps)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2025-maps.html',
      ),
      cite(
        'EUDA: kokaina, obecna sytuacja w Europie („Europejski raport narkotykowy” 2026, European Drug Report 2026)',
        'https://www.euda.europa.eu/publications/european-drug-report/2026/cocaine_en',
      ),
      cite(
        'EUDA: trendy w ilości przechwyconej kokainy w tonach, 2014–2024 (tabela EDR26-Cocaine-6, CSV)',
        'https://www.euda.europa.eu/sites/default/files/data/data-nodes/33313/versions/56/edr2026-cocaine-table-8_en.csv',
      ),
    ],
  },
  'modern-slavery': {
    title: 'Współczesne niewolnictwo',
    cardMeta:
      '„Globalny indeks niewolnictwa” Walk Free z 2023 roku oraz globalne szacunki Międzynarodowej Organizacji Pracy, Walk Free i Międzynarodowej Organizacji do spraw Migracji za 2021 rok.',
    hook: 'Szacowana skala współczesnego niewolnictwa, czyli pracy przymusowej i małżeństw przymusowych, w 160 krajach według „Globalnego indeksu niewolnictwa” organizacji Walk Free, opartego na globalnych szacunkach: około 50 milionów osób we współczesnym niewolnictwie w 2021 roku.',
    description:
      'Międzynarodowa organizacja praw człowieka Walk Free publikuje „Globalny indeks niewolnictwa”. Wydanie z 2023 roku szacuje, ile osób żyje we współczesnym niewolnictwie w 160 krajach, na podstawie reprezentatywnych badań gospodarstw domowych i statystycznego modelu podatności każdego kraju. Indeks opiera się na „Globalnych szacunkach współczesnego niewolnictwa” Międzynarodowej Organizacji Pracy, Walk Free i Międzynarodowej Organizacji do spraw Migracji: w 2021 roku w dowolnym dniu we współczesnym niewolnictwie żyło około 50 milionów osób (49,6 miliona), w tym około 28 milionów w pracy przymusowej i 22 miliony w małżeństwach przymusowych, o około 10 milionów więcej niż według szacunków z 2016 roku.',
    whyOnShelf:
      'Szacunki obejmują także osoby niewidoczne w statystykach policji i sądów. Według indeksu najwyższa częstość występuje w Korei Północnej (104,6 na 1000 osób), Erytrei (90,3) i Mauretanii (32,0), a najsilniejsze działania rządów podejmują Wielka Brytania, Australia i Holandia. W podziale na regiony globalne szacunki wskazują najwyższą częstość w państwach arabskich (10,1 na 1000 osób) i największą liczbę osób w regionie Azji i Pacyfiku (29,3 miliona).',
    howToRead:
      'Dane dla krajów to szacowana częstość na 1000 osób, oparta na badaniach i modelowaniu, więc każda liczba obarczona jest marginesem niepewności. Interaktywna mapa Walk Free pokazuje dla każdego kraju szacowaną częstość, podatność i działania rządu. Ilustracja przedstawia globalne szacunki według płci, wieku, regionu i grupy dochodowej, w milionach osób i na 1000 mieszkańców.',
    caveats:
      'Globalne szacunki pomijają niektóre formy wyzysku, na przykład handel narządami i werbowanie dzieci przez siły zbrojne, a badania w krajach ogarniętych głębokim, przewlekłym konfliktem są trudne i niebezpieczne. Walk Free określa swoje szacunki jako ostrożne.',
    licenseNote: realMapCredit('pl', 'modern-slavery') ?? '',
    imageAlt:
      'Słupki liczby osób we współczesnym niewolnictwie w 2021 roku z liczbami 27.6, 22.0, 49.6 i rozbiciem rysunku 1, bez nazw kategorii na obrazie',
    caption:
      'Osoby we współczesnym niewolnictwie w 2021 roku, w milionach i na 1000 mieszkańców, według płci, wieku, regionu i grupy dochodowej.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Praca przymusowa i małżeństwo przymusowe, miliony osób',
        items: [
          { swatch: prison, label: 'Praca przymusowa, 27.6' },
          { swatch: teal, label: 'Małżeństwo przymusowe, 22.0' },
        ],
      },
      {
        title: 'Liczba osób, miliony (lewe słupki, te same numery wierszy)',
        items: [
          { swatch: prison, label: '1 Świat, 49.6' },
          { swatch: prison, label: '2 Mężczyźni, 22.8' },
          { swatch: prison, label: '3 Kobiety, 26.7' },
          { swatch: prison, label: '4 Dorośli, 37.3' },
          { swatch: prison, label: '5 Dzieci, 12.3' },
          { swatch: prison, label: '6 Afryka, 7.0' },
          { swatch: prison, label: '7 Ameryka, 5.1' },
          { swatch: prison, label: '8 Państwa arabskie, 1.7' },
          { swatch: prison, label: '9 Azja i Pacyfik, 29.3' },
          { swatch: prison, label: '10 Europa i Azja Środkowa, 6.4' },
          { swatch: prison, label: '11 Wysoki dochód, 7.2' },
          { swatch: prison, label: '12 Dochód powyżej średniego, 12.7' },
          { swatch: prison, label: '13 Dochód poniżej średniego, 23.0' },
          { swatch: prison, label: '14 Niski dochód, 6.6' },
        ],
      },
      {
        title: 'Częstość na 1000 mieszkańców (prawe słupki)',
        items: [
          { swatch: teal, label: '1 Świat, 6.4' },
          { swatch: teal, label: '2 Mężczyźni, 5.8' },
          { swatch: teal, label: '3 Kobiety, 6.9' },
          { swatch: teal, label: '4 Dorośli, 6.9' },
          { swatch: teal, label: '5 Dzieci, 5.2' },
          { swatch: teal, label: '6 Afryka, 5.2' },
          { swatch: teal, label: '7 Ameryka, 5.0' },
          { swatch: teal, label: '8 Państwa arabskie, 10.1' },
          { swatch: teal, label: '9 Azja i Pacyfik, 6.8' },
          { swatch: teal, label: '10 Europa i Azja Środkowa, 6.9' },
          { swatch: teal, label: '11 Wysoki dochód, 5.9' },
          { swatch: teal, label: '12 Dochód powyżej średniego, 4.4' },
          { swatch: teal, label: '13 Dochód poniżej średniego, 7.8' },
          { swatch: teal, label: '14 Niski dochód, 9.6' },
        ],
      },
    ],
    gridSource: cite(
      'Walk Free, „Globalny indeks niewolnictwa” 2023',
      'https://www.walkfree.org/global-slavery-index/',
    ),
    sources: [
      cite(
        'Walk Free: „Globalny indeks niewolnictwa” (Global Slavery Index)',
        'https://www.walkfree.org/global-slavery-index/',
      ),
      cite(
        'Walk Free: mapa „Globalnego indeksu niewolnictwa” (Global Slavery Index map)',
        'https://www.walkfree.org/global-slavery-index/map/',
      ),
      cite(
        'Walk Free: główne wnioski globalne (Global findings)',
        'https://www.walkfree.org/global-slavery-index/findings/global-findings/',
      ),
      cite(
        'Walk Free: materiały do pobrania (Downloads)',
        'https://www.walkfree.org/global-slavery-index/downloads/',
      ),
      cite(
        'Walk Free: „Globalny indeks niewolnictwa” 2023, PDF (The Global Slavery Index 2023)',
        'https://cdn.walkfree.org/content/uploads/2023/05/17114737/Global-Slavery-Index-2023.pdf',
      ),
      cite(
        'MOP: „Globalne szacunki współczesnego niewolnictwa: praca przymusowa i małżeństwa przymusowe” (Global Estimates of Modern Slavery: Forced Labour and Forced Marriage)',
        'https://www.ilo.org/publications/major-publications/global-estimates-modern-slavery-forced-labour-and-forced-marriage',
      ),
      cite(
        'MOP, Walk Free i IOM: „Globalne szacunki współczesnego niewolnictwa”, wrzesień 2022, raport PDF',
        'https://www.ilo.org/sites/default/files/2025-09/ILO_GEMS-2022_Report_EN_Web.pdf',
      ),
      cite(
        'MOP: 50 milionów ludzi na świecie we współczesnym niewolnictwie, komunikat (50 million people worldwide in modern slavery)',
        'https://www.ilo.org/resource/news/50-million-people-worldwide-modern-slavery-0',
      ),
    ],
  },
  'basel-aml-index': {
    title: 'Ryzyko prania pieniędzy',
    cardMeta: 'Bazylejski indeks ryzyka prania pieniędzy 2025, edycja publiczna, 177 jurysdykcji.',
    hook: 'Oceny ryzyka od 0 do 10 pokazujące, na ile kraj jest narażony na pranie pieniędzy i powiązane przestępstwa finansowe oraz jak skutecznie potrafi im przeciwdziałać, według Bazylejskiego Instytutu Zarządzania.',
    description:
      'Bazylejski indeks przeciwdziałania praniu pieniędzy to niezależny ranking prowadzony od 2012 roku przez Międzynarodowe Centrum Odzyskiwania Mienia przy Bazylejskim Instytucie Zarządzania. Jego 14. edycja publiczna, wydana w grudniu 2025 roku, ocenia 177 krajów i jurysdykcji w skali od 0 do 10, gdzie 10 oznacza najwyższe ryzyko. Wynik łączy 17 wskaźników z publicznie dostępnych źródeł w pięciu obszarach: jakość przepisów przeciw praniu pieniędzy, finansowaniu terroryzmu i finansowaniu broni masowego rażenia; korupcja i oszustwa; przejrzystość i standardy finansowe; przejrzystość i rozliczalność władz publicznych; ryzyko prawne i polityczne.',
    whyOnShelf:
      'Bazylejski Instytut wiąże pranie pieniędzy z takimi przestępstwami jak korupcja, oszustwa, przestępstwa przeciwko środowisku i handel narkotykami. W 2025 roku najwyższe wyniki ryzyka mają Mjanma (8,18), Haiti (8,12) i Demokratyczna Republika Konga (7,63), a najniższe Finlandia (3,03), Islandia (3,04) i San Marino (3,08). Średnia światowa spadła nieznacznie z 5,30 do 5,28; ponad połowa jurysdykcji poprawiła wynik, a w 43% się on pogorszył.',
    howToRead:
      'Wyższy wynik oznacza większą ocenianą podatność i słabszą zdolność przeciwdziałania praniu pieniędzy. Wynik jest złożoną oceną ryzyka opartą na danych innych organizacji; największą wagę (35%) mają oceny Grupy Specjalnej ds. Przeciwdziałania Praniu Pieniędzy, organu międzyrządowego, który ustala światowe standardy w tej dziedzinie. W rankingu ujęto tylko jurysdykcje z wystarczającą ilością danych. Mapa ilustracyjna pokazuje 81 jurysdykcji, które Departament Stanu Stanów Zjednoczonych wskazał jako główne jurysdykcje prania pieniędzy za 2024 rok; raport Departamentu należy do publicznych źródeł indeksu.',
    caveats:
      'Zbieranie danych do edycji 2025 zakończono 10 listopada 2025 roku. Rosja jest wyłączona z edycji publicznej w związku z zawieszeniem jej członkostwa w Grupie Specjalnej ds. Przeciwdziałania Praniu Pieniędzy. Osobna edycja ekspercka, aktualizowana co kwartał, obejmuje 203 jurysdykcje i podaje wyniki dla każdego wskaźnika. Amerykańska lista wskazuje kraje, których instytucje finansowe obracają znacznymi kwotami z międzynarodowego handlu narkotykami; wpis na listę pozostaje bez sankcji.',
    licenseNote: realMapCredit('pl', 'basel-aml-index') ?? '',
    imageAlt:
      'Mapa świata: główne jurysdykcje prania pieniędzy wskazane przez Departament Stanu Stanów Zjednoczonych na 2024 rok w kolorze fioletowym, pozostałe kraje beżowe, małe terytoria jako kropki',
    caption:
      '81 jurysdykcji, które Departament Stanu Stanów Zjednoczonych wskazał jako główne jurysdykcje prania pieniędzy za 2024 rok. Ta mapa pokazuje listę Departamentu Stanu Stanów Zjednoczonych, a nie oceny Bazylejskiego indeksu przeciwdziałania praniu pieniędzy.',
    figureTitle: 'Główne jurysdykcje prania pieniędzy wskazane przez Departament Stanu Stanów Zjednoczonych, 2024',
    sectionHeads: heads,
    legend: [
      {
        title: 'Lista Departamentu Stanu Stanów Zjednoczonych za 2024 rok. Małe terytoria są zaznaczone kropkami.',
        items: [
          { swatch: '#6c2c5a', label: 'Wskazana główna jurysdykcja prania pieniędzy' },
          { swatch: '#e7e2d8', label: 'Poza tą listą' },
        ],
      },
    ],
    gridSource: cite(
      'Bazylejski Instytut Zarządzania, Bazylejski indeks ryzyka prania pieniędzy 2025',
      'https://index.baselgovernance.org/',
    ),
    sources: [
      cite(
        'Bazylejski indeks ryzyka prania pieniędzy: interaktywna mapa (Basel AML Index)',
        'https://index.baselgovernance.org/',
      ),
      cite(
        'Bazylejski indeks ryzyka prania pieniędzy: ranking publiczny (Public Ranking)',
        'https://index.baselgovernance.org/ranking',
      ),
      cite(
        'Bazylejski Instytut Zarządzania: omówienie indeksu (Basel AML Index)',
        'https://baselgovernance.org/basel-aml-index',
      ),
      cite(
        'Bazylejski Instytut Zarządzania: indeks 2025 pokazuje nierówne postępy w walce z przestępczością finansową, komunikat z 8 grudnia 2025 (Basel AML Index 2025 reveals uneven progress in the global fight against financial crime)',
        'https://baselgovernance.org/resources/news/basel-aml-index-2025-reveals-uneven-progress-global-fight-against-financial-crime',
      ),
      cite(
        'Bazylejski Instytut Zarządzania: indeks 2025, 14. edycja publiczna, raport PDF (Basel AML Index 2025: 14th Public Edition)',
        'https://index.baselgovernance.org/api/assets/1cdb5e5f-f4c2-4738-918b-f2c4271c6313/Basel%20AML%20Index%202025.pdf',
      ),
      cite(
        'Departament Stanu USA: „Raport o międzynarodowej strategii kontroli narkotyków” 2025 (2025 International Narcotics Control Strategy Report)',
        'https://www.state.gov/2025-international-narcotics-control-strategy-report',
      ),
      cite(
        'Departament Stanu USA: „Raport o międzynarodowej strategii kontroli narkotyków” 2025, tom 2: pranie pieniędzy, PDF (Volume 2: Money Laundering)',
        'https://www.state.gov/wp-content/uploads/2025/03/2025-International-Narcotics-Control-Strategy-Volume-2-Accessible.pdf',
      ),
    ],
  },
  'rule-of-law-index': {
    title: 'Indeks praworządności',
    cardMeta: 'Światowy Projekt Sprawiedliwości, Indeks praworządności 2025, 143 kraje i jurysdykcje.',
    hook: 'Jak mieszkańcy i prawnicy w 143 krajach oceniają ograniczenia władzy, korupcję, jawność rządu, prawa podstawowe, porządek i bezpieczeństwo, egzekwowanie regulacji oraz wymiar sprawiedliwości cywilnej i karnej; wyniki od 0 do 1 według Światowego Projektu Sprawiedliwości.',
    description:
      'Organizacja niedochodowa Światowy Projekt Sprawiedliwości co roku od 2009 roku publikuje Indeks praworządności. Wydanie 2025 obejmuje 143 kraje i jurysdykcje, zamieszkane przez 95% ludności świata, i opiera się na ponad 215 000 ankiet gospodarstw domowych oraz 4100 ankietach praktyków prawa i ekspertów. Kraje otrzymują wyniki od 0 do 1, gdzie 1 oznacza najpełniejsze przestrzeganie praworządności, w ośmiu obszarach: ograniczenia władzy rządu, brak korupcji, jawność rządu, prawa podstawowe, porządek i bezpieczeństwo, egzekwowanie regulacji, wymiar sprawiedliwości cywilnej i wymiar sprawiedliwości karnej.',
    whyOnShelf:
      'Indeks mierzy, jak praworządność odczuwa się w codziennym życiu, od bezpieczeństwa i sądów po kontrolę nad urzędnikami. W 2025 roku praworządność osłabła w 68% krajów wobec 57% rok wcześniej; to ósmy rok z rzędu, w którym spadków jest więcej niż wzrostów. Najwyżej w rankingu są Dania, Norwegia, Finlandia, Szwecja i Nowa Zelandia; najniżej Wenezuela, Afganistan, Kambodża, Haiti i Nikaragua. Katar po raz pierwszy znalazł się w indeksie.',
    howToRead:
      'Każdy wynik podsumowuje odpowiedzi mieszkańców i prawników danego kraju. Spadek oznacza, że wynik kraju obniżył się między 2024 a 2025 rokiem; kraje ze spadkiem straciły średnio 1,07% wyniku, a kraje z poprawą zyskały 0,52%. Wyniki w poszczególnych obszarach i profile krajów są dostępne na stronie indeksu. Mapa ilustracyjna korzysta z odrębnego otwartego zbioru danych, „Światowych wskaźników jakości rządzenia” Banku Światowego: to wynik praworządności od 0 do 100 dla 215 gospodarek za 2025 rok, obliczony na podstawie 35 międzynarodowych źródeł, w tym badań gospodarstw domowych i firm oraz ocen eksperckich.',
    caveats:
      'Niektóre wskaźniki mają dane tylko dla części ze 143 krajów. Wynik Banku Światowego na mapie odzwierciedla opinie o egzekwowaniu umów, prawach własności, pracy policji i sądów oraz prawdopodobieństwie przestępstw i przemocy; ma własną skalę i własny ranking.',
    licenseNote: realMapCredit('pl', 'rule-of-law-index') ?? '',
    imageAlt:
      'Mapa świata z wynikiem praworządności Banku Światowego za 2025 rok, jasnoniebieski przy niższych wynikach i ciemnoniebieski przy wyższych, małe gospodarki jako kropki',
    caption:
      'Wynik praworządności od 0 do 100 w „Światowych wskaźnikach jakości rządzenia” Banku Światowego, 2025 rok, 215 gospodarek.',
    figureTitle: 'Bank Światowy, „Światowe wskaźniki jakości rządzenia”: praworządność, 2025',
    sectionHeads: heads,
    legend: [
      {
        title: 'Wynik Banku Światowego, od 0 do 100',
        items: [
          { swatch: '#d5d0c8', label: 'Brak danych' },
          { swatch: '#c6dbef', label: 'poniżej 30' },
          { swatch: '#9ecae1', label: 'od 30 do 45' },
          { swatch: '#6baed6', label: 'od 45 do 60' },
          { swatch: '#3182bd', label: 'od 60 do 75' },
          { swatch: '#08519c', label: 'od 75 do 90' },
          { swatch: '#08306b', label: 'od 90 do 100' },
        ],
      },
    ],
    gridSource: cite(
      'Światowy Projekt Sprawiedliwości, Indeks praworządności 2025',
      'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release',
    ),
    sources: [
      cite(
        'World Justice Project: Indeks praworządności, wersja interaktywna (WJP Rule of Law Index)',
        'https://worldjusticeproject.org/index/',
      ),
      cite(
        'World Justice Project: komunikat prasowy o indeksie 2025 (WJP Rule of Law Index 2025 Global Press Release)',
        'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release',
      ),
      cite(
        'World Justice Project: komunikat prasowy w PDF (Global Press Release)',
        'https://worldjusticeproject.org/sites/default/files/documents/Global%20Press%20Release_EN.pdf',
      ),
      cite(
        'World Justice Project: Indeks praworządności 2025, raport PDF (WJP Rule of Law Index 2025)',
        'https://worldjusticeproject.org/rule-of-law-index/downloads/WJPIndex2025.pdf',
      ),
      cite(
        'Bank Światowy: „Światowe wskaźniki jakości rządzenia” (Worldwide Governance Indicators)',
        'https://www.worldbank.org/en/publication/worldwide-governance-indicators',
      ),
      cite(
        'Katalog danych Banku Światowego: „Światowe wskaźniki jakości rządzenia”, zbiór danych (Worldwide Governance Indicators)',
        'https://datacatalog.worldbank.org/search/dataset/0038026/worldwide-governance-indicators',
      ),
      cite(
        'Bank Światowy: szacunki i wyniki jakości rządzenia, 1996–2025, plik Excel (WGI 2026 Governance Estimates and Scores)',
        'https://datacatalogfiles.worldbank.org/ddh-published/0038026/DR0095947/WGI%202026%20Governance%20Estimates%20and%20Scores%20%281996-2025%29.xlsx',
      ),
    ],
  },
};
