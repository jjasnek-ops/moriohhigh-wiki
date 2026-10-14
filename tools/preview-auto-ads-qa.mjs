/** Local-only browser fixture. Never send QA impressions or analytics to providers. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('dist');
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:4323');
  if (url.pathname === '/__qa/gtag.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.end('/* QA stub: no analytics requests. */');
    return;
  }
  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  let file = path.resolve(root, relative || 'index.html');
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.json': 'application/json', '.wasm': 'application/wasm' };
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  let body = fs.readFileSync(file);
  if (path.extname(file) === '.html') {
    let html = body.toString();
    if (relative.startsWith('ads/')) {
      html = html.replace(/<script\b[^>]*src="https:\/\/[^>]+>[\s\S]*?<\/script>/g, '<!-- provider disabled for QA -->');
    } else {
      html = html.replace('https://www.googletagmanager.com/gtag/js?id=', '/__qa/gtag.js?id=');
      const setup = url.searchParams.get('choice') === 'declined'
        ? "localStorage.setItem('aw-cookie-consent-v2','declined');"
        : "localStorage.removeItem('aw-cookie-consent-v2');";
      html = html.replace('<head>', `<head><script>${setup}localStorage.removeItem('morioh-adsterra-sticky-dismissed');</script>`);
    }
    body = Buffer.from(html);
  }
  res.end(body);
}).listen(4323, '127.0.0.1', () => console.log('QA fixture: http://127.0.0.1:4323 (providers stubbed; not deployable)'));
