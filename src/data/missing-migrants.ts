export const missingMigrantIds = [
  'missing-migrants-global',
  'missing-migrants-mediterranean',
  'missing-migrants-atlantic',
  'missing-migrants-asia',
  'missing-migrants-americas',
] as const;

export type MissingMigrantId = (typeof missingMigrantIds)[number];

export const missingMigrantsShelfSlug = 'missing-migrants';

export function isMissingMigrantId(value: string | undefined): value is MissingMigrantId {
  return !!value && (missingMigrantIds as readonly string[]).includes(value);
}

/** Natural pixel size of the five chart bitmaps. Detail figures keep this ratio. */
export const missingMigrantChartSize = { width: 1614, height: 894 } as const;

const PRESS =
  'https://reliefweb.int/report/world/21-migrants-died-every-day-2025-new-iom-data-reveals';
const ANNUAL =
  'https://reliefweb.int/report/world/iom-missing-migrants-project-2025-annual-global-report-missing-migrants-and-their-families-left-behind';
const DATASET = 'https://data.humdata.org/dataset/missing-migrants-project-data';

export type MissingMigrantMeta = {
  id: MissingMigrantId;
  file: string;
  /** Short code for the hub source pill. Detail pages use the full localized titles. */
  hubSourceCode: string;
  hubSourceUrl: string;
};

export const missingMigrantMeta: MissingMigrantMeta[] = [
  {
    id: 'missing-migrants-global',
    file: 'mmp-global-annual-2014-2025.png',
    hubSourceCode: 'ReliefWeb',
    hubSourceUrl: PRESS,
  },
  {
    id: 'missing-migrants-mediterranean',
    file: 'mmp-mediterranean-annual-2014-2025.png',
    hubSourceCode: 'ReliefWeb',
    hubSourceUrl: PRESS,
  },
  {
    id: 'missing-migrants-atlantic',
    file: 'mmp-atlantic-canaries-annual-2014-2025.png',
    hubSourceCode: 'ReliefWeb',
    hubSourceUrl: ANNUAL,
  },
  {
    id: 'missing-migrants-asia',
    file: 'mmp-asia-annual-2014-2025.png',
    hubSourceCode: 'ReliefWeb',
    hubSourceUrl: ANNUAL,
  },
  {
    id: 'missing-migrants-americas',
    file: 'mmp-americas-annual-2014-2025.png',
    hubSourceCode: 'HDX',
    hubSourceUrl: DATASET,
  },
];

export function missingMigrantSrc(file: string): string {
  return `/images/migration/missing-migrants/${file}`;
}

export function linkifyUrls(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escaped.replace(
    /https?:\/\/[^\s)]+/g,
    (url) => `<a href="${url}" rel="noopener noreferrer">${url}</a>`,
  );
}
