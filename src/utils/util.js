function isArrEqual(arr1,arr2){
	if(!arr1 || !arr2 || arr1.length != arr2.length) return false;
	return arr1.every(function(data){
		return (arr2.indexOf(data)!==-1)
	});
}

function generateYjyyData(arr){
		return ["(",arr.map((word)=>{return ' \"'+word+'\" '}).join("||"),
								")"].join("")
	}

export {isArrEqual,generateYjyyData};