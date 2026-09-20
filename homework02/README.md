# 第二次作业：用户注册页面

## 作业说明

用 HTML 做一个用户注册页面，把列表、表格、表单都用上了。用 Chrome 打开 index.html 就能看，按 F12 看 Console 能看到提交时收集的数据。

## 文件说明

- index.html —— 页面
- css/style.css —— 样式
- js/app.js —— 点注册按钮时收集数据打印到控制台

## 用到的标签

- 结构：header、main、footer、section、h1、h2、p
- 表单：form、input、select、option、textarea、button、label
  - input 用到的 type：text、password、radio、checkbox、date、email、tel、file
  - label 的两种用法都用了：for+id（性别）、包裹式（兴趣爱好）
- 表格：table、caption、thead、tbody、th、tr、td，用 rowspan 和 colspan 合并了单元格
- 列表：ol（注册步骤）、ul（注意事项）、dl/dt/dd（常见问题）
- 校验：required 必填、pattern 校验手机号、placeholder 占位提示、selected 默认选中

## 遇到的困难

1. label 的 for 一开始写成了 name 的值，点文字选不中输入框，翻了教材才发现 for 要对应 id
2. 表格 rowspan 合并后第二行少写了一个 td，整张表错位了，把每行格子数了一遍才找到
3. js 字符串里打了中文引号，整个 js 都不运行，按钮点了没反应，换成英文引号才好
4. 兴趣多选一开始只取到一个值，后来用 getElementsByName 循环判断 checked 才把选中的都取出来

## 怎么运行

直接双击 index.html，或者用 VSCode 的 Live Server 打开。
填写表单点"注册"，按 F12 → Console 看收集到的数据。
