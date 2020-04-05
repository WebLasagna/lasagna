<template>
  <div id="admin">
    <div class="row">
      <div class="container">
        <div class="center">
          <h1>{{ $t('admin.title') }}</h1>
          <div class="row">
            <h2>{{ $t('admin.websites') }}</h2>
            <div class="row" v-if="websitesLoading">
              <Spinner/>
            </div>
            <div v-if="!websitesLoading && !addWebsiteForm.show">
              <div class="row" v-if="websites">
                <div class="col s12 m4" v-for="website in websites" :key="website.id">
                  <div :class="['card waves-effect ' + website.themeColor, { 'waves-light': website.themeColor === 'black' }]" @click="$router.push('/' + $t('links.admin.websitePage') + '/' + website.id)">
                    <div class="card-content">
                      <span class="card-title">{{ website.name }}</span>
                      <p>{{ website.description }}</p>
                      <a class="website-address" :href="'https://' + website.address" target="_blank">{{ website.address }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-else>
                <b>{{ $t('admin.noWebsites') }}</b>
              </div>
            </div>
            <div class="row" v-if="!addWebsiteForm.show">
              <a class="btn-floating btn-large black waves-effect waves-light" @click="addWebsiteForm.show = true"><i class="material-icons">add</i></a>
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
          <div class="row">
            <h2>{{ $t('admin.domainNames') }}</h2>
            <form @submit.prevent="search()" v-if="!searchResults">
              <div class="input-field flex">
                <input class="cinput" id="search" v-model="searchForm.domainName">
                <label for="search">Recherche</label>
              </div>
              <i class="material-icons search-icon" @click="search()">search</i>
            </form>
            <div v-else>
              <p>{{ searchResults }}</p>
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
import Spinner from '../../components/Spinner'
export default {
  name: 'Admin',
  components: {
    Spinner
  },
  data() {
    return {
      websitesLoading: true,
      addWebsiteForm: {
        show: false,
        name: null,
        description: null,
        address: null,
        themeColor: null,
        buttonCooldowned: false
      },
      searchForm: {
        domainName: null,
        buttonCooldowned: false
      }
    }
  },
  mounted() {
    this.$store.dispatch('getAllWebsites').then(() => {
      this.websitesLoading = false
    })
  },
  computed: {
    websites() {
      return this.$store.state.admin.allWebsites
    },
    searchResults() {
      return this.$store.state.admin.searchResults
    }
  },
  methods: {
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
    },
    search() {
      if(this.searchForm.buttonCooldowned) return
      this.searchForm.buttonCooldowned = true
      this.$store.dispatch('searchDomainName', { domainName: this.searchForm.buttonCooldowned }).then(() => {
        setTimeout(() => {
          this.searchForm.buttonCooldowned = false
        }, 3000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  -webkit-transition: ease-in-out .5s;
  transition: ease-in-out .5s;
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

.search-icon {
  right: -35px;
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