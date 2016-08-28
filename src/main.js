import Vue from 'vue';
import App from './App';
import Title from "./components/Title/Title";
import Event from "./components/Event/Event";
import Combination from "./components/Combination/Combination";
import HitRate from "./components/HitRate/HitRate";


import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
	"/title":{
		component:Title
	},
	"/event":{
		component:Event
	},
	"/combination":{
		component:Combination
	},
	"/hitRate":{
		component: HitRate
	}
});

router.redirect({
  '*': '/title'
})

router.start(App,"body");
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
