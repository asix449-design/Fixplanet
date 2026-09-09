import type { MigrationPage } from './migration';
import type { MigrationEntryCopy } from '../data/migration';
import { enToday } from './migration-today-en';

export const page: MigrationPage = {
  metaTitle: 'Migration — Fix Planet',
  metaDescription:
    'Why people, birds, and other animals move: ice ages and coasts, historic mass movements, flyways and fences. Sourced encyclopedia of human dispersal, great migrations, and living routes.',
  eyebrow: 'Encyclopedia',
  title: 'Migration',
  hubLead: [
    'Migration is movement with a reason. Ice sheets open and close land bridges. Seasons shift rain, grass, insects, and plankton. Coasts, mountains, and deserts are barriers until they are not. People later add fences, lights, nets, armies, and a warmer climate on top of those older clocks.',
    'Three shelves, kept apart on purpose. Today is the current-day international map — net migration and migrant stock, labeled as such. Humans is the deep-history event atlas, including the Migration Period. Great migrations are living mass movements: rain-following herds, butterfly range shifts, Arctic flyways. Dates are ranges from named sources, not invented tracks.',
  ],
  chooseShelf: 'Choose a shelf',
  filterAria: 'Migration sections',
  back: '← Migration',
  cardCta: 'Read entry →',
  primarySource: 'Source',
  imageCredit: 'Image',
  sourcesLabel: 'Sources',
  what: 'What it is',
  route: 'Route',
  drivers: 'Why — drivers',
  timing: 'When',
  pressure: 'What is changing',
  wildlifeLink: 'Wildlife species page →',
  tiles: {
    today:
      'Net migration by UN region for 2023, and who already lives where — stock, not this year’s arrivals.',
    humans:
      'Event maps first: Out of Africa, Sahul, farming, Bantu, Austronesian, the Migration Period, the slave trade. Named movements, not a year-by-year census.',
    'great-migrations':
      'Living mass movements and ice-age range shifts: Serengeti wildebeest, butterflies, Arctic birds, plus the mammoth steppe, Beringia, and the Holocene return.',
    birds: 'Flyways, seasons, and species that still cross hemispheres for food and breeding.',
    animals: 'Wildebeest, caribou, whales, bats — curated mammal migrations and their drivers.',
  },
  shelves: {
    today: 'Today',
    humans: 'Humans',
    'great-migrations': 'Great migrations',
    birds: 'Birds',
    animals: 'Animals',
  },
  shelfLeads: {
    today:
      'A current-day map of international migration. Tablets are UN major-region net migration for 2023 (World Population Prospects 2024) — not invented arrivals and departures. Toggle camps (UNHCR) and EU border detections (Frontex) as separate layers. Intra-regional movement often dominates; Africa → Europe is not drawn as the world’s main story.',
    humans:
      'Maps first: a timeline of major documented human-migration events, then a small figure and the encyclopedia. Homo sapiens arose in Africa about 300,000 years ago. Each card names when, where, and why — climate, ice, farming, war, trade, empire, slavery — only where scholarship supports it. This is not a map of everyone every fifty years. Attila and the Migration Period stay here; living movements live on Great migrations.',
    'great-migrations':
      'Living mass movements and climate-era range shifts — not Out of Africa and not a second Attila page. The Migration Period stays on Humans. Cards here name a driver, a season or a documented shift, and a source.',
    birds:
      'Seasonal bird migration is a food-and-breeding machine. Most long-distance species breed at higher latitudes in the long-day summer, then fly toward winter food. BirdLife and CMS describe families of flyways — schematic corridors, not GPS tracks of every flock.',
    animals:
      'Mammal migrations are fewer, heavier, and easier to break with a fence. Rain follows grass; ice and insects push caribou; whales follow krill and calves need warm shallows. Each card names a driver and a pressure.',
  },
  humans: {
    heroEyebrow: 'Our species',
    scientificName: 'Homo sapiens',
    imageAlt:
      'A small drawing of a medieval commoner in a simple cap, brown tunic, rope belt, and hoe — not a king and not a portrait of a named person',
    appearedLabel: 'Appeared',
    appeared:
      'About 300,000 years ago in Africa. Fossils from Jebel Irhoud, Morocco, date to around 315,000 years (Hublin et al. 2017). Genetics and the fossil record place the origin of Homo sapiens on that continent. Earlier Homo species had already left Africa; this page is the later, global spread of our species.',
    populationLabel: 'Population today',
    population:
      'About 8.2 billion people in 2025 (United Nations, World Population Prospects 2024, medium variant). That number is the outcome of the journey below, not its cause.',
    framing: [
      'The usual science frame used on this site: origin in Africa ~300 thousand years ago; Australia / Sahul about 65–50 thousand; a lasting presence in Europe around 45–40 thousand; the Americas about 15–10 thousand, with older claimed sites still debated. Those are arrival windows, not marching years.',
      'Drivers change by step. Wet and dry phases in North Africa and the Levant opened or closed desert corridors. Falling sea level in glacial maxima exposed Sunda and narrowed the water gaps to Sahul. Ice sheets blocked, then later offered, interior routes into the Americas. Coasts, rivers, and game were the resources. Later islands needed boats.',
    ],
    wildlifePointer:
      'Wildlife keeps the species frame — origin, numbers, and the large-mammal genera that vanished after first arrival. This shelf owns the deep-history journey.',
    wildlifeCta: 'Wildlife · Homo sapiens →',
    greatMigrationsCta: 'Great migrations →',
    greatMigrationsNote:
      'Living mass movements — wildebeest, butterflies, Arctic birds — live on a separate shelf. The Migration Period event above is the Attila-era card; it is not duplicated there.',
    mapTitle: 'Where we went, and when',
    mapAria: 'World map of Homo sapiens dispersal with dated arrival steps',
    mapLead:
      'Numbered steps are published arrival windows. Lines are a teaching schematic on NASA Blue Marble, not a reconstruction of every band or a claim that people walked only those arrows.',
    mapAfrica: 'Africa · origin ~300,000 years ago',
    mapOut: 'Out of Africa · ~70,000–50,000',
    mapAustralia: 'Australia / Sahul · ~65,000–50,000',
    mapEurasia: 'Eurasia · ~45,000–40,000',
    mapAmericas: 'Americas · ~15,000–10,000',
    mapIslands: 'Later islands · last few thousand years (New Zealand ~700)',
    mapLegend: 'Numbered arrival steps',
    mapPinAfrica: '~300,000 years',
    mapPinOut: '~70–50 thousand',
    mapPinAustralia: '~65–50 thousand',
    mapPinEurasia: '~45–40 thousand',
    mapPinAmericas: '~15–10 thousand',
    mapPinIslands: 'islands · NZ ~700 years',
    mapSources:
      'Arrival ranges, not exact years. Jebel Irhoud, Hublin et al. 2017; a Late Pleistocene expansion that left most living non-African ancestry, Bergström et al. 2020; Madjedbebe, Clarkson et al. 2017 (some researchers prefer a later Sahul date inside the 65–50 thousand window). Ice-free corridor timing, Pedersen et al. 2016. Glacial climate and sea level: IPCC AR6. Earlier Levant fossils (Skhul/Qafzeh) record presence without a lasting worldwide replacement.',
    mapBaseCredit:
      'Base land: NASA Blue Marble Next Generation (December 2004, public domain) — cloud-free physical Earth, not a political map.',
    honesty:
      'Schematic of dated windows on a physical Earth image. It is not a GPS track, not a genetic tree, and not a claim that climate alone moved people.',
    eventAtlas: {
      title: 'Major migration events',
      lead:
        'A timeline of well-documented movements — not a map of everyone every fifty years. Pleistocene cards are teaching arrows on NASA Blue Marble. Later cards are published plates. Gaps are labeled. We do not invent global population choropleths.',
      honesty:
        'Event cards, not a regular time grid. Each movement has a dated range, a route or region, drivers only where scholarship supports them, and a source. Hunnic pressure stays on this Humans shelf. Great migrations is for living mass movements, not a second Attila page.',
      aria: 'Event map of major human migrations',
      scrubberAria: 'Jump to a migration event',
      eventLabel: 'Event',
      whenLabel: 'When',
      whereLabel: 'Where',
      whyLabel: 'Why — drivers',
      uncertaintyLabel: 'Uncertainty',
      nearestNote: 'Nearest openly licensed plate — not an exact-year census.',
      forthcomingNote:
        'No openly licensed route plate hosted yet. The arrows are a teaching schematic, not a dated invasion map.',
      sourceLabel: 'Source',
      licenseLabel: 'License',
      vintageLabel: 'Dated range',
      schematicCredit:
        'Schematic base: NASA Blue Marble Next Generation (December 2004, public domain) — physical Earth, not a political map and not a population raster.',
      greatMigrationsCta: 'Great migrations →',
      greatMigrationsNote:
        'Living mass movements live on that shelf. This plate is a regional schematic of 100–500 CE. Attila is not duplicated there.',
      coverage: {
        schematic: 'Teaching schematic · dated movement, not a census',
        'farming-europe': 'Western Eurasia farming spread — a gap for other Holocene centres',
        'culture-horizon': 'Archaeological culture range — not a racial or nationalist map',
        regional: 'Europe and the Mediterranean — a gap for the rest of the world',
        seafaring: 'Austronesian seafaring — Pacific and Indian Ocean, not a world census',
        conquest: 'Caliphate expansion 622–750 — conquest and settlement, not a conversion census',
        'empire-extent': 'Empire extent as a proxy for war and flight — not who moved',
        'forced-trade': 'Forced Atlantic trade — not voluntary migration',
        'flow-snapshot': 'One-year flow map — not a century of everyone who left Europe',
      },
      events: {
        'out-of-africa': {
          label: 'Out of Africa',
          title: 'Out of Africa — climate corridors',
          when: 'About 70,000–50,000 years ago. Earlier Levant fossils record presence without a lasting worldwide replacement.',
          where: 'From Africa into the Levant and beyond. The Nile, Red Sea coasts, and Bab-el-Mandeb are discussed corridors — not one proven highway.',
          why: 'Green Sahara and Levant windows, then arid barriers. This is not a single “urge to explore.”',
          uncertainty:
            'Genetics (Bergström et al. 2020) supports a Late Pleistocene expansion that left most living non-African ancestry. The exact path is not drawn as fact.',
          caption: 'Teaching arrow toward Southwest Asia. A dated movement, not GPS of every band.',
          imageAlt: 'Schematic arrow from Africa toward Southwest Asia on NASA Blue Marble',
        },
        sahul: {
          label: 'Sahul',
          title: 'Sahul — coasts, shelves, and water gaps',
          when: 'About 65,000–50,000 years ago. Madjedbebe is the named early site; some reviews sit later inside that window.',
          where: 'Australia, New Guinea, and Tasmania joined as Sahul when sea level was lower. Reaching it still meant water crossings from Sunda.',
          why: 'Glacial sea-level fall exposed shelves and narrowed gaps. Boats or rafts, not an ice-free interior corridor.',
          uncertainty:
            'Clarkson et al. 2017 date Madjedbebe around 65,000 years; other reviews prefer later in 65–50 thousand. Either way it is tens of millennia before the Americas.',
          caption: 'Teaching arrow toward Sahul. Coastal and island-hopping skill, not a marching year.',
          imageAlt: 'Schematic arrow from Sunda toward Sahul on NASA Blue Marble',
        },
        americas: {
          label: 'Americas',
          title: 'Peopling of the Americas — ice, coasts, debate',
          when: 'Working window about 16,000–11,000 years ago for entry and a spreading presence. Older claims remain contested.',
          where: 'Beringia, then the Americas. A Pacific coastal route is the usual working model after Pedersen et al. 2016.',
          why: 'Low sea level linked Siberia and Alaska. Ice sheets blocked the interior until later.',
          uncertainty:
            'White Sands and other older claims exist and are not treated here as settled first-arrival dates. This is not a census of the hemisphere.',
          caption: 'Teaching arrow into the Americas. Ice and coasts, not a year-by-year GPS track.',
          imageAlt: 'Schematic arrow into the Americas on NASA Blue Marble',
        },
        neolithic: {
          label: 'Farming → Europe',
          title: 'Neolithic farming expansions — Anatolia toward Europe',
          when: 'About 9600–4000 BCE on this plate: farming from Southwest Asia into Europe.',
          where:
            'Southwest Asia (Fertile Crescent and Anatolia) into the Balkans, the Mediterranean coasts, and Central Europe. Other Holocene farming centres — China, New Guinea, the Americas, Africa — are a labeled gap on this card.',
          why: 'Crops and animals made denser, more sedentary populations possible. Ancient DNA (Lazaridis and others) supports a substantial movement of people with farming, not only of ideas.',
          uncertainty:
            'Gronenborn et al. condensed map of western Eurasia. Dates are approximate. This is not a world farming census and not a choropleth of all Holocene people.',
          caption: 'Sourced plate of farming spread in western Eurasia. Honest gap: other independent centres are not on this sheet.',
          imageAlt:
            'Map of the spread of farming from Southwest Asia into Europe between about 9600 and 4000 BCE, after Gronenborn and colleagues',
        },
        bantu: {
          label: 'Bantu',
          title: 'Bantu expansion — languages, farming, and a long clock',
          when: 'From about 4000–1000 BCE out of the Nigeria–Cameroon area, continuing through the first millennium CE into eastern and southern Africa.',
          where: 'West-central Africa, then east and south through rainforest and savanna. Today’s Bantu-speaking zone is the outcome, not the route map.',
          why: 'Farming, iron, and population growth in a changing climate. Grollemund et al. 2015 argue a path through the rainforest rather than only around it.',
          uncertainty:
            'A millennia-long series of movements, not one march. No openly licensed dated-route plate is hosted; the arrows are a teaching schematic after named papers.',
          caption: 'Teaching arrows in Africa. Map forthcoming for a sourced route plate — this is not a language choropleth of all people.',
          imageAlt: 'Schematic arrows of the Bantu expansion across Africa on NASA Blue Marble',
        },
        austronesian: {
          label: 'Austronesian',
          title: 'Austronesian expansion — boats, not ice',
          when: 'From about 3000 BCE out of Taiwan; Remote Oceania and New Zealand much later (New Zealand on the order of 700 years ago).',
          where: 'Island Southeast Asia, Madagascar, the Pacific. Pacific and Indian Ocean coverage only.',
          why: 'Seafaring toward new islands, farming packages, and later long-distance voyaging. Madagascar, Remote Oceania, and New Zealand are Holocene stories.',
          uncertainty:
            'Bellwood / Benton chronology as redrawn on Wikimedia. We do not host a global 1500 or 1800 population raster.',
          caption: 'Sourced chronological plate. Seafaring, not an ice corridor.',
          imageAlt: 'Chronological map of Austronesian dispersal across the Pacific',
        },
        steppe: {
          label: 'Steppe herders',
          title: 'Western Steppe herders — Yamnaya horizon, not a nation',
          when: 'Yamnaya archaeological horizon about 3300–2600 BCE. Related movements into Europe and Asia through the third and second millennia BCE.',
          where:
            'Pontic–Caspian steppe. Later related ancestry appears in Corded Ware and other groups. This plate is the culture’s range, not a map of all Indo-European languages.',
          why: 'Pastoralism, wagons, and a mobile economy. Haak et al. 2015 describe a substantial migration from the steppe into Europe. Language shift is inferred, not photographed.',
          uncertainty:
            'This is archaeology and ancient DNA, not a racial map and not a nationalist origin story. The plate shows a culture horizon. Later language spreads are a labeled gap — we do not draw “arrows of peoples” as destiny.',
          caption: 'Yamnaya horizon after Krakkos (CC BY-SA). Careful card: culture range, not “the Aryans.”',
          imageAlt: 'Map of the Yamnaya archaeological culture on the Pontic–Caspian steppe, not a racial map',
        },
        'migration-period': {
          label: 'Migration Period',
          title: 'Late Antique Migration Period — 100–500 CE',
          when: 'About 100–500 CE on this teaching plate. Hunnic pressure on the late Roman world is a named episode inside that span.',
          where: 'Europe and the Mediterranean: Goths, Vandals, Franks, Huns, and others.',
          why: 'Frontier pressure, politics of the late Roman world, and climate stress in some decades. Hunnic pressure is the first Great migrations card.',
          uncertainty:
            'MapMaster schematic after named atlases. Europe-only. Arrows are major incursions, not GPS of every group.',
          caption:
            'Regional schematic. Link to Great migrations for the Hunnic shelf — this page does not duplicate that card.',
          imageAlt:
            'Map of major invasions of the Roman Empire from about 100 to 500 CE, Europe and the Mediterranean',
        },
        islamic: {
          label: 'Early caliphates',
          title: 'Early Islamic expansions — conquest and settlement',
          when: 'About 622–750 CE: Muhammad, the Rashidun caliphs, then the Umayyads.',
          where: 'From Arabia into the Levant, Egypt, North Africa, Iberia, and Iran. Garrison towns (amsar) were settlement nodes.',
          why: 'War, empire, trade routes, and later conversion. Arab tribal settlement is real; most subject populations were not replaced from the peninsula.',
          uncertainty:
            'This plate is caliphate expansion, not a census of Muslims and not a map of every convert. Religious flight and later Turkic movements are separate clocks.',
          caption: 'Public-domain expansion plate, 622–750. Conquest and settlement — not “everyone became Arab.”',
          imageAlt: 'Map of caliphate expansion from 622 to 750 CE across North Africa, the Near East, and Iberia',
        },
        mongol: {
          label: 'Mongol-era',
          title: 'Mongol-era displacements — empire as a proxy',
          when: 'About 1206–1294 CE for the united empire; later khanates continued to move people.',
          where: 'From the Mongolian plateau across China, Central Asia, Iran, and into Eastern Europe. Refugees, captives, and specialists were moved; cities were emptied and sometimes resettled.',
          why: 'Conquest, tribute, and the politics of a steppe empire. Flight ahead of armies is a documented driver. Trade under the pax Mongolica is a later overlay, not the first cause.',
          uncertainty:
            'The plate is greatest territorial extent, not a map of who fled. We do not treat plague as a proven Mongol “driver” here. Coverage is Eurasia; a global choropleth is not invented.',
          caption: 'Empire extent (Ali Zifan). Honest gap: extent is not a displacement census.',
          imageAlt: 'Map of the Mongol Empire at its greatest extent in the thirteenth century',
        },
        'atlantic-slave': {
          label: 'Atlantic slave trade',
          title: 'Atlantic slave trade — forced migration',
          when: 'About 1500 to the 1860s. Peak centuries vary by destination; legal abolition did not end all coerced movement at once.',
          where:
            'West and West-Central Africa to the Caribbean, Brazil, and North America. Intra-African and Indian Ocean trades are related but not this plate’s whole story.',
          why: 'European colonial demand for plantation labour, African political violence and supply, and a commercial system that treated people as cargo. This is forced migration, not “emigration.”',
          uncertainty:
            'Numbers come from voyage records (SlaveVoyages / Eltis & Richardson). The map is a teaching plate after that atlas — not a GPS of every ship, and not a choropleth of living descendants.',
          caption: 'Forced Atlantic routes after the Atlas of the Transatlantic Slave Trade. Honest framing: enslavement, not a free choice.',
          imageAlt: 'Map of African and transatlantic slave-trade routes after Eltis and Richardson',
        },
        'european-emigration': {
          label: 'Mass emigration',
          title: 'Nineteenth-century mass emigration — one clear card',
          when: 'The age of mass Atlantic migration is roughly 1840–1914. Minard’s plate is the year 1858 only.',
          where: 'Europe to the Americas, with other streams to Australia and elsewhere. Britain, Ireland, and the German lands dominate many 1858 flows on this sheet.',
          why: 'Cheap land and wages overseas, famine (Ireland), political aftershocks of 1848, and falling transport costs. Colonization and dispossession of Indigenous peoples are the receiving-side cost of the same ships.',
          uncertainty:
            'Minard mapped one year. Hatton & Williamson describe the longer 19th–early 20th c. wave. This is not a census of every European who left, and not a 20th-century refugee map.',
          caption: 'Public-domain flow map for 1858. One year, not a century grid — and not “where everyone was.”',
          imageAlt: 'Minard’s 1862 flow map of worldwide emigrants in the year 1858',
        },
      },
    },
    sections: [
      {
        id: 'origin',
        title: 'Africa — origin, not a departure lounge',
        body: 'People evolved in Africa. The ~300,000-year date is an origin, not a start gun for walking to Australia. For most of that time the species lived on one continent, with pulses into the Levant that did not found the later worldwide pattern. Africa’s large mammals had already lived beside hominins; that is why this page does not treat African megafauna loss as a “first contact” wave in the same sense as Sahul or the Americas.',
      },
      {
        id: 'out-of-africa',
        title: 'Out of Africa — climate corridors',
        body: 'A Late Pleistocene expansion about 70,000–50,000 years ago is the one that left most of the ancestry of people living outside Africa today (genetic syntheses such as Bergström et al. 2020). Drivers were not a single “urge to explore.” Green Sahara and Levant windows, then arid barriers, steered when a desert was a road and when it was a wall. The Nile, the Red Sea coasts, and the Bab-el-Mandeb are repeatedly discussed corridors; this site does not pick one unproven track and draw it as fact.',
      },
      {
        id: 'sahul',
        title: 'Sahul — coasts, shelves, and water gaps',
        body: 'Australia, New Guinea, and Tasmania were joined as Sahul when sea level was lower. Reaching it still meant water crossings from Sunda. Madjedbebe in northern Australia has been dated around 65,000 years (Clarkson et al. 2017); other reviews sit later in a 65–50 thousand window. Either way it is tens of millennia before the Americas. The driver mix is glacial sea-level fall exposing shelves, coastal and island-hopping skill, and tropical resources — not ice-free interior corridors.',
      },
      {
        id: 'eurasia',
        title: 'Eurasia — cold steppe and a delayed Europe',
        body: 'Modern humans were in parts of Asia before they were numerous in Europe. A lasting European presence is usually placed around 45,000–40,000 years ago, after Neanderthal populations. Drivers include the productivity of mammoth-steppe hunting landscapes in cold stages, river systems, and the slow opening of higher latitudes as climate allowed. This is not the same clock as Sahul.',
      },
      {
        id: 'americas',
        title: 'Americas — ice, coasts, and a still-moving debate',
        body: 'Beringia linked Siberia and Alaska when sea level was low. The Laurentide and Cordilleran ice sheets then blocked the interior. Pedersen et al. 2016 argued the ice-free corridor became biologically viable too late for the first peoples, which is why a Pacific coastal route is the usual working model for a ~16,000–14,000-year entry, with Clovis later. This encyclopedia uses the site’s 15–10 thousand working window for a widespread presence. Older claims (including White Sands, New Mexico) exist and remain contested; they are not treated here as settled first-arrival dates. Megafauna collapse in the Americas is the arrival wave that Wildlife catalogues — useful as context for why a new predator on a new continent matters, not a species list to paste onto this map.',
      },
      {
        id: 'islands',
        title: 'Later islands — boats, not ice',
        body: 'Madagascar, Remote Oceania, and New Zealand are Holocene stories. New Zealand’s first settlement is on the order of 700 years ago (early fourteenth century in the usual archaeological reading). The driver is seafaring toward new land and birds that had never seen people — not an ice corridor. Island extinctions belong on Wildlife’s Extinct shelf; they are the end of a migration, not a flyway.',
      },
    ],
  },
  birds: {
    flywaysTitle: 'Major flyway families',
    flywaysAria: 'Schematic world map of major bird flyway families',
    flywaysLead:
      'BirdLife and the Convention on Migratory Species describe several flyway families linking breeding and non-breeding grounds. The lines below are a teaching schematic on NASA Blue Marble — not satellite tracks, not every species, and not political borders.',
    flywaysHonesty:
      'Schematic. Real flocks follow coasts, wetlands, and thermals inside these envelopes. A godwit’s Alaska–New Zealand crossing is a Pacific shortcut, not the East Asian–Australasian average.',
    flywaysLegend: 'Named flyway families',
    flywayEastAtlantic: 'East Atlantic',
    flywayMississippi: 'Mississippi / Americas',
    flywayPacificAmericas: 'Pacific Americas',
    flywayEaaf: 'East Asian–Australasian',
    flywayCentralAsian: 'Central Asian',
    flywayAfricanEurasian: 'East African–West Asian',
    flywaysSources:
      'BirdLife International flyways programme; CMS. Envelope names vary slightly by author (Boere & Stroud compilations). This plate does not invent a seventh “world flyway.”',
    flywaysBaseCredit:
      'Base land: NASA Blue Marble Next Generation (December 2004, public domain).',
  },
  today: enToday,
};

