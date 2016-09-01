## 网信办项目数据接口（称谓词页面）

>author: @luchen

>email: chenlu.seu@gmail.com

### 一、流程说明
这部分的接口主要有两个部分（不考虑敏感词汇那个接口的话）。

part1:

- 一进入页面，会请求**禁发**，**审核**，**低危**三部分的各pageSize个词汇（默认按热度）。
- 每次点击 热度、按时间，也是发送的ajax请求
- 点击查看详情，弹窗中分页展示，每次点击某一页，会发请求得到该页的数据。
每页的个数会用pageSize传过去决定（需要注意的是，每页的数据受搜索框数据限制）。弹窗中有搜索框，每次实时请求后端返回数据（如搜 习 的时候，需要返回包括 习 的所有词汇，排序后端处理，越相关，排序越前）。

**以上三部分公用接口**。

---
part2:

当搜索后定位到某一个具体的词汇时，可以进行修改、删除操作（wordId？），点击 “增加” ，可以增加词汇。


**最近一段时间的高危敏感词***,这部分接口？

---

### 二、详细数据接口：part1
页面一加载时的ajax请求(get)+ 详情页的分页数据 共用接口

#### request
```
(1)禁发词|审核|低危，
url: yoursite.com/#!/title
method: "get"
params:{
    pageSize:50,
    pageIndex:1,
    category:"forbidden words"|"check words"|"low danger",
    orderBy: "freq" |"date",   //选项：按频率|按时间
    desc: true,
    [filter:""]           //可选项         
}
```
补充说明：

（1）category：

- forbidden words  对应于禁发词
- check words   审核词
- low danger 低危词

（2）filter
该字段有两种情形，如果params里面没有写，表明不做筛选，如果有该字段，表明需要后端筛选出包含该词的词列表

#### response
以禁发词为例
```
{
    "forbiddenWords":["习庆丰","刁近平","洗净瓶"...]
}
```
【注意】：

1, 这些词是在数据库中唯一存在的吗？如果是，则直接返回[]数组即可，如果不是需要同时返回id,以便对词进行更改的时候进行区分。
即形如
```
[{"value":"习庆丰","id":30} ,
{"value":"刁近平","id":6},
{"value":"洗净瓶","id":15}]
```

2, key值说明

- 禁发词对应于："forbiddenWords",
- 审核词："auditedWords",
- 低危词："lowDangerWords"

### 三、详细数据接口：part2

词的增删改

#### 更新（update）

需要取消上一个同名的请求

**request**

```
url: yoursite.com/#!/title
method: "post"
request body:{
    category:"forbidden words"|"check words"|"low danger",
    [id：6,]//若词本身唯一，则该字段可不加
    prevWord:"习大大",
    newWord:"习近平", 
    action:"patch"  
}
```

#### 增（create）

**request**

```
url: yoursite.com/#!/title
method: "post"
request body:{
    category:"forbidden words"|"check words"|"low danger",
    word:"习近平",    
}
```

#### 删（create）

**request**

```
url: yoursite.com/#!/title
method: "post"
request body:{
    category:"forbidden words"|"check words"|"low danger",
    word:"习近平"  //此处同上，id的问题   ,
    action:"delete"
}
```

【注】：post包括：增删改，action没有时默认为create，新增词汇



---
update:
1. part1接口中，当pageIndex=1时，response需要加一个字段：
```
totalSize:       //即总页数
```




