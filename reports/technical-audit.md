# 技术审计

日期：2026-10-11。Node 22.19.0，模板 pnpm 11.1.1，Astro 7.3.2，Wrangler 4.149.0。原模板 AnvilWiki 2.37.0 / MIT / b00859a524a176d60f3982c71b318ac11bc2fd5b。执行日志逐项保存于 reports/logs/。

| 命令 | 当前结果 | 证据 / 限制 |
|---|---|---|
| pnpm check | 已验证通过 | 136 files，0 errors / warnings / hints；检查生产应用，Vitest 测试另行运行 |
| pnpm lint | 已验证通过 | eslint 无错误 |
| pnpm test | 已验证通过 | 18 suites，244 passed / 1 skipped；7 个保留的上游演示/营销测试不适用于已套模板的本站；一个 FORKER warning 测试因该块已删除跳过 |
| pnpm check-config | 已验证通过 | 英语、2 个分类与目录匹配；实际 Pages origin 配置匹配 |
| pnpm check-content | 已验证通过 | 4 MDX schema / H1 / ALT / internal trailing slash 检查 clean |
| pnpm check-links | 已验证通过 | 21 HTML 中 455 internal links 全部解析 |
| pnpm check-sitemap | 线上已验证通过 | 实际 Pages origin 的 10 URLs 全部 200；见 logs/check-sitemap-live.txt |
| pnpm build | 已验证通过 | static Astro，21 HTML；Pagefind en，4 indexed articles |
| pnpm check-i18n | 已验证通过 | 附加英语配置检查 |
| node tools/audit-build.mjs | 已验证通过：21 HTML / 10 indexable / 10 sitemap / 0 failures | H1、唯一 Title、Description、Canonical、JSON-LD、ALT、模板残留、noindex / Sitemap 对齐、启用的第三方追踪 |

原始全模板测试第一次执行有 14 套件失败：绝大多数要求 Anvil Quest 示例内容、已移除的 landing 文件或日语演示。已保留测试文件，列入 vitest.config.ts 的 templateOnlySuites，适用的 URL、SEO、i18n、内容、索引策略等仍运行。已修复实际首页 videoId 字段缺失和本站测试中固定演示名称/语言的断言，未通过恢复演示内容来绕过校验。

Windows 初次 pnpm 11.25.0 install 出现 symlink EPERM，改用模板固定 11.1.1 成功。两个 optional native 包下载失败；修复脚本仅从 npm registry 下载，校验 metadata SHA512，再写入受限 node_modules 目标。最终 build 和 Pagefind 实际运行成功。PowerShell npx.ps1 的动态调用解析异常通过调用官方 npx.cmd 解决。

英语唯一实际内容版本；保留模板有效 alternates，没有声明不存在的翻译。分类、recent、tags 和未配置联系邮箱的 contact noindex，并同步排除 Sitemap。已发布范围包含通过 E17/E18 证据门禁的 Stand 获取指南；没有 Codes 或其他空壳机制路由。广告组件保留，广告、Cloudflare Web Analytics 和 Giscus 未启用。GA4 已在原生同意弹窗之后按需加载，独立数据流 ID 已配置；本地拒绝分支无 Google loader。

桌面/移动/搜索的实际浏览器验证见 visual-sample-audit.md。没有 Lighthouse 或真实 Core Web Vitals 分数，不宣称富媒体结果、Google 收录或 SEO 效果。线上 HTTP/HTTPS/404、Sitemap 和 Canonical 以 online-acceptance.json 为准。

## Incremental release gates — 2026-10-11 20:24

All eight applicable template gates passed after the Stand article and direct-upload/IndexNow workflow fixes. The GSC public verification field was then configured, the static build and full build SEO audit rerun successfully (21 HTML / 10 indexable / 10 sitemap / zero failures), and the affected workflow suite rerun (45 passed / 1 skipped). All production pages contain the site-specific verification meta tag, using the existing BaseLayout field. At that earlier build no analytics or ad loader was enabled. The later GA4 configuration below supersedes that state. Final online checks are pending the six-page upload.

The first GitHub CI run succeeded; the first IndexNow run failed waiting for a native deploy marker that direct upload had not emitted. The upload wrapper now emits the actual source commit marker. Automatic IndexNow runs are opt-in; manual submission remains available. IndexNow acceptance is separate from Google Search Console submission and Google indexing.

## GA4 gate — 2026-10-11 20:40

Actual independent web stream 16106218705 / Measurement ID G-MLLG5CEMCG was created in the existing authorized Google Analytics account. The native environment field, consent strings and privacy notice are configured. All eight gates were rerun and passed (18 suites, 244 passed / 1 skipped; 455 internal links across 21 HTML). Build audit confirms the correct ID inside the deferred native tracker function and consent banner, with no upfront external analytics script. In the real static-preview browser the banner was visible, no Google script existed before choice, and clicking Decline left no Google script. Online accept/collection are not yet verified.

## Final production acceptance — 2026-10-11

