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

7,props需要注册,component也要注册

8. A组件，B组件都引入到组件C中，但是A,B都有同样的样式.class name，那么会冲突，因此需要用scope 去进行限制，而且需要注意的是在style里面进行 import，scope是不起作用的。只能inline css
```
<style lang="scss" scoped>

.modal{
    display: block;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(11, 11, 11, 0.6);
    .action{
        cursor: pointer;
    }
}
.modal-dialog{
    max-width: 30%;
}
</style>
```

