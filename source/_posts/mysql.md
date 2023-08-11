---
title: mysql
tags: 数据库
categories: 后端
cover: https://img0.baidu.com/it/u=730256309,1700139135&fm=253&fmt=auto&app=138&f=JPEG
date: 2023-05-10 21:20:27
---
# MySQL 基本操作

## 操作数据库

- create database name —— 创建数据库
- drop database name —— 删除数据库
- use name —— 使用数据库  
- select database() —— 查看当前使用的数据库

## 操作表

### 创建表

```sql
create table name (
	字段1 数据类型1,
    字段2 数据类型2,
    字段3 数据类型3
);
-- 注意，最后一行末尾不能加逗号
```

### 查询表

- show tables —— 查询当前数据库下所有表名称
- desc name —— 查询表结构

### 修改表

- alter table 表名 rename to 新表名 —— 修改表名
- alter table name add 列名 数据类型 —— 添加一列
- alter table 表名 modify 列名 数据类型 —— 修改数据类型
- alter table 表名 change 列名 新列名 新数据类型 —— 修改列名和数据类型
- alter table 表名 drop 列名 —— 删除列

## 操作数据

### 添加

- insert into 表名(列名1，列名2,...) values(值1, 值2, ...); —— 指定列添加数据
- insert into 表名 values(值1, 值2, ...) —— 给全部列添加数据
- insert into 表名(列名1，列名2,...) values(值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...) ...; —— 批量添加数据

### 修改

- update 表名 set 列名1=值1, 列名2=值2, ... [where 条件];

### 删除

- delete from 表名 [where 条件];

## 查询 

### 基础查询

- select 字段列表 from 表名; —— 查询字段
- select distinct 字段列表 from 表名; —— 去除重复记录
- as —— 取别名

### 条件查询

#### a、语法

> 语句：select 字段列表 from 表名 where 条件

#### b、条件符号

|       符号       |                 功能                 |
| :--------------: | :----------------------------------: |
|        >         |                 大于                 |
|        <         |                 小于                 |
|        >=        |               大于等于               |
|        <=        |               小于等于               |
|        =         |                 等于                 |
|      <>或!=      |                不等于                |
| between...and... |            在某个范围之内            |
|     in(...)      |                多选一                |
|   like 占位符    | 模糊查询 _单个任意字符 %多个任意字符 |
|     is null      |               是 null                |
|   is not null    |              不是 null               |
|    and 或 &&     |                 并且                 |
|    or 或 \|\|    |                 或者                 |
|     not 或 !     |               非，不是               |

### 排序查询

> select 字段列表 from 表名 order by 排序字段名1 [排序方式], ...;
>
> ps: 如果有多个排序条件，当前边的条件值一样时，才会根据第二条进行排序

- asc —— 升序排列（默认）
- desc —— 降序排列

### 分组查询

#### a、语法	

> select 字段列表 from 表名 where 分组条件限定 group by 分组字段名 having 分组后条件过滤

```sql
# 1、查询男同学和女同学各自的数据平均分
selectsex, avg(math) from stu group by sex;
# 2、查询男同学和女同学各自的数学平均分以及人数
select sex, avg(math), count(*) from stu group by sex;
# 3、查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于 70 分的不参与分组
select sex, avg(math), count(*) from stu where math > 70 group by sex;
# 4、查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于 70 分的不参与分组，分组后人数大于 2 的过滤掉
select sex, avg(math), count(*) from stu where math > 70 group by sex having count(*) > 2;
```

#### b、聚合函数

> select 聚合函数名(列名) from 表

|   函数名    |   功能   |
| :---------: | :------: |
| count(列名) | 统计数量 |
|  max(列名)  |  最大值  |
|  min(列名)  |  最小值  |
|  sum(列名)  |   求和   |
|  avg(列名)  |  平均值  |

```sql
/* 假设 list是表名  */
# 1、统计班级一共有多少个学生
select count(id) from list;
# 2、查询英语成绩的最高值
select max(english) from list;
```

### 分页查询

> select 字段列表 from 表名 limit 起始索引, 查询条目数;

```sql
# 从 0 开始查询，查询 3 条数据
select * from stu limit 0， 3;
# 每页显示 3 条数据，查询第 1 页数据
select * from stu limit 0, 3;
# 每页显示 3 条数据，查询第 2 页数据
select * from stu limit 3, 3;
# 每页显示 3 条数据，查询第 3 页数据
select * from stu limit 6, 3;

/*
	ps:
		起始索引 ==（当前页码 - 1）* 每页显示的条数

*/
```

### 多表查询

#### 连接查询

- 内连接  ——  相当于查询 A B 交集数据

  ```sql
  # 隐式内连接
  SELECT 字段列表 FROM  表1，表2... WHERE 条件;
  # 显式内连接
  SELECT 字段列表 FROM 表1[INNER] JOIN 表2 ON 条件;
  ```

- 外连接

  ​	左外连接：相当于查询 A 表所有数据和交集部分数据

  ​	右外连接：相当于查询 B 表所有数据和交集部分数据

  ```sql
  # 左外连接
  SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;
  # 右外连接
  SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;
  ```

  

