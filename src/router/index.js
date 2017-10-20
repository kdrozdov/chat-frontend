import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import SignUp from '@/pages/signup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'SignUp', component: SignUp }
  ]
})
