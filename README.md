# Jujutsu Shenanigans Guide（本地版）

这是用于生财关卡 4 的静态本地站点。它不是官方 Roblox、Discord 或 Fandom 站点，也没有上线或接入 GSC/GA。

## 本地运行

在本目录执行：

```powershell
py -3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。停止服务时在终端按 `Ctrl+C`。

## 已包含的路由

- `/`：首页
- `/guide.html`：新手导航
- `/controls.html`：基础按键
- `/characters.html`：角色导航
- `/vessel.html`：Vessel 资料入口
- `/updates.html`：更新追踪方式
- `/skill-builder.html`：Skill Builder 资料页
- `/codes.html`：兑换码核验页
- `/community.html`：社区入口核验页
- `/gameplay.html`：实战素材入口

## 真实性边界

- 页面正文仅根据同目录上级的“关卡 3 页面素材来源记录”中标注的来源编写。
- 兑换码、Trello、Discord 官方性、角色获取条件和版本数值都不做未验证断言。
- 当前 `robots.txt` 阻止抓取，避免本地示例被误当成线上站。关卡 5 有真实域名后，再替换为正式的 robots、sitemap、canonical、GSC 和 GA 配置。

## 验证

```powershell
node .\scripts\validate-static-site.mjs
```

该检查只验证本地 HTML 的基础 SEO 结构和链接文件，不能证明线上可访问、GSC 收录或 GA 已收数。
