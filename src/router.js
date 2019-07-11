import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing.vue'
import Contact from './views/Contact.vue'

import Lashes from './views/Lashes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cenik',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: Contact
    },
    
    {
      path: '/objemove-prodluzovani-ras',
      name: 'lashes',
      component: Lashes
    },
    {
      path: '/parafinovy-zabal',
      name: 'wax',
      component: Home
    },
    {
      path: '/kosmetika',
      name: 'wellness',
      component: Home
    },
  ]
})
