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
      websites: [
        {
          id: 1,
          name: "Lasagna",
          description: "Site personnel",
          content: "<a href='https://lasagna.cf/mftp'>Accéder au MFTP</a>",
          address: "lasagna.cf",
          themeColor: "#ff9800",
          controlLink: 'https://lasagna.cf/api/controlWebsite.php',
          layout: {"x":0,"y":0,"w":3,"h":5,"i":"1"}
        },
        {
          id: 2,
          name: "FGBerlin.com",
          description: "Site des élèves du Lycée français de Berlin",
          content: "<a href='https://lasagna.cf/mftpfg'>Accéder au MFTP</a>",
          address: "fgberlin.com",
          themeColor: "#4caf50",
          layout: {"x":3,"y":0,"w":3,"h":5,"i":"2"}
        },
        {
          id: 3,
          name: "BOHKOO",
          description: "Boutique en ligne de BOHKOO, marque de streetwear.",
          content: "<a href='https://lasagna.cf/mftpbohkoo'>Accéder au MFTP</a>",
          address: "bohkoo.store",
          themeColor: "#000",
          layout: {"x":6,"y":0,"w":3,"h":5,"i":"3"}
        }
      ]
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
