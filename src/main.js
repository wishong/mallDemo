import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible/flexible.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  url: 'http://106.54.54.237:8000/api/v1/category',
}).then(res => {
  console.log(res);
})