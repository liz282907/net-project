import Vue from 'vue';
import App from './App';
import Theme from './components/Theme/Theme';
import Title from "./components/Title/Title";
import Event from "./components/Event/Event";
import Combination from "./components/Combination/Combination";
import HitRate from "./components/HitRate/HitRate";
import ExtractPaper from "./components/ExtractPaper/ExtractPaper";

import EventList from "./components/Event/EventList";
import NewEvent from "./components/Event/NewEvent";

import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();

router.map({
	"/theme":{
		component:Theme
	},
	"/title":{
		component:Title
	},
	"/event":{
		component:Event,
		subRoutes:{
			"/list":{
				component:EventList
			},
			"/create":{
				component:NewEvent
			}
		}
	},
	"/combination":{
		component:Combination
	},
	"/hitRate":{
		component: HitRate
	},
	"/extract":{
		component: ExtractPaper
	}
});

router.redirect({
  '*': '/theme',
  '/event':'/event/list'
})

router.start(App,"body");
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
