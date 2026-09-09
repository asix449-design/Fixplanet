import { solutionMeta, type Solution, type SolutionCopy } from '../data/solutions';
import type { Locale } from './config';
import { pack2 } from './solutions-pack2';

const en: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Freshwater scarcity',
    fixTitle: 'Drip irrigation',
    problem: 'In dry regions most irrigation water never reaches the root: it evaporates or runs off.',
    fix: 'Drip lines deliver water at the root zone, so less is lost and yields can rise.',
    imageAlt: 'Young corn plant in dry soil watered by a black drip-irrigation line',
  },
  'constructed-wetlands': {
    problemTitle: 'River & coastal pollution',
    fixTitle: 'Constructed wetlands',
    problem: 'Nutrients and sewage in rivers feed algal blooms that starve fish of oxygen.',
    fix: 'Constructed wetlands treat water as a living filter — reeds, microbes, and shallow flow.',
    imageAlt: 'Constructed wetland with reeds, clear shallow water, and a wooden boardwalk',
  },
  'sustainable-forestry': {
    problemTitle: 'Deforestation',
    fixTitle: 'Sustainable forestry',
    problem: 'Slow-growing timber drives logging of old forests.',
    fix: 'Fast-growing plantation species and sustainable forestry for building wood — pressure off wild forests.',
    imageAlt: 'Misty forestry track with stacked logs and rows of plantation trees',
  },
  'anaerobic-digesters': {
    problemTitle: 'Food waste & methane',
    fixTitle: 'Anaerobic digesters',
    problem: 'Landfilled food waste releases methane, a potent greenhouse gas.',
    fix: 'Anaerobic digesters turn waste into biogas and soil fertilizer.',
    imageAlt: 'Aerial view of three green-domed anaerobic digester tanks in farmland',
  },
  'cool-roofs': {
    problemTitle: 'Urban heat',
    fixTitle: 'Cool roofs',
    problem: 'Dark roofs and asphalt trap heat and spike energy use.',
    fix: 'Cool roofs and reflective coatings lower temperatures and cut AC demand.',
    imageAlt: 'Urban rooftops coated in reflective white cool-roof material',
  },
  'lower-clinker-cement': {
    problemTitle: 'Cement emissions',
    fixTitle: 'Lower-clinker cements',
    problem: 'Ordinary cement is a major source of global CO₂.',
    fix: 'Lower-clinker cements (e.g. calcined clay & limestone blends) cut emissions at scale.',
    imageAlt: 'Cement plant with piles of pale powder, crushed stone, and sand',
  },
  'river-interceptors': {
    problemTitle: 'Plastic leakage',
    fixTitle: 'River interceptor barriers',
    problem:
      'Rivers carry most recognizable plastic to the sea after rain. Once the litter is offshore, collection is slower and more expensive than stopping it in the channel.',
    fix: 'Floating booms and river interceptors hold litter at a barrier so it can be lifted out. The Ocean Cleanup’s Interceptor is one named, produced family of these systems; many cities also use simpler booms. A barrier is a catcher at a choke point — not a substitute for collection upstream or for making less plastic.',
    imageAlt: 'Floating river boom with yellow buoys holding back plastic bottles and litter',
  },
  'solar-microgrids': {
    problemTitle: 'Unreliable dirty power',
    fixTitle: 'Solar microgrids',
    problem: 'Fossil grids lock in emissions and leave remote places in the dark.',
    fix: 'Solar microgrids deliver clean, local power where big plants don’t reach.',
    imageAlt: 'Rural solar panel arrays and a control cabinet beside a village field',
  },
  'membrane-desalination': {
    problemTitle: 'Coastal thirst beside salt water',
    fixTitle: 'Reverse-osmosis desalination',
    problem:
      'Cities can sit on a coast and still run dry. Drought, overdrawn rivers, and growing demand hit drinking water first.',
    fix: 'Reverse-osmosis plants push seawater through membranes and already supply cities in Israel, Spain, Australia, the Gulf, and California. Pairing them with wind or solar cuts the fossil power bill. The plants still use energy, brine must be diluted, and desalination is not a license to waste freshwater inland.',
    imageAlt: 'Perth Seawater Desalination Plant beside a fenced access road under a blue sky',
  },
  'managed-aquifer-recharge': {
    problemTitle: 'Emptying groundwater',
    fixTitle: 'Managed aquifer recharge',
    problem:
      'Wells drop when cities and farms take groundwater faster than rain puts it back. Empty aquifers mean dry taps, sinking land, and no reserve in drought.',
    fix: 'Managed aquifer recharge puts treated stormwater, river water, or recycled wastewater into basins and wells so the ground store refills. Orange County’s Groundwater Replenishment System, Perth’s recycling scheme, and spreading grounds in Arizona already run at city scale. The pictured Bolivar site in South Australia was a recycled-water aquifer storage-and-recovery trial of the same class. It needs clean source water, the right geology, and years of monitoring — it is not a new river.',
    imageAlt:
      'Pipes, a pump, and a labeled container at the Bolivar recycled-water aquifer storage and recovery trial in South Australia',
  },
  'assisted-natural-regeneration': {
    problemTitle: 'Cleared dryland woodland',
    fixTitle: 'Assisted natural regeneration',
    problem:
      'After cutting and cropping, dry landscapes often stay bare because sprouts are grazed or burned before they can become trees. Trucking in seedlings then fails in the same heat.',
    fix: 'Assisted natural regeneration protects living stumps and roots so trees return from what is already in the soil. Farmer-managed natural regeneration in the Sahel — especially Faidherbia parklands in Niger and neighboring countries — has brought farm trees back at landscape scale. It still needs local rights, grazing control, and time; it is not a nursery dropping saplings from a truck.',
    imageAlt: 'Faidherbia albida trees with feathery green canopy standing in dry golden grass',
  },
  'fire-smart-forestry': {
    problemTitle: 'High-severity wildfire',
    fixTitle: 'Prescribed fire',
    problem:
      'A century of putting out every fire left dense fuel in many temperate forests. When weather is extreme, those stands burn hotter and kill trees that used to survive lighter fire.',
    fix: 'Prescribed burns and thinning that restore frequent, low-intensity fire are used by forest services and Indigenous practitioners in the western United States, Australia, and parts of Europe. They reduce fuel under the right weather. They do not stop every megafire in a heatwave, and poorly planned burns can escape. Treat them as landscape maintenance, not a climate offset.',
    imageAlt:
      'Wildland firefighters in protective gear watching a low prescribed burn move through a conifer stand',
  },
  'shade-agroforestry': {
    problemTitle: 'Forest converted to commodity crops',
    fixTitle: 'Shade coffee and cocoa',
    problem:
      'Full-sun coffee and cocoa plantations replace forest canopy, cut bird habitat, and often need more fertilizer and irrigation. Demand still drives new clearing at forest edges.',
    fix: 'Traditional and certified shade systems grow coffee or cocoa under a tree canopy that holds soil, birds, and some forest structure. They are ordinary agriculture in parts of Latin America and West Africa. Shade does not automatically stop deforestation if prices push the frontier, and certification is only as honest as the audit.',
    imageAlt: 'Coffee shrubs growing under a tall shade-tree canopy in a traditional plantation',
  },
  'pet-bottle-recycling': {
    problemTitle: 'Single-use PET bottles',
    fixTitle: 'Bottle-to-bottle PET recycling',
    problem:
      'Clear PET bottles are designed for a short life. Most still become landfill, incinerator fuel, or downcycled fiber after one use.',
    fix: 'Mechanical recycling with deposit-return and “super-clean” washing already turns bottles back into food-grade bottles in the EU and other deposit regions. Collection and sorting decide the result more than the extruder. Colored and mixed plastics still drop out; recycling is not a reason to keep flooding shops with bottles.',
    imageAlt: 'Stacked bales of compressed PET bottles in the yard of a recycling plant',
  },
  'municipal-composting': {
    problemTitle: 'Food and garden waste in landfills',
    fixTitle: 'Municipal organics composting',
    problem:
      'When cities bury food scraps and yard waste, they throw away soil carbon and make landfill methane. Organics are often the heaviest part of household bins.',
    fix: 'Separate collection plus windrow or in-vessel composting is routine in cities such as San Francisco, Milan, and much of South Korea and the EU. Compost goes to farms and parks. Contamination — plastic, glass — still spoils piles; composting is not a substitute for eating less waste.',
    imageAlt: 'A large pile of finished dark compost at a municipal organics facility, with machinery behind it',
  },
  'landfill-gas-capture': {
    problemTitle: 'Landfill methane',
    fixTitle: 'Landfill gas to energy',
    problem:
      'Old dumps keep making methane for decades after they close. The gas is a strong greenhouse pollutant and a local explosion and odor hazard.',
    fix: 'Wells and pipes pull landfill gas to a flare or an engine. Sites on the U.S. EPA LMOP list, in the UK, and elsewhere already generate electricity this way. Capture is partial, leaks remain, and the method does not stop waste from arriving. It is a cleanup of dumps we already have — distinct from farm or food digesters.',
    imageAlt: 'Gas-collection pipes and hoses rising through a gray geomembrane cap on a landfill cell',
  },
  'permeable-pavement': {
    problemTitle: 'Urban runoff and floods',
    fixTitle: 'Permeable pavement',
    problem:
      'Cities seal soil with asphalt. Rain becomes a dirty flood that overloads sewers and rivers instead of soaking in.',
    fix: 'Porous asphalt, pervious concrete, and interlocking pavers let water into a stone reservoir below the street. They are standard green-stormwater kit in U.S. municipal programs, German cities, and China’s sponge-city projects. They clog without sweeping, and they are not a levee; they shave runoff on the lots and streets where they are laid.',
    imageAlt: 'Interlocking permeable pavers beside a sunken rain garden in a public park',
  },
  'urban-tree-canopy': {
    problemTitle: 'Hot, bare city streets',
    fixTitle: 'Urban tree canopy',
    problem:
      'Hard surfaces and missing shade make neighborhoods hotter than the countryside around them, especially where past planning left few trees.',
    fix: 'Street and park trees, planted and measured as canopy cover, cool air and pavement on the blocks that have them. Cities such as New York and Melbourne run named canopy programs and track cover. Trees need water, space, and years. A “million trees” slogan without survival counts is landscaping, not climate infrastructure.',
    imageAlt: 'A residential street fully shaded by a dense interlocking canopy of mature trees',
  },
  'district-heating': {
    problemTitle: 'Buildings heated one boiler at a time',
    fixTitle: 'District heating from waste heat',
    problem:
      'Individual gas boilers waste heat that power plants, incinerators, and industry already throw away. Cities still burn fuel in every basement.',
    fix: 'Insulated pipe networks carry hot water from combined-heat-and-power plants, waste incinerators, data centers, and industry into buildings. Copenhagen (including heat from Amager Bakke), Stockholm, Paris, and large Chinese systems already run this way. Networks are expensive to dig, and the climate win depends on the heat source: waste heat and clean power help; a coal CHP plant is still coal.',
    imageAlt: 'Copenhagen’s Amager Bakke waste-to-energy plant across water, with steam from the stack',
  },
  'mass-timber': {
    problemTitle: 'Steel-and-concrete mid-rises',
    fixTitle: 'Mass timber and CLT',
    problem:
      'Mid-rise buildings usually mean steel and concrete, both carbon-heavy to make. Wood was long limited to small houses by fire codes.',
    fix: 'Cross-laminated timber and related mass-timber panels are already used in mid-rise buildings in Europe, Canada, and a growing U.S. market — including projects such as Brock Commons in Vancouver and Nordic offices. Carbon stays stored only if the forest is not stripped and the building lasts. Fire, moisture, and honest forest sourcing are the real constraints — not a cartoon of wooden skyscrapers replacing all concrete.',
    imageAlt: 'Mass-timber columns and beams of a mid-rise building under construction in Helsinki',
  },
  'green-steel': {
    problemTitle: 'Blast-furnace steel',
    fixTitle: 'Scrap furnaces and hydrogen iron',
    problem:
      'Making iron in a coal-fired blast furnace is one of the largest industrial CO₂ sources. The world still needs steel for rails, machines, and frames.',
    fix: 'Melting scrap in an electric-arc furnace is the proven lower-carbon path where scrap and clean power exist. Hydrogen-based direct reduced iron — SSAB’s HYBRIT plant in Sweden is a serious industrial trial — is beginning, not a global swap. Scrap is limited, hydrogen is scarce, and most tonnes still come from coal.',
    imageAlt: 'Interior of an electric-arc furnace hall with a circular furnace lid, pipes, and walkways',
  },
  'mangrove-restoration': {
    problemTitle: 'Cleared coasts, weaker shores',
    fixTitle: 'Mangrove restoration',
    problem:
      'Shrimp ponds, ports, and charcoal cutting have removed mangrove belts that held sediment, fish nurseries, and a living breakwater.',
    fix: 'Restoring hydrology and planting the right species has brought mangroves back in parts of the Mekong, Indonesia, Senegal, and Florida when the tide still fits. Failed projects dump seedlings on the wrong mudflat. Restoration is local coastal work; it does not offset a coal plant.',
    imageAlt: 'People planting young mangrove saplings in coastal mud beside mature stilt-rooted trees',
  },
  'bycatch-reduction': {
    problemTitle: 'Wildlife caught with the catch',
    fixTitle: 'Selective fishing gear',
    problem:
      'Trawls, longlines, and gillnets catch turtles, dolphins, seabirds, and juvenile fish that nobody meant to land. Bycatch can empty a species while the target stock still looks fine.',
    fix: 'Turtle excluder devices in shrimp trawls, circle hooks, bird-scaring lines, and acoustic pingers are required or common in several fisheries and have cut specific bycatch where enforcement exists. Gear is not a marine park. It fails if rules are weak or nets are used in the wrong place.',
    imageAlt: 'A loggerhead turtle swimming clear of a shrimp trawl after passing a turtle excluder device',
  },
  'oyster-reefs': {
    problemTitle: 'Bare, eroding estuaries',
    fixTitle: 'Oyster reefs and living shorelines',
    problem:
      'Dredged oyster beds and bulkheaded shores leave mud and waves with nothing to break them. Water gets murkier; the edge eats itself.',
    fix: 'Rebuilding oyster reefs and planting living shorelines — marsh, shell, and reef structures — is underway in Chesapeake Bay, parts of the U.S. Gulf, and New York Harbor. Oysters filter locally and the structure can slow erosion. These are estuary projects, still rebuilding from a historic collapse — not a global seafood miracle.',
    imageAlt: 'An intertidal oyster reef of clustered shells breaking the surface beside marsh grass',
  },
  'onshore-wind': {
    problemTitle: 'Fossil electricity',
    fixTitle: 'Onshore wind on the grid',
    problem:
      'Coal and gas still set the clock on many grids. Power is the largest lever on national emissions where the grid is dirty.',
    fix: 'Onshore wind is ordinary infrastructure: China, Europe, the United States, India, and Brazil already run large fleets. It needs transmission, backup or storage, and honest siting for wildlife and neighbors. It is not 24-hour power by itself, and it does not clean a grid that keeps building unabated coal.',
    imageAlt: 'Rows of white onshore wind turbines across a desert plain toward distant mountains',
  },
  'heat-pumps': {
    problemTitle: 'Fossil heat in buildings',
    fixTitle: 'Heat pumps for buildings',
    problem:
      'Space and water heating still burn gas or oil in much of Europe, North America, and temperate Asia. Buildings leak that heat all winter.',
    fix: 'Air-source and ground-source heat pumps are the default heating kit in Norway, Sweden, and Finland and are rolling out across the EU. Cold-climate models work below freezing. They need a decent envelope, a grid that can take winter load, and refrigerants handled as chemicals, not slogans.',
    imageAlt: 'An outdoor air-source heat pump unit running beside a brick wall in falling snow',
  },
  'rainwater-harvesting': {
    problemTitle: 'Dry taps beside a wet roof',
    fixTitle: 'Rainwater harvesting',
    problem:
      'Houses and public buildings shed rain into gutters while wells and tankers struggle. In many towns the roof is the nearest catchment, but open barrels breed mosquitoes and dirty first-flush water.',
    fix: 'WHO’s sanitary-inspection advice treats rooftop collection and covered storage as a household water source that still needs first-flush diversion, a closed tank, and regular cleaning. The method is ordinary in dry and monsoon climates. It is not a new river: yield follows the roof and the rain, and poorly kept stores can make people sick.',
    imageAlt: 'A covered masonry rainwater cistern standing in dry ground in India',
  },
  'newater-reclaimed-wastewater': {
    problemTitle: 'Cities that run out of catchment',
    fixTitle: 'Reclaimed wastewater / NEWater',
    problem:
      'A dense city can use more freshwater than its reservoirs and imports can reliably supply. Treated used water is then discarded to the sea while taps stay at risk in drought.',
    fix: 'Singapore’s PUB recycles treated used water through micro- or ultrafiltration (or a membrane bioreactor), reverse osmosis, and ultraviolet disinfection — branded NEWater. PUB says four plants are in operation. Most of the water goes to industry and cooling; in dry periods some is blended into reservoirs and treated again before it becomes tap water. Reuse needs tight treatment and public trust. It does not make a city independent of catching rain or using less.',
    imageAlt: 'Blue microfiltration vessels and pipes labeled Microfiltration System at Bedok NEWater Factory',
  },
  'fog-harvesting': {
    problemTitle: 'Cloud on the ridge, no well in the village',
    fixTitle: 'Fog harvesting',
    problem:
      'High, dry coasts and ridges can sit in frequent fog while groundwater and piped water stay out of reach. The moisture is in the air, not in a river.',
    fix: 'Large mesh collectors intercept fog droplets. FogQuest, a charity founded in 2000, helped build collectors in places such as Tojquia in Guatemala, Chile’s Atacama sites, and Falda Verde; it now mainly mentors new projects and notes that its project pages are no longer kept current. Yield depends on wind, mesh, and fog days. Collectors need local upkeep. They are a ridge technology, not a city supply.',
    imageAlt: 'A rectangular mesh fog collector on a dry ridge at Alto Patache, Chile, with people standing beside it above the cloud layer',
  },
  'constructed-floating-wetlands': {
    problemTitle: 'Nutrients in ponds that cannot become land wetlands',
    fixTitle: 'Constructed floating wetlands',
    problem:
      'Stormwater basins and wastewater lagoons collect nutrients and algae. A land-based wetland needs space and changes flood storage. Many existing ponds have neither.',
    fix: 'Constructed floating wetlands are pontoon modules whose plant roots hang in the water, hosting biofilms that take up nutrients and trap particles. CSIRO describes them as a recent retrofit for stormwater and wastewater and is piloting systems on a lagoon at Cowes, Phillip Island, and on an urban channel in Salisbury, South Australia. They are pilots, not a replacement for a treatment plant, and plants must be harvested or they return what they stored.',
    imageAlt: 'Sengkang Floating Wetland in Singapore: a planted mid-channel strip in a reservoir, with a bridge and high-rises beyond',
  },
  'solar-still': {
    problemTitle: 'Salt water and sun, no grid',
    fixTitle: 'Solar still / passive solar desalination',
    problem:
      'Coastal and island households can have seawater and sunlight but no power for a reverse-osmosis plant. Hauling or boiling water is the daily fallback.',
    fix: 'A solar still evaporates saline water under a transparent cover and condenses the vapour as freshwater — an old, small-scale method. In 2020 MIT and Shanghai Jiao Tong University demonstrated a multi-stage passive still on an MIT rooftop that reused condensation heat between layers. That work is a research prototype, not a municipal plant. Still output follows sun and area; it does not replace membrane desalination for a city.',
    imageAlt: 'A rooftop solar still in Cairo with an insulated duct loop around a dark evaporator box',
  },
  agroforestry: {
    problemTitle: 'Fields without trees',
    fixTitle: 'Agroforestry',
    problem:
      'Clearing trees from cropland and pasture leaves soil, shade, and fodder thinner. Farms then lean harder on fertilizer, irrigation, and feed brought from elsewhere.',
    fix: 'Agroforestry puts trees back with crops and livestock — alley cropping, silvopasture, homegardens, and related systems. FAO treats it as a widespread, long-standing practice and highlights examples such as the Amazonian Chakra in Ecuador. Shade coffee and cocoa are one family of the same idea. Trees need rights, time, and design; a row of seedlings is not a forest offset.',
    imageAlt: 'Aerial view of alley-cropping plots and young tree rows on a Savanna Institute farm beside the Wisconsin River',
  },
  windbreaks: {
    problemTitle: 'Wind that dries soil and stresses livestock',
    fixTitle: 'Windbreaks / shelterbelts',
    problem:
      'Open fields and yards take the full force of wind. Soil blows, snow drifts onto roads, and animals burn more feed in cold weather.',
    fix: 'USDA’s National Agroforestry Center describes windbreaks — also called shelterbelts — as linear plantings of trees and shrubs laid out for a purpose: field protection, livestock shelter, living snow fences, or farmstead screening. Height, density, gaps, and orientation decide what they do. They are farm infrastructure, not a carbon plantation, and they fail if they are not maintained.',
    imageAlt: 'Two young rows of staked trees forming a windbreak across a green Illinois field',
  },
  'reduced-impact-logging': {
    problemTitle: 'Logging that wrecks the residual stand',
    fixTitle: 'Reduced-impact logging',
    problem:
      'Conventional tropical harvest often means poorly planned skid trails, felled trees hung in climbers, and damage to the trees left behind. The next crop and the soil pay first.',
    fix: 'Reduced-impact logging (RIL) is planned harvesting: pre-harvest mapping, directional felling, and controlled skid trails. FAO case work traces early systems in Sarawak and later trials in Suriname, Guyana, Cameroon, and elsewhere. Research found lower damage and, in some cases, lower cost, but many firms still do not change practice. RIL is not a ban on logging and it is not the same as leaving an old forest uncut.',
    imageAlt: 'A yellow loader carrying a log at a timber camp in Tawau District, Sabah, with forest behind',
  },
  'riparian-forest-restoration': {
    problemTitle: 'Bare banks, hotter streams',
    fixTitle: 'Riparian forest restoration',
    problem:
      'When streamside trees are cleared for fields or lots, banks erode, nutrients wash in, and summer water warms. Fish and the channel lose the shade and roots that held the edge.',
    fix: 'USDA Climate Hubs describe maintaining or restoring forest and other cover in riparian zones: mixed plantings, no-harvest or limited-harvest buffers, and bank stabilization. The aim is shade, woody debris, and soil held by roots. It is local stream work. A planted strip does not restore a whole watershed if the uplands stay bare.',
    imageAlt: 'Aerial view of a wooded riparian buffer along a winding creek through farmland in Story County, Iowa',
  },
  'community-forestry': {
    problemTitle: 'Forests managed far from the people who live in them',
    fixTitle: 'Community forestry',
    problem:
      'When use rights sit only with a distant office, nearby households have little reason to guard a forest they cannot legally use. Illegal cutting and weak upkeep follow.',
    fix: 'Nepal’s community forestry gives Community Forest User Groups local management rights. FAO and the Federation of Community Forestry Users Nepal (FECOFUN) treat the model as a widely cited example of people-centered forest governance. It still needs accountable groups, markets that do not strip the stand, and space for women and Indigenous users. A user-group title is not automatic conservation.',
    imageAlt: 'Tall pines and broadleaf trees on a grassy slope in Badikhel community forest, Lalitpur, Nepal',
  },
  'mrf-optical-sorting': {
    problemTitle: 'Mixed recyclables that nobody can sell',
    fixTitle: 'MRF sorting with optics and AI',
    problem:
      'Household recycling arrives as a mixed stream. If paper, film, and food stay in the pile, bales are dirty and mills reject them. Manual picking cannot keep up with belt speed.',
    fix: 'Material recovery facilities use screens, magnets, eddy currents, and optical or near-infrared sorters — increasingly with camera and software aids — to separate containers and fiber. EPA’s recycling guidance is the public face of that system in the United States: collection is only as good as the sort. Optics do not make every plastic recyclable, and they do not fix a city that does not collect.',
    imageAlt: 'Piles of mixed plastic bottles on the apron of a material recovery facility',
  },
  'textile-to-textile-recycling': {
    problemTitle: 'Clothes that become rags or trash',
    fixTitle: 'Textile-to-textile recycling',
    problem:
      'Most discarded clothing is reused as second-hand stock, downcycled into rags and insulation, incinerated, or landfilled. New garments still start from virgin fiber.',
    fix: 'The EU Strategy for Sustainable and Circular Textiles aims at design, collection, and recycling so that more fiber can become new textiles rather than waste. The Commission notes that almost none of the material in clothing is recycled into new clothing today. Fibre-to-fibre plants exist as early industry, not as the default end of a wardrobe. Collection bins are not the same as a closed loop.',
    imageAlt: 'An orange street container labeled for textile recovery and recycling beside grey waste bins',
  },
  'construction-demolition-recycling': {
    problemTitle: 'Buildings demolished into mixed rubble',
    fixTitle: 'Construction and demolition recycling',
    problem:
      'Concrete, brick, wood, metal, and glass from sites are often the heaviest waste a country moves. Mixed with paint, insulation, or asbestos, the pile is hard to reuse.',
    fix: 'The European Commission treats construction and demolition waste as a priority stream and says it accounts for more than a third of EU waste. Crushing clean concrete and brick into aggregate, pulling metals, and sorting wood are ordinary where demolition is selective. Recovery rates vary widely between member states. Recycling rubble is not a license to demolish faster.',
    imageAlt: 'A conveyor feeding a pile of crushed concrete aggregate beside a loader',
  },
  'black-soldier-fly': {
    problemTitle: 'Market waste that rots in the open',
    fixTitle: 'Black soldier fly processing',
    problem:
      'City markets throw fruit and vegetable waste into heaps that smell, attract vermin, and go to dumps. Farms nearby still buy imported feed and fertilizer.',
    fix: 'Larvae of the black soldier fly (Hermetia illucens) eat wet organic waste; dried larvae can be used as animal or fish feed and the leftover frass as a soil amendment. FAO describes a project in Abidjan, Côte d’Ivoire, that breeds the flies and trains farmers to use the products. It is a working bioeconomy method, still local and labor-intensive. It does not replace collection, and it is not a use for plastic or metals.',
    imageAlt: 'Black soldier fly larvae in a white tray among coconut fibre and decaying leaves',
  },
  'waste-to-energy': {
    problemTitle: 'Residual waste that still has heat in it',
    fixTitle: 'Waste-to-energy',
    problem:
      'After recycling and organics are pulled out, cities still have a residual stream. Landfill takes the volume and keeps making methane. Open burning is worse.',
    fix: 'Municipal waste-to-energy plants burn residual waste and raise steam for electricity or heat. EPA’s basic note on energy recovery from waste describes mass-burn as the common U.S. design, with ash sent to landfill and air controls required under later rules. Plants need a steady residual stream and do not make recycling optional. Emissions and ash remain; this is not a clean substitute for not making the waste.',
    imageAlt: 'The Dublin Waste-to-Energy plant: a white hall and twin stacks with a hill behind',
  },
  'ocean-cleanup': {
    problemTitle: 'Legacy plastic already in the ocean',
    fixTitle: 'The Ocean Cleanup',
    problem:
      'Plastic that has already reached subtropical gyres is no longer a river problem. It fragments into smaller pieces that are harder to collect and easier for wildlife to ingest.',
    fix: 'The Ocean Cleanup, a Dutch non-profit, tows floating systems in the Great Pacific Garbage Patch and also runs river Interceptors. The organization publishes its own removal totals and a 2040 target; those figures are theirs, not an independent census. Cleanup at sea is slow, weather-limited, and debated for bycatch and scale. It does not replace cutting leakage on land.',
    imageAlt: 'Diagram of The Ocean Cleanup System 001 floating barrier, with labeled sensor and navigation pods',
  },
  interceptor: {
    problemTitle: 'River plastic on the way to the sea',
    fixTitle: 'Interceptor',
    problem:
      'Most ocean plastic that can still be caught as recognizable litter arrives through rivers after rain. Once it is offshore, collection is harder and more expensive.',
    fix: 'The Ocean Cleanup’s Interceptor is a family of river systems — Original, Barrier, Tender, Barricade, and Guard — that use booms and, in the Original, solar-powered extraction to lift debris before it reaches the sea. Deployments are site-specific; one design does not fit every river. An Interceptor is a catcher at the mouth, not a substitute for collection upstream or for making less plastic.',
    imageAlt: 'The Ocean Cleanup Interceptor Original in a channel, with a floating boom leading to the catamaran hull',
  },
};

