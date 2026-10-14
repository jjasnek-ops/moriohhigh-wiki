# Adsterra layout release — 2026-10-14

## Scope

Owner supplied seven original snippets and requested a site-wide top sticky unit, home Native and inter-card placement, article mobile inline placement, wide-screen fixed side units and footer banners. All seven public unit keys are configured in Wrangler; snippets are retained separately under public/ads/. No paid action or ad-account change was made.

Implemented layout is documented in docs/advertising-layout.md. Home cards now form a vertical list with thumbnails and one responsive inter-card position. One key is used once per page, so repeated placements and an extra home-footer 728×90 are consolidated. The articles use 300×250 after the second direct body paragraph, Native at the end of related content, footer 728×90/468×60 and the supplied 160×600/160×300 in sufficiently large outer margins. Normal pages share a closable 320×50 top unit; 404 has no advertising.

## Verified local gates

- Astro check: 0 errors, warnings or hints. ESLint passes.
- Vitest: 19 suites, 247 passed / 1 skipped; consent literal consistency includes the new sticky component. Build-env behavior tests cover credential exclusion, section boundaries and fail-closed parsing.
- check-config, check-content and strict UI coverage pass.
- Native build and Pagefind pass: 24 normal HTML + 7 iframe assets; Pagefind still indexes 6 articles.
- SEO audit: 13 indexable URLs / 13 Sitemap entries, no failures. 574 internal links resolve across 31 HTML files.
- Local Sitemap: 13 URLs return 200. The initial unsupported --site CLI invocation was corrected to the script's documented positional origin argument; no code change was needed.
- Ad asset audit: 7 original snippets, original fixed dimensions, no initial iframe src, no duplicated unit per page and no ad assets in Sitemap.
- Real browser: fresh local origin shows a privacy choice with zero loaded ad frames before Allow. After Allow, widths 390/1280/1920 fit without horizontal overflow. Fixed units retain 300×250, 320×50, 728×90, 468×60, 160×600 and 160×300 sizes. Hidden units are unloaded when resized away. The inline unit follows a direct body paragraph outside the controls table. Sticky Close removes the banner and it stays closed after resize. See ad-browser-local-audit.json.

Previous analytics-only acceptance is not an ad grant: all consumers use aw-cookie-consent-v2. Legacy declines are preserved. The privacy notice and Allow button now name both ads and analytics. Unsupported raw CDP storage access was not used; migration logic is source-reviewed, not claimed as a browser storage test.

The local provider frames are blank; local preview does not establish fill. No ad was clicked. The wide-screen screenshot returned a browser capture artifact, so the wide-screen evidence is recorded DOM geometry rather than a claimed visual screenshot. No Lighthouse/Core Web Vitals measurement or provider revenue/approval claim is made.

## Publication

Prepared and locally verified; source commit, actual Pages deployment, formal-domain HTTP/asset checks and live browser proof will be recorded after upload. Google indexing, exposure and ad income remain separate unverified outcomes.
