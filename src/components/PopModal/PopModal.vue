<template>

<div class="modal" v-show="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
        <h4 class="modal-title">{{category}}</h4>
      </div>
      <div class="modal-body">
            <input type="text" class="my-search" placeholder="搜索">
            <table class="my-table">
            <thead>
              <tr><th>关键词</th><th>操作</th></tr>
            </thead>
            <tbody>
                <tr v-for="word in wordList">

                    <td v-if="!word.editing">{{word.content}}</td>
                    <td v-else>
                        <input class="editing-input" type="text"
                            v-model="word.value"
                            @blur="doneEdit($index)"
                            @keyup.13="doneEdit($index)"/>
                    </td>
                    <td>
                        <span class="action" @click="editWord(word)">修改 | </span>
                        <span class="action" @click="removeWord(word)">删除</span>
                    </td>
                </tr>
            </tbody>

            </table>
            <div class="wordList">

            </div>
      </div>
      <div class="modal-footer">
        <ul class="pagination pagination-sm">
            <li class="disabled"><a href="javascrpt:void(0)">&laquo;</a></li>
            <li v-for="value in pageList" class="" @click="clickPage(value)">
                <a href="javascrpt:void(0)">{{value}}</a>
            </li>
            <li><a href="javascrpt:void(0)">...</a></li>
            <li><a href="javascrpt:void(0)">&raquo;</a></li>
        </ul>
        <span class="input-wrapper">转到第
            <input type="number" min="1" :max="totalSize"
                @keyup.13 = "changePage" v-model="toPage"/>/{{totalSize}}页
        </span>

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
      show:true,
      toPage:1,
      pageList:[1,2,3,4,5],
      wordList:["习近平","测试","测试2","测试3","测试21"].map(word=>{
        return {
          editing:false,value:word,content:word
        }
      })
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

    },

    changePage(){

    },

    clickPage(page){

    },

    closeModal(){
        this.show = false;
    },

    removeWord(word){
      this.wordList.$remove(word);
      //delete ajax
    },

    editWord(word){
      word.editing = true;
    },

    doneEdit(index){
        let tempMsg = this.wordList[index].value;
        this.wordList[index].content = tempMsg;
        this.wordList[index].editing = false;
        // word.editing = false;
    },



  }
}
</script>

<style lang="scss">
@import "./PopModal.scss";
</style>
