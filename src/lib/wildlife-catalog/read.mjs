import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES } from './schema.mjs';

export const CATALOG_DIR = fileURLToPath(new URL('../../data/wildlife-catalog/', import.meta.url));

export function readJson(name) {
  return JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, name), 'utf8'));
}

/** Shelf folders only. Registry, rules, and baselines stay as sibling JSON files. */
export function readShelfFiles() {
  /** @type {Record<string, { dir: string, meta: unknown, copy: Record<string, unknown> }>} */
  const shelves = {};
  for (const ent of fs.readdirSync(CATALOG_DIR, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const dir = path.join(CATALOG_DIR, ent.name);
    const metaPath = path.join(dir, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;
    /** @type {Record<string, unknown>} */
    const copy = {};
    for (const loc of LOCALES) {
      const file = path.join(dir, `${loc}.json`);
      if (fs.existsSync(file)) copy[loc] = JSON.parse(fs.readFileSync(file, 'utf8'));
    }
    shelves[ent.name] = {
      dir: ent.name,
      meta: JSON.parse(fs.readFileSync(metaPath, 'utf8')),
      copy,
    };
  }
  return shelves;
}
