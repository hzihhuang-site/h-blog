---
title: git push 同时提交到 github 和 gitee
tags: [git]
categories: [其他]
date: 2023-08-17 14:30:00
excerpt: 在写博客过程中，因为 github 访问网速问题，想要将仓库移动到 gitee 又想保持以前 github 仓库继续更新...
---

## 背景
> 最近在写博客过程中，因为 **`github`** 访问网速问题，需要将仓库移动到 **`gitee`** 但是我又想保持以前 **`github`** 仓库继续更新，维持 **`GitHubPage`** 部署最新页面。


## 1、copy
> 要先同步 gitee 和 github 仓库的代码
>
> 直接在 gitee 登陆自己账号新建仓库就好了。

![gitee](/assets/images/compatible/gitee_import.png)

![gitee](/assets/images/compatible/gitee_import2.png)

## 2、修改 .git 文件
> 找到本地项目的 .git 文件夹内的 config 文件，并打开。
> 添加一行 url = 新的仓库地址, 后保存。

```txt
[remote "origin"]
	url = https://github.com/Super-ZiHao/blog.git
	url = https://gitee.com/Super-ZiHao/blog.git 
	fetch = +refs/heads/*:refs/remotes/origin/*
```