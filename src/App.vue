<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import './app.scss';
</style>

<script>
export default {
  name: 'App',
  mounted() {
    window.analytics.identify(this.$store.state.userId)
  }
}
</script>
