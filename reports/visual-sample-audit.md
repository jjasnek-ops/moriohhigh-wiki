# 视觉样板审计

2026-10-11，真实 Codex IAB 浏览器，静态预览 http://127.0.0.1:4322/。1440×900 桌面及 390×844 移动视口。截图位于 reports/screenshots/。

已检查：首页、how-to-play 指南、community-links 数据表；桌面导航、文章 Sidebar、TOC、Quick Answer、FAQ、表格、相关文章、内链；移动菜单实际打开，移动目录实际展开。

Pagefind 实际输入 Discord，返回 2 篇对应文章，并点击社区文章成功。搜索弹窗可滚动，未记录搜索控制台错误。移动 how-to-play 的 document.scrollWidth=375、innerWidth=390，无整页横向溢出。

首页留白经实查缩短；桌面与移动截图保留。未使用受保护的游戏图。封面用于社交分享，正文以文本和表格为主。广告和 Cookie banner 未启用。

**限制：**指定的 How to Get a Stand 样板因事实证据不足没有生成，用可靠的 how-to-play 页面验证共享文章组件；这不代表 Stand 内容门禁通过。移动体验是浏览器视口测试，不是真实手机或游戏支持测试。Lighthouse / 真实 Core Web Vitals 尚未测量，不声明性能分数。

## Incremental Stand sample and live checks — 2026-10-11

The earlier Stand deferral is historical. After E17/E18 were obtained, the actual How to Get a Stand page was created and checked in the real browser at 1440×900 and 390×844. The mobile TOC was expanded successfully; both tables and the Quick Answer were readable. Mobile document scrollWidth 375 <= innerWidth 390, one H1, two tables and no recorded browser error logs. Screenshots: stand-desktop.jpg and stand-mobile.jpg. This passes the requested Stand visual sample for the documented methods, without claiming a live Roblox client test. A community-links data page supplies the third sample; a complete Stand roster remains deferred.

The first production edition was also checked in the real browser: desktop/mobile home, Pagefind Discord results and a successful community article click, mobile community TOC and table. Live screenshots are saved separately. The new six-page edition needs its own upload and final live confirmation.

## Final live edition — 2026-10-11

Six-page production edition is uploaded. Homepage and Stand article were viewed; Pagefind query Stand returned four article results and its result opened the correct live URL. Production Allow analytics loaded the configured tag; actual GA4 test collection is recorded in analytics.json.

verified-live-stand-mobile.png is the actual390×700 live-page capture after tab-specific device emulation. Heading, description, metadata, Quick Answer and mobile navigation are readable. Local390×844 Stand sample includes both tables, FAQ, expanded TOC and related links. Earlier mobile homepage/community/search proof is retained for shared native components. Final mobile-search repeat after the latest upload timed out; no separate successful repeat is claimed.

Browser-wide overrides did not consistently apply to the live tab, and an immediate capture had stale paint. final-search-mobile.jpg, final-stand-mobile.jpg and final-stand-mobile.png are diagnostic captures, excluded from final mobile proof. Verified capture was made after tab-specific emulation settled, then the override was cleared. Desktop final proof is final-home-desktop.jpg; unambiguous local samples are stand-desktop.jpg/stand-mobile.jpg. No actual phone, Lighthouse or real-user performance result is claimed.

## Formal-domain checks — 2026-10-12

Real browser https://moriohhighguide.wiki/contact/ rendered the public contact address and working mailto; obsolete unconfigured-contact text is absent. Screenshot formal-contact.png. Pagefind Stand returned4articles, result click opened https://moriohhighguide.wiki/guides/how-to-get-a-stand/; screenshot formal-search-stand.png. Consent Allow loaded the correct configured Google tag; actual Realtime proof is saved privately under .tools/screenshots. Existing desktop/mobile shared-component proof remains applicable; no new formal-host mobile search or real-phone performance measurement is claimed.

## 图片增量 — 2026-10-12

新版4插画和Stand流程图完成，并在正式域名实际可见。本地同一构建桌面1280×720（scrollWidth1265）、手机390×844（scrollWidth375）通过；首页5张图加载，Stand手机图注与两路径纵向流程可读，无整页横向溢出。正式站主视觉/四图片卡片截图images-live-home-desktop.png与images-live-home-cards.png；本地images-home-desktop/mobile及images-stand-diagram-desktop/mobile保存。26线上资源与构建一致。每图说明原创编辑插画，不冒充实拍/实际地图/模型。未做本次正式手机搜索重测或真实手机性能测量。完整结果见image-improvements-2026-10-12.md。

## 攻略增量本地样板 — 2026-10-12

Controls桌面1280×720首屏、封面、Sidebar/TOC查看；手机390×844两列9输入表可读、scrollWidth375<=390、表宽343、1H1；Stand新增reroll成本和源视频链接查看。Pagefind controls4结果且首条实际打开新页。截图controls-preview-desktop/mobile-table、stand-reroll-preview、controls-preview-search保存。未做本次真实手机/Lighthouse/CWV测量；正式站仍待部署。


## 攻略补充正式站浏览器验收 — 2026-10-12

正式/guides/controls/单H1、正确Canonical、原生TOC/Sidebar、原创键盘封面已实际可见；封面complete/naturalWidth768。正式390宽手机无整页横向溢出（375<=390）；完整9行PC输入表截图controls-live-mobile-table.png。正式桌面首屏controls-live-desktop.png已保存。本地搜索与Stand更换段落截图保留，32线上图片资源与本地验收构建逐字节一致。实际手机、Lighthouse/CWV和当前游戏客户端未测试。

正式站Pagefind controls查询实际返回4结果，首条为新增PC Controls；点击后dialog关闭且进入https://moriohhighguide.wiki/guides/controls/，H1/Title正确。临时390宽视口已reset，结果页保留为交付页。
