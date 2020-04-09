<template>
  <div id="contact">
    <div class="row">
      <div class="container">
        <h1>{{ $t('contact.title') }} :</h1>
        <form @submit.prevent="submit">
          <div class="input-field">
            <input type="text" name="name" id="name" v-model="name">
            <label for="name">{{ $t("contact.form.name") }}</label>
          </div>
          <div class="input-field">
            <input type="email" name="email" id="email" :class="{ email , error: !email.valid }" v-model="email.value">
            <label for="email">{{ $t("contact.form.email") }}</label>
          </div>
          <div v-show="!email.valid" class="row">
            <div class="error-message">
              <p>{{ $t("contact.form.emailError") }}</p>
            </div>
          </div>
          <div class="input-field">
            <textarea class="materialize-textarea wt" name="content" id="content" v-model="content"></textarea>
            <label for="content">{{ $t("contact.form.message") }}</label>
          </div>
          <div v-show="fieldsError" class="row">
            <div class="error-message">
              <p>{{ $t("contact.form.fieldsError") }}</p>
            </div>
          </div>
          <button :disabled="!name || !email || !content || buttonCooldowned" type="submit" class="btn orange waves-effect waves-dark">{{ $t("contact.form.send") }}</button>
          <div class="submit-status" :class="{ hide: !formStatus, green: formStatus }">
            <p>{{ $t("contact.form.sent") }}</p>
          </div>
        </form>
        <div class="divider" />
        <h2>{{ $t("contact.socialMedia") }}</h2>
        <div class="row">
          <div class="col s6 m3">
            <div class="card discord-blue">
              <div class="card-content">
                <span class="card-title">Discord</span>
                <b>@Lasagna#1019</b>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card black waves-effect waves-light" @click="openGitHub">
              <div class="card-content">
                <span class="card-title">GitHub<i class="material-icons hide-on-small-only right">open_in_new</i></span>
                <b>@WebLasagna</b>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card black waves-effect waves-light" @click="openDEV()">
              <div class="card-content">
                <span class="card-title">DEV.to <i class="material-icons hide-on-small-only right">open_in_new</i></span>
                <b>@octave</b>
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <router-link class="btn-floating btn-back black waves-effect waves-light" to="/"><i class="material-icons">arrow_back</i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}

h2 {
  margin-top: 25px;
  font-size: 1.4rem;
}

.btn {
  color: #000000;
}

.card-title {
  color: #000;
}

.black .card-title {
  color: #fff;
}

.error-message {
  display: inline-flex;
  line-height: 0.1;
  padding: 3px 5px 3px 5px;
  box-shadow: 1px 1px 3px #9e9e9e;
  border-radius: 25px;
  background-color: #f44336;
  width: fit-content;
}

.submit-status {
  line-height: 0.1;
  margin-top: 15px;
  padding: 3px 5px 3px 5px;
  box-shadow: 1px 1px 3px #9e9e9e;
  border-radius: 25px;
  width: fit-content;
}
</style>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Contact',
  data() {
    return {
      name: null,
      email: {
        value: null,
        valid: true
      },
      content: null,
      formStatus: null,
      fieldsError: false,
      buttonCooldowned: false
    }
  },
  methods: {
    openGitHub() {
      window.open('https://github.com/WebLasagna')
    },
    openDEV() {
      window.open('https://dev.to/octave')
    },
    submit() {
      if (!this.name || !this.email.value || !this.content) {
        this.fieldsError = true
        return
      }
      this.buttonCooldowned = true
      setTimeout(() => {
        this.buttonCooldowned = false
        this.formStatus = null
      }, 10000);
      this.axios.post('https://lasagna.cf/api/sendContactForm.php',
          JSON.stringify({
            name: this.name,
            email: this.email,
            content: this.content
          })
        )
        .then((res) => {
          return res.data
        })
        .then((resCode) => {
          if (resCode === 'success') {
            this.formStatus = "success"
          } else {
            this.formStatus = "error"
          }
        })
    },
    validate(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    isEmail(value) {
      var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegExp.test(value)
    }
  },
  watch: {
    "email.value": function(value) {
      this.validate("email", value)
    }
  }
}
</script>