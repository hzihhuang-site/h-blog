---
title: 浏览器上的数据库 IndexedDB 
tags: [JavaScript, 数据库]
categories: [前端, JavaScript]
cover: https://img1.baidu.com/it/u=163326154,1068027404&fm=253&fmt=auto&app=138&f=JPEG
date: 2023-08-21 16:46:09
excerpt: 浏览器上的数据库
---

## 兼容
![indexedDB](/assets/images/compatible/indexedDB.jpg)

## 背景

随着浏览器的处理能力不断增强，越来越多的网站开始考虑，将大量数据储存在客户端，这样可以减少用户等待从服务器获取数据的时间。

现有的浏览器端数据储存方案，都不适合储存大量数据。
- cookie 不超过4KB，且每次请求都会发送回服务器端
- Window.name 属性缺乏安全性，且没有统一的标准
- localStorage/sessionStorage 在2.5MB到10MB之间（各家浏览器不同）

所以，需要一种新的解决方案，这就是IndexedDB诞生的背景。

## 介绍
通俗地说，IndexedDB就是浏览器端数据库。它可以被网页脚本程序创建和操作。允许储存大量数据，提供查找接口，还能建立索引。

这些都是 `localStorage` 所不具备的。就数据库类型而言，`IndexedDB` 不属于关系型数据库（不支持 `SQL` 查询语句），更接近 `NoSQL` 数据库。

### 特点:
1. 键值对储存。
IndexedDB内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括JavaScript对象。在对象仓库中，数据以“键值对”的形式保存，每一个数据都有对应的键名，键名是独一无二的，不能有重复，否则会抛出一个错误。
2. 异步。
IndexedDB操作时不会锁死浏览器，用户依然可以进行其他操作，这与localStorage形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。
3. 支持事务。
IndexedDB支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回到事务发生之前的状态，不存在只改写一部分数据的情况。
4. 同源策略。
IndexedDB也受到同源策略，每一个数据库对应创建该数据库的域名。来自不同域名的网页，只能访问自身域名下的数据库，而不能访问其他域名下的数据库。
5. 储存空间大。
IndexedDB的储存空间比localStorage大得多，一般来说不少于250MB。IE的储存上限是250MB，Chrome和Opera是剩余空间的某个百分比，Firefox则没有上限。
6. 支持二进制储存。
IndexedDB不仅可以储存字符串，还可以储存二进制数据。