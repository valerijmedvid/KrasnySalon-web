import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing.vue'
import Contact from './views/Contact.vue'

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
      path: '/sluzby',
      name: 'services',
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
      component: Home
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
