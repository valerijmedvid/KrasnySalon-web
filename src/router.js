import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing.vue'
import Contact from './views/Contact.vue'

import Services from './views/Services.vue'
import Lashes from './views/Lashes.vue'
import Wax from './views/Wax.vue'
import Cosmetic from './views/Cosmetic.vue'

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
      path: '/sluzby',
      name: 'services',
      component: Services,
      redirect: {name: 'lashes'},
      children: [
        {
          path: 'objemove-prodluzovani-ras',
          name: 'lashes',
          component: Lashes
        },
        {
          path: 'parafinovy-zabal',
          name: 'wax',
          component: Wax
        },
        {
          path: 'kosmetika',
          name: 'cosmetic',
          component: Cosmetic
        },
      ]
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: Contact
    },
  ]
})
