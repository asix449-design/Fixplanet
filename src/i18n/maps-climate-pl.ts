import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { climateSwatches as sw } from './maps-climate-swatches';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'Czym to jest',
  why: 'Dlaczego to ważne',
  how: 'Jak czytać mapę',
  limits: 'Ograniczenia',
};

export const pl: Record<string, MapCopy> = {
  'surface-temperature-anomalies': {
    title: 'Anomalie temperatury powierzchni',
    cardMeta: 'Instytut Badań Kosmicznych imienia Goddarda · 2025 · względem okresu od 1951 do 1980',
    hook: 'Temperatura powierzchni na całym globie w 2025 roku jako różnica względem średniej z lat od 1951 do 1980.',
    description:
      'Instytut Badań Kosmicznych imienia Goddarda, część Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej USA, publikuje globalną analizę temperatury powierzchni. Łączy ona zapisy lądowych stacji meteorologicznych z analizą temperatury powierzchni mórz, a w analizie jest ponad 25 000 stacji meteorologicznych. Wyniki to anomalie w stopniach Celsjusza: o ile dane miejsce jest cieplejsze lub chłodniejsze od własnej średniej z lat od 1951 do 1980. Wartości miesięczne sięgają 1880 roku, a tabele są aktualizowane co miesiąc.',
    whyOnShelf:
      'Uśredniony dla całego globu rok 2023 był o 1,17 °C cieplejszy od średniej z lat od 1951 do 1980, rok 2024 o 1,29 °C cieplejszy, a rok 2025 o 1,19 °C cieplejszy. Agencja kosmiczna opisuje rok 2025 jako równy rokowi 2023 w granicach błędu, a najcieplejszym rokiem w historii pomiarów nadal jest 2024. W 2025 roku półkula północna była cieplejsza o 1,49 °C, a południowa o 0,89 °C; pas od 64 stopni szerokości północnej do bieguna był cieplejszy o 2,99 °C.',
    howToRead:
      'Każdy kwadrat o wymiarach 2 na 2 stopnie pokazuje średnią z dwunastu miesięcznych anomalii za 2025 rok. Odcienie pomarańczowego i czerwonego są cieplejsze od średniej z lat od 1951 do 1980, jasnoniebieski jest chłodniejszy, a szare kwadraty nie mają wartości. Prawie wszystkie kwadraty są cieplejsze, a najsilniejsze ocieplenie występuje na dalekiej północy.',
    caveats:
      'Wartości są wygładzone w promieniu 1200 kilometrów, więc miejsca z niewieloma stacjami korzystają z odległych, a nad oceanem oparto się na analizach temperatury powierzchni mórz. Kilka kwadratów nie ma wartości. Względem innego okresu bazowego, na przykład przedprzemysłowego, liczby się zmieniają.',
    licenseNote: realMapCredit('pl', 'surface-temperature-anomalies') ?? '',
    imageAlt:
      'Mapa świata: anomalia temperatury powierzchni w 2025 roku na siatce 2 na 2 stopnie. Większość globu jest pomarańczowa i czerwona, daleka północ jest najciemniej czerwona, a kilka kwadratów jest szarych.',
    caption:
      'Anomalia temperatury powierzchni w 2025 roku na siatce 2 na 2 stopnie względem średniej z lat od 1951 do 1980.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Odcienie pokazują anomalię z 2025 roku w stopniach Celsjusza względem okresu od 1951 do 1980.',
        items: [
          { swatch: sw.temp.below0, label: 'Jasnoniebieski, poniżej 0' },
          { swatch: sw.temp.to05, label: 'Blady brzoskwiniowy, od 0 do 0,5' },
          { swatch: sw.temp.to1, label: 'Brzoskwiniowy, od 0,5 do 1' },
          { swatch: sw.temp.to15, label: 'Łososiowy, od 1 do 1,5' },
          { swatch: sw.temp.to2, label: 'Koralowy, od 1,5 do 2' },
          { swatch: sw.temp.to3, label: 'Czerwony, od 2 do 3' },
          { swatch: sw.temp.to4, label: 'Ciemnoczerwony, od 3 do 4' },
          { swatch: sw.temp.above4, label: 'Bordowy, 4 i więcej' },
          { swatch: sw.temp.none, label: 'Szary, brak wartości' },
        ],
      },
    ],
    sources: [
      cite(
        'Instytut Badań Kosmicznych imienia Goddarda: analiza temperatury powierzchni (GISS Surface Temperature Analysis (GISTEMP v4))',
        'https://data.giss.nasa.gov/gistemp/',
      ),
      cite(
        'Instytut Badań Kosmicznych imienia Goddarda: pobieranie danych (GISTEMP v4 Data Downloads)',
        'https://data.giss.nasa.gov/gistemp/data_v4.html',
      ),
      cite(
        'Instytut Badań Kosmicznych imienia Goddarda: globalne średnie miesięczne, sezonowe i roczne od 1880 roku do dziś, tabela (Global-mean monthly, seasonal, and annual means, 1880 to present)',
        'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv',
      ),
      cite(
        'Instytut Badań Kosmicznych imienia Goddarda: strefowe średnie roczne od 1880 roku do dziś, tabela (Zonal annual means, 1880 to present)',
        'https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv',
      ),
      cite(
        'Nauka w Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej USA: temperatura globalna (NASA Science: Global Temperature)',
        'https://science.nasa.gov/earth/explore/earth-indicators/global-temperature/',
      ),
      cite(
        'Laboratorium Nauk Fizycznych Narodowej Administracji Oceanicznej i Atmosferycznej USA: analiza temperatury powierzchni, dane siatkowe (NOAA Physical Sciences Laboratory: GISS Surface Temperature Analysis (GISTEMP), gridded data)',
        'https://psl.noaa.gov/data/gridded/data.gistemp.html',
      ),
      cite(
        'Earthdata Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej USA: wskazówki dotyczące użycia i cytowania danych (NASA Earthdata: Data Use and Citation Guidance)',
        'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance',
      ),
    ],
  },
  'land-precipitation': {
    title: 'Opady na lądzie',
    cardMeta: 'Światowe Centrum Klimatologii Opadów · 2024 · suma roczna',
    hook: 'Suma deszczu i śniegu, które spadły na lądzie w 2024 roku, w milimetrach, z deszczomierzy stacji na siatce 0,5 stopnia.',
    description:
      'Światowe Centrum Klimatologii Opadów wspiera monitorowanie klimatu i badania naukowe. Prowadzi je Niemiecka Służba Pogodowa (Deutscher Wetterdienst) pod auspicjami Światowej Organizacji Meteorologicznej. Na podstawie deszczomierzy stacji lądowych buduje miesięczne opady na siatce; analiza miesięczna jest wydawana w siatkach od 0,25 do 2,5 stopnia i obejmuje okres od 1891 roku do dziś. Mapa korzysta z siatki 0,5 stopnia.',
    whyOnShelf:
      'Szereg biegnie od 1891 roku, więc produkt, z którego powstała mapa 2024 roku, pozwala porównywać dane na przestrzeni ponad stulecia. Producent zaleca analizę miesięczną do sprawdzania modeli hydrometeorologicznych oraz do badania obiegu wody.',
    howToRead:
      'Każdy kwadrat o wymiarach 0,5 na 0,5 stopnia pokazuje sumę opadów za 2024 rok w milimetrach, czyli sumę dwunastu wartości miesięcznych. Jeden milimetr to jeden litr wody na każdy metr kwadratowy. Bladożółty oznacza sucho, a odcienie zieleni ciemnieją wraz ze wzrostem sumy rocznej. Największe sumy przypadają na wilgotne tropiki, a najsuchsze kwadraty leżą na pustyniach.',
    caveats:
      'Obejmuje tylko ląd. Kwadrat jest zabarwiony tylko wtedy, gdy ma wartość za wszystkie dwanaście miesięcy; wszystko inne, w tym cały ocean, jest jasnoszaroniebieskie. Liczba stacji, na których opierają się wartości miesięczne, waha się od mniej niż 10 000 do ponad 52 000 na świecie, więc regiony słabo obserwowane są mniej pewne. Producent radzi uwzględniać liczbę stacji na kwadrat i stosować poprawki na systematyczne błędy pomiaru deszczomierzami. Produkt jest aktualizowany w nieregularnych odstępach czasu.',
    licenseNote: realMapCredit('pl', 'land-precipitation') ?? '',
    imageAlt:
      'Mapa świata: suma opadów na lądzie w 2024 roku. Wilgotne tropiki są ciemnozielone, pustynie bladożółte, a ocean jasnoszaroniebieski.',
    caption: 'Suma opadów na lądzie w 2024 roku na siatce 0,5 stopnia, z deszczomierzy stacji.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Odcienie pokazują sumę opadów za 2024 rok w milimetrach.',
        items: [
          { swatch: sw.rain.under100, label: 'Bladożółty, poniżej 100' },
          { swatch: sw.rain.to250, label: 'Jasnożółty, od 100 do 250' },
          { swatch: sw.rain.to500, label: 'Bladozielony, od 250 do 500' },
          { swatch: sw.rain.to1000, label: 'Jasnozielony, od 500 do 1 000' },
          { swatch: sw.rain.to1500, label: 'Zielony, od 1 000 do 1 500' },
          { swatch: sw.rain.to2000, label: 'Średniozielony, od 1 500 do 2 000' },
          { swatch: sw.rain.to3000, label: 'Ciemnozielony, od 2 000 do 3 000' },
          { swatch: sw.rain.above3000, label: 'Bardzo ciemnozielony, 3 000 i więcej' },
          { swatch: sw.rain.none, label: 'Jasnoszaroniebieski, brak wartości' },
        ],
      },
    ],
    sources: [
      cite(
        'Niemiecka Służba Pogodowa (Deutscher Wetterdienst): Światowe Centrum Klimatologii Opadów (Global Precipitation Climatology Centre (GPCC))',
        'https://www.dwd.de/EN/ourservices/gpcc/gpcc.html',
      ),
      cite(
        'Niemiecka Służba Pogodowa (Deutscher Wetterdienst): dostęp do produktów (Product Access (GPCC))',
        'https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html',
      ),
      cite(
        'Niemiecka Służba Pogodowa (Deutscher Wetterdienst): pobieranie produktów centrum (Download GPCC Products)',
        'https://opendata.dwd.de/climate_environment/GPCC/html/download_gate.html',
      ),
      cite(
        'Rustemeier E., Finger P., Schirmeister Z., Ziese M. (2025): miesięczna analiza opadów, wersja 2025, siatka 0,5 stopnia, cyfrowy identyfikator obiektu 10.5676/DWD_GPCC/MONTHLY_V2025_050 (GPCC Precipitation Analysis Monthly Version 2025 at 0.5 degree)',
        'https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050',
      ),
    ],
  },
  'drought-index': {
    title: 'Susza',
    cardMeta: 'Hiszpańska Narodowa Rada Badań Naukowych · grudzień 2024 · skala 12 miesięcy',
    hook: 'O ile suchsze lub wilgotniejsze niż zwykle było dwanaście miesięcy do grudnia 2024 roku na lądzie, z uwzględnieniem opadów i parowania.',
    description:
      'Standaryzowany wskaźnik opadów i ewapotranspiracji publikuje Hiszpańska Narodowa Rada Badań Naukowych (Consejo Superior de Investigaciones Científicas). Wykorzystuje miesięczną różnicę między opadami a ewapotranspiracją potencjalną, czyli wodą, którą powietrze mogłoby pobrać z gleby i roślin. Ten prosty klimatyczny bilans wodny liczony jest w różnych skalach czasu. Globalna baza danych ma siatkę 0,5 stopnia i wartości miesięczne od stycznia 1901 do grudnia 2024 roku, skale od 1 do 48 miesięcy, i obejmuje tylko ląd. Opiera się na miesięcznych danych klimatycznych Jednostki Badań Klimatu Uniwersytetu Wschodniej Anglii.',
    whyOnShelf:
      'Ponieważ wskaźnik uwzględnia parowanie tak samo jak opady, reaguje zarówno na upał, jak i na brak deszczu. Różne skale czasu pasują do różnych części systemu wodnego: od wilgotności gleby w ciągu kilku miesięcy po rzeki i wody podziemne w ciągu roku lub dłużej.',
    howToRead:
      'Każdy kwadrat pokazuje wartość z 12 miesięcy na grudzień 2024 roku, czyli za okres od stycznia do grudnia 2024 roku. Wartość jest oceną standaryzowaną dla danego miejsca. Zero oznacza zwykły rok, wartości ujemne są suchsze niż zwykle i pokazane na brązowo, a dodatnie wilgotniejsze niż zwykle i pokazane na turkusowo. Im ciemniejszy kolor, tym dalej od zwykłego stanu.',
    caveats:
      'Obecna wersja bazy danych kończy się w grudniu 2024 roku. Zabarwiony jest tylko ląd z danymi, mniej więcej od 56 stopni szerokości południowej do 84 stopni szerokości północnej; ocean i reszta globu są jasnoszaroniebieskie. Zapotrzebowanie na parowanie jest obliczane z danych klimatycznych. Każdy kolor porównuje miejsce z jego własną historią, więc takie same kolory w regionie wilgotnym i suchym oznaczają różne ilości wody.',
    licenseNote: realMapCredit('pl', 'drought-index') ?? '',
    imageAlt:
      'Mapa świata: wskaźnik suszy z 12 miesięcy na grudzień 2024 roku. Ląd suchszy niż zwykle jest brązowy, ląd wilgotniejszy niż zwykle turkusowy, a ocean jasnoszaroniebieski.',
    caption: 'Wskaźnik suszy w skali 12 miesięcy na grudzień 2024 roku, siatka 0,5 stopnia nad lądem.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Odcienie pokazują 12-miesięczny wskaźnik na grudzień 2024 roku.',
        items: [
          { swatch: sw.drought.belowM2, label: 'Ciemnobrązowy, poniżej minus 2' },
          { swatch: sw.drought.toM15, label: 'Brązowy, od minus 2 do minus 1,5' },
          { swatch: sw.drought.toM1, label: 'Jasnobrązowy, od minus 1,5 do minus 1' },
          { swatch: sw.drought.toM05, label: 'Piaskowy, od minus 1 do minus 0,5' },
          { swatch: sw.drought.near, label: 'Prawie biały, od minus 0,5 do 0,5' },
          { swatch: sw.drought.to1, label: 'Bladoturkusowy, od 0,5 do 1' },
          { swatch: sw.drought.to15, label: 'Turkusowy, od 1 do 1,5' },
          { swatch: sw.drought.to2, label: 'Ciemnoturkusowy, od 1,5 do 2' },
          { swatch: sw.drought.above2, label: 'Bardzo ciemnoturkusowy, powyżej 2' },
          { swatch: sw.drought.none, label: 'Jasnoszaroniebieski, brak wartości' },
        ],
      },
    ],
    sources: [
      cite(
        'Hiszpańska Narodowa Rada Badań Naukowych: baza danych, standaryzowany wskaźnik opadów i ewapotranspiracji (Data base, SPEI, The Standardised Precipitation-Evapotranspiration Index (SPEIbase))',
        'https://spei.csic.es/database.html',
      ),
      cite(
        'Hiszpańska Narodowa Rada Badań Naukowych: informacje o standaryzowanym wskaźniku opadów i ewapotranspiracji (Information, SPEI, The Standardised Precipitation-Evapotranspiration Index)',
        'https://spei.csic.es/home.html',
      ),
      cite(
        'Vicente-Serrano S. M., Beguería S., López-Moreno J. I. (2010): wieloskalowa globalna baza danych o suszy (A Multiscalar Global Drought Dataset: The SPEIbase), Biuletyn Amerykańskiego Towarzystwa Meteorologicznego',
        'https://doi.org/10.1175/2010BAMS2988.1',
      ),
      cite(
        'Open Data Commons: Otwarta licencja baz danych (Open Database License (ODbL) v1.0)',
        'https://opendatacommons.org/licenses/odbl/1-0/',
      ),
    ],
  },
  'outdoor-heat-stress': {
    title: 'Stres cieplny na zewnątrz',
    cardMeta: 'Usługa Copernicus ds. zmian klimatu · 2025 · względem okresu od 1991 do 2020',
    hook: 'O ile dni więcej lub mniej niż zwykle w 2025 roku przyniosło silny stres cieplny na zewnątrz, na lądzie na całym świecie z wyjątkiem Antarktydy.',
    description:
      'Usługa Copernicus ds. zmian klimatu oferuje zbiór wskaźników komfortu termicznego, który Europejskie Centrum Prognoz Średnioterminowych obliczyło ze swojej reanalizy atmosfery; łączy ona dane modelu z obserwacjami z całego świata w pełny i spójny opis klimatu. Jednym z nich jest Uniwersalny Wskaźnik Klimatu Termicznego: temperatura odczuwalna w stopniach Celsjusza, łącząca temperaturę powietrza, wilgotność, wiatr i promieniowanie. Dane obejmują kulę ziemską z wyjątkiem Antarktydy w siatce 0,25 stopnia, od stycznia 1940 roku niemal do chwili obecnej. Dzień z co najmniej silnym stresem cieplnym to dzień, w którym temperatura odczuwalna osiąga 32 °C lub więcej.',
    whyOnShelf:
      'W 2025 roku na 50% lądów globu, bez Antarktydy, było więcej dni niż przeciętnie z co najmniej silnym stresem cieplnym. W częściach południa Stanów Zjednoczonych i wschodniej Azji takich dni było do 45 więcej niż przeciętnie, a w Afryce Środkowej do około 110 dni więcej z bardzo silnym stresem cieplnym, czyli temperaturą odczuwalną 38 °C lub więcej. W większej części Australii oraz w częściach Afryki Północnej i Półwyspu Arabskiego było więcej dni z ekstremalnym stresem cieplnym niż przeciętnie. Do jednej trzeciej globu, w tym południe Afryki i południe Azji, miało mniej dni stresu cieplnego niż przeciętnie.',
    howToRead:
      'Każdy kolor pokazuje, o ile dni więcej lub mniej niż w średniej z lat od 1991 do 2020 w 2025 roku wystąpiło co najmniej silny stres cieplny. Brąz i pomarańcz oznaczają więcej dni, prawie biały zbliżoną liczbę, a fiolet mniej dni. Im silniejszy kolor, tym większa różnica. Ocean i Antarktyda pozostały puste.',
    caveats:
      'Temperatura odczuwalna jest obliczona z danych reanalizy w siatce 0,25 stopnia, a Antarktyda leży poza zbiorem danych. Mapa pokazuje tylko zmianę liczby dni względem średniej z lat od 1991 do 2020. Kategorie stresu cieplnego zaczynają się od 26 °C dla umiarkowanego, 32 °C dla silnego, 38 °C dla bardzo silnego i 46 °C dla ekstremalnego. Pobranie danych siatkowych wymaga bezpłatnego konta w Magazynie danych klimatycznych Copernicus.',
    licenseNote: realMapCredit('pl', 'outdoor-heat-stress') ?? '',
    imageAlt:
      'Mapa świata: zmiana liczby dni z silnym stresem cieplnym na zewnątrz w 2025 roku. Brąz i pomarańcz oznaczają więcej dni niż przeciętnie, fiolet mniej dni, a Antarktyda jest pusta.',
    caption:
      'Zmiana liczby dni z co najmniej silnym stresem cieplnym na zewnątrz w 2025 roku względem średniej z lat od 1991 do 2020. Obraz to opublikowana mapa z raportu „Główne wskaźniki klimatu świata 2025”, ze zmienionymi kolorami i z mapą obróconą tak, by północ była u góry.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Kolory pokazują zmianę liczby dni z co najmniej silnym stresem cieplnym w 2025 roku w porównaniu ze średnią z lat od 1991 do 2020.',
        items: [
          { swatch: sw.heat.fewer50, label: 'Ciemnofioletowy, co najmniej o 50 dni mniej' },
          { swatch: sw.heat.fewer25, label: 'Fioletowy, od 25 do 50 dni mniej' },
          { swatch: sw.heat.fewer10, label: 'Liliowy, od 10 do 25 dni mniej' },
          { swatch: sw.heat.fewer1, label: 'Blady liliowy, od 1 do 10 dni mniej' },
          { swatch: sw.heat.nearFewer, label: 'Prawie biały, mniej, ale najwyżej o 1 dzień' },
          { swatch: sw.heat.nearMore, label: 'Kremowy, więcej, ale najwyżej o 1 dzień' },
          { swatch: sw.heat.more1, label: 'Jasnopomarańczowy, od 1 do 10 dni więcej' },
          { swatch: sw.heat.more10, label: 'Pomarańczowy, od 10 do 25 dni więcej' },
          { swatch: sw.heat.more25, label: 'Brązowy, od 25 do 50 dni więcej' },
          { swatch: sw.heat.more50, label: 'Ciemnobrązowy, co najmniej o 50 dni więcej' },
          { swatch: sw.heat.ocean, label: 'Szaroniebieski, ocean i Antarktyda, brak wartości' },
        ],
      },
    ],
    sources: [
      cite(
        'Usługa Copernicus ds. zmian klimatu: główne wskaźniki klimatu świata 2025 (Global Climate Highlights 2025)',
        'https://climate.copernicus.eu/global-climate-highlights-2025',
      ),
      cite(
        'Usługa Copernicus ds. zmian klimatu: pełny raport (Global Climate Highlights 2025, full report, PDF)',
        'https://climate.copernicus.eu/sites/default/files/custom-uploads/GCH-2025/GCH2025-full-report.pdf',
      ),
      cite(
        'Magazyn danych klimatycznych Copernicus: wskaźniki komfortu termicznego z reanalizy (Thermal comfort indices derived from ERA5 reanalysis)',
        'https://cds.climate.copernicus.eu/datasets/derived-utci-historical?tab=overview',
      ),
      cite(
        'Usługa Copernicus ds. zmian klimatu: stan klimatu Europy 2025, stres termiczny (European State of the Climate 2025, Thermal stress)',
        'https://climate.copernicus.eu/esotc/2025/thermal-stress',
      ),
      cite(
        'Magazyn danych klimatycznych Copernicus: licencja na używanie produktów Copernicus (Licence to use Copernicus Products)',
        'https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products',
      ),
    ],
  },
  'land-snow-cover': {
    title: 'Pokrywa śnieżna na lądzie',
    cardMeta: 'Narodowe Centrum Danych o Śniegu i Lodzie · marzec 2026 · 0,05 stopnia',
    hook: 'Odsetek dni ze śniegiem na ziemi na lądach całego świata w marcu 2026 roku, widziany przez instrument satelitarny.',
    description:
      'Narodowe Centrum Danych o Śniegu i Lodzie w Stanach Zjednoczonych udostępnia miesięczny produkt o pokrywie śnieżnej ze spektroradiometru o średniej rozdzielczości, instrumentu na satelicie Terra Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej USA. Podaje średnią miesięczną pokrywę śnieżną w komórkach o wielkości 0,05 stopnia, około 5 kilometrów, na globalnej siatce i jest wyprowadzony z produktu dziennego. Wartości miesięczne obejmują okres od 1 marca 2000 roku do dziś.',
    whyOnShelf:
      'Pokrywa śnieżna zmienia się wraz z porami roku i z roku na rok. Ponieważ szereg zaczyna się w marcu 2000 roku, ten sam miesiąc można porównywać przez ponad dwadzieścia pięć lat jednym instrumentem i jedną metodą.',
    howToRead:
      'Każda komórka pokazuje średni procent pokrywy śnieżnej w miesiącu, liczony z dni, w których satelita dobrze widział powierzchnię. Im ciemniejszy niebieski, tym więcej dni ziemia była pod śniegiem: od poniżej 10 procent w najbledszym niebieskim do 90 procent i więcej w najciemniejszym. Ciepły piaskowy kolor na lądzie oznacza mniej niż 0,5 procent śniegu albo brak użytecznych obserwacji. Ocean jest jasnoszaroniebieski. Antarktyda leży poza mapą.',
    caveats:
      'Chmury i ciemność zasłaniają ziemię przed satelitą. Dni bez wyraźnego widoku nie wchodzą do średniej miesięcznej, a w nocy polarnej nie ma obserwacji, więc zimą daleka północ jest częściowo pusta. Produkt zeruje bardzo niskie średnie. Dokładność wykrywania śniegu wynosi od 88 do 93 procent w opublikowanych badaniach, a fałszywy śnieg zauważano w miejscach bez śniegu. Antarktyda jest w produkcie odwzorowana jako w całości pokryta śniegiem ze względów wizualnych, dlatego kontynent pominięto. Do pobrania oryginalnych plików potrzebne jest bezpłatne konto Earthdata Login.',
    licenseNote: realMapCredit('pl', 'land-snow-cover') ?? '',
    imageAlt:
      'Mapa świata: średnia pokrywa śnieżna na lądzie w marcu 2026 roku. Północny ląd jest niebieski tam, gdzie śnieg był częsty, ląd bez śniegu jest piaskowy, ocean jasnoszaroniebieski, a Antarktyda jest pominięta.',
    caption:
      'Średnia pokrywa śnieżna na lądzie w marcu 2026 roku na siatce 0,05 stopnia, z satelity Terra. Antarktyda jest pominięta na mapie.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Odcienie pokazują średnią pokrywę śnieżną w marcu 2026 roku w procentach dni z dobrą widocznością.',
        items: [
          { swatch: sw.snow.under05, label: 'Piaskowy, poniżej 0,5' },
          { swatch: sw.snow.to10, label: 'Bardzo bladoniebieski, od 0,5 do 10' },
          { swatch: sw.snow.to25, label: 'Bladoniebieski, od 10 do 25' },
          { swatch: sw.snow.to50, label: 'Jasnoniebieski, od 25 do 50' },
          { swatch: sw.snow.to75, label: 'Średnioniebieski, od 50 do 75' },
          { swatch: sw.snow.to90, label: 'Niebieski, od 75 do 90' },
          { swatch: sw.snow.to100, label: 'Ciemnoniebieski, od 90 do 100' },
          { swatch: sw.snow.ocean, label: 'Jasnoszaroniebieski, ocean' },
        ],
      },
    ],
    sources: [
      cite(
        'Narodowe Centrum Danych o Śniegu i Lodzie: miesięczna pokrywa śnieżna z satelity Terra, siatka globalna 0,05 stopnia, wersja 61 (MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61)',
        'https://nsidc.org/data/mod10cm/versions/61',
      ),
      cite(
        'Narodowe Centrum Danych o Śniegu i Lodzie: podręcznik użytkownika (MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61, User Guide, PDF)',
        'https://nsidc.org/sites/default/files/mod10cm-v061-userguide_0.pdf',
      ),
      cite(
        'Hall, D. K. i Riggs, G. A. (2021): miesięczna pokrywa śnieżna z satelity Terra, siatka globalna 0,05 stopnia, wersja 61 (MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61), Narodowe Centrum Danych o Śniegu i Lodzie, cyfrowy identyfikator obiektu 10.5067/MODIS/MOD10CM.061',
        'https://doi.org/10.5067/MODIS/MOD10CM.061',
      ),
      cite(
        'Earthdata Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej USA: wskazówki dotyczące użycia i cytowania danych (NASA Earthdata: Data Use and Citation Guidance)',
        'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance',
      ),
    ],
  },
};
