<template>
  <div id="my-account">
    <div class="row">
      <div class="container">
        <div class="center">
          <h1>{{ $t('admin.myAccount.title') }}</h1>
          <div class="card quite-black">
            <div class="card-content">
              <div class="row field-row">
                <div class="col">
                  <span class="field-title">{{ $t('admin.myAccount.username') }} : </span><span class="field-content">{{ user.username }}</span>
                </div>
                <div class="col">
                  <i class="material-icons edit-icon" @click="changeUsernameForm.show = true">edit</i>
                </div>
              </div>
              <div class="row field-row">
                <div class="col">
                  <span class="field-title">{{ $t('admin.myAccount.password') }} : </span><span class="field-content">••••••••</span>
                </div>
                <div class="col">
                  <i class="material-icons edit-icon" @click="changePasswordForm.show = true">edit</i>
                </div>
              </div>
              <a class="btn btn-logout red lighten-1 waves-effect waves-light" @click="logout">{{ $t('admin.myAccount.logoutButton') }}</a>
            </div>
          </div>
          <div class="center">
            <LocalePicker />
          </div>
          <div class="row">
            <router-link class="btn-floating btn-back black waves-effect waves-light" :to="'/' + $t('links.admin.home')"><i class="material-icons">arrow_back</i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocalePicker from '../../components/LocalePicker'
export default {
  name: 'MyAccount',
  components: {
    LocalePicker
  },
  data() {
    return {
      changeUsernameForm: {
        show: false,
        newUsername: null
      },
      changePasswordForm: {
        show: false,
        newPassword: null
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.field-row {
  margin-bottom: 0;
}
.field-title {
  display: inline;
  font-size: 1.5rem;
  font-weight: 600;
}
.field-content {
  display: inline;
  font-size: 1.2rem;
}
.edit-icon {
  cursor: pointer;
  margin-top: 6px;
}
.btn-logout {
  margin-top: 10px;
  height: 47px;
  line-height: 47px;
  font-size: 14px;
  padding: 0 20px;
}
</style>