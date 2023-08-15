---
title: 浅聊一下 contenteditable 属性
tags: [HTML]
categories: [前端, HTML]
cover: https://img0.baidu.com/it/u=2057926739,1137712614&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281
date: 2023-08-15 13:17:09
excerpt: 最近在工作上使用到了这个属性，那就在这简单的记录一下吧。使用 contenteditable 属性时,浏览器会有两种不同的表现形式...
---
## 前置学习
> 我们最常用的输入文本内容便是 `input` 与 `textarea`

> `contentEditable` 属性，也能让我们在很多标签中，如 `div`, `table`, `p`, `span` 等，可以像 `input` 输入框一样，实现文本编辑。

## 行为
### block
> 当元素 display 为 block 时.

![block](/assets/images/contentediatable/block.png)

### inline

![inline](/assets/images/contentediatable/inline.png)

## 特殊的玩法