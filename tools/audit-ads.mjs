import fs from 'node:fs';
import path from 'node:path';

const config = fs.readFileSync('wrangler.toml', 'utf8');
const headers = fs.readFileSync('dist/_headers', 'utf8');
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const units = [
  ['native-banner', null, null, '21'],
  ['incontent-728x90', 728, 90, '22'],
  ['incontent-468x60', 468, 60, '22'],
  ['sidebar-300x250', 300, 250, '22'],
  ['sticky-320x50', 320, 50, '22'],
  ['sidebar-160x600', 160, 600, '22'],
  ['sidebar-160x300', 160, 300, '22'],
];
const failures = [];
const results = [];
for (const [name, width, height, channel] of units) {
  const variable = `PUBLIC_ADSTERRA_SLOT_${name.toUpperCase().replaceAll('-', '_')}`;
  const key = config.match(new RegExp(`^${variable} = "([^"]+)"`, 'm'))?.[1];
  const file = `dist/ads/${name}.html`;
  const html = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  if (!key || !html.includes(`https://bicea.org/${channel}/${key}`)) failures.push(`${name}: missing configured provider script`);
  if (!/name="robots" content="noindex,nofollow"/.test(html)) failures.push(`${name}: missing noindex`);
  if (width && (!html.includes(`'width' : ${width}`) || !html.includes(`'height' : ${height}`))) failures.push(`${name}: original dimensions changed`);
  results.push({ name, key, width, height, file });
}
if (!/\/ads\/\*[\s\S]*X-Robots-Tag: noindex, nofollow/.test(headers) || /\/ads\//.test(sitemap)) failures.push('ad asset indexing policy invalid');
const pageFiles = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (file.endsWith('.html') && !file.replaceAll('\\', '/').startsWith('dist/ads/')) pageFiles.push(file);
  }
}
walk('dist');
for (const file of pageFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const slots = [...html.matchAll(/data-adsterra-slot="([^"]+)"/g)].map(match => match[1]);
  if (!file.endsWith('404.html') && !slots.includes('sticky-320x50')) failures.push(`${file}: configured site-wide sticky unit absent`);
  if (new Set(slots).size !== slots.length) failures.push(`${file}: duplicated unit on same page`);
  if (/<script[^>]*src="https:\/\/bicea\.org/.test(html)) failures.push(`${file}: provider script escaped its unit iframe`);
  if (html.includes('id="cookie-consent"') || html.includes('aw:consent-accepted')) failures.push(`${file}: stale privacy-choice gate`);
}
const report = { checkedAt: new Date().toISOString(), unitCount: results.length, pageCount: pageFiles.length, units: results, failures,
  limitations: ['Build checks verify snippets, automatic-loading policy and indexing, not live ad fill or account revenue.'] };
fs.writeFileSync('reports/ad-build-audit.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ unitCount: results.length, pageCount: pageFiles.length, failures }));
if (failures.length) process.exitCode = 1;
