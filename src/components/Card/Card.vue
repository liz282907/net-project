<template>
        <div class="panel-body" :value="category">
            <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" value="freq" v-model="order" checked/>
                <label >按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="order" />
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
        </div>
</template>

<script>

import {interfaceTransform,pageSize} from "../../../Constants/InterfaceConstants.js";
// import {interfaceTransform} from "../../utils/InterfaceConstants.js";
export default {

  name:"Card",

  props:["category"],

  data () {

    return {
      order:"freq",
      wordList:[]
    }
  },

  ready () {

      this.fetchData({category:this.category},function(response){
        let data = response.json();
        let category = interfaceTransform[this.category];

        this.wordList = data[category];
      });


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

    showDetail(){
      alert("showDetail");
    },

    addWord(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Card.scss";
</style>
