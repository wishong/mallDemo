import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue(); // 事件线

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
