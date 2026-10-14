# Current delivery status

Updated 2026-10-13 (Asia/Shanghai); latest production deployment is 2026-10-13. Do not reinitialize.

## 2026-10-14 Adsterra 本轮状态

已完成并验证七种原始代码的本地接入：全站顶部320×50、首页Hero后Native、卡片间300×250/728×90、页脚468×60；文章第二个正文段落后300×250、末尾Native及728×90/468×60、宽屏左160×600/右160×300。重复卡片广告与额外首页728位置合并，未重复同一key。新版同意、旧拒绝保留、隐私披露及尺寸门控已实现。check/lint/19套件247passed/1skipped/config/content/strict UI/build/574内链/13Sitemap/ad-build通过；实际浏览器390/1280/1920几何及关闭通过。静态build从Wrangler生成仅公开配置的ignored env，避免空配置构建。实际生产仍为下列10/13 source，七广告部署尚未完成；下一步提交、上传、核对正式marker和素材响应。详见reports/adsterra-release-2026-10-14.md。广告填充/收入未验证。

- 当前阶段：质量合格的限定首版已实际在正式域名上线并验收；完整游戏百科未完成，缺证据页面继续暂缓。
- 已完成并验证：Spaceship nameservers 切换、Cloudflare zone / Pages 自定义域名 active、HTTPS、正式 origin / 原生联系页、静态部署、GitHub CI、线上 SEO 门禁、正式域名 GSC 所有权及 Sitemap 提交、GA4 数据流网址及真实测试采集。
- 历史继承：15 关键词原始数字/口径/限制完整保存在 research/user-keywords-2026-10-11.md / .json，未被新研究覆盖。
- 研究：累计37记录 /30相关候选 /7排除；原始增量基线36/29/7保留；新增1个Stand reroll意图合并已有页，无新增实测月搜。Suggest7条为原调查信号。相关不等于实测月搜；新月搜/KD 未取得，Trends7/30天HTTP429，上涨窗口未验证。
- 矩阵：20意图；8编辑页已上线（4完整限定答案、4部分答案）；12暂缓。6MDX、原生首页/FAQ；政策和归档不计精品攻略。
- 事实：E01–E24；E23/E24为当前码来源与用户授权的reported范围；新增E19同游戏录像PC HUD、E20已读100 Rerolls、E21身份增量、E22Voice平台限制；Stand的E17可读同游戏Encyclopedia、E18另一玩家Arrow录像；概率未独立实测，当前客户端/准确build未测试；admin预览不作为普通获取/进度证据。
- 模板：AnvilWiki2.37.0 /MIT /b00859a524a176d60f3982c71b318ac11bc2fd5b；英语、Astro/MDX/Pagefind保留，广告关闭。
- GitHub：https://github.com/jjasnek-ops/moriohhigh-wiki；默认账号及Git作者jjasnek-ops。实际线上source 86839658efe0fc9982b2f1deb971d8b6a7f154d4已推送，CI38365981207 success。最终记录属于后续docs提交，不冒充新部署；恢复时核对marker。
- Pages：项目moriohhigh-wiki；正式https://moriohhighguide.wiki；部署9d2c47f2-0528-41c8-86cd-88a51f75b6a3 /source 86839658efe0fc9982b2f1deb971d8b6a7f154d4 /CF stage success，正式marker匹配。平台地址的Canonical指向正式域名。
- 测试：本轮check/lint/test/check-config/check-content/strict UI/build/check-links/本地及线上check-sitemap全部通过；244passed/1skipped；24HTML/574内链/13可索引及Sitemap/Pagefind6文章；线上23正常HTML/30检查/0failure；32线上图片资源200且与构建逐字节一致。
- 浏览器：原桌面/移动首页、Stand及社区样板通过；正式域名Contact和可点击mailto已验证；Pagefind Stand4篇结果且点击进入正式域名指南已验证。正式域名同意后正确GA标签实际加载。没有新增真实手机/Lighthouse/Core Web Vitals测量。
- GSC：正式属性 sc-domain:moriohhighguide.wiki，DNS TXT所有权验证成功，正式index Sitemap提交成功。初始报告仍 Couldn't fetch /Unknown /0discovered；处理、收录、曝光未验证。原Pages URL-prefix与其历史Google live test成功证据保留；不冒充正式域名的Google抓取测试。
- GA4：property558434763 /stream16106218705 /G-MLLG5CEMCG；已保存正式网址，原生同意后加载。正确属性Realtime看到1测试用户、1次Contact页面浏览及first_visit/page_view/session_start。设置页inactive告警与实际Realtime回执分别保留；Organic Search未验证。
- 正式域名：用户已购moriohhighguide.wiki /Spaceship；NS实际保存armfazh.ns.cloudflare.com /laura.ns.cloudflare.com；zone active、Pages domain active、HTTPS通过。新DS已保存；Google DoH A/MX/NS/TXT/DS均AD=true；CF DNSSEC状态接口最后仍pending，需后续检查该状态。
- 邮箱：contact@moriohhighguide.wiki精确转发到用户已验证的私有Gmail；rule enabled、服务ready/enabled/synced、真实MX/SPF/DKIM已安装且公开MX/SPF验证。仅配置完成；用户明确要求跳过实收测试，实际收信未验证。Gmail不公开；未配置域名地址发信。
- 外部/账号阻塞：原Spaceship登录、NS切换和zone-create API权限问题均已解决，无扩权。Google处理/索引/曝光尚待外部数据；订单实际费用、续费金额未知。未付款或购买服务，不修改其他域名。
- 维护：每日Codes heartbeat morioh-high，10:00 Asia/Shanghai，ACTIVE且创建/更新已读回；仅有实质变化维护reported列表，奖励省略，未来运行尚未发生。3/7/14/28天原单次任务10/14、10/18、10/25、11/8 12:00 Asia/Shanghai；四个prompt已改为正式域名并读回验证，未来运行未发生，不自动重写/生成文章。
- 下一步：按计划复查正式GSC Sitemap处理、DNSSEC接口状态及真实搜索数据；仅在新可靠证据或真实Google需求出现时扩展暂缓页。邮件测试不作为当前阻塞，未经新指示不继续要求。
- 所有独立可完成的上线工作已保存；没有声称持续后台研究。未来检查依赖本机/应用及已授权账号可访问。

