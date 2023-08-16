---
title: CSS3 clip-path
tags: [Style]
categories: [前端, CSS]
cover: https://img0.baidu.com/it/u=2653173828,153052962&fm=253&fmt=auto&app=138&f=JPEG?w=947&h=500
date: 2023-08-16 15:40:00
excerpt: css3 画图
---
## 兼容性
![container](/assets/images/compatible/clip-path.png)
## 作用
>可以创建一个只有元素的部分区域可以显示的剪切区域

## 语法
### 1、inset()
> 定义一个矩形。
> 有 5 个参数，分别对应 `top`, `right`, `bottom`, `left`, `round radius`
> 可以按 F12 检测元素，查看 `粉色` 方块的结构
<div style="width: 100%; aspect-ratio: 5 / 1; background: pink; clip-path: inset(20% 10% 2% 10% round 12px)"></div>
```scss
.div {
  clip-path: inset(2px 4px 6px 10px round 4px)
}
```

### 2、polygon()
> 定义一个多边形
> 每对参数表示多边形的顶点坐标（X,Y），也就是连接点
> 可以按 F12 检测元素，查看 `蓝色` 方块的结构
<div style="width: 100%; aspect-ratio: 5 / 1; background: #4ea4f8; clip-path: polygon(0 100%, 100% 100%, 50% 0)"></div>

```scss
.div {
  clip-path: polygon(100% 0, 100% 100%, 50% 0)
}
```

### 3、circle()
> 定义一个圆
> 半径 at 圆心位置(X Y)
> 可以按 F12 检测元素，查看 `红色` 方块的结构
<div style="width: 100%; aspect-ratio: 5 / 1; background: #e36278; clip-path: circle(20% at 50% 50%)"></div>

```scss
.div {
  clip-path: circle(20% at 50% 50%)
}
```
### 4、ellipse()
> 定义一个椭圆
> x轴半径 y轴半径 at 圆心位置(x y)
> 可以按 F12 检测元素，查看 `绿色` 方块的结构
<div style="width: 100%; aspect-ratio: 5 / 1; background: #79d667; clip-path: ellipse(50% 50% at 50% 50%)"></div>

```scss
.div {
  clip-path: ellipse(50% 50% at 50% 50%)
}
```

```scss

/* 还有 —— transform: rotate + overflow: hidden */
.main {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    .box {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 70%;
        height: 70%;
        background: red;
        transform-origin: left bottom;
        transform: rotate(45deg)
    }
}
```

## 拓展 —— 使用 css 画三角形
### 1、border
<div class="border"></div>
<style>
.border {
    width: 100px;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    border: 50px solid transparent;
    border-left-color: green;
}
</style>

```scss
.border {
    width: 100px;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    border: 50px solid transparent;
    border-left-color: green;
}
```

### 2、linear-gradient
<div class="linear-gradient"></div>
<style>
.linear-gradient {
    width: 100px;
    height: 100px;
    background-image: linear-gradient(45deg, deeppink 50%, transparent 50%);
}
</style>

```scss
.linear-gradient {
    width: 100px;
    height: 100px;
    background-image: linear-gradient(45deg, deeppink 50%, transparent 50%);
}
```

### 3、transform: rotate + overflow: hidden
<div class="rotate-hidden"></div>
<style>
.rotate-hidden {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.rotate-hidden::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70%;
  height: 70%;
  background: red;
  transform-origin: left bottom;
  transform: rotate(-45deg)
}
</style>

```scss
.rotate-hidden {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 70%;
    background: red;
    transform-origin: left bottom;
    transform: rotate(-45deg)
  }
}
```

### 4、以及 [clip-path: polygon()](/blog/2023/08/16/前端/css/clip-path/#2、polygon)