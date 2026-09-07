import type { OceansPage } from './oceans';

export const pl: OceansPage = {
  metaTitle: 'Oceany — Fix Planet',
  metaDescription:
    'Prądy morskie, zasolenie, temperatura powierzchni morza i zanieczyszczenie: czym są, dlaczego mają znaczenie, mapy i liczby z podanymi źródłami.',
  eyebrow: 'Ocean Światowy',
  title: 'Oceany',
  hubLead: [
    'Ocean Światowy pokrywa około 71 procent powierzchni Ziemi. Magazynuje większość nadmiaru ciepła w systemie klimatycznym, przenosi wodę i sól między basenami i pobiera znaczną część dwutlenku węgla z powietrza.',
    'Poniżej: prądy, zasolenie, temperatura powierzchni morza, zanieczyszczenie i kilka opublikowanych liczb. Każda mapa ma nazwany zbiór danych i datę.',
  ],
  choosePanel: 'Wybierz półkę',
  filterAria: 'Działy oceanów',
  tiles: {
    currents: 'Prądy powierzchniowe i wielkie wiry, które niosą ciepło, sól i życie.',
    salinity: 'Ile soli jest w morzu i dlaczego gęstość pomaga napędzać cyrkulację głębinową.',
    sst: 'Temperatura powierzchni morza — zwykły klimat i lata cieplejsze albo chłodniejsze od normy.',
    pollution: 'Plastik, ropa, zakwity fitoplanktonu i przybrzeżne martwe strefy.',
    numbers: 'Ciepło, kwasowość, plastik i hipoksja — każda wielkość z nazwanej pracy.',
  },
  panels: {
    currents: 'Prądy',
    salinity: 'Zasolenie',
    sst: 'Temperatura powierzchni morza',
    pollution: 'Zanieczyszczenie',
    numbers: 'Liczby',
  },
  leads: {
    currents: [
      'Prądy morskie to trwałe lub powtarzające się przepływy wody w Oceanie Światowym i morzach. Dzieli się je na stałe (wiry podzwrotnikowe), okresowe (pływowe) i nieregularne (znosy wiatrowe po sztormie).',
      'Prądy powierzchniowe kształtuje wiatr, obrót Ziemi (siła Coriolisa) i zarys basenów. Przenoszą ciepło od tropików ku wysokim szerokościom, niosą sól, składniki odżywcze i larwy, wyznaczają drogi lodu i dryfujących odpadów.',
      'Na mapie — tablica dydaktyczna z 1943 r.: nazwane prądy powierzchniowe i granice lodu. Modelowane współczesne pola prądów są w Copernicus Marine i ESR OSCAR.',
    ],
    salinity: [
      'Zasolenie to zawartość rozpuszczonych soli w wodzie morskiej. Przy powierzchni otwartego oceanu wynosi zwykle około 32–37 gramów soli na kilogram wody: zasolenie praktyczne, liczbowo bliskie skali PSU.',
      'Słońsza woda jest gęstsza. Razem z temperaturą zasolenie ustala gęstość, która napędza cyrkulację termohaliniczną — powolny obrót łączący prądy powierzchniowe z głębią. Rzeki, deszcz i topniejący lód słodzą powierzchnię; parowanie i tworzenie lodu morskiego czynią ją słonszą.',
      'Ryciny to obserwacje misji NASA Aquarius (2011–2015): zasolenie powierzchni morza.',
    ],
    sst: [
      'Temperatura powierzchni morza (SST) to temperatura górnej warstwy oceanu — od ułamka milimetra do kilku metrów, zależnie od czujnika. Wpływa na parowanie, sztormy, morskie fale upałów oraz wymianę ciepła i węgla z atmosferą.',
      'Zwykły obraz to ciepłe tropiki i zimne morza polarne; prądy zachodnich granic (Prąd Zatokowy, Kuroshio) widać jako ciepłe nitki. Zmianę z roku na rok łatwiej czytać jako anomalię — odchylenie od wieloletniej klimatologii — niż na bezwzględnej tęczy równik–biegun.',
      'Mapy to analiza NASA GHRSST MUR na 1 lipca, 2003–2025. Anomalie na tej stronie obejmują lata 2020–2024.',
    ],
    pollution: [
      'Ocean zanieczyszcza się na kilka sposobów: trwały plastik, ropa ze studni i statków, nadmiar składników odżywczych, który napędza zakwity, oraz hipoksja, gdy ta materia organiczna się rozkłada.',
      'Jednej mapy na to wszystko nie ma. Poniżej cztery osobne zbiory: model plamy śmieci, jeden zaobserwowany wyciek ropy, zestawienie chlorofilu-a i spis przybrzeżnych martwych stref.',
    ],
    numbers: [
      'Kilka opublikowanych wielkości, każda z nazwanego źródła. Zawartość ciepła oceanu, kwasowość powierzchni, plastik i hipoksja to różne pomiary; nie dodaje się ich do jednego wskaźnika.',
    ],
  },
  honestyCurrents:
    'Atlas armii USA, 1943: nazwane prądy powierzchniowe i granice lodu. Tablica dydaktyczna, nie satelitarne pole prądów.',
  honestySalinity:
    'NASA Aquarius, 2011–2015. Obserwowane zasolenie powierzchni, g/kg. Późniejsze miesiące: SMAP w NASA Worldview.',
  honestySst:
    'NASA GHRSST MUR L4, 1 lipca. Bezwzględna SST to pole równik–biegun; anomalia to odchylenie od klimatologii MUR.',
  honestyPollution:
    'Cztery zbiory danych: modelowany plastik, jeden wyciek ropy, chlorofil-a, zestawienie hipoksji.',
  modeSst: 'Bezwzględna SST',
  modeAnomaly: 'Anomalia SST',
  fidelitySst: 'Analiza · bezwzględna SST',
  fidelityAnomaly: 'Analiza · anomalia SST',
  fidelitySalinity: 'Satelita · Aquarius SSS',
  fidelityCurrents: 'Schemat · nazwane wiry',
  scrubberAria: 'Rok temperatury powierzchni morza',
  salinityAria: 'Kadry zasolenia',
  yearLabel: 'Rok',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  vintageLabel: 'Datowanie',
  howToReadSst:
    'Na mapach bezwzględnych: czerwień i pomarańcz to ciepło, fiolet to chłód, ląd jest czarny. Porównuj baseny i prądy zachodnich granic, nie jeden piksel. Na anomaliach: czerwienie cieplejsze od klimatologii MUR, błękity chłodniejsze. Czerwony równikowy Pacyfik to często El Niño.',
  caveatsSst:
    'Każda mapa to 1 lipca w analizie dziennej, żeby lata były porównywalne. Luki chmur wypełnia mieszanka MUR. Anomalii sprzed 2020 nie ma na tej stronie.',
  howToReadSalinity:
    'Na globalnej mapie z 2011 fiolet i błękit oznaczają wodę słodszą (pióropusze Amazonki i Gangesu, wysokie szerokości); żółty i czerwień — słonsze morza podzwrotnikowe, zwłaszcza Atlantyk Północny i Morze Arabskie. Jednostki: g/kg. Druga rycina to przestrzenny widok Atlantyku z tej samej misji.',
  openWorldviewSst: 'Otwórz NASA Worldview SST →',
  openWorldviewAnom: 'Otwórz NASA Worldview, anomalia SST →',
  openWorldviewSmap: 'Otwórz NASA Worldview, zasolenie SMAP →',
  openOscar: 'Otwórz ESR OSCAR (modelowane prądy) →',
  openCopernicus: 'Otwórz Copernicus Marine →',
  openNoaaPollution: 'Otwórz nadzór NOAA nad zanieczyszczeniem morza →',
  openOceanColor: 'Otwórz NASA Ocean Color →',
  oscarNote:
    'OSCAR (Ocean Surface Current Analyses Real-time) szacuje prędkość warstwy mieszanej z satelitarnej wysokości powierzchni morza, wiatru wektorowego i SST — geostrofia, dryf Ekmana, wiatr termiczny. Pola dobowe 0,25°, od 1993 r.',
  smapNote:
    'Misja SMAP kontynuuje mikrofalowe pomiary zasolenia powierzchni po Aquariusie. World Ocean Atlas 2023 to osobna klimatologia in situ: butelki, CTD i pływaki, uśrednienie z wielu lat.',
  numbersNote:
    'Skopiowane z cytowanych prac, z datą. Zawartość ciepła to nie SST; pH to chemia, nie temperatura; przepływ plastiku to nie zapas w wirze.',
  distinguishTitle: 'Co właściwie mierzą te liczby',
  distinguish:
    'IPCC AR6: ocean przyjął około 90 procent nadmiaru ciepła w systemie klimatycznym. Cheng et al. 2024: zawartość ciepła 0–2000 m w 2023 (i aktualizacja 2024) na szczycie instrumentalnego szeregu — zapas ciepła w słupie wody, nie mapa SST powyżej. Powierzchniowe pH spadło o ok. 0,1 od ~1750: to wzrost stężenia jonów wodorowych o mniej więcej 26–30 procent (IPCC AR6; NOAA PMEL), chemia węglanowa. Jambeck et al. 2015: 4,8–12,7 mln ton plastiku z lądu do oceanu w 2010 — przepływ, nie masa w Wielkiej Pacyficznej Plamie Śmieci. Eriksen et al. 2014: co najmniej 5,25 bln pływających cząstek. Breitburg et al. 2018: ponad 500 przybrzeżnych miejsc antropogenicznej hipoksji i rozszerzające się strefy minimum tlenu otwartego oceanu (~4,5 mln km²).',
  pollutionKinds: {
    plastics: {
      title: 'Plastik',
      lead: 'Większość oceanicznego plastiku pochodzi z lądu. Wiatr i prądy powierzchniowe skupiają okruchy w wirach podzwrotnikowych. Wielka Pacyficzna Plama Śmieci, między Hawajami a Kalifornią, to strefa wysokiego stężenia w wirze północnego Pacyfiku — woda z większą ilością odpadów, nie wyspa, po której można chodzić. Mapa pokazuje modelowane stężenie masy (kg/km²) dla sierpnia 2015.',
      caption:
        'Lebreton et al. 2018, Scientific Reports. Modelowane stężenie masy, północny Pacyfik, sierpień 2015. CC BY 4.0.',
      imageAlt:
        'Mapa izolinii modelowanego stężenia masy plastiku między Hawajami a Kalifornią, czerwone jądro GPGP',
    },
    oil: {
      title: 'Ropa',
      lead: 'Ropa na powierzchni morza rozlewa się cienką błoną i bywa widoczna z kosmosu. Zdjęcie to NASA Terra MODIS z 24 maja 2010, wyciek Deepwater Horizon w Zatoce Meksykańskiej — jeden duży przypadek. Bieżące meldunki o plamach: radar i VIIRS w NOAA NESDIS.',
      caption: 'NASA Terra MODIS. Plama ropy Deepwater Horizon, 24 maja 2010. Domena publiczna.',
      imageAlt:
        'Widok satelitarny Zatoki Meksykańskiej z ciemną plamą ropy na południe od delty Missisipi, maj 2010',
    },
    nutrient: {
      title: 'Chlorofil',
      lead: 'Fitoplankton potrzebuje światła i składników odżywczych. Chlorofil-a, zielony barwnik tych komórek, mapuje się z koloru oceanu. Wysokie wartości często znaczą upwelling, pióropusze rzeczne i zakwity; przejrzyste wiry podzwrotnikowe są ubogie. Chlorofil to przybliżenie żywej biomasy, nie mapa azotanów ani fosforanów i nie martwa strefa.',
      caption:
        'NASA ocean color, stężenie chlorofilu-a, październik 2019. Domena publiczna. Jednostki mg/m³.',
      imageAlt:
        'Mapa Mollweide chlorofilu oceanu: niebieskie wiry, zielone wybrzeża i wysokie szerokości, szary ląd',
    },
    deadzones: {
      title: 'Martwe strefy',
      lead: 'Martwa strefa to odcinek wody, w którym rozpuszczonego tlenu jest za mało dla większości zwierząt. Przy brzegach często wynika z eutrofizacji: nadmiar azotu i fosforu, zakwit, potem rozkład, który zużywa tlen. Mapa oznacza zestawione przybrzeżne miejsca hipoksji według Diaza (2008). Strefy minimum tlenu otwartego oceanu to pokrewny, większy problem.',
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
        'Wczesna analiza MUR. Czerwony pas równikowy i fioletowa woda polarna to zwykły klimat: tropiki ciepłe, wysokie szerokości zimne.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2003: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2010': {
      label: '2010',
      title: 'Bezwzględna SST, 1 lipca 2010',
      caption:
        'To samo bezwzględne pole MUR. Prądy zachodnich granic — Prąd Zatokowy, Kuroshio — widać jako ciepłe nitki. Roczna morska fala upałów jest wyraźniejsza na mapach anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2010: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2015': {
      label: '2015',
      title: 'Bezwzględna SST, 1 lipca 2015',
      caption:
        '2015–16 to silne El Niño. Na mapie bezwzględnej równikowy Pacyfik zawsze jest ciepły; samo zdarzenie widać na półce anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2015: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2020': {
      label: '2020',
      title: 'Bezwzględna SST, 1 lipca 2020',
      caption:
        'Środek tej lipcowej serii. Porównaj z 2020 na półce anomalii: tam ciepło lat dwudziestych widać lepiej.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2020: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2024': {
      label: '2024',
      title: 'Bezwzględna SST, 1 lipca 2024',
      caption:
        '2023–24 na szczycie zapisu ciepła oceanu (Cheng et al. 2024). Bezwzględna tęcza wciąż czyta się jako „tropiki są ciepłe”; odchylenie widać w trybie anomalii.',
      imageAlt:
        'Mapa równoodległościowa temperatury powierzchni morza, 1 lipca 2024: czerwone tropiki, fioletowe oceany polarne, czarny ląd',
    },
    'sst-2025': {
      label: '2025',
      title: 'Bezwzględna SST, 1 lipca 2025',
      caption:
        'Najnowsza bezwzględna mapa na 1 lipca na tej stronie. Inne dni: żywy MUR w NASA Worldview.',
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
        '2023: rozwijające się El Niño na równikowym Pacyfiku i bardzo ciepły Północny Atlantyk w publicznym zapisie.',
      imageAlt:
        'Mapa równoodległościowa anomalii SST, 1 lipca 2023: silne czerwienie na równikowym Pacyfiku i Północnym Atlantyku',
    },
    'sst-anom-2024': {
      label: '2024',
      title: 'Anomalia SST, 1 lipca 2024',
      caption:
        'Najnowsza lipcowa anomalia na tej stronie. Nadal produkt analizy. Inne dni: NASA Worldview.',
      imageAlt: 'Mapa równoodległościowa anomalii SST, 1 lipca 2024: czerwienie i błękity na czarnym lądzie',
    },
    'sal-2011': {
      label: '2011',
      title: 'Pierwsza globalna mapa zasolenia Aquarius',
      caption:
        'NASA Aquarius, 25 sierpnia – 11 września 2011: pierwsza globalna mapa zasolenia powierzchni tej misji. Mikrofalowe SSS, g/kg. Słodsze pióropusze Amazonki i Gangesu; słonszy Atlantyk podzwrotnikowy.',
      imageAlt:
        'Mapa Mollweide zasolenia powierzchni oceanu z Aquariusa, 2011, od fioletu słodkiego do czerwieni słonej',
    },
    'sal-atlantic': {
      label: 'Atlantyk',
      title: 'Maksimum soli na Atlantyku Północnym (Aquarius, 3-D)',
      caption:
        'Widok NASA Aquarius północnoatlantyckiego obszaru wysokiego zasolenia. Ta sama misja co mapa globalna, inna grafika.',
      imageAlt:
        'Globus 3-D z centrum na Atlantyku, kolory zasolenia Aquarius od niebieskiego do czerwonego',
    },
    'currents-1943': {
      label: '1943',
      title: 'Nazwane wiry',
      caption:
        'Ciepłe prądy powierzchniowe pomarańczem, zimne zielenią; przy biegunach kreskowanie lodu. Prąd Zatokowy, Kuroshio, Prąd Humboldta (Peruwiański), Agulhas i inne nazwane dryfy.',
      imageAlt:
        'Dawna mapa świata nazwanych prądów oceanicznych w pomarańczu i zieleni z kreskowaniem lodu przy biegunach',
    },
  },
  stats: {
    heatShare: {
      label: 'Nadmiar ciepła w oceanie',
      text: 'Około 90 procent nadmiaru ciepła w systemie klimatycznym jest magazynowane w oceanie (IPCC AR6 WG1). To zapas energii w słupie wody.',
    },
    ohcRecord: {
      label: 'Zawartość ciepła oceanu, niedawny szczyt',
      text: 'Cheng et al. 2024 (Adv. Atmos. Sci.): zawartość ciepła 0–2000 m w 2023 osiągnęła nowe instrumentalne maksimum; aktualizacje 2024 zostają na szczycie szeregu. Zawartość ciepła, nie jeden dzień SST.',
    },
    phDrop: {
      label: 'Spadek powierzchniowego pH',
      text: 'pH powierzchni otwartego oceanu spadło o ok. 0,1 od ~1750 — wzrost stężenia jonów wodorowych o mniej więcej 26–30 procent (IPCC AR6; NOAA PMEL). Chemia węglanowa, nie temperatura.',
    },
    plasticLand: {
      label: 'Plastik z lądu do oceanu',
      text: 'Jambeck et al. 2015, Science: 4,8–12,7 mln ton metrycznych odpadów plastikowych trafiło do oceanu z lądu w 2010. Szacunek przepływu z 2010, nie masa w Wielkiej Pacyficznej Plamie Śmieci.',
    },
    plasticFloat: {
      label: 'Pływające cząstki plastiku',
      text: 'Eriksen et al. 2014: co najmniej 5,25 bln cząstek (268 940 ton) na powierzchni. Szacunek zasobu z zaciągów sieci i modelu.',
    },
    deadZones: {
      label: 'Przybrzeżne miejsca hipoksji',
      text: 'Breitburg et al. 2018, Science: ponad 500 przybrzeżnych miejsc antropogenicznej hipoksji plus rozszerzające się strefy minimum tlenu otwartego oceanu (~4,5 mln km²). Wcześniejsze zestawienie Diaza miało już ponad 400.',
    },
  },
};
