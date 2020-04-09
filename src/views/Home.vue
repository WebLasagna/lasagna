<template>
  <div id="home">
    <div class="row">
      <div class="section">
        <div class="container center">
          <h1><b>{{ $t('home.fsDevName') }}</b>, {{ $t("home.fsDev") }}</h1>
          <p v-html="$t('home.intro')"></p>
          <p v-html="$t('home.intro2')"></p>
        </div>
      </div>
      <div class="section quite-black">
        <div class="center">
          <h2>{{ $t("home.howIDev.title") }}</h2>
          <div class="row">
            <div class="col s6 m3">
              <div class="card red">
                <div class="card-content">
                  <span class="card-title">{{ $t('home.howIDev.fast.title') }}</span>
                  <p>{{ $t('home.howIDev.fast.content') }}</p>
                </div>
              </div>
            </div>
            <div class="col s6 m3">
              <div class="card orange">
                <div class="card-content">
                  <span class="card-title">{{ $t('home.howIDev.responsive.title') }}</span>
                  <p>{{ $t('home.howIDev.responsive.content') }}</p>
                </div>
              </div>
            </div>
            <div class="col s6 m3">
              <div class="card green">
                <div class="card-content">
                  <span class="card-title">{{ $t('home.howIDev.intuitive.title') }}</span>
                  <p>{{ $t('home.howIDev.intuitive.content') }}</p>
                </div>
              </div>
            </div>
            <div class="col s6 m3">
              <div class="card blue">
                <div class="card-content">
                  <span class="card-title">{{ $t('home.howIDev.global.title') }}</span>
                  <p>{{ $t('home.howIDev.global.content') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="center">
          <h2>{{ $t("home.hireMe.title") }}</h2>
          <i18n path="home.hireMe.contact" tag="p">
            <router-link to="/contact">{{ $t("home.hireMe.contactLink") }}</router-link>
          </i18n>
          <p>{{ $t("home.hireMe.pricings") }}</p>
        </div>
      </div>
      <div class="section quite-black">
        <div class="center">
          <h2>{{ $t("home.progLangs.title") }}</h2>
          <div class="row">
            <div class="col s6 m3">
              <div class="card orange accent-4">
                <div class="card-content">
                  <span class="large-card-title">{{ $t('home.progLangs.html') }}</span>
                </div>
              </div>
            </div>
            <div class="col s6 m3">
              <div class="card blue accent-4">
                <div class="card-content">
                  <span class="large-card-title">{{ $t('home.progLangs.css') }}</span>
                </div>
              </div>
            </div>
            <div class="col s6 m3">
              <div class="card orange">
                <div class="card-content">
                  <span class="large-card-title">{{ $t('home.progLangs.js.title') }}</span>
                  <p>{{ $t('home.progLangs.js.content') }}</p>
                </div>
              </div>
            </div>
            <div class="col s6 m3">
              <div class="card indigo lighten-2">
                <div class="card-content">
                  <span class="large-card-title">{{ $t('home.progLangs.php') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="row">
          <div class="col s12 m6 center discover-part">
            <div class="container">
              <span class="question-title" v-html="$t('home.portfolio.text')"></span>
              <br>
              <router-link to="/portfolio" class="btn black waves-effect waves-light">{{ $t('home.portfolio.button') }}</router-link>
            </div>
          </div>
          <div class="col s12 hide-on-med-and-up">
            <div class="container"><div class="divider"/></div>
          </div>
          <div class="col s12 m6 center discover-part">
            <div class="container">
              <span class="question-title" v-html="$t('home.contact.text')"></span>
              <br>
              <router-link to="/contact" class="btn black waves-effect waves-light">{{ $t('home.contact.button') }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row center" v-if="$store.state.ssid">
        <router-link class="btn-large black waves-effect waves-light" :to="$t('links.admin.home')"><i class="material-icons white-text left">build</i>{{ $t('admin.title') }}</router-link>
      </div>
      <div class="row center">
        <div class="col s6">
          <router-link :to="'/' + $t('links.conditions')">{{ $t('home.legal.conditionsLink') }}</router-link>
        </div>
        <div class="col s6">
          <router-link :to="'/' + $t('links.privacy')">{{ $t('home.legal.privacyLink') }}</router-link>
        </div>
      </div>
    </div>
    <div class="left col s12 m3 l2">
      <LocalePicker/>
    </div>
  </div>
</template>

<script>
import LocalePicker from '../components/LocalePicker'
export default {
  name: 'Home',
  components: {
    LocalePicker
  }
}
</script>

<style scoped>
h1
{
  font-weight: 500;
  margin-bottom: 5px;
  text-shadow: 10px #000000;
}
h2
{
  margin-top: 20px;
  font-size: 1.7rem;
}
p
{
  font-size: 1.1rem;
  margin: 5px;
}
i
{
  color: #4db6ac;
  font-style: normal;
}
b
{
  color: #ff9800;
}
.large-card-title
{
  font-size: 1.9rem;
  font-weight: 600;
}
a
{
  font-weight: 600;
}
.question-title
{
  font-size: 1.3rem;
  font-weight: 400;
}
.btn
{
  margin-top: 10px;
}
.discover-part
{
  margin-top: 20px;
}
.divider
{
  background-color: #ffffff;
}
</style>
