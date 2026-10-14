import fs from 'node:fs';
import { gzipSync } from 'node:zlib';
const folder = 'research/seo-geo-2026-10-14';
fs.mkdirSync(folder, { recursive: true });
const origin = 'https://moriohhighguide.wiki';
const text = value => value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|#38);/g, '&').replace(/\s+/g, ' ').trim();
const meta = (html, name) => [...html.matchAll(/<meta\b([^>]+)>/g)].map(m => m[1]).find(attrs => attrs.includes(`name="${name}"`))?.match(/content="([^"]*)"/)?.[1] ?? null;
async function request(url, userAgent = 'MoriohHighReadOnlyAudit/1.0') {
  const chain = [];
  const start = Date.now();
  try {
    for (let i = 0; i < 6; i++) {
      const r = await fetch(url, { headers: { 'User-Agent': userAgent }, redirect: 'manual', signal: AbortSignal.timeout(20000) });
      chain.push({ url, status: r.status });
      if (r.status >= 300 && r.status < 400 && r.headers.get('location')) { url = new URL(r.headers.get('location'), url).href; continue; }
      return { url, chain, status: r.status, body: await r.text(), headers: Object.fromEntries(['content-type', 'x-robots-tag', 'content-encoding', 'cache-control'].map(k => [k, r.headers.get(k)])), probeMs: Date.now() - start };
    }
    throw new Error('redirect limit');
  } catch (e) { return { url, chain, error: e.message }; }
}
function inspect(r) {
  if (!r.body) return r;
  const html = r.body;
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => { try { return JSON.parse(m[1]); } catch { return { invalid: true }; } });
  return { url: r.url, chain: r.chain, status: r.status, error: r.error, headers: r.headers, probeMs: r.probeMs,
    bytes: Buffer.byteLength(html), gzipBytes: gzipSync(html).length,
    title: text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''), description: meta(html, 'description'), robots: meta(html, 'robots'),
    canonical: html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1],
    headings: [...main.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map(m => ({ level: Number(m[1]), text: text(m[2]) })),
    mainTextWords: text(main).split(' ').filter(Boolean).length,
    staticAnswerPresent: main.includes('QUICK ANSWER') || main.includes('Quick Answer'),
    articleTextAvailableWithoutJavaScript: /^\/(guides|resources)\/.+/.test(new URL(r.url).pathname) && /<article\b/.test(main) && text(main).length > 500,
    sourceLinkCount: [...main.matchAll(/href="https:\/\/[^\"]+"/g)].length,
    internalLinks: [...main.matchAll(/href="(\/[^\"]*)"/g)].map(m => m[1]),
    schemas, inlineScriptBytes: [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].reduce((n, m) => n + Buffer.byteLength(m[1]), 0),
    adSlots: [...html.matchAll(/data-adsterra-slot="([^"]+)"/g)].map(m => m[1]) };
}
if (process.argv[2] === 'local') {
  const baseline = JSON.parse(fs.readFileSync(`${folder}/production-audit.json`, 'utf8'));
  const pages = baseline.pages.map(p => {
    const pathname = new URL(p.canonical).pathname;
    const file = pathname === '/' ? 'dist/index.html' : `dist${pathname}index.html`;
    return inspect({ url: p.canonical, status: 200, body: fs.readFileSync(file, 'utf8'), headers: {}, chain: [] });
  });
  fs.writeFileSync(`${folder}/local-after-audit.json`, JSON.stringify({ checkedAt: new Date().toISOString(), mode: 'local build only', pages }, null, 2) + '\n');
  console.log(JSON.stringify({ localPages: pages.length, articlesWithStaticBody: pages.filter(p => p.articleTextAvailableWithoutJavaScript).length }));
} else {
  const old = JSON.parse(fs.readFileSync('reports/build-seo-audit.json', 'utf8'));
  const pages = [];
  const urls = old.pages.filter(p => p.file !== 'dist/404.html').map(p => p.canonical);
  for (let i = 0; i < urls.length; i += 4) pages.push(...await Promise.all(urls.slice(i, i + 4).map(async url => inspect(await request(url)))));
  const routes = await Promise.all([`${origin}/robots.txt`, `${origin}/sitemap-index.xml`, `${origin}/sitemap-0.xml`, `${origin}/llms.txt`, `${origin}/not-a-real-seo-route/`, `${origin}/guides/controls`, `http://moriohhighguide.wiki/`].map(requestUrl => request(requestUrl)));
  const bots = await Promise.all(['Googlebot', 'bingbot', 'OAI-SearchBot', 'PerplexityBot'].map(async agent => { const r = await request(`${origin}/guides/how-to-get-a-stand/`, agent); return { agent, status: r.status, error: r.error, bodyContainsMainAnswer: Boolean(r.body?.includes('compatibility reaches 100%')), caveat: 'UA-only probe, not a request from the real crawler IP range.' }; }));
  const report = { checkedAt: new Date().toISOString(), origin, productionSource: 'c02e4fd73a22f8eb53e6f7b9c544ca11da842739', pages, routes: routes.map(r => ({ ...r, body: r.body?.slice(0, 22000) })), bots };
  fs.writeFileSync(`${folder}/production-audit.json`, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ pages: pages.length, statusFailures: pages.filter(p => p.status !== 200).map(p => p.url), staticArticles: pages.filter(p => p.articleTextAvailableWithoutJavaScript).length, bots, robots: routes[0].body }));
}
