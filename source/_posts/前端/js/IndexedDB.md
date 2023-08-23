---
title: 浏览器上的数据库 IndexedDB 
tags: [JavaScript, 数据库]
categories: [前端, JavaScript]
cover: https://img1.baidu.com/it/u=163326154,1068027404&fm=253&fmt=auto&app=138&f=JPEG
date: 2023-08-21 16:46:09
excerpt: 浏览器上的数据库
---

## 兼容
![indexedDB](/assets/images/compatible/indexedDB1.0.jpg)
![indexedDB](/assets/images/compatible/indexedDB.jpg)

## 简介
### 背景

随着浏览器的处理能力不断增强，越来越多的网站开始考虑，将大量数据储存在客户端，这样可以减少用户等待从服务器获取数据的时间。

现有的浏览器端数据储存方案，都不适合储存大量数据。
- `cookie` 不超过 `4KB`，且每次请求都会发送回服务器端
- `Window.name` 属性缺乏安全性，且没有统一的标准
- `localStorage/sessionStorage` 在 `2.5MB` 到 `10MB` 之间（各家浏览器不同）

所以，需要一种新的解决方案，这就是IndexedDB诞生的背景。

### 特点:
简单的说 `IndexedDB` 就是浏览器端数据库。它可以被网页脚本程序创建和操作。允许储存大量数据，提供查找接口，还能建立索引。
这些都是 `localStorage` 所不具备的。就数据库类型而言，`IndexedDB` 不属于关系型数据库（不支持 `SQL` 查询语句），更接近 `NoSQL` 数据库。
1. **键值对储存:**
>IndexedDB内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括JavaScript对象。在对象仓库中，数据以“键值对”的形式保存，每一个数据都有对应的键名，键名是独一无二的，不能有重复，否则会抛出一个错误。
2. **异步:**
>IndexedDB操作时不会锁死浏览器，用户依然可以进行其他操作，这与localStorage形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。
3. **支持事务:**
>IndexedDB支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回到事务发生之前的状态，不存在只改写一部分数据的情况。
4. **同源策略:**
>IndexedDB也受到同源策略，每一个数据库对应创建该数据库的域名。来自不同域名的网页，只能访问自身域名下的数据库，而不能访问其他域名下的数据库。
5. **储存空间大:**
>IndexedDB的储存空间比localStorage大得多，一般来说不少于250MB。IE的储存上限是250MB，Chrome和Opera是剩余空间的某个百分比，Firefox则没有上限。
6. **支持二进制储存:**
>IndexedDB不仅可以储存字符串，还可以储存二进制数据。

## 基本流程
### 前置
> 你需要知道:
> 1. 你可以在同一站点上创建多个 indexedDB(数据库)
> 2. 每个数据下面也可以创建多个 objectStore(表)
> 3. 每个表里面的数据是 key value 键值对的形式，且value值可以是：字符串、布尔、数组、对象、二进制等类型
> 4. 异步！！！操作基本都是异步，需要繁琐的监听事件
### 连接数据库
想要在 `indexedDB` 里面存储数据，需要两个步骤:
1. 连接(打开)数据库
2. 选择需要对哪个表 `objectStore(表)` 进行数据操作

```typescript
const request = window.indexedDB.open('test', 1);
```
上面代码表示，打开一个名为 `test`、版本为 `1` 的数据库。如果该数据库不存在，则会新建该数据库。如果省略第二个参数，则会自动创建版本为1的该数据库。
`open` 方法有两个参数:
1. name: 数据库名称(string)
2. version: 版本，是一个大于0的正整数（0将报错）

打开数据库的结果是有可能触发 4 种事件
- success: 打开成功
- error: 打开失败
- upgradeneeded: 第一次打开该数据库 or 数据库 `版本` 发生变化
- blocked: 上一次的数据库连接还未关闭

