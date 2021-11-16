import '@/assets/scss/owl/owl.carousel.min.css'
import '@/assets/scss/owl/owl.theme.default.min.css'
// import './assets/admin/dist/css/adminlte.css'
import "vue-select/dist/vue-select.css";
import 'v-toaster/dist/v-toaster.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
//Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.css'
import 'wow.js/css/libs/animate.css'

import Lingallery from 'lingallery';

Vue.component('lingallery', Lingallery);

import VueGoodWizard from 'vue-good-wizard';

Vue.use(VueGoodWizard);
import WOW from 'wow.js'

new WOW().init();

global.jQuery = require('jquery/dist/jquery.min');
let $ = global.jQuery;
window.$ = $;

// import 'popper.js'
import 'bootstrap'

let owl_carousel = require('./assets/js/owl/owl.carousel.min');
window.fn = owl_carousel;

let bootstrap_select_js = require('./assets/js/bootstrap-select.min.js')
window.fn = bootstrap_select_js;

let main = require('./assets/js/main')
window.fn = main;

let adminLte = require('./assets/admin/dist/js/adminlte')
window.fn = adminLte;


import Vue from 'vue'
import App from './App.vue'
//vue-otp-input
import OtpInput from "@bachdgvn/vue-otp-input";

Vue.component("v-otp-input", OtpInput);

//For Vue select
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

// Vue auto suggest
import VueAutosuggest from "vue-autosuggest";

Vue.use(VueAutosuggest);

//vue-router
import router from "./router/routes";

//global variable
Vue.prototype.$gamehubStorageApi = process.env.VUE_APP_GAMEHUB_STORAGE_API
Vue.prototype.$upcomingGamesApi = process.env.VUE_APP_UPCOMING_GAMES_API
Vue.prototype.$popularGamesApi = process.env.VUE_APP_POPULAR_GAMES_API
Vue.prototype.$baseApi = process.env.VUE_APP_BASE_API
Vue.prototype.$gamehubApi = process.env.VUE_APP_GAMEHUB_BASE_API

//vue swal
import VueSwal from 'vue-swal'

Vue.use(VueSwal);


// for v-toaster
import Toaster from 'v-toaster'

Vue.use(Toaster, {timeout: 5000});

//vue-clipboard
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

//vue-suggesion
import VueSuggestion from 'vue-suggestion'

Vue.use(VueSuggestion)

//vee-validate
import {ValidationProvider} from 'vee-validate';
import {ValidationObserver} from "vee-validate";
import * as VeeValidate from "vee-validate";

Vue.use(VeeValidate, { events: 'change', setInteractionMode: 'Eager'});
Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import './validation'

//vuex
import Vuex from 'vuex'

Vue.use(Vuex)
import {storage} from "./store";

const store = new Vuex.Store(storage)

//axios
import axios from 'axios'

import i18n from './i18n'


Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});

Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: process.env.VUE_APP_GAMEHUB_BASE_API,
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
    }
});


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    i18n,


    watch: {
        '$route'(to) {
            if (to.name == 'Payment') {
                location.reload();
            }
        }
    }
}).$mount('#app')
