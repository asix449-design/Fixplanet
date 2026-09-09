import type { SolutionCopy } from '../data/solutions';
import type { Locale } from './config';
import { pack2Lv } from './solutions-pack2-lv';
import { pack2Pl } from './solutions-pack2-pl';
import { pack2Ru } from './solutions-pack2-ru';

/** Second founder-curated Solutions pack: cities, materials, oceans, energy. */
export const pack2: Record<Locale, Record<string, SolutionCopy>> = {
  en: {
    'green-roofs': {
      problemTitle: 'Bare roofs that shed heat and rain',
      fixTitle: 'Green roofs',
      problem:
        'Conventional roofs dump rain into sewers and bake in the sun. In a dense city that adds runoff and heat when there is no soil left at street level.',
      fix: 'A planted roof holds growing medium and vegetation over a waterproof membrane. GSA lists more than 80 federal buildings with green roofs — about 2.2 million square feet — including the U.S. Coast Guard Headquarters in Washington, DC (557,000 square feet). GSA says a planted roof can last two or three times longer than a bare membrane, cut heat-island load, and add insulation. It still needs a sound structure, drainage, and upkeep. A sedum mat is not a park, and it does not replace street trees or sewers.',
      imageAlt: 'Aerial view of a planted roof with circular paths on a white downtown building among Chicago high-rises',
    },
    'rain-gardens-bioswales': {
      problemTitle: 'Streets that turn rain into a dirty flood',
      fixTitle: 'Rain gardens and bioswales',
      problem:
        'When lots and roads are sealed, rain hits hard surfaces and races into pipes, carrying oil, sediment, and nutrients. Sewers overflow; streams spike.',
      fix: 'EPA treats rain gardens and bioswales as types of green infrastructure. A rain garden is a shallow planted basin that collects roof and street runoff and filters it through soil, sand, or gravel. A bioswale is a linear vegetated channel that slows and treats water as it moves — useful along roads. They are not levees. Large storms still need overflow to a drain. They clog or drown plants if they are not designed and maintained.',
      imageAlt: 'A planted street bioswale and curb extension with cutouts catching runoff beside parked cars',
    },
    'cool-pavements': {
      problemTitle: "Streets that store the day's heat",
      fixTitle: 'Cool pavements',
      problem:
        'Dark asphalt soaks up sun and then heats the air and the stormwater that runs off it. EPA cites an Arizona pilot in which conventional paving reached 152°F at midday while cooler surfaces stayed 10–16°F lower.',
      fix: 'EPA uses “cool pavement” for materials that reflect more sun, hold water so it can evaporate, or are otherwise modified to stay cooler than ordinary asphalt. Existing concrete and asphalt mixes, coatings, and grass paving all count. There is no official U.S. labeling program, and the kit is less mature than cool roofs. A lighter street is not a substitute for shade trees, and it is distinct from permeable pavement laid mainly for drainage.',
      imageAlt: 'Highway workers installing tie bars in a freshly placed light-colored concrete pavement slab',
    },
    'district-cooling': {
      problemTitle: 'Every tower running its own chillers',
      fixTitle: 'District cooling',
      problem:
        'In hot, dense districts each building often keeps its own chiller plant. That wastes space, energy, and maintenance on equipment that sits idle much of the day.',
      fix: 'District cooling makes chilled water in a central plant and pipes it to many buildings. SP Group, Singapore’s largest operator, runs Marina Bay — which it calls the world’s largest underground district cooling network — with no supply disruptions since 2006 and 28 buildings served (a planned expansion to 50 by 2030). SP also cites industrial plants and Tengah, a public-housing township with rooftop modular chillers. The climate win depends on the power and the water source. A chilled-water pipe is not a reason to keep leaking envelopes.',
      imageAlt: 'KLCC District Cooling building in Kuala Lumpur at night, with the Petronas Towers behind a white plant hall',
    },
    'building-renovation-epbd': {
      problemTitle: 'Buildings that leak heat all winter',
      fixTitle: 'Energy renovation of buildings',
      problem:
        'The European Commission says roughly 75% of EU buildings have poor energy performance, yet the annual renovation rate is only around 1%. Households still use most of their energy for heat, cooling, and hot water.',
      fix: 'Energy renovation is insulation, better windows, efficient heat or cooling, on-site renewables, and controls. The 2024 recast of the Energy Performance of Buildings Directive and the Renovation Wave aim to double that rate. The Commission says a deep renovation of a very poor building can cut energy use by as much as 80%. Non-residential worst performers face staged minimum standards; homes must cut average use 16% by 2030 versus 2020. Passports and one-stop shops are tools, not a guarantee. A coat of foam without ventilation or a heat source that matches the envelope is a half-job.',
      imageAlt: 'Exterior wall of a store wrapped in mineral-wool insulation during a thermal retrofit',
    },
    'recycled-aggregate-concrete': {
      problemTitle: 'Virgin stone while demolition rubble is dumped',
      fixTitle: 'Recycled aggregate',
      problem:
        'Construction and demolition debris — soil, stone, concrete, brick, ceramics — is often Ireland’s largest waste stream. Virgin quarry rock still fills roads while that rubble goes to landfill.',
      fix: 'Ireland’s EPA published national end-of-waste criteria for recycled aggregates in 2023. Clean crushed material can leave the waste regime and be sold as a product for general fill, roads, railway ballast, and other non-structural uses. A public register lists authorised producers. The criteria do not turn every mixed demolition pile into structural concrete. Contaminants stay waste. Recycling rubble is not a license to demolish faster.',
      imageAlt: 'Open-air stockpiles of crushed recycled aggregate beside a materials yard',
    },
    'geopolymer-binders': {
      problemTitle: 'Binders that must cook limestone',
      fixTitle: 'Geopolymer and alkali-activated binders',
      problem:
        'Ordinary Portland cement needs a kiln that calcines limestone. That chemistry releases CO₂ even before the fuel is burned. Demand for concrete is still measured in gigatonnes.',
      fix: 'A 2024 perspective in the Journal of the American Ceramic Society treats geopolymers and alkali-activated materials as binders made from aluminosilicate precursors — metakaolin, fly ash, slag — reacted with alkaline (or, less often, acid) activators instead of Portland clinker. Civil engineers often use the names loosely. The authors say life-cycle results are often better than Portland cement but not always, especially when sodium silicate and heat curing dominate. Precursors such as coal fly ash and blast-furnace slag are becoming scarcer. Codes, leaching tests, and worker safety for strong alkalis still limit everyday pours. This is not a drop-in bag of ordinary cement.',
      imageAlt: 'Two dishes of blast-furnace slag: a pale ground powder and coarser granulated slag beside a ruler',
    },
    'recycled-aluminium': {
      problemTitle: 'New metal from ore when scrap already exists',
      fixTitle: 'Recycled and secondary aluminium',
      problem:
        'Primary aluminium starts from bauxite and a power-hungry smelter. Scrap that could be remelted is still landfilled or exported as mixed waste.',
      fix: 'The International Aluminium Institute says aluminium can be recycled repeatedly without losing its properties, and that about 75% of all aluminium ever produced is still in use. IAI figures for 2019 put primary energy at 186 GJ per tonne versus 8.3 GJ for recycled metal — about 95% less. For 2022 it reports 15.1 tonnes of CO₂e per tonne of primary metal versus 0.52 for recycled metal (gate-to-gate). Those are industry numbers. Recycling still needs collection, sorting, and a furnace. It does not make extra cans a climate strategy.',
      imageAlt: 'A red collection bin filled with used beverage cans and tins gathered for metal recycling',
    },
    'hempcrete-bio-insulation': {
      problemTitle: 'Insulation that starts as a fossil foam',
      fixTitle: 'Hemp fibre insulation and hempcrete',
      problem:
        'Much building insulation is mineral wool or plastic foam. Those products work, but they start from mined or fossil feedstocks and do little with agricultural fibre.',
      fix: 'ISO 24260:2022 specifies factory-made hemp-fibre mats and boards for building insulation — products that are more than 50% hemp fibre by mass, with or without other natural fibre and a polymer balance. Hempcrete (hemp-lime) is a related but different bio-composite: hurd plus a lime binder, used as non-structural infill, not as a substitute for a concrete frame. The ISO document is a product specification, not a carbon score. Hemp insulation still needs dry detailing and a structure that can carry the wall.',
      imageAlt: 'Close-up of a hempcrete wall: pale lime binder packed around short hemp hurd chips',
    },
    'cement-ccus': {
      problemTitle: 'Process CO₂ that fuel-switching cannot erase',
      fixTitle: 'Cement-plant CO₂ capture (CCUS)',
      problem:
        'Heidelberg Materials notes that about two thirds of a cement kiln’s direct CO₂ comes from calcining limestone. That gas is chemistry, not just the burner. Lower-clinker blends help; they do not zero the stack.',
      fix: 'Carbon capture, transport, and storage is the company’s stated path for the rest. At Brevik, Norway, Heidelberg commissioned what it calls the world’s first industrial-scale cement CCS plant in June 2025. DREAM, at Rezzato–Mazzano in Italy, is a planned hybrid capture project (oxyfuel plus amine) selected for the EU Innovation Fund; a final investment decision still depends on Italian CCS rules, incentives, and the Ravenna storage pipeline. Capture is not an excuse to pour more concrete. DREAM is a funded project, not a running Italian plant.',
      imageAlt: 'Insulated duct and towers at Heidelberg Materials’ Brevik cement carbon-capture plant under a grey sky',
    },
    'seagrass-restoration': {
      problemTitle: 'Meadows that vanish after algal blooms',
      fixTitle: 'Seagrass restoration',
      problem:
        'Seagrass holds sediment, shelters baitfish, and feeds manatees. NOAA reports that algal blooms wiped out nearly 75% of seagrass in Florida’s Indian River Lagoon between 2011 and 2020.',
      fix: 'NOAA is funding planting in that lagoon with Indian River County: about 13 acres at Big Slough and 10 acres at Preacher’s Hole in 2025, with cages to keep boats and stingrays off the plugs for up to a year. Staff are aiming for 80% survivorship and note natural recovery in some unplanted areas. Planting is slow, depth-limited, and fails if water stays too dirty. It is not a permit to keep dumping nutrients.',
      imageAlt: 'Workers in a shallow Florida lagoon planting seagrass plugs during a NASA Kennedy restoration project',
    },
    'coral-restoration': {
      problemTitle: 'Reefs dying faster than they grow',
      fixTitle: 'Coral restoration',
      problem:
        'NOAA says the world has already lost 30 to 50% of its coral reefs to heat, acidification, pollution, invasives, and physical damage. Local gardening cannot rewrite ocean chemistry.',
      fix: 'Nurseries grow fragments and outplant them with cement, ties, and nails. NOAA reports more than 20 Caribbean nurseries supplying over 40,000 corals a year. Mission: Iconic Reefs aims to raise coral cover at seven Florida Keys sites from 2% to an average of 25%. Emergency crews reattach storm-broken colonies. Restoration is a local hold. It does not replace cutting emissions, runoff, and destructive fishing.',
      imageAlt: 'Staghorn coral fragments hanging from a mid-water nursery tree on a NOAA restoration site',
    },
    'ghost-gear': {
      problemTitle: 'Nets that keep fishing with no boat',
      fixTitle: 'Ghost-gear recovery',
      problem:
        'Abandoned, lost, or discarded fishing gear (ALDFG) keeps trapping animals and snagging habitat after the vessel has gone. It is a gear problem, not only a bottle problem.',
      fix: 'The Global Ghost Gear Initiative is a cross-sector alliance — industry, governments, NGOs, researchers — that maps, reports, and funds retrieval and prevention. Its North American Net Collection Initiative is a transboundary project across the western United States, Mexico, and Canada. A cleaned beach is not a fishery reform. Prevention (marking, retrieval rules, port reception) matters as much as diving for nets.',
      imageAlt: 'An EPA diver in Puget Sound lifting a mass of abandoned fishing net from the seabed',
    },
    'kelp-farming': {
      problemTitle: 'Lost kelp forests and unmanaged harvest',
      fixTitle: 'Kelp forests and seaweed culture',
      problem:
        'Kelp forests — UNEP calls them the most extensive marine vegetated ecosystem — are stressed by warming, heatwaves, poor water quality, and unregulated harvest. Coastal fisheries and shorelines lose the structure.',
      fix: 'UNEP’s 2023 synthesis Into the Blue reviews science and management: protect and restore wild forests, and treat harvest as an activity that needs stock assessment and adaptive rules. Seaweed and kelp farming is a related, growing use of the same algae, not a substitute for a wild forest. Farms need siting, biosecurity, and native species. A rope of kelp is not an offset for a cleared reef.',
      imageAlt: 'Satellite view of rectangular seaweed-farm plots in coastal water among South Korean islands',
    },
    'salt-marsh-restoration': {
      problemTitle: 'Ditched, diked, and drowning marshes',
      fixTitle: 'Salt-marsh restoration',
      problem:
        'Atlantic salt marshes buffer storms, filter water, and hold peat. They were ditched for farming and mosquitoes and are now overtopped as seas rise. The saltmarsh sparrow nests nowhere else and is losing ground.',
      fix: 'The U.S. Fish and Wildlife Service’s Salt Marsh Keystone Initiative (announced 2024) coordinates restoration along the Atlantic Coast, building on Hurricane Sandy work: runnels to drain perched water, undoing old ditches, and realigning marshes. FWS notes that healthy marsh peat can store carbon much faster than terrestrial forests — “up to 50 times” is the Service’s phrasing. A runnel is local hydrology, not a seawall, and it will not outrun sea-level rise if the upland is walled off.',
      imageAlt: 'An excavator working a tidal channel through Spartina marsh at Seatuck National Wildlife Refuge',
    },
    'utility-scale-solar': {
      problemTitle: 'Daytime power still burned from fuel',
      fixTitle: 'Utility-scale solar PV',
      problem:
        'Grids still meet a large share of midday and afternoon demand with fossil plants. Rooftops help households; they do not, by themselves, replace a power station.',
      fix: 'Utility-scale photovoltaic plants are fields of modules feeding a substation. IEA’s solar-PV briefing treats PV as a core generating technology whose plants range from small arrays to gigawatt stations. Land, permitting, and grid connection queues decide how fast it grows. A desert array still needs a line, storage or flexible backup, and a plan for the land. It is not a rooftop microgrid.',
      imageAlt: 'Satellite view of the Topaz Solar Farm: dark rectangular arrays across California Valley',
    },
    'offshore-wind': {
      problemTitle: 'Strong wind over water, unused',
      fixTitle: 'Offshore wind',
      problem:
        'Onshore wind is constrained by land, neighbours, and weaker coastal winds. The better resource often sits over the sea, farther from people and closer to some coastal demand.',
      fix: 'The IEA’s Offshore Wind Outlook 2019 called the technology rapidly maturing. In 2018 it supplied only a tiny fraction of world electricity; IEA’s Stated Policies path then saw capacity rising about fifteen-fold to 2040 and becoming a roughly $1 trillion investment class, helped by larger turbines and floating foundations. Farms still need ports, vessels, and onshore grid upgrades. Floating units are newer than fixed-bottom North Sea piles. Offshore wind is not a reason to skip onshore sites that already work.',
      imageAlt: 'A curved row of offshore wind turbines at Middelgrunden in the Øresund, with Copenhagen on the horizon',
    },
    'grid-scale-batteries': {
      problemTitle: 'Surplus sun at noon, shortage after dark',
      fixTitle: 'Grid-scale batteries',
      problem:
        'Wind and solar output does not follow the evening peak. Without storage or flexible plants, grids curtail midday power and fire gas after sunset.',
      fix: 'IEA’s grid-scale storage work treats utility batteries as short-duration flexibility: they shift energy across hours, supply fast balancing, and can ease some network upgrades. IEA’s Electricity 2026 analysis reports 63 GW of utility-scale battery additions in 2024 and 124 GW installed, with project costs falling about 40% that year to around USD 150/kWh — IEA’s figures. Batteries are not seasonal storage. Duration, minerals, and interconnection still bind. A container of cells is not a pumped-storage lake.',
      imageAlt: 'Overhead view of the Tehachapi Energy Storage Project: white battery halls beside a California substation',
    },
    geothermal: {
      problemTitle: 'Heat underfoot used in only a few countries',
      fixTitle: 'Geothermal heat and power',
      problem:
        'Conventional geothermal is still a niche. IEA says it meets less than 1% of global energy demand and is concentrated in places with volcanic or fault-hosted heat — the United States, Iceland, Indonesia, Türkiye, Kenya, and Italy.',
      fix: 'IEA’s 2024 Future of Geothermal Energy report and news note that horizontal drilling and fracturing adapted from oil and gas could open deeper heat in many more countries. IEA says next-generation geothermal could meet 15% of global electricity-demand growth to 2050 if costs keep falling — up to 800 GW in that framing — and that conventional plants already supply firm power and district heat where the resource is easy. Next-generation projects remain early and capital-heavy. A steam field is not a license to ignore induced seismicity or water use.',
      imageAlt: 'Nesjavellir geothermal power plant in Iceland: steam pipes and halls on a mossy lava field by a lake',
    },
    'pumped-hydro': {
      problemTitle: 'Nowhere to put surplus electricity for the night',
      fixTitle: 'Pumped-storage hydropower',
      problem:
        'Batteries cover hours. Grids with a lot of wind and solar also need longer, cheaper bulk storage. Few technologies move that much energy.',
      fix: 'Pumped storage lifts water to an upper reservoir and runs it down through turbines when power is scarce. IEA’s Hydropower Special Market Report calls the flexibility of reservoirs and pumped plants unmatched, and forecasts pumped storage as 30% of net hydropower additions through 2030. IEA estimated existing conventional reservoirs can store about 1,500 TWh in one cycle — far more energy than today’s pumped fleet or batteries. New plants need two basins, years of permitting, and a market that pays for storage, not only kilowatt-hours. Pumping is not a new river.',
      imageAlt: 'The tree-lined upper reservoir of Bath County Pumped Storage Station held in a mountain bowl',
    },
  },
  ru: pack2Ru,
  pl: pack2Pl,
  lv: pack2Lv,
};
