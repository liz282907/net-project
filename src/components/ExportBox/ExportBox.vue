<template>

<div class="modal" v-show="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body clearfix">
          <div class="left-part">
              <h4>关键词包</h4>
              <select class="form-control shown-select" multiple="" v-model="chosenPackage">
                  <option class="option" v-for="package in packageList" :value="package">
                      {{package}}
                  </option>
              </select>
              <div class="input-wrapper">
                  <input type="text" v-model="keyPackage" placeholder="添加词包" @keyup.13="addPackage"/>
              </div>
          </div>
          <div class="right-part">
              <div class="filter-radios form-item">
                    <label>组合形式</label>
                    <div class="radio-item">
                      <input type="radio" value="jgg" v-model="combType" checked @change="changeOption"/>
                      <label >九宫格</label>
                    </div>

                    <div class="radio-item">
                      <input type="radio" value="yjyy" v-model="combType" @change="changeOption"/>
                      <label >鹰击鹰眼</label>
                    </div>

                    <div class="radio-item">
                      <input type="radio" value="jss" v-model="combType" @change="changeOption"/>
                      <label >计算所</label>
                    </div>
              </div>


              <textarea class="textarea" v-if="combType!='jss'">{{transformedData}}</textarea>
              <div class="jss_container" v-else>
                <div class="title_container">
                  称谓词
                  <textarea>{{titleList}}</textarea>
                </div>
                <div class="event_container">
                  事件词
                  <textarea>{{eventList}}</textarea>
                </div>
              </div>

              <!--
                  yezi
                  <textarea class="textarea">{{transformedData}}</textarea>
              -->



              <ul class="dropdown-group clearfix">
                  <li class="dropdown"  >
                      <div class="dropdown-left" tabindex="0">
                          <a class="dropdown-toggle">
                            {{chosenSysType.zh_name||"导出系统"}}<span class="caret"></span>
                          </a>
                          <ul class="dropdown-items">
                            <li v-for="sysType in sysTypes"  class="item" @click="chooseSysType(sysType)">{{sysType.zh_name}}
                            </li>
                          </ul>

                      </div>
                      <button v-show="isChoosingSys" @click="exportToSys">导出</button>


                  </li>

                  <li class="dropdown" >
                    <div class="dropdown-left " tabindex="0">
                        <a class="dropdown-toggle" >
                        {{chosenFileType||"导出文件"}}<span class="caret"></span>
                      </a>
                      <ul class="dropdown-items">
                        <li v-for="fileType in fileTypes" class="item" @click.stop="chooseFileType(fileType)">
                          {{fileType}}
                        </li>
                      </ul>
                    </div>
                    <a v-show="isChoosingFile" @click="exportToFile" :href="download_data" :download="download_filename">导出</a>
                  </li>



              </ul>
          </div>

      </div>

    </div>
  </div>
</div>
</template>

<script>

import {server_path} from "../../../Constants/serverUrl.js";
import {fileTypes,sysTypes} from "../../../Constants/clientConstants.js";
import {generateYjyyData} from "../../utils/util.js";


// let sentRequest = {"get":null,"update":null,"delete":null,"patch":null};

export default {

  name:"ExportBox",

  props:["title","show","packageList","wordList","titleList","eventList"],

  data () {

    return {
      combType:"",
      fileTypes:fileTypes,
      sysTypes:sysTypes,
      chosenFileType:"",
      chosenSysType:{},
      chosenPackage:"",
      transformedData:"",
      keyPackage:"",

      //yezi
      topic: this.$parent.topic,
      download_data:"",
      download_filename:""

    }
  },

  computed:{
    isChoosingSys:function(){
      if((Object.keys(this.chosenSysType).length>0)) return true;
    },
    isChoosingFile:function(){
      if(this.chosenFileType) return true;
    },
    transformedData:function(){
        switch(this.combType){
          case "jgg":{
            return this.wordList.join("#")
            break;
          }
          case "jss":{
            return this.wordList.join(" ")
            break;
          }
          case "yjyy":{
            var temp = generateYjyyData(this.wordList);
            return temp;
            break;
          }
        }
    },
  },

  ready () {
      //this.handlePageClick(1);
    },

  components:{

  },

  methods:{
    closeModal(){
      this.show = false;
    },
    changeOption(){

    },
    chooseFileType(type){
      this.chosenFileType = type;
      console.log("this.文件类型",this.chosenFileType);
      this.isChoosingFile = true;
    },
    chooseSysType(type,event){
      console.log("this.系统",this.chosenSysType);
      this.chosenSysType = type;


    },
    addPackage(){
      this.packageList.push(this.keyPackage);
      console.log("添加成功",this.packageList);

      //yezi
      this.$http.post(server_path+"/theme",{
          package: this.keyPackage,
          topic: this.topic
        })
          .then(response=>{
            //this.packageList.push(this.keyPackage);
            console.log("添加成功",this.packageList);
          },(err)=>{
            console.log("添加失败",err);
          });


    },
    exportToSys(){
      var data = {
        sys: this.chosenSysType.name,
        package:this.chosenPackage[0],
        wordList:this.wordList
      };

      //yezi
      if(!this.chosenPackage[0]){
        console.log(!this.chosenPackage[0]);
        alert('请选择一个关键词包');
        return;
      }

      this.chosenSysType = {};
      this.$dispatch("export-to-sys",data);
      //yezi
      this.chosenPackage[0] = '';


    },
    //yezi
    exportToFile(){
      var data = {
        content:this.transformedData,
        title_content:this.titleList,
        event_content:this.eventList
      };
      this.chosenFileType = "",

      this.$dispatch("export-to-file",data);

      var content = '';
        if(this.combType==='jss'){
          content = encodeURIComponent("称谓词\r" + data['title_content'] + "\r" + "事件词\r" + data['event_content']);
        }else{
          content = encodeURIComponent(data['content']);
        }
        this.download_data = 'data:text/plain;UTF-8,'+ content;
        this.download_filename = this.combType+'.txt';


    }



  }
}
</script>

<style lang="scss" scoped>
@import "./ExportBox.scss";

.jss_container{
  text-align: center;
  > div{
    float: left;
    width: 50%;
  }
}
textarea{
  border: 1px solid #eee;
  resize: none;
  // word-wrap: normal;
}

</style>
