import type { OceansPage } from './oceans';

export const en: OceansPage = {
  metaTitle: 'Oceans — Fix Planet',
  metaDescription:
    'A sourced ocean-monitoring page: NASA SST stills, Aquarius salinity, labeled current schematics, and separate plastic / oil / chlorophyll / hypoxia maps — not a fake live ocean.',
  choosePanel: 'Choose a shelf',
  filterAria: 'Oceans sections',
  tiles: {
    currents: 'Named gyres as a schematic. Live OSCAR is a model — open Copernicus / ESR.',
    salinity: 'NASA Aquarius first global map. SMAP lives in Worldview, not as a hosted movie.',
    sst: 'GHRSST MUR absolute SST, 2003–2025, plus anomaly years we can actually host.',
    pollution: 'Plastics, oil, chlorophyll, dead zones — four datasets, not one fake raster.',
    numbers: 'Ocean heat, pH, plastic estimates, hypoxia — each with a citation and vintage.',
  },
  panels: {
    currents: 'Currents',
    salinity: 'Salinity',
    sst: 'Sea surface temperature',
    pollution: 'Pollution',
    numbers: 'Numbers',
  },
  leads: {
    currents:
      'We do not host a continuous global current animation. OSCAR (Ocean Surface Current Analyses Real-time) is a NASA-funded model from sea-surface height, winds, and SST — not a filmed current. The plate below is a 1943 US Army schematic of named gyres. For a live explorer, open Copernicus Marine or ESR OSCAR.',
    salinity:
      'Hosted stills are NASA Aquarius (2011–2015 mission). They are observed sea-surface salinity, in grams of salt per kilogram of seawater. SMAP continues the record; Worldview’s SMAP layer is the live explorer. World Ocean Atlas is a climatology, not a day.',
    sst: 'Primary control: NASA GHRSST MUR L4 absolute sea-surface temperature for 1 July, 2003–2025. That is a blended analysis of satellite SST, not a single sensor snapshot. Switch to anomaly to see departure from the MUR climatology — the equator–pole rainbow otherwise hides the warming signal.',
    pollution:
      'There is no honest single “ocean pollution” raster. Plastics here are a modelled North Pacific concentration (Lebreton 2018). Oil is one NASA MODIS event (Deepwater Horizon), not a global slick climatology. Chlorophyll-a is a bloom proxy, not a nitrate map. Dead zones are compiled hypoxic sites, not this week’s oxygen.',
    numbers:
      'Published figures only. Heat, acidity, plastic, and hypoxia are different ledgers. Do not add them into one fake ocean-health score.',
  },
  honestyCurrents:
    'A continuous, global, high-resolution current animation is not something we can honestly host. OSCAR GIBS layers are zonal and meridional components; they do not paint a speed map in our snapshot tool. The 1943 plate is a schematic of named currents and ice limits — not OSCAR, not 2025, not observed drifters.',
  honestySalinity:
    'Aquarius ended in 2015. These stills are not SMAP and not World Ocean Atlas. SMAP monthly salinity is in NASA Worldview; we do not host a blank GIBS plate and call it salinity.',
  honestySst:
    'Absolute SST is mostly the standing equator–pole gradient. Year-to-year change at this scale is small. Anomaly (2020–2024, the years GIBS actually returns a plate) is the warming/El Niño picture. MUR is an analysis product, ~1 km blended SST, not a raw MODIS granule.',
  honestyPollution:
    'Do not read these four stills as one layer. A garbage-patch model is not an oil spill. Chlorophyll is not fertilizer. A 2008 dead-zone compilation is not live hypoxia.',
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
    'On absolute plates: red/orange is warm, purple is cold. Land is black. Compare basins and western-boundary currents (Gulf Stream, Kuroshio), not a single pixel. On anomaly plates: reds are warmer than the MUR climatology, blues cooler. A red equatorial Pacific is often El Niño, not “the whole ocean boiled.”',
  caveatsSst:
    'July 1 is a single day in a daily analysis. Cloud-filled gaps are filled by the MUR blend. We host 1 July so years are comparable. Anomaly plates before 2020 did not render in GIBS snapshots, so we do not invent them.',
  howToReadSalinity:
    'On the 2011 global plate: purple/blue is fresher (Amazon, Bay of Bengal, high latitudes); yellow/red is saltier (subtropical Atlantic, Arabian Sea). Units are g/kg, roughly practical salinity. The second still is a 3-D Atlantic view of the same mission — not a later year.',
  openWorldviewSst: 'Open NASA Worldview SST →',
  openWorldviewAnom: 'Open NASA Worldview SST anomaly →',
  openWorldviewSmap: 'Open NASA Worldview SMAP salinity →',
  openOscar: 'Open ESR OSCAR (modelled currents) →',
  openCopernicus: 'Open Copernicus Marine viewer →',
  openNoaaPollution: 'Open NOAA marine-pollution surveillance →',
  openOceanColor: 'Open NASA Ocean Color →',
  gfwStyleNote:
    'Same honesty as Forests → Global Forest Watch: we host a few legal frames and send you to the live explorer we do not mirror.',
  oscarNote:
    'OSCAR mixed-layer velocities are calculated from satellite SSH, ocean vector winds, and SST using geostrophy, Ekman, and thermal wind. Daily 0.25° fields, 1993–present. Not a current meter on every square of ocean.',
  smapNote:
    'SMAP sea-surface salinity (RSS monthly / 8-day) continues after Aquarius. World Ocean Atlas 2023 is an in-situ climatology (decades, bottles and floats) — a different product.',
  numbersNote:
    'Copied from the named publications. We did not interpolate a Holocene pH movie or a 2026 plastic census.',
  distinguishTitle: 'Heat is not pH. Chlorophyll is not plastic. A gyre is not a garbage island.',
  distinguish:
    'IPCC AR6: the ocean has taken up about 90 percent of the excess heat in the climate system. Cheng et al. 2024: 0–2000 m ocean heat content in 2023 (and the 2024 update) sat at the top of the instrumental record — that is a heat inventory, not SST on this map. Surface pH has fallen by about 0.1 since ~1750 (roughly a 30 percent rise in hydrogen-ion concentration); that is chemistry, not temperature. Jambeck 2015 estimated 4.8–12.7 million tonnes of plastic entering the ocean from land in 2010 — a flow, not the stock in the Great Pacific Garbage Patch. Eriksen 2014 estimated at least 5.25 trillion floating particles. Breitburg 2018: more than 500 coastal sites with anthropogenic hypoxia, and expanding oxygen-minimum zones. None of these is a single “pollution index.”',
  pollutionKinds: {
    plastics: {
      title: 'Plastics — modelled North Pacific concentration',
      lead: 'Not a satellite photo of trash. Not a global plastic raster. Lebreton et al. 2018: modelled mass concentration (kg/km²) for August 2015 in the Great Pacific Garbage Patch. The “patch” is a high-concentration zone in a gyre, not an island you can walk on.',
      caption:
        'Lebreton et al. 2018, Scientific Reports. Modelled mass concentration, North Pacific, August 2015. CC BY 4.0.',
      imageAlt:
        'Contour map of modelled plastic mass concentration between Hawaii and California, red core labeled GPGP',
    },
    oil: {
      title: 'Oil — one observed spill, not a global oil map',
      lead: 'NASA Terra MODIS, 24 May 2010: the Deepwater Horizon slick in the Gulf of Mexico. This is an event still. There is no honest global “oil pollution” climatology on this page. For ongoing SAR/VIIRS slick reports, use NOAA NESDIS marine-pollution surveillance.',
      caption: 'NASA Terra MODIS. Deepwater Horizon oil slick, 24 May 2010. Public domain.',
      imageAlt:
        'Satellite view of the Gulf of Mexico with a dark oil slick south of the Mississippi Delta, May 2010',
    },
    nutrient: {
      title: 'Nutrient proxy — chlorophyll-a, not a nitrate raster',
      lead: 'NASA ocean-color chlorophyll-a for October 2019. Green is more phytoplankton pigment. That often tracks nutrient supply (upwelling, runoff, blooms) but it is not a map of nitrogen or phosphorus concentration, and it is not a dead zone.',
      caption:
        'NASA ocean color chlorophyll-a concentration, October 2019. Public domain. Units mg/m³.',
      imageAlt:
        'Mollweide world map of ocean chlorophyll: blue gyres, green coasts and high latitudes, gray land',
    },
    deadzones: {
      title: 'Dead zones — compiled hypoxic sites',
      lead: 'NASA Earth Observatory plate after Robert Diaz (VIMS): red dots are coastal eutrophication-associated hypoxic zones in a 2008 compilation. Not this year’s Gulf of Mexico forecast, and not the same thing as the chlorophyll plate.',
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
        'Early MUR analysis era. Red equatorial band and purple polar water are the standing gradient. This is not an anomaly map.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2003: red tropics, purple polar oceans, black land',
    },
    'sst-2010': {
      label: '2010',
      title: 'Absolute SST, 1 July 2010',
      caption:
        'Same MUR absolute field. Western-boundary currents (Gulf Stream, Kuroshio) show as warm filaments. A year’s marine heatwave is easier to see on the anomaly shelf.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2010: red tropics, purple polar oceans, black land',
    },
    'sst-2015': {
      label: '2015',
      title: 'Absolute SST, 1 July 2015',
      caption:
        '2015–16 was a strong El Niño in the climate record. On an absolute plate the equatorial Pacific is always warm; switch to anomaly for the event.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2015: red tropics, purple polar oceans, black land',
    },
    'sst-2020': {
      label: '2020',
      title: 'Absolute SST, 1 July 2020',
      caption:
        'Satellite-era midpoint in this scrubber. Compare with 2020 on the anomaly shelf — that is where the 2020s heat shows.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2020: red tropics, purple polar oceans, black land',
    },
    'sst-2024': {
      label: '2024',
      title: 'Absolute SST, 1 July 2024',
      caption:
        '2023–24 sat at the top of the ocean-heat record (Cheng et al. 2024). The absolute rainbow still looks like “tropics are warm.” Open the anomaly mode.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2024: red tropics, purple polar oceans, black land',
    },
    'sst-2025': {
      label: '2025',
      title: 'Absolute SST, 1 July 2025',
      caption:
        'Latest 1 July absolute plate we host. For other days, NASA Worldview is the live MUR explorer.',
      imageAlt:
        'Equirectangular world map of sea-surface temperature, 1 July 2025: red tropics, purple polar oceans, black land',
    },
    'sst-anom-2020': {
      label: '2020',
      title: 'SST anomaly, 1 July 2020',
      caption:
        'MUR sea-surface temperature minus the MUR climatology. Reds warmer than normal, blues cooler. This is the layer that shows marine heatwaves.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2020: reds and blues on black land',
    },
    'sst-anom-2022': {
      label: '2022',
      title: 'SST anomaly, 1 July 2022',
      caption:
        'Same anomaly layer, 2022. Compare North Atlantic and equatorial Pacific with 2023–24.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2022: reds and blues on black land',
    },
    'sst-anom-2023': {
      label: '2023',
      title: 'SST anomaly, 1 July 2023',
      caption:
        '2023: developing El Niño in the equatorial Pacific and a very warm North Atlantic in the public record. Anomaly, not absolute SST.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2023: strong reds in the equatorial Pacific and North Atlantic',
    },
    'sst-anom-2024': {
      label: '2024',
      title: 'SST anomaly, 1 July 2024',
      caption:
        'Latest anomaly July we host. Still an analysis product. Open Worldview for other days and the live layer.',
      imageAlt:
        'Equirectangular SST anomaly map, 1 July 2024: reds and blues on black land',
    },
    'sal-2011': {
      label: '2011',
      title: 'Aquarius first global salinity map',
      caption:
        'NASA Aquarius, 25 Aug–11 Sep 2011: first global sea-surface salinity from that mission. Observed microwave SSS, not WOA climatology. Fresher plumes at the Amazon and Ganges; saltier subtropical Atlantic.',
      imageAlt:
        'Mollweide map of ocean surface salinity from Aquarius, 2011, purple fresh to red salty, gray land',
    },
    'sal-atlantic': {
      label: 'Atlantic',
      title: 'Aquarius Atlantic salt patch (3-D view)',
      caption:
        'NASA Aquarius visualization of the North Atlantic high-salinity region. Same mission, different graphic — not a later year and not SMAP.',
      imageAlt:
        '3-D globe centered on the Atlantic with Aquarius salinity colors from blue to red on gray land',
    },
    'currents-1943': {
      label: '1943',
      title: 'Named gyres (schematic)',
      caption:
        'US Army Service Forces atlas plate, 1943: warm and cold surface currents, ice limits, named drifts (Gulf Stream, Kuroshio, Humboldt, Agulhas). A teaching schematic. Not OSCAR, not satellite altimetry, not 2025.',
      imageAlt:
        'Vintage world map of named ocean currents in orange and green with ice-limit hatching at the poles',
    },
  },
  stats: {
    heatShare: {
      label: 'Excess heat in the ocean',
      text: 'About 90 percent of the excess heat in the climate system is stored in the ocean (IPCC AR6 WG1). That is an energy inventory, not the SST rainbow on the map shelf.',
    },
    ohcRecord: {
      label: 'Ocean heat content, recent peak',
      text: 'Cheng et al. 2024 (Adv. Atmos. Sci.): 0–2000 m ocean heat content in 2023 reached a new instrumental high, with 2024 updates remaining at the top of the record. Heat content, not a single SST day.',
    },
    phDrop: {
      label: 'Surface pH decline',
      text: 'Open-ocean surface pH has fallen by about 0.1 since ~1750 — roughly a 26–30 percent increase in hydrogen-ion concentration (IPCC AR6; NOAA PMEL). Chemistry, not temperature, and not a map on this page.',
    },
    plasticLand: {
      label: 'Plastic from land to ocean',
      text: 'Jambeck et al. 2015, Science: 4.8–12.7 million metric tonnes of plastic waste entered the ocean from land in 2010. A 2010 flow estimate, not the mass sitting in the Great Pacific Garbage Patch.',
    },
    plasticFloat: {
      label: 'Floating plastic particles',
      text: 'Eriksen et al. 2014: at least 5.25 trillion particles (268,940 tonnes) floating. A stock estimate from net tows and a model — not the Lebreton 2018 North Pacific concentration plate.',
    },
    deadZones: {
      label: 'Coastal hypoxic sites',
      text: 'Breitburg et al. 2018, Science: more than 500 coastal sites with anthropogenic hypoxia, plus expanding open-ocean oxygen-minimum zones (~4.5 million km²). Diaz’s earlier compilation was already >400. Not the chlorophyll plate.',
    },
  },
};
