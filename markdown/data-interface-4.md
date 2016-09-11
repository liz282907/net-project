## 网信办项目数据接口（事件词抽取页面）

>author: @luchen

>email: chenlu.seu@gmail.com


### 一、接口说明

该页面的接口主要包括两类，一个是事件的获取及创建，一个是事件词的增删改。

### 二、详细数据接口：数据来源获取

#### **paper的获取(get)**

#### request
```
(1)事件列表
url: yoursite.com/#!/paper
method: "get"
```
补充说明：


#### response

```
[
    {
        "source":"预制拦截",
        "paperList":[
            {"title":"文章一","sourcesite":,"content":"..."},
            {}
            ...
        ]
    },
    {
        "source":"不忘初心",
        "paperList":[
            {"title":"文章一","sourcesite":,"content":"..."},
            {}
            ...
        ]
    },
    ...
]

```



#### **文章关键词的获取(get)**

#### request
```
(1)列表
url: yoursite.com/#!/paper/words
method: "post"     ??文章数目，4000chars内？
request body:{
     
}
```


### 三、详细数据接口：part2:某个事件的某个词的增删改查

#### 更新（update）


需要取消上一个同名的请求

**request**

```
url: yoursite.com/#!/event/word
method: "post"
request body:{
    id: 1                     //事件id

    category:1,               //事件类型      //??这个字段需要加吗，不同类型的词会重复么？

    prevWord:"习大大",
    newWord:"习近平", 
    action:"patch"  
}
```


#### 查询（update）


需要取消上一个同名的请求

**request**

```
url: yoursite.com/#!/event/word
method: "get"
request body:{
    id: 1                     //事件id
    category:1,               //事件类型    
    pageIndex: 1, 
    pageSize:50
}
```

**response**

```
{
    [totalSize]: 30//当pageIndex=1时返回,可选项
    [ "联合国祝寿","送生日祝福",...]
}
```

#### 增（create）

**request**

```
url: yoursite.com/#!/event/word
method: "post"
request body:{
    id: 1,
    category:1,               //事件类型
    word:"习近平",    
}
```

#### 删（create）

**request**

```
url: yoursite.com/#!/event/word
method: "post"
request body:{
    id: 1,
    category:1,     //跟上面一样的问题，该字段是否要加           
    word:"习近平",  
    action:"delete"
}
```

【注】：post包括：增删改，action没有时默认为create，新增词汇





### 四、补充接口，主题词

**request**

```
url: yoursite.com/#!/theme
method: "get"
```

```
["习近平",""...]
```



update:

1，事件列表获取 totalSize，形如
```

"eventList":              //here
[
    {
        "id": 1,            //事件id
        "name":"江泽民祝寿事件",
        "wordList":["联合国祝寿","送生日祝福"...]      
        //wordLis的length等于request中的wordSize
    },
    {
         "id": 2,           
        "name":"事件2",
        "wordList":["联合国祝寿","送生日祝福"...]
    },
    ...
],
totalSize:10                 //here

```

2，每个请求都添加一个topic字段。


### todo:

1. delete接口请求       更改请求内容
2. topic =?           done
3. hitrate pagination 请求没有发送。 done，待检测
4. table scroll取消       done
5. totalSize没显示           done,没有在data中声明
6. title页面的popmodal 中把原有的pagination代码用 pagination组件替换   done
7. filter的时候将pagination切换到第一页，
8. click的时候将那个右边的输入框用计算属性             done
9. event 中curId,curEvent合并，成一个curEvent data
10. 分页数字列表小于 totalSize的时候禁用   done      
11. 事件词 分类+all           done
12.  组合词格式               done
13.  低危词数目不对           done
14.  计算所格式 分栏          half done，无法blur还原
15.  组合词添加 多次触发
16.  繁体                     
17.  事件词 pageSize id 应该是事件类型的id   done

---

新需求
todo 当没有一个选中时,pop,或者shake


### to solve:
1，模块合并的时候变量冲突？ajax sentRequest?
2, 模块合并的时候css 冲突？vue中可以通过scope去进行处理，但是其他呢，react中好像没有遇到这种问题

