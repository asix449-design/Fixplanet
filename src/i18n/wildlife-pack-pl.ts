import type { SpeciesCopy } from '../data/wildlife';
import { cite } from '../data/sources';
import { domesticatesPl } from './wildlife-domesticates';

const censusPdf = 'https://www.miteco.gob.es/content/dam/miteco/es/biodiversidad/temas/inventarios-nacionales/lince/censolinceiberico2025.pdf';

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
    hook: 'Główne bydło mięsne i mleczne świata: bydło taurynowe i zebu, które ludzie trzymają dla mleka, mięsa, skór i uciągu.',
    imageAlt: 'Bydło herefordzkie na pastwisku',
    photoCredit:
      'Zdjęcie: Keith Weller, Departament Rolnictwa Stanów Zjednoczonych, Wikimedia Commons',
    licenseLabel: 'domena publiczna',
    gridSource: {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, bydło',
      url: 'https://www.fao.org/livestock-systems/global-distributions/cattle/en/',
    },
    what: 'Bydło to udomowione wołowate trzymane dla mleka, mięsa, skór i uciągu. Żywe bydło należy do linii taurynowej (Bos taurus) i zebu (Bos indicus). Ludzie wyhodowali je z tura (Bos primigenius) w holocenie.',
    range:
      'Na wszystkich zamieszkanych kontynentach. Zagęszczenie idzie za pastwiskiem, paszą i rynkiem mleka. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa mapuje globalny rozkład bydła jako inwentarza.',
    story:
      'Ludzie udomowili bydło od tura w holocenie i poprowadzili stada z uprawą i handlem. Dziś to zarządzany system żywności: rasy, opasy i stada pasterskie.',
    when: 'Żywy udomowiony gatunek, utrzymywany przez ludzi na świecie.',
    humanRole: 'Zrobiliśmy zwierzę, roznieśliśmy je i prowadzimy stada, które karmią dużą część świata.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, bydło (Livestock Systems: Cattle)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/cattle/en/',
      },
    ],
  },
  chicken: {
    commonName: 'Kura',
    hook: 'Najliczniejszy inwentarz domowy: kur bankiwa, który stał się podstawowym ptakiem ferm na świecie.',
    imageAlt: 'Kura domowa stoi w suchej trawie',
    photoCredit: 'Zdjęcie: Susulyka, Wikimedia Commons, licencja',
    gridSource: {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, kury',
      url: 'https://www.fao.org/livestock-systems/global-distributions/chickens/en/',
    },
    what: 'Kura (Gallus gallus domesticus) to udomowiona forma kura bankiwa. Jest najliczniejszym inwentarzem: żywych kur jest więcej niż jakiegokolwiek innego ptaka czy ssaka hodowlanego. Ludzie trzymają tego ptaka dla mięsa i jaj.',
    range:
      'Podwórka, stodoły i hale przemysłowe na wszystkich zamieszkanych kontynentach. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa mapuje globalny rozkład kur jako inwentarza.',
    story:
      'Udomowienie w Azji dało ptaka, którego można wozić. Przemysłowa hodowla zrobiła potem linie mięsne i nieśne o krótkim, gęstym życiu. Stada wiejskie zostają obok hal przemysłowych.',
    when: 'Żywy udomowiony gatunek i najliczniejsze zwierzę gospodarskie.',
    humanRole: 'Wyhodowaliśmy, zamknęliśmy i liczymy je jako system żywności z mięsa i jaj.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, kury (Livestock Systems: Chickens)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/chickens/en/',
      },
    ],
  },
  sheep: {
    commonName: 'Owca',
    hook: 'Owce to zwierzęta pastwiskowe hodowane głównie dla wełny, mięsa, mleka i skór, w rasach przystosowanych do miejsc od zimnych, wilgotnych wyżyn północnej Europy po suche tereny Afryki, Azji i Australazji.',
    imageAlt: 'Owca domowa w trawie, twarzą do kamery',
    photoCredit: 'Zdjęcie: T.Voekler, Wikimedia Commons, licencja',
    gridSource: {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, owce',
      url: 'https://www.fao.org/livestock-systems/global-distributions/sheep/en/',
    },
    what: 'Owca (Ovis aries) to udomowiony mały przeżuwacz trzymany dla wełny, mięsa i mleka.',
    range:
      'Pastwiska od suchego stepu po wilgotne wzgórza umiarkowane i systemy paszowe obok. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa mapuje globalny rozkład owiec jako inwentarza.',
    story:
      'Ludzie udomowili owcę w neolitycznym Bliskim Wschodzie i przeprowadzili ją przez kontynenty. Rasy teraz służą wełnie, mleku albo mięsu.',
    when: 'Żywy udomowiony gatunek, hodowany dla wełny, mięsa i mleka.',
    humanRole: 'Wyhodowaliśmy i przemieściliśmy je jako włókno i jedzenie; krajobraz, który spasają, jest nasz.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, owce (Livestock Systems: Sheep)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/sheep/en/',
      },
    ],
  },
  pig: {
    commonName: 'Świnia',
    hook: 'Świnia domowa, Sus domesticus, hodowana dla mięsa na fermach od wiejskich chlewów po hale przemysłowe.',
    imageAlt: 'Świnia domowa na podwórzu fermy, różowa i ciężka',
    photoCredit: 'Zdjęcie: Gzen92, Wikimedia Commons, licencja',
    gridSource: {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, świnie',
      url: 'https://www.fao.org/livestock-systems/global-distributions/pigs/en/',
    },
    what: 'Świnia (Sus domesticus) to świnia domowa trzymana dla mięsa. Ludzie udomowili ją z dzika więcej niż raz, a dziś większość świń mięsnych to linie komercyjne. Świnie wiejskie i rasy lokalne zostają. Zwierzęta wypuszczone i zbiegłe utworzyły populacje zdziczałe w wielu krajach.',
    range:
      'Fermy na świecie, od wiejskich chlewów po hale przemysłowe. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa mapuje globalny rozkład świń jako inwentarza.',
    story:
      'Świnie udomawiano z dzika więcej niż raz. Dziś większość świń mięsnych to linie komercyjne. Świnie wiejskie i rasy lokalne zostają, a zwierzęta wypuszczone i zbiegłe utworzyły populacje zdziczałe w wielu krajach.',
    when: 'Żywy udomowiony gatunek, hodowany dla mięsa.',
    humanRole:
      'Trzymamy je jako jedzenie, a zwierzęta wypuszczone i zbiegłe utworzyły populacje zdziczałe w wielu krajach.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, świnie (Livestock Systems: Pigs)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/pigs/en/',
      },
    ],
  },
  'water-buffalo': {
    commonName: 'Bawół wodny',
    hook: 'Około 15 procent światowego mleka — a w Indiach i Pakistanie mleka bawolego jest więcej niż krowiego.',
    imageAlt: 'Domowy byk bawoli koło Mehsany, Gujarat, Indie',
    photoCredit: 'Zdjęcie: Yann Forget, Wikimedia Commons, licencja',
    gridSource: {
      label: 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: mleko bawole',
      url: 'https://www.fao.org/dairy-production-products/dairy/buffaloes/en',
    },
    what: 'Bawół wodny (Bubalus bubalis) to udomowiony bawół azjatycki, trzymany dla mleka, mięsa i uciągu. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa liczy bawoły na około 15 procent światowego mleka; w Indiach i Pakistanie mleka bawolego jest więcej niż krowiego.',
    range:
      'Południowa i południowo-wschodnia Azja trzyma większość stada; mniejsze populacje są w basenie Morza Śródziemnego, na Kaukazie, w Ameryce Południowej i dalej. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa mapuje bawoły jako inwentarz.',
    story:
      'Ludzie udomowili bawoła azjatyckiego i zbudowali wokół niego systemy ryżu i mleka. Typy rzeczne i bagienne różnią się mlekiem, uciągiem i mokradłami, w których żyją.',
    when: 'Żywy udomowiony gatunek i ważny gatunek mleczny Azji Południowej.',
    humanRole:
      'Trzymamy bawoły jako zwierzęta mleczne i pociągowe w Azji Południowej i w mniejszych stadach gdzie indziej.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: mleko bawole (Buffalo milk)',
        url: 'https://www.fao.org/dairy-production-products/dairy/buffaloes/en',
      },
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, bawoły (Livestock Systems: Buffaloes)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/buffaloes/en/',
      },
    ],
  },
  horse: {
    commonName: 'Koń',
    hook: 'Konie domowe rozeszły się ze stepów zachodniej Eurazji około 2200–2000 p.n.e., jak pokazali Librado i współpracownicy w czasopiśmie Nature w 2021 roku.',
    imageAlt: 'Biały koń kamargijski w trawie',
    photoCredit: 'Zdjęcie: TwoWings, Wikimedia Commons',
    licenseLabel: 'domena publiczna',
    gridSource: {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, konie',
      url: 'https://www.fao.org/livestock-systems/global-distributions/horses/en/',
    },
    what: 'Koń (Equus ferus caballus) to koń domowy, na którym jeżdżą, którego zaprzęgają i którego trzymają. Praca nad dawnym materiałem genetycznym Librado i współpracowników (czasopismo Nature, 2021) kładzie powstanie i rozprzestrzenienie współczesnej linii domowej na stepy zachodniej Eurazji, z ekspansją około 2200–2000 p.n.e. Konie z Botai w Kazachstanie należą do innej linii.',
    range:
      'Trzymane na świecie. Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa mapuje konie jako inwentarz. Stada robocze, sportowe i zdziczałe żyją na wszystkich zamieszkanych kontynentach.',
    story:
      'Współczesna linia domowa zastąpiła wcześniejsze linie, rozchodząc się z ludźmi. Ta data to wynik genetyczny badania z 2021 roku. Stada robocze, sportowe i zdziczałe pochodzą z tej trzymanej linii.',
    when: 'Żywy udomowiony gatunek. Współczesna linia: stepy zachodniej Eurazji, około 2200–2000 p.n.e. (Librado i in., 2021).',
    humanRole:
      'Wyhodowaliśmy i przemieściliśmy je jako transport i pracę. Data żywej linii pochodzi z badania genetycznego z 2021 roku.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: systemy hodowli zwierząt, konie (Livestock Systems: Horses)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/horses/en/',
      },
      {
        label:
          'Librado i in., czasopismo Nature, 2021 — konie stepów zachodniej Eurazji (The origins and spread of domestic horses from the Western Eurasian steppes; doi:10.1038/s41586-021-04018-9)',
        url: 'https://doi.org/10.1038/s41586-021-04018-9',
      },
    ],
  },
  dog: {
    commonName: 'Pies',
    hook: 'Pierwsze zwierzę udomowione, już genetycznie odrębne od dzisiejszych wilków, z co najmniej pięcioma liniami około 11 tysięcy lat temu.',
    imageAlt: 'Dwa czarne labradory z obrożami w suchej trawie',
    photoCredit: 'Zdjęcie: Marco Ponepal, Wikimedia Commons, licencja',
    gridSource: {
      label:
        'Bergström i in., Science, 2020 — pochodzenie prehistorycznych psów, pełny tekst w PubMed Central',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7116352/',
    },
    what: 'Pies (Canis familiaris) to pierwsze zwierzę, które ludzie udomowili. Bergström i współpracownicy (czasopismo Science, 2020) pokazują, że psy były już genetycznie odrębne od dzisiejszych wilków i że około 11 tysięcy lat temu istniało co najmniej pięć linii psów.',
    range: 'Tam, gdzie żyją ludzie. Psy wioskowe, linie użytkowe i rasowe to jeden gatunek domowy.',
    story:
      'Psy weszły do obozowisk w późnym plejstocenie. We wczesnym holocenie były już zestawem linii, genetycznie odrębnym od dzisiejszych wilków. Późniejsza hodowla zrobiła współczesne typy.',
    when: 'Najstarszy udomowiony gatunek. Odrębny od dzisiejszych wilków w holocenie; co najmniej pięć linii około 11 tysięcy lat temu (Bergström i in., 2020).',
    humanRole: 'Zrobiliśmy pierwsze trzymane zwierzę: towarzysza, myśliwego i stróża.',
    sources: '',
    sourcesList: [
      {
        label:
          'Bergström i in.: pochodzenie prehistorycznych psów (Origins and genetic legacy of prehistoric dogs), czasopismo Science, 2020, pełny tekst w PubMed Central',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7116352/',
      },
      {
        label: 'Bergström i in., czasopismo Science, 2020 (doi:10.1126/science.aba9572)',
        url: 'https://doi.org/10.1126/science.aba9572',
      },
    ],
  },
  camelids: {
    commonName: 'Wielbłądowate',
    hook: 'Ludzie trzymają dromadery, baktriany, lamy i alpaki do transportu, włókna, mleka i mięsa, a Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa ogłosiła rok 2024 Międzynarodowym Rokiem Wielbłądowatych.',
    imageAlt: 'Dromader z profilu',
    photoCredit: 'Zdjęcie: Hans Hillewaert, Wikimedia Commons, licencja',
    gridSource: {
      label:
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Międzynarodowy Rok Wielbłądowatych, 2024',
      url: 'https://www.fao.org/camelids-2024/en',
    },
    what: 'Wielbłądowate, które trzymają ludzie, to dromader i baktrian (Camelus), lama (Lama glama) i alpaka (Vicugna pacos). Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa ogłosiła rok 2024 Międzynarodowym Rokiem Wielbłądowatych.',
    range:
      'Wielbłądy żyją w suchej Azji i Afryce, a teraz także w Australii. Lamy i alpaki żyją w Andach, a stada eksportowe żyją także gdzie indziej.',
    story:
      'Ludzie udomowili wielbłądy Starego Świata i andyjskie wielbłądowate jako juczne, wełniste, mleczne i mięsne zwierzęta suchych i wysokich krajów. Międzynarodowy Rok Wielbłądowatych w 2024 roku prosił rządy, by traktować te stada jako system żywności i kultury.',
    when: 'Żywe udomowione gatunki. Międzynarodowy Rok Wielbłądowatych przypadł na 2024 rok.',
    humanRole: 'Trzymamy wielbłądy, lamy i alpaki jako zwierzęta robocze i wełniste suchych i górskich ziem.',
    sources: '',
    sourcesList: [
      {
        label:
          'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Międzynarodowy Rok Wielbłądowatych, 2024 (International Year of Camelids 2024)',
        url: 'https://www.fao.org/camelids-2024/en',
      },
    ],
  },
  'iberian-lynx': {
    commonName: 'Ryś iberyjski',
    hook: 'W 2002 roku zostały tylko 94 rysie iberyjskie, co czyniło je najbardziej zagrożonym kotem na Ziemi. Spis z 2025 roku naliczył 2663 rysie w Hiszpanii i Portugalii.',
    imageAlt: 'Ryś iberyjski z profilu: pędzelki na uszach, kołnierz sierści na policzkach i krótki ogon z czarnym końcem',
    caption: 'Ilustracja Fix Planet',
    gridSource: cite('Hiszpańskie Ministerstwo Transformacji Ekologicznej i Wyzwania Demograficznego: spis rysia iberyjskiego, Hiszpania i Portugalia, 2025, dokument (Censo de lince ibérico, España y Portugal, 2025)', censusPdf),
    what:
      'Ryś iberyjski (Lynx pardinus) jest średniej wielkości dzikim kotem o cętkowanym, rdzawożółtym futrze, pędzelkach na uszach, kołnierzu sierści wzdłuż policzków i krótkim ogonie z czarnym końcem. Dorosłe zwierzę ma w kłębie około 0,5 m, od nosa do końca ogona około 0,9 m i waży mniej więcej od 6 do 16 kg. Żyje tylko na Półwyspie Iberyjskim i zależy od dzikiego królika, swojej głównej zdobyczy.',
    range:
      'W 2025 roku rysie żyły w 26 oddzielnych obszarach Hiszpanii i Portugalii, a w 18 z nich stwierdzono rozmnażanie. W Hiszpanii naliczono 2269 rysi, w Portugalii 394. W samej Hiszpanii w Kastylii-La Manchy żyło 1051, w Andaluzji 885 i w Estremadurze 302, mniej w Murcji, Kastylii i León oraz Madrycie. Główną ostoją gatunku są góry Sierra Morena, gdzie naliczono 1145. Według rządu Andaluzji liczba rysi w Andaluzji wzrosła z 457 w 2019 roku do 885 w 2025 roku. Obszar, na którym występuje ryś, powiększył się z 449 kilometrów kwadratowych w 2005 roku do co najmniej 3320 w 2022 roku.',
    story:
      'W dwudziestym wieku liczba rysi iberyjskich spadała z czterech powodów: niszczono śródziemnomorski las, dwie nowe choroby wirusowe gwałtownie zmniejszyły liczbę dzikich królików, ludzie prześladowali rysia jako szkodnika, a wiele zwierząt ginęło na drogach lub topiło się w studniach. W 2002 roku przetrwały tylko dwie grupy, jedna w okolicy Doñany i jedna w górach Sierra Morena, razem 94 rysie. Uznano wtedy gatunek za najbardziej zagrożonego kota na Ziemi, a Międzynarodowa Unia Ochrony Przyrody nadała mu kategorię krytycznie zagrożonego. Hiszpania, Portugalia i Unia Europejska rozpoczęły długą akcję ratunkową. Właściciele ziemscy zgodzili się gospodarować tak, by przybywało królików, ośrodki hodowlane w Hiszpanii i Portugalii odchowywały rysie, a od 2010 roku ponad 400 zwierząt wypuszczono tam, gdzie gatunek zniknął. Portugalia zaczęła własne wypuszczenia w 2014 roku. Liczba rysi przekroczyła 1000 w 2020 roku i 2000 w 2023 roku.',
    when:
      'W czerwcu 2024 roku Międzynarodowa Unia Ochrony Przyrody przeniosła rysia iberyjskiego z kategorii zagrożonego do kategorii narażonego. Wcześniej gatunek miał kategorię krytycznie zagrożonego od 2002 do 2008 roku i zagrożonego w 2015 roku. Spis opublikowany w czerwcu 2026 roku przez hiszpańskie Ministerstwo Transformacji Ekologicznej i Wyzwania Demograficznego naliczył w 2025 roku 2663 rysie, wobec 2401 w 2024 roku i 1365 w 2021 roku. Wśród nich 1711 było dorosłych i prawie dorosłych, a 952 młode, przy czym 542 samice rozmnażały się lub miały własne terytoria. Ministerstwo uważa te liczby za minimum.',
    humanRole:
      'Ludzie najpierw doprowadzili rysia na skraj wymarcia, a potem pomogli mu wrócić. Umowy z właścicielami ziemi poprawiły środowisko i zwiększyły liczbę królików, rysie hodowano w ośrodkach w Hiszpanii i Portugalii i wypuszczano na nowych terenach, a wzdłuż dróg zbudowano przejścia pod jezdnią i ogrodzenia. Drogi pozostają największym zagrożeniem: w 2025 roku 212 z 273 odnotowanych śmierci rysi nastąpiło na drogach. Do innych zagrożeń Międzynarodowa Unia Ochrony Przyrody zalicza nowe wybuchy chorób wirusowych królików, choroby przenoszone przez koty domowe, kłusownictwo i związane z klimatem zmiany środowiska.',
    sources: '',
    sourcesList: [
      cite('Czerwona lista gatunków zagrożonych Międzynarodowej Unii Ochrony Przyrody: ryś iberyjski (IUCN Red List of Threatened Species: Lynx pardinus, Rodríguez 2024)', 'https://www.iucnredlist.org/species/12520/218695618'),
      cite('Międzynarodowa Unia Ochrony Przyrody: Ryś iberyjski odradza się dzięki ochronie przyrody, komunikat prasowy z 20 czerwca 2024 (Iberian lynx rebounding thanks to conservation action)', 'https://iucn.org/press-release/202406/iberian-lynx-rebounding-thanks-conservation-action-iucn-red-list'),
      cite('Grupa Specjalistów ds. Kotowatych Komisji Przetrwania Gatunków Międzynarodowej Unii Ochrony Przyrody: Wiadomości o kotowatych, wydanie specjalne 17, Ryś iberyjski, ratowanie symbolicznego gatunku, 2024 (Cat News Special Issue 17, The Iberian lynx, rescue of an iconic species)', 'https://www.catsg.org/_files/ugd/7a07e2_97c4f555118e4f8d9da2b51e649bca32.pdf'),
      cite('Grupa Specjalistów ds. Kotowatych Komisji Przetrwania Gatunków Międzynarodowej Unii Ochrony Przyrody: żyjące gatunki, ryś iberyjski (Living Species, Iberian lynx)', 'https://www.catsg.org/living-species-iberianlynx'),
      cite('Hiszpańskie Ministerstwo Transformacji Ekologicznej i Wyzwania Demograficznego: spis rysia iberyjskiego, Hiszpania i Portugalia, 2025, dokument (Censo de lince ibérico, España y Portugal, 2025)', 'https://www.miteco.gob.es/content/dam/miteco/es/biodiversidad/temas/inventarios-nacionales/lince/censolinceiberico2025.pdf'),
      cite('Hiszpańskie Ministerstwo Transformacji Ekologicznej i Wyzwania Demograficznego za pośrednictwem Fundacji Bioróżnorodności: populacja rysia iberyjskiego osiągnęła 2663 osobniki w 2025 roku, komunikat prasowy z 5 czerwca 2026 (The Iberian lynx population reached 2,663 specimens in 2025)', 'https://fundacion-biodiversidad.es/en/notas_de_prensa_mite/the-iberian-lynx-population-reached-2663-specimens-in-2025/'),
      cite('Hiszpańskie Ministerstwo Transformacji Ekologicznej i Wyzwania Demograficznego: Hiszpański spis gatunków lądowych, ryś iberyjski, karta gatunku, dokument (Inventario Español de Especies Terrestres, Lynx pardinus)', 'https://www.miteco.gob.es/content/dam/miteco/es/biodiversidad/temas/inventarios-nacionales/ieet_mami_lynx_pardinus_tcm30-99818.pdf'),
      cite('Projekt Unii Europejskiej na rzecz ochrony przyrody: raport dla szerokiej publiczności, 2018, dokument (LIFE Iberlince, Layman report 2018)', 'https://www.iberlince.eu/files/images/docs/layman_eng.pdf'),
      cite('Projekt Unii Europejskiej na rzecz ochrony przyrody: historia (LIFE Iberlince, History)', 'https://www.iberlince.eu/index_php/eng/project'),
      cite('Projekt Unii Europejskiej na rzecz ochrony przyrody: ryś iberyjski, ekologia (LIFE Iberlince, Iberian lynx, Ecology)', 'https://www.iberlince.eu/index_php/eng/lynx/ecology'),
      cite('Europejska Agencja Wykonawcza ds. Klimatu, Infrastruktury i Środowiska: Powrót kota, liczba rysi iberyjskich wzrosła dziesięciokrotnie w 20 lat, 20 lipca 2021 (The comeback cat: Iberian lynx numbers up tenfold in 20 years)', 'https://cinea.ec.europa.eu/news-events/news/comeback-cat-iberian-lynx-numbers-tenfold-20-years-2021-07-20_en'),
      cite('Baza danych programu Komisji Europejskiej na rzecz przyrody i klimatu: projekt ochrony i reintrodukcji rysia iberyjskiego w Andaluzji (LIFE06 NAT/E/000209, Conservation and reintroduction of the Iberian lynx in Andalucia)', 'https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE06-NAT-E-000209/conservation-and-reintroduction-of-the-iberian-lynx-in-andalucia'),
      cite('Rząd Andaluzji (Junta de Andalucía): Andaluzyjska Sierra Morena pozostaje głównym ośrodkiem rysia iberyjskiego na półwyspie, 3 września 2026 (La Sierra Morena andaluza se mantiene como el principal núcleo de lince ibérico de la Península)', 'https://www.juntadeandalucia.es/medioambiente/portal/landing-page/-/asset_publisher/4V1kD5gLiJkq/content/la-sierra-morena-andaluza-se-mantiene-como-el-principal-n%C3%BAcleo-de-lince-ib%C3%A9rico-de-la-pen%C3%ADnsula/20151'),
      cite('Portugalski Instytut Ochrony Przyrody i Lasów (ICNF): ryś iberyjski, aktualności (Lince-ibérico, Novidades)', 'https://areasprotegidas.icnf.pt/lince/index.php/noticias/novidades'),
      cite('Muzeum Zoologiczne Uniwersytetu Michigan, internetowy przewodnik po różnorodności zwierząt: ryś iberyjski (Lynx pardinus, Spanish lynx)', 'https://animaldiversity.org/accounts/Lynx_pardinus/'),
    ],
  },
  ...domesticatesPl,
};
