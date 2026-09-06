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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy zarejestrowanych zdarzeń przemocy politycznej',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy zgonów związanych z walką',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla naukowej mapy rodzin językowych',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy szacunków przynależności religijnej',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy wskaźników zabójstw',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy zanieczyszczenia PM2.5',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy terytorialnych emisji CO₂',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla geografii ropy i gazu',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla mapy zasobów mineralnych USGS',
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
    imageAlt: 'Konturowa mapa państw świata w domenie publicznej, bez etykiet',
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
    imageAlt: 'NASA Blue Marble jako fizyczny podgląd mapy utraty pokrywy drzewnej',
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
    imageAlt: 'NASA Blue Marble jako fizyczny podgląd geografii obszarów chronionych',
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
    imageAlt: 'Schematyczny podgląd Ziemi dla atlasu stresu wodnego',
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
    imageAlt: 'Mozaika NASA Ziemi w nocy jako podgląd geografii ludności',
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
};
