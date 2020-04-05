<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper quite-black">
        <a href="#" data-target="sidenav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <router-link to="/" class="brand-logo">Lasagna</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="col s12 waves-effect waves-light">
            <router-link :to="'/' + $t('links.portfolio')"><i class="material-icons left">folder</i>{{ $t('navbar.portfolio') }}</router-link>
          </li>
          <li class="col s12 waves-effect waves-light">
            <router-link :to="'/' + $t('links.contact')"><i class="material-icons left">message</i>{{ $t('navbar.contact') }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav quite-black" id="sidenav" @click="closeSidenav">
      <li>
        <router-link class="col s12 waves-effect waves-light" :to="'/' + $t('links.portfolio')"><i class="material-icons left">folder</i>{{ $t('navbar.portfolio') }}</router-link>
      </li>
      <li>
        <router-link class="col s12 waves-effect waves-light" :to="'/' + $t('links.contact')"><i class="material-icons left">message</i>{{ $t('navbar.contact') }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    closeSidenav () {
      var sidenav = document.querySelector('.sidenav')
      var instance = M.Sidenav.getInstance(sidenav)
      instance.close()
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav')
  M.Sidenav.init(sidenav)
})
</script>

<style scoped>
*
{
  color: #fff !important;
}
.brand-logo {
  margin-left: 15px;
}
</style>
