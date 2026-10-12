# 攻略补充核验 — 2026-10-12

继承现有 E01–E18 与20意图矩阵，不覆盖用户2026-10-11关键词快照。本轮已在正式域名部署并验收，source 173c393f772174db373ebac0a358d60c6cddfed8；新账号仓库https://github.com/jjasnek-ops/moriohhigh-wiki。

## 已取得的新证据

- Iron, https://www.youtube.com/watch?v=AaOK6j4ts3E ，页面显示2026-10-10，10:06。无字幕；已在真实浏览器观看并以1080p读取0:05 HUD。M菜单；LMB light attack、RMB Stand barrage、F block、Q dash、Ctrl lock、Z withdraw Stand、X Stand skill、C hold voice。开头有发布周末宣传文字，必须保留早期录像的版本边界，不能当作当前客户端实测。
- 本地原图 `.tools/guide-evidence-2026-10-12/showcase-00m05s-hd.png`；其余定位截图含缓冲状态，不能一律当作精确时间点已完成读取。
- 重新查看既有Abitsane E17图0:10：百科明确写明更换费用100 Rerolls、随机按rarity、不会得到当前已有Stand。可补充现有获取页的更换说明；不据此推断10 Arrow Shards替代付款或刷货币路线。
- PGG2026-10-11排行页列出12项及具体技能/数值，作为进一步调查线索。没有独立核对完整游戏UI，不能复制其排行、数值和全roster作为已验证资料。
- Roblox API最新身份仍为Morioh High /Not A Stand Game /Place111838814545019，查询记录playing2367，证明该快照有活动；网页非JS的“no running experiences”不用于宣称停服。原始增量记录`raw/roblox-game-2026-10-12.json`。
- Roblox Voice FAQ原始平台资料已查阅。Voice提示不保证每个账号可用，也不证明所有口令/技能触发方式。

## 研究范围与最终取舍

1. PC controls：已发布窄范围键位指南；另一玩家裁切画面未提供独立完整HUD验证，明确当前客户端未实测、早期录像边界。不能凭模糊480p画面把Ctrl误读为空格、C误读为G。
2. Stand更换：补充现有获取攻略，合并意图，避免另建重复薄页。
3. Stand图鉴：有新展示候选，完整名称/当前roster/技能与概率仍待证据；未创建正式图鉴或Tier list。
4. 新手路线/地图/NPC/任务/学校收益：未取得可靠步骤，继续暂缓。

本轮英文PC封面使用内置image_gen原创编辑插画；最终`src/assets/covers/controls-keyboard-v1.webp`，1200×675，原PNG在`.tools/image-originals/`及工具生成目录保留。尚未冒充游戏截图。生成提示词另存本轮素材记录。

## 内容审核决定

PC键位参考通过限定事实门禁：只陈述E19 HUD、日期/早期版本边界和明确未测设备范围；按矩阵记部分回答，不冒充当前全设备操作大全。Controls页已通过技术/视觉/线上门禁并发布。已有Stand页补充E20的100 Rerolls及不重复当前Stand说明。第二视频的裁切/来源限制已保留，不冒充独立键位或Code兑换验证。完整图鉴/新手进度/任务/Codes继续暂缓。

## 本地门禁（已完成/已验证）

- check137files0errors/warnings/hints；lint通过；18suite244passed/1skipped。check-config/check-content5MDX/check-i18n/build/check-links通过。
- 构建22HTML /12indexable /12Sitemap /0failure；505内链；Pagefind5篇文章；图片32资源/0failure。原生本地check-sitemap12/12 HTTP200。
- 真实IAB桌面1280×720查看Controls首屏/封面和Stand新增100 Rerolls段落；手机390×844键位表优化为两列，9输入完整可读，document.scrollWidth375<=390、tableWidth343、单H1。截图controls-preview-desktop.png、controls-preview-mobile-table.png、stand-reroll-preview.png。
- Pagefind输入controls返回4结果，首条为新增Controls；实际点击进入/guides/controls/。截图controls-preview-search.png。
- 图片及PC内容限定早期录像参考，当前客户端未实测；没有新增Codes、全Stand图鉴、课程收益或地图路线。
- 正式部署与线上验收实际完成，证据见下节。

## 正式部署验收（已完成/已验证）

- 新GitHub账号jjasnek-ops，完整历史推送成功；source 173c393f772174db373ebac0a358d60c6cddfed8 /CI38201586065 success。账号默认选择和Git noreply作者已保存，不再回退使用旧账号。
- Cloudflare Pages生产部署08de0189-b4c1-43a2-989f-299458e12d63 /stage success；正式域名原生marker与上述source一致。上传曾遇ENOTFOUND，系统DNS未修改、TLS未放宽；本次进程IPv4优先及有限重试成功，不把临时网络原因断定为已证明。
- live21正常HTML /28检查 /12Sitemap /0failure；原生Sitemap12/12 HTTP200；32图片资源HTTP200且与构建逐字节一致。Canonical、robots、404、Pagefind资源及原有隐私/索引门禁通过。
- 正式页桌面首屏/封面与390宽手机键位表已实际查看；截图controls-live-desktop.png及controls-live-mobile-table.png。实际客户端和真实手机未测试。
- 完整roster、技能数值、10 Arrow Shards替代费用、当前Code成功兑换和新手路线没有获得足够证据，继续暂缓。没有修改原用户历史关键词快照、增加实测搜索量或承诺排名/收益。

正式站Pagefind controls查询实际返回4结果，首条为新增PC Controls；点击后dialog关闭且进入https://moriohhighguide.wiki/guides/controls/，H1/Title正确。临时390宽视口已reset，结果页保留为交付页。
