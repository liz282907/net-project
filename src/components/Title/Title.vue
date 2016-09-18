<template>
  <div class="global-actions clearfix" >

<!--
      <div class="btn-group btn-group-justified file-btn-group">
        <a href="#" class="btn btn-default">批量导入</a>
        <a href="#" class="btn btn-default">批量导出</a>
        <a href="#" class="btn btn-default">批量删除</a>
      </div>
-->


  </div>
  <div class="form-actions ">
      <button class="action-button" @click="chooseAll">全选</button>
      <button class="action-button" @click="chooseReverse">反选</button>
  </div>
  <div class="title-panels">
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="high danger" v-model="checkedWords"/>
          <h3 class="panel-title">最近一段时间的高危敏感词</h3>
        </div>
        <div class="panel-body">
          <div class="filter-radios">
              <div class="radio-item" v-for="item in duraionList">
                <input type="radio" :value="item.value" v-model="duration" :checked="$index===0"/>
                <label >{{item.zh_value}}</label>
              </div>
          </div>
          <div class="keywords">
            <ul>
            <li v-for="keyword in durationWordList" class="tag">
                <span class="label label-default">{{keyword}}</span>
            </li>
            </ul>
            <button class="more">查看详情</button>

          </div>
        </div>
      </div>

      <div class="panel panel-success" v-for="tempCard in cardList">
        <div class="panel-heading">
          <input type="checkbox" :value="tempCard.category" v-model="checkedWords"/>
          <h3 class="panel-title">{{tempCard.title}}</h3>
        </div>
        <card :category="tempCard.category" :topic="topic" :title="tempCard.title"></card>
      </div>


      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="issued words" v-model="checkedWords" />
          <h3 class="panel-title">下发词</h3>
        </div>
        <div class="panel-body">
            <div>
              "审核"
              <ul>
                  <li v-for="keyword in childData['check words']" class="tag">
                      <span class="label label-default" >{{keyword}}</span>
                  </li>
              </ul>
            </div>
            <div>
              "低危"
              <ul>
                  <li v-for="keyword in childData['low danger']" class="tag">
                      <span class="label label-default" >{{keyword}}</span>
                  </li>
              </ul>
            </div>


        </div>
      </div>




  </div>
</template>

<script>

import Card from "../Card/Card";

import {server_path} from "../../../Constants/serverUrl.js";

let checkboxWords = ["high danger","forbidden words","check words","low danger","issued words"];
let cardList = [
  {title:"禁发词",category:"forbidden words"},
  {title:"审核词",category:"check words"},
  {title:"事件通配词",category:"low danger"},
];

export default {

  components:{
    "card":Card,
  },


  data () {

    let duraionList = [
        {name:"halfHour",value:"rank_h",zh_value:"12小时"},
        {name:"oneDay",value:"rank_d",zh_value:"1天"},
        {name:"oneWeek",value:"rank_w",zh_value:"一周"},
      ];
    return {

      topic: this.$parent.topic,
      duration:"rank_h",
      cardList:cardList,
      duraionList:duraionList,
      durationWordList:[],
      childData:{},

      checkedWords:[], //多选框结果
    }
  },


  events:{
    "child-wordList":function(msg){

        this.childData = Object.assign({},this.childData,msg);
        console.log("----dispatch ",this.childData);
    }
  },


  ready () {

    //留作高危敏感词的接口
    this.fetchAlergicData();

    },

  methods:{

    //全选
    chooseAll(){
      if(this.checkedWords.length==checkboxWords.length)
        this.checkedWords = [];
      else this.checkedWords = checkboxWords;
    },
    //反选
    chooseReverse(){
      this.checkedWords = checkboxWords.filter((word)=>{
        return this.checkedWords.indexOf(word)===-1;
      });
    },

    //高危敏感词
    fetchAlergicData(){
      this.$http.get(server_path+"/title",{
        params:{
          "topic" : this.$parent.topic,
          "category" : "hotwords",
          "orderBy" : this.duration,
          "pageSize" : 10,
          "pageIndex" : 1
        }
      }).then((response)=>{
          this.durationWordList = response.json().wordList;
          this.durationtotalSize = response.json().totalSize;
          console.log("高危敏感词获取成功");
      },(err)=>{
          console.log("高危敏感词获取失败");
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Title.scss";
h1 {
  color: #42b983;
}
.tag{
      display: inline-block;
        margin-left: 16px;
}

</style>
