<template>
  <div class="global-actions clearfix">
      <div class="search-box">
          <input type="text"  placeholder="搜索">
          <button type="submit" class="btn btn-default">搜索</button>
      </div>

      <div class="btn-group btn-group-justified file-btn-group">
        <a href="#" class="btn btn-default">批量导入</a>
        <a href="#" class="btn btn-default">批量导出</a>
        <a href="#" class="btn btn-default">批量删除</a>
    </div>


  </div>
  <div class="form-actions"></div>
  <div class="title-panels"></div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./Title.scss";
h1 {
  color: #42b983;
}

</style>
