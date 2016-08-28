var express = require("express"),
	app = express();

app.use(express.static(__dirname))
	.listen(9090,"127.0.0.1",function(err){
		if(err) console.log(err);
	})