---
title: JS API
tags: [JavaScript]
categories: [前端, JavaScript]
cover: https://img1.baidu.com/it/u=163326154,1068027404&fm=253&fmt=auto&app=138&f=JPEG
date: 2022-04-16 12:36:09
excerpt: 一些 JavaScript 的 API
---
[浏览器兼容性查询地址](https://caniuse.com/)

## Proxy — 代理对象

> 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

1. 使用方法

   ```ts
   const handler = {
       get: function(obj, prop) {
           return prop in obj ? obj[prop] : 37;
       }
   };
   
   const p = new Proxy({}, handler);
   p.a = 1;
   p.b = undefined;
   
   console.log(p.a, p.b);      // 1, undefined
   console.log('c' in p, p.c); // false, 37
   ```

## Fullscreen — 全屏（~~`IE`~~）

|   元素   |        属性         |                            作用                            |
| :------: | :-----------------: | :--------------------------------------------------------: |
| document |  fullscreenEnabled  |               判断当前浏览器是否支持全屏 API               |
|          |  fullscreenElement  |    获取当前全屏元素（返回为 null 说明当前未在全屏状态）    |
|          |  exitFullscreen()   |                          退出全屏                          |
|          |  fullscreenchange   |                 浏览器进入或离开全屏时触发                 |
|          |   Fullscreenerror   | 浏览器无法进入全屏时触发，可能是技术原因，也可能是用户拒绝 |
| element  | requestFullScreen() |                          请求全屏                          |

## Picture-in-Picture — 画中画 (~~`IE`~~)

|   元素   |           属性            |                       作用                       |
| :------: | :-----------------------: | :----------------------------------------------: |
| Document |  exitPictureInPicture()   |                  请求退出画中画                  |
|          |  pictureInPictureElement  | 返回当前处于画中画模式的 video 元素，没有则 null |
|          |  pictureInPictureEnabled  |              当前页面是否支持画中画              |
|  Video   | requestPictureInPicture() |                  请求进入画中画                  |
|          |  disablePictureInPicture  |              设置为true，禁用画中画              |
|          |   enterpictureinpicture   |     监听进入画中画，可以拿到 pipWindow 对象      |
|          |   leavepictureinpicture   |                  监听退出画中画                  |

## DragDrop — 拖拽

> 每一个可拖动的元素，在拖动过程中，都会经历三个过程，`拖动开始`-->`拖动过程中`--> `拖动结束`。

|   针对对象   | 事件名称  | 说明                                                         |
| :----------: | :-------: | :----------------------------------------------------------- |
| 被拖动的元素 | dragstart | 在元素开始被拖动时候触发                                     |
|              |   drag    | 在元素被拖动时反复触发                                       |
|              |  dragend  | 在拖动操作完成时触发                                         |
|  目的地对象  | dragenter | 当被拖动元素进入目的地元素所占据的屏幕空间时触发             |
|              | dragover  | 当被拖动元素在目的地元素内时触发                             |
|              | dragleave | 当被拖动元素没有放下就离开目的地元素时触发                   |
|              |   drop    | 当被拖动元素在目的地元素里放下时触发，一般需要取消浏览器的默认行为。 |

## Clipboard — 剪贴板

> Clipboard API 是下一代的剪贴板操作方法，比传统的`document.execCommand()`方法更强大、更合理。它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。
>
> 如果`navigator.clipboard`属性返回`undefined`，就说明当前浏览器不支持这个 API。
>
> 首先，Chrome 浏览器规定，只有 HTTPS 协议的页面才能使用这个 API。不过，开发环境（`localhost`）允许使用非加密协议。

主要方法有:

- `readText()`:  拿到剪贴板里的文本数据。（需要用户明确许可）

- `writeText( value )`:  将文本写入剪贴板

- `read()`:  复制剪贴板里面的数据，可以说文本数据，也可以说二进制数据。（需要用户明确许可）

- `write()`:  写入任意数据, 该方法接受一个 ClipboardItem 实例作为参数，表示写入剪贴板的数据

  ```ts
  function copy() {
    const image = await fetch('kitten.png');
    const text = new Blob(['复制的文本'], {type: 'text/plain'});
    const item = new ClipboardItem({
      'text/plain': text,
      'image/png': image
    });
    await navigator.clipboard.write([item]);
  }
  ```

  

事件:

- `copy`:  用户像剪贴板放入数据时，触发 copy 事件

  ```ts
  // 下面的示例说将用户放入剪切板的文本，转为大些
  const source = document.querySelector('.source');
  source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
  });
  ```

  > - `Event.clipboardData.setData(type, data)`：修改剪贴板数据，需要指定数据类型。
  > - `Event.clipboardData.getData(type)`：获取剪贴板数据，需要指定数据类型。
  > - `Event.clipboardData.clearData([type])`：清除剪贴板数据，可以指定数据类型。如果不指定类型，将清除所有类型的数据。
  > - `Event.clipboardData.items`：一个类似数组的对象，包含了所有剪贴项，不过通常只有一个剪贴项。

- `cut`:  用户进行剪切操作时触发。

- `Paste`:  用户使用剪贴板数据，进行粘贴操作时，会触发`paste`事件。

## Observer — 观察者

> 此类 api 都同属于观察者api，用法 **大致** 一样

<span style="font-size: 22px; color: #3357d2; font-weight: bold;">1、IntersectionObserver:  </span>观察一个元素是否在视窗可见 — ~~`IE`~~

```ts
const config = { threshold: [], root: null }
const callback = (entries) => {
  entries.forEach(item => {
    // 每个 item 都是一个 IntersectionObserverEntry 对象
    // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
      console.log(item); 
  })
}
const observer = new IntersectionObserver(callback, config);
observer.observe(dom) // 开始观察 你需要观察哪个元素，就填哪个元素进去
observer.unobserve(dom) // 停止观察 同上
observer.disconnect(); // 关闭观察器
```

- <span style="color: #d44400; font-weight: bold; font-size:20px">config </span>配置项

  |    属性    |   类型   |                             描述                             |
  | :--------: | :------: | :----------------------------------------------------------: |
  |    root    |  String  |   属性指定目标元素所在的容器节点（即根元素），默认是 body    |
  | threshold  | number[] |              决定了什么时候触发回调函数 0 ～ 1               |
  | rootMargin |  string  | 定义根元素的`margin`，用来扩展或缩小`rootBounds`这个矩形的大小，从而影响`intersectionRect`交叉区域的大小。它使用CSS的定义方法，比如`10px 20px 30px 40px`，表示 top、right、bottom 和 left 四个方向的值。 |

- <span style="color: #d44400; font-weight: bold; font-size:20px">IntersectionObserverEntry </span>对象

  |        属性        |          类型           |                        描述                         |
  | :----------------: | :---------------------: | :-------------------------------------------------: |
  |        time        |         number          | 可见性发生变化的时间，是一个高精度时间戳，单位是 ms |
  |       target       |         Element         |        被观察到目标元素，是一个 DOM 节点对象        |
  |     rootBounds     | DOMRectReadOnly \| null |                根元素的矩形区域信息                 |
  | boundingClientRect |     DOMRectReadOnly     |               目标元素的矩形区域信息                |
  |  intersectionRect  |     DOMRectReadOnly     |          目标元素与根元素的交叉区域的信息           |
  | intersectionRatio  |         number          |                 目标元素的可见比例                  |
  |   isIntersecting   |         boolean         |                目标元素是否完全可见                 |

<span style="font-size: 22px; color: #3357d2; font-weight: bold;">2、ResizeObserver:  </span>观察元素 大小｜显示隐藏 的变化 — ~~`IE`~~

> 接口可以监听到 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 的内容区域或 [`SVGElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/SVGElement)的边界框改变。内容区域则需要减去内边距 padding。
>
> 避免了在自身回调中调整大小，从而触发的无限回调和循环依赖。它仅通过在后续帧中处理 DOM 中更深层次的元素来实现这一点。如果（浏览器）遵循规范，只会在绘制前或布局后触发调用。

```ts
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.style.borderRadius = Math.max(0, 250 - entry.contentRect.width) + 'px';
  }
});
resizeObserver.observe(document.querySelector('.box:nth-child(2)'));
```

<span style="font-size: 22px; color: #3357d2; font-weight: bold;">3、MutationObserver:  </span>观察元素的变化

> 接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。

```ts
 // 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');

// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
observer.observe(targetNode, config);

// 之后，可停止观察
observer.disconnect();
```

- <span style="color: #d44400; font-weight: bold; font-size:20px">config </span>配置项

  |         属性          |  类型   |                             描述                             |
  | :-------------------: | :-----: | :----------------------------------------------------------: |
  |       childList       | Boolean |                       观察子节点的变动                       |
  |      attributes       | Boolean |                        观察属性的变动                        |
  |     characterData     | Boolean |                 观察节点内容或节点文本的变动                 |
  |        subtree        | Boolean |                    观察所有后代节点的变动                    |
  |   attributeOldValue   | Boolean |       当观察到attributes变动时，是否记录变动前的属性值       |
  | characterDataOldValue | Boolean |     当观察到characterData变动时，是否记录变动前的属性值      |
  |    attributeFilter    |  Array  | 指定需要观察的特定属性（比如[‘src’, ‘rows’]），不在此数组中的属性变化时将被忽略 |

- <span style="color: #d44400; font-weight: bold; font-size:20px">MutationRecord</span> 对象包含了DOM的相关信息，有如下属性：

  |        属性        |   类型   |                             描述                             |
  | :----------------: | :------: | :----------------------------------------------------------: |
  |        type        |  String  | 根据变动类型的不同，值可能为attributes，characterData或者childList |
  |       target       |   Node   |          发生变动的DOM节点，可能是删除节点的父元素           |
  |     addedNodes     | NodeList |                被添加的节点，如果没有则是null                |
  |    removedNodes    | NodeList |                被删除的节点，如果没有则是null                |
  |  previousSibling   |   Node   |    被添加或被删除的节点的前一个兄弟节点，如果没有则是null    |
  |    nextSibling     |   Node   |    被添加或被删除的节点的后一个兄弟节点，如果没有则是null    |
  |   attributeName    |  String  |            发生变更的属性的名称，如果没有则是null            |
  | attributeNamespace |  String  | 发生变更的属性的命名空间，在SVG元素操作时比较有用，如果没有则是null |
  |      oldValue      |  String  | 如果type为attributes，则返回该属性变化之前的属性值；如果type为characterData，则返回该节点变化之前的文本数据；如果type为childList，则返回null |

## Encoding — 处理字符编码文本

## Geolocation — 获取地理位置

## Screen Capture — 屏幕捕捉

## Vibration — 可实现设备物理振动反馈，用于移动端