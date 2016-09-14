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

关键词提取页面接口：

1. 获取其他系统的文章：
```
request:
    URL：<baseurl>/extract
    Method: GET
    Interface:
    {
        topic = "习近平"
        action = "pull"
        timefrom = "2016-09-05 18:00:00"
        timeto = "2016-09-06 18:00:00"
    }   

response:
    [
        {
            system : "yzlj"
            titles : ["title_A1", "title_A2", "title_A3", ...]
        }，
        {
            system : "zzyh"
            titles : ["title_B1", "title_B2", "title_B3", ...]
        }
        ...
    ]
    
```

2. 获取文章的具体内容：

```
request:
    URL: <baseurl>/extract
    Method: GET
    Interface:
    {
        action : "detail"
        title : "XXX"
    }
    
response:
    {
        title : "XXX"
        content : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
    
    
```

3. 关键词抽取请求：

```
request：
    URL：<baseurl>/extract
    Method: post
    Interface:
    {
        action : "extract"
        title : "习近平会见中外记者：提高世界经济抗风险能力"
        content : "人民日报全媒体平台杭州9月5日电 5日，二十国集团领导人第十一次峰会闭幕后，国家主席习近平在杭州国际博览中心会见中外记者。"
    }
    
response:
    {
        wordList : [ "word1", "word2", "word3", ....]
    }
```
4. 其他的一些接口，例如添加事件，导入词到本地库，都可以调用以前定义的接口




希望可以改动的部分：
1，
url语义化...这一页貌似接口都是/extract =。= 
可以考虑：
/extract/papers
 /extract/:paperId/content
 /extract/:paperId/words