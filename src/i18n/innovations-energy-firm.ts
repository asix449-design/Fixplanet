import type { InnovationCopy } from '../data/innovations';
import { cite } from '../data/sources';
import type { Locale } from './config';
import { energyFirmLv } from './innovations-energy-firm-lv';
import { energyFirmPl } from './innovations-energy-firm-pl';
import { energyFirmRu } from './innovations-energy-firm-ru';

function card(
  fields: Omit<InnovationCopy, 'players' | 'sourcesNote' | 'shape'>,
): InnovationCopy {
  return { players: '', sourcesNote: '', shape: 'quad', ...fields };
}

const ccBySa20 = 'https://creativecommons.org/licenses/by-sa/2.0/';
const ccBySa40 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const desert =
  'https://commons.wikimedia.org/wiki/File:Desert_Sunlight_Battery_Energy_Storage_System_(52945816430).jpg';
const fftf =
  'https://commons.wikimedia.org/wiki/File:View_of_Fast_Flux_Test_Facility_Looking_NW.jpg';
const hywind =
  'https://commons.wikimedia.org/wiki/File:Hywind_Wind_Farm,_off_Peterhead_-_geograph.org.uk_-_7226685.jpg';
const perovskite = 'https://commons.wikimedia.org/wiki/File:Perovskite_solar_cell.jpg';
const campeda =
  'https://commons.wikimedia.org/wiki/File:Bonorva_-_Parco_eolico_di_Campeda_(01).JPG';

