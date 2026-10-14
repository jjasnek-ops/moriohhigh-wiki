import fs from 'node:fs';
import assert from 'node:assert/strict';

const deployment = JSON.parse(fs.readFileSync('reports/pages-deployment.json', 'utf8'));
const build = JSON.parse(fs.readFileSync('reports/build-seo-audit.json', 'utf8'));
const origin = deployment.productionOrigin;
const results = [];
const failures = [];
const schemas = html => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
async function get(path) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(20000) });
  return { response, html: await response.text() };
}
for (const page of build.pages.filter(p => p.file !== 'dist/404.html')) {
  const path = new URL(page.canonical).pathname;
  try {
    const { response, html } = await get(path);
    const local = fs.readFileSync(page.file, 'utf8');
    assert.equal(response.status, 200);
    assert.equal(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1], local.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]);
    assert.deepEqual(schemas(html), schemas(local), 'structured data differs from release build');
    assert(html.includes('window.__awLoadTrackers();'), 'automatic tracker initialization missing');
    assert(!/aw-cookie-consent|aw:consent-accepted|id="cookie-consent"/.test(html), 'old consent gate remains');
    const article = schemas(html).find(s => s['@type'] === 'Article');
    if (article) {
      assert(html.includes('data-source-note'), 'source panel missing');
      assert(article.citation.length >= 2);
      assert(!article.author && !article.publisher, 'unsupplied publisher identity');
      for (const url of article.citation) assert(html.includes(url.replaceAll('&', '&amp;')) || html.includes(url), 'citation link missing');
    }
    if (path === '/resources/codes/') {
      assert.equal((html.match(/data-code=/g) ?? []).length, 7);
      assert(html.includes('publisher-reported prerequisite'));
      assert(html.includes('October 13 snapshot'));
    }
    if (path === '/privacy-policy/') assert(html.includes('Configured advertising and analytics load automatically'));
    results.push({ path, status: response.status, h1MatchesBuild: true, schemasMatchBuild: true, sourcePanel: Boolean(article), automaticLoading: true });
  } catch (error) { failures.push({ path, error: error.message }); }
}
const marker = await get('/.well-known/anvilwiki-deploy.txt');
if (marker.response.status !== 200 || marker.html.trim() !== deployment.sourceCommit) failures.push({ path: '/.well-known/anvilwiki-deploy.txt', error: 'source mismatch' });
const llms = await get('/llms.txt');
if (llms.response.status !== 200 || llms.html !== fs.readFileSync('dist/llms.txt', 'utf8')) failures.push({ path: '/llms.txt', error: 'build mismatch' });
const report = { checkedAt: new Date().toISOString(), origin, sourceCommit: deployment.sourceCommit, markerMatches: marker.html.trim() === deployment.sourceCommit, results, failures, limitations: ['Static HTTP checks do not establish search ranking, AI citations, provider creative fill or GA4 report reception.'] };
fs.writeFileSync('reports/seo-geo-online-acceptance.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ routes: results.length, sourcePanels: results.filter(r => r.sourcePanel).length, markerMatches: report.markerMatches, failures }));
if (failures.length) process.exitCode = 1;
