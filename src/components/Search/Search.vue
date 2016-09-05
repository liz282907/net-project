<template>
       <div class="search-box">
              <img src="../../assets/images/search.png" alt="search图标"/>
              <input type="text"  :placeholder="placeholder" class="search-input" v-model="searchContent" @change="onchangeEvent">
          </div>
</template>

<script>


export default {

  name:"Search",

  props:["placeholder"],

  data () {

    return {
      searchContent:""
    }
  },

  methods:{
    "onchangeEvent":function(){
        this.$dispatch("child-search-change",this.searchContent);
    }
  }

}
</script>

<style lang="scss">
.search-box{
    float:left;
    display:inline-block;
    .search-input{
        margin: 0 10px;
        padding-left:10px;
        font-size:12px;
    }
}
</style>
