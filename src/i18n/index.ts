export {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  localeMeta,
  localeStaticPaths,
  locales,
  localizePath,
  otherLocales,
  resolveLocale,
  stripLocalePrefix,
  switchLocalePath,
  type Locale,
} from './config';

export { basedIn, getUi, ui, type Ui } from './messages';
export { getLatestSolutions, getSolutions } from './solutions';
export {
  getWildlifeBySlug,
  getWildlifeByStatus,
  getWildlifeSpecies,
} from './wildlife';
export {
  getMapBySlug,
  getMaps,
  getMapsByCategory,
  getMapsPage,
  getRelatedMaps,
  mapCategoryKeys,
} from './maps';
export { getBorderHistoryFrames, getBorderHistoryPage } from './border-history';
export {
  getInnovationBySlug,
  getInnovations,
  getInnovationsByArea,
  getInnovationsPage,
  innovationAreaKeys,
} from './innovations';
export { getForestFrames, getForestHeroStats, getForestStats, getForestsPage } from './forests';
export {
  getOceanCurrentFrames,
  getOceanPollution,
  getOceanSalinityFrames,
  getOceanSstFrames,
  getOceanStats,
  getOceansPage,
} from './oceans';
export {
  getLawBySlug,
  getLawPage,
  getLaws,
  getLawsByCategory,
  getLawsByShelf,
  lawCategoryKeys,
  lawStatusKeys,
} from './law';
export {
  getGeoBySlug,
  getGeoPage,
  getGeoProjects,
  getGeoProjectsByShelf,
  geoShelfKeys,
} from './terraforming';
