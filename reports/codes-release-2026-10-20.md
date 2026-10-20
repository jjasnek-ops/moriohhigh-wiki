# Codes release — October 20, 2026 (Asia/Shanghai)

Status: **published; HTTP and production search API verified**. Browser visual/copy/search-dialog interaction remains **unverified** because IAB document reads timed out.

- Added reported strings: **LIKES10K**, **SPINUPDATE**, **SORRY4DELAY**. Current hub has 10 strings; the dated article contains only these 3 additions. No expired, developer-confirmed or tested-working claims were added; rewards omitted.
- Current hub: https://moriohhighguide.wiki/resources/codes/
- Dated update: https://moriohhighguide.wiki/resources/codes-update-2026-10-20/
- Source: 3e5231826f6386556eea3719f2a724406bc345b7; GitHub jjasnek-ops/moriohhigh-wiki main; [CI39356804320](https://github.com/jjasnek-ops/moriohhigh-wiki/actions/runs/39356804320) success.
- Existing Pages production deployment: 80e13085-a0f0-48e6-9fb5-a63f5d6818f2; https://80e13085.moriohhigh-wiki.pages.dev; formal-domain deployment marker equals the source commit. No account/DNS/NS/permission change or payment.

## Evidence and editorial scope

PGG's October 19 update and MrGuider's October 18 update were actually read October 20 and agree on all three exact strings. MrGuider labels their addition October 18. These dates are source update/addition dates; original article publication dates are unknown. Both game links resolve to Place111838814545019; official API maps it to Universe10768944846. The three candidates first appeared in local October 19 single-source research and were held until corroborated. Official readable description has no code list; community announcements were not read due to the JavaScript-only shell/API request failure.

Native CodeBlock copy components and source panels are retained. The hub has current metadata, list, dated update link and source dates. The new native MDX article explains only the delta and verification limits, links back to the hub and related guides, and states the actual wiki publication date. The beginner page only replaces a stale seven-code cross-reference with count-neutral wording; its gameplay facts and review date stay unchanged. Existing seven code records and the user's historical SEO research are preserved. E26, research/codes-update-2026-10-20.json and the single idempotent history event record evidence and deployment separately.

## Verification

| Gate | Result |
| --- | --- |
| Content | 7 MDX files, clean |
| Astro check | 143 files; 0 errors, warnings or hints |
| Lint / configuration / strict UI | Passed |
| Tests | 19 suites; 250 passed, 1 skipped |
| Static build / Pagefind | Passed; 7 indexed articles |
| Internal links | 608 links, 0 failures |
| Dynamic build SEO | 25 HTML including 404; 14 indexable/Sitemap URLs, 0 failures |
| Ads | 7 original-size assets; automatic-loading rules preserved |
| Live HTTP / SEO | 24 valid routes, 31 regular HTTP checks and 24 SEO route comparisons, 0 failures |
| Sitemap | All 14 URLs return 200, including new article |
| Marker / schemas / source panels | Exact source/build match; 7 source panels |
| Live search API | Each of the 3 new code queries returns hub and dated article |
| Browser interaction | Unverified: initial tab creation/document read and fresh document read timed out; title/URL visible in inventory only |

## Limits and recovery

No current-client redemption, developer announcement, rewards, expiry, game version, new mobile/desktop visual check, clipboard interaction, search-dialog click, ad fill/revenue, GA4 report reception or Google indexing/exposure is claimed. Existing Pagefind runtime was byte-matched to production, then its unmodified API queried the production index from Node; this is an actual retrieval check, not a browser UI result. The existing 20-intent research matrix and 12 deferred intents are unchanged; the dated record adds one article rather than a new gameplay intent.

Pre-existing MAINTENANCE, current-delivery-status and reports/maintenance changes were protected. Only the current run's own documentation hunks may be staged; original unrelated uncommitted edits remain uncommitted. Later receipt commits do not alter deployed source or reset the original maintenance schedule. No duplicate task was created. Retry the existing event and article; do not publish another dated article for the same three codes.

Receipts: codes-release-tests-2026-10-20.json, pages-deployment-codes-2026-10-20.json, online-acceptance.json, seo-geo-online-acceptance.json, ad-online-acceptance.json and codes-search-acceptance-2026-10-20.json. Daily acquisition logs and prior receipt backup stay ignored under .tools/codes-monitor/.
