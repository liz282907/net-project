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
          <pagination :total-size="totalSize" @page-click="handlePageClick"></pagination>
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

  props:["category","title","order","show","topic","url"],

  data () {

    return {
      // show:show||false,
      toPage:1,
      curPage:1,
      searchContent:"",
      pageList:[1,2,3,4,5],
      totalSize:"",
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
      this.handlePageClick(1);
      //this.clickPage(1);
      // this.fetchData(params,function(response){
      //   let data = response.json();
      //   let category = interfaceTransform[this.category];

      //   this.wordList = data[category];
      // });


    },

  components:{
    "pagination":Pagination
  },

  methods:{


    fetchData(params={},callback){
      console.log("---------in pop modal",this.topic);
      let defaultParams = {
        topic: this.topic,
        pageSize:pageSize,
        pageIndex:1,
        category: this.category,
        orderBy: this.order,
        desc: true
      };
      let data = Object.assign({},defaultParams,params);

      this.$http.get(this.url,
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


    handlePageClick(page){
      this.fetchData({pageIndex:page,filter:this.searchContent},(response)=>{

        console.log("-----click page ajax");
        //let data = response.json().wordList[interfaceTransform[this.category]];
        let data = response.json().wordList;
        this.wordList = data.map(word=>{
          return {
            editing:false,value:word,content:word
          }
        });

        var size;
        if(size = response.json().totalSize)
                this.totalSize = size;


      });
    },

    //deprecated
    changePage(){

      let toPage = parseInt(this.toPage);
      this.pageList = [0,1,2,3,4].map(index=>{return toPage+index;});
      this.curPage = toPage;
      this.clickPage(toPage);
    },

    //deprecated
    clickPage(page){
      this.curPage = page;
      //ajax
      this.fetchData({pageIndex:page,filter:this.searchContent},(response)=>{

        console.log("-----click page ajax");
        //let data = response.json().wordList[interfaceTransform[this.category]];
        let data = response.json().wordList;
        this.wordList = data.map(word=>{
          return {
            editing:false,value:word,content:word
          }
        });

        var size;
        if(size = response.json().totalSize)
                this.totalSize = size;


      });
    },

    //deprecated
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
      this.$http.post(this.url,
          {
              topic: this.topic,
              category:this.category,
              word:word.content,
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
        this.$http.post(this.url,{
          topic: this.topic,
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

<style lang="scss" scoped>
@import "./PopModal.scss";
</style>
