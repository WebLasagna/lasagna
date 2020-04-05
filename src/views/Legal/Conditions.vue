<template>
  <div id="conditions">
    <div class="row">
      <div class="container">
        <h1>Conditions d'utilisation</h1>
        <p>Date de dernière modification : 9 février 2020.</p>
        <p class="translation-warning" v-if="$store.state.locale = 'en'"><i class="material-icons left">warning</i>This page is not yet translated</p>
        <h2>Présentation et acceptation des Conditions d'utilisation</h2>
        <p>Ces Conditions d'utilisation (« Conditions ») sont un accord légal entre Octave (« je », « j' », « me », « mes » ou « ma ») et vous (« vous », « vos » ou « votre »). Lasagna.cf est le site personnel d'Octave, étudiant en développement web. En utilisant ou en visitant le site <span @click="$router.push('/admin')">lasagna.cf</span> (le « Site »), qui est aussi appelé le « Service », vous déclarez (1) avoir 13 ans ou plus, (2) si vous êtes majeur dans votre juridiction, vous déclarez avoir lu, compris et accepté d'être lié par les Conditions, et (3) si vous avez entre 13 ans et la majorité civile dans votre juridiction, que votre représentant légal a passé ces Conditions en revue et les a acceptées.</p>
        <p>Je me réserve le droit de mettre à jour ces Conditions, que je pourrais mettre en œuvre pour les raisons incluant, mais non limitées à, la conformité aux modifications des lois ou l'adéquation avec l'amélioration du Service. Si les changements ont un effet sur votre utilisation du Service ou vos droits légaux, je vous avertirais sous moins de sept jours avant l'implémentation de ces changements. À moins que je déclare le contraire, votre utilisation continue du Service après ma publication des modifications constituera votre acceptation et votre accord envers ces changements. Si vous vous opposez aux changements, votre recours sera l'arrêt de l'utilisation du Service.</p>
        <h2>Utilisation et données du Service</h2>
        <p>Le Site est relatif à mes travaux en tant que développeur web.</p>
        <p>En aucun cas vous ne pouvez utiliser le Service d'une autre manière que tel que défini dans les présentes Conditions. Vous acceptez de ne pas utiliser l'exploration de données, des robots, des spiders, ou des outils similaires destinés à la collecte et l'extraction des Données.</p>
        <p>Je me réserve le droit de modifier ou d'interrompre le Service (ou toute partie) temporairement ou de manière permanente, avec ou sans préavis. Ces interruptions surviennent uniquement dans le cadre de l'amélioration du Service.</p>
        <p>Vous affirmez avoir lu et pris conscience de la <router-link to="/confidentialite">Politique de confidentialité</router-link>. Cette politique décrit les méthodes qu'utilise le Service en matière de gestion des données des utilisateurs du Site.</p>
        <div class="center">
          <router-link class="btn-floating btn-back black waves-effect waves-light" to="/"><i class="material-icons">arrow_back</i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  font-weight: 600;
}

.translation-warning {
  width: fit-content;
  background-color: #b71c1c;
  padding: 12px;
  margin: 0;
  border-radius: 20px;
}
</style>