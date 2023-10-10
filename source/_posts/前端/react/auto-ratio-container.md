---
title: 自适应比例容器组件
tags: [组件]
categories: [前端, React]
cover: https://p7.itc.cn/images01/20211123/ca47074f55954f32a596141cc77aeb17.jpeg
date: 2023-09-14 12:00:00
excerpt: 一个能够更具元素尺寸变化并且保持自身展示比例放大缩小的 React 组件实现过程
---
## 自适应比例容器

### 介绍

实现了，能够无视父元素宽高变化保持自身比例且自身尺寸不超过父元素的功能。

类似于CSS中的一个属性：  object-fit: contain

至于已经有了这个属性为什么还需要做这样一个组件？

- 能够方便我们定制化拓展功能，例如：
  - 适应元素的 loading、error、entry 等状态
  - 添加绑定在适应元素上的按钮
- 能够对内部容器设置一些特定对样式，例如：
  - 与父元素之间的间距（padding）
  - 适应元素的一些定制话样式 （border-radius、background、filter...）

而上述说的那个属性无法做到如此定制化，难以控制。

也是因为最近接触到的项目中慢慢开始多了些这样子的功能，所以想要找一种方式以实现一处方便后续直接套用。

### 使用到的场景（示例页面）
> 年初到现在工作中接触到的项目中或多或少都有涉及到这个功能（船新功能）
- [创意中心](https://chuangyi.qq.com/case-study-details?sn=2023-07-W2&startDate=2023-07-10&endDate=2023-07-16&materialMd5=039b3d1a1ef51dc633cb8d733f970a85&firstIndustryId=21474836515&width=1080&height=1920) => 案例解读详情页预览
- [创意工具](https://chuangyi.qq.com/intellects)（随处可见）
- [投放添加素材弹窗](https://ui.tad.woa.com/cccc/material-dialog.html#/addMaterial)
> 拓展成其他组件的案例
- [图片组件](https://super-zihao.github.io/HDesign/auto-media)

### 功能实现思路

1. 需要两个元素配合，且是嵌套关系（后续以：”父元素、子元素“ 来称呼）

2. 首先要固定主子元素的尺寸比例 *

3. 其次子元素需要相对于父元素水平垂直居中 (使用 flex 实现)

   ```css
   .parent {
     display: flex;
     align-items: center;
     justify-conent: center;
   }
   ```

4. 然后去监听父元素的尺寸比例变化 （width / height）来判断子元素根据 width 还是 height 来对齐 *

   - width
    ![indexedDB](/assets/images/compatible/auto-ratio-containe_width.jpg)
   - height
    ![indexedDB](/assets/images/compatible/auto-ratio-containe_height.jpg)

### 技术选型

- 固定尺寸

  - js  — 开销太大、逻辑较复杂

  - padding — 仅支持 width 对齐

  - **aspect-ratio** — 属性不支持 ie、chrome 87、Safari 14、Firefox 88、Opera 73 ⬇️

    ```scss
    /*
    2021 左右除 IE 外各大浏览器都已支持的新属性，只需要设置 width 或者 height 其中一个，盒子会按照你的 aspect-ratio 比例来设置另一个的大小
    ps：请不要同时设置 width && height，否则 aspect-ratio 将会失效
    */
    .child {
      aspect-ratio: 16;
    }
    ```

    

- 监听父元素比例

  - resize — 无法做到监听本身，浏览器尺寸变化就会触发。

  - iframe + resize — 无法组件化，无法根据功能定制化，iframe本身也较复杂

  - [**window.ResizeObserver**](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver) — 属性不支持 ie、chrome 63、Safari 13、Firefox 68、Opera 51 ⬇️
    > 除 IE 外各大浏览器在 2018 开始支持最晚到 2020 safari 也已经支持
    >   ps：其他可能用得到的观察者api
    >     [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver) —— 交叉观察者（检测两个元素是否有重叠部分可用于：判断元素是否在视口现显示等...）
    >     [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) —— 变动观察者（检测元素变动，例：属性变动、节点增减、文本内容变动）
    

### 功能实现拆解分析

#### 1、固定元素尺寸

```tsx
import React fron 'react';

type Props = {
  ratio?: number | string;
}
const AutoRatioContainer: React.FC<Props> = (props) => {
  // 通过 props 接收固定的尺寸值
  const { ratio } = props;
  return (
  	<div className="parent">
      <div
        className="child"
        style={{
          aspectRtaio: ratio, // 设置
        }}
      >
      </div>
    </div>
  )
}
```

#### 2、监听父元素尺寸变化

```tsx
import { useEffect, useState, useRef } from 'react';
const AutoRatioContainer = () => {
  // 拿到”父元素“
  const parentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 创建 resize 观察对象
    const resizeObserver = new ResizeObserver((items) => {
      items.forEach((item) => {
        // 这里就能拿到父元素每次变化之后的尺寸
        const { width, height } = item.contentRect;
      })
    });
   	// 开始观察“父元素”
    resizeObserver.observe(boxRef.current);
    // 组件销毁，关闭观察对象
    return () => resizeObserver.disconnect();
  }, []);
  return (
  	<div className="parent" ref={parentRef}>
      <div className="child">
      </div>
    </div>
  )
}
```

#### 3、判断对齐方向

```tsx
const { width, height } = item.contentRect;
// 得到父元素比例
const parentRatio = width / height;

// 拿到子元素
const child = item.target.firstElementChild;
// 通过 getComputedStyle 拿到子元素的宽高比数组 例：16 / 9 => [16, 9]
const [childAspectWidth, childAspectHeight] = window.getComputedStyle(child as Element).aspectRatio.split('/');
// 得到子元素比例
const childRatio = Number(childAspectWidth) / Number(childAspectHeight); 

// 最后通过对比他们的比例大小，判断子元素最终以哪种方式对齐 width || height
<div
  className="child"
  style={{
    [parentRatio >= childRatio ? 'height' : 'width']: '100%',
  }}
>
</div>
```



## 源代码展示（React + ts + css in js）

> index.tsx

```tsx
import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
  parentClassName?: string;
  childClassName?: string;
  parentStyle?: CSSProperties;
  childStyle?: CSSProperties;
  /** 
   * @description 子元素比例
   * @default 1 / 1
   */
  ratio?: number;
  children?: ReactNode;
};

const AutoRatioContainer: React.FC<Props> = ({
  parentClassName = '',
  childClassName = '',
  parentStyle,
  childStyle,
  ratio = 1,
  children,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [reference, setReference] = useState<'width' | 'height'>('width');

  useEffect(() => {
    if (!boxRef.current) return;
    const callback: ResizeObserverCallback = (items) => {
      items.forEach((item) => {
        const { width, height } = item.contentRect;
        const parentRatio = width / height;

        const child = item.target.firstElementChild;
        const [childAspectWidth, childAspectHeight] = window.getComputedStyle(child as Element).aspectRatio.split('/');
        const childRatio = Number(childAspectWidth) / Number(childAspectHeight);
        
        setReference(parentRatio >= childRatio ? 'height' : 'width');
      });
    };
    const resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(boxRef.current);
    return () => resizeObserver.disconnect();
  }, [ratio]);

  return (
    <ParentElement className={parentClassName} style={parentStyle} ref={boxRef}>
      <div
        className={childClassName}
        style={{
          ...childStyle,
          aspectRatio: `${ratio}`, // 尽量使用字符串形式，在一些未知情况下 number 形式可能会失效。
          [reference]: '100%',
        }}
      >
        {children}
      </div>
    </ParentElement>
  );
};

const ParentElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
`

export default AutoRatioContainer;
```


## 尝鲜 —— CSS 新特性实现

{% btn center large::点击查看案例::https://codepen.io/hzihhuang/pen/dywaVjz::fa-solid fa-eye %}

[快速学习一下它](/blog/2023/08/14/前端/css/container)