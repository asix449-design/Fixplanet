import type { WasteDetailCopy, WasteEncyclopediaSlug } from '../data/solutions-waste';
import type { SolutionCopy } from '../data/solutions';
import { detail as en } from './solutions-waste-en';

const src = (slug: WasteEncyclopediaSlug, index: number) => en[slug].sources[index].url;

const krefeld =
  'https://commons.wikimedia.org/wiki/File:Krefeld,_Germany_-_Bottle_reverse_vending_machine_in_Rewe.jpg';
const almeria =
  'https://commons.wikimedia.org/wiki/File:Contenedores_de_reciclaje_Almer%C3%ADa.jpg';
const tsukuba =
  'https://commons.wikimedia.org/wiki/File:Electronic_junk_separation_in_view_of_recycling_3.jpg';
const munich =
  'https://commons.wikimedia.org/wiki/File:Lithium-Ion_Battery_for_BMW_i3_-_Battery_Pack.JPG';
const produce = 'https://commons.wikimedia.org/wiki/File:Treasure_trove_of_wasted_food.JPG';
const ccBy = 'https://creativecommons.org/licenses/by/4.0/';
const ccBySa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const ccBySa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc0 = 'https://creativecommons.org/publicdomain/zero/1.0/';

export const grid: Record<WasteEncyclopediaSlug, SolutionCopy> = {
  'deposit-return-systems': {
    problemTitle: 'Puste opakowania po napojach trafiają do śmieci i zmieszanych odpadów',
    fixTitle: 'Systemy kaucyjne',
    problem: 'Puste opakowania po napojach trafiają do śmieci i zmieszanych odpadów',
    fix: 'Niewielka kaucja za butelkę lub puszkę wraca do klienta, gdy puste opakowanie trafi do punktu zbiórki. Niektóre systemy zbierają ponad 90 procent objętych nimi opakowań, a badania odpadów pokazują, że takich opakowań na ziemi jest mniej.',
    imageAlt: 'Wlot automatu do zwrotu butelek i puszek z kaucją w supermarkecie w Krefeldzie w Niemczech.',
    sourceLabel: 'Organizacja Współpracy Gospodarczej i Rozwoju, systemy kaucyjne',
  },
  'extended-producer-responsibility-packaging': {
    problemTitle: 'Odpadów opakowaniowych przybywa, a koszt ich zbiórki ponoszą gminy',
    fixTitle: 'Rozszerzona odpowiedzialność producenta za opakowania',
    problem: 'Odpadów opakowaniowych przybywa, a koszt ich zbiórki ponoszą gminy',
    fix: 'Rozszerzona odpowiedzialność producenta sprawia, że firmy wprowadzające opakowania na rynek odpowiadają za nie także po użyciu: płacą za zbiórkę i recykling albo same je organizują. W Unii Europejskiej odpady opakowaniowe w 2022 roku osiągnęły 186,5 kg na mieszkańca.',
    imageAlt:
      'Pojemniki do selektywnej zbiórki w Almeríi w Hiszpanii: na papier i tekturę, szkło, odpady organiczne i opakowania oraz tworzywa sztuczne i metale.',
    sourceLabel: 'Komisja Europejska, odpady opakowaniowe',
  },
  'e-waste-recycling': {
    problemTitle: 'Zużytej elektroniki przybywa szybciej, niż rośnie formalny recykling',
    fixTitle: 'Zbiórka i recykling elektroodpadów',
    problem: 'Zużytej elektroniki przybywa szybciej, niż rośnie formalny recykling',
    fix: 'Udokumentowana zbiórka i recykling zużytej elektroniki odzyskują miedź, złoto i inne metale. W 2022 roku na świecie wytworzono 62 miliardy kg elektroodpadów, a 22,3 procent z nich udokumentowano jako formalnie zebrane i poddane recyklingowi.',
    imageAlt:
      'Rozdrobnione płytki drukowane i elementy elektroniczne posortowane do odzysku materiałów, eksponat w Tsukubie w Japonii.',
    sourceLabel: 'Międzynarodowy Związek Telekomunikacyjny, Globalny monitor elektroodpadów 2024',
  },
  'lithium-ion-battery-recycling': {
    problemTitle:
      'Surowce krytyczne tkwią w akumulatorach, które trafią do recyklerów w dużej liczbie dopiero mniej więcej od 2035 roku',
    fixTitle: 'Recykling akumulatorów litowo-jonowych',
    problem:
      'Surowce krytyczne tkwią w akumulatorach, które trafią do recyklerów w dużej liczbie dopiero mniej więcej od 2035 roku',
    fix: 'Recykling akumulatorów litowo-jonowych odzyskuje lit, nikiel, kobalt i miedź: najpierw z odpadów produkcyjnych, a później z pakietów wycofywanych z pojazdów i magazynów energii. Według Międzynarodowej Agencji Energetycznej moce recyklingowe są dziś większe niż dostępny surowiec.',
    imageAlt:
      'Otwarty akumulator litowo-jonowy samochodu elektrycznego na targach w Monachium, z widocznymi modułami i elektroniką sterującą.',
    sourceLabel: 'Międzynarodowa Agencja Energetyczna, akumulatory pojazdów elektrycznych',
  },
  'food-waste-reduction': {
    problemTitle: 'Jadalną żywność wyrzuca się w sklepach, kuchniach i domach',
    fixTitle: 'Ograniczanie marnowania żywności',
    problem: 'Jadalną żywność wyrzuca się w sklepach, kuchniach i domach',
    fix: 'Ograniczanie marnowania żywności zostawia jedzenie w łańcuchu żywieniowym ludzi i oszczędza zasoby gospodarstw, które już zużyto na jego wytworzenie. W 2022 roku świat zmarnował 1,05 miliarda ton żywności, czyli 19 procent żywności dostępnej dla konsumentów.',
    imageAlt: 'Świeże warzywa i owoce wyrzucone z hipermarketu po jednym lub dwóch dniach na półkach.',
    sourceLabel: 'Program Narodów Zjednoczonych ds. Środowiska, Indeks marnowania żywności 2024',
  },
};

