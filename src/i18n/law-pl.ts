import type { LawCopy } from '../data/law';

export const pl: Record<string, LawCopy> = {
  'paris-agreement': {
    title: 'Porozumienie paryskie',
    hook: 'Główny obowiązujący traktat klimatyczny. Wiąże strony NDC i celem „znacznie poniżej 2°C / dążyć do 1,5°C” — nie globalnym sufitem emisji wpisanym w tekst.',
    imageAlt:
      'François Hollande, Laurent Fabius i Ban Ki-moon klaszczą na scenie COP21 po przyjęciu Porozumienia paryskiego',
    jurisdiction: 'Ramowa konwencja ONZ w sprawie zmian klimatu (strony)',
    officialName: 'Porozumienie paryskie',
    citation:
      'Porozumienie paryskie w ramach UNFCCC; przyjęte 12 grudnia 2015 (COP21); weszło w życie 4 listopada 2016',
    yearStatus: 'Przyjęte w Paryżu 12.12.2015; w mocy od 04.11.2016.',
    what: 'Prawnie wiążący traktat przy UNFCCC: NDC, sprawozdawczość, globalne podsumowanie; cele temperaturowe, adaptacja, finanse, pochłaniacze (w tym lasy).',
    where: 'Przyjęte w Paryżu 12.12.2015; w mocy od 04.11.2016. Lista stron — depozytariusz ONZ / UNFCCC.',
    effects:
      'Zamierzony skutek: zebrać krajowe plany klimatyczne w jedną architekturę traktatową, pięcioletni cykl ambicji i wpisać 1,5°C w prawo wielostronne. Wyniki zależą od treści NDC i wdrożenia krajowego — traktat sam nie zamyka elektrowni.',
    caveats:
      'Treść NDC ustalają same państwa; traktat sam nie zamyka elektrowni. Nie mylić z Protokołem z Kioto.',
    sourcesNote: 'Te same trzy URL: strona UNFCCC; angielski PDF porozumienia; depozytariusz ONZ.',
  },
  'montreal-protocol': {
    title: 'Protokół montrealski w sprawie substancji zubożających warstwę ozonową',
    hook: 'Traktat ozonowy, który realnie uciął produkcję i handel ODS. Kigali później dodało HFC dla klimatu — ta sama maszyna Montrealu, nie drugi UNFCCC.',
    imageAlt:
      'Wizualizacja NASA niskiego ozonu nad Antarktydą — dziura ozonowa, którą Protokół montrealski miał odwrócić',
    jurisdiction: 'Strony Protokołu montrealskiego (sekretariat ozonowy UNEP)',
    officialName: 'Protokół montrealski w sprawie substancji zubożających warstwę ozonową',
    citation:
      'Protokół montrealski (1987, ze zmianami); poprawka z Kigali 15 października 2016; kontrola HFC od 1 stycznia 2019 dla stron, u których poprawka weszła w życie',
    yearStatus:
      'Protokół z 1987. Kigali w mocy od 01.01.2019 po progach ratyfikacji.',
    what: 'Harmonogramy redukcji ODS, ograniczenia handlu, sprawozdawczość, Fundusz wielostronny; Kigali — stopniowe obniżanie HFC.',
    where: 'Niemal powszechne uczestnictwo; Kigali w mocy od 01.01.2019 po progach ratyfikacji.',
    effects:
      'Udokumentowany sukces protokołu to harmonogramy wycofywania ODS i metryki odbudowy warstwy ozonowej (oceny sekretariatu / WMO–UNEP, nie marketing). Zamierzony skutek klimatyczny Kigali to uniknięte ocieplenie od HFC; dostawa idzie według krajowych harmonogramów obniżania.',
    caveats:
      'Sukces ozonu ≠ kontrola CO₂/metanu (to Paryż/UNFCCC). Nie podpisywać karty jako „główny traktat klimatyczny”.',
    sourcesNote: 'Te same trzy URL: sekretariat ozonowy — protokół i poprawki; depozytariusz ONZ — Kigali.',
  },
  'eu-deforestation-regulation': {
    title: 'Rozporządzenie UE o produktach wolnych od wylesiania (EUDR)',
    hook: 'Reguła rynku UE: wymienione towary muszą być wolne od wylesiania i legalne. Uchwalone 2023; główne obowiązki od końca 2026 / połowy 2027 według wielkości operatora. To nie unijny traktat leśny ONZ.',
    imageAlt:
      'Plantacja palmy olejowej wokół pozostałego fragmentu lasu deszczowego na Borneo — krawędź towaru i lasu, którą obejmuje unijna reguła',
    jurisdiction: 'Unia Europejska',
    officialName: 'Rozporządzenie w sprawie produktów niezwiązanych z wylesianiem',
    citation: 'Rozporządzenie (UE) 2023/1115 z 31 maja 2023 r. w sprawie produktów niezwiązanych z wylesianiem',
    yearStatus:
      'Rozporządzenie w mocy; stosowanie dużych/średnich od 30.12.2026, mikro/małych od 30.06.2027 (z zastrzeżeniami dla byłych EUTR).',
    what: 'Due diligence i geolokalizacja dla bydła, kakao, kawy, oleju palmowego, kauczuku, soi, drewna i pochodnych; uchyla EUTR w zakresie pokrycia.',
    where:
      'Rozporządzenie w mocy; stosowanie dużych/średnich od 30.12.2026, mikro/małych od 30.06.2027 (z zastrzeżeniami dla byłych EUTR). Nie wrzucać do «pod rozwagą».',
    effects:
      'Cele statutowe: ograniczyć wylesianie/degradację napędzane popytem UE oraz związane emisje i utratę bioróżnorodności. Szacunki cięcia emisji z oceny skutków Komisji — zamierzone/modelowane, nie zmierzone wyniki 2026.',
    caveats: 'Wyciek na inne rynki; odroczenie ≠ «już blokuje wszystko dziś».',
    sourcesNote: 'Te same dwa URL: EUR-Lex — Rozporządzenie (UE) 2023/1115; strona Komisji o produktach wolnych od wylesiania.',
  },
  'eu-ets': {
    title: 'Unijny system handlu uprawnieniami do emisji (EU ETS)',
    hook: 'Unijny cap-and-trade dla dużych emitentów. Kurczący się pułap uprawnień, aukcje i rezerwa stabilności rynku — nie domowy podatek węglowy i nie samo Porozumienie paryskie.',
    imageAlt:
      'Elektrownia lignitowa Niederaussem w Niemczech — duży stacjonarny emitent takiego typu, jaki obejmuje EU ETS',
    jurisdiction: 'Unia Europejska',
    officialName: 'Unijny system handlu uprawnieniami do emisji',
    citation:
      'Dyrektywa 2003/87/WE (ze zmianami) ustanawiająca system handlu uprawnieniami do emisji gazów cieplarnianych',
    yearStatus: 'Obowiązuje w UE; rdzeń — Dyrektywa 2003/87/WE ze zmianami.',
    what: 'Rynek uprawnień dla objętych instalacji (i lotnictwa / dalszych sektorów według nowelizacji); zwrot uprawnień wobec zweryfikowanych emisji.',
    where: 'Obowiązuje w UE; rdzeń — Dyrektywa 2003/87/WE ze zmianami.',
    effects:
      'Zamierzony skutek: dać cenę objętym emisjom GHG i ciąć je pod kurczącym się pułapem. Udokumentowane wyniki systemu — w raportach EEA/Komisji o ETS; tony stamtąd, nie z głowy.',
    caveats: 'Nie cała gospodarka; nie Paryż i nie EUDR. Tony — tylko z raportów EEA/Komisji.',
    sourcesNote: 'Te same trzy URL: hub Komisji o EU ETS; strona „What is the EU ETS”; EUR-Lex — Dyrektywa 2003/87/WE.',
  },
  'nature-restoration': {
    title: 'Unijne prawo odbudowy przyrody',
    hook: 'Wiążące rozporządzenie o restytucji — nie dokument strategiczny. Projekty planów krajowych miały być do 1 września 2026; Komisja je ocenia.',
    imageAlt:
      'Torfowisko z otwartą wodą i niską roślinnością — typ siedliska mokradłowego, który obejmują unijne cele odbudowy',
    jurisdiction: 'Unia Europejska',
    officialName: 'Nature Restoration Regulation',
    citation:
      'Regulation (EU) 2024/1991 of the European Parliament and of the Council of 24 June 2024 on nature restoration',
    yearStatus: 'Przyjęte 24 czerwca 2024. W mocy od 18 sierpnia 2024.',
    what: 'Rozporządzenie nakłada unijne obowiązki odbudowy. Państwa członkowskie mają wspólnie wprowadzić środki odbudowy na co najmniej 20 procentach lądowych i morskich obszarów UE do 2030 oraz na wszystkich ekosystemach wymagających odbudowy do 2050. Dodaje terminy dla typów siedlisk z załącznika I dyrektywy siedliskowej, torfowisk, rzek, zieleni miejskiej, ekosystemów rolnych, lasów i siedlisk morskich — obok, nie zamiast, dyrektyw ptasiej i siedliskowej.',
    where: 'Obowiązuje bezpośrednio w każdym państwie członkowskim UE. Każde miało przesłać Komisji projekt krajowego planu odbudowy do 1 września 2026. Komisja i Europejska Agencja Środowiska oceniają projekty; plany ostateczne następują po uwagach Komisji. Implementing Regulation (EU) 2025/912 ustalił jednolity format planu.',
    effects: 'Zamierzony skutek to odwrócić spadek ekosystemów, magazynować więcej węgla w glebach i mokradłach oraz zmniejszyć część ryzyka katastrof i bezpieczeństwa wodnego. To cele statutowe, nie zmierzone wyniki 2024–2026. Prawo jest zbyt nowe na skończoną ocenę hektarów faktycznie przywróconych na jego podstawie.',
    caveats: 'Rozporządzenie to nie odtworzone torfowisko. Wykonanie siedzi w planach krajowych, budżetach i sporach o użytkowanie ziemi. Tekst był politycznie sporny. Nie uchyla reguł Natura 2000 i sam z siebie nie zatrzymuje przekształceń poza terenami odbudowy.',
    sourcesNote:
      'Tekst źródłowy na EUR-Lex; strony Komisji o prawie i o wejściu w życie (18 sierpnia 2024); nota Komisji, że projekty planów miały być do 1 września 2026.',
  },
  'clean-air-act': {
    title: 'Amerykańska ustawa o czystym powietrzu',
    hook: 'Główny amerykański statut o zanieczyszczeniu powietrza. Zwykle cytowane źródło to własne recenzowane studia kosztów i korzyści EPA — nie hasło.',
    imageAlt: 'Zachodnia fasada Kapitolu Stanów Zjednoczonych, gdzie Kongres pisze i nowelizuje ustawy federalne',
    jurisdiction: 'Stany Zjednoczone',
    officialName: 'Clean Air Act',
    citation: '42 U.S.C. § 7401 et seq. (1970; major amendments 1977 and 1990)',
    yearStatus: 'Uchwalona w 1970. Nadal w mocy, z późniejszymi nowelizacjami.',
    what: 'Ustawa wymaga krajowych norm jakości powietrza atmosferycznego, stanowych planów wdrożenia, pozwoleń dla nowych i zmienianych źródeł, kontroli źródeł mobilnych oraz — po 1990 — programu pułapu i handlu kwaśnymi deszczami i ostrzejszych reguł toksycznych. To statut o zanieczyszczeniu, nie kompleksowe prawo klimatyczne, choć na nim oparto niektóre reguły gazów cieplarnianych.',
    where: 'Federalne prawo USA, wdrażane przez EPA i stany. Nie obowiązuje poza jurysdykcją USA.',
    effects: 'Drugie studium prospektywne EPA (2011), wymagane przez sekcję 812 nowelizacji z 1990, oszacowało, że te nowelizacje zapobiegną około 230 000 przedwczesnych zgonów w roku 2020 i że centralny szacunek korzyści przekroczy koszty ponad 30 do 1. To wyniki modelu wobec linii bazowej bez nowelizacji, nie spis nazwanych osób.',
    caveats: 'Korzyści są szacowane, nie obserwowane jeden do jednego. Niektóre obszary wciąż nie spełniają norm. Procesy i cykle polityczne zmieniają reguły. Nie traktuj ustawy jako skończonego instrumentu klimatycznego ani jako dowodu, że każdy lokalny basen powietrza jest czysty.',
    sourcesNote:
      'Przegląd Clean Air Act EPA; EPA “Benefits and Costs of the Clean Air Act 1990–2020, the Second Prospective Study”; rozdział 85 Kodeksu USA.',
  },
  'single-use-plastics': {
    title: 'Unijna dyrektywa w sprawie tworzyw jednorazowych',
    hook: 'Prawdziwy zakaz produktów i reguła cięcia konsumpcji dla wymienionego zestawu wyrobów — nie globalny pułap produkcji polimerów.',
    imageAlt: 'Zebrane butelki PET, rodzaj opakowań jednorazowych, które dyrektywa obejmuje tylko częściowo',
    jurisdiction: 'Unia Europejska',
    officialName: 'Single-Use Plastics Directive',
    citation:
      'Directive (EU) 2019/904 of the European Parliament and of the Council of 5 June 2019 on the reduction of the impact of certain plastic products on the environment',
    yearStatus: 'W mocy od 2 lipca 2019. Państwa członkowskie miały transponować główne ograniczenia rynkowe do 3 lipca 2021.',
    what: 'Dyrektywa zakazuje wprowadzania na rynek UE niektórych wymienionych jednorazowych wyrobów z tworzyw (w tym patyczków higienicznych, sztućców, talerzy, słomek, mieszadełek i tworzyw oksydegradowalnych). Wymaga też ograniczenia konsumpcji części kubków i pojemników na żywność, reguł rozszerzonej odpowiedzialności producenta, oznakowania i celów selektywnej zbiórki butelek z tworzyw.',
    where: 'Państwa członkowskie UE, przez krajowe ustawy transponujące. Akt stwierdza znaczenie dla EOG. To nie traktat ONZ i nie wiąże państw spoza UE.',
    effects: 'Zamierzony skutek to ograniczyć wycieki morskie i inne do środowiska z produktów, które dominują w części europejskich liczników śmieci plażowych. To uzasadnienie samej dyrektywy. Nie odczytuj z tej strony konkretnego globalnego spadku tonażu po 2021 — wdrożenia krajowe i substytucja się różnią, a ten katalog nie wymyśla jednego procentu.',
    caveats: 'Zakaz wymienionych wyrobów to nie pułap produkcji polimerów. Zamienniki (inne tworzywa, papier albo materiały „bio”) mogą przesunąć problem. Jakość transpozycji bywa różna. Reguły opakowań zaktualizowały później kolejne akty UE, w tym rozporządzenie opakowaniowe z 2025, które nowelizuje tę dyrektywę.',
    sourcesNote: 'Oficjalny tekst EUR-Lex; strona tematyczna Komisji o tworzywach jednorazowych.',
  },
  'costa-rica-pes': {
    title: 'Kostaryka — płatność za usługi środowiskowe',
    hook: 'Leśna ustawa z 1996, która płaci właścicielom za stojący las. To jeden instrument, nie jedyna przyczyna powrotu koron.',
    imageAlt: 'Las mglisty Monteverde w Kostaryce — rodzaj pokrycia, które program PSA płaci chronić',
    jurisdiction: 'Kostaryka',
    officialName: 'Pago por Servicios Ambientales (PSA), under the Forestry Law',
    citation: 'Forestry Law No. 7575 (1996); PSA administered by FONAFIFO',
    yearStatus: 'Ustawa 7575 przyjęta w 1996. Program PSA działa od końca lat 90. i nadal jest otwarty na kontrakty.',
    what: 'Leśna ustawa Kostaryki dała podstawę prawną, by płacić prywatnym właścicielom za cztery nazwane usługi środowiskowe: łagodzenie gazów cieplarnianych, ochronę wody, bioróżnorodność i piękno krajobrazu. FONAFIFO, krajowy fundusz finansowania leśnictwa, prowadzi kontrakty na ochronę lasu, zalesianie, naturalną regenerację i agroleśnictwo. Podatek paliwowy jest statutowym źródłem finansowania opisanym przez FONAFIFO.',
    where: 'Kostaryka, na kwalifikowanych gruntach prywatnych i niektórych innych, które wchodzą w kontrakt PSA. To prawo krajowe, nie traktat regionalny.',
    effects: 'Zamierzony skutek to sprawić, by stojący las był wart pieniędzy. UNFCCC i FONAFIFO przedstawiają PSA jako mechanizm, który płaci za ochronę i zalesianie. Późniejsza odbudowa pokrycia leśnego w Kostaryce miała kilka przyczyn — w tym wcześniejsze załamanie ekstensywnej hodowli bydła — więc ta strona nie przypisuje PSA samej ani sumy hektarów, ani procentu odbudowy.',
    caveats: 'Płatności zależą od budżetu i od tego, kto umie przejść wniosek. Program może faworyzować grunty z tytułem. To nie zakaz wszelkiego wylesiania i nie model, który kopiuje się na każdy kraj bez bazy podatkowej i katastru.',
    sourcesNote: 'Strona PSA FONAFIFO; opracowanie UNFCCC Momentum for Change; rekord FAOLEX ustawy 7575.',
  },
  'turkmenistan-two-trees': {
    title: 'Turkmenistan — dwa drzewa rocznie',
    hook: 'Dekret prezydencki z 1992, nie statut Tadżykistanu i nie „trzy drzewa”. Zdanie o dwóch drzewach to język obywatelskiego obowiązku; artykuły operacyjne organizują kampanie.',
    imageAlt:
      'Zadrzewiona aleja w Aszchabadzie — zieleń miejska tego rodzaju, którą dekret z 1992 próbuje organizować, nie zdjęcie tamtego miesiąca sadzenia',
    jurisdiction: 'Turkmenistan',
    officialName: 'On the development of horticulture and greening in Turkmenistan',
    citation:
      'Постановление Президента Туркменистана «О развитии садоводства и озеленении в Туркменистане», 9 November 1992',
    yearStatus:
      'Dekret prezydencki (постановление), 9 listopada 1992. FAOLEX/UNEP LEAP podają wejście w życie z urzędową publikacją; nie dają osobnego numeru dekretu.',
    what: 'Preambuła stanowi, że obowiązkiem każdego obywatela Turkmenistanu jest sadzić dwa drzewa rocznie — jedno na cześć nowo narodzonego obywatela, drugie w pamięci zmarłego. Artykuły operacyjne ogłaszają potem jesienne i wiosenne miesiące sadzenia, nakazują hyakimom welajatów, Aszchabadu i etrapów organizować masowe nasadzenia (w tym wzdłuż nazwanych dróg) oraz wymagają, by ministerstwo odpowiedzialne za gospodarkę przyrodą dostarczało materiał sadzeniowy. To prezydenckie постановление, nie ustawa Medżlisu i nie kodeks karny dla osób, które nie posadzą drzewa.',
    where: 'Turkmenistan. Późniejsze państwowe kampanie sadzenia (na przykład dekrety o parkach Kopet-Dag z 1998 albo późniejsze działania narodowego programu leśnego) to osobne akty. Ta karta dotyczy tylko tekstu z 1992.',
    effects: 'Zamierzone skutki: ożywić ogrodnictwo i zorganizować sezonowe masowe sadzenie z publiczną dostawą sadzonek. Ta strona nie wymyśla wskaźników wykonania, przeżywalności ani sumy hektarów przypisanej dekretowi z 1992.',
    caveats: 'Język obywatelskiego obowiązku w preambule to nie to samo co indywidualnie ścigany limit. FAOLEX zaznacza, że numer referencyjny jest niedostępny. Nie przemianowuj tego na „posadź trzy drzewa”, na tadżycką osobistą kwotę ani na filipiński projekt o maturze — to inne albo niezweryfikowane historie.',
    sourcesNote:
      'Pierwotny tekst rosyjski na FAOLEX (tuk80588.pdf); abstrakt katalogowy UNEP LEAP tego samego dekretu.',
  },
  'uzbekistan-compensatory-planting': {
    title: 'Uzbekistan — 100 sadzonek za nielegalny wyrąb',
    hook: 'Ustawa z 2024: co najmniej sto sadzonek po nielegalnym wycięciu cennego drzewa poza funduszem leśnym. Kara i obowiązek pielęgnacji — nie roczna kwota obywatelska.',
    imageAlt:
      'Kwitnące morele na ulicy Taszkentu — drzewa miejskie tego rodzaju, które chroni nowelizacja ustawy o świecie roślinnym, nie zdjęcie konkretnej sprawy',
    jurisdiction: 'Uzbekistan',
    officialName: 'O ochronie i użytkowaniu świata roślinnego (z nowelizacją)',
    citation:
      'Ustawa Republiki Uzbekistanu nr ЗРУ-916 / O‘RQ-916 z 29 lutego 2024, wstawiająca art. 49¹ do ustawy „O ochronie i użytkowaniu świata roślinnego” (nr 543-I z 26 grudnia 1997, w redakcji ЗРУ-409 z 21 września 2016)',
    yearStatus:
      'Izba Ustawodawcza 21 listopada 2023; Senat 20 grudnia 2023; podpis 29 lutego 2024. Publikacja urzędowa 1 marca 2024 (krajowa baza nr 03/24/916/0167). Art. 49¹ od publikacji. Art. 49² o sankcjach finansowych — po trzech miesiącach.',
    what: 'Art. 49¹, wstawiony przez ЗРУ-916, stanowi: jeśli cenne gatunki drzew lub krzewów poza państwowym funduszem leśnym zostaną nielegalnie wycięte lub zniszczone, sprawca musi na decyzję organu Ministerstwa Ekologii, Ochrony Środowiska i Zmian Klimatu posadzić na własny koszt co najmniej sto sadzonek o wartości nie niższej niż wycięte — za każde takie drzewo lub krzew. Sadzenie jest w miejscu wyrębu; gdy brakuje ziemi, reszta idzie w inne miejsce tej samej jednostki administracyjno-terytorialnej. Pielęgnacja trwa trzy lata. Art. 49² dodaje grzywny 100–300 bazowych jednostek rozliczeniowych dla osób prawnych. Ta sama ustawa podniosła też część kar w kodeksie wykroczeń administracyjnych. To obowiązek kompensacyjny po wykroczeniu, nie roczna kwota sadzenia dla każdego obywatela.',
    where: 'Uzbekistan, dla cennych drzew i krzewów poza państwowym funduszem leśnym. Sam akt nie przepisuje reguł funduszu leśnego. Ogólnokrajowy projekt „Yashil Makon”, wymieniony w preambule ЗРУ-916, to osobny program.',
    effects:
      'Zamierzone skutki, jak pisze sama nowelizacja: odstraszać nielegalny wyrąb, podnieść odpowiedzialność i ujednolicić praktykę. Ta strona nie wymyśla liczby sadzonek posadzonych na podstawie art. 49¹ ani wskaźnika przeżywalności.',
    caveats:
      '„Co najmniej sto” dotyczy nielegalnego wyrębu lub zniszczenia wymienionych cennych drzew poza funduszem leśnym — nie każdego drzewa w kraju i nie jako coroczny obowiązek obywatelski. Nie łącz tego z turkmenskim dekretem z 1992 o dwóch drzewach, z tadżycką osobistą kwotą (w katalogu nie ma zweryfikowanego takiego statutu) ani z filipińskim projektem o maturze. Szczegóły wartości, gatunków, miejsca i terminów może ustalić Gabinet Ministrów; to już nie ten artykuł.',
    sourcesNote:
      'Pierwotny tekst ЗРУ-916 na lex.uz (rosyjski i uzbecki); skonsolidowana strona ustawy o świecie roślinnym z art. 49¹; angielska notatka UzDaily o rozpatrzeniu tej samej ustawy w Senacie.',
  },
  'convention-on-biological-diversity': {
    title: 'Konwencja o różnorodności biologicznej',
    hook: 'Główny traktat Organizacji Narodów Zjednoczonych o różnorodności biologicznej. Wyznacza trzy cele: chronić różnorodność biologiczną, użytkować ją w sposób zrównoważony i sprawiedliwie dzielić korzyści z zasobów genetycznych. Strony mają obowiązek planować i składać sprawozdania. To nie jest jedna światowa lista gatunków.',
    imageAlt:
      'Pierwotny las deszczowy w parku Taman Negara w Malezji: rzeka wśród gęstego zielonego sklepienia',
    jurisdiction: 'Międzynarodowy (strony konwencji; Stany Zjednoczone nie ratyfikowały)',
    officialName: 'Konwencja o różnorodności biologicznej',
    citation:
      'Konwencja o różnorodności biologicznej; przyjęta w Nairobi 22 maja 1992; otwarta do podpisu w Rio de Janeiro 5 czerwca 1992; weszła w życie 29 grudnia 1993',
    yearStatus:
      'Przyjęta w Nairobi 22 maja 1992. Otwarta do podpisu w Rio de Janeiro 5 czerwca 1992. Weszła w życie 29 grudnia 1993.',
    what: 'Konwencja ramowa. Strony zobowiązują się chronić różnorodność w miejscu występowania gatunków i poza nim, w kolekcjach, użytkować ją w sposób zrównoważony, oceniać oddziaływanie na środowisko i współpracować. Tworzy Konferencję Stron, organ naukowy, który jej doradza, oraz cykl sprawozdań. Pod konwencją stoją dwa odrębne protokoły tej samej rodziny: protokół z Kartageny o bezpieczeństwie biologicznym i protokół z Nagoi o dostępie do zasobów genetycznych i podziale korzyści.',
    where:
      'Dotyczy stron, które ją ratyfikowały albo do niej przystąpiły. W mocy od 29 grudnia 1993. Depozytariuszem jest sekretarz generalny Organizacji Narodów Zjednoczonych. Lista stron się zmienia. Aktualny wykaz prowadzą sekretariat konwencji i Zbiór traktatów Organizacji Narodów Zjednoczonych.',
    effects:
      'Zamierzony skutek: wpisać różnorodność biologiczną w wiążące prawo wielostronne obok traktatów o klimacie i ozonie, skłonić państwa do krajowych strategii i planów działań oraz dać miejsce późniejszym protokołom i globalnym ramom różnorodności biologicznej z Kunming-Montrealu. Wynik zależy od środków krajowych. Sam tekst konwencji nie grodzi rezerwatu.',
    caveats:
      'Konwencja nie wydaje zezwoleń na handel dzikimi gatunkami. Tym zajmuje się odrębny traktat, Konwencja o międzynarodowym handlu dzikimi zwierzętami i roślinami gatunków zagrożonych wyginięciem. Globalne ramy różnorodności biologicznej z Kunming-Montrealu przyjęto jako decyzję Konferencji Stron tej konwencji. Stany Zjednoczone podpisały konwencję, ale jej nie ratyfikowały.',
    sourcesNote:
      'Tekst konwencji na stronie sekretariatu; angielski tekst konwencji; strona o konwencji; strona główna sekretariatu.',
  },
  'kunming-montreal-gbf': {
    title: 'Globalne ramy różnorodności biologicznej z Kunming-Montrealu',
    hook: 'Obecny światowy plan różnorodności biologicznej przy Konwencji o różnorodności biologicznej. Cztery cele do 2050 roku i dwadzieścia trzy zadania do 2030 roku, w tym szeroko cytowany zamiar objęcia ochroną co najmniej 30 procent lądu i morza. Przyjęto je jako decyzję Konferencji Stron, a nie jako drugi traktat o różnorodności biologicznej.',
    imageAlt:
      'Płytka rafa koralowa na Florydzie: wachlarze morskie i drobne ryby, życie morskie, którego dotyczy ochrona obszarowa',
    jurisdiction:
      'Międzynarodowy (strony Konwencji o różnorodności biologicznej wykonujące decyzję 15/4)',
    officialName: 'Globalne ramy różnorodności biologicznej z Kunming-Montrealu',
    citation:
      'Globalne ramy różnorodności biologicznej z Kunming-Montrealu; decyzja 15/4 piętnastej Konferencji Stron Konwencji o różnorodności biologicznej, przyjęta 19 grudnia 2022 w Montrealu',
    yearStatus:
      'Przyjęta 19 grudnia 2022 na drugiej części piętnastej Konferencji Stron w Montrealu (decyzja 15/4). To decyzja przy konwencji, nie osobno ratyfikowany traktat.',
    what: 'Decyzja 15/4 przyjmuje globalne ramy różnorodności biologicznej z Kunming-Montrealu jako drogę wykonywania konwencji w tej dekadzie. Wyznacza wizję na 2050 rok: życie w harmonii z przyrodą, cztery cele na 2050 rok i 23 zadania na 2030 rok. Zadanie 3, o ochronie obszarów, często streszcza się jako ochronę 30 procent lądu i morza. Towarzyszące decyzje tego samego spotkania obejmują obserwację, planowanie, sprawozdawczość, przegląd, finanse i wsparcie państw w wykonaniu.',
    where:
      'Działa przez krajowe cele i strategie stron konwencji. Przyjęta w Montrealu 19 grudnia 2022 jako decyzja 15/4. To decyzja Konferencji Stron przy Konwencji o różnorodności biologicznej, nie osobno ratyfikowany traktat. Pierwszy światowy przegląd wspólnego postępu jest w porządku obrad siedemnastej Konferencji Stron, w procesie na 2026 rok.',
    effects:
      'Zamierzony skutek: zastąpić wygasłe cele z Aichi na lata 2010–2020 jaśniejszym zestawem celów na 2030 rok, zestawić krajowe plany różnorodności biologicznej i stworzyć cykl obserwacji i przeglądu. Wykonanie zależy od prawa krajowego, pieniędzy i od tego, które obszary lądu i morza państwa wskażą. Sam tekst decyzji nie tworzy obszaru chronionego.',
    caveats:
      'Ramy nie są osobnym traktatem i nie zastępują tekstu konwencji. Liczba 30 procent w zadaniu 3 to wspólny cel na 2030 rok, a nie znak, że świat już objął ochroną 30 procent lądu i morza. Dokładne brzmienie celów i zadań jest w decyzji 15/4 i na stronie ram w sekretariacie konwencji.',
    sourcesNote:
      'Strona ram w sekretariacie konwencji; decyzja 15/4; strona zadań na 2030 rok; komunikat sekretariatu o tekście przyjętym w Montrealu.',
  },
  'ramsar-convention': {
    title: 'Konwencja ramsarska',
    hook: 'Najstarszy światowy traktat o mokradłach. Strony wpisują mokradła o znaczeniu międzynarodowym na publiczną listę i zobowiązują się użytkować mokradła na swoim terytorium z rozwagą. To lista miejsc i obowiązek dbania o nie, a nie kodeks handlu dziką przyrodą.',
    imageAlt: 'Ptactwo wodne żeruje na bagnie w mokradłach Pariette w Utah',
    jurisdiction: 'Międzynarodowy (strony; depozytariuszem jest UNESCO)',
    officialName:
      'Konwencja o obszarach wodno-błotnych mających znaczenie międzynarodowe, zwłaszcza jako środowisko życiowe ptactwa wodnego',
    citation:
      'Konwencja o obszarach wodno-błotnych mających znaczenie międzynarodowe, zwłaszcza jako środowisko życiowe ptactwa wodnego; sporządzona w Ramsarze (Iran) 2 lutego 1971; weszła w życie 21 grudnia 1975 (z późniejszymi zmianami)',
    yearStatus:
      'Sporządzona w Ramsarze (Iran) 2 lutego 1971. Weszła w życie 21 grudnia 1975. Obecny tekst obejmuje późniejsze zmiany.',
    what: 'Każda strona wyznacza co najmniej jedno mokradło na Listę obszarów wodno-błotnych o znaczeniu międzynarodowym, wspiera ochronę wpisanych miejsc i użytkowanie mokradeł w ogóle z rozwagą, tak aby zachowały swój przyrodniczy charakter. Konwencja organizuje współpracę przy wspólnych mokradłach i ptactwie wodnym. Konferencja stron kieruje wytycznymi. Obecny tekst obejmuje późniejsze zmiany: protokół paryski z 1982 roku i zmiany przyjęte w Reginie w 1987 roku.',
    where:
      'Dotyczy stron konwencji. Sporządzona w Ramsarze 2 lutego 1971. W mocy od 21 grudnia 1975. Funkcje depozytariusza pełni UNESCO. Listy stron i wyznaczonych miejsc się zmieniają. UNESCO jako depozytariusz oraz własne dokumenty konwencji prowadzą aktualny wykaz.',
    effects:
      'Zamierzony skutek: trzymać mokradła o znaczeniu międzynarodowym na publicznej liście z obowiązkami ochrony i upowszechnić rozważne użytkowanie jako normę zarządzania. Sam wpis na listę nie jest pełną ochroną w terenie. Główną pracę wykonują prawo krajowe i plany zarządzania.',
    caveats:
      'Konwencja nie zakazuje użytkowania mokradeł. Prosi strony, aby użytkowały je z rozwagą i dbały o miejsca, które wpisały na listę.',
    sourcesNote:
      'Strona depozytariusza UNESCO; angielski tekst w Zbiorze traktatów Organizacji Narodów Zjednoczonych; zapis w Zbiorze traktatów Organizacji Narodów Zjednoczonych; karta w katalogu traktatów o środowisku.',
  },
  'aarhus-convention': {
    title: 'Konwencja z Aarhus',
    hook: 'Traktat Organizacji Narodów Zjednoczonych o demokracji środowiskowej. Daje ludziom prawo do informacji o środowisku, udziału w niektórych decyzjach i kontroli w sądzie albo w innym niezależnym organie. To prawa dotyczące procedury, a nie ustawa o limitach zanieczyszczeń.',
    imageAlt: 'Sala obrad rady miasta w ratuszu Toronto, na których może być obecna publiczność',
    jurisdiction:
      'Międzynarodowy (strony regionu Europejskiej Komisji Gospodarczej Organizacji Narodów Zjednoczonych; otwarta także dla państw spoza regionu według reguł przystąpienia)',
    officialName:
      'Konwencja o dostępie do informacji, udziale społeczeństwa w podejmowaniu decyzji oraz dostępie do sprawiedliwości w sprawach dotyczących środowiska',
    citation:
      'Konwencja o dostępie do informacji, udziale społeczeństwa w podejmowaniu decyzji oraz dostępie do sprawiedliwości w sprawach dotyczących środowiska; Aarhus, 25 czerwca 1998; weszła w życie 30 października 2001',
    yearStatus: 'Sporządzona w Aarhus 25 czerwca 1998. Weszła w życie 30 października 2001.',
    what: 'Trzy części. Pierwsza: dostęp do informacji o środowisku, którą mają organy publiczne. Druga: udział społeczeństwa w decyzjach o konkretnych przedsięwzięciach i o programach. Trzecia: dostęp do sądu, gdy tych praw odmawia się albo gdy naruszone jest prawo środowiska. Wykonywanie nadzoruje spotkanie stron i tryb sprawdzania, czy strony dotrzymują zobowiązań. Pokrewny akt to protokół kijowski o rejestrach uwalniania i przenoszenia zanieczyszczeń.',
    where:
      'Wynegocjowana w ramach Europejskiej Komisji Gospodarczej Organizacji Narodów Zjednoczonych. W mocy od 30 października 2001. Dotyczy stron, które ją ratyfikowały albo do niej przystąpiły, w tym niektórych państw spoza tego regionu według reguł konwencji. Aktualną listę stron prowadzi Zbiór traktatów Organizacji Narodów Zjednoczonych, zapis XXVII-13.',
    effects:
      'Zamierzony skutek: uczynić decyzje środowiskowe możliwymi do zaskarżenia i jawnymi oraz zmniejszyć lukę informacyjną między władzą a ludźmi. Siła tego zależy od sądów krajowych, opłat i od tego, kto może wnieść sprawę. Konwencja wyznacza minimum, które strony muszą spełnić w prawie krajowym.',
    caveats:
      'Konwencja z Aarhus nie jest światową ustawą o dostępie do informacji. Wiąże tylko swoje strony: państwa regionu Europejskiej Komisji Gospodarczej Organizacji Narodów Zjednoczonych, które do niej przystąpiły, oraz niektóre państwa spoza regionu. Listę stron prowadzi Zbiór traktatów Organizacji Narodów Zjednoczonych. Ameryka Łacińska ma własny regionalny traktat o podobnych prawach, Porozumienie z Escazú.',
    sourcesNote:
      'Zapis XXVII-13 w Zbiorze traktatów Organizacji Narodów Zjednoczonych; tekst traktatu nr 37770; karta w katalogu traktatów o środowisku.',
  },
  'bbnj-agreement': {
    title:
      'Porozumienie o różnorodności biologicznej obszarów poza jurysdykcją krajową (traktat o morzu pełnym)',
    hook: 'Porozumienie o różnorodności biologicznej morza pełnego w ramach Konwencji Narodów Zjednoczonych o prawie morza. Obejmuje morskie zasoby genetyczne, narzędzia ochrony obszarów, w tym morskie obszary chronione poza jurysdykcją krajową, oceny oddziaływania na środowisko oraz pomoc państwom w umiejętnościach i technologii. Weszło w życie 17 stycznia 2026.',
    imageAlt: 'Otwarte wody północnego Atlantyku widziane ze statku, z dalekim statkiem na horyzoncie',
    jurisdiction:
      'Międzynarodowy (strony porozumienia; w ramach Konwencji Narodów Zjednoczonych o prawie morza)',
    officialName:
      'Porozumienie w ramach Konwencji Narodów Zjednoczonych o prawie morza o ochronie i zrównoważonym użytkowaniu morskiej różnorodności biologicznej obszarów poza jurysdykcją krajową',
    citation:
      'Porozumienie w ramach Konwencji Narodów Zjednoczonych o prawie morza o ochronie i zrównoważonym użytkowaniu morskiej różnorodności biologicznej obszarów poza jurysdykcją krajową; przyjęte w Nowym Jorku 19 czerwca 2023; weszło w życie 17 stycznia 2026',
    yearStatus:
      'Przyjęte 19 czerwca 2023. Otwarte do podpisu 20 września 2023. Weszło w życie 17 stycznia 2026.',
    what: 'Prawnie wiążące porozumienie, które wykonuje Konwencję Narodów Zjednoczonych o prawie morza dla obszarów poza jurysdykcją krajową: morza pełnego i międzynarodowego obszaru dna morskiego. Jedna część dotyczy morskich zasobów genetycznych i podziału korzyści z nich. Inna obejmuje narzędzia zarządzania obszarami, w tym morskie obszary chronione. Kolejna dotyczy ocen oddziaływania na środowisko. Jeszcze inna dotyczy wzmacniania umiejętności i przekazywania technologii morskiej. Wśród organów są Konferencja Stron oraz organy naukowe i techniczne, które ma powołać proces konferencji.',
    where:
      'Przyjęte 19 czerwca 2023, otwarte do podpisu 20 września 2023. Weszło w życie 17 stycznia 2026, czyli 120 dni po sześćdziesiątej ratyfikacji, jak stanowi artykuł 68. Aktualną listę stron prowadzi Zbiór traktatów Organizacji Narodów Zjednoczonych, zapis XXI-10.',
    effects:
      'Zamierzony skutek: zamknąć lukę w zarządzaniu różnorodnością biologiczną na morzu pełnym, umożliwić ochronę obszarów oceanu poza wyłącznymi strefami ekonomicznymi, którymi rządzą państwa przybrzeżne, ustalić oczekiwania co do ocen oddziaływania działalności wpływającej na obszary poza jurysdykcją krajową i dzielić korzyści z morskich zasobów genetycznych. Skutek zależy od reguł konferencji, od finansowania i od wniosków stron o wyznaczenie miejsc.',
    caveats:
      'Porozumienie działa w ramach Konwencji Narodów Zjednoczonych o prawie morza i jej nie zastępuje. Wody przybrzeżne i wyłączne strefy ekonomiczne są poza jego zakresem. Tam obowiązują zobowiązania z Konwencji o różnorodności biologicznej. Porozumienie ustala prawną drogę tworzenia obszarów chronionych na morzu pełnym. Każde miejsce trzeba jeszcze zgłosić i zatwierdzić.',
    sourcesNote:
      'Strona porozumienia w Organizacji Narodów Zjednoczonych; angielski tekst; zapis XXI-10 w Zbiorze traktatów Organizacji Narodów Zjednoczonych; komunikat Międzynarodowej Organizacji Morskiej o wejściu w życie.',
  },
  'un-plastics-treaty': {
    title: 'Traktat ONZ o plastiku (proces INC)',
    hook: 'Mandat na negocjacje prawnie wiążącego instrumentu o plastiku. Nie ma uzgodnionego tekstu traktatu.',
    imageAlt: 'Pałac Narodów w Genewie, gdzie rozmowy INC-5.2 przerwano bez traktatu o plastiku',
    jurisdiction: 'Organizacja Narodów Zjednoczonych (negocjacje międzyrządowe)',
    officialName: 'International legally binding instrument on plastic pollution, including in the marine environment',
    citation: 'UNEA resolution 5/14 (2 March 2022); Intergovernmental Negotiating Committee (INC)',
    yearStatus:
      'Mandat 2022. Nie przyjęty. INC-5.1 (Pusan, 2024) i INC-5.2 (Genewa, sierpień 2025) zakończyły się bez konsensusu. Praca nieformalna trwała w 2026; o kolejnej rundzie formalnej mówiono na 2027.',
    what: 'UNEA poprosiła rządy o negocjacje traktatu obejmującego pełny cykl życia tworzyw, w tym środowisko morskie. Projekt spierano o limity produkcji, chemikalia, finanse i o to, czy decyzje można podejmować bez konsensusu. Papier przewodniczącego „Aid to Negotiations” z 2026 to nieformalna referencja, nie uzgodnione prawo.',
    where: 'Jurysdykcji jeszcze nie ma. Jeśli zostanie przyjęty i ratyfikowany, zwiąże tylko państwa, które przystąpią. Do tego czasu nie wiąże nikogo.',
    effects: 'Zamierzony skutek, gdyby istniał mocny traktat: obciąć wycieki i, w stanowiskach części krajów, ograniczyć produkcję. To cel negocjacyjny. Nie ma wdrożonego globalnego statutu o plastiku do oceny.',
    caveats: 'Nie wkładaj tego pod uchwalone prawo. Dwie „finałowe” rundy padły. Papier przewodniczącego to nie traktat. Krajowe zakazy jednorazówek (w tym dyrektywa UE w tym katalogu) to osobne instrumenty.',
    sourcesNote:
      'Hub UNEP INC; UNEA 5/14; wiadomość ONZ w Genewie o przerwie w sierpniu 2025.',
  },
  'rome-statute-ecocide': {
    title: 'Ekobójstwo jako zbrodnia Statutu Rzymskiego',
    hook: 'Proponowana piąta zbrodnia MTK. Nie ma jej w Statucie. Niektóre kraje napisały krajowe przestępstwa ekobójstwa — to nie to samo.',
    imageAlt: 'Budynek Międzynarodowego Trybunału Karnego w Hadze — sąd, którego Statut ta idea chciałaby nowelizować',
    jurisdiction: 'Wniosek do Zgromadzenia Państw-Stron Międzynarodowego Trybunału Karnego',
    officialName: 'Proposed amendment to add “ecocide” as a crime under the Rome Statute',
    citation:
      'Independent Expert Panel definition (June 2021); proposal presented by Vanuatu, Fiji, and Samoa (September 2024)',
    yearStatus:
      'Idea / propozycja nowelizacji traktatu. Nie przyjęta. Dyskutowana w Grupie Roboczej Zgromadzenia ds. poprawek; w październiku 2025 Vanuatu powiedziało grupie, że nie wniesie tekstu do przyjęcia na Zgromadzeniu tamtego roku.',
    what: 'Panel z 2021 zdefiniował ekobójstwo, w projekcie, jako bezprawne albo lekkomyślne czyny popełnione ze świadomością istotnego prawdopodobieństwa poważnej i przy tym rozległej albo długotrwałej szkody środowiskowej. Idea: dodać to jako piątą zbrodnię obok ludobójstwa, zbrodni przeciwko ludzkości, zbrodni wojennych i agresji. Nowelizacja Statutu Rzymskiego wymaga dużej większości państw-stron, potem ratyfikacji.',
    where: 'Nigdzie jako prawo MTK. Osobne zbrodnie krajowe (na przykład belgijskie przestępstwo ekobójstwa z 2024 albo późniejsze statuty krajowe) obowiązują tylko w tych państwach. Nie tworzą jurysdykcji MTK.',
    effects: 'Zamierzony skutek: osobista odpowiedzialność karna za najcięższe zniszczenie środowiska i sygnał odstraszający. Nie ma orzecznictwa MTK o samodzielnym zarzucie ekobójstwa, bo zbrodni nie ma w Statucie.',
    caveats: 'Ta karta jest ideą, nie statutem w mocy w Trybunale. Kampanijna definicja to nie przyjęty artykuł. Krajowe ustawy o ekobójstwie warto śledzić — i nie są tą propozycją.',
    sourcesNote:
      'Strona definicji prawnej Stop Ecocide; raport Grupy Roboczej Zgromadzenia MTK ds. poprawek (ICC-ASP-24-26); tekst Statutu Rzymskiego w mocy.',
  },
  'eu-ai-act': {
    title: 'Unijny akt o sztucznej inteligencji',
    hook: 'Pierwsze przekrojowe prawo Unii Europejskiej, które porządkuje systemy sztucznej inteligencji według ryzyka. Obowiązki wysokiego ryzyka później przesunięto w czasie; część reguł przejrzystości zachowała pierwotną datę.',
    imageAlt: 'Hemicycle Parlamentu Europejskiego w Strasburgu, gdzie przyjęto akt o sztucznej inteligencji',
    jurisdiction: 'Unia Europejska',
    officialName: 'Akt o sztucznej inteligencji',
    citation:
      'Rozporządzenie Unii Europejskiej 2024/1689 z 13 czerwca 2024 r. w sprawie zharmonizowanych przepisów dotyczących sztucznej inteligencji',
    yearStatus:
      'W mocy od 1 sierpnia 2024 r. Stosowanie etapowe. Rozporządzenie Unii Europejskiej 2026/1744, zbiorczy akt o przepisach cyfrowych w dziedzinie sztucznej inteligencji, w mocy od 27 lipca 2026 r., przesunął część dat wysokiego ryzyka i pozostawił sam akt w mocy.',
    what: 'Akt zakazuje niektórych praktyk, nakłada ciężkie obowiązki na wymienione systemy wysokiego ryzyka (przypadki z załącznika trzeciego: zatrudnienie, kredyt, biometria i infrastruktura krytyczna; sztuczna inteligencja w bezpieczeństwie produktu z załącznika pierwszego) oraz ustala reguły przejrzystości dla określonych systemów i modeli ogólnego przeznaczenia. To prawo produktu i ryzyka dla systemów wprowadzanych na rynek.',
    where: 'Stosowane bezpośrednio w państwach członkowskich Unii Europejskiej. Przepisy obejmują też dostawców, którzy wprowadzają systemy na rynek Unii albo których wynik tam się używa. Organy krajowe i unijne biuro do spraw sztucznej inteligencji dzielą egzekwowanie.',
    effects: 'Zamierzone skutki: trzymać zakazane zastosowania z dala od rynku, wymusić dokumentację i projekt z nadzorem człowieka dla systemów wysokiego ryzyka oraz uczynić część wyjścia generatywnego rozpoznawalnym. To cele konstrukcyjne. Zmierzone liczby redukcji szkód należą do późniejszych oficjalnych ocen.',
    caveats: 'Fazy mają znaczenie. Po akcie zbiorczym z 2026 r. reguły wysokiego ryzyka z załącznika trzeciego, czyli wymienione przypadki użycia, stosują się od 2 grudnia 2027 r., a reguły produktowe z załącznika pierwszego od 2 sierpnia 2028 r., podczas gdy obowiązki przejrzystości z artykułu 50 stosowały się od 2 sierpnia 2026 r. Nagłówek o opóźnieniu aktu obejmuje tylko część tego harmonogramu. Definicje i listy załączników będą przedmiotem postępowań.',
    sourcesNote:
      'Oficjalny tekst rozporządzenia 2024/1689; strona Komisji Europejskiej o ramie regulacyjnej; strona Komisji o harmonogramie stosowania, aktualizacja 2026 r.',
    sources: [
      {
        label: 'Oficjalny tekst rozporządzenia Unii Europejskiej 2024/1689 (Regulation (EU) 2024/1689)',
        url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
      },
      {
        label: 'Komisja Europejska: przegląd aktu o sztucznej inteligencji (AI Act overview)',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      },
      {
        label: 'Komisja Europejska: harmonogram stosowania aktu (AI Act enforcement timeline)',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act',
      },
    ],
  },
  'korea-ai-basic-act': {
    title: 'Koreańska ustawa ramowa o sztucznej inteligencji',
    hook: 'Krajowa ustawa o sztucznej inteligencji w mocy od stycznia 2026 r., z zapowiedzianym okresem ulgi wobec wielu kar.',
    imageAlt: 'Budynek Zgromadzenia Narodowego Republiki Korei w Seulu',
    jurisdiction: 'Republika Korei',
    officialName: 'Ustawa ramowa o rozwoju sztucznej inteligencji i tworzeniu podstaw zaufania',
    citation:
      'Ustawa nr 20676 z 21 stycznia 2025 r., z późniejszymi zmianami; zwykle nazywana podstawową ustawą o sztucznej inteligencji',
    yearStatus: 'Uchwalona w grudniu 2024 r. Ogłoszona 21 stycznia 2025 r. W mocy od 22 stycznia 2026 r., z dekretem wykonawczym.',
    what: 'Ustawa wyznacza ramę: krajowa strategia i infrastruktura oraz obowiązki na rzecz bezpiecznej, godnej zaufania sztucznej inteligencji. Systemy wysokiego oddziaływania dostają dodatkowe wymagania przejrzystości i zarządzania ryzykiem. Wykaz wysokiego oddziaływania jest koreański. Maksymalna kara administracyjna w materiałach ministerstwa jest skromna obok kar Unii Europejskiej liczonych od obrotu.',
    where: 'Republika Korei. Dostawców zagranicznych, którzy spełniają podane progi koreańskich użytkowników albo przychodów, przepisy mogą objąć. Aktualne kryterium jest zapisane w ustawie i w dekrecie.',
    effects: 'Zamierzone skutki: podstawa prawna zarządzania sztuczną inteligencją i przejrzystości systemów wysokiego oddziaływania. Ministerstwo Nauki oraz Technologii Informacyjnych i Komunikacyjnych ogłosiło okres ulgi co najmniej roku od 22 stycznia 2026 r.: na ten czas odkłada się wiele kar i postępowań ustalających fakty, a przypadki poważnej szkody pozostają w toku. Obowiązki w okresie ulgi trwają.',
    caveats: 'Ustawa ramowa wraz z okresem ulgi daje wczesny zapis egzekwowania. Dekret i wytyczne nadal się doprecyzowuje. Akt Unii Europejskiej o sztucznej inteligencji jest starszy jako reżim całościowy, a ta ustawa jest własną koreańską ramą.',
    sourcesNote:
      'Tekst Centrum Tłumaczeń Prawa Koreańskiego; podgląd Koreańskiego Instytutu Badań Legislacyjnych; komunikat Ministerstwa Nauki oraz Technologii Informacyjnych i Komunikacyjnych o wejściu w życie.',
    sources: [
      {
        label:
          'Centrum Tłumaczeń Prawa Koreańskiego: ustawa ramowa o sztucznej inteligencji, ustawa nr 20676 (Framework Act on Artificial Intelligence)',
        url: 'https://elaw.klri.re.kr/eng_service/lawView.do?hseq=73499&lang=ENG',
      },
      {
        label: 'Portal ustaw koreańskich: tekst ustawy ramowej (Korean statutes portal)',
        url: 'https://www.law.go.kr/LSW/lsInfoP.do?chrClsCd=010203&lsiSeq=268543&urlMode=engLsInfoR&viewCls=engLsInfoR',
      },
      {
        label:
          'Ministerstwo Nauki oraz Technologii Informacyjnych i Komunikacyjnych: wejście ustawy w życie 22 stycznia 2026 r. (entry into force)',
        url: 'https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&pageIndex=&bbsSeqNo=42&nttSeqNo=1214&searchOpt=ALL&searchTxt=',
      },
    ],
  },
  'china-generative-ai': {
    title: 'Chińskie środki tymczasowe wobec generatywnej sztucznej inteligencji',
    hook: 'Wiążące reguły dla publicznych usług generatywnej sztucznej inteligencji w Chinach: zgłoszenia, treść i obowiązki wobec danych treningowych tych usług publicznych.',
    imageAlt: 'Rzędy serwerów w centrum danych, przemysłowe tło dużych modeli generatywnych',
    jurisdiction: 'Chińska Republika Ludowa',
    officialName: 'Środki tymczasowe w sprawie zarządzania usługami generatywnej sztucznej inteligencji',
    citation:
      'Administracja Cyberprzestrzeni Chin i sześć innych resortów; opublikowane 13 lipca 2023 r.; w mocy od 15 sierpnia 2023 r.',
    yearStatus:
      'W mocy od 15 sierpnia 2023 r. Tymczasowe reguły Administracji Cyberprzestrzeni Chin i sześciu innych resortów.',
    what: 'Środki dotyczą usług generatywnych, które dostarczają publiczności w Chinach tekst, obrazy, dźwięk albo wideo. Dostawcy muszą używać legalnych danych treningowych, chronić informacje osobowe, zarządzać nielegalną treścią, oznaczać materiał wygenerowany oraz, tam gdzie reguły tego wymagają, przechodzić oceny bezpieczeństwa i zgłoszenia algorytmów. Usługi zagraniczne skierowane do chińskiej publiczności można blokować.',
    where: 'Chiny kontynentalne, dla publicznych usług generatywnych. Wewnętrzne narzędzia badawcze, których nie oferuje się publiczności, według tekstu zostają poza głównym zakresem.',
    effects: 'Zamierzone skutki: reżim zgłoszeń i treści dla modeli generatywnych używanych przez publiczność oraz papierowy ślad dla regulatorów. Administracja Cyberprzestrzeni Chin publikowała partie zgłoszonych usług. Te partie są zapisem rejestracji.',
    caveats: 'To środki tymczasowe na bazie istniejących ustaw o cyberprzestrzeni, danych i informacjach osobowych. Wyznaczają obowiązki zgłoszenia, treści, oznaczania i oceny dla publicznych usług generatywnych. Reguły treści odzwierciedlają chińskie prawo polityczne i przepisy o cenzurze, co ma znaczenie przy porównywaniu reżimów bezpieczeństwa sztucznej inteligencji.',
    sourcesNote:
      'Oficjalna publikacja środków Administracji Cyberprzestrzeni Chin; porównanie projektu i tekstu końcowego przygotowane przez Forum Przyszłości Prywatności.',
    sources: [
      {
        label: 'Administracja Cyberprzestrzeni Chin: środki tymczasowe z 13 lipca 2023 r. (Interim Measures)',
        url: 'https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm',
      },
      {
        label:
          'Forum Przyszłości Prywatności: porównanie projektu i tekstu końcowego (Future of Privacy Forum comparison)',
        url: 'https://fpf.org/blog/chinas-interim-measures-for-the-management-of-generative-ai-services-a-comparison-between-the-final-and-draft-versions-of-the-text/',
      },
    ],
  },
  'california-sb-53': {
    title: 'Kalifornijska ustawa o przejrzystości zaawansowanych systemów sztucznej inteligencji',
    hook: 'Ustawa stanowa dla największych twórców modeli: opublikować ramę bezpieczeństwa i zgłaszać poważne incydenty. Projekt senacki nr 1047 z 2024 r. został zawetowany.',
    imageAlt: 'Kapitol stanu Kalifornia w Sacramento',
    jurisdiction: 'Kalifornia, Stany Zjednoczone',
    officialName: 'Ustawa o przejrzystości zaawansowanej sztucznej inteligencji',
    citation:
      'Projekt senacki nr 53 (Wiener), rozdział 138, Zbiór ustaw z 2025 r.; Kodeks działalności gospodarczej i zawodów Kalifornii, paragrafy 22757.10 i następne',
    yearStatus:
      'Podpisana 29 września 2025 r. Główne obowiązki największych twórców od 1 stycznia 2026 r. Projekt senacki nr 1047 z 2024 r. gubernator zawetował.',
    what: 'Projekt senacki nr 53 wymaga od dużych twórców modeli zaawansowanych, w ustawie nazwanych granicznymi, publikowania ramy bezpieczeństwa, oceny twierdzeń o ryzyku katastroficznym w sensie ustawy, zgłaszania krytycznych incydentów bezpieczeństwa i ochrony wskazanych sygnalistów. To ustawa o przejrzystości i sprawozdawczości.',
    where: 'Prawo Kalifornii. Jest skierowana do dużych twórców, którzy spełniają ustawowe progi mocy obliczeniowej i przychodów. Obowiązki wynikają z prawa stanowego.',
    effects: 'Zamierzone skutki: publiczne dokumenty ram bezpieczeństwa i kanał zgłoszeń incydentów do stanu. W 2026 r. oficjalna ocena tego, czy te zgłoszenia zmniejszyły szkodę, jest jeszcze przed nami.',
    caveats: 'Progi zostawiają większość twórców poza ustawą. Opublikowana rama jest publicznym ujawnieniem środków twórcy. Spory o to, czy prawo federalne wyprze ustawę stanową, pozostają żywą kwestią polityczną w Stanach Zjednoczonych. Projekt senacki nr 1047 z 2024 r. gubernator zawetował; obowiązującą ustawą jest projekt senacki nr 53.',
    sourcesNote:
      'Status i tekst projektu Legislatury Kalifornii; komunikat kancelarii gubernatora o podpisaniu 29 września 2025 r.',
    sources: [
      {
        label: 'Legislatura Kalifornii: status projektu senackiego nr 53 (Senate Bill 53 status)',
        url: 'https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260SB53',
      },
      {
        label: 'Legislatura Kalifornii: tekst projektu senackiego nr 53 (Senate Bill 53 text)',
        url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53',
      },
      {
        label: 'Kancelaria gubernatora: komunikat o podpisaniu 29 września 2025 r. (signing statement)',
        url: 'https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/',
      },
    ],
  },
  'canada-c-36': {
    title: 'Kanadyjski projekt C-36: decyzje zautomatyzowane w reformie prywatności',
    hook: 'Żywy projekt o prywatności z obowiązkami wobec decyzji zautomatyzowanych. To odrębny tekst od ustawy o sztucznej inteligencji i danych, i na razie jest po pierwszym czytaniu.',
    imageAlt: 'Gmach centralny Wzgórza Parlamentarnego w Ottawie',
    jurisdiction: 'Kanada (szczebel federalny)',
    officialName: 'Ustawa o ochronie prywatności i danych konsumentów (proponowana w ramach projektu C-36)',
    citation:
      'Projekt C-36, 45. parlament, 1. sesja: ustawa o uchwaleniu Ustawy o ochronie prywatności i danych konsumentów, o zmianie Ustawy o ochronie informacji osobistych i dokumentach elektronicznych oraz o zmianach powiązanych',
    yearStatus:
      'Wniesiony 15 czerwca 2026 r., pierwsze czytanie. Pozostaje przed parlamentem. Ustawa o sztucznej inteligencji i danych, część 3 projektu C-27, zakończyła się, gdy pracę parlamentu przerwano w styczniu 2025 r., i od tamtej pory nie wróciła do porządku obrad.',
    what: 'Projekt C-36 głównie przepisuje zasady prywatności sektora prywatnego. Definiuje zautomatyzowany system decyzji i wymagałby wyjaśnienia, na wniosek, gdy taki system wydaje prognozę, rekomendację albo decyzję o skutku prawnym albo podobnie istotnym, a także możliwości pisemnych przedstawień człowiekowi, który może to przejrzeć. Obowiązki związane ze sztuczną inteligencją w tym tekście sprowadzają się do wyjaśnienia i przeglądu przez człowieka.',
    where: 'Po uchwaleniu obejmowałby federalną prywatność sektora prywatnego w Kanadzie. W złożonej wersji obowiązki zautomatyzowane polegają na wyjaśnieniu i przeglądzie przez człowieka.',
    effects: 'Zamierzone skutki: przejrzystość i ścieżka przeglądu ludzkiego dla istotnych decyzji zautomatyzowanych. Uchwalonych skutków projektu C-36, które dałoby się zmierzyć, na razie nie ma.',
    caveats: 'Pierwsze czytanie otwiera drogę projektu. Tekst w komisji może się zmienić albo pozostać bez uchwalenia. Ustawa o sztucznej inteligencji i danych zakończyła się wraz z przerwaniem pracy parlamentu w styczniu 2025 r. Projekt C-36 jest projektem o prywatności, który niesie obowiązki wobec decyzji zautomatyzowanych.',
    sourcesNote: 'Strona informacji o projekcie C-36 na witrynie parlamentu Kanady; tekst pierwszego czytania.',
    sources: [
      {
        label: 'Parlament Kanady: informacje o projekcie C-36 (Bill C-36, 45th Parliament)',
        url: 'https://www.parl.ca/LegisInfo/en/bill/45-1/C-36',
      },
      {
        label: 'Izba Gmin: tekst pierwszego czytania projektu C-36 (first reading)',
        url: 'https://www.parl.ca/DocumentViewer/en/45-1/bill/C-36/first-reading',
      },
    ],
  },
  'ai-civil-liability': {
    title: 'Osobna ustawa o odpowiedzialności cywilnej za sztuczną inteligencję',
    hook: 'Unia Europejska przygotowała projekt i go wycofała. Pomysł, by ułatwić dowód, gdy system sztucznej inteligencji wyrządza szkodę, pozostaje użyteczny jako propozycja.',
    imageAlt: 'Posąg Sprawiedliwości, zwykły emblemat roszczeń cywilnych',
    jurisdiction: 'Pomysł (wniosek Unii Europejskiej wycofany; zadanie zostaje)',
    officialName: 'Proponowana dyrektywa o odpowiedzialności za sztuczną inteligencję (wycofana przed przyjęciem)',
    citation:
      'Wniosek Komisji Europejskiej z 2022 r., dokument 496; zwykła procedura ustawodawcza 2022/0303; wycofany przez Komisję w 2025 r.',
    yearStatus:
      'Propozycja. Złożona 28 września 2022 r. Wycofana w 2025 r. (dossier legislacyjne Parlamentu Europejskiego: wycofanie 6 października 2025 r.).',
    what: 'Wycofana dyrektywa dostosowałaby krajowe reguły deliktów oparte na winie: ujawnienie dowodów o sztucznej inteligencji wysokiego ryzyka i w części przypadków domniemanie przyczynowości, aby poszkodowani mieli drogę przez dowody. Tekst pisano jako sąsiedni wobec aktu o sztucznej inteligencji dla roszczeń opartych na winie.',
    where: 'Roszczenia o szkodę wyrządzoną przez sztuczną inteligencję, oparte na winie, w Unii Europejskiej idą przez krajowe prawo deliktowe. Inny instrument, zmieniona dyrektywa o odpowiedzialności za produkt 2024/2853, traktuje oprogramowanie, w tym sztuczną inteligencję, jako produkt dla ścisłej odpowiedzialności za produkt i ma być przeniesiona do prawa krajowego do 9 grudnia 2026 r. Ta dyrektywa jest uchwalona. Wycofany wniosek i uchwalona dyrektywa o produkcie są odrębnymi aktami.',
    effects: 'Zamierzony skutek propozycji: uczynić odszkodowanie realnym, gdy nieprzejrzysty system wyrządza szkodę. Po wycofaniu sądy nie mają orzecznictwa na podstawie dyrektywy o odpowiedzialności za sztuczną inteligencję.',
    caveats: 'Dyrektywę o odpowiedzialności za sztuczną inteligencję wycofano 6 października 2025 r. Przepisy o odpowiedzialności za produkt przepisuje się tak, aby objęły oprogramowanie. Wycofany tekst pozostaje propozycją.',
    sourcesNote:
      'Dossier legislacyjne Parlamentu Europejskiego 2022/0303; wniosek Komisji z 2022 r.; tekst dyrektywy 2024/2853, uchwalony akt o odpowiedzialności za produkt.',
    sources: [
      {
        label: 'Dossier legislacyjne Parlamentu Europejskiego 2022/0303 (procedure 2022/0303, withdrawn)',
        url: 'https://oeil.secure.europarl.europa.eu/oeil/popups/ficheprocedure.do?lang=en&reference=2022/0303(COD)',
      },
      {
        label: 'Wniosek Komisji Europejskiej z 2022 r., dokument 496 (COM(2022) 496)',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022PC0496',
      },
      {
        label: 'Dyrektywa o odpowiedzialności za produkt 2024/2853 (Directive (EU) 2024/2853)',
        url: 'https://eur-lex.europa.eu/eli/dir/2024/2853/oj',
      },
    ],
  },
  cites: {
    title: 'CITES',
    hook: 'Globalna konwencja o handlu dzikimi gatunkami. Reguluje wymienione gatunki w handlu. To nie prawo siedlisk.',
    imageAlt: 'Słonie afrykańskie — takson od dawna wiązany z listami załączników CITES i kontrolą kości słoniowej',
    jurisdiction: 'Międzynarodowa (173+ stron; aktualna lista na cites.org)',
    officialName: 'Convention on International Trade in Endangered Species of Wild Fauna and Flora',
    citation: 'Signed 3 March 1973, Washington, D.C.; entered into force 1 July 1975',
    yearStatus: 'W mocy od 1 lipca 1975. Załączniki nowelizuje się na Konferencjach Stron.',
    what: 'CITES kontroluje międzynarodowy handel komercyjny wymienionymi zwierzętami i roślinami przez zezwolenia. Załącznik I jest najostrzejszy (handel komercyjny dzikimi okazami zasadniczo zakazany); załącznik II dopuszcza handel regulowany; załącznik III to jednostronna lista strony. Każda strona musi uchwalić krajowe prawo wdrażające.',
    where: 'Między stronami, na granicy i w systemie zezwoleń. Kłusownictwo krajowe bez węzła handlowego to głównie inne prawo (na przykład krajowa ustawa o dzikiej przyrodzie albo amerykańska ESA).',
    effects: 'Zamierzony skutek: nie pozwolić, by handel międzynarodowy pchał wymienione gatunki ku wymarciu. Część populacji odbiła się, będąc na liście; inne nie. Ta strona nie wymyśla jednego globalnego wskaźnika sukcesu.',
    caveats: 'Wpisy na listę są polityczne. Nielegalny handel trwa. CITES nie wyznacza parków narodowych i samo z siebie nie odtwarza siedlisk. Jakość wdrożenia bardzo się różni.',
    sourcesNote: 'Oficjalny tekst CITES i strona “what is CITES”; UN Treaty Collection.',
  },
  'endangered-species-act': {
    title: 'Amerykańska ustawa o gatunkach zagrożonych',
    hook: 'Rdzenny amerykański statut o gatunkach z listy i ich siedlisku krytycznym — wpisy, zakazy „take” i obowiązki agencji federalnych.',
    imageAlt: 'Bielik amerykański, gatunek niegdyś wpisany na listę ESA i później zdjęty po udokumentowanej odbudowie',
    jurisdiction: 'Stany Zjednoczone',
    officialName: 'Endangered Species Act of 1973',
    citation: '16 U.S.C. § 1531 et seq.',
    yearStatus: 'Uchwalona 28 grudnia 1973. Nadal w mocy, z późniejszymi nowelizacjami.',
    what: 'ESA wymaga od rządu federalnego wpisywania gatunków zagrożonych i narażonych na podstawie nauki, w wielu przypadkach wyznaczania siedliska krytycznego, zakazywania „take” zwierząt z listy (z pozwoleniami i wyjątkami) oraz konsultacji agencji federalnych, by ich działania z wysokim prawdopodobieństwem nie narażały gatunków z listy. Plany odbudowy są wymagane, ale nie są samowykonującą się magią.',
    where: 'Stany Zjednoczone, w tym morze terytorialne, jak stanowi statut. To prawo krajowe, które częściowo wdraża też CITES.',
    effects: 'Zamierzony skutek: zapobiegać wymarciu i odbudowywać gatunki z listy. FWS i NOAA publikują przeglądy statusu i niektóre zdjęcia z listy (bielik to zwykły podręcznikowy przypadek). Odbudowa jest nierówna; wiele gatunków z listy zostaje na liście. Ta strona nie wymyśla liczby „90 procent uratowanych”.',
    caveats: 'Decyzje o wpisie i siedlisku krytycznym są procesowane. Ustawa jest silniejsza wobec zwierząt niż wobec większości przekształceń siedlisk przez podmioty prywatne bez węzła federalnego. To nie ustawa o finansowaniu korytarzy.',
    sourcesNote: 'Strona prawa ESA i strona programu FWS; rozdział 35 Kodeksu USA.',
  },
  'habitats-directive': {
    title: 'Unijna dyrektywa siedliskowa',
    hook: 'Prawny kręgosłup Natura 2000 na lądzie i na morzu, razem z dyrektywą ptasią.',
    imageAlt: 'Puszcza Białowieska po unijnej stronie granicy polskiej — typ siedliska, który dyrektywa ma utrzymać',
    jurisdiction: 'Unia Europejska',
    officialName: 'Habitats Directive',
    citation: 'Council Directive 92/43/EEC of 21 May 1992 on the conservation of natural habitats and of wild fauna and flora',
    yearStatus: 'Przyjęta w 1992. Nadal w mocy. Dyrektywa ptasia (obecnie 2009/147/EC) jest instrumentem towarzyszącym.',
    what: 'Państwa członkowskie muszą wyznaczać specjalne obszary ochrony dla wymienionych typów siedlisk i gatunków, utrzymywać je we właściwym stanie ochrony oraz oceniać plany albo projekty, które mogłyby istotnie wpłynąć na obszar Natura 2000. Ścisła ochrona dotyczy też niektórych gatunków poza tymi obszarami.',
    where: 'Państwa członkowskie UE, przez krajowe listy obszarów i pozwolenia. Natura 2000 to sieć obszarów, nie jeden płot wokół dziczy.',
    effects: 'Zamierzony skutek: spójna sieć ekologiczna i test prawny przed uszkodzeniem obszaru z listy. Komisja i EEA publikują raporty o statusie; wiele typów siedlisk zostaje w stanie niewłaściwym. Prawo odbudowy przyrody (też w tym katalogu) istnieje po części dlatego, że samo wyznaczenie nie wystarczyło do odbudowy.',
    caveats: 'Obszar na mapie to nie sfinansowany plan zarządzania. Odstępstwa istnieją. Rolnictwo, infrastruktura i projekty energetyczne wciąż zderzają się z obowiązkiem oceny. Dołącz do tej karty dyrektywę ptasią, jeśli potrzebujesz reguł specyficznych dla ptaków.',
    sourcesNote: 'EUR-Lex 92/43/EEC; strona Komisji o dyrektywie siedliskowej; EUR-Lex 2009/147/EC.',
  },
  'kenya-wildlife-act': {
    title: 'Kenijska ustawa o ochronie i zarządzaniu dziką przyrodą',
    hook: 'Obowiązujący kenijski statut o dzikiej przyrodzie: publiczna własność zwierzyny, parki i konserwaty oraz schemat kar za zabijanie i handel.',
    imageAlt:
      'Słonie sawannowe w Parku Narodowym Amboseli w Kenii — dzika przyroda, którą ustawa z 2013 ma zarządzać, nie zdjęcie nazwanego procesu',
    jurisdiction: 'Kenia',
    officialName: 'Wildlife Conservation and Management Act',
    citation: 'Act No. 47 of 2013, now Cap. 376; assented 24 December 2013, commenced 10 January 2014',
    yearStatus: 'W mocy od 10 stycznia 2014, z późniejszymi nowelizacjami.',
    what: 'Ustawa powierza dziką przyrodę ludowi Kenii, trzymaną w zaufaniu przez państwo. Określa Kenya Wildlife Service, parki narodowe i rezerwaty, konserwaty wspólnotowe i prywatne, listy gatunków oraz przestępstwa zabijania, chwytania albo handlu wbrew ustawie. To statut ochrony i zarządzania, z językiem zrównoważonego użytkowania, nie importowana ustawa kampanii o zwierzętach hodowlanych.',
    where: 'Kenia, w tym obszary chronione i dzika przyroda na innym gruncie, jak stanowi ustawa.',
    effects: 'Zamierzone skutki: nowoczesna rama prawna po starszej ustawie z 1976, przestrzeń dla konserwatów i mocniejsze pisane kary za kłusownictwo i handel. Skutki w terenie nadal zależą od egzekwowania, umów ze wspólnotami oraz handlu kością i mięsem bushmeat. Ta strona nie wymyśla krajowego procentu odbudowy słoni za 2013–2026.',
    caveats: 'Konflikt człowiek–dzika przyroda i spory o odszkodowania są wbudowane w kenijską politykę dzikiej przyrody. Statut to nie strażnik. Międzynarodowe reguły handlu nadal idą przez przepisy wdrażające CITES.',
    sourcesNote: 'Oficjalny tekst Kenya Law (Cap. 376); rekord FAOLEX Act No. 47 of 2013.',
  },
  'cms-bonn-convention': {
    title: 'CMS — konwencja z Bonn',
    hook: 'Traktat ONZ dla zwierząt migrujących przez granice. Załącznik I — ścisła ochrona; Załącznik II — umowy państw areału. To nie CITES i nie krajowa ustawa siedliskowa.',
    imageAlt:
      'Gnu w ruchu przez trawę Serengeti — transgraniczna migracja tego rodzaju, który konwencja z Bonn każe uzgadniać państwom areału',
    jurisdiction: 'Międzynarodowy (Strony konwencji)',
    officialName: 'Konwencja o ochronie wędrownych gatunków dzikich zwierząt',
    citation:
      'Konwencja o ochronie wędrownych gatunków dzikich zwierząt; Bonn, 23 czerwca 1979; weszła w życie 1 listopada 1983',
    yearStatus:
      'Sporządzona w Bonn 23 czerwca 1979. Weszła w życie 1 listopada 1983. Depozytariusz: Republika Federalna Niemiec.',
    what: 'Konwencja ramowa UNEP: siedliska i zakaz pozyskania (załącznik I); AGREEMENTS lub MoU (załącznik II).',
    where: 'Od 1 listopada 1983. Lista Stron jest opublikowana na cms.int.',
    effects:
      'Zamierzony skutek: uzgodnić ochronę wzdłuż całych tras przelotu i wędrówki oraz dać początek porozumieniom pochodnym (AEWA, EUROBATS i inne instrumenty rodziny CMS). Sam tekst konwencji nie grodzi korytarza.',
    caveats: 'Nie system pozwoleń handlowych (CITES). Nie Birds/Habitats ani ESA.',
    sourcesNote: 'Tekst konwencji i strona główna CMS na cms.int.',
  },
  'birds-directive': {
    title: 'Dyrektywa ptasia UE',
    hook: 'Pierwsza unijna dyrektywa przyrodnicza. Chroni wszystkie naturalnie występujące dzikie ptaki i napędza OSO w Natura 2000 — para z dyrektywą siedliskową.',
    imageAlt:
      'Bielik nad wodą w Svolvær w Norwegii — dziki europejski ptak tego rodzaju, którego dyrektywa ptasia każe chronić państwom członkowskim',
    jurisdiction: 'Unia Europejska',
    officialName: 'Dyrektywa 2009/147/WE w sprawie ochrony dzikiego ptactwa',
    citation:
      'Dyrektywa 2009/147/WE (kodyfikacja; pierwotnie 79/409/EWG, 1979) w sprawie ochrony dzikiego ptactwa',
    yearStatus:
      'Pierwotna dyrektywa 79/409/EWG (1979). Obowiązujący tekst skodyfikowany: 2009/147/WE. Obowiązuje w państwach członkowskich. Konsultacja uproszczeń z 2026 roku nie jest uchyleniem.',
    what: 'Zakazy uśmiercania, chwytania i niszczenia gniazd; OSO dla załącznika I i innych migrantów; część Natura 2000.',
    where: 'Obowiązuje; tekst 2009/147/WE. Konsultacja uproszczeń z 2026 roku nie jest uchyleniem.',
    effects:
      'Zamierzony skutek: zatrzymać spadek dzikich ptaków, odbudować siedliska i zbudować sieć OSO. Komisja podaje ponad 5400 obszarów o powierzchni powyżej 832 000 km². Spadek ptaków krajobrazu rolniczego pozostaje udokumentowaną presją; dyrektywa jest ramą prawną, nie gwarancją odbudowy wskaźników.',
    caveats: 'Nie CITES. Dyrektywa siedliskowa jest osobnym aktem.',
    sourcesNote: 'Strona Komisji Europejskiej o dyrektywie ptasiej; tekst dyrektywy 2009/147/WE w EUR-Lex.',
  },
  'bern-convention': {
    title: 'Konwencja berneńska',
    hook: 'Traktat Rady Europy o dzikiej przyrodzie i siedliskach. Listy gatunków ściśle chronionych i Komitet Stały — instrument paneuropejski, nie tożsamy z dyrektywami UE o ptakach i siedliskach.',
    imageAlt:
      'Koziorożec alpejski na wysokogórskiej łące w Alpach Szwajcarskich — europejska dzika przyroda tego rodzaju, który konwencja berneńska obejmuje ochroną',
    jurisdiction: 'Rada Europy (Strony; otwarta też dla spoza RE według reguł traktatu)',
    officialName: 'Konwencja o ochronie europejskiej przyrody dzikiej i siedlisk naturalnych',
    citation:
      'Konwencja o ochronie europejskiej przyrody dzikiej i siedlisk naturalnych (ETS nr 104); Berno, 19 września 1979; weszła w życie 1 czerwca 1982',
    yearStatus: 'ETS nr 104. Otwarta do podpisu w Bernie 19 września 1979. Weszła w życie 1 czerwca 1982.',
    what: 'Ochrona flory i fauny oraz siedlisk; załączniki; Komitet Stały; sieć Emerald poza UE.',
    where: 'ETS nr 104; od 1 czerwca 1982.',
    effects:
      'Zamierzony skutek: wspólna europejska podstawa ochrony gatunków i siedlisk obok dyrektyw UE i poza nimi; obszary sieci Emerald dla Stron spoza UE. Miękkie zalecenia i tak wymagają wdrożenia krajowego, żeby zaczęły działać.',
    caveats: 'Nie CITES ani CMS. Dyrektywy ptasia i siedliskowa wiążą państwa członkowskie jako prawo UE. Sieć Emerald w ramach konwencji berneńskiej ma cele zbliżone do Natura 2000, ale inną podstawę prawną.',
    sourcesNote: 'Strona konwencji berneńskiej Rady Europy, traktat nr 104 i PDF tekstu konwencji.',
  },
  'marine-mammal-protection-act': {
    title: 'Amerykańska ustawa o ochronie ssaków morskich (MMPA)',
    hook: 'Federalna ustawa USA zasadniczo zakazująca pozyskania ssaków morskich w wodach USA i przez osoby USA. Szersza niż samo wpisanie na listę ESA.',
    imageAlt: 'Długopłetwiec i cielę pod wodą — ssaki morskie objęte amerykańskim moratorium na pozyskanie',
    jurisdiction: 'Stany Zjednoczone',
    officialName: 'Marine Mammal Protection Act of 1972',
    citation: 'Marine Mammal Protection Act of 1972, 16 U.S.C. § 1361 et seq. (ze zmianami)',
    yearStatus: 'Uchwalona w 1972. Nowelizacje między innymi w 1992 i 1994. Nadal w mocy.',
    what: 'Moratorium na „take” i import z wyjątkami; oceny stad; role NOAA, FWS i MMC.',
    where: 'Federalne prawo USA od 1972; nowelizacje między innymi w 1992 i 1994.',
    effects:
      'Zamierzony skutek: zatrzymać uszczuplanie stad ssaków morskich jako składników ekosystemu, wymagać wykazania, że pozyskanie nie zaszkodzi stadu, i wspierać reakcję na wyrzucenia na brzeg. Status stad różni się między gatunkami — ustawa jest ramą, nie świadectwem odbudowy.',
    caveats: 'To nie ESA: gatunek może podlegać obu aktom. Nie CITES ani sama konwencja wielorybnicza.',
    sourcesNote:
      'Strony NOAA Fisheries, FWS i Marine Mammal Commission; tekst scalony w GovInfo.',
  },
  'lacey-act': {
    title: 'Ustawa Laceya (Lacey Act)',
    hook: 'Amerykańska ustawa, która czyni federalnym przestępstwem handel dziką przyrodą, rybami lub roślinami pozyskanymi z naruszeniem prawa USA, stanu lub obcego państwa — wzmacniacz obok CITES, nie druga lista CITES.',
    imageAlt:
      'Ułożona skonfiskowana kość słoniowa w magazynie przed zniszczeniem — nielegalny produkt dzikiej przyrody tego rodzaju, który ustawa Laceya ma nie wpuszczać do handlu USA',
    jurisdiction: 'Stany Zjednoczone',
    officialName: 'Lacey Act',
    citation: 'Lacey Act, 16 U.S.C. §§ 3371–3378 (od 1900; nowelizacje handlu dziką przyrodą m.in. 1981)',
    yearStatus: 'Od 1900. Nowelizacje handlu dziką przyrodą, między innymi w 1981. Nadal w mocy.',
    what: 'Zakaz handlu przy naruszeniu prawa bazowego; fałszywe oznakowanie przesyłek. Ustawa rolna z 2008 roku rozszerzyła ustawę na rośliny i produkty z drewna.',
    where: 'Federalne prawo USA od 1900; nowelizacje między innymi w 1981.',
    effects:
      'Zamierzony skutek: zamknąć rynek USA dla nielegalnie pozyskanej dzikiej przyrody i wesprzeć obce oraz stanowe prawo ochrony przez federalne ściganie. Skuteczność zależy od wykrywania i jakości prawa, na którym ustawa się opiera.',
    caveats: 'Nie sam CITES. Nie ESA ani MMPA.',
    sourcesNote: 'Strona U.S. Fish and Wildlife Service o ustawie Laceya; ustawy i polityki NOAA Fisheries.',
  },
  'wildlife-corridors-act': {
    title: 'Amerykański projekt o korytarzach dzikiej przyrody (2026)',
    hook: 'Projekt Izby o mapowaniu i finansowaniu spójności siedlisk. Wniesiony. Nie uchwalony.',
    imageAlt: 'Porośnięty przejazd dla zwierząt — rodzaj przejścia, które projekty o korytarzach próbują legalizować i finansować',
    jurisdiction: 'Stany Zjednoczone (proponowany projekt federalny)',
    officialName: 'Wildlife Corridors and Habitat Connectivity Conservation Act of 2026',
    citation: 'H.R. 8438, 119th Congress; introduced 22 April 2026 by Rep. Donald S. Beyer and cosponsors',
    yearStatus:
      'Rozpatrywany. Wniesiony i skierowany do komisji Izby: Zasobów Naturalnych, Rolnictwa, Transportu i Infrastruktury oraz Sił Zbrojnych. Nie uchwalony; nie podpisany.',
    what: 'Wniesiony tekst poleciłby federalnej nauce mapowanie korytarzy, poprawił współpracę na federalnej ziemi i wodzie oraz stworzył program grantów na pracę korytarzową na gruncie niefederalnym — w tym zadeklarowaną rezerwę środków na szlaki migracji dużej zwierzyny. Autoryzacje we wniesionym tekście to propozycje, nie przyznane dolary.',
    where: 'Obowiązywałyby, gdyby uchwalono, jako federalne prawo USA. Do tego czasu nie obowiązuje nigdzie.',
    effects: 'Zamierzony skutek: traktować spójność jako przedmiot ochrony z mapą i pozycją budżetową. Nie ma uchwalonej ustawy korytarzowej 2026 do oceny.',
    caveats: 'Skierowanie do komisji to nie głosowanie na sali. Poprzednie projekty korytarzowe we wcześniejszych Kongresach też nie stały się prawem. Nie opisuj przejazdów już zbudowanych przez stany albo Parks Canada tak, jakby ten projekt je zbudował.',
    sourcesNote: 'Congress.gov H.R. 8438; wniesiony PDF na GovInfo.',
  },
  'recovering-americas-wildlife': {
    title: 'Ustawa o odbudowie dzikiej przyrody Ameryki',
    hook: 'Powracająca propozycja finansowania gatunków stanowych i plemiennych o największej potrzebie ochrony. Izba raz ją uchwaliła. Nigdy nie stała się prawem.',
    imageAlt: 'Bizony amerykańskie na otwartym pastwisku — odbudowana ikona, nie twierdzenie, że RAWA sfinansowała to stado',
    jurisdiction: 'Stany Zjednoczone (powracająca propozycja)',
    officialName: 'Recovering America’s Wildlife Act (various bill numbers)',
    citation:
      'e.g. H.R. 2773, 117th Congress (passed House 14 June 2022, 231–190; died in the Senate); later reintroductions including S.1149, 118th Congress',
    yearStatus:
      'Idea / powracający nieuchwalony projekt. Nie w mocy. Na 2026 pozostawała kampanią i ćwiczeniem redakcyjnym, nie podpisanym statutem. Każdy nowy Kongres sprawdzaj na congress.gov, zanim potraktujesz świeży numer jako żywy.',
    what: 'Wersje kierowałyby duże, dedykowane sumy — rzędu miliarda dolarów rocznie w tekście uchwalonym przez Izbę w 2022 — do stanowych agencji ryb i zwierzyny oraz plemion, by wdrażać State Wildlife Action Plans i odbudowywać gatunki zanim będą potrzebowały awaryjnego wpisu ESA. To konstrukcja finansowania, nie nowy statut o listach.',
    where: 'Nigdzie jako prawo. Gdyby uchwalono, byłaby federalną architekturą dotacji USA związaną z kontami w stylu Pittman–Robertson.',
    effects: 'Zamierzony skutek: finansować ochronę z wyprzedzeniem, by mniej gatunków trafiało na ESA. Zwolennicy wciąż publikują tę tezę. Nie ma rejestru wydatków RAWA, bo nie ma RAWA.',
    caveats: 'Ta karta jest ideą, choć tekst raz przeszedł jedną izbę. Głosowanie Izby to nie ustawa. Nie kładź RAWA na półkę Obowiązujących. Nie wymyślaj numeru ustawy publicznej z 2026.',
    sourcesNote:
      'Congress.gov H.R. 2773 (117th) i S.1149 (118th); briefing NWF 2026, który wciąż traktuje uchwalenie w czasie przyszłym.',
  },
  'companion-animal-homicide-parity': {
    title: 'Parytet umyślnego znęcania się nad zwierzęciem towarzyszącym',
    hook: 'Proponowana reguła: umyślne bicie, tortury albo sadystyczna krzywda psu albo kotu towarzyszącemu byłyby sądzone na tej samej skali karnej co odpowiadające przestępstwo przeciwko człowiekowi. Wypadki i zwierzęta zabite na drodze są poza zakresem. Żadne państwo tego nie uchwaliło. Ta karta jest ideą.',
    imageAlt:
      'Pręgowany kot na kamiennym murze i złoty pies za nim w Mosteiros na Azorach — zwierzęta towarzyszące, nie zdjęcie nazwanej sprawy',
    jurisdiction: 'Idea (brak uchwalającej jurysdykcji)',
    officialName: 'Proposed intentional companion-animal cruelty-parity rule (not a filed statute)',
    citation:
      'Catalog idea. Nearest real instruments: 18 U.S.C. § 48 (PACT Act); Portugal Lei n.º 8/2017; German BGB § 90a; Ecuador Constitutional Court Sentencia 253-20-JH/22',
    yearStatus:
      'Idea / propozycja. Nie uchwalona. Nie rozpatrywana w nazwanym parlamencie. Żadna jurysdykcja nie zapisała pełnej równoważności pobicia albo zabójstwa człowieka za umyślne znęcanie się nad zwierzęciem towarzyszącym.',
    what: 'Idea to reguła skali karnej tylko dla umyślnej przemocy. Umyślne bicie, tortury albo inna sadystyczna krzywda psu albo kotu towarzyszącemu siedziałaby na tej samej drabinie przestępstw co odpowiadające przestępstwo przeciwko człowiekowi — pobicie, tortury albo ciężki uszczerbek na zdrowiu; a jeśli umyślny czyn zabija — analog zabójstwa. To nie osobny niski zarzut znęcania się nad zwierzętami. To propozycja moralna i redakcyjna, nie tekst przyjęty przez jakikolwiek parlament. Szkoda przypadkowa jest poza ideą: potrącenie kota, psa albo szopa na drodze nie ma być traktowane jak zabójstwo człowieka w ruchu drogowym. Zwykłe kontratypy, które już istnieją w prawie karnym — stan wyższej konieczności, legalna eutanazja weterynaryjna, obrona konieczna — i tak trzeba by dopisać. Ta karta ich nie pisze.',
    where:
      'Nigdzie jako prawo. W wielu krajach umyślne znęcanie się nad zwierzęciem towarzyszącym już może być zbrodnią albo innym poważnym przestępstwem na podstawie ustaw o znęcaniu się nad zwierzętami. Te czyny siedzą w rozdziałach o ochronie zwierząt albo przestępstwach szczególnych. To nie tytuł o pobiciu albo zabójstwie człowieka, a górne kary są zwykle dużo niższe niż skala przemocy wobec człowieka. Kodeksy cywilne, które nazywają zwierzęta istotami czującymi albo „nie rzeczami”, zmieniają język własności. Nie przepisują artykułu o pobiciu albo morderstwie.',
    effects:
      'Tylko zamierzony skutek: silniejsze odstraszenie od umyślnego znęcania się nad zwierzętami towarzyszącymi i publiczny sygnał, że nie są zużywalną własnością. Nie ma statystyk skutku, bo nie ma statutu.',
    caveats:
      'Nie twierdź, że jakiekolwiek państwo ratyfikowało albo uchwaliło pełną równoważność pobicia albo zabójstwa człowieka za znęcanie się nad pupilami. Ten katalog nie znalazł żadnego. Nie czytaj tej karty jako obejmującej wypadki: zwierzę zabite na drodze nie jest w zakresie i nie jest zrównane z zabiciem człowieka w ruchu. Trzech rzeczywistych sąsiadów łatwo pomylić z tą ideą — i nie są nią. Po pierwsze, karne ustawy o znęcaniu się nad zwierzętami już karzą część umyślnej przemocy — na przykład amerykańska Preventing Animal Cruelty and Torture Act, 18 U.S.C. § 48, do siedmiu lat za określony „animal crushing”. To zbrodnia znęcania, nie pobicie i nie morderstwo człowieka. Po drugie, cywilne reformy statusu uznają zwierzęta za czujące albo za „nie rzeczy”: portugalska Lei n.º 8/2017 wstawiła do kodeksu cywilnego art. 201.º-B („os animais são seres vivos dotados de sensibilidade”); niemiecki BGB § 90a („Tiere sind keine Sachen”) nadal stosuje przepisy o rzeczach, dopóki ustawa szczególna nie powie inaczej. Zmiana statusu to nie parytet skali przemocy. Po trzecie, ograniczona jurysprudencja „podmiotów praw” — Trybunał Konstytucyjny Ekwadoru, Sentencia 253-20-JH/22 (Estrellita, 27 stycznia 2022) — uznała dziką małpę wełnistą za podmiot praw w ramach praw Natury i powiedziała, że te prawa nie są równoważne prawom człowieka. To nie czyni bicia albo zabicia psa prawnie tożsamym z pobiciem albo morderstwem człowieka.',
    sourcesNote:
      '18 U.S.C. § 48 na Cornell LII / U.S. Code; PDF Diário da República Lei n.º 8/2017; gesetze-im-internet BGB § 90a; strona Trybunału Konstytucyjnego Ekwadoru dla Sentencia 253-20-JH/22.',
  },
};
