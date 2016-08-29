<template>
  <div class="global-actions clearfix" >
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
  <div class="form-actions ">
      <button class="action-button" @click="chooseAll">全选</button>
      <button class="action-button" @click="chooseReverse">反选</button>
  </div>
  <div class="title-panels">
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="high danger" v-model="checkedWords"/>
          <h3 class="panel-title">最近一段时间的高危敏感词</h3>
        </div>
        <div class="panel-body">
          <div class="filter-radios">
              <div class="radio-item" v-for="item in duraionList">
                <input type="radio" :value="item.value" v-model="duration" :checked="$index===0"/>
                <label >{{item.zh_value}}</label>
              </div>
          </div>
          <div class="keywords">
            <ul>
            <li v-for="keyword in highDanger">
                <span class="label">{{keyword}}</span>
            </li>
            </ul>
            <button class="more">查看详情</button>

          </div>
        </div>
      </div>
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="forbidden words" v-model="checkedWords"/>
          <h3 class="panel-title">禁发</h3>
        </div>
        <div class="panel-body">
            <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" id="" value="frequency" v-model="forbidden"/>
                <label >按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="forbidden"/>
                <label >按时间</label>
              </div>
            </div>
            <div class="keywords">
                <ul>
                    <li v-for="keyword in forbiddenWords | orderBy 'freq' ">
                        <span class="label" @dblclick="changeToEdit">{{keyword.value}}</span>
                    </li>
                </ul>
                <button class="more">查看详情</button>

            </div>
        </div>
      </div>
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="check words" v-model="checkedWords"/>
          <h3 class="panel-title">审核</h3>
        </div>
        <div class="panel-body">
          <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" id="" value="frequency" v-model="audit"/>
                <label >按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="audit"/>
                <label >按时间</label>
              </div>
            </div>
            <div class="keywords">
                <ul>
                    <li v-for="keyword in auditedWords | orderBy 'freq' ">
                        <span class="label" @dblclick="changeToEdit">{{keyword.value}}</span>
                    </li>
                </ul>
                <button class="more">修改保存</button>

            </div>
        </div>
      </div>
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="low danger" v-model="checkedWords"/>
          <h3 class="panel-title">低危</h3>
        </div>
        <div class="panel-body">
          <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" id="" value="frequency" v-model="lowDanger"/>
                <label for="jack">按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="lowDanger"/>
                <label for="jack">按时间</label>
              </div>
            </div>
            <div class="keywords">
                <ul>
                    <li v-for="keyword in lowDangerWords | orderBy 'freq' ">
                        <span class="label" @dblclick="changeToEdit">{{keyword.value}}</span>
                    </li>
                </ul>
                <button class="more">修改保存</button>

            </div>
        </div>
      </div>
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="issued words" v-model="checkedWords" />
          <h3 class="panel-title">下发词</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>


  </div>
</template>

<script>

let checkboxWords = ["high danger","forbidden words","check words","low danger","issued words"];


export default {
  data () {
    let duraionList = [
        {name:"halfHour",value:0.5,zh_value:"12小时"},
        {name:"oneDay",value:1,zh_value:"1天"},
        {name:"oneWeek",value:7,zh_value:"一周"},
      ];
    return {
      duraionList:duraionList,

      checkedWords:[], //多选框结果
    }
  },
  methods:{
    //全选
    chooseAll(){
      if(this.checkedWords.length==checkboxWords.length)
        this.checkedWords = [];
      else this.checkedWords = checkboxWords;
    },
    //反选
    chooseReverse(){
      this.checkedWords = checkboxWords.filter((word)=>{
        return this.checkedWords.indexOf(word)===-1;
      });
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
