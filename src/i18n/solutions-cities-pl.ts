import type { CitiesDetailCopy, CitiesEncyclopediaSlug, CitiesMobilitySlug } from '../data/solutions-cities';
import type { SolutionCopy } from '../data/solutions';

const brtPdf =
  'https://itdp.org/wp-content/uploads/2024/03/ITDP_BRTSTANDARD_APR2024_SINGLE-compressed.pdf';
const walkPdf =
  'https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/12/improving-the-quality-of-walking-and-cycling-in-cities_2fd6b6ec/cdeb3fe8-en.pdf';
const roadPdf =
  'https://documents1.worldbank.org/curated/en/099031724120560318/pdf/P1766281e0163d01218640121bea8238a86.pdf';

export const grid: Record<CitiesMobilitySlug, SolutionCopy> = {
  'bus-rapid-transit': {
    problemTitle: 'Autobusy stoją w tych samych korkach co samochody',
    fixTitle: 'Szybki transport autobusowy',
    problem: 'Autobusy stoją w tych samych korkach co samochody',
    fix: 'Szybki transport autobusowy daje autobusom własne pasy, wejście na poziomie peronu i częste kursy. Zwykła linia działa wtedy prawie jak metro, a kosztuje znacznie mniej niż kolej. Międzynarodowy standard oceny przyznaje każdemu korytarzowi poziom podstawowy, brązowy, srebrny lub złoty.',
    imageAlt:
      'Stacja Posta na linii szybkiego transportu autobusowego w Dar es Salaam, perony przy pasach zostawionych autobusom',
    sourceLabel: 'Instytut Polityki Transportowej i Rozwoju',
  },
  'walking-and-cycling-networks': {
    problemTitle: 'Miasta, w których pieszym i rowerzystom zostaje tylko miejsce po samochodach',
    fixTitle: 'Sieci piesze i rowerowe',
    problem: 'Miasta, w których pieszym i rowerzystom zostaje tylko miejsce po samochodach',
    fix: 'Ciągłe, bezpieczne trasy dla pieszych i rowerzystów, połączone na każdym skrzyżowaniu, dzięki którym krótkie podróże nie wymagają samochodu. Zalecenia Międzynarodowego Forum Transportu stawiają na pierwszym miejscu jakość i bezpieczeństwo chodzenia i jazdy na rowerze, przed samą liczbą podróży.',
    imageAlt:
      'Rowerzyści przejeżdżają przez skrzyżowanie przy Holmens Kanal w Kopenhadze po niebieskim przejeździe',
    sourceLabel: 'Organizacja Współpracy Gospodarczej i Rozwoju oraz Międzynarodowe Forum Transportu',
  },
  'congestion-charging': {
    problemTitle: 'Darmowy wjazd w zakorkowane ulice spowalnia każdą podróż',
    fixTitle: 'Opłaty kongestyjne',
    problem: 'Darmowy wjazd w zakorkowane ulice spowalnia każdą podróż',
    fix: 'Kierowcy płacą za korzystanie z najbardziej zatłoczonych ulic w godzinach największego ruchu. Kolejki się skracają, a pieniądze trafiają do transportu publicznego. Londyn, Sztokholm i Singapur stosują takie opłaty od lat. Przegląd Banku Światowego traktuje je jako sposób zarządzania tym, jak ludzie podróżują, a zarazem jako źródło dochodów.',
    imageAlt:
      'Wykres słupkowy procentowej zmiany sześciu zanieczyszczeń w Sztokholmie w czasie testu opłaty, trzy obszary, tabela 4.7 Banku Światowego',
    sourceLabel: 'Bank Światowy',
  },
  'low-emission-zones': {
    problemTitle: 'Najbardziej zanieczyszczające pojazdy swobodnie wjeżdżają w najgęstsze ulice',
    fixTitle: 'Strefy niskiej emisji',
    problem: 'Najbardziej zanieczyszczające pojazdy swobodnie wjeżdżają w najgęstsze ulice',
    fix: 'Wyznaczone na mapie strefy miejskie, do których najbardziej zanieczyszczające pojazdy nie mogą wjechać albo muszą za wjazd zapłacić. Dzięki temu spada poziom dwutlenku azotu i drobnych pyłów tam, gdzie ludzie mieszkają i chodzą. W miastach europejskich działa już ponad 320 takich stref, a miasta w innych częściach świata wprowadzają te same zasady, by zachęcić do czystszych pojazdów, transportu publicznego, chodzenia i jazdy na rowerze.',
    imageAlt:
      'Mapa stacji pomiarowych w Europie: średni roczny dwutlenek azotu w 2022 i w 2023 roku',
    sourceLabel: 'Międzynarodowa Rada ds. Czystego Transportu',
  },
  'electric-buses': {
    problemTitle: 'Autobusy z silnikiem diesla cały dzień krążą po najbardziej zatłoczonych trasach',
    fixTitle: 'Autobusy elektryczne',
    problem: 'Autobusy z silnikiem diesla cały dzień krążą po najbardziej zatłoczonych trasach',
    fix: 'Autobusy bateryjne na liniach miejskich usuwają spaliny z przystanków i ruchliwych ulic, a miasta kupują je już na dużą skalę. Międzynarodowa Agencja Energetyczna naliczyła prawie 70 tys. autobusów elektrycznych sprzedanych na świecie w 2025 r., o 12% więcej niż rok wcześniej, a Program Narodów Zjednoczonych ds. Środowiska pomaga krajom i miastom planować czystsze floty autobusowe.',
    imageAlt:
      'Skumulowane słupki sprzedaży autobusów elektrycznych według regionów, w tysiącach pojazdów, za każdy rok od 2020 do 2025',
    sourceLabel: 'Międzynarodowa Agencja Energetyczna, „Globalne perspektywy pojazdów elektrycznych 2026”',
  },
};

