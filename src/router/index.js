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
      },
      {
        path: 'mbs-loading',
        name: 'mbsLoading',
        component: () => import(/* webpackChunkName: "mbsLoaing" */'../views/components/mbs-loading.vue'),
        meta: {
          title: '全局loading'
        }
      },
      {
        path: 'mbs-pagination',
        name: 'mbsPagination',
        component: () => import(/* webpackChunkName: "mbsPage" */'../views/components/mbs-pagination.vue'),
        meta: {
          title: '分页'
        }
      },
      {
        path: 'mbs-form',
        name: 'mbsForm',
        component: () => import(/* webpackChunkName: "mbsForm" */'../views/components/mbs-form.vue'),
        meta: {
          title: 'Form表单生成器'
        }
      },
      {
        path: 'mbs-toast',
        name: 'mbsToast',
        component: () => import(/* webpackChunkName: "mbsToast" */'../views/components/mbs-toast.vue'),
        meta: {
          title: '自定义toast插件'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  setTimeout(() => {
  // eslint-disable-next-line no-use-before-define
    var hmt = hmt || [];
    (function () {
    // 每次执行前，先移除上次插入的代码
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove()
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?9f6fc57c16036f9de3fa0d2644f21886'
      hm.id = 'baidu_tj'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  }, 0)
})

export default router
