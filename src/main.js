// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
//vuex安装配置
import Vuex from 'vuex'
import Store from './vuex/index.js'
Vue.use(Vuex)
//移动端适配安装flexible.js
import 'lib-flexible/flexible.js'
//安装mint-ui框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//swipper安装与配置
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})