const ru: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Нехватка пресной воды',
    fixTitle: 'Капельное орошение',
    problem: 'В засушливых регионах большая часть поливной воды уходит на испарение и сток.',
    fix: 'Капельное орошение подаёт воду к корню — меньше потерь, выше урожай.',
    imageAlt: 'Молодой кукурузный росток в сухой почве, который поливает чёрная капельная лента',
  },
  'constructed-wetlands': {
    problemTitle: 'Загрязнение рек и побережий',
    fixTitle: 'Искусственные водно-болотные угодья',
    problem: 'Питательные вещества и сточные воды в реках кормят цветение водорослей, из-за которого рыбе не хватает кислорода.',
    fix: 'Искусственные водно-болотные угодья чистят воду как живой фильтр — камыш, микробы и мелкий поток.',
    imageAlt: 'Искусственное болото с камышом, прозрачной мелкой водой и деревянным настилом',
  },
  'sustainable-forestry': {
    problemTitle: 'Вырубка лесов',
    fixTitle: 'Устойчивое лесное хозяйство',
    problem: 'Медленно растущая древесина подталкивает к рубке старых лесов.',
    fix: 'Быстрорастущие плантационные породы и устойчивое лесное хозяйство для стройматериалов — нагрузка с диких лесов снимается.',
    imageAlt: 'Туманная лесная дорога со штабелями брёвен и рядами плантационных деревьев',
  },
  'anaerobic-digesters': {
    problemTitle: 'Пищевые отходы и метан',
    fixTitle: 'Анаэробные дигестеры',
    problem: 'Пищевые отходы на свалках выделяют метан — сильный парниковый газ.',
    fix: 'Анаэробные дигестеры превращают отходы в биогаз и удобрение для почвы.',
    imageAlt: 'Вид сверху: три зелёных купола анаэробных реакторов среди полей',
  },
  'cool-roofs': {
    problemTitle: 'Городская жара',
    fixTitle: 'Холодные крыши',
    problem: 'Тёмные крыши и асфальт удерживают тепло и резко повышают расход энергии.',
    fix: 'Холодные крыши и светоотражающие покрытия снижают температуру и потребность в кондиционерах.',
    imageAlt: 'Городские крыши, покрытые белым светоотражающим материалом',
  },
  'lower-clinker-cement': {
    problemTitle: 'Выбросы цемента',
    fixTitle: 'Цементы с меньшим содержанием клинкера',
    problem: 'Обычный цемент — один из главных источников CO₂ в мире.',
    fix: 'Цементы с меньшим содержанием клинкера (например, смеси с прокалённой глиной и известняком) снижают выбросы в промышленных масштабах.',
    imageAlt: 'Цементный завод с кучами светлого порошка, щебня и песка',
  },
  'river-interceptors': {
    problemTitle: 'Утечка пластика',
    fixTitle: 'Речные барьеры-перехватчики',
    problem:
      'После дождя реки несут в море большую часть ещё узнаваемого пластика. Когда мусор уже в открытой воде, собирать его медленнее и дороже, чем остановить в русле.',
    fix: 'Плавающие боны и речные перехватчики держат мусор у барьера, чтобы его можно было поднять. Interceptor компании The Ocean Cleanup — одно именное, серийное семейство таких систем; многие города ставят и более простые боны. Барьер — это ловушка в узком месте, а не замена сбора выше по течению и не повод производить меньше пластика.',
    imageAlt: 'Плавающий речной бон с жёлтыми буями, удерживающий пластиковые бутылки и мусор',
  },
  'solar-microgrids': {
    problemTitle: 'Грязная и ненадёжная энергия',
    fixTitle: 'Солнечные микросети',
    problem: 'Ископаемые сети закрепляют выбросы и оставляют удалённые места без света.',
    fix: 'Солнечные микросети дают чистую местную энергию там, куда большие станции не достают.',
    imageAlt: 'Сельские ряды солнечных панелей и шкаф управления у деревенского поля',
  },
  'membrane-desalination': {
    problemTitle: 'Жажда на берегу солёной воды',
    fixTitle: 'Опреснение обратным осмосом',
    problem:
      'Город может стоять у моря и всё равно остаться без питьевой воды. Засуха, истощённые реки и рост спроса бьют по кранам первыми.',
    fix: 'Станции обратного осмоса продавливают морскую воду через мембраны и уже поят города в Израиле, Испании, Австралии, странах Залива и Калифорнии. Связка с ветром или солнцем снижает ископаемый счёт за электричество. Энергия всё равно нужна, рассол надо разбавлять, и опреснение — не разрешение тратить пресную воду в глубине суши.',
    imageAlt: 'Станция опреснения морской воды в Перте за оградой, под голубым небом',
  },
  'managed-aquifer-recharge': {
    problemTitle: 'Пустеющие подземные воды',
    fixTitle: 'Управляемое восполнение водоносных горизонтов',
    problem:
      'Скважины падают, когда города и поля забирают грунтовые воды быстрее, чем их возвращает дождь. Пустой горизонт — это сухие краны, просадка земли и нет запаса в засуху.',
    fix: 'Управляемое восполнение (MAR) подаёт очищенный ливень, речную или оборотную воду в бассейны и скважины, чтобы подземный склад снова наполнился. Система пополнения подземных вод округа Ориндж, оборотная схема Перта и поля инфильтрации в Аризоне уже работают в городском масштабе. Снимок — испытательный участок Bolivar в Южной Австралии: закачка оборотной воды в горизонт того же класса. Нужны чистый источник, подходящая геология и годы наблюдений — это не новая река.',
    imageAlt:
      'Насос, трубы и подписанный контейнер на опытном участке закачки оборотной воды в водоносный горизонт Bolivar, Южная Австралия',
  },
  'assisted-natural-regeneration': {
    problemTitle: 'Сведённые суходольные редколесья',
    fixTitle: 'Поддерживаемое естественное возобновление',
    problem:
      'После рубки и пашни сухие ландшафты часто остаются голыми: поросль съедают или выжигают, пока она не стала деревом. Привозные саженцы потом гибнут в том же зное.',
    fix: 'Поддерживаемое естественное возобновление бережёт живые пни и корни, чтобы деревья вернулись из того, что уже есть в почве. Фермерское возобновление в Сахеле — особенно парки Faidherbia в Нигере и соседних странах — вернуло полевые деревья на ландшафтном масштабе. Нужны местные права, контроль выпаса и время; это не питомник, сгружающий саженцы с грузовика.',
    imageAlt: 'Деревья Faidherbia albida с перистой зелёной кроной среди сухой золотистой травы',
  },
  'fire-smart-forestry': {
    problemTitle: 'Катастрофические верховые пожары',
    fixTitle: 'Плановые отжиги',
    problem:
      'Век тушения каждого огня оставил в многих лесах густое топливо. В экстремальную погоду эти древостои горят жарче и убивают деревья, которые раньше переживали лёгкий пал.',
    fix: 'Плановые палы и прореживание, которые возвращают частый низовой огонь, применяют лесные службы и коренные практики на западе США, в Австралии и части Европы. При верной погоде топливо уменьшается. Это не останавливает каждый мегапожар в волне жары, а плохо спланированный пал может уйти. Это уход за ландшафтом, а не климатический офсет.',
    imageAlt:
      'Пожарные в защитной форме следят за низким плановым отжигом в хвойном лесу',
  },
  'shade-agroforestry': {
    problemTitle: 'Лес под товарные плантации',
    fixTitle: 'Теневые кофе и какао',
    problem:
      'Плантации кофе и какао на полном солнце сменяют лесной полог, режут птичьи местообитания и часто требуют больше удобрений и полива. Спрос всё ещё двигает вырубку по кромке леса.',
    fix: 'Традиционные и сертифицированные теневые системы растят кофе или какао под пологом деревьев, который держит почву, птиц и часть лесной структуры. Это обычное хозяйство в частях Латинской Америки и Западной Африки. Тень сама по себе не останавливает обезлесение, если цена толкает фронтир, а сертификация честна лишь настолько, насколько честен аудит.',
    imageAlt: 'Кофейные кусты под высоким теневым пологом на традиционной плантации',
  },
  'pet-bottle-recycling': {
    problemTitle: 'Одноразовые бутылки из ПЭТ',
    fixTitle: 'Переработка ПЭТ «бутылка в бутылку»',
    problem:
      'Прозрачные ПЭТ-бутылки задуманы на короткую жизнь. Большинство всё ещё уходит на свалку, в печь или в низкосортное волокно после одного использования.',
    fix: 'Механическая переработка с залоговой тарой и «суперчистой» мойкой уже делает из бутылок снова пищевые бутылки в ЕС и других системах залога. Сбор и сортировка решают больше, чем экструдер. Цветной и смешанный пластик всё равно выпадает; переработка — не повод заливать магазины бутылками.',
    imageAlt: 'Штабеля спрессованных кип ПЭТ-бутылок во дворе завода переработки',
  },
  'municipal-composting': {
    problemTitle: 'Пищевые и садовые отходы на свалках',
    fixTitle: 'Городское компостирование органики',
    problem:
      'Когда город закапывает очистки и скошенную траву, он выбрасывает углерод почвы и делает свалочный метан. Органика часто самая тяжёлая часть бытового бака.',
    fix: 'Раздельный сбор плюс компостирование в валках или закрытых камерах — обычная практика в Сан-Франциско, Милане, большей части Южной Кореи и ЕС. Компост идёт на поля и в парки. Загрязнение — пластик, стекло — всё ещё портит кучи; компост не заменяет меньшее количество пищевых отходов.',
    imageAlt: 'Большая куча готового тёмного компоста на городском предприятии, техника на заднем плане',
  },
  'landfill-gas-capture': {
    problemTitle: 'Свалочный метан',
    fixTitle: 'Свалочный газ в энергию',
    problem:
      'Старые свалки десятилетиями после закрытия делают метан. Газ — сильный парниковый загрязнитель и местная взрыво- и запаховая опасность.',
    fix: 'Скважины и трубы тянут свалочный газ к факелу или двигателю. Площадки списка EPA LMOP в США, объекты в Великобритании и другие уже вырабатывают так электричество. Улов частичный, утечки остаются, и метод не останавливает прибытие отходов. Это зачистка свалок, которые уже есть — не то же самое, что фермеры или пищевые дигестеры.',
    imageAlt: 'Трубы сбора газа, торчащие сквозь серую геомембрану на карте свалки',
  },
  'permeable-pavement': {
    problemTitle: 'Городской сток и паводки',
    fixTitle: 'Проницаемое покрытие',
    problem:
      'Города запечатывают почву асфальтом. Дождь становится грязным паводком, который перегружает коллекторы и реки вместо того, чтобы впитаться.',
    fix: 'Пористый асфальт, проницаемый бетон и штучная брусчатка пускают воду в щебёночный резервуар под улицей. Это стандартный набор ливневой «зелёной» инфраструктуры в муниципальных программах США, немецких городах и китайских «губчатых городах». Без подметания они забиваются, и это не дамба: они срезают сток на тех участках, где уложены.',
    imageAlt: 'Проницаемая брусчатка рядом с заглублённым дождевым садом в общественном парке',
  },
  'urban-tree-canopy': {
    problemTitle: 'Горячие голые улицы',
    fixTitle: 'Городской древесный полог',
    problem:
      'Твёрдые поверхности и отсутствие тени делают кварталы жарче окрестной сельской местности — особенно там, где планировка оставила мало деревьев.',
    fix: 'Уличные и парковые деревья, которые сажают и считают как долю полога, охлаждают воздух и мостовую на тех кварталах, где они есть. Нью-Йорк и Мельбурн ведут именные программы полога и следят за покрытием. Деревьям нужны вода, место и годы. Слоган «миллион деревьев» без учёта приживаемости — озеленение, а не климатическая инфраструктура.',
    imageAlt: 'Жилая улица, полностью закрытая сомкнутым пологом зрелых деревьев',
  },
  'district-heating': {
    problemTitle: 'Дома, которые греют по одному котлу',
    fixTitle: 'Теплосети на бросовом тепле',
    problem:
      'Отдельные газовые котлы тратят тепло, которое электростанции, мусоросжигатели и промышленность уже выбрасывают. Города всё ещё жгут топливо в каждом подвале.',
    fix: 'Изолированные трубы несут горячую воду от ТЭЦ, мусоросжигателей, дата-центров и заводов в здания. Копенгаген (в том числе тепло с Amager Bakke), Стокгольм, Париж и крупные китайские системы уже так работают. Копать сеть дорого, а климатический выигрыш зависит от источника: бросовое тепло и чистая энергия помогают; угольная ТЭЦ — всё ещё уголь.',
    imageAlt: 'Мусоросжигательный завод Amager Bakke в Копенгагене за водой, пар из трубы',
  },
  'mass-timber': {
    problemTitle: 'Средняя этажность из стали и бетона',
    fixTitle: 'Массивная древесина и CLT',
    problem:
      'Средняя этажность обычно означает сталь и бетон — оба углеродоёмки в производстве. Дерево долго держали в малых домах противопожарные нормы.',
    fix: 'Клееные панели CLT и родственная массивная древесина уже стоят в среднеэтажных зданиях Европы, Канады и растущего рынка США — в том числе Brock Commons в Ванкувере и северные офисы. Углерод остаётся в здании, только если лес не сведён и дом служит долго. Огонь, влага и честный источник леса — настоящие ограничения, а не мультфильм о деревянных небоскрёбах вместо всего бетона.',
    imageAlt: 'Колонны и балки из массивной древесины среднеэтажного здания на стройке в Хельсинки',
  },
  'green-steel': {
    problemTitle: 'Сталь доменной печи',
    fixTitle: 'Лом в дуге и водородное железо',
    problem:
      'Выплавка железа в угольной доменной печи — один из крупнейших промышленных источников CO₂. Миру по-прежнему нужна сталь для рельсов, машин и каркасов.',
    fix: 'Плавка лома в электродуговой печи — проверенный менее углеродный путь там, где есть лом и чистая энергия. Прямое восстановление железа водородом — промышленный опыт HYBRIT компании SSAB в Швеции — только начинается, это не мировая замена. Лома мало, водорода мало, и большинство тонн всё ещё из угля.',
    imageAlt: 'Цех электродуговой печи: круглая крышка печи, трубы и площадки',
  },
  'mangrove-restoration': {
    problemTitle: 'Сведённые берега, слабые кромки',
    fixTitle: 'Восстановление мангров',
    problem:
      'Креветочные пруды, порты и заготовка угля сняли мангровые пояса, которые держали ил, питомники рыбы и живой волнолом.',
    fix: 'Восстановление гидрологии и посадка нужных видов вернули мангры в частях Меконга, Индонезии, Сенегала и Флориды там, где прилив ещё подходит. Провальные проекты сыплют саженцы на неверную отмель. Это местная береговая работа; она не компенсирует угольную станцию.',
    imageAlt: 'Люди сажают молодые мангры в прибрежной грязи рядом со взрослыми деревьями на ходульных корнях',
  },
  'bycatch-reduction': {
    problemTitle: 'Животные в прилове',
    fixTitle: 'Селективные орудия лова',
    problem:
      'Тралы, яруса и жаберные сети ловят черепах, дельфинов, морских птиц и молодь, которых никто не собирался выгружать. Прилов может опустошить вид, пока целевой запас ещё выглядит нормально.',
    fix: 'Черепашьи исключающие устройства в креветочных тралах, круговые крючки, отпугивающие птиц стропы и акустические пингеры обязательны или обычны в ряде промыслов и сокращают конкретный прилов там, где есть контроль. Снасть — не морской заповедник. Она не работает при слабых правилах или неверном месте лова.',
    imageAlt: 'Логгерхед уплывает от креветочного трала, пройдя устройство исключения черепах',
  },
  'oyster-reefs': {
    problemTitle: 'Голые, размываемые эстуарии',
    fixTitle: 'Устричные рифы и живые берега',
    problem:
      'Вычерпанные устричные банки и вертикальные набережные оставляют ил и волну без преграды. Вода мутнеет; кромка съедает сама себя.',
    fix: 'Восстановление устричных рифов и посадка живых берегов — марш, ракушка, рифовые блоки — идёт в Чесапикском заливе, части Мексиканского залива США и гавани Нью-Йорка. Устрицы фильтруют локально, структура может замедлить размыв. Это проекты эстуариев, ещё восстанавливающиеся после исторического обвала — не мировое чудо морепродуктов.',
    imageAlt: 'Литоральный устричный риф из сросшихся раковин у поверхности рядом с маршевой травой',
  },
  'onshore-wind': {
    problemTitle: 'Ископаемое электричество',
    fixTitle: 'Наземный ветер в сети',
    problem:
      'Уголь и газ всё ещё задают ритм многим энергосистемам. Электричество — главный рычаг национальных выбросов там, где сеть грязная.',
    fix: 'Наземный ветер — обычная инфраструктура: Китай, Европа, США, Индия и Бразилия уже держат крупные парки. Нужны линии, резерв или накопители и честный выбор площадки для живой природы и соседей. Это не круглосуточная мощность само по себе и не чистит сеть, которая продолжает строить уголь без улавливания.',
    imageAlt: 'Ряды белых наземных ветряков по пустынной равнине к дальним горам',
  },
  'heat-pumps': {
    problemTitle: 'Ископаемое тепло в зданиях',
    fixTitle: 'Тепловые насосы для зданий',
    problem:
      'Отопление и горячая вода всё ещё жгут газ или мазут в большей части Европы, Северной Америки и умеренной Азии. Здания всю зиму выпускают это тепло.',
    fix: 'Воздушные и грунтовые тепловые насосы — обычный комплект отопления в Норвегии, Швеции и Финляндии и распространяются по ЕС. Холодоустойчивые модели работают ниже нуля. Нужны приличная оболочка здания, сеть, которая выдержит зимнюю нагрузку, и хладагенты как химикаты, а не лозунги.',
    imageAlt: 'Наружный блок воздушного теплового насоса у кирпичной стены в падающем снегу',
  },
  'rainwater-harvesting': {
    problemTitle: 'Сухие краны у мокрой крыши',
    fixTitle: 'Сбор дождевой воды',
    problem:
      'Дома и общественные здания сбрасывают дождь в желоба, пока скважины и цистерны не справляются. Во многих городах крыша — ближайший водосбор, но открытые бочки плодят комаров, а первая грязная струя попадает в запас.',
    fix: 'Санитарные рекомендации ВОЗ рассматривают сбор с крыши и закрытое хранение как бытовой источник, которому всё равно нужны отвод первой струи, закрытый бак и регулярная чистка. Метод обычен в сухих и муссонных климатах. Это не новая река: выход следует за крышей и дождём, а плохо содержимое хранилище может сделать людей больными.',
    imageAlt: 'Закрытая каменная цистерна для дождевой воды на сухой земле в Индии'
  },
  'newater-reclaimed-wastewater': {
    problemTitle: 'Города, которым не хватает водосбора',
    fixTitle: 'Оборотные сточные воды / NEWater',
    problem:
      'Плотный город может тратить больше пресной воды, чем надёжно дают водохранилища и импорт. Очищенные стоки тогда сбрасывают в море, а краны в засуху остаются под угрозой.',
    fix: 'Сингапурское PUB пропускает очищенные стоки через микро- или ультрафильтрацию (или мембранный биореактор), обратный осмос и ультрафиолетовое обеззараживание — это NEWater. PUB сообщает о четырёх работающих заводах. Большая часть воды идёт промышленности и охлаждению; в сухие периоды часть смешивают с сырой водой водохранилищ и снова очищают до водопроводной. Нужны жёсткая очистка и доверие людей. Оборот не делает город независимым от дождя и экономии.',
    imageAlt: 'Синие сосуды микрофильтрации и трубы с табличкой Microfiltration System на заводе NEWater в Бедоке'
  },
  'fog-harvesting': {
    problemTitle: 'Облако на хребте, колодца в деревне нет',
    fixTitle: 'Сбор воды из тумана',
    problem:
      'Высокие сухие берега и хребты могут стоять в частом тумане, пока грунтовые и сетевые воды недоступны. Влага в воздухе, а не в реке.',
    fix: 'Большие сетчатые коллекторы перехватывают капли тумана. Благотворительная FogQuest, основанная в 2000 году, помогала ставить коллекторы в Тойкиа в Гватемале, на участках Атакамы в Чили и в Фальда-Верде; теперь она в основном наставляет новые проекты и сама пишет, что страницы проектов больше не обновляются. Выход зависит от ветра, сетки и туманных дней. Коллекторам нужен местный уход. Это техника хребта, а не городское снабжение.',
    imageAlt: 'Прямоугольный сетчатый туманоуловитель на сухом хребте Альто-Патаче в Чили, люди стоят рядом над облаками'
  },
  'constructed-floating-wetlands': {
    problemTitle: 'Питательные вещества в прудах, которые нельзя превратить в болото',
    fixTitle: 'Искусственные плавучие водно-болотные угодья',
    problem:
      'Ливневые бассейны и лагуны сточных вод копят питательные вещества и водоросли. Наземному болоту нужны площадь и изменение паводкового объёма. У многих существующих прудов нет ни того ни другого.',
    fix: 'Искусственные плавучие угодья — понтонные модули, корни растений которых висят в воде и держат биоплёнки, забирающие питательные вещества и частицы. CSIRO описывает их как недавнюю дооснастку для ливня и стоков и испытывает системы на лагуне в Коус на острове Филлип и на городском канале в Солсбери, Южная Австралия. Это пилоты, а не замена очистным, и растения надо снимать, иначе накопленное вернётся в воду.',
    imageAlt: 'Плавучее болото Сенканг в Сингапуре: засаженная полоса посреди водоёма, мост и высотки дальше'
  },
  'solar-still': {
    problemTitle: 'Солёная вода и солнце без сети',
    fixTitle: 'Солнечный дистиллятор / пассивное опреснение',
    problem:
      'Прибрежные и островные хозяйства могут иметь морскую воду и солнце, но не электричество для станции обратного осмоса. Возить или кипятить воду — ежедневный запасной путь.',
    fix: 'Солнечный дистиллятор испаряет солёную воду под прозрачной крышкой и конденсирует пар в пресную — старый маломасштабный метод. В 2020 году MIT и Шанхайский университет транспорта показали многоступенчатый пассивный дистиллятор на крыше MIT, который повторно использует тепло конденсации между слоями. Это исследовательский прототип, а не городской завод. Выход следует за солнцем и площадью; он не заменяет мембранное опреснение для города.',
    imageAlt: 'Солнечный дистиллятор на крыше в Каире с изолированным воздуховодом вокруг тёмного испарителя'
  },
  agroforestry: {
    problemTitle: 'Поля без деревьев',
    fixTitle: 'Агролесоводство',
    problem:
      'Сведение деревьев с пашни и пастбища оставляет почву, тень и корм тоньше. Хозяйства тогда сильнее зависят от удобрений, полива и привозного корма.',
    fix: 'Агролесоводство возвращает деревья к культурам и скоту — аллейные посадки, сильвопастбища, приусадебные сады и родственные системы. ФАО считает это распространённой давней практикой и приводит примеры вроде амазонской чакры в Эквадоре. Теневые кофе и какао — одно семейство той же идеи. Деревьям нужны права, время и проект; ряд саженцев — не лесной офсет.',
    imageAlt: 'Вид сверху: аллейные посадки и ряды молодых деревьев на ферме Savanna Institute у реки Висконсин'
  },
  windbreaks: {
    problemTitle: 'Ветер, который сушит почву и изнуряет скот',
    fixTitle: 'Ветрозащитные полосы / лесополосы',
    problem:
      'Открытые поля и дворы принимают весь ветер. Почва улетает, снег метёт на дороги, животные в холод тратят больше корма.',
    fix: 'Национальный центр агролесоводства USDA описывает ветрозащитные полосы — их же называют shelterbelts — как линейные посадки деревьев и кустарников под задачу: защита поля, укрытие скота, живые снегозадержатели или экран усадьбы. Высота, плотность, разрывы и ориентация решают, что полоса делает. Это фермерская инфраструктура, а не углеродная плантация, и без ухода она не работает.',
    imageAlt: 'Два молодых ряда деревьев на кольях — ветрозащитная полоса на зелёном поле в Иллинойсе'
  },
  'reduced-impact-logging': {
    problemTitle: 'Рубка, которая ломает оставшийся древостой',
    fixTitle: 'Рубка с пониженным воздействием',
    problem:
      'Обычная тропическая заготовка часто значит плохо спланированные трелёвочные волоки, деревья, зависшие в лианах, и порчу оставленных стволов. Следующий урожай и почва платят первыми.',
    fix: 'Рубка с пониженным воздействием (RIL) — это плановая заготовка: картирование до рубки, направленная валка и контролируемые волоки. Обзоры ФАО ведут ранние системы к Сараваку и более поздние опыты — к Суринаму, Гайане, Камеруну и другим местам. Исследования находили меньший ущерб и иногда меньшую стоимость, но многие фирмы практику не меняют. RIL — не запрет рубки и не то же самое, что оставить старый лес нетронутым.',
    imageAlt: 'Жёлтый погрузчик несёт бревно в лесозаготовительном лагере округа Тавау, Сабах, лес позади'
  },
  'riparian-forest-restoration': {
    problemTitle: 'Голые берега, более тёплые ручьи',
    fixTitle: 'Восстановление прирусловых лесов',
    problem:
      'Когда прирусловые деревья сводят под поля или участки, берега размываются, питательные вещества смываются, летняя вода греется. Рыба и русло теряют тень и корни, которые держали кромку.',
    fix: 'Климатические хабы USDA описывают сохранение или восстановление леса и другой растительности в прирусловых зонах: смешанные посадки, буферы без рубки или с ограниченной рубкой, укрепление берега. Цель — тень, древесный валеж и почва на корнях. Это местная работа у ручья. Посаженная полоса не восстанавливает весь водосбор, если верховья остаются голыми.',
    imageAlt: 'Вид сверху: древесный прирусловый буфер вдоль извилистого ручья среди полей в округе Стори, Айова'
  },
  'community-forestry': {
    problemTitle: 'Леса, которыми управляют далеко от живущих в них людей',
    fixTitle: 'Общинное лесное хозяйство',
    problem:
      'Когда права пользования сидят только в далёкой канцелярии, соседние хозяйства мало берегут лес, которым нельзя законно пользоваться. Дальше — нелегальная рубка и слабый уход.',
    fix: 'Общинное лесное хозяйство Непала передаёт местные права группам пользователей общинных лесов. ФАО и Федерация пользователей общинных лесов Непала (FECOFUN) считают модель широко цитируемым примером лесного управления «от людей». Нужны подотчётные группы, рынки, которые не оголяют древостой, и место для женщин и коренных пользователей. Титул группы сам по себе не есть охрана.',
    imageAlt: 'Высокие сосны и лиственные деревья на травянистом склоне общинного леса Бадикхел, Лалитпур, Непал'
  },
  'mrf-optical-sorting': {
    problemTitle: 'Смешанные вторсырьё, которое некому купить',
    fixTitle: 'Сортировка на МПЗ оптикой и ИИ',
    problem:
      'Бытовая переработка приходит смешанным потоком. Если бумага, плёнка и еда остаются в куче, кипы грязные и заводы их отвергают. Ручной отбор не успевает за лентой.',
    fix: 'Мусороперерабатывающие заводы используют грохоты, магниты, вихревые токи и оптические или ближние инфракрасные сортировщики — всё чаще с камерами и программами — чтобы отделить тару и макулатуру. Руководство EPA по переработке — публичное лицо этой системы в США: сбор лишь настолько хорош, насколько хороша сортировка. Оптика не делает каждый пластик оборотным и не чинит город, который не собирает.',
    imageAlt: 'Кучи смешанных пластиковых бутылок на площадке мусоросортировочного завода'
  },
  'textile-to-textile-recycling': {
    problemTitle: 'Одежда, которая становится ветошью или мусором',
    fixTitle: 'Переработка текстиля в текстиль',
    problem:
      'Большая часть списанной одежды идёт секонд-хендом, в ветошь и утеплитель, в печь или на свалку. Новые вещи по-прежнему начинают с первичного волокна.',
    fix: 'Стратегия ЕС по устойчивому и циркулярному текстилю нацелена на дизайн, сбор и переработку, чтобы больше волокна снова становилось текстилем, а не отходом. Комиссия отмечает, что почти ничего из материала одежды сегодня не перерабатывается в новую одежду. Заводы «волокно в волокно» — ранняя промышленность, а не обычный конец гардероба. Контейнер для одежды — не замкнутый цикл.',
    imageAlt: 'Оранжевый уличный контейнер для сбора и переработки текстиля рядом с серыми баками'
  },
  'construction-demolition-recycling': {
    problemTitle: 'Здания, снесённые в смешанный щебень',
    fixTitle: 'Переработка строительных и сносных отходов',
    problem:
      'Бетон, кирпич, дерево, металл и стекло со строек часто самый тяжёлый поток отходов страны. Смешанные с краской, утеплителем или асбестом, они плохо идут во вторичное использование.',
    fix: 'Европейская комиссия считает строительные и сносные отходы приоритетным потоком и пишет, что на них приходится больше трети отходов ЕС. Дробление чистого бетона и кирпича в заполнитель, отбор металла и сортировка дерева обычны там, где снос селективный. Доля восстановления сильно разнится между странами. Переработка щебня — не разрешение сносить быстрее.',
    imageAlt: 'Конвейер сыплет дроблёный бетонный заполнитель рядом с погрузчиком'
  },
  'black-soldier-fly': {
    problemTitle: 'Рыночные отходы, которые гниют под открытым небом',
    fixTitle: 'Переработка органики чёрной львинкой',
    problem:
      'Городские рынки сваливают фруктовые и овощные очистки в кучи, которые пахнут, зовут вредителей и едут на свалку. Соседние хозяйства всё ещё покупают импортный корм и удобрения.',
    fix: 'Личинки чёрной львинки (Hermetia illucens) едят влажную органику; сушёных личинок можно давать скоту или рыбе, а оставшийся фрасс — в почву. ФАО описывает проект в Абиджане, Кот-д’Ивуар, где мух разводят и учат фермеров пользоваться продуктами. Это работающий метод биоэкономики, всё ещё местный и трудоёмкий. Он не заменяет сбор и не годится для пластика или металла.',
    imageAlt: 'Личинки чёрной львинки в белом лотке среди кокосового волокна и прелых листьев'
  },
  'waste-to-energy': {
    problemTitle: 'Остаточные отходы, в которых ещё есть тепло',
    fixTitle: 'Энергия из отходов',
    problem:
      'После отбора вторсырья и органики у города остаётся хвост. Свалка забирает объём и продолжает делать метан. Открытое сжигание хуже.',
    fix: 'Муниципальные заводы «отходы в энергию» сжигают остаток и поднимают пар для электричества или тепла. Базовая справка EPA об извлечении энергии из отходов описывает mass-burn как обычную схему США: зола на полигон, газоочистка по поздним нормам. Заводу нужен устойчивый поток хвоста, и он не делает переработку необязательной. Выбросы и зола остаются; это не чистое замещение тому, чтобы отходов было меньше.',
    imageAlt: 'Завод Dublin Waste-to-Energy: белый корпус и две трубы, холм на заднем плане'
  },
  'ocean-cleanup': {
    problemTitle: 'Старый пластик, уже оказавшийся в океане',
    fixTitle: 'The Ocean Cleanup',
    problem:
      'Пластик, который уже дошёл до субтропических круговоротов, больше не речная задача. Он дробится на более мелкие куски, которые труднее собрать и легче проглотить живым существам.',
    fix: 'The Ocean Cleanup, нидерландская некоммерческая организация, буксирует плавучие системы в Большом тихоокеанском мусорном пятне и ставит речные Interceptor. Организация публикует собственные итоги изъятия и цель к 2040 году; эти цифры её, а не независимая перепись. Очистка в море медленная, зависит от погоды и спорна из-за прилова и масштаба. Она не заменяет сокращение утечки на суше.',
    imageAlt: 'Схема плавучего барьера The Ocean Cleanup System 001 с подписанными датчиками и навигационными модулями'
  },
  interceptor: {
    problemTitle: 'Речной пластик по пути в море',
    fixTitle: 'Interceptor',
    problem:
      'Большая часть океанского пластика, который ещё можно поймать как узнаваемый мусор, приходит реками после дождя. Когда он уже в море, сбор труднее и дороже.',
    fix: 'Interceptor компании The Ocean Cleanup — семейство речных систем (Original, Barrier, Tender, Barricade и Guard), которые бонами и, в Original, солнечной выгрузкой поднимают мусор до моря. Постановки привязаны к месту; одна конструкция не подходит каждой реке. Interceptor — ловушка у устья, а не замена сбору выше по течению и не повод делать меньше пластика.',
    imageAlt: 'Interceptor Original компании The Ocean Cleanup в канале, плавучий бон ведёт к корпусу катамарана'
  },
};

