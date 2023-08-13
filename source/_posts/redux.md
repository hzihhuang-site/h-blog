---
title: redux
tags: [React生态]
categories: [前端, React]
cover: https://pic3.zhimg.com/v2-d9d2770fc833e02572dc4b4e250359bf_1440w.jpg
date: 2022-09-17 13:33:19
excerpt: V6版本的react-router升级了原有嵌套路由写法，并且重新实现了useNavigate来替代useHistory，整体上更加好理解。
---
<!-- <img width="500" src="https://cn.redux.js.org/img/redux.svg" /> -->

# Redux 快速入门

## redux 简介

什么是 Redux？

> 它有助于首先理解这个“Redux”的东西是什么。它有什么作用？它帮助我解决什么问题？我为什么要使用它？
>
> **Redux 是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库** 它以集中式Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

为什么要用 Redux？

> Redux 帮你管理“全局”状态 - 哪些应用程序的许多部分都需要的状态。
>
> **Redux 提供的模式和工具使您更容易理解应用程序中的状态何时、何地、为什么以及如何更新，以及当这些更改发生时您的应用程序逻辑将如何表现**. Redux 指导您编写可预测和可测试的代码，这有助于让您确信您的应用程序将按预期工作。

我什么时候应该使用 Redux？

> Redux 可帮助您处理共享状态的管理，但与任何工具一样，它也有权衡。有更多的概念需要学习，还有更多的代码需要编写。它还为您的代码添加了一些额外代码，并要求您遵循某些限制。这是短期和长期生产力之间的权衡。

## redux 术语*

### Actions

> **action** 是一个具有 `type` 字段的普通 JavaScript 对象。**你可以将 action 视为描述应用程序中发生了什么的事件**.

```ts
const addTodoAction = {
  type: 'todos/todoAdded', // type 字段是一个字符串，给这个 action 一个描述性的名字 我们通常把那个类型的字符串写成“特征/具体”
  payload: 'Buy milk'
}
```

### Reducers

> **reducer** 是一个函数，接收当前的 `state` 和一个 `action` 对象，必要时决定如何更新状态，并返回新状态。函数签名是：`(state, action) => newState`。 **你可以将 reducer 视为一个事件监听器，它根据接收到的 action（事件）类型处理事件**

Reducer 必需符合以下规则：

- 仅使用 `state` 和 `action` 参数计算新的状态值
- 禁止直接修改 `state`。必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 *不可变更新（immutable updates）*。
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

```ts
const initialState = { value: 0 } // 初始状态

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  switch (action.type) {
    case 'counter/increment': {
			return  { 
        ...state, // 复制 `state`
        value: state.value + 1, // 使用新值更新 state 副本
      }
    }
    default:
      return states // 返回原来的 state 不变
  }
}
```

### Store

> 当前 Redux 应用的状态存在于一个名为 **store** 的对象中。

store 是通过传入一个 reducer 来创建的，并且有一个名为 `getState` 的方法，它返回当前状态值：

```ts
import { createStore } from 'redux'

let store = createStore(counterReducer)

console.log(store.getState())
// {value: 0}
```

### Dispatch

> Redux store 有一个方法叫 `dispatch`。**更新 state 的唯一方法是调用 `store.dispatch()` 并传入一个 action 对象**。

store 将执行所有 reducer 函数并计算出更新后的 state，调用 `getState()` 可以获取新 state。

```ts
store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())
// {value: 1}
```

## 快速入门

### index.ts

```ts
import { createStore } from 'redux'
import { reducer } from './reducer'

export const store = createStore(counterReducer)
```

### reducer.ts

```ts
const initState = {
  value: 0,
}
export const reducer = (state, action) => {
	switch (action.type) {
    case 'changeValue': {
			return  { 
        ...state,
        value: action.value,
      }
    };
    default:
      return states
  }
}
```

### action.ts

```ts
export const addValue = (value) => ({
  type: 'changeValue',
  value,
})
```

### Demo.tsx

```tsx
import React from 'react';
import { store } from './index.ts'
import { addValue } from './action.ts'

const Demo = () => {
  const state = store.getState();
  return (
  	<div>{state.value}</div>
    <button onClick={() => store.dispatch(addValue(state.value + 1))}>+ 1</button>
  )
}
```



# redux 库

## react-redux

## Redux Toolkit

