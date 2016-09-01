<template>

<div class="modal" v-show="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
            <input type="text" class="my-search" placeholder="搜索"
                @change="getfilteredWord" v-model="searchContent">
            <div class="table-wrapper">
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
            </div>

            <div class="wordList">

            </div>
      </div>
      <div class="modal-footer">
        <ul class="pagination pagination-sm">
            <li class="pageList[0]===1?'disabled':''"><a href="javascrpt:void(0)" @click="changePagination(-1)">&laquo;</a></li>
            <li v-for="value in pageList" :class="value===curPage?'active':''" @click="clickPage(value)">
                <a href="javascrpt:void(0)">{{value}}</a>
            </li>
            <li><a href="javascrpt:void(0)">...</a></li>
            <li><a href="javascrpt:void(0)" @click="changePagination(1)">&raquo;</a></li>
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

let sentRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"PopModal",

  props:["category","title","order","show"],

  data () {

    return {
      // show:show||false,
      toPage:1,
      curPage:1,
      searchContent:"",
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
      this.clickPage(1);
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
            // console.log("this ",this.previousRequest,sentRequest["get"]);
            if(sentRequest["get"]){
              sentRequest["get"].abort();
            }
            sentRequest["get"] =request;
            // this.previousRequest = request;
          }
        })
          .then(callback,(err)=>{
              console.log("请求服务器失败");
          });
    },

    addWord(){

    },

    getfilteredWord(){
        //searchContent
        console.log("----------on change ",this.searchContent);
        this.fetchData({
          filter: this.searchContent
        },(response)=>{
            let data = response.json()[interfaceTransform[this.category]];
            this.wordList = data.map(word=>{
              return {
                editing:false,value:word,content:word
              }
            });
        });
    },

    changePage(){

      let toPage = parseInt(this.toPage);
      this.pageList = [0,1,2,3,4].map(index=>{return toPage+index;});
      this.curPage = toPage;
      this.clickPage(toPage);
    },

    clickPage(page){
      this.curPage = page;
      //ajax
      this.fetchData({pageIndex:page,filter:this.searchContent},(response)=>{
        let data = response.json()[interfaceTransform[this.category]];
        this.wordList = data.map(word=>{
          return {
            editing:false,value:word,content:word
          }
        });

        let size;
        if(size = response.json().totalSize)
                this.totalSize = size;


      });
    },

    changePagination(step){
      //step:[1,-1]
      if((step===-1 && this.pageList[0]===1)||(step===1 && this.pageList.slice(-1)===this.totalSize))
        return;
      this.pageList = this.pageList.map(page=>{
        return page+step;
      });
      this.clickPage(this.curPage+step);
    },

    closeModal(){
        this.show = false;
    },

    removeWord(word){
      this.wordList.$remove(word);
      this.$http.post("/title",
          {
              category:this.category,
              word:word,
              action:"delete"
          }).then((response)=>{
              console.log("删除成功");
          },(err)=>{
              alert("删除失败");
          })
      //delete ajax
    },

    editWord(word){
      word.editing = true;
    },

    updateWord(prevWord,newWord){
        this.$http.post("/title",{
          category:this.category,
          prevWord:prevWord,
          newWord:newWord,
          action:"patch"
        },{
                before(request){
                    console.log("prev word ",this.previousRequest);
                    // if(this.previousRequest&& (this.previousRequest.body.prevWord==request.body.prevWord)){
                    //     this.previousRequest.abort();
                    // }
                    var prevUpdateRequest = sentRequest["update"];
                    if(prevUpdateRequest && (prevUpdateRequest.body.prevWord==request.body.prevWord)){
                        prevUpdateRequest.abort();
                    }
                    sentRequest["update"] =request;
                    // this.previousRequest = request;
                }
          }).then(response=>{
            console.log("更新成功");
        },err=> alert("更新失败"))
    },

    doneEdit(index){
        let prevWord = this.wordList[index].content;
        let tempMsg = this.wordList[index].value;
        this.wordList[index].content = tempMsg;
        this.wordList[index].editing = false;
        // word.editing = false;
        this.updateWord(prevWord,tempMsg);
    },



  }
}
</script>

<style lang="scss">
@import "./PopModal.scss";
</style>
