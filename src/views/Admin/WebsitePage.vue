<template>
  <div id="website-page">
    <div class="row">
      <div class="container">
        <div class="center" v-if="!editForm.show">
          <h1 :style="'color: ' + website.themeColor + ';'">{{ website.name }}</h1>
          <p>{{ website.description }}</p>
          <a class="website-address" :href="'https://' + website.address" target="_blank">{{ website.address }}</a>
          <div v-if="website.controlLink && websiteControl.loading">
            <p>Loading...</p>
          </div>
          <div v-else-if="website.controlLink">
            <span>{{ c.status }}</span>
          </div>
          <div class="row">
            <i class="material-icons action-icon" @click="editForm.show = true">edit</i>
            <i class="material-icons action-icon" @click="deleteWebsite()">delete</i>
          </div>
        </div>
        <div class="center" v-else>
          <form @submit.prevent="editWebsite()">
            <input type="text" class="input-h1" :style="'color: ' + website.themeColor + ';'" v-model="editForm.name">
            <input type="text" class="input-description" v-model="editForm.description">
            <input type="text" class="input-address" v-model="editForm.address">
            <input type="text" class="input-id" v-model="editForm.id">
            <div class="center">
              <div class="row btn-row">
                <div class="col">
                  <a class="btn-floating btn-large red waves-effect waves-light" @click="editForm.show = false"><i class="material-icons">close</i></a>
                </div>
                <div class="col">
                  <button class="btn-floating btn-large green waves-effect"><i class="material-icons">check</i></button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="row center">
          <router-link class="btn-floating btn-back waves-effect waves-light" :to="'/' + $t('links.admin.home')"><i class="material-icons">arrow_back</i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsitePage',
  data() {
    return {
      editForm: {
        show: false,
        name: null,
        description: null,
        address: null,
        id: null,
      },
      websiteControl: {
        loading: true,
        status: null
      }
    }
  },
  mounted() {
    this.editForm.name = this.website.name
    this.editForm.description = this.website.description
    this.editForm.address = this.website.address
    this.editForm.id = this.website.id

    if(this.website.controlLink) {
      this.$store.dispatch('controlWebsite', { controlLink: this.website.controlLink, action: 'getStatus' }).then(status => {
        this.websiteControl.status = status
      })
    }
  },
  computed: {
    website() {
      return this.$store.state.admin.websites.find(website => website.id === parseInt(this.$router.currentRoute.params.websiteId))
    }
  },
  methods: {
    editWebsite() {
      this.editForm.show = false
      this.loading = true
      this.$store.dispatch('editWebsiteInfo', { websiteId: this.website.id, newWebsiteId: this.editForm.id, name: this.editForm.name, description: this.editForm.description, address: this.editForm.address, themeColor: this.editForm.themeColor }).then(() => {
        this.$store.dispatch('getWebsiteInfo', { websiteId: this.editForm.id }).then(() => {
          this.editForm.id = this.website.id
          this.editForm.name = this.website.name
          this.editForm.description = this.website.description
          this.editForm.address = this.website.address
          this.editForm.themeColor = this.website.themeColor
          this.loading = false
        })
      })
    },
    deleteWebsite() {
      this.$store.dispatch('deleteWebsite', { websiteId: this.website.id }).then(() => {
        this.$store.dispatch('getAllWebsites').then(() => {
          this.$router.push('/' + this.$t('links.admin.home'))
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h1,
.input-h1 {
  height: 45px !important;
  margin: 30px 0 10px 0 !important;
  text-align: center;
  border: none !important;
  box-shadow: none !important;
  font-size: 2.3rem !important;
  font-weight: 600;
}
p,
.input-description {
  height: 30px !important;
  margin: 10px 0 10px 0 !important;
  font-size: 1.3rem !important;
  text-align: center;
  border: none !important;
  box-shadow: none !important;
}
a,
.input-address {
  color: #039be5;
  text-align: center;
  border: none !important;
  box-shadow: none !important;
  font-size: 1.8rem !important;
  font-weight: 600;
}
.input-id {
  text-align: center;
  border: none !important;
  box-shadow: none !important;
  font-size: 0.7rem !important;
}
.material-icons.action-icon {
  cursor: pointer;
  margin: 15px 15px 0 0;
  font-size: 2.2rem;
}
.btn-row {
  display: inline-flex;
  margin-top: 10px;
}
</style>