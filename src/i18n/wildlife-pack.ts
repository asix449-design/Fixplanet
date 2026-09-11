import type { SpeciesCopy } from '../data/wildlife';
import type { Locale } from './config';
import { packLv } from './wildlife-pack-lv';
import { packPl } from './wildlife-pack-pl';
import { packRu } from './wildlife-pack-ru';

/** Insects + domesticates shelves (founder pack, 11 Sep). */
export const pack: Record<Locale, Record<string, SpeciesCopy>> = {
  en: {
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
      hook: 'A bumble bee of a tiny Oregon–California range that collapsed in the 1990s–2000s. This shelf’s only bee.',
      imageAlt: 'Franklin’s bumble bee on a flower, yellow and black, photographed for USDA',
      what: 'Franklin’s bumble bee (Bombus franklini) is a bumble bee with one of the smallest ranges of any Bombus — a sliver of southern Oregon and northern California. IUCN lists it as Critically Endangered. Surveys from the 1990s into the 2000s documented a collapse.',
      range:
        'A short stretch of the Klamath-Siskiyou region, historically from southern Oregon into northern California. It was never a continent-wide bee.',
      story:
        'Once locally familiar to specialists, it became vanishingly rare within about a decade. Disease spillover from managed bees, habitat loss, and a small range are the usual suspects; the last widely accepted records are sparse. This is the shelf’s one bee card — not a second species and not a stand-in for every declining Bombus.',
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
