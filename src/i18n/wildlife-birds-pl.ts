import type { SpeciesCopy } from '../data/wildlife';
import { cite } from '../data/sources';

const condorSpecies =
  'https://www.fws.gov/species/california-condor-gymnogyps-californianus';
const condorProgram = 'https://www.fws.gov/program/california-condor-recovery';
const condorPdf =
  'https://www.fws.gov/sites/default/files/documents/2026-02/2025-california-condor-population-status_508-compliant.pdf';
const craneSpecies = 'https://www.fws.gov/species/whooping-crane-grus-americana';
const cranePress =
  'https://www.fws.gov/press-release/2025-06/2025-wintering-whooping-crane-count';
const cranePdf =
  'https://www.fws.gov/sites/default/files/documents/2026-03/2024-2025-whcr-recovery-activities-report-w-appendices.pdf';
const puffinSheet =
  'https://datazone.birdlife.org/species/factsheet/atlantic-puffin-fratercula-arctica';
const puffinNews =
  'https://www.birdlife.org/news/2022/04/06/seabird-of-the-month-atlantic-puffin-fratercula-arctica/';
const puffinPdf =
  'https://www.unep-aewa.org/sites/default/files/document/aewa_mop8_inf_16_guidance_atlantic_puffin.pdf';
const penguinSheet =
  'https://datazone.birdlife.org/species/factsheet/african-penguin-spheniscus-demersus';
const penguinNews =
  'https://www.birdlife.org/news/2024/11/20/african-penguin-on-the-brink-of-extinction/';
const penguinZa = 'https://www.birdlife.org.za/red-list/african-penguin/';
const sanccob = 'https://sanccob.co.za/about-sanccob/';
const albatrossPdf = 'https://www.acap.aq/resources/acap-species/304-wandering-albatross/file';
const albatrossHub = 'https://www.acap.aq/resources/acap-species';
const albatrossSheet =
  'https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans';
const cc25 = 'https://creativecommons.org/licenses/by-sa/2.5/';
const cc30 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc40 = 'https://creativecommons.org/licenses/by-sa/4.0/';

