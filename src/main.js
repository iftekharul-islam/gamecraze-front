import './assets/scss/owl/owl.carousel.min.css'
import './assets/scss/owl/owl.theme.default.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.css'



global.jQuery = require('jquery/dist/jquery.min');
let $ = global.jQuery;
window.$ = $;

import 'popper.js'
import 'bootstrap'

let owl_carousel = require('./assets/js/owl/owl.carousel.min');
window.fn = owl_carousel;

let main = require('./assets/js/main')
window.fn = main;

import Vue from 'vue'
import App from './App.vue'

//global variable
Vue.prototype.$backendPath = 'https://gamingapp.test/storage/'
Vue.prototype.$upcomingGamesApi = 'https://api.rawg.io/api/games?dates=2020-06-01%2C2020-10-10&ordering=-added'
Vue.prototype.$popularGamesApi = 'https://api.rawg.io/api/games?dates=2020-01-01,2020-05-31&ordering=-added'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './router/routes'
const router = new VueRouter({
  mode: 'history',
  routes
});

import Vuex from 'vuex'
Vue.use(Vuex)

import {storage} from "./store";
const store = new Vuex.Store(storage)

import axios from 'axios'

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://gamingapp.test/api/'
    })
  }
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
