import type { MaterialsDetailCopy, MaterialsEncyclopediaSlug } from '../data/solutions-materials';
import type { SolutionCopy } from '../data/solutions';
import { detail as en } from './solutions-materials-en';

const src = (slug: MaterialsEncyclopediaSlug, index: number) => en[slug].sources[index].url;

export const grid: Record<MaterialsEncyclopediaSlug, SolutionCopy> = {
  "wood-fibre-insulation": {
    "problemTitle": "Przegrody budynków tracą ciepło przez ściany, dachy i stropy",
    "fixTitle": "Izolacja z włókna drzewnego",
    "problem": "Przegrody budynków tracą ciepło przez ściany, dachy i stropy",
    "fix": "Fabryczne maty i płyty z włókna drzewnego do izolacji cieplnej budynków. Europejska norma dla fabrycznych wyrobów z włókna drzewnego obejmuje rolki, maty, filce, płyty i panele.",
    "imageAlt": "Płyty izolacyjne z włókna drzewnego na elewacji budynku pod rusztowaniem, Lotschen, Blankenhain, Niemcy.",
    "sourceLabel": "Intertek, wyroby do izolacji cieplnej budynków, fabryczne wyroby z włókna drzewnego, specyfikacja"
  },
  "cellulose-insulation": {
    "problemTitle": "Izolacja budynków, którą można wytwarzać z odzyskanego papieru",
    "fixTitle": "Izolacja celulozowa",
    "problem": "Izolacja budynków, którą można wytwarzać z odzyskanego papieru",
    "fix": "Izolacja sypka i natryskowa z włókna odzyskanego papieru. Agencja Ochrony Środowiska Stanów Zjednoczonych zaleca dla sypkiej i natryskowej izolacji celulozowej 75 procent papieru pokonsumenckiego liczonego według masy rdzenia izolacyjnego.",
    "imageAlt": "Natryskowa izolacja celulozowa z papieru wypełniająca przestrzenie drewnianego szkieletu ściany.",
    "sourceLabel": "Agencja Ochrony Środowiska Stanów Zjednoczonych: Kompleksowe wytyczne zakupowe dla wyrobów budowlanych"
  },
  "engineered-bamboo": {
    "problemTitle": "Konstrukcje bambusowe, które potrzebują wspólnych metod badań i specyfikacji wyrobu",
    "fixTitle": "Bambus inżynieryjny",
    "problem": "Konstrukcje bambusowe, które potrzebują wspólnych metod badań i specyfikacji wyrobu",
    "fix": "Listwy bambusowe sklejone w płyty i elementy nośne. W październiku 2024 roku Międzynarodowa Organizacja Normalizacyjna wydała pierwszą międzynarodową specyfikację wyrobu dla konstrukcyjnego bambusa klejonego warstwowo, po opublikowaniu w 2022 roku metod badań bambusa inżynieryjnego.",
    "imageAlt": "Podłoga z bambusa prasowanego z rozdrobnionych włókien, wyrób z bambusa inżynieryjnego.",
    "sourceLabel": "Międzynarodowa Organizacja Bambusa i Rotangu, przyszłość konstrukcyjnego bambusa klejonego warstwowo"
  },
  "recycled-gypsum": {
    "problemTitle": "Odpady płyt gipsowo-kartonowych z budowy i rozbiórki, którym potrzebna jest droga z powrotem do nowych płyt",
    "fixTitle": "Gips z recyklingu",
    "problem": "Odpady płyt gipsowo-kartonowych z budowy i rozbiórki, którym potrzebna jest droga z powrotem do nowych płyt",
    "fix": "Odpadowe płyty gipsowo-kartonowe przerabia się na gips z recyklingu do nowych płyt. W projekcie Unii Europejskiej Gypsum to Gypsum wyprodukowano płyty z udziałem gipsu z recyklingu do 30 procent, a protokół jakości Agencji Środowiska Zjednoczonego Królestwa określa, kiedy gips z recyklingu przestaje być odpadem.",
    "imageAlt": "Stos płyt gipsowo-kartonowych na drewnianej palecie w magazynie.",
    "sourceLabel": "Eurogypsum: cyrkularność"
  }
,
  "structural-steel-reuse": {
    "problemTitle": "Stal konstrukcyjna z rozbiórki, którą zwykle poddaje się recyklingowi przez przetop",
    "fixTitle": "Ponowne użycie stali konstrukcyjnej",
    "problem": "Stal konstrukcyjna z rozbiórki, którą zwykle poddaje się recyklingowi przez przetop",
    "fix": "Elementy stalowe zdjęte z budynków, takie jak belki i słupy, są ponownie montowane w nowych konstrukcjach. Instytut Budownictwa Stalowego podaje, że obecnie około 70 procent złomu stalowego w Zjednoczonym Królestwie jest eksportowane do recyklingu.",
    "imageAlt": "Belki stalowe odzyskane przy dekonstrukcji w Boulder w stanie Kolorado, Stany Zjednoczone, składowane do ponownego użycia.",
    "sourceLabel": "Instytut Budownictwa Stalowego, ponowne użycie stali konstrukcyjnej"
  }
};

