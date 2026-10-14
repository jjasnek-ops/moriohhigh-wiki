import fs from 'node:fs';
import path from 'node:path';
const siteConfig=fs.readFileSync('src/config/site.ts','utf8');
const siteDomain=siteConfig.match(/^\s*domain: '([^']+)',/m)?.[1];
if(!siteDomain)throw new Error('Configured site domain is missing.');
const origin=`https://${siteDomain}`;
const analytics=fs.existsSync('reports/analytics.json')?JSON.parse(fs.readFileSync('reports/analytics.json','utf8')):{};
const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))files.push(p);}}
walk('dist');
// Ad-unit HTML is an iframe asset, not an editorial page or sitemap URL.
const rows=files.filter(file=>!file.replaceAll('\\','/').startsWith('dist/ads/')).map(file=>{
  const html=fs.readFileSync(file,'utf8');
  const title=html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]??html.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/)?.[1];
  const desc=html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1];
  const errors=[];
  if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push('expected one H1');
  if(!title||!desc)errors.push('missing title/description');
  if(!canonical?.startsWith(origin+'/'))errors.push('wrong canonical origin');
  if(/Anvil Quest|emberfang|placeholder\.png|Coming soon/i.test(html))errors.push('demo/placeholder residue');
  for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){try{JSON.parse(match[1]);}catch{errors.push('invalid JSON-LD');}}
  for(const match of html.matchAll(/<img\b[^>]*>/g)){if(!/\salt(?:\s|=|>)/.test(match[0]))errors.push('missing image ALT');}
  if(/googletagmanager\.com/.test(html)){
    if(!analytics.measurementId||!html.includes(analytics.measurementId)||!html.includes('window.__awLoadTrackers();')||html.includes('id="cookie-consent"'))errors.push('analytics identity or automatic loading policy mismatch');
    if(/<script[^>]+src="https:\/\/www\.googletagmanager\.com/.test(html))errors.push('unexpected duplicate inline analytics tag');
  }
  if(/static\.cloudflareinsights\.com\/beacon/.test(html)||/<script[^>]+src="https:\/\/pagead2\.googlesyndication\.com/.test(html)||/const adsenseClient = "[^"]+"/.test(html))errors.push('unexpected enabled tracker/ad');
  return {file:file.replaceAll('\\','/'),title,descriptionLength:desc?.length,canonical,noindex:/name="robots"[^>]*content="[^"]*noindex/.test(html),errors};
});
const indexed=rows.filter(r=>!r.noindex&&r.file!=='dist/404.html');
const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const failures=rows.flatMap(r=>r.errors.map(error=>({file:r.file,error})));
for(const location of locations){if(!indexed.some(r=>r.canonical===location))failures.push({file:'sitemap-0.xml',error:`not indexable/built: ${location}`});}
if(locations.length!==indexed.length)failures.push({file:'sitemap-0.xml',error:'indexable HTML / sitemap coverage mismatch'});
if(new Set(rows.map(r=>r.title)).size!==rows.length)failures.push({file:'dist',error:'duplicate titles'});
const robots=fs.readFileSync('dist/robots.txt','utf8');
if(!robots.includes(`${origin}/sitemap-index.xml`))failures.push({file:'robots.txt',error:'wrong sitemap origin'});
const report={checkedAt:new Date().toISOString(),origin,htmlCount:rows.length,indexableCount:indexed.length,sitemapCount:locations.length,failures,pages:rows};
fs.writeFileSync('reports/build-seo-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({htmlCount:rows.length,indexableCount:indexed.length,sitemapCount:locations.length,failures}));
if(failures.length)process.exitCode=1;
