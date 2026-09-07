import type { ForestsPage } from './forests';

export const pl: ForestsPage = {
  metaTitle: 'Lasy — Fix Planet',
  metaDescription:
    'Lasy: czym są, jak satelita widzi korony, rekonstrukcje dawnych krajobrazów i opublikowane liczby FAO oraz Global Forest Watch.',
  eyebrow: 'Lasy Ziemi',
  title: 'Lasy',
  hubLead: [
    'Las to ekosystem, w którym dominują drzewa. FAO traktuje las jako klasę użytkowania ziemi: około 4,14 miliarda hektarów, mniej więcej trzecia część lądów.',
    'Lasy magazynują węgiel, uczestniczą w obiegu wody i dają schronienie większości gatunków lądowych. Poniżej: zieleń koron z kosmosu, kilka rekonstrukcji dawniejszych krajobrazów, opublikowane liczby i trzy ścieżki dalej. Każda mapa ma nazwany zbiór danych i datę.',
  ],
  choosePanel: 'Wybierz półkę',
  filterAria: 'Działy Lasów',
  tiles: {
    satellite: 'Lipcowa zieleń koron z kosmosu, 2001–2025.',
    history: 'Roślinność epoki lodowej, biomy i ziemia po ludziach.',
    numbers: 'Powierzchnia lasu FAO, tropikalna korona pierwotna, szacunek liczby drzew.',
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
      'Kilka opublikowanych wielkości, każda z nazwanym źródłem i rokiem. Las FAO to użytkowanie ziemi. Hansen / Global Forest Watch to korona w kroku 30 metrów. Crowther 2015 to liczba drzew. To różne pomiary; nie dodaje się ich do jednej sumy.',
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
  distinguishTitle: 'Las borealny to nie las tropikalny. Las pierwotny to nie plantacja.',
  distinguish:
    'Około 45 procent lasu FAO jest tropikalne; reszta to głównie borealny i umiarkowany (FRA 2025). Straty borealne to często pożar, owady albo wyrąb, po których las w sensie FAO może wrócić. Tropikalna strata lasu pierwotnego to zwykle konwersja — stary las nie wraca jako ten sam ekosystem, jeśli zastąpi go soja albo palma. Las wtórny i plantacje mogą podnieść „powierzchnię lasu”, gdy pierwotna spada. Strata netto FAO (4,12 mln ha/rok, 2015–2025) odejmuje przyrost od wylesienia (10,9 mln ha/rok). Liczby GFW za 2024 (6,7 mln ha) i 2025 (4,3 mln ha) stoją na innej definicji. Żaden szereg nie mówi „wszystkie lasy znikną w kalendarzową datę”.',
  numbersNote:
    'Skopiowane z cytowanych publikacji, z rocznikiem. Powierzchnia lasu FAO to nie korona Hansena; Crowther 2015 to liczba drzew, nie hektary.',
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
    billionHa: 'mld ha',
    millionHa: 'mln ha',
    millionHaYear: 'mln ha / rok',
    percent: '%',
  },
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
      label: 'Las, który został (FAO)',
      text: '4,14 mld ha — 32 procent lądu, ok. 0,50 ha na osobę. Blisko połowa tego lasu jest tropikalna. Las użytkowania ziemi, nie korona Hansen.',
    },
    deforestationSince1990: {
      label: 'Wylesienie od 1990',
      text: '489 mln ha zbitych (wylesienie FAO, 1990–2025). To strata brutto leśnego użytkowania ziemi, nie netto i nie ubytek pokrywy drzewnej GFW. Tempo spadło; nie stanęło.',
    },
    netLossRecent: {
      label: 'Strata netto powierzchni lasu',
      text: '4,12 mln ha/rok w 2015–2025, wobec 10,7 mln ha/rok w 1990–2000. Netto = wylesienie minus przyrost (odrost, nasadzenia, inny zysk).',
    },
    grossDeforestation: {
      label: 'Tempo wylesienia brutto',
      text: '10,9 mln ha/rok w 2015–2025, wobec 17,6 mln ha/rok w latach 90. Przyrost też zwolnił (6,78 mln ha/rok w ostatniej dekadzie).',
    },
    primaryRemaining: {
      label: 'Las pierwotny (FAO)',
      text: 'Co najmniej 1,18 mld ha (29 procent zaraportowanego lasu). Spadek o 110 mln ha od 1990. Niedawna strata pierwotna: 1,61 mln ha/rok (2015–2025), mniej niż połowa tempa 2000–2015. Obejmuje pierwotny borealny, nie tylko deszczowy.',
    },
    tropicalPrimary2024: {
      label: 'Tropikalny pierwotny, 2024',
      text: '6,7 mln ha wilgotnego tropikalnego lasu pierwotnego — rekord GFW/UMD, pożary, ok. 18 boisk na minutę. Inna definicja niż las pierwotny FAO.',
    },
    tropicalPrimary2025: {
      label: 'Tropikalny pierwotny, 2025',
      text: '4,3 mln ha — 36 procent poniżej 2024, wciąż ok. 46 procent powyżej dekady wcześniej (WRI / UMD, 29 kwietnia 2026). Globalny ubytek pokrywy drzewnej ok. 25,5 mln ha; 42 procent pożar.',
    },
    holoceneTrees: {
      label: 'Drzewa od rolnictwa (szacunek)',
      text: 'Crowther et al. 2015: ok. 3,04 bln drzew teraz i mniej więcej 46 procent mniej niż projekcja historycznej pokrywy UNEP od cywilizacji/rolnictwa. Liczba drzew, nie hektary FAO. Celowo grubo.',
    },
  },
};
