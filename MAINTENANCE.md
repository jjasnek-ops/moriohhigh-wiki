# Low-maintenance publication policy

## User-authorized Codes exception — 2026-10-13

The user subsequently requested an immediate first publication. A sourced list of strings consistently reported by two checked same-game publishers may be published as **reported codes**, with a clear untested-redemption status and rewards omitted. It does not need an in-game success claim to accurately report what those sources list. Developer-confirmed and tested-working labels still require their own evidence. Keep this scope for future scheduled updates; do not block a reported list solely because rewards conflict.

The user requested scheduled code retrieval and allows reward disagreements to be omitted. Check once daily at10:00 Asia/Shanghai; omit reward descriptions. Follow `research/codes-monitor-policy.md` and compare `research/codes-watchlist.json`. Reward conflicts alone do not stop candidate collection. Publisher reports, developer announcements and successful redemption remain separate verification states; this does not authorize presenting untested codes as working. Only material changes justify an article edit or commit. Unchanged checks write local ignored logs, without daily article rewrites or date bumps. The existing four whole-site checks remain intact. Automation creation and actual future execution are verified separately.

Freeze editorial URLs after the initial release. Do not run scheduled article generators, rewrite text daily, or change dates without a substantive correction. Ads and optional comments remain disabled. GA4 has its own web stream and loads only after optional-analytics consent; the privacy notice reflects this. Verify live collection separately from configuration.

Update only for: a major game change that invalidates a guide; a material factual error; a valuable new search intent; a GSC content gap; a technical/indexing fault; or a changed official game entry or important rule. New codes need a developer source and successful same-game validation. A video title alone is insufficient for a mechanic guide.

The initial edition has resource coverage and a documented Stand acquisition guide. Beginner progression, a complete current Stand roster and other game data remain deferred in `research/page-matrix.md`. Do not publish their empty routes or fill them with JoJo lore or mechanics from another Roblox game.

## Checks after publication

Use the deployment acceptance date in `reports/online-acceptance.json` as day 0. If that file does not show a verified deployment, the clock has not started.

| Day | Check | Action only when warranted |
|---|---|---|
| 3 | HTTPS, official game link, all sitemap URLs, Pagefind and GSC verification if accessible | Fix an actual break or complete authorized account setup |
| 7 | GSC sitemap status and indexed pages; 7/30-day Trends if available | Distinguish unindexed from indexed-but-low-ranking; no forced content rewrite |
| 14 | GSC impressions/queries/clicks and GA4 Organic Search if enabled and verified | Address a demonstrated content or CTR gap with supported facts |
| 28 | Trend direction, indexed-page exposure, useful long tails, competition and maintenance time | Continue, freeze further investment, or add only a proven valuable page |

Four single-run thread checks were created in the app: October 14, October 18, October 25 and November 8, 2026, at 12:00 in the local schedule (Asia/Shanghai). IDs are morioh-high-3, morioh-high-7, morioh-high-14 and morioh-high-28. The saved automation prompts permit public technical checks and account measurements only when already authorized and accessible, keep quiet when no action is needed, and prohibit automatic article generation. Creation is verified; future execution is not yet verified. Keep the computer and app running for local project access.

GSC ownership and both index/child sitemap submission dialogs are verified. Its sitemap report still says Couldn't fetch / 0 discovered pages, despite valid public XML and a successful Google live fetch on October 11. Recheck processing status; do not confuse that error with proven site-wide crawl failure. GA4 consent-gated production collection is verified in the correct property: one operator test user and two page views. Organic Search, Google indexing and impressions remain unverified.

## Measurement rules

Track GSC impressions, clicks, query/page rankings, indexed page count; verified GA4 Organic Search sessions; and, later, actual ad impressions/RPM/revenue. Do not estimate revenue from missing analytics. Separate: not indexed; indexed with low rank; ranked with little demand; impressions with weak CTR.

Stop adding paid effort if measured heat falls persistently, indexed content has no meaningful exposure over an appropriate observation period, long-tail demand is limited, competition wins decisively, or maintenance exceeds plausible value. Retain a working low-cost static site if useful. No automatic deletion is required.

## Recovery and deployment

Read `reports/current-delivery-status.md`, inspect Git and the evidence ledger, then resume the unfinished step. Node >=22.13, pnpm 11.1.1. Install with the frozen lockfile. The Windows optional-native repair is documented in `scripts/repair-windows-deps.ps1`; use only if a native package download failed.

For content edits, run the template's content and link gates plus the appropriate build checks. For a deployment, build with the verified `SITE_URL` and run the build SEO audit; deploy `dist` through Wrangler using credentials supplied in the process environment. Never put tokens in tracked files. Recheck the live sitemap, canonical origin, 404 status and search after upload.

Production now uses the user-owned https://moriohhighguide.wiki. Canonical, sitemap and robots point to this origin, including on the Pages platform host. Contact forwarding configuration is enabled; actual receipt testing was skipped at the user’s request. Any future domain change must be separately authorized and revalidated before changing the origin.


## 2026-10-12 formal domain acceptance

Spaceship nameservers changed and the Cloudflare zone/custom domain are active. Formal-domain deployment, HTTPS,11sitemapURLs, Canonical, contact mailto, Pagefind and consent-gated GA4 test receipt are verified. GSC domain property sc-domain:moriohhighguide.wiki is verified and its index sitemap submitted; initial report still Couldn't fetch/0discovered. Existing Pages property history stays in search-console.json. DNSSEC public chain validates, while the last CF API status remains pending. Review these two statuses at the scheduled checks.

The four original inspection dates remain unchanged, counted from the initial October11 deployment. All four automation prompts now target the formal domain and have been read back. Do not create duplicate reminders. Mail delivery testing was explicitly skipped by the user; keep its status unverified and do not ask again without a new request. The public address is contact@moriohhighguide.wiki; the private forwarding destination is never published.


## GitHub identity preference (2026-10-12)

The user selected jjasnek-ops for all future GitHub work. Use the current authenticated account and https://github.com/jjasnek-ops/moriohhigh-wiki as this project’s origin. Do not fall back to the historical ChanChunKei credential for pushes or API mutations. GitHub CLI and HTTPS credential selection are configured for jjasnek-ops; author identity uses the account’s GitHub noreply address. Deployment remains a separate Cloudflare direct upload.

2026-10-12攻略增量验收：7个编辑页（含限定PC录像参考）及5政策页共12个可索引URL，Pagefind5篇MDX。Stand页含有证据的100 Rerolls更换费；当前客户端/完整roster/Codes仍未验证。以最新reports/current-delivery-status.md和pages-deployment.json为恢复依据。
