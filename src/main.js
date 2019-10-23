/* eslint-disable no-undef */
// import Vue from 'vue'
import App from './App.vue'
// import App from '@/components/global/groupInput'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import '@/components/global'

import 'normalize.css/normalize.css'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
