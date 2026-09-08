import type { HubIconName } from './hub';
import { cite, type PrimarySource } from './sources';

export type { PrimarySource } from './sources';

export const migrationShelfKeys = [
  'humans',
  'great-migrations',
  'birds',
  'animals',
] as const;

export type MigrationShelf = (typeof migrationShelfKeys)[number];

export const migrationHub = [
  { key: 'humans', icon: 'human' },
  { key: 'great-migrations', icon: 'horse' },
  { key: 'birds', icon: 'migrate' },
  { key: 'animals', icon: 'paw' },
] as const satisfies ReadonlyArray<{ key: MigrationShelf; icon: HubIconName }>;

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
};

export type MigrationEntryMeta = {
  slug: string;
  shelf: Exclude<MigrationShelf, 'humans'>;
  scientificName?: string;
  image: ImageCredit;
  sources: PrimarySource[];
  /** Optional Wildlife species page for the same animal. */
  wildlifeSlug?: string;
};

export type MigrationEntryCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  what: string;
  route: string;
  drivers: string;
  timing: string;
  pressure: string;
  sourcesNote: string;
};

export type MigrationEntry = MigrationEntryMeta & MigrationEntryCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
): ImageCredit {
  return { file, credit, license, sourceUrl };
}

/**
 * Curated first catalog. To add a card:
 * 1. Add a row here (English slug, shelf, optional Latin name, image, primary sources).
 * 2. Add the same slug in `src/i18n/migration-en.ts` (and -ru / -pl / -lv).
 * 3. Drop a Wikimedia/PD photo in `public/images/migration/{file}` and record credits.json.
 * 4. `npm run build`.
 *
 * Slugs stay English. Do not invent routes or dates. Prefer BirdLife / CMS flyways,
 * IUCN, NOAA, named paleodemography papers, and named late-antique sources.
 * Great-migrations cards are historic mass movements — not Pleistocene dispersal.
 */
