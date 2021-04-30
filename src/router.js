import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing.vue'
import Contact from './views/Contact.vue'

import Services from './views/Services.vue'
import Lashes from './views/Lashes.vue'
import Wax from './views/Wax.vue'
import Cosmetic from './views/Cosmetic.vue'

import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      metadata: {title: "Úvod"}
    },
    {
      path: '/uvod',
      name: 'home',
      component: Home,
      metadata: { title: "Úvod", hide: true }
    },
    {
      path: '/sluzby',
      name: 'services',
      component: Services,
      redirect: {name: 'lashes'},
      metadata: {title: "Služby"},
      children: [
        {
          path: '/objemove-prodluzovani-ras',
          name: 'lashes',
          component: Lashes,
          metadata: {title: "Objemové prodlužování řas"}
        },
        {
          path: '/parafinovy-zabal',
          name: 'wax',
          component: Wax,
          metadata: {title: "Parafínový zábal na ruce"}
        },
        {
          path: '/kosmetika',
          name: 'cosmetic',
          component: Cosmetic,
          metadata: {title: "Kosmetika SynCare"}
        },
      ]
    },
    {
      path: '/cenik',
      name: 'pricing',
      component: Pricing,
      metadata: {title: "Ceník"}
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: Contact,
      metadata: {title: "Kontakt"}
    },
    {
      path: '*',
      component: PageNotFound,
      metadata: {hide: true}
    }
  ]
})
