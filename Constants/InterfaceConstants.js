//这个文件纯粹是因为自己写接口不一致埋下的坑填的...
var interfaceTransform = {
	"forbidden words":"forbiddenWords",
		"check words":"auditedWords",
		"low danger":"lowDangerWords"
}
var wordCount = {
	"downPush words":10
};
var eventTypeList = [
	{"id":1,"name":"出访"},
	{"id":2,"name":"下基层"},
	{"id":3,"name":"下基层"},
	{"id":4,"name":"国际会议"},
	{"id":5,"name":"批示指示"},
	{"id":6,"name":"国内会议"},
	{"id":7,"name":"外宾接待"},
	{"id":8,"name":"有害文章"},
	{"id":9,"name":"相关人物"},
	{"id":10,"name":"社会事件"},
	{"id":11,"name":"国际热点"}];
var pageSize = 20,wordSize=20;
export {interfaceTransform,wordCount,pageSize,wordSize,eventTypeList};