const pl: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Niedobór słodkiej wody',
    fixTitle: 'Nawadnianie kropelkowe',
    problem: 'W suchych regionach większość wody irygacyjnej ucieka przez parowanie i spływ.',
    fix: 'Nawadnianie kropelkowe dostarcza wodę do korzenia — mniej strat, wyższy plon.',
    imageAlt: 'Młoda kukurydza w suchej glebie podlewana czarną linią kroplującą',
  },
  'constructed-wetlands': {
    problemTitle: 'Zanieczyszczenie rzek i wybrzeży',
    fixTitle: 'Sztuczne mokradła',
    problem: 'Składniki odżywcze i ścieki karmią toksyczne glony i zabijają ryby.',
    fix: 'Sztuczne mokradła filtrują wodę jak żywe systemy oczyszczania.',
    imageAlt: 'Sztuczne mokradło z trzciną, płytką czystą wodą i drewnianą kładką',
  },
  'sustainable-forestry': {
    problemTitle: 'Wylesianie',
    fixTitle: 'Zrównoważona gospodarka leśna',
    problem: 'Wolno rosnące drewno pcha do wycinki starych lasów.',
    fix: 'Szybko rosnące gatunki plantacyjne i zrównoważona gospodarka leśna na drewno budowlane — mniej presji na lasy naturalne.',
    imageAlt: 'Zamglona leśna droga ze stosami kłód i rzędami drzew plantacyjnych',
  },
  'anaerobic-digesters': {
    problemTitle: 'Odpady spożywcze i metan',
    fixTitle: 'Fermentatory beztlenowe',
    problem: 'Żywność na wysypiskach uwalnia metan, silny gaz cieplarniany.',
    fix: 'Fermentatory beztlenowe zamieniają odpady w biogaz i nawóz do gleby.',
    imageAlt: 'Widok z lotu ptaka: trzy zielone kopuły fermentatorów beztlenowych wśród pól',
  },
  'cool-roofs': {
    problemTitle: 'Miejski upał',
    fixTitle: 'Chłodne dachy',
    problem: 'Ciemne dachy i asfalt zatrzymują ciepło i windują zużycie energii.',
    fix: 'Chłodne dachy i powłoki odbijające obniżają temperaturę i ograniczają klimatyzację.',
    imageAlt: 'Miejskie dachy pokryte białą, odbijającą powłoką',
  },
  'lower-clinker-cement': {
    problemTitle: 'Emisje cementu',
    fixTitle: 'Cementy o niższym udziale klinkieru',
    problem: 'Zwykły cement to jedno z głównych źródeł globalnego CO₂.',
    fix: 'Cementy o niższym udziale klinkieru (np. mieszanki z kalcynowaną gliną i wapieniem) tną emisje na skalę przemysłową.',
    imageAlt: 'Cementownia z hałdami jasnego proszku, tłucznia i piasku',
  },
  'river-interceptors': {
    problemTitle: 'Wyciek plastiku',
    fixTitle: 'Rzeczne bariery przechwytujące',
    problem:
      'Po deszczu rzeki niosą do morza większość jeszcze rozpoznawalnego plastiku. Gdy śmieci są już na otwartej wodzie, zbiórka jest wolniejsza i droższa niż zatrzymanie ich w korycie.',
    fix: 'Pływające zapory i rzeczne interceptory trzymają śmieci przy barierze, żeby można je było wyciągnąć. Interceptor The Ocean Cleanup to jedna nazwana, produkowana rodzina takich systemów; wiele miast stawia też prostsze zapory. Bariera to łapka w przewężeniu — nie zastępuje zbiórki w górze rzeki ani mniejszej ilości plastiku.',
    imageAlt: 'Pływająca zapora rzeczna z żółtymi bojami, zatrzymująca butelki i śmieci',
  },
  'solar-microgrids': {
    problemTitle: 'Brudna i zawodna energia',
    fixTitle: 'Mikrosieci słoneczne',
    problem: 'Sieci oparte na paliwach kopalnych utrwalają emisje i zostawiają odległe miejsca w ciemności.',
    fix: 'Mikrosieci słoneczne dają czystą, lokalną energię tam, gdzie wielkie elektrownie nie sięgają.',
    imageAlt: 'Wiejskie rzędy paneli słonecznych i szafka sterownicza przy polu',
  },
  'membrane-desalination': {
    problemTitle: 'Pragnienie nad słoną wodą',
    fixTitle: 'Odsalanie odwróconą osmozą',
    problem:
      'Miasto może stać nad morzem i nadal zostać bez wody pitnej. Susza, wyczerpane rzeki i rosnący popyt uderzają najpierw w krany.',
    fix: 'Zakłady odwróconej osmozy przepychają wodę morską przez membrany i już zaopatrują miasta w Izraelu, Hiszpanii, Australii, Zatoce Perskiej i Kalifornii. Para z wiatrem lub słońcem obcina kopalny rachunek za prąd. Energia i tak jest potrzebna, solankę trzeba rozcieńczać, a odsalanie nie jest pozwoleniem na marnotrawstwo słodkiej wody w głębi lądu.',
    imageAlt: 'Zakład odsalania wody morskiej w Perth za ogrodzeniem, pod błękitnym niebem',
  },
  'managed-aquifer-recharge': {
    problemTitle: 'Pustoszejące wody podziemne',
    fixTitle: 'Sterowane zasilanie warstw wodonośnych',
    problem:
      'Studnie opadają, gdy miasta i pola biorą wodę gruntową szybciej, niż deszcz ją zwraca. Pusta warstwa to suche krany, osiadanie gruntu i brak zapasu w suszy.',
    fix: 'Sterowane zasilanie (MAR) podaje oczyszczoną wodę deszczową, rzeczną lub odzyskaną do basenów i studni, żeby podziemny magazyn się napełnił. System uzupełniania wód gruntowych w Orange County, schemat recyklingu w Perth i pola infiltracji w Arizonie już działają w skali miasta. Na zdjęciu — próbny teren Bolivar w Australii Południowej: zatłaczanie wody odzyskanej do warstwy tego samego typu. Potrzeba czystego źródła, właściwej geologii i lat monitoringu — to nie nowa rzeka.',
    imageAlt:
      'Pompa, rury i opisany kontener na terenie próby zatłaczania wody odzyskanej do warstwy wodonośnej Bolivar, Australia Południowa',
  },
  'assisted-natural-regeneration': {
    problemTitle: 'Wycięte suche zadrzewienia',
    fixTitle: 'Wspomagana regeneracja naturalna',
    problem:
      'Po wycince i uprawie suche krajobrazy często zostają gołe: odrosty zgryzają lub palą, zanim staną się drzewami. Przywożone sadzonki giną potem w tym samym upale.',
    fix: 'Wspomagana regeneracja naturalna chroni żywe pniaki i korzenie, żeby drzewa wróciły z tego, co już jest w glebie. Regeneracja prowadzona przez rolników w Sahelu — zwłaszcza parki Faidherbia w Nigrze i krajach sąsiednich — przywróciła drzewa polne w skali krajobrazu. Nadal potrzeba lokalnych praw, kontroli wypasu i czasu; to nie szkółka zrzucająca sadzonki z ciężarówki.',
    imageAlt: 'Drzewa Faidherbia albida z pierzastą zieloną koroną wśród suchej złotej trawy',
  },
  'fire-smart-forestry': {
    problemTitle: 'Pożary o wysokiej intensywności',
    fixTitle: 'Wypalanie kontrolowane',
    problem:
      'Wiek gaszenia każdego ognia zostawił w wielu lasach gęste paliwo. Przy ekstremalnej pogodzie te drzewostany palą się goręcej i zabijają drzewa, które wcześniej przeżywały łagodniejszy ogień.',
    fix: 'Kontrolowane wypalanie i trzebież, które przywracają częsty, niski ogień, stosują służby leśne i praktyki rdzenne na zachodzie USA, w Australii i części Europy. Przy właściwej pogodzie paliwo maleje. Nie zatrzymują każdego megapożaru w fali upałów, a źle zaplanowany wypał może uciec. To utrzymanie krajobrazu, nie offset klimatyczny.',
    imageAlt:
      'Strażacy leśni w odzieży ochronnej obserwują niski kontrolowany wypał w drzewostanie iglastym',
  },
  'shade-agroforestry': {
    problemTitle: 'Las pod uprawy towarowe',
    fixTitle: 'Cień w kawie i kakao',
    problem:
      'Plantacje kawy i kakao w pełnym słońcu zastępują koronę lasu, tną siedliska ptaków i często potrzebują więcej nawozu i nawadniania. Popyt wciąż pcha nową wycinkę na krawędzi lasu.',
    fix: 'Tradycyjne i certyfikowane systemy cienia uprawiają kawę lub kakao pod koroną drzew, która trzyma glebę, ptaki i część struktury lasu. To zwykłe rolnictwo w częściach Ameryki Łacińskiej i Afryki Zachodniej. Cień sam z siebie nie zatrzymuje wylesiania, jeśli cena pcha frontier, a certyfikat jest tak uczciwy, jak audyt.',
    imageAlt: 'Krzewy kawowca pod wysoką koroną drzew cieniujących na tradycyjnej plantacji',
  },
  'pet-bottle-recycling': {
    problemTitle: 'Jednorazowe butelki PET',
    fixTitle: 'Recykling PET butelka w butelkę',
    problem:
      'Przezroczyste butelki PET są zaprojektowane na krótkie życie. Większość i tak trafia na składowisko, do spalarni albo w włókno gorszej jakości po jednym użyciu.',
    fix: 'Recykling mechaniczny z kaucją i „super-czystym” myciem już zamienia butelki z powrotem w butelki spożywcze w UE i innych systemach kaucyjnych. Zbiórka i sortowanie decydują bardziej niż wytłaczarka. Kolorowy i mieszany plastik i tak odpada; recykling nie jest powodem, by zalewać sklepy butelkami.',
    imageAlt: 'Stosy sprasowanych bel butelek PET na placu zakładu recyklingu',
  },
  'municipal-composting': {
    problemTitle: 'Odpady kuchenne i ogrodowe na składowiskach',
    fixTitle: 'Kompostowanie organiki komunalnej',
    problem:
      'Gdy miasto zakopuje resztki jedzenia i skoszoną trawę, wyrzuca węgiel gleby i robi metan składowiskowy. Organika bywa najcięższą częścią pojemnika.',
    fix: 'Selektywna zbiórka plus kompostowanie w pryzmach lub komorach to codzienność w San Francisco, Mediolanie, dużej części Korei Południowej i UE. Kompost idzie na pola i do parków. Zanieczyszczenie — plastik, szkło — wciąż psuje pryzmy; kompost nie zastępuje mniejszej ilości marnowanej żywności.',
    imageAlt: 'Wielka pryzma gotowego ciemnego kompostu w zakładzie komunalnym, maszyny w tle',
  },
  'landfill-gas-capture': {
    problemTitle: 'Metan ze składowisk',
    fixTitle: 'Gaz składowiskowy na energię',
    problem:
      'Stare wysypiska produkują metan przez dekady po zamknięciu. Gaz jest silnym zanieczyszczeniem cieplarnianym i lokalnym zagrożeniem wybuchu i odorów.',
    fix: 'Studnie i rury ciągną gaz składowiskowy do pochodni albo silnika. Obiekty z listy EPA LMOP w USA, w Wielkiej Brytanii i gdzie indziej już tak wytwarzają prąd. Ujęcie jest częściowe, nieszczelności zostają, a metoda nie zatrzymuje przywozu odpadów. To sprzątanie składowisk, które już mamy — coś innego niż fermentatory rolnicze albo spożywcze.',
    imageAlt: 'Rury ujęcia gazu wystające przez szarą geomembranę na kwaterze składowiska',
  },
  'permeable-pavement': {
    problemTitle: 'Miejski spływ i powodzie',
    fixTitle: 'Nawierzchnia przepuszczalna',
    problem:
      'Miasta pieczętują glebę asfaltem. Deszcz staje się brudną powodzią, która przeciąża kanalizację i rzeki zamiast wsiąkać.',
    fix: 'Porowaty asfalt, przepuszczalny beton i ażurowa kostka puszczają wodę do żwirowego zbiornika pod ulicą. To standardowy zestaw zielonej infrastruktury deszczowej w programach amerykańskich, niemieckich miastach i chińskich „miastach gąbkach”. Bez zamiatania się zapychają i nie są wałem; obcinają spływ na działkach i ulicach, na których leżą.',
    imageAlt: 'Przepuszczalna kostka obok zagłębionego ogrodu deszczowego w parku publicznym',
  },
  'urban-tree-canopy': {
    problemTitle: 'Gorące, nagie ulice',
    fixTitle: 'Miejski parasol drzew',
    problem:
      'Twarde powierzchnie i brak cienia robią dzielnice gorętszymi niż okolica — zwłaszcza tam, gdzie dawne planowanie zostawiło mało drzew.',
    fix: 'Drzewa uliczne i parkowe, sadzone i mierzone jako udział korony, chłodzą powietrze i nawierzchnię na kwartałach, które je mają. Nowy Jork i Melbourne prowadzą nazwane programy korony i śledzą pokrycie. Drzewa potrzebują wody, miejsca i lat. Slogan „milion drzew” bez liczenia przeżycia to zieleń, nie infrastruktura klimatyczna.',
    imageAlt: 'Ulica mieszkaniowa całkowicie zacieniona przez gęstą, splatającą się koronę dojrzałych drzew',
  },
  'district-heating': {
    problemTitle: 'Budynki ogrzewane piec po piecu',
    fixTitle: 'Ciepło sieciowe z ciepła odpadowego',
    problem:
      'Pojedyncze kotły gazowe marnują ciepło, które elektrownie, spalarnie i przemysł już wyrzucają. Miasta wciąż palą paliwo w każdej piwnicy.',
    fix: 'Izolowane rury niosą gorącą wodę z elektrociepłowni, spalarni, centrów danych i fabryk do budynków. Kopenhaga (w tym ciepło z Amager Bakke), Sztokholm, Paryż i wielkie systemy chińskie już tak działają. Sieć jest droga do wykopania, a zysk klimatyczny zależy od źródła: ciepło odpadowe i czysta energia pomagają; węglowa elektrociepłownia to nadal węgiel.',
    imageAlt: 'Kopenhaska spalarnia Amager Bakke za wodą, para z komina',
  },
  'mass-timber': {
    problemTitle: 'Średnia wysokość ze stali i betonu',
    fixTitle: 'Drewno klejone i CLT',
    problem:
      'Budynki średniej wysokości zwykle oznaczają stal i beton — oba węglowo ciężkie w produkcji. Drewno długo trzymały w małych domach przepisy pożarowe.',
    fix: 'Płyty CLT i pokrewne drewno klejone warstwowo już stoją w budynkach średniej wysokości w Europie, Kanadzie i rosnącym rynku USA — w tym Brock Commons w Vancouver i biura nordyckie. Węgiel zostaje w budynku tylko jeśli las nie jest ogołocony, a dom trwa. Ogień, wilgoć i uczciwe źródło drewna to prawdziwe ograniczenia — nie kreskówka drewnianych wieżowców zamiast całego betonu.',
    imageAlt: 'Słupy i belki z drewna klejonego średniowysokiego budynku w budowie w Helsinkach',
  },
  'green-steel': {
    problemTitle: 'Stal z wielkiego pieca',
    fixTitle: 'Złom w piecu łukowym i żelazo wodorowe',
    problem:
      'Wytop żelaza w wielkim piecu opalanym węglem to jedno z największych przemysłowych źródeł CO₂. Świat nadal potrzebuje stali na szyny, maszyny i ramy.',
    fix: 'Topienie złomu w piecu łukowym to sprawdzona, mniej węglowa ścieżka tam, gdzie jest złom i czysta energia. Bezpośrednia redukcja żelaza wodorem — przemysłowa próba HYBRIT firmy SSAB w Szwecji — dopiero się zaczyna, to nie globalna zamiana. Złomu jest mało, wodoru mało, a większość ton wciąż pochodzi z węgla.',
    imageAlt: 'Hala pieca łukowego: okrągła pokrywa pieca, rury i pomosty',
  },
  'mangrove-restoration': {
    problemTitle: 'Wycięte wybrzeża, słabsze brzegi',
    fixTitle: 'Odtwarzanie namorzynów',
    problem:
      'Stawy krewetkowe, porty i wyrąb na węgiel drzewny zdjęły pasy namorzynów, które trzymały osad, szkółki ryb i żywy falochron.',
    fix: 'Przywrócenie hydrologii i sadzenie właściwych gatunków oddało namorzyny w częściach Mekongu, Indonezji, Senegalu i Florydy tam, gdzie pływ jeszcze pasuje. Nieudane projekty sypią sadzonki na złą mieliznę. To lokalna praca brzegowa; nie kompensuje elektrowni węglowej.',
    imageAlt: 'Ludzie sadzą młode namorzyny w nadbrzeżnym mule obok dojrzałych drzew na korzeniach palowych',
  },
  'bycatch-reduction': {
    problemTitle: 'Zwierzęta w przyłowie',
    fixTitle: 'Selektywne narzędzia połowu',
    problem:
      'Włoki, takle i sieci skrzelowe łapią żółwie, delfiny, ptaki morskie i narybek, których nikt nie chciał wyładować. Przyłów może opróżnić gatunek, podczas gdy stado docelowe wygląda jeszcze dobrze.',
    fix: 'Urządzenia wykluczające żółwie w włokach krewetkowych, haki okrągłe, linki odstraszające ptaki i akustyczne pingery są wymagane albo powszechne w kilku rybołówstwach i obcięły konkretny przyłów tam, gdzie jest egzekucja. Sprzęt to nie park morski. Zawodzi przy słabych przepisach albo sieci w złym miejscu.',
    imageAlt: 'Żółw karetta wypływa z włoka krewetkowego po przejściu przez urządzenie wykluczające żółwie',
  },
  'oyster-reefs': {
    problemTitle: 'Gołe, zjadane estuaria',
    fixTitle: 'Rafy ostrygowe i żywe brzegi',
    problem:
      'Wybagrowane ławice ostryg i pionowe nabrzeża zostawiają muł i falę bez przeszkody. Woda mętnieje; krawędź zjada samą siebie.',
    fix: 'Odbudowa raf ostrygowych i sadzenie żywych brzegów — trzcina, muszla, bloki rafowe — trwa w zatoce Chesapeake, części Zatoki Meksykańskiej USA i porcie Nowego Jorku. Ostrygi filtrują lokalnie, a struktura może spowolnić erozję. To projekty estuariów, wciąż odbudowywane po historycznym załamaniu — nie globalny cud owoców morza.',
    imageAlt: 'Międzypływowa rafa ostrygowa ze zlepionych muszli wystająca z wody obok trawy bagiennej',
  },
  'onshore-wind': {
    problemTitle: 'Kopalna elektryczność',
    fixTitle: 'Wiatr lądowy w sieci',
    problem:
      'Węgiel i gaz wciąż ustawiają zegar wielu sieci. Prąd jest największą dźwignią krajowych emisji tam, gdzie sieć jest brudna.',
    fix: 'Wiatr lądowy to zwykła infrastruktura: Chiny, Europa, Stany Zjednoczone, Indie i Brazylia już trzymają wielkie parki. Potrzeba przesyłu, rezerwy albo magazynu i uczciwego wyboru miejsca dla przyrody i sąsiadów. To nie moc całodobowa sama z siebie i nie czyści sieci, która nadal buduje węgiel bez wychwytu.',
    imageAlt: 'Rzędy białych lądowych turbin wiatrowych na pustynnej równinie ku odległym górom',
  },
  'heat-pumps': {
    problemTitle: 'Kopalne ciepło w budynkach',
    fixTitle: 'Pompy ciepła dla budynków',
    problem:
      'Ogrzewanie pomieszczeń i wody wciąż pali gaz albo olej w dużej części Europy, Ameryki Północnej i umiarkowanej Azji. Budynki całą zimę wypuszczają to ciepło.',
    fix: 'Pompy ciepła powietrze-woda i gruntowe to standardowy zestaw grzewczy w Norwegii, Szwecji i Finlandii i wchodzą w całej UE. Modele zimnolubne działają poniżej zera. Potrzeba przyzwoitej obudowy budynku, sieci, która uniesie zimowe obciążenie, i czynników chłodniczych jako chemikaliów, nie haseł.',
    imageAlt: 'Zewnętrzna jednostka powietrznej pompy ciepła przy ceglanej ścianie w padającym śniegu',
  },
  'rainwater-harvesting': {
    problemTitle: 'Suche krany przy mokrym dachu',
    fixTitle: 'Zbieranie wody deszczowej',
    problem:
      'Domy i budynki publiczne zrzucają deszcz do rynien, podczas gdy studnie i cysterny nie nadążają. W wielu miastach dach jest najbliższym zlewnią, ale otwarte beczki hodują komary, a pierwszy brudny spływ trafia do zapasu.',
    fix: 'Poradnik sanitarny WHO traktuje zbiórkę z dachu i przykryte magazynowanie jako źródło domowe, które i tak wymaga odprowadzenia pierwszego spływu, zamkniętego zbiornika i regularnego czyszczenia. Metoda jest zwyczajna w klimatach suchych i monsunowych. To nie nowa rzeka: plon idzie za dachem i deszczem, a źle utrzymany zapas może rozchorować ludzi.',
    imageAlt: 'Przykryta murowana cysterna na deszczówkę na suchej ziemi w Indiach'
  },
  'newater-reclaimed-wastewater': {
    problemTitle: 'Miasta, którym brakuje zlewni',
    fixTitle: 'Odzyskane ścieki / NEWater',
    problem:
      'Gęste miasto może zużyć więcej słodkiej wody, niż niezawodnie dają zbiorniki i import. Oczyszczone ścieki wtedy idą do morza, a krany w suszy zostają zagrożone.',
    fix: 'Singapurskie PUB przepuszcza oczyszczone ścieki przez mikro- lub ultrafiltrację (albo bioreaktor membranowy), odwróconą osmozę i dezynfekcję ultrafioletową — to NEWater. PUB podaje, że pracują cztery zakłady. Większość wody idzie do przemysłu i chłodzenia; w suche okresy część miesza się z surową wodą zbiorników i znów oczyszcza do kranu. Potrzeba ścisłego oczyszczania i zaufania ludzi. Odzysk nie uniezależnia miasta od deszczu i oszczędzania.',
    imageAlt: 'Niebieskie naczynia mikrofiltracji i rury z tablicą Microfiltration System w zakładzie NEWater w Bedok'
  },
  'fog-harvesting': {
    problemTitle: 'Chmura na grzbiecie, w wiosce nie ma studni',
    fixTitle: 'Zbieranie wody z mgły',
    problem:
      'Wysokie, suche wybrzeża i grzbiety mogą stać w częstej mgle, podczas gdy woda gruntowa i wodociąg pozostają poza zasięgiem. Wilgoć jest w powietrzu, nie w rzece.',
    fix: 'Duże siatkowe kolektory przechwytują krople mgły. FogQuest, organizacja założona w 2000 roku, pomagała stawiać kolektory m.in. w Tojquia w Gwatemali, na stanowiskach Atacamy w Chile i w Falda Verde; dziś głównie mentoruuje nowe projekty i sama zaznacza, że strony projektów nie są już aktualizowane. Plon zależy od wiatru, siatki i dni z mgłą. Kolektory wymagają lokalnej opieki. To technika grzbietu, nie miejskie zaopatrzenie.',
    imageAlt: 'Prostokątny siatkowy kolektor mgły na suchym grzbiecie Alto Patache w Chile, ludzie stoją obok nad chmurami'
  },
  'constructed-floating-wetlands': {
    problemTitle: 'Składniki odżywcze w stawach, których nie da się przekopać w mokradła',
    fixTitle: 'Sztuczne pływające mokradła',
    problem:
      'Baseny deszczowe i laguny ściekowe zbierają składniki odżywcze i glony. Lądowe mokradło potrzebuje miejsca i zmienia retencję powodziową. Wiele istniejących stawów nie ma ani jednego, ani drugiego.',
    fix: 'Sztuczne pływające mokradła to pontonowe moduły, których korzenie zwisają w wodzie i trzymają biofilmy pobierające składniki i cząstki. CSIRO opisuje je jako niedawną modernizację dla deszczówki i ścieków i pilotażuje systemy na lagunie w Cowes na Phillip Island oraz na miejskim kanale w Salisbury w Australii Południowej. To pilotaże, nie zamiana oczyszczalni, a rośliny trzeba zbierać, bo inaczej oddadzą to, co zmagazynowały.',
    imageAlt: 'Pływające mokradło Sengkang w Singapurze: zadrzewiony pas na środku zbiornika, most i wieżowce dalej'
  },
  'solar-still': {
    problemTitle: 'Słona woda i słońce bez sieci',
    fixTitle: 'Destylator słoneczny / bierne odsalanie',
    problem:
      'Nadbrzeżne i wyspiarskie gospodarstwa mogą mieć wodę morską i słońce, ale nie prąd dla zakładu odwróconej osmozy. Wożenie albo gotowanie wody to codzienny zapasowy plan.',
    fix: 'Destylator słoneczny odparowuje wodę słoną pod przezroczystą pokrywą i skrapla parę jako słodką — stara, małoskalowa metoda. W 2020 r. MIT i Shanghai Jiao Tong University pokazały wielostopniowy bierny destylator na dachu MIT, który ponownie używał ciepła skraplania między warstwami. To prototyp badawczy, nie zakład miejski. Plon idzie za słońcem i powierzchnią; nie zastępuje odsalania membranowego dla miasta.',
    imageAlt: 'Dachowy destylator słoneczny w Kairze z izolowanym przewodem wokół ciemnego parownika'
  },
  agroforestry: {
    problemTitle: 'Pola bez drzew',
    fixTitle: 'Agroleśnictwo',
    problem:
      'Wycinka drzew z upraw i pastwisk zostawia glebę, cień i paszę cieńszymi. Gospodarstwa wtedy mocniej opierają się na nawozie, nawadnianiu i paszy z zewnątrz.',
    fix: 'Agroleśnictwo wraca drzewa do upraw i zwierząt — uprawy alejkowe, silwopastoraż, ogrody przydomowe i pokrewne systemy. FAO traktuje to jako rozpowszechnioną, dawną praktykę i wskazuje przykłady takie jak amazońska chakra w Ekwadorze. Cień w kawie i kakao to jedna rodzina tego samego pomysłu. Drzewa potrzebują praw, czasu i projektu; rząd sadzonek to nie offset leśny.',
    imageAlt: 'Widok z lotu ptaka: uprawy alejkowe i rzędy młodych drzew na farmie Savanna Institute nad rzeką Wisconsin'
  },
  windbreaks: {
    problemTitle: 'Wiatr, który suszy glebę i męczy zwierzęta',
    fixTitle: 'Wiatrochrony / pasy wiatrochronne',
    problem:
      'Otwarte pola i podwórza biorą cały wiatr. Gleba wywiewa, śnieg zawiewa na drogi, a zwierzęta w zimnie spalają więcej paszy.',
    fix: 'Krajowe Centrum Agroleśnictwa USDA opisuje wiatrochrony — zwane też shelterbelts — jako liniowe nasadzenia drzew i krzewów pod zadanie: ochrona pola, schronienie dla zwierząt, żywe płoty śnieżne albo osłona zagrody. Wysokość, zagęszczenie, luki i orientacja decydują, co pas robi. To infrastruktura rolna, nie plantacja węglowa, i bez utrzymania nie działa.',
    imageAlt: 'Dwa młode rzędy drzew na palikach tworzące wiatrochron na zielonym polu w Illinois'
  },
  'reduced-impact-logging': {
    problemTitle: 'Wycinka, która niszczy pozostały drzewostan',
    fixTitle: 'Pozyskanie o zmniejszonym wpływie',
    problem:
      'Zwykły zbiór tropikalny często oznacza źle zaplanowane szlaki zrywkowe, drzewa zawieszone w lianach i uszkodzenie pozostawionych pni. Następny plon i gleba płacą pierwsze.',
    fix: 'Pozyskanie o zmniejszonym wpływie (RIL) to planowany wyrąb: mapowanie przed zbiorem, kierunkowy wyrąb i kontrolowane szlaki. Prace FAO prowadzą wczesne systemy do Sarawaku, a późniejsze próby do Surinamu, Gujany, Kamerunu i innych miejsc. Badania znajdowały mniejsze szkody i czasem niższy koszt, ale wiele firm praktyki nie zmienia. RIL to nie zakaz wycinki i nie to samo, co zostawienie starego lasu nietkniętego.',
    imageAlt: 'Żółta ładowarka niesie kłodę w obozie pozyskania w dystrykcie Tawau, Sabah, las w tle'
  },
  'riparian-forest-restoration': {
    problemTitle: 'Gołe brzegi, cieplejsze cieki',
    fixTitle: 'Odtwarzanie lasów nadrzecznych',
    problem:
      'Gdy drzewa nad ciekiem wycinane są pod pola albo działki, brzegi erodują, składniki spływają, a letnia woda się grzeje. Ryby i koryto tracą cień i korzenie, które trzymały krawędź.',
    fix: 'Climate Hubs USDA opisują utrzymanie albo odtworzenie lasu i innej pokrywy w strefach nadrzecznych: mieszane nasadzenia, bufory bez wyrębu albo z ograniczonym wyrębem, umocnienie brzegu. Cel to cień, rumosz drzewny i gleba na korzeniach. To lokalna praca przy cieku. Posadzony pas nie odtwarza całej zlewni, jeśli górne tereny zostają gołe.',
    imageAlt: 'Widok z lotu ptaka: zadrzewiony bufor nadrzeczny wzdłuż wijącego się cieku wśród pól w hrabstwie Story, Iowa'
  },
  'community-forestry': {
    problemTitle: 'Lasy zarządzane z dala od ludzi, którzy w nich żyją',
    fixTitle: 'Leśnictwo wspólnotowe',
    problem:
      'Gdy prawa użytkowania siedzą tylko w dalekim urzędzie, okoliczne gospodarstwa nie mają powodu strzec lasu, którego nie mogą legalnie używać. Dalej idzie nielegalny wyrąb i słaba opieka.',
    fix: 'Leśnictwo wspólnotowe Nepalu daje grupom użytkowników lasów wspólnotowych lokalne prawa zarządzania. FAO i Federacja Użytkowników Lasów Wspólnotowych Nepalu (FECOFUN) traktują model jako szeroko cytowany przykład leśnego zarządzania od ludzi. Nadal potrzeba rozliczalnych grup, rynków, które nie ogołacają drzewostanu, i miejsca dla kobiet oraz użytkowników rdzennych. Tytuł grupy sam z siebie nie jest ochroną.',
    imageAlt: 'Wysokie sosny i drzewa liściaste na trawiastym stoku lasu wspólnotowego Badikhel, Lalitpur, Nepal'
  },
  'mrf-optical-sorting': {
    problemTitle: 'Mieszane surowce wtórne, których nikt nie kupi',
    fixTitle: 'Sortowanie w MRF optyką i SI',
    problem:
      'Recykling domowy przychodzi mieszanym strumieniem. Jeśli papier, folia i jedzenie zostają w pryzmie, bele są brudne i młyny je odrzucają. Ręczny wybór nie nadąża za taśmą.',
    fix: 'Zakłady odzysku materiałów używają sit, magnesów, prądów wirowych i sorterów optycznych albo bliskiej podczerwieni — coraz częściej z kamerami i oprogramowaniem — żeby oddzielić opakowania i włókno. Poradnik EPA o recyklingu to publiczna twarz tego systemu w USA: zbiórka jest tak dobra, jak sortowanie. Optyka nie czyni każdego plastiku recyklowalnym i nie naprawia miasta, które nie zbiera.',
    imageAlt: 'Pryzmy mieszanych butelek plastikowych na placu zakładu odzysku materiałów'
  },
  'textile-to-textile-recycling': {
    problemTitle: 'Ubrania, które stają się szmatami albo śmieciem',
    fixTitle: 'Recykling tekstyliów w tekstylia',
    problem:
      'Większość odrzuconej odzieży idzie jako second-hand, w szmaty i izolację, do spalarni albo na składowisko. Nowe ubrania wciąż zaczynają od włókna pierwotnego.',
    fix: 'Strategia UE na rzecz zrównoważonych i cyrkularnych tekstyliów celuje w projekt, zbiórkę i recykling, żeby więcej włókna znów stawało się tekstyliami, a nie odpadem. Komisja zauważa, że prawie nic z materiału odzieży nie jest dziś recyklowane w nową odzież. Zakłady „włókno we włókno” to wczesny przemysł, nie zwykły koniec szafy. Pojemnik na ubrania to nie zamknięta pętla.',
    imageAlt: 'Pomarańczowy uliczny pojemnik na odzysk i recykling tekstyliów obok szarych koszy'
  },
  'construction-demolition-recycling': {
    problemTitle: 'Budynki wyburzone w mieszany gruz',
    fixTitle: 'Recykling odpadów budowlanych i rozbiórkowych',
    problem:
      'Beton, cegła, drewno, metal i szkło z placów bywają najcięższym strumieniem odpadów kraju. Zmieszane z farbą, izolacją albo azbestem, źle idą do ponownego użytku.',
    fix: 'Komisja Europejska traktuje odpady budowlane i rozbiórkowe jako strumień priorytetowy i pisze, że stanowią ponad jedną trzecią odpadów UE. Kruszenie czystego betonu i cegły na kruszywo, wyciąganie metali i sortowanie drewna są zwyczajne tam, gdzie rozbiórka jest selektywna. Wskaźniki odzysku bardzo się różnią między państwami. Recykling gruzu nie jest pozwoleniem na szybsze wyburzanie.',
    imageAlt: 'Przenośnik sypie pokruszony beton na hałdę obok ładowarki'
  },
  'black-soldier-fly': {
    problemTitle: 'Odpady rynkowe, które gniją pod gołym niebem',
    fixTitle: 'Przetwarzanie organiki przez muchę żołnierza',
    problem:
      'Miejskie targi zsypują resztki owoców i warzyw w pryzmy, które śmierdzą, wabią szkodniki i jadą na wysypisko. Okoliczne gospodarstwa wciąż kupują importowaną paszę i nawóz.',
    fix: 'Larwy czarnej muchy żołnierza (Hermetia illucens) jedzą mokrą organike; suszone larwy mogą iść na paszę dla zwierząt albo ryb, a pozostały frass na glebę. FAO opisuje projekt w Abidżanie na Wybrzeżu Kości Słoniowej, który hoduje muchy i szkoli rolników w użyciu produktów. To działająca metoda biogospodarki, wciąż lokalna i pracochłonna. Nie zastępuje zbiórki i nie nadaje się na plastik ani metal.',
    imageAlt: 'Larwy czarnej muchy żołnierza w białej kuwecie wśród włókna kokosowego i gnijących liści'
  },
  'waste-to-energy': {
    problemTitle: 'Odpad resztkowy, w którym jeszcze jest ciepło',
    fixTitle: 'Energia z odpadów',
    problem:
      'Po wyciągnięciu recyklingu i organiki miasta wciąż mają strumień resztkowy. Składowisko zabiera objętość i dalej robi metan. Otwarte spalanie jest gorsze.',
    fix: 'Komunalne zakłady waste-to-energy palą odpad resztkowy i podnoszą parę na prąd albo ciepło. Podstawowa nota EPA o odzysku energii z odpadów opisuje mass-burn jako zwykły układ w USA: popiół na składowisko, oczyszczanie spalin według późniejszych reguł. Zakład potrzebuje stałego strumienia resztek i nie czyni recyklingu opcjonalnym. Emisje i popiół zostają; to nie czysta zamiana za to, żeby odpadów było mniej.',
    imageAlt: 'Zakład Dublin Waste-to-Energy: biała hala i dwa kominy, wzgórze w tle'
  },
  'ocean-cleanup': {
    problemTitle: 'Stary plastik już w oceanie',
    fixTitle: 'The Ocean Cleanup',
    problem:
      'Plastik, który już dotarł do subtropikalnych wirów, nie jest już problemem rzecznym. Kruszy się na mniejsze kawałki, które trudniej zebrać i łatwiej połknąć zwierzętom.',
    fix: 'The Ocean Cleanup, holenderska organizacja non-profit, holuje pływające systemy w Wielkiej Pacyficznej Plamie Śmieci i stawia rzeczne Interceptory. Organizacja publikuje własne sumy wyjęcia i cel na 2040; to jej liczby, nie niezależny spis. Sprzątanie na morzu jest wolne, zależne od pogody i sporne z powodu przyłowu i skali. Nie zastępuje obcinania wycieku na lądzie.',
    imageAlt: 'Schemat pływającej zapory The Ocean Cleanup System 001 z podpisanymi czujnikami i gondolami nawigacyjnymi'
  },
  interceptor: {
    problemTitle: 'Rzeczny plastik w drodze do morza',
    fixTitle: 'Interceptor',
    problem:
      'Większość oceanicznego plastiku, który da się jeszcze złapać jako rozpoznawalne śmieci, przychodzi rzekami po deszczu. Gdy jest już na morzu, zbiórka jest trudniejsza i droższa.',
    fix: 'Interceptor The Ocean Cleanup to rodzina systemów rzecznych — Original, Barrier, Tender, Barricade i Guard — które zaporami i, w Original, słonecznym wyciąganiem podnoszą śmieci zanim dotrą do morza. Wdrożenia są miejscowe; jeden projekt nie pasuje do każdej rzeki. Interceptor to łapka u ujścia, nie zamiana zbiórki w górze rzeki ani mniejszej ilości plastiku.',
    imageAlt: 'Interceptor Original The Ocean Cleanup w kanale, pływająca zapora prowadzi do kadłuba katamaranu'
  },
};

