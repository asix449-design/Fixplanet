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
export { getWaterEncyclopediaBySlug, getWaterEncyclopediaPages } from './solutions-water';
export { getCitiesEncyclopediaBySlug, getCitiesEncyclopediaPages } from './solutions-cities';
export { getWasteEncyclopediaBySlug, getWasteEncyclopediaPages } from './solutions-waste';
export { getMaterialsEncyclopediaBySlug, getMaterialsEncyclopediaPages } from './solutions-materials';
export { getForestEncyclopediaBySlug, getForestEncyclopediaPages } from './solutions-forests';
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
export { getLiveHazardsPage } from './live-hazards';
export {
  DISPLACEMENT_SOURCE_IDS,
  DISPLACEMENT_SOURCES_PATH,
  displacementLicenceKind,
  getDisplacementPage,
  type DisplacementPage,
  type DisplacementSourceId,
} from './displacement';
export {
  getReligionContinentLabels,
  getReligionHistoryFrames,
  getReligionHistoryPage,
  getReligionLegend,
} from './religion-history';
export {
  getInnovationBySlug,
  getInnovations,
  getInnovationsByArea,
  getInnovationsPage,
  innovationAreaKeys,
} from './innovations';
export { getForestFrames, getForestHeroStats, getForestStats, getForestsPage } from './forests';
export {
  forestAtlasChrome,
  forestAtlasHubLede,
  forestAtlasSectionLabels,
  forestAtlasSections,
  getForestAtlas,
  getForestAtlasBySlug,
} from './forest-atlas';
export {
  getOceanCurrentFrames,
  getOceanPollution,
  getOceanSalinityFrames,
  getOceanSstFrames,
  getOceanHeroStats,
  getOceanStats,
  getOceansPage,
} from './oceans';
export {
  getOceanAtlas,
  getOceanAtlasBySlug,
  oceanAtlasHubLede,
  oceanAtlasSectionLabels,
} from './ocean-atlas';
export {
  getLawBySlug,
  getLawPage,
  getLaws,
  getRelatedLaws,
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
export {
  getHumanMapLinks,
  getHumanMigrationEras,
  getHumanMigrationEvents,
  getMigrationByShelf,
  getMigrationBySlug,
  getMigrationEntries,
  getMigrationPage,
  migrationShelfKeys,
} from './migration';
export { getRemittance, getRemittances } from './remittances';
export { getMissingMigrant, getMissingMigrants } from './missing-migrants';
