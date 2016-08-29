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