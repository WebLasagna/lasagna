<template>
  <div id="error-404">
    <div class="row">
      <div class="container">
        <div class="center">
          <h1>{{ $t('error404.title') }}</h1>
          <p>{{ $t('error404.explanation') }}</p>
          <router-link to="/" class="btn grey darken-3 waves-effect waves-light"><i class="material-icons left">home</i>{{ $t('error404.button') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Error404'
  }
</script>