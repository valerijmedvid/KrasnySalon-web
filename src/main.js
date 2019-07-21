import Vue from 'vue'
import App from './App.vue'
import VueGtm from 'vue-gtm'
import VueSilentbox from 'vue-silentbox'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGtm, {
  id: 'GTM-TBCPNWM', // Your GTM ID
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: false, // Whether or not display console logs debugs (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
});
Vue.use(VueSilentbox)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
