import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index1.css'

import axios from 'axios'
axios.defaults.baseURL ='/admin'
//每次发送axios，就会有token缓存
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios



import 'lib-flexible'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
