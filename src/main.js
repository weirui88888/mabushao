/* eslint-disable no-undef */
// import Vue from 'vue'
// import App from './App.vue'
import App from '@/views/components/mbs-form.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import '@/components/global'
import cusPlugin from '@/plugins'
import toastPlugin from 'mbs-toast'

import 'normalize.css/normalize.css'
Vue.use(cusPlugin)
Vue.use(toastPlugin)

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
