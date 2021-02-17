import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    redirect: "/index",
    component: () => import('@/views/Layout.vue'),
    children: [{
        path: '/index',
        name: 'index',
        meta: {
          alive: false
        },
        component: () => import('@/views/index/index'),
      },
      {
        path: '/account/all',
        name: 'account_all',
        meta: {
          bread: ["账户管理", "所有人员"],
          alive: false
        },
        component: () => import('@/views/account/all'),
      },
      {
        path: '/product/all',
        name: 'product_all',
        meta: {
          bread: ["产品管理", "全部人员"],
          alive: true
        },
        component: () => import('@/views/product/all'),
      },
      {
        path: '/product/detail',
        name: 'product_detail',
        meta: {
          bread: ["产品管理", "全部人员", "产品详情"],
          alive: true
        },
        component: () => import('@/views/product/detail'),
      },
      {
        path: "/orders/all",
        name: "orders_all",
        meta: {
          bread: ["订单管理", "所有订单"]
        },
        component: () => import("@/views/orders/index.vue")
      },
      {
        path: "/orders/create",
        name: "orders_create",
        component: () => import("@/views/orders/create.vue")
      },
      {
        path: "/customer/info",
        name: "customer_info",
        meta: {
          bread: ["客户管理", "基本信息"]
        },
        component: () => import("@/views/customer/index.vue")
      },
      {
        path: "/my",
        name: "my",
        meta: {
          bread: ["客户管理", "基本信息"]
        },
        component: () => import("@/views/my/my.vue")
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      alive: false
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: "*",
    name: 404,
    meta: {
      alive: false
    },
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router