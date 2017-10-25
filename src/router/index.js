import Vue from 'vue'
import Router from 'vue-router'
import ChatLayout from '@/pages/layouts/chat'
import Login from '@/pages/login'
import SignUp from '@/pages/signup'
import Home from '@/pages/home'
import Room from '@/pages/room'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },

    {
      path: '/',
      component: ChatLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '', component: Home },
        { path: '/r/:id', component: Room }
      ]
    }
  ]
})
