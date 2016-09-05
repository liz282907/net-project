import Vue from 'vue';
import App from './App';
import Title from "./components/Title/Title";
import Event from "./components/Event/Event";
import Combination from "./components/Combination/Combination";
import HitRate from "./components/HitRate/HitRate";

import EventList from "./components/Event/EventList";
import NewEvent from "./components/Event/NewEvent";

import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();

router.map({
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
	}
});

router.redirect({
  '*': '/title',
  '/event':'/event/list'
})

router.start(App,"body");
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