export const birdsPl: Record<string, SpeciesCopy> = {
  'california-condor': {
    commonName: 'Kondor kalifornijski',
    tag: 'Odbudowa · zachód Ameryki Północnej',
    statusPill: 'Odbudowa',
    hook: 'Największy ptak lądowy Ameryki Północnej. W 1982 roku przetrwało tylko 23 osobniki; hodowla w niewoli i wypuszczanie pomogły gatunkowi się odrodzić, ale w naturze kondory wciąż giną od zatrucia ołowiem.',
    imageAlt:
      'Kondor kalifornijski w locie nad Narodowym Rezerwatem Dzikiej Przyrody Bitter Creek w Kalifornii na tle czystego błękitnego nieba.',
    caption:
      'Kondor kalifornijski w locie nad Narodowym Rezerwatem Dzikiej Przyrody Bitter Creek w Kalifornii na tle czystego błękitnego nieba.',
    photoCredit:
      'Zdjęcie: Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych, Region Pacyfiku Południowo-Zachodniego, za pośrednictwem Wikimedia Commons, domena publiczna.',
    filePageLabel: 'Strona pliku',
    gridSource: cite(
      'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych, kondor kalifornijski',
      condorSpecies,
    ),
    what: 'Kondor kalifornijski (Gymnogyps californianus) jest największym ptakiem lądowym Ameryki Północnej. Ma rozpiętość skrzydeł około 2,9 m (9,5 stopy), a dorosły ptak mierzy od 0,9 do 1,1 m (od 3 do 3,5 stopy) wysokości i waży od 8 do 11 kg (od 17 do 25 funtów). Kondory żywią się padliną, na przykład zwłokami jeleni, krów, wielorybów i fok, a znajdują ją wzrokiem albo podążając za innymi padlinożercami.',
    range:
      'Swobodnie latające kondory żyją w czterech rejonach: w Arizonie i Utah, w Kalifornii, na północnym zachodzie Stanów Zjednoczonych nad Pacyfikiem oraz w meksykańskiej Dolnej Kalifornii. Spośród 392 dzikich ptaków na koniec 2025 roku 98 żyło w Arizonie i Utah, 216 w Kalifornii, 25 na północnym zachodzie nad Pacyfikiem i 53 w Dolnej Kalifornii. Grupa z północnego zachodu ma status eksperymentalnej. Kondory nocują na dużych drzewach, martwych pniach, skalnych występach i klifach, a gniazdują w jaskiniach i na występach stromych skalistych stoków albo w dziuplach i złamanych wierzchołkach starych drzew iglastych. Żerują nad otwartymi łąkami, podgórzem z dębowymi sawannami i plażami przy nadbrzeżnych górach i potrafią przelecieć do 400 km (250 mil) dziennie.',
    story:
      'W 1982 roku na całym świecie przeżyły tylko 23 kondory, a do 1987 roku wszystkie dzikie kondory przeniesiono do programu rozrodu w niewoli. Rząd federalny wpisał gatunek na listę zagrożonych w 1967 roku. Od 1992 roku Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych wypuszcza na wolność kondory wyhodowane w niewoli. W 2004 roku w naturze po raz pierwszy z powodzeniem wykluło się pisklę, a w 2008 roku po raz pierwszy na wolności latało więcej kondorów, niż żyło w niewoli. Ołów z zużytej amunicji pozostaje główną przyczyną śmierci ptaków w naturze: od 1992 do 2025 roku potwierdzono śmierć z powodu zatrucia ołowiem 161 swobodnie latających kondorów.',
    when: 'Na 31 grudnia 2025 roku na świecie żyło 607 kondorów (rok wcześniej 570): 392 w naturze i 215 w niewoli. Plan odbudowy z 1996 roku wyznacza cel w postaci dwóch dzikich, geograficznie oddzielonych, samowystarczalnych populacji, każdej z co najmniej 150 ptaków i 15 par lęgowych, oraz trzeciej populacji utrzymywanej w niewoli.',
    humanRole:
      'Program odbudowy kondora kalifornijskiego prowadzi ta sama służba wraz z partnerami, wśród których są władze stanowe, rząd Meksyku, plemię Yurok, ogrody zoologiczne i organizacje niekomercyjne. Hodują ptaki, wypuszczają je i obserwują w terenie. Myśliwych i hodowców bydła prosi się o stosowanie amunicji bez ołowiu, ponieważ odłamki ołowiu w padlinie zatruwają kondory, które ją zjadają.',
    sources: '',
    sourcesList: [
      cite(
        'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych: kondor kalifornijski, Gymnogyps californianus (U.S. Fish and Wildlife Service: California Condor)',
        condorSpecies,
      ),
      cite(
        'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych: Program odbudowy kondora kalifornijskiego (U.S. Fish and Wildlife Service: California Condor Recovery Program)',
        condorProgram,
      ),
      cite(
        'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych: roczny status populacji Programu odbudowy kondora kalifornijskiego za 2025 rok, dokument (U.S. Fish and Wildlife Service: California Condor Recovery Program 2025 Annual Population Status)',
        condorPdf,
      ),
    ],
  },
  'whooping-crane': {
    commonName: 'Żuraw krzykliwy',
    tag: 'Odbudowa · od Kanady do Teksasu',
    statusPill: 'Odbudowa',
    hook: 'Najwyższy ptak Ameryki Północnej. W 1941 roku zostało ich 16; jedyne dzikie stado, które samo się utrzymuje, liczy dziś szacunkowo 557 ptaków i nadal wędruje między północą Kanady a wybrzeżem Teksasu.',
    imageAlt:
      'Żuraw krzykliwy w locie nad Teksasem: biały tułów, czarne końce skrzydeł i czerwony czubek głowy na tle bladego nieba.',
    caption:
      'Żuraw krzykliwy w locie nad Teksasem: biały tułów, czarne końce skrzydeł i czerwony czubek głowy na tle bladego nieba.',
    photoCredit:
      'Zdjęcie: John Noll, Departament Rolnictwa Stanów Zjednoczonych, za pośrednictwem Wikimedia Commons, domena publiczna.',
    filePageLabel: 'Strona pliku',
    gridSource: cite(
      'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych, zimowy spis żurawi krzykliwych 2025',
      cranePress,
    ),
    what: 'Żuraw krzykliwy (Grus americana) jest najwyższym ptakiem Ameryki Północnej. Upierzenie ma prawie całkiem śnieżnobiałe, z czarnymi końcami skrzydeł, czerwonym czubkiem głowy i rzadkimi czarnymi piórami na policzkach. Dorosły ptak mierzy około 1,5 m (5 stóp), ma rozpiętość skrzydeł ponad 2,1 m (7 stóp) i waży od 6,0 do 7,8 kg (od 13,2 do 17,2 funta). Nazwa pochodzi prawdopodobnie od głośnego, jednotonowego wołania, które ptaki powtarzają, gdy są zaniepokojone.',
    range:
      'Jedyna zachowana dzika, samowystarczalna populacja, populacja Aransas i Wood Buffalo, gniazduje w Parku Narodowym Wood Buffalo i wokół niego w kanadyjskich prowincjach Alberta i Terytoria Północno-Zachodnie. Co roku pokonuje ponad 4000 km (2500 mil) przez kanadyjskie prerie i Wielkie Równiny Stanów Zjednoczonych na środkowe wybrzeże Teksasu, gdzie zimuje w Narodowym Rezerwacie Dzikiej Przyrody Aransas i w jego pobliżu. Zreintrodukowane stada żyją w Wisconsin i Luizjanie, a przerwany program reintrodukcji na Florydzie nadal ma tam ptaki.',
    story:
      'Odstrzał i zamiana prerii w pola uprawne zmniejszyły historyczną populację ponad 10 000 ptaków do zaledwie 16 w 1941 roku: 14 dorosłych i 2 młodych. Ścisła ochrona prawna, ochrona siedlisk, hodowla w niewoli i współpraca Kanady ze Stanami Zjednoczonymi odbudowały populację Aransas i Wood Buffalo, która w długim okresie rośnie o około 4 procent rocznie. Zimą 2024 i 2025 roku spis Służby Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych oszacował liczebność na 557 żurawi krzykliwych: to rekord i pierwsze oszacowanie powyżej 550.',
    when: 'Żuraw krzykliwy jest nadal wpisany na listy gatunków zagrożonych w obu krajach. W styczniu 2025 roku w zreintrodukowanych stadach było 149 żurawi, rok wcześniej 162. Młode ptaki wyrosłe na wolności dołączają do tych stad powoli, więc ich liczebność zależy od nowych wypuszczeń, a śmiertelność dorosłych ptaków jest tam wyższa niż w populacji Aransas i Wood Buffalo. Zagrożeniem pozostają osuszanie terenów podmokłych, susze związane ze zmianą klimatu oraz farmy wiatrowe i linie energetyczne na trasie wędrówki.',
    humanRole:
      'Urzędy obu krajów i ich partnerzy liczą ptaki, monitorują gniazda, chronią siedliska i wychowują żurawie w niewoli, aby wypuszczać je do zreintrodukowanych stad. Spisy na wybrzeżu Teksasu i w lęgowiskach w Kanadzie pokazują, jak z roku na rok zmienia się dzika populacja.',
    sources: '',
    sourcesList: [
      cite(
        'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych: żuraw krzykliwy, Grus americana (U.S. Fish and Wildlife Service: Whooping Crane)',
        craneSpecies,
      ),
      cite(
        'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych: zimowy spis żurawi krzykliwych 2025, komunikat prasowy (U.S. Fish and Wildlife Service: 2025 Wintering Whooping Crane Count)',
        cranePress,
      ),
      cite(
        'Służba Ochrony Ryb i Dzikiej Przyrody Stanów Zjednoczonych i Ministerstwo Środowiska i Zmian Klimatu Kanady: stan żurawia krzykliwego, od sezonu lęgowego 2024 do wiosennej wędrówki 2025, dokument, luty 2026 (U.S. Fish and Wildlife Service and Environment and Climate Change Canada: Whooping Crane Status, 2024 Breeding Season to 2025 Spring Migration)',
        cranePdf,
      ),
    ],
  },
  'atlantic-puffin': {
    commonName: 'Maskonur zwyczajny',
    tag: 'Ptak morski · Północny Atlantyk',
    statusPill: 'Narażony',
    hook: 'Niewielki ptak morski zimnego Północnego Atlantyku. Pozostały miliony ptaków, ale w Europie liczebność według szacunków spadła w ciągu 50 lat o 68 procent z powodu ocieplenia mórz i zmian w zasobach ryb.',
    imageAlt: 'Maskonur zwyczajny w profilu: pomarańczowy, żółty i szaroniebieski dziób oraz biała twarz.',
    caption: 'Maskonur zwyczajny w profilu: pomarańczowy, żółty i szaroniebieski dziób oraz biała twarz.',
    photoCredit: 'Zdjęcie: Andreas Trepte, za pośrednictwem Wikimedia Commons, licencja',
    licenseLabel: 'Creative Commons Uznanie autorstwa na tych samych warunkach 2.5',
    licenseUrl: cc25,
    filePageLabel: 'Strona pliku',
    gridSource: cite('BirdLife International, maskonur zwyczajny', puffinNews),
    what: 'Maskonur zwyczajny (Fratercula arctica) jest ptakiem morskim chłodniejszych wód Północnego Atlantyku, o rozpiętości skrzydeł od 47 do 63 cm. Jego łacińska nazwa oznacza „młodszy brat północy”. Gniazduje na trawiastych stokach stromych klifów morskich, w norach wykopanych w ziemi lub między skałami, i składa jedno jajo. Podczas żerowania może pozostawać pod wodą do jednej minuty i nurkować na głębokość do 40 m. W czasie jednego nurkowania potrafi trzymać w dziobie kilka małych ryb, a średni połów podczas jednego lotu to około 10 ryb.',
    range:
      'Maskonury gniazdują głównie w Europie: na wybrzeżu Bretanii we Francji, w Irlandii, Wielkiej Brytanii, Islandii, Grenlandii, Norwegii, na Wyspach Owczych i w północnej Rosji. Islandia skupia około 60 procent populacji. Poza koloniami spędzają czas od sierpnia do wczesnej wiosny na otwartym oceanie, daleko od lądu, a niektóre docierają na południe aż do Morza Śródziemnego. Polują w odległości 100 km lub więcej od miejsca gniazdowania, a przy karmieniu piskląt zwykle bliżej.',
    story:
      'Międzynarodowe partnerstwo organizacji ochrony ptaków podaje światową liczebność od 7,4 do 8,24 mln dorosłych osobników i opisuje ją jako malejącą. W Europie liczebność według szacunków spadła w ciągu ostatnich 50 lat o 68 procent. Główne zagrożenia to zmiana klimatu, nadmierne połowy ryb, zanieczyszczenie mórz i wycieki ropy, inwazyjne drapieżniki, budowa morskich obiektów energetycznych, przypadkowe odłowy w sprzęcie rybackim i polowania na pokarm. Wytyczne dla gatunku wskazują zmianę klimatu jako główną presję na populację, która jest już osłabiona nadmierną eksploatacją ryb stanowiących pokarm: tobiasza, szprota, śledzia i gromadnika.',
    when: 'Międzynarodowa Unia Ochrony Przyrody uznaje maskonura zwyczajnego za gatunek narażony na świecie i za gatunek zagrożony w Europie. Liczebność nadal maleje.',
    humanRole:
      'Wytyczne przygotowane dla Porozumienia o ochronie afrykańsko-eurazjatyckich wędrownych ptaków wodnych zalecają prowadzenie rybołówstwa tak, aby ptakom zostawało dość pokarmu, ochronę siedlisk ryb pokarmowych, na przykład ławic piaszczystych, oraz tworzenie nowych morskich obszarów chronionych, także na wodach międzynarodowych. Zalecają też dalsze usuwanie inwazyjnych drapieżników z kolonii lęgowych tam, gdzie to możliwe, oraz liczenie kolonii i ptaków wyrzuconych na brzeg, aby śledzić przeżywalność dorosłych.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: karta gatunku maskonur zwyczajny, Fratercula arctica (BirdLife International DataZone: Atlantic Puffin Fratercula arctica factsheet)',
        puffinSheet,
      ),
      cite(
        'BirdLife International: ptak morski miesiąca, maskonur zwyczajny, 6 kwietnia 2022 roku (BirdLife International: Seabird of the month, Atlantic Puffin)',
        puffinNews,
      ),
      cite(
        'Porozumienie o ochronie afrykańsko-eurazjatyckich wędrownych ptaków wodnych: wytyczne ochrony maskonura zwyczajnego, dokument, maj 2022 roku (Agreement on the Conservation of African-Eurasian Migratory Waterbirds: Species Conservation Guidance for the Atlantic Puffin)',
        puffinPdf,
      ),
    ],
  },
  'african-penguin': {
    commonName: 'Pingwin przylądkowy',
    tag: 'Krytycznie zagrożony · południe Afryki',
    statusPill: 'Krytycznie zagrożony',
    hook: 'Niewielki pingwin wybrzeży Republiki Południowej Afryki i Namibii. W naturze zostało mniej niż 32 000 ptaków, a w listopadzie 2024 roku jego status podniesiono do krytycznie zagrożonego.',
    imageAlt:
      'Pingwiny przylądkowe odpoczywają i chodzą po jasnym piasku wśród granitowych głazów na plaży Boulders w Simon’s Town w RPA.',
    caption:
      'Pingwiny przylądkowe odpoczywają i chodzą po jasnym piasku wśród granitowych głazów na plaży Boulders w Simon’s Town w RPA.',
    photoCredit: 'Zdjęcie: Krigore, za pośrednictwem Wikimedia Commons, licencja',
    licenseLabel: 'Creative Commons Uznanie autorstwa na tych samych warunkach 4.0',
    licenseUrl: cc40,
    filePageLabel: 'Strona pliku',
    gridSource: cite(
      'BirdLife International, pingwin przylądkowy na skraju wyginięcia',
      penguinNews,
    ),
    what: 'Pingwin przylądkowy (Spheniscus demersus) jest niewielkim, towarzyskim pingwinem o czarno-białym upierzeniu przypominającym frak. Żyje na wybrzeżach południowej Afryki i żywi się głównie sardynkami i sardelami.',
    range:
      'Kiedyś te ptaki żyły miliony wzdłuż wybrzeży Republiki Południowej Afryki i Namibii. Dziś kolonie są znacznie mniejsze. Odwiedzający widzą pingwiny dużymi grupami w takich miejscach jak plaża Boulders koło Simon’s Town i Stony Point, ale główne zagrożenia dla ptaków są na morzu, poza zasięgiem wzroku.',
    story:
      'Utracono około 97 procent populacji. W naturze zostało mniej niż 32 000 ptaków, a liczba par lęgowych po raz pierwszy spadła poniżej 10 000. Główną przyczyną jest brak pokarmu: przemysłowe połowy okrężnicami konkurują z pingwinami o sardynki i sardele, a zmiana klimatu przesuwa miejsca, w których te ryby się trzymają. Młode pingwiny szukają jedzenia w coraz mniej urodzajnych rejonach, przeżywalność młodych gwałtownie spadła, a dorosłe ptaki według doniesień porzucają gniazda. Swoje dołożyła też ptasia grypa, ale główne zagrożenia to nadal łączne skutki rybołówstwa i zmiany klimatu.',
    when: 'W listopadzie 2024 roku międzynarodowe partnerstwo organizacji ochrony ptaków poinformowało, że Międzynarodowa Unia Ochrony Przyrody przeniosła pingwina przylądkowego z kategorii zagrożonych do kategorii krytycznie zagrożonych. Partnerstwo ostrzega, że bez pilnych działań gatunek może zniknąć z natury w mniej niż 4000 dni.',
    humanRole:
      'Południowoafrykański członek tego partnerstwa i Południowoafrykańska Fundacja Ochrony Ptaków Przybrzeżnych wnieśli pozew przeciwko ministrowi RPA odpowiedzialnemu za rybołówstwo i środowisko. Chcą, aby obecne zamknięcia wód wokół wysp z pingwinami dla połowów okrężnicami, które nazywają biologicznie bezsensownymi, zastąpiono strefami obejmującymi główne żerowiska pingwinów przy sześciu dużych koloniach, a jednocześnie niewiele utrudniającymi pracę przemysłu rybnego.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: karta gatunku pingwin przylądkowy, Spheniscus demersus (BirdLife International DataZone: African Penguin Spheniscus demersus factsheet)',
        penguinSheet,
      ),
      cite(
        'BirdLife International: pingwin przylądkowy na skraju wyginięcia, 20 listopada 2024 roku (BirdLife International: African Penguin on the Brink of Extinction)',
        penguinNews,
      ),
      cite(
        'BirdLife South Africa: pingwin przylądkowy uznany za krytycznie zagrożonego, liczba par lęgowych spadła poniżej 10 000 (BirdLife South Africa: African Penguin newly classified as Critically Endangered as breeding pairs fall below 10,000)',
        penguinZa,
      ),
      cite(
        'Południowoafrykańska Fundacja Ochrony Ptaków Przybrzeżnych: o nas (Southern African Foundation for the Conservation of Coastal Birds: About us)',
        sanccob,
      ),
    ],
  },
  'wandering-albatross': {
    commonName: 'Albatros wędrowny',
    tag: 'Narażony · Ocean Południowy',
    statusPill: 'Narażony',
    hook: 'Olbrzymi ptak morski, który gniazduje na kilku wyspach Oceanu Południowego i rozmnaża się tylko co drugi rok. Jego liczebność spadła tam, gdzie połowy długoliniowe wiążą się z mniejszą przeżywalnością dorosłych ptaków.',
    imageAlt:
      'Albatros wędrowny w locie nisko nad ciemnoniebieską wodą na wschód od półwyspu Tasman, Tasmania, Australia.',
    caption:
      'Albatros wędrowny w locie nisko nad ciemnoniebieską wodą na wschód od półwyspu Tasman, Tasmania, Australia.',
    photoCredit: 'Zdjęcie: JJ Harrison, za pośrednictwem Wikimedia Commons, licencja',
    licenseLabel: 'Creative Commons Uznanie autorstwa na tych samych warunkach 3.0',
    licenseUrl: cc30,
    filePageLabel: 'Strona pliku',
    gridSource: cite(
      'Porozumienie w sprawie ochrony albatrosów i petreli, ocena albatrosa wędrownego',
      albatrossPdf,
    ),
    what: 'Albatros wędrowny (Diomedea exulans), nazywany czasem albatrosem śnieżnym, jest bardzo dużym ptakiem morskim Oceanu Południowego. Rozmnaża się co drugi rok, a cykl lęgowy trwa nieco ponad rok. Jaja są składane w ciągu około pięciu tygodni w grudniu i styczniu, a pisklęta wykluwają się głównie w marcu, po 78 i 79 dniach wysiadywania. Na Georgii Południowej większość piskląt opuszcza gniazdo w grudniu, po 278 dniach spędzonych w gnieździe.',
    range:
      'Albatrosy wędrowne gniazdują na francuskich wyspach Crozeta i Kerguelena, na należących do Republiki Południowej Afryki Wyspach Księcia Edwarda (w tym na wyspie Marion), na australijskiej wyspie Macquarie i na Georgii Południowej. Według danych przekazanych w 2007 roku to około 8050 par lęgowych rocznie. Trzy grupy wysp Oceanu Indyjskiego, Wyspy Księcia Edwarda, Crozeta i Kerguelena, skupiają około 82 procent światowej populacji, a same Wyspy Księcia Edwarda około 3580 par, czyli 44 procent. Na wyspie Macquarie jest tylko od 5 do 10 par rocznie. Wszystkie miejsca lęgowe są chronione prawnie, a dostęp do nich jest ograniczony.',
    story:
      'Około 8050 par to o 5 procent mniej niż 8500 par w 1998 roku, które uznawano za odpowiadające około 28 000 dorosłych osobników i łącznej liczebności 55 000. Wszystkie populacje w pewnym momencie ostatnich 25 lat zmalały, a populacja Georgii Południowej maleje nieprzerwanie. Przeżywalność dorosłych ptaków na Georgii Południowej jest najniższa ze wszystkich miejsc lęgowych i wynosi 92,6 procent wobec 94 procent w latach od 1972 do 1985. Ocena wiąże ten spadek z rozwojem połowów długoliniowych nastawionych na inne gatunki niż tuńczyk w połowie i pod koniec lat 1990. Populacje na Crozeta, Kerguelena i Wyspach Księcia Edwarda w ostatnim czasie wzrosły.',
    when: 'Międzynarodowa Unia Ochrony Przyrody uznaje albatrosa wędrownego za gatunek narażony od 2000 roku, a gatunek znajduje się w załączniku 1 Porozumienia w sprawie ochrony albatrosów i petreli. Strona gatunków tego porozumienia nadal podaje status jako narażony. Podane wyżej dane o liczebności są najnowszymi w ocenie, która opiera się na danych przekazanych w 2007 roku.',
    humanRole:
      'Ocena wzywa do ustalenia, które obszary oceanu pokrywają się z rybołówstwem tam, gdzie nie ma jeszcze skutecznych środków przeciw przypadkowym połowom ani programów obserwatorów. Trzyletni program śledzenia satelitarnego młodych i niedojrzałych ptaków rozpoczął się w 2007 roku, aby pokazać, gdzie spotykają one floty rybackie. Ptaki z Wysp Księcia Edwarda i Crozeta nakładają się na przykład z intensywnymi połowami tuńczyka linami długimi na południe od Republiki Południowej Afryki, gdzie wskaźniki przypadkowych połowów są wysokie.',
    sources: '',
    sourcesList: [
      cite(
        'Porozumienie w sprawie ochrony albatrosów i petreli: ocena gatunku albatros wędrowny, Diomedea exulans, dokument (Agreement on the Conservation of Albatrosses and Petrels: Wandering Albatross Diomedea exulans species assessment)',
        albatrossPdf,
      ),
      cite(
        'Porozumienie w sprawie ochrony albatrosów i petreli: oceny gatunków (Agreement on the Conservation of Albatrosses and Petrels: ACAP species assessments)',
        albatrossHub,
      ),
      cite(
        'BirdLife International DataZone: karta gatunku albatros śnieżny, Diomedea exulans (BirdLife International DataZone: Snowy Albatross Diomedea exulans factsheet)',
        albatrossSheet,
      ),
    ],
  },
};
