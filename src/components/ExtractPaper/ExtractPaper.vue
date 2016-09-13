<template>
  <div class="mycontainer clearfix">
      <ul class="my-left">
          <li :class="['has-sub', paperPackage===curPackage?'open':'' ]"
            v-for="paperPackage in paperPackages"
            @click="toggleOpen(paperPackage)">
             <a class="has-sub-li" tabindex="1">{{paperPackage.system}}</a>
              <ul class="sub-menu">
                <li v-for="title in paperPackage.titles" @click.prevent.stop="choosePaper(title)">
                    <a v-show="title==(curPaper.title)"  href="javascript:void(0)"
                    class="chosen-tick">{{title}}<i >&#10003</i>
                    </a>
                    <a v-else href="javascript:void(0)">{{title}}</a>
                </li>
              </ul>
          </li>
      </ul>
      <div class="my-right">
          <div class="content-body clearfix">
              <h4>文章内容</h4>
              <p>{{curPaper.content}}</p>
              <button @click="extractWords" class="extract-btn">抽取</button>
          </div>
          <div class="content-words">
              <div class="table-wrapper">
                  <table class="my-table">
                      <thead>
                        <tr>
                            <th><input type="checkbox" v-model="chooseAll"/>全选</th><th>关联词汇</th></tr>
                      </thead>
                      <tbody>
                          <tr v-for="word in wordList">
                            <td >
                              <input type="checkbox" v-model="word.checked"/>
                            </td>
                              <td>{{word.word}}
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="content-export">
              <div class="export-choice">
                  <div class="custom-select" v-show="EventExists">
                        <input type="text" class="select-input" v-model="searchEvent" placeholder="请输入事件名称"
                          @focus="showDropdown" @change="filterEvents"
                          {{EventExists?'':'disabled'}}/>

                        <div class="selection-wrapper clearfix" v-show="isSelectShown">
                            <ul class="selection">
                                <li v-for="event in eventList" class="select-item">
                                    <input type="radio" :value="event.id" :id="event.name" v-model="chosenEvent" />
                                    <label :for="event.name">{{event.name}}</label>
                                </li>
                            </ul>
                            <div class="pagination-wrapper">
                                <pagination :total-size="totalSize" @page-click="handlePageClick"></pagination>
                            </div>
                            <div class="divider"></div>
                            <button class="create-btn"></button>

                        </div>

                  </div>
                  <button class="create-btn" @click="createEvent">+新建事件</button>
                  <div class="create-event-control" v-show="!EventExists">
                      <input type="text" class="select-input" v-model="newEventName" placeholder="事件名"
                      />
                      <select class="select" id="select" v-model="option">
                          <option v-for="eventType in eventTypeList" :value="eventType.id" >
                              {{eventType.name}}
                          </option>
                      </select>
                  </div>
                  <button style="float:right" @click="cancelCreate" v-show="!EventExists">取消</button>


              </div>
              <button class="export-btn" @click="exportWords">导出</button>

          </div>
      </div>

  </div>


</template>

<script>
import Pagination from "../Pagination/pagination";


import {server_path} from "../../../Constants/serverUrl.js";
import {pageSize,eventTypeList} from "../../../Constants/InterfaceConstants.js";


var paperDict = {};
var getPaperRequest,getEventRequest;


export default {

  data () {

    return {
      paperPackages:[],
      curPackage:{},
      curPaper:{title:"",content:""},
      wordList:[],
      EventExists: true,
      searchEvent:"",
      eventList:[],
      chosenEvent:-1,

      totalSize:0,
      isSelectShown:false,
      newEventName:"",
      eventTypeList:eventTypeList.slice(1),
      option:1

    }
  },

  computed:{
    chooseAll:{
      get:function(){
        return this.wordList.every(word=>{
          return word.checked;
        });
      },
      set:function(value){
        // this.wordList
        this.wordList.forEach(word=>{
          word.checked = value;
        })
      }
    },
    // chosenEvent:function(){
    //   return eventList.filter(event=>{
    //     return event.chosen;
    //   })[0];
    // }
  },

  components:{
    "pagination":Pagination
  },

  ready () {
    this.fetchTitle();
    this.fetchEvent(1);


    },

  methods:{

    fetchEvent(pageIndex,filter=""){
      let defaultParams = {
        topic:this.$parent.topic,
        pageSize:6,           //
        pageIndex:pageIndex,
        orderBy: "freq",
        desc: true,
        filter:""
      };
      this.$http.get(server_path+"/event",
        {
          params:defaultParams,
          before(request){
            if(getEventRequest)
              getEventRequest.abort();
            getEventRequest = request;
          }
        })
          .then((response)=>{
            this.eventList = response.json().eventList;
            this.totalSize = response.json().totalSize;
          },(err)=>{
              console.log("请求服务器失败");
          });
    },
    fetchTitle(){
      this.$http.get(server_path+"/extract",{
        params:{
          topic:this.$parent.topic,
          action:"pull"
        }
      })
          .then((response)=>{
            this.paperPackages = response.json();
            console.log("获取列表成功");
          },(err)=>{
            console.log("获取列表失败");
          })
    },

    //有可能在hover部分
    fetchPaper(title){
      this.$http.post(server_path+"/extract",{
          action:"detail",
          title:title
      })
          .then(function(response){
            //loading 层
              paperDict[title] = response.json().content;
              this.curPaper.content = paperDict[title];
              console.log("获取页面内容成功");
          },function(err){
              console.log("获取页面内容失败");
          })
    },


    //click事件
    choosePaper(title){
      this.curPaper.title = title;

      if(!paperDict[title]){
        this.fetchPaper(title);
      }
      else
        this.curPaper.content = paperDict[title];
        // this.curPaper = {"title":title,"content":paperDict[title]};
    },

    toggleOpen(paperPackage){
      if(this.curPackage === paperPackage)
        this.curPackage = {};
      else
        this.curPackage = paperPackage;
    },

    extractWords(){
      this.$http.get(server_path+"/paper/words")
          .then((response)=>{
            this.wordList = response.json().wordList.map(word=>{
              return {
                word:word,
                checked:false
              }
            });
            console.log("获取列表成功");
          },(err)=>{
            console.log("获取列表失败");
          })
    },
    showDropdown(){
      this.isSelectShown = true;
    },

    toggleDropdown(){
      this.isSelectShown = !this.isSelectShown;
    },

    filterEvents(){
      this.fetchEvent(1,this.searchEvent);
    },

    handlePageClick(page){
      this.fetchEvent(page);
    },

    createEvent(){
      this.EventExists = false;
      //ajax部分
    },
    cancelCreate(){
      this.EventExists = true;
    },
    exportWords(){

      var sendData = this.wordList
                            .filter(word=>{return word.checked})
                            .map(word=>word.word).join(",");


      if(this.EventExists){
        //事件存在，添加词汇
        this.$http.post(server_path+"/event/word",
          {
            topic: this.$parent.topic,
            id:this.chosenEvent,
            word:sendData
          })
            .then(response=>{
                console.log("事件词入库成功");
            },(err)=>{
                console.log("事件词入库成功");
            });

      }else{
          this.$http.post(server_path+"/event",{
            name:this.newEventName,
            category: this.option ,
            wordList: sendData
          }).then((response)=>{
              console.log("抽取的事件词入库成功");
          },(err)=>{
              console.log("抽取的事件词入库成功");
          });

      }


    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./ExtractPaper.scss";

</style>
