<template>
  <div class="mycontainer clearfix">
      <ul class="left">
          <li :class="['has-sub', paperPackage===curPackage?'open':'' ]"
            v-for="paperPackage in paperPackages"
            @click="toggleOpen(paperPackage)">
             <a class="has-sub-li" tabindex="1">{{paperPackage.source}}</a>
              <ul class="sub-menu">
                <li v-for="paper in paperPackage.paperList">
                    <a v-show="paper===curPaper"  href="#" class="chosen-tick">{{paper.title}}<i >&#10003</i></a>
                    <a v-else href="#">{{paper.title}}</a>
                </li>
              </ul>
          </li>
      </ul>
    <div class="right">
        <div class="content-body">
        </div>
        <div class="content-words">
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
      curPaper:{}

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
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./ExtractPaper.scss";

</style>
