# Morioh High ad layout

Configured on 2026-10-14 from seven snippets supplied by the site owner. Unit identifiers are public configuration, not API credentials. No AdSense, popunder, or Social Bar is enabled.

| Page | Position | Unit / display rule |
| --- | --- | --- |
| Normal site pages | Immediately below the navigation, sticky while scrolling | 320×50; closable with remembered dismissal; consent required; 404 errors have no ads |
| Home | After Hero | Native; initial 4:1 space, then adapt to the provider's actual content height without cropping |
| Home | After the first recent-guide card | 300×250 when the content column is 300–727px, otherwise 728×90 when at least 728px fits |
| Home | Footer | 468×60 where at least 468px fits |
| MDX articles | After the second introductory body paragraph | 300×250 on compact columns; no ad inserted inside a code card, list, table or answer card |
| MDX articles | End of related content | Native, then 728×90 and 468×60; fixed units only where their original widths fit |
| MDX articles | Left outer margin | Fixed 160×600 at viewport width ≥1664px and height ≥780px |
| MDX articles | Right outer margin | Fixed 160×300 at viewport width ≥1664px and height ≥480px |

Only one supplied key exists for each format. The repeated inter-card and extra home-footer 728×90 positions in the owner's sketch are therefore consolidated into one 728×90 per page. Additional repeated placements need separate provider units; this edition does not duplicate keys or shrink fixed creatives to make them fit. Width selection uses the actual content column, not a desktop/mobile assumption. Narrow tablets can receive the 300×250 alternative too.

Each snippet lives in an independent `public/ads/<name>.html` to avoid `atOptions` collisions. The template's same-origin sandbox adds layout containment and navigation friction; it is not a strong isolation boundary against malicious third-party code. `/ads/*` assets have noindex meta and HTTP headers and are excluded from the editorial SEO audit and Sitemap. Hidden alternatives have no `src` until they fit and the visitor consents.

`pnpm build` first generates the ignored `.env.production.local` from the public `[vars]` settings in `wrangler.toml`. This preserves the native Astro build while making local direct uploads and CI use the same committed switches. No API token or non-public setting is copied. Do not edit the generated file; change Wrangler instead.

The consent storage key is versioned to `aw-cookie-consent-v2`: previous analytics-only acceptance cannot grant advertising consent. Earlier declines are retained. The banner has Allow/Decline choices and a privacy link; clearing site storage permits a new choice. The top banner has a separate close button that leaves other enabled units unchanged.

Source context checked on 2026-10-14: [Adsterra ad fraud prevention](https://adsterra.com/blog/adsterra-ad-fraud-prevention-methods/), [cookies](https://adsterra.com/cookies/), [privacy policy](https://adsterra.com/privacy-policy-managed/). This implementation is not a claim of provider approval, fill rate, policy certification, Core Web Vitals performance, or revenue. Do not generate repeated test impressions or click live ads; use a bounded layout check and account delivery reports.
