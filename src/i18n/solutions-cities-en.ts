import type { CitiesDetailCopy, CitiesEncyclopediaSlug, CitiesMobilitySlug } from '../data/solutions-cities';
import type { SolutionCopy } from '../data/solutions';

const brtPdf =
  'https://itdp.org/wp-content/uploads/2024/03/ITDP_BRTSTANDARD_APR2024_SINGLE-compressed.pdf';
const walkPdf =
  'https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/12/improving-the-quality-of-walking-and-cycling-in-cities_2fd6b6ec/cdeb3fe8-en.pdf';
const roadPdf =
  'https://documents1.worldbank.org/curated/en/099031724120560318/pdf/P1766281e0163d01218640121bea8238a86.pdf';
const findZone = {
  label: 'Find a zone',
  url: 'https://urbanaccessregulations.eu/low-emission-zones-main',
};

export const grid: Record<CitiesMobilitySlug, SolutionCopy> = {
  'bus-rapid-transit': {
    problemTitle: 'Buses stuck in the same traffic as cars',
    fixTitle: 'Bus rapid transit',
    problem: 'Buses stuck in the same traffic as cars',
    fix: 'Bus rapid transit (BRT) gives buses their own lanes, level boarding and frequent service, so an ordinary route runs almost like a metro line at a fraction of the cost of rail. An international scoring guide rates each corridor as basic, bronze, silver or gold.',
    imageAlt:
      'Posta station on the bus rapid transit line in Dar es Salaam, with platforms beside lanes reserved for the buses',
    sourceLabel: 'ITDP, The BRT Standard',
  },
  'walking-and-cycling-networks': {
    problemTitle: 'Cities that treat walking and cycling as leftover space',
    fixTitle: 'Walking and cycling networks',
    problem: 'Cities that treat walking and cycling as leftover space',
    fix: 'Continuous, safe routes for people on foot and by bike, joined up at every junction, so short trips stop needing a car. Advice from the International Transport Forum puts the quality and safety of walking and cycling first, ahead of raw trip counts.',
    imageAlt:
      'Cyclists crossing the junction at Holmens Kanal in Copenhagen on a blue-painted cycle crossing',
    sourceLabel: 'OECD / ITF, Improving the Quality of Walking and Cycling in Cities',
  },
  'congestion-charging': {
    problemTitle: 'Free entry into jammed streets slows every trip',
    fixTitle: 'Congestion charging',
    problem: 'Free entry into jammed streets slows every trip',
    fix: 'Drivers pay to use the busiest streets at the busiest times, which shortens queues and raises money for public transport. London, Stockholm and Singapore have run such charges for years. A World Bank review treats them as a way to manage how people travel as well as a source of revenue.',
    imageAlt:
      'Bar chart of percent changes in six Stockholm pollutants during the congestion-charge trial, three areas, from World Bank Table 4.7',
    sourceLabel: 'World Bank, Urban and Interurban Road Pricing',
  },
  'low-emission-zones': {
    problemTitle: 'High-polluting vehicles free to enter the densest streets',
    fixTitle: 'Low-emission zones',
    problem: 'High-polluting vehicles free to enter the densest streets',
    fix: 'Mapped city areas where the most polluting vehicles are banned or must pay to enter, so nitrogen dioxide and fine particles fall where people live and walk. European cities already run more than 320 such zones, and cities elsewhere are adopting the same rules to encourage cleaner vehicles and more public transport, walking and cycling.',
    imageAlt:
      'Map of monitoring stations in Europe coloured by annual mean nitrogen dioxide in 2022 and in 2023',
    sourceLabel: 'ICCT, Low-emission zones',
  },
  'electric-buses': {
    problemTitle: 'Diesel fleets looping the densest routes all day',
    fixTitle: 'Electric buses',
    problem: 'Diesel fleets looping the densest routes all day',
    fix: 'Battery buses on city routes remove tailpipe exhaust at stops and along busy streets, and cities already buy them at scale. The International Energy Agency (IEA) counted almost 70,000 electric bus sales worldwide in 2025, up 12% on the year before, and the UN Environment Programme (UNEP) helps countries and cities plan cleaner bus fleets.',
    imageAlt:
      'Stacked columns of electric bus sales by region, in thousands of buses, for each year from 2020 to 2025',
    sourceLabel: 'IEA, Global EV Outlook 2026',
  },
};

