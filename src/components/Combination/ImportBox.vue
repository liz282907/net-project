<template>
  <div id="importbox">
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

	props:["topic"],

	ready(){
		this.search_onclick();
	},

	methods:{
		import_onclick:function(){
			for(var i=0;i<this.checkbox.sub.length;i++){
				if(this.$parent.whichData == "title"){
					if(!isIn(this.$parent.title_data,this.checkbox.sub[i]))
						this.$parent.title_data.push(this.checkbox.sub[i]);
				}
				else{
					if(!isIn(this.$parent.event_data,this.checkbox.sub[i]))
						this.$parent.event_data.push(this.checkbox.sub[i]);
				}
			}
			this.$parent.s = false;
		},
		search_onclick:function(){
			var temp_ca = "";
			this.$parent.whichData == "title" ? temp_ca="称谓词" :temp_ca="事件词";

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
	for(var i=0;i<array.length;i++){
		if(array[i] == element)
			return true;
	}
	return false;
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