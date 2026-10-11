# 第三次作业：导航菜单

## 作业说明

用 CSS 做两个水平导航菜单（一个一级菜单，一个带下拉的二级菜单）。老师要求不能改 HTML 结构，所以只在 `<style>` 里加样式，没动标签。用 Chrome 打开 html 文件就能看，鼠标移到"教学院(部)"上能看到下拉菜单。

## 文件说明

- 一级菜单.html —— 用 `<table>` 写的一级水平导航菜单
- 二级菜单.html —— 用 `<ul><li>` 写的带下拉的二级菜单
- 实验03-导航菜单.docx —— 实验报告
- README.md —— 本说明文件

## 用到的 CSS 知识点

- 选择器：类选择器 `.logo`、后代选择器 `td a` / `li ul`、并集选择器 `td, a`
- 盒模型：用 `padding`、`margin`、`border` 控制菜单项间距
- display：`li { display: inline-block }` 把竖排的 li 变成横排
- :hover 伪类：鼠标移上去时一级变橙色、二级菜单显示出来
- position：父级 `li` 设 `relative`，子菜单 `ul` 设 `absolute` 实现下拉定位
- 继承与层叠：颜色从父元素继承，`.logo` 优先级更高覆盖默认色

## 遇到的困难

1. 子菜单一开始也跟着横排了，后来用后代选择器 `li ul li { display: block }` 把它变回竖排。
2. hover 时下拉闪一下，检查后发现是 `li:hover ul` 没写对，改好就好了。
3. 一开始想直接改 HTML 排布省事，被老师要求"不能改结构"只好全用 CSS 硬刚。

## 怎么运行

直接双击 一级菜单.html / 二级菜单.html，或者用 VSCode 的 Live Server 打开。
