import type { InnovationCopy } from '../data/innovations';
import { cite } from '../data/sources';

function card(
  fields: Omit<InnovationCopy, 'players' | 'sourcesNote' | 'shape'>,
): InnovationCopy {
  return { players: '', sourcesNote: '', shape: 'quad', ...fields };
}

const ccBySa20 = 'https://creativecommons.org/licenses/by-sa/2.0/';
const ccBySa40 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const desert =
  'https://commons.wikimedia.org/wiki/File:Desert_Sunlight_Battery_Energy_Storage_System_(52945816430).jpg';
const fftf =
  'https://commons.wikimedia.org/wiki/File:View_of_Fast_Flux_Test_Facility_Looking_NW.jpg';
const hywind =
  'https://commons.wikimedia.org/wiki/File:Hywind_Wind_Farm,_off_Peterhead_-_geograph.org.uk_-_7226685.jpg';
const perovskite = 'https://commons.wikimedia.org/wiki/File:Perovskite_solar_cell.jpg';
const campeda =
  'https://commons.wikimedia.org/wiki/File:Bonorva_-_Parco_eolico_di_Campeda_(01).JPG';

export const energyFirmPl: Record<string, InnovationCopy> = {
  'sodium-ion-storage': card({
    title: 'Sodowo-jonowe magazyny dla sieci',
    hook: 'Firma Contemporary Amperex Technology Co., Limited (CATL) 22 czerwca 2026 w Monachium zaprezentowała system magazynowania energii TENER Sodium. CATL podaje, że wysyłki mają osiągnąć 1 gigawatogodzinę do końca 2026 roku, a w kwietniu 2026 zgodziła się dostarczyć firmie HyperStrong baterie sodowo-jonowe o łącznej pojemności 60 gigawatogodzin w ciągu trzech lat.',
    imageAlt:
      'Obiekt magazynowania energii dla sieci obok farmy słonecznej Desert Sunlight w hrabstwie Riverside w Kalifornii: rzędy jednostek bateryjnych, stacja elektroenergetyczna i linie przesyłowe.',
    caption:
      'Obiekt magazynowania energii dla sieci obok farmy słonecznej Desert Sunlight w hrabstwie Riverside w Kalifornii: rzędy jednostek bateryjnych, stacja elektroenergetyczna i linie przesyłowe.',
    figureCredit:
      'Zdjęcie: Biuro Zarządzania Gruntami USA, oddział w Kalifornii, dzięki uprzejmości NextEra, za pośrednictwem Wikimedia Commons, domena publiczna (dzieło federalnej agencji USA).',
    licenseLabel: 'domena publiczna',
    licenseUrl: desert,
    what: 'Bateria sodowo-jonowa magazynuje i oddaje energię elektryczną, przenosząc jony sodu między dwiema elektrodami, tak jak bateria litowo-jonowa przenosi jony litu. 22 czerwca 2026 w Monachium Contemporary Amperex Technology Co., Limited (CATL), chiński producent baterii, zaprezentowała TENER Sodium, system magazynowania energii dla sieci elektroenergetycznych zbudowany na ogniwach sodowo-jonowych. CATL opisuje go jako pierwszy na świecie sprawdzony w warunkach rzeczywistych sodowo-jonowy system magazynowania energii i twierdzi, że osiągnął pełną dojrzałość komercyjną pod względem technologii, mocy produkcyjnych i gotowości łańcucha dostaw. Według CATL system TENER Sodium daje ponad 30 megawatogodzin pojemności znamionowej w konstrukcji modułowej, a do obiektu o pojemności 1 gigawatogodziny wystarczą 34 moduły.',
    problem:
      'CATL mówi, że dostawy litu są skoncentrowane, a jego ceny zmienne, podczas gdy sodu jest ponad 1000 razy więcej i występuje wszędzie. Według CATL system można skonfigurować na czas magazynowania 1, 2, 4, 6 lub 8 godzin i mieści się w tej samej zabudowie co jego systemy na litowo-żelazowo-fosforanowych ogniwach, więc projekt może użyć obu chemii w tych samych obudowach. Na czerwcowej premierze CATL poinformowała, że rozpocznie dostawy do klientów w Chinach we wrześniu 2026, spodziewa się łącznych wysyłek 1 gigawatogodziny do końca 2026 roku, a dostawy poza Chinami zacznie w czerwcu 2027. W kwietniu 2026 CATL i HyperStrong, pekińska firma dostarczająca systemy magazynowania energii, podpisały umowę na 60 gigawatogodzin baterii sodowo-jonowych na trzy lata; obie firmy nazywają ją największą na świecie z dotychczas ogłoszonych umów dotyczących baterii sodowo-jonowych.',
    how: 'Prawie wszystko tutaj pochodzi z własnego ogłoszenia CATL, więc jest to opowieść samej firmy o produkcie i planach. Liczba wysyłek na 2026 rok to prognoza, a początek dostaw w Chinach we wrześniu 2026 i poza Chinami w czerwcu 2027 to harmonogramy. Późniejsze komunikaty CATL i HyperStrong pokażą, które systemy faktycznie dostarczono i dokąd.',
    risks:
      'Wszystkie liczby pochodzą od samej CATL lub samej HyperStrong. Jedyną liczbą dotyczącą działania w komunikacie CATL jest wzrost sprawności pełnego cyklu, czyli części zmagazynowanej energii, która wraca, o prawie 2 procent dzięki systemowi regulacji napięcia. System zaprezentowano w czerwcu 2026, więc jego długoterminowe doświadczenie eksploatacyjne dopiero powstanie. Umowa z HyperStrong to zobowiązanie dostawcze na trzy lata, a faktyczne dostawy pojawią się w późniejszych komunikatach.',
    sources: [
      cite(
        'Contemporary Amperex Technology Co., Limited: CATL prezentuje pierwszy na świecie sprawdzony w terenie sodowo-jonowy system magazynowania energii i wprowadza magazynowanie sodowe na poziom komercyjny (CATL Debuts World’s First Field-Validated Sodium-Ion BESS, Bringing Sodium Storage to Commercial Reality) (22 czerwca 2026)',
        'https://www.catl.com/en/news/6861.html',
      ),
      cite(
        'HyperStrong: HyperStrong i CATL podpisują umowę na baterie sodowo-jonowe o łącznej pojemności 60 gigawatogodzin (HyperStrong and CATL Sign 60 GWh Sodium-Ion Battery Agreement to Advance Energy Storage) (29 kwietnia 2026)',
        'https://www.hyperstrong.com/en/news/company-news/95',
      ),
      cite('Wikimedia Commons: Desert Sunlight Battery Energy Storage System (zdjęcie)', desert),
    ],
  }),
  'terrapower-natrium': card({
    title: 'TerraPower Natrium',
    hook: 'Elektrownia Natrium firmy TerraPower w Kemmerer w stanie Wyoming łączy reaktor prędki o mocy 345 megawatów chłodzony sodem z systemem magazynowania energii na stopionej soli, który może podnieść moc do 500 megawatów. Amerykańska Komisja Dozoru Jądrowego wydała pozwolenie na budowę 9 marca 2026, a TerraPower ogłosiła rozpoczęcie budowy 23 kwietnia 2026.',
    imageAlt:
      'Fast Flux Test Facility, doświadczalny reaktor prędki chłodzony sodem na terenie Hanford w stanie Waszyngton, widok w kierunku północno-zachodnim.',
    caption:
      'Fast Flux Test Facility, doświadczalny reaktor prędki chłodzony sodem na terenie Hanford w stanie Waszyngton, widok w kierunku północno-zachodnim.',
    figureCredit:
      'Zdjęcie: Departament Energii Stanów Zjednoczonych, za pośrednictwem Wikimedia Commons, domena publiczna (dzieło rządu federalnego USA).',
    licenseLabel: 'domena publiczna',
    licenseUrl: fftf,
    what: 'Natrium to projekt elektrowni jądrowej firmy TerraPower, amerykańskiej spółki rozwijającej technologie jądrowe. Elektrownia ma reaktor prędki o mocy 345 megawatów chłodzony sodem, czyli ciepło z rdzenia odprowadza ciekły sód, połączony z systemem magazynowania energii na stopionej soli. TerraPower podaje, że magazyn może podnieść moc do 500 megawatów w szczycie zapotrzebowania, co firma porównuje do zasilania około 400 000 domów, i że jest zaprojektowany tak, by utrzymywać stałą moc bazową. Reaktor to technologia TerraPower i GE Vernova Hitachi Nuclear Energy. Pierwsza elektrownia, Kemmerer, blok 1 w hrabstwie Lincoln w Wyoming, powstaje w ramach Programu Demonstracji Zaawansowanych Reaktorów Departamentu Energii Stanów Zjednoczonych, partnerstwa publiczno-prywatnego.',
    problem:
      '4 marca 2026 TerraPower ogłosiła, że komisarze Amerykańskiej Komisji Dozoru Jądrowego zagłosowali za przyznaniem blokowi 1 elektrowni Kemmerer pozwolenia na budowę, które firma nazywa pierwszym dla komercyjnej zaawansowanej elektrowni jądrowej. Rejestr Federalny, oficjalny dziennik urzędowych obwieszczeń rządu USA, odnotowuje, że pozwolenie wydano 9 marca 2026 spółce US SFR Owner, LLC, która je posiada, i że upoważnia ono do budowy reaktora energetycznego w hrabstwie Lincoln w Wyoming. Oficjalny start budowy TerraPower ogłosiła 23 kwietnia 2026: na plac budowy wchodzi około 1600 pracowników, a po uruchomieniu elektrowni ma pracować około 250 osób na stałe. Firma podaje, że zakończenie projektu spodziewane jest w 2030 roku i że będzie to wtedy pierwsza w Stanach Zjednoczonych zaawansowana elektrownia jądrowa skali przemysłowej.',
    how: 'W dokumentach pojawiają się trzy daty: głosowanie Komisji 4 marca 2026, wydanie pozwolenia 9 marca 2026 i początek budowy 23 kwietnia 2026. Pozwolenie na budowę to zgoda państwa na wzniesienie instalacji reaktorowej, a obwieszczenie w Rejestrze Federalnym jest jego oficjalnym zapisem. Określenia w rodzaju „pierwsza” pochodzą z własnych ogłoszeń TerraPower. Liczba 500 megawatów oznacza moc szczytową, gdy magazyn się rozładowuje, a 345 megawatów to moc bazowa reaktora.',
    risks:
      'Kemmerer, blok 1 jest w budowie, a rok zakończenia 2030 to oczekiwanie samej TerraPower. Prezes TerraPower nazywa elektrownię pierwszą tego rodzaju, więc jej ostateczny koszt i harmonogram dopiero trzeba pokazać. TerraPower podaje też, że ma umowę z firmą Meta na do ośmiu elektrowni Natrium do 2035 roku. To umowa między firmami, a pierwsza elektrownia czeka jeszcze na ukończenie.',
    sources: [
      cite(
        'TerraPower: Amerykańska Komisja Dozoru Jądrowego zatwierdza pozwolenie na budowę reaktora Natrium (NRC Approves the Natrium Reactor Construction Permit) (4 marca 2026)',
        'https://www.terrapower.com/NRC-Approves-Natrium-Reactor-Construction-Permit',
      ),
      cite(
        'TerraPower: TerraPower rozpoczyna budowę pierwszej w Ameryce zaawansowanej elektrowni jądrowej skali przemysłowej (TerraPower Commences Construction on America’s First Utility-Scale Advanced Nuclear Power Plant) (23 kwietnia 2026)',
        'https://www.terrapower.com/terrapower-commences-construction-on-americas-first-utility-scale-advanced-nuclear-power-plant/',
      ),
      cite('TerraPower: strona o technologii Natrium (Natrium technology page)', 'https://www.terrapower.com/natrium/'),
      cite(
        'Rządowe Biuro Wydawnicze USA, Rejestr Federalny: US SFR Owner, LLC; elektrownia Kemmerer, blok 1; pozwolenie na budowę i decyzja (US SFR Owner, LLC; Kemmerer Power Station, Unit 1; Construction Permit and Record of Decision) (obwieszczenie z 16 marca 2026)',
        'https://www.govinfo.gov/content/pkg/FR-2026-03-16/html/2026-05067.htm',
      ),
      cite('Wikipedia: Fast Flux Test Facility (Fast Flux Test Facility)', 'https://en.wikipedia.org/wiki/Fast_Flux_Test_Facility'),
      cite(
        'Wikimedia Commons: widok na Fast Flux Test Facility od północnego zachodu (View of Fast Flux Test Facility Looking NW) (zdjęcie)',
        fftf,
      ),
    ],
  }),
  'floating-offshore-wind': card({
    title: 'Pływające morskie farmy wiatrowe',
    hook: 'Morska farma wiatrowa Goto przy mieście Goto w prefekturze Nagasaki weszła do eksploatacji komercyjnej 5 stycznia 2026. Spółka projektowa nazywa ją pierwszą w Japonii komercyjną pływającą morską farmą wiatrową: osiem turbin po 2,1 megawata, łącznie 16,8 megawata, na pływakach ze stali i betonu.',
    imageAlt: 'Dwie pływające turbiny wiatrowe farmy Hywind Scotland na Morzu Północnym przy Peterhead w Szkocji.',
    caption: 'Dwie pływające turbiny wiatrowe farmy Hywind Scotland na Morzu Północnym przy Peterhead w Szkocji.',
    figureCredit:
      'Zdjęcie: Mike Pennington, geograph.org.uk, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa, na tych samych warunkach 2.0 Ogólna.',
    licenseLabel: 'Creative Commons Uznanie autorstwa, na tych samych warunkach 2.0 Ogólna',
    licenseUrl: ccBySa20,
    what: 'Pływająca morska turbina wiatrowa stoi na pływającej platformie utrzymywanej linami cumowniczymi i kotwicami, więc można ją ustawić na wodzie zbyt głębokiej dla fundamentu osadzonego w dnie. Farmą Goto Offshore Wind Farm zarządza spółka Goto Floating Wind Farm LLC, należąca do sześciu firm: TODA CORPORATION, japońskiej firmy budowlanej, która kieruje spółką projektową, ENEOS Renewable Energy Corporation, Osaka Gas, INPEX CORPORATION oraz spółki energetyczne Kansai Electric Power i Chubu Electric Power. Ma osiem turbin po 2,1 megawata, łącznie 16,8 megawata, o średnicy wirnika 80 metrów. Każda turbina stoi na hybrydowym pływaku typu spar, pionowym pływającym walcu ze stalową częścią górną i betonową dolną, zaprojektowanym i zbudowanym przez TODA CORPORATION.',
    problem:
      'Departament Energii Stanów Zjednoczonych podaje, że około dwie trzecie potencjału morskiej energetyki wiatrowej USA leży na wodzie zbyt głębokiej dla standardowych turbin na fundamentach osadzonych w dnie, przy granicy 60 metrów, więc potrzebna jest tam technologia pływająca. Spółka projektowa i jej akcjonariusze ogłosili 5 stycznia 2026, że rozpoczęła się eksploatacja komercyjna farmy Goto. Opisują ją jako pierwszą w Japonii komercyjną pływającą morską farmę wiatrową i pierwszy obiekt tego rodzaju w Japonii certyfikowany na podstawie ustawy o wspieraniu wykorzystania obszarów morskich do rozwoju obiektów morskiej energetyki odnawialnej. Hybrydowy pływak typu spar nazywają pierwszym na świecie komercyjnym zastosowaniem tego typu pływaka. Energia ma być dostarczana w pierwszej kolejności lokalnym sprzedawcom detalicznym energii elektrycznej.',
    how: 'Moc 16,8 megawata, data startu 5 stycznia 2026 i opis pływaka pochodzą od spółki projektowej i jej akcjonariuszy, których ogłoszenie jest źródłem tych informacji. Pływające farmy wiatrowe działały przed Goto. Norweska firma energetyczna Equinor podaje, że jej pilotażowy park Hywind Scotland o mocy 30 megawatów, z pięcioma turbinami na pływakach typu spar na głębokości od 95 do 120 metrów, produkuje energię od października 2017; na zdjęciu widać dwie z tych turbin. Słowo „pierwsza” w przypadku Goto dotyczy Japonii i eksploatacji komercyjnej.',
    risks:
      'Przy 16,8 megawata Goto to mała farma wiatrowa. Departament Energii Stanów Zjednoczonych spodziewa się, że koszty obiektów pływającej energetyki wiatrowej pierwszej generacji przekroczą koszty morskich farm wiatrowych na fundamentach w dnie o ponad 50 procent, i wyznaczył cel obniżenia kosztu pływającej energetyki wiatrowej o ponad 70 procent do 2035 roku. W ogłoszeniu o Goto brak danych o kosztach i produkcji, więc to, jak farma pracuje, dopiero zostanie podane.',
    sources: [
      cite(
        'TODA CORPORATION, Goto Floating Wind Farm LLC i akcjonariusze: Morska farma wiatrowa Goto rozpoczyna eksploatację komercyjną, pierwszy w Japonii komercyjny projekt pływającej energetyki wiatrowej (Goto Offshore Wind Farm Begins Commercial Operation, Japan’s First Commercial Floating Wind Power Project) (5 stycznia 2026, PDF)',
        'https://www.toda.co.jp/english/investor_relations/pdf/20260105_Notice_01.pdf',
      ),
      cite(
        'Chubu Electric Power: Morska farma wiatrowa Goto rozpoczyna eksploatację komercyjną, pierwszy w Japonii komercyjny projekt pływającej energetyki wiatrowej (Goto Offshore Wind Farm Begins Commercial Operation, Japan’s First Commercial Floating Wind Power Project) (5 stycznia 2026)',
        'https://www.chuden.co.jp/english/corporate/releases/pressreleases/1217247_5163.html',
      ),
      cite(
        'Departament Energii Stanów Zjednoczonych: Program „Pływający wiatr na morzu”, postępy i priorytety (Floating Offshore Wind Shot, Progress and Priorities) (maj 2024, PDF)',
        'https://www.energy.gov/sites/default/files/2024-05/DOE-Wind-Floating-Offshore-WindShot-Report-May2024.pdf',
      ),
      cite(
        'Equinor: Hywind Scotland, pierwsza na świecie pływająca farma wiatrowa (Hywind Scotland, the world’s first floating wind farm)',
        'https://www.equinor.com/energy/hywind-scotland',
      ),
      cite('Wikimedia Commons: Hywind Wind Farm, off Peterhead (zdjęcie)', hywind),
    ],
  }),
  'perovskite-tandem': card({
    title: 'Tandemowe moduły z perowskitu i krzemu',
    hook: '5 września 2024 firma solarna Oxford PV ogłosiła pierwszą komercyjną sprzedaż swoich tandemowych paneli „perowskit na krzemie”, wysłanych do klienta w Stanach Zjednoczonych na instalację skali przemysłowej. Według Oxford PV panele 72-ogniwowe mają sprawność modułu 24,5 procent i mogą wytwarzać do 20 procent więcej energii niż standardowy panel krzemowy.',
    imageAlt: 'Dłoń w rękawiczce trzyma małe ogniwo słoneczne z perowskitu.',
    caption: 'Dłoń w rękawiczce trzyma małe ogniwo słoneczne z perowskitu.',
    figureCredit:
      'Zdjęcie: Dennis Schroeder, Narodowe Laboratorium Energii Odnawialnej USA, w grudniu 2025 przemianowane na Narodowe Laboratorium Gór Skalistych, za pośrednictwem Wikimedia Commons, domena publiczna (dzieło rządu federalnego USA).',
    licenseLabel: 'domena publiczna',
    licenseUrl: perovskite,
    what: 'Tandemowe ogniwo słoneczne z perowskitu i krzemu to cienka warstwa perowskitu nałożona na ogniwo krzemowe. Perowskity to rodzina materiałów, które bardzo dobrze pochłaniają określone barwy światła; Departament Energii Stanów Zjednoczonych wyjaśnia, że warstwa krzemu pod spodem wykorzystuje barwy światła, które perowskit przepuszcza, dlatego ogniwo tandemowe może teoretycznie być sprawniejsze niż każdy z materiałów osobno. Oxford PV to firma z branży technologii słonecznych z biurami w Anglii i Niemczech, która pracuje nad tą technologią od 2014 roku. Jej pierwsze komercyjne panele używają 72 własnych ogniw „perowskit na krzemie”.',
    problem:
      '5 września 2024 Oxford PV ogłosiła, że rozpoczęła komercjalizację swojej technologii tandemowej pierwszą wysyłką do klienta w USA, na instalację skali przemysłowej. Firma nazywa to pierwszym na świecie komercyjnym wdrożeniem tandemowego panelu słonecznego z perowskitem. Oxford PV podaje, że panele mogą wytwarzać do 20 procent więcej energii niż standardowy panel krzemowy, co może obniżyć uśredniony koszt energii elektrycznej, czyli średni koszt każdej jednostki energii w całym okresie życia elektrowni, i pozwala efektywniej wykorzystywać ziemię. Pierwszym panelom na rynku firma przypisuje sprawność modułu 24,5 procent, a także powołuje się na niedawny rekord sprawności modułu 26,9 procent. Ogniwa powstają na megawatowej linii pilotażowej Oxford PV w Brandenburg an der Havel w Niemczech.',
    how: 'Liczby dotyczące sprawności panelu, dodatkowej energii i rekordu pochodzą z własnego ogłoszenia Oxford PV. Sprawność modułu to część światła słonecznego padającego na cały panel, która zamienia się w prąd. Departament Energii Stanów Zjednoczonych podaje, że tandemowe ogniwa z perowskitu i krzemu osiągnęły w badaniach sprawność prawie 34 procent. Sprzedaż z 5 września 2024 to jedna wysyłka z linii pilotażowej, a firma opisuje plany dotyczące kolejnych klientów z branży energetycznej, produktów specjalnych i pilotażowych zastosowań domowych.',
    risks:
      'Departament Energii Stanów Zjednoczonych mówi, że technologii słonecznej z perowskitów wciąż brakuje produkcji na dużą skalę. Wymienia cztery wyzwania dla sukcesu komercyjnego: stabilność i trwałość ogniw, sprawność przy skali produkcji, wytwarzalność oraz walidację technologii i gotowość kredytodawców do finansowania projektów z jej użyciem. W ogłoszeniu Oxford PV z 2024 roku produkcja w skali gigawatów jest opisana jako plan na przyszłą fabrykę wielkoseryjną. Niezależne testy i dane z eksploatacji o starzeniu się paneli pokażą, jak wypadają one na tle paneli krzemowych.',
    sources: [
      cite(
        'Oxford PV: Tandemowe panele słoneczne o mocy większej o 20 procent po raz pierwszy w użyciu komercyjnym w USA (20% more powerful tandem solar panels enter commercial use for the first time in the US) (5 września 2024)',
        'https://www.oxfordpv.com/press-releases/oxford-pv-solar-technology-patent',
      ),
      cite(
        'Departament Energii Stanów Zjednoczonych: Ogniwa słoneczne z perowskitu (Perovskite Solar Cells)',
        'https://www.energy.gov/cmei/systems/perovskite-solar-cells',
      ),
      cite(
        'Departament Energii Stanów Zjednoczonych: Departament Energii zmienia nazwę Narodowego Laboratorium Energii Odnawialnej na „Narodowe Laboratorium Gór Skalistych” (Energy Department Renames NREL “National Lab of the Rockies”) (1 grudnia 2025)',
        'https://www.energy.gov/cmei/articles/energy-department-renames-nrel-national-lab-rockies',
      ),
      cite('Wikimedia Commons: Perovskite solar cell (zdjęcie)', perovskite),
    ],
  }),
  'energy-dome-co2': card({
    title: 'Bateria Energy Dome na dwutlenku węgla',
    hook: 'Instalacja Energy Dome w Ottanie na Sardynii zaczęła pracować w lipcu 2025. Magazynuje energię elektryczną, sprężając dwutlenek węgla do postaci cieczy i później rozprężając go w turbinie, a według IEEE Spectrum jej pojemność to 20 megawatów i 200 megawatogodzin, czyli 10 godzin przy pełnej mocy.',
    imageAlt: 'Turbiny wiatrowe farmy Campeda koło Bonorvy na Sardynii we Włoszech, widok ze wzgórza.',
    caption: 'Turbiny wiatrowe farmy Campeda koło Bonorvy na Sardynii we Włoszech, widok ze wzgórza.',
    figureCredit:
      'Zdjęcie: Gianni Careddu, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa, na tych samych warunkach 4.0 Międzynarodowa.',
    licenseLabel: 'Creative Commons Uznanie autorstwa, na tych samych warunkach 4.0 Międzynarodowa',
    licenseUrl: ccBySa40,
    what: 'Energy Dome to firma z Mediolanu we Włoszech, która nazywa swój system magazynowania „CO2 Battery”. Działa w obiegu zamkniętym. Gdy w sieci jest nadwyżka energii, sprężarka spręża dwutlenek węgla z dużej kopuły do ciśnienia około 55 razy większego od atmosferycznego, gaz jest chłodzony i skraplany, a ciecz przechowuje się w zbiornikach ciśnieniowych. Gdy sieć potrzebuje mocy, ciecz jest odparowywana i podgrzewana, gaz rozpręża się w turbinie napędzającej generator i wraca do kopuły. Magazyn IEEE Spectrum, wydawany przez Instytut Inżynierów Elektryków i Elektroników, podaje, że kopuła w Ottanie zawiera 2000 ton dwutlenku węgla kupionego od dostawcy gazu, oraz że ładowanie trwa około 10 godzin.',
    problem:
      'IEEE Spectrum podaje, że Energy Dome rozpoczęła eksploatację swojego obiektu o mocy 20 megawatów w Ottanie w lipcu 2025 oraz że wytwarza on 200 megawatogodzin energii elektrycznej, czyli 20 megawatów przez 10 godzin. Magazyn pisze, że najlepsze nowe baterie sieciowe na rynku, głównie litowo-jonowe, zapewniają tylko od 4 do 8 godzin magazynowania, a magazynowanie dłuższe niż 8 godzin nazywa długotrwałym. Podaje też, że indyjska spółka energetyczna NTPC Limited spodziewała się ukończyć instalację w Kudgi w stanie Karnataka w 2026, że wisconsińskie przedsiębiorstwo energetyczne Alliant Energy otrzymało zgodę na rozpoczęcie w 2026 budowy takiej instalacji zasilającej 18 000 domów oraz że Google planuje rozmieścić takie instalacje w swoich kluczowych lokalizacjach centrów danych w Europie, Stanach Zjednoczonych i regionie Azji i Pacyfiku. W czerwcu i lipcu 2026 Energy Dome ogłosiła projekt o mocy 23 megawatów i 200 megawatogodzin z Google w hrabstwie Offaly w Irlandii oraz instalację o mocy 20 megawatów i 200 megawatogodzin z SEC, państwową spółką energetyki odnawialnej, w stanie Wiktoria w Australii.',
    how: 'Ottana to jedyna pełnowymiarowa instalacja podłączona do sieci, którą opisuje IEEE Spectrum; pozostałe instalacje to projekty z oczekiwanymi lub ogłoszonymi terminami. 200 megawatogodzin to pojemność instalacji, czyli 20 megawatów dostarczanych przez 10 godzin. Na własnej stronie Energy Dome podaje sprawność pełnego cyklu 70 procent lub więcej netto, czyli część zmagazynowanej energii, która wraca, oraz żywotność ponad 30 lat. IEEE Spectrum przytacza też oczekiwanie Energy Dome, że jej systemy będą o 30 procent tańsze niż litowo-jonowe. Te liczby pochodzą od samej firmy.',
    risks:
      'IEEE Spectrum podaje, że obiekt zajmuje mniej więcej dwa razy więcej terenu niż bateria litowo-jonowa o porównywalnej pojemności, że reszta instalacji potrzebuje około 5 hektarów płaskiego terenu i mniej niż dwóch lat budowy, a kopuła ma wysokość mniej więcej stadionu sportowego i może budzić sprzeciw sąsiadów. Prezes Energy Dome mówi, że kopuła wytrzymuje wiatr do 160 kilometrów na godzinę, a gdyby kopuła została przebita, 2000 ton dwutlenku węgla trafiłoby do atmosfery i ludzie musieliby trzymać się w odległości 70 metrów lub więcej, aż powietrze się oczyści.',
    sources: [
      cite(
        'IEEE Spectrum: Bąbelkowe baterie wielkoskalowe wkrótce będą wszędzie, w internecie pod tytułem „Baterie na dwutlenku węgla magazynujące energię dla sieci podbijają świat” (Grid-Scale Bubble Batteries Will Soon Be Everywhere; CO2 Batteries That Store Grid Energy Take Off Globally) (Emily Waltz, 21 grudnia 2025)',
        'https://spectrum.ieee.org/co2-battery-energy-storage',
      ),
      cite(
        'Energy Dome: strona o technologii CO2 Battery (CO2 Battery technology page)',
        'https://www.energydome.com/co2-battery/',
      ),
      cite(
        'Energy Dome: Google i Energy Dome rozwijają budowę magazynów energii na kilku kontynentach pierwszym projektem dwustronnym w Irlandii (Google and Energy Dome Advance Multi-Continent Energy Storage Buildout with First Bilateral Project in Ireland) (23 czerwca 2026)',
        'https://energydome.com/google-and-energy-dome-advance-multi-continent-energy-storage-buildout-with-first-bilateral-project-in-ireland/',
      ),
      cite(
        'Energy Dome: Energy Dome dostarczy pierwszą w stanie Wiktoria dziesięciogodzinną baterię we współpracy z SEC (Energy Dome to Deliver Victoria’s First 10-hour Battery in Partnership with SEC) (10 lipca 2026)',
        'https://energydome.com/energy-dome-to-deliver-victorias-first-10-hour-battery-in-partnership-with-sec/',
      ),
      cite('Wikimedia Commons: Bonorva - Parco eolico di Campeda (01) (zdjęcie)', campeda),
    ],
  }),
};
