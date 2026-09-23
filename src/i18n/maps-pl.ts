import type { MapCopy } from '../data/maps';

export const pl: Record<string, MapCopy> = {
  'armed-conflict-events': {
    title: 'Zdarzenia przemocy politycznej',
    hook: 'Gdzie zarejestrowano starcia zbrojne i protesty — nie wyrok, kto ma rację.',
    description:
      'ACLED zbiera geolokalizowane doniesienia o bitwach, wybuchach, przemocy wobec cywilów, zamieszkach i protestach. Publiczny pulpit i Conflict Watchlist pokazują niedawne wzory. Ta karta jest wejściem do żywego zbioru, nie kopią każdego punktu.',
    howToRead:
      'Czytaj to jako mapę zgłoszonych zdarzeń. Gęste skupiska oznaczają więcej zarejestrowanych incydentów, nie automatycznie „najgorszy kraj” ani ranking moralny. Okres ma znaczenie: ostatni miesiąc to nie ostatnia dekada.',
    caveats:
      'Pokrycie zależy od lokalnych relacji, języka i dostępu. Niektóre wojny są niedoszacowane; niektóre protesty widać mocniej. ACLED nie rozstrzyga, która strona jest legalna. Pinezka to nie spis wszystkich zgonów.',
    licenseNote:
      'Dane ACLED można używać z przypisaniem według ich warunków; nie hostujemy ich bazy zdarzeń. Otwórz ich mapę. Nie zgrywaj i nie publikuj ich pełnego strumienia z tej strony.',
    imageAlt:
      'Ciemna mapa świata z czerwonymi i pomarańczowymi punktami w znanych regionach raportowania konfliktów, opisana jako przegląd Fix Planet',
  },
  'battle-related-deaths': {
    title: 'Zgony związane z walką',
    hook: 'Szacunki UCDP liczby ludzi zabitych w zorganizowanym konflikcie zbrojnym, do porównań w czasie.',
    description:
      'Uppsala Conflict Data Program rejestruje konflikty z udziałem państwa, bez państwa i przemoc jednostronną, potem szacuje zgony związane z walką. Our World in Data publikuje szeregi jako wykresy i mapy z dokumentacją.',
    howToRead:
      'Rok dla kraju to szacunek zgonów według definicji UCDP, nie „wszyscy poszkodowani przez wojnę”. Porównuj trendy, nie ranking jednego roku. Strona OWID o wojnie i pokoju jest czytelnym wejściem.',
    caveats:
      'Definicje pomijają wiele szkód cywilnych (przesiedlenia, głód, choroby). Wczesne lata i zamknięte środowiska są niepewne. Liczby się rewiduje. To nie mapa tego, kto wojnę zaczął.',
    licenseNote:
      'UCDP zezwala na użytek niekomercyjny z cytatem. Wykresy OWID zwykle są CC BY. Linkujemy zamiast przerysowywać ich choropleth.',
    imageAlt:
      'Mapa Our World in Data zgonów w konfliktach zbrojnych: blady ląd, Ukraina oraz kilka krajów Afryki i Azji na pomarańczowo i czerwono',
  },
  'global-peace-index': {
    title: 'Globalny indeks pokoju (GPI)',
    hook: 'Ranking pokojowości krajów od Institute for Economics & Peace — złożony wynik, nie pinezki zdarzeń ACLED i nie werdykt «kto ma rację».',
    description: 'GPI (IEP / Vision of Humanity) porównuje kraje złożonym indeksem pokoju.',
    whyOnShelf: 'Inny obiekt niż ACLED (zdarzenia) i UCDP (zgony bojowe).',
    howToRead: 'Kolor — pasmo rankingu, nie wyrok sądu. Otwierać mapę i raport GPI.',
    caveats: 'Złożony wynik, nie pinezki zdarzeń ACLED i nie werdykt «kto ma rację».',
    licenseNote: 'Podgląd — przegląd Fix Planet, nie oficjalna grafika wydawcy.',
    imageAlt:
      'Przegląd Fix Planet: zieleń — pasmo bardziej pokojowe, czerwień — mniej pokojowe, szara ziemia bez klasy. To nie grafika Vision of Humanity i nie wyniki GPI.',
  },
  'fragile-states-index': {
    title: 'Indeks państw kruchych (FSI)',
    hook: 'Oceny kruchości państw według nacisku i spójności — ryzyko kruchości, nie ofiary bojowe i nie ranking pokoju.',
    description: 'FSI (Fund for Peace) — porównawcza skala nacisku na państwo i spójności.',
    whyOnShelf: 'Nie mapa zdarzeń ACLED i nie GPI.',
    howToRead: 'Patrzeć methodology i global data.',
    caveats: 'Wysoki wynik ≠ wyrok i ≠ prognoza wojny na jutro.',
    licenseNote: 'Podgląd — przegląd Fix Planet, nie oficjalna grafika wydawcy.',
    imageAlt:
      'Przegląd Fix Planet: ciemniej — wyższa kruchość na tym schemacie, jaśniej — niższa, średni ton bez klasy. To nie mapa Fund for Peace i nie wyniki FSI.',
  },
  'military-expenditure-sipri': {
    title: 'Wydatki wojskowe (SIPRI)',
    hook: 'Porównywalne serie wydatków wojskowych krajów od SIPRI — budżety i obciążenie, nie pinezki zdarzeń i nie katalog uzbrojenia.',
    description: 'Milex (SIPRI) — wydatki, nie «kto zaczął wojnę» i nie liczba ofiar UCDP.',
    whyOnShelf: 'Nie mylić z bazą transferów broni SIPRI.',
    howToRead:
      'Interaktywny milex.sipri.org w sprawdzeniu nie odpowiedział — opierać się na sipri.org/databases/milex i fact sheet.',
    caveats: 'Wysokie wydatki ≠ agresor.',
    licenseNote: 'Podgląd — przegląd Fix Planet, nie oficjalna grafika wydawcy.',
    imageAlt:
      'Przegląd Fix Planet: ciemniejszy błękit — wyższy poziom wydatków wojskowych, jaśniejszy ląd bez klasy. To nie okładka rocznika SIPRI i nie liczby Milex.',
  },
  'conflict-barometer-hiik': {
    title: 'Barometr konfliktów (HIIK)',
    hook: 'Roczna intensywność konfliktów według krajów i regionów od HIIK — klasy intensywności, nie pinezki zdarzeń i nie sumy ofiar.',
    description: 'Conflict Barometer (HIIK) koduje intensywność konfliktów politycznych za rok.',
    whyOnShelf: 'Inny obiekt niż ACLED i UCDP.',
    howToRead: 'Otwierać aktualny PDF i mapy HIIK.',
    caveats:
      'Klasa intensywności ≠ rezolucja ONZ. Zamiana na mapę misji pokojowych ONZ niepotrzebna — HIIK odpowiada 200.',
    licenseNote: 'Podgląd — przegląd Fix Planet, nie oficjalna grafika wydawcy.',
    imageAlt:
      'Przegląd Fix Planet: głęboka czerwień — orientacja natężenia wojny, pomarańcz — inna przemoc, szara ziemia bez klasy. To nie okładka HIIK i nie pinezki ACLED.',
  },
  'language-families': {
    title: 'Rodziny językowe świata',
    hook: 'Lingwistyczna mapa spokrewnionych języków — przybliżenie geografii etnolingwistycznej, nie spis ludów.',
    description:
      'Glottolog Instytutu Maxa Plancka klasyfikuje języki świata i pokazuje je na mapie. WALS to pokrewny naukowy atlas cech strukturalnych. Oba dotyczą języków, nie politycznej etniczności.',
    howToRead:
      'Kolory i punkty oznaczają rodziny lub języki, zwykle w punkcie odniesienia. Duża plama jednego koloru nie znaczy jednej „grupy etnicznej”, jednej opinii ani jednego państwa. Wielu ludzi jest wielojęzycznych; wiele tożsamości nie jest językowych.',
    caveats:
      'Mapy etnolingwistyczne są sporne. Granice kolonialne, przymusowa asymilacja i samoidentyfikacja przecinają drzewa języków. To szkic naukowy wspólnot mowy, nigdy twierdzenie o krwi, lojalności czy terytorium.',
    licenseNote:
      'Treści Glottolog zwykle są CC BY. Interaktywna mapa jest ich — otwórz ją. Komercyjnego atlasu Ethnologue nie hostujemy.',
    imageAlt:
      'Kolorowa mapa świata rodzin językowych: turkusowy indoeuropejski, pomarańczowy afroazjatycki, zielony nigero-kongijski, magenta chińsko-tybetański, bordowy austronezyjski',
  },
  'world-religions': {
    title: 'Skład religijny według krajów',
    hook: 'Szacunki Pew, jak ludzie określają swoją religię — przynależność, nie pobożność i nie mapa „cywilizacji”.',
    description:
      'Pew Research Center publikuje szacunki składu religijnego krajów (chrześcijanie, muzułmanie, hinduiści, buddyści, żydzi, religie ludowe, osoby bez afiliacji i inni), w tym opracowanie 2010–2050. To szacunki identyfikacji z ankiet i spisów.',
    howToRead:
      'Etykieta większości w kraju to szacunek statystyczny. Mniejszości i tak tam mieszkają. „Bez afiliacji” to nie jedna kultura. Granice państw słabo trzymają wiarę. Korzystaj z tabel Pew, nie z hasła.',
    caveats:
      'Mapy religii są politycznie wrażliwe. Państwa czasem karzą albo zawyżają przynależność. Ankiety gospodarstw pomijają ukrytą praktykę. Nie czytaj tego jako rankingu cnoty ani prognozy konfliktu. Kartografii Pew nie hostujemy.',
    licenseNote:
      'Pew zezwala cytować ustalenia z linkiem. Ich mapy i grafiki zostają ich. Otwórz źródłowe opracowanie zamiast kopiować szatę.',
    imageAlt:
      'Kolorowa mapa regionów większości religijnej: fiolet chrześcijański, zieleń islamu, pomarańcz hinduizmu, żółć buddyzmu, szarość niezwiązanych',
  },
  'homicide-rates': {
    title: 'Wskaźniki umyślnych zabójstw',
    hook: 'Porównywalne wskaźniki UNODC umyślnych zabójstw — jedna miara przemocy, nie „cała przestępczość”.',
    description:
      'Biuro NZ ds. Narkotyków i Przestępczości zbiera statystyki umyślnych zabójstw ze źródeł wymiaru sprawiedliwości i zdrowia publicznego. Our World in Data robi z porównywalnego szeregu mapę i wykres. Zabójstwo jest spójniej definiowane niż rozbój czy „przestępczość” w ogóle.',
    howToRead:
      'Zwykła jednostka to umyślne zabójstwa na 100 000 osób rocznie. Wysokie wskaźniki często skupiają się w miastach lub korytarzach, nie równomiernie w kraju. Porównuj zbliżone lata; ewidencja się zmienia.',
    caveats:
      'Niedorejestrowanie, definicje prawne i braki lat różnią się. Zgony w konflikcie to inny szereg (zob. UCDP). Nie układaj listy „najgroźniejszych krajów” z miniaturki. Nie rysujemy tu nieźródłowego choroplethu.',
    licenseNote:
      'Produkty statystyczne UNODC zwykle można używać z przypisaniem. Wykresy OWID zwykle są CC BY. Otwórz ich mapę, żeby zobaczyć aktualną warstwę.',
    imageAlt:
      'Choropleth Our World in Data wskaźników zabójstw: żółto-pomarańczowy ląd, ciemniejsza czerwień w części Ameryki Łacińskiej i południowej Afryki',
  },
  'organized-crime-index': {
    title: 'Globalny indeks przestępczości zorganizowanej',
    hook: 'Oceny krajów dla rynków przestępczych, aktorów i odporności — ekspercka mapa cieplna przestępczości zorganizowanej, nie druga warstwa umyślnych zabójstw.',
    description:
      'Global Initiative against Transnational Organized Crime (GI-TOC) ocenia 193 państwa członkowskie ONZ pod względem przestępczości — rynków i aktorów — oraz odporności. Publiczne narzędzie to ocindex.net. Edycja 2025 jest trzecia; rok oceny to 2024. Ta karta prowadzi do tego eksperckiego kompozytu, nie do policyjnego wskaźnika i nie do drugiej mapy zabójstw UNODC.',
    whyOnShelf:
      'Przestępczość zorganizowana i odporność to inny obiekt niż wskaźniki umyślnych zabójstw. Nie włączajcie tego indeksu do karty zabójstw i nie czytajcie ciemnego kraju jako wysokiego wskaźnika zabójstw.',
    howToRead:
      'Wynik kraju to kompozyt ekspercki, nie wskaźnik policyjny i nie liczba zabójstw UNODC. Rynki, aktorzy i odporność to osobne filary. Aktualną warstwę otwórzcie na oficjalnej mapie cieplnej ocindex.net.',
    caveats:
      'To ocena ekspercka, nie spis przestępstw. Definicje i gęstość dowodów się różnią. Wysoki wynik rynku to nie wysoki wskaźnik zabójstw.',
    licenseNote:
      'Zdjęcie: Philippe Alès, kontenerowiec w Hawrze (CC BY-SA 3.0). To nie mapa cieplna indeksu GI-TOC — ta warstwa jest na ocindex.net.',
    imageAlt:
      'Kontenerowiec i suwnice w Hawrze. To zdjęcie, nie mapa cieplna Globalnego indeksu przestępczości zorganizowanej GI-TOC.',
  },
  'corruption-perceptions-index': {
    title: 'Indeks percepcji korupcji',
    hook: 'Postrzegana korupcja w sektorze publicznym (0–100) z ankiet ekspertów i biznesu — ryzyko rządzenia, nie wolumen przestępczości ulicznej i nie zabójstwa.',
    description:
      'Indeks percepcji korupcji (CPI) 2025 Transparency International porządkuje kraje według postrzeganej korupcji w sektorze publicznym. Skala od 0 (wysoce skorumpowany) do 100 (bardzo czysty) łączy ankiety ekspertów i biznesu. Our World in Data publikuje szereg jako otwartą mapę. To kompozyt ryzyka rządzenia, nie liczba spraw o łapówki i nie wskaźnik przemocy.',
    whyOnShelf:
      'Postrzegana korupcja w sektorze publicznym to inny sygnał szkody publicznej niż umyślne zabójstwa UNODC. Nigdy nie łączcie tej karty z warstwą zabójstw.',
    howToRead:
      'Wynik to kompozyt percepcji, nie liczba wyroków i nie przestępczość uliczna. Etykieta roku to rok edycji CPI (tu 2025), niekoniecznie rok kalendarzowy każdej ankiety. Wyżej znaczy czyściej. Porównujcie bliskie edycje; zmiana o jeden–dwa punkty bywa szumem. Oficjalne wyniki są na stronie Transparency International; interaktywna mapa u OWID.',
    caveats:
      'Brak kraju nie znaczy „czysty”. Doświadczenie łapówek w gospodarstwach to inny szereg. Nie czytajcie miniatury jako listy „najbardziej skorumpowanych”. To nie choropleth zabójstw.',
    licenseNote:
      'Hostujemy przycięty choropleth krajowy CPI 2025 z Wikimedia Commons (Cnscrptr i ConnerMiner, CC BY-SA 4.0) na podstawie danych Transparency International CPI 2025. Our World in Data publikuje CPI jako otwartą mapę (CC BY). Edycja jest na transparency.org/en/cpi/2025.',
    imageAlt:
      'Choropleth świata według Indeksu percepcji korupcji 2025: chłodniejsza zieleń tam, gdzie postrzegana korupcja jest niższa, cieplejsza czerwień tam, gdzie wyższa — nie mapa zabójstw',
  },
  'trafficking-in-persons': {
    title: 'Handel ludźmi',
    hook: 'Wykryte ofiary handlu ludźmi i wzory z Globalnego raportu UNODC (GLOTIP) — wyzysk i przymus, nie wskaźnik zabójstw i nie sam kompozyt rynków GI-TOC.',
    description:
      'Globalny raport UNODC o handlu ludźmi (GLOTIP) 2024 to ósma edycja na podstawie Protokołu o handlu ludźmi do Konwencji ONZ przeciwko transnarodowej przestępczości zorganizowanej i Globalnego planu działania z 2010 r. Podaje wykryte ofiary, formy wyzysku i wzory. Ta karta prowadzi do tej sprawozdawczości o wykryciu, nie do pełnego spisu handlu ludźmi.',
    whyOnShelf:
      'Handel ludźmi to odrębna rodzina czynów ICCS. Uzupełnia wynik rynku handlu ludźmi w indeksie GI-TOC statystyką UNODC o wykrytych ofiarach. To nie wskaźnik zabójstw i nie mapa przepływów World Drug Report.',
    howToRead:
      'Liczby to wykryte ofiary — pokrycie zależy od policji, definicji i dostępu. Niski wynik może znaczyć mniej wykryć, nie mniej ofiar. Formy wyzysku (seksualny, praca przymusowa i inne) to nie wskaźnik zabójstw. Tabele są w GLOTIP i na portalu danych UNODC.',
    caveats:
      'Wykrycie to nie spis. Przepływy transgraniczne w raporcie to wykryte wzory, nie pełny inwentarz szlaków.',
    licenseNote:
      'Zdjęcie: Vladimir Platonow / Agência Brasil (CC BY 3.0 BR). Chrystus Odkupiciel podświetlony na niebiesko przeciw handlowi ludźmi, 28 lipca 2014. To nie figura raportu GLOTIP UNODC.',
    imageAlt:
      'Chrystus Odkupiciel w Rio de Janeiro podświetlony na niebiesko przeciw handlowi ludźmi. To zdjęcie, nie figura raportu GLOTIP UNODC.',
  },
  'air-quality-pm25': {
    title: 'Zanieczyszczenie pyłem PM2.5',
    hook: 'Drobne cząstki na zewnątrz, które szkodzą płucom i sercu — z satelitów, modeli i stacji, nie „na węch”.',
    description:
      'WHO publikuje wytyczne jakości powietrza i bazę narażenia. Our World in Data mapuje PM2.5 ważone ludnością. Instrumenty NASA (MODIS, VIIRS i pokrewne) obserwują aerozole, z których składa się te szacunki. Karta prowadzi do tych publicznych warstw.',
    howToRead:
      'Ciemniejsze lub wyższe wartości zwykle oznaczają wyższe średnioroczne PM2.5. Miasta mogą być znacznie gorsze niż średnia kraju. Dym w pomieszczeniach i ozon to osobne problemy. Wytyczna WHO (5 µg/m³ rocznie) to punkt odniesienia zdrowotny, nie wszędzie limit prawny.',
    caveats:
      'Mieszanki satelita–model wygładzają lokalne szczyty. Stacje naziemne są nierówne. Burze pyłowe i sezony pożarów dają krótkie skoki. Nie wymyślamy tu rankingu krajów.',
    licenseNote:
      'Obrazy NASA są w domenie publicznej. Materiały WHO i OWID można cytować; OWID zwykle CC BY. Interaktywną warstwę otwórz na mapie OWID o zanieczyszczeniu powietrza.',
    imageAlt:
      'Choropleth Our World in Data PM2.5: blade kraje i ciemnobrązowy pas przez Afrykę Północną, Bliski Wschód oraz Azję Południową i Wschodnią',
  },
  'co2-emissions': {
    title: 'Terytorialne emisje CO₂',
    hook: 'Dwutlenek węgla z paliw kopalnych i przemysłu według kraju produkcji — szereg Global Carbon Project.',
    description:
      'Global Carbon Project szacuje terytorialne CO₂ z węgla, ropy, gazu i cementu. Our World in Data mapuje sumy i stawki na osobę, a także omawia rachunki konsumpcyjne (skorygowane o handel).',
    howToRead:
      'Duży kraj przemysłowy zdominuje mapę „łącznych emisji”. Widok na osobę i konsumpcyjny zmienia obraz. Paliwa bunkrowe i zmiana użytkowania ziemi często są osobnymi pozycjami.',
    caveats:
      'Inwentarze terytorialne nie widzą emisji wbudowanych w import. Skoki rok do roku mogą być metodyką albo recesją, nie cnotą. To nie mapa miejskiego smogu.',
    licenseNote:
      'Dane GCP publikuje się do ponownego użytku z cytatem. Wykresy OWID zwykle są CC BY. Linkujemy do ich mapy emisji zamiast ją przerysowywać.',
    imageAlt:
      'Choropleth Our World in Data terytorialnego CO₂: Chiny i Stany Zjednoczone najciemniejszą czerwienią, inne duże gospodarki średnią',
  },
  'consumption-co2-emissions': {
    title: 'Emisje CO₂ według konsumpcji',
    cardMeta: 'Global Carbon Project · OWID · z korektą handlu',
    hook: 'Dwutlenek węgla przypisany do kraju konsumpcji dóbr i usług — inwentarz terytorialny skorygowany o handel, nie druga mapa produkcji.',
    description:
      'Emisje konsumpcyjne (trade-adjusted) CO₂ od GCP / OWID. Inny obiekt niż żywa mapa emisji terytorialnych.',
    whyOnShelf: 'Inny obiekt niż żywa mapa emisji terytorialnych. Nie druga mapa produkcji.',
    howToRead:
      'Wysoki wynik ≠ werdykt moralny i ≠ PM2.5. Otwierać mapę OWID; podgląd — przegląd Fix Planet.',
    caveats: 'Wysoki wynik ≠ werdykt moralny i ≠ PM2.5. To nie mapa produkcji i nie mapa PM2.5.',
    licenseNote:
      'Podgląd to przegląd Fix Planet, nie oficjalna grafika OWID. Atrybucja: Global Carbon Project / Our World in Data (CC BY). Otwierać mapę OWID.',
    imageAlt:
      'Przegląd Fix Planet: choropleth emisji CO₂ według konsumpcji, nie mapa terytorialna i nie eksport OWID',
  },
  'nitrogen-dioxide-no2': {
    title: 'Dwutlenek azotu (NO₂)',
    cardMeta: 'Copernicus Sentinel-5P · TROPOMI · S5P-PAL',
    hook: 'Satelitarna kolumna dwutlenku azotu nad miastami, przemysłem i żeglugą — zanieczyszczenie ze spalania, nie to samo co masa PM2.5.',
    description:
      'NO₂ z TROPOMI / Sentinel-5P na portalu S5P-PAL (średnia ruchoma). Inny obiekt niż żywa mapa PM2.5.',
    whyOnShelf: 'Inny obiekt niż żywa mapa PM2.5. Zanieczyszczenie ze spalania, nie masa cząstek.',
    howToRead:
      'Chmury zasłaniają powierzchnię; jasna kolumna ≠ roczny limit. Otwierać tropospheric NO₂; podgląd — przegląd Fix Planet.',
    caveats: 'Chmury zasłaniają powierzchnię. Jasna kolumna ≠ roczny limit. To nie mapa PM2.5.',
    licenseNote:
      'Podgląd to przegląd Fix Planet, nie kadr marketingowy ESA ani S5P-PAL. Atrybucja: Copernicus Sentinel-5P / TROPOMI.',
    imageAlt:
      'Przegląd Fix Planet: bursztynowe kolumny dwutlenku azotu nad miastami, przemysłem i żeglugą — nie choropleth PM2.5 i nie kadr ESA',
  },
  'mismanaged-plastic-waste': {
    title: 'Niekontrolowane odpady plastikowe',
    cardMeta: 'OWID · Meijer et al. 2021',
    hook: 'Plastik niepoddany recyklingowi, spaleniu ani szczelnemu składowaniu — ryzyko wycieku do rzek i wybrzeży, nie zdjęcie śmieci na plaży.',
    description:
      'Mismanaged plastic waste według OWID (Meijer et al. 2021, tekst na PMC). Inny obiekt niż CO₂ i PM2.5.',
    whyOnShelf: 'Inny obiekt niż CO₂ i PM2.5. To odpady, nie emisje i nie masa cząstek.',
    howToRead:
      'Duża masa często idzie za ludnością i słabą infrastrukturą, nie za «charakterem kraju». Otwierać mapę OWID; podgląd — przegląd Fix Planet.',
    caveats:
      'Duża masa często idzie za ludnością i słabą infrastrukturą, nie za «charakterem kraju». Nie zdjęcie śmieci na plaży.',
    licenseNote:
      'Podgląd to przegląd Fix Planet, nie zdjęcie plastiku w oceanie i nie oficjalny kadr OWID. Atrybucja: Our World in Data (CC BY) według Meijer et al. 2021; tekst artykułu jest na PMC.',
    imageAlt:
      'Przegląd Fix Planet: choropleth niekontrolowanych odpadów plastikowych, nie zdjęcie plaży i nie eksport OWID',
  },
  'methane-emissions': {
    title: 'Emisje metanu (CH₄)',
    cardMeta: 'EDGAR JRC · OWID · CH₄',
    hook: 'Krajowe i siatkowe mapy metanu z paliw kopalnych, rolnictwa i odpadów — inny gaz cieplarniany niż żywe mapy CO₂.',
    description: 'CH₄ według EDGAR / OWID (+ IMEO dla zmierzonych pióropuszy). Nie CO₂ i nie PM2.5.',
    whyOnShelf:
      'Nie CO₂ i nie PM2.5. Inny gaz cieplarniany niż mapy dwutlenku węgla. To nie karta Climate TRACE z półki Innovations.',
    howToRead:
      'Inwentarz ≠ pinezka satelitarna. Otwierać mapę OWID i EDGAR_2025_GHG; podgląd — przegląd Fix Planet.',
    caveats: 'Inwentarz ≠ pinezka satelitarna. Nie terytorialne i nie konsumpcyjne CO₂.',
    licenseNote:
      'Podgląd to przegląd Fix Planet, nie zdjęcie flary i nie oficjalny kadr EDGAR ani OWID. Atrybucja: EDGAR (JRC) / Our World in Data. IMEO Eye on Methane to zmierzone pióropusze, nie zamiennik inwentarza.',
    imageAlt: 'Przegląd Fix Planet: choropleth emisji metanu, nie mapa CO₂ i nie zdjęcie flary',
  },
  'oil-gas-reserves': {
    title: 'Ropa i gaz na świecie',
    hook: 'Amerykański rządowy obraz ropy i gazu — złoża, rezerwy i przepływy, nie ekran giełdowy.',
    description:
      'Amerykańska Energy Information Administration publikuje międzynarodowe statystyki, analizy krajów i mapy ropy i gazu. Oceny naftowe USGS szacują nieodkryte zasoby technicznie wydobywalne. To nie jest terminal transakcyjny.',
    howToRead:
      'Rezerwy to ilości uznane za ekonomiczne przy dzisiejszych cenach i technice; zasoby są szersze i mniej pewne. Pokolorowany basen to nie zgoda na wiertnię. Rurociągi i LNG zmieniają, czyj gaz kto spala.',
    caveats:
      'Krajowe raporty rezerw bywają polityczne. Liczby EIA i tak należą do najczytelniejszych publicznych szeregów. Nie wypisujemy tu baryłek pole po polu.',
    licenseNote:
      'Prace EIA i USGS rządu USA są zwykle w domenie publicznej. Aktualne mapy i tabele są na międzynarodowych stronach EIA.',
    imageAlt:
      'Mapa EIA ocenionych basenów gazu łupkowego: białe i szare kraje z bordowymi i żółtymi wielokątami basenów',
  },
  'mineral-resources': {
    title: 'Złoża i surowce mineralne',
    hook: 'Mapy USGS znanych metali i minerałów przemysłowych, w tym złota — nie mapa skarbów.',
    description:
      'Program zasobów mineralnych USGS i MRDATA zbierają złoża, przejawy i roczne zestawienia (złoto, miedź, żelazo, lit i inne). Mineral Commodity Summaries to publiczny roczny rejestr produkcji i rezerw.',
    howToRead:
      'Punkt to znane złoże albo okręg, nie kopalnia do zwiedzania. „Rezerwa” to wielkość ekonomiczna; „zasób” — geologiczna. Złoto często leży z innymi metalami. Miejsca rzemieślnicze mogą zniknąć z warstwy.',
    caveats:
      'Kompletność różni się krajem i tajemnicą. Puste miejsce może znaczyć brak zdjęcia, nie brak skały. Szkody wydobycia nie siedzą w warstwie geologii.',
    licenseNote:
      'Informacje USGS są zwykle w domenie publicznej. Otwórz MRDATA i podsumowania zamiast kopiować płatne atlasy branżowe.',
    imageAlt:
      'Beżowa mapa świata z kolorowymi punktami znanych okręgów mineralnych: złoto, miedź, żelazo, lit i ziemie rzadkie',
  },
  'world-countries': {
    title: 'Państwa i granice świata',
    hook: 'Publicznie dostępna podstawa polityczna: kto administruje którym wielokątem, ze zwykłymi zastrzeżeniami o spornych granicach.',
    description:
      'Natural Earth publikuje wektory kulturowe i fizyczne w kilku skalach, w tym kraje admin-0. Kartografowie biorą je dla jasnej licencji i generalizacji pod małoskalowe mapy świata.',
    howToRead:
      'To kontur referencyjny, nie sąd. Sporne obszary narysowano jednym sposobem, żeby mapę w ogóle dało się narysować. Przy roszczeniu prawnym czytaj traktat albo wyrok, nie shapefile 1:110 mln.',
    caveats:
      'Granice się przesuwają, nazwy zmieniają, niektóre linie są gwałtownie sporne. Natural Earth dokumentuje wybory spornych granic. Pusta mapa polityczna i tak jest aktem politycznym.',
    licenseNote:
      'Natural Earth jest w domenie publicznej. SVG podglądu to publicznie dostępna BlankMap-World z Wikimedia, podobny małoskalowy kontur państw.',
    imageAlt: 'Konturowa mapa państw świata w domenie publicznej, kremowy ląd na błękicie, bez etykiet',
  },
  'forest-cover-loss': {
    title: 'Utrata pokrywy drzewnej',
    hook: 'Hansen / Global Forest Watch: gdzie zniknęła korona drzew — karczunek, pożar i pozyskanie, nie tylko „wylesienie puszczy”.',
    description:
      'Hansen i zespół z University of Maryland mapują roczną utratę pokrywy drzewnej z Landsata. Global Forest Watch (WRI) serwuje warstwę. Obserwacje NASA stoją za tymi samymi satelitami. Utrata to zmiana korony, nie automatycznie zamiana lasu pierwotnego.',
    howToRead:
      'Różowe albo czerwone piksele to korona zniknięta w danym roku. Plantacje, pożar i wiatrołom też liczą się jako utrata. „Przyrost” jest wolniejszy i łatwiej go przeoczyć. Zbliżaj; suma kraju chowa frontier.',
    caveats:
      'Pokrywa drzewna ≠ las pierwotny. Część utraty to legalny wyrąb. Część „nienaruszonego” lasu jest już zdegradowana. GFW dokumentuje definicje. Hostujemy fizyczny podgląd Ziemi, nie przekolorowany zestaw kafelków Hansena.',
    licenseNote:
      'Dane Hansen / GFW zwykle są dostępne na CC BY 4.0 z cytatem. Interaktywną warstwę utraty otwórz na mapie GFW.',
    imageAlt:
      'Ciemnozielona mapa świata z magenta plamami znanych frontów utraty pokrywy drzewnej w Amazonii, Kongu, Azji Południowo-Wschodniej i pasach borealnych',
  },
  'protected-areas': {
    title: 'Obszary chronione',
    hook: 'WDPA / Protected Planet: parki, rezerwaty i inne wielokąty — pokrycie na papierze, nie zawsze ochrona w terenie.',
    description:
      'World Database on Protected Areas, prowadzona przez UNEP-WCMC i IUCN i pokazywana na Protected Planet, to globalny spis lądowych i morskich obszarów chronionych. To standardowa warstwa, na którą powołują się rządy i badacze.',
    howToRead:
      'Zielony wielokąt to zgłoszona ranga (kategorie IUCN I–VI i inne środki). Nakładki, papierowe parki i brakujące terytoria rdzenne są częste. Powierzchnia ochrony to nie to samo co nienaruszony habitat.',
    caveats:
      'Sprawozdawczość się spóźnia. Jedne kraje wpisują prawie wszystko, inne mało. Polowania, drogi i kopalnie bywają wewnątrz linii. Warstwy uzupełniające (OECM, ziemie rdzenne) są niekompletne.',
    licenseNote:
      'WDPA ma własne warunki: można oglądać i cytować; pełna redystrybucja bazy jest ograniczona. Linkujemy do Protected Planet zamiast wysyłać ich wielokąty.',
    imageAlt:
      'Zielony choropleth Our World in Data udziału lądu każdego kraju zgłoszonego jako chroniony',
  },
  'water-stress': {
    title: 'Stres wodny',
    hook: 'WRI Aqueduct: gdzie popyt na wodę jest wysoki względem dostępnego odpływu — model, nie dziennik studni.',
    description:
      'Atlas ryzyka wodnego Aqueduct World Resources Institute modeluje bazowy stres wodny i pokrewne ryzyka (wyczerpanie, powódź, susza) w skali zlewni. Wersja 4 (2023) to aktualny publiczny atlas.',
    howToRead:
      'Wysoki stres znaczy, że pobory są duże wobec odnawialnego odpływu. Miasta mogą dowozić wodę; pola i tak wysychają. Scenariusze klimatyczne na atlasie to projekcje, nie prognoza pogody.',
    caveats:
      'Modele wygładzają lokalne prawa, nielegalne studnie i sezony. Polityczna kontrola rzek nie sprowadza się do hydrologii. Czerwona zlewnia to nie proroctwo wojny.',
    licenseNote:
      'Dane Aqueduct zwykle są CC BY z przypisaniem WRI. Interaktywne zlewnie są w Water Risk Atlas.',
    imageAlt:
      'Mapa świata od turkusowych regionów zasobnych w wodę do czerwonych suchych pasów Afryki Północnej, Bliskiego Wschodu i innych suchych ziem',
  },
  'population-density': {
    title: 'Gęstość zaludnienia',
    hook: 'Gdzie ludzie mieszkają, na siatce: NASA SEDAC GPW i WorldPop — modele dopasowane do spisów, nie liczenie każdej ulicy.',
    description:
      'Gridded Population of the World (SEDAC / CIESIN) i WorldPop rozkładają liczby ze spisów na siatkę ze zmiennymi satelitarnymi. Prognozy ludności ONZ dają krajowe sumy, do których siatki często się wyrównuje. Światła nocne (zob. Ziemia w nocy) to jasność, nie spis.',
    howToRead:
      'Jasne albo ciemne komórki to szacunek ludzi na kilometr kwadratowy. Wiejska rzadkość może ukrywać duże liczby bezwzględne. Centra miast zapychają każdą skalę barw.',
    caveats:
      'Spisy są nierówne i bywają stare. Strefy konfliktu i osiedla nieformalne trudno policzyć. Siatka to szacunek. Podgląd to nocne światła NASA: elektryfikowane osadnictwo, nie sama ludność.',
    licenseNote:
      'SEDAC GPW ma warunki użytku akademickiego; WorldPop zwykle CC BY. Obrazy nocnych świateł NASA są w domenie publicznej. Siatkę ludności otwórz w przeglądarce SEDAC.',
    imageAlt:
      'Brązowy choropleth gęstości zaludnienia według krajów i wybranych regionów, najciemniejszy w Azji Południowej i Wschodniej oraz części Europy',
  },
  'earth-at-night': {
    title: 'Ziemia w nocy',
    hook: 'NASA Black Marble: światła miast i flary z orbity — obraz elektryfikowanego osadnictwa.',
    description:
      'Płaska mapa świateł nocnych VIIRS z 2012 składa bezchmurne obserwacje Suomi NPP. Późniejsze produkty Black Marble ten widok doprecyzowują. Światła znaczą miasta, drogi i część flar przemysłowych; ciemny ląd i tak może być gęsto zaludniony.',
    howToRead:
      'Biel to światło w górę. Oceany zostają czarne. Porównaj z kartą gęstości: jasność idzie za prądem i zamożnością nie mniej niż za liczbą głów. Wiejska Afryka i część Azji Południowej są ciemniejsze niż ich ludność.',
    caveats:
      'Latarnie LED, algorytmy światła księżyca i flary gazowe zmieniają obraz. Ciemny piksel to nie „pustka”. Mozaika z 2012 to rocznik, nie dzisiejsza Ziemia.',
    licenseNote:
      'Obrazy NASA Earth Observatory są w domenie publicznej. Hostujemy JPEG płaskiej mapy z 2012. Późniejsze roczne Black Marble są na NASA Visible Earth.',
    imageAlt:
      'Mapa nocnych świateł NASA z 2012: światła miast na ciemnym lądzie i czarnych oceanach, bez granic i etykiet',
  },
  'global-river-basins': {
    title: 'Globalne zlewnie rzeczne',
    hook: 'Zagnieżdżone poligony subzlewni dla całej planety (poziomy Pfafstettera) — hydrograficzna mapa bazowa, nie indeks presji.',
    description:
      'HydroBASINS z HydroSHEDS to globalny zestaw hierarchicznie zagnieżdżonych zlewni wyciągnięty z hydrografii wysokościowej HydroSHEDS w 15 sekundach łuku. Dwanaście poziomów Pfafstettera idzie od zlewni kontynentalnych do małych subzlewni (około miliona poligonów na najdrobniejszym podziale). To warstwa „kto dokąd spływa”, nie model popytu i podaży. WRI Aqueduct (karta Presja na wodę) to atlas ryzyka. Hub HydroSHEDS jest na hydrosheds.org.',
    howToRead:
      'Kolorowy poligon to jednostka odpływu, nie kraj i nie wynik suszy. Zagnieżdżone poziomy pozwalają przybliżać. Zlewnie endoreiczne nie dochodzą do oceanu. Poligony do pobrania są na HydroBASINS. Podgląd to wybór zlewni świata z Commons, nie shapefile HydroBASINS.',
    caveats:
      'Działy wodne z DEM mogą ominąć kras, kanały i ludzkie przerzuty między zlewniami. Antarktyda jest wyłączona. Nie czytajcie miniatury jako praw do wody, presji ani prognozy konfliktu.',
    licenseNote:
      'HydroBASINS jest rozprowadzany do użytku naukowego, edukacyjnego i komercyjnego na licencji HydroSHEDS (cytujcie Lehner & Grill 2013). Podgląd to wybór zlewni Hidromundi Babelii (CC BY-SA 4.0), nie figura produktowa HydroSHEDS.',
    imageAlt:
      'Mapa świata z wyborem zlewni rzecznych w pastelowych poligonach na jasnoniebieskim oceanie — baza hydrograficzna, nie indeks presji na wodę',
  },
  'freshwater-aquastat': {
    title: 'Zasoby wody słodkiej (AQUASTAT)',
    hook: 'Krajowe odnawialne zasoby i pobory z globalnego systemu informacji wodnej FAO — statystyka i profile krajów, nie jeden raster presji.',
    description:
      'FAO AQUASTAT zbiera odnawialne zasoby wodne, pobory i statystykę nawodnień oraz profile krajów i zlewni. To księga krajowych rachunków wodnych, nie basenowy model ryzyka i nie dziennik studni. Nie mylcie z WRI Aqueduct (karta Presja na wodę) ani z mapą poziomu wód gruntowych. IGRAC to inny produkt, nie ta karta.',
    howToRead:
      'Średnia krajowa ukrywa miasta, które wożą wodę, i gospodarstwa, które wysychają. Rzeki transgraniczne są wspólne; AQUASTAT zapisuje rachunki krajowe. Tabele i profile są na portalu AQUASTAT. Podgląd to mapa krajowa Our World in Data odnawialnej wody słodkiej na osobę (AQUASTAT przez Bank Światowy), nie zlewnie Aqueduct.',
    caveats:
      'Statystyka krajowa spóźnia się, definicje się różnią. „Odnawialne” to nie to samo co dostępne albo czyste. Nie wymyślajcie rankingu spragnionych krajów z miniatury.',
    licenseNote:
      'AQUASTAT to system FAO; cytujcie FAO. Hostujemy przycięty eksport mapy Our World in Data (CC BY) odnawialnych zasobów słodkiej wody na osobę, z AQUASTAT przez Bank Światowy. Aktualne tabele są na FAO AQUASTAT.',
    imageAlt:
      'Choropleth Our World in Data odnawialnej wody słodkiej na osobę: blade kraje suche i ciemniejszy turkus krajów zasobnych w wodę',
  },
  'exclusive-economic-zones': {
    title: 'Wyłączne strefy ekonomiczne',
    hook: 'Morskie poligony WSE — kto zgłasza który pas oceanu. Uzupełnia granice lądowe; nie druga warstwa państw.',
    description:
      'Wyłączna strefa ekonomiczna to zwykle pas do 200 mil morskich od linii podstawowej, gdzie państwo ma suwerenne prawa do zasobów w wodzie i na dnie. Marine Regions (Flanders Marine Institute) publikuje globalną bazę WSE — zwykłe publiczne odniesienie. To jurysdykcja morska, nie druga mapa państw Natural Earth admin-0. Hub Marine Regions jest na marineregions.org.',
    howToRead:
      'Niebieski pas oceanu to roszczenie albo linia traktatu, czasem z nachodzeniem. Morze pełne leży dalej. Sporne WSE rysuje się jednym sposobem, żeby w ogóle narysować mapę. Aktualne poligony są na Marine Regions. Podgląd to schemat WSE świata z Commons, nie zrzut ich bazy.',
    caveats:
      'Traktaty, linie środkowe i reżimy wspólne się zmieniają. Miniatura to nie spór UNCLOS. Prawa do ryb i ropy to nie suwerenność nad każdym użyciem słupa wody.',
    licenseNote:
      'Dane WSE Marine Regions zwykle są CC BY 4.0 (cytujcie Flanders Marine Institute). Podgląd to schemat światowych WSE / wód terytorialnych B1mbo na Commons (CC BY-SA 3.0 CL), na podstawie granic morskich VLIZ.',
    imageAlt:
      'Kontur świata z ciemnoniebieskim pasem morskim wokół wybrzeży i wysp — wyłączne strefy ekonomiczne, nie granice lądowe',
  },
  'living-languages-count': {
    title: 'Liczba żywych języków',
    hook: 'Publiczny przegląd Ethnologue o tym, ile żywych języków się liczy — karta skali obok mapy rodzin Glottolog, nie drugi atlas rodzin.',
    description:
      'Ethnologue (SIL International) publikuje publiczny przegląd liczby żywych języków na swojej liście. Ta suma się rusza, gdy zmienia się ISO 639-3 i gdy języki są przeklasyfikowywane jako żywe albo wymarłe. Ta karta jest o rozmiarze tego inwentarza, nie o drugiej mapie rodzin językowych. Glottolog zostaje mapą rodzin na tej półce.',
    howToRead:
      'Żywa liczba jest na stronie przeglądu Ethnologue. Nie drukujemy tu liczby w nagłówku, bo strona jest źródłem ewidencji, a liczba się zmienia. Podgląd to starszy choropleth indeksu różnorodności językowej Ethnologue — ciemniej tam, gdzie wiele języków dzieli kraj — nie atlas drzewa rodzin i nie spis ludów.',
    caveats:
      '„Język” to decyzja naukowa i polityczna. Granice kolonialne tną wspólnoty mowy. Nie czytajcie odcienia jako etnosu, lojalności ani terytorium. Nie klonujcie tej karty jako drugiego Glottologu.',
    licenseNote:
      'Tekst przeglądu należy do Ethnologue. Podgląd to mapa indeksu różnorodności językowej Ethnologue 18 z Wikimedia (cmglee, CC BY-SA 3.0) — krajowy choropleth różnorodności, nie rodziny Glottolog i nie grafika bieżącego wydania Ethnologue.',
    imageAlt:
      'Zielony choropleth różnorodności językowej według krajów: ciemniejsza zieleń tam, gdzie wiele języków dzieli państwo, bledsza tam, gdzie mało — nie atlas rodzin językowych',
  },
  'disputed-breakaway-areas': {
    title: 'Sporne i odłączone terytoria',
    hook: 'Poligony, które Natural Earth oznacza jako odłączone lub sporne — roboczy zestaw kartografa dla spornego lądu, nie wyrok sądu i nie druga warstwa państw świata.',
    description:
      'Warstwa Admin 0 – Breakaway, disputed areas. Ta sama rodzina public domain co karta państw, ale inny obiekt: sporne / specjalne poligony, nie zwykłe wypełnienie admin-0. Nie czytać jako uznanie państwa. EEZ zostaje morskie; tu ląd.',
    howToRead: 'Nie czytać jako uznanie państwa. EEZ zostaje morskie; tu ląd.',
    caveats:
      'Natural Earth oznacza te poligony jako odłączone lub sporne, żeby w ogóle narysować mapę. To wybór kartograficzny, nie uznanie państwa i nie wyrok sądu. Nie scalać tej warstwy z kartą państw jako drugiego wypełnienia admin-0.',
    licenseNote:
      'Natural Earth jest w domenie publicznej. Miniatura przekolorowuje tylko poligony Admin 0 – Breakaway, disputed areas. Miniatura to kartografia, nie wyrok sądu.',
    imageAlt:
      'Mapa świata z kremowym lądem i jasnoniebieskim oceanem; koralowe poligony zaznaczają tylko sporne i odłączone terytoria Natural Earth — nie drugie wypełnienie państw i nie wyrok sądu',
  },
  'states-provinces': {
    title: 'Stany i prowincje',
    hook: 'Wewnętrzne jednostki pierwszego rzędu (stany, prowincje, obwody…) — linie administracyjne wewnątrz państw, nie drugi atlas granic suwerennych i nie EEZ.',
    description:
      'Warstwa Admin 1. Uzupełnia kartę państw: wewnątrz kraju, nie suwerenność i nie morze. Uogólnienie do map małoskalowych; nie GADM. Natural Earth — ta sama licencja co żywa karta krajów.',
    howToRead: 'Uogólnienie do map małoskalowych; nie GADM. Natural Earth — ta sama licencja co żywa karta krajów.',
    caveats:
      'Nazwy i granice prowincji się zmieniają. Natural Earth uogólnia jednostki pierwszego rzędu do map małoskalowych. To nie GADM i nie spis samorządów.',
    licenseNote:
      'Natural Earth jest w domenie publicznej. Miniatura pokazuje kontury stanów i prowincji Admin 1. Miniatura to kartografia, nie wyrok sądu.',
    imageAlt:
      'Mapa świata wewnętrznych jednostek pierwszego rzędu cienkimi konturami — stany, prowincje, obwody — nie choropleth państw i nie strefy morskie',
  },
  'land-boundary-lines': {
    title: 'Linie granic lądowych',
    hook: 'Międzynarodowe granice lądowe jako linie — krawędź między poligonami, nie wypełnienie państw i nie morskie limity EEZ.',
    description:
      'Liniowa warstwa granic przy admin-0. Uzupełnia wypełnienie państw; nie EEZ i nie sporne poligony. Te same zastrzeżenia o spornych odcinkach — linia na małej skali to nadal wybór kartograficzny, nie kataster ONZ.',
    howToRead:
      'Te same zastrzeżenia o spornych odcinkach — linia na małej skali to nadal wybór kartograficzny, nie kataster ONZ.',
    caveats:
      'Niektóre odcinki granic lądowych są sporne; Natural Earth dokumentuje ten wybór. Linia na małej skali to nadal wybór kartograficzny, nie kataster ONZ.',
    licenseNote:
      'Natural Earth jest w domenie publicznej. Miniatura to liniowa warstwa granic lądowych Admin 0. Miniatura to kartografia, nie wyrok sądu.',
    imageAlt:
      'Mapa świata międzynarodowych granic lądowych ciemnymi liniami na jasnym lądzie — geometria liniowa, nie wypełnienie państw i nie limity morskie',
  },
  'endangered-languages-unesco': {
    title: 'Języki zagrożone (Atlas UNESCO)',
    hook: 'Języki, które UNESCO uznała za narażone lub ginące — atlas zagrożenia, nie spis ludów i nie druga mapa rodzin.',
    description:
      'Wydanie Moseley 2010 (~2500 języków, stopnie zagrożenia według przekazu międzypokoleniowego). Obok Glottolog (pokrewieństwo) i Ethnologue (liczba żywych) — inne pytanie: kogo UNESCO uznała za zagrożone. Nie czytać jako mapy etnicznej ani wyroku sądu.',
    whyOnShelf:
      'Obok Glottolog (pokrewieństwo) i Ethnologue (liczba żywych) — inne pytanie: kogo UNESCO uznała za zagrożone.',
    howToRead: 'Nie czytać jako mapy etnicznej ani wyroku sądu.',
    caveats: 'Języki ≠ ludy ≠ państwa. Nie czytać jako mapy etnicznej ani wyroku sądu.',
    licenseNote:
      'UNESCO / Moseley (red.) 2010. Podgląd to schemat stopni zagrożenia Atlasu (narażony → wymarły) na konturze świata w domenie publicznej — nie choropleth etniczny i nie drugie drzewo rodzin Glottolog. Cytujcie wydanie UNESDOC.',
    imageAlt:
      'Schematyczna mapa świata z pinezkami stopni zagrożenia Atlasu UNESCO od narażonego (żółty) do wymarłego (czarny) — nie spis ludów i nie mapa rodzin językowych',
  },
  'wals-language-structures': {
    title: 'Światowy atlas struktur językowych (WALS)',
    hook: 'Cechy strukturalne języków — fonetyka, szyk wyrazów, gramatyka — z gramatyk opisowych. Typologia, nie etniczność i nie drzewo rodzin.',
    description:
      'Baza WALS Online (MPI EVA). Glottolog = pokrewieństwo; WALS = które cechy strukturalne gdzie występują. Kolor na mapie cechy — kod w próbie, nie «naród» i nie państwo.',
    whyOnShelf: 'Glottolog = pokrewieństwo; WALS = które cechy strukturalne gdzie występują.',
    howToRead: 'Kolor na mapie cechy — kod w próbie, nie «naród» i nie państwo.',
    caveats: 'Języki ≠ ludy ≠ państwa. Kolor — kod w próbie, nie «naród» i nie państwo.',
    licenseNote:
      'Dane WALS Online są CC BY 4.0 (Dryer & Haspelmath / Instytut Maxa Plancka). Podgląd przerysowuje cechę 1A, zasób spółgłosek (Maddieson), z wydania CLDF — mapa typologii strukturalnej, nie rodziny Glottolog i nie pinezki zagrożenia UNESCO.',
    imageAlt:
      'Mapa WALS Online rozmiaru inwentarza spółgłoskowego: kolorowe punkty w miejscach odniesienia języków od małego (niebieski) do dużego (czerwony) — typologia, nie etniczność i nie drzewo rodzin',
  },
  'language-areas-asher-moseley': {
    title: 'Obszary językowe (Asher & Moseley)',
    hook: 'Otwarte poligony obszarów z atlasu Asher & Moseley, powiązane z Glottocode — powierzchnie, nie punkty Glottolog, i nadal nie spis ludów.',
    description: '~6992 poligonów; punkty Glottolog ≠ obszary. Czytać jako uogólnienie atlasu, nie suwerenność i nie «krew».',
    whyOnShelf: 'Punkty Glottolog ≠ obszary.',
    howToRead: 'Czytać jako uogólnienie atlasu, nie suwerenność i nie «krew».',
    caveats: 'Języki ≠ ludy ≠ państwa. Czytać jako uogólnienie atlasu, nie suwerenność i nie «krew».',
    licenseNote:
      'Poligony obszarów z Glottography/asher2007world (CC BY 4.0), zdigitalizowane z Asher & Moseley i powiązane z Glottocode; cytujcie Ranacher et al., Scientific Data 2025. Podgląd to próbka powierzchni z arkuszy tradycyjnych / czasu kontaktu — nie choropleth rodzin Glottolog i nie spis ludów.',
    imageAlt:
      'Próbka poligonów obszarów językowych zdigitalizowanych z atlasu Asher & Moseley i powiązanych z Glottocode — powierzchnie, nie punkty Glottolog i nie spis ludów',
  },
  'endangered-languages-project': {
    title: 'Katalog Endangered Languages Project',
    hook: 'Żywy katalog i mapa języków zagrożonych z zasobami dla społeczności — inne spojrzenie na zagrożenie obok Atlasu UNESCO 2010, nie drugi Glottolog.',
    description:
      'Nonprofit ELP: katalog, mapa, witalność, biblioteka zasobów. Nie mylić z wydaniem UNESCO 2010 i nie czytać jako mapy etnicznej/politycznej.',
    whyOnShelf: 'Nie mylić z wydaniem UNESCO 2010.',
    howToRead: 'Nie mylić z wydaniem UNESCO 2010 i nie czytać jako mapy etnicznej/politycznej.',
    caveats: 'Języki ≠ ludy ≠ państwa. Nie czytać jako mapy etnicznej/politycznej.',
    licenseNote:
      'Endangered Languages Project. Podgląd to schemat żywego katalogu — inny niż stopnie Atlasu UNESCO i pinezki Ethnologue EGIDS, i nie mapa polityczna.',
    imageAlt:
      'Schematyczna mapa katalogu języków zagrożonych w barwach Endangered Languages Project — pinezki witalności, nie Atlas UNESCO 2010 i nie drugi Glottolog',
  },
  'groundwater-whymap': {
    title: 'Zasoby wód podziemnych (WHYMAP)',
    hook: 'Globalne środowiska hydrogeologiczne i potencjał zasilania z WHYMAP — mapa bazowa wód podziemnych, nie stres Aqueduct i nie krajowe rachunki FAO.',
    description:
      'Mapa Groundwater Resources of the World (BGR + UNESCO). Inny obiekt niż AQUASTAT (rachunki krajów) i Aqueduct (stres). Kolory = typy środowisk i zasilanie, nie ranking krajów.',
    whyOnShelf: 'Inny obiekt niż AQUASTAT (rachunki krajów) i Aqueduct (stres).',
    howToRead: 'Kolory = typy środowisk i zasilanie, nie ranking krajów.',
    caveats:
      'Kolory = typy środowisk i zasilanie, nie ranking krajów. Nie AQUASTAT i nie Aqueduct. Nie IGRAC GGIS.',
    licenseNote:
      'Podgląd to przegląd Fix Planet rodzin środowisk hydrogeologicznych WHYMAP (niebieskie baseny osadowe / zielone złożone / brązowe lokalne-płytkie), nie oficjalna mapa BGR i nie choropleth stresu Aqueduct. PDF i shapefile są na stronie WHYMAP. Cytujcie BGR i UNESCO / WHYMAP.',
    imageAlt:
      'Mapa świata z niebieskimi plamami basenów osadowych, zielonymi pasami fałdowymi i brązowymi lokalnymi płytkimi warstwami wodonośnymi — schemat hydrogeologii, nie stres wodny',
  },
  'global-lakes-hydrolakes': {
    title: 'Globalne jeziora (HydroLAKES)',
    hook: 'Poligony brzegów ~1,4 mln jezior i zbiorników ≥10 ha — inwentarz jezior, nie zlewnie i nie indeks stresu.',
    description:
      'Ta sama rodzina HydroSHEDS co HydroBASINS, ale obiekt = brzeg jeziora/zbiornika. Nie mapa mokradeł (GLWD) i nie jakość wody.',
    whyOnShelf: 'Ta sama rodzina HydroSHEDS co HydroBASINS, ale obiekt = brzeg jeziora/zbiornika.',
    howToRead: 'Nie mapa mokradeł (GLWD) i nie jakość wody.',
    caveats:
      'Nie mapa mokradeł (GLWD) i nie jakość wody. Objętość i głębokość dla większości to oceny modelowe.',
    licenseNote:
      'Podgląd to przegląd Fix Planet znanych okręgów jeziornych, nie figura produktowa HydroSHEDS i nie drugie wypełnienie zlewni. Pobranie jest na stronie HydroLAKES. Cytujcie Messager et al. 2016.',
    imageAlt:
      'Mapa świata z ciemnoniebieskimi punktami jezior i zbiorników w znanych okręgach jeziornych — inwentarz brzegów, nie zlewnie rzeczne',
  },
  'lakes-wetlands-glwd': {
    title: 'Jeziora i mokradła (GLWD v2)',
    hook: 'Śródlądowe wody świata w 33 klasach zbiorników i mokradeł — bagna, torfowiska, wody okresowe i więcej, nie druga warstwa brzegów HydroLAKES.',
    description:
      'GLWD v2 (~15″, do ~18,2 mln km²). HydroLAKES = brzegi ≥10 ha; GLWD = szersze klasy mokradeł. Nie lista Ramsar i nie stres wodny.',
    whyOnShelf: 'HydroLAKES = brzegi ≥10 ha; GLWD = szersze klasy mokradeł.',
    howToRead: 'Nie lista Ramsar i nie stres wodny.',
    caveats: 'Nie lista Ramsar i nie stres wodny. HydroLAKES zostaje inwentarzem brzegów.',
    licenseNote:
      'Podgląd to przegląd Fix Planet klas wód śródlądowych (woda otwarta, bagno, torf, woda okresowa), nie figura produktowa HydroSHEDS i nie druga warstwa brzegów HydroLAKES. GLWD v2 jest CC BY 4.0 (cytujcie Lehner et al. 2025). Strona produktu jest na HydroSHEDS.',
    imageAlt:
      'Mapa świata z turkusową wodą otwartą, zielonymi bagnami, brązowym torfem i złotą wodą okresową — klasy mokradeł, nie brzegi jezior',
  },
  'flood-hazard-aqueduct': {
    title: 'Zagrożenie powodziowe (Aqueduct Floods)',
    hook: 'Modelowane zagrożenie i ekspozycja powodzi rzecznych i przybrzeżnych — ryzyko zalania, nie ten sam bazowy stres wodny co na karcie Water stress.',
    description:
      'Osobne narzędzie WRI od Water Risk Atlas. Warstwy hazardu często bez istniejącej ochrony — nie prognoza „jutro zaleje”. Rzeka ≠ morze.',
    whyOnShelf: 'Osobne narzędzie WRI od Water Risk Atlas.',
    howToRead: 'Warstwy hazardu często bez istniejącej ochrony — nie prognoza „jutro zaleje”. Rzeka ≠ morze.',
    caveats:
      'Warstwy hazardu często bez istniejącej ochrony — nie prognoza „jutro zaleje”. Rzeka ≠ morze. Nie bazowy stres wodny Aqueduct Water Risk Atlas.',
    licenseNote:
      'Podgląd to przegląd Fix Planet rejonów zalania rzecznego i przybrzeżnego, nie oficjalna grafika WRI Floods i nie drugi choropleth bazowego stresu wodnego. Dane Aqueduct zwykle są CC BY z przypisaniem WRI. Interaktywne mapy są w narzędziu Aqueduct Floods.',
    imageAlt:
      'Mapa świata ze średnioniebieskimi korytarzami powodzi rzecznymi i jasnym cyjanem plam przybrzeżnych — zagrożenie powodziowe, nie bazowy stres wodny',
  },
  'intact-forest-landscapes': {
    title: 'Nienaruszone krajobrazy leśne (IFL)',
    hook: 'Poligony Potapov / IFL Mapping Team (aktualizacje 2000–2025) — integralność dzikiej mozaiki leśnej, nie roczne piksele Hansena i nie granice parków.',
    description:
      'Nienaruszone krajobrazy leśne (IFL) to duże mozaiki lasu i powiązanych ekosystemów bez wykrytej przemysłowej infrastruktury. Zespół IFL (UMD GLAD i partnerzy) publikuje zasięgi globalne na lata 2000, 2013, 2016, 2020 i 2025 na CC BY 4.0. Metoda: Potapov et al., Science Advances 2017; aktualny zasięg to warstwa 2025. To nie FAO land use i nie WDPA.',
    howToRead:
      'Kolorowa łatka to poligon IFL w roku mapy — nie plantacja i nie granica parku. Ubytek między latami to fragmentacja albo przemysłowe wejście w dawny IFL; może różnić się od sum utraty koron Hansena.',
    caveats:
      'IFL to klasa dzikiej mozaiki o minimalnej wielkości (około 500 km² bez wykrytej infrastruktury przemysłowej), nie cały las pierwotny i nie zapas węgla. Las może być pierwotny i nadal nie być IFL, jeśli drogi albo zręby go tną. Granice przesuwają się między latami aktualizacji. Drobne albo podokapowe użytkowanie satelita może pominąć.',
    licenseNote:
      'GeoPackage są na intactforests.org. Opcjonalna przeglądarka to mapa IFL Greenpeace. Archiwum 2000–2025 jest na Zenodo. Otwarty tekst metody to Potapov et al. 2017 w PMC. Podgląd to schemat Fix Planet dużych dzikich bloków, nie poligony IFL.',
    imageAlt:
      'Ciemna mapa świata z jasnozielonymi blokami dzikiego lasu w Amazonii, Kotlinie Konga, borealnej Kanadzie i Syberii oraz na Nowej Gwinei — nienaruszone krajobrazy, nie roczne piksele utraty koron',
  },
  'mangrove-extent': {
    title: 'Zasięg namorzyn',
    hook: 'Global Mangrove Watch — roczny zasięg namorzyn (seria v4.1 do 2025) — las pływowy, nie śródlądowy Hansen i nie parki WDPA.',
    description:
      'Global Mangrove Watch (GMW) mapuje szacowany zasięg lasów namorzynowych i jego zmianę. Wersja 4.1 to szereg roczny od 1985 do 2025 (JAXA Kyoto & Carbon, Aberystwyth University i partnerzy). Platforma pokazuje zasięg, zmianę netto i alerty; rastry i wektory są na Zenodo i w JAXA. To nie rafy i nie obszary chronione.',
    howToRead:
      'Piksel namorzynu to las pływowy klasyfikatora GMW w danym roku — nie rafa koralowa, nie mapa solnisk i nie status ochrony. Porównuj lata w GMW; nie mieszaj z sumami Hansena.',
    caveats:
      'Mapy namorzyn słabiej radzą sobie na mulistych krawędziach, stawach akwakultury i rzadkiej frędzli. Zmiana roczna to nie to samo co prawne wylesienie. Węgiel i gatunki to osobne produkty tej samej platformy. Dokładność zależy od kraju i zmętnienia. Nasadzenia odtworzeniowe mogą spóźniać się w klasyfikatorze. Alerty to przesiew, potem lokalny obraz.',
    licenseNote:
      'Warstw GMW używają krajowe panele i projekty wybrzeża. Stos v4.1 do GIS opisuje JAXA. Podgląd to schemat Fix Planet znanych wybrzeży namorzynowych, nie raster GMW. Mapa jest na globalmangrovewatch.org.',
    imageAlt:
      'Mapa świata z turkusową frędzlą lasu pływowego wzdłuż tropikalnych wybrzeży — zasięg namorzyn, nie śródlądowa utrata koron',
  },
  'primary-humid-tropical-forests': {
    title: 'Pierwotne wilgotne lasy tropikalne',
    hook: 'Mapa UMD GLAD 30 m — zasięg pierwotnych wilgotnych lasów tropikalnych na 2001 (Turubanova et al.) — baza pierwotności, nie roczne straty Hansena i nie reguły wielkości IFL.',
    description:
      'Warstwa bazowa 2001. UMD GLAD zmapował pierwotny wilgotny las tropikalny w 30 m z Landsata: las, który nie został całkowicie wycięty w zapisie użytym do tej bazy. Kontynentalne GeoTIFF-y i kolekcja Earth Engine są publiczne. Metoda: Turubanova et al., Environmental Research Letters 2018 (DOI 10.1088/1748-9326/aacd1c). Tylko wilgotne tropiki.',
    howToRead:
      'Piksel 1 to pierwotny wilgotny las tropikalny na mapie 2001; 0 to inny ląd albo woda. Straty po 2001 zwykle czyta się z Hansen / Global Forest Watch. Sama warstwa 2001 nie jest mapą zasięgu 2025.',
    caveats:
      'Tylko wilgotne tropiki — nie pierwotny las borealny i nie las suchy. Las wtórny po wycięciu jest poza klasą pierwotną 2001. Błędy klasyfikacji bywają na krawędziach i w złożonej mozaice. Plantacje założone przed logiką bazy mogą mylić lokalny odczyt — czytaj noty GLAD.',
    licenseNote:
      'Warstwy są na stronie zbioru GLAD i w katalogu Google Earth Engine. Podgląd to schemat Fix Planet pasa wilgotnych tropików, nie GeoTIFF 30 m. Cytuj Turubanova et al. 2018 i UMD GLAD.',
    imageAlt:
      'Mapa świata z nasyconym zielonym pasem pierwotnego wilgotnego lasu tropikalnego w Amazonii, Kongu i Azji Południowo-Wschodniej na bazie 2001 — nie las borealny i nie roczna utrata koron',
  },
  'forest-landscape-integrity': {
    title: 'Wskaźnik integralności krajobrazów leśnych (FLII)',
    hook: 'Ciągła ocena integralności lasów Grantham et al. (~2019) — antropogeniczna modyfikacja i łączność, nie sam Hansen i nie pokrycie WDPA.',
    description:
      'Wskaźnik integralności krajobrazów leśnych (FLII) składa zasięg lasu, zmapowane presje człowieka, wnioskowane presje towarzyszące i utratę łączności w ciągłą ocenę 0–10 dla lasów świata (Grantham et al., Nature Communications 2020). Około 40% pozostałych lasów wpadło w ilustracyjne pasmo wysokiej integralności; tylko część tego pasma leży w obszarach chronionych.',
    howToRead:
      'Wysoki wynik to niższa modelowana antropogeniczna modyfikacja w skali krajobrazu — nie „nietknięte na zawsze” i nie gęstość węgla. Niski wynik może nadal być pod koroną. FLII to nie IFL i nie data utraty koron. Cięcia niska / średnia / wysoka są ilustracją; produktem jest wynik ciągły.',
    caveats:
      'FLII to indeks modelowy około 300 m, circa początek 2019, nie roczna aktualizacja 2025 w oryginalnym artykule. To nie zastępstwo ekologii terenowej ani mapa ziem rdzennych. Lokalne wagi mogą różnić się od globalnego domyślnego. Polowania i degradację podszytu częściowo wnioskuje się z dostępności.',
    licenseNote:
      'Artykuł jest w Nature Communications. Rastry są na stronie pobierania Forest Landscape Integrity. Podgląd to schemat Fix Planet pasm integralności, nie raster autorów. Cytuj Grantham et al. 2020.',
    imageAlt:
      'Mapa świata ze skalą integralności lasu: ciemnozielone odległe masywy, złoty środek i pomarańczowy silnie zmieniony las — nie data utraty koron',
  },
};
