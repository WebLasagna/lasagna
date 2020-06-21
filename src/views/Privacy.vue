<template>
  <div id="privacy">
    <main>
      <div class="container">
        <h1>{{ $t('privacy.title') }}</h1>
        <span>This policy is effective as of 2 January 2020.</span>
        <p>Your privacy is very important to me. It is my policy to respect it regarding any information I may collect from you across my website, and other sites I own and operate.</p>
        <p>The information I collect associated to you are used for analytical purposes only. I do not sell your informations to third parties.</p>
        <p>I only retain collected information for as long as necessary to provide you with this website. The data stored is protected within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
        <p>My website links to external sites that I do not operate. Please be aware that I have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p>I don’t share any personally identifying information publicly or with third-parties, except when required to by law. I collect data in accordance with the GDPR, so you can express your request to delete data collected during your use of this site by contacting me.</p>
        <p>Your continued use of my website will be regarded as acceptance of my practices around privacy and personal information. If you have any questions about how I handle user data and personal information, feel free to contact me at <a href="mailto:privacy@lasagna.ml">privacy@lasagna.ml</a>.</p>
        <div class="center">
          <router-link to="/">Homepage</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Privacy'
}
</script>

<style lang="scss" scoped>
span {
  color: #757575;
}
</style>