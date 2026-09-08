import type { MigrationPage } from './migration';
import type { MigrationEntryCopy } from '../data/migration';

export const page: MigrationPage = {
  metaTitle: 'Migration — Fix Planet',
  metaDescription:
    'Why people, birds, and other animals move: ice ages and coasts, historic mass movements, flyways and fences. Sourced encyclopedia of human dispersal, great migrations, and living routes.',
  eyebrow: 'Encyclopedia',
  title: 'Migration',
  hubLead: [
    'Migration is movement with a reason. Ice sheets open and close land bridges. Seasons shift rain, grass, insects, and plankton. Coasts, mountains, and deserts are barriers until they are not. People later add fences, lights, nets, armies, and a warmer climate on top of those older clocks.',
    'Four shelves, kept apart on purpose. Deep-history Homo sapiens walking out of Africa is not Attila. Historic “great migrations” are named mass movements in the written record. Birds and other animals still run seasonal routes. Drivers sit on each entry. Dates are ranges from named sources, not invented tracks.',
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
    humans: 'Out of Africa, Sahul, the Americas: dated arrival windows and the climate that shaped them.',
    'great-migrations':
      'Historic mass movements in the written record. First card: Hunnic pressure on the Roman world.',
    birds: 'Flyways, seasons, and species that still cross hemispheres for food and breeding.',
    animals: 'Wildebeest, caribou, whales, bats — curated mammal migrations and their drivers.',
  },
  shelves: {
    humans: 'Humans',
    'great-migrations': 'Great migrations',
    birds: 'Birds',
    animals: 'Animals',
  },
  shelfLeads: {
    humans:
      'Homo sapiens arose in Africa about 300,000 years ago. The later journey — not the species card — is here: corridors, coasts, ice, and food. Megafauna loss is mentioned only where it explains a route; the Extinct catalog stays on Wildlife. Attila and the Migration Period are a different clock: Great migrations.',
    'great-migrations':
      'Named mass movements in historical time — not Out of Africa. The first card is Hunnic pressure on the late Roman world. More entries can be added later; this is not a textbook dump of every Völkerwanderung people.',
    birds:
      'Seasonal bird migration is a food-and-breeding machine. Most long-distance species breed at higher latitudes in the long-day summer, then fly toward winter food. BirdLife and CMS describe families of flyways — schematic corridors, not GPS tracks of every flock.',
    animals:
      'Mammal migrations are fewer, heavier, and easier to break with a fence. Rain follows grass; ice and insects push caribou; whales follow krill and calves need warm shallows. Each card names a driver and a pressure.',
  },
  humans: {
    heroEyebrow: 'Our species',
    scientificName: 'Homo sapiens',
    imageAlt:
      'A modern adult human standing in a meadow, a respectful naturalistic figure representing Homo sapiens — not a portrait of a named person',
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
      'Historic mass movements in the written record — Huns and later cards — live on a separate shelf. This page is Late Pleistocene and Holocene dispersal, not Attila.',
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
};

export const entries: Record<string, MigrationEntryCopy> = {
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
