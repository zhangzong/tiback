# tiback 官方网站

这是 tiback 的静态官网，用于介绍并聚合我们运营的五个产品：

- [RoleCase](https://rolecase.tiback.com/) — 英文求职申请材料生成工具
- [OFD 在线转换器](https://ofd2pdf.tiback.com/) — OFD 转 PDF / PNG，附 Python 库
- [Markdown 编辑器](https://markdown.tiback.com/) — 浏览器本地 Markdown 写作工具
- [圆环竞技场](https://circle-war.tiback.com/) — 自动生产、圈选指挥的策略对战小游戏
- [Grow Arena](https://grow-war.tiback.com/) — 吞噬成长的浏览器竞技游戏

## 本地预览

项目是纯静态文件，直接用任意静态服务器即可：

```bash
cd /Users/zz/project/ai/tiback
python3 -m http.server 4173
```

然后打开 <http://localhost:4173/>。

## 部署到 Cloudflare Pages

推荐使用 Cloudflare Pages，免费额度足够静态站点使用。

### 方式一：控制台直接上传

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 进入 `Workers & Pages` → `Create` → `Pages` → `Upload assets`。
3. 给项目命名，例如 `tiback`。
4. 把当前目录打包成 zip 上传。不要只上传单个文件，需要保留目录结构：

   ```bash
   cd /Users/zz/project/ai/tiback
   zip -r tiback.zip . -x "README.md" ".git/*" "*.DS_Store"
   ```

5. 发布后，把自定义域名 `tiback.com` 或 `www.tiback.com` 绑定到 Pages 项目。

### 方式二：关联 Git 仓库

1. 把当前目录初始化并推送到 GitHub / GitLab。
2. 在 Cloudflare Pages 中选择 `Connect to Git`。
3. 构建命令留空，输出目录填 `/`（静态站点，无构建步骤）。
4. 保存并部署。

## 文件说明

```text
.
├── index.html      # 首页
├── privacy.html    # 隐私说明
├── styles.css      # 全局样式
├── main.js         # 移动端导航交互
├── favicon.svg     # 站点图标
├── assets/         # 产品图标与截图
├── ai-knowledge.jsonld  # 面向搜索引擎与 AI 的结构化知识图谱
├── llms.txt        # 面向 LLM 的站点说明入口
├── robots.txt
├── sitemap.xml
└── _headers        # Cloudflare Pages 安全响应头
```

## 发布前检查

部署后确认以下地址可访问：

- <https://tiback.com/>
- <https://tiback.com/privacy.html>
- <https://tiback.com/robots.txt>
- <https://tiback.com/sitemap.xml>

如果使用其他域名，请同步替换 `index.html`、`privacy.html`、`robots.txt`、`sitemap.xml` 中的 canonical 与站点地址。
