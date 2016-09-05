<template>
  <div class="container">
      <header class="header-wrapper navbar navbar-default">
       <div class="left">
            <div class="logo navbar-header">
              <span class="navbar-brand">关键词</span>
            </div>
            <ul class="nav navbar-nav">
                <li v-for="navItem in navList"
                    :class="$index===curIndex?'active':'' "
                    @click="changeActive($index)">
                  <a v-link=" navItem.url " >{{navItem.name}}</a>
                </li>
            </ul>
       </div>
         <div class="right">
            <ul class="dropdown-menu">
                <li><a href="#">管理用户：{{curUser}}</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">退出</a></li>
            </ul>
         </div>
    </header>
  <div class="content">
          <h4>主题词：{{topic}}</h4>
          <router-view></router-view>
  </div>
    <footer class="footer">
    <p><a href="#">联系我们</a> | <a href="#">帮助中心</a></p>
    <p>中共中央网络和信息化领导小组办公室 & 中华人民共和国国家互联网信息办公室 版权所有</p>
    <p>承建：中国科学院信息与工程研究所 2016.04</p>
  </footer>
  </div>





</template>

<script>


export default {
  replace: false,          //防止组件在没有el元素的时候替换el，而不是在el内部渲染

  data(){
    return {
        navList:[
          {name:"称谓词",url:"/title"},
          {name:"事件词",url:"/event"},
          {name:"组合词",url:"/combination"},
          {name:"命中率统计",url:"/hitRate"},
        ],
        curIndex:0,
        curUser:"陈璐",
        topic:"习近平"
    }
  },
  methods:{
    changeActive(index){
      this.curIndex = index;
    }
  },

}
</script>

<style lang="scss">
@import "/static/libs/bootstrap.min.css";
@import "./assets/stylesheets/reset.scss";
@import "./assets/stylesheets/util.scss";

html {
  height: 100%;
}

body {
  display: flex;

  justify-content: center;
  height: 100%;
  width:100%;
}
.container {
  width:80%;
  margin:0 auto;
}
.header-wrapper {
  width:100%;
  margin:0 auto;
}
.content {
  width:100%;
  margin:0 auto;
  min-height:450px;
}
.footer{
  margin-top:30px;
  text-align:center;
}

</style>
