<template>
  <div class="global-actions clearfix" >
      <div class="search-box">
          <input type="text"  placeholder="搜索">
          <button type="submit" class="btn btn-default">搜索</button>
      </div>

      <div class="btn-group btn-group-justified file-btn-group">
        <a href="#" class="btn btn-default">批量导入</a>
        <a href="#" class="btn btn-default">批量导出</a>
        <a href="#" class="btn btn-default">批量删除</a>
      </div>


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
            <li v-for="keyword in highDanger" class="tag">
                <span class="label">{{keyword}}</span>
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
        <card :category="tempCard.category"></card>
      </div>


      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="issued words" v-model="checkedWords" />
          <h3 class="panel-title">下发词</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>

      <modal category="禁发" order="freq"></modal>


  </div>
</template>

<script>

import Card from "../Card/Card";
import PopModal from "../PopModal/PopModal";

let checkboxWords = ["high danger","forbidden words","check words","low danger","issued words"];
let cardList = [
  {title:"禁发",category:"forbidden words"},
  {title:"审核",category:"check words"},
  {title:"低危",category:"low danger"},
];

export default {

  components:{
    "card":Card,
    "modal":PopModal
  },

  data () {

    let duraionList = [
        {name:"halfHour",value:0.5,zh_value:"12小时"},
        {name:"oneDay",value:1,zh_value:"1天"},
        {name:"oneWeek",value:7,zh_value:"一周"},
      ];
    return {
      duration:[],
      cardList:cardList,
      duraionList:duraionList,

      checkedWords:[], //多选框结果
    }
  },

  ready () {

    //留作高危敏感词的接口


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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Title.scss";
h1 {
  color: #42b983;
}

</style>
