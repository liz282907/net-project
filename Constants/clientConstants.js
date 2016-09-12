
var sortList = [
	{"zh_name":"按热度","name":"freq"},
	{"zh_name":"按时间","name":"date"},
	{"zh_name":"按命中率","name":"hitRate"},
	{"zh_name":"按敏感度","name":"sensitivity"},
	{"zh_name":"综合","name":"all"}
];
var rangeList = [
	{"zh_name":"称谓词","name":"title"},
	{"zh_name":"组合词","name":"combination"},
	{"zh_name":"事件词","name":"event"},
	{"zh_name":"综合","name":"all"}
];

var sysTypes = [
	{name:"yzlj",zh_name:"预置拦截"},
	{name:"zzyh",zh_name:"九宫格"},
	{name:"jhss",zh_name:"聚合搜索"},
];
var fileTypes = ["txt"];

export {sortList,rangeList,sysTypes,fileTypes};
