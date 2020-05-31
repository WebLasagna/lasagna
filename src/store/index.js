import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import i18n from 'vue-i18n'

Vue.use(Vuex)

var apiHost = 'https://lasagna.cf/api/'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    ssid: null,
    user: null,
    admin: {
      websites: []
    },
    locale: navigator.language.split('-')[0]
  },
  actions: {
    
  },
  mutations: {
    changeLocale(state, newLocale) {
      state.locale = newLocale
    },
    logout (state) {
      state.ssid = null
      state.user = {}
    },
    loadSSID(state, data) {
      state.ssid = data
    },
    loadUserInfo(state, data) {
      state.user = data
    },
    updateLayout(state, { websiteId, newX, newY }) {
      var website = state.admin.websites.find(website => website.id === websiteId)
      website.layout.x = newX
      website.layout.y = newY
    }
  }
})
