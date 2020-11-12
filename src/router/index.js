import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index.js';

import SignIn from '../views/SignIn.vue'
import Home from '../views/Home.vue'

import Dashboard from '../views/Dashboard.vue'
import Dashboard2 from '../views/Dashboard2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: SignIn
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    //redirect: 'dashboard',
    children :[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/dashboard2',
        name: 'dashboard2',
        component: Dashboard2
      },      
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//グローバルビフォーガード
//ログインしていない場合はログイン画面へ戻す
router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters.isAuthenticated
  console.log('router.beforeEach [ ' + to.name + ' -> ' + from.name + ' ] isAuthenticated:' + isAuthenticated)
  
  // ...
  if (to.name !== 'Login' && !isAuthenticated) {
    console.log('go to login screen.')
    next({ name: 'Login' })
  }else{
    next()  
  }
})

export default router
