import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'Czym to jest',
  why: 'Dlaczego to ważne',
  how: 'Jak czytać mapę',
  limits: 'Ograniczenia',
};

const mine = {
  operating: '#b2182b',
  proposed: '#0072b2',
  paused: '#8c8c8c',
  closed: '#e69f00',
};

const reserve = ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000', '#d9d9d9'];

const critical = ['#dadaeb', '#bcbddc', '#9e9ac8', '#6a51a3', '#3f007d', '#f4f3f0'];

const rare = ['#b2e2cc', '#66c2a4', '#238b45', '#00441b', '#f4f3f0'];

const lithium = ['#c6dbef', '#6baed6', '#2171b5', '#08306b', '#bdbdbd', '#f4f3f0'];

export const pl: Record<string, MapCopy> = {
  'coal-mines': {
    title: 'Kopalnie węgla',
    cardMeta: 'Global Energy Monitor · około 7 000 kopalń · wydanie z sierpnia 2026',
    hook: 'Czynne, planowane i niedawno zamknięte kopalnie węgla na świecie, z ich statusem, właścicielami i wydobyciem.',
    description:
      'Globalny rejestr kopalń węgla, prowadzony przez organizację badawczą Global Energy Monitor, opisuje kopalnie węgla na całym świecie. Jego strona podaje około 7 000 kopalń w 70 krajach i około 5 300 właścicieli. Według danych dla poszczególnych kopalń za 2025 r. wydobycie węgla w czynnych kopalniach wyniosło około 9,1 miliarda ton. Wydanie z sierpnia 2026 r. to druga wersja zbioru danych opublikowanego po raz pierwszy w maju 2026 r.; dane są aktualizowane w drugim kwartale każdego roku.',
    whyOnShelf:
      'Kopalnie węgla przesądzają o wydobyciu na dziesięciolecia. Global Energy Monitor liczy 835 projektów nowych kopalń o łącznej zdolności 2 521 milionów ton rocznie, o około 11% więcej niż w 2024 r. Z tej zdolności 781 milionów ton rocznie jest już w budowie lub w ruchu próbnym. Same planowane kopalnie mogłyby emitować 16,8 miliona ton metanu rocznie, oprócz dwutlenku węgla uwalnianego przy spalaniu węgla.',
    howToRead:
      'Każdy punkt to kopalnia, a kolor oznacza jej status: czynna, planowana, wstrzymana lub zamrożona, zamknięta lub anulowana. Rejestr obejmuje czynne, nieczynne i planowane kopalnie o zdolności co najmniej 1 miliona ton rocznie oraz kopalnie zamknięte od 2015 r.; w Chinach próg wynosi 0,45 miliona ton rocznie. Chiny, Indie, Australia, Rosja i Republika Południowej Afryki mają ponad 90% planowanej zdolności, a same Chiny 1 321 milionów ton rocznie, więcej niż cała reszta świata razem. Węgiel energetyczny dla elektrowni stanowi około 70% planowanej zdolności; większość reszty to węgiel dla hutnictwa.',
    caveats:
      'Małe kopalnie trafiają do rejestru tylko wtedy, gdy badacze zdążyli je dodać. Wydobycie podawane jest w miarę możliwości dla węgla handlowego, a gdy brak aktualnych danych o wydobyciu, zamiast niego podaje się zdolność kopalni. Gdy dokładne położenie kopalni jest nieznane, punkt stoi w najbliższym przybliżonym miejscu. Planowana kopalnia może nigdy nie powstać.',
    licenseNote: realMapCredit('pl', 'coal-mines') ?? '',
    imageAlt:
      'Mapa świata kopalń węgla jako kolorowe punkty na jasnym lądzie: czerwone czynne, niebieskie planowane, szare wstrzymane lub zamrożone, pomarańczowe zamknięte lub anulowane',
    caption: 'Kopalnie węgla na świecie według statusu, wydanie z sierpnia 2026 r.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Legenda mapy',
        items: [
          { swatch: mine.operating, label: 'Kolor czerwony oznacza kopalnie czynne' },
          { swatch: mine.proposed, label: 'Niebieski oznacza planowane' },
          { swatch: mine.paused, label: 'Szary oznacza wstrzymane lub zamrożone' },
          { swatch: mine.closed, label: 'Pomarańczowy oznacza zamknięte lub anulowane' },
        ],
      },
    ],
    gridSource: cite(
      'Global Energy Monitor, Globalny rejestr kopalń węgla',
      'https://globalenergymonitor.org/projects/global-coal-mine-tracker',
    ),
    sources: [
      cite(
        'Global Energy Monitor: Globalny rejestr kopalń węgla (Global Coal Mine Tracker)',
        'https://globalenergymonitor.org/projects/global-coal-mine-tracker',
      ),
      cite(
        'Global Energy Monitor: publiczna licencja Creative Commons Uznanie autorstwa 4.0 Międzynarodowe (Creative Commons Attribution 4.0 International Public License)',
        'https://globalenergymonitor.org/creative-commons-license',
      ),
    ],
  },
  'coal-reserves': {
    title: 'Zasoby węgla',
    cardMeta: 'Amerykańska Agencja Informacji Energetycznej · zasoby udokumentowane · 2023',
    hook: 'Ile węgla każdy kraj zalicza do zasobów udokumentowanych, czyli węgla, który znane złoża mogą dać przy dzisiejszych cenach i technologiach.',
    description:
      'Amerykańska Agencja Informacji Energetycznej, urząd statystyczny Departamentu Energii Stanów Zjednoczonych, publikuje międzynarodowe dane energetyczne, w tym udokumentowane zasoby węgla każdego kraju w tonach. Our World in Data udostępnia ten szereg za lata 2008–2023, ostatnio zaktualizowany 30 czerwca 2026 r. Zasoby udokumentowane to ilości, które według danych geologicznych i inżynierskich można w przyszłości wydobyć ze znanych złóż przy istniejących warunkach ekonomicznych i eksploatacyjnych.',
    whyOnShelf:
      'Zasoby pokazują, ile węgla kraj może jeszcze wydobyć i spalić. W 2023 r. największe zasoby udokumentowane miały Stany Zjednoczone (około 248 miliardów ton), Rosja (około 162 miliardów), Chiny (około 157 miliardów), Australia (około 150 miliardów) i Indie (około 128 miliardów). Razem te pięć krajów miało około 72% światowej sumy, wynoszącej około 1 166 miliardów ton.',
    howToRead:
      'Każdy kraj jest zabarwiony według udokumentowanych zasobów węgla w ostatnim dostępnym roku, w tonach. Im ciemniejszy kolor, tym większe zasoby. Kraje, które nie zgłaszają zasobów, mają najjaśniejszy odcień.',
    caveats:
      'Kraje same szacują swoje zasoby, więc jakość szacunków i częstotliwość ich aktualizacji są różne. Wielkość zasobów zmienia się wraz z cenami, technikami wydobycia i krajowymi zasadami sprawozdawczości. Zasoby geologiczne węgla, obejmujące także złoża, których wydobycie jest jeszcze nieopłacalne, są większe niż zasoby udokumentowane.',
    licenseNote: realMapCredit('pl', 'coal-reserves') ?? '',
    imageAlt:
      'Mapa świata udokumentowanych zasobów węgla w 2023 r.: jasny beż przy małych zasobach lub ich braku, ciemna czerwień przy największych, szary tam, gdzie brak danych',
    caption: 'Udokumentowane zasoby węgla według krajów, 2023 r.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Udokumentowane zasoby węgla',
        items: [
          { swatch: reserve[0], label: 'Poniżej 2 miliardów ton lub brak zasobów' },
          { swatch: reserve[1], label: 'Od 2 do 5 miliardów' },
          { swatch: reserve[2], label: 'Od 5 do 10 miliardów' },
          { swatch: reserve[3], label: 'Od 10 do 20 miliardów' },
          { swatch: reserve[4], label: 'Od 20 do 50 miliardów' },
          { swatch: reserve[5], label: 'Od 50 do 100 miliardów' },
          { swatch: reserve[6], label: '100 miliardów ton i więcej' },
          { swatch: reserve[7], label: 'Szary: brak danych' },
        ],
      },
    ],
    gridSource: cite(
      'Amerykańska Agencja Informacji Energetycznej, za pośrednictwem Our World in Data',
      'https://ourworldindata.org/grapher/fossil-fuels?fuel=coal&metric=reserves&per_capita=total',
    ),
    sources: [
      cite(
        'Our World in Data: zasoby węgla, dane Amerykańskiej Agencji Informacji Energetycznej (Coal reserves)',
        'https://ourworldindata.org/grapher/fossil-fuels?fuel=coal&metric=reserves&per_capita=total',
      ),
      cite(
        'Amerykańska Agencja Informacji Energetycznej: międzynarodowe dane energetyczne, zasoby węgla i koksu (International energy data: coal and coke reserves)',
        'https://www.eia.gov/international/data/world/coal-and-coke/coal-and-coke-reserves',
      ),
      cite(
        'Amerykańska Agencja Informacji Energetycznej: prawa autorskie i ponowne wykorzystanie (Copyrights and reuse)',
        'https://www.eia.gov/about/copyrights_reuse.php',
      ),
    ],
  },
  'critical-mineral-production': {
    title: 'Produkcja minerałów krytycznych',
    cardMeta: 'Służba Geologiczna Stanów Zjednoczonych · wydobycie i przetwarzanie · 2023',
    hook: 'Kraje, które w 2023 r. dały co najmniej 5% światowej produkcji kluczowych minerałów, w kopalni i w zakładzie przetwórczym.',
    description:
      'W sierpniu 2025 r. Służba Geologiczna Stanów Zjednoczonych, agencja naukowa Departamentu Spraw Wewnętrznych Stanów Zjednoczonych, opublikowała globalne mapy produkcji minerałów krytycznych w 2023 r. Pokazują one każdy kraj, który dał 5% lub więcej światowej produkcji danego minerału, najpierw na etapie wydobycia, dla 29 minerałów, a potem na etapie przetwarzania, dla 18 minerałów, gdy rudy rafinuje się i wytapia do tlenków, metali lub stopów. Dane o produkcji pochodzą z rocznika Służby „Przegląd surowców mineralnych 2025”.',
    whyOnShelf:
      'Kilka krajów dominuje. Chiny wydobywały co najmniej 5% światowej produkcji 18 z 29 minerałów, a za nimi Republika Południowej Afryki (10), Australia (8), Rosja (8), Stany Zjednoczone (8) i Brazylia (7). W przetwarzaniu prowadzą Chiny z 14 z 18, a dalej Japonia (7), Rosja (6), Kanada (4) i Republika Korei (4). Udział Chin rośnie od kopalni do zakładu: w przypadku kobaltu z 1% wydobycia do 80% przetwarzania, a aluminium z 21% do 59%.',
    howToRead:
      'Mapa pokazuje etap wydobycia. Im ciemniejszy kraj, tym więcej minerałów, których wydobywał co najmniej 5% światowej produkcji. Handel pokazuje, dokąd ruda trafia dalej: w 2023 r. Australia dała 33% światowego eksportu rud i koncentratów metali pod względem wartości, a za nią Brazylia (11%), Chile i Peru (po 9%) oraz Republika Południowej Afryki (5%), podczas gdy Chiny kupiły 64% importu.',
    caveats:
      'Niektóre metale rzadkie, takie jak gal, german i ind, odzyskuje się jako produkty uboczne przetwarzania rud miedzi oraz ołowiu i cynku, dlatego pojawiają się tylko na etapie przetwarzania. Część danych o przetwarzaniu za 2023 r. oszacowano na podstawie lat wcześniejszych. Jasny kraj może wydobywać dany minerał w mniejszych ilościach. Mapy powstały, gdy oficjalna amerykańska lista minerałów krytycznych z 2022 r. liczyła 50 pozycji; ostateczna lista z 2025 r., opublikowana 7 listopada 2025 r., liczy 60. Mapy obejmują też kadm, miedź, złoto i molibden.',
    licenseNote: realMapCredit('pl', 'critical-mineral-production') ?? '',
    imageAlt:
      'Mapa świata krajów, które w 2023 r. wydobywały co najmniej 5% światowej produkcji wybranych minerałów: jasnoliliowe przy jednym minerale i ciemnofioletowe przy największej liczbie',
    caption:
      'Kraje, które wydobywały co najmniej 5% światowej produkcji jednego lub więcej wybranych minerałów, 2023 r.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Liczba minerałów, których kraj wydobywał co najmniej 5% światowej produkcji',
        items: [
          { swatch: critical[0], label: '1' },
          { swatch: critical[1], label: 'Od 2 do 3' },
          { swatch: critical[2], label: 'Od 4 do 5' },
          { swatch: critical[3], label: 'Od 6 do 10' },
          { swatch: critical[4], label: 'Od 11 do 18' },
          { swatch: critical[5], label: 'Bladoszary: żaden' },
        ],
      },
    ],
    gridSource: cite(
      'Służba Geologiczna Stanów Zjednoczonych, globalne mapy produkcji minerałów krytycznych w 2023 r.',
      'https://pubs.usgs.gov/publication/fs20253038',
    ),
    sources: [
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: globalne mapy produkcji minerałów krytycznych w 2023 r., arkusz informacyjny, sierpień 2025 (Global Maps of Critical Mineral Production in 2023, Fact Sheet 2025–3038)',
        'https://pubs.usgs.gov/publication/fs20253038',
      ),
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: „Przegląd surowców mineralnych 2025” (Mineral Commodity Summaries 2025)',
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'Dziennik Federalny Stanów Zjednoczonych: ostateczna lista minerałów krytycznych na 2025 r., 7 listopada 2025 (Federal Register: Final 2025 List of Critical Minerals)',
        'https://www.federalregister.gov/documents/2025/11/07/2025-19813/final-2025-list-of-critical-minerals',
      ),
    ],
  },
  'rare-earths': {
    title: 'Metale ziem rzadkich',
    cardMeta: 'Służba Geologiczna Stanów Zjednoczonych · wydobycie i zasoby · 2024',
    hook: 'Gdzie wydobywa się metale ziem rzadkich, z których powstają magnesy trwałe i katalizatory, i jak duże są znane zasoby.',
    description:
      'Rozdział o metalach ziem rzadkich w „Przeglądzie surowców mineralnych 2025”, roczniku Służby Geologicznej Stanów Zjednoczonych, szacuje światowe wydobycie na około 376 000 ton w przeliczeniu na tlenki metali ziem rzadkich w 2023 r. i około 390 000 ton w 2024 r. Przeliczenie na tlenki metali ziem rzadkich to wspólna jednostka, która pozwala sumować różne pierwiastki tej grupy. Światowe zasoby przekraczają 90 milionów ton. Zestawienie obejmuje lantanowce i itr, a pomija większość skandu.',
    whyOnShelf:
      'Metale ziem rzadkich trafiają do magnesów trwałych, katalizatorów, ceramiki i szkła, stopów oraz proszków polerskich. Kwota wydobycia Chin wzrosła z 255 000 do 270 000 ton, około 69% światowej sumy w 2024 r., a Chiny mają też największe zasoby, 44 miliony ton. Stany Zjednoczone wyprodukowały w 2024 r. około 45 000 ton w koncentratach mineralnych, a mimo to około 80% zużywanych związków i metali ziem rzadkich pochodziło z importu. W latach 2020–2023 70% tego importu przypadło na Chiny, 13% na Malezję, 6% na Japonię i 5% na Estonię.',
    howToRead:
      'Mapa pokazuje szacowane wydobycie w 2024 r., w tonach w przeliczeniu na tlenki metali ziem rzadkich. Im ciemniejszy kolor, tym większe wydobycie. Po Chinach największymi producentami były Stany Zjednoczone, Mjanma (31 000 ton) oraz Australia, Nigeria i Tajlandia (po 13 000 ton). Brazylia ma drugie co do wielkości zasoby, 21 milionów ton, ale w 2024 r. wydobyła tylko 20 ton.',
    caveats:
      'Liczba dla Chin to oficjalna kwota wydobycia, więc brakuje w niej wydobycia nieudokumentowanego. Wydobycie Australii, Mjanmy, Madagaskaru, Malezji, Nigerii, Tajlandii i Wietnamu oszacowano na podstawie chińskich danych o imporcie. W Stanach Zjednoczonych z recyklingu baterii, magnesów trwałych i świetlówek odzyskiwano tylko ograniczone ilości metali ziem rzadkich.',
    licenseNote: realMapCredit('pl', 'rare-earths') ?? '',
    imageAlt:
      'Mapa świata szacowanego wydobycia metali ziem rzadkich w 2024 r.: jasnozielone kraje przy małym wydobyciu i ciemnozielone przy największym, Chiny najciemniejsze',
    caption: 'Szacowane wydobycie metali ziem rzadkich według krajów, 2024 r.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Wydobycie w 2024 r., tony w przeliczeniu na tlenki metali ziem rzadkich',
        items: [
          { swatch: rare[0], label: 'Od 1 do 999' },
          { swatch: rare[1], label: 'Od 1 000 do 9 999' },
          { swatch: rare[2], label: 'Od 10 000 do 49 999' },
          { swatch: rare[3], label: '50 000 i więcej' },
          { swatch: rare[4], label: 'Bladoszary: brak zgłoszonego wydobycia' },
        ],
      },
    ],
    gridSource: cite(
      'Służba Geologiczna Stanów Zjednoczonych, statystyki i informacje o metalach ziem rzadkich',
      'https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information',
    ),
    sources: [
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: statystyki i informacje o metalach ziem rzadkich (Rare Earths Statistics and Information)',
        'https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information',
      ),
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: „Przegląd surowców mineralnych 2025”, rozdział o metalach ziem rzadkich (Mineral Commodity Summaries 2025, Rare Earths)',
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: zbiór danych do „Przeglądu surowców mineralnych 2025” (Mineral Commodity Summaries 2025 Data Release)',
        'https://www.sciencebase.gov/catalog/item/677eaf95d34e760b392c4970',
      ),
    ],
  },
  lithium: {
    title: 'Lit',
    cardMeta: 'Służba Geologiczna Stanów Zjednoczonych · wydobycie i zasoby · 2024',
    hook: 'Gdzie wydobywa się lit, lekki metal akumulatorów, i jak duże są znane zasoby.',
    description:
      'Rozdział o licie w „Przeglądzie surowców mineralnych 2025”, roczniku Służby Geologicznej Stanów Zjednoczonych, szacuje, że światowa produkcja litu bez Stanów Zjednoczonych wzrosła o 18%, do około 240 000 ton w przeliczeniu na zawartość litu w 2024 r., z 204 000 ton w 2023 r. Światowe zasoby udokumentowane wynoszą około 30 milionów ton, a zasoby zmierzone i wskazane łącznie około 115 milionów ton.',
    whyOnShelf:
      'Akumulatory odpowiadały według szacunków za 87% światowego zużycia litu: do pojazdów elektrycznych, przenośnej elektroniki, elektronarzędzi i magazynów energii w sieciach. Światowe zużycie w 2024 r. oszacowano na 220 000 ton, o 29% więcej niż w 2023 r.',
    howToRead:
      'Mapa pokazuje szacowane wydobycie w 2024 r., w tonach zawartości litu. Im ciemniejszy kolor, tym większe wydobycie. Prowadziła Australia z około 88 000 ton, a dalej Chile (49 000), Chiny (41 000), Zimbabwe (22 000) i Argentyna (18 000). Dane o wydobyciu w Stanach Zjednoczonych są utajnione, by chronić dane firm. Największe zasoby ma Chile, 9,3 miliona ton.',
    caveats:
      'Ceny mocno się wahają. Po wysokich cenach od 2021 r. do początku 2023 r. średnia cena węglanu litu w Stanach Zjednoczonych w kontraktach stałych spadła do 14 000 dolarów za tonę w 2024 r., o 66% mniej niż w 2023 r. Szacunki zasobów rosną wraz z postępem poszukiwań, a dane o zasobach udokumentowanych są korygowane na podstawie raportów firm i rządów.',
    licenseNote: realMapCredit('pl', 'lithium') ?? '',
    imageAlt:
      'Mapa świata szacowanego wydobycia litu w 2024 r.: jasnoniebieskie kraje przy mniejszym wydobyciu i ciemnoniebieskie przy największym, Stany Zjednoczone średnioszare',
    caption: 'Szacowane wydobycie litu według krajów, 2024 r.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Wydobycie w 2024 r., tony zawartości litu',
        items: [
          { swatch: lithium[0], label: 'Poniżej 5 000' },
          { swatch: lithium[1], label: 'Od 5 000 do 19 999' },
          { swatch: lithium[2], label: 'Od 20 000 do 49 999' },
          { swatch: lithium[3], label: '50 000 i więcej' },
          { swatch: lithium[4], label: 'Średnioszary: dane utajnione (Stany Zjednoczone)' },
          { swatch: lithium[5], label: 'Bladoszary: brak zgłoszonego wydobycia' },
        ],
      },
    ],
    gridSource: cite(
      'Służba Geologiczna Stanów Zjednoczonych, statystyki i informacje o licie',
      'https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information',
    ),
    sources: [
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: statystyki i informacje o licie (Lithium Statistics and Information)',
        'https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information',
      ),
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: „Przegląd surowców mineralnych 2025”, rozdział o licie (Mineral Commodity Summaries 2025, Lithium)',
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'Służba Geologiczna Stanów Zjednoczonych: zbiór danych do „Przeglądu surowców mineralnych 2025” (Mineral Commodity Summaries 2025 Data Release)',
        'https://www.sciencebase.gov/catalog/item/677eaf95d34e760b392c4970',
      ),
    ],
  },
};