export const entries: Record<string, MigrationEntryCopy> = {
  'mammoth-steppe-collapse': {
    title: 'Mammoth steppe collapse',
    hook: 'Not a northward flight into the Arctic: cold dry grassland from Europe to Alaska broke into forest, wetland, and tundra — and the last ranges of several giants shrank east.',
    imageAlt:
      'A cold dry grassland at dusk with a distant woolly mammoth and horse — a stand-in for the lost mammoth steppe, not a named bone bed',
    what: 'Between about 20,000 and 8,000 years ago the mammoth steppe — Guthrie’s name for the cold, dry, high-productivity grassland that ran from western Europe across Siberia into Alaska — was replaced by wetter mosaics of forest, bog, and tundra. Horses, steppe bison, woolly rhinos, and mammoths did not only die locally. Their dated last records show ranges shrinking and shifting. For northern Eurasia the last mainland pockets are in the interior east — western Siberia, the Trans-Urals, later island refugia — not a simple march “north into the Arctic.” This card is a range-shift story. The Wildlife Extinct shelf keeps the species pages.',
    route:
      'The Pleistocene envelope was west–east, not a polar highway. As Europe forested, dated last records of giant deer (Megaloceros, the “Irish elk”) leave western Europe earlier and persist in western Siberia to about 7,700 years ago (Stuart, Kosintsev, Higham & Lister 2004). Woolly mammoths vanish from most of the mainland near the Pleistocene–Holocene boundary, then survive on Wrangel Island to about 4,000 years ago — contemporary with early Bronze Age states, not with a last ice pulse (Vartanyan, Garutt & Sher 1993). Altai–Sayan and Kazakhstan steppe–mountain belts keep assemblages closer to the Pleistocene mix than western Europe does; treat that as a biogeographic remainder, not a GPS track of every herd walking east.',
    drivers:
      'Climate and vegetation are the named first-order drivers: warming, wetter soils, paludification, and the spread of closed forest remove the dry grass that the steppe guild needed (Guthrie 2001; the Stuart et al. 2004 contrast between giant deer and mammoth). Human hunting is real where dates and archaeology overlap; it is not a single-cause slogan for every region and every species. Island isolation (Wrangel) is a later, smaller clock.',
    timing:
      'Last Glacial Maximum around 26–19 thousand years ago; the main vegetational replacement in the millennia after. Giant deer: ~7,700 years in western Siberia. Wrangel mammoths: to ~4,000 years. Alaska sedimentary DNA (Haile et al. 2009) reports mammoth and horse to about 10,500 years — later than bones alone. Later bone-based Arctic surveys treat that ghost range as contested (possible reworked sedaDNA). This page labels the disagreement; it does not pick a slogan.',
    pressure:
      'The steppe itself is gone as a Holarctic biome. What remains are fragments and analogies. Do not read a modern reindeer herd as a mammoth-steppe survivor. The extinction pages on Wildlife hold the species lists; this card holds the movement.',
    sourcesNote:
      'Guthrie 2001 for the biome. Stuart et al. 2004 for giant-deer Holocene Siberia and the Wrangel contrast. Vartanyan et al. 1993 for Wrangel. Haile et al. 2009 for Alaska sedaDNA, labeled as disputed by later bone surveys.',
  },
  'beringian-land-bridge': {
    title: 'Beringian land bridge',
    hook: 'When the sea fell, Siberia and Alaska were one plain. Horses crossed it both ways. Not every giant could.',
    imageAlt:
      'A windswept Beringian plain with distant horses and cold haze — a stand-in for the land bridge, not a dated crossing',
    what: 'At glacial low sea level, the Bering Land Bridge joined northeastern Siberia to Alaska as a continuous, often wet and harsh plain — at maximum hundreds of kilometres across, in some reconstructions approaching 1,600 km. It was a filter, not a free highway. Ancient horse genomes show repeated two-way exchange. A Ural–Arctic lineage entered North America several times between about 50,000 and 19,000 years ago; earlier east-to-west pulses left traces back in Eurasia (Vershinina, Librado and colleagues, Science 2025; Vershinina et al. 2021). Bison used the later ice-free corridor in both directions once it opened. Woolly rhinoceros never reached the Americas. American camel and short-faced bear never reached Asia. Absence is evidence too.',
    route:
      'West–east and east–west across the exposed shelf, then — after the Laurentide and Cordilleran ice began to part — along the ice-free corridor of western Canada. Heintzman et al. (2016) date the first southern bison into that corridor at about 13,400 years ago, and northern bison by about 13,000. Horses that later entered the corridor did not expand far; the Science 2025 study reads the deglaciated ground as too wet for cryoxeric steppe. Coastal Pacific routes are a separate, earlier story in the horse genomes, not a second bridge.',
    drivers:
      'Sea level and ice. When the ocean is low the shelf is land; when ice sheets lock water, the bridge exists. Habitat on the bridge — moisture, grass, mountains — decided who could live there long enough to cross. This is not a human Out-of-Africa arrow pasted onto animals.',
    timing:
      'The last long open phase includes the interval ~50–19 thousand years for the horse cline in the 2025 genomes. The ice-free corridor is a latest-Pleistocene door (closed after ~23,000 until ~13,400). The Holocene flood ends the bridge as dry land.',
    pressure:
      'The bridge is underwater. The lesson is permeability: some species crossed many times, some never. Do not invent a census of every crossing, and do not treat Beringia as an empty road.',
    sourcesNote:
      'Science 2025 horse genomes for two-way Late Pleistocene traffic and the Ural lineage. Vershinina et al. 2021 for earlier bidirectional pulses and the filter. Heintzman et al. 2016 for bison in the corridor. Woolly rhino / camel / short-faced bear absences are the standard Holarctic record, not a new count made here.',
  },
  'postglacial-colonization': {
    title: 'After the ice — Europe and North America',
    hook: 'When the ice unlocked land, trees, deer, bears, and wolves moved in — from southern refugia, and in the north from Beringia.',
    imageAlt:
      'An early-Holocene woodland edge with a red deer at the tree line — a stand-in for post-glacial return, not a named pollen site',
    what: 'After the Last Glacial Maximum (~26–19 thousand years ago) huge areas of Europe and North America became habitable again. This is the best-documented Holocene “great migration” of biota — not one species and not one year. Hewitt’s genetic maps (1999, 2000) are the European frame: temperate species waited in Iberia, Italy, the Balkans, and some northern pockets (Carpathians and others), then expanded. Different species used different peninsulas — his grasshopper, hedgehog, and bear paradigms. North America has its own south / east / Beringian sources. Two published tree speeds exist for named eastern North American conifers (Payette et al. 2022). They are not a slogan for every tree.',
    route:
      'Red and roe deer: southern refugia in the cold peak (LGM and early Late Glacial), then a sudden range into Central Europe at the start of Greenland Interstadial 1 / Bølling–Allerød (~14.7 thousand years), and onto the northern European lowlands in the early Holocene (Sommer & Zachos 2009). Brown bear, hedgehog, and wood mouse follow Hewitt-style suture zones where expanding genomes met. Grey wolves are a different geometry: Loog et al. (2020) model living mitochondrial diversity as an expansion from Beringia — or nearby Northeast Asia — at the end of the Last Glacial Maximum, not a simple Iberian walk. In North America the ice-free corridor (Heintzman et al. 2016) is a late door, not the first human road. Trees pulled fauna. Payette et al. (2022), using dated macrofossils, give black spruce a mean 25 km per century from the Bølling–Allerød ice border and jack pine 19 km per century from unglaciated eastern North America to its subarctic limit, where that spread stopped about 3,000 years ago. Fennoscandian plant ecosystems took millennia to assemble; Alsos et al. (2022) find trait and functional diversity stabilizing around 8,000 years ago even as species still arrived.',
    drivers:
      'Climate first: ice retreat, longer seasons, soils that can hold trees. Then habitat. A deer cannot occupy a plain that is still ice or still dry steppe. Humans arrive into this already-moving field; they are not the named cause of the first Holocene tree line.',
    timing:
      'LGM ~26–19 ka; Bølling–Allerød ~14.7 ka; early Holocene filling of northern Europe. One Arctic-Norwegian cave — Nygrotta (Boilard et al. 2024) — already has freshwater fish, brown bear, Norwegian lemming, and mountain hare in a layer about 9,500 years old: colonization close behind local ice. By about 5,800 years the later layer in that cave records cold-adapted species leaving that section. Those are dated layers in one cave, not a European census.',
    pressure:
      'The Holocene forest is itself now cut, warmed, and fenced. This card is the ice-out migration. Later human landscape change belongs on other shelves. Do not fold Pleistocene Humans (Out of Africa) into this biotic return.',
    sourcesNote:
      'Hewitt 1999 and 2000 for refugia and suture zones. Sommer & Zachos 2009 for the deer clock. Loog et al. 2020 for the wolf expansion. Payette et al. 2022 for two named North American tree rates. Alsos et al. 2022 for Fennoscandian trait stability from ~8 ka. Boilard et al. 2024 for Nygrotta. Heintzman et al. 2016 for the North American corridor clock.',
  },
  'butterfly-range-shifts': {
    title: 'Butterfly range shifts',
    hook: 'Not one river crossing: many species have moved poleward or upslope as climates warm — and a few still fly continents.',
    imageAlt: 'A painted lady butterfly on a wildflower, a long-distance migrant used here as a stand-in for climate-era butterfly movement',
    what: '“Mass” here is not a Serengeti loop. It means two sourced facts. First, assemblages of butterflies have shifted their breeding ranges toward the poles and upslope as climates warm — Edith’s checkerspot in western North America (Parmesan 1996) and a global fingerprint across many taxa (Parmesan & Yohe 2003). Second, a few species make true long-distance seasonal migrations. The painted lady (Vanessa cardui) is the best-documented: multi-generational circuits between tropical Africa and Europe (Stefanescu et al. 2013). This card does not invent a single worldwide butterfly highway.',
    route:
      'Range shifts are local-to-regional: colonies wink out at the warm or dry edge and establish farther north or higher. Painted ladies move on a seasonal circuit that can link the Sahel and the Maghreb to Europe, then back — a chain of generations, not one insect flying the whole map. Other famous migrants (monarch in the Americas) are a different system and are not pasted onto this card as if they were the same story.',
    drivers:
      'For range shifts the driver is climate: warming and drying that make a former breeding site fail, and new sites become usable. For painted ladies the driver is seasonal pulses of host plants and nectar. Neither is an ice-age corridor in the human sense.',
    timing:
      'Range-shift papers report decades, not a migration calendar. Painted lady pulses are seasonal and vary by year; treat “invasion years” in Europe as documented peaks, not a fixed timetable.',
    pressure:
      'Climate continues to move the envelope. Habitat loss (grassland, host plants) can block a shift that looks easy on a map. Insect declines are a separate, broader pressure; this card does not invent a global butterfly census.',
    sourcesNote:
      'Parmesan 1996 and Parmesan & Yohe 2003 are the named range-shift papers. Stefanescu et al. 2013 is the painted-lady circuit. “Mass” is labeled as those two meanings, not a wildebeest analogue.',
  },
  'arctic-migratory-birds': {
    title: 'Arctic migratory birds',
    hook: 'Terns, peregrines, shorebirds, geese: the Arctic summer is a food pulse, and the winter is somewhere else.',
    imageAlt: 'Arctic terns flying over a cold northern coast — a stand-in for high-latitude bird migration, not a named colony',
    what: 'This is a class card, not a second Arctic tern encyclopedia and not a third “routes after ice” page. Many birds that breed on Arctic and sub-Arctic tundra leave when the light and insects fail. Arctic terns run pole-to-pole (Egevang et al. 2010). Peregrine falcons follow prey along coasts and flyways. Shorebirds (godwits, knots, sandpipers) stage on a few mudflats. Geese follow grass and thaw. BirdLife and CMS describe the flyway families; CAFF’s Arctic Biodiversity Assessment is the regional synthesis. Seasonal migration already existed in the glacial (models run tens of thousands of years). What changed after the ice was geography: breeding compressed south, especially in North America under the Laurentide sheet, then the Holocene opened the Arctic summer again. Thorup et al. (PNAS, 2021) hindcast the red-backed shrike’s Afro-Palearctic loop for 120,000 years: seasonal migration likely persisted through the glacial, often inside Africa; suitable European summer habitat expanded again after the LGM. That is a modeled class example, not a second bird-routes encyclopedia.',
    route:
      'Breeding in the long Arctic day; non-breeding grounds in temperate or tropical wetlands, coasts, or — for terns — Antarctic pack ice. East Atlantic, East Asian–Australasian, Mississippi, and Pacific Americas flyways all carry Arctic breeders. Gu et al. (Nature, 2021) tracked Eurasian Arctic peregrines on five modern flyways and argue those routes formed as breeding grounds shifted through the Last Glacial Maximum into the Holocene. Thorup’s shrike model is the Afro-Palearctic counterpart: a loop that survived glaciation by shifting breeding latitude, not by inventing migration from scratch. The lines are envelopes, not GPS of every flock. A godwit’s Alaska–New Zealand crossing is a Pacific shortcut, not the average.',
    drivers:
      'Seasonal production. High-latitude summers offer long days and a burst of insects, fish, and new grass. Polar winters do not. Wind and coasts steer the cheap route. This is a food-and-breeding clock, not a refugee story.',
    timing:
      'North in the northern spring, south after breeding. Arrival has shifted earlier in some populations as springs warm — phenology, not a new flyway. Treat headline kilometre records as named tracking papers.',
    pressure:
      'Climate is moving ice edges, thaw dates, and prey. Reclamation of Yellow Sea and other staging flats removes fuel depots. Hunting, disturbance, and fisheries add local losses. CAFF and BirdLife treat Arctic migrants as a shared flyway problem, not a single-species museum piece. The Arctic tern species page stays on the old deep URL if you want the 70,000 km paper alone.',
    sourcesNote:
      'Egevang et al. 2010 for terns; Gu et al. 2021 for peregrine flyway assembly after the ice; Thorup et al. 2021 for the red-backed shrike loop across 120,000 years; BirdLife flyways; CAFF Arctic Biodiversity Assessment; CMS. This card does not invent a headcount of every Arctic migrant or a second bird-routes encyclopedia.',
  },
  'hunnic-invasion': {
    title: 'Hunnic pressure on Rome',
    hook: 'Not Out of Africa: a 4th–5th-century steppe power whose pressure helped push Gothic and other peoples onto Roman frontiers.',
    imageAlt:
      'Museum copy of a Hunnic bronze cauldron type, 4th–5th centuries, photographed in Kazan — a replica, not an original burial find',
    what: 'The Huns were a mounted, multi-ethnic steppe grouping that Roman writers first describe clearly in the 370s CE north of the Black Sea. Their deeper origin is not settled. A link to the Xiongnu of the Chinese frontier is an old hypothesis, not a proof. Ammianus Marcellinus is the fullest near-contemporary narrative for the shock that sent Goths to the Danube; Jordanes, writing in the sixth century, is later and more mythic — useful as a tradition, not as a census. This card is not a portrait of Attila as a race-destiny. It is a named movement in the late-antique record.',
    route:
      'Roman geography for the 370s places Hunnic activity east and north of the Black Sea, then pressure on Alans and Goths west toward the Danube. In 376, Tervingi and Greuthungi asked to cross into the empire. Hunnic groups were not yet the main power sitting on the Danube that year; Heather’s reading of Ammianus is that the cascade was real but not a single stampede of Huns themselves pouring into Italy in 376. By the 430s–450s a Hunnic polity under Rua and then Attila was based in the Carpathian Basin, raiding both Roman halves, fighting on the Catalaunian Plains in 451, entering Italy in 452, and fragmenting after Attila’s death in 453.',
    drivers:
      'Military and political pressure is the driver the sources name for 376: Goths at the river because of Huns (Ammianus; the sequence is in every serious secondary account). Cascading displacement — Alans, Goths, later groups involved in the 406 Rhine crossing — is the mechanism, not a nationalist “invasion of civilization.” Climate is a later, narrower argument. Hakenbeck and Büntgen (2022) use tree-ring hydroclimate to propose that severe drought spells in the Carpathian Basin in the 430s–450s disrupted subsistence and may have intensified Hunnic raiding as a buffer. That is about Attila-era raids, not a proven cause of the 370s appearance, and not the sixth-century Late Antique Little Ice Age (from 536), which comes after Attila. Treat drought as a sourced hypothesis with uncertainty, not as a slogan.',
    timing:
      'Clear Roman notice: 370s. Gothic Danube crossing: 376. Battle of Adrianople: 378. Attila’s high-water mark: 440s–452. Death: 453. The German historiographical label Völkerwanderung (“Migration Period”) is a nineteenth-century frame for these centuries. It is a shelf name in older textbooks, not a racial story and not a date of origin for Homo sapiens.',
    pressure:
      'The western imperial government failed to digest the 376 crossing; Adrianople and later civil wars mattered as much as any steppe “horde.” Later European nationalism recycled Attila as either scourge or ancestor. This encyclopedia does neither. The Hunnic polity broke up after 453; successor groups on the Danube are a different card if this shelf grows. Do not fold this movement into the Pleistocene Humans shelf.',
    sourcesNote:
      'Ammianus 31 is the primary narrative for 376. Heather 1995 is the standard political-military reading. Hakenbeck & Büntgen 2022 is the climate paper for the 430s–450s raids — labeled as such. The photograph is a 2006 museum copy of a cauldron type, not an excavated original.',
  },
  'arctic-tern': {
    title: 'Arctic tern',
    hook: 'The longest regular commute on Earth: polar summer to polar summer, following light and food.',
    imageAlt: 'An Arctic tern hovering over tundra on Amsterdamøya, Svalbard',
    what: 'The Arctic tern breeds in the Arctic and sub-Arctic and spends the opposite season in Antarctic waters. It is a small tern, IUCN Least Concern, famous because geolocators showed a round trip on the order of 70,000 kilometres — not because it is rare.',
    route:
      'Greenland and other North Atlantic breeders tracked by Egevang et al. (2010) left breeding colonies, paused in the North Atlantic, crossed to the West African coast or continued, and reached Antarctic pack ice before returning. Pacific populations run a parallel pole-to-pole pattern. The path is a figure of food patches, not a straight meridian.',
    drivers:
      'The driver is seasonal production. High-latitude summers offer long days and abundant small fish and invertebrates; polar winters do not. Following summer around the globe is a food strategy. Wind and ocean fronts steer the cheap route. This is not escape from ice ages in the human sense — it is an annual photoperiod and forage clock.',
    timing:
      'Breeding in the northern summer; Antarctic waters in the southern summer. Egevang et al. estimated about 70,900 km for Greenland birds. Later tracking of other populations has produced still longer totals. Treat “the longest migration” as a class of very long pelagic loops, not one sacred number.',
    pressure:
      'Climate is shifting the ice edge and the timing of prey. Coastal development and disturbance at colonies, and fisheries that remove forage fish, matter more than a fence. The species is still widespread. The commute is not a museum piece.',
    sourcesNote:
      'Distance from Egevang et al., PNAS, 2010. IUCN Least Concern. Later papers lengthen some tracks; they do not invent a different species story.',
  },
  'bar-tailed-godwit': {
    title: 'Bar-tailed godwit',
    hook: 'Alaska to New Zealand without landing: a gut shrunk for fuel, and a Yellow Sea that still has to be there on the way back.',
    imageAlt: 'A bar-tailed godwit standing in shallow water',
    what: 'The bar-tailed godwit is a large shorebird. The subspecies baueri breeds in Alaska and winters in New Zealand and eastern Australia. IUCN lists the species Near Threatened because several populations are falling, especially where East Asian mudflats have been reclaimed.',
    route:
      'Gill et al. (2009) and Battley et al. (2012) documented southbound non-stop flights from Alaska to New Zealand — Battley’s birds averaged 11,680 km in 9.4 days, without feeding. Northbound, many birds stage on the Yellow Sea. That is a different, stopover-dependent leg, not another non-stop ocean crossing.',
    drivers:
      'Breeding is timed to the brief Arctic insect and tundra-food summer. Wintering grounds in the south offer intertidal food when Alaska is frozen. The non-stop southbound leg is possible because the birds shrink digestive organs and load fat — a physiological bet on a clear Pacific. The return depends on intact Yellow Sea tidal flats: food, not willpower.',
    timing:
      'Southbound in the northern autumn; northbound in the northern spring, with a Yellow Sea stop for baueri. Treat headline “longest non-stop” figures as tracked individuals in named papers, not a species average every year.',
    pressure:
      'Reclamation of Yellow Sea mudflats (Saemangeum and others) removed staging habitat. That is a human barrier in the flyway sense: the birds can still fly, but the fuel depot is smaller. Hunting and disturbance add local losses. Climate shifts Arctic breeding windows relative to thaw.',
    sourcesNote:
      'Gill 2009 and Battley 2012 are the primary tracking papers cited here. IUCN Near Threatened for the species as a whole.',
  },
  'barn-swallow': {
    title: 'Barn swallow',
    hook: 'The ordinary miracle: a small insect-eater that still knits Palearctic summers to African winters.',
    imageAlt: 'A barn swallow perched on a dry stem',
    what: 'The barn swallow is one of the most widespread swallows, IUCN Least Concern. European and northern Asian birds are long-distance migrants; some tropical populations move less. It is here as the familiar flyway bird, not an extreme-distance record.',
    route:
      'Western Palearctic breeders funnel through the Mediterranean and the Sahara toward southern African non-breeding areas; eastern birds use Asian routes. The Sahara is a barrier of heat and emptiness, crossed on a schedule, not a wall that ends the journey. Americas populations of the same species have their own north–south system.',
    drivers:
      'Aerial insects peak with temperate summers. African non-breeding grounds keep insects available when Europe is cold. Nesting on barns and bridges is a human-built bonus, not the original driver — caves and cliffs came first. Weather on crossing days kills more birds than a lack of “instinct.”',
    timing:
      'North in the northern spring, south in autumn. Arrival dates have shifted earlier in parts of Europe as springs warm — a phenology change, not a new flyway.',
    pressure:
      'Agricultural intensification reduces insect prey. Drought on African non-breeding grounds and storms on Sahara crossings add mortality. The species remains common; common is not the same as uncountable forever.',
    sourcesNote:
      'IUCN Least Concern; BirdLife factsheet for range and flyway family. This card does not invent a single GPS track for “the swallow.”',
  },
  'white-stork': {
    title: 'White stork',
    hook: 'A soaring migrant that treats the Mediterranean as a problem: water has no thermals, so the birds go around.',
    imageAlt: 'A white stork in flight carrying a GPS transmitter',
    what: 'The white stork is a large soaring wader of wetlands and farmland, IUCN Least Concern after a twentieth-century crash and later recovery in parts of Europe. It is a flagship of the African–Eurasian flyway system.',
    route:
      'Most western birds cross at the Strait of Gibraltar; eastern birds use the Bosporus and the Levant — two narrow land bridges around a sea that does not offer rising air. They then follow the African Rift and savannas. A growing share of western storks now winters in southern Europe on landfills. That is a shortened migration, not a new species.',
    drivers:
      'Storks need thermals, so they are land-bridge migrants. Breeding is timed to European springs and the burst of amphibians, insects, and small vertebrates. Non-breeding food in Africa is seasonal wetlands and grassland. Rubbish dumps later became an energy subsidy that lets some birds skip the Sahara.',
    timing:
      'South after the northern breeding season; north in spring. Juveniles may take different routes from adults. Transmitters (as in the photograph) are how this is known — not folklore about babies.',
    pressure:
      'Power lines, wetland drainage, and drought along the African route. Landfill wintering in Iberia is a real behavioural shift with mixed consequences (easy calories, dirty ones). The species recovered in Europe under protection and nest platforms; that is management, not a guarantee for African stages.',
    sourcesNote:
      'IUCN Least Concern; BirdLife factsheet. AEWA covers many of the wetlands these birds use. The landfill wintering is reported in the tracking literature; it is not invented here.',
  },
  'amur-falcon': {
    title: 'Amur falcon',
    hook: 'A small falcon from the Russian Far East that crosses India and the Arabian Sea to spend the northern winter in southern Africa.',
    imageAlt: 'An Amur falcon in flight against a pale sky',
    what: 'The Amur falcon breeds in East Asia (Russian Far East, northern China, adjacent regions) and winters in southern Africa. IUCN Least Concern. Among raptors it is one of the longest-distance regular migrants.',
    route:
      'Birds leave East Asia, stage in northeastern India (Nagaland became famous for both a massacre and a conservation reversal), then cross the Indian Ocean / Arabian Sea toward East and southern Africa. The ocean crossing is a real water barrier, not a soaring land-bridge hop like the stork’s Gibraltar.',
    drivers:
      'Breeding follows the East Asian summer pulse of insects (especially flying termites and other swarmers). African non-breeding grounds offer a second summer of the same prey class. The route is a food corridor with a dangerous sea in the middle, not a climate-refugee story.',
    timing:
      'Southbound in the northern autumn, with a concentrated passage through northeast India; northbound in the northern spring. Dates are seasonal windows, not a single calendar day.',
    pressure:
      'The Nagaland harvest of roosting birds was large enough to make international news; local protection then turned the same roosts into a watching economy. That is human pressure reversed in one bottleneck, not a global all-clear. Habitat change and pesticides on both ends of the flyway remain ordinary threats.',
    sourcesNote:
      'IUCN Least Concern; CMS notes on the Nagaland turnaround. This card does not invent a kilometre record; “among the longest raptor migrations” is the honest class.',
  },
  'bar-headed-goose': {
    title: 'Bar-headed goose',
    hook: 'A goose that crosses the Himalaya because the breeding lakes lie north of the wall, and the wintering wetlands lie south of it.',
    imageAlt: 'A bar-headed goose standing in shallow water',
    what: 'The bar-headed goose breeds on high Central Asian plateaus and winters in South Asia. IUCN Least Concern. Hawkes et al. (2011) showed birds flying over the Himalayan ridges rather than only threading the lowest valleys.',
    route:
      'North of the Himalaya in the breeding season (Tibetan Plateau and adjacent lakes); south to the Indian subcontinent in winter. The mountain range is the barrier. The birds go over it on a schedule, using winds and a physiology tuned to thin air — not a tunnel through the range.',
    drivers:
      'Breeding on predator-poor, food-rich plateau wetlands in summer; winter food on the Indian plains when the plateau freezes. The Himalaya is geography, not a season. Oxygen and wind are the immediate physical drivers of how, not why, they cross.',
    timing:
      'Southbound in autumn, northbound in spring, timed to thaw and freeze on the plateau. Exact ridge-crossing altitudes vary by individual and weather; the PNAS work is the named source, not a folklore “over Everest every time.”',
    pressure:
      'Wetland loss on the wintering grounds, hunting, and power infrastructure. Climate change shifts snow and lake ice on the breeding plateau. The species is not globally rare; the crossing still depends on wetlands on both sides of the wall.',
    sourcesNote:
      'Hawkes et al., PNAS, 2011, is the physiology-and-flight paper cited here. IUCN Least Concern.',
  },
  wildebeest: {
    title: 'Blue wildebeest',
    hook: 'Rain writes the map: more than a million animals still follow new grass around the Serengeti–Mara.',
    imageAlt: 'A blue wildebeest calf standing beside its mother on open grassland',
    what: 'The blue wildebeest is a grazing antelope of eastern and southern African savannas, IUCN Least Concern. The Serengeti–Mara population is the famous migratory one; other populations move less or not at all. UNESCO lists Serengeti National Park in part for this seasonal movement.',
    route:
      'In the usual year, the large Serengeti herd calves on the southern short-grass plains in the wet season, then moves west and north as those plains dry, crossing into Kenya’s Maasai Mara in the dry season, and returning south when the rains restart. River crossings on the Mara are a bottleneck in that loop, not a separate migration.',
    drivers:
      'Holdo, Holt & Fryxell (2009) and the older Sinclair–Mduma Serengeti work treat the loop as a coupling of rainfall, grass nitrogen, and grazer density. Animals follow new, nutritious grass and surface water. Predators follow the grazers. This is a resource clock, not an ice-age corridor.',
    timing:
      'Calving on the southern plains in the wet season (roughly January–March in many years); dry-season presence in the north (mid-year). Exact weeks shift with rain. Treat tourist “Great Migration” calendars as approximations.',
    pressure:
      'Fences, farms, and roads can cut a loop that only works if the plains remain connected. Drought years already kill calves. The Serengeti–Mara system is still large; the same species elsewhere has been reduced to resident fragments. That contrast is the conservation point.',
    sourcesNote:
      'UNESCO Serengeti listing; Holdo et al. 2009 for the rainfall–grass mechanism; IUCN Least Concern for the species. Herd size is on the order of a million-plus in this ecosystem and is counted, not guessed here as a slogan.',
  },
  caribou: {
    title: 'Caribou / reindeer',
    hook: 'The same species: tundra herds that still walk hundreds of kilometres between calving grounds and winter woods.',
    imageAlt: 'A reindeer walking across bare northern ground',
    what: 'Rangifer tarandus is caribou in North America and reindeer in Eurasia. IUCN lists the species Vulnerable because many wild herds have fallen, even while some domestic reindeer remain numerous. The photograph is a Fennoscandian animal; the ecology below covers the wild migratory herds, including Alaska–Yukon’s Porcupine herd.',
    route:
      'Tundra-calving herds move north or onto peninsulas for insect relief and nutritious new forage in summer, then south or into boreal forest and taiga for winter lichens and shelter. Joly et al. (2019) documented some of the longest terrestrial migrations on the continent. Routes are traditional and also plastic when ice, snow, or development blocks them.',
    drivers:
      'Calving grounds are chosen for forage and, often, fewer predators. Summer insects (warble flies, mosquitoes) can push animals onto windy coasts. Winter food is lichen under snow — a climate and snow-crust problem as much as a distance problem. This is a seasonal Arctic clock, with ice and snow as the barriers.',
    timing:
      'Northward toward calving in spring; summer movements for insects and food; southward in autumn. Ice-road and migration timing can collide with industry calendars.',
    pressure:
      'Industrial footprints, roads, and proposed oil development on calving grounds (the Arctic Refuge coastal plain is the U.S. political flashpoint for the Porcupine herd). Climate changes snow crust, icing events, and insect seasons. IUCN Vulnerable is the species-level warning; some herds are stable or recovering, others are not.',
    sourcesNote:
      'IUCN Vulnerable; Joly et al. 2019 for long-distance movements; USFWS Porcupine herd pages. Domestic reindeer herding is a parallel human story, not substituted here for wild migration.',
  },
  'humpback-whale': {
    title: 'Humpback whale',
    hook: 'Feed in the cold, calve in the warm: a pole-to-tropics commute in every ocean basin that still has the prey.',
    imageAlt: 'A humpback whale diving, showing its black-and-white tail flukes',
    what: 'The humpback is a long-finned baleen whale. IUCN listed it Least Concern in 2018 after several ocean-basin recoveries from industrial whaling. Some stocks remain small. Wildlife keeps the species card; this page is the migration.',
    route:
      'In each ocean, many populations feed at high latitudes in summer and swim to tropical or subtropical breeding grounds in winter — for example, North Pacific feeding areas to Hawaii or Mexico, or Southern Ocean feeding to the Great Barrier Reef and other tropical coasts. Not every individual migrates every year. Equator crossings differ by population; do not draw one global racetrack.',
    drivers:
      'Polar and subpolar summers produce dense krill and small fish. Calves have less fat and benefit from warmer, quieter waters with fewer predators. Mating is tied to those breeding grounds. The driver is a food/breeding split across latitude, not a flyway of thermals.',
    timing:
      'Feeding in the high-latitude summer; breeding in the low-latitude winter of that hemisphere. Southern and northern hemisphere populations are on opposite calendars.',
    pressure:
      'Entanglement in fishing gear, ship strikes, noise, and a changing krill map as oceans warm. Commercial whaling is no longer the main global driver; recovery is real in several stocks and incomplete in others. See Wildlife for the conservation frame.',
    sourcesNote:
      'IUCN 2018 Least Concern; NOAA Fisheries species profile for U.S. stocks and the feeding/breeding pattern. This is not a count of every basin’s animals.',
  },
  'gray-whale': {
    title: 'Gray whale',
    hook: 'Among the longest mammal commutes still running: Arctic feeding to Mexican lagoons, along one populated coast.',
    imageAlt: 'A gray whale spyhopping, lifting its head above the water',
    what: 'The gray whale is a baleen whale of the North Pacific. The Eastern North Pacific stock is the one whose migration is watched from the American west coast; the Western stock is far smaller and Endangered in IUCN’s assessment of that population. The species overall is Least Concern.',
    route:
      'Eastern Pacific whales feed in the Bering and Chukchi seas in summer, then follow the North American coast to wintering lagoons in Baja California. NOAA describes a round trip on the order of 15,000–20,000 km. The path is coastal, which is why people see it — and why ships and nets sit on the same line.',
    drivers:
      'Arctic benthic amphipods and other seafloor prey are a summer resource. Calves are born in warm, shallow lagoons. Ice cover historically set when the north opened. This is a food/breeding latitudinal split with a coastal constraint, not an open-ocean wander like some humpback legs.',
    timing:
      'Southbound in the northern autumn and winter; northbound in spring, cows with calves later than the first wave. Ice and prey in the Arctic can delay or starve a year — unusual mortality events have been documented when that system fails.',
    pressure:
      'Ship strikes and entanglement on a busy coast; disturbance in lagoons; Arctic warming that rearranges prey and ice. The eastern stock recovered from whaling; that recovery is not a shield against a food-web shift in the Bering Sea.',
    sourcesNote:
      'NOAA Fisheries gray whale profile for the Eastern North Pacific route and distance class; IUCN for status, including the western stock’s separate danger.',
  },
  'mexican-free-tailed-bat': {
    title: 'Mexican free-tailed bat',
    hook: 'Tens of millions leave Texas caves at dusk for insects — and many of the same animals also commute seasonally toward Mexico.',
    imageAlt: 'A column of Mexican free-tailed bats pouring out of Bracken Bat Cave at dusk',
    what: 'Tadarida brasiliensis is a small, fast insectivorous bat of the Americas, IUCN Least Concern. Bracken Cave in Texas holds the largest known colony — on the order of 15 million animals in season, managed by Bat Conservation International. The photograph is an evening emergence, the daily pulse; the migration is the seasonal shift of many (not all) temperate colonies.',
    route:
      'Some populations are resident. Many temperate North American colonies move toward Mexico and the southern U.S. for winter. The flyway is a broad night sky, not a coastal mudflat. Maternity roosts in the south-central U.S. concentrate females in summer.',
    drivers:
      'Aerial insects. Summer maternity roosts sit where nights yield enough moths and beetles to raise pups. Winter insect lows push some bats south. The daily column at Bracken is a local harvest of insects over farmland — a vertical commute on top of the seasonal one.',
    timing:
      'Evening emergence is nightly in season. Seasonal movement is between summer maternity roosts and wintering areas, timed to insect phenology. Not every individual migrates.',
    pressure:
      'Cave disturbance, pesticides that remove prey, and turbines that sit in night flyways. White-nose syndrome has been a catastrophe for other North American bats; this species’ story is still mainly habitat, insects, and collision. Guano historically made the caves an industrial resource; protection reversed that at Bracken.',
    sourcesNote:
      'IUCN Least Concern; Bat Conservation International on Bracken Cave. Colony size is an order-of-magnitude managed estimate, not a census of every bat in the Americas.',
  },
  'straw-coloured-fruit-bat': {
    title: 'Straw-coloured fruit bat',
    hook: 'Africa’s mass fruit-bat gathering: millions converge on a tiny Zambian swamp forest when the trees fruit.',
    imageAlt: 'A straw-coloured fruit bat hanging from a branch',
    what: 'Eidolon helvum is a large African fruit bat, IUCN Near Threatened. Kasanka National Park in Zambia hosts one of the densest mammal aggregations on Earth each southern-hemisphere spring — on the order of several million bats in a few hectares of mushitu swamp forest — then the animals disperse.',
    route:
      'Richter & Cumming (2008) satellite-tagged bats and showed long-distance movements across Central Africa, not a single two-point commute. Kasanka is a seasonal node where fruiting trees concentrate animals that otherwise range over rainforest and savanna mosaics. Treat it as a gathering on a resource pulse, with long transits between roosts.',
    drivers:
      'Fruit. Trees fruit in space and time; the bats track that phenology. Kasanka’s swamp forest offers a brief, dense crop. This is a resource-tracking migration, closer to wildebeest-and-grass than to an Arctic photoperiod. Water and roost trees are the local constraints.',
    timing:
      'Peak at Kasanka is typically October–December. The rest of the year the same animals are elsewhere in a wide African range. Do not freeze the species as “the Kasanka bat.”',
    pressure:
      'Hunting for bushmeat, tree loss at roosts, and a Near Threatened listing that already flags decline in parts of the range. The Kasanka spectacle can look infinite from a hide and still sit inside a falling regional population. Habitat outside the park is the rest of the route.',
    sourcesNote:
      'Richter & Cumming 2008 for satellite tracks; IUCN Near Threatened. Kasanka numbers are famous and still estimates of a dense roost, not a continent-wide census.',
  },
};
