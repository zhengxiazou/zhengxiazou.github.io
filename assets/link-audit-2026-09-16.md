# 网站链接检查 — 2026-09-16

范围：index.html、media-preview.html 中全部 41 个不同的外部链接，以及站内锚点和本地资源路径。结合网页检索与本机 HTTP GET 检查；不将 HTTP 200 等同于内容有效，也不将验证码/403 等同于链接失效。本次未进行交互式浏览器验证。

## 已处理

- 机器之心：旧地址返回“机器之心·数据服务”，不再是报道。替换为机器之心在腾讯云开发者社区发布的同文，已核对标题、作者与论文。
  - 原：https://www.jiqizhixin.com/articles/2021-04-21-5
  - 新：https://developer.cloud.tencent.com/article/2251979
- MetaEarth 量子位：原微信地址结尾多余斜杠导致“参数错误”；去掉斜杠后仍触发微信验证码。改用已核对标题、内容及量子位来源的同文转载。
  - 原：https://mp.weixin.qq.com/s/IEe-tj4B0QWk6hX_fI-UHA/
  - 新：https://www.eeworld.com.cn/emp/QbitAI/a378210.jspx
  - 转载网页可由检索工具读取；本机一次请求被连接重置，不保证所有网络环境均可访问。
- 你我当年：原链接仍有效，但会重定向。改为稳定的 App ID 入口 https://apps.apple.com/cn/app/id1461690800 ，已确认跳转到同一应用。
- 删除 Dense Reinforcement Learning 条目中一个没有可见文字的 IEEE stamp 遗留空链接（arnumber=9197693），保留正文论文和 GitHub 链接。

## 访问受限，不误替换

- Google Scholar：本机连接超时，未确认可正常打开；保留用户指定的个人主页。
- Google Play：本机超时；检索能确认同一应用 ID 的 Remini 商店页面存在，保留原地址。
- 其余四条微信文章：请求进入微信验证码页面，无法完成正文核验；保留原链接。
- IEEE 获奖页：本机 Cloudflare 验证；检索能读取对应 2026 获奖公告，保留官方地址。
- IEEE 目标检测综述：机器人验证，保留出版商入口。
- Michigan News 的 NeuralNDE 报道：403 验证，未完成直接正文读取；保留原链接。
- MITTRChina 11938：返回前端应用，需要 JavaScript；尚未确认正文，保留原链接。
- 部分 Nature、New Scientist、Michigan 页面存在 Cookie / 反爬限制，但通过另一检查渠道读取到匹配标题与正文，不替换。

## 其他结果

基金委、新华社、两位老师主页、北航主页与新闻、北京日报、arXiv、项目页和 GitHub 仓库等已取得对应内容。两个 GitHub 仓库在接收大部分页面后超时，另由检索工具确认。所有站内锚点及本地资源路径检查通过。

本次仅修改本地网站，未推送或部署。检查结果不代表不同地区、浏览器或后续时间始终可访问。
