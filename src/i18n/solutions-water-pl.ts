import type { WaterEncyclopediaCopy, WaterEncyclopediaSlug } from '../data/solutions-water';

export const pl: Record<WaterEncyclopediaSlug, WaterEncyclopediaCopy> = {
  'drip-irrigation': {
    title: 'Nawadnianie kropelkowe',
    hook: 'W suchych regionach większość wody irygacyjnej nie dociera do korzenia: paruje albo spływa. Linie kroplujące podają wodę w strefie korzenia — mniej strat, wyższy plon.',
    imageAlt: 'Młoda kukurydza w suchej glebie podlewana czarną linią kroplującą',
    what: [
      'Nawadnianie kropelkowe — nazywane też trickle irrigation albo mikronawadnianiem — podlewa uprawy przez rury i emitory, które zwilżają strefę korzenia zamiast całego pola. W suchych regionach większość wody irygacyjnej nie dociera do korzenia: paruje albo spływa. Linie kroplujące podają wodę w strefie korzenia — mniej strat, wyższy plon.',
      'Szkoła nauk o wodzie USGS traktuje kroplówkę jako najczęstszą formę mikronawadniania. Woda idzie rurami z otworami — zakopanymi albo leżącymi tuż nad ziemią przy rzędzie. Powoli kapie na korzenie i łodygi. W przeciwieństwie do deszczowni w powietrze ucieka niewiele, a wodę można skierować tylko do roślin, które jej potrzebują.',
      'Rozdział FAO o metodach nawadniania opisuje kroplówkę jako niskociśnieniowe, częste podawanie wody przez sieć laterali i emitorów. To zwykły sprzęt gospodarski, nie pomysł laboratoryjny. Ta sama rodzina osprzętu stoi w sadach, winnicach, warzywach i na części upraw polowych. Nawóz można wstrzykiwać z wodą — fertygacja — bo emitory już siedzą przy roślinie.',
    ],
    how: [
      'Typowy układ ma pompę albo spad grawitacyjny, filtrację, magistralę i laterale oraz emitory w litrach na godzinę. Filtry mają znaczenie: piasek i glony zatykają wąskie otwory. Ciśnienie musi trzymać się wąskiego pasma, żeby pierwszy i ostatni emitor dawały podobną ilość. Na stoku projektant stawia emitory kompensujące ciśnienie albo dzieli linię na strefy.',
      'USGS wymienia zwykłe zalety przy właściwym prowadzeniu: woda i rozpuszczalny nawóz idą do poszczególnych roślin, zwilża się tylko ułamek powierzchni gleby, a nakład pracy może spaść. Mikronawadnianie podlewa stoki i nieregularny teren, którego nie da się zalać. To metoda niskociśnieniowa i małobjętościowa, często na drogich owocach i warzywach. To nie magiczna rura: zatkany emitor to sucha roślina, a nieszczelna magistrala to zmarnowana studnia.',
    ],
    where: [
      'Izrael uczynił kroplówkę narodową metodą nawadniania. Od lat 60. gospodarstwa zastępowały tam znaczną część zalewania i deszczowni lateralami i emitorami w sadach, warzywach i uprawach polowych. Ten sam osprzęt rozszedł się potem po basenie Morza Śródziemnego, Kalifornii, Indiach, Chinach i innych suchych rejonach rolniczych. Rozdział FAO jest napisany pod to światowe zastosowanie, nie pod jeden kraj.',
      'W Stanach Zjednoczonych szacunek USGS zużycia wody za 2015 rok stawia pobór na nawadnianie na około 118 000 milionów galonów na dobę. Nawadniano wtedy około 63 500 tysięcy akrów; z tego około 5 490 tysięcy akrów — kroplówką albo mikronawadnianiem. To realny udział, nie większość. Zalewanie i deszczownie nadal podlewają większą część nawadnianych gruntów USA. Kroplówka jest zwyczajna tam, gdzie woda jest droga, a uprawa spłaca rurkę.',
    ],
    limits: [
      'Kroplówka nie robi nowej rzeki. Obcina wodę, która nigdy nie doszła do rośliny. Jeśli „zaoszczędzoną” wodę puszcza się na powiększenie areału — efekt odbicia — basen może zostać tak samo suchy. Sprawniejsze gospodarstwo samo z siebie nie jest wilgotniejszą warstwą wodonośną.',
      'Emitory się zatykają. Tania taśma się rwie. Plastikowe laterale stają się odpadem. Metoda wymaga filtracji, płukania i kogoś, kto chodzi wzdłuż linii. Nie odsala słonej wody irygacyjnej i nie zastępuje prawa do studni. Traktujcie kroplówkę jako sposób, by postawić znaną objętość przy korzeniu — nie jako licencję na sadzenie większej pustyni.',
    ],
  },
  'constructed-wetlands': {
    title: 'Sztuczne mokradła',
    hook: 'Składniki odżywcze i ścieki w rzekach karmią zakwity glonów, które głodzą ryby tlenu. Sztuczne mokradła czyszczą wodę jak żywy filtr — trzcina, mikroby i płytki przepływ.',
    imageAlt: 'Sztuczne mokradło z trzciną, płytką czystą wodą i drewnianą kładką',
    what: [
      'Sztuczne mokradło to zbudowany płytki basen obsadzony roślinnością bagienną i używany do oczyszczania ścieków, wód deszczowych albo spływu rolniczego. To nie odtworzone dzikie bagno i nie betonowy zbiornik. Amerykańska Agencja Ochrony Środowiska opisuje sztuczne mokradła jako systemy oczyszczania, które wykorzystują naturalne procesy roślin bagiennych, gleb i związanych z nimi zespołów mikrobowych, żeby poprawić jakość wody.',
      'Składniki odżywcze i ścieki w rzekach karmią zakwity glonów, które głodzą ryby tlenu. Sztuczne mokradła czyszczą wodę jak żywy filtr — trzcina, mikroby i płytki przepływ. Podręcznik EPA jest napisany dla operatorów, którzy już prowadzą te układy: mokradła o swobodnym lustrze, złoża wegetacyjne zanurzone (poziomy przepływ podpowierzchniowy) i pokrewne hybrydy. Rośliny to robocza uprawa łodyg i korzeni, nie zieleń ozdobna.',
    ],
    how: [
      'W mokradle o swobodnym lustrze woda stoi albo wolno idzie wśród roślin wynurzonych. Osady opadają. Biofilmy na łodygach i ściółce biorą materię organiczną i część azotu. W złożu podpowierzchniowym woda zostaje pod żwirem albo piaskiem; korzenie i mikroby pracują w porach, a komary mają mniej otwartej wody. Oba typy potrzebują wykładziny albo szczelnej gleby, jeśli teren nie może przeciekać do wód gruntowych, wlotu, który rozkłada przepływ, i wylotu, który trzyma zadany poziom.',
      'Podręcznik EPA prowadzi przez wymiarowanie, złoże, roślinność i zanieczyszczenia, które te pola biorą i których nie biorą. Dobrze osadzą cząstki stałe i tną biochemiczne zapotrzebowanie na tlen przy obciążeniu zgodnym z projektem. Usuwanie azotu i fosforu zależy od tlenu, czasu przebywania, roślin i zbioru. Patogeny spadają, ale nie ma gwarancji normy wody pitnej. Metale i część odpadów przemysłowych wymagają innego zakładu.',
    ],
    where: [
      'Sztuczne mokradła to zwykły zestaw komunalny i rolniczy w Stanach Zjednoczonych, Europie, Chinach i wielu innych miejscach. Strony EPA o mokradłach i podręcznik z 2000 roku zbierają praktykę amerykańską: kanalizacja małych społeczności, baseny deszczowe, kwaśny drenaż kopalniany i spływ rolniczy. Mokradła o swobodnym lustrze potrzebują więcej ziemi; złoża podpowierzchniowe stawia się tam, gdzie otwarta woda jest uciążliwa albo problemem klimatycznym.',
      'Ten sam pomysł pojawia się jako złoża trzcinowe po szambach, jako mokradła doczyszczające po zakładzie mechanicznym i jako oczyszczające bagna na rowach polnych. Już działają. To nie nowy wynalazek czekający na pilotaż.',
    ],
    limits: [
      'Powierzchnia to uczciwe ograniczenie. Mokradło, które czyści ścieki miasteczka, potrzebuje hektarów, nie skrzynki na kwiaty. Zimą zimna woda spowalnia mikroby. Latem komary i zapach pojawiają się, gdy woda staje. Roślinami trzeba gospodarować; zatkane złoże to martwy filtr.',
      'Sztuczne mokradło nie zastępuje zakładu wody pitnej i nie czyści każdego odpadu przemysłowego. Nie odtwarza utraconego estuarium tylko dlatego, że trzcinę posadzono w wyłożonej wannie. Traktujcie to jako żywy proces oczyszczania z odciskiem terenu — nie jako dzikie bagno powstałe od wylania ścieku na pole.',
    ],
  },
  'membrane-desalination': {
    title: 'Odsalanie odwróconą osmozą',
    hook: 'Miasto może stać nad morzem i nadal zostać bez wody. Zakłady odwróconej osmozy przepychają wodę morską przez membrany i już zaopatrują miasta w Izraelu, Hiszpanii, Australii, Zatoce Perskiej i Kalifornii.',
    imageAlt: 'Zakład odsalania wody morskiej w Perth za ogrodzeniem, pod błękitnym niebem',
    what: [
      'Odsalanie membranowe, zwykle odwrócona osmoza, przepycha wodę słoną przez półprzepuszczalną membranę. Sól i wiele innych rozpuszczonych ciał stałych zostaje; wychodzi woda słodsza. Miasto może stać nad morzem i nadal zostać bez wody. Susza, wyczerpane rzeki i rosnący popyt uderzają najpierw w wodę pitną. Zakłady odwróconej osmozy przepychają wodę morską przez membrany i już zaopatrują miasta w Izraelu, Hiszpanii, Australii, Zatoce Perskiej i Kalifornii.',
      'Szkoła nauk o wodzie USGS opisuje odsalanie jako proces, który robi ze słonej wody słodką. Woda oceaniczna ma około 35 000 części na milion rozpuszczonej soli. Odwrócona osmoza to jedna metoda przemysłowa; destylacja jest starsza. USGS zaznacza, że obecne procesy wielkoskalowe są drogie i energochłonne. Para z wiatrem albo słońcem obcina kopalny rachunek za prąd. Zakłady i tak zużywają energię.',
    ],
    how: [
      'Wodę ujęcia się cedzi i wstępnie oczyszcza, żeby muł i organizmy nie zanieczyszczały membran. Potem pompy wysokiego ciśnienia tłoczą zasilanie na spiralne elementy membranowe. Świeży permeat dostaje obróbkę końcową przeciw korozji i dezynfekcję. Pozostały strumień to solanka — słonsza niż morze — i trzeba ją rozcieńczać i zrzucać na pozwoleniu, inaczej szkodzi lokalnemu życiu morskiemu.',
      'Energia to koszt eksploatacji, który nie znika. Odzysk ciśnienia z solanki (urządzenia odzysku energii) jest standardem na współczesnych ciągach wody morskiej. Słonawe wody gruntowe potrzebują niższego ciśnienia niż ocean. Zakład to fabryka: membrany się starzeją, ujęcia się zatykają, a produkt jest tak niezawodny, jak prąd i części zamienne.',
    ],
    where: [
      'Water Corporation w Australii Zachodniej prowadzi zakłady odwróconej osmozy wody morskiej jako niezależny od klimatu kawałek zaopatrzenia Perth. Perth Seawater Desalination Plant stoi w Kwinana. Southern Seawater Desalination Plant stoi w Binningup. Oba to nazwane, pracujące obiekty na stronach agencji o odsalaniu — nie propozycje.',
      'USGS zaznacza, że ponad 300 milionów ludzi na świecie dostaje wodę z zakładów odsalania (liczba International Desalination Association na tamtej stronie). Największy w Ameryce Północnej, zakład Claude’a «Buda» Lewisa w Carlsbadzie koło San Diego, podany jest tam na 50 milionów galonów na dobę. Największy na świecie nazwany na tej samej stronie to Jebel Ali w Dubaju. Izrael, Hiszpania i państwa Zatoki prowadzą wielkie floty morskie. To fabryki komunalne, nie domowe destylatory.',
    ],
    limits: [
      'Solankę trzeba rozcieńczać. Wylot, który kładzie słonszą plamę na płytkim brzegu, to lokalny problem morski. Ujęcia mogą zabijać larwy. Zużycie energii jest realne nawet gdy zakład jest sparowany z wiatrem albo słońcem: elektrony i tak muszą dotrzeć, gdy pracują pompy.',
      'Odsalanie nie jest licencją na marnotrawstwo słodkiej wody w głębi lądu. Nie napełnia wyczerpanej warstwy sto kilometrów od brzegu. Nie robi taniego nawadniania. USGS mówi wprost, że koszt i energia są powodem, dla którego świat nie odsala wszystkiego. Traktujcie nadbrzeżny zakład RO jako odporne na suszę źródło komunalne z rachunkiem za solankę i prąd — nie jako planetarną maszynę słodkiej wody.',
    ],
  },
  'managed-aquifer-recharge': {
    title: 'Sterowane zasilanie warstw wodonośnych',
    hook: 'Studnie opadają, gdy miasta i pola biorą wodę gruntową szybciej, niż deszcz ją zwraca. Sterowane zasilanie podaje oczyszczoną wodę do basenów i studni, żeby podziemny magazyn się napełnił.',
    imageAlt:
      'Pompa, rury i opisany kontener na terenie próby zatłaczania wody odzyskanej do warstwy wodonośnej Bolivar, Australia Południowa',
    what: [
      'Sterowane zasilanie warstw wodonośnych (MAR) to celowe podawanie wody do warstwy na późniejsze ujęcie albo jako bariera przeciw wodzie morskiej. Studnie opadają, gdy miasta i pola biorą wodę gruntową szybciej, niż deszcz ją zwraca. Pusta warstwa to suche krany, osiadanie gruntu i brak zapasu w suszy. MAR podaje oczyszczoną wodę deszczową, rzeczną albo odzyskaną do basenów i studni, żeby podziemny magazyn się napełnił.',
      'USGS Circular 1405 przegląda sztuczne zasilanie jako metodę gospodarki wodnej: baseny rozsączające, wykopy i studnie zatłaczające; geologia decyduje, co zadziała. To nie nowa rzeka. To sposób magazynowania wody, która już istnieje — szczytów deszczu, nadwyżek rzecznych albo głęboko oczyszczonych ścieków — w porach pod ziemią zamiast w otwartym zbiorniku, który paruje.',
    ],
    how: [
      'Baseny rozsączające przepuszczają wodę przez nienasyconą glebę do zwierciadła. Studnie zatłaczające albo schemat magazynowania i odzysku pchają wodę do warstwy napiętej albo półnapiętej i później ją wyciągają. Woda musi być dość czysta dla przyjmującej warstwy i dla użytku, który nastąpi. Zapychanie basenów i filtrów studziennych to zwykła walka eksploatacyjna: muł, glony i pęcherzyki uszczelniają pory.',
      'Pośredni odzysk pitny łączy zaawansowane oczyszczanie z zasilaniem. Groundwater Replenishment System w Orange County bierze wysoko oczyszczone ścieki, które poszłyby do Pacyfiku, i oczyszcza je mikrofiltracją, odwróconą osmozą i światłem ultrafioletowym z nadtlenkiem wodoru. Produkt idzie do warstwy przez rozsączanie i zatłaczanie. Spełnia normy wody pitnej zanim trafi do magazynu. Lata monitoringu siedzą na wierzchu rur.',
    ],
    where: [
      'GWRS Orange County Water District to największy na świecie układ oczyszczania do pośredniego odzysku pitnego. Dystrykt podaje około 130 milionów galonów wody na dobę, obsługę rzędu miliona ludzi i udział w lokalnym popycie. Działa od stycznia 2008 roku jako wspólny projekt z Orange County Sanitation District. Studium przypadku NGWA stoi obok własnej strony GWRS dystryktu.',
      'Schemat zasilania wód gruntowych Water Corporation w Perth recyklinguje oczyszczone ścieki do systemu Gnangara po zaawansowanym oczyszczaniu. Program zasilania Central Arizona Project magazynuje wodę rzeki Kolorado w podziemnych stanowiskach do późniejszego ujęcia. Zdjęcie — teren Bolivar na równinach Adelajdy — to próba CSIRO zatłaczania wody odzyskanej do warstwy, tej samej klasy.',
    ],
    limits: [
      'MAR potrzebuje czystego źródła, właściwej geologii i lat monitoringu. Warstwa iłu może zablokować basen. Spękana skała może odesłać zatłoczoną wodę tam, gdzie nie planowano. Odzysk nigdy nie wynosi stu procent. Jeśli woda źródłowa jest brudna, zbudowaliście projekt zanieczyszczenia.',
      'To nie nowa rzeka. Nie tworzy opadu. Nie przegoni basenu, który nadal pompuje się szybciej, niż się zasila. Traktujcie MAR jako magazyn i barierę — Orange County używa go też przeciw intruzji morskiej — nie jako zamiennik mniejszego zużycia albo zbierania deszczu.',
    ],
  },
  'rainwater-harvesting': {
    title: 'Zbieranie wody deszczowej',
    hook: 'Domy i budynki publiczne zrzucają deszcz do rynien, podczas gdy studnie i cysterny nie nadążają. WHO traktuje zbiórkę z dachu i przykryte magazynowanie jako źródło domowe, które i tak wymaga opieki.',
    imageAlt: 'Przykryta murowana cysterna na deszczówkę na suchej ziemi w Indiach',
    what: [
      'Zbieranie wody deszczowej to zbieranie deszczu z dachu albo innej zlewni do magazynu, z którego ludzie potem korzystają. Domy i budynki publiczne zrzucają deszcz do rynien, podczas gdy studnie i cysterny nie nadążają. W wielu miastach dach jest najbliższą zlewnią, ale otwarte beczki hodują komary, a pierwszy brudny spływ trafia do zapasu.',
      'Poradnik inspekcji sanitarnej WHO traktuje zbiórkę z dachu i przykryte magazynowanie jako źródło domowe. Metoda jest zwyczajna w klimatach suchych i monsunowych. Wytyczne dotyczące jakości wody pitnej zadają ramę zdrowotną: deszcz w spadaniu jest względnie czysty, ale dach, rynna, pierwszy spływ i zbiornik decydują, co ludzie piją. Ta strona jest o tej metodzie — nie o zaporze i nie o nowej rzece.',
    ],
    how: [
      'Dach (metal łatwiej utrzymać w czystości niż strzechę) zrzuca do rynien. Odprowadzacz pierwszego spływu wyrzuca pierwsze brudne minuty — odchody ptaków, kurz i materiał rozpuszczony z dachu. Sitowy wlot trzyma komary i zanieczyszczenia z dala od zamkniętego zbiornika. Kran powyżej warstwy osadu bierze wodę. Regularne czyszczenie rynien i zbiornika jest częścią układu, nie dodatkiem na ochotnika.',
      'Karta WHO o deszczówce to pakiet inspekcji sanitarnej: szukać pęknięć, nieprzykrytych otworów, zaniedbania pierwszego spływu i zbiorników, które dzielą przestrzeń ze zwierzętami albo odpadami. Wytyczne traktują domową deszczówkę jako zaopatrzenie w wodę pitną, które wymaga tej samej uczciwości co studnia: jeśli magazynu nie da się utrzymać zamkniętego i czystego, zbudowaliście wylęgarnię, nie kran.',
    ],
    where: [
      'Zbiorniki dachowe to zwykły zestaw domowy w Indiach, Australii, na Karaibach, w Afryce Wschodniej i wielu miastach monsunowych i suchych. Budynki publiczne — szkoły, przychodnie — stawiają większe cysterny na tej samej logice. Niektóre miasta wymagają zbiornika w nowych domach. Metoda jest stara. WHO o niej pisze, bo ludzie już z niej piją.',
      'Plon idzie za powierzchnią dachu i deszczem. Dach o powierzchni 100 metrów kwadratowych w roku o 600 milimetrach teoretycznie może złapać 60 metrów sześciennych, jeśli nic nie ucieknie; rzeczywiste układy tracą pierwszy spływ, przelew i brudne epizody. Ta arytmetyka to sufit, nie obietnica. Cysterna i tak przyjeżdża, gdy niebo milczy.',
    ],
    limits: [
      'To nie nowa rzeka: plon idzie za dachem i deszczem, a źle utrzymany zapas może rozchorować ludzi. Pora sucha opróżnia zbiornik. Brudny dach napełnia go zanieczyszczeniem. Otwarte beczki hodują komary Aedes. Pierwszy spływ, którego nigdy się nie zrzuca, to hasło.',
      'Zbieranie deszczówki nie zastępuje miejskiej oczyszczalni dla miasta i nie napełnia regionalnej warstwy wodonośnej. Wytyczne WHO dotyczące wody pitnej istnieją, bo domowe magazyny psują się zwyczajnymi sposobami. Traktujcie cysternę jako lokalną zlewnię z pokrywą — nie jako zaopatrzenie odporne na klimat.',
    ],
  },
  'newater-reclaimed-wastewater': {
    title: 'Odzyskane ścieki / NEWater',
    hook: 'Singapurskie PUB przepuszcza oczyszczone ścieki przez membrany i światło ultrafioletowe. Pracują cztery zakłady. Większość wody idzie do przemysłu; w suche okresy część miesza się ze zbiornikami.',
    imageAlt: 'Niebieskie naczynia mikrofiltracji i rury z tablicą Microfiltration System w zakładzie NEWater w Bedok',
    what: [
      'NEWater to singapurska nazwa wody odzyskanej wysokiej klasy: oczyszczone ścieki puszcza się przez membrany i dezynfekcję, aż woda jest ultraczysta. Gęste miasto może zużyć więcej słodkiej wody, niż niezawodnie dają zbiorniki i import. Oczyszczone ścieki wtedy idą do morza, a krany w suszy zostają zagrożone.',
      'Singapurskie PUB przepuszcza oczyszczone ścieki przez mikro- lub ultrafiltrację (albo bioreaktor membranowy), odwróconą osmozę i dezynfekcję ultrafioletową — to NEWater. PUB podaje, że pracują cztery zakłady. Większość wody idzie do przemysłu i chłodzenia; w suche okresy część miesza się ze zbiornikami i znów oczyszcza, zanim stanie się wodą z kranu. Odzysk wymaga ścisłego oczyszczania i zaufania ludzi.',
    ],
    how: [
      'PUB opisuje proces trzech stopni. Stopień pierwszy to mikrofiltracja albo ultrafiltracja — albo bioreaktor membranowy, który łączy oczyszczanie biologiczne i te membrany w jednym kroku — żeby zdjąć cząstki i bakterie. Stopień drugi to odwrócona osmoza: szczelna membrana, która puszcza wodę i trzyma wirusy, sole, metale i wiele chemikaliów organicznych. Stopień trzeci to dezynfekcja ultrafioletowa jako ostatni krok bezpieczeństwa.',
      'Pośrednie użycie pitne znaczy, że w suche okresy NEWater dodaje się do surowych zbiorników. Mieszanka idzie potem przez zwykłe wodociągi, zanim trafi do kranu. Bezpośrednie użycie przemysłowe idzie osobną siecią rur. Zakłady produkcji płytek krzemowych (wafer-fabrication) są największymi odbiorcami; potrzebują wody czystszej niż pitna. Historia dla zwiedzających jest na stronach PUB «NEWater» i «Our Water Story».',
    ],
    where: [
      'Publiczna relacja PUB: studium wykonalności z lat 70. uznało odzysk za technicznie możliwy, ale wtedy zbyt drogi. Koszty membran spadły. W 1998 roku PUB testował membrany pod odzysk pitny; zakład demonstracyjny w 2000 roku dawał 10 000 metrów sześciennych na dobę. Eksperci uznali wodę za mieszczącą się w wymaganiach WHO i EPA USA dla wody pitnej i zalecili pośrednie użycie pitne. NEWater pokazano publicznie 9 sierpnia 2002 roku. Pierwsze dwa zakłady, Bedok i Kranji, otwarto w roku następnym (2003).',
      'PUB podaje, że obecnie pracują cztery zakłady NEWater. Są nazwanym filarem pętli wodnej Singapuru — lokalna zlewnia, woda importowana, NEWater i odsalanie — na stronie Our Water Story. Zakład w Bedok i centrum zwiedzających później zamknięto (31 lipca 2024 na stronie PUB); liczba czterech zakładów to bieżące operacyjne twierdzenie PUB. Ta strona nie wymyśla piątego zakładu.',
    ],
    limits: [
      'Odzysk wymaga ścisłego oczyszczania i zaufania ludzi. Nie czyni miasta niezależnym od zbierania deszczu i mniejszego zużycia. Jeśli sieć zbiórki ścieków zawiedzie, zakład nie ma czystego zasilania. Odwrócona osmoza i tak robi koncentrat, którym trzeba gospodarować. Prąd musi dochodzić co godzinę, gdy pracują ciągi.',
      'NEWater nie jest licencją na wzrost popytu bez zlewni. To nie filtr domowy. To fabryka komunalna z audytami, membranami i historią polityczną, którą trzeba było opowiedzieć publicznie — w tym toast na paradzie Dnia Narodowego w 2002 roku — bo ludzie nie piją tego, czemu nie ufają.',
    ],
  },
  'fog-harvesting': {
    title: 'Zbieranie wody z mgły',
    hook: 'Wysokie, suche wybrzeża i grzbiety mogą stać w częstej mgle, podczas gdy woda gruntowa pozostaje poza zasięgiem. Duże siatkowe kolektory przechwytują krople. To technika grzbietu, nie miejskie zaopatrzenie.',
    imageAlt: 'Prostokątny siatkowy kolektor mgły na suchym grzbiecie Alto Patache w Chile, ludzie stoją obok nad chmurami',
    what: [
      'Zbieranie wody z mgły przechwytuje krople na siatce i spuszcza wodę do zbiornika. Wysokie, suche wybrzeża i grzbiety mogą stać w częstej mgle, podczas gdy woda gruntowa i wodociąg pozostają poza zasięgiem. Wilgoć jest w powietrzu, nie w rzece. Duże siatkowe kolektory przechwytują krople mgły.',
      'FogQuest, organizacja założona w 2000 roku, pomagała stawiać kolektory m.in. w Tojquia w Gwatemali, na stanowiskach Atacamy w Chile i w Falda Verde; dziś głównie mentoruuje nowe projekty i zaznacza, że strony projektów nie są już aktualizowane. Przegląd AMBIO z 2012 roku (Klemm i inni), PDF na stronie FogQuest, przegląda mgłę jako zasób słodkiej wody: plon, siatka i klimat. Artykuł Frontiers in Water z 2021 roku przegląda tę samą rodzinę kolektorów.',
    ],
    how: [
      'Typowy duży kolektor to prostokątny panel siatkowy rozpięty między słupami, stojący w poprzek panującego wiatru na grzbiecie, który siedzi w chmurze. Krople zderzają się z włóknami, łączą i spływają do rynny. Plon mierzy się w litrach na metr kwadratowy siatki na dobę i zależy od zawartości wody w mgle, prędkości wiatru, typu siatki i tego, ile godzin mgły grzbiet naprawdę ma.',
      'Metoda potrzebuje miejsca z częstą mgłą adwekcyjną — nadbrzeżną albo górską chmurą, która idzie przez panel — nie stojącą mgiełką doliny. Kolektory wymagają lokalnej opieki: poszarpana siatka, skradziony drut i zapchane rynny kończą plon. Magazyn i czysty kran są częścią projektu. Panel bez zbiornika to fotografia naukowa.',
    ],
    where: [
      'Nazwane stanowiska FogQuest i pokrewne obejmują Tojquia w Gwatemali, kolektory Atacamy w Chile (zdjęcie na tej karcie to Alto Patache) i Falda Verde. Ten sam pomysł próbowano na innych suchych wybrzeżach mgły i wysokich wioskach. AMBIO 2012 i przegląd Frontiers z 2021 zbierają te doświadczenia; to instalacje wiejskie i badawcze, nie zakłady komunalne.',
      'Strona bieżących projektów FogQuest to własny indeks organizacji. Organizacja pisze, że tych stron już nie prowadzi na bieżąco i że jej rola to dziś głównie mentoring. Ta encyklopedia trzyma tę uczciwość: miejsca są rzeczywiste; plon jest lokalny i sezonowy; strona nie jest żywą tablicą operacyjną.',
    ],
    limits: [
      'Plon zależy od wiatru, siatki i dni z mgłą. Kolektory wymagają lokalnej opieki. To technika grzbietu, nie miejskie zaopatrzenie. Stolica nie napije się z rzędu siatek. Gdy sezon mgły się kończy, zbiornik to to, co zdążyliście zmagazynować.',
      'Zbieranie wody z mgły nie zastępuje studni, rurociągu ani zakładu odsalania. Nie działa na spokojnej równinie bez mgły. Skradziona albo poszarpana siatka to nieudany projekt. Traktujcie to jako wodę pitną dla wysokiej wioski, która już żyje w chmurze — nie jako adaptację klimatyczną dla wszystkich.',
    ],
  },
  'constructed-floating-wetlands': {
    title: 'Sztuczne pływające mokradła',
    hook: 'Baseny deszczowe i laguny ściekowe zbierają składniki odżywcze i glony. Pływające moduły pontonowe wieszają korzenie roślin w wodzie. CSIRO pilotażuje je w Cowes i Salisbury.',
    imageAlt: 'Pływające mokradło Sengkang w Singapurze: zadrzewiony pas na środku zbiornika, most i wieżowce dalej',
    what: [
      'Sztuczne pływające mokradła to moduły pontonowe, których korzenie roślin zwisają w wodzie i trzymają biofilmy pobierające składniki odżywcze i łapiące cząstki. Baseny deszczowe i laguny ściekowe zbierają składniki odżywcze i glony. Lądowe mokradło potrzebuje miejsca i zmienia retencję powodziową. Wiele istniejących stawów nie ma ani jednego, ani drugiego.',
      'CSIRO opisuje je jako niedawną modernizację dla deszczówki i ścieków. Zestawienie projektowe WetlandInfo Queenslandu traktuje pływające mokradła jako opcję układu oczyszczania: obsadzona tratwa, cumowanie i plan zbioru. Zdjęcie na tej karcie to pływające mokradło Sengkang w Singapurze — obsadzony pas na środku kanału — ten sam typ pływającej konstrukcji z roślinami, nie same australijskie pilotaże.',
    ],
    how: [
      'Pływająca rama trzyma podłoże i rośliny bagienne. Korzenie i zwisająca biomasa wchodzą w słup wody. Mikroby na tych powierzchniach biorą azot i część fosforu i łapią drobne cząstki. Tratwę cumuje się tak, żeby nie zablokowała wylotów i nie stała się przeszkodą nawigacyjną. Woda nadal płynie pod modułem i wokół niego; staw pozostaje stawem.',
      'Zestawienie projektowe WetlandInfo podkreśla wymiarowanie, dobór roślin, cumowanie i utrzymanie. Rośliny trzeba zbierać, inaczej oddadzą to, co zmagazynowały, gdy zginą i zgniją. Moduły zapychają się ściółką. Ptaki i ludzie chodzą po źle zbudowanych tratwach. Oczyszczanie jest tak dobre, jak czas kontaktu i zbiór.',
    ],
    where: [
      'CSIRO pilotażuje układy na lagunie w Cowes na Phillip Island oraz na miejskim kanale w Salisbury w Australii Południowej. To nazwane stanowiska badawcze i demonstracyjne, nie krajowy program modernizacji. WetlandInfo publikuje wskazówki projektowe dla oczyszczania rolniczego i deszczowego w Queenslandzie.',
      'Pływające obsadzone wyspy pojawiają się też w miejskich zbiornikach i parkach — Sengkang w Singapurze jest zdjęciem na karcie — jako krajobraz i częściowe oczyszczanie. Ta strona nie traktuje parkowej wyspy jako dowodu, że miejska kanalizacja jest rozwiązana. Pilotaże CSIRO to te australijskie wdrożenia, za którymi idzie ta encyklopedia.',
    ],
    limits: [
      'To pilotaże, nie zamiana oczyszczalni, a rośliny trzeba zbierać, inaczej oddadzą to, co zmagazynowały. Pływające mokradło nie dodaje powierzchni pełnego mokradła lądowego — i o to chodzi — ale też nie dorówna prawidłowo zwymiarowanemu złożu lądowemu ani zakładowi mechanicznemu przy wysokim obciążeniu.',
      'Nie naprawia zlewni, która nadal zsyła składniki odżywcze. Nie robi z laguny ściekowej wody pitnej. Cumowanie zawodzi przy powodzi. Traktujcie pływające mokradła jako modernizację stawu, który już macie — Cowes i Salisbury to nazwane próby — nie jako miejskie zaopatrzenie w wodę.',
    ],
  },
  'solar-still': {
    title: 'Destylator słoneczny / bierne odsalanie',
    hook: 'Destylator słoneczny odparowuje wodę słoną pod przezroczystą pokrywą i skrapla parę jako słodką. Urządzenie MIT i Shanghai Jiao Tong z 2020 roku to prototyp badawczy, nie zakład miejski.',
    imageAlt: 'Dachowy destylator słoneczny w Kairze z izolowanym przewodem wokół ciemnego parownika',
    what: [
      'Destylator słoneczny odparowuje wodę słoną pod przezroczystą pokrywą i skrapla parę jako słodką — stara, małoskalowa metoda. Nadbrzeżne i wyspiarskie gospodarstwa mogą mieć wodę morską i słońce, ale nie prąd dla zakładu odwróconej osmozy. Wożenie albo gotowanie wody to codzienny zapasowy plan.',
      'Strona USGS o odsalaniu bierze przenośny dmuchany destylator słoneczny jako obraz dydaktyczny: parowanie i skraplanie, ten sam proces co deszcz. Destylacja to jedno z najstarszych oczyszczań wody. To nie odwrócona osmoza. Potrzeba słońca i powierzchni. Nie potrzeba pompy wysokiego ciśnienia.',
    ],
    how: [
      'Słońce grzeje ciemną tacę ze słoną wodą. Para unosi się, uderza w chłodniejszą przezroczystą pokrywę, skrapla się i spływa do rynny. Prosty destylator jamowy — folia nad dołem z kubkiem pośrodku — to wersja przetrwania, którą USGS też opisuje. Plon idzie za słońcem i powierzchnią parownika.',
      'W 2020 roku MIT i Shanghai Jiao Tong University pokazały wielostopniowy bierny destylator na dachu MIT, który ponownie używał ciepła skraplania między warstwami. MIT News (6–7 lutego 2020) opisał dziesięciostopniowy demonstrator, który dał 5,78 litra na metr kwadratowy powierzchni zbierającej — ponad 1,5 galona na godzinę na metr kwadratowy w równoważnej stawce zespołu — i wodę przekraczającą miejskie normy pitne. Artykuł jest w Energy & Environmental Science. Ta praca to prototyp badawczy, nie zakład miejski.',
    ],
    where: [
      'Proste destylatory pojawiają się na łodziach, w zestawach przetrwania i jako doświadczenia domowe albo wiejskie tam, gdzie spotykają się słońce i słona woda, a sieci nie ma. USGS uczy metody jako destylacji, którą każdy potrafi sobie wyobrazić. Dachowy destylator z Kairu na zdjęciu karty to ta codzienna klasa urządzenia — skrzynka i pokrywa — nie stos MIT.',
      'Destylator MIT–SJTU z 2020 roku testowano na dachu budynku MIT. W zespole byli badacze Shanghai Jiao Tong University. Opisali możliwą konfigurację pływającą albo domową i oszacowali, że około jednego metra kwadratowego mogłoby pokryć dzienne zapotrzebowanie pitne jednej osoby w ich ramie. To szacunek laboratoryjny, nie kontrakt miejski.',
    ],
    limits: [
      'Plon destylatora idzie za słońcem i powierzchnią; nie zastępuje odsalania membranowego dla miasta. Noc, chmura i mały dach znaczą małą butelkę. Miejski zakład odwróconej osmozy to inna maszyna: ciśnienie, membrany, wyloty solanki i megawatowe pompy. Nie reklamujcie dachowego prototypu jako Perth albo Carlsbad.',
      'Destylatory nie są komunalne. Nie nawadniają gospodarstwa. Sól i kamień i tak zbierają się w wielu konstrukcjach tacowych; zespół MIT twierdził, że ich układ knota może zrzucać sól w nocy — to twierdzenie badawcze do śledzenia, nie skończony produkt. Traktujcie destylator słoneczny jako pozasieciową wodę pitną pod czystym niebem — nie jako zamiennik zakładu odsalania.',
    ],
  },
};
