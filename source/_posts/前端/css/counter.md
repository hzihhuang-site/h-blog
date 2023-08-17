---
title: CSS3 counter 计数器
tags: [Style]
categories: [前端, CSS]
cover: https://img0.baidu.com/it/u=2653173828,153052962&fm=253&fmt=auto&app=138&f=JPEG?w=947&h=500
date: 2023-08-17 10:28:00
excerpt: CSS3 也能进行计数，在一些文章或目录类型的页面可以有奇效...
---

## 兼容性
![counter](/assets/images/compatible/counter.png)

## 作用

> 计数器是一种特殊的数字跟踪器，能够为一些文章或目录类型的页面提供段落编号
>
> 计数器只能跟 content 属性在一起的时候才有作用，而 content 属性是用在before/after伪元素上的。

## 认识语法

### 定义计数器

> 使用 `counter-reset` 进行定义或重置
>
> ps: 计数器的名称不可以为 `none`、`inherit` 或 `initial`，否则，相应的声明会被忽略。

```scss
html {
  // counter-reset: 计数器名称;
  counter-reset: name;
  
  // 可以同时定义多个计数器
  counter-reset: name1 name2 name3;
  
  // 计数器初始值，默认 1
  counter-reset: name 3;
}
```

### 计数器递增(递减)

>  `counter-increment` 

```scss
div {
  // 为 name 这个计数器自增 1
  counter-increment: name;
  
  // 同时为 name1 name2 自增 1
  counter-increment: name1 name2;
  
  // name1 增 2 ｜ name2 增 1
  counter-increment: name1 2 name2;
  
  // name1 减 2 ｜ name2 增 1
  counter-increment: name1 -2 name2;
}
```

### 使用计数器

> `counter()` **or** `counters()`

```scss

h1::before {
  // 将名字为 name 的计数器使用到 content 上
	content: counter(name);

  // 计数的类型是 upper-roman 可取值与 list-style-type 值一致
  content: counter(name, upper-roman);
}

h2::before {
  // 从最外层的计数器到最内层 name 计数器上全部用到 content 上，使用 - 为分割符
	content: counters(name, '-');
	content: counters(name, '-', upper-roman);
}

```

## 案例展示
{% btn center large::一个简单的案例::https://codepen.io/hzihhuang/pen/oNJvPEK::fa-solid fa-eye %}