<template>

  <div class="wrapper clearfix">
      <div class="search-box">
          <img src="../../assets/images/search.png" alt="search图标"/>
          <input type="text"  placeholder="搜索" class="search-input" v-model="searchContent" @change="fetchServerData">
      </div>
      <div class="form-box">
          <div class="form-box-group">
              <span class="form-box-label">排序方式</span>
              <div class="radio-box clearfix">
                  <div class="radio-item" v-for="item in sortList">
                      <input type="radio" :value="item.name" v-model="order" :checked="$index===0"
                        @change="fetchServerData" />
                      <label >{{item.zh_name}}</label>
                  </div>
              </div>

          </div>

          <div class="form-box-group">
              <span class="form-box-label">查看范围</span>
              <div class="radio-box clearfix">
                  <div class="radio-item" v-for="item in rangeList">
                      <input type="radio" :value="item.name" v-model="range" :checked="$index===0"
                          @change="fetchServerData"
                      />
                      <label >{{item.zh_name}}</label>
                  </div>
              </div>
            </div>
      </div>
      <div class="form-list">
          <table class="my-table">
                <thead>
                  <tr><th>序号</th><th>关键词</th><th>敏感度</th><th>搜索量</th><th>命中数</th><th>命中率</th><th>热度趋势</th><th>时间</th><th>相关事件</th><th>传播路径及原文查看</th></tr>
                </thead>
                <tbody>
                    <tr v-for="word in wordList">
                        <td>{{word.id}}</td>
                        <td>{{word.name}}</td>
                        <td>{{word.sensitivity}}</td>
                        <td>{{word.searchNum}}</td>
                        <td>{{word.hitNum}}</td>
                        <td>{{word.hitRate}}</td>
                        <td>{{word.trend}}</td>
                        <td>{{word.date}}</td>
                        <td>{{word.event}}</td>
                        <td>{{word.route}}</td>
                    </tr>
                </tbody>

            </table>
      </div>
      <div class="page-wrapper">
          <pagination :total-size="totalSize" @page-click="handlePageClick"></pagination>
      </div>


  </div>


</template>

<script>

import {sortList,rangeList} from "../../../Constants/clientConstants.js";
import {pageSize} from "../../../Constants/InterfaceConstants.js";
import {server_path} from "../../../Constants/serverUrl.js";

import Pagination from "../Pagination/pagination";

export default {

  components:{
    "pagination": Pagination
  },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      order: sortList[0].name,
      range: rangeList[0].name,
      wordList:[],
      searchContent:"",
      totalSize: 0

    }
  },
  computed:{
    sortList: function(){
      return sortList;
    },
    rangeList:function(){
      return rangeList;
    }
  },


  methods:{


      fetchData(callback,params={}){
          let defaultParams = {
            topic: this.$parent.topic,
            pageSize:pageSize,
            pageIndex:1,
            orderBy: this.order,
            range:this.range,
            desc: true
          };
          let data = Object.assign({},defaultParams,params);
          this.$http.get(server_path+"/hitRate",
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

    fetchServerData(){

        var params = {filter:this.searchContent};
          this.fetchData(function(response){
                this.wordList = response.json().wordList;
                console.log("form请求成功");
            },params);
    },

    handlePageClick(page){
      console.log("子定义事件");
      var params = {filter:this.searchContent,pageIndex:page};
          this.fetchData(function(response){
                this.wordList = response.json().wordList;
                console.log("pagination请求成功");
            },params);
    }


  },

  // events:{
  //   "handlePageClick":function(page){
  //     console.log("子定义事件",page);
  //     var params = {filter:this.searchContent,pageIndex:page};
  //         this.fetchData(function(response){
  //               this.wordList = response.json().wordList;
  //               console.log("pagination请求成功");
  //           },params);
  //   }
  // },

  ready(){
      this.fetchData(function(response){
          this.wordList = response.json().wordList;
          this.totalSize = response.json().totalSize;
          console.log("初始请求成功");
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./HitRate.scss";
</style>
