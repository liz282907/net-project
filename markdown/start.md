## 报错总结
1，
![](http://i1.buimg.com/567571/3c75b950460690f0.png)
解决：
注意v-link里面的写法，有两种，但千万不能忘了单引号
![](http://i1.buimg.com/567571/700d3c8e8296ef86.png)

2,sass 
安装sass-loader, node-sass

3, vue-resource

- 配置webpack  
```
var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);
```
- 在组件的ready生命周期中进行ajax请求

4, readFileSync 要进行json.parse解析

5,使用组件时需要在外部进行注册
```
//App.js
  components:{
    Card
  },
```

6, 访问属性不要忘了this.....总是记不住...