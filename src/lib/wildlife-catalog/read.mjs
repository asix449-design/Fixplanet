import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES } from './schema.mjs';

/** Source path when Node loads this file directly; cwd when Astro bundles it into dist/chunks. */
export function catalogDir() {
  const fromSource = fileURLToPath(new URL('../../data/wildlife-catalog/', import.meta.url));
  if (fs.existsSync(path.join(fromSource, 'registry.json'))) return fromSource;
  const fromCwd = path.join(process.cwd(), 'src/data/wildlife-catalog');
  if (fs.existsSync(path.join(fromCwd, 'registry.json'))) return fromCwd;
  throw new Error('wildlife catalogue directory not found');
}

export const CATALOG_DIR = catalogDir();

export function readJson(name) {
  return JSON.parse(fs.readFileSync(path.join(catalogDir(), name), 'utf8'));
}

/** Shelf folders only. Registry, rules, and baselines stay as sibling JSON files. */
export function readShelfFiles() {
  /** @type {Record<string, { dir: string, meta: unknown, copy: Record<string, unknown> }>} */
  const shelves = {};
  const root = catalogDir();
  for (const ent of fs.readdirSync(root, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const dir = path.join(root, ent.name);
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
