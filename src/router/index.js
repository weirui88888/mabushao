import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */'../views/dashboard')
  },
  {
    path: '/page-header',
    name: 'pageHeader',
    component: () => import(/* webpackChunkName: "pageHeader" */ '../views/components/pageHeader.vue')
  },
  {
    path: '/mbs-tag',
    name: 'mbsTag',
    component: () => import(/* webpackChunkName: "mbsTag" */ '../views/components/mbsTag.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
