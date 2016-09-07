<template>
        <ul class="pagination pagination-sm">
            <li :class="pageList[0]===1?'disabled':''"><a href="javascrpt:void(0)" @click="changePagination(-1)">&laquo;</a></li>
            <li v-for="value in pageList"
                :class="[value===curPage?'active':'',value>totalSize?'disabled':'']"
                @click="clickPage(value)">
                <a href="javascrpt:void(0)">{{value}}</a>
            </li>
            <li><a href="javascrpt:void(0)">...</a></li>
            <li :class="pageList.slice(-1)[0]>=totalSize?'disabled':''"><a href="javascrpt:void(0)" @click="changePagination(1)">&raquo;</a></li>
        </ul>
        <span class="input-wrapper">转到第
            <input type="number" min="1" :max="totalSize" class="page-input"
                @keyup.13 = "changePage" v-model="toPage"/>/{{totalSize}}页
        </span>
</template>

<script>


export default {

  name:"Pagination",

  props:["totalSize"],

  data () {

    return {
      //toPage:1,
      curPage:1,
      pageList:[1,2,3,4,5],
    }
  },

  computed:{

      toPage:{
        get:function(){
          return this.curPage;
        },
        set:function(page){
          this.curPage = page;
        }
      }
  },

  ready () {

    //this.$dispatch("page-ready",1);

    },

  methods:{

    //跳转到某一页
    changePage(){

      let toPage = parseInt(this.toPage);
      if(this.toPage>this.totalSize)
         return
      else if(this.toPage>=(this.totalSize-4)){
        this.pageList = [0,1,2,3,4].map(index=>{return this.totalSize-4+index;});
        this.clickPage(toPage);
      }else{
        this.pageList = [0,1,2,3,4].map(index=>{return toPage+index;});
        this.clickPage(toPage);
      }


    },

    clickPage(page){
      this.curPage = page;
      console.log(" totalSize",this.totalSize);
      console.log("in pagination");
      //this.$dispatch("handlePageClick",page);
      this.$dispatch("page-click",page);
    },

    //左右增加减少页
    changePagination(step){

      //限制
      if(this.pageList.slice(-1)[0]>=this.totalSize)
        return;


      //step:[1,-1]
      if((step===-1 && this.pageList[0]===1)||(step===1 && this.pageList.slice(-1)===this.totalSize))
        return;
      this.pageList = this.pageList.map(page=>{
        return page+step;
      });
      this.clickPage(this.curPage+step);
    },


  }
}
</script>

<style>
.pagination,.input-wrapper{
        display: inline-block;
        vertical-align: middle;
        margin: 0;
    }

.page-input{
  width:40px;
}


</style>
