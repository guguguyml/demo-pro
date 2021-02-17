import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./mock/mock"
// import axios from "axios"
// Vue.prototype.$axios = axios
import './common/base.css'
import "./permission"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')