<template>
  <div class="mycontainer clearfix">
      <ul class="my-left">
          <li :class="['has-sub', paperPackage===curPackage?'open':'' ]"
            v-for="paperPackage in paperPackages"
            @click="toggleOpen(paperPackage)">
             <a class="has-sub-li" tabindex="1">{{paperPackage.source}}</a>
              <ul class="sub-menu">
                <li v-for="paper in paperPackage.paperList" @click.prevent.stop="choosePaper(paper)">
                    <a v-show="paper===curPaper"  href="javascript:void(0)"
                    class="chosen-tick">{{paper.title}}<i >&#10003</i></a>
                    <a v-else href="javascript:void(0)">{{paper.title}}</a>
                </li>
              </ul>
          </li>
      </ul>
    <div class="my-right">
        <div class="content-body">
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
        </div>
    </div>

  </div>


</template>

<script>
import {server_path} from "../../../Constants/serverUrl.js";



export default {

  components:{

  },


  data () {

    return {
      paperPackages:[],
      curPackage:{},
      curPaper:{},
      wordList:[]

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
    this.fetchPaper();



    },

  methods:{

    fetchPaper(){
      this.$http.get(server_path+"/paper")
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
    choosePaper(paper){
      this.curPaper = paper;
    },

    extractWords(){
      this.$http.post(server_path+"/paper/words")
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
