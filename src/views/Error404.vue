<template>
    <div id="error-404">
        <div class="row">
            <div class="container">
                <h1>Erreur 404</h1>
                <p>La page que vous cherchez n'existe pas.</p>
                <router-link to="/" class="btn grey darken-3 waves-effect waves-light"><i class="material-icons left">home</i>page principale</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Error404'
}
</script>