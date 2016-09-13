<template>

    <div class="form-box clearfix">
          <div class="dropdown form-item">
              <label>搜索事件类型</label>
              <select class="select" id="select" v-model="option" @change="changeOption">
                  <option v-for="eventType in eventTypeList" :value="eventType.id" >
                      {{eventType.name}}
                  </option>
              </select>
          </div>

        <div class="filter-radios form-item">
            <label>排序方式：</label>
            <div class="radio-item">
              <input type="radio" value="freq" v-model="order" checked @change="changeOption"/>
              <label >按热度</label>
            </div>

            <div class="radio-item">
              <input type="radio" value="date" v-model="order" @change="changeOption"/>
              <label >按时间</label>
            </div>
        </div>
        <div class="search-wrapper form-item">
          	<search placeholder="搜索" @child-search-change='changeOption'></search>
        </div>
        <div class="togglebtn-wrapper">
	    	<togglebtn @toggle-edit="toggleTableToEdit" ></togglebtn>
	    	<button v-show="isEditing" class="export" @click="exportWords">导出</button>
	    </div>

    </div>

    <div class="table-wrapper">
            <table class="my-table">
                <thead>
                  <tr><th>序号</th><th>事件名称</th><th>关联词汇</th></tr>
                </thead>
                <tbody>
                    <tr v-for="event in eventList">
                    	<td v-show="!isEditing"">{{$index+1}}</td>
                    	<td v-else>
                    		<input type="checkbox" :value="event.id" v-model="chosenEvents"/>
                    	</td>
                        <td>{{event.name}}
                        </td>
                        <td>
                        	<ul>
			                    <li v-for="keyword in event.wordList" class="tag">
			                        <span class="label label-default" >{{keyword}}</span>
			                    </li>
			                </ul>
			                <div class="btn-group">
				                  <button class="more" @click="showDetail(event)">查看详情</button>
				                  <button class="add" @click="addWord(event)">添加词汇</button>
			                </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <div class="pagination-wrapper">
		<pagination :total-size="totalSize" @page-click="handlePageClick"></pagination>
    </div>

    <modal :title="curEvent" :show.sync="showModal"
    		:word-total-size = "wordTotalSize"
    		:word-list = "wordList"
    		@on-edit-done="handleEditDone"
    		@on-word-delete="handleDeleteClick"
    		@on-page-click = "handleWordPageClick"
    		@on-input-change= "handleModalInput"></modal>
    <dialog :category="category" :title="curEvent"
    		:show.sync="showCreateModal"
    		@on-word-create="handleWordCreate"></dialog>
    <exportbox title="导出事件词"
      :word-list= "eventWordList"
      :show.sync="showExportBox"
      :package-list.sync = "packageList"
      @export-to-sys = "exportToSys"></exportbox>



</template>


<script>
import Search from "../Search/Search";
import Pagination from "../Pagination/pagination";
import PopModal from "../PopModal/PopModal";
import PopDialog from "../PopDialog/PopDialog";
import ToggleButton from "../ToggleButton/ToggleButton";
import ExportBox from "../ExportBox/ExportBox";

import {server_path} from "../../../Constants/serverUrl.js";
import {eventTypeList,pageSize,wordSize} from "../../../Constants/InterfaceConstants.js";
import {isArrEqual} from "../../utils/util.js";

let sentWordRequest = {"get":null,"update":null,"delete":null,"patch":null};
let lastChosenEvents = [];