export const migrationEntryMeta: MigrationEntryMeta[] = [
  {
    slug: 'hunnic-invasion',
    shelf: 'great-migrations',
    image: img(
      'hunnic-cauldron.jpg',
      'Vyacheslav Kirillin / Wikimedia Commons — museum copy (2006) of a Hunnic cauldron type, 4th–5th c., Kazan Kremlin',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Hunnic_cauldron_(2023-03-07)_02.jpg',
    ),
    sources: [
      cite(
        'Ammianus Marcellinus, Res Gestae 31 — Goths at the Danube, 376 CE (Yonge trans.)',
        'https://www.tertullian.org/fathers/ammianus_31_book31.htm',
      ),
      cite(
        'Heather, English Historical Review, 1995 — Hunnic pressure and the western empire',
        'https://doi.org/10.1093/ehr/CX.435.4',
      ),
      cite(
        'Hakenbeck & Büntgen, Journal of Roman Archaeology, 2022 — drought and Hunnic raiding, 430s–450s',
        'https://doi.org/10.1017/S1047759422000332',
      ),
      cite(
        'Cambridge / Hakenbeck note on the 2022 tree-ring argument (not a 376 origin story)',
        'https://www.cam.ac.uk/research/news/drought-encouraged-attilas-huns-to-attack-the-roman-empire-tree-rings-suggest',
      ),
    ],
  },
  {
    slug: 'arctic-tern',
    shelf: 'birds',
    scientificName: 'Sterna paradisaea',
    image: img(
      'arctic-tern.jpg',
      'AWeith / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Arctic_tern_(Sterna_paradisaea)_attacking,_Amsterdam_island,_Svalbard.jpg',
    ),
    sources: [
      cite(
        'Egevang et al., PNAS, 2010 — Greenland Arctic terns, ~70,900 km round trip',
        'https://www.pnas.org/doi/10.1073/pnas.0909493107',
      ),
      cite(
        'IUCN Red List — Sterna paradisaea (Least Concern)',
        'https://www.iucnredlist.org/species/22694629/132066562',
      ),
    ],
  },
  {
    slug: 'bar-tailed-godwit',
    shelf: 'birds',
    scientificName: 'Limosa lapponica',
    image: img(
      'bar-tailed-godwit.jpg',
      'Andreas Trepte / Wikimedia Commons',
      'CC BY-SA 2.5',
      'https://commons.wikimedia.org/wiki/File:Bar-tailed_Godwit.jpg',
    ),
    sources: [
      cite(
        'Gill et al., Proc. R. Soc. B, 2009 — Alaska–New Zealand non-stop flights',
        'https://royalsocietypublishing.org/doi/10.1098/rspb.2008.1151',
      ),
      cite(
        'Battley et al., Proc. R. Soc. B, 2012 — 11,680 km, 9.4 days, baueri',
        'https://royalsocietypublishing.org/doi/10.1098/rspb.2011.1778',
      ),
      cite(
        'IUCN Red List — Limosa lapponica (Near Threatened)',
        'https://www.iucnredlist.org/species/22693158/131111195',
      ),
    ],
  },
  {
    slug: 'barn-swallow',
    shelf: 'birds',
    scientificName: 'Hirundo rustica',
    image: img(
      'barn-swallow.jpg',
      'Yerpo / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Hirundo_rustica_Ormoz.jpg',
    ),
    sources: [
      cite(
        'IUCN Red List — Hirundo rustica (Least Concern)',
        'https://www.iucnredlist.org/species/22712252/87461332',
      ),
      cite(
        'BirdLife International — barn swallow factsheet and Palearctic–African flyways',
        'https://datazone.birdlife.org/species/factsheet/barn-swallow-hirundo-rustica',
      ),
    ],
  },
  {
    slug: 'white-stork',
    shelf: 'birds',
    scientificName: 'Ciconia ciconia',
    image: img(
      'white-stork.jpg',
      'Charles J. Sharp / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:White_stork_(Ciconia_ciconia)_in_flight_with_transmitter.jpg',
    ),
    sources: [
      cite(
        'IUCN Red List — Ciconia ciconia (Least Concern)',
        'https://www.iucnredlist.org/species/22697691/86248677',
      ),
      cite(
        'BirdLife International — white stork; East Atlantic and Mediterranean–Black Sea flyways',
        'https://datazone.birdlife.org/species/factsheet/white-stork-ciconia-ciconia',
      ),
      cite(
        'CMS / AEWA — African–Eurasian migratory waterbirds',
        'https://www.unep-aewa.org/',
      ),
    ],
  },
  {
    slug: 'amur-falcon',
    shelf: 'birds',
    scientificName: 'Falco amurensis',
    image: img(
      'amur-falcon.jpg',
      'Touhid biplob / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Falco_amurensis_in_flight.jpg',
    ),
    sources: [
      cite(
        'IUCN Red List — Falco amurensis (Least Concern)',
        'https://www.iucnredlist.org/species/22696445/93562904',
      ),
      cite(
        'CMS — Amur falcon migration and the Nagaland conservation turnaround',
        'https://www.cms.int/en/news/amur-falcons',
      ),
    ],
  },
  {
    slug: 'bar-headed-goose',
    shelf: 'birds',
    scientificName: 'Anser indicus',
    image: img(
      'bar-headed-goose.jpg',
      'Ron Knight / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Bar-headed_Goose.jpg',
    ),
    sources: [
      cite(
        'Hawkes et al., PNAS, 2011 — bar-headed geese over the Himalaya',
        'https://www.pnas.org/doi/10.1073/pnas.1017295108',
      ),
      cite(
        'IUCN Red List — Anser indicus (Least Concern)',
        'https://www.iucnredlist.org/species/22679893/85980401',
      ),
    ],
  },
  {
    slug: 'wildebeest',
    shelf: 'animals',
    scientificName: 'Connochaetes taurinus',
    image: img(
      'wildebeest.jpg',
      'Charles J. Sharp / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Blue_wildebeest_(Connochaetes_taurinus_taurinus)_female_and_calf.jpg',
    ),
    sources: [
      cite(
        'UNESCO — Serengeti National Park (seasonal wildebeest migration)',
        'https://whc.unesco.org/en/list/156',
      ),
      cite(
        'IUCN Red List — Connochaetes taurinus (Least Concern)',
        'https://www.iucnredlist.org/species/5227/233511186',
      ),
      cite(
        'Holdo, Holt & Fryxell, PLoS Biology, 2009 — rainfall, grass, and the Serengeti migration',
        'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1000371',
      ),
    ],
  },
  {
    slug: 'caribou',
    shelf: 'animals',
    scientificName: 'Rangifer tarandus',
    image: img(
      'caribou.jpg',
      'Alexandre Buisse / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:20070818-0001-strolling_reindeer.jpg',
    ),
    sources: [
      cite(
        'IUCN Red List — Rangifer tarandus (Vulnerable)',
        'https://www.iucnredlist.org/species/29742/22167140',
      ),
      cite(
        'Joly et al., Scientific Reports, 2019 — long-distance caribou movements across the Arctic',
        'https://www.nature.com/articles/s41598-019-51884-5',
      ),
      cite(
        'U.S. Fish & Wildlife Service — Porcupine Caribou herd, Arctic National Wildlife Refuge',
        'https://www.fws.gov/refuge/arctic/porcupine-caribou-herd',
      ),
    ],
  },
  {
    slug: 'humpback-whale',
    shelf: 'animals',
    scientificName: 'Megaptera novaeangliae',
    image: img(
      'humpback-whale.jpg',
      'Whit Welles / Wikimedia Commons',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:Humpback_stellwagen_edit.jpg',
    ),
    wildlifeSlug: 'humpback-whale',
    sources: [
      cite(
        'IUCN Red List — Megaptera novaeangliae (Least Concern, 2018)',
        'https://www.iucnredlist.org/species/13006/50362794',
      ),
      cite(
        'NOAA Fisheries — humpback whale, feeding and breeding migrations',
        'https://www.fisheries.noaa.gov/species/humpback-whale',
      ),
    ],
  },
  {
    slug: 'gray-whale',
    shelf: 'animals',
    scientificName: 'Eschrichtius robustus',
    image: img(
      'gray-whale.jpg',
      'Marc Webber / U.S. Fish and Wildlife Service',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Gray_Whale_Spyhopping_courtesy_of_Marc_Webber_USFWS.jpg',
    ),
    sources: [
      cite(
        'NOAA Fisheries — gray whale, Eastern North Pacific migration',
        'https://www.fisheries.noaa.gov/species/gray-whale',
      ),
      cite(
        'IUCN Red List — Eschrichtius robustus (Least Concern; western stock Endangered)',
        'https://www.iucnredlist.org/species/8097/50325955',
      ),
    ],
  },
  {
    slug: 'mexican-free-tailed-bat',
    shelf: 'animals',
    scientificName: 'Tadarida brasiliensis',
    image: img(
      'mexican-free-tailed-bat.jpg',
      'U.S. Fish and Wildlife Service Headquarters / Flickr',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Mexican_free-tailed_bats_exiting_Bracken_Bat_Cave_(8006833815).jpg',
    ),
    sources: [
      cite(
        'IUCN Red List — Tadarida brasiliensis (Least Concern)',
        'https://www.iucnredlist.org/species/4316/115067167',
      ),
      cite(
        'Bat Conservation International — Bracken Cave Preserve (largest known bat colony)',
        'https://www.batcon.org/protect-bats/our-work/protecting-habitat/bracken-cave-preserve/',
      ),
    ],
  },
  {
    slug: 'straw-coloured-fruit-bat',
    shelf: 'animals',
    scientificName: 'Eidolon helvum',
    image: img(
      'straw-coloured-fruit-bat.jpg',
      'Jan Vršovský / iNaturalist / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Eidolon_helvum_283616286.jpg',
    ),
    sources: [
      cite(
        'Richter & Cumming, Journal of Zoology, 2008 — satellite tracking of Eidolon helvum',
        'https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.2008.00425.x',
      ),
      cite(
        'IUCN Red List — Eidolon helvum (Near Threatened)',
        'https://www.iucnredlist.org/species/7084/22128085',
      ),
    ],
  },
];

