# SEO/GEO 与自动广告合并上线验收

2026-10-14，Asia/Shanghai。状态：**已完成、已验证正式发布**。用户明确授权本次合并部署，此前仅本地修改的限制已解除。

- 正式网址：https://moriohhighguide.wiki/
- GitHub：https://github.com/jjasnek-ops/moriohhigh-wiki ，认证与提交账号 jjasnek-ops。
- 实际生产源：`7cfd47f44dc982ab2dbee83ea3157bf9e64ef6fb`。
- CI：[38526575427，success](https://github.com/jjasnek-ops/moriohhigh-wiki/actions/runs/38526575427)。
- Pages：`moriohhigh-wiki`，production deployment `4b856f3d-44db-48ee-b674-ed780e5c467a`；API deploy stage success。
- 部署网址：https://4b856f3d.moriohhigh-wiki.pages.dev ，正式域名 marker 与源提交精确相同。
- AnvilWiki 2.37.0，MIT，上游 `b00859a524a176d60f3982c71b318ac11bc2fd5b`；Astro/MDX/英语/Pagefind 保留。

## 实际发布内容

已有 `/guides/how-to-play/` 增强为 Beginner Guide，加入基于现有证据的首次游玩步骤；Stand 页补失败排查；Codes 页补 GamesRadar 二手入群及重开游戏说明、FAQ，明确未实测。原七码和来源快照保留，奖励统一省略。没有增加新代码或虚构攻略。

六篇 MDX 都输出静态来源面板、来源核验日期和 Article citation；文章修改日期与来源日期分开。修正站点身份 Schema，未提供真实出版组织或作者时不虚构；归档改为 noindex,follow，404 明确 noindex；llms.txt 明确独立站身份和证据限制。首页和相关内链同步，有效 URL 不变。

Adsterra 与 GA4 自动加载，撤下同意选择横幅，隐私页描述真实行为。七个广告 key、原始素材尺寸、可见性/尺寸适配、响应式替代与独立关闭保留。未修改广告账户或 GA4 账户配置。

## 验证结果

| 检查 | 实际结果 |
|---|---|
| check / lint | 143 文件零错误、零警告、零提示；lint 通过 |
| test | 19 套件，250 passed，1 skipped |
| config / content / strict UI | 全部通过，6 MDX |
| build / Pagefind | 24 正常 HTML（含404）、7 广告 HTML；6 篇搜索文章 |
| 内链 | 556 条通过 |
| 静态 SEO / GEO / 广告 | 13 可索引/13 Sitemap；六来源面板；7广告单元；零失败 |
| 正式 HTTP | 23 有效路由、30 常规检查；零失败 |
| 正式 SEO/GEO | 23 页标题和 Schema 与构建一致；6来源面板；自动加载；marker、llms 与发布一致 |
| 正式 Sitemap | 13 URL 全部200 |
| 广告资产 | 7 文件200、noindex、内容与构建一致；4代表页挂载/唯一key检查通过 |
| 正式浏览器 | 1280 桌面、390 手机，无整页横溢出；广告 iframe 自动加载；GA 脚本一条；无同意横幅 |
| 搜索 / 关闭 | beginner 返回新版指南并可打开；关闭顶部广告不影响 Native |

实际浏览器中的广告容器为空；上述验证确认加载器与布局，不代表广告素材填充、广告批准、后台展示量或收入。GA 标签出现在正式 DOM 中，不等于本轮 GA4 报表接收已验证。

## 回执及边界

真实回执保存在 `pages-deployment-seo-geo-2026-10-14.json`、`seo-geo-release-ci.json`、`seo-geo-release-tests.json`、`online-acceptance.json`、`ad-online-acceptance.json`、`seo-geo-online-acceptance.json`、`seo-geo-release-browser.json`；桌面/手机截图在 `screenshots/seo-geo-release-desktop.jpg` 和 `seo-geo-release-mobile.jpg`。

旧生产回执以 `*-before-seo-geo-2026-10-14.json` 保留，前期研究及仅本地验收依然是历史证据。后续报告提交不冒充已部署的 source。Wrangler 的工作树提示来自更新后的审计报告；发布时 src/tests/wrangler 的 diff 为空，构建与 CI 源均为上述提交。

原始15词研究完整继承；37历史研究记录/30相关候选/7排除、20意图矩阵/12暂缓维持。本轮的7核心词、5固定问句和10机会项是增量研究，不填补未知月搜/KD/CPC。

**未验证**：当前 Google 收录/曝光/排名、AI 引用、CWV、广告后台数据和本版 GA4 接收；当前游戏客户端、完整 Stand roster/任务/地图、Codes 成功兑换。没有把测试通过或部署成功当作这些效果的证据。

**未执行且不属于本次部署**：付款、购买服务、账户扩权、DNS/NS/DNSSEC 修改。没有创建重复的维护任务，原 Codes 日检及四个全站检查保留。

接下来优先读真实 GSC/GA4/Adsterra 报表，补当前游戏一手证据，再以固定问题复测实际 AI 搜索引用。
