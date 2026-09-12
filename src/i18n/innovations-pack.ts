import type { InnovationCopy } from '../data/innovations';
import type { Locale } from './config';
import { packLv } from './innovations-pack-lv';
import { packPl } from './innovations-pack-pl';
import { packRu } from './innovations-pack-ru';

/** Founder-curated Innovations pack: new cards plus living-line updates. */
export const pack: Record<Locale, Record<string, InnovationCopy>> = {
  en: {
    'methane-feed-additive': {
      title: 'Bovaer on farms (3-NOP)',
      hook: 'Eighteen months on 162 Dutch farms — about 20,000 cows — still show methane down about 30 percent, with the same milk and herd routine.',
      imageAlt: 'Holstein dairy cows, the animals whose rumen methane 3-NOP additives target',
      what: '3-nitrooxypropanol (3-NOP), sold as Bovaer by dsm-firmenich, inhibits a rumen enzyme in the last step of methane making. The EU authorized it in 2022; the U.S. FDA finished its review in May 2024. A dsm-firmenich note on large-scale Dutch farm data (162 farms, about 20,000 cows, 18 months from July 2022, with FrieslandCampina and Agrifirm) says the farms confirm a 30 percent methane cut without a hit to milk, health, or fertility. That 30 percent figure is the company and dossier number, not an independent inventory of national dairy emissions.',
      problem:
        'Cattle are a large source of methane, a short-lived but strong greenhouse gas. Feed additives can cut that flow while herds still exist. They do not erase land use or nitrous oxide.',
      how: 'The additive is mixed into the mineral mix or total mixed ration at grams-per-cow-per-day scale. It must be fed daily. Effect size depends on diet. It is not a vaccine and not a genetic rewrite of the animal.',
      players:
        'dsm-firmenich; FrieslandCampina and Agrifirm on the Dutch validation; Elanco in North America. The company says more than 500,000 cows were fed Bovaer across 25 countries at the time of the 2026 farm-data note. Other methane tools (asparagopsis seaweed, 3-NOP rivals) run in parallel.',
      risks:
        'Cost versus milk price; public distrust; and the temptation to call a 30 percent cut “climate-neutral beef.” Leakage if herds grow. This card is about 3-NOP farm use, not every feed claim.',
      sourcesNote:
        'dsm-firmenich Dutch farm-data note (20,000 cows / 18 months); EU 2022/565; May 2024 FDA review. About 30% is the company/dossier figure.',
    },
    'fervo-geothermal': {
      title: 'Cape Station — Fervo EGS',
      hook: 'Utah wells that copy oilfield drilling, aimed at the first U.S. commercial enhanced-geothermal megawatts — on track in 2026, not yet a national template.',
      imageAlt:
        'Geothermal plant at The Geysers, California — a working steam field of the kind enhanced geothermal wants to copy in new rock',
      what: 'Enhanced geothermal systems (EGS) drill into hot rock that lacks a natural hydrothermal reservoir, then create a flow path and run water through it. Fervo Energy’s Project Red in Nevada made electricity in 2023 for a Google contract. Cape Station near Milford, Utah — next to the DOE FORGE site — is the larger follow-on. A 5 September 2026 CNBC report said the project was on pace to send power to the grid the following month, which would make it the first U.S. EGS plant in commercial operation. That is a reported schedule, not a delivered kilowatt-hour until the plant actually runs.',
      problem:
        'Conventional geothermal is scarce: you need heat, water, and permeability in the same place. Most of the Earth’s heat is in dry rock. EGS tries to unlock that heat without waiting for a geyser. Data-center buyers want firm, low-carbon megawatts.',
      how: 'Fervo drills a pair of wells more than two miles deep, with a lateral that can run more than a mile, fractures the granite, and circulates non-potable water heated above 400°F through a heat exchanger. The brine is cooled and reinjected in minutes. This is mining heat with steel and pumps, not “free energy.”',
      players:
        'Fervo Energy; Google and other offtakers (Southern California Edison, Shell Energy, NV Energy). CNBC reported about 1 GW contracted after a 2026 Google PPA and a May IPO. Traditional hydrothermal still supplies most geothermal megawatts worldwide.',
      risks:
        'Drilling cost, induced seismicity, water use, and first-of-a-kind delays. A Utah schedule is not a terawatt. Geology varies; a Nevada or Utah well is not a global template.',
      sourcesNote:
        'CNBC Cape Station report (5 Sep 2026) — on track for first commercial U.S. EGS power, not a confirmed online date. Project Red electricity in 2023 is the earlier fact.',
    },
    'long-duration-storage': {
      title: 'Form Energy iron-air — Google / Xcel',
      hook: 'A 300 MW / 30 GWh iron-air filing for Minnesota: announced as the largest battery by gigawatt-hours — still a plan, not a yard of rusted cells.',
      imageAlt: 'Containerized grid battery modules at a U.S. energy-storage project',
      what: 'Form Energy’s iron-air battery is designed for about 100 hours. In February 2026 Google and Xcel Energy said they intend to build a 300 MW / 30 GWh Form deployment on Xcel’s Upper Midwest grid as part of a package with 1.4 GW of wind and 200 MW of solar for a Minnesota data center. Xcel called it the largest battery project by gigawatt-hour capacity announced to date. Form’s CEO told Utility Dive the first modules are expected by the end of 2028. That is an agreement and a planned tariff filing, not installed megawatts.',
      problem:
        'When the wind drops for several winter days, a four-hour lithium pack is a cushion, not a backbone. Cheap multi-day storage would let grids raise the renewable share without pretending weather is optional.',
      how: 'Iron-air cells “rust” iron to store energy and un-rust it to discharge — abundant materials, low energy density, large yards. Neither chemistry nor a press rendering is a physics miracle. Lithium remains the workhorse for short duration.',
      players:
        'Form Energy; Google; Xcel Energy. Related Form projects include a 10 MW / 1 GWh unit approved at Xcel’s Sherco site and a smaller Great River Energy pilot. A separate Ireland card covers the first announced overseas 10 MW / 1 GWh project.',
      risks:
        'Round-trip losses, siting, regulator review, and whether hydrogen or more transmission is cheaper. Do not count an announced 30 GWh as delivered megawatt-hours.',
      sourcesNote:
        'Utility Dive on the Google–Xcel 300 MW / 30 GWh agreement (Feb 2026). Announced capacity is not delivered MWh.',
    },
    'alphafold-proteins': {
      title: 'AlphaFold 3 in use',
      hook: 'A 2024 model of proteins and their partners is now everyday lab software — used by millions of researchers, not a finished climate enzyme.',
      imageAlt: 'A protein ribbon diagram on a dark field — the class of structure these models predict',
      what: 'AlphaFold 2 (DeepMind, Nature, 2021) predicted single-chain folds at useful accuracy; the public AlphaFold Database put hundreds of millions of structures in reach. AlphaFold 3 and AlphaFold Server launched on 8 May 2024 to predict proteins with other biomolecules. DeepMind’s AlphaFold page says that by November 2025 the tools were used by over 3 million researchers in over 190 countries. Hassabis and Jumper shared the 2024 Nobel Prize in Chemistry for the work. This is deployed science software, not a chatbot and not a factory.',
      problem:
        'Enzymes that eat plastic, fix nitrogen more cleanly, or capture carbon are protein-design problems. Knowing a fold or a complex is not the same as a stable, cheap industrial enzyme — but it removes a years-long bottleneck.',
      how: 'The model learned from the Protein Data Bank and related data. Laboratories still express, purify, and assay. Design tools generate new backbones; wet-lab failure remains common.',
      players:
        'Google DeepMind, Isomorphic Labs, and EMBL-EBI; Meta ESM and the Baker lab sit in the same toolbox; industrial biotech uses the stack on enzymes and drugs.',
      risks:
        'Biosecurity (the same tools can sketch harmful proteins). Over-claiming a predicted PETase as a recycling plant. Energy and water of the fermenter still count.',
      sourcesNote:
        'DeepMind AlphaFold page (AF3 / Server 8 May 2024; November 2025 usage figures are DeepMind’s). A predicted fold is not an industrial enzyme.',
    },
    'climate-trace': {
      title: 'Climate TRACE v5.10',
      hook: 'The August 2026 inventory put first-half global greenhouse gases 0.2 percent above 2025 — a satellite-and-model estimate, not a court verdict.',
      imageAlt: 'An oil refinery at dusk — the class of industrial site emissions inventories try to measure from space',
      what: 'Climate TRACE is a coalition that publishes a global greenhouse-gas inventory from satellites, sensors, and machine learning rather than from self-reports alone. Release v5.10.0 (27 August 2026) added June 2026 monthly data and a new net-soil-organic-carbon subsector. Preliminary first-half 2026 emissions were 29.7 billion tonnes CO₂e, 0.2 percent (56.4 million tonnes) above the first half of 2025. Road transport drove most of the rise; power and manufacturing declined slightly on TRACE’s books. At COP30 in Brazil (November 2025) the coalition released a Solutions map that estimates how much each tracked source could cut with mature, commercial actions — a neighbor to this site’s Solutions waste shelf and to the AMP sorting card, not a replacement for either.',
      problem:
        'Inventories disagree. Methane leaks from oil, gas, and coal are often higher than reported. You cannot manage what you refuse to measure.',
      how: 'Models learn the look of a power plant, a feedlot, or a flare and estimate activity and emission factors, then fuse that with atmospheric retrievals where they exist. Every number has uncertainty. A bright pixel is a clue, not a court verdict. Revisions to history are expected when methods change.',
      players:
        'Climate TRACE coalition (listed on the About page: research labs, non-profits, and Al Gore among the named members); related public systems include GHGSat and Carbon Mapper. National inventories remain the legal baseline.',
      risks:
        'False plumes, political blowback, and treating a dashboard as enforcement. Satellites see some sectors better than others. v5.10 is one monthly vintage.',
      sourcesNote:
        'Climate TRACE v5.10 news note (27 Aug 2026); About page for the COP30 Solutions tool (Nov 2025). A bright pixel is a clue, not a court verdict.',
    },
    'deep-sky-alpha': {
      title: 'Deep Sky Alpha — DAC credits',
      hook: 'In June 2026 a Canadian hub delivered North America’s first verified direct-air-capture credits — 14 tonnes stored, not a megaton plant.',
      imageAlt:
        'An industrial carbon-capture power plant — capture hardware of that class, not a press photo of Deep Sky Alpha in Alberta',
      what: 'Deep Sky Alpha in Innisfail, Alberta, is a multi-vendor direct-air-capture test hub. Reuters reported on 29 June 2026 that Deep Sky was the first North American company to deliver verified DAC removal credits, to Microsoft and Royal Bank of Canada, from carbon injected underground in May. The first injection was 14 tonnes; Isometric verified the credits. The Alberta pilot is expected to capture about 3,000 tonnes of CO₂ a year and is built so several DAC firms can run side by side. Deep Sky’s own site describes a five-acre industrial-park pad. Climeworks in Iceland remains the other firm that has actually issued DAC credits.',
      problem:
        'Some CO₂ will still be emitted after we cut what we can. Pulling carbon already in the air is one way to shrink the stock — only if the energy is clean and the CO₂ stays stored. High-quality removal credits are scarce; many contracts have not delivered tonnes.',
      how: 'Fans and contactors pull ambient air through a capture process; the CO₂ is compressed and sent for geological storage (Deep Sky stores north of Edmonton, not under Innisfail). A credit is a verified tonne, not a nameplate.',
      players:
        'Deep Sky (Canada); early credit buyers Microsoft and RBC; further offtake names Reuters listed include TD Bank, Lufthansa, and ENGIE. Several DAC technology vendors can sit on the Alpha pads.',
      risks:
        'DAC is energy-hungry and expensive. Fourteen tonnes and a 3,000-tonne nameplate are rounding errors next to national inventories. Credits can be sold faster than tonnes are stored. This is a pilot hub, not a substitute for cutting emissions.',
      sourcesNote:
        'Reuters 29 June 2026 (14 t first injection; ~3,000 t/yr nameplate; Microsoft and RBC). Nameplate is not tonnes delivered.',
    },
    'avnos-project-brighton': {
      title: 'Avnos Project Brighton — DAC + water',
      hook: 'A New Jersey hybrid DAC unit entered service in 2026: up to 450 tonnes of CO₂ a year and a claimed water coproduct — a demo, not a climate-scale plant.',
      imageAlt:
        'Indoor water-treatment tanks and piping — the water-handling class next to Avnos hybrid DAC, not a press photo of Project Brighton',
      what: 'Avnos’s Hybrid Direct Air Capture (HDAC) is meant to pull CO₂ from air and produce clean water without an external heat source. Project Brighton in Bridgewater, New Jersey, is the company’s largest operating unit. Avnos said on 1 September 2026 that Brighton had entered operations, designed for up to 450 tonnes of atmospheric CO₂ a year and about 475,000 gallons of clean water a year, with U.S. Office of Naval Research funding, to support work on DAC-sourced sustainable aviation fuel. Those capacities are design figures, not a year of metered tonnes.',
      problem:
        'Conventional DAC is thirsty for heat and sometimes for water. A process that also makes water would matter in dry or constrained sites — if the energy bill and the net carbon still add up.',
      how: 'Avnos describes standardized HDAC modules that condense moisture while capturing CO₂. Brighton sits beside the firm’s Technology Development Center so operators can collect real-world data before larger modules (Project Cedar is the named next step, not yet this card).',
      players:
        'Avnos; U.S. Office of Naval Research (contract N00014-23-C-1011 on the IWVC subsidiary). The Navy interest is feedstock for fuels research, not a municipal water utility.',
      risks:
        'Four hundred and fifty tonnes is a demonstration. “No external heat” still needs electricity. Water output is a company figure. Do not treat a Bridgewater pad as a national removal wedge.',
      sourcesNote:
        'Avnos site and 1 Sep 2026 operations note (450 t / 475,000 gal design). Design capacity is not a year of metered tonnes.',
    },
    'yara-sluiskil-ccs': {
      title: 'Yara Sluiskil CCS',
      hook: 'Europe’s largest industrial capture hall, opened in September 2026: up to 800,000 tonnes a year from ammonia, shipped to Norway — point-source CCS, not air removal.',
      imageAlt:
        'The Ghent–Terneuzen canal at Terneuzen, the industrial waterway next to Yara Sluiskil — not a press photo of the 2026 capture hall',
      what: 'Yara’s ammonia and fertilizer works at Sluiskil in the Netherlands inaugurated a capture-and-liquefaction plant on 7 September 2026. Coverage of the opening says the site is designed to capture up to 800,000 tonnes of process CO₂ a year from ammonia production and ship it to Northern Lights for storage under the North Sea — Europe’s largest commercial CCS facility and an early cross-border capture–transport–store chain. Over 15 years the project is expected to move about 12 million tonnes if it runs as designed. This is point-source CCS: it keeps industrial CO₂ out of the air. It does not pull CO₂ that is already mixed in the atmosphere, and it is not a voluntary carbon-removal credit factory. The money case is avoiding EU ETS allowances.',
      problem:
        'Ammonia for fertilizer still makes process CO₂ that electricity alone does not erase. Cement and incineration have the same class of leftover tonnes. Capture only matters if the ship and the store also run.',
      how: 'CO₂ is captured from the ammonia process, compressed, and liquefied at Sluiskil, then loaded on Northern Lights ships (about 7,200 tonnes each; up to two loaded ships a week in earlier Yara outlines) for Øygarden and injection about 2,600 metres under the Norwegian shelf. Phase 1 of Northern Lights is 1.5 million tonnes a year of storage.',
      players:
        'Yara International; Northern Lights (Equinor, Shell, TotalEnergies) and Norway’s Longship. Neighbor card: Northern Lights transport and storage. Yara’s 2026 capital-markets figures put net investment near $200 million.',
      risks:
        'Capture rate, shipping, and storage have to operate together. Using CCS to stretch fossil ammonia is a real debate. 800,000 tonnes is serious engineering and still small next to EU industry. Do not file this tonne as a DAC credit.',
      sourcesNote:
        'Yara news-and-media hub; Northern Lights pages. Opening-week coverage put design capture at up to 800,000 t/yr. Design capacity is not a year of stored tonnes.',
    },
    'samsara-eco': {
      title: 'Samsara Eco — enzymatic recycling',
      hook: 'Australia’s first enzymatic recycling plant is open in New South Wales. Infinite loops still need collection, offtake, and a second, larger factory.',
      imageAlt: 'Bales of crushed PET bottles — the polyester feedstock enzymatic recyclers want to unzip',
      what: 'Samsara Eco opened its first enzymatic recycling plant at Jerrabomberra, New South Wales. The firm’s EosEco process uses designed enzymes to break plastics back to monomers so they can be remade as virgin-identical nylon 6,6 and polyester. PKN Packaging News reports a four-year path from bench to this first plant, a plan for a 20,000-tonne commercial nylon plant in Asia by 2028, and more than AUD $150 million raised. In 2024 the company made apparel with lululemon that it calls the first enzymatically recycled nylon 6,6 product. This is a different company and a broader feedstock claim than Carbios’s PET work in France — not a second name for the same plant.',
      problem:
        'Globally only about 10 percent of plastics are recycled, and coloured, multi-layer, and mixed packs are the hard remainder. Mechanical recycling loses quality. A true monomer loop would help — if collection and energy add up.',
      how: 'Enzymes depolymerize targeted plastics under mild conditions. The company says the process is built for hard-to-recycle streams, including multi-layer packs, and that the output plugs into existing polymer supply chains. It is chemistry with a protein catalyst, not a microbe released into the ocean.',
      players:
        'Samsara Eco (Australia; ANU lineage, Main Sequence and Woolworths among early backers); brand partners including lululemon; Deakin University’s recycling hub and The LYCRA Company on site R&D. Municipal collection remains the other half of the loop.',
      risks:
        'A first plant is not a solved waste crisis. Mixed plastic is still cheaper to bury or burn. The 20,000-tonne Asian plant is a plan for 2028. Do not confuse a Jerrabomberra opening with circular packaging at supermarket scale.',
      sourcesNote:
        'Samsara Eco official site. A first plant is not supermarket-scale circularity.',
    },
    'quaise-mmwave-drilling': {
      title: 'Quaise millimetre-wave drilling',
      hook: 'A gyrotron in Central Texas drilled 100 metres of granite in 2025 — a field record for the method, and still far short of a power plant.',
      imageAlt:
        'A land drill rig on red earth — the surface kit around deep holes, not a photograph of Quaise’s Texas gyrotron',
      what: 'Quaise Energy is trying to reach superhot rock (about 400°C) with millimetre-wave energy from a gyrotron, ablating granite without a downhole drill bit. Energy Global reported that in 2025 the company drilled to 100 metres at a Central Texas field site — a record for millimetre-wave drilling. Before 2025 the MIT-derived system had only made centimetre-scale holes in the lab. One hundred metres is a fraction of the depth a commercial superhot plant would need. Quaise says a more powerful gyrotron is next and sketches a Western U.S. pilot plant as early as 2028.',
      problem:
        'Conventional bits struggle in hard, hot basement rock. If you cannot drill that rock cheaply, superhot geothermal stays a map of unused heat.',
      how: 'A surface gyrotron sends millimetre waves down the hole; the rock vaporizes. There is no downhole hardware in the Quaise telling of the method. Rate, hole quality, and steering at kilometres of depth are the unsolved engineering.',
      players: 'Quaise Energy; MIT millimetre-wave research lineage. This is not Fervo’s oilfield-style EGS and not a utility.',
      risks:
        'A 100-metre granite hole is not a turbine. Cost, reliability, and whether 2028 slips are ordinary first-of-a-kind risks. Treat “geothermal anywhere” slides as a research aim.',
      sourcesNote:
        'Energy Global 24 July 2025: 100 m Texas field hole; lab work was centimetres. A record for the method is not a power station.',
    },
    'cfs-sparc': {
      title: 'CFS SPARC — net-energy tokamak',
      hook: 'A compact tokamak in Massachusetts is about 80 percent assembled. Q>1 is the 2027 target — a physics milestone, not a power station.',
      imageAlt:
        'A cutaway tokamak mock-up of the ITER class — the machine family SPARC belongs to, not a photograph of the Devens hall',
      what: 'Commonwealth Fusion Systems is assembling SPARC, a high-field tokamak at Devens, Massachusetts, meant to show net fusion energy (Q>1: more fusion power than the heating power into the plasma). CFS’s August 2026 progress note said SPARC was almost 80 percent complete, with magnets going in and support systems already running. The company’s SPARC page still aims at Q>1 in 2027. SPARC will not sell electricity. The follow-on ARC plant is the grid design; CFS has told DOE reviewers it is aiming at about 400 MW net electric in the early 2030s. Those are company targets.',
      problem:
        'Fusion promises dense, low-carbon heat if a plant can run, breed tritium, and survive neutrons. No private or public tokamak has yet put commercial power on a grid.',
      how: 'High-temperature superconducting magnets make a smaller tokamak than ITER’s. Q>1 is plasma gain, not wall-plug plant gain: magnets, cryogenics, and a turbine are extra. Confusing SPARC with a utility is the usual error.',
      players:
        'CFS; DOE Milestone-Based Fusion Development Program; MIT lineage. Neighbor cards: ITER (public science) and NIF (inertial ignition). Private fusion is not ITER and not an online utility.',
      risks:
        'Schedule, tritium, materials, and cost. An 80 percent assembly claim is not first plasma. Q>1 in 2027 is a target. Even success leaves ARC to build.',
      sourcesNote:
        'CFS SPARC progress blog (~80% assembled) and SPARC page (Q>1 target 2027). Plasma gain is not a power station.',
    },
    'form-energy-ireland': {
      title: 'Form Energy Ireland — iron-air',
      hook: 'A 10 MW / 1 GWh iron-air project in northwest Ireland, agreed in 2026, aimed at 2029 — the first Form yard announced outside the United States.',
      imageAlt:
        'Containerized battery cabinets at a grid-storage site — the yard class of long-duration storage, not a photo of the Donegal pad',
      what: 'On 17 March 2026 Form Energy and FuturEnergy Ireland announced an agreement to deploy a 10 MW / 1,000 MWh (1 GWh) iron-air system in the northwest of Ireland — Form’s first announced international project, anticipated online in 2029. Coverage names the Ballynahone Energy Storage site in County Donegal. One hundred hours at 10 MW is the arithmetic of 1 GWh. This is a contracted demonstration, not a running Irish battery.',
      problem:
        'Ireland’s wind-heavy grid curtails power when the island cannot use or export it, then burns something else when the wind drops for days. Multi-day storage is the stated gap.',
      how: 'The same iron-air chemistry as Form’s U.S. projects: reversible rusting of iron, abundant materials, large footprint. Planning and grid connection still sit in front of any electron.',
      players:
        'Form Energy; FuturEnergy Ireland. Neighbor card: the much larger Google–Xcel 300 MW / 30 GWh U.S. filing.',
      risks:
        'Planning appeals, interconnection, and whether 2029 holds. Ten megawatts will not rewrite an island grid. Do not count an agreement as delivered megawatt-hours.',
      sourcesNote:
        'Form Energy 17 March 2026 Ireland note: 10 MW / 1 GWh, online anticipated 2029. An agreement is not a running battery.',
    },
    'weathernext-3': {
      title: 'Google WeatherNext 3',
      hook: 'A September 2026 global weather model that ingests live satellites and refreshes every hour — still not your national warning service.',
      imageAlt: 'GOES-17 full-disk image of Earth — the class of satellite observations WeatherNext 3 trains and runs on',
      what: 'On 3 September 2026 Google DeepMind and Google Research introduced WeatherNext 3, their latest global AI weather model. The system ingests live geostationary satellite mosaics and station observations, and Google says it issues hourly forecasts at about 5 km for some surface fields (10 km for other surface variables, 25 km for many atmospheric fields) — roughly five times sharper than WeatherNext 2’s 25 km / six-hour grid. Google is folding it into Search, Gemini, Maps, Maps Platform, Earth Engine, and Cloud. Independent live rankings are cited from Brightband. Official severe-weather warnings still belong to national meteorological services.',
      problem:
        'Fast local weather — rain bands, coastal and mountain contrasts, turbine-height wind — is what farms, grids, and people actually feel. Older AI weather models trained only on lagged physics analyses smeared those details.',
      how: 'A Functional Generative Network mesh transformer takes hourly satellite mosaics plus analysis and outputs gridded fields, cyclone tracks, and station-level values. Google also publishes 100-metre wind and radiation fields aimed at wind and solar operators. Precipitation skill claims (CRPS versus IMERG, MRMS, and gauges) are Google’s evaluation numbers.',
      players:
        'Google DeepMind and Google Research. Neighbor card: GraphCast (Science, 2023), the earlier DeepMind global model. National weather services remain the warning authorities.',
      risks:
        'Over-trust, weak extremes, and skipping the observing system. A Maps forecast is not a cyclone warning. Skill on a leaderboard is not skill in your valley on a bad day.',
      sourcesNote:
        'Google DeepMind WeatherNext 3 post (3 Sep 2026). Use national meteorological services for warnings.',
    },
    'ecmwf-aifs': {
      title: 'ECMWF AIFS 1.1',
      hook: 'Europe’s operational AI forecast, updated in August 2025 with physics bounds so rain cannot go negative — running beside, not instead of, the physics model.',
      imageAlt:
        'The European Centre for Medium-Range Weather Forecasts building in Reading — home of AIFS, not a screenshot of a forecast chart',
      what: 'ECMWF’s Artificial Intelligence Forecasting System (AIFS) is a machine-learned global forecast that runs in production next to the physics-based IFS. AIFS Single 1.1.0 went operational on 27 August 2025. A 2026 Geoscientific Model Development paper describes a bounding layer that enforces physical limits (no negative rain, consistent cloud and precipitation fields) and reports about 4–6 percent better upper-air and near-surface skill, with the largest precipitation gains — up to 12 percent and about a day’s advantage on a categorical score. ECMWF later superseded 1.1 with AIFS v2 in May 2026; this card keeps the 1.1 line the founder asked for, labeled as that vintage. AIFS is operational software, not a demo.',
      problem:
        'Physics models are accurate and expensive. A fast learned model can fill the gap if it stays physically sane and is scored against the same observations.',
      how: 'A graph-neural-network encoder, transformer processor, and decoder, trained on ERA5 and ECMWF analyses, steps the atmosphere in six-hour leaps. Four runs a day. Ten-day fields in minutes on a GPU is the operational selling point; the VAST Data essay the founder cited is a secondary telling of that shift. The legal and scientific record is the GMD paper and ECMWF’s version history.',
      players:
        'ECMWF; EuroHPC training machines (Leonardo, MareNostrum 5). Neighbor card: GraphCast and WeatherNext 3. IFS ensembles still handle spread and long coupling.',
      risks:
        'Learned models can invent polite extremes or break conservation if unconstrained — that is why 1.1 added bounds. GPU non-determinism means you cannot bit-reproduce an official run at home. AI weather still needs the satellites.',
      sourcesNote:
        'Founder link: VAST Data essay on AIFS 1.1. Skill numbers follow Moldovan et al., GMD, 2026. ECMWF superseded 1.1 with v2 in May 2026.',
    },
    'esa-biomass': {
      title: 'ESA Biomass',
      hook: 'The first P-band radar in space, built to map forest biomass and the carbon in trees — not a weather model and not an emissions inventory.',
      imageAlt:
        'Artist view of ESA’s Biomass satellite over a forest canopy, the P-band mission that looks through trees to woody mass',
      what: 'Biomass is an ESA Earth Explorer satellite. It carries the first spaceborne P-band synthetic-aperture radar, designed to measure forest biomass and the carbon stored in woody vegetation. It is not a weather forecast model and not a greenhouse-gas inventory. A 12-metre antenna flies at about 666 km. ESA launched it on 29 April 2025 from Kourou, French Guiana, on Vega-C.',
      problem:
        'How much carbon sits in tropical and other forests is still poorly mapped from the ground. Optical satellites see the canopy top. A longer radar wave can look into the volume of the trees — if you can fly that band from space.',
      how: 'P-band radar (wavelength about 70 cm) penetrates the canopy and returns a signal related to woody biomass. The product is a forest-structure and carbon map, not a plume of emissions and not a rain forecast. Ground plots still calibrate the retrieval.',
      players:
        'ESA FutureEO / Earth Explorer. Data were opened in January 2026 after commissioning. Neighbor cards that measure the atmosphere or emissions (Climate TRACE, weather AI) are a different job.',
      risks:
        'P-band is a restricted radio allocation; interference and calibration are ordinary limits. A biomass map is not a carbon credit and not a court inventory. Tropical cloud is less of a problem than for optical sensors, but the retrieval still needs field plots.',
      sourcesNote:
        'ESA Biomass mission page (FutureEO): first P-band SAR in space; launch 29 April 2025, Kourou / Vega-C. Not weather, not an emissions inventory.',
    },
  },
  ru: packRu,
  pl: packPl,
  lv: packLv,
};