export const energyFirm: Record<Locale, Record<string, InnovationCopy>> = {
  en: {
    'sodium-ion-storage': card({
      title: 'Sodium-ion grid storage',
      hook: 'Contemporary Amperex Technology Co., Limited (CATL) unveiled its TENER Sodium Energy Storage System in Munich on 22 June 2026. CATL says shipments should reach 1 gigawatt-hour by the end of 2026, and in April 2026 it agreed to supply 60 gigawatt-hours of sodium-ion batteries to the company HyperStrong over three years.',
      imageAlt:
        'A grid battery storage site next to the Desert Sunlight solar farm in Riverside County, California, with rows of battery units, a substation and power lines.',
      caption:
        'A grid battery storage site next to the Desert Sunlight solar farm in Riverside County, California, with rows of battery units, a substation and power lines.',
      figureCredit:
        'Photo: Bureau of Land Management California, courtesy of NextEra, via Wikimedia Commons, public domain (work of a U.S. federal government agency).',
      licenseLabel: 'public domain',
      licenseUrl: desert,
      what: 'A sodium-ion battery stores and releases electricity by moving sodium ions between two electrodes, the way a lithium-ion battery moves lithium ions. On 22 June 2026 in Munich, Contemporary Amperex Technology Co., Limited (CATL), a Chinese battery maker, unveiled TENER Sodium, a battery storage system for power grids built on sodium-ion cells. CATL describes it as the world’s first field-validated sodium-ion energy storage system and says it has reached full commercial maturity in technology, production capacity and supply chain readiness. CATL says TENER Sodium delivers more than 30 megawatt-hours of rated capacity in a modular design, and that 34 modules are enough for a 1 gigawatt-hour site.',
      problem:
        'CATL says lithium supply is concentrated and its prices are volatile, while sodium is more than 1,000 times more abundant and widely distributed. CATL says the system can be configured for storage durations of 1, 2, 4, 6 or 8 hours, and that it fits the same footprint as its lithium iron phosphate systems, so a project can use either chemistry in the same enclosures. At the June launch CATL said it would begin delivering systems to customers in China in September 2026, expects cumulative shipments of 1 gigawatt-hour by the end of 2026, and will begin deliveries outside China in June 2027. In April 2026 CATL and HyperStrong, a Beijing company that supplies energy storage systems, signed an agreement for 60 gigawatt-hours of sodium-ion batteries over three years, which CATL and HyperStrong both describe as the world’s largest sodium-ion battery agreement announced to date.',
      how: 'Nearly everything here comes from CATL’s own announcement, so it is the company’s account of its product and its plans. The shipment figure for 2026 is a forecast, and the start of deliveries in China in September 2026 and outside China in June 2027 are schedules. Later announcements from CATL and HyperStrong will show which systems have actually been delivered and where.',
      risks:
        'Every figure here is CATL’s own or HyperStrong’s own. The one performance number in CATL’s release is a gain of nearly 2 percent in round-trip efficiency, the share of stored electricity that comes back out, from its voltage regulation system. The system was unveiled in June 2026, so its long-term record in service is still to be built. The agreement with HyperStrong is a supply commitment over three years, and actual deliveries will show up in later announcements.',
      sources: [
        cite(
          'Contemporary Amperex Technology Co., Limited: CATL Debuts World’s First Field-Validated Sodium-Ion BESS, Bringing Sodium Storage to Commercial Reality (22 June 2026)',
          'https://www.catl.com/en/news/6861.html',
        ),
        cite(
          'HyperStrong: HyperStrong and CATL Sign 60 GWh Sodium-Ion Battery Agreement to Advance Energy Storage (29 April 2026)',
          'https://www.hyperstrong.com/en/news/company-news/95',
        ),
        cite(
          'Wikimedia Commons: Desert Sunlight Battery Energy Storage System (photo)',
          desert,
        ),
      ],
    }),
    'terrapower-natrium': card({
      title: 'TerraPower Natrium',
      hook: 'TerraPower’s Natrium plant at Kemmerer, Wyoming, pairs a 345-megawatt sodium-cooled fast reactor with a molten salt energy storage system that can raise output to 500 megawatts. The U.S. Nuclear Regulatory Commission issued the construction permit on 9 March 2026, and TerraPower announced the start of construction on 23 April 2026.',
      imageAlt:
        'The Fast Flux Test Facility, a sodium-cooled test reactor at the Hanford Site in Washington State, looking northwest.',
      caption:
        'The Fast Flux Test Facility, a sodium-cooled test reactor at the Hanford Site in Washington State, looking northwest.',
      figureCredit:
        'Photo: U.S. Department of Energy, via Wikimedia Commons, public domain (work of the U.S. federal government).',
      licenseLabel: 'public domain',
      licenseUrl: fftf,
      what: 'Natrium is a nuclear power plant design from TerraPower, a U.S. company that develops nuclear technology. The plant has a 345-megawatt sodium-cooled fast reactor, meaning that liquid sodium carries the heat away from the core, joined to a molten salt energy storage system. TerraPower says the storage can lift output to 500 megawatts when demand peaks, which it equates to the power for around 400,000 homes, and that it is designed to keep base output steady. The reactor is a TerraPower and GE Vernova Hitachi Nuclear Energy technology. The first plant, Kemmerer Unit 1 in Lincoln County, Wyoming, is being developed through the U.S. Department of Energy’s Advanced Reactor Demonstration Program, a public-private partnership.',
      problem:
        'On 4 March 2026 TerraPower announced that the Commissioners of the U.S. Nuclear Regulatory Commission had voted to award Kemmerer Unit 1 a construction permit, which the company describes as the first for a commercial-scale advanced nuclear power plant. The Federal Register, the U.S. government’s official daily journal of public notices, records that the permit was issued on 9 March 2026 to US SFR Owner, LLC, the company that holds it, and that it authorizes construction of a power reactor facility in Lincoln County, Wyoming. TerraPower announced the official start of construction on 23 April 2026, with a workforce of roughly 1,600 workers being mobilized and about 250 full-time staff expected once the plant operates. The company says the project is expected to be completed in 2030, and that it would then be the first utility-scale advanced nuclear power plant in the United States.',
      how: 'Three dates appear in the record: the Commission vote on 4 March 2026, the issue of the permit on 9 March 2026 and the start of construction on 23 April 2026. The construction permit is the government’s approval to build the reactor facility, and the Federal Register notice is the official record of it. Descriptions such as “first” come from TerraPower’s own announcements. The 500-megawatt figure is the peak output while the storage discharges, and the 345-megawatt figure is the reactor’s base output.',
      risks:
        'Kemmerer Unit 1 is under construction, and the completion year of 2030 is TerraPower’s expectation. TerraPower’s chief executive calls the plant a first-of-a-kind nuclear plant, so its final cost and schedule are still to be shown. TerraPower also says it has an agreement with Meta for up to eight Natrium plants by 2035. That is an agreement between companies, and the first plant has yet to be completed.',
      sources: [
        cite(
          'TerraPower: NRC Approves the Natrium Reactor Construction Permit (4 March 2026)',
          'https://www.terrapower.com/NRC-Approves-Natrium-Reactor-Construction-Permit',
        ),
        cite(
          'TerraPower: TerraPower Commences Construction on America’s First Utility-Scale Advanced Nuclear Power Plant (23 April 2026)',
          'https://www.terrapower.com/terrapower-commences-construction-on-americas-first-utility-scale-advanced-nuclear-power-plant/',
        ),
        cite('TerraPower: Natrium technology page', 'https://www.terrapower.com/natrium/'),
        cite(
          'U.S. Government Publishing Office, Federal Register: US SFR Owner, LLC; Kemmerer Power Station, Unit 1; Construction Permit and Record of Decision (notice of 16 March 2026)',
          'https://www.govinfo.gov/content/pkg/FR-2026-03-16/html/2026-05067.htm',
        ),
        cite(
          'Wikipedia: Fast Flux Test Facility',
          'https://en.wikipedia.org/wiki/Fast_Flux_Test_Facility',
        ),
        cite('Wikimedia Commons: View of Fast Flux Test Facility Looking NW (photo)', fftf),
      ],
    }),
    'floating-offshore-wind': card({
      title: 'Floating offshore wind',
      hook: 'The Goto Offshore Wind Farm off Goto City, Nagasaki Prefecture, began commercial operation on 5 January 2026. Its project company calls it Japan’s first commercial floating offshore wind farm: eight 2.1-megawatt turbines, 16.8 megawatts in total, on floaters made of steel and concrete.',
      imageAlt:
        'Two floating wind turbines of the Hywind Scotland wind farm in the North Sea off Peterhead, Scotland.',
      caption:
        'Two floating wind turbines of the Hywind Scotland wind farm in the North Sea off Peterhead, Scotland.',
      figureCredit:
        'Photo: Mike Pennington, geograph.org.uk, via Wikimedia Commons, Creative Commons Attribution-ShareAlike 2.0 Generic licence.',
      licenseLabel: 'Creative Commons Attribution-ShareAlike 2.0 Generic licence',
      licenseUrl: ccBySa20,
      what: 'A floating offshore wind turbine stands on a buoyant platform held in place by mooring lines and anchors, so it can be placed in water too deep for a foundation fixed to the seabed. The Goto Offshore Wind Farm is run by Goto Floating Wind Farm LLC, a project company owned by six firms: TODA CORPORATION, a Japanese construction company that leads the project company, ENEOS Renewable Energy Corporation, Osaka Gas, INPEX CORPORATION, and the electric utilities Kansai Electric Power and Chubu Electric Power. It has eight turbines of 2.1 megawatts each, 16.8 megawatts in total, with a rotor diameter of 80 meters. Each turbine stands on a hybrid spar-type floater, an upright floating cylinder with a steel upper section and a concrete lower section, designed and built by TODA CORPORATION.',
      problem:
        'The U.S. Department of Energy reports that about two-thirds of U.S. offshore wind potential lies in water too deep for standard fixed-bottom turbines, using a limit of 60 meters, so floating technology is needed there. The project company and its shareholders announced on 5 January 2026 that commercial operation of the Goto farm had begun. They describe it as Japan’s first commercial floating offshore wind farm, and as the first facility of its kind in Japan certified under the Act on Promoting the Utilization of Sea Areas for the Development of Marine Renewable Energy Power Generation Facilities (the Marine Renewable Energy Sea-Area Utilization Act). They also call the hybrid spar floater the world’s first commercial application of that floater type. The electricity is to be supplied preferentially to local retail electricity providers.',
      how: 'The 16.8-megawatt capacity, the 5 January 2026 start date and the description of the floater come from the project company and its shareholders, whose announcement is the source of these details. Floating wind farms operated before Goto. Equinor, the Norwegian energy company, reports that its 30-megawatt Hywind Scotland pilot park, with five turbines on spar floaters in water 95 to 120 meters deep, has produced electricity since October 2017, and the photo here shows two of those turbines. Goto’s “first” refers to Japan and to commercial operation.',
      risks:
        'At 16.8 megawatts, Goto is a small wind farm. The Department of Energy expects the costs of first-generation floating wind facilities to exceed those of fixed-bottom offshore wind by over 50 percent, and it has set a goal of cutting the cost of floating wind by more than 70 percent by 2035. The Goto announcement gives no cost or output data, so how the farm performs is still to be reported.',
      sources: [
        cite(
          'TODA CORPORATION, Goto Floating Wind Farm LLC and shareholders: Goto Offshore Wind Farm Begins Commercial Operation, Japan’s First Commercial Floating Wind Power Project (5 January 2026, PDF)',
          'https://www.toda.co.jp/english/investor_relations/pdf/20260105_Notice_01.pdf',
        ),
        cite(
          'Chubu Electric Power Co., Inc.: Goto Offshore Wind Farm Begins Commercial Operation, Japan’s First Commercial Floating Wind Power Project (5 January 2026)',
          'https://www.chuden.co.jp/english/corporate/releases/pressreleases/1217247_5163.html',
        ),
        cite(
          'U.S. Department of Energy: Floating Offshore Wind Shot, Progress and Priorities (May 2024, PDF)',
          'https://www.energy.gov/sites/default/files/2024-05/DOE-Wind-Floating-Offshore-WindShot-Report-May2024.pdf',
        ),
        cite(
          'Equinor: Hywind Scotland, the world’s first floating wind farm',
          'https://www.equinor.com/energy/hywind-scotland',
        ),
        cite('Wikimedia Commons: Hywind Wind Farm, off Peterhead (photo)', hywind),
      ],
    }),
    'perovskite-tandem': card({
      title: 'Perovskite-silicon tandem modules',
      hook: 'On 5 September 2024 the solar company Oxford PV announced the first commercial sale of its perovskite-on-silicon tandem panels, shipped to a customer in the United States for a utility-scale installation. Oxford PV says the 72-cell panels have 24.5 percent module efficiency and can produce up to 20 percent more energy than a standard silicon panel.',
      imageAlt: 'A gloved hand holding a small perovskite solar cell.',
      caption: 'A gloved hand holding a small perovskite solar cell.',
      figureCredit:
        'Photo: Dennis Schroeder, National Renewable Energy Laboratory (renamed the National Laboratory of the Rockies in December 2025), via Wikimedia Commons, public domain (work of the U.S. federal government).',
      licenseLabel: 'public domain',
      licenseUrl: perovskite,
      what: 'A perovskite-silicon tandem solar cell puts a thin layer of a perovskite material on top of a silicon cell. Perovskites are a family of materials that absorb certain colors of light very effectively, and the U.S. Department of Energy explains that the silicon layer beneath uses the colors of light that the perovskite lets through, which lets a tandem cell be more efficient in theory than either material alone. Oxford PV is a solar technology company with offices in England and Germany, and it has worked on this technology since 2014. Its first commercial panels use 72 of its own perovskite-on-silicon cells.',
      problem:
        'On 5 September 2024 Oxford PV announced that it had started commercializing its tandem technology with a first shipment to a U.S.-based customer, for a utility-scale installation. The company calls this the first commercial deployment of a perovskite tandem solar panel worldwide. Oxford PV says the panels can produce up to 20 percent more energy than a standard silicon panel, and that this can lower the levelised cost of electricity, the average cost of each unit of electricity over a plant’s life, and make more efficient use of land. The company gives the first panels on the market a module efficiency of 24.5 percent, and it also cites a recent module efficiency record of 26.9 percent. The cells are made on Oxford PV’s megawatt-scale pilot line in Brandenburg an der Havel, Germany.',
      how: 'The figures for panel efficiency, extra energy and the record come from Oxford PV’s own announcement. Module efficiency is the share of the sunlight falling on a whole panel that becomes electricity. The U.S. Department of Energy reports that perovskite-silicon tandem cells have reached efficiencies of almost 34 percent in research. The sale of 5 September 2024 is one shipment from a pilot line, and the company describes plans for further utility customers, specialty products and pilot residential applications.',
      risks:
        'The U.S. Department of Energy says perovskite solar technology is still short of large-scale manufacturing. It lists four challenges for commercial success: cell stability and durability, power conversion efficiency at scale, manufacturability, and technology validation and bankability, meaning whether lenders will finance projects that use it. Oxford PV’s 2024 announcement describes scaling production to gigawatt scale as a plan for a future high-volume manufacturing site. Independent test results and field data on how the panels age will settle how they compare with silicon panels.',
      sources: [
        cite(
          'Oxford PV: 20% more powerful tandem solar panels enter commercial use for the first time in the US (5 September 2024)',
          'https://www.oxfordpv.com/press-releases/oxford-pv-solar-technology-patent',
        ),
        cite(
          'U.S. Department of Energy: Perovskite Solar Cells',
          'https://www.energy.gov/cmei/systems/perovskite-solar-cells',
        ),
        cite(
          'U.S. Department of Energy: Energy Department Renames NREL “National Lab of the Rockies” (1 December 2025)',
          'https://www.energy.gov/cmei/articles/energy-department-renames-nrel-national-lab-rockies',
        ),
        cite('Wikimedia Commons: Perovskite solar cell (photo)', perovskite),
      ],
    }),
    'energy-dome-co2': card({
      title: 'Energy Dome carbon dioxide battery',
      hook: 'Energy Dome’s plant in Ottana, Sardinia, began operating in July 2025. It stores electricity by compressing carbon dioxide gas into a liquid and later expanding it through a turbine, and IEEE Spectrum reports its capacity as 20 megawatts and 200 megawatt-hours, which is 10 hours at full power.',
      imageAlt:
        'Wind turbines of the Campeda wind farm near Bonorva in Sardinia, Italy, seen from a hillside.',
      caption:
        'Wind turbines of the Campeda wind farm near Bonorva in Sardinia, Italy, seen from a hillside.',
      figureCredit:
        'Photo: Gianni Careddu, via Wikimedia Commons, Creative Commons Attribution-ShareAlike 4.0 International licence.',
      licenseLabel: 'Creative Commons Attribution-ShareAlike 4.0 International licence',
      licenseUrl: ccBySa40,
      what: 'Energy Dome is a company based in Milan, Italy, that calls its storage system a “CO2 Battery”. It works in a closed loop. When the grid has spare electricity, a compressor squeezes carbon dioxide gas from a large dome to about 55 times atmospheric pressure, the gas is cooled and turned into a liquid, and the liquid is kept in pressure vessels. When the grid needs power, the liquid is evaporated and heated, and the gas expands through a turbine that drives a generator before returning to the dome. IEEE Spectrum, the magazine of the Institute of Electrical and Electronics Engineers, reports that the dome at Ottana holds 2,000 tonnes of carbon dioxide bought from a gas supplier, and that charging takes about 10 hours.',
      problem:
        'IEEE Spectrum reports that Energy Dome began operating its 20-megawatt facility in Ottana in July 2025, and that it produces 200 megawatt-hours of electricity, or 20 megawatts over 10 hours. The magazine says the best new grid batteries on the market, mainly lithium-ion, provide only about 4 to 8 hours of storage, and it calls storage that lasts more than 8 hours long-duration. It also reports that the Indian power company NTPC Limited expected to complete a plant at Kudgi in Karnataka in 2026, that the Wisconsin utility Alliant Energy had been cleared to begin construction of one in 2026 to supply power to 18,000 homes, and that Google plans to deploy the plants at its key data-center locations in Europe, the United States and the Asia-Pacific region. In June and July 2026 Energy Dome announced a 23-megawatt, 200-megawatt-hour project with Google in County Offaly, Ireland, and a 20-megawatt, 200-megawatt-hour plant with SEC, a state-owned renewable energy company, in Victoria, Australia.',
      how: 'Ottana is the one full-size grid-connected plant that IEEE Spectrum describes, and the other plants are projects with expected or announced dates. The 200 megawatt-hours is the plant’s capacity, which is 20 megawatts delivered for 10 hours. Energy Dome’s own page states a round-trip efficiency of 70 percent or more net, the share of stored electricity that comes back out, and a life of more than 30 years. IEEE Spectrum also reports Energy Dome’s expectation that its systems will cost 30 percent less than lithium-ion. Those figures are the company’s own.',
      risks:
        'IEEE Spectrum reports that the facility takes up about twice as much land as a lithium-ion battery of comparable capacity, that the rest of the plant needs about 5 hectares of flat land and less than two years to build, and that the dome is about the height of a sports stadium and could draw objections from neighbors. Energy Dome’s chief executive says the dome can withstand wind up to 160 kilometers per hour, and that if the dome were punctured the 2,000 tonnes of carbon dioxide would enter the atmosphere and people would need to stay back 70 meters or more until the air clears.',
      sources: [
        cite(
          'IEEE Spectrum: Grid-Scale Bubble Batteries Will Soon Be Everywhere, online as CO2 Batteries That Store Grid Energy Take Off Globally (Emily Waltz, 21 December 2025)',
          'https://spectrum.ieee.org/co2-battery-energy-storage',
        ),
        cite('Energy Dome: CO2 Battery technology page', 'https://www.energydome.com/co2-battery/'),
        cite(
          'Energy Dome: Google and Energy Dome Advance Multi-Continent Energy Storage Buildout with First Bilateral Project in Ireland (23 June 2026)',
          'https://energydome.com/google-and-energy-dome-advance-multi-continent-energy-storage-buildout-with-first-bilateral-project-in-ireland/',
        ),
        cite(
          'Energy Dome: Energy Dome to Deliver Victoria’s First 10-hour Battery in Partnership with SEC (10 July 2026)',
          'https://energydome.com/energy-dome-to-deliver-victorias-first-10-hour-battery-in-partnership-with-sec/',
        ),
        cite('Wikimedia Commons: Bonorva - Parco eolico di Campeda (01) (photo)', campeda),
      ],
    }),
  },
  ru: energyFirmRu,
  pl: energyFirmPl,
  lv: energyFirmLv,
};
