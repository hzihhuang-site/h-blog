---
title: 关于如何创建个人博客这件事。
categories: [其他, 杂项]
date: 2023-08-18 16:14:00
excerpt: 响应好兄弟号召，出一篇关于这次博客的搭建过程。
cover: https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&h=400
---

## 关于工具库
**市面上的工具会有很多，例如:**

- [VuePress](https://www.vuepress.cn/)
>VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。
>由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。
- [Hugo](https://gohugo.io/)
>Hugo是一种用Go语言编写的快速，现代的静态网站生成器，旨在让网站创建再次变得有趣。主要用于个人Blog、项目文档、初创公司站点构建。
- [Solo](https://b3log.org/solo/)
>Solo 是一款基于Java语言有后台管理的，小而美的博客系统，专为程序员设计
- [Halo](https://docs.halo.run/)
>Halo是一款基于Java语言，使用Spring Boot开发的博客系统，致力于打造最好的 Java 博客系统，且只想安安静静的做一个博客系统。
- [Jekyll](http://jekyllcn.com/)
>ekyll 是一个简单的博客形态的静态站点生产机器（可以将纯文本转换为静态博客网站）。它有一个模版目录，其中包含原始文本格式的文档，通过一个转换器（如 Markdown）和我们的 Liquid 渲染器转化成一个完整的可发布的静态网站，Jekyll 也可以运行在Gitee Pages 上
- [Hexo](https://hexo.io/)
>Hexo 是一个基于Node.js的快速、简洁且高效的静态博客框架。Hexo 支持Markdown解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

- [Docsify](https://docsify.js.org/)
> docsify 可以快速帮你生成文档网站。不同于 Hexo 的地方是它不会生成静态的 .html 文件，所有转换工作都是在运行时。如果你想要开始使用它，只需要创建一个 index.html 就可以开始编写文档并直接部署。

**我了解的大概只有这点，可以选择一款自己喜欢的库就开始编写自己的博客了。**
**下述以 `Hexo` 为例进行讲述**

> 至于为何选择它？只是因为它的文档看起来比较容易懂，能够快速达成我想要搭建博客的想法。之后有时间可能会替换成其他的

## Hexo
### 创建
**确保 Node.js 版本 > 10.13 （建议使用 12.0 以上的版本）**

1. 安装 hexo 公用包
```txt
npm install -g hexo-cli
```

2. 创建并初始化 `blog` 的 `hexo` 项目
```txt
hexo init blog
```

3. npm run server 启动项目

4. 目录结构
![结构](/assets/images/compatible/hexo1.jpg)

5. 运行效果
![效果](/assets/images/compatible/hexo2.jpg)

### 关于项目

1. source 内容文件夹
> 所有 `markdown`、`image`、`js`、`css` 都能往里面放，而且不需要在乎摆放位置，所有的 markdown 都会被扫描成文章 
>
>  建议自己规划好目录，方便后续新增文章等...
2. themes 主题文件夹
> 不需要你，因为你会选择其他人弄好的主题。
3. scaffolds 脚手架文件夹
> 用不到

### yml 文件语法
1. 一种标记语言
2. 使用缩进表示层级关系（ json 中使用 `{}` 表示层级 ）
3. \# 表示注释（json 不允许写注释）
4. 对象
```yml
# config.yml
age: 18
person: { name: 'zihao', sex: '男' }
```
转 `json`
```json
{
  {"age": 18},
  {"person": {"name": "zihao", "sex": "男"}}
}
```
5. 数组 / 字符串 / null
```yml
arr:
  - a
  - b
  - c
str: 字符串
isnull: ~
```
转 `json`
```json
{
  "arr": ["a", "b", "c"],
  "str": "字符串",
  "isnull": null
}
```
### 使用主题
> 先去寻找一份喜欢的[主题](https://hexo.io/themes/)

> 我随便找了一个主题演示一下，这是它的 [预览](https://d-sketon.github.io/) 以及[文档](https://github.com/D-Sketon/hexo-theme-reimu)

1. npm install hexo-theme-reimu --save
2. 修改 _config.yml 中的 theme 为 reimu
3. npm run server
4. 运行效果
![效果](/assets/images/compatible/hexo3.jpg)
5. 如果需要其他的修改需要读懂一下它的主题文档了，每个主题都不同，就不过多看了。


## 关于部署
> 因为不想出 `金币` 购买服务器和域名，我是采用的以下免费的部署（静态部署、无法使用 ajax、fetch）
> 部署大小因仓库仓库最大存放大小为准

### GitHub Pages
1. 选择一个需要部署的项目
2. Settings > Pages
3. 选择你需要部署的分支并保存（ 需要将打包后的静态文件重新发布一个分支 ）
![效果](/assets/images/compatible/githubpages.jpg)
4. 因为 `GitHub Pages` 的站点名称是根据你的项目来的所以我们需要在 `config.yml` 中填写正确的 `url`。
> 例如我的
```yml
url:  https://super-zihao.github.io/blog/
```
> hexo 有一个插件能够方便我们[部署](https://hexo.io/zh-cn/docs/one-command-deployment#Git)