<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import './app.scss';
</style>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#23272a"
        },
        "button": {
          "background": "#fff",
          "text": "#000"
        }
      },
      "theme": "edgeless",
      "content": {
        "message": this.$t('cookieConsent.message'),
        "dismiss": this.$t('cookieConsent.dismiss'),
        "link": this.$t('cookieConsent.link'),
        "href": this.$t('links.privacy')
      }
    });
  }
}
</script>