const lv: Record<string, SolutionCopy> = {
  'drip-irrigation': {
    problemTitle: 'Saldūdens trūkums',
    fixTitle: 'Pilienveida apūdeņošana',
    problem: 'Sausajos reģionos lielākā daļa apūdeņošanas ūdens zūd iztvaikošanā un notecē.',
    fix: 'Pilienveida apūdeņošana nogādā ūdeni pie saknes — mazāk zudumu, lielāka raža.',
    imageAlt: 'Jauns kukurūzas augs sausā augsnē, ko laista melna pilienu līnija',
  },
  'constructed-wetlands': {
    problemTitle: 'Upju un piekrastes piesārņojums',
    fixTitle: 'Mākslīgie mitrāji',
    problem: 'Barības vielas un notekūdeņi baro toksiskās aļģes un nogalina zivis.',
    fix: 'Mākslīgie mitrāji filtrē ūdeni kā dzīvas attīrīšanas sistēmas.',
    imageAlt: 'Mākslīgs mitrājs ar niedrēm, skaidru seklu ūdeni un koka laipu',
  },
  'sustainable-forestry': {
    problemTitle: 'Mežu izciršana',
    fixTitle: 'Ilgtspējīga mežsaimniecība',
    problem: 'Lēni augoša koksne mudina cirst vecos mežus.',
    fix: 'Ātraudzīgas plantāciju sugas un ilgtspējīga mežsaimniecība būvkoksnei — mazāks spiediens uz savvaļas mežiem.',
    imageAlt: 'Miglaina meža ceļa josla ar sakrautiem baļķiem un plantāciju koku rindām',
  },
  'anaerobic-digesters': {
    problemTitle: 'Pārtikas atkritumi un metāns',
    fixTitle: 'Anaerobās digestācijas iekārtas',
    problem: 'Poligonā noglabāti pārtikas atkritumi izdala metānu — spēcīgu siltumnīcefekta gāzi.',
    fix: 'Anaerobās digestācijas iekārtas pārvērš atkritumus biogāzē un augsnes mēslojumā.',
    imageAlt: 'Skats no gaisa: trīs zaļi anaerobo digestoru kupoli lauksaimniecības zemē',
  },
  'cool-roofs': {
    problemTitle: 'Pilsētas karstums',
    fixTitle: 'Vēsie jumti',
    problem: 'Tumši jumti un asfalts uzkrāj siltumu un strauji palielina enerģijas patēriņu.',
    fix: 'Vēsie jumti un atstarojoši pārklājumi pazemina temperatūru un samazina gaisa kondicionēšanas slodzi.',
    imageAlt: 'Pilsētas jumti, pārklāti ar baltu, atstarojošu materiālu',
  },
  'lower-clinker-cement': {
    problemTitle: 'Cementa emisijas',
    fixTitle: 'Cements ar mazāku klinkera daļu',
    problem: 'Parastais cements ir viens no galvenajiem globālā CO₂ avotiem.',
    fix: 'Cements ar mazāku klinkera daļu (piemēram, kalcinēta māla un kaļķakmens maisījumi) samazina emisijas rūpnieciskā mērogā.',
    imageAlt: 'Cementa rūpnīca ar gaiša pulvera, šķembu un smilšu kaudzēm',
  },
  'river-interceptors': {
    problemTitle: 'Plastmasas noplūde',
    fixTitle: 'Upes uztvērējbarjeras',
    problem:
      'Pēc lietus upes nes uz jūru lielāko daļu vēl atpazīstamas plastmasas. Kad atkritumi jau ir atklātā ūdenī, vākt tos ir lēnāk un dārgāk nekā apturēt gultnē.',
    fix: 'Peldošie bumi un upes uztvērēji tur atkritumus pie barjeras, lai tos varētu izcelt. The Ocean Cleanup Interceptor ir viena nosaukta, ražota šādu sistēmu saime; daudzas pilsētas liek arī vienkāršākus bumus. Barjera ir ķērājs sašaurinājumā — nevis augšteces vākšanas vai mazākas plastmasas aizstājējs.',
    imageAlt: 'Peldošs upes bums ar dzeltenām bojām, kas aiztur plastmasas pudeles un atkritumus',
  },
  'solar-microgrids': {
    problemTitle: 'Netīra un nestabila enerģija',
    fixTitle: 'Saules mikrotīkli',
    problem: 'Fosilo kurināmo tīkli nostiprina emisijas un atstāj nomaļas vietas tumsā.',
    fix: 'Saules mikrotīkli dod tīru, vietēju enerģiju tur, kur lielās stacijas nesniedzas.',
    imageAlt: 'Lauku saules paneļu rindas un vadības skapis pie ciema lauka',
  },
  'membrane-desalination': {
    problemTitle: 'Slāpes pie sālsūdens',
    fixTitle: 'Atsāļošana ar reverso osmozi',
    problem:
      'Pilsēta var stāvēt pie jūras un tomēr palikt bez dzeramā ūdens. Sausums, iztukšotas upes un pieaugošs pieprasījums vispirms sit pa krāniem.',
    fix: 'Reversās osmozes stacijas spiež jūras ūdeni caur membrānām un jau apgādā pilsētas Izraēlā, Spānijā, Austrālijā, Līča valstīs un Kalifornijā. Pāris ar vēju vai sauli samazina fosilo elektrības rēķinu. Enerģija tik un tā vajadzīga, sālījumu jāatšķaida, un atsāļošana nav atļauja tērēt saldūdeni iekšzemē.',
    imageAlt: 'Pērtas jūras ūdens atsāļošanas stacija aiz žoga zem zilām debesīm',
  },
  'managed-aquifer-recharge': {
    problemTitle: 'Iztukšoti gruntsūdeņi',
    fixTitle: 'Vadīta ūdensnesēja papildināšana',
    problem:
      'Akas krīt, kad pilsētas un lauki ņem gruntsūdeni ātrāk, nekā lietus to atdod. Tukšs ūdensnesējs nozīmē sausus krānus, grimstošu zemi un nav rezerves sausumā.',
    fix: 'Vadīta ūdensnesēja papildināšana (MAR) padod attīrītu lietus, upes vai reciklētu ūdeni baseinos un akās, lai pazemes krājums atkal piepildītos. Orange County gruntsūdeņu papildināšanas sistēma, Pērtas reciklēšanas shēma un infiltrācijas lauki Arizonā jau strādā pilsētas mērogā. Attēlā — Bolivar izmēģinājums Dienvidaustrālijā: reciklēta ūdens iesūknēšana ūdensnesējā tā paša veida. Vajag tīru avotu, piemērotu ģeoloģiju un gadu monitoringu — tas nav jauna upe.',
    imageAlt:
      'Sūknis, caurules un parakstīts konteiners Bolivar reciklētā ūdens iesūknēšanas izmēģinājumā Dienvidaustrālijā',
  },
  'assisted-natural-regeneration': {
    problemTitle: 'Iznīcināti sausieņu meži',
    fixTitle: 'Atbalstīta dabiskā atjaunošanās',
    problem:
      'Pēc ciršanas un tīrumiem sausas ainavas bieži paliek kailas: atvases noganā vai nodedzina, pirms tās kļūst par kokiem. Atvestie stādi pēc tam iet bojā tajā pašā karstumā.',
    fix: 'Atbalstīta dabiskā atjaunošanās sargā dzīvus celmus un saknes, lai koki atgrieztos no tā, kas jau ir augsnē. Zemnieku vadīta atjaunošanās Sahelā — īpaši Faidherbia parkveida kokaudzes Nigērā un kaimiņvalstīs — ir atgriezusi lauku kokus ainavas mērogā. Joprojām vajag vietējās tiesības, ganību kontroli un laiku; tas nav kokaudzētava, kas izkrauj stādus no kravas auto.',
    imageAlt: 'Faidherbia albida koki ar spalvainu zaļu vainagu sausā zeltainā zālē',
  },
  'fire-smart-forestry': {
    problemTitle: 'Augstas intensitātes meža ugunsgrēki',
    fixTitle: 'Plānotā dedzināšana',
    problem:
      'Gadsimts, kad dzēsa katru uguni, daudzos mežos atstāja biezu degvielu. Ekstremālā laikā šīs audzes deg karstāk un nogalina kokus, kas agrāk pārdzīvoja vieglāku uguni.',
    fix: 'Plānotos ugunsgrēkus un retināšanu, kas atjauno biežu, zemu uguni, lieto meža dienesti un pirmiedzīvotāju prakses ASV rietumos, Austrālijā un daļā Eiropas. Pareizā laikā degviela samazinās. Tie neaptur katru megaugunsgrēku karstuma vilnī, un slikti plānots uguns var aiziet. Tā ir ainavas kopšana, nevis klimata ofsets.',
    imageAlt:
      'Meža ugunsdzēsēji aizsargtērpos vēro zemu plānoto uguni skuju audzē',
  },
  'shade-agroforestry': {
    problemTitle: 'Mežs zem prečkultūrām',
    fixTitle: 'Ēnas kafija un kakao',
    problem:
      'Kafijas un kakao plantācijas pilnā saulē nomaina meža vainagu, griež putnu dzīvotnes un bieži prasa vairāk mēslojuma un laistīšanas. Pieprasījums joprojām dzen jaunu ciršanu meža malā.',
    fix: 'Tradicionālās un sertificētās ēnas sistēmas audzē kafiju vai kakao zem koku vainaga, kas tur augsni, putnus un daļu meža struktūras. Tā ir parasta lauksaimniecība daļā Latīņamerikas un Rietumāfrikas. Ēna pati par sevi neaptur mežu izciršanu, ja cena dzen frontieri, un sertifikāts ir tik godīgs, cik audits.',
    imageAlt: 'Kafijas krūmi zem augsta ēnas koku vainaga tradicionālā plantācijā',
  },
  'pet-bottle-recycling': {
    problemTitle: 'Vienreizējās PET pudeles',
    fixTitle: 'PET pārstrāde no pudeles pudelē',
    problem:
      'Caurspīdīgās PET pudeles ir iecerētas īsai dzīvei. Lielākā daļa joprojām kļūst par poligonu, sadedzināšanu vai zemākas kvalitātes šķiedru pēc vienas lietošanas.',
    fix: 'Mehāniskā pārstrāde ar depozītu un «supertīru» mazgāšanu jau pārvērš pudeles atpakaļ pārtikas pudelēs ES un citās depozīta sistēmās. Vākšana un šķirošana izlemj vairāk nekā ekstrūders. Krāsaina un jaukta plastmasa tik un tā izkrīt; pārstrāde nav iemesls appludināt veikalus ar pudelēm.',
    imageAlt: 'Saspiestu PET pudeļu ķīpu kaudzes pārstrādes rūpnīcas pagalmā',
  },
  'municipal-composting': {
    problemTitle: 'Pārtikas un dārza atkritumi poligonos',
    fixTitle: 'Pašvaldību organikas kompostēšana',
    problem:
      'Kad pilsēta aprok ēdiena atliekas un pļautu zāli, tā izmet augsnes oglekli un dara poligona metānu. Organika bieži ir smagākā mājsaimniecības tvertnes daļa.',
    fix: 'Dalītā vākšana plus kompostēšana vagās vai kamerās ir ikdiena Sanfrancisko, Milānā, lielā daļā Dienvidkorejas un ES. Komposts iet uz laukiem un parkiem. Piesārņojums — plastmasa, stikls — joprojām sabojā kaudzes; komposts neaizstāj mazāk izmestu ēdienu.',
    imageAlt: 'Liela gatava tumša komposta kaudze pašvaldības organikas objektā, tehnika fonā',
  },
  'landfill-gas-capture': {
    problemTitle: 'Poligona metāns',
    fixTitle: 'Poligona gāze enerģijā',
    problem:
      'Vecie izgāztuves pēc slēgšanas gadu desmitiem dara metānu. Gāze ir spēcīgs siltumnīcas piesārņotājs un vietējs sprādziena un smakas risks.',
    fix: 'Akas un caurules velk poligona gāzi uz lāpu vai dzinēju. EPA LMOP saraksta objekti ASV, Apvienotajā Karalistē un citur jau tā ražo elektrību. Uztveršana ir daļēja, noplūdes paliek, un metode neaptur atkritumu ierašanos. Tā ir jau esošo izgāztuvju sakopšana — kas cits nekā lauku vai pārtikas digestori.',
    imageAlt: 'Gāzes uztveršanas caurules, kas iznāk caur pelēku ģeomembrānu poligona kartē',
  },
  'permeable-pavement': {
    problemTitle: 'Pilsētas notece un plūdi',
    fixTitle: 'Caurlaidīgs segums',
    problem:
      'Pilsētas aizzīmogo augsni ar asfaltu. Lietus kļūst par netīru plūdu, kas pārslogo kanalizāciju un upes, nevis iesūcas.',
    fix: 'Porains asfalts, caurlaidīgs betons un caurlaidīgie bruģakmeņi laiž ūdeni akmens rezervuārā zem ielas. Tas ir standarta zaļās lietus infrastruktūras komplekts ASV pašvaldību programmās, Vācijas pilsētās un Ķīnas «sūkļa pilsētās». Bez slaucīšanas tie aizsērē, un tie nav dambis; tie nogriež noteci tur, kur ir ieklāti.',
    imageAlt: 'Caurlaidīgi bruģakmeņi blakus iedziļinātam lietus dārzam publiskā parkā',
  },
  'urban-tree-canopy': {
    problemTitle: 'Karstas, kailas ielas',
    fixTitle: 'Pilsētas koku vainags',
    problem:
      'Cietās virsmas un trūkstošā ēna padara kvartālus karstākus par apkārtējiem laukiem — īpaši tur, kur plānošana atstāja maz koku.',
    fix: 'Ielu un parka koki, ko stāda un mēra kā vainaga daļu, dzesē gaisu un segumu tajos kvartālos, kur tie ir. Ņujorka un Melburna vada nosauktas vainaga programmas un seko pārklājumam. Kokiem vajag ūdeni, vietu un gadus. Sauklis «miljons koku» bez izdzīvošanas skaita ir apstādījumi, nevis klimata infrastruktūra.',
    imageAlt: 'Dzīvojamā iela, ko pilnībā noēno blīvs, savijies pieaugušu koku vainags',
  },
  'district-heating': {
    problemTitle: 'Ēkas, ko silda katls pēc katla',
    fixTitle: 'Centralizētā apkure no atkritumsiltuma',
    problem:
      'Atsevišķie gāzes katli iznieko siltumu, ko spēkstacijas, sadedzinātavas un rūpniecība jau izmet. Pilsētas joprojām dedzina kurināmo katrā pagrabā.',
    fix: 'Izolētas caurules nes karstu ūdeni no koģenerācijas stacijām, atkritumu sadedzinātavām, datu centriem un rūpnīcām ēkās. Kopenhāgena (arī siltums no Amager Bakke), Stokholma, Parīze un lielās Ķīnas sistēmas jau tā strādā. Tīklu rakt ir dārgi, un klimata ieguvums atkarīgs no avota: atkritumsiltums un tīra enerģija palīdz; ogļu koģenerācija joprojām ir ogles.',
    imageAlt: 'Kopenhāgenas Amager Bakke atkritumu sadedzinātava aiz ūdens, tvaiks no skursteņa',
  },
  'mass-timber': {
    problemTitle: 'Vidēja stāvu ēkas no tērauda un betona',
    fixTitle: 'Masīvkoksne un CLT',
    problem:
      'Vidēja stāvu ēkas parasti nozīmē tēraudu un betonu — abi oglekļa ziņā smagi ražošanā. Koku ilgi turēja mazās mājās ugunsdrošības noteikumi.',
    fix: 'Krustām līmētie CLT paneļi un radniecīgā masīvkoksne jau stāv vidēja stāvu ēkās Eiropā, Kanādā un augošajā ASV tirgū — tostarp Brock Commons Vankūverā un ziemeļu birojos. Ogleklis paliek ēkā tikai tad, ja mežs nav nolaupīts un ēka kalpo ilgi. Uguns, mitrums un godīgs meža avots ir īstie ierobežojumi — ne karikatūra par koka debesskrāpjiem visu betona vietā.',
    imageAlt: 'Masīvkoksnes kolonnas un sijas vidēja stāvu ēkai celtniecībā Helsinkos',
  },
  'green-steel': {
    problemTitle: 'Domnas tērauds',
    fixTitle: 'Lūžņi lokā un ūdeņraža dzelzs',
    problem:
      'Dzelzs kausēšana ogļu domnā ir viens no lielākajiem rūpnieciskajiem CO₂ avotiem. Pasaulei joprojām vajag tēraudu sliedēm, mašīnām un rāmjiem.',
    fix: 'Lūžņu kausēšana elektroloka krāsnī ir pārbaudītais mazāk oglekļa ceļš tur, kur ir lūžņi un tīra enerģija. Tiešā dzelzs redukcija ar ūdeņradi — SSAB HYBRIT rūpnieciskais izmēģinājums Zviedrijā — tikai sākas, tas nav globāla maiņa. Lūžņu ir maz, ūdeņraža maz, un lielākā daļa tonnu joprojām nāk no oglēm.',
    imageAlt: 'Elektroloka krāsns cehs: apaļš krāsns vāks, caurules un laipas',
  },
  'mangrove-restoration': {
    problemTitle: 'Iznīcināti krasti, vājākas malas',
    fixTitle: 'Mangrovju atjaunošana',
    problem:
      'Garnelu dīķi, ostas un ogļu izcirtumi ir noņēmuši mangrovju joslas, kas turēja nogulsnes, zivju audzētavas un dzīvo viļņlauzi.',
    fix: 'Hidroloģijas atjaunošana un īsto sugu stādīšana ir atgriezusi mangroves Mekongas, Indonēzijas, Senegālas un Floridas daļās, kur plūdmaiņa vēl der. Neizdevušies projekti bērž stādus uz nepareizā sēkļa. Tas ir vietējs piekrastes darbs; tas nekompensē ogļu staciju.',
    imageAlt: 'Cilvēki stāda jaunus mangrovju stādus piekrastes dūņās pie pieaugušiem kokiem ar balsta saknēm',
  },
  'bycatch-reduction': {
    problemTitle: 'Savvaļa piezvejā',
    fixTitle: 'Selektīvi zvejas rīki',
    problem:
      'Traļi, āķu jedas un žaunu tīkli ķer bruņurupučus, delfīnus, jūrasputnus un mazuļus, kurus neviens negribēja izkraut. Piezveja var iztukšot sugu, kamēr mērķa krājums vēl izskatās labs.',
    fix: 'Bruņurupuču izslēdzošas ierīces garnelu traļos, apaļie āķi, putnus atbaidošas līnijas un akustiskie pingēri ir obligāti vai parasti vairākās zvejās un ir nogriezuši konkrētu piezveju tur, kur ir uzraudzība. Rīks nav jūras parks. Tas neizdodas, ja noteikumi ir vāji vai tīkli ir nepareizā vietā.',
    imageAlt: 'Galvbruņurupucis aizpeld no garnelu traļa pēc bruņurupuču izslēdzošas ierīces',
  },
  'oyster-reefs': {
    problemTitle: 'Kailas, erodējošas estuāri',
    fixTitle: 'Austeru rifi un dzīvie krasti',
    problem:
      'Izbagarētās austeru sēkļi un vertikālās krastmalas atstāj dūņas un viļņus bez šķēršļa. Ūdens kļūst duļķains; mala ēd pati sevi.',
    fix: 'Austeru rifu atjaunošana un dzīvo krastu stādīšana — marša, čaula, rifu bloki — notiek Chesapeake līcī, daļā ASV Meksikas līča un Ņujorkas ostā. Austeres filtrē lokāli, un struktūra var palēnināt eroziju. Tie ir estuāru projekti, kas joprojām atjaunojas pēc vēsturiska sabrukuma — ne globāls jūras velšu brīnums.',
    imageAlt: 'Paisuma–bēguma austeru rifs no saaugušām čaulām pie virsmas blakus marša zālei',
  },
  'onshore-wind': {
    problemTitle: 'Fosilā elektrība',
    fixTitle: 'Sauszemes vējš tīklā',
    problem:
      'Ogles un gāze joprojām uzstāda daudzu tīklu ritmu. Elektrība ir lielākā nacionālo emisiju svira tur, kur tīkls ir netīrs.',
    fix: 'Sauszemes vējš ir parasta infrastruktūra: Ķīna, Eiropa, ASV, Indija un Brazīlija jau tur lielus parkus. Vajag pārvadi, rezervi vai uzkrāšanu un godīgu vietas izvēli savvaļai un kaimiņiem. Tas nav diennakts jauda pats par sevi un neattīra tīklu, kas turpina būvēt ogles bez uztveršanas.',
    imageAlt: 'Baltu sauszemes vēja turbīnu rindas pāri tuksneša līdzenumam pret tāliem kalniem',
  },
  'heat-pumps': {
    problemTitle: 'Fosilais siltums ēkās',
    fixTitle: 'Siltumsūkņi ēkām',
    problem:
      'Telpu un ūdens apkure joprojām dedzina gāzi vai eļļu lielā daļā Eiropas, Ziemeļamerikas un mērenās Āzijas. Ēkas visu ziemu laiž šo siltumu ārā.',
    fix: 'Gaisa un grunts siltumsūkņi ir parastais apkures komplekts Norvēģijā, Zviedrijā un Somijā un izvēršas visā ES. Aukstuma modeļi strādā zem nulles. Vajag pieklājīgu ēkas apvalku, tīklu, kas iztur ziemas slodzi, un aukstumaģentus kā ķimikālijas, ne saukļus.',
    imageAlt: 'Āra gaisa siltumsūkņa bloks pie ķieģeļu sienas krītošā sniegā',
  },
  'rainwater-harvesting': {
    problemTitle: 'Sausi krāni pie slapja jumta',
    fixTitle: 'Lietusūdens vākšana',
    problem:
      'Mājas un sabiedriskās ēkas laiž lietu notekās, kamēr akas un cisternas netiek galā. Daudzās pilsētās jumts ir tuvākais sateces baseins, bet vaļējās mucas vairo odus, un pirmā netīrā straume nonāk krājumā.',
    fix: 'PVO sanitārās pārbaudes padoms uzskata vākšanu no jumta un slēgtu uzglabāšanu par mājsaimniecības avotu, kam tik un tā vajag pirmās straumes novadi, slēgtu tvertni un regulāru tīrīšanu. Metode ir parasta sausos un musonu klimatos. Tā nav jauna upe: iznākums seko jumtam un lietum, un slikti kopts krājums var saslimdināt cilvēkus.',
    imageAlt: 'Slēgta mūra lietusūdens cisterna sausā zemē Indijā'
  },
  'newater-reclaimed-wastewater': {
    problemTitle: 'Pilsētas, kurām nepietiek sateces',
    fixTitle: 'Reģenerēti notekūdeņi / NEWater',
    problem:
      'Blīva pilsēta var iztērēt vairāk saldūdens, nekā droši dod ūdenskrātuves un imports. Attīrītos notekūdeņus tad laiž jūrā, bet krāni sausumā paliek apdraudēti.',
    fix: 'Singapūras PUB laiž attīrītos notekūdeņus caur mikro- vai ultrafiltrāciju (vai membrānu bioreaktoru), reverso osmozi un ultravioleto dezinfekciju — tas ir NEWater. PUB saka, ka darbojas četras stacijas. Lielākā daļa ūdens iet rūpniecībai un dzesēšanai; sausos periodos daļu sajauc ar ūdenskrātuvju jēlūdeni un atkal attīra līdz krāna ūdenim. Vajag stingru attīrīšanu un cilvēku uzticību. Atkārtota izmantošana nepadara pilsētu neatkarīgu no lietus un taupīšanas.',
    imageAlt: 'Zilas mikrofiltrācijas tvertnes un caurules ar uzrakstu Microfiltration System Bedok NEWater stacijā'
  },
  'fog-harvesting': {
    problemTitle: 'Mākonis uz kores, ciemā nav akas',
    fixTitle: 'Miglas ūdens vākšana',
    problem:
      'Augstas, sausas piekrastes un kores var stāvēt biežā miglā, kamēr gruntsūdeņi un cauruļu ūdens paliek nesasniedzami. Mitrums ir gaisā, ne upē.',
    fix: 'Lieli sieta kolektori uztver miglas pilienus. FogQuest, labdarības organizācija, kas dibināta 2000. gadā, palīdzēja celt kolektorus Tojquia Gvatemalā, Čīles Atakamas vietās un Falda Verde; tagad tā galvenokārt mentorē jaunus projektus un pati atzīmē, ka projektu lapas vairs nav aktuālas. Iznākums atkarīgs no vēja, sieta un miglainām dienām. Kolektoriem vajag vietēju kopšanu. Tā ir kores tehnika, ne pilsētas apgāde.',
    imageAlt: 'Taisnstūrveida sieta miglas kolektors uz sausas kores Alto Patache Čīlē, cilvēki stāv blakus virs mākoņiem'
  },
  'constructed-floating-wetlands': {
    problemTitle: 'Barības vielas dīķos, ko nevar pārvērst sauszemes mitrājos',
    fixTitle: 'Mākslīgie peldošie mitrāji',
    problem:
      'Lietus baseini un notekūdeņu lagūnas krāj barības vielas un aļģes. Sauszemes mitrājam vajag vietu un tas maina plūdu tilpumu. Daudziem esošajiem dīķiem nav ne viena, ne otra.',
    fix: 'Mākslīgie peldošie mitrāji ir pontonu moduļi, kuru augu saknes karājas ūdenī un tur bioplēves, kas ņem barības vielas un daļiņas. CSIRO tos apraksta kā nesenu piebūvi lietus un notekūdeņiem un izmēģina sistēmas lagūnā Cowes, Filipa salā, un pilsētas kanālā Solsberijā, Dienvidaustrālijā. Tie ir piloti, ne attīrīšanas stacijas aizstājējs, un augi jānovāc, citādi uzkrātais atgriežas ūdenī.',
    imageAlt: 'Sengkang peldošais mitrājs Singapūrā: apstādīta josla ūdenskrātuves vidū, tilts un daudzstāvu ēkas tālāk'
  },
  'solar-still': {
    problemTitle: 'Sālsūdens un saule bez tīkla',
    fixTitle: 'Saules destilators / pasīvā atsāļošana',
    problem:
      'Piekrastes un salu saimniecībām var būt jūras ūdens un saule, bet nav elektrības reversās osmozes stacijai. Ūdens vešana vai vārīšana ir ikdienas rezerves ceļš.',
    fix: 'Saules destilators iztvaicē sāļūdeni zem caurspīdīga vāka un kondensē tvaiku par saldūdeni — sena, maza mēroga metode. 2020. gadā MIT un Šanhajas Dzjaotunas universitāte parādīja daudzpakāpju pasīvo destilatoru uz MIT jumta, kas atkārtoti izmanto kondensācijas siltumu starp slāņiem. Tas ir pētniecības prototips, ne pilsētas rūpnīca. Iznākums seko saulei un laukumam; tas neaizstāj membrānu atsāļošanu pilsētai.',
    imageAlt: 'Jumta saules destilators Kairā ar izolētu gaisa vadu ap tumšu iztvaicētāju'
  },
  agroforestry: {
    problemTitle: 'Lauki bez kokiem',
    fixTitle: 'Agromežsaimniecība',
    problem:
      'Koku ciršana no tīrumiem un ganībām atstāj augsni, ēnu un barību plānāku. Saimniecības tad vairāk balstās uz mēslojumu, laistīšanu un ievesto barību.',
    fix: 'Agromežsaimniecība atgriež kokus pie kultūrām un lopiem — aleju sējumi, silvopastūra, mājas dārzi un radniecīgas sistēmas. FAO to uzskata par izplatītu, seno praksi un izceļ piemērus kā Amazones čakru Ekvadorā. Ēnas kafija un kakao ir viena tās pašas idejas saime. Kokiem vajag tiesības, laiku un projektu; stādu rinda nav meža ofsets.',
    imageAlt: 'Skats no gaisa: aleju sējumi un jaunu koku rindas Savanna Institute saimniecībā pie Viskonsinas upes'
  },
  windbreaks: {
    problemTitle: 'Vējš, kas žāvē augsni un nomāc lopus',
    fixTitle: 'Vējainas / aizsargjoslas',
    problem:
      'Atklāti lauki un sētas ņem visu vēju. Augsne aizpūšas, sniegs sanes uz ceļiem, un dzīvnieki aukstumā tērē vairāk barības.',
    fix: 'ASV Nacionālais agromežsaimniecības centrs apraksta vējainas — sauktas arī par shelterbelts — kā lineāras koku un krūmu stādījumu joslas kādam mērķim: lauka aizsardzība, lopu pajumte, dzīvie sniega žogi vai sētas ekrāns. Augstums, blīvums, spraugas un orientācija izlemj, ko josla dara. Tā ir saimniecības infrastruktūra, ne oglekļa plantācija, un bez kopšanas tā nestrādā.',
    imageAlt: 'Divas jaunas koku rindas uz mietiem veido vējainu zaļā Illinoisa laukā'
  },
  'reduced-impact-logging': {
    problemTitle: 'Ciršana, kas sagrauj atlikušo audzi',
    fixTitle: 'Samazinātas ietekmes ciršana',
    problem:
      'Parastā tropiskā izstrāde bieži nozīmē slikti plānotus pievešanas ceļus, vītnēs iekārtus kokus un bojājumus atstātajiem stumbriem. Nākamā raža un augsne maksā pirmās.',
    fix: 'Samazinātas ietekmes ciršana (RIL) ir plānota izstrāde: kartēšana pirms ciršanas, virziena gāšana un kontrolēti pievešanas ceļi. FAO gadījumi ved agrīnās sistēmas uz Saravaku un vēlākos izmēģinājumus uz Surinamu, Gajānu, Kamerūnu un citām vietām. Pētījumi atrada mazāku kaitējumu un dažkārt zemākas izmaksas, bet daudzas firmas praksi nemaina. RIL nav ciršanas aizliegums un nav tas pats, kas atstāt veco mežu necirstu.',
    imageAlt: 'Dzeltens iekrāvējs nes baļķi kokmateriālu nometnē Tawau apgabalā, Sabahā, mežs fonā'
  },
  'riparian-forest-restoration': {
    problemTitle: 'Kailas krastmalas, siltākas straumes',
    fixTitle: 'Piekrastes mežu atjaunošana',
    problem:
      'Kad pie strauta kokus cērt tīrumiem vai gabaliem, krasti erodē, barības vielas noskalojas un vasaras ūdens sasilst. Zivis un gultne zaudē ēnu un saknes, kas turēja malu.',
    fix: 'ASV Klimata centri apraksta meža un cita seguma uzturēšanu vai atjaunošanu piekrastes joslās: jaukti stādījumi, buferi bez ciršanas vai ar ierobežotu ciršanu, krasta nostiprināšana. Mērķis ir ēna, koksnes sagāzumi un augsne uz saknēm. Tas ir vietējs darbs pie strauta. Iestādīta josla neatjauno visu sateci, ja augštece paliek kaila.',
    imageAlt: 'Skats no gaisa: kokains piekrastes buferis gar līkumotu strautu starp laukiem Storijas apgabalā, Aiovā'
  },
  'community-forestry': {
    problemTitle: 'Meži, ko pārvalda tālu no cilvēkiem, kuri tajos dzīvo',
    fixTitle: 'Kopienu mežsaimniecība',
    problem:
      'Kad lietošanas tiesības sēž tikai tālā kantorī, tuvējām saimniecībām ir maz iemesla sargāt mežu, ko nedrīkst likumīgi lietot. Tālāk nāk nelikumīga ciršana un vāja kopšana.',
    fix: 'Nepālas kopienu mežsaimniecība dod Kopienu meža lietotāju grupām vietējas pārvaldības tiesības. FAO un Nepālas Kopienu meža lietotāju federācija (FECOFUN) uzskata modeli par plaši citētu cilvēku centrētas meža pārvaldības piemēru. Joprojām vajag atbildīgas grupas, tirgus, kas nenoplicina audzi, un vietu sievietēm un pirmiedzīvotāju lietotājiem. Grupas tituls pats par sevi nav aizsardzība.',
    imageAlt: 'Augstas priedes un lapu koki zālainā nogāzē Badikhel kopienas mežā, Lalitpurā, Nepālā'
  },
  'mrf-optical-sorting': {
    problemTitle: 'Jaukti otrreizējie materiāli, ko neviens nepirks',
    fixTitle: 'MRF šķirošana ar optiku un MI',
    problem:
      'Mājsaimniecību pārstrāde atnāk jauktā plūsmā. Ja papīrs, plēve un ēdiens paliek kaudzē, ķīpas ir netīras un rūpnīcas tās noraida. Roku lasīšana netiek līdzi lentai.',
    fix: 'Materiālu atgūšanas iekārtas lieto sietus, magnētus, virpuļstrāvas un optiskos vai tuvās infrasarkanās šķirotājus — arvien biežāk ar kamerām un programmām — lai atdalītu taru un šķiedru. EPA pārstrādes vadlīnijas ir šīs sistēmas publiskā seja ASV: vākšana ir tik laba, cik šķirošana. Optika nepadara katru plastmasu pārstrādājamu un nelabo pilsētu, kas nevāc.',
    imageAlt: 'Jauktu plastmasas pudeļu kaudzes materiālu atgūšanas iekārtas laukumā'
  },
  'textile-to-textile-recycling': {
    problemTitle: 'Drēbes, kas kļūst par lupatām vai atkritumiem',
    fixTitle: 'Tekstila pārstrāde tekstilā',
    problem:
      'Lielākā daļa noraidīto drēbju iet kā lietotas, lupatās un izolācijā, sadedzināšanā vai poligonā. Jaunas drēbes joprojām sākas no primārās šķiedras.',
    fix: 'ES ilgtspējīga un aprites tekstila stratēģija mērķē uz dizainu, vākšanu un pārstrādi, lai vairāk šķiedras atkal kļūtu par tekstilu, nevis atkritumiem. Komisija atzīmē, ka gandrīz nekas no apģērba materiāla šodien netiek pārstrādāts jaunā apģērbā. «Šķiedra šķiedrā» rūpnīcas ir agrīna industrija, ne parasts skapja gals. Drēbju konteiners nav slēgts cikls.',
    imageAlt: 'Oranžs ielas konteiners tekstila vākšanai un pārstrādei blakus pelēkiem konteineriem'
  },
  'construction-demolition-recycling': {
    problemTitle: 'Ēkas, kas nojauktas jauktos gružos',
    fixTitle: 'Būvniecības un nojaukšanas atkritumu pārstrāde',
    problem:
      'Betons, ķieģelis, koks, metāls un stikls no būvlaukumiem bieži ir smagākā valsts atkritumu plūsma. Sajaukti ar krāsu, izolāciju vai azbestu, tie slikti iet atkārtotā lietošanā.',
    fix: 'Eiropas Komisija uzskata būvniecības un nojaukšanas atkritumus par prioritāru plūsmu un raksta, ka tie veido vairāk nekā trešdaļu ES atkritumu. Tīra betona un ķieģeļu smalcināšana pildījumā, metālu izvilkšana un koksnes šķirošana ir parasta tur, kur nojaukšana ir selektīva. Atgūšanas īpatsvars starp dalībvalstīm ļoti atšķiras. Gružu pārstrāde nav atļauja nojaukt ātrāk.',
    imageAlt: 'Konveijers ber sasmalcinātu betona pildījumu kaudzē blakus iekrāvējam'
  },
  'black-soldier-fly': {
    problemTitle: 'Tirgus atkritumi, kas pūst zem klajas debesīm',
    fixTitle: 'Melnā kareivja mušas pārstrāde',
    problem:
      'Pilsētas tirgi berž augļu un dārzeņu atliekas kaudzēs, kas smird, sauc kaitēkļus un brauc uz izgāztuvi. Tuvējās saimniecības joprojām pērk ievesto barību un mēslojumu.',
    fix: 'Melnā kareivja mušas (Hermetia illucens) kāpuri ēd mitru organiku; kaltētus kāpurus var dot lopiem vai zivīm, un atlikušo frasu — augsnei. FAO apraksta projektu Abidžanā, Kotdivuārā, kur mušas audzē un māca zemniekiem lietot produktus. Tā ir strādājoša bioekonomikas metode, joprojām vietēja un darbietilpīga. Tā neaizstāj vākšanu un neder plastmasai vai metālam.',
    imageAlt: 'Melnā kareivja mušas kāpuri baltā traukā starp kokosšķiedru un trūdošām lapām'
  },
  'waste-to-energy': {
    problemTitle: 'Atlikuma atkritumi, kuros vēl ir siltums',
    fixTitle: 'Enerģija no atkritumiem',
    problem:
      'Pēc pārstrādes un organikas izņemšanas pilsētām joprojām paliek atlikuma plūsma. Poligons paņem tilpumu un turpina darīt metānu. Atklāta dedzināšana ir sliktāka.',
    fix: 'Pašvaldību waste-to-energy stacijas dedzina atlikuma atkritumus un ceļ tvaiku elektrībai vai siltumam. EPA pamata piezīme par enerģijas atgūšanu no atkritumiem apraksta mass-burn kā parasto ASV shēmu: pelni uz poligonu, gāzu attīrīšana pēc vēlākiem noteikumiem. Stacijai vajag stabilu atlikuma plūsmu, un tā nepadara pārstrādi izvēles. Emisijas un pelni paliek; tas nav tīrs aizstājējs tam, lai atkritumu būtu mazāk.',
    imageAlt: 'Dublin Waste-to-Energy stacija: balta hallē un divi skursteņi, kalns fonā'
  },
  'ocean-cleanup': {
    problemTitle: 'Senā plastmasa, kas jau ir okeānā',
    fixTitle: 'The Ocean Cleanup',
    problem:
      'Plastmasa, kas jau sasniegusi subtropu virpuļus, vairs nav upes uzdevums. Tā sairst sīkākos gabalos, ko grūtāk savākt un vieglāk norīt savvaļai.',
    fix: 'The Ocean Cleanup, Nīderlandes bezpeļņas organizācija, velk peldošas sistēmas Lielajā Klusā okeāna atkritumu plankumā un arī vada upes Interceptor. Organizācija publicē savus izņemšanas kopsummas un 2040. gada mērķi; tie ir viņu skaitļi, ne neatkarīga skaitīšana. Tīrīšana jūrā ir lēna, atkarīga no laikapstākļiem un strīdīga piezvejas un mēroga dēļ. Tā neaizstāj noplūdes griešanu uz sauszemes.',
    imageAlt: 'The Ocean Cleanup System 001 peldošās barjeras shēma ar parakstītiem sensoriem un navigācijas moduliem'
  },
  interceptor: {
    problemTitle: 'Upes plastmasa ceļā uz jūru',
    fixTitle: 'Interceptor',
    problem:
      'Lielākā daļa okeāna plastmasas, ko vēl var noķert kā atpazīstamus atkritumus, atnāk pa upēm pēc lietus. Kad tā jau ir jūrā, vākšana ir grūtāka un dārgāka.',
    fix: 'The Ocean Cleanup Interceptor ir upes sistēmu saime — Original, Barrier, Tender, Barricade un Guard —, kas ar bumiem un, Original gadījumā, saules izcelšanu paceļ atkritumus pirms jūras. Izvietošana ir vietai specifiska; viens konstrukcija neder katrai upei. Interceptor ir ķērājs grīvā, nevis augšteces vākšanas vai mazākas plastmasas aizstājējs.',
    imageAlt: 'The Ocean Cleanup Interceptor Original kanālā, peldošs bums ved uz katamarāna korpusu'
  },
};

const copy: Record<Locale, Record<string, SolutionCopy>> = {
  en: { ...en, ...pack2.en },
  ru: { ...ru, ...pack2.ru },
  pl: { ...pl, ...pack2.pl },
  lv: { ...lv, ...pack2.lv },
};

export function getSolutions(locale: Locale): Solution[] {
  return solutionMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getLatestSolutions(locale: Locale): Solution[] {
  return getSolutions(locale).filter((solution) => solution.latest);
}
