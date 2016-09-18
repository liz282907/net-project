<template>

<div class="modal" v-show="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
        <h4 class="modal-title">事件修改</h4>
      </div>
      <div class="modal-body">
            <label class="label-tooltip">事件名
            </label>
            <input type="text" class="modal-input" v-model="content" :value="curEvent.name"/>
            <label class="label-tooltip">事件类型
            </label>
            <select class="select" v-model="option">
                <option v-for="eventType in eventTypeList" :value="eventType.id" >
                    {{eventType.name}}
                </option>
            </select>

      </div>
      <div class="modal-footer">
        <button type="button" class="my-btn" data-dismiss="modal" @click="closeModal">取消</button>
        <button type="button" class="my-btn" @click="updateEvent">更新</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

//import {server_path} from "../../../Constants/serverUrl.js";
import {eventTypeList} from "../../../Constants/InterfaceConstants.js";

//let sentRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"PopEventCreate",

  props:["curEvent","show","topic"],

  data () {

    return {
      eventTypeList:eventTypeList,
      option: this.curEvent.type,
      content: ""

      }

  },

  methods:{

    closeModal(){
        this.show = false;

    },

    updateEvent(){
      //this.$dispatch("on-event-edited",this.content);
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

.modal-input{
  display:inline-block;
  max-width:150px;
  font-size:12px;
}
.select{
  width:100px;
}


</style>
