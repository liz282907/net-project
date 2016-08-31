<template>

<div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">{{category}}</h4>
      </div>
      <div class="modal-body">
            <input type="text" class="search" placeholder="搜索">
            <table class="my-table">
            <thead>
              <tr><th>关键词</th><th>操作</th></tr>
            </thead>
            <tbody>
                <tr v-for="word in wordList">
                    <td>{{word}}</td>
                    <td>
                        <span class="edit">修改 | </span>
                        <span class="edit">删除</span>
                    </td>
                </tr>
            </tbody>

            </table>
            <div class="wordList">

            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {interfaceTransform,pageSize} from "../../../Constants/InterfaceConstants.js";


export default {

  name:"PopModal",

  props:["category","order"],

  data () {

    return {
      wordList:["习近平","测试","测试2","测试3","测试21"]
    }
  },

  ready () {

      let params = {
        category:this.category,
        order:this.order
      };
      // this.fetchData(params,function(response){
      //   let data = response.json();
      //   let category = interfaceTransform[this.category];

      //   this.wordList = data[category];
      // });


    },

  methods:{


    fetchData(params={},callback){
      let defaultParams = {
        pageSize:pageSize,
        pageIndex:1,
        category: this.category,
        orderBy: this.order,
        desc: true
      };
      let data = Object.assign({},defaultParams,params);
      this.$http.get("/title",
        {
          params:data,
          before(request){
            console.log("this ",this.previousRequest);
            if(this.previousRequest){
              this.previousRequest.abort();
            }
            this.previousRequest = request;
          }
        })
          .then(callback,(err)=>{
              console.log("请求服务器失败");
          });
    },

    addWord(){

    }
  }
}
</script>

<style lang="scss">
@import "./PopModal.scss";
</style>