第一次打开数据库会先触发 `upgradeneeded` 再触发 `success` 事件。(每次版本升级同)
ps: 版本只能升不能降
```typescript
const request = window.indexedDB.open('test', 1);
var db;

request.onupgradeneeded = (e) => {
  console.log('版本升级中')
}

request.success = (e) => {
  console.log('成功')
  db = e.target.result; // 这里拿到 test 数据库
}
\

request.error = (e) => {
  console.log('失败')
}
```
- `open` 方法返回的是一个对象（IDBOpenDBRequest），回调函数定义在这个对象上面。
- 回调函数接受一个事件对象 `event` 作为参数，它的 `target.result` 属性就指向打开的IndexedDB数据库。

### 创建数据表
获取到数据库实例后，就能通过实例对象操作数据表了

```typescript
db.createObjectStore("firstTable");
```
上面代码创建了一个名为 `firstTable` 的对象仓库。

此方法还可以接受第二个对象参数，用来设置 `表` 的属性
```typescript
db.createObjectStore("test", { keyPath: 'email' }); // 健名（唯一）
db.createObjectStore("test", { autoIncrement: true }); // 自动递增（整数）
```

如果该对象仓库已经存在，就会抛出一个错误。可以通过 `objectStoreNames` 属性来检测错误。
`objectStoreNames` 属性返回了当前数据库所有 `表` 的名称。可以使用 `contains` 方法，检查数据库是否包含某个 `表`
```typescript
if(!db.objectStoreNames.contains("firstOS")) {
  db.createObjectStore("firstOS");
}
```

### 数据库事务
> 因为数据库的特性，防止我们在改变数据的过程中突然中断了，会自动直接取消本次修改。
> 所以每次操作数据之前都必须创建数据库事务。
```typescript
const t = db.transaction(["firstTable"], "readwrite");
```
此方法接收两个参数：
1. 数组：填写需要操作的表的名字（[table1, table2, ...]）
2. 操作类型：`readonly(只读)` or `readwrite(读写)`

>返回一个事务对象，该对象的 `objectStore` 方法用于获取指定的表(只能在你创建事物时传入的数组中选取)。
```typescript
const t = db.transaction(["firstTable"], "readwrite");
const store = t.objectStore("firstTable")
```
返回的事务对象中有 3 个事件
- abort: 事务中断
- complete: 事务完成
- error: 事务出错

```typescript
const transaction = db.transaction(["test"], "readonly");  
transaction.oncomplete = function(event) {
  // some code
};
```

返回的 objectStore 对象有以下方法，用于操作数据。
1. add — 添加数据
>`add` 方法是异步的，有自己的 `success` and `error` 事件
```typescript
const store = t.objectStore("firstTable");
const obj = { name: 'zihao', age: 18 }
// 将对象 obj 存入 firstTable 表中，并且它的键名为 1
const request = store.add(obj, 1)

request.onerror = function(e) {
     console.log("Error",e.target.error.name);
}

request.onsuccess = function(e) {
    console.log("数据添加成功！");
}
```
2. get — 读取数据
>`get` 方法是异步的，有自己的 `success` and `error` 事件
```typescript
const store = t.objectStore("firstTable");
// 获取 firstTable 中，键名为 1 的值
const request = store.get(1)

request.onsuccess = function(e) {
    console.log("获取成功", e.target.result);
}
```
>从创建事务到读取数据，所有操作方法也可以写成下面这样链式形式。
```typescript
db.transaction(["test"], "readonly")
  .objectStore("test")
  .get(X)
  .onsuccess = function(e){}
```
3. put — 更新数据
>用法同 `add` 相似，异步
```typescript
const obj = { p:456 };
const request = store.put(obj, 1);
```
4. delete — 删除数据
>用法同 `get` 相似, 异步
```typescript
const request = store.delete(1);
```
5. openCursor — 遍历数据
> 异步
```typescript
const cursor = store.openCursor();
cursor.onsuccess = function(e) {
  const res = e.target?.result; // 当前光标下的值
  if(res) {
    console.log("Key", res.key);
    console.dir("Data", res.value);
    res.continue(); // 跳到下一个光标
  }
}
```

到此为止，整个数据库的创建以及基本使用已经会了。
你可以自行尝试去创建或使用一下。

## [dexie.js](https://dexie.org/)
> 对 indexedDB 封装的一个库，能够让我们向 jquery 一样链式调用，省去了维护各种异步事件操作的时间。支持 `TypeScript`、`React`、`Angular`、`Svelte`