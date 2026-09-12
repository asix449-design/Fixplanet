import type { GeoCopy } from '../data/terraforming';

export const en: Record<string, GeoCopy> = {
  'bradfield-scheme': {
    title: 'Bradfield Scheme',
    hook: 'A 1930s plan to pipe wet-tropics water into dry inland Australia. It was never built. Modern hydrology still says the water is less, and the bill is larger, than the dream.',
    imageAlt:
      'Aerial view of the Burdekin River in north Queensland — the wet-tropics catchment Bradfield wanted to tap, not a photograph of a built diversion',
    jurisdiction: 'Australia (Queensland / inland basins)',
    yearStatus: 'Proposed 1938 (revised 1941–42). Not constructed. Reassessed by CSIRO for the National Water Grid Authority (reports 2021).',
    plan: 'Engineer J. J. C. Bradfield proposed dams, tunnels and canals to take floodwater from north Queensland rivers (including the Tully, Herbert and Burdekin) over the Great Dividing Range and into inland catchments such as the Thomson–Barcoo / Cooper Creek system. The political pitch was drought-proof inland farms and, in some versions, more inland rain. Bradfield put a 1941 cost at up to £40 million — a figure later reviews treated as a severe underestimate.',
    construction:
      'Nothing matching the historic scheme was built. Pieces of ordinary Queensland water infrastructure exist in the same catchments; they are not Bradfield’s trans-basin canal. The idea returns in dry years. CSIRO’s desktop study of the 1938 scheme and the 1942 Hell’s Gates variant found both technically feasible on paper.',
    outcome:
      'CSIRO concluded that the maximum volume that could physically be diverted is less than half of what Bradfield claimed, and that storage-and-diversion costs would never be paid back by crop revenue even under optimistic assumptions. A 1945 Queensland meteorological committee had already said the hoped-for rainfall increase “could not be substantiated.” A 1947 review found water supply overstated by about 250 percent. Inter-basin transfer would turn ephemeral inland rivers perennial, favouring generalist and invasive species, and would move water from one community to another.',
    lessons:
      'A canal is not a climate. Drought politics revives megaprojects that hydrology and farm economics have already rejected. If inland water is the goal, CSIRO’s own recommendation is smaller developments closer to where the water falls — not a continent-scale pipe.',
    sourcesNote:
      'CSIRO Bradfield Scheme Assessment pages and the 2021 historic-scheme summary for the National Water Grid Authority; ABC News 2019 fact file on repeated official rejections.',
  },
  'toshka-new-valley': {
    title: 'Toshka / New Valley',
    hook: 'Pump Lake Nasser into the Western Desert and grow a second Nile valley. The pumps and the canal exist. The 1997 population-and-farm dream does not.',
    imageAlt:
      'ISS photograph of the Toshka Lakes west of Lake Nasser — overflow basins, not a finished New Valley city',
    jurisdiction: 'Egypt (Western Desert / Lake Nasser)',
    yearStatus:
      'Launched 1997 as the South Valley / Toshka scheme. Pumping station and Sheikh Zayed Canal built. Work stalled about 2008; revived from 2020. Status: partial.',
    plan: 'Hosni Mubarak’s government announced a scheme to pump Nile water from Lake Nasser through a new canal (Sheikh Zayed) and irrigate about 540,000 feddans (about 227,000 hectares) of desert, supporting a new community of some three million people by 2017. The Mubarak Pumping Station was designed for on the order of 25 million cubic metres a day. Private concessions, including a large Kingdom Agricultural Development Company holding, were meant to do the farming.',
    construction:
      'The pumping station and the main canal were built. Spill from Lake Nasser also filled the Toshka overflow lakes in wet years — a hydrologic side-effect, not the farm plan. Independent reporting around 2008–2010 found only a small fraction of the advertised area actually cultivated (one ministry figure cited about 147 square kilometres). Work stopped in 2008. Abdel Fattah el-Sisi’s government restarted land reclamation in 2020; official 2021 figures claimed about 85,000 of a 100,000-feddan first phase.',
    outcome:
      'Infrastructure outran settlement. High evaporation, poor soils, distance from markets, and Nile allocation politics limited farms. Later phases lean more on the Nubian Sandstone Aquifer as well as canal water. A 2023 modelling paper on Toshka wells found that a 102-well pumping regime could stay near a 25-metre century-scale drawdown limit under stated assumptions — a sustainability bound, not a licence to scale without monitoring. GRACE-based work reports multi-year storage loss in Egypt’s desert aquifers, including the Western Desert Nubian system.',
    lessons:
      'A pumping station is not a city. Desert reclamation can grow some crops and still miss the demographic promise. Groundwater next to a reservoir is not infinite; publish well fields and drawdowns, not only inauguration photos. Treat official feddan counts as claims until independent maps agree.',
    sourcesNote:
      'Ahram Online 2021 on the original 540,000-feddan target, 2008 stop and 2020 revival; Water 2023 Toshka groundwater model; Sultan et al. 2023 GRACE depletion over Egypt.',
  },
  'great-man-made-river': {
    title: 'Great Man-Made River',
    hook: 'The largest fossil-water pipeline ever built. It still drinks a desert that does not refill on a human clock — and it now runs at less than half of design.',
    imageAlt:
      'Concrete pipe sections of Libya’s Great Man-Made River stacked in the desert — the built transfer, not a renewable river',
    jurisdiction: 'Libya',
    yearStatus: 'Construction from 1983; first water to Benghazi 1991, later phases through the 2000s. Operating, below design. Status: built and struggling.',
    plan: 'Muammar Gaddafi’s government set out to pump paleowater from southern well fields (Sarir, Tazerbo, Murzuq and related fossil systems, including parts of the Nubian Sandstone Aquifer) through prestressed concrete pipes to the coastal cities. The design story was enough water for cities and irrigation without desalination. Phases were meant to move on the order of millions of cubic metres a day when complete.',
    construction:
      'Hundreds of wells and more than a thousand kilometres of large-diameter pipe were laid. Water did reach Benghazi, Tripoli and other coastal demand centres. The civil engineering is real. So is the resource: most of the water is non-renewable storage, not rainfall this century.',
    outcome:
      'UNDP’s 2026 water-security work for Libya states that the Man-Made River now operates at less than half of planned capacity because of ageing pipes, power cuts and conflict damage. Desalination and wastewater plants are also far below nameplate. Agriculture still takes most of the water while adding little GDP. Localised aquifer drawdown is documented; the system is a finite transfer, not a new Nile.',
    lessons:
      'You can build a river of pipes. You cannot replenish a fossil aquifer on a political timetable. Maintenance, power and peace are as binding as geology. Pair any remaining abstraction with demand cuts, reuse, and honest desalination — and do not sell the pipes as eternal.',
    sourcesNote:
      'UNDP Libya National Water Security Strategy (2026); IGRAC Nubian Sandstone Aquifer System brief; FAO AQUASTAT country profiles for the groundwater context.',
  },
  'aral-sea-diversion': {
    title: 'Aral Sea diversions',
    hook: 'Cotton took the rivers. The world’s fourth-largest lake became a desert. The North Aral has a small, engineered second life. The south does not.',
    imageAlt:
      'NASA comparison of the Aral Sea in 1989 and 2014 — documented shrinkage, not an illustration',
    jurisdiction: 'Soviet Union, then Kazakhstan and Uzbekistan (Amu Darya / Syr Darya basin)',
    yearStatus:
      'Large-scale irrigation expansion from the 1960s. Collapse through the 1980s–2000s. Kokaral Dam 2005. Status: failed as a sea; partial northern recovery.',
    plan: 'Soviet planners diverted the Amu Darya and Syr Darya into desert irrigation — especially cotton — treating the Aral as a leftover. The goal was export fibre and new sovkhoz acreage, not a living sea. Inflow fell while evaporation continued.',
    construction:
      'Canals, including the Karakum Canal, and on-farm networks were built at continental scale. Efficiency was poor; a large share of river water never reached a root. The shoreline walked away from the ports of Aralsk and Moynaq within a generation. NASA time series show the lake splitting and the southern basin largely emptying.',
    outcome:
      'The Aral lost on the order of 90 percent of its water. Dust from the new Aralkum desert carries salt and residues. Fisheries collapsed. Kazakhstan, with World Bank support, finished the Kokaral Dam in 2005 to hold Syr Darya water in the North Aral: levels rose, salinity fell, and a smaller fishery returned (later reporting cites several thousand tonnes a year — a recovery, not the old industrial catch). The South Aral remains mostly dry. Full restoration of the 1960 sea is not on offer.',
    lessons:
      'A river is not surplus. Irrigation “losses” are someone else’s lake. Partial recovery is possible when one basin is walled off and inflows are defended — and it is still a smaller sea. Downstream dust and health in Karakalpakstan remain a cost of the original plan.',
    sourcesNote:
      'NASA Earth Observatory World of Change: Shrinking Aral Sea; World Bank Syr Darya Control and Northern Aral Sea Project; 2026 reporting on North Aral water volume and southern dust.',
  },
  'qattara-depression': {
    title: 'Qattara Depression proposals',
    hook: 'Flood a below-sea-level desert with the Mediterranean and make hydropower from the fall. Egypt studied it for a century and, in 2026, formally said no.',
    imageAlt:
      'The Qattara Depression in Egypt’s Western Desert — the empty basin the seawater schemes wanted to flood, not a reservoir',
    jurisdiction: 'Egypt (Matruh / Western Desert)',
    yearStatus:
      'Ideas from the early twentieth century; German-backed feasibility work in the 1970s (including nuclear-excavation talk). Ministerial committee from 2016. Seawater scheme rejected May 2026. Status: proposed — never built.',
    plan: 'The Qattara Depression sits more than 100 metres below sea level. Proposals would cut a canal or tunnel from the Mediterranean, drop seawater into the basin, generate power, and hold a large salt lake whose evaporation would keep a hydraulic head. Some versions added industry near El Alamein or talk of climate and settlement. Nature reported the idea seriously in 1975, including the nuclear-excavation variant.',
    construction:
      'No canal was dug. No lake was filled. The project stayed on paper while Aswan, Toshka and ordinary desert oilfields were real. A 2016 ministerial committee compared development options, including “dry” uses that do not flood the basin.',
    outcome:
      'In May 2026 the cabinet announced that seawater flooding is economically unviable next to solar and wind, and environmentally dangerous: saltwater seepage into aquifers and Siwa’s freshwater, higher soil salinity, damage to desert habitat, and interference with Western Desert oil and gas. The preferred path is development that leaves the depression dry.',
    lessons:
      'A contour on a map is not a power plant. Inland seas concentrate salt. Aquifers and petroleum fields are also “uses” of a depression. After a century of sketches, a formal no is a result — file it as rejected, not as delayed destiny.',
    sourcesNote:
      'Ahram Online 2026 cabinet decision; Nature 255, 570–571 (1975) on the mid-century scheme and its side effects.',
  },
  'south-north-water-transfer': {
    title: 'South–North Water Transfer',
    hook: 'The largest inter-basin transfer now running. Two routes move Yangtze water north. The western mountain route is still a plan. The social and ecological bill is not a rumour.',
    imageAlt:
      'The central route of China’s South–North Water Transfer at Jiaozuo — operating canal, not the unbuilt western tunnels',
    jurisdiction: 'People’s Republic of China',
    yearStatus:
      'Overall plan 2002. Eastern route phase 1 operating November 2013; middle route phase 1 December 2014. Western route still planning. Status: ongoing (partial).',
    plan: 'Mao-era talk became a three-route scheme: east along the Grand Canal with pumping; middle by gravity from an enlarged Danjiangkou Reservoir toward Beijing and Tianjin; west from upper Yangtze tributaries toward the Yellow River at high altitude. Design talk for a completed system is on the order of 40-plus cubic kilometres a year — a target, not a present fact.',
    construction:
      'The eastern and middle first phases were built: more than a thousand kilometres each, pumping stations on the east, a raised Danjiangkou dam on the middle. Water has been delivered to Beijing, Tianjin, Henan, Hebei, Jiangsu and Shandong. Published displacement for the middle-route reservoir and canals is on the order of 330,000–375,000 people. Official construction cost figures differ by source (tens of billions of U.S. dollars for the finished eastern and middle works).',
    outcome:
      'North China cities drink Yangtze water. That is a real operational result. Pollution on the eastern route, reduced downstream Yangtze flow, groundwater and wetland changes, and the human cost of resettlement are documented in the engineering and review literature. The western route remains unbuilt after decades of surveys; 2023 official comments still described planning consensus, not excavation.',
    lessons:
      'A transfer can relieve a city and still be a displacement machine. Moving water is not the same as using less of it. Leave the western tunnels in the “not built” column until they are. Do not treat an operating canal as proof that every future diversion is wise.',
    sourcesNote:
      'Zhang 2016 Engineering review (east 15 Nov 2013; middle 12 Dec 2014); Water 17:3275 (2025) on costs and displacement; China Daily 2023 on the unbuilt western route.',
  },
  'siberian-river-reversal': {
    title: 'Siberian river reversal',
    hook: 'Turn the Ob and Yenisey south, refill Central Asia, tame the sukhovei. The Politburo killed the drawings in 1986. No canal was dug.',
    imageAlt:
      'The Ob River in western Siberia — the Arctic-bound water the Sibaral schemes wanted to turn south, not a diversion canal',
    jurisdiction: 'Soviet Union (West Siberia / Kazakhstan / Central Asia)',
    yearStatus:
      'Davydov-type schemes from 1949; design work in the 1970s–80s (Sibaral and European variants). Halted by Central Committee and Council of Ministers, 14 August 1986. Status: proposed — cancelled.',
    plan: 'Successive plans would take part of the Ob, Irtysh and sometimes Yenisey — rivers that run to the Arctic — across the Turgay Gate toward the Aral and Caspian, to irrigate Kazakhstan and Central Asia, “stabilize” inland seas, and soften dry winds. M. M. Davydov’s late-Stalin version was openly a “transformation of nature” project. Later Soyuzvodproyekt variants were smaller and still continental.',
    construction:
      'Surveys, institutes and newspaper wars. Not a completed reversal canal. Cost talk in the 1980s ran to tens of billions of rubles or, in Western wires, about $40 billion. Chernobyl and a rare public environmental fight landed on the same decade.',
    outcome:
      'On 14–15 August 1986 TASS reported the Politburo halt: more study of ecology and economics, work stopped. Scientists had warned of Arctic and Siberian side effects that no one could run as a pilot. The Aral continued to die by other canals. Occasional post-Soviet revivals remain proposals.',
    lessons:
      'Cancelling a drawing can be the honest engineering decision. Continent-scale climate tinkering via river capture has no prototype. The Aral’s actual failure mode was ordinary irrigation, not a missing Siberian tap.',
    sourcesNote:
      'UPI 15 August 1986 on the Politburo halt; Ward 2013 on Sibaral’s life and death; Davydov 1949/1972 translation of the Yenisey–Ob–Aral–Caspian scheme.',
  },
  'jonglei-canal': {
    title: 'Jonglei Canal',
    hook: 'Bypass the Sudd so more White Nile water reaches Sudan and Egypt. About two-thirds of the cut was dug. War stopped the machine. The wetland is still there.',
    imageAlt:
      'Fishing in the Sudd wetland, South Sudan — the swamp the canal was meant to shortcut, not a photograph of the unfinished cut',
    jurisdiction: 'Sudan, then South Sudan (with Egyptian interest)',
    yearStatus:
      'British-era ideas from the 1900s; studies 1946 and 1954–59. Construction 1978–1984. About 240 km of ~360 km excavated. Status: failed / incomplete.',
    plan: 'A canal from near Bor toward the White Nile below the Sudd would reduce evaporation in one of Africa’s largest wetlands and send on the order of several extra cubic kilometres a year downstream. Egypt and Khartoum wanted irrigation water. Local pastoral and fishing economies live on the flood.',
    construction:
      'Excavation began in 1978 with a giant German-built bucket-wheel machine. By 1984 the SPLA had halted the works; later accounts say the machine was attacked and left in the cut. Roughly 240 kilometres of a planned 360 were dug. The unfinished trench is still visible. South Sudan’s independence in 2011 removed Khartoum from the ditch.',
    outcome:
      'No completed canal, no measured extra Nile delivery from Jonglei. Periodic revival talk (feasibility studies, flood-control reframes) meets local opposition; AP reported a 2022 petition against restarting. Presidency officials have also said there is no plan to resume the old project. Hydrology papers still treat Sudd evaporation as large — that is a water account, not a permit to drain a Ramsar-scale wetland.',
    lessons:
      'A canal that ignores the people in the swamp will be fought as politics, not only as hydrology. “Lost” evaporation is someone else’s fishery and pasture. An incomplete megacut is not a half-success; it is a scar and a live argument.',
    sourcesNote:
      'AP 2022 on the incomplete canal and opposition to revival; NASA Earth Observatory on the Sudd; Howell, Lock & Cobb (Cambridge, 1988) on the original scheme.',
  },
  'three-north-shelterbelt': {
    title: 'Three-North Shelterbelt',
    hook: 'The world’s largest afforestation programme. Satellites see greener patches. Wells and poplar graveyards see the other half of the story.',
    imageAlt:
      'Tree planting on the edge of the Kubuqi Desert in Inner Mongolia — one landscape inside the Three-North belt, not a proof of nationwide survival rates',
    jurisdiction: 'People’s Republic of China (northeast, north, northwest)',
    yearStatus: 'Launched 1978; scheduled through 2050. Still planting and replanting. Status: ongoing, mixed results.',
    plan: 'A multi-decade “green wall” of shelterbelts against sandstorms and desertification across the Three Norths, later wrapped in carbon and “ecological civilisation” language. Fast-growing poplars were a workhorse species. Official area figures are programmatic targets and reported afforestation, not a single verified living forest.',
    construction:
      'Decades of state campaigns, local targets, and later ecological-engineering science. Some belts established. Remote sensing shows vegetation increase in parts of the programme region. That is not the same as a continuous wall of trees from Xinjiang to Heilongjiang.',
    outcome:
      'Turner et al. (2023) review the Three-North programme with other “great green walls”: mixed technical success; published survival often in a 40–60 percent range, worse in drier sites; wind-erosion benefits in some places; reduced soil moisture and falling water tables in others; social costs where planting enclosed pastoral land. Field studies document widespread Populus dieback in arid belts. Newer work (including 2024–2026 papers) still finds a tension between surface greening and groundwater.',
    lessons:
      'NDVI is not a forest. Monoculture poplars are a drought bet. A shelterbelt can cut sand and still mine the water table. Count surviving, useful cover — and who lost grazing — not only seedlings issued.',
    sourcesNote:
      'Turner, Davis & Barron, Annual Review of Environment and Resources 2023; Zheng et al. 2024 on the programme to 2022; Sun et al. 2018 on Populus simonii dieback.',
  },
  'africa-great-green-wall': {
    title: 'Great Green Wall (Africa)',
    hook: 'An 8,000-kilometre Sahel restoration idea. The “wall of trees” branding faded. The hectare maths, and the money, are still behind the 2030 slogan.',
    imageAlt:
      'ESA satellite view of desert agriculture and greening — the class of dryland mosaic the GGW now talks about, not a named 8,000 km tree wall',
    jurisdiction: 'African Union / Sahel and Sahara states (UNCCD-supported)',
    yearStatus:
      'AU initiative 2007. Mosaic-restoration reframing in the 2010s. 2030 targets: 100 million hectares, 250 Mt CO₂, 10 million jobs. Status: partial, off the 2030 pace.',
    plan: 'First sold as a belt of trees from Senegal to Djibouti. Practice shifted toward restoring mosaics of farms, grassland and woodland with local species and livelihoods. The 2030 package is land restored, carbon and jobs — not a single planted palisade.',
    construction:
      'National programmes differ. Ethiopia reports large seedling numbers; Senegal has better-documented plots; several states have thin monitoring. The UNCCD’s 2020 status report put restored area on the order of 4 million hectares (about 4 percent of the 100 million target) with uneven survival data. A 2021 “Accelerator” pledged new finance; disbursement lagged pledges.',
    outcome:
      'In June 2024 the president of the previous UN desertification COP told Reuters that about 30 million hectares had been restored — 30 percent of the 2030 goal — and that the deadline would be missed. Survival rates are still poorly and inconsistently monitored outside a few countries. Three million jobs have been claimed in later briefings; treat jobs and hectares as programme figures, not a field census.',
    lessons:
      'A wall was the wrong metaphor for a rainfall gradient. Restoration that pays local users lasts longer than ceremonial planting. Do not equate “hectares reported” with “trees alive in 2030.” Finance that is pledged and not spent is not a canopy.',
    sourcesNote:
      'UNCCD 2020 implementation status; UNCCD GGW pages; Reuters 12 June 2024 on ~30 million ha and the missed 2030 path.',
  },
  'saudi-green-initiative': {
    title: 'Saudi Green Initiative',
    hook: 'Vision 2030’s tree-and-land programme. Officials now claim the first million hectares. That is not the old wheat circles — and it is not yet ten billion trees.',
    imageAlt:
      'Center-pivot irrigation circles in Saudi Arabia — the older groundwater-agriculture landscape, shown here as context, not as SGI tree-planting',
    jurisdiction: 'Saudi Arabia',
    yearStatus:
      'Announced 2021 under Vision 2030. Target: 10 billion trees / about 40 million hectares rehabilitated. Official early-2026 claim: 1 million ha and 159 million trees. Status: ongoing. Separate history: 1980s–2010s fossil-groundwater wheat.',
    plan: 'SGI is an afforestation, reserve and land-rehabilitation programme (plus a Middle East Green Initiative diplomacy track). It is not NEOM, not the Line, and not the old wheat-subsidy machine. The water story the state now tells is treated wastewater, dams and efficiency — because the Kingdom is one of the most water-scarce countries on Earth.',
    construction:
      'Planting and “rehabilitation” campaigns are underway via MEWA and the National Center for Vegetation Cover. Officials said rehabilitated area moved from 18,000 hectares at the start to 250,000 by 2024 and 1 million in early 2026, with 159 million trees planted. Those are government and SPA figures, not a third-party stem count. A 2030 waypoint of 2.5 million hectares has been mentioned.',
    outcome:
      'If the official million hectares holds under audit, it is 2.5 percent of the 40-million-hectare slogan — a start, not a completed greening of Arabia. Independent literature still stresses the older, better-measured story: decades of wheat grown on non-renewable aquifers, later scaled back (including a mid-2010s wheat phase-down) because the water did not return. Desalination mainly serves cities; it does not make cereal irrigation cheap. SGI’s own tree-water demand is a live research question (KAPSARC and others).',
    lessons:
      'Keep the programmes apart: SGI ≠ pivot-circle wheat ≠ NEOM. Believe planted-and-surviving numbers when plots are public. A desert can host parks and still have a mined aquifer underneath. Ten billion trees is a target. One million hectares, if real, is a first increment.',
    sourcesNote:
      'SGI official site; MEWA/SPA 2026 milestone claim; KAPSARC on agricultural water and SGI demand; FAO AQUASTAT for the groundwater and wheat context. Pivot-circle photo is historical irrigation, labelled as such.',
  },
  'loess-plateau-rehabilitation': {
    title: 'Loess Plateau rehabilitation',
    hook: 'World Bank–supported watershed work in China’s Loess Plateau (1990s–2000s): terraces, vegetation, grazing rules — erosion control and livelihoods, not a second “green wall” slogan.',
    imageAlt:
      'Terraced loess hills in Shanxi — the class of slope-to-terrace work the World Bank projects funded, not a proof that the whole plateau is greened',
    jurisdiction: 'People’s Republic of China (Shanxi, Shaanxi, Gansu, Inner Mongolia — Yellow River tributary watersheds)',
    yearStatus:
      'Phase I (P003608) launched October 1994, completed 2002. Phase II (P056216) approved May 1999, closed June 2005. Status: partial — the World Bank phases are closed; the plateau was not “finished.”',
    plan: 'The 2004 World Bank case study states a primary aim: raise agricultural production and incomes on 1,560,000 hectares in nine Yellow River tributary watersheds, in 21–22 poor counties of Shanxi, Shaanxi, Gansu and Inner Mongolia. A secondary aim was less sediment into the Yellow River. The package was terraces and small irrigation; trees, shrubs and orchards on slopes; grassland; sediment-control dams; village land-use plans; and — around the works — restrictions on free grazing of sheep and goats. Phase I was an IDA credit of US$150 million toward about US$250 million total (about US$160 per hectare in that paper). This is watershed rehabilitation, not a planted “green wall” from Xinjiang to the sea.',
    construction:
      'The same 2004 paper lists, as built: about 90,500 hectares of terraces; tens of thousands of hectares of trees, shrubs, economic trees and orchards; about 100,000 hectares of grassland; 149 key dams, 1,140 warping dams and 1,956 check dams; and about 7,100 hectares of irrigation, mostly in dry Inner Mongolia. Droughts forced replanting of some trees. Grazing bans spread from project plots to some surrounding counties — a policy shift the authors treat as a project effect, not a separate loan line. A second World Bank project (P056216) continued the same class of work and closed in 2005.',
    outcome:
      'The 2004 case study reports grain output in the project area from 427,000 to about 700,000 tons, fruit from 80,000 to 345,000 tons, farmer net income per capita from 360 to 1,263 yuan, and the share of people under the official poverty line from 59 percent (1993) to 27 percent (2001), with benefits claimed for more than 1.2 million farmers. Treat those as World Bank / project figures, not an independent field census. The Loess Plateau as a whole is about 640,000 km²; the Phase I project area was on the order of 15,500 km². Later national programmes kept working the plateau. They are not this loan, and they are not a finished greening.',
    lessons:
      'Terraces, contracts and grazing rules can raise yields and cut sediment in treated watersheds without being a slogan wall. Count surviving cover and who keeps the land — not seedlings issued. A closed World Bank project is not the end of Yellow River erosion. Do not file this card under Three-North or Africa’s Great Green Wall.',
    sourcesNote:
      'World Bank 2004 Shanghai case study PDF (Phase I results); World Bank project pages P003608 (1994–2002) and P056216 (approved 1999, closed 2005).',
  },
  'stratospheric-aerosol-injection': {
    title: 'Stratospheric aerosol injection',
    hook: 'Mimic a volcano, cool the planet. It exists as models, reviews and one cancelled balloon. It is not a deployed thermostat.',
    imageAlt:
      'The 1991 Pinatubo eruption plume — the natural aerosol pulse SAI papers analogise, not an SAI deployment',
    jurisdiction: 'Research community (no operational national deployment)',
    yearStatus:
      'Discussed since the 1990s (and earlier volcanic analogies). IPCC AR6 treats solar radiation modification as researched, not recommended as a substitute for cuts. Harvard SCoPEx cancelled March 2024. Status: research.',
    plan: 'Aircraft or balloons would put reflective particles (often sulfate, sometimes other materials) into the stratosphere to scatter sunlight. Pinatubo 1991 is the usual natural analogue: a temporary global cool, plus monsoon, ozone and precipitation side effects. The policy pitch is a brake while emissions fall. That pitch is a scenario, not a programme of record.',
    construction:
      'Almost all work is models, labs and paper. SCoPEx, a proposed small stratospheric plume experiment at Harvard, never released particles; a Sweden hardware test was stood down in 2021 after indigenous and civil-society opposition; the principal investigator ended the experiment in March 2024. Other groups continue modelling and governance debates. This is not a fleet.',
    outcome:
      'IPCC AR6: SRM could cool the globe in models and would not remove CO₂; regional precipitation and ozone effects are uncertain; termination shock is a risk if injections stop while greenhouse gases stay high; governance is thin. No country has a licensed planetary SAI programme. Presenting SAI as a ready fix is false.',
    lessons:
      'A volcano is a warning, not a user manual. Research is not deployment. Any outdoor test needs public consent that SCoPEx did not secure. Cut emissions first; do not file SAI under “solutions that already work.”',
    sourcesNote:
      'IPCC AR6 WG I on solar radiation modification; Harvard SCoPEx termination note; MIT Technology Review 18 March 2024.',
  },
  'ocean-fertilization': {
    title: 'Ocean iron fertilization',
    hook: 'Add iron, grow plankton, sink carbon. Small experiments grew green water. They did not prove a carbon vault — and a 2012 dump became a dumping case.',
    imageAlt:
      'NASA satellite view of a Southern Ocean phytoplankton bloom — a natural iron-rich bloom, not a named fertilization experiment',
    jurisdiction: 'High seas / London Convention and Protocol parties',
    yearStatus:
      'IronEx I 1993; later Southern Ocean trials including SOIREE and LOHAFEX (2009). Haida Salmon Restoration Corporation dump 2012. LC/LP assessment framework 2010; LP amendment 2013. Status: research (commercial use not allowed).',
    plan: 'John Martin’s iron hypothesis: in high-nutrient, low-chlorophyll waters, a little iron can trigger a bloom. If enough organic carbon sinks and stays out of the atmosphere, the ocean would take up CO₂. That is a testable biogeochemical idea, not a climate service.',
    construction:
      'Lawful scientific cruises fertilized patches of a few to tens of square kilometres and watched for weeks. Blooms often appeared. LOHAFEX (India–Germany, 2009) found higher net community production but not higher export flux out of the mixed layer in low-silicate water — grazing ate the bloom. In 2012 the Haida Salmon Restoration Corporation put about 100 tonnes of iron sulfate off western Canada; LC/LP parties stated grave concern. Commercial fertilization is not permitted; only assessed scientific research is.',
    outcome:
      'The experiments showed that iron can change surface ecology. They did not show a reliable, verifiable, long-lived carbon sink at climate scale. Side effects include shifted food webs, possible low-oxygen patches, and nutrients stolen from downstream waters. Credits sold on the back of a dump are not science.',
    lessons:
      'A green satellite swirl is not sequestered carbon. Export and residence time are the measurement. The legal default on the high seas is no. Keep this card on the research shelf.',
    sourcesNote:
      'Boyd & others on IronEx/SOIREE (Nature 2000); Martin et al. 2013 on LOHAFEX export.',
  },
  'marine-cloud-brightening': {
    title: 'Marine cloud brightening',
    hook: 'Spray sea salt into low ocean clouds so they reflect more sun. Ship tracks prove clouds notice pollution. That is not a planetary dimmer switch.',
    imageAlt:
      'MODIS image of ship tracks in Pacific stratocumulus — pollution brightening clouds, the analogue MCB studies, not an MCB fleet',
    jurisdiction: 'Research groups (Australia reef trials; U.S. university programme)',
    yearStatus:
      'Proposed by Latham (1990) and later reviews. Great Barrier Reef RRAP spray campaigns from 2020. University of Washington MCB Program ongoing; Alameda outdoor spray halted by the city in 2024. Status: research.',
    plan: 'Fine seawater droplets would raise cloud droplet numbers in marine stratocumulus, increasing albedo and, in theory, cooling locally or globally. Ship tracks are the accidental experiment: exhaust particles already brighten some decks of cloud. MCB would try to do that with salt, on purpose, at a chosen size.',
    construction:
      'No operational cooling fleet. Southern Cross University teams, under the Reef Restoration and Adaptation Program, have sprayed from ships on the Great Barrier Reef since 2020 to test nozzles and, later, airborne cloud physics — a shading research line, not a saved reef. The UW-led programme builds generators and models. In 2024 Alameda, California, stopped a mist trial on a decommissioned ship after the fact.',
    outcome:
      'Physics papers can show more, smaller droplets in a treated cloud. That is a microphysical result. It is not proof that MCB can be steered, verified, or kept from shifting rainfall. It does not cancel ocean acidification. IPCC-class assessments still treat SRM methods as research with governance gaps, not as mitigation.',
    lessons:
      'A ship track is a clue, not a climate policy. Local reef shading experiments must stay labelled experiments. Do not sell MCB as a way to keep emitting. If a city can shut a trial, you do not have a planetary technology — you have a contentious instrument.',
    sourcesNote:
      'Latham et al. 2012 Philosophical Transactions review; University of Washington MCB Program; RRAP Cooling and Shading programme pages.',
  },
};
