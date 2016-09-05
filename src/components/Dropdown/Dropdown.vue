<template>

  <div class="dropdown">
      <label>搜索事件类型</label>
      <select class="" id="select">
          <option v-for="option in selectList" value="option.value">
              {{option.name}}
          </option>
      </select>
  </div>



</template>

<script>


export default {

  name:"Dropdown",

  props:["selectList"],

  data () {

    return {

    }
  },

  ready () {

    },

  methods:{


  }
}
</script>

<style lang="scss">


</style>
