import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false })
import axios from 'axios'
import i18n from '../i18n'
import snowflake from './snowflake'

Vue.use(Vuex)

var apiHost = 'https://lasagna.cf/api/'

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ],
  state: {
    userId: snowflake(),
    ssid: null,
    user: null,
    admin: {
      websites: []
    },
    locale: navigator.language.split('-')[0]
  },
  mutations: {
    changeLocale(state, newLocale) {
      i18n.locale = newLocale
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
