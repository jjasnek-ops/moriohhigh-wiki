import fs from 'node:fs';
import crypto from 'node:crypto';
const origin = 'https://moriohhighguide.wiki';
const build = JSON.parse(fs.readFileSync('reports/ad-build-audit.json', 'utf8'));
const deployment = JSON.parse(fs.readFileSync('reports/pages-deployment.json', 'utf8'));
const results = [];
const failures = [];
const hash = body => crypto.createHash('sha256').update(body).digest('hex');
for (const unit of build.units) {
  const url = `${origin}/ads/${unit.name}.html`;
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
    const body = await response.text();
    const robots = response.headers.get('x-robots-tag');
    const matchesBuild = hash(body) === hash(fs.readFileSync(unit.file));
    results.push({ name: unit.name, url, finalUrl: response.url, status: response.status, robots, matchesBuild });
    if (!response.ok || !robots?.includes('noindex') || !matchesBuild) failures.push(`${unit.name}: status, indexing or build mismatch`);
  } catch (error) { failures.push(`${unit.name}: ${error.message}`); }
}
const marker = await fetch(`${origin}/.well-known/anvilwiki-deploy.txt`, { signal: AbortSignal.timeout(20000) }).then(r => r.text());
if (marker.trim() !== deployment.sourceCommit) failures.push('production marker mismatch');
for (const [route, expected] of [['/', 5], ['/guides/controls/', 7], ['/resources/codes/', 7], ['/privacy-policy/', 1]]) {
  const response = await fetch(origin + route, { signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  const names = [...html.matchAll(/data-adsterra-slot="([^"]+)"/g)].map(match => match[1]);
  results.push({ route, status: response.status, slots: names });
  if (!response.ok || names.length !== expected || new Set(names).size !== names.length || /<iframe[^>]*\ssrc="\/ads\//.test(html)) failures.push(`${route}: slot configuration or initial layout deferral mismatch`);
}
const report = { checkedAt: new Date().toISOString(), origin, sourceCommit: deployment.sourceCommit, results, failures,
  limitations: ['HTTP verification covers our ad assets and mounts, not provider creative fill, impressions, approval or income.'] };
fs.writeFileSync('reports/ad-online-acceptance.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ unitCount: build.unitCount, markerMatches: marker.trim() === deployment.sourceCommit, failures }));
if (failures.length) process.exitCode = 1;
