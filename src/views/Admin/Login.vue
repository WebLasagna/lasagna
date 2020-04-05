<template>
  <div id="admin">
    <div class="row">
      <div class="container">
        <div class="center">
          <div class="row">
            <div class="col s12">
              <div class="card quite-black">
                <div class="card-content">
                  <span class="card-title">Panel admin</span>
                  <form @submit.prevent="login()">
                    <div class="input-field">
                      <input type="text" name="username" id="username" v-model="username">
                      <label for="username">Nom d'utilisateur</label>
                    </div>
                    <div class="input-field">
                      <input type="password" name="password" id="password" v-model="password">
                      <label for="password">Mot de passe</label>
                    </div>
                    <div class="error-message" v-if="credentialsError">
                      <p>Nom d'utilisateur ou mot de passe incorrect.</p>
                    </div>
                    <button class="btn grey waves-effect waves-light" type="submit" :disabled="buttonCooldowned || !username || !password">connexion</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <a class="btn-floating btn-back black waves-effect waves-light" @click="$router.push('/')"><i class="material-icons">arrow_back</i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
      buttonCooldowned: false,
      credentialsError: false
    }
  },
  methods: {
    login() {
      this.buttonCooldowned = true
      setTimeout(() => {
        this.buttonCooldowned = false
      }, 3000)
      this.$store.dispatch('login', { username: this.username, password: this.password })
      .then(() => {
        this.$router.push('/admin')
      })
      .catch(err => {
        if(err === 'credentials_error') {
          this.credentialsError = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: inline-flex;
  margin-top: 60px;
  border-radius: 20px !important;

  .card-title {
    font-weight: 600;
  }
  & > * {
    min-width: 300px;
  }
}
</style>