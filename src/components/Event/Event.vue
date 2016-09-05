<template>
    <ul class="my-tab clearfix">
      <li :class="['tab-item',isA?'tab-active':''] " @click="toggleAcitive('A')"><a v-link=" '/event/list' " >信息列表</a></li>
      <li :class="['tab-item',!isA?'tab-active':''] "  @click="toggleAcitive('B')"><a v-link=" '/event/create' ">创建事件</a></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>



</template>

<script>

// import Dropdown from "../Dropdown/Dropdown";

export default {
  data () {
    return {
      topic: this.$parent.topic,
      isA:true
    }
  },

  methods:{
    toggleAcitive(choice){
      console.log("choice---",choice);
      this.isA = (choice=='A'?true:false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/stylesheets/variables.scss";
@import "../../assets/stylesheets/reset.scss";
a{

    font-weight: bold;
    &:hover,&:active{
        color:$base-color;
    }

}
.my-tab{
    margin: 0 auto;
    padding-top: 30px;
    .tab-item{
        float: left;
        padding: 12px 30px;
        cursor: pointer;
    }
}
.tab-active{
    a{color:$base-color;}
    border-bottom:3px solid $base-color;
}

</style>