export const detail: Record<CitiesEncyclopediaSlug, CitiesDetailCopy> = {
  'bus-rapid-transit': {
    title: 'Bus rapid transit',
    hook: grid['bus-rapid-transit'].fix,
    imageAlt: grid['bus-rapid-transit'].imageAlt,
    caption:
      'Posta station on the bus rapid transit line in Dar es Salaam, Tanzania. Only the rapid-transit buses and emergency vehicles may use its bus lanes.',
    credit: 'Photo: Grahamcole, Wikimedia Commons',
    what: [
      'Bus rapid transit (BRT) is a high-capacity bus system built to run fast and on time. The BRT Standard published by the Institute for Transportation and Development Policy (ITDP) names five essentials: a lane reserved for buses, a busway placed in the middle of the road where possible, fares paid before boarding, priority for buses at junctions, and platforms level with the bus floor. A corridor needs at least 3 kilometres of dedicated lanes to count as BRT at all.',
    ],
    why: [
      'BRT gives a city mass rapid transit sooner and for less money than rail. Curitiba in Brazil opened its system in 1974, and Bogotá\'s TransMilenio followed in 2000. According to the 2024 edition of the standard, more than 153 corridors opened in 91 cities in 24 countries in the ten years after the scoring guide first appeared in 2012.',
    ],
    read: [
      'The standard scores a corridor out of 100 points. Gold means 85 points or more, silver 70 to 84.9 and bronze 55 to 69.9. "Basic BRT" meets only the minimum requirements. The final score is given six months after opening, once points are taken off for problems in daily operation such as overcrowding, long waits at traffic lights and buses bunching together.',
    ],
    limits: [
      'Lanes that are only painted, without proper stations, enforcement and frequent service, deliver little. A bus called BRT that lacks the basics is still a bus stuck in traffic.',
    ],
    sources: [
      {
        label: 'Institute for Transportation and Development Policy (ITDP): The BRT Standard',
        url: 'https://itdp.org/publication/the-brt-standard/',
      },
      {
        label: 'ITDP: The BRT Standard, 2024 Edition (PDF)',
        url: brtPdf,
      },
    ],
  },
  'walking-and-cycling-networks': {
    title: 'Walking and cycling networks',
    hook: grid['walking-and-cycling-networks'].fix,
    imageAlt: grid['walking-and-cycling-networks'].imageAlt,
    caption:
      'Cyclists cross the junction at Holmens Kanal in Copenhagen on a blue-painted cycle crossing that carries the bike route through the intersection.',
    credit: 'Photo: Tony Webster, Wikimedia Commons',
    what: [
      'A walking and cycling network is a connected set of footways, crossings and cycle routes that lets people reach everyday places safely under their own power. A roundtable report published in December 2023 by the International Transport Forum (ITF), the intergovernmental transport body linked to the OECD (Organisation for Economic Co-operation and Development), urges cities to raise the quality of these trips with lower traffic speeds, safe crossings and good links to buses, trams and trains.',
    ],
    why: [
      'Walking and cycling serve four goals the report names: moving people efficiently, a cleaner environment, more enjoyment of daily life and a fairer share of benefits. In many cities walking is the main way people travel under their own power, especially in the Global South and in countries with few cars. The report also warns that decades of car-centred planning have pushed people on foot and on bikes to the edges of the street.',
    ],
    read: [
      'The report judges progress by quality rather than quantity. It asks whether people who already walk and cycle can do so with dignity, safety and comfort, and whether they feel protected from dangerous traffic and harassment. Walking and cycling also have different needs, so a good network plans for each of them separately.',
    ],
    limits: [
      'Infrastructure alone falls short if streets feel unsafe or are cut off from frequent public transport. Networks need continuity, lower traffic speeds and real crossings.',
    ],
    sources: [
      {
        label:
          'OECD / International Transport Forum: Improving the Quality of Walking and Cycling in Cities (ITF Roundtable Reports, No. 193)',
        url: 'https://www.oecd.org/en/publications/improving-the-quality-of-walking-and-cycling-in-cities_cdeb3fe8-en.html',
      },
      {
        label:
          'OECD / International Transport Forum: Improving the Quality of Walking and Cycling in Cities, Summary and Conclusions (PDF)',
        url: walkPdf,
      },
    ],
  },
  'congestion-charging': {
    title: 'Congestion charging',
    hook: grid['congestion-charging'].fix,
    imageAlt: grid['congestion-charging'].imageAlt,
    caption:
      'Percent change in emissions in Stockholm during the pricing trial, from Table 4.7. Numbers below zero are a fall. In each group the bars run from dark to light: the city centre, the municipality of Stockholm, and the 35 square kilometre area. Group 1 is nitrogen oxides (−8.5, −2.7, −1.3), 2 carbon monoxide (−14, −5.1, −2.9), 3 particles under 10 micrometres (−13, −3.4, −1.5), 4 volatile organic compounds (−14, −5.2, −2.9), 5 benzene (−14, −5.3, −3.0), and 6 carbon dioxide (−13, −5.4, −2.7). The table in the report credits Hugosson and Sjöberg (2006).',
    credit:
      'Chart redrawn from Table 4.7 of World Bank, Urban and Interurban Road Pricing: Navigating the Changing Landscape of Mobility Management and Infrastructure Financing (August 2023). This is an adaptation of an original work by the World Bank. Views and opinions expressed in the adaptation are the sole responsibility of the author of the adaptation and are not endorsed by the World Bank.',
    legend: ['City centre', 'Municipality of Stockholm', '35 km² area'],
    categories: [
      'Nitrogen oxides',
      'Carbon monoxide',
      'Particles under 10 micrometres',
      'Volatile organic compounds',
      'Benzene',
      'Carbon dioxide',
    ],
    what: [
      'A congestion charge is a fee for driving into a crowded zone, or across a ring around it, at set times. Cameras read number plates, so drivers do not have to stop to pay. London began charging on 17 February 2003, at £5 a day on weekdays. Stockholm tested a charge that varies by time of day from January to July 2006 and made it permanent in August 2007.',
    ],
    why: [
      'A World Bank review of road pricing reports that in London the number of cars on the streets fell by about a third in the first year, and delays caused by congestion fell by 30%. During the Stockholm trial, traffic into and out of the city centre fell by 20% and public transport use rose by 7%; in the referendum that followed, 53% of voters backed the charge. Singapore\'s area licence scheme of 1975 cut traffic in the charged zone by 45%.',
    ],
    read: [
      'Results depend on what the money pays for and on the choices drivers have. In London\'s 2007–08 financial year, £112 million of the £137 million net revenue from the charge went to better bus services. Early gains can fade: average speeds in central London rose from 14.6 to 17.6 km/h after the charge began, then fell back to about 15 km/h by 2006. The review estimates that without the charge they would have been around 11 km/h.',
    ],
    limits: [
      'It needs clear exemptions, working enforcement and visible reinvestment in public transport. A charge with no alternatives only pushes the problem to the edge of the zone.',
    ],
    sources: [
      {
        label:
          'World Bank: Urban and Interurban Road Pricing: Navigating the Changing Landscape of Mobility Management and Infrastructure Financing (August 2023, PDF)',
        url: roadPdf,
      },
      {
        label: 'World Bank Documents and Reports: Urban and Interurban Road Pricing (catalogue page)',
        url: 'https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099031724120560318',
      },
    ],
  },
  'low-emission-zones': {
    title: 'Low-emission zones',
    hook: grid['low-emission-zones'].fix,
    imageAlt: grid['low-emission-zones'].imageAlt,
    caption:
      'Annual mean nitrogen dioxide at reporting monitoring stations, from the data behind Map 4 of Europe’s air quality status 2024. The panel marked 2022 has 3,597 stations: 833 at or below 10 micrograms per cubic metre, 2,659 above 10 and up to 40, and 105 above 40. The panel marked 2023 has 3,477 stations: 952, 2,440 and 85 in those same classes. The frame runs from 25 degrees west to 45 degrees east and from 34 to 72 degrees north, so stations outside that frame are not drawn. Coastlines are Natural Earth.',
    credit:
      'Map redrawn from European Environment Agency air-quality e-reporting annual statistics, the measurements behind Map 4 in Europe’s air quality status 2024. Coastlines: Natural Earth, public domain.',
    legend: [
      'At or below 10 micrograms per cubic metre',
      'Above 10 and up to 40',
      'Above 40',
    ],
    what: [
      'A low-emission zone is an area where the most polluting vehicles are regulated. Usually vehicles with higher emissions may not enter, and in some zones they pay more to enter. In Europe, entry depends on the Euro emission standard a vehicle meets. Most zones cover buses, coaches and heavy lorries, some also cover vans, cars and motorcycles, and most operate 24 hours a day, every day of the year.',
    ],
    why: [
      'According to the European Environment Agency (EEA), road transport is the leading source of nitrogen dioxide and releases it close to the ground in densely populated areas, while 96% of the EU\'s urban population is exposed to fine-particle (PM2.5) levels above the World Health Organization guideline. The International Council on Clean Transportation (ICCT) counts more than 320 low-emission zones in European cities and points to studies finding that such zones have cut nitrogen dioxide emissions from road traffic by up to 46%.',
    ],
    read: [
      'A zone works only as well as its rules and checks. Cities need data on which vehicles actually drive on their streets, and cameras that read number plates to enforce the entry rules. The ICCT also stresses that good public transport, walking and cycling help people leave polluting vehicles behind. More and more cities are tightening zones into zero-emission zones, which only battery-electric or hydrogen fuel-cell vehicles may enter.',
    ],
    limits: [
      'It needs vehicle data, fair exemptions and enforcement cameras or checks. A zone that exists only on paper, without controls, does little for the air beside the road.',
    ],
    sources: [
      {
        label:
          'International Council on Clean Transportation (ICCT): Low-emission zones: a catalyst for improving transit infrastructure in cities (blog, 10 July 2024)',
        url: 'https://theicct.org/lez-a-catalyst-for-improving-transit-infrastructure-in-cities-jul24/',
      },
      {
        label: 'European Environment Agency (EEA): Europe’s air quality status 2024',
        url: 'https://www.eea.europa.eu/en/analysis/publications/europes-air-quality-status-2024',
      },
    ],
    findZone,
  },
  'electric-buses': {
    title: 'Electric buses',
    hook: grid['electric-buses'].fix,
    imageAlt: grid['electric-buses'].imageAlt,
    caption:
      'Electric bus sales by region, 2020–2025. China still sells the most, but its share of the column shrinks as other regions grow. Segments from the bottom are China, Europe, the United States, India, Latin America and the rest of the world. In 2025 they are 40.1, 12.5, 1.8, 4.3, 3.1 and 6.1 thousand buses (67.9 thousand in all). China’s share of the column is 86.3 percent in 2020 and 59.1 percent in 2025. The upright scale is thousands of buses.',
    credit:
      'Chart redrawn from IEA (2026), Electric bus sales by region, 2020-2025. The colour key on this page is an adaptation of that chart.',
    legend: ['China', 'Europe', 'United States', 'India', 'Latin America', 'Rest of world'],
    what: [
      'Electric buses run on batteries charged from the grid, largely at bus depots. According to the IEA\'s Global EV Outlook 2026, battery-electric models made up 98% of the electric buses sold worldwide in 2025. The average range of battery bus models has reached 360 km, enough for city buses, which typically travel 150–300 km a day.',
    ],
    why: [
      'City buses run the same crowded routes all day, so replacing diesel engines removes exhaust exactly where many people wait and walk. Sales reached almost 70,000 in 2025, up 12% on 2024. China accounted for about 60% of them, down from nearly 100% in 2018, and almost all new city buses sold there are electric. Europe sold more than 12,000, and in the European Union battery-electric models took over 55% of new city-bus sales. Santiago in Chile now has the largest electric bus fleet of any city outside China.',
    ],
    read: [
      'Sales count the new buses bought in a year, including city and intercity buses with 10 or more seats, so they differ from the number of electric buses already on the road. Intercity coaches are harder to electrify: in China, zero-emission models made up only about 10% of coach sales in 2025. UNEP supports 16 countries and cities in Africa, Asia, Latin America and the Caribbean as they prepare for low-emission public transport, including electric buses.',
    ],
    limits: [
      'It needs depot charging, reliable daily schedules and a financed fleet plan. A few pilot buses without a depot strategy stall when a city tries to scale up.',
    ],
    sources: [
      {
        label: 'International Energy Agency (IEA): Global EV Outlook 2026, Trends in other EV modes',
        url: 'https://www.iea.org/reports/global-ev-outlook-2026/trends-in-other-ev-modes',
      },
      {
        label: 'UN Environment Programme (UNEP): Electric buses',
        url: 'https://www.unep.org/topics/transport/electric-mobility/electric-buses',
      },
      {
        label: 'International Energy Agency (IEA): Global EV Outlook 2026',
        url: 'https://www.iea.org/reports/global-ev-outlook-2026',
      },
    ],
  },
  "cool-roofs": {
    title: "Cool roofs",
    hook: "A cool roof reflects more of the sun’s heat than a conventional roof, so the building below stays cooler and uses less energy for air conditioning, according to the United States Environmental Protection Agency.",
    imageAlt: "White stepped roofs of a house on the coast of Bermuda, photographed in May 1994.",
    caption: "White stepped roofs of a house on the coast of Bermuda, photographed in May 1994.",
    credit: "Photo: Acroterion, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0).",
    what: ["A cool roof absorbs and passes on less heat from the sun to the building than a conventional roof. The key property is high solar reflectance, also called albedo, which describes how much sunlight the roof sends back. A high thermal emittance, the ability to shed the heat the roof does absorb, also helps, particularly in warm and sunny climates. Cool roofing products exist for flat roofs and for steep roofs, for example reflective membranes, light coloured coatings, tiles and shingles."],
    why: ["In residential buildings without air conditioning, cool roofs can lower the maximum indoor temperature by 1.2 to 3.3 °C. In air-conditioned residential buildings, a cool roof can reduce peak cooling demand by 11 to 27 percent. Cool roofs also lower temperatures outside buildings, which eases the urban heat island effect. One study in the United Kingdom found that cool roofs across a whole city could offset 18 percent of the heat-related deaths linked to the heat island effect."],
    read: ["The range of 1.2 to 3.3 °C applies to residential buildings without air conditioning, and the range of 11 to 27 percent applies to air-conditioned residential buildings. Local rules and incentives encourage their use. In the United States, cool roof requirements are part of building and energy standards or ordinances in at least 13 cities and counties, seven states and the District of Columbia, according to information from the Cool Roof Rating Council last updated in 2022."],
    limits: ["Because cool roofs reflect sunlight, they may increase energy use for heating in winter in cold climates. The agency describes this heating penalty as typically offset by the savings on summer cooling, and lower winter sun and shorter days reduce it further. Cool roofs may need periodic cleaning to keep their reflectance high, particularly on flat roofs. Building owners get the most from a cool roof when they also improve insulation and air sealing."],
    sources: [
      {
        label: "United States Environmental Protection Agency: Using Cool Roofs to Reduce Heat Islands",
        url: "https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands",
      },
    ],
  },
  "green-roofs": {
    title: "Green roofs",
    hook: "A green roof is a layer of living plants grown on a rooftop, and the United States Environmental Protection Agency reports that its surface can be about 31 °C cooler than a conventional roof.",
    imageAlt: "Planted roof of Chicago City Hall in the United States, seen from above, photographed on 8 July 2008.",
    caption: "Planted roof of Chicago City Hall in the United States, seen from above, photographed on 8 July 2008.",
    credit: "Photo: TonyTheTiger, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0).",
    what: ["A green roof, or rooftop garden, is a vegetative layer grown on a rooftop. It sits on a waterproof barrier with a drainage layer and a growing medium. Extensive green roofs have hardy plants in a growing medium 5 to 10 centimetres deep, are light and need little maintenance once established. Intensive green roofs are more complex, can resemble a park with trees, and need more structural support and care. A green roof also acts as a thermal buffer for the building, cooling it in warm weather and insulating it in cold weather."],
    why: ["Green roofs provide shade, remove heat from the air and lower the temperature of the roof surface and the surrounding air. The surface of a green roof can be about 31 °C cooler than a conventional roof, and nearby air can be up to 11 °C cooler. Compared with conventional roofs, green roofs can reduce the cooling load of a building by 70 percent and lower the indoor air temperature by 15 °C. They also reduce and slow stormwater runoff, by 60 to 100 percent according to the agency."],
    read: ["The United States General Services Administration counts more than 80 buildings with green roofs, about 20 hectares in total. They include the roof of the United States Coast Guard headquarters in Washington, with about 5.2 hectares of planted roof, which the administration expects to lengthen the life of the waterproofing membrane two or three times. The runoff range depends on rainfall patterns, and a green roof captures more of a small rainfall than of a heavy one."],
    limits: ["Green roofs often cost more at the start than conventional roofs, and they need a structure that can carry their weight, a drainage layer and regular upkeep such as irrigation, weed control and replanting. Owners can offset part of the cost through lower energy costs, lower stormwater fees and a longer roof life. The counts of buildings and areas describe the buildings of the United States federal government."],
    sources: [
      {
        label: "United States Environmental Protection Agency: Using Green Roofs to Reduce Heat Islands",
        url: "https://www.epa.gov/heatislands/using-green-roofs-reduce-heat-islands",
      },
      {
        label: "United States General Services Administration: Planted roof case studies",
        url: "https://www.gsa.gov/governmentwide-initiatives/federal-highperformance-buildings/highperformance-building-clearinghouse/water/planted-roof/case-studies",
      },
      {
        label: "United States Environmental Protection Agency: Stormwater Best Management Practice: Green Roofs (December 2021)",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-green-roofs.pdf",
      },
    ],
  },
  "permeable-pavement": {
    title: "Permeable pavement",
    hook: "Permeable pavement lets rain soak through its surface into layers of soil and gravel below, and the United States Environmental Protection Agency lists it as a type of green infrastructure.",
    imageAlt: "A demonstration in which water poured onto a slab of porous paving drips through it, photographed on 7 October 2012.",
    caption: "A demonstration in which water poured onto a slab of porous paving drips through it, photographed on 7 October 2012.",
    credit: "Photo: Lombroso, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0).",
    what: ["Permeable pavements store or infiltrate rainwater where it falls. The surface layer can be pervious concrete, porous asphalt or permeable interlocking concrete pavers. Stormwater soaks in at the surface and is stored in layers of crushed stone and soil below. The water then either infiltrates into the ground or flows out through an underdrain. Porous asphalt and pervious concrete are versions of ordinary asphalt and concrete with fewer fine particles, and pavers leave small joints filled with small stones."],
    why: ["Permeable pavements can generally replace traditional pavement on local roads, walkways, sidewalks, driveways, parking lots and bike paths. By taking in rain on the spot, they reduce ponding on the pavement and local flooding and can reduce the need for conventional drainage pipes and basins. They generally need less road salt or deicing material in winter, because quick surface drainage reduces freezing puddles and black ice. With proper construction a permeable pavement can last 20 to 40 years."],
    read: ["The agency describes permeable pavement as a stormwater control: a surface layer that water passes through and a crushed stone reservoir that stores it. Where the site slopes more than 2 percent, the base beneath the pavement may need terracing to keep stormwater from flowing through the pavement structure. Porous asphalt and pervious concrete have slightly rougher surfaces than their traditional counterparts and give vehicles and pedestrians more traction."],
    limits: ["Clogging by fine particles is the main maintenance concern, because it lowers the rate at which water passes through. Periodic removal of fine sediment from the surface keeps the pavement permeable, and sites with heavy sediment loads are better avoided. Permeable pavements are weaker than conventional asphalt and may be unsuitable for high-volume and high-speed roads, extreme loads, and sites where hazardous materials are handled or spills could occur. The guidance describes practice in the United States."],
    sources: [
      {
        label: "United States Environmental Protection Agency: Types of Green Infrastructure",
        url: "https://www.epa.gov/green-infrastructure/types-green-infrastructure",
      },
      {
        label: "United States Environmental Protection Agency: Stormwater Best Management Practice: Permeable Pavements (December 2021)",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-permeable-pavements.pdf",
      },
    ],
  },
  "urban-tree-canopy": {
    title: "Urban tree canopy",
    hook: "Trees and other vegetation cool city air with shade and evaporation, and a review of 308 studies found that urban forests were on average 1.6 °C cooler than urban areas without green cover.",
    imageAlt: "Trees in autumn colours along the boulevard Unter den Linden in Berlin, with a historic monument beside the road.",
    caption: "Trees in autumn colours along the boulevard Unter den Linden in Berlin, with a historic monument beside the road.",
    credit: "Photo: Jochen Sievert, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0).",
    what: ["Trees and vegetation such as bushes, shrubs and tall grasses lower surface and air temperatures by providing shade and by evapotranspiration. In evapotranspiration, plants absorb water through their roots and evaporate it through their leaves, which uses heat from the air. The cooling also comes from the surrounding soil and from rainfall caught on leaves. The United States Environmental Protection Agency presents trees and vegetation as a simple and effective way to reduce heat islands."],
    why: ["Trees that shade buildings reduce the demand for air conditioning, and urban parks and forestry can reduce the energy demand of nearby buildings by 10 percent. Tall, dense roadside vegetation can lessen downwind pollutants by approximately 30 percent. Urban trees can reduce stormwater runoff by absorbing 15 to 27 percent of annual rainfall. Tree cover is also linked to fewer heat-related deaths: one analysis estimates that a 10 percent increase in tree cover would mean about 50 fewer deaths a year in Salt Lake City, Utah, and 3,800 fewer in New York City."],
    read: ["The cooling of 1.6 °C is an average over 308 studies. The agency reports that parts of cities with less vegetation have hotter temperatures, and that one study found these parts home to more residents with lower incomes. The agency lists improved equity among the benefits of trees and vegetation."],
    limits: ["The estimates of fewer deaths come from one modelling analysis of cities in the United States, namely Salt Lake City and New York City. Most of the percentages are worded by the agency as what trees and vegetation can achieve, for example can reduce or approximately, so they show a possible size of the effect."],
    sources: [
      {
        label: "United States Environmental Protection Agency: Benefits of Trees and Vegetation",
        url: "https://www.epa.gov/heatislands/benefits-trees-and-vegetation",
      },
      {
        label: "United States Environmental Protection Agency: Using Trees and Vegetation to Reduce Heat Islands",
        url: "https://www.epa.gov/heatislands/using-trees-and-vegetation-reduce-heat-islands",
      },
    ],
  },
  "rain-gardens-bioswales": {
    title: "Rain gardens and bioswales",
    hook: "Rain gardens and bioswales are planted basins and channels that catch runoff from streets and roofs and filter it through soil, and the United States Environmental Protection Agency lists them among its types of green infrastructure.",
    imageAlt: "Two bioswales beside houses, the near one still under construction and the far one established.",
    caption: "Two bioswales beside houses, the near one still under construction and the far one established.",
    credit: "Photo: Duk (English Wikipedia), via Wikimedia Commons, public domain.",
    what: ["A bioretention area is an engineered sunken area that collects rainwater from rooftops, sidewalks and streets. It lets the water pond for a short time and then soak into the ground or flow out through an underdrain. A rain garden is a smaller, shallower and less engineered form: a sunken planted area that collects stormwater runoff and filters it through a mixture of soil, sand or gravel. Bioswales are open channels that use vegetation or mulch to slow, filter and treat stormwater as it flows through a shallow channel or trench."],
    why: ["Rain gardens filter stormwater, reduce peak flows in downstream sewer systems and remove pollutants through filtration and plant uptake. They suit small sites in dense urban areas and fit into parking lot islands, along roads and at intersections. Swales are linear, so they are well suited to treating stormwater from highways and residential roads."],
    read: ["A bioretention area usually needs a footprint of 5 to 10 percent of the paved area that drains to it. Rain gardens filter small to medium storms, and larger storms are usually sent past them to a larger stormwater control or the storm drain, with an overflow structure for flows that are too large. Swales work best on gentle slopes of 1 to 2 percent, because steeper slopes speed the water up and cause erosion."],
    limits: ["Surface soil layers in a rain garden can clog over time where there is excessive sediment. Bioretention needs landscaping maintenance such as inspecting inlets after the first rain of the season, removing trash and replacing the top layer of the filter media if water ponds for more than 48 hours. Swales need a relatively large area of pervious surface, so they may be poorly suited to dense urban areas. The guidance describes practice in the United States."],
    sources: [
      {
        label: "United States Environmental Protection Agency: Types of Green Infrastructure",
        url: "https://www.epa.gov/green-infrastructure/types-green-infrastructure",
      },
      {
        label: "United States Environmental Protection Agency: Stormwater Best Management Practice: Bioretention (Rain Gardens) (December 2021)",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-bioretention-rain-gardens.pdf",
      },
      {
        label: "United States Environmental Protection Agency: Stormwater Best Management Practice: Grassed Swales (December 2021)",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-grassed-swales.pdf",
      },
    ],
  },
};
