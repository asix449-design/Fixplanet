import type { SpeciesCopy } from '../data/wildlife';
import type { Locale } from './config';
import { packLv } from './wildlife-pack-lv';
import { packPl } from './wildlife-pack-pl';
import { packRu } from './wildlife-pack-ru';

/** Insects + domesticates shelves (founder pack, 11 Sep). */
export const pack: Record<Locale, Record<string, SpeciesCopy>> = {
  en: {
    'european-bison': {
      commonName: 'European bison',
      hook: 'Wiped out in the wild in the early 1900s, then rebuilt — free-living herds grew from about 1,800 animals in 2003 to 6,244 across 47 subpopulations by 2019, and IUCN moved the species from Vulnerable to Near Threatened.',
      imageAlt: 'A European bison bull standing in an autumn forest',
      what: 'Europe’s largest land mammal — a wild cattle relative of the American bison, not the same species. Lowland and highland lines were saved in zoos after the last wild animals were shot, then released back into forests from the 1950s onward.',
      range:
        'Europe. By 2019 free-living animals were back in forests, across 47 subpopulations. Only about eight herds are large enough for long-term genetic viability; most herds stay small and mostly isolated.',
      story:
        'This is a managed comeback after people emptied the range: captive breeding, reintroductions, and ongoing herd management. It is still conservation-dependent (small, mostly isolated herds), not an unthreatened boom like wild boar — but it is back on the landscape.',
      when: 'IUCN (2020 assessment): free-living population ~1,800 (2003) → 6,244 (2019) in 47 herds. Status: Near Threatened, moved from Vulnerable. A later Oryx note cited roughly 6,800 free-ranging by 2020 as planning continued.',
      humanRole:
        'People shot the last wild animals. Captive breeding, releases into forests from the 1950s, and ongoing herd management put free-living herds back.',
      sources:
        'IUCN Red List (Bison bonasus, Near Threatened, 2020); IUCN news, 10 Dec 2020; Oryx range-wide conservation action plan note.',
    },
    'north-american-beaver': {
      commonName: 'North American beaver',
      hook: 'Almost erased across much of its range by about 1900 for felt hats; regulated trapping and mid-century reintroductions rebuilt a continent-wide keystone — IUCN now lists it Least Concern, with modern totals commonly estimated in the tens of millions (often ~10–15 million).',
      imageAlt: 'A North American beaver sitting on a log at the edge of a pond',
      what: 'The New World dam-builder — same family as the Eurasian beaver already on this shelf, different species. It reshapes streams into wetlands that hold water, store carbon in ponds, and feed other wildlife.',
      range:
        'A continent-wide keystone again, restored where habitat remains, after being almost erased across much of its range. Not the Eurasian beaver (Castor fiber).',
      story:
        'People hunted it to local extinction for fur, then brought it back. Where numbers are high it is now a farmland and road-culvert conflict species — a classic “still here, then boom” Surviving story, not an Endangered rarity.',
      when: 'By about 1900 beavers were nearly gone from many original habitats. USDA Forest Service Region 2 assessment: harvest rules, wetland protection, translocation, and natural spread restored populations where habitat remains. Modern totals are commonly estimated in the tens of millions (often ~10–15 million). A Stanford summary of recent mapping work cites a drop from rough pre-colonial 60–400 million guesses to about 10–15 million today — treat the historic ceiling as uncertain; the direction (collapse → millions again) is solid. IUCN: Least Concern.',
      humanRole:
        'The fur trade for felt hats nearly erased it. Regulated trapping and mid-century reintroductions rebuilt it.',
      sources:
        'IUCN Red List (Castor canadensis, Least Concern); Animal Diversity Web; USDA Forest Service Region 2 assessment; Stanford Report, 11 Aug 2025; Communications Earth & Environment (doi:10.1038/s43247-025-02572-y).',
    },
    'bald-eagle': {
      commonName: 'Bald eagle',
      hook: 'Down to 417 known nesting pairs in the lower 48 U.S. states in 1963; after the DDT ban and Endangered Species Act work, USFWS counted about 316,700 individuals and 71,467 occupied nests in 2018–2019.',
      imageAlt: 'An adult bald eagle in flight over water, white head and tail showing',
      what: 'North America’s fish eagle and U.S. national symbol — the only eagle native solely to this continent. Adults show the white head and tail; younger birds stay mottled brown for years.',
      range:
        'North America. The headline figures are the lower-48 recovery story. Alaska was never ESA-listed the same way.',
      story:
        'Shooting and DDT thinned eggshells until the bird nearly vanished from the contiguous United States. Legal protection, nest-site work, and the 1972 U.S. DDT ban reversed the crash. Delisted from the ESA in 2007; still protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act.',
      when: 'USFWS: 417 known nesting pairs in the lower 48 U.S. states in 1963 → 9,789 pairs at the 2007 delisting → about 316,700 individuals and 71,467 occupied nests (2018–2019 data). IUCN: Least Concern.',
      humanRole:
        'Shooting and DDT caused the crash. The 1972 DDT ban, Endangered Species Act work, and nest-site protection reversed it.',
      sources:
        'USFWS bald eagle species page; USFWS Bald Eagle Population Size: 2020 Update; Federal Register delisting rule, 2007.',
    },
    'white-rhinoceros': {
      commonName: 'White rhinoceros',
      hook: 'Southern white rhinos were hunted to a single South African refuge a century ago; IUCN/TRAFFIC now put African white rhinos at about 15,752 at end-2024 — Near Threatened, and still the main living white-rhino stock.',
      imageAlt: 'A southern white rhinoceros and calf grazing, wide square lip showing',
      what: 'The wide-mouthed “square-lipped” grazer of African savanna. Two subspecies: southern (the recovery) and northern (functionally extinct in the wild — already told on the Endangered shelf). Almost all living white rhinos are the southern subspecies (C. s. simum).',
      range:
        'African savanna. Southern white rhinos were hunted to a single South African refuge a century ago. The northern subspecies is not this card’s hero figure.',
      story:
        'Protection and translocation from Hluhluwe–iMfolozi rebuilt southern numbers from a tiny remnant into the tens of thousands. That is a Surviving comeback. It is not the same story as Critically Endangered black, Javan, or Sumatran rhinos, and it is not the northern white remnant.',
      when: 'IUCN press release (7 Aug 2025, citing the AfRSG/TRAFFIC CITES report): 15,752 white rhinos in Africa at end-2024 (down 11.2% from 2023 — drought, survey, and management shocks after earlier gains). IRF/public summaries still frame the long arc as “fewer than 100 in the early 1900s → tens of thousands.” IUCN Red List: Near Threatened.',
      humanRole:
        'Hunting reduced the southern subspecies to one refuge. Protection and translocation rebuilt the living stock.',
      sources:
        'IUCN Red List (Ceratotherium simum, Near Threatened); IUCN press release, 7 Aug 2025; International Rhino Foundation; Pachyderm AfRSG chair report; South Africa biodiversity management plan for the white rhinoceros.',
    },
    'arabian-oryx': {
      commonName: 'Arabian oryx',
      hook: 'Declared extinct in the wild in the early 1970s, then returned from captive “world herds”; by the 2016 IUCN assessment about 1,220 animals lived wild again (850 mature), and the species became the first to move from Extinct in the Wild back to Vulnerable.',
      imageAlt: 'An Arabian oryx standing in desert scrub at Uruq Bani Ma’arid, Saudi Arabia',
      what: 'A white desert antelope with long, nearly straight horns — the smallest Oryx, native to Arabian Peninsula deserts and steppes.',
      range:
        'Arabian Peninsula deserts and steppes. Releases from 1980 onward put animals back in Oman, Saudi Arabia, Israel, the UAE, Jordan and related sites.',
      story:
        'Motorised hunting emptied the last wild herds. Captive breeding and releases from 1980 onward returned animals from captive “world herds.” It is still threatened (habitat, illegal hunting, small wild totals) — but it is a documented return from Extinct in the Wild, not a Critically Endangered leftover with no recovery path.',
      when: 'Declared extinct in the wild in the early 1970s. IUCN SSC Antelope Specialist Group fact sheet (assessment 2016): about 1,220 in the wild (850 mature) and 6,000–7,000 in captivity. Status: Vulnerable — the first species to move from Extinct in the Wild back to Vulnerable. IUCN news (2011) recorded the step down from a higher threat category. Royal Society Open Science (2021) reviews Oman reintroduction genetics.',
      humanRole:
        'Motorised hunting emptied the last wild herds. Captive breeding and releases from 1980 put the species back.',
      sources:
        'IUCN Red List (Oryx leucoryx, Vulnerable); IUCN, “A grain of hope in the desert” (2011); IUCN SSC Antelope Specialist Group fact sheet; Royal Society Open Science, 2021.',
    },
    'lord-howe-island-stick-insect': {
      commonName: 'Lord Howe Island stick insect',
      hook: 'Thought extinct on Lord Howe after rats in 1918 — a tiny wild population hangs on at Ball’s Pyramid.',
      imageAlt: 'A dark, heavy-bodied Lord Howe Island stick insect resting on a person’s open hand',
      what: 'The Lord Howe Island stick insect (Dryococelus australis), also called the tree lobster, is a large, flightless stick insect once common on Lord Howe Island. IUCN lists it as Critically Endangered under criterion D — a very small wild population.',
      range:
        'Lord Howe Island until black rats arrived with the wreck of the SS Makambo in 1918. The wild remnant lives on Ball’s Pyramid, a sea stack about 23 km southeast of the island. Captive colonies now also exist for insurance.',
      story:
        'After 1918 the insect disappeared from Lord Howe and was written off as extinct. In 2001 climbers found a few animals under a single shrub on Ball’s Pyramid. Captive breeding followed. The wild count remains tiny; rats, not a changing climate, were the original cause.',
      when: 'Critically Endangered now (IUCN CR D). Extinct on Lord Howe itself; surviving on Ball’s Pyramid and in captivity.',
      humanRole:
        'An accidental rat invasion erased the island population. People later found the remnant and now keep captive stock.',
      sources: 'IUCN Red List (Dryococelus australis, CR D).',
    },
    'queen-alexandras-birdwing': {
      commonName: 'Queen Alexandra’s birdwing',
      hook: 'The world’s largest butterfly — a Papua New Guinea endemic pressed by oil palm, logging, and trade.',
      imageAlt:
        'A pinned male Queen Alexandra’s birdwing, green-and-black wings spread, Natural History Museum specimen',
      what: 'Queen Alexandra’s birdwing (Ornithoptera alexandrae) is the world’s largest butterfly. Females can exceed 25 cm in wingspan. It is endemic to a small part of Papua New Guinea. IUCN lists it as Endangered.',
      range:
        'Lowland rainforest in Oro Province, Papua New Guinea, where the larval food plant (a pipevine, Pararistolochia) still grows. It has no other country.',
      story:
        'Oil-palm estates, logging, and collection for trade have cut and fragmented the forest it needs. The species is legally protected; habitat conversion is the lasting pressure. A large wingspan does not make a large range.',
      when: 'Endangered now. Endemic, and still losing forest.',
      humanRole: 'Conversion of lowland forest and a collector market for a famous butterfly.',
      sources: 'IUCN Red List (Ornithoptera alexandrae, EN).',
    },
    monarch: {
      commonName: 'Monarch',
      hook: 'IUCN moved the migratory subspecies from Endangered to Vulnerable in 2023 — a model change, not a recovery.',
      imageAlt: 'A monarch butterfly with orange-and-black wings perched on a flower',
      what: 'The monarch (Danaus plexippus) is a milkweed butterfly. The North American migratory subspecies plexippus is the famous multi-generation migrant. IUCN moved that subspecies from Endangered to Vulnerable in assessment 2023-1. The shift was a change in the assessment model, not evidence that the migration had recovered. A U.S. Fish and Wildlife Service listing process is still underway.',
      range:
        'The migratory subspecies breeds across much of North America and winters in Mexico and California. Other, mostly non-migratory, populations live on islands and in the American tropics. This card is about the migrant.',
      story:
        'Overwintering clusters in Mexico and California shrank in the late twentieth and early twenty-first centuries as milkweed and winter forest were lost and weather extremes hit the roosts. The 2023 IUCN downlisting did not claim the flyway was healthy. It changed how a small, fluctuating count is scored. USFWS has not finished its own decision.',
      when: 'Migratory subspecies: IUCN Vulnerable (2023-1), formerly Endangered. USFWS listing still open.',
      humanRole:
        'Habitat loss, pesticides, and a changed climate on a migration that already depended on a few winter groves.',
      sources:
        'IUCN Red List (Danaus plexippus plexippus, VU 2023-1; species page); USFWS monarch species page.',
    },
    'franklins-bumble-bee': {
      commonName: 'Franklin’s bumble bee',
      hook: 'A bumble bee of a tiny Oregon–California range that collapsed in the 1990s–2000s.',
      imageAlt: 'Franklin’s bumble bee on a flower, yellow and black, photographed for USDA',
      what: 'Franklin’s bumble bee (Bombus franklini) is a bumble bee with one of the smallest ranges of any Bombus — a sliver of southern Oregon and northern California. IUCN lists it as Critically Endangered. Surveys from the 1990s into the 2000s documented a collapse.',
      range:
        'A short stretch of the Klamath-Siskiyou region, historically from southern Oregon into northern California. It was never a continent-wide bee.',
      story:
        'Once locally familiar to specialists, it became vanishingly rare within about a decade. Disease spillover from managed bees, habitat loss, and a small range are the usual suspects; the last widely accepted records are sparse. The range was always a short Oregon–California sliver — not a stand-in for every declining Bombus.',
      when: 'Critically Endangered now. Range always tiny; numbers collapsed recently.',
      humanRole:
        'A small endemic range plus the pressures people added — pathogens, farms, and a changed landscape.',
      sources: 'IUCN Red List (Bombus franklini, CR).',
    },
    'american-burying-beetle': {
      commonName: 'American burying beetle',
      hook: 'A carrion specialist with remnant U.S. populations, listed under the Endangered Species Act.',
      imageAlt: 'An American burying beetle, orange-and-black, on pale ground',
      what: 'The American burying beetle (Nicrophorus americanus) is a carrion specialist: adults bury small vertebrate carcasses as food for their larvae. It is listed under the U.S. Endangered Species Act. Remnant populations persist in a few states. This card does not invent a global IUCN assessment — the pack has no IUCN slug for the species.',
      range:
        'Once much of the eastern and central United States. Today, scattered remnants (including parts of the Great Plains and New England) and reintroduction sites. Not a Eurasian burying beetle.',
      story:
        'As forests and grasslands were converted and carcasses became scarce or toxic, the beetle vanished from most of its former map. ESA listing, captive rearing, and releases have kept a few populations on the books. Recovery is local, not a restored continent.',
      when: 'Federally listed in the United States. Remnant and managed populations only.',
      humanRole: 'Land conversion and a thinned carrion supply; later law and releases kept a remnant.',
      sources: 'U.S. Fish and Wildlife Service species page (Nicrophorus americanus).',
    },
    'hines-emerald': {
      commonName: 'Hine’s emerald',
      hook: 'A dragonfly of calcareous fens in the U.S. Midwest — federally listed, groundwater-dependent.',
      imageAlt: 'A Hine’s emerald dragonfly with a metallic green thorax, perched',
      what: 'Hine’s emerald (Somatochlora hineana) is a dragonfly of calcareous fens — groundwater-fed wetlands on limestone or dolomite — in the U.S. Midwest. It is federally listed under the Endangered Species Act. The pack has no global IUCN slug; this card does not invent one.',
      range:
        'Scattered fen systems in the Midwest, historically including parts of Illinois, Wisconsin, Michigan, Missouri, and nearby states. Larvae need the cool, mineral-rich water of those fens.',
      story:
        'Fens were drained, quarried, or cut off from groundwater. A dragonfly that cannot use a farm pond disappears when the fen goes. Listing and fen protection are the remaining tools. This is not a pond-skimmer of every county wetland.',
      when: 'Federally listed in the United States. Tied to a rare wetland type.',
      humanRole: 'Drainage, quarry, and development of calcareous fens — the only habitat the species uses.',
      sources: 'U.S. Fish and Wildlife Service species page (Somatochlora hineana).',
    },
    'rusty-patched-bumble-bee': {
      commonName: 'Rusty patched bumble bee',
      hook: 'Once common across the eastern United States and southern Canada; after a steep early-2000s crash it was listed under the U.S. Endangered Species Act in 2017, and recent records cover only about 13 U.S. states plus one Canadian province.',
      imageAlt:
        'A rusty patched bumble bee on purple wild bergamot, rusty abdominal patch showing',
      what: 'One of roughly 21 eastern U.S. bumble bee species — a pollen-storing social bee whose workers show a distinctive rusty patch on the abdomen (hence the name). It is Bombus affinis, not Franklin’s bumble bee (Bombus franklini).',
      range:
        'Historical range from Georgia north into southern Quebec and Ontario and west toward the Dakotas. Since about 2000 the U.S. Fish and Wildlife Service overview confirms it from far fewer jurisdictions: about 13 U.S. states and one Canadian province.',
      story:
        'Pathogens, pesticides, habitat loss, competition with managed bees, and climate stress stacked into a range collapse. Franklin’s bumble bee is a different species with a tiny Oregon–California range. This bee was once common across the eastern half of the continent.',
      when: 'U.S. Fish and Wildlife Service: federally Endangered (2017); recovery plan finalized 2021. Recent records cover about 13 U.S. states and one Canadian province.',
      humanRole:
        'Pesticides, pathogens from managed bees, lost habitat, and a changed climate cut a once-common eastern bee down to a fraction of its map. The 2017 Endangered Species Act listing and the 2021 recovery plan are the federal response.',
      sources:
        'U.S. Fish and Wildlife Service — rusty patched bumble bee (Bombus affinis).',
    },
    'european-stag-beetle': {
      commonName: 'European stag beetle',
      hook: 'Europe’s largest beetle and a Habitats Directive flagship for rotting broadleaf wood — IUCN’s 2023 Europe / EU27 assessment lists it Near Threatened as breeding habitat keeps shrinking even while citizen-science records rise.',
      imageAlt: 'A male European stag beetle with large antler-like mandibles on a green leaf',
      what: 'A big lucanid (Lucanus cervus) whose larvae spend years in moist, decaying broadleaf wood — stumps, buried roots, veteran trees. Males carry the famous “antlers”; females lack them. It is a deadwood specialist, not a carrion beetle.',
      range:
        'Europe. Breeding needs continuity of moist, decaying broadleaf wood. Adults wander, so a sighting is not the same as a breeding stump.',
      story:
        'Rising records from citizen science do not equal more breeding sites — many sightings are wanderers. The Red List treats continuing loss of deadwood continuity as the real signal. Habitats Directive Article 17 reporting has shown unfavourable status in a substantial share of Member States across successive cycles.',
      when: 'IUCN Europe / EU27 (2023): Near Threatened under B2b(ii,iii). Larval development typically takes 4–5 years, so a gap in deadwood bites for more than a decade.',
      humanRole:
        'People remove stumps, fell veteran broadleaf trees, and break the continuity of rotting wood the larvae need. The beetle is a Habitats Directive flagship for that wood.',
      sources:
        'IUCN Red List (Lucanus cervus, Europe / EU27, Near Threatened, 2023); EUNIS; JNCC UK Habitats Directive Article 17 S1083 (2019).',
    },
    'hermit-beetle': {
      commonName: 'Hermit beetle',
      hook: 'A scarab that lives almost its whole life in the wood mould of old hollow trees across Europe — IUCN (2023) lists it Near Threatened because veteran trees are still being lost and the next generation of hollows is decades behind.',
      imageAlt: 'A dark brown hermit beetle on the rough bark of an old tree',
      what: 'An obligate saproxylic scarab (Osmoderma eremita) of hollow broadleaf trees. Adults rarely fly far; populations sit inside single trees or tiny tree groups for generations.',
      range:
        'Europe and the EU27. The extent of occurrence is large, but the area of occupancy for breeding sites is estimated at only about 2,000–2,500 km², and those sites are severely fragmented.',
      story:
        'Stag beetle larvae need a volume of moist deadwood. Hermit beetles need a cavity that holds wood mould, and the next generation of hollows is decades behind the trees being lost now. Because adults rarely fly far, a gap between veteran trees can isolate a population for generations.',
      when: 'IUCN (2023): Near Threatened, B2ab(ii,iii,v). Old hollow trees are in continuous decline, with a long regeneration lag.',
      humanRole:
        'Felling veteran hollow trees, and failing to keep the next generation of cavities, removes the only places this beetle can breed.',
      sources: 'IUCN Red List (Osmoderma eremita, Near Threatened, 2023).',
    },
    'salt-creek-tiger-beetle': {
      commonName: 'Salt Creek tiger beetle',
      hook: 'A tiger beetle endemic to eastern Nebraska’s salt flats — after wetland drainage around Lincoln, intensive surveys since 1991 have counted as few as 153 adults (2005) and a peak of 777 (2002), all in a handful of remnant sites.',
      imageAlt: 'A Salt Creek tiger beetle, metallic green-bronze, on pale saline mud',
      what: 'A small, fast predatory beetle of bare saline mud along Salt Creek and Little Salt Creek. Larvae dig burrows in the salt crust; adults hunt on open flats. Taxonomy sometimes uses Ellipsoptera nevadica lincolniana; the U.S. Fish and Wildlife Service page still leads with Cicindela nevadica lincolniana.',
      range:
        'Eastern Nebraska’s saline wetlands, on remnant salt flats along Salt Creek and Little Salt Creek north of Lincoln. It is not a carrion beetle and it is not a widespread tiger beetle.',
      story:
        'Levees, channelization, and the growth of Lincoln erased most of the salt marsh, leaving one fragile metapopulation. Nebraska Game and Parks survey synthesis: six populations in 1991, and three of those later lost. Every recent count is from a handful of remnant sites.',
      when: 'Endangered under the U.S. Endangered Species Act. Intensive surveys since 1991 include a high of 777 adults (2002), a low of 153 (2005), and 374 counted in 2012. The Service species page and the signed recovery plan document the listing and the recovery outline.',
      humanRole:
        'Drainage, levees, channelization, and city growth around Lincoln removed most of the saline mudflats the beetle hunts and burrows in.',
      sources:
        'U.S. Fish and Wildlife Service species page; Nebraska Game and Parks; USFWS Salt Creek tiger beetle recovery plan; University of Nebraska–Lincoln visual population estimates.',
    },
    wetapunga: {
      commonName: 'Wetapunga',
      hook: 'New Zealand’s largest wētā — once reduced to Hauturu-o-Toi / Little Barrier, then bred and moved: Auckland Zoo and partners have released more than 5,000 animals onto predator-free islands, and NZTCS now rates the species Nationally Increasing (still Threatened / conservation-dependent).',
      imageAlt: 'A wetapunga, a large flightless wētā, on a green leaf',
      what: 'Deinacrida heteracantha — a giant flightless orthopteran, the wētāpunga. Adult females average about 40 g; the heaviest recorded gravid female reached about 71 g. Nocturnal leaf-eaters that also move seeds in nutrient-rich droppings.',
      range:
        'Once reduced to Hauturu-o-Toi / Little Barrier Island. Captive-bred animals now also live on other predator-free islands, including Motuora, Tiritiri Matangi, and sites in the Bay of Islands.',
      story:
        'After Pacific rats were cleared from Little Barrier, the Department of Conservation and Auckland Zoo built captive lines and moved animals to Motuora, Tiritiri Matangi, Bay of Islands sites, and other pest-free islands. It is a managed comeback that still depends on predator-free habitat.',
      when: 'New Zealand Threat Classification System: Nationally Increasing, still under the Threatened umbrella and still conservation-dependent. Population on the order of 1,000–5,000 mature individuals, on multiple predator-free islands; the assessment reads the trend as an increase of more than 10 percent, and notes also record more than 30 percent. Auckland Zoo (2020): more than 5,000 released; the Bay of Islands release opened islands 6–8 in that island set.',
      humanRole:
        'Introduced predators reduced the wētā to one island. Rat clearance, captive breeding, and island releases by the Department of Conservation and Auckland Zoo put animals back — only where predators stay out.',
      sources:
        'NZTCS assessment (Deinacrida heteracantha); Department of Conservation Wetapunga page and giant wētā translocation guidance; Auckland Zoo, 2020.',
    },
    cattle: {
      commonName: 'Cattle',
      hook: 'The world’s main meat-and-milk bovine — taurine and indicine cattle that people keep, not the extinct aurochs.',
      imageAlt: 'Hereford cattle standing in a pasture',
      what: 'Cattle are domestic bovines kept for milk, meat, hides, and draft. Living cattle belong to the taurine (Bos taurus) and indicine (Bos indicus, zebu) lineages. They are not the extinct aurochs (Bos primigenius) on the Extinct shelf, and they are not African savanna buffalo.',
      range:
        'Kept on every inhabited continent. Density follows pasture, feed, and dairy markets. FAO maps the global distribution of cattle as livestock, not as a wild species.',
      story:
        'People domesticated cattle from aurochs in the Holocene and then moved the herds with farms and trade. Today the animal is a managed food system: breeds, feedlots, and pastoral herds. Wild relatives and the aurochs are other cards.',
      when: 'A living domesticate, maintained by people. Not an IUCN wild-species listing.',
      humanRole: 'We made the animal, spread it, and now run the herds that feed much of the world.',
      sources: 'FAO Livestock Systems — cattle.',
    },
    chicken: {
      commonName: 'Chicken',
      hook: 'The most abundant domestic livestock — a junglefowl turned into the world’s default farm bird.',
      imageAlt: 'A domestic chicken standing in dry grass',
      what: 'The chicken (Gallus gallus domesticus) is the domestic form of the red junglefowl. It is the most abundant domestic livestock: more individual chickens are alive than any other farmed bird or mammal. This card is the kept bird, not a wild Gallus.',
      range:
        'Villages, barns, and industrial houses on every inhabited continent. FAO maps the global distribution of chickens as livestock.',
      story:
        'Domestication in Asia produced a bird people could move. Industrial breeding then made meat and egg lines that live short, dense lives. Village flocks still exist. The wild junglefowl remains a different, much smaller story.',
      when: 'A living domesticate, and the most numerous farm animal.',
      humanRole: 'We bred, housed, and counted them as a food system — not as wildlife.',
      sources: 'FAO Livestock Systems — chickens.',
    },
    sheep: {
      commonName: 'Sheep',
      hook: 'The small-ruminant card on this shelf — wool, milk, and meat. No separate goat.',
      imageAlt: 'A domestic sheep standing in grass, facing the camera',
      what: 'The sheep (Ovis aries) is a domestic small ruminant kept for wool, meat, and milk. This shelf has one small-ruminant card. It does not add a goat.',
      range:
        'Pastures from dry steppe to wet temperate hills, and feed systems beside them. FAO maps the global distribution of sheep as livestock.',
      story:
        'People domesticated sheep in the Neolithic Near East and walked them across continents. Breeds now fit wool, milk, or meat. The wild mouflon and other Ovis are not this card.',
      when: 'A living domesticate. This is the kept sheep, not a wild caprid.',
      humanRole: 'We bred and moved them as fibre and food; the landscape they graze is one we made.',
      sources: 'FAO Livestock Systems — sheep.',
    },
    pig: {
      commonName: 'Pig',
      hook: 'The kept pig — Sus domesticus — distinct from the Surviving wild boar.',
      imageAlt: 'A domestic pig in a farm yard, pink-skinned and heavy',
      what: 'The pig (Sus domesticus) is the domestic pig people keep for meat. It is a different card from the Surviving wild boar (Sus scrofa). Feral pigs are a management problem in many countries; they are not this livestock entry.',
      range:
        'Farms worldwide, from village sties to industrial houses. FAO maps the global distribution of pigs as livestock.',
      story:
        'Pigs were domesticated more than once from wild boar. Today most meat pigs are commercial lines. Village pigs and heritage breeds remain. The wild ancestor has its own shelf.',
      when: 'A living domesticate. Not a second wild-boar card.',
      humanRole: 'We keep them as food; we also created feral populations where they were released or escaped.',
      sources: 'FAO Livestock Systems — pigs.',
    },
    'water-buffalo': {
      commonName: 'Water buffalo',
      hook: 'About 15 percent of the world’s milk — and in India and Pakistan, more buffalo milk than cow milk.',
      imageAlt: 'A domestic water buffalo bull near Mehsana, Gujarat, India',
      what: 'The water buffalo (Bubalus bubalis) is the domestic Asian buffalo, kept for milk, meat, and draft. FAO puts buffaloes at about 15 percent of world milk; in India and Pakistan buffalo milk exceeds cow milk. This is not the African savanna buffalo (Syncerus caffer).',
      range:
        'South and Southeast Asia hold most of the herd; smaller populations live in the Mediterranean, the Caucasus, South America, and elsewhere. FAO maps buffaloes as livestock.',
      story:
        'People domesticated the Asian buffalo and built wet-rice and dairy systems around it. River and swamp types differ. The wild water buffalo (Bubalus arnee) is a threatened relative, not this kept animal, and not an African bovine.',
      when: 'A living domesticate, and a major dairy species in South Asia.',
      humanRole: 'We keep buffaloes as milk and draft animals. The card is the kept species.',
      sources: 'FAO buffalo dairy page; FAO Livestock Systems — buffaloes.',
    },
    horse: {
      commonName: 'Horse',
      hook: 'Domestic horses spread from the Western Eurasian steppes — Librado et al., Nature 2021, not an older “~4000 BC” line.',
      imageAlt: 'A white Camargue horse standing in grass',
      what: 'The horse (Equus ferus caballus) is the domestic horse people ride, drive, and keep. Ancient-DNA work by Librado and colleagues (Nature, 2021) places the rise and spread of the modern domestic lineage (DOM2) on the Western Eurasian steppes, expanding around 2200–2000 BC — not the older FAO-style date of about 4000 BC, and not the earlier Botai horses of Kazakhstan, a different lineage.',
      range:
        'Kept worldwide. FAO maps horses as livestock. Wild horses and the extinct tarpan are other stories; this card is the kept animal.',
      story:
        'DOM2 horses replaced earlier lineages as they spread with people. That date is a genetic result, not a myth of a single first rider in 4000 BC. Working, sport, and feral herds all descend from that kept lineage.',
      when: 'A living domesticate. Modern lineage: Western Eurasian steppes, ~2200–2000 BC (Librado et al. 2021).',
      humanRole: 'We bred and moved them as transport and work; the date of the living lineage is a 2021 paper, not folklore.',
      sources: 'FAO Livestock Systems — horses; Librado et al., Nature, 2021 (doi:10.1038/s41586-021-04018-9).',
    },
    dog: {
      commonName: 'Dog',
      hook: 'The first domestic animal — distinct from present wolves, with at least five lineages by about 11,000 years ago.',
      imageAlt: 'Two black Labrador retrievers with collars in dry grass — clearly domestic dogs, not wolves',
      what: 'The dog (Canis familiaris) is the first animal people domesticated. Bergström and colleagues (Science, 2020) show that dogs were already genetically distinct from present-day wolves, and that at least five dog lineages existed by about 11,000 years ago. This is not a second gray-wolf card.',
      range:
        'Wherever people live. Village dogs, working lines, and pedigree breeds are all the same domestic species. The gray wolf (Canis lupus) remains a wild canid on the Surviving shelf.',
      story:
        'Dogs entered human camps in the Late Pleistocene. By the early Holocene they were already a set of lineages, not a single recent offshoot of today’s wolves. Later breeding made the modern types. The forbidden Nature paper is not a source here; the Science 2020 paper is.',
      when: 'The oldest domesticate. Distinct from present wolves by the Holocene; ≥5 lineages by ~11 ka (Bergström et al. 2020).',
      humanRole: 'We made the first kept animal — companion, hunter, and guard — not a second listing of the wolf.',
      sources:
        'Bergström et al., Science, 2020 (PMC7116352; doi:10.1126/science.aba9572).',
    },
    camelids: {
      commonName: 'Camelids',
      hook: 'One card for camel, llama, and alpaca — FAO’s International Year of Camelids 2024, not four species tiles.',
      imageAlt: 'A dromedary camel in profile, representing the camelid family people keep',
      what: 'Camelids here means the camelids people keep: dromedary and Bactrian camels (Camelus), the llama (Lama glama), and the alpaca (Vicugna pacos). FAO marked 2024 as the International Year of Camelids. This is one card, not a camel plus a llama plus an alpaca plus a vicuña.',
      range:
        'Camels in dry Asia and Africa (and now Australia); llamas and alpacas in the Andes, with export herds elsewhere. Wild vicuña and guanaco are relatives, not extra tiles on this shelf.',
      story:
        'People domesticated Old World camels and Andean camelids as pack, fibre, milk, and meat animals of dry and high country. FAO’s 2024 year asked governments to treat those herds as a food-and-culture system, not a curiosity. One encyclopedia card is enough.',
      when: 'Living domesticates. FAO International Year of Camelids, 2024.',
      humanRole: 'We keep camels, llamas, and alpacas as working and fibre animals of dry and mountain lands.',
      sources: 'FAO International Year of Camelids 2024.',
    },
  },
  ru: packRu,
  pl: packPl,
  lv: packLv,
};
