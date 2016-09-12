<template>
    <ul class="nav nav-tabs">
		<div id="addEvent_container">
			<div class="form-box">
				<div class="event-container">
					<div class="dropdown-own">
					    <label>添加事件名称：</label>
					    <input class="eventname" id="eventname" v-model="eventname" placeholder="请输入添加事件名称">
					    </input>
				    </div>
				</div>
				<div class="event-container">
					<div class="dropdown-own">
					    <label>添加事件类型：</label>
					    <select class="select" id="select" v-model="option">
						    <option v-for="eventType in eventTypeList" :value="eventType.id" >
								{{eventType.name}}
						    </option>
					    </select>
				    </div>
				</div>
			</div>

			<div class="keyword-container">
				<label>添加事件关键词</label>
				<textarea class="input-keyword" v-model="keyword"></textarea>
				<button class="btn btn-sm" @click="addEventKeyword();">添加关键词</button>
			</div>
		</div>
    </ul>
</template>

<script>
import {server_path} from "../../../Constants/serverUrl.js";
import {eventTypeList} from "../../../Constants/InterfaceConstants.js";


export default {
  data () {
	eventTypeList.shift();
    return {
		eventTypeList:eventTypeList,
		option:0,
		eventname:"",
		keyword:"",
    }
  },
  methods:{
	addEventKeyword:function(){
		if(this.eventname==""){
			alert("请输入事件名称");
			return ;
		}else if(this.option == 0){
			alert("请选择事件类型");
			return ;
		}else if(this.keyword == ""){
			alert("请输入关键词");
			return ;
		}

		this.$http.post(server_path+"/event",
          {
          	name:this.eventname,
			category:  this.option,
			wordList: this.keyword,
          })
            .then(response=>{
                console.log("创建成功");
            },(err)=>{
                console.log("创建失败");
            });
	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-box{
    width: 80%;
    margin-top: 2rem;
    font-size: 12px;
}

.keyword-container{
	width:100%;
}

.dropdown-own{
	float: left;
	min-width: 30%;
}
.dropdown-own select{
	margin-left: 10px;
	width: 40%;
	font-size: 12px;
}

.event-container{
	height:50px;
}

.input-keyword{
	width:100%;
	height:400px;
	border:1px solid gray;
	box-shadow:1px 1px 2px gray;
}
</style>
