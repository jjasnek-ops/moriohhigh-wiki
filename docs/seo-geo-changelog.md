# SEO/GEO 实际改动与验证

> 最终发布状态（2026-10-14）：用户随后明确授权，SEO/GEO及Adsterra、GA4自动加载已合并上线。实际source 7cfd47f44dc982ab2dbee83ea3157bf9e64ef6fb；GitHub CI通过，正式23页/13Sitemap/6来源面板/自动加载与搜索通过。详见 [上线验收](../reports/seo-geo-release-2026-10-14.md)。下方的未部署/同意门控措辞属于此前阶段记录；搜索排名、AI引用及广告后台效果仍未验证。

2026-10-14 后续授权：用户明确要求将 SEO/GEO 与广告、GA4自动加载合并部署。此前 local-only 状态保留为历史；发布和正式域名验收正在进行，最终状态以 reports/seo-geo-release-2026-10-14.md 和 Pages 回执为准。

> 后续指示（2026-10-14）：站主要求取消Adsterra及GA4的同意前置；当前本地版本自动加载并移除选择横幅。本文此前同意门控检查是本轮SEO阶段的历史记录；最新广告行为与验证见 reports/automatic-ads-2026-10-14.md。生产仍未部署。

2026-10-14；基于AnvilWiki2.37.0（上游b00859a524a176d60f3982c71b318ac11bc2fd5b），保留Astro/MDX/Pagefind。开始时Git干净，从b1f7fe9建立codex/seo-geo-2026-10-14。改动仅本地，未推送或部署；正式站marker最后仍为c02e4fd73a22f8eb53e6f7b9c544ca11da842739（HTTP200）。

## 实际代码/内容变更

文件/页面 | 实际结果
---|---
[how-to-play.mdx](../src/content/wiki/en/guides/how-to-play.mdx) | 保留/guides/how-to-play/，改为Beginner Guide: Game Link and First Steps，新增五步first-session表和Controls/Stand/费用/Codes链接；保留未实测进度声明
[how-to-get-a-stand.mdx](../src/content/wiki/en/guides/how-to-get-a-stand.mdx) | 新增失败原因对照，不改已有概率、条件或费用证据；日期14仅表示实质编辑，录像检查仍11/12
[codes.mdx](../src/content/wiki/en/resources/codes.mdx) | 七字符串不变、复制组件不变、奖励省略；新增GamesRadar入群/重开游戏报道及可见FAQ，注明二手和未实测；保留10/13码快照
六个MDX + [SourceNote.astro](../src/components/article/SourceNote.astro) | sourcesChecked/sourceNote/citations经schema验证；来源面板在直接答案之后，HTML输出，无新增JS；Controls/community/release只添加元数据，不伪造当前核验或修改其原文章日期
[content.config.ts](../src/content.config.ts)、[ArticlePage.astro](../src/components/article/ArticlePage.astro) | 同一来源数组供可见链接和Article citation；编辑日期与来源日期分离
[seo.ts](../src/lib/seo.ts)、[site.ts](../src/config/site.ts) | 没有真实主体时不输出网站Organization/虚构作者/出版主体；真实命名作者仍支持；WebSite稳定@id，Article isPartOf/inLanguage/citation；VideoGame使用官方游戏URL和游戏自身描述
[BaseLayout.astro](../src/components/layout/BaseLayout.astro) | 配置真实publisher时才注入Organization；站点策略排除的归档noindex,follow；显式noindex及fallback仍nofollow
[404.astro](../src/pages/404.astro) | 明确noindex,nofollow，保留404恢复搜索
[en.json](../src/locales/en.json) | 首页新手入口、FAQ新手回答、来源UI标签同步，英语不变
[llms.txt.ts](../src/pages/llms.txt.ts) | 自动文章列表保留，添加独立/非官方身份及证据限制，不伪造AI推荐指令
[seo.test.ts](../tests/seo.test.ts) | 验证无身份时不造组织/作者、显式主体、真实给定作者和citation/网站ID关联
审计工具/研究/六份报告 | 生产基线、竞争样本、十机会、AI未测试项、浏览器证据、构建结果和恢复边界可追溯

没有新增内容URL，没有新增依赖、追踪器或广告key，没有改DNS、GA4账户、广告账户或Cloudflare设置。

## 测试结果

命令/检查 | 实际结果
---|---
pnpm check | 143文件，0error/0warning/0hint
pnpm lint | 通过
pnpm test | 19套件通过；249passed/1skipped（不是250passed）
pnpm check-config | 通过，原正式SITE_URL一致
pnpm check-content | 6MDX通过
pnpm check-i18n --strict-ui | 通过，英语完整
pnpm build + 原postbuild | 静态构建通过；24正常HTML含404，另7广告资产；Pagefind索引6篇
pnpm check-links | 580内链/31HTML全部解析
pnpm check-sitemap http://127.0.0.1:4322 | 13URL全部本地200；输出正式URL是标签，脚本已按本地host改写请求，不冒充新版本生产检查
audit-build.mjs | 24HTML/13可索引/13Sitemap，0failure；Title唯一/H1/ALT/Canonical/Schema/GA门控通过
audit-ads.mjs | 7原始广告单元、24HTML，0failure；无同页重复key、未同意不加载、广告资产排除索引
audit-seo-geo.mjs | 23有效本地路由；6静态Article、来源可见/日期、原URL和广告位置一致；0failure
真实浏览器 | 1280桌面及390移动；无整页横向溢出；来源可读、表格完整、Stand失败小节存在；beginner搜索1结果且实际点击成功；复制Copied!反馈通过但虚拟剪贴板桥未验证内容
test:e2e | 未运行：该脚本验证模板重新初始化，本轮不触及apply-template；没有声称其通过
真实CWV/AI引用 | 未取得，详见访问限制和GEO报告

[逐项回执](../research/seo-geo-2026-10-14/test-results.json)。首次SEO专项发现404 meta遗漏，修复后最终复测通过；deprecated URL验证hint改为当前z.url后归零。未把初次失败写成一开始全绿。

## 传输体积与风险

URL | 生产基线HTML gzip字节 | 本地修改后 | 差值
---|---|---|---
/guides/controls/ | 18820 | 18957 | 137
/guides/how-to-get-a-stand/ | 22176 | 22824 | 648
/guides/how-to-play/ | 18274 | 19261 | 987
/resources/codes/ | 19371 | 21537 | 2166
/resources/community-links/ | 18030 | 18178 | 148
/resources/release-information/ | 17812 | 17957 | 145

最大增加在Codes（约2.2KB gzip），主要来自来源、入群说明和可见FAQ；没有新增广告/统计脚本。该表不是CWV测量。第三方广告在同意后仍可能影响体验，真实填充与收入未验证；应使用同意前后分别测试，不能把现有QA浏览当有效广告点击或收益。

## 交付文件

- [网站审计](seo-geo-audit.md)
- [竞品分析](competitor-analysis.md)
- [关键词机会](keyword-opportunities.md)
- [AI检索评估](geo-evaluation.md)
- 本文件：实际改动与验证
- [后续行动](next-actions.md)

恢复说明已写入reports/current-delivery-status.md和MAINTENANCE.md：Codes/全站定时维护不得携带本轮未获部署授权的优化版本上线。既有四个检查和每日码监控没有增删或创建重复任务。
