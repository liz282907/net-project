<template>

<div class="modal" v-show="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
            <label>关键词</label>
            <input type="text" v-model="content" />

      </div>
      <div class="modal-footer">
        <button type="button" class="my-btn" data-dismiss="modal" @click="closeModal">取消</button>
        <button type="button" class="my-btn" @click="createWord">新建</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {interfaceTransform} from "../../../Constants/InterfaceConstants.js";

let sentRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"PopDialog",

  props:["category","title","show"],

  data () {

    return {
      content:""
      }

  },


  methods:{

    closeModal(){
        this.show = false;
    },

    createWord(){
        this.$http.post("/title",
          {
            category:this.category,
            word:this.content
          })
            .then(response=>{
                console.log("创建成功");
            },(err)=>{
                console.log("创建失败");
            });

          this.closeModal();

    },



  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/stylesheets/variables.scss";
.modal{
    display: block;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(11, 11, 11, 0.6);
    .action{
        cursor: pointer;
    }
}
.modal-dialog{
    max-width: 30%;
}
.my-btn{
  &:hover{
    background-color:$base-color;
    color: #fff;
  }
}
</style>
