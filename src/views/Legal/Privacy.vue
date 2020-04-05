<template>
  <div id="privacy">
    <div class="row">
      <div class="container">
        <h1>Politique de confidentialité</h1>
        <p>Date de dernière modification : 6 octobre 2019.</p>
        <p class="translation-warning" v-if="$store.state.locale = 'en'"><i class="material-icons left">warning</i>This page is not yet translated</p>
        <h2>Présentation de la Politique de confidentialité :</h2>
        <p>Cette Politique de confidentialité présente ma politique avec le respect des informations recueillies auprès des visiteurs du Site et des utilisateurs du Service. Selon la loi en vigueur, je suis le « contrôleur de données » des données personnelles recueillies par le Service.</p>
        <p>Les <router-link :to="'/' + $t('links.conditions')">Conditions d'utilisation</router-link> et ses définitions des mots présents dans cette Politique de confidentialité sont incorporées ici par ce lien.</p>
        <h2>Les informations que je recueille :</h2>
        <h3 class="underline">Données de votre utilisation du Service</h3>
        <p>Le Site utilise <a href="https://analytics.google.com" target="blank">Google Analytics</a> lors de votre utilisation du Service à des fins de mesure d'audience. Google Analytics utilise principalement des cookies propriétaires permettant de générer des rapports sur vos interactions avec le Service. Vous pouvez désactiver les cookies ou supprimer un cookie individuel. <a href="https://policies.google.com/technologies/cookies" target="_blank">En savoir plus</a>.</p>
        <p>En outre, Google Analytics est compatible avec un <a href="https://tools.google.com/dlpage/gaoptout/" target="_blank">module complémentaire</a> de navigateur que vous pouvez installer de manière facultative afin de désactiver la mesure Google Analytics pour tout site auquel vous accédez. Notez que ce module complémentaire désactive seulement la mesure Google Analytics.</p>
        <p>Google Analytics collecte également les adresses IP (Internet Protocol) pour assurer la sécurité du Service et indiquer au Site de quelle région (pays, État ou ville) vous provenez (on appelle cela la "géolocalisation par IP"). Bien que Google Analytics fournisse une méthode permettant de masquer les adresses IP collectées, notez que le Site a accès à votre adresse IP, et ce même si vous avez installé le module de désactivation de Google Analytics.</p>
        <h3 class="underline">Liens vers d'autres sites web</h3>
        <p>Cette Politique de confidentialité s'applique seulement au Service. Le Site peut contenir des liens renvoyant vers d'autres sites web qui ne sont ni gérés, ni contrôlés par le Service (les « Sites Tiers »). Sauf indication contraire, les politiques et les procédures que j'ai décrites ne s'appliquent pas aux Sites Tiers. Les liens affichés sur le Site ne signifient pas que je supporte ou ai passé en revue les Sites Tiers. Je vous suggère de contacter ces sites directement pour plus d'informations sur leurs politiques de confidentialité.</p>
        <h2>Me contacter :</h2>
        <p>Veuillez me contacter si vous avez une requête concernant spécifiquement la gestion que je fais de vos données personnelles. Vous pouvez me contacter à <a href="mailto:confidentialite@lasagna.cf" target="_blank">confidentialite@lasagna.cf</a> ou via mon compte Instagram <a href="https://instagram.com/octave.lr" target="_blank">@octave.lr</a>.</p>
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