<template>
  <div id="home">
    <main>
      <div class="container">
        <div class="center">
          <i18n path="home.title" tag="h1">
            <b class="name">Lasagna</b>
          </i18n>
        </div>
        <div class="center">
          <h2>Projects</h2>
          <div class="row jcc">
            <div class="s12 m2">
              <a class="project localify" href="https://localify.cf" target="_blank">Localify</a>
            </div>
            <div class="s12 m2">
              <a class="project vercel-bot">Vercel bot</a>
            </div>
            <div class="s12 m2">
              <a class="project orga" href="https://board.orga.ml" target="_blank">OrgaBoard</a>
            </div>
          </div>
        </div>
        <div class="center">
          <h2>Skills</h2>
          <h3>HTML / CSS (SCSS)</h3>
          <h3>JavaScript / TypeScript :</h3>
          <p>Vue.js, Node.js, Deno, Discord.js.</p>
          <h3>PHP</h3>
        </div>
        <div class="row center">
          <div class="s12 m3">
            <h2>Find me on</h2>
            <a class="platform black" href="https://github.com/WebLasagna" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub logo" height="21px">
              GitHub
            </a>
          </div>
          <div class="s12 m3">
            <h2>Contact me</h2>
            <a class="email" ref="email">obfuscated email</a>
            <a class="platform discord-blue" href="https://discord.bio/p/l" target="_blank">
              <img src="https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" alt="GitHub logo" height="25px">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div class="row" v-if="$store.state.ssid">
        <router-link class="btn-large black waves-effect waves-light" :to="$t('links.admin.home')"><i class="material-icons white-text left">build</i>{{ $t('admin.title') }}</router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    let email = ''
    const encodedEmail = '9cebf9fef0fdeffdfbf2fddcecf1b2f1f9'
    var keyInHex = encodedEmail.substr(0, 2)
    var key = parseInt(keyInHex, 16)
    for (var n = 2; n < encodedEmail.length; n += 2) {
      var charInHex = encodedEmail.substr(n, 2)
      var char = parseInt(charInHex, 16)
      var output = char ^ key
      email += String.fromCharCode(output)
    }
    const emailEl = this.$refs['email']
    emailEl.href = 'mailto:' + email
    emailEl.innerHTML = email
  }
}
</script>

<style lang="scss" scoped>
.name {
  color: #ff9800;
}
h1 {
  font-weight: 500;
  margin-bottom: 5px;
  text-shadow: 10px #000000;
}

h2 {
  margin-top: 40px;
  font-size: 1.7rem;
}

h3 {
  margin: 10px 0;
}

a.project {
  margin: 10px 0;
  font-size: 1.5rem;
}

.localify {
  color: #509dd8;
}

.vercel-bot {
  color: #000;
}

p {
  font-size: 1.1rem;
  margin: 5px;
}

i {
  color: #4db6ac;
  font-style: normal;
}

b {
  color: #ff9800;
}

a {
  font-weight: 600;
}

.platform {
  cursor: pointer;
  display: flex;
  width: fit-content;
  margin: 15px auto;
  padding: 6px 12px;
  border-radius: 20px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  -webkit-box-shadow: 3px 3px 6px 0px #9e9e9e;
  box-shadow: 3px 3px 6px 0px #9e9e9e;
  -webkit-transition: .3s ease-out;
  transition: .3s ease-out;

  img {
    position: relative;
    bottom: -1px;
    margin-right: 8px;
    filter: brightness(0) invert(1);
  }
}
.platform:hover {
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
  -webkit-box-shadow: 6px 6px 9px 0px #9e9e9e;
  box-shadow: 6px 6px 9px 0px #9e9e9e;
}
.platform:active {
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-box-shadow: 3px 3px 6px 0px #9e9e9e;
  box-shadow: 3px 3px 6px 0px #9e9e9e;
}

.email {
  font-size: 1.3rem;
}
</style>
