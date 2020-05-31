const websites = {
  state: {
    all: []
  },
  actions: {
    get ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get(apiHost  + 'admin/websites',
          JSON.stringify({ ssid: this.state.ssid })
        )
        .then(r => r.data)
        .then(websites => {
          commit('loadWebsites', websites)
          resolve()
        })
        .catch(err => {
          commit('logout')
          reject(err)
        })
      })
    },
    add ({ commit }, { name, description, address, themeColor }) {
      return new Promise((resolve, reject) => {
        axios.post(apiHost  + 'admin/websites',
          JSON.stringify({ ssid: this.state.ssid, name: name, description: description, address: address, themeColor: themeColor })
        )
        .then(r => r.data)
        .then(resCode => {
          if(resCode === 'success') resolve()
          else reject(resCode)
        })
      })
    },
  },
  mutations: {
    loadWebsites(state, data) {
      state.all = data
    }
  }
}