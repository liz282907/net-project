<template>
  <div class="topic_container">
    <ul>
      <li v-for="theme in themes" @click="choseTheme($index)">
        <a v-link="{path:'title'}">
          <span :class="'avatar0'+($index+1)">
          </span>
        </a>
        {{ theme.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //themes: ['习近平','彭丽媛','习明泽','其他家人','工作人员']
      themes: [
        {name: '习近平'},
        {name: '彭丽媛'},
        {name: '习明泽'},
        {name: '其他家人'},
        {name: '工作人员'}
      ]
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    choseTheme: function(index){
      this.$parent.topic = this.themes[index].name;
    }
  },
  components: {}
};
</script>

<style lang="scss">
.topic_container{
  ul{
    display: inline-block;
    width: 100%;
    text-align: center;
    li{
      display: inline-block;
      width: 200px;
      height: 240px;
      margin: 20px 20px 0 0;
      padding-bottom: 20px;
      font-size: 15px;
      text-align: center;
      a{
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        overflow: hidden;
        span{
          display: inline-block;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background-size: cover;
        }
      }
    }
  }
}
@for $i from 1 through 5{
  .avatar0#{$i} {
    background: url('../../assets/images/avatar0'+$i+'.png');
  }
}
</style>
