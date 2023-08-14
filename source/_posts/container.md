---
title: CSS container 容器查询
tags: [Style]
categories: [前端, CSS]
cover: https://img0.baidu.com/it/u=2653173828,153052962&fm=253&fmt=auto&app=138&f=JPEG?w=947&h=500
date: 2023-08-14 12:37:27
excerpt: 在响应式布局布局中，经常使用媒体查询（Media Queries）检测视窗的宽高，实现自元素样式的自动调整。但是在一些页面设计中，元素的容器尺寸发生变化时，元素的样式也需要随之变化。很显然，媒体查询无法支持这种场景。为了解决这类问题，CSS 增加了一个新的特性 容器查询
---

<!-- # CSS container 容器查询 -->
{% note blue  %}
早在2022年9月就发现了这个新特性，只是当时还处于测试阶段，今天一看大部分浏览器已经支持上了。是时候学习它了😎😎😎
{% endnote %}

## 出现背景
{% note primary  %}
在响应式布局布局中，经常使用 `媒体查询` 来检测视窗的宽高，实现自元素样式的自动调整。但是在一些页面设计中，元素的容器尺寸发生变化时，元素的样式也需要随之变化。很显然，媒体查询无法支持这种场景。为了解决这类问题，CSS 增加了一个新的特性 `容器查询`。它使你能够根据元素容器的大小应用样式。
**有预感，一批兼容 `Web` 和 `H5` 的组件正在路上了。**
{% endnote %}



{% folding origin::在此之前，需要用 JS 代码配合去处理(性能不佳)  %}
document.resize 监听窗口变化查看 dom 大小变化
[OberverResize](/blog/2022/04/16/js/#Observer-—-观察者) 观察者模式检测容器大小变化(推荐)
{% endfolding %}

## 兼容性
{% note primary  %}
这种样式出现的比较晚，所以为了兼容浏览器不建议过早使用。但是不妨碍学习它😎
如果你现在使用到的浏览器版本达到了使用的前提，可以去尝试一下！！
{% endnote %}

![container](/images/container/container.jpg)

## @container 规则使用
{% note primary  %}
如果希望能够根据这个元素自身大小来进行布局，那么可以用到 @container 规则了。
{% endnote %}

{% folding red::1、使用方法  %}
```scss
.box { font-size: 1em; }
/* 前提是 .card 这个元素是查询容器 */
@container (min-width: 700px) {
  .box { font-size: 2em; } // 如果 .box 宽度大于 700px 则生效
}
```
{% endfolding %}

{% folding orange::2、container-type 定义查询容器  %}
```scss
.box { container-type: size; }
/*
	size：查询将基于容器的行向和块向尺度，将布局、样式和大小的限制应用于容器。
  inline-size：查询将基于容器的行向尺度，将布局、样式和行向大小的限制应用于元素。
  normal：该元素不是任何容器大小查询的查询容器，但仍然是容器样式查询的查询容器。
*/
```
{% endfolding %}

{% folding pink::3、container-name 查询容器别名  %}
```scss
.box,
.box2 {
  font-size: 1em;
  container-type: size;
}
.box2 { container-name: zihao; } // 定义查询容器别名
@container zihao (min-width: 700px) { // 指定查询 zihao 容器
  .box { // 不生效
    font-size: 3em;
  }
  .box2 {
    font-size: 2em;
  }
}
```
{% endfolding %}

## 新增单位

> 随着  **`容器查询`** 一并出现的还有它的查询单位，包括:  `cqh`,

| 单位  |                             释义                             |
| :---: | :----------------------------------------------------------: |
|  cqw  | 表示容器查询宽度占比。1cqw等于容器宽度的1%。假设容器宽度是100px，则此时1cqw对应的计算值就是1px。 |
|  cqh  |         表示容器查询高度占比。1cqh等于容器高度的1%。         |
|  cqi  | 表示容器查询内联方向尺寸占比。默认情况下，Inline-Size指的就是水平方向，对应的是宽度，因此，1cqi通常可以看成是容器宽度的1%。 |
|  cqb  | 表示容器查询块级方向尺寸占比。默认情况下，Block-Size指的就是垂直方向，对应的是高度，因此，1cqb通常可以看成是容器高度的1%。 |
| cqmin | 表示容器查询较小尺寸的占比，例如容器尺寸是300px*400px，则100cqmin对应的是尺寸较小的宽度300px，而非高度。 |
| cqmax |                 表示容器查询较大尺寸的占比。                 |