export const humanHeroImage: ImageCredit = img(
  'medieval-commoner.png',
  'Generated medieval commoner for Fix Planet — simply dressed peasant, not a king and not a portrait of a named person',
  'Site asset',
  '',
);

export { humanEraSources as humanSources } from './human-migration-eras';

export const flywaySources: PrimarySource[] = [
  cite(
    'BirdLife International — migratory birds and flyways',
    'https://www.birdlife.org/projects/migratory-birds-and-flyways/',
  ),
  cite(
    'CMS — Convention on the Conservation of Migratory Species of Wild Animals',
    'https://www.cms.int/',
  ),
];

export const hubBackdrop = {
  file: '/images/maps/blue-marble.jpg',
  width: 2048,
  height: 1024,
};

export function getMigrationEntryMeta(slug: string): MigrationEntryMeta | undefined {
  return migrationEntryMeta.find((item) => item.slug === slug);
}

export function isMigrationShelf(value: string | undefined): value is MigrationShelf {
  return !!value && (migrationShelfKeys as readonly string[]).includes(value);
}

export function migrationImageSrc(image: ImageCredit): string {
  return `/images/migration/${image.file}`;
}

export function migrationShelfPath(shelf: MigrationShelf): string {
  return `/migration/${shelf}`;
}

export function migrationPrimarySource(
  sources: PrimarySource[],
): PrimarySource | undefined {
  return sources[0];
}
