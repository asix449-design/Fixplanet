import type { HubIconName } from './hub';
import { cite, type PrimarySource } from './sources';

export type { PrimarySource } from './sources';

export const migrationShelfKeys = ['humans', 'great-migrations'] as const;

export type MigrationShelf = (typeof migrationShelfKeys)[number];

export const migrationHub = [
  { key: 'humans', icon: 'human' },
  { key: 'great-migrations', icon: 'migrate' },
] as const satisfies ReadonlyArray<{ key: MigrationShelf; icon: HubIconName }>;

/** Retired shelves and cards. Keep the URLs and send them to a living page. */
export const migrationPathRedirects: Record<string, string> = {
  today: '/migration',
  birds: '/migration/great-migrations',
  animals: '/migration/great-migrations',
  'hunnic-invasion': '/migration/humans',
  'arctic-tern': '/migration/great-migrations',
  'bar-tailed-godwit': '/migration/great-migrations',
  'barn-swallow': '/migration/great-migrations',
  'white-stork': '/migration/great-migrations',
  'amur-falcon': '/migration/great-migrations',
  'bar-headed-goose': '/migration/great-migrations',
  caribou: '/migration/great-migrations',
  'humpback-whale': '/migration/great-migrations',
  'gray-whale': '/migration/great-migrations',
  'mexican-free-tailed-bat': '/migration/great-migrations',
  'straw-coloured-fruit-bat': '/migration/great-migrations',
  'remittances-wdi-series': '/migration/remittances',
};

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
 * 1. Add a row here (English slug, shelf `great-migrations`, optional Latin name, image, primary sources).
 * 2. Add the same slug in `src/i18n/migration-en.ts` (and -ru / -pl / -lv).
 * 3. Drop a Wikimedia/PD photo in `public/images/migration/{file}` and record credits.json.
 * 4. `npm run build`.
 *
 * Slugs stay English. Do not invent routes or dates. Prefer BirdLife / CMS flyways,
 * IUCN, NOAA, named paleodemography papers, and named late-antique sources.
 * Great-migrations cards are living mass movements and range shifts —
 * not Pleistocene dispersal and not a second Attila encyclopedia.
 */
