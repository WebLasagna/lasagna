import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import i18n from 'vue-i18n'

Vue.use(Vuex)

var apiBaseUrl = 'https://lasagna.cf/api'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    ssid: null,
    user: null,
    admin: {
      websites: null,
      searchResults: null
    },
    locale: navigator.language.split('-')[0]
  },
  actions: {
    login ({ dispatch, commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/login.php',
          JSON.stringify({ username: username, password: password })
        )
        .then(r => r.data)
        .then(res => {
          if (res === 'credentials_error') {
            reject('credentials_error')
          } else if(res.length === 20) {
            commit('loadSSID', res)
            dispatch('getAdminInfo').then(() => {
              resolve()
            })
          }
        })
        .catch((err) => {
          commit('logout')
          console.error(err)
        })
      })
    },
    getAdminInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/getAdminInfo.php',
          JSON.stringify({ adminSsid: this.state.ssid })
        )
        .then(r => r.data)
        .then(userInfo => {
          commit('loadUserInfo', userInfo)
          resolve()
        })
      })
    },
    getAllWebsites ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/getAllWebsites.php',
          JSON.stringify({ adminSsid: this.state.ssid })
        )
        .then(r => r.data)
        .then(allWebsites => {
          commit('loadAllWebsites', allWebsites)
          resolve()
        })
        .catch(err => {
          console.error(err)
          commit('logout')
          router.push('/' + i18n.t('links.admin.home'))
        })
      })
    },
    getWebsiteInfo ({ commit }, { websiteId }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/getWebsiteInfo.php',
          JSON.stringify({ adminSsid: this.state.ssid, websiteId: websiteId })
        )
        .then(r => r.data)
        .then(websiteInfo => {
          commit('loadWebsiteInfo', websiteInfo)
          resolve()
        })
      })
    },
    addWebsite ({ commit }, { name, description, address, themeColor }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/addWebsite.php',
          JSON.stringify({ adminSsid: this.state.ssid, name: name, description: description, address: address, themeColor: themeColor })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject()
        })
      })
    },
    editWebsiteInfo ({ commit }, { websiteId, newWebsiteId, name, description, address, themeColor }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/editWebsiteInfo.php',
          JSON.stringify({ adminSsid: this.state.ssid, websiteId: websiteId, newWebsiteId: newWebsiteId, name: name, description: description, address: address, themeColor: themeColor })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject()
        })
      })
    },
    deleteWebsite ({ commit }, { websiteId }) {
      return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + '/deleteWebsite.php',
          JSON.stringify({ adminSsid: this.state.ssid, websiteId: websiteId })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject()
        })
      })
    },
    searchDomainName ({ commit }, { domainName }) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.freenom.com/v2/domain/search?domainname=' + domainName + '&domaintype=FREE')
        .then(r => r.data)
        .then(searchResults => {
          commit('loadSearchResults', searchResults)
          resolve()
        })
      })
    }
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
    loadAllWebsites(state, data) {
      state.admin.allWebsites = data
    },
    loadWebsiteInfo(state, data) {
      state.admin.currentWebsite = data
    },
    loadSearchResults(state, data) {
      state.admin.searchResults = data
    }
  }
})
