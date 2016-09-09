<template>
    <div class="btn-wrapper">
      <input type="checkbox" id="toggleBtn" v-model="btnChecked" name="toggleBtn" class="btn-input" @change="toggleButton"/>
      <label class="btn-label" for="toggleBtn"></label>

    </div>
</template>

<script>


export default {

  name:"ToggleButton",

  data(){
    return {
      btnChecked:false
    }
  },

  methods:{
    toggleButton:function(){
      this.$dispatch("toggle-edit",this.btnChecked);
    }
  },

}
</script>

<style lang="scss">
.btn-wrapper{
  display:inline-block;
}
.btn-input{
  display:none
}
.btn-label{
  position:relative;
  width:60px;
  height:20px;
  cursor: pointer;
  border-radius:20px;
   display:inline-block;
   vertical-align:middle;
  background-color:#9E9E9E;
}
.btn-label:after{
  position:absolute;
  content:"";
  width:30px;
  height:30px;
  top:-5px;
  left:-5px;
  border-radius:50%;
  display:block;
  background-color:#fff;
  box-shadow: 0 6px 12px 0px #757575;
   transition: transform 0.18s ease ;
}
.btn-input:checked + .btn-label,.btn-input:checked + .btn-label:after{
  background-color:#42A5F5;
}
.btn-input:checked  + .btn-label:after{
  position:absolute;
  top:-5px;
  transform:translateX(35px);
}
</style>
