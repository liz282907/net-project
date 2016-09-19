var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

var fs = require("fs");
var bodyParser = require('body-parser')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
var jsonParser = bodyParser.json()

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.get("/title",function(req,res){
    var titleWords = JSON.parse(fs.readFileSync("./mock/title.json"));
    res.json(titleWords);
});

app.post("/title",function(req,res){
    var titleWords = JSON.stringify({"msg":"success"});
    res.json(titleWords);
});

app.get("/combination",function(req,res){
    var combinationWords = JSON.parse(fs.readFileSync("./mock/combination.json"));
    res.json(combinationWords);
});

app.get("/hitRate",function(req,res){
    var hitRateWords = JSON.parse(fs.readFileSync("./mock/hitRate.json"));
    res.json(hitRateWords);
});

app.get("/event",function(req,res){
    var eventWords = JSON.parse(fs.readFileSync("./mock/eventList.json"));
    res.json(eventWords);
});

// app.post("/event",function(req,res){
//    var titleWords = JSON.stringify({"msg":"success"});
//     res.json(titleWords);
// });

app.post("/event",jsonParser,function(req,res){
   console.log("------------req",req);
  if(!req.body.action){
    res.json(JSON.stringify({"msg":"事件创建成功success"}));
    return;
  }

  switch(req.body.action){
    case "delete":{
      var titleWords = JSON.stringify({"msg":"事件删除成功success"});
      res.json(titleWords);
      break;
    }
    case "patch":{
      var titleWords = JSON.stringify({"msg":"事件修改成功success"});
      res.json(titleWords);
      break;
    }
  }
});

app.get("/event/word",function(req,res){
    var eventWords = JSON.parse(fs.readFileSync("./mock/event_wordList.json"));
    res.json(eventWords);
});

app.post("/event/word",function(req,res){
    var titleWords = JSON.stringify({"msg":"success"});
    res.json(titleWords);
});
app.get("/theme",function(req,res){
   var packageWords = JSON.parse(fs.readFileSync("./mock/packageWord.json"));
    res.json(packageWords);
});

app.post("/transfer",function(req,res){
   var packageWords = JSON.stringify({"msg":"success"});
    res.json(packageWords);
});

app.get("/extract",function(req,res){
  //获得下拉菜单的数据
  console.log("-----------",req.query);
  switch(req.query.action){
    case "detail":{
      var paperContent = JSON.parse(fs.readFileSync("./mock/paperContent.json"));
      res.json(paperContent);
      break;
    }
    case "pull":{
      var paperList = JSON.parse(fs.readFileSync("./mock/paperList.json"));
      res.json(paperList);
    }
  }
  // if(req.body.action=="detail")
  //  var paperList = JSON.parse(fs.readFileSync("./mock/paperList.json"));
  //   res.json(paperList);
});

app.get("/paper/words",function(req,res){
    var wordList = JSON.parse(fs.readFileSync("./mock/event_wordList.json"));
    res.json(wordList);
});

//deprecated
app.post("/extract",function(req,res){
    // var content = JSON.parse(fs.readFileSync("./mock/paperContent.json"));
    // res.json(content);
    var wordList = JSON.parse(fs.readFileSync("./mock/event_wordList.json"));
      res.json(wordList);
});






module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
