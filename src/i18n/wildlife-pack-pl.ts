import type { SpeciesCopy } from '../data/wildlife';

export const packPl: Record<string, SpeciesCopy> = {
  'european-bison': {
    commonName: 'Żubr',
    hook: 'Wytępiony na wolności na początku XX wieku, potem odbudowany — wolno żyjące stada wzrosły z około 1800 zwierząt w 2003 do 6244 w 47 subpopulacjach do 2019; IUCN przesunął gatunek z Vulnerable do Near Threatened.',
    imageAlt: 'Byk żubra stoi w jesiennym lesie',
    what: 'Największy ssak lądowy Europy — dziki krewniak żubra amerykańskiego, inny gatunek. Linie nizinne i górskie uratowano w zoo, potem wypuszczono do lasów od lat 50. XX w.',
    range:
      'Europa. Do 2019 wolno żyjące zwierzęta wróciły do lasów, w 47 subpopulacjach. Tylko około ośmiu stad jest dość dużych dla długiej żywotności genetycznej; większość stad zostaje mała i w większości izolowana.',
    story:
      'To zarządzany powrót po tym, jak ludzie opróżnili zasięg: hodowla w niewoli, reintrodukcje i stałe prowadzenie stad. Wciąż zależny od ochrony (małe, izolowane stada), nie beztroski boom jak dzik — ale z powrotem w krajobrazie.',
    when: 'IUCN (ocena 2020): populacja wolno żyjąca ~1800 (2003) → 6244 (2019) w 47 stadach. Status: Near Threatened, przesunięty z Vulnerable. Późniejsza notka Oryx podawała około 6800 wolno żyjących do 2020, gdy planowanie trwało.',
    humanRole:
      'Ludzie odstrzelili ostatnie dzikie zwierzęta. Hodowla w niewoli, wypuszczenia do lasów od lat 50. i stałe prowadzenie stad wróciły wolno żyjące stada.',
    sources:
      'Czerwona lista IUCN (Bison bonasus, Near Threatened, 2020); wiadomość IUCN, 10 gru 2020; notka Oryx o planie działań na cały zasięg.',
  },
  'north-american-beaver': {
    commonName: 'Bóbr amerykański',
    hook: 'Około 1900 niemal wytarty z dużej części zasięgu dla filcowych kapeluszy; regulowane odłowy i reintradukcje odbudowały kontynentalny gatunek kluczowy — IUCN: Least Concern, współczesne szacunki często ~10–15 mln.',
    imageAlt: 'Bóbr amerykański siedzi na kłodzie przy brzegu stawu',
    what: 'Budowniczy tam Nowego Świata — ta sama rodzina co żywy bóbr europejski, inny gatunek. Przebudowuje cieki w mokradła, które trzymają wodę, magazynują węgiel w stawach i karmią inną zwierzynę.',
    range:
      'Znów kontynentalny gatunek kluczowy tam, gdzie zostało siedlisko, po niemal całkowitym starciu z dużej części zasięgu. Nie mylić z Castor fiber.',
    story:
      'Ludzie doprowadzili go do lokalnego wymarcia dla futra, potem sprowadzili z powrotem. Tam gdzie jest dużo — konflikt z rolnictwem i przepustami. Klasyczna historia półki „wciąż tu, potem boom”, nie rzadkość ze statusu Endangered.',
    when: 'Około 1900 bobry niemal zniknęły z wielu pierwotnych siedlisk. Ocena USDA Forest Service, region 2: reguły pozyskania, ochrona mokradeł, przesiedlenia i naturalne rozprzestrzenienie odbudowały populacje tam, gdzie siedlisko zostało. Współczesne sumy często szacuje się na dziesiątki milionów (często ~10–15 mln). Streszczenie Stanford niedawnego mapowania podaje spadek od zgrubnych przedkolonialnych zgadywań 60–400 mln do około 10–15 mln dziś — historyczny sufit traktować jako niepewny; kierunek (załamanie → znów miliony) jest solidny. IUCN: Least Concern.',
    humanRole:
      'Handel futrami na filcowe kapelusze niemal go starł. Regulowane odłowy i reintradukcje w połowie wieku go odbudowały.',
    sources:
      'Czerwona lista IUCN (Castor canadensis, Least Concern); Animal Diversity Web; ocena USDA Forest Service, region 2; Stanford Report, 11 sie 2025; Communications Earth & Environment (doi:10.1038/s43247-025-02572-y).',
  },
  'bald-eagle': {
    commonName: 'Bielik amerykański',
    hook: 'W 1963 w dolnych 48 stanach USA zostało 417 znanych par lęgowych; po zakazie DDT i pracy ESA USFWS naliczył około 316\u202f700 osobników i 71\u202f467 zajętych gniazd w 2018–2019.',
    imageAlt: 'Dorosły bielik amerykański w locie nad wodą: biała głowa i ogon',
    what: 'Orzeł rybny Ameryki Północnej i symbol narodowy USA — jedyny orzeł rodzimy wyłącznie dla tego kontynentu. Dorosłe mają białą głowę i ogon; młodsze latami zostają pstrokato brązowe.',
    range:
      'Ameryka Północna. Główne liczby odbudowy to dolne 48 stanów USA. Alaski nie wpisywano do ESA w ten sam sposób.',
    story:
      'Strzelanie i DDT przerzedzały skorupy jaj, aż ptak niemal zniknął ze stanów kontynentalnych USA. Ochrona prawna, praca przy gniazdach i zakaz DDT w USA w 1972 odwróciły krach. Zdjęty z ESA w 2007; nadal chroniony ustawą o bieliku i orle przednim oraz ustawą o traktacie ptaków wędrownych.',
    when: 'USFWS: 417 znanych par lęgowych w dolnych 48 stanach w 1963 → 9789 par przy zdjęciu z listy w 2007 → około 316\u202f700 osobników i 71\u202f467 zajętych gniazd (dane 2018–2019). IUCN: Least Concern.',
    humanRole:
      'Strzelanie i DDT spowodowały krach. Zakaz DDT z 1972, praca ESA i ochrona gniazd go odwróciły.',
    sources:
      'Strona gatunku USFWS; USFWS Bald Eagle Population Size: 2020 Update; zasada zdjęcia z listy, Federal Register, 2007.',
  },
  'white-rhinoceros': {
    commonName: 'Nosorożec biały',
    hook: 'Południowe białe nosorożce sprowadzono sto lat temu do jednego schronienia w RPA; IUCN/TRAFFIC na koniec 2024 szacuje afrykańskie białe na około 15\u202f752 — Near Threatened, wciąż główny żywy zasób gatunku.',
    imageAlt: 'Południowy nosorożec biały z cielęciem na pastwisku; widać szeroką kwadratową wargę',
    what: 'Szerokopyski pasący się nosorożec sawanny. Dwa podgatunki: południowy (odzysk) i północny (funkcjonalnie wymarły na wolności — już na półce Endangered). Niemal wszystkie żywe białe nosorożce to podgatunek południowy (C. s. simum).',
    range:
      'Sawanna afrykańska. Południowe białe sprowadzono sto lat temu do jednego schronienia w RPA. Podgatunek północny nie jest bohaterem tej karty.',
    story:
      'Ochrona i przesiedlenia z Hluhluwe–iMfolozi odbudowały południowe liczby z maleńkiej resztki do dziesiątek tysięcy. To powrót półki Przetrwałe. To nie ta sama historia co krytycznie zagrożone nosorożce czarny, jawajski czy sumatrzański i nie resztka północnego białego.',
    when: 'Komunikat IUCN (7 sie 2025, za raportem AfRSG/TRAFFIC dla CITES): 15\u202f752 białych nosorożców w Afryce na koniec 2024 (spadek o 11,2% wobec 2023 — susza, spis i wstrząsy zarządzania po wcześniejszych zyskach). Podsumowania IRF nadal trzymają długi łuk: „mniej niż 100 na początku XX wieku → dziesiątki tysięcy”. Czerwona lista IUCN: Near Threatened.',
    humanRole:
      'Polowania zbiły podgatunek południowy do jednego schronienia. Ochrona i przesiedlenia odbudowały żywy zasób.',
    sources:
      'Czerwona lista IUCN (Ceratotherium simum, Near Threatened); komunikat IUCN, 7 sie 2025; International Rhino Foundation; raport przewodniczącego AfRSG w Pachyderm; plan zarządzania bioróżnorodnością RPA.',
  },
  'arabian-oryx': {
    commonName: 'Oryks arabski',
    hook: 'Na początku lat 70. uznany za wymarły na wolności, potem wrócił z hodowli; do oceny IUCN 2016 na wolności znów około 1220 (850 dorosłych) — pierwszy gatunek, który wrócił z Extinct in the Wild do Vulnerable.',
    imageAlt: 'Oryks arabski w pustynnych zaroślach rezerwatu Uruq Bani Ma’arid w Arabii Saudyjskiej',
    what: 'Biała pustynna antylopa z długimi, niemal prostymi rogami — najmniejszy Oryx, rodzimy dla pustyń i stepów Półwyspu Arabskiego.',
    range:
      'Pustynie i stepy Półwyspu Arabskiego. Wypuszczenia od 1980 wróciły zwierzęta do Omanu, Arabii Saudyjskiej, Izraela, ZEA, Jordanii i miejsc pokrewnych.',
    story:
      'Myślistwo zmotoryzowane opróżniło stada. Hodowla w niewoli i wypuszczenia od 1980 wróciły zwierzęta ze stad hodowlanych. Nadal zagrożony (siedlisko, nielegalne polowania, małe dzikie sumy) — ale udokumentowany powrót z Extinct in the Wild, nie CR bez ścieżki odzysku.',
    when: 'Na początku lat 70. uznany za wymarły na wolności. Karta faktów IUCN SSC Antelope Specialist Group (ocena 2016): około 1220 na wolności (850 dorosłych) i 6000–7000 w niewoli. Status: Vulnerable — pierwszy gatunek, który wrócił z Extinct in the Wild do Vulnerable. Wiadomość IUCN (2011) zapisała zejście z wyższej kategorii zagrożenia. Royal Society Open Science (2021) omawia genetykę reintrodukcji w Omanie.',
    humanRole:
      'Myślistwo zmotoryzowane opróżniło ostatnie dzikie stada. Hodowla w niewoli i wypuszczenia od 1980 wróciły gatunek.',
    sources:
      'Czerwona lista IUCN (Oryx leucoryx, Vulnerable); IUCN, „A grain of hope in the desert” (2011); karta faktów IUCN SSC Antelope Specialist Group; Royal Society Open Science, 2021.',
  },
  'lord-howe-island-stick-insect': {
    commonName: 'Straszyk z Lord Howe',
    hook: 'Uznany za wymarły na Lord Howe po szczurach w 1918 — maleńka dzika populacja trzyma się na Ball’s Pyramid.',
    imageAlt: 'Ciemny, ciężki straszyk z Lord Howe na otwartej dłoni',
    what: 'Straszyk z Lord Howe (Dryococelus australis), zwany też homarem drzewnym, to duży, nielotny owad patyczkowaty, niegdyś pospolity na wyspie Lord Howe. IUCN uznaje go za krytycznie zagrożonego według kryterium D — bardzo mała dzika populacja.',
    range:
      'Wyspa Lord Howe, aż czarne szczury przyszły z wrakiem SS Makambo w 1918. Dzika resztka żyje na Ball’s Pyramid, stosie skalnym około 23 km na południowy wschód. Istnieją też kolonie hodowlane jako ubezpieczenie.',
    story:
      'Po 1918 owad zniknął z Lord Howe i spisano go jako wymarły. W 2001 wspinacze znaleźli kilka zwierząt pod jednym krzewem na Ball’s Pyramid. Potem zaczęto hodowlę. Dziki stan nadal jest maleńki; przyczyną były szczury, nie klimat.',
    when: 'Krytycznie zagrożony teraz (IUCN CR D). Wymarły na samym Lord Howe; żyje na Ball’s Pyramid i w niewoli.',
    humanRole:
      'Przypadkowy najazd szczurów wymazał populację wyspy. Później ludzie znaleźli resztkę i trzymają stado hodowlane.',
    sources: 'Czerwona lista IUCN (Dryococelus australis, CR D).',
  },
  'queen-alexandras-birdwing': {
    commonName: 'Ornithoptera królowej Aleksandry',
    hook: 'Największy motyl świata — endemit Papui-Nowej Gwinei pod presją palmy olejowej, wyrębu i handlu.',
    imageAlt:
      'Rozpięty samiec motyla królowej Aleksandry, zielono-czarne skrzydła — okaz Natural History Museum',
    what: 'Ornithoptera królowej Aleksandry (Ornithoptera alexandrae) to największy motyl świata. Rozpiętość skrzydeł samicy może przekroczyć 25 cm. Endemit niewielkiej części Papui-Nowej Gwinei. IUCN: zagrożony.',
    range:
      'Nizinny las deszczowy prowincji Oro w Papui-Nowej Gwinei, gdzie nadal rośnie roślina pokarmowa gąsienicy (kokornak Pararistolochia). Innego kraju nie ma.',
    story:
      'Plantacje palmy olejowej, wyrąb i zbiór do handlu pocięły las, którego potrzebuje. Gatunek jest chroniony prawnie; trwała presja to zamiana lasu. Duża rozpiętość skrzydeł nie daje dużego zasięgu.',
    when: 'Zagrożony teraz. Endemit, a las wciąż ubywa.',
    humanRole: 'Zamiana nizinnego lasu i rynek kolekcjonerski sławnego motyla.',
    sources: 'Czerwona lista IUCN (Ornithoptera alexandrae, EN).',
  },
  monarch: {
    commonName: 'Danaus wędrowny',
    hook: 'W 2023 IUCN zmienił status podgatunku wędrownego z zagrożonego na narażony — zmiana modelu, nie odbudowa.',
    imageAlt: 'Danaus wędrowny z pomarańczowo-czarnymi skrzydłami na kwiecie',
    what: 'Danaus wędrowny (Danaus plexippus) to motyl związany z trojeścią. Północnoamerykański podgatunek wędrowny plexippus to sławny wielopokoleniowy migrant. W ocenie 2023-1 IUCN zmienił ten podgatunek z Endangered na Vulnerable. Przesunięcie to zmiana modelu oceny, nie dowód, że wędrówka wróciła do zdrowia. Postępowanie listingowe U.S. Fish and Wildlife Service wciąż trwa.',
    range:
      'Podgatunek wędrowny gniazduje na dużej części Ameryki Północnej i zimuje w Meksyku i Kalifornii. Inne, głównie niewędrowne, populacje żyją na wyspach i w tropikach amerykańskich. Ta karta jest o migrancie.',
    story:
      'Zimowe skupiska w Meksyku i Kalifornii skurczyły się pod koniec XX i na początku XXI wieku, gdy ginęła trojeść i las zimowy, a ekstremalna pogoda biła w noclegi. Obniżenie statusu IUCN w 2023 nie ogłosiło trasy zdrowej. Zmieniło sposób liczenia małej, wahającej się liczby. USFWS nie skończyła własnej decyzji.',
    when: 'Podgatunek wędrowny: IUCN Vulnerable (2023-1), wcześniej Endangered. Listing USFWS wciąż otwarty.',
    humanRole:
      'Utrata siedlisk, pestycydy i zmieniony klimat na wędrówce, która i tak zależała od kilku zimowych gajów.',
    sources:
      'Czerwona lista IUCN (Danaus plexippus plexippus, VU 2023-1; strona gatunku); strona USFWS o monarchu.',
  },
  'franklins-bumble-bee': {
    commonName: 'Trzmiel Franklina',
    hook: 'Trzmiel maleńkiego zasięgu Oregon–Kalifornia, który runął w latach 1990–2000.',
    imageAlt: 'Trzmiel Franklina na kwiecie, żółto-czarny — zdjęcie USDA',
    what: 'Trzmiel Franklina (Bombus franklini) to trzmiel o jednym z najmniejszych zasięgów w rodzaju Bombus — skrawek południowego Oregonu i północnej Kalifornii. IUCN: krytycznie zagrożony. Monitoring z lat 1990. i 2000. udokumentował załamanie.',
    range:
      'Krótki odcinek regionu Klamath-Siskiyou, historycznie od południowego Oregonu po północną Kalifornię. Nigdy nie był pszczołą kontynentalną.',
    story:
      'Dla specjalistów był lokalnie znany, potem w około dekadę stał się znikomo rzadki. Zwykli podejrzani to choroby z pszczół hodowlanych, utrata siedlisk i mały zasięg; ostatnich szeroko przyjętych stwierdzeń jest mało. Zasięg zawsze był krótkim skrawkiem Oregonu i Kalifornii — nie zastępstwem dla każdego ubywającego Bombus.',
    when: 'Krytycznie zagrożony teraz. Zasięg zawsze był maleńki; liczebność runęła niedawno.',
    humanRole:
      'Mały endemityczny zasięg plus to, co dołożyli ludzie — patogeny, farmy i zmieniony krajobraz.',
    sources: 'Czerwona lista IUCN (Bombus franklini, CR).',
  },
  'american-burying-beetle': {
    commonName: 'Grabarz amerykański',
    hook: 'Specjalista padliny z resztkowymi populacjami w USA, wpisany na listę Endangered Species Act.',
    imageAlt: 'Grabarz amerykański, pomarańczowo-czarny, na jasnym podłożu',
    what: 'Grabarz amerykański (Nicrophorus americanus) to specjalista padliny: imagines zakopują małe tusze kręgowców jako pokarm dla larw. Jest na liście amerykańskiej Endangered Species Act. Resztkowe populacje trwają w kilku stanach. Ta karta nie wymyśla globalnej oceny IUCN — w pakiecie nie ma sluga IUCN.',
    range:
      'Niegdyś duża część wschodnich i środkowych Stanów. Dziś rozproszone resztki (w tym Wielkie Równiny i Nowa Anglia) oraz miejsca reintrodukcji. To nie euroazjatycki grabarz.',
    story:
      'Gdy lasy i prerie zamieniono, a padliny ubyło albo stała się toksyczna, chrząszcz zniknął z większości dawnej mapy. Listing ESA, hodowla i wsiedlenia utrzymały kilka populacji w rejestrze. Odbudowa jest lokalna, nie przywrócony kontynent.',
    when: 'Lista federalna USA. Tylko populacje resztkowe i zarządzane.',
    humanRole: 'Zamiana krajobrazu i przerzedzona padlina; później prawo i wsiedlenia utrzymały resztkę.',
    sources: 'Strona gatunku U.S. Fish and Wildlife Service (Nicrophorus americanus).',
  },
  'hines-emerald': {
    commonName: 'Miedziopierś Hine’a',
    hook: 'Ważka wapiennych mokradeł Środkowego Zachodu USA — na liście federalnej, zależna od wód gruntowych.',
    imageAlt: 'Miedziopierś Hine’a z metalicznie zielonym tułowiem, siedzi',
    what: 'Miedziopierś Hine’a (Somatochlora hineana) to ważka wapiennych fen — mokradeł zasilanych wodą gruntową na wapieniu lub dolomicie — na Środkowym Zachodzie USA. Jest na federalnej liście Endangered Species Act. W pakiecie nie ma globalnego sluga IUCN; karta go nie wymyśla.',
    range:
      'Rozproszone fen Środkowego Zachodu, historycznie części Illinois, Wisconsin, Michigan, Missouri i stanów sąsiednich. Larwy potrzebują chłodnej, mineralnej wody tych mokradeł.',
    story:
      'Fen osuszano, eksploatowano kamieniołomami albo odcinano od wód gruntowych. Ważka, która nie użyje stawu gospodarskiego, znika razem z fen. Listing i ochrona mokradeł to pozostałe narzędzia. To nie ważka każdego powiatowego stawu.',
    when: 'Lista federalna USA. Przywiązana do rzadkiego typu mokradła.',
    humanRole: 'Odwodnienie, kamieniołomy i zabudowa wapiennych fen — jedynego siedliska gatunku.',
    sources: 'Strona gatunku U.S. Fish and Wildlife Service (Somatochlora hineana).',
  },
  'rusty-patched-bumble-bee': {
    commonName: 'Trzmiel rdzawoplamy',
    hook: 'Kiedyś pospolity na wschodzie Stanów Zjednoczonych i na południu Kanady; po ostrym załamaniu na początku lat 2000. wpisany na listę Endangered Species Act w 2017; współczesne stwierdzenia obejmują tylko około 13 stanów USA i jedną prowincję kanadyjską.',
    imageAlt: 'Trzmiel rdzawoplamy na fioletowej bergamotce, z rdzawą plamą na odwłoku',
    what: 'Jeden z około 21 wschodnich gatunków trzmieli USA — społeczna pszczoła magazynująca pyłek, której robotnice mają charakterystyczną rdzawą plamę na odwłoku (stąd nazwa). To Bombus affinis, nie trzmiel Franklina (Bombus franklini).',
    range:
      'Historyczny zasięg od Georgii na północ do południowego Quebecu i Ontario i na zachód ku Dakotom. Od około 2000 roku przegląd U.S. Fish and Wildlife Service potwierdza go w znacznie mniejszej liczbie jednostek: około 13 stanów USA i jedna prowincja kanadyjska.',
    story:
      'Patogeny, pestycydy, utrata siedlisk, konkurencja z pszczołami hodowlanymi i stres klimatyczny złożyły się na załamanie zasięgu. Trzmiel Franklina to inny gatunek o maleńkim zasięgu Oregon–Kalifornia. Ten trzmiel był kiedyś pospolity na wschodniej połowie kontynentu.',
    when: 'U.S. Fish and Wildlife Service: federalnie Endangered (2017); plan odbudowy sfinalizowany w 2021. Współczesne stwierdzenia obejmują około 13 stanów USA i jedną prowincję kanadyjską.',
    humanRole:
      'Pestycydy, patogeny od pszczół hodowlanych, utracone siedliska i zmieniony klimat ścięły kiedyś pospolitego wschodniego trzmiela do ułamka mapy. Wpis na listę Endangered Species Act w 2017 i plan odbudowy z 2021 to odpowiedź federalna.',
    sources: 'U.S. Fish and Wildlife Service — trzmiel rdzawoplamy (Bombus affinis).',
  },
  'european-stag-beetle': {
    commonName: 'Jelonek rogacz',
    hook: 'Największy chrząszcz Europy i gatunek flagowy dyrektywy siedliskowej dla gnijącego drewna liściastego — ocena IUCN 2023 dla Europy / EU27: Near Threatened, bo miejsca rozrodu wciąż się kurczą, nawet gdy przybywa stwierdzeń z nauki obywatelskiej.',
    imageAlt: 'Samiec jelonka rogacza z dużymi żuwaczkami jak poroże, na zielonym liściu',
    what: 'Duży jelonek (Lucanus cervus), którego larwy spędzają lata w wilgotnym, rozkładającym się drewnie liściastym — pniakach, zagrzebanych korzeniach, drzewach sędziwych. Samce noszą słynne „poroże”; samice go nie mają. To specjalista martwego drewna, nie grabarz.',
    range:
      'Europa. Rozród wymaga ciągłości wilgotnego, rozkładającego się drewna liściastego. Owady dorosłe wędrują, więc obserwacja to nie to samo co pniak lęgowy.',
    story:
      'Rosnące stwierdzenia z nauki obywatelskiej nie oznaczają więcej miejsc rozrodu — wiele obserwacji to wędrowcy. Czerwona lista za właściwy sygnał uznaje postępującą utratę ciągłości martwego drewna. Sprawozdania z art. 17 dyrektywy siedliskowej w kolejnych cyklach pokazywały niekorzystny stan w znacznej części państw członkowskich.',
    when: 'IUCN Europa / EU27 (2023): Near Threatened według B2b(ii,iii). Rozwój larwy trwa zwykle 4–5 lat, więc luka w martwym drewnie boli dłużej niż dekadę.',
    humanRole:
      'Ludzie usuwają pniaki, wycinają sędziwe drzewa liściaste i przerywają ciągłość gnijącego drewna, którego potrzebują larwy. Chrząszcz jest gatunkiem flagowym dyrektywy siedliskowej dla tego drewna.',
    sources:
      'Czerwona lista IUCN (Lucanus cervus, Europa / EU27, Near Threatened, 2023); EUNIS; JNCC, art. 17 dyrektywy siedliskowej UK, S1083 (2019).',
  },
  'hermit-beetle': {
    commonName: 'Pachnica dębowa',
    hook: 'Żuk, który prawie całe życie spędza w próchnie starych dziuplastych drzew Europy — IUCN (2023) uznaje go za Near Threatened, bo drzewa sędziwe wciąż giną, a następne pokolenie dziupli spóźnione jest o dekady.',
    imageAlt: 'Ciemnobrązowa pachnica dębowa na szorstkiej korze starego drzewa',
    what: 'Obligatoryjny żuk saproksyliczny (Osmoderma eremita) dziuplastych drzew liściastych. Owady dorosłe rzadko latają daleko; populacje siedzą w jednym drzewie albo w maleńkiej grupie drzew przez pokolenia.',
    range:
      'Europa i EU27. Zasięg występowania jest duży, ale obszar zajmowany przez miejsca rozrodu szacuje się tylko na około 2000–2500 km² i miejsca te są silnie pofragmentowane.',
    story:
      'Larwy jelonka potrzebują objętości wilgotnego martwego drewna. Pachnica potrzebuje dziupli z próchnem, a następne pokolenie dziupli spóźnione jest o dekady wobec drzew wycinanych teraz. Ponieważ owady dorosłe rzadko latają daleko, luka między drzewami sędziwymi może izolować populację przez pokolenia.',
    when: 'IUCN (2023): Near Threatened, B2ab(ii,iii,v). Stare dziuplaste drzewa stale ubywają, a odtworzenie dziupli trwa bardzo długo.',
    humanRole:
      'Wycinanie sędziwych dziuplastych drzew i brak następnego pokolenia dziupli zabiera jedyne miejsca, w których ten chrząszcz może się rozmnażać.',
    sources: 'Czerwona lista IUCN (Osmoderma eremita, Near Threatened, 2023).',
  },
  'salt-creek-tiger-beetle': {
    commonName: 'Trzyszcz solniskowy',
    hook: 'Trzyszcz endemiczny dla słonych równin wschodniej Nebraski — po osuszeniu mokradeł wokół Lincoln intensywne liczenia od 1991 notowały zaledwie 153 osobniki dorosłe (2005) i szczyt 777 (2002), wszystko na garstce pozostałych miejsc.',
    imageAlt: 'Trzyszcz solniskowy, metalicznie zielonobrązowy, na jasnym słonym mule',
    what: 'Mały, szybki drapieżny chrząszcz nagiego słonego mułu wzdłuż Salt Creek i Little Salt Creek. Larwy kopią norki w solnej skorupie; owady dorosłe polują na otwartych równinach. Taksonomia czasem używa Ellipsoptera nevadica lincolniana; strona U.S. Fish and Wildlife Service nadal prowadzi Cicindela nevadica lincolniana.',
    range:
      'Słone mokradła wschodniej Nebraski, na pozostałych solniskach wzdłuż Salt Creek i Little Salt Creek na północ od Lincoln. To nie grabarz i nie szeroko rozpowszechniony trzyszcz.',
    story:
      'Wały, uregulowanie koryta i rozrost Lincoln wymazały większość słonego mokradła, zostawiając jedną kruchą metapopulację. Synteza liczeń Nebraska Game and Parks: sześć populacji w 1991, a trzy z nich później zniknęły. Każde niedawne liczenie pochodzi z garstki pozostałych miejsc.',
    when: 'Endangered na mocy amerykańskiej Endangered Species Act. Intensywne liczenia od 1991 obejmują szczyt 777 osobników dorosłych (2002), minimum 153 (2005) i 374 naliczone w 2012. Strona gatunku Służby i podpisany plan odbudowy dokumentują wpis i zarys odbudowy.',
    humanRole:
      'Osuszenie, wały, uregulowanie koryta i rozrost miasta wokół Lincoln zabrały większość słonych równin, na których chrząszcz poluje i kopie norki.',
    sources:
      'Strona gatunku U.S. Fish and Wildlife Service; Nebraska Game and Parks; plan odbudowy USFWS dla trzyszcza solniskowego; wizualne szacunki populacji University of Nebraska–Lincoln.',
  },
  wetapunga: {
    commonName: 'Wetapunga',
    hook: 'Największa weta Nowej Zelandii — kiedyś ściśnięta do Hauturu-o-Toi / Little Barrier, potem hodowana i przenoszona: Auckland Zoo i partnerzy wypuścili ponad 5000 zwierząt na wyspy bez drapieżników, a NZTCS ocenia gatunek jako Nationally Increasing (nadal Threatened / zależny od ochrony).',
    imageAlt: 'Wetapunga, duża nielotna weta, na zielonym liściu',
    what: 'Deinacrida heteracantha — olbrzymi nielotny prostoskrzydły, wētāpunga. Dorosłe samice ważą średnio około 40 g; najcięższa odnotowana ciężarna samica sięgnęła około 71 g. Nocą zjada liście i przenosi też nasiona w odchodach bogatych w składniki pokarmowe.',
    range:
      'Kiedyś ściśnięta do wyspy Hauturu-o-Toi / Little Barrier. Zwierzęta z hodowli żyją też na innych wyspach bez drapieżników, w tym Motuora, Tiritiri Matangi i miejscach w Bay of Islands.',
    story:
      'Po usunięciu szczura pacyficznego z Little Barrier Department of Conservation i Auckland Zoo zbudowały linie hodowlane i przeniosły zwierzęta na Motuora, Tiritiri Matangi, miejsca w Bay of Islands i inne wyspy bez szkodników. To zarządzany powrót, który nadal zależy od siedliska bez drapieżników.',
    when: 'Nowozelandzki system klasyfikacji zagrożeń (NZTCS): Nationally Increasing, nadal pod parasolem Threatened i nadal zależny od ochrony. Populacja rzędu 1000–5000 osobników dorosłych, na kilku wyspach bez drapieżników; ocena czyta trend jako wzrost o ponad 10 procent, a notatki podają też ponad 30 procent. Auckland Zoo (2020): ponad 5000 wypuszczonych; wypuszczenie w Bay of Islands otworzyło wyspy 6–8 w ich zestawie wysp.',
    humanRole:
      'Wprowadzone drapieżniki ścięły wetę do jednej wyspy. Usunięcie szczurów, hodowla i wsiedlenia na wyspy przez Department of Conservation i Auckland Zoo przywróciły zwierzęta — tylko tam, gdzie drapieżniki zostają poza wyspą.',
    sources:
      'Ocena NZTCS (Deinacrida heteracantha); strona DOC Wetapunga i wytyczne translokacji wielkich wet; Auckland Zoo, 2020.',
  },
  cattle: {
    commonName: 'Bydło',
    hook: 'Główny wołowy mięsa i mleka świata — bydło taurynowe i zebu, które trzymają ludzie, nie wymarły tur.',
    imageAlt: 'Bydło herefordzkie na pastwisku',
    what: 'Bydło to udomowione wołowate trzymane dla mleka, mięsa, skór i uciągu. Żywe bydło należy do linii taurynowej (Bos taurus) i zebu (Bos indicus). To nie wymarły tur (Bos primigenius) z półki wymarłych i nie bawół sawannowy Afryki.',
    range:
      'Na wszystkich zamieszkanych kontynentach. Zagęszczenie idzie za pastwiskiem, paszą i rynkiem mleka. FAO mapuje globalny rozkład bydła jako inwentarza, nie jako dzikiego gatunku.',
    story:
      'Ludzie udomowili bydło od tura w holocenie i poprowadzili stada z uprawą i handlem. Dziś to zarządzany system żywności: rasy, opasy i stada pasterskie. Dzikie krewniaki i tur to inne karty.',
    when: 'Żywy udomowiony gatunek, utrzymywany przez ludzi. Nie ocena IUCN dzikiego gatunku.',
    humanRole: 'Zrobiliśmy zwierzę, roznieśliśmy je i prowadzimy stada, które karmią dużą część świata.',
    sources: 'FAO Livestock Systems — bydło.',
  },
  chicken: {
    commonName: 'Kura',
    hook: 'Najliczniejszy inwentarz domowy — kur bankiwa zamieniony w domyślną farmę świata.',
    imageAlt: 'Kura domowa stoi w suchej trawie',
    what: 'Kura (Gallus gallus domesticus) to udomowiona forma kura bankiwa. Jest najliczniejszym inwentarzem: żywych kur jest więcej niż jakiegokolwiek innego ptaka czy ssaka hodowlanego. Ta karta dotyczy ptaka trzymanego, nie dzikiego Gallus.',
    range:
      'Podwórka, stodoły i hale przemysłowe na wszystkich zamieszkanych kontynentach. FAO mapuje globalny rozkład kur jako inwentarza.',
    story:
      'Udomowienie w Azji dało ptaka, którego można wozić. Przemysłowa hodowla zrobiła potem linie mięsne i nieśne o krótkim, gęstym życiu. Stada wiejskie zostają. Dzikie kury bankiwa to inna, dużo mniejsza historia.',
    when: 'Żywy udomowiony gatunek i najliczniejsze zwierzę gospodarskie.',
    humanRole: 'Wyhodowaliśmy, zamknęliśmy i liczymy je jako system żywności — nie jako dziką przyrodę.',
    sources: 'FAO Livestock Systems — kury.',
  },
  sheep: {
    commonName: 'Owca',
    hook: 'Karta małego przeżuwacza na tej półce — wełna, mleko i mięso. Osobnej kozy nie ma.',
    imageAlt: 'Owca domowa w trawie, twarzą do kamery',
    what: 'Owca (Ovis aries) to udomowiony mały przeżuwacz trzymany dla wełny, mięsa i mleka. Na półce jest jedna karta małego przeżuwacza. Kozy nie dodajemy.',
    range:
      'Pastwiska od suchego stepu po wilgotne wzgórza umiarkowane i systemy paszowe obok. FAO mapuje globalny rozkład owiec jako inwentarza.',
    story:
      'Ludzie udomowili owcę w neolitycznym Bliskim Wschodzie i przeprowadzili ją przez kontynenty. Rasy teraz służą wełnie, mleku albo mięsu. Dzikie muflony i inne Ovis to nie ta karta.',
    when: 'Żywy udomowiony gatunek. To owca trzymana, nie dziki koziorożec.',
    humanRole: 'Wyhodowaliśmy i przemieściliśmy je jako włókno i jedzenie; krajobraz, który spasają, jest nasz.',
    sources: 'FAO Livestock Systems — owce.',
  },
  pig: {
    commonName: 'Świnia',
    hook: 'Świnia trzymana — Sus domesticus — osobno od dzika na półce Przetrwałe.',
    imageAlt: 'Świnia domowa na podwórzu fermy, różowa i ciężka',
    what: 'Świnia (Sus domesticus) to świnia domowa trzymana dla mięsa. To inna karta niż dzik (Sus scrofa) na półce Przetrwałe. Zdziczałe świnie są problemem zarządzania w wielu krajach; to nie ten wpis inwentarza.',
    range:
      'Fermy na świecie — od wiejskich chlewów po hale przemysłowe. FAO mapuje globalny rozkład świń jako inwentarza.',
    story:
      'Świnie udomawiano z dzika więcej niż raz. Dziś większość świń mięsnych to linie komercyjne. Świnie wiejskie i rasy lokalne zostają. Dzikie przodki mają własną półkę.',
    when: 'Żywy udomowiony gatunek. Nie druga karta dzika.',
    humanRole: 'Trzymamy je jako jedzenie; stworzyliśmy też populacje zdziczałe tam, gdzie je wypuszczono albo uciekły.',
    sources: 'FAO Livestock Systems — świnie.',
  },
  'water-buffalo': {
    commonName: 'Bawół wodny',
    hook: 'Około 15 procent światowego mleka — a w Indiach i Pakistanie mleka bawolego jest więcej niż krowiego.',
    imageAlt: 'Domowy byk bawoli koło Mehsany, Gujarat, Indie',
    what: 'Bawół wodny (Bubalus bubalis) to udomowiony bawół azjatycki, trzymany dla mleka, mięsa i uciągu. FAO liczy bawoły na około 15 procent światowego mleka; w Indiach i Pakistanie mleka bawolego jest więcej niż krowiego. To nie bawół sawannowy Afryki (Syncerus caffer).',
    range:
      'Południowa i południowo-wschodnia Azja trzyma większość stada; mniejsze populacje są w śródziemnomorzu, na Kaukazie, w Ameryce Południowej i dalej. FAO mapuje bawoły jako inwentarz.',
    story:
      'Ludzie udomowili bawoła azjatyckiego i zbudowali wokół niego systemy ryżu i mleka. Typy rzeczne i bagienne się różnią. Dzikie bawoły azjatyckie (Bubalus arnee) to zagrożony krewny, nie to trzymane zwierzę i nie wołowate Afryki.',
    when: 'Żywy udomowiony gatunek i ważny gatunek mleczny Azji Południowej.',
    humanRole: 'Trzymamy bawoły jako zwierzęta mleczne i pociągowe. Karta dotyczy gatunku trzymanego.',
    sources: 'Strona FAO o mleku bawolim; FAO Livestock Systems — bawoły.',
  },
  horse: {
    commonName: 'Koń',
    hook: 'Konie domowe rozeszły się z stepów zachodniej Eurazji — Librado et al., Nature 2021, nie starsza linia „ok. 4000 p.n.e.”.',
    imageAlt: 'Biały koń kamargijski w trawie',
    what: 'Koń (Equus ferus caballus) to koń domowy, na którym jeżdżą, którego zaprzęgają i którego trzymają. Praca nad dawnym DNA Librado i współpracowników (Nature, 2021) kładzie powstanie i rozprzestrzenienie współczesnej linii domowej (DOM2) na stepy zachodniej Eurazji, z ekspansją około 2200–2000 p.n.e. — nie starszą datę w stylu FAO około 4000 p.n.e. i nie wcześniejsze konie Botai w Kazachstanie, inną linię.',
    range:
      'Trzymane na świecie. FAO mapuje konie jako inwentarz. Dzikie konie i wymarły tarpan to inne historie; ta karta dotyczy zwierzęcia trzymanego.',
    story:
      'Konie DOM2 zastąpiły wcześniejsze linie, rozchodząc się z ludźmi. Ta data to wynik genetyczny, nie mit pierwszego jeźdźca w 4000 p.n.e. Stada robocze, sportowe i zdziczałe wszystkie pochodzą z tej trzymanej linii.',
    when: 'Żywy udomowiony gatunek. Współczesna linia: stepy zachodniej Eurazji, ~2200–2000 p.n.e. (Librado et al. 2021).',
    humanRole: 'Wyhodowaliśmy i przemieściliśmy je jako transport i pracę; data żywej linii to artykuł z 2021, nie folklor.',
    sources: 'FAO Livestock Systems — konie; Librado et al., Nature, 2021 (doi:10.1038/s41586-021-04018-9).',
  },
  dog: {
    commonName: 'Pies',
    hook: 'Pierwsze zwierzę udomowione — odrębne od dzisiejszych wilków, z co najmniej pięcioma liniami około 11 tysięcy lat temu.',
    imageAlt: 'Dwa czarne labradory z obrożami w suchej trawie — wyraźnie psy, nie wilki',
    what: 'Pies (Canis familiaris) to pierwsze zwierzę, które ludzie udomowili. Bergström i współpracownicy (Science, 2020) pokazują, że psy były już genetycznie odrębne od dzisiejszych wilków i że około 11 tysięcy lat temu istniało co najmniej pięć linii psów. To nie druga karta wilka szarego.',
    range:
      'Tam, gdzie żyją ludzie. Psy wioskowe, linie użytkowe i rasowe to jeden gatunek domowy. Wilk szary (Canis lupus) zostaje dzikim psowatym na półce Przetrwałe.',
    story:
      'Psy weszły do obozowisk w późnym plejstocenie. We wczesnym holocenie były już zestawem linii, nie niedawnym odgałęzieniem dzisiejszych wilków. Późniejsza hodowla zrobiła współczesne typy. Zakazany artykuł Nature nie jest tu źródłem; źródłem jest Science 2020.',
    when: 'Najstarszy udomowiony gatunek. Odrębny od dzisiejszych wilków w holocenie; ≥5 linii ok. 11 ka (Bergström et al. 2020).',
    humanRole: 'Zrobiliśmy pierwsze trzymane zwierzę — towarzysza, myśliwego i stróża — nie drugi wpis wilka.',
    sources: 'Bergström et al., Science, 2020 (PMC7116352; doi:10.1126/science.aba9572).',
  },
  camelids: {
    commonName: 'Wielbłądowate',
    hook: 'Jedna karta na wielbłąda, lamę i alpakę — Międzynarodowy Rok Wielbłądowatych FAO 2024, nie cztery płytki.',
    imageAlt: 'Dromader z profilu — przedstawiciel wielbłądowatych, które trzymają ludzie',
    what: 'Wielbłądowate oznaczają tu te, które trzymają ludzie: dromader i baktrian (Camelus), lama (Lama glama) i alpaka (Vicugna pacos). FAO ogłosiła 2024 Międzynarodowym Rokiem Wielbłądowatych. To jedna karta, nie wielbłąd plus lama plus alpaka plus wikunia.',
    range:
      'Wielbłądy w suchej Azji i Afryce (i teraz w Australii); lamy i alpaki w Andach, ze stadami eksportowymi gdzie indziej. Dzikie wikunie i gwanako to krewniacy, nie dodatkowe płytki na tej półce.',
    story:
      'Ludzie udomowili wielbłądy Starego Świata i andyjskie wielbłądowate jako juczne, wełniste, mleczne i mięsne zwierzęta suchych i wysokich krajów. Rok FAO 2024 prosił rządy, by traktować te stada jako system żywności i kultury, nie ciekawostkę. Jedna karta encyklopedyczna wystarczy.',
    when: 'Żywe udomowione gatunki. Międzynarodowy Rok Wielbłądowatych FAO, 2024.',
    humanRole: 'Trzymamy wielbłądy, lamy i alpaki jako zwierzęta robocze i wełniste suchych i górskich ziem.',
    sources: 'Międzynarodowy Rok Wielbłądowatych FAO 2024.',
  },
};
