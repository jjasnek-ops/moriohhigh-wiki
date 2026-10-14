import fs from 'node:fs';

// Static direct uploads do not run inside Cloudflare's build environment.
// Generate only public build settings from the committed single source.
const config = fs.readFileSync('wrangler.toml', 'utf8');
const section = config.match(/^\[vars\]\s*\r?\n([\s\S]*?)(?=^\[|$(?![\s\S]))/m)?.[1];
if (!section) throw new Error('wrangler.toml [vars] is required.');
const values = [];
for (const line of section.split(/\r?\n/)) {
  if (!/^\s*(?:PUBLIC_[A-Z0-9_]+|SITE_URL)\s*=/.test(line)) continue;
  const match = line.match(/^\s*(PUBLIC_[A-Z0-9_]+|SITE_URL)\s*=\s*("(?:[^"\\]|\\.)*"|'[^']*')\s*(?:#.*)?$/);
  if (!match) throw new Error('Unsupported public build setting syntax; use a quoted string.');
  const value = match[2].startsWith('"') ? JSON.parse(match[2]) : match[2].slice(1, -1);
  if (/[\r\n]/.test(value)) throw new Error('Public build settings must be single-line values.');
  values.push(`${match[1]}=${JSON.stringify(value)}`);
}
if (!values.some(value => value.startsWith('SITE_URL='))) throw new Error('SITE_URL is required.');
fs.writeFileSync('.env.production.local', '# Generated public settings from wrangler.toml; do not edit.\n' + values.join('\n') + '\n');
console.log(`[build-env] Synced ${values.length} public settings from wrangler.toml.`);
