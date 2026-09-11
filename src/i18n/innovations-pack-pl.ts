import type { InnovationCopy } from '../data/innovations';

export const packPl: Record<string, InnovationCopy> = {
  'methane-feed-additive': {
    title: 'Bovaer w gospodarstwach (3-NOP)',
    hook: 'Osiemnaście miesięcy na 162 holenderskich farmach — około 20 000 krów — nadal pokazuje metan niższy o około 30 procent, przy tym samym mleku i rytmie stada.',
    imageAlt: 'Krowy holsztyńskie, których metan żwaczowy celują dodatki 3-NOP',
    what: '3-nitrooksypropanol (3-NOP), sprzedawany jako Bovaer przez dsm-firmenich, hamuje enzym żwacza na ostatnim kroku powstawania metanu. UE dopuściła go w 2022 r.; FDA w USA zakończyła przegląd w maju 2024. Nota dsm-firmenich o holenderskich danych z gospodarstw (162 farmy, ok. 20 000 krów, 18 miesięcy od lipca 2022, z FrieslandCampina i Agrifirm) mówi, że farmy potwierdzają cięcie metanu o 30% bez uszczerbku dla mleka, zdrowia i płodności. Te 30% to liczba firmy i dossier, nie niezależna inwentaryzacja krajowej emisji mleczarskiej.',
    problem:
      'Bydło jest dużym źródłem metanu, krótkotrwałego, ale silnego gazu cieplarnianego. Dodatki paszowe mogą ściąć ten strumień, dopóki stada istnieją. Nie kasują użytkowania ziemi ani podtlenku azotu.',
    how: 'Dodatek miesza się do mieszanki mineralnej albo TMR w skali gramów na krowę dziennie. Trzeba karmić codziennie. Wielkość efektu zależy od diety. To nie szczepionka i nie przepisanie genomu zwierzęcia.',
    players:
      'dsm-firmenich; FrieslandCampina i Agrifirm przy holenderskiej walidacji; Elanco w Ameryce Północnej. Firma pisze, że w chwili noty z 2026 r. Bovaer dostawało ponad 500 000 krów w 25 krajach. Inne narzędzia metanowe (wodorost asparagopsis, konkurenci 3-NOP) idą równolegle.',
    risks:
      'Koszt wobec ceny mleka; nieufność publiczna; pokusa nazwania cięcia o 30% „klimatycznie neutralną wołowiną”. Wyciek, jeśli stada rosną. Ta karta jest o użytku 3-NOP w gospodarstwie, nie o każdym twierdzeniu paszowym.',
    sourcesNote:
      'Nota dsm-firmenich o holenderskich farmach (20 000 krów / 18 miesięcy); UE 2022/565; przegląd FDA z maja 2024. Około 30% to liczba dossier.',
  },
  'fervo-geothermal': {
    title: 'Cape Station — EGS Fervo',
    hook: 'Utahskie odwierty wzorowane na nafcie, celujące w pierwsze komercyjne megawaty amerykańskiej geotermii wspomaganej — harmonogram 2026, jeszcze nie szablon kraju.',
    imageAlt:
      'Elektrownia geotermalna The Geysers w Kalifornii — działające pole pary tej klasy, którą wspomagana geotermia chce kopiować w nowej skale',
    what: 'Wspomagane systemy geotermalne (EGS) wiercą w gorącą skałę bez naturalnego zbiornika hydrotermalnego, tworzą drogę przepływu i puszczają przez nią wodę. Project Red Fervo Energy w Nevadzie dał prąd w 2023 r. na kontrakt Google. Cape Station koło Milford w Utah — obok terenu DOE FORGE — jest większą kontynuacją. Relacja CNBC z 5 września 2026 r. pisała, że projekt szedł do oddania mocy do sieci w następnym miesiącu i byłby pierwszą komercyjną elektrownią EGS w USA. To zgłoszony harmonogram, nie oddana kilowatogodzina, dopóki zakład nie pracuje.',
    problem:
      'Zwykła geotermia jest rzadka: potrzeba ciepła, wody i przepuszczalności w jednym miejscu. Większość ciepła Ziemi jest w suchej skale. EGS próbuje je otworzyć bez czekania na gejzer. Kupcy centrów danych chcą twardych, niskoemisyjnych megawatów.',
    how: 'Fervo wierci parę otworów głębiej niż dwie mile, z horyzontem ponad milę, szczelinuje granit i krąży wodę przemysłową nagrzaną powyżej 400°F przez wymiennik. Solanka jest chłodzona i zatłaczana z powrotem w minuty. To wydobycie ciepła stalą i pompami, nie „darmowa energia”.',
    players:
      'Fervo Energy; Google i inni odbiorcy (Southern California Edison, Shell Energy, NV Energy). CNBC pisało o ok. 1 GW zakontraktowanej mocy po PPA z Google w 2026 r. i majowym IPO. Większość geotermalnych megawatów na świecie nadal daje zwykła hydroterma.',
    risks:
      'Koszt wiercenia, indukowana sejsmika, woda i opóźnienia pierwszego w swoim rodzaju. Harmonogram z Utah to nie terawat. Geologia bywa inna; odwiert w Nevadzie albo Utah nie jest szablonem świata.',
    sourcesNote:
      'CNBC o Cape Station (5 wrz 2026) — harmonogram pierwszej komercyjnej EGS w USA, nie potwierdzona data w sieci. Prąd Project Red w 2023 to wcześniejszy fakt.',
  },
  'long-duration-storage': {
    title: 'Form Energy żelazo–powietrze — Google / Xcel',
    hook: 'Wniosek 300 MW / 30 GWh żelazo–powietrze dla Minnesoty: ogłoszony jako największa bateria w gigawatogodzinach — wciąż plan, nie podwórze zardzewiałych ogniw.',
    imageAlt: 'Kontenerowe moduły baterii sieciowych przy amerykańskim magazynie energii',
    what: 'Bateria żelazo–powietrze Form Energy jest projektowana na około 100 godzin. W lutym 2026 Google i Xcel Energy oświadczyły, że zamierzają zbudować dostawę Form 300 MW / 30 GWh w sieci Xcel na Górnym Środkowym Zachodzie, w pakiecie z 1,4 GW wiatru i 200 MW słońca dla centrum danych w Minnesocie. Xcel nazwał to największym ogłoszonym projektem bateryjnym według pojemności w gigawatogodzinach. Prezes Form powiedział Utility Dive, że pierwsze moduły są spodziewane do końca 2028 r. To umowa i planowany wniosek taryfowy, nie zainstalowane megawaty.',
    problem:
      'Gdy wiatr pada na kilka zimowych dni, czterogodzinny pakiet litowy jest poduszką, nie kręgosłupem. Tani magazyn wielodniowy pozwoliłby sieciom podnieść udział OZE bez udawania, że pogoda jest opcjonalna.',
    how: 'Ogniwa żelazo–powietrze „rdzewieją” żelazo, by magazynować energię, i „odrdzewiają” je przy rozładowaniu — pospolite materiały, niska gęstość energii, duże place. Ani chemia, ani render prasowy nie są cudem fizyki. Lit zostaje koniem roboczym krótkiego czasu.',
    players:
      'Form Energy; Google; Xcel Energy. Pokrewne projekty Form to blok 10 MW / 1 GWh przy Sherco Xcel i mniejszy pilotaż Great River Energy. Osobna karta Irlandii obejmuje pierwszy ogłoszony projekt zagraniczny 10 MW / 1 GWh.',
    risks:
      'Straty cyklu, lokalizacja, przegląd regulatora i to, czy tańszy jest wodór albo więcej przesyłu. Nie licz ogłoszonych 30 GWh jako oddanych megawatogodzin.',
    sourcesNote:
      'Utility Dive o umowie Google–Xcel 300 MW / 30 GWh (luty 2026). Ogłoszona pojemność to nie oddane MWh.',
  },
  'alphafold-proteins': {
    title: 'AlphaFold 3 w użyciu',
    hook: 'Model białek i ich partnerów z 2024 r. jest dziś codziennym oprogramowaniem laboratorium — używanym przez miliony badaczy, nie gotowym enzymem klimatycznym.',
    imageAlt: 'Wstęgowy diagram białka na ciemnym tle — klasa struktur, które te modele przewidują',
    what: 'AlphaFold 2 (DeepMind, Nature, 2021) przewidywał fałdy pojedynczego łańcucha z użyteczną dokładnością; publiczna baza AlphaFold dała setki milionów struktur. AlphaFold 3 i AlphaFold Server wystartowały 8 maja 2024, by przewidywać białka z innymi biomolekułami. Strona AlphaFold DeepMind pisze, że do listopada 2025 narzędzi używało ponad 3 miliony badaczy w ponad 190 krajach. Hassabis i Jumper dostali Nobla z chemii 2024 za tę pracę. To wdrożone oprogramowanie naukowe, nie chatbot i nie fabryka.',
    problem:
      'Enzymy, które jedzą plastik, czyściej wiążą azot albo chwytają węgiel, to problemy projektowania białek. Znać fałd albo kompleks to nie to samo co tani, stabilny enzym przemysłowy — ale zdejmuje wieloletnie wąskie gardło.',
    how: 'Model uczył się z Protein Data Bank i danych pokrewnych. Laboratoria nadal ekspresjonują, oczyszczają i testują. Narzędzia projektowe rysują nowe szkielety; porażka w mokrym laboratorium zostaje zwyczajna.',
    players:
      'Google DeepMind, Isomorphic Labs i EMBL-EBI; Meta ESM i laboratorium Bakera siedzą w tej samej skrzynce; przemysłowy biotech używa stosu przy enzymach i lekach.',
    risks:
      'Biosafety (te same narzędzia mogą naszkicować szkodliwe białka). Nadmierne twierdzenie, że przewidziana PETase to już zakład recyklingu. Energia i woda fermentora nadal się liczą.',
    sourcesNote:
      'Strona AlphaFold DeepMind (AF3 / Server 8 maja 2024; liczby użytku z listopada 2025 są DeepMind). Przewidziany fałd to nie enzym przemysłowy.',
  },
  'climate-trace': {
    title: 'Climate TRACE v5.10',
    hook: 'Inwentarz z sierpnia 2026 r. dał globalne gazy cieplarniane pierwszego półrocza o 0,2 procent powyżej 2025 — oszacowanie z satelit i modelu, nie wyrok sądu.',
    imageAlt: 'Rafineria o zmierzchu — klasa zakładów, które inwentarze emisji próbują mierzyć z kosmosu',
    what: 'Climate TRACE to koalicja, która publikuje globalny inwentarz gazów cieplarnianych z satelit, czujników i uczenia maszynowego, a nie z samozgłoszeń samych. Wydanie v5.10.0 (27 sierpnia 2026) dodało dane miesięczne za czerwiec 2026 i nowy podsektor netto węgla organicznego gleby. Wstępne emisje pierwszego półrocza 2026 to 29,7 mld ton CO₂e, o 0,2% (56,4 mln ton) powyżej pierwszego półrocza 2025. Największy wzrost dał transport drogowy; nieco spadły energetyka i przemysł w księgach TRACE. Na COP30 w Brazylii (listopad 2025) koalicja wypuściła mapę Solutions, która szacuje, ile każde śledzone źródło mogłoby ściąć dojrzałymi, komercyjnymi działaniami — sąsiad półki odpadów Solutions i karty AMP na tej witrynie, nie zastępstwo żadnego z nich.',
    problem:
      'Inwentarze się nie zgadzają. Wycieki metanu z ropy, gazu i węgla często są wyższe niż w sprawozdaniach. Nie zarządza się tym, czego się nie chce mierzyć.',
    how: 'Modele uczą się wyglądu elektrowni, feedlotu albo flary i szacują aktywność oraz wskaźniki emisji, potem łączą to z retrievelami atmosferycznymi, gdzie istnieją. Każda liczba ma niepewność. Jasny piksel to trop, nie wyrok sądu. Rewizje historii są oczekiwane, gdy zmieniają się metody.',
    players:
      'Koalicja Climate TRACE (na stronie About: laboratoria, organizacje pozarządowe i wśród nazwanych Al Gore); pokrewne systemy publiczne to GHGSat i Carbon Mapper. Krajowe inwentarze zostają prawną linią bazową.',
    risks:
      'Fałszywe smugi, polityczny odwet i traktowanie pulpitu jak egzekucji. Satelity jedne sektory widzą lepiej niż inne. v5.10 to jeden miesięczny vintage.',
    sourcesNote:
      'Nota Climate TRACE v5.10 (27 sie 2026); strona About o narzędziu Solutions na COP30 (lis 2025). Jasny piksel to trop, nie wyrok sądu.',
  },
  'deep-sky-alpha': {
    title: 'Deep Sky Alpha — kredyty DAC',
    hook: 'W czerwcu 2026 kanadyjski hub wydał pierwsze w Ameryce Północnej zweryfikowane kredyty bezpośredniego wychwytu z powietrza — 14 ton w złożu, nie zakład megatonowy.',
    imageAlt:
      'Przemysłowa elektrownia z wychwytem dwutlenku węgla — sprzęt tej klasy, nie zdjęcie prasowe Deep Sky Alpha w Albercie',
    what: 'Deep Sky Alpha w Innisfail w Albercie to wielodostawczy hub testowy bezpośredniego wychwytu z powietrza. Reuters 29 czerwca 2026 pisał, że Deep Sky była pierwszą północnoamerykańską firmą, która wydała zweryfikowane kredyty usuwania DAC Microsoftowi i Royal Bank of Canada z węgla zatłoczonego pod ziemię w maju. Pierwszy zatłok to 14 ton; Isometric potwierdził kredyty. Pilo taż w Albercie ma wychwytywać ok. 3000 ton CO₂ rocznie i jest zbudowany tak, by kilka firm DAC mogło stać obok siebie. Własna strona Deep Sky opisuje pięcioakrową płytę w parku przemysłowym. Climeworks na Islandii zostaje drugą firmą, która naprawdę wydała kredyty DAC.',
    problem:
      'Część CO₂ i tak zostanie po ścięciu tego, co się da. Wyciąganie węgla już wymieszanego w powietrzu to jeden sposób zmniejszenia zapasu — tylko jeśli energia jest czysta, a CO₂ zostaje w magazynie. Wysokiej jakości kredytów usuwania jest mało; wiele kontraktów nie oddało ton.',
    how: 'Wentylatory i kontaktory ciągną powietrze otoczenia przez wychwyt; CO₂ jest sprężany i wysyłany do magazynu geologicznego (Deep Sky magazynuje na północ od Edmonton, nie pod Innisfail). Kredyt to zweryfikowana tona, nie tabliczka znamionowa.',
    players:
      'Deep Sky (Kanada); wcześni kupcy kredytów Microsoft i RBC; wśród dalszych odbiorców Reuters wymienił TD Bank, Lufthansę i ENGIE. Na padach Alpha może stać kilku dostawców technologii DAC.',
    risks:
      'DAC jest energożerny i drogi. Czternaście ton i tabliczka 3000 ton to błąd zaokrąglenia obok inwentarzy krajowych. Kredyty można sprzedać szybciej, niż tony trafią do skały. To hub pilotażowy, nie substytut cięcia emisji.',
    sourcesNote:
      'Reuters 29 czerwca 2026 (pierwszy zatłok 14 t; tabliczka ~3000 t/rok; Microsoft i RBC). Tabliczka to nie oddane tony.',
  },
  'avnos-project-brighton': {
    title: 'Avnos Project Brighton — DAC + woda',
    hook: 'Hybrydowa jednostka DAC w New Jersey weszła do służby w 2026: do 450 ton CO₂ rocznie i deklarowany produkt uboczny wody — demo, nie skala klimatyczna.',
    imageAlt:
      'Hala uzdatniania wody ze zbiornikami i rurami — klasa gospodarki wodnej obok hybrydowego DAC Avnos, nie zdjęcie prasowe Project Brighton',
    what: 'Hybrydowy bezpośredni wychwyt z powietrza (HDAC) Avnos ma ciągnąć CO₂ z powietrza i dawać czystą wodę bez zewnętrznego źródła ciepła. Project Brighton w Bridgewater w New Jersey to największa działająca jednostka firmy. 1 września 2026 Avnos podała, że Brighton wszedł do eksploatacji: do 450 ton atmosferycznego CO₂ rocznie i ok. 475 000 galonów czystej wody rocznie, z finansowaniem U.S. Office of Naval Research, by wspierać prace nad zrównoważonym paliwem lotniczym z CO₂ DAC. To liczby projektowe, nie rok zliczonych ton.',
    problem:
      'Zwykły DAC jest głodny ciepła, a czasem wody. Proces, który jeszcze robi wodę, miałby znaczenie na suchych placach — jeśli rachunek za energię i netto węgla się zgadzają.',
    how: 'Avnos opisuje standardowe moduły HDAC, które skraplają wilgoć, chwytając CO₂. Brighton stoi obok Technology Development Center firmy, by zebrać dane z terenu przed większymi modułami (następny nazwany krok to Project Cedar, nie ta karta).',
    players:
      'Avnos; U.S. Office of Naval Research (kontrakt N00014-23-C-1011 na spółce IWVC). Interes marynarki to surowiec do badań paliwowych, nie miejskie wodociągi.',
    risks:
      'Czterysta pięćdziesiąt ton to demonstracja. „Bez zewnętrznego ciepła” i tak potrzebuje prądu. Wyjście wody to liczba firmy. Nie traktuj płyty w Bridgewater jako krajowego klina usuwania.',
    sourcesNote:
      'Interesting Engineering o projekcie 450 t / 475 000 gal; nota Avnos z 1 września 2026. Moc projektowa to nie rok zliczonych ton.',
  },
  'yara-sluiskil-ccs': {
    title: 'Yara Sluiskil CCS',
    hook: 'Największa w Europie hala wychwytu przemysłowego, otwarta we wrześniu 2026: do 800 000 ton rocznie z amoniaku, statkiem do Norwegii — CCS ze źródła, nie usuwanie z powietrza.',
    imageAlt:
      'Kanał Gandawa–Terneuzen w Terneuzen, przemysłowy szlak wodny obok Yara Sluiskil — nie zdjęcie prasowe hali wychwytu z 2026 r.',
    what: 'Zakład amoniaku i nawozów Yary w Sluiskil w Holandii zainaugurował instalację wychwytu i skraplania 7 września 2026. Relacje z otwarcia mówią, że obiekt ma wychwytywać do 800 000 ton procesowego CO₂ rocznie z produkcji amoniaku i wysyłać je do Northern Lights do magazynu pod Morzem Północnym — największy komercyjny obiekt CCS w Europie i wczesny transgraniczny łańcuch wychwyt–transport–magazyn. Przez 15 lat projekt ma przenieść ok. 12 mln ton, jeśli będzie działał jak zaprojektowano. To CCS ze źródła: nie puszcza przemysłowego CO₂ w powietrze. Nie wyciąga CO₂ już wymieszanego w atmosferze i nie jest fabryką dobrowolnych kredytów usuwania. Sens pieniężny to unikanie uprawnień EU ETS.',
    problem:
      'Amoniak na nawozy nadal robi procesowy CO₂, którego samo prąd nie kasuje. Cement i spalarnie mają tę samą klasę resztkowych ton. Wychwyt ma sens tylko wtedy, gdy statek i magazyn też działają.',
    how: 'CO₂ jest wychwytywany z procesu amoniaku, sprężany i skraplany w Sluiskil, potem ładowany na statki Northern Lights (ok. 7200 ton każdy; do dwóch załadowanych statków tygodniowo we wcześniejszych schematach Yary) do Øygarden i zatłoczenia ok. 2600 metrów pod norweski szelf. Faza 1 Northern Lights to 1,5 mln ton magazynu rocznie.',
    players:
      'Yara International; Northern Lights (Equinor, Shell, TotalEnergies) i norweski Longship. Karta sąsiednia: transport i magazyn Northern Lights. Materiały Yary z 2026 r. dają inwestycję netto ok. 200 mln dolarów.',
    risks:
      'Stopień wychwytu, żegluga i magazyn muszą działać razem. Użycie CCS do rozciągania kopalnego amoniaku to realna debata. 800 000 ton to poważna inżynieria i wciąż mało obok przemysłu UE. Nie wpisuj tej tony jako kredytu DAC.',
    sourcesNote:
      'Nota CarbonCredits o inauguracji (wrz 2026): do 800 000 t/rok, otwarcie 7 września, statki Northern Lights. Moc projektowa to nie rok zmagazynowanych ton.',
  },
  'samsara-eco': {
    title: 'Samsara Eco — recykling enzymatyczny',
    hook: 'Pierwszy australijski zakład recyklingu enzymatycznego jest otwarty w Nowej Południowej Walii. Nieskończone pętle nadal potrzebują zbiórki, odbioru i drugiej, większej fabryki.',
    imageAlt: 'Bele zgniecionych butelek PET — poliestrowy wsad, który recyklerzy enzymatyczni chcą rozpiąć',
    what: 'Samsara Eco otworzyła pierwszy zakład recyklingu enzymatycznego w Jerrabomberra, Nowa Południowa Walia. Proces EosEco firmy używa zaprojektowanych enzymów, by rozłożyć tworzywa z powrotem do monomerów i zrobić z nich nylon 6,6 i poliester identyczne z pierwotnymi. PKN Packaging News pisze o czterech latach od stołu do tego pierwszego zakładu, planie komercyjnej fabryki nylonu 20 000 ton w Azji do 2028 r. i ponad 150 mln AUD zebranych. W 2024 r. firma zrobiła odzież z lululemon, którą nazywa pierwszym enzymatycznie przetworzonym wyrobem z nylonu 6,6. To inna spółka i szersze twierdzenie o wsadzie niż praca Carbios nad PET we Francji — nie drugie imię tego samego zakładu.',
    problem:
      'Na świecie recyklingowi podlega tylko ok. 10% tworzyw, a kolorowe, wielowarstwowe i mieszane opakowania to trudna reszta. Recykling mechaniczny traci jakość. Prawdziwa pętla monomeru pomogłaby — jeśli zbiórka i energia się zgadzają.',
    how: 'Enzymy depolimeryzują wybrane tworzywa w łagodnych warunkach. Firma mówi, że proces jest zbudowany pod trudne strumienie, w tym opakowania wielowarstwowe, i że wyrób wchodzi w istniejące łańcuchy polimerów. To chemia z katalizatorem białkowym, nie mikrob wypuszczony do oceanu.',
    players:
      'Samsara Eco (Australia; linia ANU, wśród wczesnych inwestorów Main Sequence i Woolworths); partnerzy marek, w tym lululemon; hub recyklingu Deakin University i The LYCRA Company przy R&D na miejscu. Zbiórka gminna zostaje drugą połową pętli.',
    risks:
      'Pierwszy zakład to nie rozwiązany kryzys odpadów. Mieszany plastik nadal taniej zakopać albo spalić. Azjatycki zakład 20 000 ton to plan na 2028. Nie myl otwarcia w Jerrabomberra z cyrkularnym opakowaniem w skali supermarketu.',
    sourcesNote:
      'PKN Packaging News o otwarciu w Jerrabomberra i planie 20 000 t w Azji. Pierwszy zakład to nie cyrkularność skali supermarketu.',
  },
  'quaise-mmwave-drilling': {
    title: 'Quaise — wiercenie falą milimetrową',
    hook: 'Girotron w środkowym Teksasie przewiercił w 2025 r. 100 metrów granitu — rekord polowy metody i wciąż daleko od elektrowni.',
    imageAlt:
      'Lądowa wiertnia na czerwonej ziemi — naziemny zestaw wokół głębokich otworów, nie zdjęcie teksańskiego girotronu Quaise',
    what: 'Quaise Energy próbuje dotrzeć do skały przegrzanej (ok. 400°C) energią fali milimetrowej z girotronu, odparowując granit bez świdra na dnie otworu. Energy Global pisało, że w 2025 r. firma przewierciła 100 metrów na poligonie w środkowym Teksasie — rekord wiercenia falą milimetrową. Przed 2025 system z linii MIT robił w laboratorium tylko otwory centymetrowe. Sto metrów to ułamek głębokości potrzebnej komercyjnej elektrowni przegrzanej. Quaise zapowiada mocniejszy girotron i szkicuje pilotaż na zachodzie USA najwcześniej w 2028 r.',
    problem:
      'Zwykłe świdry źle żyją w twardej, gorącej skale fundamentu. Jeśli nie da się jej tanio wiercić, geotermia przegrzana zostaje mapą niewykorzystanego ciepła.',
    how: 'Naziemny girotron puszcza fale milimetrowe w otwór; skała paruje. W opowieści Quaise na dnie nie ma sprzętu. Tempo, jakość otworu i sterowanie na kilometrach głębokości to nierozwiązana inżynieria.',
    players:
      'Quaise Energy; linia badań fal milimetrowych MIT. To nie EGS Fervo w stylu naftowym i nie zakład energetyczny.',
    risks:
      'Stumetrowy otwór w granicie to nie turbina. Koszt, niezawodność i poślizg 2028 to zwykłe ryzyka pierwszego w swoim rodzaju. Slajdy „geotermia wszędzie” czytaj jako cel badawczy.',
    sourcesNote:
      'Energy Global 24 lipca 2025: otwór polowy 100 m w Teksasie; w laboratorium były centymetry. Rekord metody to nie elektrownia.',
  },
  'cfs-sparc': {
    title: 'CFS SPARC — tokamak Q>1',
    hook: 'Kompaktowy tokamak w Massachusetts jest złożony w około 80%. Q>1 to cel na 2027 — kamień fizyki, nie elektrownia.',
    imageAlt:
      'Przekrój makiety tokamaka klasy ITER — rodzina maszyn, do której należy SPARC, nie zdjęcie hali w Devens',
    what: 'Commonwealth Fusion Systems składa SPARC, tokamak wysokiego pola w Devens w Massachusetts, by pokazać netto energię fuzyjną (Q>1: moc fuzji większa niż moc grzania plazmy). Sierpniowa nota CFS z 2026 r. pisała, że SPARC jest prawie w 80% gotowy, magnesy wchodzą, systemy pomocnicze już chodzą. Strona SPARC firmy nadal celuje w Q>1 w 2027 r. SPARC nie będzie sprzedawał prądu. Następna elektrownia ARC to projekt sieciowy; CFS mówiła recenzentom DOE o ok. 400 MW netto elektrycznych na początku lat 30. To cele firmy.',
    problem:
      'Fuzja obiecuje gęste, niskoemisyjne ciepło, jeśli zakład potrafi pracować, hodować tryt i żyć pod neutronami. Żaden prywatny ani publiczny tokamak nie wstawił jeszcze komercyjnej mocy do sieci.',
    how: 'Magnesy z nadprzewodników wysokotemperaturowych robią mniejszy tokamak niż ITER. Q>1 to wzmocnienie plazmy, nie sprawność gniazdkowa elektrowni: magnesy, krio i turbina są osobno. Mylenie SPARC z zakładem energetycznym to zwykły błąd.',
    players:
      'CFS; program DOE Milestone-Based Fusion Development; linia MIT. Karty sąsiednie: ITER (nauka publiczna) i NIF (zapłon inercyjny). Prywatna fuzja to nie ITER i nie działający zakład.',
    risks:
      'Harmonogram, tryt, materiały i koszt. Twierdzenie o 80% montażu to nie pierwsza plazma. Q>1 w 2027 to cel. Nawet sukces zostawi ARC do zbudowania.',
    sourcesNote:
      'Blog CFS o postępie SPARC (~80% złożone) i strona SPARC (cel Q>1 2027). Wzmocnienie plazmy to nie elektrownia.',
  },
  'form-energy-ireland': {
    title: 'Form Energy Irlandia — żelazo–powietrze',
    hook: 'Projekt 10 MW / 1 GWh w północno-zachodniej Irlandii, uzgodniony w 2026, celowany na 2029 — pierwszy plac Form ogłoszony poza Stanami Zjednoczonymi.',
    imageAlt:
      'Kontenerowe szafy baterii przy magazynie sieciowym — klasa placu magazynu długiego, nie zdjęcie płyty w Donegal',
    what: '17 marca 2026 Form Energy i FuturEnergy Ireland ogłosiły umowę na wdrożenie systemu żelazo–powietrze 10 MW / 1000 MWh (1 GWh) w północno-zachodniej Irlandii — pierwszy ogłoszony projekt międzynarodowy Form, spodziewany w sieci w 2029 r. Relacje nazywają teren Ballynahone Energy Storage w hrabstwie Donegal. Sto godzin przy 10 MW to arytmetyka 1 GWh. To zakontraktowana demonstracja, nie działająca irlandzka bateria.',
    problem:
      'Irlandzka sieć z dużą ilością wiatru zrzuca moc, gdy wyspa nie może jej wziąć albo wywieźć, a potem pali coś innego, gdy wiatr pada na dni. Magazyn wielodniowy to nazwana luka.',
    how: 'Ta sama chemia żelazo–powietrze co projekty Form w USA: odwracalne rdzewienie żelaza, pospolite materiały, duża powierzchnia. Przed jakimkolwiek elektronem stoją jeszcze planowanie i przyłącze.',
    players:
      'Form Energy; FuturEnergy Ireland. Karta sąsiednia: dużo większy amerykański wniosek Google–Xcel 300 MW / 30 GWh.',
    risks:
      'Odwołania planistyczne, przyłącze i to, czy 2029 się utrzyma. Dziesięć megawatów nie przepisze sieci wyspy. Nie licz umowy jako oddanych megawatogodzin.',
    sourcesNote:
      'Nota Form Energy z 17 marca 2026: 10 MW / 1 GWh, sieć spodziewana w 2029. Umowa to nie działająca bateria.',
  },
  'weathernext-3': {
    title: 'Google WeatherNext 3',
    hook: 'Globalny model pogody z września 2026, który łyka żywe satelity i odświeża się co godzinę — nadal nie twoja krajowa służba ostrzeżeń.',
    imageAlt: 'Pełny dysk Ziemi z GOES-17 — klasa obserwacji satelitarnych, na których WeatherNext 3 się uczy i pracuje',
    what: '3 września 2026 Google DeepMind i Google Research przedstawiły WeatherNext 3, swój najnowszy globalny model pogody SI. System bierze żywe mozaiki satelit geostacjonarnych i obserwacje stacji; Google pisze, że daje prognozy godzinowe ok. 5 km dla części pól przyziemnych (10 km dla innych przyziemnych, 25 km dla wielu atmosferycznych) — mniej więcej pięć razy ostrzej niż siatka WeatherNext 2 25 km / sześć godzin. Google wbudowuje go w Search, Gemini, Maps, Maps Platform, Earth Engine i Cloud. Niezależne żywe rankingi cytują Brightband. Oficjalne ostrzeżenia przed groźną pogodą nadal należą do krajowych służb meteorologicznych.',
    problem:
      'Szybka pogoda lokalna — pasma deszczu, kontrasty wybrzeża i gór, wiatr na wysokości turbiny — to, co czują farmy, sieci i ludzie. Starsze modele pogody SI trenowane tylko na opóźnionych analizach fizyki te szczegóły rozmazywały.',
    how: 'Transformator siatki Functional Generative Network bierze godzinowe mozaiki satelitarne plus analizę i daje pola, tory cyklonów i wartości na stacjach. Google publikuje też wiatr na 100 m i promieniowanie dla operatorów wiatru i słońca. Twierdzenia o sprawności opadów (CRPS wobec IMERG, MRMS i deszczomierzy) to liczby ewaluacji Google.',
    players:
      'Google DeepMind i Google Research. Karta sąsiednia: GraphCast (Science, 2023), wcześniejszy globalny model DeepMind. Krajowe służby zostają organami ostrzeżeń.',
    risks:
      'Nadmierne zaufanie, słabe ekstremum i pomijanie systemu obserwacji. Prognoza w Maps to nie ostrzeżenie przed cyklonem. Miejsce w rankingu to nie sprawność w twojej dolinie w zły dzień.',
    sourcesNote:
      'Wpis Google DeepMind o WeatherNext 3 (3 wrz 2026). Ostrzeżenia — krajowe służby meteorologiczne.',
  },
  'ecmwf-aifs': {
    title: 'ECMWF AIFS 1.1',
    hook: 'Operacyjna prognoza SI Europy, zaktualizowana w sierpniu 2025 o granice fizyki, by deszcz nie szedł na minus — obok modelu fizycznego, nie zamiast niego.',
    imageAlt:
      'Budynek Europejskiego Centrum Prognoz Średnioterminowych w Reading — dom AIFS, nie zrzut mapy prognozy',
    what: 'Artificial Intelligence Forecasting System (AIFS) ECMWF to wyuczona globalna prognoza, która chodzi w eksploatacji obok fizycznej IFS. AIFS Single 1.1.0 weszła do eksploatacji 27 sierpnia 2025. Artykuł z 2026 r. w Geoscientific Model Development opisuje warstwę ograniczającą, która pilnuje granic fizycznych (deszcz nieujemny, spójne chmury i opad) i podaje ok. 4–6% lepszą sprawność w górnej atmosferze i przy ziemi, z największym zyskiem na opadzie — do 12% i około dnia przewagi na mierze kategorycznej. ECMWF później zastąpił 1.1 przez AIFS v2 w maju 2026; ta karta trzyma linię 1.1, o którą prosił założyciel, z etykietą vintage. AIFS to oprogramowanie operacyjne, nie demo.',
    problem:
      'Modele fizyczne są dokładne i drogie. Szybki model wyuczony zapełnia lukę, jeśli zostaje fizycznie przytomny i jest oceniany wobec tych samych obserwacji.',
    how: 'Koder sieci grafowej, procesor transformer i dekoder, trenowane na ERA5 i analizach ECMWF, kroczą atmosferę skokami sześciogodzinnymi. Cztery przebiegi dziennie. Pola dziesięciodniowe w minuty na GPU to argument eksploatacyjny; esej VAST Data, który wskazał założyciel, to wtórne opowiedzenie tego przesunięcia. Zapis prawny i naukowy to artykuł GMD i historia wersji ECMWF.',
    players:
      'ECMWF; maszyny treningowe EuroHPC (Leonardo, MareNostrum 5). Karty sąsiednie: GraphCast i WeatherNext 3. Ensemble IFS nadal trzymają rozrzut i długie sprzężenie.',
    risks:
      'Modele wyuczone potrafią wymyślać grzeczne ekstremum albo łamać zachowanie bez więzów — dlatego 1.1 dodał granice. Nondeterminizm GPU znaczy, że oficjalnego przebiegu nie odtworzysz w domu bit w bit. Pogodowe SI nadal potrzebuje satelit.',
    sourcesNote:
      'Link założyciela: esej VAST Data o AIFS 1.1. Liczby sprawności za Moldovan et al., GMD, 2026. ECMWF zastąpił 1.1 przez v2 w maju 2026.',
  },
  'esa-biomass': {
    title: 'ESA Biomass',
    hook: 'Pierwszy radar pasma P w kosmosie, zbudowany do mapy biomasy lasu i węgla w drzewach — nie model pogody i nie inwentarz emisji.',
    imageAlt:
      'Wizja artystyczna satelity ESA Biomass nad koronami lasu — misja pasma P, która patrzy przez drzewa w drewnianą masę',
    what: 'Biomass to satelita ESA Earth Explorer. Niesie pierwszy kosmiczny radar z syntetyczną aperturą w paśmie P, zaprojektowany do pomiaru biomasy lasu i węgla w drewnie. To nie model prognozy pogody i nie inwentarz gazów cieplarnianych. Antena o średnicy 12 metrów leci na około 666 km. ESA wystrzeliła go 29 kwietnia 2025 z Kourou w Gujanie Francuskiej na Vega-C.',
    problem:
      'Ile węgla stoi w lasach tropikalnych i innych, z ziemi wciąż słabo zmapowano. Satelity optyczne widzą wierzch koron. Dłuższa fala radarowa może zajrzeć w objętość drzew — jeśli ten pas da się wznieść w kosmos.',
    how: 'Radar pasma P (długość fali około 70 cm) przenika koronę i wraca sygnałem związanym z biomasą drzewną. Produkt to mapa struktury lasu i węgla, nie smuga emisji i nie prognoza deszczu. Poletka naziemne wciąż kalibrują odtworzenie.',
    players:
      'ESA FutureEO / Earth Explorer. Dane otwarto w styczniu 2026 po rozruchu. Sąsiednie karty, które mierzą atmosferę albo emisje (Climate TRACE, pogodowe SI), to inna robota.',
    risks:
      'Pasmo P to ograniczony zasób radiowy; zakłócenia i kalibracja to zwykłe granice. Mapa biomasy nie jest kredytem węglowym i nie jest inwentarzem sądowym. Tropikalna chmura przeszkadza mniej niż optyce, ale odtworzenie i tak potrzebuje poletek.',
    sourcesNote:
      'Strona misji ESA Biomass (FutureEO): pierwszy SAR pasma P w kosmosie; start 29 kwietnia 2025, Kourou / Vega-C. Nie pogoda i nie inwentarz emisji.',
  },
};
