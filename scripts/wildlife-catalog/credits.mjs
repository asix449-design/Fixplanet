#!/usr/bin/env node
/**
 * Regenerates public/images/wildlife/credits.json rows from catalogue meta.
 * Rewrites artist to the card credit. C9 only requires file, license, and sourceUrl
 * to match meta.json, so run this when that artist rewrite is intended.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readShelfFiles } from '../../src/lib/wildlife-catalog/read.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const creditsPath = path.join(repoRoot, 'public/images/wildlife/credits.json');
const shelves = readShelfFiles();
const cards = Object.values(shelves).flatMap((shelf) => shelf.meta.cards || []);

if (cards.length === 0) {
  console.log('credits.mjs: catalogue meta has no cards yet; public/images/wildlife/credits.json left unchanged.');
  process.exit(0);
}

const credits = JSON.parse(fs.readFileSync(creditsPath, 'utf8'));
const bySlug = new Map(credits.map((row) => [row.slug, row]));
for (const card of cards) {
  const prev = bySlug.get(card.slug) || {};
  bySlug.set(card.slug, {
    ...prev,
    slug: card.slug,
    file: card.image.file,
    artist: card.image.credit,
    license: card.image.license,
    sourceUrl: card.image.sourceUrl,
  });
}
const next = [...bySlug.values()];
fs.writeFileSync(creditsPath, `${JSON.stringify(next, null, 2)}\n`);
console.log(`credits.mjs: updated ${cards.length} catalogue rows in credits.json`);
