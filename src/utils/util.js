function isArrEqual(arr1,arr2){
	if(!arr1 || !arr2 || arr1.length != arr2.length) return false;
	return arr1.every(function(data){
		return (arr2.indexOf(data)!==-1)
	});
}

function isInArr(item,arr){
	return arr.indexOf(item)!==-1;
}

function generateYjyyData(arr){

	// 判断是否是组合词
	if(/\s/.test(arr[0])){
		var aTitle = [];
		var aEvent = [];
		for(var i=0,len=arr.length; i<len; i++){
			var temp = arr[i].split(' ');
			if(!isInArr(temp[0], aTitle)) aTitle.push(temp[0]);
			if(!isInArr(temp[1], aEvent)) aEvent.push(temp[1]);
		}
		var sTitle = ["(",aTitle.map((word)=>{return ' \"'+word+'\" '}).join("||"),
								")"].join("");
		var sEvent = ["(",aEvent.map((word)=>{return ' \"'+word+'\" '}).join("||"),
								")"].join("");
		return sTitle+' && '+sEvent;
	}

	return ["(",arr.map((word)=>{return ' \"'+word+'\" '}).join("||"),
								")"].join("")
	}

export {isArrEqual,generateYjyyData};