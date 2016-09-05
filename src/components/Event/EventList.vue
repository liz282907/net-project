<template>
    <div class="form-box clearfix">
          <div class="dropdown form-item">
              <label>搜索事件类型</label>
              <select class="select" id="select" v-model="option" @change="changeOption">
                  <option v-for="eventType in eventTypeList" :value="eventType.id" $index==1?'selected':''>
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
    </div>
    <div class="table-wrapper">
            <table class="my-table">
                <thead>
                  <tr><th>序号</th><th>事件名称</th><th>关联词汇</th></tr>
                </thead>
                <tbody>
                    <tr v-for="event in eventList">
                    	<td>{{$index+1}}</td>
                        <td>{{event.name}}
                        </td>
                        <td>
                        	<ul>
			                    <li v-for="keyword in event.wordList" class="tag">
			                        <span class="label label-default" >{{keyword}}</span>
			                    </li>
			                </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



</template>


<script>
import Search from "../Search/Search";
import {server_path} from "../../../Constants/serverUrl.js";
import {eventTypeList,pageSize,wordSize} from "../../../Constants/InterfaceConstants.js";
import Pagination from "../Pagination/pagination";

export default {
  data () {
    return {
      eventTypeList:eventTypeList,
      order:"freq",
      option:1,
      eventList:[]
    }
  },
  components:{
    "search":Search,
    "pagination":Pagination
  },
  ready(){
  		this.fetchData((response)=>{
  			console.log("获取事件列表成功");
  			this.eventList = response.json().eventList;
  			this.totalSize = response.json().totalSize;
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
        pageSize:pageSize,
        wordSize:wordSize,
        pageIndex:1,
        category: this.option,
        orderBy: this.order,
        desc: true
      };
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

    // changeOption(){
    // 	var params = searchContent?{filter:searchContent}:{};
    // 	console.log("-------in parent");
    // 	this.fetchData((response)=>{
    // 		this.eventList = response.json().eventList;
    // 		console.log("请求服务器成功");
    // 	},params);
    // },

    changeOption(searchContent=""){
    	var params = searchContent?{filter:searchContent}:{};
    	this.fetchData((response)=>{
    		this.eventList = response.json().eventList;
    		console.log("请求服务器成功");
    	},params);
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./EventList.scss";
</style>
