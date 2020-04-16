import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import i18n from 'vue-i18n'

Vue.use(Vuex)

var apiHost = 'https://lasagna.cf/api'

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
    login ({ dispatch, commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost + '/login.php',
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
        axios.post(apiHost + '/getAdminInfo.php',
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
        axios.post(apiHost + '/getAllWebsites.php',
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
    addWebsite ({ commit }, { name, description, address, themeColor }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost + '/addWebsite.php',
          JSON.stringify({ adminSsid: this.state.ssid, name: name, description: description, address: address, themeColor: themeColor })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject(resCode)
        })
      })
    },
    editWebsiteInfo ({ commit }, { websiteId, newWebsiteId, name, description, address, themeColor }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost + '/editWebsiteInfo.php',
          JSON.stringify({ adminSsid: this.state.ssid, websiteId: websiteId, newWebsiteId: newWebsiteId, name: name, description: description, address: address, themeColor: themeColor })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject(resCode)
        })
      })
    },
    deleteWebsite ({ commit }, { websiteId }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost + '/deleteWebsite.php',
          JSON.stringify({ adminSsid: this.state.ssid, websiteId: websiteId })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject(resCode)
        })
      })
    },
    controlWebsite ({}, { controlLink, action }) {
      return new Promise((resolve, reject) => {
        axios.post(controlLink,
          JSON.stringify({ adminSsid: this.state.adminSsid, action: action })  
        )
        .then(r => r.data)
        .then(res => {
          if(action === 'getStatus') {
            if(res !== 'open' && res !== 'closed') reject(res)
            resolve(res)
          }
          else if(action === 'start') {
            if(resCode === 'success') resolve()
            else reject(resCode)
          }
          else if(action === 'stop') {
            if(resCode === 'success') resolve()
            else reject(resCode)
          }
          else if(action === 'unlock') {
            if(resCode === 'success') resolve()
            else reject(resCode)
          }
          else if(action === 'lock') {
            if(resCode === 'success') resolve()
            else reject(resCode)
          }
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
    updateLayout(state, { websiteId, newX, newY }) {
      var website = state.admin.websites.find(website => website.id === websiteId)
      website.layout.x = newX
      website.layout.y = newY
    }
  }
})
