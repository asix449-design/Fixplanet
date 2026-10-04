import type { ForestsPage } from './forests';

export const pl: ForestsPage = {
  metaTitle: 'Lasy · Fix Planet',
  metaDescription:
    'Lasy: czym są, jak satelita widzi korony, rekonstrukcje dawnych krajobrazów i opublikowane liczby FAO oraz Global Forest Watch.',
  eyebrow: 'Lasy Ziemi',
  title: 'Lasy',
  hubLead: [
    'Las to ekosystem, w którym dominują drzewa. FAO traktuje las jako klasę użytkowania ziemi: około 4,14 miliarda hektarów, mniej więcej trzecia część lądów.',
    'Lasy magazynują węgiel, uczestniczą w obiegu wody i dają schronienie większości gatunków lądowych. Poniżej: zieleń koron z kosmosu, kilka rekonstrukcji dawniejszych krajobrazów i trzy ścieżki dalej. Każda mapa ma nazwany zbiór danych i datę.',
  ],
  choosePanel: 'Wybierz półkę',
  heroNote:
    'Liczby ze źródłami: powierzchnia lasu, lasy pierwotne, las sadzony, węgiel, strata netto, utrata tropikalnego lasu pierwotnego i liczba drzew.',
  heroSources: 'Źródła i definicje',
  filterAria: 'Działy Lasów',
  back: 'Lasy',
  tiles: {
    satellite: 'Lipcowa zieleń koron z kosmosu, 2001–2025.',
    history: 'Roślinność epoki lodowej, biomy i ziemia po ludziach.',
    numbers: 'Definicje, źródła i reszta opublikowanego zestawu.',
    outlook: 'Długi widok, lata, które da się zmierzyć, i trzy możliwe ścieżki.',
  },
  panels: {
    satellite: 'Epoka satelitarna',
    history: 'Rekonstrukcje',
    numbers: 'Liczby',
    outlook: 'Trend i przyszłości',
  },
  leads: {
    satellite: [
      'Korona lasu to zwarty okap liści i igieł. Satelity nie liczą hektarów FAO: mierzą, jak zielona jest powierzchnia. NDVI to ten indeks zieleni z odbitego światła.',
      'Na mapie świata widać pasma lasów deszczowych i tajgi. Rok wycinki w tej skali jest niemal niewidoczny. Ubytek pokrywy drzewnej w kroku około 30 metrów jest na Global Forest Watch.',
      'Mapy to NASA MODIS Terra NDVI za lipiec, 2001–2025.',
    ],
    history: [
      'Przed epoką satelitarną powierzchnię lasu odtwarza się z pyłków, modeli klimatu i map użytkowania ziemi. Nie ma ciągłego spisu hektarów od 10 000 p.n.e.',
      'Pięć płyt: roślinność ostatniego maksimum lodowcowego, mapa biomów przy niedawnym klimacie oraz antromy Ellis — biomy ukształtowane przez ludzi — dla 1700, 1900 i 2000.',
    ],
    numbers: [
      'Opublikowane wielkości, każda z nazwanym źródłem i rokiem. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa podaje las jako użytkowanie ziemi. Laboratorium Uniwersytetu Maryland i Global Forest Watch kartują koronę w kroku około 30 metrów. Nienaruszone krajobrazy leśne są kartograficzną klasą dużych połaci lasu. Artykuł z 2015 roku w czasopiśmie Nature szacuje liczbę drzew. Każda liczba zachowuje definicję swojego wydawcy.',
    ],
    outlook: [
      'W holocenie dziki las się skurczył: rosły uprawy, pastwiska i osiedla. Po 2000 roku zapis satelitarny jest ciaśniejszy. Tropikalna zamiana lasu pierwotnego to nie to samo co pożar borealny, i żadne z tego nie jest datą, kiedy „lasy się skończą”.',
    ],
  },
  honestySatellite:
    'NASA MODIS Terra NDVI, lipiec. Zieleń koron, nie piksele Hansena. Interaktywna mapa 30 m: Global Forest Watch.',
  honestyReconstruction:
    'Rekonstrukcje i szacunki, nie korona satelitarna. Pyłki, modele i antromy — każda płyta ma własną legendę.',
  modeSatellite: 'Satelita',
  modeReconstruction: 'Rekonstrukcja',
  fidelitySatellite: 'Satelita · zieleń koron',
  fidelityReconstruction: 'Rekonstrukcja / szacunek',
  scrubberAria: 'Rok mapy lasów',
  yearLabel: 'Rok',
  eraLabel: 'Epoka',
  openGfw: 'Otwórz Global Forest Watch →',
  gfwNote:
    'Ubytek pokrywy drzewnej Hansen / GLAD University of Maryland, około 30 m, od 2001, na Global Forest Watch. Ubytek obejmuje pożar, leśnictwo i konwersję — nie tylko trwałe wylesienie.',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  vintageLabel: 'Rocznik',
  howToRead:
    'Zieleń to więcej roślinności w lipcu. Czerń to woda. Beż to sucho albo goło. Porównuj pasma — Amazonię, Kongo, Sundaland, tajgę — nie jeden piksel. Płyty rekonstrukcji mają własne legendy: antromy to klasy ludzi i użytkowania ziemi, nie „procent drzew”.',
  caveats:
    'NDVI to nie powierzchnia lasu i nie las pierwotny. Uprawy i mokre lata też są zielone. Lipiec sprzyja latu na północy, więc różnica rok do roku w tej rozdzielczości jest mała. Ostatnie maksimum lodowcowe to około 18 000 lat temu, starsze i zimniejsze niż 10 000 p.n.e. Płyta biomów to analog niedawnego klimatu; w środkowym holocenie Sahara bywała bardziej zielona.',
  distinguishTitle: 'Las borealny, las tropikalny i las sadzony',
  distinguish:
    'Około 45 procent zaraportowanego lasu leży w strefie tropikalnej. Reszta to głównie las borealny i umiarkowany, według oceny z 2025 roku. Straty borealne często biorą się z pożaru, owadów albo wyrębu, a grunt może znów liczyć się jako las w sensie użytkowania ziemi. Tropikalna strata lasu pierwotnego zwykle jest przekształceniem: na miejscu starego lasu staje soja albo olejowiec. Las wtórny i plantacje mogą zwiększać łączną powierzchnię lasu, gdy powierzchnia lasu pierwotnego maleje. Las sadzony zajmuje 312 milionów hektarów, 8 procent sumy, obok 1,18 miliarda hektarów lasu pierwotnego. Strata netto 4,12 miliona hektarów rocznie w latach 2015 do 2025 to wylesienie 10,9 miliona hektarów rocznie minus ekspansja. Nienaruszone krajobrazy leśne obejmują 1 086 milionów hektarów w 2025 roku na własnej mapie. Utrata tropikalnego lasu pierwotnego wyniosła 6,7 miliona hektarów w 2024 roku i 4,3 miliona hektarów w 2025 roku w zapisie Global Forest Watch.',
  numbersNote:
    'Każda liczba jest przepisana z cytowanej publikacji wraz z rokiem tej publikacji. Powierzchnia lasu, korona i liczba drzew pochodzą od własnych wydawców.',
  trendTitle: 'Długi widok, potem lata, które da się zmierzyć',
  trendLead:
    'Wykres Ellis 12K odtwarza antromy — ziemie dzikie, kulturowe i intensywne — od 10 000 p.n.e. do 2017. To nie hektary FAO. Po 2000 liczby satelitarne są ciaśniejsze.',
  longViewCaption:
    'Erle Ellis, Anthromes 12K DGG v1, za Ellis et al. 2021, PNAS. CC BY 2.0. Mapa to ok. 2017; słupki to długa rekonstrukcja. Dzikie lasy się kurczą; uprawy, pastwiska i osiedla rosną. Celowo grubo.',
  longViewAlt:
    'Mapa antromów świata na 2017 nad słupkowym paskiem ziem dzikich, kulturowych i intensywnych od 10 000 p.n.e. do 2017',
  scenarioTitle: 'Ścieżki, nie destinacja',
  scenarioLead:
    'Jeśli utrzyma się niedawne tempo strat tropikalnego lasu pierwotnego, ten las dalej się kurczy. Spokojniejszy rok pożarów albo prawdziwe moratorium mogą odwrócić tendencję — 2025 już to zrobił, raz. Żadna ścieżka nie jest datą, kiedy las znika.',
  scenarios: {
    continued: {
      title: 'Jeśli utrzyma się niedawne pasmo strat pierwotnych tropików',
      text: 'Strata wilgotnego tropikalnego lasu pierwotnego UMD/GFW: 6,7 mln ha w 2024 (rekord pożarowy) i 4,3 mln ha w 2025 (o 36 procent mniej, wciąż ok. 46 procent powyżej dekady wcześniej). Jeśli pasmo 4–7 mln ha/rok zostanie, pozostałe pierwotne wilgotne tropiki dalej się kurczą. Pozostały zapas pierwotny GFW nie jest tu opublikowany; borealny las FAO to inna księga.',
    },
    slower: {
      title: 'Jeśli polityka i ogień są trzymane',
      text: 'FRA 2025 już pokazuje wolniejszą stratę netto niż w latach 90. (4,12 wobec 10,7 mln ha/rok). Udział Brazylii w spadku 2025 to zwykłe przypomnienie: egzekwowanie i reguły towarów potrafią ruszyć światową sumę w rok. Ta sama nota WRI mówi: pożar to nowa norma. Cisza to nie zamek.',
    },
    restore: {
      title: 'Jeśli odbudowa to las, nie deklaracja',
      text: 'Przyrost lasu FAO (6,78 mln ha/rok, 2015–2025) już częściowo równoważy wylesienie. Plantacje i młody las wtórny mogą pchać tę liczbę bez pierwotnej struktury i gatunków. Lepsza ścieżka to mniej konwersji plus odbudowa mierzona jako ekosystem, nie jako hektar z komunikatu.',
    },
  },
  worksTitle: 'Co przesunęło linię',
  worksLead:
    'Strata to nie tylko pogoda. Reguły towarów, egzekwowanie pożarów, tytuły do ziemi i parki już przesuwały sumy w nazwanych latach.',
  works: {
    soy: {
      title: 'Moratorium sojowe w Amazonii',
      text: 'Po 2006 wycinka pod soję w brazylijskiej Amazonii ostro spadła w recenzowanym zapisie (Gibbs et al. 2015, Science). Przeciek do Cerrado to uczciwe zastrzeżenie. Reguły kupna plonu zmieniły frontier. Można je cofnąć.',
    },
    indonesia: {
      title: 'Reguły lasu i torfu w Indonezji',
      text: 'Moratoria na las pierwotny i torf oraz egzekwowanie pożarów po 2015 widać w rocznych notach GFW jako lata, gdy strata Indonezji stygnęła. El Niño i popyt plantacji mogą znów podgrzać. Polityka to włącznik, nie szczepionka.',
    },
    indigenous: {
      title: 'Terytoria ludów tubylczych i lokalnych',
      text: 'W kilku basenach tropikalnych zatytułowane ziemie tubylcze często pokazują mniejszą konwersję niż sąsiedni las bez tytułu (zestawienia GFW/WRI). To ład i obecność, nie mit „nietkniętego”. Tytuł i tak trzeba bronić.',
    },
    protected: {
      title: 'Las chroniony (FAO)',
      text: 'FRA 2025: ok. 813 mln ha lasu — 20 procent — w prawnie ustanowionych obszarach chronionych (+251 mln ha od 1990). Parki na papierze bywają. Parki, które trzymają, też. Ochrona to jedno narzędzie obok reguł towarów i straży pożarnej.',
    },
  },
  mapsLink: 'W sali Map jest też schemat Hansen / Global Forest Watch znanych frontierów strat.',
  mapsLinkCta: 'Otwórz kartę ubytku pokrywy leśnej →',
  units: {
    billionHa: 'miliarda hektarów',
    millionHa: 'milionów hektarów',
    millionHaYear: 'miliona hektarów rocznie',
    percent: 'procent',
    ofLand: 'procent lądu',
    gigatonnesC: 'gigaton węgla',
    trillionTrees: 'biliona drzew',
  },
  numberSources: [
    {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025',
      url: 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
    },
    {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, komunikat o ocenie lasów 2025',
      url: 'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
    },
    {
      label: 'Hansen i współpracownicy, globalne mapy zmian pokrywy leśnej o wysokiej rozdzielczości (2013)',
      url: 'https://doi.org/10.1126/science.1244693',
    },
    {
      label: 'Instytut Zasobów Światowych, Przegląd Lasów Świata, utrata lasu w 2024 roku',
      url: 'https://gfr.wri.org/global-tree-cover-loss-data-2024',
    },
    {
      label: 'Instytut Zasobów Światowych, Przegląd Lasów Świata, utrata lasów tropikalnych w 2025 roku',
      url: 'https://gfr.wri.org/latest-analysis-deforestation-trends',
    },
    {
      label: 'Nature, „Mapowanie gęstości drzew w skali globalnej” (2015)',
      url: 'https://www.nature.com/articles/nature14967',
    },
    {
      label: 'Zespół mapowania nienaruszonych krajobrazów leśnych, 2025',
      url: 'https://doi.org/10.5281/zenodo.18011599',
    },
  ],
  frames: {
    'sat-2001': {
      label: '2001',
      title: 'Zieleń koron, lipiec 2001',
      caption:
        'Pierwszy pełny lipiec MODIS Terra NDVI na tej stronie. Zielone pasma to roślinność, nie spis powierzchni lasu. Roczny ubytek Hansen/UMD zaczyna się w 2001 — piksele na Global Forest Watch.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2001: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'sat-2005': {
      label: '2005',
      title: 'Zieleń koron, lipiec 2005',
      caption:
        'Ta sama warstwa NASA cztery lata później. Globalny NDVI w tej rozdzielczości nie pokaże rocznego łuku Amazonii. Pasma tropików i tajgi widać.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2005: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'sat-2010': {
      label: '2010',
      title: 'Zieleń koron, lipiec 2010',
      caption:
        'W zapisie klimatu 2010 to ciężka susza Amazonii. Globalna lipcowa płyta i tak jest zdjęciem zieleni, nie atlasem suszy.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2010: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'sat-2015': {
      label: '2015',
      title: 'Zieleń koron, lipiec 2015',
      caption:
        'Środek satelitarnych lat 2010. FRA 2025 później podaje stratę netto powierzchni lasu 2015–2025: 4,12 mln ha/rok — inna, użytkowa liczba.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2015: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'sat-2020': {
      label: '2020',
      title: 'Zieleń koron, lipiec 2020',
      caption:
        'Późna era Landsat/MODIS. Ubytek pokrywy drzewnej i wylesienie FAO szły i w tej dekadzie; ten kadr żadnego szeregu nie rysuje.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2020: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'sat-2024': {
      label: '2024',
      title: 'Zieleń koron, lipiec 2024',
      caption:
        'GFW/UMD: 6,7 mln ha tropikalnego lasu pierwotnego w 2024 — rekord pożarowy; ok. 30 mln ha globalnego ubytku pokrywy drzewnej. Ta płyta NDVI blizn nie rysuje.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2024: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'sat-2025': {
      label: '2025',
      title: 'Zieleń koron, lipiec 2025',
      caption:
        'Najnowszy lipcowy kadr na tej stronie. GFW/UMD: strata pierwotna tropików spadła do 4,3 mln ha; globalny ubytek pokrywy drzewnej ok. 25,5 mln ha (42 procent pożar). Spokojniejszy rok po skoku, nie „planeta uratowana”.',
      imageAlt:
        'Prostokątna mapa świata, lipiec 2025: zielona roślinność na czarnych oceanach, beżowe pustynie',
    },
    'recon-lgm': {
      label: '~18 tys. lat',
      title: 'Roślinność ostatniego maksimum glacjalnego',
      caption:
        'Rekonstrukcja, nie satelita. Roślinność GIS Ray & Adams 2001, ~25 000–15 000 BP (~18 000 lat temu). Lądolody, więcej pustyni, mniej lasu zwartego. To starsze i zimniejsze niż 10 000 p.n.e. Lasy wczesnego holocenu już się rozszerzały od tego minimum.',
      imageAlt:
        'Rekonstrukcja Mollweide roślinności epoki lodowej: lądolody, tundra, mniejszy las tropikalny, legenda',
    },
    'recon-midholocene': {
      label: 'Płyta biomów',
      title: 'Potencjalne biomy (klimat niedawny)',
      caption:
        'Szacunek / analog — nie datowana mapa pyłkowa środkowego holocenu. Zestawiona płyta biomów Ville Koistinena (CC BY-SA). Przydatna jako „gdzie las może żyć w niedawnym klimacie”. Środkowy holocen (~6000 lat temu) często miał zieleńszą Saharę; ten rysunek tego nie pokazuje.',
      imageAlt:
        'Kolorowa mapa biomów świata: tajga, las liściasty, las tropikalny, pustynie i sawanny',
    },
    'recon-1700': {
      label: '1700',
      title: 'Antromy, 1700',
      caption:
        'Rekonstrukcja biomów przekształconych przez ludzi, Ellis / SEDAC v2. Dzikie i odległe lasy wciąż zajmują wiele Ameryk, Afryki i borealnej Eurazji. Uprawy i wsie już gęste w Europie, Indiach i wschodnich Chinach. To nie mapa procentu drzew.',
      imageAlt:
        'Mapa Robinsona antromów 1700: blade dzikie lasy, żółte uprawy, niebieskie wsie',
    },
    'recon-1900': {
      label: '1900',
      title: 'Antromy, 1900',
      caption:
        'Ta sama seria Ellis / SEDAC, krok epoki przemysłowej. Uprawy, pastwiska i osiedla się rozlały. Nadal model ludności i użytkowania ziemi, nie Landsat.',
      imageAlt:
        'Mapa Robinsona antromów 1900 z większym areałem upraw i pastwisk niż w 1700',
    },
    'recon-2000': {
      label: '2000',
      title: 'Antromy, 2000',
      caption:
        'Ellis / SEDAC v2 u progu epoki satelitarnej. Intensywne antromy pokrywają znaczną część zamieszkałego lądu. Porównaj z półką NASA NDVI: inna legenda, inna wielkość.',
      imageAlt:
        'Mapa Robinsona antromów 2000: rozległe uprawy, pastwiska i osiedla',
    },
  },
  stats: {
    remaining: {
      label: 'Las, który został',
      text: '4,14 miliarda hektarów, około 0,50 hektara na osobę. Blisko połowa tego lasu leży w strefie tropikalnej. Liczba jest sumą użytkowania ziemi z raportów krajowych.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025',
    },
    landShare: {
      label: 'Udział lądu',
      text: '32 procent światowego lądu w 2025 roku jest podane jako las. To ta sama suma użytkowania ziemi co 4,14 miliarda hektarów.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025',
    },
    plantedForest: {
      label: 'Las sadzony',
      unit: 'milionów hektarów',
      text: '312 milionów hektarów, 8 procent lasu w 2025 roku. Powierzchnia wzrosła o 120 milionów hektarów od 1990 roku, a tempo wzrostu w ostatniej dekadzie spadło. Liczba obejmuje plantacje i nasadzenia.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025',
    },
    carbonStock: {
      label: 'Zapas węgla w lasach',
      text: '714 gigaton węgla we wszystkich pulach (172 tony na hektar): gleba 46 procent, żywa biomasa 44 procent, ściółka i martwe drewno 10 procent.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025',
    },
    deforestationSince1990: {
      label: 'Wylesienie od 1990 roku',
      unit: 'milionów hektarów',
      text: '489 milionów hektarów wycięto od 1990 do 2025 roku. Liczba jest stratą brutto leśnego użytkowania ziemi. Tempo spadło, a wycinanie trwa.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025, raport główny',
    },
    netLossRecent: {
      label: 'Strata netto powierzchni lasu',
      text: '4,12 miliona hektarów rocznie w latach 2015 do 2025, wobec 10,7 miliona hektarów rocznie w latach 1990 do 2000. Zmiana netto to wylesienie minus ekspansja z odnowienia, nasadzeń i innego przyrostu.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, komunikat o ocenie lasów 2025',
    },
    grossDeforestation: {
      value: '10,9',
      label: 'Tempo wylesienia brutto',
      text: '10,9 miliona hektarów rocznie w latach 2015 do 2025, wobec 17,6 miliona hektarów rocznie w latach 1990 do 2000. Ekspansja też zwolniła, do 6,78 miliona hektarów rocznie w ostatniej dekadzie. Wylesianie oznacza przekształcenie lasu w inny sposób użytkowania gruntów.',
      sourceLine: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, komunikat o ocenie lasów 2025',
    },
    primaryRemaining: {
      label: 'Lasy pierwotne',
      text: 'Co najmniej 1,18 miliarda hektarów, 29 procent zaraportowanego lasu. Powierzchnia spadła o 110 milionów hektarów od 1990 roku. Niedawna strata lasu pierwotnego to 1,61 miliona hektarów rocznie w latach 2015 do 2025, mniej niż połowa tempa z lat 2000 do 2015. Suma obejmuje pierwotny las borealny i las deszczowy.',
      sourceLine: 'Globalna Ocena Zasobów Leśnych 2025, lasy pierwotne',
    },
    tropicalPrimary2024: {
      value: '6,7',
      label: 'Tropikalny las pierwotny, 2024',
      text: '6,7 miliona hektarów wilgotnego tropikalnego lasu pierwotnego w rekordowym roku, głównie z powodu pożarów, około 18 boisk na minutę.',
      sourceLine: 'Instytut Zasobów Światowych, Przegląd Lasów Świata, utrata lasu w 2024 roku',
    },
    tropicalPrimary2025: {
      label: 'Tropikalny las pierwotny, 2025',
      text: '4,3 miliona hektarów, o 36 procent mniej niż w 2024 roku i wciąż około 46 procent więcej niż dekadę wcześniej. Instytut Zasobów Światowych opisuje to jako 11 boisk piłkarskich na minutę. Brazylia zmniejszyła utratę lasu pierwotnego niezwiązaną z pożarami o 41 procent w porównaniu z 2024 rokiem. Dla wszystkich lasów świata utrata pokrywy drzew wyniosła około 25,5 miliona hektarów, a pożary odpowiadały za 42 procent.',
      sourceLine: 'Instytut Zasobów Światowych, Przegląd Lasów Świata, utrata lasów tropikalnych w 2025 roku',
    },
    treeCount: {
      label: 'Żyjące drzewa',
      text: 'Artykuł z 2015 roku w czasopiśmie Nature szacuje liczbę drzew na około 3,04 biliona. Liczba jest modelowaną liczbą pni z powierzchni próbnych i teledetekcji.',
      sourceLine: 'Nature, „Mapowanie gęstości drzew w skali globalnej” (2015)',
    },
    holoceneTrees: {
      label: 'Drzewa od początku cywilizacji',
      text: 'Ten sam artykuł z 2015 roku szacuje około 46 procent mniej drzew niż na początku ludzkiej cywilizacji.',
      sourceLine: 'Czasopismo „Nejczur”, „Mapowanie gęstości drzew w skali globalnej” (2015)',
    },
    intactLandscapes: {
      value: '1 086',
      label: 'Nienaruszone krajobrazy leśne',
      unit: 'milionów hektarów',
      text: '1 086 milionów hektarów w 2025 roku, 8,4 procent lądu bez lodu. Płaty mają około 50 000 hektarów albo więcej i nie noszą śladu przemysłowego.',
      sourceLine: 'Zespół mapowania nienaruszonych krajobrazów leśnych, 2025',
    },
  },

};
