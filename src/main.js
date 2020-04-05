import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-144252871-1',
  router
})
Vue.use(VueAxios, axios)

let cc = require('./assets/scripts/cookieconsent.min.js')

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  axios,
  cc,
  render: h => h(App)
}).$mount('#app')

if(store.state.locale) {
  i18n.locale = store.state.locale
}