import type { OceansPage } from './oceans';

export const en: OceansPage = {
  metaTitle: 'Oceans — Fix Planet',
  metaDescription:
    'Ocean currents, salinity, sea-surface temperature, and pollution: what they are, why they matter, and maps and numbers from named sources.',
  eyebrow: 'World Ocean',
  title: 'Oceans',
  hubLead: [
    'The World Ocean covers about 71 percent of Earth’s surface. It stores most of the extra heat in the climate system, moves water and salt between basins, and takes up a large share of carbon dioxide from the air.',
    'The shelves below introduce currents, salinity, sea-surface temperature, pollution, and a few published figures. Each map has a named dataset and a date.',
  ],
  choosePanel: 'Choose a shelf',
  filterAria: 'Oceans sections',
  back: '← Oceans',
  tiles: {
    currents: 'Surface currents and the great gyres that steer heat, salt, and life.',
    salinity: 'How salty the sea is, and why that density helps drive the overturning circulation.',
    sst: 'The temperature of the sea surface — the standing climate, and years that run warmer or cooler.',
    pollution: 'Five subtropical garbage patches, oil, phytoplankton blooms, and coastal dead zones.',
    numbers: 'Heat, acidity, plastic, and hypoxia, each from a named paper.',
  },
  panels: {
    currents: 'Currents',
    salinity: 'Salinity',
    sst: 'Sea surface temperature',
    pollution: 'Pollution',
    numbers: 'Numbers',
  },
  leads: {
    currents: [
      'Ocean currents are lasting or recurring flows of water in the World Ocean and adjacent seas. They may be nearly steady, like the great subtropical gyres; periodic, like tidal streams; or irregular, like wind-driven drifts after a storm.',
      'Surface currents are steered by wind, Earth’s rotation (the Coriolis effect), and the shape of the basins. They move heat from the tropics toward the poles, carry salt, nutrients, and larvae, and set the paths of ice and drifting debris.',
      'The map is a 1943 teaching plate of named surface currents and ice limits. Modelled present-day surface flow is in Copernicus Marine and ESR OSCAR.',
    ],
    salinity: [
      'Salinity is the dissolved-salt content of seawater. Open-ocean surface values are typically about 32–37 grams of salt per kilogram of water — practical salinity, numerically close to the PSU scale.',
      'Saltier water is denser. Together with temperature, salinity sets the density that drives thermohaline circulation: the slow overturning that links surface currents to the deep ocean. Rivers, rain, and melting ice freshen the surface; evaporation and sea-ice formation make it saltier.',
      'The figures are NASA Aquarius observations of sea-surface salinity from the 2011–2015 mission.',
    ],
    sst: [
      'Sea-surface temperature (SST) is the temperature of the upper ocean — from a fraction of a millimetre to a few metres, depending on the sensor. It helps set evaporation, storms, marine heatwaves, and the exchange of heat and carbon with the air.',
      'The standing pattern is warm tropics and cold polar seas, with western-boundary currents (Gulf Stream, Kuroshio) as warm filaments. Year-to-year change is easier to read as an anomaly — the departure from a long-term climatology — than on the absolute equator–pole rainbow.',
      'The maps are NASA GHRSST MUR, a blended satellite SST analysis for 1 July, 2003–2025. Anomaly years on this page run 2020–2024.',
    ],
    pollution: [
      'The ocean is polluted in several different ways: persistent plastics, oil from wells and ships, extra nutrients that fuel algal blooms, and the hypoxia that follows when that organic matter decays.',
      'No single map shows all of that. The figures below are separate datasets. The first answers a common question: there are five major subtropical garbage patches — zones of higher plastic concentration in the great gyres, not floating islands. Then a closer North Pacific model, one observed oil spill, a chlorophyll-a composite, and a compilation of coastal dead zones.',
    ],
    numbers: [
      'A few published figures, each from a named source. Ocean heat, surface acidity, plastic, and hypoxia are different measurements. They should not be added into one score.',
    ],
  },
  honestyCurrents:
    'US Army atlas plate, 1943: named surface currents and ice limits. A teaching schematic, not a satellite current field.',
  honestySalinity:
    'NASA Aquarius, 2011–2015. Observed surface salinity in g/kg. Later satellite months: SMAP, in NASA Worldview.',
  honestySst:
    'NASA GHRSST MUR L4, 1 July. Absolute SST is the equator–pole field; anomaly is departure from MUR climatology.',
  honestyPollution:
    'Five figures: five-gyre plastics (Eriksen 2014), North Pacific model (Lebreton 2018), one oil spill, chlorophyll-a, compiled hypoxia.',
  modeSst: 'Absolute SST',
  modeAnomaly: 'SST anomaly',
  fidelitySst: 'Analysis · absolute SST',
  fidelityAnomaly: 'Analysis · SST anomaly',
  fidelitySalinity: 'Satellite · Aquarius SSS',
  fidelityCurrents: 'Schematic · named gyres',
  scrubberAria: 'Sea-surface temperature year',
  salinityAria: 'Salinity stills',
  yearLabel: 'Year',
  sourceLabel: 'Source',
  licenseLabel: 'License',
  vintageLabel: 'Vintage',
  howToReadSst:
    'On absolute maps: red and orange are warm, purple is cold, land is black. Compare basins and western-boundary currents, not a single pixel. On anomaly maps: reds are warmer than the MUR climatology, blues cooler. A red equatorial Pacific is often El Niño.',
  caveatsSst:
    'Each plate is 1 July in a daily analysis, so years can be compared. Cloud gaps are filled by the MUR blend. Anomaly snapshots before 2020 are not on this page.',
  howToReadSalinity:
    'On the 2011 global map, purple and blue mark fresher water (Amazon and Ganges plumes, high latitudes); yellow and red mark saltier subtropical seas, especially the North Atlantic and the Arabian Sea. Units are g/kg. The second figure is a 3-D Atlantic view from the same mission.',
  openWorldviewSst: 'Open NASA Worldview SST →',
  openWorldviewAnom: 'Open NASA Worldview SST anomaly →',
  openWorldviewSmap: 'Open NASA Worldview SMAP salinity →',
  openOscar: 'Open ESR OSCAR (modelled currents) →',
  openCopernicus: 'Open Copernicus Marine viewer →',
  openNoaaPollution: 'Open NOAA marine-pollution surveillance →',
  openNoaaPatches: 'Open NOAA: garbage patches →',
  openOceanColor: 'Open NASA Ocean Color →',
  oscarNote:
    'OSCAR (Ocean Surface Current Analyses Real-time) estimates mixed-layer velocity from satellite sea-surface height, vector winds, and SST, using geostrophy, Ekman drift, and thermal wind. Daily fields at 0.25°, from 1993.',
  smapNote:
    'The SMAP mission continues microwave sea-surface salinity after Aquarius. World Ocean Atlas 2023 is a separate in-situ climatology — bottles, CTDs, and floats, averaged over many years.',
  numbersNote:
    'Copied from the cited papers, with vintage. Heat content is not SST; pH is chemistry, not temperature; a plastic flow is not the stock in a gyre.',
  distinguishTitle: 'What these figures measure',
  distinguish:
    'IPCC AR6: the ocean has taken up about 90 percent of the excess heat in the climate system. Cheng et al. 2024: 0–2000 m ocean heat content in 2023 (and the 2024 update) sat at the top of the instrumental record — a heat inventory of the water column, not the SST map above. Surface pH has fallen by about 0.1 since ~1750, a roughly 26–30 percent rise in hydrogen-ion concentration (IPCC AR6; NOAA PMEL); that is carbonate chemistry. Jambeck et al. 2015 estimated 4.8–12.7 million tonnes of plastic entering the ocean from land in 2010 — a flow, not the mass in the Great Pacific Garbage Patch. Eriksen et al. 2014 estimated at least 5.25 trillion floating particles. Breitburg et al. 2018: more than 500 coastal sites with anthropogenic hypoxia, and expanding open-ocean oxygen-minimum zones (~4.5 million km²).',
  pollutionKinds: {
    patches: {
      title: 'Five garbage patches',
      lead: 'There are five major subtropical gyres with elevated floating plastic: North Pacific, South Pacific, North Atlantic, South Atlantic, and Indian Ocean. A garbage patch is a zone of higher concentration of mostly small fragments, not a solid floating island. The maps are Eriksen et al. 2014 — modelled count density (pieces/km²) by size class, from net tows and visual surveys across all five gyres. The North Pacific patch is the best studied; a western buildup near Japan is part of that same gyre, not a sixth subtropical patch. Arctic and Barents concentrations are sometimes discussed separately and are not one of these five.',
      caption:
        'Eriksen et al. 2014, PLOS ONE. Modelled count density (pieces/km²) in four size classes. CC0. Sampling 2007–2013; not a satellite photo of trash islands. NOAA education materials describe the same five subtropical gyres.',
      imageAlt:
        'Four world maps of modelled floating-plastic count density in four size classes, orange-red accumulations in five subtropical gyres',
      seeAlso: 'Great Pacific Garbage Patch — North Pacific model ↓',
    },
    plastics: {
      title: 'Great Pacific Garbage Patch',
      lead: 'The Great Pacific Garbage Patch, between Hawaii and California, is the best-studied of the five subtropical accumulations — water with more debris in the North Pacific gyre, not a solid island. A western concentration near Japan belongs to the same gyre. Most of the plastic is small fragments. The map shows modelled mass concentration (kg/km²) for August 2015.',
      caption:
        'Lebreton et al. 2018, Scientific Reports. Modelled mass concentration, North Pacific, August 2015. CC BY 4.0.',
      imageAlt:
        'Contour map of modelled plastic mass concentration between Hawaii and California, red core labeled GPGP',
      seeAlso: 'Five subtropical garbage patches ↑',
    },
    oil: {
      title: 'Oil',
      lead: 'Crude oil at the sea surface spreads as a thin film and can be seen from space. The image is NASA Terra MODIS on 24 May 2010, during the Deepwater Horizon blowout in the Gulf of Mexico — one large spill. Operational slick reports use radar and VIIRS at NOAA NESDIS.',
      caption: 'NASA Terra MODIS. Deepwater Horizon oil slick, 24 May 2010. Public domain.',
      imageAlt:
        'Satellite view of the Gulf of Mexico with a dark oil slick south of the Mississippi Delta, May 2010',
    },
    nutrient: {
      title: 'Chlorophyll',
      lead: 'Phytoplankton need light and nutrients. Chlorophyll-a, the green pigment in those cells, is mapped from ocean color. High values often mark upwelling, river plumes, and blooms; the clear subtropical gyres are low. Chlorophyll is a living-biomass proxy, not a nitrate or phosphate map, and not a dead zone.',
      caption:
        'NASA ocean color chlorophyll-a concentration, October 2019. Public domain. Units mg/m³.',
      imageAlt:
        'Mollweide world map of ocean chlorophyll: blue gyres, green coasts and high latitudes, gray land',
    },
    deadzones: {
      title: 'Dead zones',
      lead: 'A dead zone is a stretch of water with too little dissolved oxygen for most animals. Many coastal cases follow eutrophication: extra nitrogen and phosphorus, a bloom, then decay that consumes oxygen. The map marks compiled coastal hypoxic sites after Diaz (2008). Open-ocean oxygen-minimum zones are a related, larger-scale problem.',
      caption:
        'NASA Earth Observatory, Aquatic Dead Zones, after Diaz. Public domain. Vintage: 2008 compilation.',
      imageAlt:
        'World map with red dots on coastal seas marking documented hypoxic dead zones, ocean color in the background',
    },
  },
  units: {
    percent: '% of excess heat',
    pH: 'pH units since ~1750',
    millionTonnes: 'million tonnes / year',
    trillion: 'trillion particles',
    sites: 'coastal sites',
    ohc: 'record 0–2000 m OHC',
  },
  frames: {
    'sst-2003': {
      label: '2003',
      title: 'Absolute SST, 1 July 2003',
      caption:
        'Early MUR analysis. The red equatorial band and purple polar water are the standing climate: tropics warm, high latitudes cold.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2003: red tropics, purple polar oceans, black land',
    },
    'sst-2010': {
      label: '2010',
      title: 'Absolute SST, 1 July 2010',
      caption:
        'The same absolute MUR field. Western-boundary currents — Gulf Stream, Kuroshio — show as warm filaments. A year’s marine heatwave is clearer on the anomaly maps.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2010: red tropics, purple polar oceans, black land',
    },
    'sst-2015': {
      label: '2015',
      title: 'Absolute SST, 1 July 2015',
      caption:
        '2015–16 was a strong El Niño. On an absolute map the equatorial Pacific is always warm; the event itself is on the anomaly shelf.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2015: red tropics, purple polar oceans, black land',
    },
    'sst-2020': {
      label: '2020',
      title: 'Absolute SST, 1 July 2020',
      caption:
        'Midpoint of this July series. Compare with 2020 on the anomaly shelf, where the 2020s heat is easier to see.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2020: red tropics, purple polar oceans, black land',
    },
    'sst-2024': {
      label: '2024',
      title: 'Absolute SST, 1 July 2024',
      caption:
        '2023–24 sat at the top of the ocean-heat record (Cheng et al. 2024). The absolute rainbow still reads as “tropics are warm”; the anomaly mode shows the departure.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2024: red tropics, purple polar oceans, black land',
    },
    'sst-2025': {
      label: '2025',
      title: 'Absolute SST, 1 July 2025',
      caption:
        'Latest 1 July absolute map on this page. Other days: NASA Worldview, the live MUR explorer.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2025: red tropics, purple polar oceans, black land',
    },
    'sst-anom-2020': {
      label: '2020',
      title: 'SST anomaly, 1 July 2020',
      caption:
        'MUR sea-surface temperature minus the MUR climatology. Reds warmer than normal, blues cooler. This layer shows marine heatwaves.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2020: reds and blues on black land',
    },
    'sst-anom-2022': {
      label: '2022',
      title: 'SST anomaly, 1 July 2022',
      caption:
        'The same anomaly layer, 2022. Compare the North Atlantic and equatorial Pacific with 2023–24.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2022: reds and blues on black land',
    },
    'sst-anom-2023': {
      label: '2023',
      title: 'SST anomaly, 1 July 2023',
      caption:
        '2023: a developing El Niño in the equatorial Pacific and a very warm North Atlantic in the public record.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2023: strong reds in the equatorial Pacific and North Atlantic',
    },
    'sst-anom-2024': {
      label: '2024',
      title: 'SST anomaly, 1 July 2024',
      caption:
        'Latest July anomaly on this page. Still an analysis product. Other days: NASA Worldview.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2024: reds and blues on black land',
    },
    'sal-2011': {
      label: '2011',
      title: 'Aquarius first global salinity map',
      caption:
        'NASA Aquarius, 25 August–11 September 2011: the mission’s first global sea-surface salinity map. Microwave SSS, in g/kg. Fresher plumes at the Amazon and Ganges; saltier subtropical Atlantic.',
      imageAlt:
        'Mollweide map of ocean surface salinity from Aquarius, 2011, purple fresh to red salty, gray land',
    },
    'sal-atlantic': {
      label: 'Atlantic',
      title: 'North Atlantic salt maximum (Aquarius, 3-D)',
      caption:
        'NASA Aquarius view of the North Atlantic high-salinity region. Same mission as the global map, different graphic.',
      imageAlt:
        '3-D globe centered on the Atlantic with Aquarius salinity colors from blue to red on gray land',
    },
    'currents-1943': {
      label: '1943',
      title: 'Named gyres',
      caption:
        'Warm surface currents in orange, cold in green; hatched ice at the poles. Gulf Stream, Kuroshio, Humboldt (Peru Current), Agulhas, and other named drifts.',
      imageAlt:
        'Vintage world map of named ocean currents in orange and green with ice-limit hatching at the poles',
    },
  },
  stats: {
    heatShare: {
      label: 'Excess heat in the ocean',
      text: 'About 90 percent of the excess heat in the climate system is stored in the ocean (IPCC AR6 WG1). That is an energy inventory of the water column.',
    },
    ohcRecord: {
      label: 'Ocean heat content, recent peak',
      text: 'Cheng et al. 2024 (Adv. Atmos. Sci.): 0–2000 m ocean heat content in 2023 reached a new instrumental high; 2024 updates remained at the top of the record. Heat content, not a single SST day.',
    },
    phDrop: {
      label: 'Surface pH decline',
      text: 'Open-ocean surface pH has fallen by about 0.1 since ~1750 — a roughly 26–30 percent increase in hydrogen-ion concentration (IPCC AR6; NOAA PMEL). Carbonate chemistry, not temperature.',
    },
    plasticLand: {
      label: 'Plastic from land to ocean',
      text: 'Jambeck et al. 2015, Science: 4.8–12.7 million metric tonnes of plastic waste entered the ocean from land in 2010. A 2010 flow estimate, not the mass sitting in the Great Pacific Garbage Patch.',
    },
    plasticFloat: {
      label: 'Floating plastic particles',
      text: 'Eriksen et al. 2014: at least 5.25 trillion particles (268,940 tonnes) floating, from sampling across the five subtropical gyres. A stock estimate from net tows and a model.',
    },
    deadZones: {
      label: 'Coastal hypoxic sites',
      text: 'Breitburg et al. 2018, Science: more than 500 coastal sites with anthropogenic hypoxia, plus expanding open-ocean oxygen-minimum zones (~4.5 million km²). Diaz’s earlier compilation was already above 400.',
    },
  },
};
