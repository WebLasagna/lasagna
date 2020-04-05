<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import './assets/styles/materialize.min.css';
@import './assets/styles/material-icons.css';
@import './assets/styles/cookieconsent.min.css';
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
body {
  background-color: #2c2f33;
  color: #ffffff !important;
}
.btn {
  color: #ffffff;
}
h1
{
  margin-top: 25px;
}
input {
  color: #fff;
}
.divider
{
  margin-top: 20px;
}
.section
{
  padding-bottom: 30px;
}
.card, .btn, .btn-large
{
  border-radius: 25px;
}
.card {
  display: inline-flex;
}
.action-icon {
  cursor: pointer;
}
.btn-back
{
  margin-top: 15px;
  height: 50px;
  width: 50px;
}
.btn-back > i
{
  font-size: 1.7rem;
  line-height: 50px;
}
.btn.black, .btn-large.black, .btn-floating.black, .btn-back {
  background-color: #23272a !important;
}
.btn.grey, .btn-large.grey, .btn-floating.grey {
  background-color: #2c2f33 !important;
}
.card-title
{
  color: #ffffff;
  font-weight: 600 !important;
  font-size: 1.8rem !important;
}
.card-content > p
{
  font-size: 1.1rem !important;
  color: #000000;
}
.card.waves-effect:hover
{
  box-shadow: 5px 5px 7px #353535;
}
.card.black > .card-content > p
{
  color: #ffffff;
}
.dark
{
  background-color: #2c2f33;
}
.quite-black
{
  background-color: #23272a;
}
.bit-lighter
{
  background-color: #353535;
}
.discord-blue
{
  background-color: #7289da;
}
.twitter-blue
{
  background-color: #1da1f2;
}
.instagram-pink
{
  background-color: #cd486b;
}
</style>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'home',
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
