## 网信办项目数据接口（组合词页面）+命中率统计页面

>author: @luchen

>email: chenlu.seu@gmail.com



### 一、详细数据接口：组合词页面
页面一加载时的称谓词获取

#### request
```
url: yoursite.com/#!/combination
method: "get"
params:{
    category:"称谓词"|"事件词"
    size:20,      //每个一级菜单的子词汇最多只显示size个
    [filter:""]           //可选项         
}
```

**补充说明**：

filter
该字段有两种情形，如果params里面没有写，表明不做筛选，如果有该字段，表明需要后端筛选出包含该词的词列表

#### response
```
[
    {
        "name":"低危词",
        "value":["习近平","习大大"]
    },
    {
        "name":"审核词",
        "value":["习近平","习大大"]
    },
    {
        "name":"禁发词",
        "value":["习近平","习大大"]
    }
]
```

说明：
name即对应于一级菜单的名称，比如事件名等。
value对应于二级菜单下面的各个词。

### 二、详细数据接口：命中率页面

#### request
```
url: yoursite.com/#!/hitRate
method: "get"
params:{
    //size:20,      //每个一级菜单的子词汇最多只显示size个
    pageSize:50,
    pageIndex:1,
    orderBy: "freq" |"date"|"hitRate"|"sensitivity"|"all",   
    //选项：按热度|按时间|按命中率|按敏感度|综合排序
    desc: true,
    range: "title"|"combination"|"event"|"all" 
    //查看范围：称谓词|组合词|事件词|综合
    [filter:""]         //可选项   

}
```

**补充说明**：

1. filter
该字段有两种情形，如果params里面没有写，表明不做筛选，如果有该字段，表明需要后端筛选出包含该词的词列表。
可能的筛选范围包括：
    + 称谓词(title)
    + 事件词(event)
    + 组合词(combination)

2. 排序方式（见上）

#### response
```
"totalSize":10,
"wordList":[
    {
        "id":             //序号
        "name":"低危词",   //关键词
        "sensitivity":,   //敏感度
        "searchNum":,    //搜索量
        "hitNum":,      //命中数
        "hitRate":,     //命中率
        "trend":,       //热度趋势
        "date":,        //时间
        "event":,       //相关时间
        "route":        //传播路径及原文查看
    },
    {
        "id":             //序号
        "name":"低危词",   //关键词
        "sensitivity":,   //敏感度
        "searchNum":,    //搜索量
        "hitNum":,      //命中数
        "hitRate":,     //命中率
        "trend":,       //热度趋势
        "date":,        //时间
        "event":,       //相关时间
        "route":        //传播路径及原文查看
    },
    ...
]
```



update:
1.命中率接口 ，去除size字段
2, filter字段没有或者为""，都表示不匹配，全展示
3, 命中率response接口更改