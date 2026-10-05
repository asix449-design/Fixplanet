/**
 * Check the stored economy data files. Run by the workflow after the refresh and by hand:
 *   node scripts/check-economy.mjs [--dir path] [--now 2026-10-05T06:40:00Z]
 *
 * Exit code 0: all files valid and fresh.
 * Exit code 3: files are valid but need attention (the last refresh failed, or the data are stale).
 * Exit code 2: a file is damaged or does not match the manifest, or this script itself crashed.
 * Any other code (1 from Node on a syntax error or a missing module, 127, ...) is a failure of the
 * check itself. The workflow commits only after 0 or 3, so an unknown code never means "safe".
 */
import { fileURLToPath } from 'node:url';
import { checkDirectory } from './economy/pipeline.mjs';

const args = process.argv.slice(2);
const option = (name) => {
  const at = args.indexOf(name);
  return at >= 0 ? args[at + 1] : null;
};
const dir = option('--dir') || fileURLToPath(new URL('../public/data/economy/', import.meta.url));
const now = option('--now') ? new Date(option('--now')) : new Date();
if (Number.isNaN(now.getTime())) {
  console.error('check-economy: --now is not a date');
  process.exit(2);
}

let result;
try {
  result = await checkDirectory({ dir, now });
} catch (error) {
  // An unexpected crash must never look like "valid but needs attention": the workflow would commit.
  console.error(`check-economy: unexpected error: ${error?.stack || error}`);
  process.exit(2);
}
const { invalid, attention } = result;
invalid.forEach((line) => console.error(`INVALID ${line}`));
attention.forEach((line) => console.error(`ATTENTION ${line}`));
if (invalid.length) {
  console.error(`check-economy: ${invalid.length} problem(s) in the files`);
  process.exitCode = 2;
} else if (attention.length) {
  console.error(`check-economy: files are valid, ${attention.length} item(s) need attention`);
  process.exitCode = 3;
} else {
  console.log('check-economy: all files valid and fresh');
}
