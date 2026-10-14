# Morioh High Wiki

Independent English player resources for Roblox Morioh High. Not affiliated with Not A Stand Game, Roblox Corporation, or JoJo rights holders.

- Production origin: https://moriohhighguide.wiki (deployment acceptance is tracked in reports/online-acceptance.json). Cloudflare's project address is https://moriohhigh-wiki.pages.dev.
- Repository: https://github.com/jjasnek-ops/moriohhigh-wiki
- Source: AnvilWiki 2.37.0, commit b00859a524a176d60f3982c71b318ac11bc2fd5b. MIT license retained; original README preserved in docs/anvilwiki-upstream-README.md.

The current edition contains the homepage, Roblox launch/identity guide, a dated PC controls reference, documented Stand acquisition and replacement cost, release information, community resources, a publisher-reported codes list and FAQ. The Stand guide reads the game Encyclopedia in actual footage and checks a second player's Arrow recording; this wiki has not joined a live game client. A hands-on beginner route and complete Stand data remain withheld. The Codes page publishes sourced strings with rewards omitted and an explicit untested-redemption status; it does not claim they are verified working. See research/page-matrix.md and research/evidence-ledger.md. Do not describe this scope as a complete gameplay encyclopedia.

User keyword research dated October 11, 2026 is preserved unchanged in research/user-keywords-2026-10-11.md and .json. Incremental research is separate. Unknown search volumes and KD remain null.

## Local development

Node >=22.13.0 and pnpm 11.1.1. Install with pnpm install --frozen-lockfile. Run pnpm dev or pnpm build followed by pnpm preview. If optional Windows native downloads failed, use scripts/repair-windows-deps.ps1; the repair verifies npm dist.integrity.

Configuration is concentrated in src/config/site.ts, src/config/navigation.ts, src/config/indexing.ts, src/config/advertising.ts and src/locales/en.json. SITE_URL must be an actual local or allocated publication URL. Pagefind is produced during postbuild. Adsterra units and GA4 load only after the visitor allows optional services. Public unit identifiers are in wrangler.toml; each original ad snippet lives in public/ads/. Ads use their original sizes only where they fit, and each unit appears once per page. Update the privacy notice whenever enabled services change. See docs/advertising-layout.md for this site's placement rules.

## Validation and release

Run pnpm check, pnpm lint, pnpm test, pnpm check-config, pnpm check-content, pnpm check-links, pnpm build and node tools/audit-build.mjs. Run pnpm check-sitemap with BASE_URL pointing to the static preview or verified live site. The retained template-only fixture suites are documented in reports/technical-audit.md.

Deploy dist with Wrangler using process-environment credentials. Never commit tokens. The current Cloudflare project uses direct upload; repository pushes run validation and do not automatically upload a deployment. No permanent deployment credential has been saved to GitHub. The direct-upload wrapper publishes the native deployment SHA marker. IndexNow submission is manual by default; automatic CI submission requires explicit INDEXNOW_AUTO_SUBMIT opt-in and a matching live deployment. IndexNow is separate from Google Search Console.

Read MAINTENANCE.md for the publication freeze and day 3/7/14/28 checks. Start recovery from reports/current-delivery-status.md. Formal domain, working domain mailbox, GSC, GA4 collection and Google exposure require separate verified states.
