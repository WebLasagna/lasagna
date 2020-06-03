<template>
  <div id="admin">
    <div class="row">
      <div class="container">
        <div class="center">
          <h1>{{ $t('admin.title') }}</h1>
          <div class="row">
            <h2>{{ $t('admin.websites') }}</h2>
            <div class="row" v-if="websitesLoading">
              <p>Loading...</p>
            </div>
            <div class="layout-row" v-if="!websitesLoading && !addWebsiteForm.show">
              <grid-layout :layout.sync="layout" :col-num="12" :row-height="30" :is-draggable="dragMode" :is-resizable="false" :is-mirrored="false" :vertical-compact="true" :margin="[20, 20]" :use-css-transforms="true">
                <grid-item v-for="website in layout" :x="website.x" :y="website.y" :w="website.w" :h="website.h" :i="website.i" :key="website.i" @moved="moveEvent">
                  <div :class="['card waves-effect', { 'waves-light': website.themeColor === 'black' }]" :style="'background-color: ' + website.themeColor + ';'" @click="goToWebsitePage(website.id)">
                    <div class="card-content">
                      <span class="card-title">{{ website.name }}</span>
                      <p>{{ website.description }}</p>
                      <a class="website-address" :href="'https://' + website.address" target="_blank">{{ website.address }}</a>
                    </div>
                  </div>
                </grid-item>
              </grid-layout>
            </div>
            <div class="row" v-else>
              <b>{{ $t('admin.noWebsites') }}</b>
            </div>
            <div class="center" v-if="!addWebsiteForm.show">
              <div class="col">
                <a class="btn-floating btn-large black waves-effect waves-light" :class="{ 'grey darken-3': dragMode }" @click="toggleDragMode()"><i class="material-icons">filter_none</i></a>
              </div>
              <div class="col">
                <a class="btn-floating btn-large black waves-effect waves-light" @click="addWebsiteForm.show = true"><i class="material-icons">add</i></a>
              </div>
            </div>
            <div class="row" v-else>
              <div class="card quite-black" :class="addWebsiteForm.themeColor">
                <div class="card-content">
                  <form @submit.prevent="addWebsite()" autocomplete="off">
                    <input type="text" class="input-card-title" v-model="addWebsiteForm.name">
                    <div class="input-field">
                      <textarea class="materialize-textarea input-card-content" id="website-description" v-model="addWebsiteForm.description"></textarea>
                      <label for="website-description">{{ $t('admin.addWebsiteForm.description') }}</label>
                    </div>
                    <div class="input-field">
                      <input type="text" class="input-link" id="website-address" v-model="addWebsiteForm.address">
                      <label for="website-address">{{ $t('admin.addWebsiteForm.address') }}</label>
                    </div>
                    <div class="input-field">
                      <input type="text" id="website-theme-color" v-model="addWebsiteForm.themeColor">
                      <label for="website-theme-color">{{ $t('admin.addWebsiteForm.themeColor') }}</label>
                    </div>
                    <div class="col">
                      <a class="btn-floating grey waves-effect waves-light" @click="addWebsiteForm.show = false"><i class="material-icons">arrow_back</i></a>
                    </div>
                    <div class="col">
                      <button class="btn grey waves-effect waves-light" type="submit" :disabled="!addWebsiteForm.name || !addWebsiteForm.description || !addWebsiteForm.address || !addWebsiteForm.themeColor || addWebsiteForm.buttonCooldowned"><i class="material-icons left">add</i>{{ $t('admin.addWebsiteForm.add') }}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <router-link class="btn-large black waves-effect waves-light" :to="'/' + $t('links.admin.myAccount')"><i class="material-icons left">account_circle</i>{{ $t('admin.myAccount.title') }}</router-link>
          <div class="row"> 
            <router-link class="btn-floating btn-back black waves-effect waves-light" to="/"><i class="material-icons">arrow_back</i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'

export default {
  name: 'Admin',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      websitesLoading: false,
      dragMode: false,
      addWebsiteForm: {
        show: false,
        name: null,
        description: null,
        address: null,
        themeColor: null,
        buttonCooldowned: false
      }
    }
  },
  mounted() {
    this.$store.dispatch('getWebsites').then(() => {
      this.websitesLoading = false
    })
  },
  computed: {
    websites() {
      return this.$store.state.admin.allWebsites
    },
    layout() {
      var layout = []
      this.$store.state.admin.websites.forEach(website => {
        layout.push(Object.assign(website.layout, { "id": website.id, "name": website.name, "description": website.description, "content": website.content, "address": website.address, "themeColor": website.themeColor }))
      })
      return layout
    }
  },
  methods: {
    toggleDragMode() {
      if(this.dragMode) this.dragMode = false
      else this.dragMode = true
    },
    moveEvent(i, newX, newY) {
      var website = this.$store.state.admin.websites.find(website => website.layout.i === i)
      this.$store.commit('updateLayout', { websiteId: website.id, newX: newX, newY: newY })
    },
    goToWebsitePage(websiteId) {
      if(this.dragMode) return
      this.$router.push('/' + this.$t('links.admin.websitePage') + '/' + websiteId)
    },
    addWebsite() {
      this.addWebsiteForm.buttonCooldowned = true
      this.$store.dispatch('addWebsite', { name: this.addWebsiteForm.name, description: this.addWebsiteForm.description, address: this.addWebsiteForm.address, themeColor: this.addWebsiteForm.themeColor }).then(() => {
        this.$store.dispatch('getAllWebsites').then(() => {
          this.addWebsiteForm.show = false
          this.addWebsiteForm.name = null
          this.addWebsiteForm.description = null
          this.addWebsiteForm.address = null
          this.addWebsiteForm.themeColor = null
          this.addWebsiteForm.buttonCooldowned = false
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  -webkit-transition: ease-in-out .5s;
  transition: ease-in-out .5s;

  .card-content {
    width: 100%;
  }
}
.card-title,
input.input-card-title {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
}

p,
textarea.input-card-content {
  color: #fff;
  font-size: 1.3rem;
}

.lighten-3 input, .lighten-3 textarea,
.lighten-4 input, .lighten-4 textarea,
.lighten-5 input, .lighten-5 textarea {
  color: #000 !important;
}

.input-link {
  color: #039be5;
  font-weight: 600;
}

.input-field.flex {
  display: inline-flex;
}

.cinput {
  min-width: 300px;
  margin: 15px 15px 0 0;
  height: 35px;
  padding: 6px 12px 6px 12px;
  border: 1px solid black;
  border-radius: 20px;
}

.cinput:hover, .cinput:focus {
  -webkit-box-shadow: 6px 4px 23px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 4px 23px -9px rgba(0,0,0,0.75);
  box-shadow: 6px 4px 23px -9px rgba(0,0,0,0.75);
}

label {
  top: -20px;
  left: 10px;
}

.website-address {
  font-size: 1.4rem;
  font-weight: 600;
}

.input-field > label {
  color: #e0e0e0;
}

.lighten-3 {
  label, p, textarea, input, .card-title {
    color: #000;
  }
}
.lighten-4 {
  label, p, textarea, input, .card-title {
    color: #000;
  }
}
.lighten-5 {
  label, p, textarea, input, .card-title {
    color: #000;
  }
}

.blue a, .green a, .red a {
  color: #0d47a1;
}
</style>