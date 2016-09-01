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
          <router-view></router-view>
      </div>
  </div>



</template>

<script>


export default {
  replace: false,

  data(){
    return {
        navList:[
          {name:"称谓词",url:"/title"},
          {name:"事件词",url:"/event"},
          {name:"组合词",url:"/combination"},
          {name:"命中率统计",url:"/hitRate"},
        ],
        curIndex:0,
        curUser:"陈璐"
    }
  },
  methods:{
    changeActive(index){
      this.curIndex = index;
    }
  }


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
}

</style>
