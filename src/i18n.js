import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import fr from './lang/fr'
import cn from './lang/cn'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: {
    en, fr, cn
  }
})