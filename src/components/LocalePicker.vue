<template>
  <div id="locale-picker">
    <div class="col">
      <b class="language">{{ $t('home.language') }}</b>
      <div class="row">
        <div class="col">
          <a class="btn-floating btn-small black waves-effect waves-light" @click="changeLocale('en')" :class="{ 'grey darken-3': $store.state.locale === 'en' }">en</a>
        </div>
        <div class="col">
          <a class="btn-floating btn-small black waves-effect waves-light" @click="changeLocale('fr')" :class="{ 'grey darken-3': $store.state.locale === 'fr' }">fr</a>
        </div>
        <div class="col">
          <a class="btn-floating btn-small black waves-effect waves-light" @click="changeLocale('cn')" :class="{ 'grey darken-3': $store.state.locale === 'cn' }">cn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocalePicker',
  methods: {
    changeLocale(newLocale) {
      this.$store.commit('changeLocale', newLocale)
      this.$i18n.locale = newLocale
    }
  }
}
</script>

<style scoped>
#locale-picker {
  display: inline-flex;
  margin: 5px;
  text-align: center;
}
.btn-floating {
  margin: 10px;
}
.language {
  color: #bdbdbd;
  font-size: 1.2rem;
}
</style>