import Vue from 'vue'
import App from './App.vue'
import 'assets/css/app.css'

// Vue App Config
Vue.config.productionTip = false

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
