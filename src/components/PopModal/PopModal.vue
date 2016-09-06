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
          <pagination :total-size="wordTotalSize" @page-click="handlePageClick"></pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {interfaceTransform,pageSize} from "../../../Constants/InterfaceConstants.js";
import {server_path} from "../../../Constants/serverUrl.js";
import Pagination from "../Pagination/pagination";



let sentRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"PopModal",

  props:["title","show","wordTotalSize",
  "wordList"],

  data () {

    return {
      toPage:1,
      curPage:1,
      searchContent:"",
      pageList:[1,2,3,4,5],
      totalSize:"",
    }
  },

  ready () {
      //this.handlePageClick(1);
    },

  components:{
    "pagination":Pagination
  },

  methods:{

    getfilteredWord(){
        //searchContent
        console.log("----------on change ",this.searchContent);
        let sentData = {
          filter:this.searchContent
        };

        this.$dispatch("on-input-change",sentData);
    },


    handlePageClick(page){
      let data = {pageIndex:page,filter:this.searchContent};
      this.$dispatch("on-page-click",data);
    },

    //deprecated
    changePage(){

      let toPage = parseInt(this.toPage);
      this.pageList = [0,1,2,3,4].map(index=>{return toPage+index;});
      this.curPage = toPage;
      this.clickPage(toPage);
    },

    closeModal(){
        this.show = false;
    },

    removeWord(word){
      this.wordList.$remove(word);
      var postBody = {
              word:word.content,
          };
      this.$dispatch("on-word-delete",postBody);
    },

    editWord(word){
      word.editing = true;
    },

    updateWord(prevWord,newWord){

        var requestBody = {
            prevWord:prevWord,
            newWord:newWord,
        };

        this.$dispatch("on-edit-done",requestBody);
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

<style lang="scss" scoped>
@import "./PopModal.scss";
</style>
