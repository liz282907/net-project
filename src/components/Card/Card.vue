<template>
        <div class="panel-body" :value="category">
            <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" value="freq" v-model="order" checked @change="fetchServerData"/>
                <label >按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="order"
                    @change="fetchServerData"/>
                <label >按时间</label>
              </div>
            </div>
            <div class="keywords">
                <ul>
                    <li v-for="keyword in wordList" class="tag">
                        <span class="label label-default" >{{keyword}}</span>
                    </li>
                </ul>
                <div class="btn-group">
                  <button class="more" @click="showDetail">查看详情</button>
                  <button class="add" @click="addWord">添加词汇</button>
                </div>

            </div>
            <modal
                :title="title" :show.sync="showModal"
                :word-total-size = "totalSize"
                :word-list = "modalWordList"
                @on-edit-done="handleEditDone"
                @on-word-delete="handleDeleteClick"
                @on-page-click = "handleWordPageClick"
                @on-input-change= "handleModalInput"></modal>
            <dialog :category="category" :topic="topic" :title="title"
                :show.sync="showCreateModal"
                @on-word-create="handleWordCreate"></dialog>


        </div>

</template>

<script>

import {interfaceTransform,wordCount,pageSize} from "../../../Constants/InterfaceConstants.js";
import {server_path} from "../../../Constants/serverUrl.js";

import PopModal from "../PopModal/PopModal";
import PopDialog from "../PopDialog/PopDialog";

let sentWordRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"Card",

  props:["category","title","topic"],

  components:{
    "modal":PopModal,
    "dialog":PopDialog
  },

  data () {

    return {
      order:"freq",
      wordList:[],
      modalWordList:[],
      showModal:false,
      showCreateModal:false,
      totalSize:pageSize,
      sentWordRequest:{"get":null,"update":null,"delete":null,"patch":null}
    }
  },

  ready () {

      this.fetchServerData();

    },


  methods:{


    fetchData(callback,params={}){
      let defaultParams = {
        topic: this.topic,
        pageSize:pageSize,
        pageIndex:1,
        category: this.category,
        orderBy: this.order,
        desc: true
      };
      let data = Object.assign({},defaultParams,params);
      this.$http.get(server_path+"/title",
        {
          params:data,
          before(request){
            // if(this.previousRequest){
            //   this.previousRequest.abort();
            // }
            // this.previousRequest = request;
            if(this.sentWordRequest["get"]){
              console.log("sentRequest",this.sentWordRequest["get"]);
              this.sentWordRequest["get"].abort();
            }
            this.sentWordRequest["get"] =request;
          }
        })
          .then(callback,(err)=>{
              console.log("请求服务器失败");
          });
    },


    // fetchWordData(paramsBody={}){
    //   this.fetchData((response)=>{

    //   },paramsBody);
    //   var finalData = Object.assign({},defaultParams,paramsBody);
    //   this.$http.get(server_path+"/title",
    //     {
    //       params:finalData,
    //       before(request){
    //         // console.log("this ",this.previousRequest,sentRequest["get"]);
    //         if(sentWordRequest["get"]){
    //           sentWordRequest["get"].abort();
    //         }
    //         sentWordRequest["get"] =request;
    //         // this.previousRequest = request;
    //       }
    //     })
    //       .then(callback,(err)=>{
    //           console.log("请求服务器失败");
    //       });
    // },
    //每个card刚出来的时候的数据，同时更新下发词
    fetchServerData(){
        this.fetchData(function(response){

            this.wordList = response.json().wordList;
            var size;
            if(size = response.json().totalSize)
                this.totalSize = size;
            let length = wordCount["downPush words"];
            console.log("--------length",this.wordList.length<length?this.wordList:this.wordList.slice(0,length));

            this.$dispatch("child-wordList",
                {
                  [this.category]:this.wordList.length<length?this.wordList:this.wordList.slice(length)
                })
          });
    },



    handleEditDone(postBody){
      var data = {
        category:this.category,
        action:"patch"
      }
      var finalData = Object.assign({},data,postBody);
       this.$http.post(server_path+"/title",finalData,{
                before(request){
                    console.log("prev word ",this.previousRequest);
                    var prevUpdateRequest = sentWordRequest["update"];
                    if(prevUpdateRequest && (prevUpdateRequest.body.prevWord==request.body.prevWord)){
                        prevUpdateRequest.abort();
                    }
                    sentWordRequest["update"] =request;
                    // this.previousRequest = request;
                }
          }).then(response=>{
            console.log("更新成功");
        },err=> alert("更新失败"))
    },

    handleDeleteClick(postBody){
      var data = {
        category:this.category,
        action:"delete"
      }
      var finalData = Object.assign({},data,postBody);
      this.$http.post(server_path+"/title",finalData)
        .then((response)=>{
              console.log("删除成功");
          },(err)=>{
              alert("删除失败");
          })
    },

    handleModalInput(paramsBody){
        this.fetchData((response)=>{
          console.log("filter成功");
            let data = response.json().wordList;
            //let data = response.json()[interfaceTransform[this.category]];
            this.modalWordList = data.map(word=>{
              return {
                editing:false,value:word,content:word
              }
            });
            this.totalSize = response.json().totalSize;

        },paramsBody);
    },

    handleWordPageClick(params){
      console.log("-----click page ajax");
      this.fetchData((response)=>{

          console.log("获取单词列表成功");
          let data = response.json().wordList;
          this.modalWordList = data.map(word=>{
            return {
              editing:false,value:word,content:word
            }
          });

          var size;
          if(size = response.json().totalSize)
                  this.wordTotalSize = size;


      },params);

    },

    handleWordCreate(word){
      this.$http.post(server_path+"title",
          {
            topic: this.topic,
            category: this.category,
            word:word
          })
            .then(response=>{
                console.log("创建成功");
            },(err)=>{
                console.log("创建失败");
            });
    },

    showDetail(){
      // this.category = this.category;
      this.showModal = true;
      console.log("-------show detail");
      this.handleWordPageClick({pageIndex:1});
      //handlePageClick
    },

    addWord(){
      // this.category = category;
      this.showCreateModal = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Card.scss";
</style>