完整19项报告：reports/final-delivery-report.md。部署/网页/Google/邮件分别以各自回执为准。

## 2026-10-13 关键词补充（已记录/来源已复查）

用户再次提供`morioh high codes`，已列为P1重点核验词，与原有`morioh high roblox codes`合并候选`/resources/codes/`。原快照已有两词，新增唯一词0，累计37研究记录/30相关/7排除不变；无新增实测月搜/KD/Trends，用户未指明数据平台。原15词历史快照未改。

新增E23：10月13日复查两个10月12日更新的第三方码表及Roblox公开描述；同一码奖励冲突，未取得开发者原帖与成功兑换验证。Codes页面继续暂缓，未建立空页或改动正式网站。详见research/keyword-user-signal-2026-10-13.md及.json；矩阵与关键词聚类已更新。线上source仍173c393f772174db373ebac0a358d60c6cddfed8，12个Sitemap网址和7编辑页不变；本轮仅研究记录提交至jjasnek-ops仓库，不冒充新部署或Google曝光。下次Codes制作先解决E23证据门禁。

## 2026-10-12 图片增量（已完成/已验证）

4幅原创AI辅助插画、响应式首页主视觉/正文封面/列表及相关文章缩略图、Stand文字流程图和独立新版分享图已实际在正式域名上线。source a60fa3ceb83b20ddbd4a48ba62ddd2f3868435a2 /CI38161154603 success /deployment b107ac33-3bd5-4415-924d-872cb1ec8ef6 success /marker一致。图片专项21HTML/26资源/0failures，26线上资源与构建逐字节一致；线上SEO20HTML/27检查/11Sitemap/0failures。本地桌面1280×720和手机390×844浏览器通过，正式首页主视觉及四图卡片截图已保存。页面数量、事实与用户研究未变；Google收录/曝光、用户明确跳过的实收仍未验证。详见 reports/image-improvements-2026-10-12.md。旧正式初版部署回执另存 pages-deployment-formal-initial-history.json。

## 2026-10-12 攻略补充（已完成/已验证）

新增 controls.mdx（限定早期录像PC键位、部分回答）及原创键盘封面；Stand页补充已读UI的100 Rerolls成本与不同结果，How-to-play/首页/FAQ已接内链。新增E19–E22，研究原快照未改；独立关键词增量37记录/30相关/7排除（其中1新候选，无新增实测月搜）。本地技术/视觉门禁及真实线上部署验收均通过；实际source 173c393f772174db373ebac0a358d60c6cddfed8，部署08de0189-b4c1-43a2-989f-299458e12d63。当前客户端/其他设备输入、完整roster/Codes仍未验证，13意图暂缓。


## 2026-10-12 GitHub identity change

User explicitly selected the latest authenticated account, jjasnek-ops, for this project and future GitHub work. gh active account and the global HTTPS credential username are jjasnek-ops. Global and repository-local Git authors use that account’s GitHub noreply identity. The new public independent repository https://github.com/jjasnek-ops/moriohhigh-wiki was created and origin switched to it; existing history is retained. The previous owner’s repository is historical and is no longer used for writes. Push verified with the new account; source 173c393f772174db373ebac0a358d60c6cddfed8 and CI38201586065 success. Cloudflare continues using the existing direct-upload project; changing GitHub ownership does not itself deploy the site.

本轮正式Controls搜索4结果与实际点击已验证；390宽手机完整9项键位表截图保存，视口覆盖已清除。上线source保持173c393f772174db373ebac0a358d60c6cddfed8；当前新增记录仅docs，不需要把docs HEAD冒充新部署。


## 2026-10-13 Codes 首版（已完成/已验证）

已按用户最新立即发布指示创建7个reported码及复制按钮，奖励省略。所有本地门禁和桌面/390宽样板通过；24HTML/13Sitemap/Pagefind6。已创建并读回每日10:00 Asia/Shanghai heartbeat morioh-high，维护省略奖励及reported标签；未来运行未验证。已实际部署并正式验收，source 86839658efe0fc9982b2f1deb971d8b6a7f154d4，deployment 9d2c47f2-0528-41c8-86cd-88a51f75b6a3；13Sitemap全部200。详见reports/codes-release-2026-10-13.md。

Codes正式Pagefind GAUNTLET查询1结果与实际点击已验证；7卡/H1/Title/Canonical正确，codes-live-page.png首屏与codes-live-desktop.png码区截图保存。临时视口清除。代码source86839658efe0fc9982b2f1deb971d8b6a7f154d4已部署；本次剩余docs/receipt记录提交不需要伪装为新部署。
