import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/summary',
        name: 'Summary',
        component: () => import( /* webpackChunkName: "about" */ '../views/summary.vue')
      },
      // 子应用路由配置
      {
        path: '/micr/*',
        name: 'MicrApp'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router