#### 子查询

两条查询合并成一条

```sql
# 查询 ‘财务部’ 和 ‘市场部’ 所有的员工信息
SELECT * FROM emp WHERE dep_id IN (SELECT did FROM dept WHERE dname = '财务部' OR dname = ‘市场部);
# 查询入职日期说 ‘2011-11-11’ 之后的员工信息和部门信息
SELECT * FROM (SELECT * FROM emp WHERE join_date > '2011-11-11') AS t1, dept WHERE t1.dep_id =  dept.did;
```



# 约束

## 约束的概念

- 约束是作用于表中列上的规则，用于限制加入表的数据
- 约束的存在保证了数据库中数据的正确性，有效性和完整性

## 约束的分类

| 约束名称 | 描述                                                         | 关键字      |
| -------- | ------------------------------------------------------------ | ----------- |
| 非空约束 | 保证列中所有数据不能有 null 值                               | NOT NULL    |
| 唯一约束 | 保证列中所有数据各不相同                                     | UNIQUE      |
| 主键约束 | 主键是一行数据的唯一标识，要求非空且唯一                     | PRIMARY KEY |
| 检查约束 | 保证列中的值满足某一条件                                     | CHECK       |
| 默认约束 | 保存数据时，未指定值则采用默认值                             | DEFAULT     |
| 外键约束 | 外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性 | FOREIGN KEY |

## 案例

```sql
# 员工表
create table emp (
	id int PRIMARY KEY, -- 员工id（唯一，且自增长）
	name varchar(50) NOT NULL, -- 员工名字（非空）
	joindate date NOT NULL, -- 入职日期（非空）
	salary double(7, 2) NOT NULL, -- 工资（非空）
	bonus double(7, 2) DEFAULT 0, -- 奖金（默认 0）
);

insert into emp (id, name, joindate, salary, bonus) values(1, '张三', '1999-11-11', 8800, 5000); -- 正常插入

insert into emp (id, name, joindate, salary, bonus) values(1, '李四', '1999-11-11', 8800, 5000); -- 执行失败（id重复）

insert into emp (id, name, joindate, salary, bonus) values(2, '李四', '1999-11-11', null, 5000); -- 执行失败（工资不能为空）

insert into emp (id, name, joindate, salary, bonus) values(2, '李四', '1999-11-11', 8800, 5000); -- 执行成功
```

## 外键约束*

### 概念

- 外建用来让两个表的数据之间涧流链接，保证数据的一致性和完整性

### 语法

![image-20220709115408458](./imager/mysql/主表从表关系.png)

#### a、添加约束

```sql
# 创建表时添加外键约束
create table 表名(
	列名 数据类型,
  ...
  [CONSTRAINT] [外健名称] FOREIGN KEY(外健列明) REFERENCES 主表(主表列名)
);


# 建完表后添加外健约束
ALTER TABLE 表名 ADD CONSTRAINT (外健字段名称) REFERENCES 主表名称(主表列名称)
```

#### b、删除约束

```sql
ALTER TABLE 表名 DROP FOREIGN KEY 外健名称;
```

# 数据库设计

## 数据库设计简介

### 概念

- 数据库设计就是根据业务系统的 具体需求，结合我们所选用的DBMS，为这个业务系统构造出最优的数据库存储模型
- 建立数据库中的表结构以及表之间的关联关系的过程
- 有哪些表？表里有哪些字段？表和表之间有什么关系？

### 步骤

1. 需求分析（数据是什么？数据具有哪些属性？数据与属性的特点是什么？）
2. 逻辑分析（通过 ER 图对数据库进行逻辑建模，不需要考虑我们所选用的数据库管理系统）
3. 物理分析（根据数据库自身的特点把逻辑设计转化为物理设计）
4. 维护分析（对新的需求进行建表；表优化）

### 表关系

- 一对一

  如：用户 和 用户详情

  ​		一对一关系用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能

- 一对多( 多对一 ) 

  如： 部门  和 员工

  ​		一个部门对应多个员工，一个员工只有一个部门

- 多对多

  如：商品 和 订单

  ​		一个商品对应多个订单，一个订单包含多个商品

# 事务

## 简介

- 数据库的事务（ Transaction ）是一种机制、一个操作序列，包含了一组数据库的操作命令
- 事务吧所有的命令作为一个整体一起向系统提交或撤销操作哦请求，即这一组数据库命令要么同时成功，要么同时失败。
- 事务是一个不可分割的工作逻辑单元

## 操作

```sql
# 开启事务
START TRANSACTION || BEGIN
# 提交事务
COMMIT
# 回滚事务
ROLLBACK
```



## 四大特征

- 原子性 ( Atomicity ) — 事务是不可分割的最小操作单位，要么同时成功，要么同时失败
- 一致性 ( Consistency ) — 事务完成时，必须使所有的数据都保持一致状态
- 隔离性 ( Isolation ) — 多个事务之间，操作的可见性
- 持久性 ( Durability ) — 事务一旦 提交完成或回滚，他对数据库中的数据的改变将是永久性的 