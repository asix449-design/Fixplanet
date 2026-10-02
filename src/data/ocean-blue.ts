import { cite, type PrimarySource } from './sources';
import type { OceanBlueSlug } from '../i18n/ocean-blue';

export type OceanBlueMeta = {
  slug: OceanBlueSlug;
  preview: string;
  plate: '16x9';
  sourceOrg: string;
  sourceLabel: string;
  sourceUrl: string;
  sources: PrimarySource[];
  usesCoastline: false;
};

export const oceanBlueMeta: OceanBlueMeta[] = [
  {
    slug: 'mangroves',
    preview: 'mangroves-preview.jpg',
    plate: '16x9',
    sourceOrg: "Global Mangrove Watch",
    sourceLabel: "Global Mangrove Watch",
    sourceUrl: "https://www.globalmangrovewatch.org/",
    usesCoastline: false,
    sources: [
      cite("Global Mangrove Watch: platform for exploring the maps", "https://www.globalmangrovewatch.org/"),
      cite("Wetlands International: Good news for mangroves globally masks big losses in some regions, according to updated Global Mangrove Watch (23 July 2026)", "https://www.wetlands.org/good-news-for-mangroves-globally-masks-big-losses-in-some-regions-according-to-updated-global-mangrove-watch/"),
      cite("Japan Aerospace Exploration Agency, Earth Observation Research Center: Global Mangrove Watch dataset", "https://www.eorc.jaxa.jp/ALOS/en/dataset/gmw_e.htm"),
      cite("Global Mangrove Alliance: Global Mangrove Watch 4.1 Launch", "https://www.mangrovealliance.org/news/global-mangrove-watch-4-launch"),
      cite("Esri Living Atlas: Global Mangrove Watch Time Series (1996 to 2020 edition, source of the map)", "https://www.arcgis.com/home/item.html?id=3a08770f1929427fb7d33d509d27969e"),
    ],
  },
  {
    slug: 'seagrass-meadows',
    preview: 'seagrass-preview.jpg',
    plate: '16x9',
    sourceOrg: "McKenzie and others 2020",
    sourceLabel: "McKenzie and others 2020",
    sourceUrl: "https://www.seagrasswatch.org/wp-content/uploads/Resources/Publications/2020/PDF/McKenzie-et-al_2020.pdf",
    usesCoastline: false,
    sources: [
      cite("McKenzie and others: The global distribution of seagrass meadows (Environmental Research Letters, 2020, open access PDF)", "https://www.seagrasswatch.org/wp-content/uploads/Resources/Publications/2020/PDF/McKenzie-et-al_2020.pdf"),
      cite("United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Seagrasses (data record, 2021 edition)", "https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb"),
    ],
  },
  {
    slug: 'salt-marshes',
    preview: 'salt-marshes-preview.jpg',
    plate: '16x9',
    sourceOrg: "Mcowen and others 2017",
    sourceLabel: "Mcowen and others 2017",
    sourceUrl: "https://bdj.pensoft.net/article/11764/",
    usesCoastline: false,
    sources: [
      cite("Mcowen and others: A global map of saltmarshes (Biodiversity Data Journal, 2017)", "https://bdj.pensoft.net/article/11764/"),
      cite("United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Saltmarshes (data record)", "https://resources.unep-wcmc.org/products/addd1baa160c4d318b84c3b714d3e583"),
    ],
  },
  {
    slug: 'kelp-forests',
    preview: 'kelp-forests-preview.jpg',
    plate: '16x9',
    sourceOrg: "Krumhansl and others 2016",
    sourceLabel: "Krumhansl and others 2016",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/",
    usesCoastline: false,
    sources: [
      cite("Krumhansl and others: Global patterns of kelp forest change over the past half-century (Proceedings of the National Academy of Sciences, 2016, full text)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/"),
    ],
  },
  {
    slug: 'blue-carbon',
    preview: 'blue-carbon-preview.jpg',
    plate: '16x9',
    sourceOrg: "Wetlands Supplement",
    sourceLabel: "Wetlands Supplement",
    sourceUrl: "https://www.ipcc-nggip.iges.or.jp/public/wetlands/",
    usesCoastline: false,
    sources: [
      cite("Intergovernmental Panel on Climate Change, Task Force on National Greenhouse Gas Inventories: 2013 Supplement to the 2006 Guidelines for National Greenhouse Gas Inventories: Wetlands (publication page)", "https://www.ipcc-nggip.iges.or.jp/public/wetlands/"),
      cite("Intergovernmental Panel on Climate Change: Wetlands Supplement, Chapter 4 Coastal Wetlands (PDF)", "https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_separate_files/WS_Chp4_Coastal_Wetlands.pdf"),
      cite("International Blue Carbon Initiative: Coastal Blue Carbon, methods for assessing carbon stocks and emissions factors (manual page)", "https://www.thebluecarboninitiative.org/manual"),
      cite("National Oceanic and Atmospheric Administration, National Ocean Service: What is Blue Carbon?", "https://oceanservice.noaa.gov/facts/bluecarbon.html"),
    ],
  },
];
