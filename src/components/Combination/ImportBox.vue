<template>
  <div id="importbox" v-show="show">

	<!--头部-->
	<div id="ib_title">导入数据</div>

	<!--主要容器-->
	<div id="ib_main_container">
		<div class="search_container">
			<input class="ib_search" type="text" v-model="search_content" placeholder={{search_content}}></input>
			<button class="btn btn-sm margin_small" @click="search_onclick">搜索</button>
		</div>

		<div id="table_container">
			<div id="ib_table">
				<div v-for="array in response_content" @click="hideAll">
					<div class="div_bg_green">
						<input type="checkbox" id={{$key}} class={{$key}} value={{$key}} @click="selectAll" v-model="checkbox.root"></input>
						<label for={{$key}}>{{$key}}</label>
					</div>

					<div v-for="keyword in array" class="margin_left">
						<input type="checkbox" id={{keyword}} class={{keyword}} value={{keyword}} v-model="checkbox.sub"></inpout>
						<label for={{keyword}}>{{keyword}}</label>
					</div>
				</div>
			</div>
		</div>

		<div id="button_container">
			<button class="btn btn-sm float_right" @click="import_onclick">导入</button>
		</div>
	</div>
  </div>
</template>

<script>

var wordDict = {
	"title":"称谓词",
	"event":"事件词"
}
export default {
	data(){
		return {
			search_content:"",
			response_content:{},
			checkbox:{
				root:[],
				sub:[]
			}
		}
	},

	props:["topic","show","category"],

	ready(){
		//this.search_onclick();
	},

	events:{
		"show-import-box":function(category){

			this.search_onclick(category);
		}
	},
	methods:{

		updateParentData(parentStr,arr){
			var temp = [];

			var parentArr = parentStr.trim()?parentStr.trim().split(/\s+/):[];
			arr.forEach(function(data){
						if(!isIn(parentArr,data))
							temp.push(data);
					});
			//parentStr += temp.join(" ");
			//return parentStr;
			return temp.join(" ");

		},



		//点导入按钮
		import_onclick:function(){


			this.$dispatch("on-import-words",{
				type: this.category,
				initialWordArr: this.checkbox.sub
			});
			this.checkbox.sub = [];
/*
			var parentCategory = this.category;
			var parentDataName = "temp_"+parentCategory+"_data";
			var parentStr = this.$parent[parentDataName];


			parentStr = this.updateParentData(parentStr,this.checkbox.sub);
			switch(parentCategory){
				case "title":{
					this.$parent.temp_title_data = parentStr;
					break;
				}
				case "event":{
					this.$parent.temp_event_data = parentStr;
					break;
				}
			}
*/
			this.show = false;
		},
		search_onclick:function(broadCategory=""){

			//不清楚这边为什么没有更新props
			console.log("-------on sow",this.$parent.whichData,"---",this.category);

			var temp_ca = "";

			temp_ca  = (broadCategory?wordDict[broadCategory]:wordDict[this.category]);

			this.$http.get("/combination",
				{
				  params:{
				  	topic: this.topic,
					category:temp_ca,
					size:20,
					filter:this.search_content
				  },
				  before(request){
					if(this.previousRequest){
					  this.previousRequest.abort();
					}
					this.previousRequest = request;
				  }
				})
				  .then(function(response){
					this.response_content = dataFrame(JSON.parse(response.body));
				  },(err)=>{
					  console.log("请求服务器失败");
			});


		},
		selectAll:function(e){
			if(e.currentTarget.checked == true){
				var tempIn = this.response_content[e.currentTarget.className];

				for(var i=0;i<tempIn.length;i++){
					if(!isIn(this.checkbox.sub,tempIn[i]))
						this.checkbox.sub.push(tempIn[i]);
				}
			}else{
				var tempOut = this.response_content[e.currentTarget.className];

				for(var i=0;i<tempOut.length;i++){
					deleteInArray(this.checkbox.sub,tempOut[i])
				}
			}
		},
		hideAll:function(e){
			e;
		}
	}
}

function dataFrame(oldObj){
	var temp = {};

	for(var i=0;i<oldObj.length;i++){
		temp[oldObj[i].name] = oldObj[i].value;
	}

	return temp;
}

function isIn(array,element){

	return array.indexOf(element)!==-1;
	/*
	for(var i=0;i<array.length;i++){
		if(array[i] == element)
			return true;
	}
	return false;
	*/
}

function deleteInArray(array,element){
	for(var i=0;i<array.length;i++){
		if(array[i] == element){
			array.splice(i,1);
			return true;
		}
	}
	return false;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#importbox {
	position:fixed;
	border:1px solid black;
	width:400px;
	height:40%;
	background:white;
}

#ib_title{
	background:gray;
	width:100%;
	height:2rem;
	padding:0rem 0.5rem 0rem 0.5rem;
	color:white;
}

#ib_main_container{
	position:absolute;
	width:100%;
	top:2rem;
	bottom:0;
}

#ib_table{
	position:absolute;
	top:0rem;
	bottom:1rem;
	left:2rem;
	right:2rem;
	border:1px solid gray;
	overflow:auto;
}

.btn-small{
	width:2.5rem;
	height:2rem;
}

.search_container{
	height:4rem;
}


.ib_search{
	float:left;
	margin-left:2rem;
	margin-top:0.8rem;
}

#table_container{
	position:absolute;
	width:100%;
	top:4rem;
	bottom:3rem;
}

#button_container{
	position:absolute;
	width:100%;
	bottom:0;
	height:3rem;
}

.div_bg_green{
	background:#42b983;
	color:white;
	padding-left:0.5rem;
	padding-top:0.3rem;
}

.margin_small{
	margin:0.8rem;
}

.margin_left{
	margin-left:3rem;
}

.float_right{
	float:right;
	margin-right:2rem;
}

</style>