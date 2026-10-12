# 站点架构

英语、静态 Astro/MDX、原生 AnvilWiki 导航/Sidebar/TOC/Pagefind。

- /：品牌与入口。
- /guides/how-to-play/：游戏链接和平台启动步骤。
- /resources/release-information/：历史发布信息和观察边界。
- /resources/community-links/：开发者群组、Discord 和 Trello 证据边界。
- /faq/：快速答疑。
- /about/、/privacy-policy/、/terms-of-service/、/copyright/：说明与政策。
- /contact/：实际启用的域名邮箱 contact@moriohhighguide.wiki；2026-10-12已发布并允许索引，实收测试按用户要求跳过。
- /guides/、/resources/、/recent/、/tags/ 与标签子页：真实导航，无索引，不作为新增 SEO 精品页。
- /404.html：原生 404。

所有内部 URL 保持尾斜线。未核实的机制路由没有创建，也不会出现在 Sitemap。广告组件保留、广告与分析默认关闭。域名未确定，localhost 仅用于本地；发布时必须使用 Cloudflare 实际分配的网址重建 Canonical、Sitemap、robots 和分享图 URL。


## Incremental change

/guides/how-to-get-a-stand/ now answers documented first-Stand acquisition from E17/E18. Actual allocated primary origin is https://moriohhigh-wiki.pages.dev. Earlier localhost text records the initial setup stage.

## 2026-10-12正式域名增量

正式origin已验证为 https://moriohhighguide.wiki。Canonical/Sitemap/robots/分享元数据已重建并线上验收；11可索引URL。原Pages地址作为平台地址保留，Canonical指向正式域名。原生GA4仅在同意后加载，广告继续关闭。历史localhost/Pages说明保留为初始化记录，不作为当前部署状态。证据：reports/domain-binding.json、online-acceptance.json、analytics-formal.json。

## 2026-10-12攻略补充候选

新增 /guides/controls/：限定已读录像PC HUD参考，覆盖键鼠输入；当前客户端、移动与手柄未测。Stand获取页合并已验证的100 Rerolls更换说明，URL保持不变；不新增重复reroll路由。上线后预计7编辑页、12可索引URL，实际以构建/线上验收为准。页面矩阵13缺证据意图继续暂缓。


2026-10-12当前验收：Controls及Stand更换补充已在正式域名部署；source 173c393f772174db373ebac0a358d60c6cddfed8 /12可索引及Sitemap URL/7编辑页。此前“候选/待部署”段落是过程记录，以本条和reports/pages-deployment.json为准。
