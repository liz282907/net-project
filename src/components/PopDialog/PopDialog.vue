<template>

<div class="modal" v-show="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
            <label class="label-tooltip">关键词
                <i class="my-tooltip">
                    <span>多个单词之间请用逗号分隔哟</span>
                </i>
            </label>

            <input type="text" v-model="content" @keyup.13="createWord"/>

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
import {server_path} from "../../../Constants/serverUrl.js";

let sentRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"PopDialog",

  props:["category","title","show","topic"],

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

        this.$dispatch("on-word-create",this.content);
        /*
        this.$http.post(server_path+"/title",
          {
            topic: this.topic,
            category:this.category,
            word:this.content
          })
            .then(response=>{
                console.log("创建成功");
            },(err)=>{
                console.log("创建失败");
            });
          */
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
.label-tooltip,
.label-tooltip + input{display:block;}
.label-tooltip + input{width:100%;}

.my-tooltip{
  background-image:url(../../assets/images/tooltip_empty.png);
  width:16px;
  height:16px;
  vertical-align:middle;
  cursor:pointer;
  display:inline-block;
  margin-right: 10px;
  position:relative;
}
.my-tooltip:hover span{
  visibility: visible;
}
.my-tooltip span {

    width:180px;
    position:absolute;
    top: -20px;
    left:50%;
    transform:translate(-10%,-50%);
    padding:3px 4px;

    font:12px/1.5 "Microsoft Yahei";
    background-color: #000;
    color: #fff;
    opacity: 0.5;

    border-radius:3px;
    visibility: hidden;
    -webkit-transition: all 0.5s;
       -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
         -o-transition: all 0.5s;
            transition: all 0.5s;
}



</style>
