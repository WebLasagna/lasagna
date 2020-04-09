<template>
  <div id="portfolio">
    <div class="row">
      <div class="container">
        <h1>{{ $t('portfolio.title') }} :</h1>
        <div class="col s12 m6 center">
          <div class="card black waves-effect waves-light" @click="openBOHKOO">
            <div class="card-content">
              <span class="card-title">BOHKOO.store<i class="material-icons hide-on-small-only right">open_in_new</i></span>
              <p>{{ $t('portfolio.bohkoo.description') }}</p>
              <b>{{ $t('portfolio.bohkoo.developedWith') }}</b>
            </div>
          </div>
        </div>
        <div class="col s12 m6 center">
          <div class="card green col s12 waves-effect waves-light" @click="openFGBerlincom">
            <div class="card-content">
              <span class="card-title">FGBerlin.com<i class="material-icons hide-on-small-only right">open_in_new</i></span>
              <p>{{ $t('portfolio.fgberlincom.description') }}</p>
              <b>{{ $t('portfolio.fgberlincom.developedWith') }}</b>
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

<script>
export default {
  name: 'Portfolio',
  methods: {
    openBOHKOO() {
      window.open('https://bohkoo.store')
    },
    openFGBerlincom() {
      window.open('https://fgberlin.com')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.1rem;
}

b {
  margin-top: 15px;
  font-size: 1.2rem;
}
</style>
