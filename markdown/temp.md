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