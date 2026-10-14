import fs from 'node:fs';
import assert from 'node:assert/strict';
const folder = 'research/seo-geo-2026-10-14';
const before = JSON.parse(fs.readFileSync(`${folder}/production-audit.json`, 'utf8'));
const after = JSON.parse(fs.readFileSync(`${folder}/local-after-audit.json`, 'utf8'));
const changes = [];
let articles = 0;
for (const p of after.pages) {
  const path = new URL(p.url).pathname;
  const file = path === '/' ? 'dist/index.html' : `dist${path}index.html`;
  const html = fs.readFileSync(file, 'utf8');
  const old = before.pages.find(b => b.url === p.url);
  assert(old, `New unexpected route: ${path}`);
  assert.equal(p.headings.filter(h => h.level === 1).length, 1, path);
  assert.equal(p.canonical, old.canonical, `${path}: URL changed`);
  assert.deepEqual([...p.adSlots].sort(), [...old.adSlots].sort(), `${path}: ads changed`);
  assert(!p.schemas.some(s => s['@type'] === 'Organization'), `${path}: invented publisher`);
  const article = p.schemas.find(s => s['@type'] === 'Article');
  if (article) {
    articles++;
    assert(p.articleTextAvailableWithoutJavaScript, `${path}: missing static body`);
    assert(!article.author && !article.publisher, `${path}: unsupplied identity`);
    assert.equal(article.inLanguage, 'en');
    assert(html.includes('data-source-note'), `${path}: source panel missing`);
    assert(article.citation.length >= 2, `${path}: citations missing`);
    for (const url of article.citation) {
      assert(html.includes(`href="${url.replaceAll('&', '&amp;')}"`) || html.includes(`href="${url}"`), `${path}: citation not visible`);
    }
    assert(html.includes('not tested') || html.includes('not independently') || html.includes('not verified') || html.includes('not a live-client'), `${path}: evidence limits missing`);
  }
  if (/^\/(guides|resources|recent|tags)\/$/.test(path) || path.startsWith('/tags/')) {
    assert.equal(p.robots, 'noindex, follow', `${path}: archive policy`);
  }
  changes.push({ path, gzipBefore: old.gzipBytes, gzipAfter: p.gzipBytes, gzipDelta: p.gzipBytes - old.gzipBytes, htmlBefore: old.bytes, htmlAfter: p.bytes, sourceUrls: article?.citation ?? [] });
}
assert.equal(articles, 6);
const codes = fs.readFileSync('dist/resources/codes/index.html', 'utf8');
assert.equal((codes.match(/data-code=/g) ?? []).length, 7);
assert(codes.includes('publisher-reported prerequisite'));
assert(codes.includes('October 13 snapshot'));
assert(!codes.includes('50 Rerolls'));
assert(fs.readFileSync('dist/index.html', 'utf8').includes('Beginner guide and first steps'));
assert(fs.readFileSync('dist/llms.txt', 'utf8').includes('Independent player wiki'));
assert(/content="noindex,\s*nofollow"/.test(fs.readFileSync('dist/404.html', 'utf8')));
const report = { checkedAt: new Date().toISOString(), mode: 'local only; no production deployment', pages: after.pages.length, staticEditorialArticles: articles, changes, failures: [] };
fs.writeFileSync(`${folder}/local-verification.json`, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ pages: report.pages, staticEditorialArticles: articles, gzipDeltas: changes.filter(c => /^\/(guides|resources)\/.+/.test(c.path)).map(c => ({path:c.path, delta:c.gzipDelta})), failures: [] }));
