# Homework 02 - 用户注册页面

## 📋 作业内容

本作业是一个"用户注册"页面，综合运用 HTML5 的列表、表格、表单三大模块知识，采用纯 HTML + CSS + JavaScript 开发，不依赖任何前端框架。

页面功能包括：
- **页面整体结构**：使用 `<header>` `<main>` `<footer>` 三个语义化标签划分页面区域，`<h1>` 作为主标题
- **注册表单（核心）**：包含用户名、密码、确认密码、性别、出生日期、邮箱、手机号、兴趣爱好、头像上传、所在城市、个人简介共 11 项控件
- **会员权益对比表**：使用 `<table>` + `<thead>` + `<tbody>`，并运用 `rowspan` 和 `colspan` 合并单元格
- **注册步骤**：使用有序列表 `<ol>` 说明操作步骤
- **注册注意事项**：使用无序列表 `<ul>` 列出注意事项
- **常见问题**：使用定义列表 `<dl>` + `<dt>` + `<dd>` 做术语问答
- **表单校验**：`required` 必填校验、`pattern` 正则校验手机号、`minlength/maxlength` 长度限制
- **数据收集**：JavaScript 监听 `submit` 事件，用 `FormData` 收集数据并打印到 Console

---

## 📁 项目结构

```
homework02/
├── index.html        # 页面主结构（语义化 + 表单 + 表格 + 列表）
├── css/
│   └── style.css     # 样式表（浅色主题 + 响应式）
├── js/
│   └── app.js        # 表单提交监听 + 数据收集
└── README.md
```

---

## 🏷️ 使用到的 HTML 标签

| 分类 | 标签 | 用途 |
|------|------|------|
| **文档结构** | `<!DOCTYPE html>` `<html lang>` `<head>` `<body>` | 基础骨架 |
| **元信息** | `<meta charset>` `<meta viewport>` `<title>` | 编码、移动端适配 |
| **外部引用** | `<link rel="stylesheet">` `<script src>` | 引入 CSS / JS |
| **语义化标签** | `<header>` `<main>` `<footer>` `<nav>` `<section>` | 结构化分区 |
| **文本** | `<h1>` `<h2>` `<p>` `<small>` `<span>` | 标题、段落、提示 |
| **表单容器** | `<form action method enctype>` `<fieldset>` `<legend>` | 表单及分组 |
| **输入控件** | `<input type="text/password/email/tel/date/file">` | 多种输入类型 |
| **单选/多选** | `<input type="radio/checkbox">` | 性别、兴趣 |
| **下拉框** | `<select>` `<option selected disabled>` | 城市选择 |
| **多行文本** | `<textarea rows cols>` | 个人简介 |
| **按钮** | `<button type="submit/reset">` | 注册、重置 |
| **label** | `<label for="id">` 包裹式 `<label>` | 两种关联方式 |
| **表格** | `<table>` `<thead>` `<tbody>` `<caption>` `<th>` `<td>` | 权益对比表 |
| **合并单元格** | `rowspan` `colspan` | 行列合并 |
| **列表** | `<ol>` `<ul>` `<dl>` `<dt>` `<dd>` `<li>` | 三种列表 |
| **注释** | `<!-- -->` | 代码分区注释 |

---

## 🎨 使用到的 CSS 特性

- **布局**：Flexbox（按钮区横向排列）、`max-width + margin: 0 auto` 居中
- **表单控件样式**：统一 `input/select/textarea` 的 padding、border、border-radius
- **焦点态**：`:focus` 伪类配合 `box-shadow` 高亮当前输入框
- **表格美化**：`border-collapse: collapse`、`nth-child(even)` 斑马纹
- **响应式**：`@media (max-width: 600px)` 单列布局，按钮全宽

---

## ⚙️ 使用到的 JavaScript 功能

- **DOMContentLoaded**：等待 DOM 加载完成再绑定事件
- **addEventListener**：监听表单 `submit` 和 `reset` 事件
- **event.preventDefault()**：阻止表单默认提交，避免页面刷新
- **FormData 对象**：收集表单所有带 `name` 属性的字段
- **forEach 遍历**：把 FormData 转成普通对象，处理多选字段
- **File API**：通过 `input.files` 获取上传文件名
- **console.log**：在 Console 面板打印收集到的数据

---

## ⚠️ 遇到的困难及解决方法

### 1. 中文引号导致 JS 语法错误

**问题**：`console.log("...点击"注册"按钮...")` 中的中文全角引号 `"` `"` 被编辑器自动转换，与外层英文双引号冲突，`node --check` 报 `SyntaxError: missing ) after argument list`。

**解决**：把字符串里的中文引号替换为直角引号「」，避免与 JS 字符串分隔符冲突。

### 2. 确认密码无法自动校验

**问题**：HTML5 原生表单没有直接比较两个字段是否一致的属性，"确认密码"无法自动校验。

**解决**：在 `submit` 事件中用 JS 取出两个密码框的 `value` 比较，不一致时 `alert` 提示并 `return` 阻止提交。

### 3. 兴趣爱好多选数据被覆盖

**问题**：多个 `<input type="checkbox" name="hobby">` 用 `FormData` 收集时，直接赋值给对象会导致后面的值覆盖前面的。

**解决**：在 `forEach` 中判断 `dataObj[key]` 是否已存在，存在则转为数组追加，保证多选字段全部保留。

### 4. 头像文件打印出二进制乱码

**问题**：直接打印 `FormData` 中的 `file` 类型值，Console 会输出二进制乱码。

**解决**：单独通过 `input.files` 获取 `File` 对象，只取 `name` 属性打印文件名。

### 5. 表格合并单元格时行列错位

**问题**：第一次使用 `rowspan="2"` 后忘记少写一个 `<td>`，导致后面行错位。

**解决**：按教材 P189 的口诀「rowspan 占几行，后续行少几个 td；colspan 占几列，本行少几个 td」重新核对。

---

## 🚀 运行方式

**方式一：直接双击**
> 进入 `homework02` 文件夹，双击 `index.html` 用 Chrome 打开

**方式二：Live Server（推荐）**
> 在 VSCode 中右键 `index.html` → Open with Live Server，浏览器访问 `http://127.0.0.1:5500`

**调试表单数据：**
1. 按 `F12` 打开 Chrome DevTools
2. 切换到 **Console** 面板
3. 填写表单并点击「注册」按钮
4. Console 中会打印出收集到的所有表单数据
5. 切换到 **Elements** 面板可检查 DOM 结构
