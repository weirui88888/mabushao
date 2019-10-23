/* eslint-disable no-undef */
// import Vue from 'vue'
import App from './App.vue'
// import App from '@/components/global/groupInput'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import '@/components/global'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
