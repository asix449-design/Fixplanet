import type { HumanEventAtlasCopy } from './migration';

const coveragePl: HumanEventAtlasCopy['coverage'] = {
  schematic: 'Schemat dydaktyczny · datowany ruch, nie spis',
  'farming-europe': 'Rozprzestrzenianie rolnictwa w zachodniej Eurazji — luka dla innych ośrodków holocenu',
  'culture-horizon': 'Zasięg kultury archeologicznej — nie mapa rasowa ani narodowa',
  regional: 'Europa i Morze Śródziemne — luka dla reszty świata',
  seafaring: 'Żegluga austronezyjska — Pacyfik i Ocean Indyjski, nie spis świata',
  conquest: 'Ekspansja kalifatu 622–750 — podbój i osadnictwo, nie spis nawróceń',
  'empire-extent': 'Zasięg imperium jako przybliżenie wojny i ucieczki — nie kto się ruszył',
  'forced-trade': 'Przymusowy handel atlantycki — nie dobrowolna emigracja',
  'flow-snapshot': 'Przepływy jednego roku — nie wiek wszystkich, którzy opuścili Europę',
};

export const plHumanEventAtlas: HumanEventAtlasCopy = {
  title: 'Wielkie zdarzenia migracyjne',
  lead:
    'Oś czasu dobrze udokumentowanych ruchów — nie mapa wszystkich ludzi co pięćdziesiąt lat. Karty plejstocenu to dydaktyczne strzałki na NASA Blue Marble. Późniejsze to opublikowane płyty. Luki są oznaczone. Nie wymyślamy globalnych choropletów ludności.',
  honesty:
    'Karty zdarzeń, nie regularna siatka czasu. Każdy ruch ma zakres dat, trasę lub region, czynniki tylko tam, gdzie trzyma je nauka, i źródło. Presja hunicka zostaje na tej półce Ludzie. Wielkie migracje to żywe ruchy masowe, nie druga karta Attyli.',
  aria: 'Mapa wielkich zdarzeń migracji człowieka',
  scrubberAria: 'Przejdź do zdarzenia migracyjnego',
  eventLabel: 'Zdarzenie',
  whenLabel: 'Kiedy',
  whereLabel: 'Gdzie',
  whyLabel: 'Dlaczego — czynniki',
  uncertaintyLabel: 'Niepewność',
  nearestNote: 'Najbliższa płyta na otwartej licencji — nie spis dokładnego roku.',
  forthcomingNote:
    'Nie ma jeszcze płyty trasy na otwartej licencji. Strzałki to schemat dydaktyczny, nie datowana mapa inwazji.',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  vintageLabel: 'Zakres dat',
  schematicCredit:
    'Podstawa schematu: NASA Blue Marble Next Generation (grudzień 2004, domena publiczna) — fizyczna Ziemia, nie mapa polityczna i nie raster ludności.',
  greatMigrationsCta: 'Wielkie migracje →',
  greatMigrationsNote:
    'Żywe ruchy masowe są na tamtej półce. Ta płyta to regionalny schemat 100–500 n.e. Attyli tam nie powielamy.',
  coverage: coveragePl,
  events: {
    'out-of-africa': {
      label: 'Z Afryki',
      title: 'Z Afryki — korytarze klimatyczne',
      when: 'Około 70 000–50 000 lat temu. Wcześniejsze skamieniałości Lewantu zapisują obecność bez trwałej światowej wymiany.',
      where: 'Z Afryki do Lewantu i dalej. Nil, brzegi Morza Czerwonego i Bab al-Mandab to omawiane korytarze — nie jedna udowodniona autostrada.',
      why: 'Okna zielonej Sahary i Lewantu, potem bariery suche. To nie jeden „pęd do odkryć”.',
      uncertainty:
        'Genetyka (Bergström et al. 2020) wspiera ekspansję późnego plejstocenu, z której pochodzi większość żyjącego nieafrykańskiego pochodzenia. Dokładnej trasy nie rysujemy jako faktu.',
      caption: 'Dydaktyczna strzałka ku Azji Południowo-Zachodniej. Datowany ruch, nie GPS każdej grupy.',
      imageAlt: 'Schematyczna strzałka z Afryki ku Azji Południowo-Zachodniej na NASA Blue Marble',
    },
    sahul: {
      label: 'Sahul',
      title: 'Sahul — wybrzeża, szelfy i przerwy wodne',
      when: 'Około 65 000–50 000 lat temu. Madjedbebe to nazwany wczesny stanowisko; część przeglądów siada później w tym oknie.',
      where: 'Australia, Nowa Gwinea i Tasmania łączyły się jako Sahul przy niższym morzu. Docieranie wciąż wymagało przekroczeń wodnych z Sundy.',
      why: 'Lodowcowy spadek poziomu morza odsłonił szelfy i zwęził przerwy. Łodzie lub tratwy, nie bezlodowy korytarz śródlądowy.',
      uncertainty:
        'Clarkson et al. 2017 datują Madjedbebe około 65 000 lat; inne przeglądy wolą później w 65–50 tys. Tak czy inaczej to dziesiątki tysiącleci przed Amerykami.',
      caption: 'Dydaktyczna strzałka ku Sahulowi. Umiejętność wybrzeża i wysp, nie rok marszu.',
      imageAlt: 'Schematyczna strzałka z Sundy ku Sahulowi na NASA Blue Marble',
    },
    americas: {
      label: 'Ameryki',
      title: 'Zasiedlenie Ameryk — lód, wybrzeża, spór',
      when: 'Robocze okno około 16 000–11 000 lat dla wejścia i rozszerzającej się obecności. Starsze twierdzenia pozostają sporne.',
      where: 'Beringia, potem Ameryki. Pacyficzna trasa przybrzeżna to zwykły model roboczy po Pedersen et al. 2016.',
      why: 'Niski poziom morza połączył Syberię i Alaskę. Lądolody zablokowały wnętrze aż później.',
      uncertainty:
        'White Sands i inne starsze twierdzenia istnieją; tutaj nie są traktowane jako ustalone daty pierwszego przybycia. To nie spis półkuli.',
      caption: 'Dydaktyczna strzałka do Ameryk. Lód i wybrzeża, nie GPS rok po roku.',
      imageAlt: 'Schematyczna strzałka do Ameryk na NASA Blue Marble',
    },
    neolithic: {
      label: 'Rolnictwo → Europa',
      title: 'Neolityczne ekspansje rolnictwa — Anatolia ku Europie',
      when: 'Około 9600–4000 p.n.e. na tej płycie: rolnictwo z Azji Południowo-Zachodniej do Europy.',
      where:
        'Azja Południowo-Zachodnia (Żyzny Półksiężyc i Anatolia) na Bałkany, wybrzeża śródziemnomorskie i do Europy Środkowej. Inne ośrodki holocenu — Chiny, Nowa Gwinea, Ameryki, Afryka — to oznaczona luka tej karty.',
      why: 'Uprawy i zwierzęta umożliwiły gęstsze, bardziej osiadłe populacje. Starożytne DNA (Lazaridis i inni) wspiera istotny ruch ludzi wraz z rolnictwem, nie tylko idei.',
      uncertainty:
        'Skrócona mapa Gronenborna i współpracowników dla zachodniej Eurazji. Daty są przybliżone. To nie światowy spis rolnictwa i nie choroplet wszystkich ludzi holocenu.',
      caption: 'Płyta rozprzestrzeniania rolnictwa w zachodniej Eurazji. Uczciwa luka: innych niezależnych ośrodków nie ma na tym arkuszu.',
      imageAlt: 'Mapa rozprzestrzeniania rolnictwa z Azji Południowo-Zachodniej do Europy około 9600–4000 p.n.e. według Gronenborna i współpracowników',
    },
    bantu: {
      label: 'Bantu',
      title: 'Ekspansja Bantu — języki, rolnictwo i długi zegar',
      when: 'Od około 4000–1000 p.n.e. z obszaru Nigerii–Kamerunu, dalej w pierwszym tysiącleciu n.e. na wschód i południe Afryki.',
      where: 'Afryka zachodnio-środkowa, potem wschód i południe przez las i sawannę. Dzisiejsza strefa języków bantu to skutek, nie mapa trasy.',
      why: 'Rolnictwo, żelazo i wzrost ludności w zmieniającym się klimacie. Grollemund et al. 2015 argumentują drogę przez las deszczowy, nie tylko wokół niego.',
      uncertainty:
        'Wielotysiącletnia seria ruchów, nie jeden marsz. Nie ma jeszcze płyty datowanej trasy; strzałki to schemat dydaktyczny według nazwanych prac.',
      caption: 'Dydaktyczne strzałki w Afryce. Płyty datowanej trasy jeszcze nie ma — to nie językowy choroplet wszystkich ludzi.',
      imageAlt: 'Schematyczne strzałki ekspansji Bantu przez Afrykę na NASA Blue Marble',
    },
    austronesian: {
      label: 'Austronezyjczycy',
      title: 'Ekspansja austronezyjska — łodzie, nie lód',
      when: 'Od około 3000 p.n.e. z Tajwanu; Oceania Zdalna i Nowa Zelandia znacznie później (Nowa Zelandia rzędu 700 lat).',
      where: 'Wyspiarska Azja Południowo-Wschodnia, Madagaskar, Pacyfik. Tylko Pacyfik i Ocean Indyjski.',
      why: 'Żegluga ku nowym wyspom, pakiety rolnicze i późniejsze dalekie rejsy. Madagaskar, Oceania Zdalna i Nowa Zelandia to historie holocenu.',
      uncertainty:
        'Chronologia Bellwood / Benton w przerysowaniu na Wikimedia. Nie hostujemy globalnego rastra ludności 1500 ani 1800.',
      caption: 'Płyta chronologiczna ze źródłem. Żegluga, nie korytarz lodowy.',
      imageAlt: 'Chronologiczna mapa rozprzestrzeniania austronezyjskiego przez Pacyfik',
    },
    steppe: {
      label: 'Pasterze stepu',
      title: 'Zachodni pasterze stepu — horyzont jamowy, nie naród',
      when: 'Archeologiczny horyzont kultury jamowej około 3300–2600 p.n.e. Pokrewne ruchy do Europy i Azji w III–II tys. p.n.e.',
      where:
        'Step pontyjsko-kaspijski. Późniejsze pokrewne pochodzenie widać u kultury ceramiki sznurowej i innych grup. Ta płyta to zasięg kultury, nie mapa wszystkich języków indoeuropejskich.',
      why: 'Pasterstwo, wozy i ruchoma gospodarka. Haak et al. 2015 opisują istotną migrację ze stepu do Europy. Zmiana języka jest wnioskowana, nie fotografowana.',
      uncertainty:
        'To archeologia i starożytne DNA, nie mapa rasowa i nie narodowy mit pochodzenia. Płyta pokazuje horyzont kultury. Późniejsze rozprzestrzenianie języków to oznaczona luka — nie rysujemy „strzał ludów” jako przeznaczenia.',
      caption: 'Horyzont jamowy według Krakkosa (CC BY-SA). Ostrożna karta: zasięg kultury, nie „Ariowie”.',
      imageAlt: 'Mapa archeologicznej kultury jamowej na stepie pontyjsko-kaspijskim, nie mapa rasowa',
    },
    'migration-period': {
      label: 'Wędrówki ludów',
      title: 'Późnoantyczne wędrówki ludów — 100–500 n.e.',
      when: 'Około 100–500 n.e. na tej płycie dydaktycznej. Presja hunicka na późny świat rzymski to nazwany epizod w tym przedziale.',
      where: 'Europa i Morze Śródziemne: Goci, Wandalowie, Frankowie, Hunowie i inni.',
      why: 'Presja na granicach, polityka późnego świata rzymskiego i stres klimatyczny w niektórych dekadach. Presja hunicka to pierwsza karta Wielkich migracji.',
      uncertainty:
        'Schemat MapMaster według nazwanych atlasów. Tylko Europa. Strzałki to wielkie najazdy, nie GPS każdej grupy.',
      caption: 'Schemat regionalny. Link do Wielkich migracji dla półki huńskiej — ta strona nie powiela tamtej karty.',
      imageAlt: 'Mapa wielkich najazdów na Cesarstwo Rzymskie ok. 100–500 n.e., Europa i Morze Śródziemne',
    },
    islamic: {
      label: 'Wczesne kalifaty',
      title: 'Wczesne ekspansje islamskie — podbój i osadnictwo',
      when: 'Około 622–750 n.e.: Mahomet, kalifowie sprawiedliwi, potem Umajjadzi.',
      where: 'Z Arabii do Lewantu, Egiptu, Afryki Północnej, Iberii i Iranu. Miasta garnizonowe (amsar) były węzłami osadnictwa.',
      why: 'Wojna, imperium, szlaki handlowe i późniejsze nawrócenie. Osadnictwo plemion arabskich jest realne; większości poddanych nie zastąpiono z półwyspu.',
      uncertainty:
        'Ta płyta to ekspansja kalifatu, nie spis muzułmanów i nie mapa każdego nawróconego. Ucieczka religijna i późniejsze ruchy tureckie to inne zegary.',
      caption: 'Płyta ekspansji 622–750, domena publiczna. Podbój i osadnictwo — nie „wszyscy stali się Arabami”.',
      imageAlt: 'Mapa ekspansji kalifatu od 622 do 750 n.e. przez Afrykę Północną, Bliski Wschód i Iberię',
    },
    mongol: {
      label: 'Epoka mongolska',
      title: 'Przesiedlenia epoki mongolskiej — imperium jako przybliżenie',
      when: 'Około 1206–1294 n.e. dla zjednoczonego imperium; późniejsze chanaty dalej przesuwały ludzi.',
      where: 'Z wyżyny mongolskiej przez Chiny, Azję Środkową, Iran i do Europy Wschodniej. Uchodźców, jeńców i specjalistów przesuwano; miasta opróżniano i czasem zasiedlano na nowo.',
      why: 'Podbój, danina i polityka imperium stepowego. Ucieczka przed armiami to udokumentowany czynnik. Handel pod pax Mongolica to późniejsza warstwa, nie pierwsza przyczyna.',
      uncertainty:
        'Płyta to największy zasięg terytorialny, nie mapa tych, którzy uciekli. Zarazy nie traktujemy tu jako udowodnionego „czynnika” mongolskiego. Zasięg to Eurazja; globalnego choropletu nie wymyślamy.',
      caption: 'Zasięg imperium (Ali Zifan). Uczciwa luka: zasięg to nie spis przesiedlonych.',
      imageAlt: 'Mapa Imperium Mongolskiego w największym zasięgu w XIII wieku',
    },
    'atlantic-slave': {
      label: 'Atlantycki handel niewolnikami',
      title: 'Atlantycki handel niewolnikami — migracja przymusowa',
      when: 'Około 1500 do lat 1860. Szczytowe stulecia zależą od celu; prawne zniesienie nie od razu kończyło cały przymus.',
      where:
        'Afryka Zachodnia i zachodnio-środkowa na Karaiby, do Brazylii i Ameryki Północnej. Handel wewnątrzafrykański i indyjskooceaniczny jest spokrewniony, ale nie całą historią tej płyty.',
      why: 'Europejski kolonialny popyt na pracę plantacyjną, afrykańska przemoc polityczna i podaż oraz system handlowy, który traktował ludzi jak ładunek. To migracja przymusowa, nie „emigracja”.',
      uncertainty:
        'Liczby z zapisów rejsów (SlaveVoyages / Eltis & Richardson). Mapa to płyta dydaktyczna według tego atlasu — nie GPS każdego statku i nie choroplet żyjących potomków.',
      caption: 'Przymusowe trasy atlantyckie według Atlas of the Transatlantic Slave Trade. Uczciwa rama: zniewolenie, nie wolny wybór.',
      imageAlt: 'Mapa afrykańskich i transatlantyckich szlaków handlu niewolnikami według Eltisa i Richardsona',
    },
    'european-emigration': {
      label: 'Masowa emigracja',
      title: 'Masowa emigracja XIX wieku — jedna wyraźna karta',
      when: 'Wiek masowej migracji atlantyckiej to mniej więcej 1840–1914. Płyta Minarda to tylko rok 1858.',
      where: 'Europa do Ameryk, z innymi strumieniami do Australii i dalej. Brytania, Irlandia i ziemie niemieckie dominują na wielu przepływach 1858 na tym arkuszu.',
      why: 'Tania ziemia i płace za oceanem, głód (Irlandia), polityczne wstrząsy 1848 i spadek kosztów transportu. Kolonizacja i wyzucie rdzennych ludów to koszt strony przyjmującej tych samych statków.',
      uncertainty:
        'Minard naniósł jeden rok. Hatton & Williamson opisują dłuższą falę XIX — początku XX w. To nie spis każdego wyjeżdżającego Europejczyka i nie mapa uchodźców XX wieku.',
      caption: 'Mapa przepływów 1858, domena publiczna. Jeden rok, nie siatka stulecia — i nie „gdzie byli wszyscy”.',
      imageAlt: 'Mapa przepływów Minarda z 1862 roku o światowych emigrantach w roku 1858',
    },
  },
};
