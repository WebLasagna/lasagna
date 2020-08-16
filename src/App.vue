<template>
  <div id="app" :style="wave.gradient">
    <div id="wave2" :style="wave2.gradient">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
@import './app.scss';
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      wave: {
        gradient: null,
        angle: 75
      },
      wave2: {
        gradient: null,
        angle: 180,
        show: 95
      }
    }
  },
  mounted() {
    window.analytics.identify(this.$store.state.userId)
    this.updateWave()
    setInterval(() => {
      this.updateWave()
    }, 100)
  },
  methods: {
    updateWave() {
      this.wave.angle += 0.75
      this.wave.gradient = 'background: linear-gradient(' + this.wave.angle + 'deg, #55bbeb 40%, #139edf 60%);'
      
      if(this.wave2.angle > 90 && this.wave2.angle < 180) {
        this.wave2.angle += 2
      }
      else this.wave2.angle -= 2
      if(this.wave2.show > 50 && this.wave2.show < 80) {
        this.wave2.angle += 2
      }
      else this.wave2.angle -= 2
      this.wave2.gradient = 'background: linear-gradient(' + this.wave2.angle + 'deg, transparent, rgba(255,152,0,0.7) ' + this.wave2.show + '%);'
    }
  }
}
</script>
