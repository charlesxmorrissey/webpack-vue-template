import 'assets/css/app.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue App Config
Vue.config.productionTip = false

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
