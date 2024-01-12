---
title: CSS Nesting(嵌套语法)
tags: [Style]
categories: [前端, CSS]
cover: https://img0.baidu.com/it/u=2653173828,153052962&fm=253&fmt=auto&app=138&f=JPEG?w=947&h=500
date: 2024-1-12 14:48:00
excerpt: CSS 新语法, 现代浏览器将开始支持原生 CSS 的嵌套功能，与 Less、Sass 等预处理器不同，CSS 嵌套功能可以直接在 CSS 文件中使用，无需再编译成 CSS 文件。
---


## 兼容性
![counter](/assets/images/compatible/css-nesting.jpg)

## CSS Nesting（嵌套语法）简介

CSS Nesting 是 CSS 的一种新的模块，它允许你更精确地控制样式的继承和层叠。通过嵌套规则，你可以创建更清晰、更有组织的 CSS 代码，从而提高代码的可读性和可维护性。

### 嵌套语法的特点
1. **可读性**：嵌套语法使得 CSS 代码更接近于 HTML 结构。这样的结构使得设计师更容易理解和设计网站或应用程序的用户界面。
2. **模块化**：嵌套规则鼓励你将 CSS 代码组织成更小的、更模块化的部分。这有助于减少样式表的复杂性，并使代码更易于维护。
3. **继承**：嵌套语法使得继承一个特定元素的样式更加直观。你可以在一个嵌套规则中继承另一个规则的样式，这样可以减少重复的样式代码。
4. **层叠**：通过嵌套规则，你可以更精确地控制样式的层叠。这有助于减少样式覆盖的意外情况，并使你的样式更加可控。



### 语法特点( 与less、scss之间的部分差异 )

#### 1. 附加嵌套选择器

```css
.foo {
  color: red;
  .bar & {
    color: blue;
  }
}

.foo { color: red }
.bar .foo { color: blue }
```

#### 2. 连接

> 在 scss、less 等 CSS 预处理器中，可以使用嵌套来连接字符串来创建新类

```scss
.component {
  &_child-element {
    color: red;
  }
}

.component__child-element { color: red }
```

以上这种方式在 CSS Nesting 中时错误的语法。



### 嵌套 at 规则

**可嵌套的 at 规则:**

- [`@media`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)：媒体查询
- [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)：支持查询（查询一个样式是否在浏览器上支持）
- [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)：层级（将样式分层）
- [`@scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope)：范围查询（允许我们将样式规则限定到给定的范围内，类似 vue 里面的 scope 功能）
- [`@container`](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)：容器查询

#### @media 规则嵌套

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    & {
      grid-auto-flow: column;
    }
  }
}

.foo { display: grid }
@media (orientation: landscape) {
  .foo { grid-auto-flow: column }
}
```

#### 多个 @media 规则

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (min-width: 1024px) {
      max-inline-size: 1024px;
    }
  }
}

.foo { display: grid }
@media (orientation: landscape) {
  .foo { grid-auto-flow: column }
}
@media (orientation: landscape) and (min-width: 1024px) {
  .foo { max-inline-size: 1024px }
}
```

### 与 Less、Scss 相比

最大的区别是，都支持**嵌套写法**。
不同的是，**Less 和 Scss 是CSS预编译器**，最终都是要在打包构建的时候转化成 CSS(这**需要构建时间**，且打包结果是以 .a .b .c {} 的形式，文件会很大且不易读)
而 **CSS Nesting** 语法，现代浏览器基本都已经支持(如需**考虑兼容性**尽量不用此方式)，无需打包打平来，文件也会更小。



