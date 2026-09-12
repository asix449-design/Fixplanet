import type { WaterEncyclopediaCopy, WaterEncyclopediaSlug } from '../data/solutions-water';

export const en: Record<WaterEncyclopediaSlug, WaterEncyclopediaCopy> = {
  'drip-irrigation': {
    title: 'Drip irrigation',
    hook: 'In dry regions most irrigation water never reaches the root: it evaporates or runs off. Drip lines deliver water at the root zone, so less is lost and yields can rise.',
    imageAlt: 'Young corn plant in dry soil watered by a black drip-irrigation line',
    what: [
      'Drip irrigation — also called trickle irrigation or microirrigation — is a way of watering crops through pipes and emitters that wet the root zone instead of the whole field. In dry regions most irrigation water never reaches the root: it evaporates or runs off. Drip lines deliver water at the root zone, so less is lost and yields can rise.',
      'The U.S. Geological Survey’s Water Science School treats drip as the most common form of microirrigation. Water runs through pipes with holes in them, buried or lying slightly above the ground next to the crop. Water slowly drips onto roots and stems. Unlike spray irrigation, very little is lost to the air, and the water can be directed only to the plants that need it.',
      'FAO’s irrigation-methods chapter describes drip as a low-pressure, frequent application of water through a network of laterals and emitters. It is ordinary farm kit, not a laboratory idea. The same family of hardware is used in orchards, vineyards, vegetables, and some field crops. Fertilizer can be injected with the water — fertigation — because the emitters already sit at the plant.',
    ],
    how: [
      'A typical system has a pump or gravity head, filtration, a main and laterals, and emitters rated in litres per hour. Filters matter: grit and algae clog small orifices. Pressure must stay in a narrow band so the first emitter and the last one deliver similar amounts. On a slope the designer uses pressure-compensating emitters or breaks the line into zones.',
      'USGS notes the usual advantages when the system is managed properly: water and soluble fertilizer go to individual plants, only a fraction of the soil surface is wetted, and labour can fall. Microirrigation can water sloping or irregular land that cannot be flood-irrigated. It is a low-pressure, low-volume method often used on high-value fruit and vegetables. It is not magic pipe: a clogged emitter is a dry plant, and a leaky main is a wasted well.',
    ],
    where: [
      'Israel made drip a national irrigation method. From the 1960s onward, farms there replaced much flood and sprinkler water with laterals and emitters in orchards, vegetables, and field crops. The same hardware later spread through the Mediterranean, California, India, China, and other dry farming regions. FAO’s drip chapter is written for that worldwide use, not for one country.',
      'In the United States, USGS water-use estimates for 2015 put irrigation withdrawals at about 118,000 million gallons a day. About 63,500 thousand acres were irrigated that year; of those, about 5,490 thousand acres used drip or microirrigation. That is a real share, not the majority. Flood and sprinkler still water most U.S. irrigated land. Drip is common where water is dear and the crop can pay for tubing.',
    ],
    limits: [
      'Drip does not make a new river. It cuts the water that never reached the plant. If the “saved” water is used to expand the irrigated area — the rebound effect — the basin can be as dry as before. A more efficient farm is not automatically a wetter aquifer.',
      'Emitters clog. Cheap tape tears. Plastic laterals become waste. The method needs filtration, flushing, and someone who walks the line. It does not treat saline irrigation water, and it does not replace a right to the well. Treat drip as a way to put a known volume at the root — not as a licence to plant more desert.',
    ],
  },
  'constructed-wetlands': {
    title: 'Constructed wetlands',
    hook: 'Nutrients and sewage in rivers feed algal blooms that starve fish of oxygen. Constructed wetlands treat water as a living filter — reeds, microbes, and shallow flow.',
    imageAlt: 'Constructed wetland with reeds, clear shallow water, and a wooden boardwalk',
    what: [
      'A constructed wetland is a built shallow basin planted with wetland vegetation and used to treat wastewater, stormwater, or agricultural runoff. It is not a restored wild marsh, and it is not a concrete tank. The U.S. Environmental Protection Agency describes constructed wetlands as treatment systems that use natural processes involving wetland plants, soils, and associated microbial assemblages to improve water quality.',
      'Nutrients and sewage in rivers feed algal blooms that starve fish of oxygen. Constructed wetlands treat water as a living filter — reeds, microbes, and shallow flow. EPA’s handbook is written for operators who already run these systems: free-water-surface wetlands, vegetated submerged-bed (horizontal subsurface-flow) wetlands, and related hybrids. The plants are a working crop of stems and roots, not landscaping.',
    ],
    how: [
      'In a free-water-surface wetland, water stands or moves slowly among emergent plants. Solids settle. Biofilms on stems and litter take up organic matter and some nitrogen. In a subsurface-flow bed, water stays under a gravel or sand media; roots and microbes work in the pores, and mosquitoes have less open water. Both types need a liner or tight soil if the site must not leak into groundwater, an inlet that spreads the flow, and an outlet that holds a set water level.',
      'EPA’s handbook walks through sizing, media, vegetation, and the pollutants these beds can and cannot take. They are good at settling solids and cutting biochemical oxygen demand when loaded as designed. Nitrogen and phosphorus removal depend on oxygen, residence time, plants, and harvest. Pathogens fall but are not guaranteed to drinking-water standards. Metals and some industrial wastes need a different plant.',
    ],
    where: [
      'Constructed wetlands are ordinary municipal and farm kit in the United States, Europe, China, and many other places. EPA’s wetlands pages and the 2000 handbook collect U.S. practice: small-community sewage, stormwater basins, acid-mine drainage, and agricultural runoff. Free-water-surface beds need more land; subsurface beds are used where open water is a nuisance or a climate problem.',
      'The same idea appears as reed beds after septic tanks, as polishing wetlands after a mechanical plant, and as treatment marshes on farm drains. They already run. They are not a new invention waiting for a pilot.',
    ],
    limits: [
      'Land area is the honest constraint. A wetland that treats a town’s sewage needs hectares, not a flower box. In winter, cold water slows the microbes. In summer, mosquitoes and odour appear if the water goes stagnant. Plants must be managed; a clogged bed is a failed filter.',
      'A constructed wetland does not replace a drinking-water plant, and it does not clean every industrial waste. It does not restore a lost estuary just because reeds are planted in a lined cell. Treat it as a living treatment process with a footprint — not as a wild wetland created by pouring effluent on a field.',
    ],
  },
  'membrane-desalination': {
    title: 'Reverse-osmosis desalination',
    hook: 'Cities can sit on a coast and still run dry. Reverse-osmosis plants push seawater through membranes and already supply cities in Israel, Spain, Australia, the Gulf, and California.',
    imageAlt: 'Perth Seawater Desalination Plant beside a fenced access road under a blue sky',
    what: [
      'Membrane desalination, usually reverse osmosis, forces saline water through a semi-permeable membrane. Salt and many other dissolved solids stay behind; fresher water comes out. Cities can sit on a coast and still run dry. Drought, overdrawn rivers, and growing demand hit drinking water first. Reverse-osmosis plants push seawater through membranes and already supply cities in Israel, Spain, Australia, the Gulf, and California.',
      'USGS’s Water Science School describes desalination as the process that turns saline water into fresh water. Ocean water is about 35,000 parts per million of dissolved salt. Reverse osmosis is one industrial method; distillation is the older one. USGS notes that current large-scale processes are expensive and energy-intensive. Pairing plants with wind or solar cuts the fossil power bill. The plants still use energy.',
    ],
    how: [
      'Intake water is screened and pretreated so silt and organisms do not foul the membranes. High-pressure pumps then push the feed against spiral-wound membrane elements. Fresh permeate is post-treated for corrosion control and disinfection. The leftover stream is brine — saltier than the sea — and must be diluted and discharged under a permit, or it harms the local marine life.',
      'Energy is the operating cost that does not go away. Recovery of pressure from the brine (energy-recovery devices) is standard on modern seawater trains. Brackish groundwater needs less pressure than ocean water. A plant is a factory: membranes age, intakes clog, and the product water is only as reliable as the power and the spare parts.',
    ],
    where: [
      'Water Corporation in Western Australia runs seawater reverse-osmosis plants as a climate-independent slice of Perth’s supply. The Perth Seawater Desalination Plant stands at Kwinana. The Southern Seawater Desalination Plant stands at Binningup. Both are named, operating works on the agency’s desalination pages — not proposals.',
      'USGS notes that more than 300 million people globally receive water from desalination plants (International Desalination Association figure on that page). North America’s largest, the Claude “Bud” Lewis Carlsbad plant near San Diego, is cited there at 50 million gallons a day. The world’s largest named on the same page is Jebel Ali in Dubai. Israel, Spain, and Gulf states run large seawater fleets. Those are municipal factories, not household stills.',
    ],
    limits: [
      'Brine must be diluted. An outfall that dumps a saltier plume on a shallow coast is a local marine problem. Intakes can kill larvae. Energy use is real even when the plant is paired with wind or solar: the electrons still have to arrive when the pumps run.',
      'Desalination is not a licence to waste freshwater inland. It does not refill an overdrawn aquifer a hundred kilometres from the coast. It does not make irrigation cheap. USGS is plain that cost and energy are why the world does not desalinate everything. Treat a coastal RO plant as a drought-proof municipal source with a brine and power bill — not as a planetary freshwater machine.',
    ],
  },
  'managed-aquifer-recharge': {
    title: 'Managed aquifer recharge',
    hook: 'Wells drop when cities and farms take groundwater faster than rain puts it back. Managed aquifer recharge puts treated water into basins and wells so the ground store refills.',
    imageAlt:
      'Pipes, a pump, and a labeled container at the Bolivar recycled-water aquifer storage and recovery trial in South Australia',
    what: [
      'Managed aquifer recharge (MAR) is the intentional putting of water into an aquifer for later use or for a barrier against seawater. Wells drop when cities and farms take groundwater faster than rain puts it back. Empty aquifers mean dry taps, sinking land, and no reserve in drought. MAR puts treated stormwater, river water, or recycled wastewater into basins and wells so the ground store refills.',
      'USGS Circular 1405 surveys artificial recharge as a water-management method: spreading basins, pits, and injection wells, with the geology deciding what works. It is not a new river. It is a way to store water that already exists — storm peaks, surplus river flows, or highly treated wastewater — in the pore space underground instead of in a surface reservoir that evaporates.',
    ],
    how: [
      'Spreading basins soak water through unsaturated soil into the water table. Injection or aquifer-storage-and-recovery wells push water into a confined or semi-confined layer and pull it back later. The water must be clean enough for the receiving aquifer and for the use that will follow. Clogging of basins and well screens is the usual operational fight: silt, algae, and bubbles seal the pores.',
      'Indirect potable reuse pairs advanced treatment with recharge. Orange County’s Groundwater Replenishment System takes highly treated wastewater that would have gone to the Pacific and purifies it by microfiltration, reverse osmosis, and ultraviolet light with hydrogen peroxide. The product is put into the basin through spreading and injection. It meets drinking-water standards before it is stored. Years of monitoring sit on top of the pipes.',
    ],
    where: [
      'Orange County Water District’s GWRS is the world’s largest purification system for indirect potable reuse. The district states about 130 million gallons of water a day, serving on the order of a million people, and a share of local demand. It has run since January 2008 as a joint project with the Orange County Sanitation District. NGWA’s case study sits beside the district’s own GWRS page.',
      'Water Corporation’s groundwater-replenishment scheme in Perth recycles treated wastewater into the Gnangara groundwater system after advanced treatment. Central Arizona Project’s recharge programme stores Colorado River water in underground sites for later recovery. The pictured Bolivar site on the Adelaide Plains was a CSIRO recycled-water aquifer storage-and-recovery trial of the same class.',
    ],
    limits: [
      'MAR needs clean source water, the right geology, and years of monitoring. A clay layer can block a basin. A fractured rock can send injected water somewhere you did not plan. Recovery is never one hundred percent. If the source water is dirty, you have built a contamination project.',
      'It is not a new river. It does not create rainfall. It cannot outrun a basin that is still being pumped faster than it is recharged. Treat MAR as a store and a barrier — Orange County also uses it against seawater intrusion — not as a substitute for using less or for catching rain.',
    ],
  },
  'rainwater-harvesting': {
    title: 'Rainwater harvesting',
    hook: 'Houses and public buildings shed rain into gutters while wells and tankers struggle. WHO treats rooftop collection and covered storage as a household water source that still needs care.',
    imageAlt: 'A covered masonry rainwater cistern standing in dry ground in India',
    what: [
      'Rainwater harvesting is the collection of rain from a roof or other catchment into a store that people then use. Houses and public buildings shed rain into gutters while wells and tankers struggle. In many towns the roof is the nearest catchment, but open barrels breed mosquitoes and dirty first-flush water.',
      'WHO’s sanitary-inspection advice treats rooftop collection and covered storage as a household water source. It is ordinary in dry and monsoon climates. The Guidelines for drinking-water quality set the health frame: rain as it falls is relatively clean, but the roof, the gutter, the first flush, and the tank decide what people drink. This page is that method — not a dam and not a new river.',
    ],
    how: [
      'A roof (metal is easier to keep clean than thatch) sheds to gutters. A first-flush diverter throws away the first dirty minutes — bird droppings, dust, and dissolved material from the roof. A screened inlet keeps mosquitoes and debris out of a closed tank. A tap above the sludge layer draws water. Regular cleaning of gutters and the tank is part of the system, not an optional extra.',
      'WHO’s rainwater advice sheet is a sanitary inspection package: look for cracks, uncovered openings, first-flush neglect, and tanks that share space with animals or waste. The Guidelines treat household rainwater as a drinking-water supply that needs the same honesty as a well: if you cannot keep the store closed and clean, you have built a breeding site, not a tap.',
    ],
    where: [
      'Rooftop tanks are ordinary household kit across India, Australia, the Caribbean, East Africa, and many monsoon and dryland towns. Public buildings — schools, clinics — use larger cisterns on the same logic. Some cities require new houses to include a tank. The method is old. WHO writes about it because people already drink from it.',
      'Yield follows the roof area and the rain. A 100-square-metre roof in a 600-millimetre year can theoretically catch 60 cubic metres if nothing is lost; real systems lose first flush, overflow, and dirty events. That arithmetic is a ceiling, not a promise. A tanker still comes when the sky does not.',
    ],
    limits: [
      'It is not a new river: yield follows the roof and the rain, and poorly kept stores can make people sick. A dry season empties the tank. A dirty roof fills it with contamination. Open barrels breed Aedes mosquitoes. First-flush that is never dumped is a slogan.',
      'Rainwater harvesting does not replace a municipal treatment plant for a city, and it does not refill a regional aquifer. WHO’s drinking-water guidelines exist because household stores fail in ordinary ways. Treat the cistern as a local catchment with a lid — not as climate-proof supply.',
    ],
  },
  'newater-reclaimed-wastewater': {
    title: 'Reclaimed wastewater / NEWater',
    hook: 'Singapore’s PUB recycles treated used water through membranes and ultraviolet light. Four plants are in operation. Most of the water goes to industry; in dry periods some is blended into reservoirs.',
    imageAlt: 'Blue microfiltration vessels and pipes labeled Microfiltration System at Bedok NEWater Factory',
    what: [
      'NEWater is Singapore’s name for high-grade reclaimed water: treated used water put through membranes and disinfection until it is ultra-clean. A dense city can use more freshwater than its reservoirs and imports can reliably supply. Treated used water is then discarded to the sea while taps stay at risk in drought.',
      'Singapore’s PUB recycles treated used water through micro- or ultrafiltration (or a membrane bioreactor), reverse osmosis, and ultraviolet disinfection — branded NEWater. PUB says four plants are in operation. Most of the water goes to industry and cooling; in dry periods some is blended into reservoirs and treated again before it becomes tap water. Reuse needs tight treatment and public trust.',
    ],
    how: [
      'PUB describes a three-stage process. Stage one is microfiltration or ultrafiltration — or a membrane bioreactor that combines biological treatment and those membranes in one step — to take out particles and bacteria. Stage two is reverse osmosis: a tight membrane that lets water through and holds back viruses, salts, metals, and many organic chemicals. Stage three is ultraviolet disinfection as a last safety step.',
      'Indirect potable use means NEWater is added to raw-water reservoirs in dry periods. The blend then goes through conventional waterworks before the tap. Direct industrial use goes through a dedicated pipe network. Wafer-fabrication plants are the largest users; they need water cleaner than drinking water. The visitor-facing story is on PUB’s NEWater and Our Water Story pages.',
    ],
    where: [
      'PUB’s public account: a 1970s feasibility study found reclamation technically possible but then too costly. Membrane costs fell. In 1998 PUB tested membranes for potable reuse; a demonstration plant in 2000 made 10,000 cubic metres a day. Experts judged the water within WHO and U.S. EPA drinking-water requirements and recommended indirect potable use. NEWater was launched to the public on 9 August 2002. The first two plants, Bedok and Kranji, opened the following year.',
      'PUB says there are currently four NEWater plants in operation. They are a named pillar of Singapore’s water loop — local catchment, imported water, NEWater, and desalination — on the Our Water Story page. The Bedok factory and visitor centre later closed (31 July 2024 on PUB’s page); the four-plant figure is PUB’s current operational claim. This page does not invent a fifth plant.',
    ],
    limits: [
      'Reuse needs tight treatment and public trust. It does not make a city independent of catching rain or using less. If the used-water collection network fails, the plant has nothing clean to feed. Reverse osmosis still makes a concentrate that must be managed. Power must arrive every hour the trains run.',
      'NEWater is not a licence to grow demand without a catchment. It is not a household filter. It is a municipal factory with audits, membranes, and a political story that had to be told in public — including the 2002 National Day Parade toast — because people will not drink what they do not trust.',
    ],
  },
  'fog-harvesting': {
    title: 'Fog harvesting',
    hook: 'High, dry coasts and ridges can sit in frequent fog while groundwater stays out of reach. Large mesh collectors intercept fog droplets. They are a ridge technology, not a city supply.',
    imageAlt:
      'A rectangular mesh fog collector on a dry ridge at Alto Patache, Chile, with people standing beside it above the cloud layer',
    what: [
      'Fog harvesting intercepts fog droplets on a mesh and drains the water into a tank. High, dry coasts and ridges can sit in frequent fog while groundwater and piped water stay out of reach. The moisture is in the air, not in a river. Large mesh collectors intercept fog droplets.',
      'FogQuest, a charity founded in 2000, helped build collectors in places such as Tojquia in Guatemala, Chile’s Atacama sites, and Falda Verde; it now mainly mentors new projects and notes that its project pages are no longer kept current. The 2012 AMBIO review (Klemm and others), hosted as a PDF on FogQuest’s site, surveys fog as a freshwater resource: yield, mesh, and climate. A 2021 Frontiers in Water paper reviews the same family of collectors.',
    ],
    how: [
      'A typical large collector is a rectangular mesh panel stretched between posts, standing across the prevailing wind on a ridge that sits in cloud. Droplets collide with the fibres, join, and run to a gutter. Yield is measured in litres per square metre of mesh per day and depends on fog-water content, wind speed, mesh type, and how many fog hours the ridge actually has.',
      'The method needs a site with frequent advection fog — a coastal or mountain cloud that moves through the panel — not a still valley mist. Collectors need local upkeep: torn mesh, stolen wire, and clogged gutters end the yield. Storage and a clean tap are part of the project. A panel without a tank is a science photograph.',
    ],
    where: [
      'Named FogQuest and related sites include Tojquia in Guatemala, Chile’s Atacama collectors (the photograph on this card is Alto Patache), and Falda Verde. The same idea has been tried on other dry fog coasts and high villages. AMBIO 2012 and the 2021 Frontiers review collect those experiments; they are village and research installations, not municipal plants.',
      'FogQuest’s current-projects page is the charity’s own index. The organisation says those pages are no longer kept current and that its role is now mainly mentoring. This encyclopedia follows that honesty: the places are real; the yield is local and seasonal; the website is not a live operations dashboard.',
    ],
    limits: [
      'Yield depends on wind, mesh, and fog days. Collectors need local upkeep. They are a ridge technology, not a city supply. A capital city cannot drink from a row of meshes. When the fog season ends, the tank is what you stored.',
      'Fog harvesting does not replace a well, a pipeline, or a desalination plant. It does not work on a calm, fog-free plain. Stolen or torn mesh is a failed project. Treat it as drinking water for a high village that already lives in the cloud — not as a climate adaptation for everyone.',
    ],
  },
  'constructed-floating-wetlands': {
    title: 'Constructed floating wetlands',
    hook: 'Stormwater basins and wastewater lagoons collect nutrients and algae. Floating pontoon modules hang plant roots in the water. CSIRO is piloting them at Cowes and Salisbury.',
    imageAlt:
      'Sengkang Floating Wetland in Singapore: a planted mid-channel strip in a reservoir, with a bridge and high-rises beyond',
    what: [
      'Constructed floating wetlands are pontoon modules whose plant roots hang in the water, hosting biofilms that take up nutrients and trap particles. Stormwater basins and wastewater lagoons collect nutrients and algae. A land-based wetland needs space and changes flood storage. Many existing ponds have neither.',
      'CSIRO describes them as a recent retrofit for stormwater and wastewater. Queensland’s WetlandInfo design summary treats floating wetlands as a treatment-system option: a planted raft, a mooring, and a harvest plan. The photograph on this card is Singapore’s Sengkang Floating Wetland — a planted mid-channel strip — which shows the same class of floating planted structure, not the Australian pilots themselves.',
    ],
    how: [
      'A buoyant frame holds a growing media and wetland plants. Roots and hanging biomass extend into the water column. Microbes on those surfaces take up nitrogen and some phosphorus and trap fine particles. The raft is moored so it does not block outlets or become a navigation hazard. Water still flows under and around the module; the pond remains a pond.',
      'WetlandInfo’s design summary stresses sizing, plant choice, mooring, and maintenance. Plants must be harvested or they return what they stored when they die and rot. Modules clog with litter. Birds and people walk on poorly built rafts. The treatment is only as good as the contact time and the harvest.',
    ],
    where: [
      'CSIRO is piloting systems on a lagoon at Cowes, Phillip Island, and on an urban channel in Salisbury, South Australia. Those are named research and demonstration sites, not a national retrofit programme. WetlandInfo publishes design guidance for agricultural and stormwater treatment in Queensland.',
      'Floating planted islands also appear in urban reservoirs and parks — Sengkang in Singapore is the image on the card — as landscape and some treatment. This page does not treat a park island as proof that a city’s sewage is solved. The CSIRO pilots are the sourced Australian deployments this encyclopedia follows.',
    ],
    limits: [
      'They are pilots, not a replacement for a treatment plant, and plants must be harvested or they return what they stored. A floating wetland does not add the land area of a full constructed wetland, and that is the point — but it also cannot match a properly sized land bed or a mechanical plant on a high load.',
      'It does not fix a catchment that keeps sending nutrients. It does not turn a sewage lagoon into drinking water. Mooring fails in floods. Treat floating wetlands as a retrofit for a pond you already have — Cowes and Salisbury are the named trials — not as a city water supply.',
    ],
  },
  'solar-still': {
    title: 'Solar still / passive solar desalination',
    hook: 'A solar still evaporates saline water under a transparent cover and condenses the vapour as freshwater. The 2020 MIT–Shanghai Jiao Tong device is a research prototype, not a municipal plant.',
    imageAlt: 'A rooftop solar still in Cairo with an insulated duct loop around a dark evaporator box',
    what: [
      'A solar still evaporates saline water under a transparent cover and condenses the vapour as freshwater — an old, small-scale method. Coastal and island households can have seawater and sunlight but no power for a reverse-osmosis plant. Hauling or boiling water is the daily fallback.',
      'USGS’s desalination page uses a portable inflatable solar still as the teaching picture: evaporation and condensation, the same process as rain. Distillation is one of the oldest water treatments. It is not reverse osmosis. It needs sun and area. It does not need a high-pressure pump.',
    ],
    how: [
      'Sunlight heats a dark tray of saline water. Vapour rises, hits a cooler transparent cover, condenses, and runs to a trough. A simple pit still — a sheet over a hole with a cup in the middle — is the survival version USGS also describes. Output follows the sun and the area of the evaporator.',
      'In 2020 MIT and Shanghai Jiao Tong University demonstrated a multi-stage passive still on an MIT rooftop that reused condensation heat between layers. MIT News (6–7 February 2020) reported a 10-stage proof-of-concept that delivered 5.78 litres per square metre of collecting area — more than 1.5 gallons per hour per square metre in the team’s equivalent rate — and water that exceeded city drinking-water standards. The paper is in Energy & Environmental Science. That work is a research prototype, not a municipal plant.',
    ],
    where: [
      'Simple stills appear on boats, in survival kits, and as household or village experiments wherever sun and saline water meet and the grid does not. USGS teaches the method as distillation anyone can picture. The Cairo rooftop still in the card photograph is that everyday class of device — a box and a cover — not the MIT stack.',
      'The MIT–SJTU 2020 still was tested on an MIT building rooftop. The team included researchers at Shanghai Jiao Tong University. They described a possible floating or household configuration and estimated that about one square metre could meet one person’s daily drinking need in their framework. That is a lab estimate, not a city contract.',
    ],
    limits: [
      'Still output follows sun and area; it does not replace membrane desalination for a city. Night, cloud, and a small roof mean a small bottle. A municipal reverse-osmosis plant is a different machine: pressure, membranes, brine outfalls, and megawatt pumps. Do not advertise a rooftop prototype as Perth or Carlsbad.',
      'Stills are not municipal. They do not irrigate a farm. Salt and scale still accumulate in many tray designs; the MIT team argued their wicking configuration could shed salt at night, which is a research claim to watch, not a finished product. Treat the solar still as off-grid drinking water under a clear sky — not as a substitute for a desalination works.',
    ],
  },
};
