---
title: 浅聊一下 contenteditable 属性
tags: [HTML]
categories: [前端, HTML]
cover: https://img0.baidu.com/it/u=2057926739,1137712614&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281
date: 2023-08-15 13:17:09
excerpt: 最近在工作上使用到了这个属性，那就在这简单的记录一下吧。使用 contenteditable 属性时,浏览器会有三种不同的表现形式...
---
## 前置学习
> 我们最常用的输入文本内容便是 `input` 与 `textarea`

> `contenteditable` 属性，也能让我们在很多标签中，如 `div`, `table`, `p`, `span` 等，可以像 `input` 输入框一样，实现文本编辑。

## 三种不同的表现形式
### block
> 每次换行浏览器会默认往元素内部一直叠加 `div` 标签
> 外框会布满整个元素

![block](/assets/images/contentediatable/block.png)

### inline-block
> 每次换行浏览器会默认往元素换行处增加 `<br/>` 标签
> 外框会布满整个元素

![block](/assets/images/contentediatable/inline-block.png)

### inline
> 每次换行浏览器会默认往元素换行处增加 `<br/>` 标签
> 外框会根据文字来进行包裹

![inline](/assets/images/contentediatable/inline.png)

## 特殊的玩法
### 样式编辑器
<div id="demo">请尝试在下面输入框中通过 #demo 来给文案加样式</div>
<style
  contenteditable="true"
  placeholder=""
  style="display: inline-block; height: 20vh; width: 100%; margin-top: 16px; outline: 1px solid pink;"
></style>

> 揭秘 —— 其实很简单，就是把 style 标签变得可以输入文字，就这么简单 `🕶️ 🕶️ 🕶️`

```html
<style 
  contenteditable="true"
  style="display: inline-block; height: 20vh; width: 100%; margin-top: 16px; outline: 1px solid pink;"
></style>
```