export const migrationEntryMeta: MigrationEntryMeta[] = [
  {
    slug: 'mammoth-steppe-collapse',
    shelf: 'great-migrations',
    image: img(
      'mammoth-steppe-collapse.jpg',
      'Generated naturalistic mammoth-steppe dusk for Fix Planet — not a named bone bed',
      'Site asset',
      '',
    ),
    wildlifeSlug: 'woolly-mammoth',
    sources: [
      cite(
        'Stuart, Kosintsev, Higham & Lister, Nature, 2004 — giant deer to ~7,700 years in western Siberia; range shifts vs Wrangel mammoths',
        'https://doi.org/10.1038/nature02890',
      ),
      cite(
        'Vartanyan, Garutt & Sher, Nature, 1993 — Holocene mammoths on Wrangel Island',
        'https://doi.org/10.1038/362337a0',
      ),
      cite(
        'Haile et al., PNAS, 2009 — sedaDNA of mammoth and horse in interior Alaska to ~10,500 years (later bone surveys dispute the ghost range)',
        'https://doi.org/10.1073/pnas.0912510106',
      ),
      cite(
        'Guthrie, Quaternary Science Reviews, 2001 — origin and cause of the mammoth steppe',
        'https://doi.org/10.1016/S0277-3791(00)00111-8',
      ),
    ],
  },
  {
    slug: 'beringian-land-bridge',
    shelf: 'great-migrations',
    image: img(
      'beringian-land-bridge.jpg',
      'Generated naturalistic Beringian plain with distant horses for Fix Planet — not a dated crossing event',
      'Site asset',
      '',
    ),
    sources: [
      cite(
        'Vershinina / Librado et al., Science, 2025 — Late Pleistocene horse genomes; two-way Beringian exchange, Ural–Arctic cline ~50–19 ka',
        'https://doi.org/10.1126/science.adr2355',
      ),
      cite(
        'Heintzman et al., PNAS, 2016 — bison enter the ice-free corridor from the south ~13.4 ka and from the north by ~13.0 ka',
        'https://doi.org/10.1073/pnas.1601077113',
      ),
      cite(
        'Vershinina et al., Molecular Ecology, 2021 — horse dispersals across the Bering Land Bridge; the bridge as a filter',
        'https://doi.org/10.1111/mec.15977',
      ),
    ],
  },
  {
    slug: 'postglacial-colonization',
    shelf: 'great-migrations',
    image: img(
      'postglacial-colonization.jpg',
      'Generated naturalistic early-Holocene woodland edge with a red deer — not a named pollen core',
      'Site asset',
      '',
    ),
    sources: [
      cite(
        'Hewitt, Biological Journal of the Linnean Society, 1999 — post-glacial recolonization of European biota; Iberia, Italy, Balkans',
        'https://doi.org/10.1111/j.1095-8312.1999.tb01160.x',
      ),
      cite(
        'Hewitt, Nature, 2000 — genetic consequences of Quaternary climatic oscillations',
        'https://doi.org/10.1038/35015746',
      ),
      cite(
        'Sommer & Zachos, Journal of Biogeography, 2009 — red deer and roe deer: LGM southern restriction, GI-1 / Bølling–Allerød push into Central Europe, northern lowlands in the early Holocene',
        'https://doi.org/10.1111/j.1365-2699.2009.02187.x',
      ),
      cite(
        'Loog et al., Molecular Ecology, 2020 — modern wolf mitochondrial diversity modeled as a late-Pleistocene expansion from Beringia or nearby Northeast Asia',
        'https://doi.org/10.1111/mec.15329',
      ),
      cite(
        'Payette et al., PNAS, 2022 — eastern North America macrofossils: black spruce ~25 km/century, jack pine ~19 km/century; jack-pine spread stopped ~3 ka',
        'https://doi.org/10.1073/pnas.2210496119',
      ),
      cite(
        'Alsos et al., Science Advances, 2022 — Fennoscandian plant sedaDNA; trait and functional diversity stabilize around 8 cal ka BP',
        'https://doi.org/10.1126/sciadv.abo7434',
      ),
      cite(
        'Boilard et al., Science Advances, 2024 — Nygrotta, Arctic Norway: ~9.5 ka freshwater fish, bear, lemming, hare; later ~5.8 ka layer in that cave',
        'https://doi.org/10.1126/sciadv.adk3032',
      ),
      cite(
        'Heintzman et al., PNAS, 2016 — ice-free corridor chronology from bison (also used on the Beringia card)',
        'https://doi.org/10.1073/pnas.1601077113',
      ),
    ],
  },
  {
    slug: 'wildebeest',
    shelf: 'great-migrations',
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
    slug: 'butterfly-range-shifts',
    shelf: 'great-migrations',
    scientificName: 'Lepidoptera',
    image: img(
      'butterfly-range-shifts.jpg',
      'Generated naturalistic painted lady on a wildflower for Fix Planet — not a named field site',
      'Site asset',
      '',
    ),
    sources: [
      cite(
        'Parmesan, Nature, 1996 — Edith’s checkerspot range shift with climate',
        'https://doi.org/10.1038/382765a0',
      ),
      cite(
        'Parmesan & Yohe, Nature, 2003 — a globally coherent fingerprint of climate change',
        'https://doi.org/10.1038/nature01286',
      ),
      cite(
        'Stefanescu et al., Ecography, 2013 — multi-generational painted lady migration',
        'https://doi.org/10.1111/j.1600-0587.2012.07738.x',
      ),
    ],
  },
  {
    slug: 'arctic-migratory-birds',
    shelf: 'great-migrations',
    image: img(
      'arctic-migratory-birds.jpg',
      'Generated naturalistic Arctic terns over a northern coast for Fix Planet — not a named colony',
      'Site asset',
      '',
    ),
    sources: [
      cite(
        'Egevang et al., PNAS, 2010 — Greenland Arctic terns, ~70,900 km round trip',
        'https://www.pnas.org/doi/10.1073/pnas.0909493107',
      ),
      cite(
        'BirdLife International — migratory birds and flyways',
        'https://www.birdlife.org/projects/migratory-birds-and-flyways/',
      ),
      cite(
        'CAFF / Arctic Council — Arctic Biodiversity Assessment, migratory birds',
        'https://www.caff.is/assessment-series/arctic-biodiversity-assessment',
      ),
      cite(
        'CMS — Convention on the Conservation of Migratory Species of Wild Animals',
        'https://www.cms.int/',
      ),
      cite(
        'Gu et al., Nature, 2021 — Eurasian Arctic peregrine flyways formed as breeding grounds shifted from the LGM into the Holocene',
        'https://doi.org/10.1038/s41586-021-03265-0',
      ),
      cite(
        'Thorup et al., PNAS, 2021 — red-backed shrike Afro-Palearctic loop hindcast ≥120 ka; LGM breeding likely in northern Africa, Holocene summer habitat back in Europe',
        'https://doi.org/10.1073/pnas.2023836118',
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

export { humanEventSources as humanSources } from './human-migration-events';


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
