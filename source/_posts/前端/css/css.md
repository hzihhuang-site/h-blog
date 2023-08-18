---
title: CSS 技巧
tags: [Style]
categories: [前端, CSS]
cover: https://img0.baidu.com/it/u=2653173828,153052962&fm=253&fmt=auto&app=138&f=JPEG?w=947&h=500
date: 2023-02-13 20:10:42
excerpt: 积少成多，一些 CSS 有意思的东西
---
[浏览器兼容性查询地址](https://caniuse.com/)

## 样式

### 一、pointer-event: none

> 顾名思义，就是关闭元素的鼠标事件 —— 元素应用了该 CSS 属性 click hover move 等全部鼠标事件将无效，不触发。
>
> 例：一个阴影的 z-index 比较高，但是你不需要点击到阴影，而是要点击阴影下边的 Button，则可给阴影加上此属性，使之不触发事件，转而穿透给 层级更低的 button



### 二、[clip-path](/blog/2023/08/16/前端/css/clip-path/)— ~~`IE`~~
> 裁剪路径 —— 详情点击进入。

### 三、print-color-adjust — ~~`IE`~~

>  一个在打印时候可能会用到的属性。
>
> 默认值：economy 英文直译意思是“经济”，“节省”。表现为，浏览器（或其他客户端）对于元素进行样式上的调整，调整的规则由浏览器自己决定，以免达到更好的输出效果。
>
> 例如，当打印时，浏览器会选择省略所有背景图像，并调整文本颜色，以确保对比度对于白纸上的阅读是最佳的。
>
> exact则是“精确”，“准确”的意思。意思是告诉浏览器，我设置的这些颜色，背景啥的都是有必要的，精确匹配的，你不要自作聪明帮我做调整。



### 四、overscroll-behavior: contain

> 这个属性在我平常的工作上用得挺多的
>
> 作用是：让具有滚掉条的元素，滑到顶或滑到底后继续滑动，不会造成滚动穿透，导致它的父级以及往上有滚动条的元素滚动



### 五、word-break: keep-all 

> 控制文本换行，但不允许文本中的单词换行，只能在半角空格或连字符处换行。

### 六、image-rendering

> 用于设置图像缩放算法。它适用于元素本身，适用于元素其他属性中的图像，也应用于子元素。

```scss
/*
	auto —— 它用于指示缩放算法将取决于用户代理。不同的浏览器可能具有不同的算法。
	crisp-edges —— 它用于指示算法将保留图像中的对比度和边。由于使用anti-aliasing，它不会使颜色变平滑或使图像模糊。此处使用的一些算法是nearest-neighbor和其他非平滑缩放算法。
	pixelated —— 它用于指示按比例放大图像时使用nearest-neighbor算法。当图像按比例缩小时，其行为与自动值相同。
	initial —— 用于将属性设置为其默认值。
	inherit —— 它用于将属性设置为从其父元素继承。
*/
```

### 七、aspect-ratio — ~~`IE`~~

> 可以控制盒子的宽高比例

```scss
// width / height 的比例是 1 / 2
div { aspect-ratio: 1/2 }
```

### 八、inset — ~~`IE`~~

> top、right、botom、left，的复合写法

```scss
div { left: 0; top: 0; right: 0; bottom: 0;}
div { inset: 0 }
```

### 九、object-fit — ~~`IE`~~

> object-fit 一般用于 img 和 video 标签，一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等。

```scss
img {
  object-fit: contain;
  /**
    fill        默认，不保证保持原有的比例，内容拉伸填充整个内容容器。
    contain     保持原有尺寸比例。内容被缩放。
    cover       保持原有尺寸比例。但部分内容可能被剪切。
    none        保留原有元素内容的长度和宽度，也就是说内容不会被重置。
    scale-down  保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
  */
}
```



## 伪类：

### 一、root

> 匹配dom文档树的根元素，如 `<html>` 元素，优先级比html元素高。一般用来定义css的自定义变量，实现主题样式

```scss
:root { --background: pink }
```

### 二、has() — ~~`Firefox`~~、~~`IE`~~

> 是否存在

```scss
/* 选择子元素中包含 span 元素的 div */
div:has(span){ display: none; }

/* 选择子元素中包含 .child 元素的 .parent */
.parent:has(.child){ display: none; }

/* 选择直接子元素中包含 .child 元素的 .parent */
.parent:has(> .child){ display: none; }
```

### 三、not() — ~~`IE`~~

> 用来匹配不符合选择器参数的元素。

```scss
/* 如果不是最后一个元素，则增加20个像素的右外边距 */
div:not(:last-child) { margin-right: 20px }
```

### 四、placeholder-shown — ~~`IE`~~

> 占位符展示的时候

```html
<input placeholder="请输入" />
<!-- placeholder 只有在 input 没填写的时候才会展示，所以那个时候 input 的背景颜色就是 red -->
<style>
  input:placeholder-shown { background-color: red }
</style>
```

### 五、empty

> 匹配没有子元素的元素，子元素包含元素、文本、空格。

```scss
/* div 没有子元素的时候背景颜色为 pink */
div:empty { background-color: pink }
```



## 伪元素

### 一、placeholder — ~~`IE`~~

> 占位符

```scss
input::placeholder {
  font-size: 12px;
  color: red
}
```

## 单位

### 一、vmax 和 vmin

> vmax — 视口宽度和高度中最大的那个
>
> v-min — 与 vmax 相反

### 二、rem

> 常用与适配手机端
>
> 使用 `rem` 为元素设定字体大小时，是相对与 `HTML` 根元素的字体大小

```scss
html { font-size: 20px }

// // 此时 1rem === 20px, 等同于 width: 20px
div { width: 1rem }
```

## 函数

### 一、calc()

### 二、attr()

### 三、max()

### 四、min()

### 五、minmax()

### 六、repeat()

## 布局

### 一、[flex](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

### 二、[grid](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 特殊玩法

### 一、[计数器](/blog/2023/08/17/前端/css/counter/)

### 二、[瀑布流](/blog/2023/08/18/前端/css/masonry/)