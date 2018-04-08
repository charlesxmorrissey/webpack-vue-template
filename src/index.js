import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/css/app.css'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
