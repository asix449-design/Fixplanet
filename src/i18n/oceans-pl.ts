import type { OceansPage } from './oceans';

export const pl: OceansPage = {
  metaTitle: 'Oceany — Fix Planet',
  metaDescription:
    'Monitorowanie oceanu ze źródłami: NASA SST, zasolenie Aquarius, schemat prądów oraz osobne mapy plastiku, ropy, chlorofilu i hipoksji — nie fałszywy „żywy ocean”.',
  choosePanel: 'Wybierz półkę',
  filterAria: 'Działy oceanów',
  tiles: {
    currents: 'Nazwane gyre’y jako schemat. Żywy OSCAR to model — Copernicus / ESR.',
    salinity: 'Pierwsza globalna mapa NASA Aquarius. SMAP jest w Worldview, nie jako film u nas.',
    sst: 'GHRSST MUR, bezwzględna SST 2003–2025 oraz anomalie z lat, które GIBS naprawdę oddaje.',
    pollution: 'Plastik, ropa, chlorofil, martwe strefy — cztery zbiory, nie jeden fałszywy raster.',
    numbers: 'Ciepło oceanu, pH, szacunki plastiku, hipoksja — z cytatem i datą.',
  },
  panels: {
    currents: 'Prądy',
    salinity: 'Zasolenie',
    sst: 'Temperatura powierzchni morza',
    pollution: 'Zanieczyszczenie',
    numbers: 'Liczby',
  },
  leads: {
    currents:
      'Nie hostujemy ciągłej globalnej animacji prądów. OSCAR to model NASA z wysokości powierzchni morza, wiatru i SST — nie sfilmowany prąd. Poniżej płyta z 1943 r. (armia USA) z nazwanymi gyre’ami. Żywy podgląd: Copernicus Marine albo ESR OSCAR.',
    salinity:
      'Hostowane kadry to NASA Aquarius (misja 2011–2015). To obserwowane zasolenie powierzchni, gramy soli na kilogram wody. SMAP kontynuuje szereg; żywa warstwa jest w Worldview. World Ocean Atlas to klimatologia, nie dzień.',
    sst: 'Główne sterowanie: NASA GHRSST MUR L4, bezwzględna temperatura powierzchni morza na 1 lipca, 2003–2025. To mieszana analiza satelitarnej SST, nie jeden sensor. Anomalia pokazuje odchylenie od klimatologii MUR — tęcza równik–biegun inaczej ukrywa ocieplenie.',
    pollution:
      'Nie ma uczciwego jednego rastra „zanieczyszczenie oceanu”. Plastik tutaj to model stężenia w północnym Pacyfiku (Lebreton 2018). Ropa to jeden kadr NASA MODIS (Deepwater Horizon), nie globalna klimatologia plam. Chlorofil-a to przybliżenie zakwitów, nie mapa azotanów. Martwe strefy to zestawienie hipoksji, nie tlen z tego tygodnia.',
    numbers:
      'Tylko opublikowane liczby. Ciepło, kwasowość, plastik i hipoksja to różne rejestry. Nie dodawaj ich do jednego fałszywego indeksu zdrowia oceanu.',
  },
  honestyCurrents:
    'Ciągłej globalnej animacji prądów nie da się uczciwie hostować. Warstwy OSCAR w GIBS to składowe strefowa i południkowa; nasz snapshot nie maluje mapy prędkości. Płyta z 1943 r. to schemat nazwanych prądów i granic lodu — nie OSCAR, nie 2025, nie dryftery.',
  honestySalinity:
    'Aquarius skończył się w 2015. Te kadry to nie SMAP i nie World Ocean Atlas. Miesięczne zasolenie SMAP jest w NASA Worldview; nie hostujemy pustej płyty GIBS i nie nazywamy jej zasoleniem.',
  honestySst:
    'Bezwzględna SST to głównie stały gradient równik–biegun. Zmiana rok do roku w tej skali jest mała. Anomalia (2020–2024, lata, które GIBS naprawdę zwraca) to obraz ocieplenia i El Niño. MUR to produkt analizy, mieszana SST ~1 km, nie surowy granulat MODIS.',
  honestyPollution:
    'Nie czytaj tych czterech kadrów jako jednej warstwy. Model plamy śmieci to nie wyciek ropy. Chlorofil to nie nawóz. Zestawienie martwych stref z 2008 r. to nie żywa hipoksja.',
  modeSst: 'Bezwzględna SST',
  modeAnomaly: 'Anomalia SST',
  fidelitySst: 'Analiza · bezwzględna SST',
  fidelityAnomaly: 'Analiza · anomalia SST',
  fidelitySalinity: 'Satelita · Aquarius SSS',
  fidelityCurrents: 'Schemat · nazwane gyre’y',
  scrubberAria: 'Rok temperatury powierzchni morza',
  salinityAria: 'Kadry zasolenia',
  yearLabel: 'Rok',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  vintageLabel: 'Datowanie',
  howToReadSst:
    'Na płytach bezwzględnych: czerwień/pomarańcz to ciepło, fiolet to chłód. Ląd jest czarny. Porównuj baseny i prądy zachodnich granic (Golfstrom, Kuroshio), nie jeden piksel. Na anomaliach: czerwienie cieplejsze od klimatologii MUR, błękity chłodniejsze. Czerwony równikowy Pacyfik to często El Niño, nie „cały ocean wrzał”.',
  caveatsSst:
    '1 lipca to jeden dzień w analizie dziennej. Luki chmur wypełnia mieszanka MUR. Hostujemy 1 lipca, żeby lata były porównywalne. Anomalie sprzed 2020 nie wyrenderowały się w snapshotach GIBS — nie wymyślamy ich.',
  howToReadSalinity:
    'Na globalnej płycie 2011: fiolet/błękit to woda słodsza (Amazonka, Zatoka Bengalska, wysokie szerokości); żółty/czerwień to słonsza (subtropikalny Atlantyk, Morze Arabskie). Jednostki g/kg, blisko praktycznego zasolenia. Drugi kadr to widok 3-D Atlantyku z tej samej misji — nie późniejszy rok.',
  openWorldviewSst: 'Otwórz NASA Worldview SST →',
  openWorldviewAnom: 'Otwórz NASA Worldview, anomalia SST →',
  openWorldviewSmap: 'Otwórz NASA Worldview, zasolenie SMAP →',
  openOscar: 'Otwórz ESR OSCAR (modelowane prądy) →',
  openCopernicus: 'Otwórz Copernicus Marine →',
  openNoaaPollution: 'Otwórz nadzór NOAA nad zanieczyszczeniem morza →',
  openOceanColor: 'Otwórz NASA Ocean Color →',
  gfwStyleNote:
    'Ta sama uczciwość co Lasy → Global Forest Watch: kilka legalnych kadrów u nas, żywy podgląd u źródła, którego nie mirroringujemy.',
  oscarNote:
    'Prędkości warstwy mieszanej OSCAR liczy się z satelitarnego SSH, wiatru wektorowego i SST (geostrofia, Ekman, wiatr termiczny). Pola dobowe 0,25°, od 1993. To nie prądomierz na każdym kwadracie oceanu.',
  smapNote:
    'Zasolenie SMAP (miesięczne RSS / 8 dni) trwa po Aquariusie. World Ocean Atlas 2023 to klimatologia in situ (dekady, butelki i pływaki) — inny produkt.',
  numbersNote:
    'Skopiowane z wymienionych publikacji. Nie interpolowaliśmy holocenowego filmu pH ani spisu plastiku na 2026.',
  distinguishTitle: 'Ciepło to nie pH. Chlorofil to nie plastik. Gyre to nie wyspa śmieci.',
  distinguish:
    'IPCC AR6: ocean przyjął około 90 procent nadmiaru ciepła w systemie klimatycznym. Cheng et al. 2024: zawartość ciepła 0–2000 m w 2023 (i aktualizacja 2024) na szczycie instrumentalnego szeregu — to inwentarz ciepła, nie SST na mapie. Powierzchniowe pH spadło o ok. 0,1 od ~1750 (mniej więcej +30 procent stężenia jonów wodorowych); to chemia, nie temperatura. Jambeck 2015: 4,8–12,7 mln ton plastiku z lądu do oceanu w 2010 — przepływ, nie zapas w Wielkiej Pacyficznej Plamie Śmieci. Eriksen 2014: co najmniej 5,25 bln pływających cząstek. Breitburg 2018: ponad 500 przybrzeżnych miejsc antropogenicznej hipoksji i rozszerzające się strefy minimum tlenu. Nic z tego nie jest jednym „indeksem zanieczyszczenia”.',
  pollutionKinds: {
    plastics: {
      title: 'Plastik — modelowane stężenie w północnym Pacyfiku',
      lead: 'Nie zdjęcie satelitarne śmieci. Nie globalny raster plastiku. Lebreton et al. 2018: modelowane stężenie masy (kg/km²) dla sierpnia 2015 w Wielkiej Pacyficznej Plamie Śmieci. „Plama” to strefa wysokiego stężenia w gyre, nie wyspa, po której można chodzić.',
      caption:
        'Lebreton et al. 2018, Scientific Reports. Modelowane stężenie masy, północny Pacyfik, sierpień 2015. CC BY 4.0.',
      imageAlt:
        'Mapa izolinii modelowanego stężenia masy plastiku między Hawajami a Kalifornią, czerwone jądro GPGP',
    },
    oil: {
      title: 'Ropa — jeden zaobserwowany wyciek, nie globalna mapa ropy',
      lead: 'NASA Terra MODIS, 24 maja 2010: plama Deepwater Horizon w Zatoce Meksykańskiej. To kadr zdarzenia. Nie ma na stronie uczciwej globalnej klimatologii „zanieczyszczenia ropą”. Bieżące raporty SAR/VIIRS: NOAA NESDIS.',
      caption: 'NASA Terra MODIS. Plama ropy Deepwater Horizon, 24 maja 2010. Domena publiczna.',
      imageAlt:
        'Widok satelitarny Zatoki Meksykańskiej z ciemną plamą ropy na południe od delty Missisipi, maj 2010',
    },
    nutrient: {
      title: 'Przybliżenie składników odżywczych — chlorofil-a, nie raster azotanów',
      lead: 'NASA, chlorofil-a z koloru oceanu, październik 2019. Zieleń to więcej barwnika fitoplanktonu. Często idzie za dopływem składników (upwelling, spływ, zakwity), ale to nie mapa azotu ani fosforu i nie martwa strefa.',
      caption:
        'NASA ocean color, stężenie chlorofilu-a, październik 2019. Domena publiczna. Jednostki mg/m³.',
      imageAlt:
        'Mapa Mollweide chlorofilu oceanu: niebieskie gyre’y, zielone wybrzeża i wysokie szerokości, szary ląd',
    },
    deadzones: {
      title: 'Martwe strefy — zestawienie miejsc hipoksji',
      lead: 'NASA Earth Observatory według Roberta Diaza (VIMS): czerwone punkty to przybrzeżne strefy hipoksji związane z eutrofizacją, zestawienie z 2008 r. To nie prognoza Zatoki Meksykańskiej na ten rok i nie to samo co płyta chlorofilu.',
      caption:
        'NASA Earth Observatory, Aquatic Dead Zones, według Diaza. Domena publiczna. Datowanie: zestawienie 2008.',
      imageAlt:
        'Mapa świata z czerwonymi punktami na morzach przybrzeżnych — udokumentowane hipoksyczne martwe strefy',
    },
  },
  units: {
    percent: '% nadmiaru ciepła',
    pH: 'jednostek pH od ~1750',
    millionTonnes: 'mln ton / rok',
    trillion: 'bln cząstek',
    sites: 'miejsc przybrzeżnych',
    ohc: 'rekord OHC 0–2000 m',
  },
  frames: {
    'sst-2003': {
      label: '2003',
      title: 'Bezwzględna SST, 1 lipca 2003',
      caption:
        'Wczesna era analizy MUR. Czerwony pas równikowy i fioletowa woda polarna to stały gradient. To nie mapa anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2003: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2010': {
      label: '2010',
      title: 'Bezwzględna SST, 1 lipca 2010',
      caption:
        'To samo bezwzględne pole MUR. Prądy zachodnich granic (Golfstrom, Kuroshio) jako ciepłe filamenty. Roczna morska fala upałów łatwiej widać na półce anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2010: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2015': {
      label: '2015',
      title: 'Bezwzględna SST, 1 lipca 2015',
      caption:
        '2015–16 to silne El Niño w zapisie klimatycznym. Na płycie bezwzględnej równikowy Pacyfik zawsze jest ciepły; zdarzenie widać na anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2015: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2020': {
      label: '2020',
      title: 'Bezwzględna SST, 1 lipca 2020',
      caption:
        'Środek ery satelitarnej w tym scrubberze. Porównaj z 2020 na półce anomalii — tam widać ciepło lat 2020.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2020: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2024': {
      label: '2024',
      title: 'Bezwzględna SST, 1 lipca 2024',
      caption:
        '2023–24 na szczycie zapisu ciepła oceanu (Cheng et al. 2024). Bezwzględna tęcza wciąż wygląda jak „tropiki są ciepłe”. Otwórz tryb anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2024: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2025': {
      label: '2025',
      title: 'Bezwzględna SST, 1 lipca 2025',
      caption:
        'Najnowsza bezwzględna płyta na 1 lipca, którą hostujemy. Inne dni — żywy MUR w NASA Worldview.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2025: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-anom-2020': {
      label: '2020',
      title: 'Anomalia SST, 1 lipca 2020',
      caption:
        'SST MUR minus klimatologia MUR. Czerwienie cieplejsze od normy, błękity chłodniejsze. Ta warstwa pokazuje morskie fale upałów.',
      imageAlt: 'Mapa równoodległościowa anomalii SST, 1 lipca 2020: czerwienie i błękity na czarnym lądzie',
    },
    'sst-anom-2022': {
      label: '2022',
      title: 'Anomalia SST, 1 lipca 2022',
      caption: 'Ta sama warstwa anomalii, 2022. Porównaj Północny Atlantyk i równikowy Pacyfik z 2023–24.',
      imageAlt: 'Mapa równoodległościowa anomalii SST, 1 lipca 2022: czerwienie i błękity na czarnym lądzie',
    },
    'sst-anom-2023': {
      label: '2023',
      title: 'Anomalia SST, 1 lipca 2023',
      caption:
        '2023: rozwijające się El Niño na równikowym Pacyfiku i bardzo ciepły Północny Atlantyk. Anomalia, nie bezwzględna SST.',
      imageAlt:
        'Mapa równoodległościowa anomalii SST, 1 lipca 2023: silne czerwienie na równikowym Pacyfiku i Północnym Atlantyku',
    },
    'sst-anom-2024': {
      label: '2024',
      title: 'Anomalia SST, 1 lipca 2024',
      caption:
        'Najnowsza lipcowa anomalia, którą hostujemy. Nadal produkt analizy. Inne dni — Worldview.',
      imageAlt: 'Mapa równoodległościowa anomalii SST, 1 lipca 2024: czerwienie i błękity na czarnym lądzie',
    },
    'sal-2011': {
      label: '2011',
      title: 'Pierwsza globalna mapa zasolenia Aquarius',
      caption:
        'NASA Aquarius, 25 sie – 11 wrz 2011: pierwsze globalne zasolenie powierzchni z tej misji. Obserwowane mikrofalowe SSS, nie klimatologia WOA. Słodsze pióropusze Amazonki i Gangesu; słonszy subtropikalny Atlantyk.',
      imageAlt:
        'Mapa Mollweide zasolenia powierzchni oceanu z Aquariusa, 2011, od fioletu słodkiego do czerwieni słonej',
    },
    'sal-atlantic': {
      label: 'Atlantyk',
      title: 'Słona plama Atlantyku, Aquarius (3-D)',
      caption:
        'Wizualizacja NASA Aquarius północnoatlantyckiego obszaru wysokiego zasolenia. Ta sama misja, inna grafika — nie późniejszy rok i nie SMAP.',
      imageAlt:
        'Globus 3-D z centrum na Atlantyku, kolory zasolenia Aquarius od niebieskiego do czerwonego',
    },
    'currents-1943': {
      label: '1943',
      title: 'Nazwane gyre’y (schemat)',
      caption:
        'Atlas armii USA, 1943: ciepłe i zimne prądy powierzchniowe, granice lodu, nazwane dryfy (Golfstrom, Kuroshio, Humboldt, Agulhas). Schemat dydaktyczny. Nie OSCAR, nie altimetria satelitarna, nie 2025.',
      imageAlt:
        'Vintage’owa mapa świata nazwanych prądów oceanicznych w pomarańczu i zieleni z kreskowaniem lodu przy biegunach',
    },
  },
  stats: {
    heatShare: {
      label: 'Nadmiar ciepła w oceanie',
      text: 'Około 90 procent nadmiaru ciepła w systemie klimatycznym jest magazynowane w oceanie (IPCC AR6 WG1). To inwentarz energii, nie tęcza SST na półce map.',
    },
    ohcRecord: {
      label: 'Zawartość ciepła oceanu, niedawny szczyt',
      text: 'Cheng et al. 2024 (Adv. Atmos. Sci.): zawartość ciepła 0–2000 m w 2023 osiągnęła nowe instrumentalne maksimum, aktualizacje 2024 zostają na szczycie szeregu. Zawartość ciepła, nie jeden dzień SST.',
    },
    phDrop: {
      label: 'Spadek powierzchniowego pH',
      text: 'pH powierzchni otwartego oceanu spadło o ok. 0,1 od ~1750 — mniej więcej 26–30 procentowy wzrost stężenia jonów wodorowych (IPCC AR6; NOAA PMEL). Chemia, nie temperatura, i nie mapa na tej stronie.',
    },
    plasticLand: {
      label: 'Plastik z lądu do oceanu',
      text: 'Jambeck et al. 2015, Science: 4,8–12,7 mln ton metrycznych odpadów plastikowych trafiło do oceanu z lądu w 2010. Szacunek przepływu z 2010, nie masa w Wielkiej Pacyficznej Plamie Śmieci.',
    },
    plasticFloat: {
      label: 'Pływające cząstki plastiku',
      text: 'Eriksen et al. 2014: co najmniej 5,25 bln cząstek (268 940 ton) na powierzchni. Szacunek zasobu z zaciągów sieci i modelu — nie płyta stężenia Lebreton 2018.',
    },
    deadZones: {
      label: 'Przybrzeżne miejsca hipoksji',
      text: 'Breitburg et al. 2018, Science: ponad 500 przybrzeżnych miejsc antropogenicznej hipoksji plus rozszerzające się strefy minimum tlenu otwartego oceanu (~4,5 mln km²). Wcześniejsze zestawienie Diaza miało już >400. Nie płyta chlorofilu.',
    },
  },
};
