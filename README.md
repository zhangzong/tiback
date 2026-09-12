# tiback 官方网站

这是 tiback 的静态官网，用于介绍并聚合我们运营的三个工具：

- [RoleCase](https://rolecase.tiback.com/) — 英文求职申请材料生成工具
- [OFD 在线转换器](https://ofd2pdf.tiback.com/) — OFD 转 PDF / PNG，附 Python 库
- [Markdown 编辑器](https://markdown.tiback.com/) — 浏览器本地 Markdown 写作工具

## 本地预览

项目使用 Cloudflare Workers 静态资源托管，推荐用 Wrangler 本地预览：

```bash
cd /Users/zz/project/ai/tiback
wrangler dev
```

然后打开终端提示的本地地址。也可以从 `public/` 目录启动任意静态服务器，例如：

```bash
cd /Users/zz/project/ai/tiback/public
python3 -m http.server 4173
```

## 部署

线上使用名为 `tiback` 的 Cloudflare Worker 提供静态资源，并绑定：

- `tiback.com`
- `www.tiback.com`

从仓库根目录执行：

```bash
wrangler deploy
```

`wrangler.jsonc` 会把 `public/` 作为静态资源目录上传。Worker 名称保持不变时，自定义域名会保留。

## 文件结构

```
.
├── public/
│   ├── index.html      # 首页
│   ├── privacy.html    # 隐私说明
│   ├── styles.css      # 全局样式
│   ├── main.js         # 移动端导航交互
│   ├── favicon.svg     # 站点图标
│   ├── assets/         # 产品图标与截图
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _headers        # 安全响应头
├── wrangler.jsonc      # Worker 与静态资源配置
└── README.md
```

## 发布前检查

部署后确认以下地址可访问：

- <https://tiback.com/>
- <https://tiback.com/privacy>
- <https://tiback.com/robots.txt>
- <https://tiback.com/sitemap.xml>

另外，Cloudflare Pages 里还存在一个 `tiback` 项目，地址是 <https://tiback.pages.dev/>，可以作为预览环境。正式的 `tiback.com` 由 Worker 提供；如果要改用 Pages，需要先把 `tiback.com` 和 `www.tiback.com` 从 Worker 的自定义域名中移除，再绑定到 Pages 项目。

如果使用其他域名，请同步替换 `public/index.html`、`public/privacy.html`、`public/robots.txt`、`public/sitemap.xml` 中的 canonical 与站点地址。
