const admin = {
  state: {
    ssid: null
  },
  actions: {
    login ({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost  + 'admin/login.php',
          JSON.stringify({ username: username, password: password })
        )
        .then(r => r.data)
        .then(res => {
          if (res === 'credentials_error') {
            reject('credentials_error')
          } else if(res.length === 20) {
            commit('loadSSID', res)
            resolve()
          }
        })
        .catch((err) => {
          commit('logout')
          console.error(err)
        })
      })
    },
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost  + 'admin/getUserInfo.php',
          JSON.stringify({ ssid: this.state.ssid })
        )
        .then(r => r.data)
        .then(userInfo => {
          commit('loadUserInfo', userInfo)
          resolve()
        })
      })
    },
    editWebsiteInfo ({ commit }, { websiteId, newWebsiteId, name, description, address, themeColor }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost  + 'editWebsiteInfo.php',
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
        axios.post(apiHost  + 'deleteWebsite.php',
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

  }
}

export default admin