export const detail: Record<MaterialsEncyclopediaSlug, MaterialsDetailCopy> = {
  "wood-fibre-insulation": {
    title: "Izolacja z włókna drzewnego",
    hook: "Fabryczne maty i płyty z włókna drzewnego do izolacji cieplnej budynków. Europejska norma dla fabrycznych wyrobów z włókna drzewnego obejmuje rolki, maty, filce, płyty i panele.",
    imageAlt: "Płyty izolacyjne z włókna drzewnego na elewacji budynku pod rusztowaniem, Lotschen, Blankenhain, Niemcy.",
    caption: "Płyty izolacyjne z włókna drzewnego na elewacji budynku pod rusztowaniem, Lotschen, Blankenhain, Niemcy.",
    credit: "Zdjęcie: Kai Kemmann, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:Fassadend%C3%A4mmung_mit_Pavatex-Holzfaserd%C3%A4mmplatten,_Sockelplatten_zur_Befestigung_von_Balkonen,_Am_Bach_23,_Lotschen,_99444_Blankenhain,_Th%C3%BCringen.jpg",
    what: ["Izolacja z włókna drzewnego to wyrób fabryczny, formowany z włókna drzewnego w postaci elastycznych rolek, mat i filców albo sztywnych płyt i paneli, stosowany do izolacji cieplnej budynków. Europejska norma dla fabrycznych wyrobów z włókna drzewnego określa wymagania dla tych wyrobów, także z okładzinami lub powłokami. Część wyrobów stosuje się również w prefabrykowanych systemach izolacyjnych i panelach kompozytowych."],
    why: ["Ta norma jest normą zharmonizowaną w ramach unijnego rozporządzenia w sprawie wyrobów budowlanych i według niej wyroby uzyskują prawo do europejskiego znaku zgodności. Opisuje ona właściwości wyrobów oraz obejmuje procedury badań, oceny zgodności, znakowania i etykietowania, dzięki czemu izolacja z włókna drzewnego różnych producentów jest opisywana i badana w jednolity sposób."],
    read: ["Wyroby o deklarowanym oporze cieplnym poniżej 0,20 m²·K/W lub deklarowanej przewodności cieplnej powyżej 0,070 W/(m·K) w temperaturze 10 °C wykraczają poza normę. Izolacja formowana na miejscu na budowie oraz izolacja urządzeń budynków i instalacji przemysłowych również leżą poza zakresem normy."],
    limits: ["Norma opisuje właściwości wyrobów i procedury badań. Klasy i poziomy wymagane w danym zastosowaniu ustalają przepisy budowlane i inne normy. Właściwości użytkowe prefabrykowanych systemów izolacyjnych i paneli kompozytowych zawierających te wyroby leżą poza zakresem normy. Udział w rynku, cena i ślad węglowy izolacji z włókna drzewnego pozostają nieoszacowane w przytoczonych tu źródłach."],
    sources: [
      {
        label: "Intertek: EN 13171, wyroby do izolacji cieplnej budynków, fabryczne wyroby z włókna drzewnego, specyfikacja (Intertek: EN 13171: Thermal insulation products for buildings - Factory made wood fibre (WF) products - Specification)",
        url: src("wood-fibre-insulation", 0),
      },
      {
        label: "Genorma: EN 13171:2012+A1:2015, wyroby do izolacji cieplnej budynków, fabryczne wyroby z włókna drzewnego, specyfikacja (Genorma: EN 13171:2012+A1:2015 Thermal insulation products for buildings - Factory made wood fibre (WF) products - Specification)",
        url: src("wood-fibre-insulation", 1),
      },
    ],
  },
  "cellulose-insulation": {
    title: "Izolacja celulozowa",
    hook: "Izolacja sypka i natryskowa z włókna odzyskanego papieru. Agencja Ochrony Środowiska Stanów Zjednoczonych zaleca dla sypkiej i natryskowej izolacji celulozowej 75 procent papieru pokonsumenckiego liczonego według masy rdzenia izolacyjnego.",
    imageAlt: "Natryskowa izolacja celulozowa z papieru wypełniająca przestrzenie drewnianego szkieletu ściany.",
    caption: "Natryskowa izolacja celulozowa z papieru wypełniająca przestrzenie drewnianego szkieletu ściany.",
    credit: "Zdjęcie: Riisipuuro, za pośrednictwem Wikimedia Commons, przycięte, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:Paper_insulation.jpg",
    what: ["Izolacja celulozowa to materiał włóknisty stosowany jako wypełnienie sypkie albo warstwa natryskowa, który można wytwarzać ze starych gazet. Agencja Ochrony Środowiska Stanów Zjednoczonych zalicza sypką i natryskową izolację celulozową do izolacji budowlanych, które można wytwarzać z materiałów odzyskanych."],
    why: ["Program Kompleksowych wytycznych zakupowych Agencji Ochrony Środowiska Stanów Zjednoczonych wyznacza produkty, które wytwarza się lub można wytwarzać z materiałów odzyskanych, aby promować wykorzystanie materiałów odzyskanych z komunalnych odpadów stałych. Po wyznaczeniu produktu agencje zamawiające mają obowiązek kupować go z najwyższym praktycznie osiągalnym udziałem materiałów odzyskanych. Dla sypkiej i natryskowej izolacji celulozowej agencja zaleca 75 procent papieru pokonsumenckiego, co oznacza też 75 procent łącznego udziału materiałów odzyskanych."],
    read: ["Zalecane poziomy dla izolacji budowlanych liczy się według masy. Objętość jest wyłączona z obliczeń, a rdzeń izolacyjny jest jedyną liczoną częścią. Wartość 75 procent opisuje więc udział papieru pokonsumenckiego w masie rdzenia."],
    limits: ["Poziom 75 procent jest zaleceniem dla zakupów agencji zamawiających rządu Stanów Zjednoczonych. Opisuje udział materiału odzyskanego w produkcie. Właściwości cieplne, osiadanie, zachowanie przy zawilgoceniu i w pożarze izolacji celulozowej, a także jej udział w rynku i cena pozostają poza zakresem przytoczonych źródeł."],
    sources: [
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: Kompleksowe wytyczne zakupowe dla wyrobów budowlanych (United States Environmental Protection Agency: Comprehensive Procurement Guidelines for Construction Products)",
        url: src("cellulose-insulation", 0),
      },
      {
        label: "Agencja Ochrony Środowiska Stanów Zjednoczonych: program Kompleksowych wytycznych zakupowych (United States Environmental Protection Agency: Comprehensive Procurement Guideline (CPG) Program)",
        url: src("cellulose-insulation", 1),
      },
    ],
  },
  "engineered-bamboo": {
    title: "Bambus inżynieryjny",
    hook: "Listwy bambusowe sklejone w płyty i elementy nośne. W październiku 2024 roku Międzynarodowa Organizacja Normalizacyjna wydała pierwszą międzynarodową specyfikację wyrobu dla konstrukcyjnego bambusa klejonego warstwowo, po opublikowaniu w 2022 roku metod badań bambusa inżynieryjnego.",
    imageAlt: "Podłoga z bambusa prasowanego z rozdrobnionych włókien, wyrób z bambusa inżynieryjnego.",
    caption: "Podłoga z bambusa prasowanego z rozdrobnionych włókien, wyrób z bambusa inżynieryjnego.",
    credit: "Zdjęcie: Pazzo4562, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:Strand-woven_Bamboo_Flooring.jpg",
    what: ["Bambus inżynieryjny powstaje przez sklejanie bambusa w płyty i elementy nośne. Bambus klejony warstwowo i scrimber bambusowy to dwie jego formy, a bambus klejony warstwowo należy do najpowszechniej stosowanych na świecie wyrobów z bambusa inżynieryjnego. Bambus od wieków stosuje się w budownictwie w Azji, Ameryce Łacińskiej i Afryce, i wyroby z bambusa inżynieryjnego zaczęto stosować jako elementy nośne budynków w latach dziewięćdziesiątych ubiegłego wieku."],
    why: ["Wspólne normy międzynarodowe dają projektantom, producentom i organom nadzoru wspólny punkt odniesienia. 22 czerwca 2022 roku Międzynarodowa Organizacja Normalizacyjna opublikowała normę z metodami badania właściwości fizycznych i mechanicznych wyrobów z bambusa inżynieryjnego, opracowaną przez Grupę zadaniową ds. budownictwa bambusowego Międzynarodowej Organizacji Bambusa i Rotangu. 28 października 2024 roku wydała pierwszą międzynarodową normę dla konstrukcyjnego bambusa klejonego warstwowo, będącą specyfikacją wyrobu zaproponowaną przez Międzynarodową Organizację Bambusa i Rotangu. Do grudnia 2024 roku grupa robocza ds. konstrukcyjnego zastosowania bambusa opublikowała sześć norm międzynarodowych o konstrukcjach bambusowych, trzy dla bambusa okrągłego i trzy dla wyrobów z bambusa inżynieryjnego."],
    read: ["Dotyczą tego dwa dokumenty. Norma z 2022 roku podaje metody oznaczania właściwości fizycznych i mechanicznych, definiuje wymiary, wilgotność i gęstość oraz obejmuje pryzmatyczne kształty bambusa klejonego warstwowo i scrimberu bambusowego. Norma z 2024 roku jest specyfikacją wyrobu dla konstrukcyjnego bambusa klejonego warstwowo."],
    limits: ["Normy z 2022 i 2024 roku obejmują metody badań wyrobów z bambusa inżynieryjnego oraz specyfikację wyrobu dla bambusa klejonego warstwowo. W grudniu 2024 roku opracowywano jeszcze dwie dalsze normy międzynarodowe dla bambusa inżynieryjnego. Wielkość rynku, koszt i bilans węglowy bambusa inżynieryjnego pozostają nieoszacowane w przytoczonych tu źródłach."],
    sources: [
      {
        label: "Międzynarodowa Organizacja Bambusa i Rotangu: przyszłość konstrukcyjnego bambusa klejonego warstwowo, o normie ISO 7567:2024 Bamboo structures, Glued laminated bamboo, Product specification (International Bamboo and Rattan Organization: Defining the future of structural glued laminated bamboo, on ISO 7567:2024 Bamboo structures, Glued laminated bamboo, Product specification)",
        url: src("engineered-bamboo", 0),
      },
      {
        label: "Międzynarodowa Organizacja Bambusa i Rotangu: opublikowano pierwszą normę międzynarodową dla bambusa inżynieryjnego do zastosowań konstrukcyjnych, o normie ISO 23478:2022 Bamboo structures, Engineered bamboo products, Test methods for determination of physical and mechanical properties (International Bamboo and Rattan Organization: First international standard on engineered bamboo for structural use published, on ISO 23478:2022 Bamboo structures, Engineered bamboo products, Test methods for determination of physical and mechanical properties)",
        url: src("engineered-bamboo", 1),
      },
    ],
  },
  "recycled-gypsum": {
    title: "Gips z recyklingu",
    hook: "Odpadowe płyty gipsowo-kartonowe przerabia się na gips z recyklingu do nowych płyt. W projekcie Unii Europejskiej Gypsum to Gypsum wyprodukowano płyty z udziałem gipsu z recyklingu do 30 procent, a protokół jakości Agencji Środowiska Zjednoczonego Królestwa określa, kiedy gips z recyklingu przestaje być odpadem.",
    imageAlt: "Stos płyt gipsowo-kartonowych na drewnianej palecie w magazynie.",
    caption: "Stos płyt gipsowo-kartonowych na drewnianej palecie w magazynie.",
    credit: "Zdjęcie: RossKur, za pośrednictwem Wikimedia Commons, przycięte, licencja Creative Commons Uznanie autorstwa 4.0 (https://creativecommons.org/licenses/by/4.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:Stapel_Gipskartonplatten.jpg",
    what: ["Gips z recyklingu to proszek przerobiony z odpadowych płyt gipsowo-kartonowych i ponownie używany do produkcji nowych wyrobów gipsowych, na przykład płyt gipsowo-kartonowych. Odpady gipsowe powstają przy produkcji, budowie i rozbiórce, w tym przy remontach. Projekt Gypsum to Gypsum, wspierany przez unijny program na rzecz środowiska i klimatu i koordynowany przez Eurogypsum, europejskie stowarzyszenie przemysłu gipsowego, sprawdził cały obieg: demontaż i zbiórkę płyt na obiektach, recykling odpadów oraz ponowne wprowadzenie gipsu z recyklingu w fabrykach płyt gipsowo-kartonowych."],
    why: ["Eurogypsum opisuje gips jako minerał wiecznie nadający się do recyklingu i podaje, że projekt wykazał możliwość produkcji płyt z 30-procentową zawartością odpadów gipsowych z produkcji, budowy i rozbiórki. Raport projektu podaje, że uczestniczący producenci wytwarzali płyty z 20 do 30 procent gipsu z recyklingu (średnio 25 procent) i osiągnęli cel 30 procent w dwóch z pięciu fabryk. Wyniki uzyskano na dotychczasowych procesach produkcyjnych uczestniczących fabryk."],
    read: ["W Anglii, Walii i Irlandii Północnej protokół jakości Agencji Środowiska Zjednoczonego Królestwa dla gipsu z recyklingu z odpadowych płyt gipsowo-kartonowych podaje trzy warunki, przy których materiał przestaje być odpadem: odpady były składowane i przetwarzane zgodnie z ogólnodostępną specyfikacją Brytyjskiego Instytutu Normalizacyjnego dla gipsu z recyklingu z odpadowych płyt; gips jest gotowy do użycia jako surowiec do gipsowych wyrobów budowlanych, takich jak płyty gipsowo-kartonowe i listwy sufitowe, lub do produkcji cementu; spełnia on wszelkie dodatkowe wymagania odbiorcy."],
    limits: ["Raport projektu podaje, że podniesienie udziału gipsu z recyklingu z 30 do 50 procent wymagałoby inwestycji w urządzenia. Gips przylega do tynku, farby i wylewki, co czyni odpady z rozbiórki najbardziej złożonym z trzech strumieni odpadów. W Europie recyklingowi poddaje się niewielki procent odpadów gipsowych, a jako główną barierę raport wskazuje rozbiórkę, ponieważ to demontaż umożliwia odzysk odpadów gipsowych. Eurogypsum podaje, że w krótkim i średnim okresie ilość odpowiednich odpadów gipsowych okaże się prawdopodobnie mniejsza niż rosnące potrzeby budownictwa i remontów, dlatego recykling i wydobycie surowca pierwotnego są jednakowo potrzebne, a ilość gipsu syntetycznego z elektrowni węglowych maleje."],
    sources: [
      {
        label: "Eurogypsum: cyrkularność (Eurogypsum: Circularity)",
        url: src("recycled-gypsum", 0),
      },
      {
        label: "Publiczna baza danych programu LIFE Komisji Europejskiej: GtoG, od produkcji do recyklingu, gospodarka o obiegu zamkniętym dla europejskiego przemysłu gipsowego z branżą rozbiórkową i recyklingową, LIFE11 ENV/BE/001039 (European Commission LIFE Public Database: GtoG: From Production to Recycling, a Circular Economy for the European Gypsum Industry with the Demolition and Recycling Industry (LIFE11 ENV/BE/001039))",
        url: src("recycled-gypsum", 1),
      },
      {
        label: "Agencja Środowiska Zjednoczonego Królestwa, GOV.UK: gips z recyklingu z odpadowych płyt gipsowo-kartonowych, protokół jakości (Environment Agency, GOV.UK: Recycled gypsum from waste plasterboard: quality protocol)",
        url: src("recycled-gypsum", 2),
      },
    ],
  },
  "structural-steel-reuse": {
    title: "Ponowne użycie stali konstrukcyjnej",
    hook: "Elementy stalowe zdjęte z budynków, takie jak belki i słupy, są ponownie montowane w nowych konstrukcjach. Instytut Budownictwa Stalowego podaje, że obecnie około 70 procent złomu stalowego w Zjednoczonym Królestwie jest eksportowane do recyklingu.",
    imageAlt: "Belki stalowe odzyskane przy dekonstrukcji w Boulder w stanie Kolorado, Stany Zjednoczone, składowane do ponownego użycia.",
    caption: "Belki stalowe odzyskane przy dekonstrukcji w Boulder w stanie Kolorado, Stany Zjednoczone, składowane do ponownego użycia.",
    credit: "Zdjęcie: Ian Hill, Departament Energii Stanów Zjednoczonych, za pośrednictwem Wikimedia Commons, przycięte, domena publiczna (praca rządu Stanów Zjednoczonych; informacja o licencji: https://commons.wikimedia.org/wiki/Template:PD-USGov-DOE). Strona pliku: https://commons.wikimedia.org/wiki/File:SlatedForReuse_Hill_Iron_and_Steel_%2854264735079%29.jpg",
    what: ["Ponowne użycie stali konstrukcyjnej oznacza zdjęcie kształtowników stalowych z budynku w trakcie rozbiórki, ich sprawdzenie i ponowny montaż jako belek, słupów lub innych elementów nowej konstrukcji. Instytut Budownictwa Stalowego uznaje kształtowniki stalowe za z natury nadające się do ponownego użycia i opisuje ponowne użycie jako alternatywę dla obecnej powszechnej praktyki recyklingu stali przez przetop. Jego publikacja z 2019 roku „Ponowne użycie stali konstrukcyjnej: ocena, badania i zasady projektowania” zaleca zbieranie danych, oględziny i badania, aby odzyskane konstrukcje stalowe można było stosować z pewnością."],
    why: ["Instytut Budownictwa Stalowego stwierdza, że ponowne użycie ma sens środowiskowy, ponieważ oszczędza zarówno zasoby, jak i emisje węgla, oraz zatrzymuje więcej aktywności gospodarczej w Zjednoczonym Królestwie, gdyż obecnie około 70 procent tamtejszego złomu stalowego jest eksportowane do recyklingu. Podaje średnią różnicę cen między nowymi kształtownikami stalowymi a kształtownikami ze złomu w latach od 2000 do 2016, równą 313 funtom szterlingów za tonę, i nazywa ją szansą na zysk z ponownego użycia przed uwzględnieniem dodatkowych kosztów rozbiórki, badań i certyfikacji, składowania i ponownej obróbki. Raport z wytycznymi Wspólnego Centrum Badawczego Komisji Europejskiej z 2025 roku stwierdza, że w budownictwie ponowne użycie elementów jest kluczową strategią ograniczania emisji dwutlenku węgla oraz że konstrukcje stalowe szczególnie nadają się do ponownego użycia dzięki wysokiemu stopniowi prefabrykacji i ograniczonej degradacji, jakiej zwykle doznają podczas demontażu."],
    read: ["Publikacja z 2019 roku zaleca odzyskiwanie stali w grupach elementów o tej samej formie, rozmiarze i pierwotnej funkcji, pochodzących z tej samej konstrukcji źródłowej, aby badanie jednego lub kilku reprezentatywnych elementów pozwalało określić pewne właściwości całej grupy. Jej zakres obejmuje stal wzniesioną po 1970 roku i wyklucza stal z konstrukcji, które doznały zmęczenia, na przykład z mostów, znacznych odkształceń, znacznej utraty przekroju przez korozję lub pożaru. Jedyną zalecaną modyfikacją w projektowaniu jest sprawdzanie nośności na wyboczenie ze współczynnikiem częściowym równym 1,15 wartości zwykłej. Sprzedawca odzyskanego zapasu stali deklaruje właściwości materiału przy sprzedaży. Strona Instytutu podaje jako przykład budynek magazynowo-biurowy rozebrany i przeniesiony na teren przemysłowo-handlowy w Slough w 2015 roku oraz stwierdza, że ponowne użycie prostych konstrukcji, takich jak ramy portalowe, jest stosunkowo częste w budynkach rolniczych i przemysłowych."],
    limits: ["Konsultacje z łańcuchem dostaw budownictwa stalowego uszeregowały bariery ponownego użycia według malejącej ważności: dostępność odzyskanych profili w odpowiednim rozmiarze, ilości i miejscu; jakość, identyfikowalność i certyfikacja; dodatkowy koszt; integracja łańcucha dostaw; dodatkowy czas w harmonogramach budowy. Instytut wnioskuje, że w obecnych warunkach ekonomicznych i prawnych Zjednoczonego Królestwa uzasadnienie ekonomiczne powszechnego ponownego użycia jest marginalne, a powszechne ponowne użycie jest opłacalne tylko na małych rynkach niszowych i w wybranych projektach. Udział eksportowanego złomu, 70 procent, strona Instytutu podaje jako bieżący; strona jest niedatowana i powołuje się na prace z 2017 roku, więc dzisiejszy udział może być inny. Różnica cen 313 funtów szterlingów za tonę dotyczy Zjednoczonego Królestwa i lat od 2000 do 2016. Publikację z 2019 roku sfinansowała firma Cleveland Steel and Tubes Ltd. Raport Wspólnego Centrum Badawczego z 2025 roku przytoczono na podstawie jego opublikowanego streszczenia."],
    sources: [
      {
        label: "Instytut Budownictwa Stalowego: REDUCE i PROGRESS, ponowne użycie stali konstrukcyjnej (Steel Construction Institute: REDUCE and PROGRESS, structural steel reuse)",
        url: src("structural-steel-reuse", 0),
      },
      {
        label: "Instytut Budownictwa Stalowego: Ponowne użycie stali konstrukcyjnej: ocena, badania i zasady projektowania, SCI P427, PDF (Steel Construction Institute: Structural steel reuse: assessment, testing and design principles, SCI P427 (PDF))",
        url: src("structural-steel-reuse", 1),
      },
      {
        label: "Wspólne Centrum Badawcze, Eurokody: wytyczne dotyczące ustanowienia europejskich zasad projektowania odzyskanych elementów stalowych do ponownego użycia (Joint Research Centre, Eurocodes: Guidance on establishing European rules for the design of reclaimed steel components for reuse)",
        url: src("structural-steel-reuse", 2),
      },
    ],
  }
};
