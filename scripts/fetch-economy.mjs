/**
 * Refresh public/data/economy/*.json from the economy sources.
 * Run: node scripts/fetch-economy.mjs [--only wb_pink,ecb] [--dir path]
 *
 * Sources: World Bank Pink Sheet (monthly) and ECB euro reference rates (daily).
 * A source is written only after every check passes; otherwise its previous good file stays
 * and the manifest records the failure. Exit code 1 when any source failed.
 * Set ECONOMY_ACCEPT_REVISIONS=1 to accept a changed history after reading the failed run.
 */
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { runAll } from './economy/pipeline.mjs';

const args = process.argv.slice(2);
const option = (name) => {
  const at = args.indexOf(name);
  return at >= 0 ? args[at + 1] : null;
};

const dir = option('--dir') || fileURLToPath(new URL('../public/data/economy/', import.meta.url));
const only = option('--only') ? option('--only').split(',') : null;
await mkdir(dir, { recursive: true });

const { results, manifestChanged } = await runAll({
  dir,
  only,
  acceptRevisions: process.env.ECONOMY_ACCEPT_REVISIONS === '1',
});

for (const item of results) {
  const line = `${item.id}: ${item.result} (${item.message})`;
  if (item.result === 'failed') console.error(line);
  else console.log(line);
}
console.log(JSON.stringify({ manifestChanged, results: results.map(({ id, result }) => ({ id, result })) }));
if (results.some((item) => item.result === 'failed')) process.exitCode = 1;