export default {
  data () {
    return {
      topic: this.$parent.topic,
      eventTypeList:eventTypeList,
      order:"freq",
      option:0,
      eventList:[],
      totalSize:0,
      showModal:false,
      showCreateModal:false,
      showExportBox:false,
      wordTotalSize:0,
      wordList:[],
      curId:1,
      curEvent:"",
      isEditing:false,
      chosenEvents:[],
      eventWordList:[],
      packageList:[]
    }
  },
  components:{
    "search":Search,
    "pagination":Pagination,
    "modal":PopModal,
    "dialog":PopDialog,
    "togglebtn":ToggleButton,
    "exportbox":ExportBox
  },
  ready(){
  		this.fetchData((response)=>{
  			console.log("获取事件列表成功");
  			this.eventList = response.json().eventList;
  			this.totalSize = response.json().totalSize;
        this.fetchPackageData();
  		});

  },

  // events:{
  // 	"onSearchChange":function(searchContent){
  // 		this.changeOption(searchContent);
  // 	}
  // },
  methods:{
  	fetchData(callback,params={}){
      let defaultParams = {
      	topic: this.topic,
        pageSize:pageSize,
        wordSize:wordSize,
        pageIndex:1,
        category: this.option,
        orderBy: this.order,
        desc: true
      };
      console.log("---------eventList topic",)
      let data = Object.assign({},defaultParams,params);
      this.$http.get(server_path+"/event",
        {
          params:data,
          before(request){
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

    fetchWordData(callback,paramsBody={}){
    	var defaultParams = {
    		topic:this.topic,
    		id:this.curId,
    		pageIndex:1,
    		pageSize:20
    	}
    	var finalData = Object.assign({},defaultParams,paramsBody);
    	this.$http.get(server_path+"/event/word",
        {
          params:finalData,
          before(request){
            // console.log("this ",this.previousRequest,sentRequest["get"]);
            if(sentWordRequest["get"]){
              sentWordRequest["get"].abort();
            }
            sentWordRequest["get"] =request;
            // this.previousRequest = request;
          }
        })
          .then(callback,(err)=>{
              console.log("请求服务器失败");
          });
    },

    handleWordCreate(word){
    	this.$http.post(server_path+"/event/word",
          {
          	topic: this.topic,
            id:this.curId,
            word:word
          })
            .then(response=>{
                console.log("创建成功");
            },(err)=>{
                console.log("创建失败");
            });
    },

    handleWordPageClick(params){
    	console.log("-----click page ajax");
    	this.fetchWordData((response)=>{

	        console.log("获取单词列表成功");
	        let data = response.json().wordList;
	        this.wordList = data.map(word=>{
	          return {
	            editing:false,value:word,content:word
	          }
	        });

	        var size;
	        if(size = response.json().totalSize)
	                this.wordTotalSize = size;


      },params);

    },

    changeOption(searchContent=""){
    	var params = searchContent?{filter:searchContent}:{};
    	this.fetchData((response)=>{
    		this.eventList = response.json().eventList;
    		if(response.json().totalSize)
    			this.totalSize = response.json().totalSize;
    		console.log("请求服务器成功");
    	},params);
    },

    handleEditDone(postBody){
    	var data = {
    		id:this.curId,
    		action:"patch",
    		topic: this.topic
    	}
    	var finalData = Object.assign({},data,postBody);
    	 this.$http.post(server_path+"/event/word",finalData,{
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

    handleModalInput(paramsBody){
        this.fetchWordData((response)=>{
        	console.log("filter成功");
            let data = response.json().wordList;
            //let data = response.json()[interfaceTransform[this.category]];
            this.wordList = data.map(word=>{
              return {
                editing:false,value:word,content:word
              }
            });
            this.wordTotalSize = response.json().totalSize;

        },paramsBody);
    },

    handleDeleteClick(postBody){
    	var data = {
    		id:this.curId,
    		action:"delete",
    		topic: this.topic
    	}
    	var finalData = Object.assign({},data,postBody);
    	this.$http.post(server_path+"/event/word",finalData)
    		.then((response)=>{
              console.log("删除成功");
          },(err)=>{
              alert("删除失败");
          })
    },

    handlePageClick(page){
    	this.fetchData((response)=>{
  			console.log("获取事件列表成功");
  			this.eventList = response.json().eventList;
  		},{pageIndex:page});
    },

    showDetail(event){
    	this.curId = event.id;
    	this.curEvent = event.name;
      	this.showModal = true;
      	this.handleWordPageClick({pageIndex:1});

    },

    addWord(event){
    	this.curId = event.id;
    	this.curEvent = event.name;
      	this.showCreateModal = true;
    },

    //checkbox的事件，决定table 的tr是编辑模式还是只读模式
    toggleTableToEdit(btnState){
    	this.isEditing = btnState;
    },

    fetchPackageData(){
        this.$http.get(server_path+"/theme",
        {
          params:{
            topic : this.topic,
            value : "package"
          },
          before(request){
            if(sentWordRequest["get"]){
              sentWordRequest["get"].abort();
            }
            sentWordRequest["get"] =request;
          }
        })
          .then((response)=>{
            console.log("packages",response.json().packages);
              this.packageList = response.json().packages;
          },(err)=>{
              console.log("请求服务器失败");
          });
    },

    resetExportData(){
      this.eventWordList = [];
      this.packageList = [];
    },

    exportWords(){

      if(this.chosenEvents.length>0)
        this.showExportBox = true;

      if(isArrEqual(this.chosenEvents,lastChosenEvents))
          return;
      // else
      //   this.resetExportData();
        // this.fetchPackageData();
        console.log("this.chosenevents",this.chosenEvents);
        this.$http.get(server_path+"/event/word",
        {
          params:{
            ids: this.chosenEvents
          }
        })
          .then((response)=>{
              this.eventWordList = response.json().wordList;
          },(err)=>{
              console.log("请求服务器失败");
          });

    },

    exportToSys(data){
      console.log("--------topic",this.topic);
      var postBody = Object.assign({},data,{
        action:"push",
        topic:this.topic
      });
      this.$http.post(server_path+"/transfer",postBody)
           .then(response=>{
                console.log("推送到系统成功");
            },(err)=>{
                console.log("推送到系统失败");
            });

    }




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./EventList.scss";
</style>
