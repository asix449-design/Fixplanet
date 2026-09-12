import type { InnovationCopy } from '../data/innovations';

export const pl: Record<string, InnovationCopy> = {
  'climeworks-dac': {
    title: 'Bezpośrednie wychwytywanie z powietrza — Climeworks',
    hook: 'Wentylatory i filtry wyciągają CO₂ z powietrza. Instalacje istnieją; tony wciąż są małe.',
    imageAlt:
      'Geotermalna elektrownia Hellisheiði na Islandii — krajobraz energetyczny wokół DAC Climeworks i składowania Carbfix',
    what: 'Direct air capture (DAC) przepuszcza powietrze zewnętrzne przez filtry chemiczne, potem podgrzewa filtry, by uwolnić stężony strumień CO₂. Szwajcarska firma Climeworks zbudowała Orca na Islandii w 2021 i obok niej Mammoth. Mammoth zaczął wychwytywać CO₂ w maju 2024. Moc znamionowa to do około 36 000 ton rocznie, gdy wszystkie kontenery-kolektory będą na miejscu — błąd zaokrąglenia wobec emisji świata, a pierwsze lata szły wyraźnie poniżej tej liczby.',
    problem:
      'Część CO₂ i tak zostanie wyemitowana, gdy zetniemy to, co się da: cement, paliwo dalekiego zasięgu, resztkowa energetyka. Wyciąganie węgla już obecnego w powietrzu to jeden sposób na zmniejszenie zapasu — ale tylko jeśli energia jest czysta, a CO₂ zostaje w złożu.',
    how: 'Kolektory używają stałych filtrów aminowych i niskotemperaturowego ciepła — na Islandii pary geotermalnej z ON Power. Uwolniony CO₂ jest rozpuszczany i wstrzykiwany w bazalt przez Carbfix, gdzie mineralizuje. Łańcuch jest prawdziwy. Barierą są koszt, energia i tempo budowy modułów — bez udawania, że kilka tysięcy ton to skala klimatyczna.',
    players:
      'Climeworks (Szwajcaria) prowadzi Orca i Mammoth na Islandii z ON Power i Carbfix. Departament Energii USA finansował też znacznie większe koncepcje „hubów” DAC (w tym Project Cypress z Climeworks, Battelle i Heirloom); to plany, nie działające zakłady megatonowe.',
    risks:
      'DAC jest energochłonny. Jeśli ciepło i prąd są kopalne, usuwanie netto kurczy się albo znika. Kredyty można sprzedać szybciej niż tony zostaną składowane. Pierwszy rok Mammoth pokazał, że „online” to nie to samo co moc znamionowa. To przemysł pilotażowy, nie substytut cięcia emisji.',
    sourcesNote:
      'Oficjalna strona Mammoth i komunikat z 8 maja 2024; śledzenie DAC IEA. Moc znamionowa to nie dostarczone tony.',
  },
  'northern-lights-ccs': {
    title: 'Northern Lights — CCS ze źródła punktowego',
    hook: 'CO₂ z fabryk, statkiem i wstrzyknięciem pod Morze Północne. Pierwsze przemysłowe wolumeny ruszyły w 2025.',
    imageAlt:
      'Morska platforma na Morzu Północnym — przemysłowa przestrzeń tego rodzaju, której używają projekty transportu i składowania CO₂',
    what: 'Wychwytywanie i składowanie dwutlenku węgla (CCS) bierze CO₂ z komina albo procesu, nie z rozrzedzonego powietrza, potem przenosi go do magazynu. Northern Lights to ramię transportu i składowania norweskiego projektu Longship: statki, lądowy terminal w Øygarden i wstrzyknięcie do zbiornika solankowego pod Morzem Północnym.',
    problem:
      'Cement, spalanie odpadów i część przerobu wodoru albo gazu emitują CO₂, którego trudno się pozbyć u źródła. CCS ze źródła punktowego to jeden sposób, by te tony nie poszły w powietrze — jeśli sprawność wychwytu jest wysoka, a złoże trzyma.',
    how: 'Wychwycony CO₂ jest skraplany, wieziony statkiem, odbierany i tłoczony na morze do wstrzyknięcia. Faza 1 jest zaprojektowana na 1,5 miliona ton rocznie. Northern Lights zgłosił pierwsze przemysłowe wolumeny przetransportowane i składowane w sierpniu 2025, w tym CO₂ z cementowni Heidelberg Materials w Brevik. Faza 2 ma podnieść zdolność do około 5 milionów ton później w dekadzie — plan, nie dzisiejszy fakt.',
    players:
      'Joint venture Equinor, Shell i TotalEnergies, z norweskim wsparciem państwa w ramach Longship. Wczesny emitent: Heidelberg Materials Brevik. Inni europejscy klienci przemysłowi są zakontraktowani albo w rozmowach.',
    risks:
      'Wychwyt w zakładzie to twardy, drogi krok; składowanie jest użyteczne tylko wtedy, gdy wychwyt naprawdę działa. Nieszczelność, kara energetyczna i używanie CCS do przeciągania produkcji kopalnej to prawdziwe spory. Milion ton to poważna inżynieria i wciąż mało wobec inwentarzy krajowych.',
    sourcesNote:
      'Strony JV Northern Lights; nota Equinor o pierwszym składowaniu (25 sierpnia 2025); briefing Longship / CCS Norway.',
  },
  'carbfix-mineralization': {
    title: 'Carbfix — zamiana CO₂ w kamień',
    hook: 'Rozpuść CO₂ w wodzie, wstrzyknij w bazalt, a chemia zrobi w latach to, na co osady potrzebują tysiącleci.',
    imageAlt: 'Bazalt kolumnowy przy Svartifoss na Islandii — chemia skały, której Carbfix używa do mineralizacji węgla',
    what: 'Carbfix to islandzka metoda: CO₂ rozpuszcza się w wodzie i wstrzykuje w reaktywną skałę bazaltową, gdzie tworzy trwałe minerały węglanowe. Wyniki polowe z Hellisheiði pokazały, że duża część wstrzykniętego węgla mineralizuje w skali lat, nie er geologicznych.',
    problem:
      'Składowanie to druga połowa wychwytu. Zbiornik albo wyeksploatowane złoże może w zasadzie przeciekać. Mineralizacja ma zamknąć węgiel w skale, żeby magazynem był kamień, nie sprężony pęcherz.',
    how: 'CO₂ rozpuszcza się przed wstrzyknięciem albo w jego trakcie, co też obniża ryzyko swobodnego pióropusza CO₂. Na Islandii woda i skała są dostępne obok elektrowni geotermalnych. Ta sama geologia nie istnieje wszędzie; inne prowincje bazaltowe (na przykład północny zachód USA albo Indie) są badane, nie kopiowane z dnia na dzień.',
    players:
      'Carbfix (wywodzący się z Reykjavík Energy / ON Power) w Hellisheiði; partner składowania dla Climeworks Orca i Mammoth. Prace Mattera, Oelkersa, Gíslasona i współpracowników udokumentowały wczesne wstrzyknięcia.',
    risks:
      'Potrzeba dużo wody i właściwej skały. Skalowanie poza Islandią to problem geologii tak samo jak inżynierii. Składuje węgiel, który już został wychwycony — samo z siebie nie wyciąga CO₂ z nieba.',
    sourcesNote:
      'Strona Carbfix; Matter et al., Science, 2016 — ponad 95% zatłoczonego CO₂ zmineralizowało się w mniej niż dwa lata w Hellisheiði.',
  },
  'precision-fermentation': {
    title: 'Fermentacja precyzyjna',
    hook: 'Mikroby, nie krowy, robią część białek, które jemy — jeśli cukier, prąd i smak się utrzymają.',
    imageAlt: 'Stalowe bioreaktory laboratoryjne używane do fermentacji przemysłowej',
    what: 'Fermentacja precyzyjna programuje drożdże albo bakterie, by wydzielały konkretne białko — mleczną serwatkę bez krowy albo pełnowartościowe białko spożywcze hodowane na wodorze i CO₂. Bezzwierzęca serwatka Perfect Day jest w komercyjnej żywności. Solein firmy Solar Foods to białko drobnoustrojów utleniających wodór, które dostało wczesne zgody rynkowe w niektórych krajach, nie skalę supermarketu.',
    problem:
      'Bydło i kurczaki są wydajne wobec przeszłości i wciąż chłoną ziemię, wodę i metan. Białko, które nie potrzebuje pola ani stada, mogłoby ściąć ten ślad — albo stać się kolejną żywnością przemysłową z własnym rachunkiem.',
    how: 'Zbiornik dostaje cukier (albo wodór i powietrze, dla Solein), minerały i tlen. Mikroby robią cząsteczkę docelową; bulion się oczyszcza. Zysk klimatyczny zależy od surowca i sieci. Cukier z wyciętej ziemi kasuje historię. Czysty prąd i cukry odpadowe trzymają ją przy prawdzie.',
    players:
      'Perfect Day (USA) przy białkach mlecznych; Solar Foods (Finlandia) przy Solein; wiele innych startupów wokół hemu, kazeiny i tłuszczów. Regulatorzy (FDA GRAS, przepisy nowej żywności w UE i Singapurze) decydują, co można sprzedawać.',
    risks:
      'Koszt, akceptacja konsumentów i ukryta ziemia w łańcuchu cukru. To nie rozwiązanie głodu i nie zamiennik każdego gospodarstwa. To sposób, by zrobić kilka składników o dużym wpływie bez zwierzęcia.',
    sourcesNote:
      'Oficjalne strony Perfect Day i Solar Foods / Solein. Kontekst ziemi pod hodowlę to osobna literatura, nie twierdzenie produktowe.',
  },
  'coral-restoration': {
    title: 'Technologia restauracji koralowców',
    hook: 'Szkółki, obsiew larwami i ramy rafowe potrafią odnowić koral na zatoce. Same nie przegonią gorącego oceanu.',
    imageAlt: 'Zdrowy ogród koralowców rozgałęzionych w czystej wodzie — żywy cel sprzętu restauracyjnego',
    what: 'Zestawy restauracyjne próbują przywrócić koral na uszkodzone rafy: farmy lądowe (Coral Vita), obsiew larwami i płytki osadnicze (SECORE) oraz ramy modułowe takie jak wspomagana restauracja raf firmy Mars („reef stars”). Fragmenty rosną szybciej niż dziki rekrut; larwy mogą zasiać szerszy areał, jeśli woda wciąż nadaje się do życia.',
    problem:
      'Ocieplenie i zakwaszenie wybieliły rafy w masowych zdarzeniach (w tym globalnie w latach 2023–2024). Szkody lokalne — dynamitowe połowy, osad, turystyka — dokładają się do upału. Martwa rafa traci rybołówstwo, ochronę brzegu i dużą część gatunków morskich, które potrzebują struktury.',
    how: 'Nurkowie albo łodzie wysadzają fragmenty albo osiadłe larwy na stabilne podłoże. Część projektów wybiera kolonie odporniejsze na ciepło. Sukces liczy się przeżyciem i latami wzrostu, nie zdjęciami prasowymi. Metoda jest prawdziwa; skala jest lokalna.',
    players:
      'SECORE International; Mars Sustainable Solutions (MARRS) w Indonezji i gdzie indziej; Coral Vita (hodowla lądowa, Bahamy); szkółki rządowe i NGO na Karaibach, Pacyfiku i w Trójkącie Koralowym. NOAA i ICRI publikują metody i limity.',
    risks:
      'Wysadzone kolonie giną w następnej fali upału, jeśli woda zostaje za ciepła. Restauracja nie jest licencją na dalsze emitowanie. Genetyka, choroby i wypalenie wolontariuszy to zwykłe tryby porażki. Traktuj każde „odbudowaliśmy rafę” jako stanowisko, nie biom.',
    sourcesNote:
      'NOAA Coral Reef Conservation Program i Coral Reef Watch; metody SECORE. Restytucja jest lokalna; rządzi upał.',
  },
  'nano-water-membranes': {
    title: 'Membrany z nanomateriałów',
    hook: 'Arkusze cienkie jak atom i szyte pory obiecują tańsze odsalanie i czystsze rozdziały — głównie wciąż w laboratorium.',
    imageAlt: 'Arkusz podobny do grafenu, klasa materiału dwuwymiarowego badana pod kątem membran wodnych i gazowych',
    what: 'Nanotechnologia oznacza tu membrany, których pory albo chemia powierzchni są projektowane w skali nanometra: laminaty tlenku grafenu, pory z nanorurek węglowych, kompozyty cienkowarstwowe z wypełniaczami nanocząstek. Nadzieja to wyższy strumień i lepsze odrzucanie soli albo zanieczyszczeń niż dzisiejsze polimerowe arkusze odwróconej osmozy.',
    problem:
      'Odsalanie i ponowne użycie ścieków już działają — i zjadają energię oraz chemię przeciw porostowi. Lepsza membrana ścięłaby prąd i czyszczenie. Ten sam zestaw narzędzi bada się pod rozdział CO₂ oraz warstwy elektrolizerów i ogniw paliwowych.',
    how: 'Badacze układają płatki albo hodują pory tak, by woda (albo gaz docelowy) przechodziła, a sole nie. Próbki laboratoryjne często wyglądają świetnie. Moduły, które wytrzymują lata na Morzu Czerwonym albo w ściekach komunalnych, są rzadsze. Komercyjną RO wciąż dominują filmy poliamidowe, nie materiały-cud.',
    players:
      'Prace nad grafenem na University of Manchester; programy membranowe NREL i laboratoriów narodowych; firmy robiące nanokompozytową RO cienkowarstwową (skromna, prawdziwa klasa produktu). Nagłówki „grafen odsoli świat” traktuj jako nadzieję, nie inwentarz.',
    risks:
      'Przeskalowanie filmu o powierzchni centymetra kwadratowego do zakładu o kilometrze kwadratowym, plus chlor, biofilm i koszt. Bezpieczeństwo nanomateriałów w kontakcie z wodą pitną wymaga regulacji, nie sloganów.',
    sourcesNote:
      'Nair et al., Nature, 2012; Abraham et al., Nature Nanotechnology, 2017. Komercyjny RO nadal jest poliamidowy.',
  },
  'carbios-enzymes': {
    title: 'Enzymy zjadające plastik — Carbios',
    hook: 'Enzym potrafi rozpiąć PET z powrotem do monomerów. Zakład pełnej skali wciąż jest problemem finansowania i inżynierii.',
    imageAlt: 'Zebrane butelki PET, surowiec, który recyklerzy enzymatyczni chcą depolimeryzować',
    what: 'W 2016 Yoshida i współpracownicy opisali bakterię Ideonella sakaiensis, która wydziela PETazę i potrafi rosnąć na PET. Inżynieryjne enzymy depolimeryzują dziś butelki i tkaniny poliestrowe dużo szybciej. Francuska firma Carbios prowadziła jednostki demonstracyjne i próbuje sfinansować pierwszy zakład przemysłowy w Longlaville (około 50 000 ton przygotowanego PET rocznie). Do 2026 zamknięcie finansowe wciąż nie było gotowe; o produkcji mówiono koło 2028, jeśli pieniądze przyjdą.',
    problem:
      'Mechaniczny recykling PET traci jakość. Większości tekstyliów poliestrowych w ogóle nie poddaje się recyklingowi. Prawdziwy cyrkularny monomer pozwoliłby butelkom i koszulom znów stać się butelkami i koszulami — jeśli zbiórka, sortowanie i energia się złożą.',
    how: 'Rozdrobniony PET miesza się z inżynieryjną hydrolazą w łagodnym cieple. Polimer spada z powrotem do kwasu tereftalowego i glikolu etylenowego, które można oczyścić i ponownie spolimeryzować. To chemia z katalizatorem białkowym, nie pryzma kompostu i nie magiczny mikrob wypuszczony do oceanu.',
    players:
      'Carbios (Francja) i partnerzy (w tym rozmowy licencyjne w Azji). Akademicka inżynieria PETazy trwa w wielu laboratoriach po Yoshida et al. 2016. Systemy zbiórki zostają w rękach gmin i marek — wąskie gardło równie często jak enzym.',
    risks:
      'Surowiec musi być stosunkowo czystym PET. Mieszany plastik wciąż wygrywa tym, że tanio go zakopać albo spalić. Opóźnienia zakładu są normalne przy recyklingu pierwszego w swoim rodzaju. Nie myl reaktora demonstracyjnego z rozwiązanym kryzysem odpadów.',
    sourcesNote:
      'Yoshida et al., Science, 2016. Oficjalne strony Carbios nie odpowiadały przy sprawdzeniu; Wikipedia nie jest źródłem. Longlaville w sierpniu 2026 wciąż czeka na finansowanie — to nie działający zakład.',
  },
  'methane-feed-additive': {
    title: 'Dodatek paszowy ograniczający metan bydła (Bovaer)',
    hook: 'Łyżka 3-NOP w dawce potrafi ściąć metan mleczny o około trzydzieści procent. To narzędzie, nie wegańska krowa.',
    imageAlt: 'Krowy mleczne holsztyńskie — zwierzęta, których metan żwacza celują dodatki 3-NOP',
    what: '3-nitrooksypropanol (3-NOP), sprzedawany jako Bovaer przez dsm-firmenich i licencjonowany z Elanco w Ameryce Północnej, hamuje enzym żwacza w ostatnim kroku produkcji metanu. Badania recenzowane i dossier firm wspierają spadek metanu jelitowego rzędu 30 procent u karmiących krów mlecznych przy dawkach z etykiety. UE zezwoliła na niego w 2022. W maju 2024 amerykańska FDA zakończyła przegląd i dopuściła marketing w ramach uznaniowego egzekwowania.',
    problem:
      'Bydło jest dużym źródłem metanu, krótkotrwałego, ale silnego gazu cieplarnianego. Dodatki paszowe, hodowla i lepsze zdrowie mogą ściąć ten strumień, póki stada istnieją. Nie wymazują użytkowania ziemi ani podtlenku azotu.',
    how: 'Dodatek miesza się z całkowitą dawką TMR w skali gramów na krowę na dzień. Trzeba go podawać codziennie. Wielkość efektu zależy od diety. To nie szczepionka i nie genetyczny przepis zwierzęcia na nowo.',
    players:
      'dsm-firmenich (deweloper); Elanco (komercjalizacja w Ameryce Północnej); spółdzielnie mleczne testujące płatności za wkład węglowy. Inne narzędzia metanowe (wodorost asparagopsis, rywale 3-NOP) są w równoległych próbach.',
    risks:
      'Koszt wobec ceny mleka; nieufność publiczna; i pokusa, by nazwać cięcie o 30 procent „klimatycznie neutralną wołowiną”. Przeniesienie emisji, jeśli stada rosną. Dodatki z wodorostów mają własne pytania o brom i podaż — ta karta jest o 3-NOP, nie o każdym twierdzeniu paszowym.',
    sourcesNote:
      'Rozporządzenie UE 2022/565; nota dsm-firmenich o przeglądzie FDA z maja 2024. Około 30% metanu jelitowego u krów mlecznych przy dawce z etykiety to liczba z dossier, nie „klimatycznie neutralna wołowina”.',
  },
  'iter-fusion': {
    title: 'ITER — fuzja z uwięzieniem magnetycznym',
    hook: 'Największy tokamak świata buduje się we Francji. To eksperyment fizyczny, nie elektrownia.',
    imageAlt: 'Widok z powietrza na plac budowy ITER w Cadarache we Francji, 2018',
    what: 'ITER to tokamak w budowie w Cadarache we Francji, finansowany przez Chiny, UE, Indie, Japonię, Koreę, Rosję i Stany Zjednoczone. Maszyna ma wytworzyć palącą się plazmę deuter–tryt i zbadać, czy zysk fuzyjny wyraźnie powyżej jedności jest możliwy w skali istotnej dla reaktora. Nie będzie sprzedawać prądu.',
    problem:
      'Paliwa kopalne wciąż dominują ciepło i moc. Fuzja obiecuje gęstą, niskoemisyjną energię bez długożyciowego wypalonego paliwa w stylu rozszczepienia — jeśli elektrownia potrafi pracować, hodować tryt i przetrwać uszkodzenia neutronowe. Nic z tego nie jest wykazane w sieci.',
    how: 'Nadprzewodzące magnesy trzymają gorącą plazmę w pączku. Układy grzania pchają ją ku temperaturom, w których fuzja D–T jest prawdopodobna. Harmonogram z 2016 celował kiedyś w pierwszą plazmę w 2025; późniejsze linie bazowe przesunęły tę datę po wadach produkcyjnych, COVID i wzroście kosztów. Publiczne briefingi z połowy lat 2020. wskazują pierwszą plazmę później w latach 2030., a deuter–tryt jeszcze później. Każdą linię „nieograniczona komercyjna fuzja w tej dekadzie” traktuj jako marketing.',
    players:
      'ITER Organization i siedmiu członków. Prywatne firmy tokamaków i stellaratorów (Commonwealth Fusion, Tokamak Energy i inne) idą szybszym, ryzykowniejszym zegarem; to nie ITER i nie działające spółki energetyczne.',
    risks:
      'Koszt, podaż trytu, materiały pod neutronami 14 MeV i harmonogram. Sukces ITER i tak zostawiłby do zaprojektowania demonstracyjną elektrownię. Porażka nie zakończyłaby prywatnych eksperymentów, ale zamknęłaby ścieżkę publiczną.',
    sourcesNote:
      'Strona i FAQ ITER. Data pierwszej plazmy 2025 z linii bazowej 2016 jest nieaktualna; późniejsze plany wskazują na badania w latach 30.',
  },
  'nif-inertial-fusion': {
    title: 'NIF — zapłon fuzji inercyjnej',
    hook: '5 grudnia 2022 strzał laserowy dał więcej energii fuzyjnej, niż dostarczył do tarczy. Budynek wciąż bierze z sieci moc elektrowni.',
    imageAlt: 'Komora tarczy National Ignition Facility w Lawrence Livermore National Laboratory',
    what: 'National Ignition Facility w Lawrence Livermore National Laboratory odpala 192 wiązki laserowe w maleńką kapsułę. 5 grudnia 2022 kapsuła dała około 3,15 MJ energii fuzyjnej po tym, jak do tarczy dotarło około 2,05 MJ — pierwszy kontrolowany zapłon, zwany też naukowym progiem opłacalności na tarczy. Późniejsze strzały powtórzyły i czasem przekroczyły ten wynik. Zadaniem NIF jest nadzór nad arsenałem i nauka, nie turbina.',
    problem:
      'Inercyjna energia fuzyjna (IFE) to druga ścieżka obok tokamaków: wiele maleńkich implozji na sekundę zamiast stałej magnetycznej butli. Zapłon pokazał, że fizyka potrafi zadziałać. Elektrownia potrzebowałaby tanich tarcz, wysokiej częstości powtórzeń i sprawności od gniazdka, której NIF nie ma.',
    how: 'Lasery zamieniają się w promieniowanie X wewnątrz hohlraumu; kapsuła imploduje; deuter–tryt fuzjonuje przez ułamek sekundy. Same lasery biorą ze ściany dużo więcej energii niż 2 MJ, które dochodzą do tarczy. Ta luka jest powodem, dla którego to nie elektrownia.',
    players:
      'LLNL / NNSA (NIF). Prywatne firmy IFE (na przykład Focused Energy, Xcimer, Marvel Fusion i inne) próbują laserów o wyższej sprawności albo innych driverów. DOE wznowił skoordynowany program IFE po zapłonie.',
    risks:
      'Mylenie zysku tarczy z zyskiem elektrowni. Priorytety laboratorium broni. Produkcja tarcz w tempie elektrowni jest nierozwiązana. Uczciwa rozmowa mówi „zapłon się zdarzył” i „komercyjne IFE — nie”.',
    sourcesNote:
      'Strona zapłonu LLNL; komunikat DOE z 13 grudnia 2022 (strzał 5 grudnia 2022: ok. 2,05 MJ na tarczę, 3,15 MJ wydajności fuzji). Wzmocnienie tarczy to nie wzmocnienie elektrowni.',
  },
  'fervo-geothermal': {
    title: 'Wspomagana geotermia — Fervo',
    hook: 'Odwierty poziome i sztuczki szczelinowania, użyte na gorącej skale zamiast ropy, dały prąd w Nevadzie w 2023.',
    imageAlt:
      'Elektrownia geotermalna The Geysers w Kalifornii — działające pole pary, które wspomagana geotermia chce skopiować w nowej skale',
    what: 'Wspomagane systemy geotermalne (EGS) wiercą w gorącą skałę bez naturalnego zbiornika hydrotermalnego, potem tworzą ścieżkę przepływu i puszczają przez nią wodę. Project Red firmy Fervo Energy w Nevadzie wyprodukował bezemisyjny prąd w 2023 i zasilił kontrakt na centrum danych Google. Cape Station w Utah to większa kontynuacja w budowie, z późniejszymi umowami odbioru (w tym PPA Google z 2026 celującym w pracę pod koniec dekady).',
    problem:
      'Klasyczna geotermia jest rzadka: potrzebujesz ciepła, wody i przepuszczalności w tym samym miejscu. Większość ciepła Ziemi jest w suchej skale. EGS próbuje odblokować to ciepło bez czekania na gejzer.',
    how: 'Poziome wiercenie i stymulacja w stylu naftowym otwierają parę odwiertów. Woda krąży, zbiera ciepło i napędza na powierzchni elektrownię binarną albo flash. Sejsmiczność indukowaną trzeba monitorować. To nie „darmowa energia”; to wydobycie ciepła stalą i pompami.',
    players:
      'Fervo Energy (USA); Google jako wczesny odbiorca; inne firmy EGS i zaawansowanej geotermii (zamknięte pętle Eavor, rządowe stanowisko FORGE w Utah). Tradycyjna hydrotermia wciąż dostarcza większość geotermalnych megawatów na świecie.',
    risks:
      'Koszt wiercenia, wstrząsy, zużycie wody i zwykłe opóźnienia instalacji pierwszego egzemplarza. Udany pilotaż to nie terawat. Geologia bywa różna; odwiert w Nevadzie nie jest globalnym szablonem.',
    sourcesNote:
      'Noty Fervo i Google o Project Red (prąd w 2023). Późniejsze PPA Cape Station to kontrakty na koniec dekady, nie elektrony.',
  },
  'long-duration-storage': {
    title: 'Baterie długoczasowe',
    hook: 'Lit pokrywa szczyt wieczorny. Magazyn wielodniowy to nierozwiązany kawałek sieci wiatru i słońca.',
    imageAlt: 'Kontenerowe moduły baterii sieciowych w amerykańskim projekcie magazynowania energii',
    what: 'Magazynowanie energii długoczasowe (LDES) znaczy godziny do dni, nie czterogodzinne pakiety litowe, które już zarabiają. Bateria żelazo-powietrze Form Energy jest zaprojektowana na około 100 godzin i jest w pilotażach u operatorów (w tym projekt Great River Energy celujący w pracę w środku dekady). Wanad i inne baterie przepływowe są już w niszach komercyjnych; projekt Turner w Pullman w Waszyngtonie to jedna z wczesnych elektrowni przepływowych.',
    problem:
      'Gdy wiatr cichnie na trzy dni, czterogodzinna bateria jest poduszką, nie kręgosłupem. Lukę dziś wypełniają gazowe bloki szczytowe. Tani magazyn wielodniowy pozwoliłby sieciom podnieść udział OZE bez udawania, że pogoda jest opcjonalna.',
    how: 'Ogniwa żelazo-powietrze „rdzewieją” żelazo, by magazynować energię, i odrdzewiają je przy rozładowaniu — obfite materiały, niska gęstość energii, duże place. Baterie przepływowe trzymają ciekłe elektrolity w zbiornikach, które można powiększyć. Oba wymieniają masę i hektary na czas. Żadne nie jest cudem fizyki.',
    players:
      'Form Energy; dostawcy baterii przepływowych (UniEnergy / chemie następcze, Invinity i inne); sprężone powietrze i magazyny termiczne jako kuzyni niebateryjne. Programy LDES IEA i DOE śledzą pole.',
    risks:
      'Straty obiegu, lokalizacja i to, czy wodór albo więcej przesyłu jest tańsze. Nie licz ogłoszonych gigafabryk jako dostarczonych MWh. Lit zostaje koniem roboczym na krótki czas.',
    sourcesNote:
      'Strony technologii Form Energy; śledzenie magazynów IEA. Ogłoszone instalacje wielodniowe to nie dostarczone MWh.',
  },
  'green-hydrogen': {
    title: 'Zielony wodór',
    hook: 'Przydatny do stali, amoniaku i statków. Marnotrawny jako domyślny sposób na ogrzewanie domów albo ruszanie aut.',
    imageAlt: 'Duży kriogeniczny zbiornik wodoru — przemysłowy sprzęt wodorowy już używany na stanowiskach startowych',
    what: '„Zielony” wodór to H₂ z elektrolizy wody zasilanej niskoemisyjnym prądem. Cząsteczka jest prawdziwa i już używana w rafinerii ropy i nawozach ze szlaków kopalnych (wodór „szary”). Etykieta zielona dotyczy źródła prądu, nie nowej fizyki.',
    problem:
      'Część przemysłu potrzebuje cząsteczki, nie samego elektronu: amoniak, bezpośrednio redukowane żelazo i niektóre paliwa dalekiego zasięgu. Wodór może magazynować energię przez sezony. Jest słabym sposobem na robotę, którą prąd potrafi zrobić wprost.',
    how: 'Elektrolizery rozszczepiają wodę. Sprężanie, skraplanie albo konwersja do amoniaku potem zjadają jeszcze więcej energii. Przeglądy IEA i akademickie zwykle znajdują duże straty na drodze od prądu odnawialnego do auta albo kotła wodorowego — często wyraźnie ponad połowę energii wyjściowej. Dlatego pompy ciepła i baterie wygrywają te zastosowania fizyką, nie modą.',
    players:
      'Śledzenie wodoru IEA; producenci elektrolizerów (Nel, ITM, Thyssenkrupp Nucera i inni); odbiorcy przemysłowi w stali i amoniaku. Wiele „dolin wodorowych” wciąż zależy od grantów.',
    risks:
      'Ucieczki (wodór jest pośrednim gazem cieplarnianym), szum wokół mieszania w sieciach gazowych i używanie brudnego prądu do robienia „zielonego” paliwa. Licz tony wyprodukowane z dodatkowych OZE, nie komunikaty prasowe.',
    sourcesNote:
      'Strona wodorowa IEA i Global Hydrogen Review. Licz tony z dodatkowego niskoemisyjnego prądu, nie komunikaty prasowe.',
  },
  'smr-nuclear': {
    title: 'Modularna i zaawansowana energetyka jądrowa',
    hook: 'Chiński HTR-PM wszedł do eksploatacji komercyjnej w grudniu 2023. Większość zachodnich logo SMR nie wylała jeszcze pierwszego betonu.',
    imageAlt: 'Pracująca elektrownia jądrowa — kontekst dla modularnego rozszczepienia, nie zdjęcie konkretnego SMR',
    what: 'Małe reaktory modularne (SMR) i niektóre projekty IV generacji celują w moduły z fabryki, a w kilku przypadkach w nowe chłodziwa. Chiński HTR-PM w Shidaowan — dwa moduły ze złożem żwirowym po 250 MWt zasilające jedną turbinę ~210 MWe — skończył bieg demonstracyjny i wszedł do eksploatacji komercyjnej w grudniu 2023, pierwszy modularny wysokotemperaturowy reaktor gazowy w skali komercyjnej. W USA projekt Carbon Free Power Project NuScale w Idaho został odwołany w listopadzie 2023 po wzroście kosztów, mimo że projekt miał zgodę NRC.',
    problem:
      'Rozszczepienie już dostarcza gęstą, niskoemisyjną moc. Nowe budowy na Zachodzie były wolne i drogie. Mniejsze reaktory obiecują mniej kapitału na ryzyku — nadzieję, która musi przeżyć koszty pierwszego egzemplarza, a te często idą w drugą stronę.',
    how: 'HTR-PM używa paliwa żwirowego chłodzonego helem i jest zaprojektowany tak, by wyłączać się bez aktywnego awaryjnego chłodzenia rdzenia w testowanych warunkach. SMR wodne to w zasadzie mniejsze PWR. Nic z tego nie jest „nieograniczoną energią”. To inżynieria jądrowa z innym rozmiarem modułu.',
    players:
      'China National Nuclear / Tsinghua INET (HTR-PM); NuScale, GE Hitachi BWRX-300, Rolls-Royce SMR i inni w licencjonowaniu. Użytkownicy ciepła polarnego i przemysłowego są klientami na slajdach.',
    risks:
      'Odpady, proliferacja, przekroczenie kosztów i używanie „modularny” jako sloganu dla zakładu, który wciąż jest dużym projektem cywilnym. Jeden chiński demo nie robi globalnej floty. Nie wiąż SMR z fuzją ani z oszukańczymi bateriami.',
    sourcesNote:
      'Tsinghua i World Nuclear News o eksploatacji komercyjnej HTR-PM (grudzień 2023); strona SMR IAEA. Jeden chiński demo to nie zachodnia flota.',
  },
  'space-solar-power': {
    title: 'Energia słoneczna z kosmosu',
    hook: 'Demo Caltechu z 2023 przesłało strumyczek mocy z orbity. Fizyka działa; ekonomia jest pytaniem.',
    imageAlt: 'Panele słoneczne Międzynarodowej Stacji Kosmicznej — najbliższy działający kuzyn proponowanych satelitów energetycznych',
    what: 'Kosmiczna energetyka słoneczna (SBSP) zbierałaby światło na orbicie i słała energię na Ziemię jako mikrofale albo lasery. SSPD-1 Caltechu wystartował w styczniu 2023; MAPLE pokazał orbitalny bezprzewodowy transfer mocy — i wykrywalny strumyczek na Ziemi — w marcu 2023. Miliwaty, nie megawaty. Studium SOLARIS ESA i prace mikrofalowe JAXA to publiczne linie badawcze. To nie elektrownia.',
    problem:
      'Noc i pogoda ograniczają solar lądowy. Orbita może widzieć Słońce przez większą część czasu. Haczyk to masa startowa, montaż, bezpieczeństwo wiązki i koszt każdego kilograma.',
    how: 'Duża matryca fotowoltaiczna albo koncentrator zasila nadajnik z układem fazowanym. Rektenna na ziemi zamienia wiązkę w prąd. Sprawność i ziemia pod rektennę to zwykła inżynieria; tani, częsty ciężki start jeszcze nie jest zwyczajny.',
    players:
      'Caltech Space Solar Power Project (MAPLE / SSPD-1, 2023); ESA SOLARIS; długotrwałe demo mikrofalowe JAXA; kilka startupów. NASA i IEA traktują SBSP jako rozpoznanie, nie jako klin redukcji na 2030.',
    risks:
      'Koszt na wat, śmieci orbitalne, sterowanie wiązką i slajdy science fiction. Udane demo miliwatowe to nie przemysł terawatowy. Trzymaj tę kartę obok fuzji: poważne badania, nie generator domowy.',
    sourcesNote:
      'Komunikat Caltech SSPD-1 / MAPLE (start styczeń 2023; demo MAPLE marzec 2023); ESA SOLARIS.',
  },
  'nano-electrolyzer-catalysts': {
    title: 'Nanostrukturalne katalizatory elektrolizerów',
    hook: 'Zielony wodór ogranicza iryd i energia. Nanotechnologia próbuje zużyć mniej metalu, nie wymyślić darmowego paliwa.',
    imageAlt: 'Stos PEM ogniwa paliwowego / elektrolizera — sprzęt, którego warstwy katalizatora nanotechnologia próbuje ścieńczyć',
    what: 'Elektrolizery z membraną do wymiany protonów używają metali grupy platyny, zwłaszcza rzadkiego irydu po stronie tlenu. Laboratoria (NREL i wiele uczelni) hodują nanocząstki, kryształy rdzeń-powłoka i nanostrukturalne nośniki, żeby każdy atom metalu robił więcej roboty. Część receptur nisko-irydowych albo bez metali szlachetnych działa w zlewce; niewiele ma za sobą lata godzin przemysłowych.',
    problem:
      'Jeśli elektroliza ma uczynić stal i amoniak czystszymi, stosy muszą potanieć i mniej zależeć od maleńkiego rynku irydu. To problem materiałowy, nie problem perpetuum mobile.',
    how: 'Duża powierzchnia i właściwa ściana kryształu podnoszą aktywność. Trwałość w kwasie i przy wysokim prądzie to zwykła porażka. Membrana (jonomery klasy Nafion) i porowate warstwy transportowe to reszta kanapki.',
    players:
      'Grupy materiałowe wodoru i ogniw paliwowych NREL; przemysłowi producenci stosów z kart IEA o elektrolizerach; grupy akademickie publikujące w Nature Energy i Joule.',
    risks:
      'Gęstość prądu z laboratorium, która umiera po 100 godzinach. Mgła patentowa. Mylenie pracy o katalizatorze z fabryką gigawatową.',
    sourcesNote:
      'Wodór DOE (USA); śledzenie elektrolizerów IEA. Artykuł o katalizatorze to nie fabryka gigawatowa.',
  },
  'perpetual-motion': {
    title: 'Perpetuum mobile — dlaczego zawodzi',
    hook: 'Zamknięta maszyna nie może chodzić wiecznie ani robić „darmowej nieskończonej energii”. To nie spisek. To termodynamika.',
    imageAlt: 'Historyczna rycina schematu perpetuum mobile ze ślimakiem wodnym — zamknięty obieg, który nie może się sam karmić',
    what: 'Maszyny perpetuum mobile pierwszego rodzaju twierdzą, że robią energię z niczego (łamią zachowanie energii). Maszyny drugiego rodzaju twierdzą, że zamieniają ciepło w całości w pracę bez innego skutku (łamią drugą zasadę). Generatory nadjednościowe, silniki magnetyczne i zestawy „darmowej energii” sprzedawane w sieci należą do tej rodziny. Żaden nie przeszedł kompetentnego, niezależnie powtórzonego testu.',
    problem:
      'Życzenie jest zrozumiałe: gęsta, czysta, nieograniczona energia. Oszustwem jest sprzedaż koła, magnesu albo tajnego obwodu jako tego życzenia. Każda poważna ścieżka — fuzja, rozszczepienie, geotermia, magazyn długoczasowy, solar z kosmosu — wciąż słucha tych samych praw.',
    how: 'Tarcie, opór elektryczny i promieniowanie zjadają każdy prawdziwy obieg. Magnesy nie pchają wirnika w zamkniętej pętli za darmo; pole jest zachowawcze. Ukryta bateria albo błąd pomiaru to zwykły „dowód”. Jeśli urządzenie potrzebuje ukrytego przewodu zasilającego, nie jest cudem.',
    players:
      'Żadnego laboratorium z zapisem. Urzędy patentowe od dawna odrzucają zgłoszenia perpetuum mobile bez działającego modelu. Poważne badania obfitej energii — pozostałe karty w tej półce Energii: ITER, NIF, wspomagana geotermia, magazyn długoczasowy, wodór (ze wskazanymi stratami), modularna energetyka jądrowa i solar z kosmosu.',
    risks:
      'Stracone pieniądze, stracony czas i szum polityczny, który topi pracę, która naprawdę istnieje. Fix Planet nie wpisze wynalazcy „darmowej energii” jako rozwiązania.',
    sourcesNote:
      'Praktyka USPTO odrzuca zgłoszenia perpetuum mobile bez działającego modelu. Termodynamika nie jest opcjonalna. Prawdziwe badania energii są na pozostałych kartach działu.',
  },
  'graphcast-ai-weather': {
    title: 'Modele pogodowe SI — GraphCast',
    hook: 'Grafowa sieć neuronowa dorównuje dziś klasycznym prognozom średnioterminowym — i wciąż potrzebuje satelitów.',
    imageAlt: 'Obraz pełnej tarczy Ziemi z GOES-16 — obserwacje, na których trenują i działają modele pogodowe SI',
    what: 'GraphCast (Google DeepMind, Science, 2023) to model uczenia maszynowego, który przewiduje pogodę globalną na około dziesięć dni naprzód z grafu atmosfery, trenowany na reanalizie ECMWF. FourCastNet (NVIDIA) i Pangu-Weather (Huawei) to kuzyni. Służby meteorologiczne uruchamiają dziś takie modele obok kodów fizyki, nie zamiast nich.',
    problem:
      'Pogoda i ryzyko sezonowe napędzają farmy, sieci i reagowanie na katastrofy. Szybsze, tańsze prognozy pomagają — zwłaszcza tam, gdzie brakuje superkomputerów. Zmiana klimatu wciąż potrzebuje modeli fizyki wolnego oceanu i lodu; dziesięciodniowa prognoza ML nie jest projekcją na rok 2100.',
    how: 'Model uczy się odwzorowań ze stanów przeszłych na przyszłe. Nie „rozumie” dynamiki płynów; ją przybliża. Umiejętność mierzy się wobec analizy ECMWF, nie wobec dema prasowego. Gdy świat treningu się przesunie, model może zawodzić na nowe sposoby.',
    players:
      'Google DeepMind; ECMWF (dane i porównanie); NVIDIA FourCastNet; Huawei Pangu-Weather; narodowe służby pogody testujące jądra ML.',
    risks:
      'Nadmierne zaufanie, słabe ekstrema i pomijanie systemu obserwacji (satelity, radiosondy), który czyni jakikolwiek model uczciwym. Pogoda SI to infrastruktura, nie chatbot.',
    sourcesNote:
      'Lam et al., Science, 14 listopada 2023 (GraphCast); strona DeepMind. Umiejętność mierzy się wobec systemów ECMWF, nie wobec dema prasowego.',
  },
  'gnome-materials': {
    title: 'GNoME — SI do materiałów',
    hook: 'Model zaproponował setki tysięcy może-stabilnych kryształów. Chemia i tak musi je zrobić.',
    imageAlt: 'Kryształ kwarcu — rodzaj uporządkowanego ciała stałego, który modele materiałów próbują badać szybciej niż metodą prób i błędów',
    what: 'GNoME (Graph Networks for Materials Exploration), z DeepMind ze współpracownikami z Berkeley, użył sieci grafowych i istniejących baz materiałów, by przewidzieć bardzo duży zbiór potencjalnie stabilnych kryształów nieorganicznych (2023). Część predykcji później zsyntetyzowano. To narzędzie przeszukiwania, nie gotowa bateria.',
    problem:
      'Lepsze katalizatory, elektrody i membrany dławią się tym, jak wolno ludzie próbują receptur. Jeśli technologia klimatyczna potrzebuje nowych ciał stałych, szybszy screening ma znaczenie — po tym, jak mokre laboratorium je potwierdzi.',
    how: 'Model ocenia stabilność i, z innymi narzędziami, właściwości. Obliczenia wysokoprzepustowe i laboratoria robotyczne mogą przetestować plaster. Większość przewidzianych kryształów będzie bezużyteczna, niestabilna w powietrzu albo już znana pod inną nazwą. To normalne przy przeszukiwaniu.',
    players:
      'Google DeepMind; Lawrence Berkeley National Laboratory / Materials Project; inne grupy modeli fundacyjnych materiałów (Microsoft, Meta, laboratoria akademickie).',
    risks:
      'Nadmuch liczby prac, nagłówki „SI odkryła nadprzewodnik” i pomijanie toksyczności oraz skalowania. Przewidziana katoda Li-ion to nie gigafabryka.',
    sourcesNote:
      'Merchant et al., Nature, 2023; strona GNoME DeepMind. Przewidziane kryształy trzeba jeszcze wyhodować.',
  },
  'ai-grid-optimization': {
    title: 'SI dla sieci elektroenergetycznej',
    hook: 'Lepsze prognozy wiatru i narzędzia dyspozycji ścinają rezerwy. Nie zastępują transformatorów.',
    imageAlt: 'Słupy przesyłowe wysokiego napięcia — fizyczna sieć, na której siedzi oprogramowanie optymalizacji',
    what: 'Operatorzy sieci już używają optymalizacji. Uczenie maszynowe dokłada szybsze prognozy wiatru, słońca i popytu, a czasem sugeruje dyspozycję. Opublikowany w 2019 wynik DeepMind dotyczył farm wiatrowych Google w USA: sieć neuronowa przewidywała moc na około 36 godzin naprzód i podniosła wartość tych megawatów o około 20 procent wobec zobowiązań bez ram czasowych. Rozmowy z brytyjskim National Grid były rozpoznaniem i nie stały się wdrożonym produktem sieciowym. Inni operatorzy próbują podobnych narzędzi.',
    problem:
      'Zmienne OZE potrzebują lepszej predykcji i szybszego sterowania, albo palimy więcej gazu „na wszelki wypadek”. Zatory i stabilność oparta na falownikach to osobne, trudniejsze problemy.',
    how: 'Modele wchłaniają pogodę i historie w stylu SCADA i dają ciaśniejszą prognozę albo rekomendowany punkt nastawy. Ludzie i istniejące systemy zarządzania energią zostają w pętli. Blackout nie jest akceptowalnym biegiem treningowym.',
    players:
      'Google DeepMind na farmach wiatrowych Google w USA (publicznie 2019); różne pilotaże ISO/RTO i dostawców; późniejsze brytyjskie prognozy słońca grup takich jak Open Climate Fix. Raporty digitalizacji IEA przeglądają pole.',
    risks:
      'Cyberbezpieczeństwo, ukryte obciążenie, gdy pogoda jest nowa, i sprzedawcy twierdzący „sieć SI”. Fizyka falowników i zabezpieczeń wciąż rządzi.',
    sourcesNote:
      'Nota DeepMind z 26 lutego 2019 o wartości wiatru (farmy Google w USA); IEA Digitalisation and Energy. Rozmowy z National Grid nie stały się produktem.',
  },
  'alphafold-proteins': {
    title: 'AlphaFold — białka dla nauki',
    hook: 'Predykcja struktury stała się działającym narzędziem w 2021. Zaprojektowanie enzymu klimatycznego to następny, wolniejszy krok.',
    imageAlt: 'Wstążkowy diagram białka na ciemnym tle — klasa struktur, które te modele przewidują',
    what: 'AlphaFold 2 (DeepMind, Nature, 2021) przewidywał struktury białek jednołańcuchowych z użyteczną dokładnością; AlphaFold Database oddał setki milionów predykcji w ręce publiczne. AlphaFold 3 (2024) dodał więcej kompleksów i biomolekuł. ESMFold (Meta) oraz RoseTTAFold / RFdiffusion (laboratorium Bakera) siedzą w tej samej skrzynce. To wdrożone oprogramowanie naukowe, nie chatbot.',
    problem:
      'Enzymy, które jedzą plastik, czystej wiążą azot albo wychwytują węgiel, to problemy projektowania białek. Znać zwinięcie to nie to samo co stabilny, tani, nietoksyczny enzym przemysłowy — ale zdejmuje to wąskie gardło liczone w latach.',
    how: 'Model uczył się z Protein Data Bank i parowań ewolucyjnych. Laboratoria wciąż eksprymują, oczyszczają i testują aktywność. RFdiffusion i pokrewne narzędzia generują nowe szkielety; porażka mokrego laboratorium zostaje częsta.',
    players:
      'Google DeepMind i EMBL-EBI (AF Database); Meta ESM; University of Washington Institute for Protein Design (Baker); biotech przemysłowy używający narzędzi na enzymach i lekach.',
    risks:
      'Bezpieczeństwo biologiczne (te same narzędzia potrafią naszkicować szkodliwe białka — laboratoria i czasopisma omawiają dziś przesiew). Nadmierne twierdzenie, że przewidziana PETaza to zakład recyklingu. Energia i woda fermentora wciąż się liczą.',
    sourcesNote:
      'Jumper et al., Nature, 2021; baza AlphaFold (EMBL-EBI). Przewidziane zwinięcie to nie enzym przemysłowy.',
  },
  'amp-recycling-robots': {
    title: 'Roboty recyklingowe — AMP',
    hook: 'Kamery i ramiona już zbierają kartony i butelki na prawdziwych liniach sortowniczych. Nie wymyślają rynku na belę.',
    imageAlt: 'Przemysłowe ramię robota sortujące butelkę PET na taśmie recyklingowej',
    what: 'Sortownie odpadów (MRF) od dawna używają prądów wirowych i sorterów optycznych. AMP Robotics i podobne firmy dokładają widzenie komputerowe i ramiona robotów, które zbierają konkretne przedmioty z prędkością ludzką albo lepszą. Systemy stoją w działających zakładach w Stanach Zjednoczonych i innych krajach — wdrożony sprzęt, nie film koncepcyjny.',
    problem:
      'Ludzie są drodzy i ranni na liniach; zanieczyszczenie psuje bele; miasta chcą wyższych wskaźników recyklingu. Robot, który się nie nudzi, potrafi podnieść czystość. Nie stworzy popytu na mieszaną folię plastikową.',
    how: 'Kamera klasyfikuje obiekty na taśmie; ramię ssące albo chwytak wrzuca cel do zsypu. Model dotrenowuje się, gdy opakowania się zmieniają. Przepustowość liczy się chwytami na minutę, nie „SI”.',
    players:
      'AMP Robotics; konkurenci w Europie i Azji; tradycyjne firmy sorterów optycznych (TOMRA i inne), które teraz wysyłają własne ML. Firmy odpadowe i gminy są nabywcami.',
    risks:
      'Jeśli młyn odbioru się zamyka, robot sortuje do bunkra idącego na składowisko. Zakazy eksportu i tani dziewiczy plastik wciąż ustawiają ekonomię. To sortowanie, nie alchemia.',
    sourcesNote:
      'Strona AMP Sortation / AMP Robotics. Sortowanie to nie rynek na belę.',
  },
  'quantum-computing': {
    title: 'Komputery kwantowe — nadzieje chemii',
    hook: 'Publiczne maszyny IBM, Google i IonQ dokładają kubity. Nie zaprojektowały jeszcze katalizatora klimatycznego.',
    imageAlt: 'Komputer kwantowy klasy IBM Q System One — żyrandol kabli nad chłodziarką rozcieńczalnikową',
    what: 'Komputery kwantowe używają superpozycji i splątania, by badać niektóre problemy, które na zwykłych chipach skalują się źle — w teorii struktura elektronowa cząsteczek jest jedną z nich. IBM opublikował procesory nadprzewodzące od kilkuset do tysiąca kubitów (w tym Condor w 2023) i mniejsze, wyższej jakości chipy Heron. Procesor Willow Google (2024) zgłosił postęp w korekcji błędów. IonQ używa uwięzionych jonów. Wszystko to jest sprzętem badawczym w erze NISQ do wczesnej odporności na błędy.',
    problem:
      'Nawozy, baterie i chemia węgla są kwantowo-mechaniczne na atomie. Gdyby maszyna odporna na błędy potrafiła zasymulować katalizator, którego jeszcze nie ma, miałoby to znaczenie. Tej maszyny nie mamy.',
    how: 'Kubity nadprzewodzące siedzą w chłodziarce rozcieńczalnikowej. Jony siedzą w pułapkach elektromagnetycznych. Wskaźniki błędów wciąż są wysokie; użyteczna dokładność chemiczna potrzebuje korekcji błędów i starannego mapowania problemu. „Przewaga kwantowa” z wycieczki prasowej na sztucznym zadaniu to nie reaktor amoniaku.',
    players:
      'IBM, Google Quantum AI, IonQ, Quantinuum, grupy akademickie. Partnerzy chemiczni (Boeing, Mercedes, laboratoria narodowe) uruchamiają algorytmy eksploracyjne. Publiczne kamienie milowe są prawdziwe; twierdzenia produktowe powinny być datowane i wąskie.',
    risks:
      'Cykle szumu, kontrole eksportu i zużycie energii stosu sterowania. Nie pisz science fiction o natychmiastowych modelach klimatu. Klasyczne obliczenia wysokiej wydajności wciąż robią robotę klimatyczną.',
    sourcesNote:
      'Ogłoszenie Google Willow (9 grudnia 2024); strony IBM Quantum. Publiczne maszyny nie zaprojektowały jeszcze katalizatora klimatycznego.',
  },
  'climate-trace': {
    title: 'Climate TRACE — widzieć emisje',
    hook: 'Satelity i uczenie maszynowe szacują dziś wiele smug niezależnie od tego, co zgłasza ministerstwo.',
    imageAlt: 'Rafineria ropy o zmierzchu — klasa zakładu przemysłowego, który inwentarze emisji próbują mierzyć z kosmosu',
    what: 'Climate TRACE to koalicja, która publikuje globalny inwentarz emisji gazów cieplarnianych zbudowany z satelitów, innej teledetekcji i uczenia maszynowego, a nie z samozgłoszonych sum samych. Pokrewne systemy publiczne to GHGSat (komercyjne smugi metanu) i Carbon Mapper (metan i CO₂ jako dobro publiczne). Sens to niezależne widzenie, nie nowy piec.',
    problem:
      'Inwentarze się nie zgadzają. Wycieki metanu z ropy, gazu i węgla są często wyższe niż zgłoszone. Nie zarządzisz tym, czego odmawiasz zmierzyć.',
    how: 'Modele uczą się wyglądu elektrowni, tuczarni albo flary i szacują aktywność oraz czynniki emisji, potem scalają to z odtworzeniami stężeń w atmosferze, gdzie takie pomiary istnieją. Każda liczba ma niepewność. Jasny piksel to trop, nie wyrok sądu.',
    players:
      'Koalicja Climate TRACE (organizacje non-profit, firmy, uczelnie); GHGSat; Carbon Mapper (w tym partnerstwa NASA/JPL); IMEO (UNEP) nauka o metanie. Krajowe inwentarze zostają prawną linią bazową.',
    risks:
      'Fałszywe smugi, polityczny odwet i traktowanie pulpitu jako egzekucji. Satelity jedne sektory widzą lepiej niż inne (laguna mleczna ≠ miasto motorowerów dwusuwowych).',
    sourcesNote:
      'Inwentarz i metodyka Climate TRACE. Jasny piksel to trop, nie wyrok sądu.',
  },
  'prithvi-earth-ai': {
    title: 'Prithvi — modele fundacyjne Ziemi',
    hook: 'NASA i IBM wytrenowały otwarty model na latach zobrazowań Harmonized Landsat–Sentinel. To waga startowa, nie wyrocznia.',
    imageAlt: 'Apollo 17 Blue Marble — planeta, którą modele fundacyjne obserwacji Ziemi buduje się, by czytać',
    what: 'Prithvi to rodzina otwartych geoprzestrzennych modeli fundacyjnych NASA i IBM, po raz pierwszy wydana w 2023, trenowana na szeregach czasowych Harmonized Landsat and Sentinel-2 (HLS). Dotrenowania celują w mapowanie powodzi, blizny pożarowe i narzędzia upraw. Pokrewne stosy „SI dla nauki” obejmują NVIDIA Earth-2 (symulacja i emulacja) — inny produkt, też nie kryształowa kula.',
    problem:
      'Praca systemu Ziemi tonie w pikselach. Wspólny wstępnie wytrenowany model potrafi ściąć koszt mapy powodzi w kraju, któremu brakuje dużego zbioru etykiet — jeśli ktoś i tak sprawdzi mapę.',
    how: 'Transformer albo podobny szkielet uczy się ogólnych cech przestrzenno-czasowych z kostek satelitarnych. Głowy downstream to małe zadania z etykietami. Nie zastępuje GCM w klimacie skali stulecia; pomaga przy zadaniach obserwacyjnych.',
    players:
      'NASA (HLS, IMPACT); IBM Research; wagi na Hugging Face / GitHub; użytkownicy w agencjach katastrof i rolnictwa. Earth-2 to osobna linia emulacji NVIDIA.',
    risks:
      'Obciążenie tam, gdzie satelity treningowe nigdy nie patrzyły, podwójne użycie wojskowe i sprzedawcy owijający dotrenowanie jako „model klimatu”. Czytaj kartę modelu.',
    sourcesNote:
      'Komunikat NASA Earthdata o Prithvi (2023); karty modeli IBM–NASA na Hugging Face. Wagi startowe to nie wyrocznia.',
  },
};