Earlier pending online states are superseded here. Source b1d747968377615aa7fe14a36455c9aa4e935d7c was pushed, CI 38140239450 succeeded, and production deployment e68613b0-a4c5-4b8b-add3-6191e9c91508 succeeded. The live deployment marker matches. tools/audit-live.mjs checked 20 valid HTML routes and 27 HTTP targets with zero failures: HTTPS, same-origin Canonical, noindex archives, 10 valid sitemap URLs, XML MIME types, robots, image/search assets, and actual nonexistent-route 404. Native live check-sitemap passed 10/10. Manual IndexNow returned HTTP202 for 10 URLs; not Google indexing.

GSC ownership and index/child sitemap submission success dialogs were observed. Sitemap-report rows still show Couldn't fetch, while Google live inspection successfully fetched index XML at20:48:11 and allowed crawling/indexing. Report processing remains unresolved; Google indexing is not verified.

Production Allow analytics loaded the correct tag; correct GA4 property558434763 Realtime showed one test user and two page views, plus page_view/first_visit/session_start/user_engagement events. This verifies collection, not natural search traffic. Ads remain disabled. Formal-domain binding, domain-mailbox routing, indexed-page count/impressions and real performance measurements remain unverified.

## Formal-domain local gates — 2026-10-12

Verified active custom domain and enabled forwarding allowed the native site configuration to switch to moriohhighguide.wiki and contact@moriohhighguide.wiki. Contact is now indexable; archive policy remains unchanged. Check, lint, test, check-config, check-content, check-links, build and strict i18n passed; test count remains 244 passed / 1 skipped. Build SEO audit:21 HTML /11 indexable /11 sitemap /0 failures. Logs use the formal-domain suffix. Local/live sitemap and deployment acceptance will be recorded separately after the actual checks. Only configuration, contact presentation and custom-domain deployment guard changed; no game claims were added.

Native local check-sitemap against the existing static preview at127.0.0.1:4322 passed11/11 (host rewritten locally by the native checker). It does not establish production acceptance. Mail delivery test was explicitly skipped by the user; configuration verification remains valid.

## Formal-domain production acceptance — 2026-10-12

Source7f1de4600643729cb6eda26c664c1daeb7a7ffb4 /CI38156101001 success /deployment3989ef5f-0030-4720-a5f6-1373c027dafd success. Live marker matches. Native check-sitemap passed11/11; full live audit20validHTML/27targets/11sitemapURLs/0failures. Contact/browser mailto decoded correctly by Cloudflare and Pagefind Stand query returned4articles; clicking the guide opened the formal-domain URL. Domain GSC ownership and index submission verified; processing still Couldn't fetch/0discovered. Existing GA4 stream URL saved and correct-property Realtime received1operator user/1Contact page_view,first_visit andsession_start. Admin inactive warning retained separately. Formal receipts supersede earlier pending domain/Google configuration states, without implying Google indexing. Actual mail receipt was explicitly skipped.

## 图片完善正式验收 — 2026-10-12

source a60fa3ceb83b20ddbd4a48ba62ddd2f3868435a2 /CI38161154603 success /production部署 b107ac33-3bd5-4415-924d-872cb1ec8ef6 success /marker匹配。新增原创插画、原生响应式图片和MDX流程图。check137files0diagnostics、lint、244passed/1skipped、check-config/check-content/check-i18n/check-links/build通过；本地Sitemap11/11。buildSEO21HTML/11indexable/11Sitemap/0failures；live20HTML/27targets/0failures；images26/26线上资源200且字节与构建一致/0failures。原GA4同意门禁、域名origin和索引规则通过既有审计；Google处理与用户跳过的收信状态未改变。图片是编辑插画，游戏事实没有新增未经核验的信息。

## 攻略增量本地门禁 — 2026-10-12

新增1个限定PC HUD参考和既有Stand100 Rerolls说明；check/lint/test/check-config/check-content/build/check-links/check-i18n及本地check-sitemap通过。137files0诊断；244pass/1skip；5MDX；22HTML/505内链；12可索引/Sitemap；Pagefind5篇；图片32资源0失败。线上尚待实际部署。完整研究/界限见research/guide-expansion-2026-10-12.md。


## 攻略补充正式验收 — 2026-10-12

source 173c393f772174db373ebac0a358d60c6cddfed8 /新账号jjasnek-ops仓库CI38201586065 success /生产部署08de0189-b4c1-43a2-989f-299458e12d63 success /正式marker一致。live21正常HTML/28检查/12Sitemap/0failures；原生线上check-sitemap12/12 HTTP200；32线上图片资源HTTP200且字节与构建一致。完整日志、API部署回执和online-acceptance.json已保存。上传曾ENOTFOUND，过程IPv4优先重试成功，无系统DNS或TLS更改。源内容限定早期录像UI，技术通过不等于当前客户端实测。

正式站Pagefind controls查询实际返回4结果，首条为新增PC Controls；点击后dialog关闭且进入https://moriohhighguide.wiki/guides/controls/，H1/Title正确。临时390宽视口已reset，结果页保留为交付页。
