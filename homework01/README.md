# Homework 01 - 热门影视剧简介

## 📋 作业内容

本作业是一个"热门影视剧简介"展示网站，采用纯 HTML + CSS + JavaScript 三剑客开发，不依赖任何前端框架。

页面功能包括：
- **顶部导航栏**：Logo、导航链接、搜索框（支持按标题/演员/类型搜索）
- **Banner 区域**：渐变色动画背景 + 标题展示
- **分类筛选**：按影视类型（科幻/剧情/悬疑/喜剧/动作/爱情/古装）快速过滤
- **影视卡片网格**：12 部热门影视剧海报卡片，含评分、年份、摘要
- **详情弹窗**：点击卡片弹出详情层，含完整剧情简介、导演、演员列表、预告片内嵌播放
- **页脚**：版权声明 + 外部超链接（豆瓣电影 / IMDb）
- **响应式布局**：适配 PC、平板、手机三种分辨率

---

## 📁 项目结构

```
homework01/
├── index.html        # 页面主结构
├── css/
│   └── style.css     # 样式表（暗色主题 + 响应式）
├── js/
│   └── app.js        # 影视剧数据 + 交互逻辑
└── README.md
```

---

## 🏷️ 使用到的 HTML 标签

| 分类 | 标签 | 用途 |
|------|------|------|
| **文档结构** | `<!DOCTYPE html>` `<html>` `<head>` `<body>` | 基础骨架 |
| **元信息** | `<meta charset>` `<meta viewport>` `<title>` | 编码、移动端适配、标题 |
| **外部引用** | `<link>` `<script>` | 引入 CSS / JS |
| **语义化标签** | `<header>` `<nav>` `<section>` `<main>` `<footer>` | 结构化分区 |
| **容器** | `<div>` `<span>` | 通用容器 / 行内容器 |
| **文本** | `<h1>` ~ `<h3>` `<p>` `<strong>` | 标题、段落、强调 |
| **超链接** | `<a href target rel>` | 页内锚点跳转 + 外部新窗口链接 |
| **媒体** | `<img src alt loading onerror>` `<iframe>` | 海报图片（含懒加载和错误兜底）、预告片嵌入 |
| **表单** | `<input type placeholder>` `<button onclick>` | 搜索框 + 按钮 |
| **列表** | `<ul>` `<li>` | 演员阵容列表 |
| **注释** | `<!-- -->` | 代码分区注释 |

---

## 🎨 使用到的 CSS 特性

- **布局**：Flexbox（导航栏、卡片内部）+ Grid（影视卡片网格，`auto-fill` + `minmax` 自适应列数）
- **定位**：`position: sticky` 吸顶导航、`fixed` / `absolute` 模态框和角标
- **响应式**：`@media (max-width: 768px)` 和 `@media (max-width: 480px)` 两档断点
- **动画**：`@keyframes` + `animation`（Banner 脉冲、弹窗淡入/上滑）、`transition`（hover 过渡）
- **渐变**：`linear-gradient`、`radial-gradient`（Banner 背景、标题文字渐变）
- **视觉效果**：`backdrop-filter: blur()` 毛玻璃、`box-shadow` 悬浮阴影、`border-radius` 圆角
- **滚动条隐藏**：模态框弹窗时锁定 body 滚动（JS 配合 CSS `overflow`）

---

## ⚙️ 使用到的 JavaScript 功能

- **数据驱动**：将 12 部影视剧定义为数组对象（含海报、简介、导演、演员、预告片链接等字段）
- **动态渲染**：通过 `innerHTML` + 模板字符串把数据渲染为卡片列表和详情弹窗
- **数组方法**：`filter()` 分类筛选、`map()` 生成 HTML、`some()` 搜索匹配
- **事件绑定**：
  - 按钮点击筛选类型
  - 搜索框点击按钮 / 回车搜索
  - 点击卡片打开详情
  - 点击遮罩 / 按 ESC / 点击 ✕ 关闭弹窗
- **DOM 操作**：`getElementById()`、`querySelectorAll()`、classList 添加移除、`style` 修改

---

## ⚠️ 遇到的困难及解决方法

### 1. 中文引号导致 JS 语法错误

**问题**：JS 字符串里的"月盾计划""刚子"用了中文双引号 `"..."`，与外层英文双引号冲突，`node --check` 报 `SyntaxError: Unexpected identifier`，导致整个脚本执行中断、页面空白。

**解决**：把字符串内容里的中文引号全部替换为直角引号「」，或使用反引号模板字符串包裹含引号的内容。

### 2. 海报图片加载失败

**问题**：网络图片偶尔加载超时或失效，卡片上出现破图。

**解决**：给 `<img>` 添加 `onerror` 回调，加载失败时替换为一张内联 SVG 占位图，保证布局不崩坏。同时添加 `loading="lazy"` 延迟加载提升性能。

### 3. Bilibili 预告片嵌入失败

**问题**：直接把 `https://www.bilibili.com/video/BVxxx` 放进 `<iframe src>` 会被 B 站的 CSP 策略拦截，视频无法播放。

**解决**：链接转换为 B 站官方播放器地址 `player.bilibili.com/player.html?bvid=BVxxx`，并加上 `sandbox` 属性限制权限防止安全风险。弹窗里同时提供超链接跳转作为备用方案。

### 4. 模态框滚动穿透

**问题**：打开详情弹窗后，背景页面还能滚动，体验不好。

**解决**：打开时设置 `document.body.style.overflow = "hidden"` 锁定滚动条，关闭时恢复为空字符串。

---

## 🚀 运行方式

**方式一：直接双击**
> 用文件资源管理器进入 `homework01` 文件夹，双击 `index.html`

**方式二：本地服务器（推荐）**
```bash
# 在 homework01 目录下执行
python -m http.server 8080
# 浏览器访问 http://localhost:8080
```
