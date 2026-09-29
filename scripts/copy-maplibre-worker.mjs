/**
 * MapLibre looks for its module worker next to the bundled script.
 * Vite inlines the library, so copy the worker pair to a stable public URL.
 * Run: node scripts/copy-maplibre-worker.mjs
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const dest = new URL('../public/vendor/maplibre/', import.meta.url);
await mkdir(dest, { recursive: true });
for (const file of ['maplibre-gl-worker.mjs', 'maplibre-gl-shared.mjs']) {
  const text = await readFile(new URL(`../node_modules/maplibre-gl/dist/${file}`, import.meta.url), 'utf8');
  const stripped = text.replace(/\/\/# sourceMappingURL=.*\r?\n?/g, '');
  await writeFile(new URL(file, dest), stripped);
}
console.log('copied maplibre worker to public/vendor/maplibre/');
