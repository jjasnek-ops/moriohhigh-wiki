# GEO 评估与真实测试基线

> 最终发布状态（2026-10-14）：用户随后明确授权，SEO/GEO及Adsterra、GA4自动加载已合并上线。实际source 7cfd47f44dc982ab2dbee83ea3157bf9e64ef6fb；GitHub CI通过，正式23页/13Sitemap/6来源面板/自动加载与搜索通过。详见 [上线验收](../reports/seo-geo-release-2026-10-14.md)。下方的未部署/同意门控措辞属于此前阶段记录；搜索排名、AI引用及广告后台效果仍未验证。

日期：2026-10-14。以下是优化之前的公开检索基线和本地可理解性验证，不能当成优化后的排名、引用率或流量增长。

## 固定五个玩家问题：真实检索

平台：web search tool，后端/品牌未暴露，国家与个性化不可控。每个查询独立调用，记录前十返回URL；未把工具用于写入外部账号。采集时间为2026-10-14T04:14:09.518Z（约12:14 Asia/Shanghai）。

查询 | 目标网站出现在本次样本 | 目标站AI引用 | 样本主要竞争URL
---|---|---|---
How do I get a Stand in Morioh High? | 未见（仅该样本） | 未测试，不能填0次/0%引用率 | [Morioh High Guide — Play Links & Getting Started](https://moriohhigh.com/)；[Stand / Project Jojo Wiki / Fandom](https://project-jojo.fandom.com/wiki/Stand)；[Morioh High Stands: How to Get, Awaken and Use Them](https://moriohhighroblox.wiki/stands/)
What are the latest Morioh High codes? | 未见（仅该样本） | 未测试，不能填0次/0%引用率 | [Morioh High Wiki - Codes, Stand Tier List & Guides](https://moriohhighroblox.wiki/)；[Morioh High codes (October 2026) – Destructoid](https://www.destructoid.com/morioh-high-codes/)；[Morioh High Codes (October 2026) - free Rerolls / Pocket-Codes](https://pocket-codes.com/morioh-high-codes.html)
How do I play Morioh High on PC? | 未见（仅该样本） | 未测试，不能填0次/0%引用率 | [Morioh High / Play on Roblox](https://www.roblox.com/games/111838814545019/Morioh-High)；[Morioh High Guide — Play Links & Getting Started](https://moriohhigh.com/)；[Morioh High Beginner Guide – Getting Started on Roblox — Morioh High Wiki / Morioh High Wiki](https://morioh-high.wiki/game-discovery-access/beginner-guide)
Is there a Morioh High beginner guide? | 未见（仅该样本） | 未测试，不能填0次/0%引用率 | [Morioh High Beginner Guide: How to Play](https://moriohhighroblox.wiki/guide/)；[Morioh High Guide - Beginner Tips, Controls & Quests](https://www.moriohhigh.wiki/guide)；[Morioh High Beginner Guide: First Day Walkthrough & Tips - Morioh High Wiki](https://www.moriohhigh.wiki/guide/Morioh-High-beginner-guide)
Where can I find reliable Morioh High information? | 未见（仅该样本） | 未测试，不能填0次/0%引用率 | [Morioh High Guide — Play Links & Getting Started](https://moriohhigh.com/)；[高等学校（一覧）｜滋賀県守山市公式ウェブサイト](https://www.city.moriyama.lg.jp/shisetsu/jidoushisetsu/1006181/index.html)；[Morioh High Stand Tier List: Best Stands Ranked – Roonby](https://roonby.com/2026/10/11/morioh-high-stand-tier-list-best-stands-ranked/amp/)

[完整五查询记录](../research/seo-geo-2026-10-14/search-baseline.json)保留标题、URL、平台和时间。正文与引用输出不是同一件事：本次工具返回的是搜索条目，没有记录平台生成的回答，所以不把条目链接叫ChatGPT/Perplexity引用。

## 品牌平台访问与测试限制

平台 | 实际访问/动作 | 测试状态
---|---|---
Google Search / AI Overview | 内置浏览器导航到带hl=en/gl=us的Stand问题URL，清单显示该搜索页标题；DOM和截图超时 | 结果/AIO未验证，不能将参数当成功取得美国结果
Perplexity | [公开入口](https://www.perplexity.ai/)只返回图片；真实浏览器入口导航/DOM也超时，未提交问题 | 未测试AI答案及引用
Gemini | [公开入口](https://gemini.google.com/)显示Sign in | 未建立已授权会话，五问均未测试
ChatGPT Search | [公开入口](https://chatgpt.com/)已读取；未取得独立可复现的联网问答和引用输出 | 五问均未测试；本对话不是独立引用实验
Bing / Copilot | 没有取得该品牌的结果或回答输出 | 未测试，不用未暴露后端冒充Bing

不存在虚构的AI引用率、曝光率或“已被推荐”。可能缺索引、站点新、同意前的crawl条件、内容覆盖或竞争等都是待验证解释，当前没有证据把其中一个确定为原因。

## 可检索条件的实际证据

robots.txt为User-agent:* / Allow:/；Googlebot、bingbot、OAI-SearchBot、PerplexityBot UA探测均200，并取得Stand主答案。UA探测没有证明真实IP爬虫的WAF待遇。六MDX主要文本原生静态输出，无需加载广告/GA4或运行Pagefind。可见来源和Article citation逐项一致；首页、导航、相关文章及正文连接主要主题。

[OpenAI爬虫文档](https://developers.openai.com/api/docs/bots)区分搜索OAI-SearchBot和训练GPTBot。当前通配规则已允许搜索，不为了GEO擅自改变训练偏好或外部WAF。若以后真实日志发现阻断，先核验官方IP及请求用途，再在获授权范围内处理。

[Perplexity爬虫文档](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)也区分搜索抓取和用户触发请求。Allow规则不保证抓取、索引或引用。

[Google AI指南](https://developers.google.com/search/docs/appearance/ai-features)强调可索引、可显示摘要和常规SEO；无需特定AI文件或专用Schema。llms.txt保留是因为已有自动生成、维护成本低；本轮澄清独立站及证据范围，不能把它当AI收录必要条件。Google AI搜索数据归入GSC Web表现，不能从正常点击直接分拆成本站AI引用率。

## 人工内容可提取性评估（不是平台评分）

- Stand：直接答案、两种获取步骤、条件对照、失败原因、可读UI时间点；记录版本无build、当前实测缺失。
- Controls：首部PC键位摘要和表格，0:05来源；Z只记录withdraw，不擅自当summon；移动/控制器未验证。
- Beginner：五步first-session检查及主题链接；不把启动教程冒充完整任务进度攻略。
- Codes：七reported字符串、原生复制、菜单步骤、入群二手报告和失败限制；不显示未测working/奖励/过期结论。
- Community/release：保留历史核验及已知缺口；不把名称匹配当官方所有权、不把创建日期当上线日期。

## 可复测协议

将上述五问原样重复；记录UTC/时区、平台/模型或搜索模式（界面若提供）、登录状态、地区、完整回答与引用URL截图。区分发现网址与引用网址，未触发AIO标记“未触发”，平台打不开标记“未测试”。待用户授权部署后，以同协议间隔复测，不能只选出现本站的回答。优先同时读GSC索引/曝光和服务器真实crawler访问来诊断；不会为了检测而制造广告点击或运行批量查询。
