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
    component: () => import(/* webpackChunkName: "dashboard" */'../views/dashboard'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '../views/components/index.vue'),
    children: [
      {
        path: 'mbs-page-header',
        name: 'pageHeader',
        component: () => import(/* webpackChunkName: "pageHeader" */ '../views/components/mbs-page-header.vue'),
        meta: {
          title: '页面头部'
        }
      },
      {
        path: 'mbs-tag',
        name: 'mbsTag',
        component: () => import(/* webpackChunkName: "mbsTag" */ '../views/components/mbs-tag.vue'),
        meta: {
          title: '自定义tag'
        }
      },
      {
        path: 'mbs-group-input',
        name: 'mbsGroupInput',
        component: () => import(/* webpackChunkName: "mbsGroupInput" */ '../views/components/mbs-group-input.vue'),
        meta: {
          title: '输入框组'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
