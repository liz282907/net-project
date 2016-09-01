//这个文件纯粹是因为自己写接口不一致埋下的坑填的...
var interfaceTransform = {
	"forbidden words":"forbiddenWords",
		"check words":"auditedWords",
		"low danger":"lowDangerWords"
}
var wordCount = {
	"downPush words":10
};
var pageSize = 20;
export {interfaceTransform,wordCount,pageSize};
