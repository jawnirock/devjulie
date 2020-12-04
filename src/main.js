// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// =============== Base libraries integration ==================
import Vue from 'vue'
import VueTranslate from 'vue-translate-plugin'
import VueMasonry from 'vue-masonry-css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import inViewportDirective from 'vue-in-viewport-directive'
import ZoomOnHover from "vue-zoom-on-hover";

Vue.use(ZoomOnHover);
Vue.directive('in-viewport', inViewportDirective)
Vue.use(VueAxios, axios)
Vue.use(VueMasonry);
Vue.use(VueTranslate)

import store from './store'
import router from './router'

// ===== Bootstrap components integration (JQuery needed) ======
window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')

// ======================= Base Component ======================
import App from './App'

// ======================== Vue Instance =======================
/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