export const detail: Record<CitiesEncyclopediaSlug, CitiesDetailCopy> = {
  'bus-rapid-transit': {
    title: 'Szybki transport autobusowy',
    hook: grid['bus-rapid-transit'].fix,
    imageAlt: grid['bus-rapid-transit'].imageAlt,
    caption:
      'Stacja Posta na linii szybkiego transportu autobusowego w Dar es Salaam w Tanzanii. Z jej buspasów korzystają tylko szybkie autobusy i pojazdy służb ratunkowych.',
    credit: 'Zdjęcie: Grahamcole, Wikimedia Commons',
    what: [
      'Szybki transport autobusowy to system autobusowy o dużej przepustowości, zaprojektowany tak, by jeździć szybko i punktualnie. Standard oceny opracowany przez Instytut Polityki Transportowej i Rozwoju wymienia pięć podstaw: pas tylko dla autobusów, buspas prowadzony w miarę możliwości środkiem jezdni, opłatę za przejazd przed wejściem do pojazdu, pierwszeństwo autobusów na skrzyżowaniach oraz perony na poziomie podłogi autobusu. Aby korytarz w ogóle uznać za szybki transport autobusowy, musi mieć co najmniej 3 kilometry wydzielonych pasów.',
    ],
    why: [
      'Szybki transport autobusowy daje miastu masowy szybki transport szybciej i taniej niż kolej. Kurytyba w Brazylii uruchomiła swój system w 1974 r., a TransMilenio w Bogocie w 2000 r. Według wydania standardu z 2024 r. w ciągu dziesięciu lat od jego pierwszej publikacji w 2012 r. otwarto ponad 153 korytarze w 91 miastach w 24 krajach.',
    ],
    read: [
      'Standard ocenia korytarz w skali do 100 punktów. Poziom złoty oznacza co najmniej 85 punktów, srebrny od 70 do 84,9, a brązowy od 55 do 69,9. Poziom „podstawowy” spełnia tylko wymagania minimalne. Ocenę końcową przyznaje się sześć miesięcy po otwarciu, po odjęciu punktów za problemy w codziennej eksploatacji, takie jak przepełnienie, długie czekanie na światłach i autobusy jadące jeden za drugim w grupach.',
    ],
    limits: [
      'Pasy tylko wymalowane na jezdni, bez porządnych przystanków, egzekwowania przepisów i częstych kursów, dają niewiele. Autobus nazwany szybkim transportem autobusowym bez tych podstaw nadal stoi w korku.',
    ],
    sources: [
      {
        label: 'Instytut Polityki Transportowej i Rozwoju: standard oceny szybkiego transportu autobusowego',
        url: 'https://itdp.org/publication/the-brt-standard/',
      },
      {
        label:
          'Instytut Polityki Transportowej i Rozwoju: standard oceny szybkiego transportu autobusowego, wydanie z 2024 r.',
        url: brtPdf,
      },
    ],
  },
  'walking-and-cycling-networks': {
    title: 'Sieci piesze i rowerowe',
    hook: grid['walking-and-cycling-networks'].fix,
    imageAlt: grid['walking-and-cycling-networks'].imageAlt,
    caption:
      'Rowerzyści przejeżdżają przez skrzyżowanie przy Holmens Kanal w Kopenhadze po niebieskim przejeździe, który prowadzi drogę rowerową przez skrzyżowanie.',
    credit: 'Zdjęcie: Tony Webster, Wikimedia Commons',
    what: [
      'Sieć piesza i rowerowa to połączone chodniki, przejścia i trasy rowerowe, którymi ludzie mogą bezpiecznie i o własnych siłach dotrzeć do codziennych celów. Raport z okrągłego stołu opublikowany w grudniu 2023 r. przez Międzynarodowe Forum Transportu, międzyrządową organizację transportową działającą przy Organizacji Współpracy Gospodarczej i Rozwoju, wzywa miasta do poprawy jakości takich podróży: niższych prędkości ruchu, bezpiecznych przejść i dobrych połączeń z autobusami, tramwajami i pociągami.',
    ],
    why: [
      'Chodzenie i jazda na rowerze wspierają cztery cele wymienione w raporcie: sprawne przemieszczanie się, czystsze środowisko, większą radość z codziennego życia i sprawiedliwszy podział korzyści. W wielu miastach ludzie poruszają się o własnych siłach przede wszystkim pieszo, zwłaszcza na globalnym Południu i w krajach, w których jest mało samochodów. Raport ostrzega też, że dziesięciolecia planowania wokół samochodu zepchnęły pieszych i rowerzystów na skraj ulicy.',
    ],
    read: [
      'Raport ocenia postęp według jakości, którą stawia wyżej niż ilość. Pyta, czy ci, którzy już chodzą i jeżdżą na rowerze, mogą to robić godnie, bezpiecznie i wygodnie oraz czy czują się chronieni przed niebezpiecznym ruchem i nękaniem. Piesi i rowerzyści mają różne potrzeby, dlatego dobra sieć planuje dla każdej z tych grup osobno.',
    ],
    limits: [
      'Sama infrastruktura to za mało, jeśli ulice są niebezpieczne albo odcięte od częstego transportu publicznego. Sieci potrzebują ciągłości, niższych prędkości ruchu i prawdziwych przejść.',
    ],
    sources: [
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju oraz Międzynarodowe Forum Transportu: „Poprawa jakości ruchu pieszego i rowerowego w miastach”, seria raportów okrągłego stołu, nr 193',
        url: 'https://www.oecd.org/en/publications/improving-the-quality-of-walking-and-cycling-in-cities_cdeb3fe8-en.html',
      },
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju oraz Międzynarodowe Forum Transportu: „Poprawa jakości ruchu pieszego i rowerowego w miastach”, podsumowanie i wnioski',
        url: walkPdf,
      },
    ],
  },
  'congestion-charging': {
    title: 'Opłaty kongestyjne',
    hook: grid['congestion-charging'].fix,
    imageAlt: grid['congestion-charging'].imageAlt,
    caption:
      'Procentowa zmiana emisji w Sztokholmie w czasie testu opłaty, według tabeli 4.7. Liczby poniżej zera oznaczają spadek. W każdej grupie słupki idą od ciemnego do jasnego: centrum miasta, gmina Sztokholm i obszar 35 kilometrów kwadratowych. Grupa 1 to tlenki azotu (−8,5, −2,7, −1,3), 2 tlenek węgla (−14, −5,1, −2,9), 3 pył do 10 mikrometrów (−13, −3,4, −1,5), 4 lotne związki organiczne (−14, −5,2, −2,9), 5 benzen (−14, −5,3, −3,0), 6 dwutlenek węgla (−13, −5,4, −2,7). W raporcie przy tabeli podano źródło: Hugosson i Sjöberg, 2006.',
    credit:
      'Wykres przerysowany z tabeli 4.7 raportu Banku Światowego „Opłaty drogowe w miastach i między miastami: zarządzanie mobilnością i finansowanie infrastruktury w zmieniających się warunkach” (sierpień 2023 r.). To adaptacja oryginalnej pracy Banku Światowego. Poglądy i opinie wyrażone w adaptacji należą wyłącznie do jej autora i nie są popierane przez Bank Światowy. Tego tłumaczenia nie przygotował Bank Światowy i nie jest ono oficjalnym tłumaczeniem Banku Światowego. Bank Światowy nie odpowiada za treść ani błędy tego tłumaczenia.',
    legend: ['Centrum miasta', 'Gmina Sztokholm', 'Obszar 35 kilometrów kwadratowych'],
    categories: [
      'Tlenki azotu',
      'Tlenek węgla',
      'Pył do 10 mikrometrów',
      'Lotne związki organiczne',
      'Benzen',
      'Dwutlenek węgla',
    ],
    what: [
      'Opłata kongestyjna to należność za wjazd samochodem do zatłoczonej strefy lub przez pierścień wokół niej w określonych godzinach. Kamery odczytują tablice rejestracyjne, więc kierowcy nie muszą się zatrzymywać, żeby zapłacić. Londyn wprowadził opłatę 17 lutego 2003 r.: 5 funtów dziennie w dni robocze. Sztokholm od stycznia do lipca 2006 r. testował opłatę zależną od pory dnia i wprowadził ją na stałe w sierpniu 2007 r.',
    ],
    why: [
      'Według przeglądu opłat drogowych Banku Światowego w Londynie w pierwszym roku liczba samochodów na ulicach spadła o około jedną trzecią, a opóźnienia spowodowane korkami zmalały o 30%. W czasie sztokholmskiego testu ruch do centrum miasta i z centrum zmniejszył się o 20%, a korzystanie z transportu publicznego wzrosło o 7%; w późniejszym referendum opłatę poparło 53% głosujących. Singapurski system licencji na wjazd do strefy, wprowadzony w 1975 r., zmniejszył ruch w tej strefie o 45%.',
    ],
    read: [
      'Wynik zależy od tego, na co idą pieniądze i jaki wybór mają kierowcy. W roku budżetowym 2007/2008 ze 137 mln funtów dochodu netto z opłaty w Londynie 112 mln przeznaczono na lepszą komunikację autobusową. Pierwsze efekty mogą słabnąć: średnia prędkość w centrum Londynu wzrosła po wprowadzeniu opłaty z 14,6 do 17,6 km/h, a do 2006 r. spadła z powrotem do około 15 km/h. Według szacunku z przeglądu bez opłaty wynosiłaby około 11 km/h.',
    ],
    limits: [
      'Potrzebne są jasne zwolnienia, działająca kontrola i widoczne inwestycje w transport publiczny. Opłata bez alternatyw tylko przesuwa problem na granicę strefy.',
    ],
    sources: [
      {
        label:
          'Bank Światowy: „Opłaty drogowe w miastach i między miastami: zarządzanie mobilnością i finansowanie infrastruktury w zmieniających się warunkach”, sierpień 2023 r.',
        url: roadPdf,
      },
      {
        label:
          'Bank Światowy, katalog „Dokumenty i raporty”: strona raportu „Opłaty drogowe w miastach i między miastami”',
        url: 'https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099031724120560318',
      },
    ],
  },
  'low-emission-zones': {
    title: 'Strefy niskiej emisji',
    hook: grid['low-emission-zones'].fix,
    imageAlt: grid['low-emission-zones'].imageAlt,
    caption:
      'Średnie roczne stężenie dwutlenku azotu na stacjach, które weszły do raportu. To dane mapy 4 w opracowaniu „Stan jakości powietrza w Europie w 2024 r.”. Panel oznaczony 2022 ma 3 597 stacji: 833 o stężeniu nie wyższym niż 10 mikrogramów na metr sześcienny, 2 659 powyżej 10 i do 40 włącznie oraz 105 powyżej 40. Panel oznaczony 2023 ma 3 477 stacji: 952, 2 440 i 85 w tych samych klasach. Ramka biegnie od 25 stopni długości zachodniej do 45 stopni długości wschodniej i od 34 do 72 stopni szerokości północnej, więc stacje poza tą ramką nie są narysowane. Linia brzegowa pochodzi z Natural Earth.',
    credit:
      'Mapa przerysowana z rocznych statystyk sprawozdawczości o jakości powietrza Europejskiej Agencji Środowiska, czyli z pomiarów stojących za mapą 4 w opracowaniu „Stan jakości powietrza w Europie w 2024 r.”. Linia brzegowa: Natural Earth, domena publiczna.',
    legend: [
      'Nie wyżej niż 10 mikrogramów na metr sześcienny',
      'Powyżej 10 i do 40 włącznie',
      'Powyżej 40',
    ],
    what: [
      'W strefie niskiej emisji obowiązują ograniczenia dla najbardziej zanieczyszczających pojazdów. Zwykle pojazdy o wyższej emisji nie mogą do niej wjechać, a w niektórych strefach płacą za wjazd więcej. W Europie o wjeździe decyduje norma emisji spalin Euro, którą spełnia pojazd. Większość stref obejmuje autobusy miejskie, autokary i ciężarówki, niektóre także furgonetki, samochody osobowe i motocykle, a większość działa całą dobę przez cały rok.',
    ],
    why: [
      'Według Europejskiej Agencji Środowiska głównym źródłem dwutlenku azotu jest transport drogowy, który emituje go nisko nad ziemią w gęsto zaludnionych miejscach, a 96% mieszkańców miast w Unii Europejskiej jest narażonych na stężenia drobnych pyłów do 2,5 mikrometra powyżej wytycznych Światowej Organizacji Zdrowia. Międzynarodowa Rada ds. Czystego Transportu liczy w miastach europejskich ponad 320 stref niskiej emisji i przytacza badania, według których takie strefy ograniczyły emisję dwutlenku azotu z ruchu drogowego nawet o 46%.',
    ],
    read: [
      'Strefa działa tak dobrze, jak jej zasady i kontrole. Miasta potrzebują danych o tym, jakie pojazdy naprawdę jeżdżą po ich ulicach, oraz kamer odczytujących tablice rejestracyjne, by egzekwować zasady wjazdu. Międzynarodowa Rada ds. Czystego Transportu podkreśla też, że dobry transport publiczny, chodzenie i jazda na rowerze pomagają ludziom zrezygnować z zanieczyszczających pojazdów. Coraz więcej miast zaostrza zasady do stref zeroemisyjnych, do których mogą wjeżdżać tylko pojazdy elektryczne na baterie lub z wodorowymi ogniwami paliwowymi.',
    ],
    limits: [
      'Potrzebne są dane o pojazdach, sprawiedliwe zwolnienia oraz kamery lub kontrole. Strefa istniejąca tylko na papierze, bez kontroli, niewiele zmienia w powietrzu przy drodze.',
    ],
    sources: [
      {
        label:
          'Międzynarodowa Rada ds. Czystego Transportu: „Strefy niskiej emisji jako katalizator rozwoju infrastruktury transportu publicznego w miastach”, blog, 10 lipca 2024 r.',
        url: 'https://theicct.org/lez-a-catalyst-for-improving-transit-infrastructure-in-cities-jul24/',
      },
      {
        label: 'Europejska Agencja Środowiska: „Stan jakości powietrza w Europie w 2024 r.”',
        url: 'https://www.eea.europa.eu/en/analysis/publications/europes-air-quality-status-2024',
      },
    ],
    findZone: {
      label: 'Znajdź strefę',
      url: 'https://urbanaccessregulations.eu/low-emission-zones-main',
    },
  },
  'electric-buses': {
    title: 'Autobusy elektryczne',
    hook: grid['electric-buses'].fix,
    imageAlt: grid['electric-buses'].imageAlt,
    caption:
      'Sprzedaż autobusów elektrycznych według regionów w latach 2020–2025. Chiny wciąż sprzedają najwięcej, ale ich udział w słupku maleje, bo inne regiony rosną szybciej. Segmenty od dołu to Chiny, Europa, Stany Zjednoczone, Indie, Ameryka Łacińska i reszta świata. W 2025 r. jest to 40,1, 12,5, 1,8, 4,3, 3,1 i 6,1 tysiąca autobusów (razem 67,9 tysiąca). Udział Chin w słupku wynosi 86,3 procent w 2020 r. i 59,1 procent w 2025 r. Skala pionowa to tysiące autobusów.',
    credit:
      'Wykres przerysowany z danych Międzynarodowej Agencji Energetycznej (2026), „Sprzedaż autobusów elektrycznych według regionów, 2020–2025”. Kolorowy klucz na tej stronie jest adaptacją tamtego wykresu.',
    legend: ['Chiny', 'Europa', 'Stany Zjednoczone', 'Indie', 'Ameryka Łacińska', 'Reszta świata'],
    what: [
      'Autobusy elektryczne jeżdżą na bateriach ładowanych z sieci, głównie w zajezdniach. Według raportu Międzynarodowej Agencji Energetycznej „Globalne perspektywy pojazdów elektrycznych 2026” w 2025 r. modele bateryjne stanowiły 98% autobusów elektrycznych sprzedanych na świecie. Średni zasięg bateryjnych modeli osiągnął 360 km, co wystarcza autobusom miejskim, które zwykle pokonują 150–300 km dziennie.',
    ],
    why: [
      'Autobusy miejskie cały dzień jeżdżą tymi samymi zatłoczonymi trasami, więc zastąpienie silników diesla usuwa spaliny dokładnie tam, gdzie wiele osób czeka i chodzi. W 2025 r. sprzedaż sięgnęła prawie 70 tys., o 12% więcej niż w 2024 r. Na Chiny przypadło około 60% z nich, wobec prawie 100% w 2018 r., a niemal wszystkie nowe autobusy miejskie sprzedawane w tym kraju są elektryczne. W Europie sprzedano ponad 12 tys. autobusów elektrycznych, a w Unii Europejskiej modele bateryjne miały ponad 55% sprzedaży nowych autobusów miejskich. Santiago w Chile ma dziś największą flotę autobusów elektrycznych wśród miast poza Chinami.',
    ],
    read: [
      'Sprzedaż pokazuje, ile nowych autobusów kupiono w danym roku, łącznie z autobusami miejskimi i międzymiastowymi mającymi co najmniej 10 miejsc, więc różni się od liczby autobusów elektrycznych, które już jeżdżą. Autokary międzymiastowe trudniej zelektryfikować: w Chinach modele zeroemisyjne stanowiły w 2025 r. tylko około 10% ich sprzedaży. Program Narodów Zjednoczonych ds. Środowiska pomaga 16 krajom i miastom w Afryce, Azji, Ameryce Łacińskiej i na Karaibach przygotować się do niskoemisyjnego transportu publicznego, w tym autobusów elektrycznych.',
    ],
    limits: [
      'Potrzebne są ładowanie w zajezdniach, niezawodne dzienne rozkłady i sfinansowany plan wymiany floty. Kilka pilotażowych autobusów bez planu ładowania w zajezdniach utyka, gdy miasto próbuje zwiększyć skalę.',
    ],
    sources: [
      {
        label:
          'Międzynarodowa Agencja Energetyczna: „Globalne perspektywy pojazdów elektrycznych 2026”, rozdział „Trendy w innych rodzajach pojazdów elektrycznych”',
        url: 'https://www.iea.org/reports/global-ev-outlook-2026/trends-in-other-ev-modes',
      },
      {
        label: 'Program Narodów Zjednoczonych ds. Środowiska: „Autobusy elektryczne”',
        url: 'https://www.unep.org/topics/transport/electric-mobility/electric-buses',
      },
      {
        label: 'Międzynarodowa Agencja Energetyczna: „Globalne perspektywy pojazdów elektrycznych 2026”',
        url: 'https://www.iea.org/reports/global-ev-outlook-2026',
      },
    ],
  },
  "cool-roofs": {
    title: "Chłodne dachy",
    hook: "Chłodny dach odbija więcej ciepła słonecznego niż zwykły, więc budynek pod nim pozostaje chłodniejszy i zużywa mniej energii na klimatyzację, podaje Agencja Ochrony Środowiska Stanów Zjednoczonych.",
    imageAlt: "Białe schodkowe dachy domu na wybrzeżu Bermudów, zdjęcie z maja 1994 roku.",
    caption: "Białe schodkowe dachy domu na wybrzeżu Bermudów, zdjęcie z maja 1994 roku.",
    credit: "Zdjęcie: Acroterion, za pośrednictwem Wikimedia Commons, licencja Uznanie autorstwa na tych samych warunkach 3.0.",
    what: ["Chłodny dach pochłania i przekazuje budynkowi mniej ciepła słonecznego niż zwykły dach. Najważniejsza jego cecha, wysoki współczynnik odbicia światła słonecznego, czyli albedo, pokazuje, jaką część światła dach odsyła z powrotem. Pomaga też wysoka emisyjność cieplna, czyli zdolność oddawania ciepła, które dach pochłonął, zwłaszcza w ciepłym i słonecznym klimacie. Materiały na chłodne dachy istnieją dla dachów płaskich i spadzistych, na przykład membrany odbijające, jasne powłoki, dachówki i gonty."],
    why: ["W budynkach mieszkalnych bez klimatyzacji chłodne dachy mogą obniżać najwyższą temperaturę wewnątrz o 1,2 do 3,3 °C. W budynkach mieszkalnych z klimatyzacją chłodny dach może zmniejszać szczytowe zapotrzebowanie na chłodzenie o 11 do 27 procent. Chłodne dachy obniżają też temperaturę na zewnątrz budynków, co łagodzi efekt miejskiej wyspy ciepła. Jedno badanie w Wielkiej Brytanii wykazało, że chłodne dachy w całym mieście mogłyby zrównoważyć 18 procent zgonów z powodu upału związanych z efektem wyspy ciepła."],
    read: ["Zakres od 1,2 do 3,3 °C dotyczy budynków mieszkalnych bez klimatyzacji, i zakres od 11 do 27 procent budynków mieszkalnych z klimatyzacją. Lokalne przepisy i zachęty promują ich stosowanie. W Stanach Zjednoczonych wymogi dotyczące chłodnych dachów wchodzą w skład standardów budowlanych i energetycznych lub uchwał w co najmniej 13 miastach i hrabstwach, siedmiu stanach i Dystrykcie Kolumbii, według informacji Rady ds. Oceny Chłodnych Dachów zaktualizowanych w 2022 roku."],
    limits: ["Ponieważ chłodne dachy odbijają światło słoneczne, w zimnym klimacie mogą zwiększać zużycie energii na ogrzewanie zimą. Agencja opisuje ten efekt jako zwykle równoważony oszczędnościami na letnim chłodzeniu, i niskie zimowe słońce i krótkie dni zmniejszają go jeszcze bardziej. Chłodne dachy mogą wymagać okresowego czyszczenia, by utrzymać wysoki współczynnik odbicia, szczególnie na dachach płaskich. Właściciele budynków zyskują najwięcej, gdy poprawiają też izolację i szczelność powietrzną."],
    sources: [
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Wykorzystanie chłodnych dachów do ograniczania miejskich wysp ciepła",
        url: "https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands",
      },
    ],
  },
  "green-roofs": {
    title: "Zielone dachy",
    hook: "Zielony dach to warstwa żywych roślin na dachu, i Agencja Ochrony Środowiska Stanów Zjednoczonych podaje, że jego powierzchnia może być o około 31 °C chłodniejsza niż zwykłego dachu.",
    imageAlt: "Zielony dach ratusza w Chicago w Stanach Zjednoczonych, widok z góry, zdjęcie z 8 lipca 2008 roku.",
    caption: "Zielony dach ratusza w Chicago w Stanach Zjednoczonych, widok z góry, zdjęcie z 8 lipca 2008 roku.",
    credit: "Zdjęcie: TonyTheTiger, za pośrednictwem Wikimedia Commons, licencja Uznanie autorstwa na tych samych warunkach 3.0.",
    what: ["Zielony dach, czyli ogród na dachu, to warstwa roślinności uprawiana na dachu. Leży na barierze hydroizolacyjnej z warstwą drenażową i podłożem. Na dachach ekstensywnych rosną odporne rośliny w podłożu o głębokości od 5 do 10 centymetrów, dachy te są lekkie i po ukorzenieniu wymagają niewiele opieki. Dachy intensywne są bardziej złożone, mogą przypominać park z drzewami i wymagają mocniejszej konstrukcji oraz opieki. Zielony dach działa też jak bufor cieplny budynku: chłodzi go w ciepłą pogodę i ociepla w zimną."],
    why: ["Zielone dachy dają cień, odbierają ciepło z powietrza i obniżają temperaturę powierzchni dachu oraz otaczającego powietrza. Powierzchnia zielonego dachu może być o około 31 °C chłodniejsza niż zwykłego dachu, i pobliskie powietrze nawet o 11 °C chłodniejsze. W porównaniu ze zwykłymi dachami zielone mogą zmniejszać obciążenie chłodnicze budynku o 70 procent i obniżać temperaturę powietrza w pomieszczeniach o 15 °C. Zmniejszają też i spowalniają spływ wód opadowych, według agencji o 60 do 100 procent."],
    read: ["Administracja Służb Ogólnych Stanów Zjednoczonych zlicza ponad 80 budynków z zielonymi dachami o łącznej powierzchni około 20 hektarów. Wśród nich dach siedziby Straży Przybrzeżnej Stanów Zjednoczonych w Waszyngtonie, z około 5,2 hektara dachu z roślinnością, który według administracji ma wydłużyć życie membrany hydroizolacyjnej dwa lub trzy razy. Zakres spływu zależy od wzorców opadów, i zielony dach zatrzymuje więcej wody przy niewielkim deszczu niż przy ulewie."],
    limits: ["Zielone dachy często kosztują na początku więcej niż zwykłe i wymagają konstrukcji zdolnej udźwignąć ich ciężar, warstwy drenażowej i regularnej opieki, takiej jak nawadnianie, odchwaszczanie i dosadzanie roślin. Część kosztów właściciele mogą odzyskać dzięki niższym rachunkom za energię, niższym opłatom za wody opadowe i dłuższemu życiu dachu. Liczby budynków i powierzchnie dotyczą budynków rządu federalnego Stanów Zjednoczonych."],
    sources: [
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Wykorzystanie zielonych dachów do ograniczania miejskich wysp ciepła",
        url: "https://www.epa.gov/heatislands/using-green-roofs-reduce-heat-islands",
      },
      {
        label: "Administracja Służb Ogólnych Stanów Zjednoczonych: Przykłady dachów z roślinnością",
        url: "https://www.gsa.gov/governmentwide-initiatives/federal-highperformance-buildings/highperformance-building-clearinghouse/water/planted-roof/case-studies",
      },
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Najlepsza praktyka zarządzania wodami opadowymi: zielone dachy, grudzień 2021",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-green-roofs.pdf",
      },
    ],
  },
  "permeable-pavement": {
    title: "Nawierzchnia przepuszczalna",
    hook: "Nawierzchnia przepuszczalna przepuszcza deszcz przez powierzchnię do warstw gruntu i żwiru pod spodem, i Agencja Ochrony Środowiska Stanów Zjednoczonych zalicza ją do rodzajów zielonej infrastruktury.",
    imageAlt: "Pokaz, w którym woda wylana na płytę porowatej nawierzchni przesiąka przez nią, zdjęcie z 7 października 2012 roku.",
    caption: "Pokaz, w którym woda wylana na płytę porowatej nawierzchni przesiąka przez nią, zdjęcie z 7 października 2012 roku.",
    credit: "Zdjęcie: Lombroso, za pośrednictwem Wikimedia Commons, licencja Uznanie autorstwa na tych samych warunkach 3.0.",
    what: ["Nawierzchnie przepuszczalne magazynują lub wsiąkają wodę deszczową tam, gdzie spadła. Warstwą wierzchnią może być beton przepuszczalny, asfalt porowaty lub przepuszczalna betonowa kostka zazębiająca się. Woda opadowa wsiąka na powierzchni i gromadzi się w warstwach tłucznia i gruntu poniżej. Następnie woda albo wsiąka w ziemię, albo odpływa przez drenaż. Asfalt porowaty i beton przepuszczalny to odmiany zwykłego asfaltu i betonu z mniejszą ilością drobnych cząstek, i między kostkami zostawia się małe szczeliny wypełnione drobnym kruszywem."],
    why: ["Nawierzchnie przepuszczalne mogą na ogół zastępować tradycyjną nawierzchnię na drogach lokalnych, chodnikach, podjazdach, parkingach i ścieżkach rowerowych. Przyjmując deszcz na miejscu, zmniejszają stawanie wody na nawierzchni i lokalne podtopienia oraz mogą ograniczać potrzebę stosowania zwykłych rur drenażowych i zbiorników. Zimą zazwyczaj potrzebują mniej soli drogowej i środków odladzających, ponieważ szybkie odprowadzanie wody z powierzchni zmniejsza zamarzające kałuże i gołoledź. Przy właściwym wykonaniu nawierzchnia przepuszczalna może służyć od 20 do 40 lat."],
    read: ["Agencja opisuje nawierzchnię przepuszczalną jako środek kontroli wód opadowych: warstwa wierzchnia, przez którą przechodzi woda, i zbiornik z tłucznia, w którym jest ona magazynowana. Gdy spadek terenu przekracza 2 procent, podbudowa pod nawierzchnią może wymagać tarasowania, aby zapobiec przepływowi wody opadowej przez konstrukcję nawierzchni. Asfalt porowaty i beton przepuszczalny mają nieco bardziej szorstką powierzchnię niż zwykłe i dają pojazdom oraz pieszym lepszą przyczepność."],
    limits: ["Głównym problemem utrzymania jest zatykanie drobnymi cząstkami, ponieważ obniża ono szybkość, z jaką woda przechodzi przez nawierzchnię. Okresowe usuwanie drobnych osadów z powierzchni utrzymuje przepuszczalność nawierzchni, i miejsc z dużym ładunkiem osadów lepiej unikać. Nawierzchnie przepuszczalne są słabsze od zwykłego asfaltu i mogą być nieodpowiednie dla dróg o dużym i szybkim ruchu, ekstremalnych obciążeń oraz miejsc, w których obchodzi się z substancjami niebezpiecznymi lub możliwe są wycieki. Wytyczne opisują praktykę w Stanach Zjednoczonych."],
    sources: [
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Rodzaje zielonej infrastruktury",
        url: "https://www.epa.gov/green-infrastructure/types-green-infrastructure",
      },
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Najlepsza praktyka zarządzania wodami opadowymi: nawierzchnie przepuszczalne, grudzień 2021",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-permeable-pavements.pdf",
      },
    ],
  },
  "urban-tree-canopy": {
    title: "Miejski parasol drzew",
    hook: "Drzewa i inna roślinność chłodzą miejskie powietrze cieniem i parowaniem, i przegląd 308 badań wykazał, że lasy miejskie były średnio o 1,6 °C chłodniejsze niż obszary miejskie bez zieleni.",
    imageAlt: "Drzewa w jesiennych barwach wzdłuż bulwaru Unter den Linden w Berlinie, przy drodze stoi zabytkowy pomnik.",
    caption: "Drzewa w jesiennych barwach wzdłuż bulwaru Unter den Linden w Berlinie, przy drodze stoi zabytkowy pomnik.",
    credit: "Zdjęcie: Jochen Sievert, za pośrednictwem Wikimedia Commons, licencja Uznanie autorstwa na tych samych warunkach 4.0.",
    what: ["Drzewa i roślinność, taka jak krzewy, krzewinki i wysokie trawy, obniżają temperaturę powierzchni i powietrza cieniem i ewapotranspiracją. W ewapotranspiracji rośliny pobierają wodę korzeniami i odparowują ją liśćmi, co zużywa ciepło z powietrza. Chłodzenie pochodzi też z otaczającej gleby i z deszczu zatrzymanego na liściach. Agencja Ochrony Środowiska Stanów Zjednoczonych przedstawia drzewa i roślinność jako prosty i skuteczny sposób ograniczania wysp ciepła."],
    why: ["Drzewa zacieniające budynki zmniejszają zapotrzebowanie na klimatyzację, i parki miejskie i leśnictwo mogą zmniejszać zapotrzebowanie pobliskich budynków na energię o 10 procent. Wysoka i gęsta roślinność przydrożna może zmniejszać zanieczyszczenia po zawietrznej stronie o około 30 procent. Drzewa miejskie mogą ograniczać spływ wód opadowych, pochłaniając od 15 do 27 procent rocznych opadów. Pokrywa drzew wiąże się też z mniejszą liczbą zgonów z powodu upału: według jednej analizy wzrost pokrycia drzewami o 10 procent oznaczałby około 50 zgonów mniej rocznie w Salt Lake City w stanie Utah i 3 800 mniej w Nowym Jorku."],
    read: ["Ochłodzenie o 1,6 °C jest średnią z 308 badań. Agencja podaje, że części miast z mniejszą ilością roślinności są gorętsze, i w jednym badaniu mieszkało w nich więcej osób o niższych dochodach. Agencja zalicza poprawę równości do korzyści z drzew i roślinności."],
    limits: ["Szacunki mniejszej liczby zgonów pochodzą z jednej analizy modelowej dla miast w Stanach Zjednoczonych, czyli Salt Lake City i Nowy Jork. Większość procentów agencja sformułowała jako to, co drzewa i roślinność mogą osiągnąć, na przykład „może zmniejszać” lub „około”, więc pokazują one możliwą wielkość efektu."],
    sources: [
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Korzyści z drzew i roślinności",
        url: "https://www.epa.gov/heatislands/benefits-trees-and-vegetation",
      },
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Wykorzystanie drzew i roślinności do ograniczania miejskich wysp ciepła",
        url: "https://www.epa.gov/heatislands/using-trees-and-vegetation-reduce-heat-islands",
      },
    ],
  },
  "rain-gardens-bioswales": {
    title: "Ogrody deszczowe i bioswale",
    hook: "Ogrody deszczowe i bioswale to obsadzone niecki i kanały, które przyjmują spływ z ulic i dachów i filtrują go przez glebę, i Agencja Ochrony Środowiska Stanów Zjednoczonych zalicza je do rodzajów zielonej infrastruktury.",
    imageAlt: "Dwa bioswale obok domów, bliższy jeszcze w budowie, dalszy już zadomowiony.",
    caption: "Dwa bioswale obok domów, bliższy jeszcze w budowie, dalszy już zadomowiony.",
    credit: "Zdjęcie: Duk (angielska Wikipedia), za pośrednictwem Wikimedia Commons, domena publiczna.",
    what: ["Obszar bioretencji to zaprojektowane zagłębienie, które zbiera wodę deszczową z dachów, chodników i ulic. Woda stoi w nim krótko, po czym wsiąka w ziemię lub odpływa przez drenaż. Ogród deszczowy to mniejsza, płytsza i mniej rozbudowana odmiana: obsadzone zagłębienie, które zbiera spływ wód opadowych i filtruje go przez mieszaninę gleby, piasku lub żwiru. Bioswale to otwarte kanały, w których roślinność lub ściółka spowalnia, filtruje i oczyszcza wodę opadową, gdy płynie płytkim kanałem lub rowem."],
    why: ["Ogrody deszczowe filtrują wody opadowe, zmniejszają szczytowe przepływy w sieciach kanalizacyjnych poniżej i usuwają zanieczyszczenia przez filtrację i pobieranie przez rośliny. Pasują do małych terenów w gęstej zabudowie miejskiej i mieszczą się na wyspach parkingowych, wzdłuż dróg i na skrzyżowaniach. Rowy są liniowe, więc dobrze nadają się do oczyszczania wód opadowych z autostrad i dróg osiedlowych."],
    read: ["Obszar bioretencji zwykle potrzebuje powierzchni równej od 5 do 10 procent powierzchni utwardzonej, z której spływa do niego woda. Ogrody deszczowe filtrują wodę z małych i średnich deszczy, i wodę z większych zwykle kieruje się obok nich do większego urządzenia lub do kanalizacji deszczowej, przewidując przelew dla zbyt dużych przepływów. Rowy działają najlepiej na łagodnych spadkach od 1 do 2 procent, ponieważ na stromszych woda przyspiesza i powoduje erozję."],
    limits: ["Wierzchnie warstwy gleby w ogrodzie deszczowym mogą z czasem się zatykać tam, gdzie jest zbyt dużo osadów. Bioretencja wymaga pielęgnacji roślin, na przykład kontroli wlotów po pierwszym deszczu sezonu, usuwania śmieci i wymiany górnej warstwy materiału filtrującego, jeśli woda stoi dłużej niż 48 godzin. Rowy potrzebują stosunkowo dużej powierzchni przepuszczalnej, więc mogą być słabo dopasowane do gęstej zabudowy miejskiej. Wytyczne opisują praktykę w Stanach Zjednoczonych."],
    sources: [
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Rodzaje zielonej infrastruktury",
        url: "https://www.epa.gov/green-infrastructure/types-green-infrastructure",
      },
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Najlepsza praktyka zarządzania wodami opadowymi: bioretencja (ogrody deszczowe), grudzień 2021",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-bioretention-rain-gardens.pdf",
      },
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Najlepsza praktyka zarządzania wodami opadowymi: rowy trawiaste, grudzień 2021",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-grassed-swales.pdf",
      },
    ],
  },
};
