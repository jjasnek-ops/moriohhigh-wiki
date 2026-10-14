/** Current-site loading policy; legacy opt-in component remains unused. */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import { describe, expect, test } from 'vitest';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel: string) => readFileSync(join(root, rel), 'utf8');

describe('automatic advertising and analytics loading', () => {
  test.each(['AdsterraSlot', 'AdsterraSticky', 'MobileAnchorAd'])('%s does not wait for a privacy choice', name => {
    const source = read('src/components/ads/' + name + '.astro');
    expect(source).not.toMatch(/CONSENT_KEY|CONSENT_EVENT|aw:consent-accepted|aw-cookie-consent|data-consent-deferred/);
  });
  test('the shared layout does not mount the opt-in banner', () => {
    expect(read('src/components/layout/BaseLayout.astro')).not.toContain('CookieConsent');
  });
  test('configured GA starts once without storage or an accept event', () => {
    const source = read('src/components/layout/BaseLayout.astro');
    const script = /<script is:inline define:vars=\{\{ gaId, adsenseClient \}\}>([\s\S]*?)<\/script>/.exec(source)?.[1];
    expect(script).toBeTruthy();
    const appended: Record<string, string>[] = [];
    const context: Record<string, any> = {
      gaId: 'G-EXAMPLE', adsenseClient: '',
      document: { createElement: () => ({}), head: { appendChild: (s: Record<string, string>) => appended.push(s) } },
    };
    context.window = context;
    runInNewContext(script!, context);
    expect(appended).toHaveLength(1);
    expect(appended[0].src).toBe('https://www.googletagmanager.com/gtag/js?id=G-EXAMPLE');
    expect(context.dataLayer[1][0]).toBe('config');
    expect(context.dataLayer[1][1]).toBe('G-EXAMPLE');
    context.__awLoadTrackers();
    expect(appended).toHaveLength(1);
  });
  test('layout deferral and independent ad dismissal remain enabled', () => {
    const slot = read('src/components/ads/AdsterraSlot.astro');
    expect(slot).toContain('available >= min && available <= max');
    expect(slot).toContain("frame.removeAttribute('src')");
    expect(read('src/components/ads/AdsterraSticky.astro')).toContain('morioh-adsterra-sticky-dismissed');
  });
});
