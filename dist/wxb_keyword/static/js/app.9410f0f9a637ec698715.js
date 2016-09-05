webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(100);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(87);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Title = __webpack_require__(97);
	
	var _Title2 = _interopRequireDefault(_Title);
	
	var _Event = __webpack_require__(91);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Combination = __webpack_require__(89);
	
	var _Combination2 = _interopRequireDefault(_Combination);
	
	var _HitRate = __webpack_require__(94);
	
	var _HitRate2 = _interopRequireDefault(_HitRate);
	
	var _EventList = __webpack_require__(92);
	
	var _EventList2 = _interopRequireDefault(_EventList);
	
	var _NewEvent = __webpack_require__(93);
	
	var _NewEvent2 = _interopRequireDefault(_NewEvent);
	
	var _vueRouter = __webpack_require__(99);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueResource = __webpack_require__(98);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueResource2.default);
	
	var router = new _vueRouter2.default();
	
	router.map({
		"/title": {
			component: _Title2.default
		},
		"/event": {
			component: _Event2.default,
			subRoutes: {
				"/list": {
					component: _EventList2.default
				},
				"/create": {
					component: _NewEvent2.default
				}
			}
		},
		"/combination": {
			component: _Combination2.default
		},
		"/hitRate": {
			component: _HitRate2.default
		}
	});
	
	router.redirect({
		'*': '/title',
		'/event': '/event/list'
	});
	
	router.start(_App2.default, "body");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var interfaceTransform = {
		"forbidden words": "forbiddenWords",
		"check words": "auditedWords",
		"low danger": "lowDangerWords"
	};
	var wordCount = {
		"downPush words": 10
	};
	var eventTypeList = [{ "id": 1, "name": "出访" }, { "id": 2, "name": "下基层" }, { "id": 3, "name": "下基层" }, { "id": 4, "name": "国际会议" }, { "id": 5, "name": "批示指示" }, { "id": 6, "name": "国内会议" }, { "id": 7, "name": "外宾接待" }, { "id": 8, "name": "有害文章" }, { "id": 9, "name": "相关人物" }, { "id": 10, "name": "社会事件" }, { "id": 11, "name": "国际热点" }];
	var pageSize = 20,
	    wordSize = 20;
	exports.interfaceTransform = interfaceTransform;
	exports.wordCount = wordCount;
	exports.pageSize = pageSize;
	exports.wordSize = wordSize;
	exports.eventTypeList = eventTypeList;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var server_path = "";
	exports.server_path = server_path;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVQ4T52TT1LCMBTG8+QAcgOGG3CEumEmbMQN6IpyAvUE6gmEEwgrgQ2waWbYtJ5AvEFvYJfVgcbvZVpM/8CMZqZD8pL88n3vPUhY41Up50zrW4QcQVQXWm8xDxKi8Y2UoX02mxNPlr5f/4rjZyxcXmshPkjrCJAWlucARUR035NyUoQYwFwp3hjg4hrfnf3aQikXsRGDEiEusBfYEDKyhfD58rWU3SqZi82mpff7AGc+caaZA2Svg9485jNV+YjfB9i56nc6q0MOZp4XwmsEMvs9OjKlOPDUl5JhZhAUaFDfQHVOAVIb72WA5wWaqFH0VoTNPa8LpUtkfWhXgxUYb1UZtiEzpVa4fFnMFXEPfMdxyBnGx2UKi6+npXxBfAr/bq4KJsOpPG4YyBxRrbbutdtbThxeHVgNNoHVYQnAAU5Sstut0HGNimRO0xg3Ww5iOtEeablMRbAZ7vFfyGxZHXuAlACnSmns/ra9gfwZUIT8C2BBxA+yxLp9Q9ywzgAAAABJRU5ErkJggg=="

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(63)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Pagination\\pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(72)
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\PopModal\\PopModal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var sortList = [{ "zh_name": "按热度", "name": "freq" }, { "zh_name": "按时间", "name": "date" }, { "zh_name": "按命中率", "name": "hitRate" }, { "zh_name": "按敏感度", "name": "sensitivity" }, { "zh_name": "综合", "name": "all" }];
	var rangeList = [{ "zh_name": "称谓词", "name": "title" }, { "zh_name": "组合词", "name": "combination" }, { "zh_name": "事件词", "name": "event" }, { "zh_name": "综合", "name": "all" }];
	exports.sortList = sortList;
	exports.rangeList = rangeList;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  replace: false, data: function data() {
	    return {
	      navList: [{ name: "称谓词", url: "/title" }, { name: "事件词", url: "/event" }, { name: "组合词", url: "/combination" }, { name: "命中率统计", url: "/hitRate" }],
	      curIndex: 0,
	      curUser: "陈璐"
	    };
	  },
	
	  methods: {
	    changeActive: function changeActive(index) {
	      this.curIndex = index;
	    }
	  },
	  ready: function ready() {}
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _defineProperty2 = __webpack_require__(33);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _InterfaceConstants = __webpack_require__(1);
	
	var _serverUrl = __webpack_require__(2);
	
	var _PopModal = __webpack_require__(17);
	
	var _PopModal2 = _interopRequireDefault(_PopModal);
	
	var _PopDialog = __webpack_require__(95);
	
	var _PopDialog2 = _interopRequireDefault(_PopDialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  name: "Card",
	
	  props: ["category", "title"],
	
	  components: {
	    "modal": _PopModal2.default,
	    "dialog": _PopDialog2.default
	  },
	
	  data: function data() {
	
	    return {
	      order: "freq",
	      wordList: [],
	      showModal: false,
	      showCreateModal: false
	    };
	  },
	  ready: function ready() {
	
	    this.fetchData({ category: this.category }, function (response) {
	      var data = response.json();
	      var category = _InterfaceConstants.interfaceTransform[this.category];
	
	      this.wordList = data[category];
	      var length = _InterfaceConstants.wordCount["downPush words"];
	
	      this.$dispatch("child-wordList", (0, _defineProperty3.default)({}, category, this.wordList.length < length ? this.wordList : this.wordList.slice(length)));
	    });
	  },
	
	
	  methods: {
	    fetchData: function fetchData() {
	      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var callback = arguments[1];
	
	      var defaultParams = {
	        pageSize: _InterfaceConstants.pageSize,
	        pageIndex: 1,
	        category: this.category,
	        orderBy: this.order,
	        desc: true
	      };
	      var data = (0, _assign2.default)({}, defaultParams, params);
	      this.$http.get(_serverUrl.server_path + "/title", {
	        params: data,
	        before: function before(request) {
	          if (this.previousRequest) {
	            this.previousRequest.abort();
	          }
	          this.previousRequest = request;
	        }
	      }).then(callback, function (err) {
	        console.log("请求服务器失败");
	      });
	    },
	    showDetail: function showDetail() {
	      this.showModal = true;
	    },
	    addWord: function addWord() {
	      this.showCreateModal = true;
	    }
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ImportBox = __webpack_require__(90);
	
	var _ImportBox2 = _interopRequireDefault(_ImportBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isIn(array, element) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == element) return true;
		}
		return false;
	}
	
	exports.default = {
		data: function data() {
			return {
				title_data: ["习近平", "习大大"],
				event_data: ["G20", "祝寿"],
				comb_data: [],
				fan_comb_data: [],
				title_input: "",
				event_input: "",
				s: false,
				ev: false,
				mouseX: 0,
				mouseY: 0,
				flag: 0,
				whichData: ""
			};
		},
	
		components: {
			ImportBox: _ImportBox2.default
		},
		methods: {
			makecomb: function makecomb() {
				for (var i = 0; i < this.title_data.length; i++) {
					for (var j = 0; j < this.event_data.length; j++) {
						var temp = this.title_data[i] + "-" + this.event_data[j];
						if (!isIn(this.comb_data, temp)) this.comb_data.push(temp);
					}
				}
			},
			addtitle: function addtitle() {
				this.title_data.push(this.title_input);
			},
			addevent: function addevent() {
				this.event_data.push(this.event_input);
			},
			toPYStr: function toPYStr() {
				for (var i = 0; i < this.comb_data.length; i++) {
					this.fan_comb_data.push(traditionalized(this.comb_data[i]));
				}
			},
			importWord: function importWord(e) {
				this.mouseX = e.clientX;
				this.mouseY = e.clientY;
				this.s = !this.s;
				this.flag = !this.flag;
	
				this.whichData = e.currentTarget.id;
			},
			cancleImportBox: function cancleImportBox() {
				this.flag = !this.flag;
				if (this.flag != 0) this.s = false;
				this.flag = 0;
			}
		}
	};
	
	
	function simpPYStr() {
		return '啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座锕嗳嫒瑷暧霭谙铵鹌媪骜鳌钯呗钣鸨龅鹎贲锛荜哔滗铋筚跸苄缏笾骠飑飙镖镳鳔傧缤槟殡膑镔髌鬓禀饽钹鹁钸骖黪恻锸侪钗冁谄谶蒇忏婵骣觇禅镡伥苌怅阊鲳砗伧谌榇碜龀枨柽铖铛饬鸱铳俦帱雠刍绌蹰钏怆缍鹑辍龊鹚苁骢枞辏撺锉鹾哒鞑骀绐殚赕瘅箪谠砀裆焘镫籴诋谛绨觌镝巅钿癫铫鲷鲽铤铥岽鸫窦渎椟牍笃黩簖怼镦炖趸铎谔垩阏轭锇锷鹗颚颛鳄诶迩铒鸸鲕钫鲂绯镄鲱偾沣凫驸绂绋赙麸鲋鳆钆赅尴擀绀戆睾诰缟锆纥镉颍亘赓绠鲠诟缑觏诂毂钴锢鸪鹄鹘鸹掴诖掼鹳鳏犷匦刿妫桧鲑鳜衮绲鲧埚呙帼椁蝈铪阚绗颉灏颢诃阖蛎黉讧荭闳鲎浒鹕骅桦铧奂缳锾鲩鳇诙荟哕浍缋珲晖诨馄阍钬镬讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫郏浃铗镓蛲谏缣戋戬睑鹣笕鲣鞯绛缰挢峤鹪鲛疖颌鲒卺荩馑缙赆觐刭泾迳弪胫靓阄鸠鹫讵屦榉飓钜锔窭龃锩镌隽谲珏皲剀垲忾恺铠锴龛闶钪铐骒缂轲钶锞颔龈铿喾郐哙脍狯髋诓诳邝圹纩贶匮蒉愦聩篑阃锟鲲蛴崃徕涞濑赉睐铼癞籁岚榄斓镧褴阆锒唠崂铑铹痨鳓诔缧俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢蔹奁潋琏殓裢裣鲢魉缭钌鹩蔺廪檩辚躏绫棂蛏鲮浏骝绺镏鹨茏泷珑栊胧砻偻蒌喽嵝镂瘘耧蝼髅垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈脔娈栾鸾銮囵荦猡泺椤脶镙榈褛锊呒唛嬷杩劢缦镘颡鳗麽扪焖懑钔芈谧猕祢渑腼黾缈缪闵缗谟蓦馍殁镆钼铙讷铌鲵辇鲶茑袅陧蘖嗫颟蹑苎咛聍侬哝驽钕傩讴怄瓯蹒疱辔纰罴铍谝骈缥嫔钋镤镨蕲骐绮桤碛颀颃鳍佥荨悭骞缱椠钤嫱樯戗炝锖锵镪羟跄诮谯荞缲硗跷惬锲箧锓揿鲭茕蛱巯赇虮鳅诎岖阒觑鸲诠绻辁铨阕阙悫荛娆桡饪轫嵘蝾缛铷颦蚬飒毵糁缫啬铯穑铩鲨酾讪姗骟钐鳝垧殇觞厍滠畲诜谂渖谥埘莳弑轼贳铈鲥绶摅纾闩铄厮驷缌锶鸶薮馊飕锼谡稣谇荪狲唢睃闼铊鳎钛鲐昙钽锬顸傥饧铴镗韬铽缇鹈阗粜龆鲦恸钭钍抟饨箨鼍娲腽纨绾辋诿帏闱沩涠玮韪炜鲔阌莴龌邬庑怃妩骛鹉鹜饩阋玺觋硖苋莶藓岘猃娴鹇痫蚝籼跹芗饷骧缃飨哓潇骁绡枭箫亵撷绁缬陉荥馐鸺诩顼谖铉镟谑泶鳕埙浔鲟垭娅桠氩厣赝俨兖谳恹闫酽魇餍鼹炀轺鹞鳐靥谒邺晔烨诒呓峄饴怿驿缢轶贻钇镒镱瘗舣铟瘾茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂镛莸铕鱿伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉橼鸢鼋钺郓芸恽愠纭韫殒氲瓒趱錾驵赜啧帻箦谮缯谵诏钊谪辄鹧浈缜桢轸赈祯鸩诤峥钲铮筝骘栉栀轵轾贽鸷蛳絷踬踯觯锺纣绉伫槠铢啭馔颞骓缒诼镯谘缁辎赀眦锱龇鲻偬诹驺鲰镞缵躜鳟讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄';
	}
	function ftPYStr() {
		return '啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案骯昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鱉憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟產闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕雕刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦復傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘桿柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鉤勾溝茍狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡掛褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴匯諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑跡激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競凈炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫瑯榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬貍離漓理李裏鯉禮莉荔吏栗麗厲勵礫歷利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟瞇醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪吶鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬妳匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽嚙鑷鎳涅您檸獰凝寧擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖拋咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啟契砌器氣迄棄汽泣訖掐洽牽扡釬鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌墻薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺剎沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陜擅贍膳善汕扇繕墑傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡臺泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探嘆炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔絳萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟為濰維葦萎委偉偽尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄兇胸匈洶雄熊休修羞朽嗅銹秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勛熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒巖延言顏閻炎沿奄掩眼衍演艷堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液壹壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤於盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓臟葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀癥鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙誌摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鐘衷終種腫重仲眾舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住註祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄準捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鉆纂嘴醉最罪尊遵昨左佐柞做作坐座錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';
	}
	
	function traditionalized(cc) {
		var str = '';
		for (var i = 0; i < cc.length; i++) {
			if (simpPYStr().indexOf(cc.charAt(i)) != -1) str += ftPYStr().charAt(simpPYStr().indexOf(cc.charAt(i)));else str += cc.charAt(i);
		}
		return str;
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				search_content: "",
				response_content: {},
				checkbox: {
					root: [],
					sub: []
				}
			};
		},
		ready: function ready() {
			this.search_onclick();
		},
	
	
		methods: {
			import_onclick: function import_onclick() {
				for (var i = 0; i < this.checkbox.sub.length; i++) {
					if (this.$parent.whichData == "title") {
						if (!isIn(this.$parent.title_data, this.checkbox.sub[i])) this.$parent.title_data.push(this.checkbox.sub[i]);
					} else {
						if (!isIn(this.$parent.event_data, this.checkbox.sub[i])) this.$parent.event_data.push(this.checkbox.sub[i]);
					}
				}
				this.$parent.s = false;
			},
			search_onclick: function search_onclick() {
				var temp_ca = "";
				this.$parent.whichData == "title" ? temp_ca = "称谓词" : temp_ca = "事件词";
	
				this.$http.get("/combination", {
					params: {
						category: temp_ca,
						size: 20,
						filter: this.search_content
					},
					before: function before(request) {
						if (this.previousRequest) {
							this.previousRequest.abort();
						}
						this.previousRequest = request;
					}
				}).then(function (response) {
					this.response_content = dataFrame(JSON.parse(response.body));
				}, function (err) {
					console.log("请求服务器失败");
				});
			},
			selectAll: function selectAll(e) {
				if (e.currentTarget.checked == true) {
					var tempIn = this.response_content[e.currentTarget.className];
	
					for (var i = 0; i < tempIn.length; i++) {
						if (!isIn(this.checkbox.sub, tempIn[i])) this.checkbox.sub.push(tempIn[i]);
					}
				} else {
					var tempOut = this.response_content[e.currentTarget.className];
	
					for (var i = 0; i < tempOut.length; i++) {
						deleteInArray(this.checkbox.sub, tempOut[i]);
					}
				}
			},
			hideAll: function hideAll(e) {
				e;
			}
		}
	};
	
	
	function dataFrame(oldObj) {
		var temp = {};
	
		for (var i = 0; i < oldObj.length; i++) {
			temp[oldObj[i].name] = oldObj[i].value;
		}
	
		return temp;
	}
	
	function isIn(array, element) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == element) return true;
		}
		return false;
	}
	
	function deleteInArray(array, element) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == element) {
				array.splice(i, 1);
				return true;
			}
		}
		return false;
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      isA: true
	    };
	  },
	
	
	  methods: {
	    toggleAcitive: function toggleAcitive(choice) {
	      console.log("choice---", choice);
	      this.isA = choice == 'A' ? true : false;
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Search = __webpack_require__(96);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _serverUrl = __webpack_require__(2);
	
	var _InterfaceConstants = __webpack_require__(1);
	
	var _pagination = __webpack_require__(16);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      eventTypeList: _InterfaceConstants.eventTypeList,
	      order: "freq",
	      option: 1,
	      eventList: []
	    };
	  },
	
	  components: {
	    "search": _Search2.default,
	    "pagination": _pagination2.default
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.fetchData(function (response) {
	      console.log("获取事件列表成功");
	      _this.eventList = response.json().eventList;
	      _this.totalSize = response.json().totalSize;
	    });
	  },
	
	  methods: {
	    fetchData: function fetchData(callback) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      var defaultParams = {
	        pageSize: _InterfaceConstants.pageSize,
	        wordSize: _InterfaceConstants.wordSize,
	        pageIndex: 1,
	        category: this.option,
	        orderBy: this.order,
	        desc: true
	      };
	      var data = (0, _assign2.default)({}, defaultParams, params);
	      this.$http.get(_serverUrl.server_path + "/event", {
	        params: data,
	        before: function before(request) {
	          if (this.previousRequest) {
	            this.previousRequest.abort();
	          }
	          this.previousRequest = request;
	        }
	      }).then(callback, function (err) {
	        console.log("请求服务器失败");
	      });
	    },
	    changeOption: function changeOption() {
	      var _this2 = this;
	
	      var searchContent = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
	
	      var params = searchContent ? { filter: searchContent } : {};
	      this.fetchData(function (response) {
	        _this2.eventList = response.json().eventList;
	        console.log("请求服务器成功");
	      }, params);
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _clientConstants = __webpack_require__(18);
	
	var _InterfaceConstants = __webpack_require__(1);
	
	var _serverUrl = __webpack_require__(2);
	
	var _pagination = __webpack_require__(16);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  components: {
	    "pagination": _pagination2.default
	  },
	
	  data: function data() {
	    return {
	      order: _clientConstants.sortList[0].name,
	      range: _clientConstants.rangeList[0].name,
	      wordList: [],
	      searchContent: ""
	
	    };
	  },
	
	  computed: {
	    sortList: function sortList() {
	      return _clientConstants.sortList;
	    },
	    rangeList: function rangeList() {
	      return _clientConstants.rangeList;
	    }
	  },
	
	  methods: {
	    fetchData: function fetchData(callback) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      var defaultParams = {
	        pageSize: _InterfaceConstants.pageSize,
	        pageIndex: 1,
	        orderBy: this.order,
	        range: this.range,
	        desc: true
	      };
	      var data = (0, _assign2.default)({}, defaultParams, params);
	      this.$http.get(_serverUrl.server_path + "/hitRate", {
	        params: data,
	        before: function before(request) {
	          if (this.previousRequest) {
	            this.previousRequest.abort();
	          }
	          this.previousRequest = request;
	        }
	      }).then(callback, function (err) {
	        console.log("请求服务器失败");
	      });
	    },
	    fetchServerData: function fetchServerData() {
	
	      var params = { filter: this.searchContent };
	      this.fetchData(function (response) {
	        this.wordList = response.json().wordList;
	        console.log("form请求成功");
	      }, params);
	    },
	    handlePageClick: function handlePageClick(page) {
	      console.log("子定义事件");
	      var params = { filter: this.searchContent, pageIndex: page };
	      this.fetchData(function (response) {
	        this.wordList = response.json().wordList;
	        console.log("pagination请求成功");
	      }, params);
	    }
	  },
	
	  ready: function ready() {
	    this.fetchData(function (response) {
	      this.wordList = response.json().wordList;
	      this.totalSize = response.json().totalSize;
	      console.log("初始请求成功");
	    });
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  name: "Pagination",
	
	  props: ["totalSize"],
	
	  data: function data() {
	
	    return {
	      toPage: 1,
	      curPage: 1,
	      pageList: [1, 2, 3, 4, 5]
	    };
	  },
	  ready: function ready() {},
	
	
	  methods: {
	    changePage: function changePage() {
	
	      var toPage = parseInt(this.toPage);
	      this.pageList = [0, 1, 2, 3, 4].map(function (index) {
	        return toPage + index;
	      });
	      this.clickPage(toPage);
	    },
	    clickPage: function clickPage(page) {
	      this.curPage = page;
	      console.log("in pagination");
	      this.$dispatch("handlePageClick", page);
	    },
	    changePagination: function changePagination(step) {
	      if (step === -1 && this.pageList[0] === 1 || step === 1 && this.pageList.slice(-1) === this.totalSize) return;
	      this.pageList = this.pageList.map(function (page) {
	        return page + step;
	      });
	      this.clickPage(this.curPage + step);
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InterfaceConstants = __webpack_require__(1);
	
	var _serverUrl = __webpack_require__(2);
	
	var sentRequest = { "get": null, "update": null, "delete": null, "patch": null };
	
	exports.default = {
	
	  name: "PopDialog",
	
	  props: ["category", "title", "show"],
	
	  data: function data() {
	
	    return {
	      content: ""
	    };
	  },
	
	
	  methods: {
	    closeModal: function closeModal() {
	      this.show = false;
	    },
	    createWord: function createWord() {
	
	      this.$http.post(_serverUrl.server_path + "/title", {
	        category: this.category,
	        word: this.content
	      }).then(function (response) {
	        console.log("创建成功");
	      }, function (err) {
	        console.log("创建失败");
	      });
	
	      this.closeModal();
	    }
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _InterfaceConstants = __webpack_require__(1);
	
	var _serverUrl = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sentRequest = { "get": null, "update": null, "delete": null, "patch": null };
	
	exports.default = {
	
	  name: "PopModal",
	
	  props: ["category", "title", "order", "show"],
	
	  data: function data() {
	
	    return {
	      toPage: 1,
	      curPage: 1,
	      searchContent: "",
	      pageList: [1, 2, 3, 4, 5],
	      wordList: ["习近平", "测试", "测试2", "测试3", "测试21"].map(function (word) {
	        return {
	          editing: false, value: word, content: word
	        };
	      })
	    };
	  },
	  ready: function ready() {
	
	    var params = {
	      category: this.category,
	      order: this.order
	    };
	    this.clickPage(1);
	  },
	
	
	  methods: {
	    fetchData: function fetchData() {
	      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var callback = arguments[1];
	
	      var defaultParams = {
	        pageSize: _InterfaceConstants.pageSize,
	        pageIndex: 1,
	        category: this.category,
	        orderBy: this.order,
	        desc: true
	      };
	      var data = (0, _assign2.default)({}, defaultParams, params);
	      this.$http.get(_serverUrl.server_path + "/title", {
	        params: data,
	        before: function before(request) {
	          if (sentRequest["get"]) {
	            sentRequest["get"].abort();
	          }
	          sentRequest["get"] = request;
	        }
	      }).then(callback, function (err) {
	        console.log("请求服务器失败");
	      });
	    },
	    addWord: function addWord() {},
	    getfilteredWord: function getfilteredWord() {
	      var _this = this;
	
	      console.log("----------on change ", this.searchContent);
	      this.fetchData({
	        filter: this.searchContent
	      }, function (response) {
	        var data = response.json()[_InterfaceConstants.interfaceTransform[_this.category]];
	        _this.wordList = data.map(function (word) {
	          return {
	            editing: false, value: word, content: word
	          };
	        });
	      });
	    },
	    changePage: function changePage() {
	
	      var toPage = parseInt(this.toPage);
	      this.pageList = [0, 1, 2, 3, 4].map(function (index) {
	        return toPage + index;
	      });
	      this.curPage = toPage;
	      this.clickPage(toPage);
	    },
	    clickPage: function clickPage(page) {
	      var _this2 = this;
	
	      this.curPage = page;
	
	      this.fetchData({ pageIndex: page, filter: this.searchContent }, function (response) {
	        var data = response.json()[_InterfaceConstants.interfaceTransform[_this2.category]];
	        _this2.wordList = data.map(function (word) {
	          return {
	            editing: false, value: word, content: word
	          };
	        });
	
	        var size = void 0;
	        if (size = response.json().totalSize) _this2.totalSize = size;
	      });
	    },
	    changePagination: function changePagination(step) {
	      if (step === -1 && this.pageList[0] === 1 || step === 1 && this.pageList.slice(-1) === this.totalSize) return;
	      this.pageList = this.pageList.map(function (page) {
	        return page + step;
	      });
	      this.clickPage(this.curPage + step);
	    },
	    closeModal: function closeModal() {
	      this.show = false;
	    },
	    removeWord: function removeWord(word) {
	      this.wordList.$remove(word);
	      this.$http.post(_serverUrl.server_path + "/title", {
	        category: this.category,
	        word: word,
	        action: "delete"
	      }).then(function (response) {
	        console.log("删除成功");
	      }, function (err) {
	        alert("删除失败");
	      });
	    },
	    editWord: function editWord(word) {
	      word.editing = true;
	    },
	    updateWord: function updateWord(prevWord, newWord) {
	      this.$http.post(_serverUrl.server_path + "/title", {
	        category: this.category,
	        prevWord: prevWord,
	        newWord: newWord,
	        action: "patch"
	      }, {
	        before: function before(request) {
	          console.log("prev word ", this.previousRequest);
	
	          var prevUpdateRequest = sentRequest["update"];
	          if (prevUpdateRequest && prevUpdateRequest.body.prevWord == request.body.prevWord) {
	            prevUpdateRequest.abort();
	          }
	          sentRequest["update"] = request;
	        }
	      }).then(function (response) {
	        console.log("更新成功");
	      }, function (err) {
	        return alert("更新失败");
	      });
	    },
	    doneEdit: function doneEdit(index) {
	      var prevWord = this.wordList[index].content;
	      var tempMsg = this.wordList[index].value;
	      this.wordList[index].content = tempMsg;
	      this.wordList[index].editing = false;
	
	      this.updateWord(prevWord, tempMsg);
	    }
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  name: "Search",
	
	  props: ["placeholder"],
	
	  data: function data() {
	
	    return {
	      searchContent: ""
	    };
	  },
	
	
	  methods: {
	    "onchangeEvent": function onchangeEvent() {
	      this.$dispatch("child-search-change", this.searchContent);
	    }
	  }
	
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Card = __webpack_require__(88);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _PopModal = __webpack_require__(17);
	
	var _PopModal2 = _interopRequireDefault(_PopModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkboxWords = ["high danger", "forbidden words", "check words", "low danger", "issued words"];
	var cardList = [{ title: "禁发", category: "forbidden words" }, { title: "审核", category: "check words" }, { title: "低危", category: "low danger" }];
	
	exports.default = {
	
	  components: {
	    "card": _Card2.default
	  },
	
	  data: function data() {
	
	    var duraionList = [{ name: "halfHour", value: 0.5, zh_value: "12小时" }, { name: "oneDay", value: 1, zh_value: "1天" }, { name: "oneWeek", value: 7, zh_value: "一周" }];
	    return {
	      duration: [],
	      cardList: cardList,
	      duraionList: duraionList,
	      childData: {},
	
	      checkedWords: [] };
	  },
	
	
	  events: {
	    "child-wordList": function childWordList(msg) {
	      console.log("dispath ", msg);
	      this.childData = (0, _assign2.default)({}, this.childData, msg);
	    }
	  },
	
	  ready: function ready() {},
	
	
	  methods: {
	    chooseAll: function chooseAll() {
	      if (this.checkedWords.length == checkboxWords.length) this.checkedWords = [];else this.checkedWords = checkboxWords;
	    },
	    chooseReverse: function chooseReverse() {
	      var _this = this;
	
	      this.checkedWords = checkboxWords.filter(function (word) {
	        return _this.checkedWords.indexOf(word) === -1;
	      });
	    }
	  }
	};

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 64 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 70 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 71 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n    <header class=\"header-wrapper navbar navbar-default\">\n     <div class=\"left\">\n          <div class=\"logo navbar-header\">\n            <span class=\"navbar-brand\">关键词</span>\n          </div>\n          <ul class=\"nav navbar-nav\">\n              <li v-for=\"navItem in navList\"\n                  :class=\"$index===curIndex?'active':'' \"\n                  @click=\"changeActive($index)\">\n                <a v-link=\" navItem.url \" >{{navItem.name}}</a>\n              </li>\n          </ul>\n     </div>\n       <div class=\"right\">\n          <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">管理用户：{{curUser}}</a></li>\n              <li><a href=\"#\">Another action</a></li>\n              <li><a href=\"#\">Something else here</a></li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">退出</a></li>\n          </ul>\n       </div>\n  </header>\n<div class=\"content\">\n        <router-view></router-view>\n</div>\n  <footer class=\"footer\">\n  <p><a href=\"#\">联系我们</a> | <a href=\"#\">帮助中心</a></p>\n  <p>中共中央网络和信息化领导小组办公室 & 中华人民共和国国家互联网信息办公室 版权所有</p>\n  <p>承建：中国科学院信息与工程研究所 2016.04</p>\n</footer>\n</div>\n\n\n\n\n\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-body\" :value=\"category\">\n    <div class=\"filter-radios\">\n      <div class=\"radio-item\">\n        <input type=\"radio\" value=\"freq\" v-model=\"order\" checked/>\n        <label >按热度</label>\n      </div>\n\n      <div class=\"radio-item\">\n        <input type=\"radio\" value=\"date\" v-model=\"order\" />\n        <label >按时间</label>\n      </div>\n    </div>\n    <div class=\"keywords\">\n        <ul>\n            <li v-for=\"keyword in wordList\" class=\"tag\">\n                <span class=\"label label-default\" >{{keyword}}</span>\n            </li>\n        </ul>\n        <div class=\"btn-group\">\n          <button class=\"more\" @click=\"showDetail\">查看详情</button>\n          <button class=\"add\" @click=\"addWord\">添加词汇</button>\n        </div>\n\n    </div>\n    <modal :category=\"category\" :title=\"title\" :order=\"order\" :show.sync=\"showModal\"></modal>\n    <dialog :category=\"category\" :title=\"title\" :show.sync=\"showCreateModal\"></dialog>\n</div>\n\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"pagination pagination-sm\">\n    <li class=\"pageList[0]===1?'disabled':''\"><a href=\"javascrpt:void(0)\" @click=\"changePagination(-1)\">&laquo;</a></li>\n    <li v-for=\"value in pageList\" :class=\"value===curPage?'active':''\" @click=\"clickPage(value)\">\n        <a href=\"javascrpt:void(0)\">{{value}}</a>\n    </li>\n    <li><a href=\"javascrpt:void(0)\">...</a></li>\n    <li><a href=\"javascrpt:void(0)\" @click=\"changePagination(1)\">&raquo;</a></li>\n</ul>\n<span class=\"input-wrapper\">转到第\n    <input type=\"number\" min=\"1\" :max=\"totalSize\" class=\"page-input\"\n        @keyup.13 = \"changePage\" v-model=\"toPage\"/>/{{totalSize}}页\n</span>\n";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"search-box\">\n       <img src=\"" + __webpack_require__(15) + "\" alt=\"search图标\"/>\n       <input type=\"text\"  :placeholder=\"placeholder\" class=\"search-input\" v-model=\"searchContent\" @change=\"onchangeEvent\">\n   </div>\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"global-actions clearfix\" >\n    <div class=\"search-box\">\n        <input type=\"text\"  placeholder=\"搜索\">\n        <button type=\"submit\" class=\"btn btn-default\">搜索</button>\n    </div>\n\n    <div class=\"btn-group btn-group-justified file-btn-group\">\n      <a href=\"#\" class=\"btn btn-default\">批量导入</a>\n      <a href=\"#\" class=\"btn btn-default\">批量导出</a>\n      <a href=\"#\" class=\"btn btn-default\">批量删除</a>\n    </div>\n\n\n</div>\n<div class=\"form-actions \">\n    <button class=\"action-button\" @click=\"chooseAll\">全选</button>\n    <button class=\"action-button\" @click=\"chooseReverse\">反选</button>\n</div>\n<div class=\"title-panels\">\n    <div class=\"panel panel-success\">\n      <div class=\"panel-heading\">\n        <input type=\"checkbox\" value=\"high danger\" v-model=\"checkedWords\"/>\n        <h3 class=\"panel-title\">最近一段时间的高危敏感词</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"filter-radios\">\n            <div class=\"radio-item\" v-for=\"item in duraionList\">\n              <input type=\"radio\" :value=\"item.value\" v-model=\"duration\" :checked=\"$index===0\"/>\n              <label >{{item.zh_value}}</label>\n            </div>\n        </div>\n        <div class=\"keywords\">\n          <ul>\n          <li v-for=\"keyword in highDanger\" class=\"tag\">\n              <span class=\"label\">{{keyword}}</span>\n          </li>\n          </ul>\n          <button class=\"more\">查看详情</button>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-success\" v-for=\"tempCard in cardList\">\n      <div class=\"panel-heading\">\n        <input type=\"checkbox\" :value=\"tempCard.category\" v-model=\"checkedWords\"/>\n        <h3 class=\"panel-title\">{{tempCard.title}}</h3>\n      </div>\n      <card :category=\"tempCard.category\" :title=\"tempCard.title\"></card>\n    </div>\n\n\n    <div class=\"panel panel-success\">\n      <div class=\"panel-heading\">\n        <input type=\"checkbox\" value=\"issued words\" v-model=\"checkedWords\" />\n        <h3 class=\"panel-title\">下发词</h3>\n      </div>\n      <div class=\"panel-body\">\n          <div>\n            \"审核\"\n            <ul>\n                <li v-for=\"keyword in childData['auditedWords']\" class=\"tag\">\n                    <span class=\"label label-default\" >{{keyword}}</span>\n                </li>\n            </ul>\n          </div>\n          <div>\n            \"低危\"\n            <ul>\n                <li v-for=\"keyword in childData['lowDangerWords']\" class=\"tag\">\n                    <span class=\"label label-default\" >{{keyword}}</span>\n                </li>\n            </ul>\n          </div>\n\n\n      </div>\n    </div>\n\n\n\n\n</div>\n";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"modal\" v-show=\"show\" _v-1df5cbf1=\"\">\n  <div class=\"modal-dialog\" _v-1df5cbf1=\"\">\n    <div class=\"modal-content\" _v-1df5cbf1=\"\">\n      <div class=\"modal-header\" _v-1df5cbf1=\"\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" @click=\"closeModal\" _v-1df5cbf1=\"\">×</button>\n        <h4 class=\"modal-title\" _v-1df5cbf1=\"\">{{title}}</h4>\n      </div>\n      <div class=\"modal-body\" _v-1df5cbf1=\"\">\n            <label _v-1df5cbf1=\"\">关键词</label>\n            <input type=\"text\" v-model=\"content\" _v-1df5cbf1=\"\">\n\n      </div>\n      <div class=\"modal-footer\" _v-1df5cbf1=\"\">\n        <button type=\"button\" class=\"my-btn\" data-dismiss=\"modal\" @click=\"closeModal\" _v-1df5cbf1=\"\">取消</button>\n        <button type=\"button\" class=\"my-btn\" @click=\"createWord\" _v-1df5cbf1=\"\">新建</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\n  <div id=\"importbox\" _v-2be03af4=\"\">\n\t<!--头部-->\n\t<div id=\"ib_title\" _v-2be03af4=\"\">导入数据</div>\n\n\t<!--主要容器-->\n\t<div id=\"ib_main_container\" _v-2be03af4=\"\">\n\t\t<div class=\"search_container\" _v-2be03af4=\"\">\n\t\t\t<input class=\"ib_search\" type=\"text\" v-model=\"search_content\" placeholder=\"{{search_content}}\" _v-2be03af4=\"\">\n\t\t\t<button class=\"btn btn-sm margin_small\" @click=\"search_onclick\" _v-2be03af4=\"\">搜索</button>\n\t\t</div>\n\n\t\t<div id=\"table_container\" _v-2be03af4=\"\">\n\t\t\t<div id=\"ib_table\" _v-2be03af4=\"\">\n\t\t\t\t<div v-for=\"array in response_content\" @click=\"hideAll\" _v-2be03af4=\"\">\n\t\t\t\t\t<div class=\"div_bg_green\" _v-2be03af4=\"\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"{{$key}}\" class=\"{{$key}}\" value=\"{{$key}}\" @click=\"selectAll\" v-model=\"checkbox.root\" _v-2be03af4=\"\">\n\t\t\t\t\t\t<label for=\"{{$key}}\" _v-2be03af4=\"\">{{$key}}</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div v-for=\"keyword in array\" class=\"margin_left\" _v-2be03af4=\"\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"{{keyword}}\" class=\"{{keyword}}\" value=\"{{keyword}}\" v-model=\"checkbox.sub\" _v-2be03af4=\"\">\n\t\t\t\t\t\t<label for=\"{{keyword}}\" _v-2be03af4=\"\">{{keyword}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"button_container\" _v-2be03af4=\"\">\n\t\t\t<button class=\"btn btn-sm float_right\" @click=\"import_onclick\" _v-2be03af4=\"\">导入</button>\n\t\t</div>\n\t</div>\n  </div>\n";

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"form-box clearfix\" _v-3879d731=\"\">\n          <div class=\"dropdown form-item\" _v-3879d731=\"\">\n              <label _v-3879d731=\"\">搜索事件类型</label>\n              <select class=\"select\" id=\"select\" v-model=\"option\" @change=\"changeOption\" _v-3879d731=\"\">\n                  <option v-for=\"eventType in eventTypeList\" :value=\"eventType.id\" $index=\"=1?'selected':''\" _v-3879d731=\"\">\n                      {{eventType.name}}\n                  </option>\n              </select>\n          </div>\n\n        <div class=\"filter-radios form-item\" _v-3879d731=\"\">\n            <label _v-3879d731=\"\">排序方式：</label>\n            <div class=\"radio-item\" _v-3879d731=\"\">\n              <input type=\"radio\" value=\"freq\" v-model=\"order\" checked=\"\" @change=\"changeOption\" _v-3879d731=\"\">\n              <label _v-3879d731=\"\">按热度</label>\n            </div>\n\n            <div class=\"radio-item\" _v-3879d731=\"\">\n              <input type=\"radio\" value=\"date\" v-model=\"order\" @change=\"changeOption\" _v-3879d731=\"\">\n              <label _v-3879d731=\"\">按时间</label>\n            </div>\n        </div>\n        <div class=\"search-wrapper form-item\" _v-3879d731=\"\">\n          <search placeholder=\"搜索\" @child-search-change=\"changeOption\" _v-3879d731=\"\"></search>\n        </div>\n    </div>\n    <div class=\"table-wrapper\" _v-3879d731=\"\">\n            <table class=\"my-table\" _v-3879d731=\"\">\n                <thead _v-3879d731=\"\">\n                  <tr _v-3879d731=\"\"><th _v-3879d731=\"\">序号</th><th _v-3879d731=\"\">事件名称</th><th _v-3879d731=\"\">关联词汇</th></tr>\n                </thead>\n                <tbody _v-3879d731=\"\">\n                    <tr v-for=\"event in eventList\" _v-3879d731=\"\">\n                    \t<td _v-3879d731=\"\">{{$index+1}}</td>\n                        <td _v-3879d731=\"\">{{event.name}}\n                        </td>\n                        <td _v-3879d731=\"\">\n                        \t<ul _v-3879d731=\"\">\n\t\t\t                    <li v-for=\"keyword in event.wordList\" class=\"tag\" _v-3879d731=\"\">\n\t\t\t                        <span class=\"label label-default\" _v-3879d731=\"\">{{keyword}}</span>\n\t\t\t                    </li>\n\t\t\t                </ul>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n\n\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"my-tab clearfix\" _v-5449e6f3=\"\">\n  <li :class=\"['tab-item',isA?'tab-active':''] \" @click=\"toggleAcitive('A')\" _v-5449e6f3=\"\"><a v-link=\" '/event/list' \" _v-5449e6f3=\"\">信息列表</a></li>\n  <li :class=\"['tab-item',!isA?'tab-active':''] \" @click=\"toggleAcitive('B')\" _v-5449e6f3=\"\"><a v-link=\" '/event/create' \" _v-5449e6f3=\"\">创建事件</a></li>\n</ul>\n<div _v-5449e6f3=\"\">\n  <router-view _v-5449e6f3=\"\"></router-view>\n</div>\n\n\n\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n<div _v-63877ce5=\"\">\n    <div class=\"search-box\" _v-63877ce5=\"\">\n        <img src=\"" + __webpack_require__(15) + "\" alt=\"search图标\" _v-63877ce5=\"\">\n        <input type=\"text\" placeholder=\"搜索\" class=\"search-input\" v-model=\"searchContent\" @change=\"fetchServerData\" _v-63877ce5=\"\">\n    </div>\n    <div class=\"form-box\" _v-63877ce5=\"\">\n        <div class=\"form-box-group\" _v-63877ce5=\"\">\n            <span class=\"form-box-label\" _v-63877ce5=\"\">排序方式</span>\n            <div class=\"radio-box clearfix\" _v-63877ce5=\"\">\n                <div class=\"radio-item\" v-for=\"item in sortList\" _v-63877ce5=\"\">\n                    <input type=\"radio\" :value=\"item.name\" v-model=\"order\" :checked=\"$index===0\" @change=\"fetchServerData\" _v-63877ce5=\"\">\n                    <label _v-63877ce5=\"\">{{item.zh_name}}</label>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"form-box-group\" _v-63877ce5=\"\">\n            <span class=\"form-box-label\" _v-63877ce5=\"\">查看范围</span>\n            <div class=\"radio-box clearfix\" _v-63877ce5=\"\">\n                <div class=\"radio-item\" v-for=\"item in rangeList\" _v-63877ce5=\"\">\n                    <input type=\"radio\" :value=\"item.name\" v-model=\"range\" :checked=\"$index===0\" @change=\"fetchServerData\" _v-63877ce5=\"\">\n                    <label _v-63877ce5=\"\">{{item.zh_name}}</label>\n                </div>\n            </div>\n          </div>\n    </div>\n    <div class=\"form-list\" _v-63877ce5=\"\">\n        <table class=\"my-table\" _v-63877ce5=\"\">\n              <thead _v-63877ce5=\"\">\n                <tr _v-63877ce5=\"\"><th _v-63877ce5=\"\">序号</th><th _v-63877ce5=\"\">关键词</th><th _v-63877ce5=\"\">敏感度</th><th _v-63877ce5=\"\">搜索量</th><th _v-63877ce5=\"\">命中数</th><th _v-63877ce5=\"\">命中率</th><th _v-63877ce5=\"\">热度趋势</th><th _v-63877ce5=\"\">时间</th><th _v-63877ce5=\"\">相关事件</th><th _v-63877ce5=\"\">传播路径及原文查看</th></tr>\n              </thead>\n              <tbody _v-63877ce5=\"\">\n                  <tr v-for=\"word in wordList\" _v-63877ce5=\"\">\n                      <td _v-63877ce5=\"\">{{word.id}}</td>\n                      <td _v-63877ce5=\"\">{{word.name}}</td>\n                      <td _v-63877ce5=\"\">{{word.sensitivity}}</td>\n                      <td _v-63877ce5=\"\">{{word.searchNum}}</td>\n                      <td _v-63877ce5=\"\">{{word.hitNum}}</td>\n                      <td _v-63877ce5=\"\">{{word.hitRate}}</td>\n                      <td _v-63877ce5=\"\">{{word.trend}}</td>\n                      <td _v-63877ce5=\"\">{{word.date}}</td>\n                      <td _v-63877ce5=\"\">{{word.event}}</td>\n                      <td _v-63877ce5=\"\">{{word.route}}</td>\n                  </tr>\n              </tbody>\n\n          </table>\n    </div>\n    <div class=\"page-wrapper\" _v-63877ce5=\"\">\n        <pagination :total-size=\"totalSize\" @handlepageclick=\"handlePageClick\" _v-63877ce5=\"\"></pagination>\n    </div>\n\n\n</div>\n\n\n";

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "\n    <ul class=\"nav nav-tabs\" _v-987a1fde=\"\">\ntet2\n    </ul>\n\n\n\n";

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"modal\" v-show=\"show\" _v-ebf92812=\"\">\n  <div class=\"modal-dialog\" _v-ebf92812=\"\">\n    <div class=\"modal-content\" _v-ebf92812=\"\">\n      <div class=\"modal-header\" _v-ebf92812=\"\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" @click=\"closeModal\" _v-ebf92812=\"\">×</button>\n        <h4 class=\"modal-title\" _v-ebf92812=\"\">{{title}}</h4>\n      </div>\n      <div class=\"modal-body\" _v-ebf92812=\"\">\n            <input type=\"text\" class=\"my-search\" placeholder=\"搜索\" @change=\"getfilteredWord\" v-model=\"searchContent\" _v-ebf92812=\"\">\n            <div class=\"table-wrapper\" _v-ebf92812=\"\">\n                <table class=\"my-table\" _v-ebf92812=\"\">\n                    <thead _v-ebf92812=\"\">\n                      <tr _v-ebf92812=\"\"><th _v-ebf92812=\"\">关键词</th><th _v-ebf92812=\"\">操作</th></tr>\n                    </thead>\n                    <tbody _v-ebf92812=\"\">\n                        <tr v-for=\"word in wordList\" _v-ebf92812=\"\">\n\n                            <td v-if=\"!word.editing\" _v-ebf92812=\"\">{{word.content}}</td>\n                            <td v-else=\"\" _v-ebf92812=\"\">\n                                <input class=\"editing-input\" type=\"text\" v-model=\"word.value\" @blur=\"doneEdit($index)\" @keyup.13=\"doneEdit($index)\" _v-ebf92812=\"\">\n                            </td>\n                            <td _v-ebf92812=\"\">\n                                <span class=\"action\" @click=\"editWord(word)\" _v-ebf92812=\"\">修改 | </span>\n                                <span class=\"action\" @click=\"removeWord(word)\" _v-ebf92812=\"\">删除</span>\n                            </td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </div>\n\n            <div class=\"wordList\" _v-ebf92812=\"\">\n\n            </div>\n      </div>\n      <div class=\"modal-footer\" _v-ebf92812=\"\">\n        <ul class=\"pagination pagination-sm\" _v-ebf92812=\"\">\n            <li class=\"pageList[0]===1?'disabled':''\" _v-ebf92812=\"\"><a href=\"javascrpt:void(0)\" @click=\"changePagination(-1)\" _v-ebf92812=\"\">«</a></li>\n            <li v-for=\"value in pageList\" :class=\"value===curPage?'active':''\" @click=\"clickPage(value)\" _v-ebf92812=\"\">\n                <a href=\"javascrpt:void(0)\" _v-ebf92812=\"\">{{value}}</a>\n            </li>\n            <li _v-ebf92812=\"\"><a href=\"javascrpt:void(0)\" _v-ebf92812=\"\">...</a></li>\n            <li _v-ebf92812=\"\"><a href=\"javascrpt:void(0)\" @click=\"changePagination(1)\" _v-ebf92812=\"\">»</a></li>\n        </ul>\n        <span class=\"input-wrapper\" _v-ebf92812=\"\">转到第\n            <input type=\"number\" min=\"1\" :max=\"totalSize\" @keyup.13=\"changePage\" v-model=\"toPage\" _v-ebf92812=\"\">/{{totalSize}}页\n        </span>\n\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"hello\" @click=\"cancleImportBox\" _v-eee1c046=\"\">\n\t<div id=\"main_container\" _v-eee1c046=\"\">\n\t\t<div id=\"input_container\" class=\"p3_container\" _v-eee1c046=\"\">\n\t\t\t<div id=\"title_word\" class=\"p3_word_container\" _v-eee1c046=\"\">\n\t\t\t\t<div class=\"panel_own panel-success\" _v-eee1c046=\"\">\n\t\t\t\t\t<div class=\"panel-heading\" _v-eee1c046=\"\">\n\t\t\t\t\t  <h3 class=\"panel-title\" _v-eee1c046=\"\">称谓词</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\" _v-eee1c046=\"\">\n\t\t\t\t\t\t<ul _v-eee1c046=\"\">\n\t\t\t\t\t\t\t<li v-for=\"keyword in title_data\" class=\"tag\" _v-eee1c046=\"\">\n\t\t\t\t\t\t\t\t<span class=\"label\" _v-eee1c046=\"\">{{keyword}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel_button_container\" _v-eee1c046=\"\">\n\t\t\t\t\t\t<input type=\"text\" class=\"float_right\" v-model=\"title_input\" placeholder=\"添加\" _v-eee1c046=\"\">\n\t\t\t\t\t\t<button class=\"btn btn-sm float_right\" @click=\"addtitle\" _v-eee1c046=\"\">添加</button>\n\t\t\t\t\t\t<button id=\"title\" class=\"btn btn-sm float_right\" @click=\"importWord\" _v-eee1c046=\"\">导入</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"p3_word_button_container\" _v-eee1c046=\"\">\n\t\t\t\t<button class=\"btn btn-default\" @click=\"makecomb\" _v-eee1c046=\"\">生成组合词</button>\n\t\t\t</div>\n\n\t\t\t<div id=\"event_word\" class=\"p3_word_container\" _v-eee1c046=\"\">\n\t\t\t\t<div class=\"panel_own panel-success\" _v-eee1c046=\"\">\n\t\t\t\t\t<div class=\"panel-heading\" _v-eee1c046=\"\">\n\t\t\t\t\t  <h3 class=\"panel-title\" _v-eee1c046=\"\">事件词</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\" _v-eee1c046=\"\">\n\t\t\t\t\t\t<ul _v-eee1c046=\"\">\n\t\t\t\t\t\t\t<li v-for=\"keyword in event_data\" class=\"tag\" _v-eee1c046=\"\">\n\t\t\t\t\t\t\t\t<span class=\"label\" _v-eee1c046=\"\">{{keyword}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel_button_container\" _v-eee1c046=\"\">\n\t\t\t\t\t\t<input type=\"text\" class=\"float_right\" v-model=\"event_input\" placeholder=\"添加\" _v-eee1c046=\"\">\n\t\t\t\t\t\t<button class=\"btn btn-sm float_right\" @click=\"addevent\" _v-eee1c046=\"\">添加</button>\n\t\t\t\t\t\t<button id=\"event\" class=\"btn btn-sm float_right\" @click=\"importWord\" _v-eee1c046=\"\">导入</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"output_container\" class=\"p3_container\" _v-eee1c046=\"\">\n\t\t\t<div class=\"panel_own panel-success\" _v-eee1c046=\"\">\n\t\t\t\t<div class=\"panel-heading\" _v-eee1c046=\"\">\n\t\t\t\t  <h3 class=\"panel-title\" _v-eee1c046=\"\">组合词生成预览</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" _v-eee1c046=\"\">\n\t\t\t\t\t<ul _v-eee1c046=\"\">\n\t\t\t\t\t\t<li v-for=\"keyword in comb_data\" class=\"tag\" _v-eee1c046=\"\">\n\t\t\t\t\t\t\t<span class=\"label\" _v-eee1c046=\"\">{{keyword}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel_button_container\" _v-eee1c046=\"\">\n\t\t\t\t\t<button class=\"btn btn-sm float_right\" @click=\"toPYStr\" _v-eee1c046=\"\">转化繁体</button>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t</div>\n\n\t\t<div id=\"output_container\" class=\"p3_container\" _v-eee1c046=\"\">\n\t\t\t<div class=\"panel_own panel-success\" _v-eee1c046=\"\">\n\t\t\t\t<div class=\"panel-heading\" _v-eee1c046=\"\">\n\t\t\t\t  <h3 class=\"panel-title\" _v-eee1c046=\"\">繁体组合词生成预览</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" _v-eee1c046=\"\">\n\t\t\t\t\t<ul _v-eee1c046=\"\">\n\t\t\t\t\t\t<li v-for=\"keyword in fan_comb_data\" class=\"tag\" _v-eee1c046=\"\">\n\t\t\t\t\t\t\t<span class=\"label\" _v-eee1c046=\"\">{{keyword}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  \n  <import-box v-if=\"s\" v-bind:style=\"{ top:mouseY+'px',left:mouseX+'px' }\" _v-eee1c046=\"\"></import-box>\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(61)
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(62)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Card\\Card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(75)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(73)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Combination\\Combination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(67)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Combination\\ImportBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(69)
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Event\\Event.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(68)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Event\\EventList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(71)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Event\\NewEvent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(70)
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\HitRate\\HitRate.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(66)
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\PopDialog\\PopDialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(79)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(64)
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Search\\Search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(65)
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Title\\Title.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ }
]);
//# sourceMappingURL=app.9410f0f9a637ec698715.js.map