export const detail: Record<WasteEncyclopediaSlug, WasteDetailCopy> = {
  'deposit-return-systems': {
    title: grid['deposit-return-systems'].fixTitle,
    hook: grid['deposit-return-systems'].fix,
    imageAlt: grid['deposit-return-systems'].imageAlt,
    caption: 'Wlot automatu do zwrotu butelek i puszek z kaucją w supermarkecie w Krefeldzie w Niemczech.',
    credit: `Zdjęcie: Alexis Jazz, za pośrednictwem Wikimedia Commons, przycięte, licencja Creative Commons Uznanie autorstwa 4.0 (${ccBy}). Strona pliku: ${krefeld}`,
    what: [
      'W systemie kaucyjnym klient płaci kaucję przy zakupie napoju i dostaje pieniądze z powrotem, gdy zwróci puste opakowanie do punktu zbiórki. Organizacja Współpracy Gospodarczej i Rozwoju uznaje taki system za jedną z form rozszerzonej odpowiedzialności producenta, jeśli producenci sami go finansują i prowadzą. Punkty zbiórki są obsługiwane przez personel albo wyposażone w automaty, które przyjmują puste opakowania automatycznie.',
    ],
    why: [
      'Według Organizacji Współpracy Gospodarczej i Rozwoju w niektórych krajach i regionach z systemem kaucyjnym zbiera się ponad 90 procent objętych nim opakowań, a w badaniach odpadów odnotowano spadek liczby opakowań z kaucją od 40 do 90 procent. W Niemczech, na Litwie i w Norwegii system kaucyjny działa obok obowiązku przyjmowania opakowań z powrotem przez producentów. Komisja Europejska podaje cel selektywnej zbiórki 77 procent jednorazowych butelek plastikowych do 2025 roku i 90 procent do 2029 roku.',
    ],
    read: [
      'Wskaźnik zwrotu to udział sprzedanych opakowań z kaucją, które klienci zwrócili, odzyskując kaucję. W tej samej analizie czytamy, że wysokość kaucji wpływa na zachętę do udziału w systemie i wiąże się z wyższym wskaźnikiem zwrotu, a na wykresie rynki z wyższą minimalną kaucją mają wyższy wskaźnik zwrotu. Niewykorzystane kaucje mogą częściowo pokryć koszty działania systemu, a analiza proponuje rozważyć cele zbiórki lub podatek powiązany ze wskaźnikiem zbiórki, aby operatorzy dążyli do wysokiego wskaźnika zwrotu i tylko częściowo opierali się na niewykorzystanych kaucjach.',
    ],
    limits: [
      'W porównaniu ze zbiórką przy posesji zebranie każdego dodatkowego opakowania w systemie kaucyjnym zwykle kosztuje więcej, a przychody ze sprzedaży surowca w większości przypadków pokrywają tylko część kosztów, więc takie systemy zwykle potrzebują opłat od producentów albo wsparcia publicznego. Automaty do zwrotu opakowań wymagają dużych nakładów inwestycyjnych. Tam, gdzie działa już zbiórka opakowań przy posesji, system kaucyjny odbiera jej cenny surowiec, dlatego przepisy powinny określać, które produkty należą do którego systemu, a każdy produkt powinien podlegać tylko jednemu z nich.',
    ],
    sources: [
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju: systemy kaucyjne i ich współdziałanie z dodatkowymi obowiązkowymi politykami rozszerzonej odpowiedzialności producenta (Organisation for Economic Co-operation and Development (OECD): Deposit-refund systems and the interplay with additional mandatory extended producer responsibility policies)',
        url: src('deposit-return-systems', 0),
      },
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju: systemy kaucyjne i ich współdziałanie z dodatkowymi obowiązkowymi politykami rozszerzonej odpowiedzialności producenta, dokument roboczy o środowisku nr 208, dokument (Organisation for Economic Co-operation and Development (OECD): Deposit-refund systems and the interplay with additional mandatory extended producer responsibility policies, OECD Environment Working Papers No. 208 (PDF))',
        url: src('deposit-return-systems', 1),
      },
      {
        label:
          'Komisja Europejska: tworzywa sztuczne jednorazowego użytku (European Commission: Single-use plastics)',
        url: src('deposit-return-systems', 2),
      },
    ],
  },
  'extended-producer-responsibility-packaging': {
    title: grid['extended-producer-responsibility-packaging'].fixTitle,
    hook: grid['extended-producer-responsibility-packaging'].fix,
    imageAlt: grid['extended-producer-responsibility-packaging'].imageAlt,
    caption:
      'Pojemniki do selektywnej zbiórki w Almeríi w Hiszpanii: na papier i tekturę, szkło, odpady organiczne i opakowania oraz tworzywa sztuczne i metale.',
    credit: `Zdjęcie: Schumi4ever, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 4.0 (${ccBySa4}). Strona pliku: ${almeria}`,
    what: [
      'Rozszerzona odpowiedzialność producenta to podejście w polityce, w którym producenci odpowiadają za swoje wyroby przez cały cykl życia, także po tym, jak konsumenci je wyrzucą. Organizacja Współpracy Gospodarczej i Rozwoju opisuje je jako przeniesienie odpowiedzialności za produkty z gmin i konsumentów na producentów. Producent może wypełniać ten obowiązek, zapewniając pieniądze, przejmując od gmin organizację zbiórki i sortowania, jak często dzieje się w przypadku opakowań, albo robiąc jedno i drugie. Najczęściej producenci działają wspólnie w organizacjach odpowiedzialności producentów.',
    ],
    why: [
      'Według Komisji Europejskiej odpady opakowaniowe w Unii Europejskiej osiągnęły w 2022 roku rekordowe 186,5 kg na mieszkańca, a opakowania stanowią prawie połowę wszystkich odpadów morskich. Rozporządzenie w sprawie opakowań i odpadów opakowaniowych, które weszło w życie 11 lutego 2025 roku i obowiązuje od 12 sierpnia 2026 roku, zastępuje dyrektywę z 1994 roku wspólnymi przepisami o projektowaniu, zawartości materiału z recyklingu, zapobieganiu odpadom, ponownym użyciu, zbiórce i recyklingu. Przegląd, który Organizacja Współpracy Gospodarczej i Rozwoju podsumowała w 2016 roku, naliczył około 400 działających systemów rozszerzonej odpowiedzialności producenta: największą grupą jest elektronika (35 procent), a opakowania i opony stanowią po 17 procent. W niektórych krajach, na przykład we Francji, dowody wskazują, że takie systemy przeniosły część finansowego ciężaru gospodarowania odpadami z gmin i podatników na producentów.',
    ],
    read: [
      'Rozszerzona odpowiedzialność producenta może być dobrowolna albo wymagana prawem i może opierać się na obowiązku przyjmowania produktów z powrotem, systemach kaucyjnych lub opłatach z góry na zagospodarowanie odpadów. Obowiązek przyjmowania produktów z powrotem jest najczęściej stosowanym narzędziem: dotyczy prawie trzech czwartych zbadanych systemów. Zasady przewodnie tej organizacji z 2001 roku mówią, że takie systemy powinny dawać producentom bodźce do zmiany projektu wyrobów.',
    ],
    limits: [
      'Ocena skutków takich systemów jest trudna: brakuje danych, ich wpływu trudno oddzielić od innych czynników, a same systemy są zbyt różnorodne, by je porównywać. Organizacja zaznacza, że w niektórych krajach i sektorach przyczyniły się do zapobiegania odpadom, na przykład przez ekoprojektowanie, ale rzadko wystarczają, by samodzielnie to wywołać. Liczba około 400 systemów pochodzi z przeglądu podsumowanego w 2016 roku.',
    ],
    sources: [
      {
        label: 'Komisja Europejska: odpady opakowaniowe (European Commission: Packaging waste)',
        url: src('extended-producer-responsibility-packaging', 0),
      },
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju: rozszerzona odpowiedzialność producenta i instrumenty ekonomiczne (Organisation for Economic Co-operation and Development (OECD): Extended producer responsibility and economic instruments)',
        url: src('extended-producer-responsibility-packaging', 1),
      },
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju: rozszerzona odpowiedzialność producenta, podstawowe fakty i kluczowe zasady, dokument o polityce środowiskowej nr 41 (2024) (Organisation for Economic Co-operation and Development (OECD): Extended Producer Responsibility: Basic facts and key principles, OECD Environment Policy Papers No. 41 (2024))',
        url: src('extended-producer-responsibility-packaging', 2),
      },
      {
        label:
          'Organizacja Współpracy Gospodarczej i Rozwoju: rozszerzona odpowiedzialność producenta, najważniejsze wnioski (2016, dokument) (Organisation for Economic Co-operation and Development (OECD): Extended Producer Responsibility: Policy Highlights (2016, PDF))',
        url: src('extended-producer-responsibility-packaging', 3),
      },
    ],
  },
  'e-waste-recycling': {
    title: grid['e-waste-recycling'].fixTitle,
    hook: grid['e-waste-recycling'].fix,
    imageAlt: grid['e-waste-recycling'].imageAlt,
    caption:
      'Rozdrobnione płytki drukowane i elementy elektroniczne posortowane do odzysku materiałów, eksponat w Tsukubie w Japonii.',
    credit: `Zdjęcie: Syced, za pośrednictwem Wikimedia Commons, przekazanie do domeny publicznej Creative Commons Zero (${cc0}). Strona pliku: ${tsukuba}`,
    what: [
      'Elektroodpady to wyrzucony sprzęt elektryczny i elektroniczny, od telefonów i laptopów po duże urządzenia domowe. Monitor uznaje elektroodpady za poddane recyklingowi tylko wtedy, gdy są udokumentowane jako formalnie zebrane i poddane recyklingowi w sposób bezpieczny dla środowiska. Raport „Globalny monitor elektroodpadów” przygotowują Międzynarodowy Związek Telekomunikacyjny oraz Instytut Narodów Zjednoczonych ds. Szkoleń i Badań, a jego wydanie z 2024 roku obejmuje rok 2022.',
    ],
    why: [
      'W 2022 roku na świecie wytworzono rekordowe 62 miliardy kg elektroodpadów, średnio 7,8 kg na osobę. Tylko 22,3 procent z nich (13,8 miliarda kg) udokumentowano jako formalnie zebrane i poddane recyklingowi. Od 2010 roku, gdy wytworzono 34 miliardy kg, ta ilość rośnie średnio o 2,3 miliarda kg rocznie, a udokumentowana formalna zbiórka i recykling wzrosły z 8 miliardów kg średnio o 0,5 miliarda kg rocznie. Wzrost ilości odpadów wyprzedza więc wzrost formalnego recyklingu prawie 5 razy. Metale zawarte w elektroodpadach z 2022 roku wyceniono na 91 miliardów dolarów amerykańskich, w tym miedź (19 miliardów), złoto (15 miliardów) i żelazo (16 miliardów).',
    ],
    read: [
      'Wartość 22,3 procent obejmuje tylko te elektroodpady, które udokumentowano jako formalnie zebrane i poddane recyklingowi; resztę, według szacunków Monitora, wyrzucono razem z odpadami zmieszanymi, zebrano i przetworzono poza systemami formalnymi albo zagospodarował ją głównie sektor nieformalny. Wskaźniki zbiórki i recyklingu są zwykle najwyższe dla cięższego i większego sprzętu, takiego jak duże urządzenia, sprzęt wymiany ciepła i ekrany, natomiast recykling małego sprzętu, takiego jak zabawki, kuchenki mikrofalowe, odkurzacze i papierosy elektroniczne, pozostaje bardzo niski i wynosi na świecie tylko 12 procent. Spośród regionów najwyższą udokumentowaną zbiórkę i recykling ma Europa: 7,53 kg na osobę.',
    ],
    limits: [
      'W rozdziale o Azji Monitor zauważa, że pracownicy nieformalni często działają przy ograniczonych zasobach i bez odpowiedniego sprzętu ochronnego, przez co są narażeni na niebezpieczne substancje chemiczne, a postępowanie z elektroodpadami niezgodne z wymogami uwalnia do środowiska co roku 58 tysięcy kg rtęci i 45 milionów kg tworzyw sztucznych z bromowanymi środkami zmniejszającymi palność. Międzynarodowe kody handlowe traktują sprzęt nowy i używany jednakowo, co otwiera drogę do błędnej klasyfikacji nielegalnych transportów. Ponieważ wartość 22,3 procent obejmuje tylko udokumentowaną formalną zbiórkę i recykling, przepływy poza systemem formalnym są szacunkami.',
    ],
    sources: [
      {
        label:
          'Międzynarodowy Związek Telekomunikacyjny: Globalny monitor elektroodpadów 2024 (International Telecommunication Union (ITU): The Global E-waste Monitor 2024)',
        url: src('e-waste-recycling', 0),
      },
      {
        label:
          'Międzynarodowy Związek Telekomunikacyjny oraz Instytut Narodów Zjednoczonych ds. Szkoleń i Badań: Globalny monitor elektroodpadów 2024, dokument (International Telecommunication Union (ITU) and United Nations Institute for Training and Research (UNITAR): Global E-waste Monitor 2024 (PDF))',
        url: src('e-waste-recycling', 1),
      },
      {
        label:
          'Międzynarodowy Związek Telekomunikacyjny: Globalny monitor elektroodpadów 2024, strona publikacji (International Telecommunication Union (ITU): Global E-waste Monitor 2024 (publication page))',
        url: src('e-waste-recycling', 2),
      },
    ],
  },
  'lithium-ion-battery-recycling': {
    title: grid['lithium-ion-battery-recycling'].fixTitle,
    hook: grid['lithium-ion-battery-recycling'].fix,
    imageAlt: grid['lithium-ion-battery-recycling'].imageAlt,
    caption:
      'Otwarty akumulator litowo-jonowy samochodu elektrycznego na targach w Monachium, z widocznymi modułami i elektroniką sterującą.',
    credit: `Zdjęcie: RudolfSimon, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 3.0 (${ccBySa3}). Strona pliku: ${munich}`,
    what: [
      'Recykling akumulatorów litowo-jonowych przetwarza zużyte ogniwa i pakiety, aby odzyskać metale do nowych akumulatorów i innych zastosowań. Dziś opiera się głównie na odpadach produkcyjnych powstających przy wytwarzaniu ogniw i komponentów. Akumulatory z pojazdów elektrycznych i magazynów energii staną się głównym surowcem dopiero około 2035 roku, ponieważ prawie wszystkie wdrożone w ostatnich latach nadal pracują, co tworzy opóźnienie około 15 lat.',
    ],
    why: [
      'Międzynarodowa Agencja Energetyczna podaje, że w Chinach znajduje się ponad 85 procent światowych mocy recyklingowych, a moce na świecie są w dużej mierze większe niż dostępny surowiec. Odpady produkcyjne w 2030 roku nadal stanowią dwie trzecie dostępnego surowca do recyklingu. Od 2035 roku zużyte akumulatory z pojazdów elektrycznych i magazynów energii stają się największym źródłem i do 2050 roku stanowią ponad 90 procent dostępnego surowca. W scenariuszu, w którym spełnione są krajowe cele klimatyczne, szeroko zakrojony recykling może obniżyć popyt na lit i nikiel o 25 procent, a popyt na kobalt o 40 procent w 2050 roku. Komisja Europejska podaje, że światowy popyt na akumulatory wzrośnie do 2030 roku 14 razy, a Unia Europejska może odpowiadać za 17 procent tego popytu.',
    ],
    read: [
      'Te liczby opisują przepływy materiału: dziś surowiec pochodzi głównie z fabryk w postaci odpadów produkcyjnych, a dopiero później będzie pochodził z akumulatorów po zakończeniu użytkowania. Rozporządzenie Unii Europejskiej w sprawie baterii weszło w życie 17 sierpnia 2023 roku i obowiązuje od 18 lutego 2024 roku, a kolejne wymogi wchodzą etapami do 2031 roku; ma ono sprawić, by baterie były zrównoważone przez cały cykl życia, od pozyskania surowców po zbiórkę i recykling. Dla chemii o niższej wartości materiałowej, na przykład litowo-żelazowo-fosforanowej, mogą być potrzebne inne modele biznesowe i dedykowane przepisy, aby zużyte akumulatory były prawidłowo zbierane i przetwarzane. W modelach opartych na opłacie za usługę recykler dostaje zapłatę za usługę, a klient zachowuje własność odzyskanych materiałów; szczególnie skuteczne jest to w połączeniu z politykami, które przypisują odpowiedzialność za zużyte akumulatory producentom samochodów lub akumulatorów.',
    ],
    limits: [
      'Międzynarodowa Agencja Energetyczna nazywa wkład recyklingu w zaspokojenie potrzeb surowcowych branży akumulatorów dziś ograniczonym, a liczby scenariuszowe na 2050 rok zależą od rozbudowy zakładów recyklingu i podniesienia wskaźników zbiórki zużytych akumulatorów. Do sierpnia 2025 roku import czarnej masy, bogatego w metale proszku z recyklingu akumulatorów, był w Chinach zakazany; od tego czasu dozwolony jest import czarnej masy wysokiej jakości, a przepisy w innych krajach mogą ograniczać ten przepływ. Używane samochody elektryczne potrzebują odpowiednich strategii zagospodarowania po zakończeniu eksploatacji, gdy przemieszczają się między krajami.',
    ],
    sources: [
      {
        label:
          'Międzynarodowa Agencja Energetyczna: akumulatory pojazdów elektrycznych, „Globalny przegląd rynku pojazdów elektrycznych 2026” (International Energy Agency (IEA): Electric vehicle batteries, Global EV Outlook 2026)',
        url: src('lithium-ion-battery-recycling', 0),
      },
      {
        label:
          'Międzynarodowa Agencja Energetyczna: recykling surowców krytycznych, streszczenie (International Energy Agency (IEA): Recycling of Critical Minerals, executive summary)',
        url: src('lithium-ion-battery-recycling', 1),
      },
      {
        label:
          'Międzynarodowa Agencja Energetyczna: zrównoważenie łańcucha dostaw akumulatorów do pojazdów elektrycznych (International Energy Agency (IEA): EV Battery Supply Chain Sustainability)',
        url: src('lithium-ion-battery-recycling', 2),
      },
      {
        label: 'Komisja Europejska: baterie (European Commission: Batteries)',
        url: src('lithium-ion-battery-recycling', 3),
      },
    ],
  },
  'food-waste-reduction': {
    title: grid['food-waste-reduction'].fixTitle,
    hook: grid['food-waste-reduction'].fix,
    imageAlt: grid['food-waste-reduction'].imageAlt,
    caption: 'Świeże warzywa i owoce wyrzucone z hipermarketu po jednym lub dwóch dniach na półkach.',
    credit: `Zdjęcie: Foerster, za pośrednictwem Wikimedia Commons, przekazanie do domeny publicznej Creative Commons Zero (${cc0}). Strona pliku: ${produce}`,
    what: [
      'Ograniczanie marnowania żywności oznacza, że jadalna żywność jest wykorzystywana zgodnie z przeznaczeniem w sklepach, restauracjach i domach, a do innych zastosowań trafiają tylko nieuniknione resztki. Program Narodów Zjednoczonych ds. Środowiska śledzi marnowanie żywności w handlu detalicznym, gastronomii i gospodarstwach domowych w swoim Indeksie marnowania żywności. Jedno z zadań Celów Zrównoważonego Rozwoju zakłada, że do 2030 roku świat zmniejszy o połowę ilość marnowanej żywności w przeliczeniu na mieszkańca na poziomie handlu detalicznego i konsumentów. Agencja Ochrony Środowiska Stanów Zjednoczonych porządkuje możliwości na swojej skali zmarnowanej żywności: zapobieganie marnowaniu, przekazywanie żywności potrzebującym i przetwarzanie jej na nowe produkty są najbardziej preferowane, a składowanie na wysypiskach, spalanie i spuszczanie do kanalizacji najmniej preferowane.',
    ],
    why: [
      'W 2022 roku świat zmarnował według szacunków 1,05 miliarda ton żywności w handlu detalicznym, gastronomii i gospodarstwach domowych, czyli 19 procent żywności dostępnej dla konsumentów. Gospodarstwa domowe zmarnowały 631 milionów ton (60 procent), gastronomia 290 milionów ton, a handel detaliczny 131 milionów ton. W przeliczeniu na osobę daje to 132 kg rocznie, z czego 79 kg marnuje się w gospodarstwach domowych. Gdyby choć jedna czwarta żywności marnowanej w gospodarstwach domowych była jadalna, co raport nazywa bardzo ostrożną oceną, odpowiadałoby to równowartości 1 miliarda posiłków wyrzucanych każdego dnia. Marnowanie żywności powoduje według szacunków od 8 do 10 procent światowych emisji gazów cieplarnianych, jeśli liczyć zarówno straty, jak i marnotrawstwo. W Stanach Zjednoczonych od 30 do 40 procent zaopatrzenia w żywność pozostaje niezjedzone, a krajowy cel to zmniejszenie strat i marnowania żywności o połowę do 2030 roku.',
    ],
    read: [
      'Skala zmarnowanej żywności układa możliwości od najbardziej do najmniej preferowanych: zapobieganie, przekazywanie potrzebującym i przetwarzanie na nowe produkty zachowują żywność jako żywność, a kompostowanie i fermentacja beztlenowa odzyskują składniki odżywcze i energię z resztek. W 1,05 miliarda ton wchodzą także niejadalne części towarzyszące żywności, a uwzględniono tylko handel detaliczny, gastronomię i gospodarstwa domowe. Te tony dochodzą do szacowanych 13 procent światowej żywności, które giną w łańcuchu dostaw przed dotarciem do handlu detalicznego.',
    ],
    limits: [
      'Dane o gospodarstwach domowych poprawiły się najbardziej: 194 punkty danych z 93 krajów, a 85 procent ludności świata mieszka w kraju, w którym są przynajmniej jakieś dane o marnowaniu żywności w gospodarstwach domowych. Dane dla handlu detalicznego i gastronomii zmieniły się niewiele, a dokładnych danych ogólnokrajowych spoza krajów o wysokim dochodzie nadal jest mało, więc wartość globalna pozostaje szacunkiem. To zadanie obejmuje handel detaliczny i konsumentów, a 13 procent tracone wcześniej w łańcuchu dostaw śledzi się osobno.',
    ],
    sources: [
      {
        label:
          'Program Narodów Zjednoczonych ds. Środowiska: raport Indeksu marnowania żywności 2024 (United Nations Environment Programme (UNEP): Food Waste Index Report 2024)',
        url: src('food-waste-reduction', 0),
      },
      {
        label:
          'Program Narodów Zjednoczonych ds. Środowiska: raport Indeksu marnowania żywności 2024, dokument (United Nations Environment Programme (UNEP): Food Waste Index Report 2024 (PDF))',
        url: src('food-waste-reduction', 1),
      },
      {
        label:
          'Program Narodów Zjednoczonych ds. Środowiska: raport Indeksu marnowania żywności 2024, kluczowe wnioski, dokument (United Nations Environment Programme (UNEP): Food Waste Index Report 2024, Key messages (PDF))',
        url: src('food-waste-reduction', 2),
      },
      {
        label:
          'Agencja Ochrony Środowiska Stanów Zjednoczonych: skala zmarnowanej żywności (United States Environmental Protection Agency (EPA): Wasted Food Scale)',
        url: src('food-waste-reduction', 3),
      },
      {
        label:
          'Agencja Ochrony Środowiska Stanów Zjednoczonych: cel Stanów Zjednoczonych na 2030 rok dotyczący ograniczenia strat i marnowania żywności (United States Environmental Protection Agency (EPA): United States 2030 Food Loss and Waste Reduction Goal)',
        url: src('food-waste-reduction', 4),
      },
    ],
  },
};
