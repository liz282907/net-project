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
            <div></div>
            <button>没有找到关联的事件？</button>
            <div class="divider"></div>
            <div class="create-event" v-show="EventNotExists">
                <input type="text" v-model="keyword" placeholder="事件名称"/>
                <button>添加</button>
            </div>
            <button>导出</button>

        </div>
    </div>

  </div>


</template>

<script>
import {server_path} from "../../../Constants/serverUrl.js";

var paperDict = {};
var getPaperRequest;


export default {

  data () {

    return {
      paperPackages:[],
      curPackage:{},
      curPaper:{title:"",content:""},
      wordList:[],
      EventNotExists: true

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
    }
  },

  ready () {
    this.fetchTitle();



    },

  methods:{

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
    toggleOpen(paperPackage){
      if(this.curPackage === paperPackage)
        this.curPackage = {};
      else
        this.curPackage = paperPackage;
    },

    //click事件
    choosePaper(title){
      // this.curPaper.title = paperDict[title];

      if(!paperDict[title]){
        this.fetchPaper(title);
      }
      else
        this.curPaper = {"title":title,"content":paperDict[title]};
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
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./ExtractPaper.scss";

</style>
