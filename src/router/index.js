import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '../views/components/index.vue'),
    children: [
      {
        path: 'mbs-page-header',
        name: 'pageHeader',
        component: () => import(/* webpackChunkName: "pageHeader" */ '../views/components/mbs-page-header.vue')
      },
      {
        path: 'mbs-tag',
        name: 'mbsTag',
        component: () => import(/* webpackChunkName: "mbsTag" */ '../views/components/mbs-tag.vue')
      },
      {
        path: 'mbs-group-input',
        name: 'mbsGroupInput',
        component: () => import(/* webpackChunkName: "mbsGroupInput" */ '../views/components/mbs-group-input.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
