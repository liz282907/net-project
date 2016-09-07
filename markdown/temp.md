              <li><a v-link=" '/title' " v-bind:class="">称谓词</a></li>
              <li><a v-link=" '/event' ">事件词</a></li>
              <li><a v-link="{ path: '/combination' }">组合词</a></li>
              <li><a v-link=" '/hitRate' ">命中率统计</a></li>


                    <div class="file-btn-group right btn-group btn-group-justified">
        <button class="btn btn-default">批量导入</button>
        <button class="btn btn-default">批量导出</button>
        <button class="btn btn-default">批量删除</button>
      </div>


      .panel{
    @include flex-panel(30px);
    flex:1;
    min-width: 40%;
    display: inline-block;
    box-sizing:border-box;
}
.panel+.panel{
    margin-left: 30px;
}
.panel:nth-child(2n-1){
    margin-left: -30px;
}

              <div class="radio-item">
                <input type="radio" value="1" v-model="duration"/>
                <label for="jack">一天</label>
              </div>
              <div class="radio-item">
                <input type="radio" value="7" v-model="duration"/>
                <label for="jack">一周</label>
              </div>


      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="check words" v-model="checkedWords" />
          <h3 class="panel-title">审核</h3>
        </div>
        <div class="panel-body">
          <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" id="" value="frequency" v-model="audit" checked/>
                <label >按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="audit"/>
                <label >按时间</label>
              </div>
            </div>
            <div class="keywords">
                <ul>
                    <li v-for="keyword in auditedWords" class="tag">
                        <span class="label label-default" >{{keyword}}</span>
                    </li>
                </ul>
                <div class="btn-group">
                  <button class="more" @click="showDetail">查看详情</button>
                  <button class="add" @click="">添加词汇</button>
                </div>

            </div>
        </div>
      </div>
      <div class="panel panel-success">
        <div class="panel-heading">
          <input type="checkbox" value="low danger" v-model="checkedWords" />
          <h3 class="panel-title">低危</h3>
        </div>
        <div class="panel-body">
          <div class="filter-radios">
              <div class="radio-item">
                <input type="radio" id="" value="frequency" v-model="lowDanger" checked/>
                <label for="jack">按热度</label>
              </div>

              <div class="radio-item">
                <input type="radio" value="date" v-model="lowDanger"/>
                <label for="jack">按时间</label>
              </div>
            </div>
            <div class="keywords">
                <ul>
                    <li v-for="keyword in lowDangerWords" class="tag">
                        <span class="label label-default" >{{keyword}}</span>
                    </li>
                </ul>
                <div class="btn-group">
                  <button class="more" @click="showDetail">查看详情</button>
                  <button class="add" @click="">添加词汇</button>
                </div>

            </div>
        </div>
      </div>



      {"wordList":{
    "forbiddenWords":["习庆丰","刁近平","洗净瓶","test1","test2","test3","test4","test5","test6","test9","test10","test11",
            "test16","test19","test23","test21"

    ],
    "auditedWords":["洗净瓶","习庆丰","刁近平"],
    "lowDangerWords":["刁近平","习庆丰","洗净瓶"]
},
"totalSize":20
}


<ul class="pagination pagination-sm">
            <li class="pageList[0]===1?'disabled':''"><a href="javascrpt:void(0)" @click="changePagination(-1)">&laquo;</a></li>
            <li v-for="value in pageList" :class="value===curPage?'active':''" @click="clickPage(value)">
                <a href="javascrpt:void(0)">{{value}}</a>
            </li>
            <li><a href="javascrpt:void(0)">...</a></li>
            <li><a href="javascrpt:void(0)" @click="changePagination(1)">&raquo;</a></li>
        </ul>
        <span class="input-wrapper">转到第
            <input type="number" min="1" :max="totalSize"
                @keyup.13 = "changePage" v-model="toPage"/>/{{totalSize}}页
        </span>

         <modal :category="category" :topic="topic" :title="title" :order="order"
            :show.sync="showModal"
            url="/title"></modal>
            <dialog :category="category" :topic="topic" :title="title" :show.sync="showCreateModal"></dialog>



            @fetch-word-list="fetchWordData"


                 <div class="search-box">
          <input type="text"  placeholder="搜索">
          <button type="submit" class="btn btn-default">搜索</button>
      </div>