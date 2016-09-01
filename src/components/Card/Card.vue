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
            <modal :category="category" :title="title" :order="order" :show.sync="showModal"></modal>
            <dialog :category="category" :title="title" :show.sync="showCreateModal"></dialog>
        </div>

</template>

<script>

import {interfaceTransform,wordCount,pageSize} from "../../../Constants/InterfaceConstants.js";
import PopModal from "../PopModal/PopModal";
import PopDialog from "../PopDialog/PopDialog";
export default {

  name:"Card",

  props:["category","title"],

  components:{
    "modal":PopModal,
    "dialog":PopDialog
  },

  data () {

    return {
      order:"freq",
      wordList:[],
      showModal:false,
      showCreateModal:false
    }
  },

  ready () {

      this.fetchData({category:this.category},function(response){
        let data = response.json();
        let category = interfaceTransform[this.category];

        this.wordList = data[category];
        let length = wordCount["downPush words"];

        this.$dispatch("child-wordList",
            {
              [category]:this.wordList.length<length?this.wordList:this.wordList.slice(length)
            })
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
      this.showModal = true;
    },

    addWord(){
      this.showCreateModal = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Card.scss";
</style>
