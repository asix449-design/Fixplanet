/**
 * Language-neutral primary citation used on encyclopedia detail pages.
 * Same { label, url } shape as Law and Terraforming source lists — reuse this
 * type when other catalogs grow clickable primary links.
 */
export type PrimarySource = {
  label: string;
  url: string;
};

export function cite(label: string, url: string): PrimarySource {
  return { label, url };
}
