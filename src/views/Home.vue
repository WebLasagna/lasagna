<template>
  <div id="home">
    <main>
      <div class="container">
        <div class="center">
          <i18n path="home.title" tag="h1">
            <b class="name">Lasagna</b>
          </i18n>
        </div>
        <div class="row jcc">
          <div class="col s12 m4">
            <div class="center">
              <h2>{{ $t('home.projects') }}</h2>
              <div class="row jcc">
                <div class="s12 m2">
                  <a class="project localify" href="https://localify.cf" target="_blank" @click="track('localify')">Localify</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="center">
              <h2>{{ $t('home.experiments') }}</h2>
              <div class="row jcc">
                <div class="s12">
                  <a class="project orga" href="https://board.orga.ml" target="_blank" @click="track('orgaboard')">OrgaBoard (Vue.js)</a>
                </div>
                <div class="s12">
                  <a class="project ig-bot" href="https://github.com/Dungeon-bots/invite-generator" target="_blank" @click="track('inviteGeneratorBot')">Invite Generator bot (JS)</a>
                </div>
                <div class="s12">
                  <a class="project" href="https://game-of-life-rust.now.sh/" target="_blank" @click="track('inviteGeneratorBot')">Game of Life (Rust)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center skills">
          <h2>{{ $t('home.skills') }}</h2>
          <div class="row center">
            <div class="col s12 m2">
              <h3>HTML / CSS (SCSS)</h3>
            </div>
            <div class="col s12 m2">
              <h3>JavaScript / TypeScript :</h3>
              <p>Vue.js, Node.js, Discord.js.</p>
            </div>
            <div class="col s12 m1">
              <h3>Rust</h3>
            </div>
            <div class="col s12 m1">
              <h3>PHP</h3>
            </div>
          </div>
        </div>
        <div class="row center">
          <div class="s12 m3">
            <h2>{{ $t('home.findMeOn') }}</h2>
            <a class="platform black" href="https://github.com/WebLasagna" target="_blank" @click="track('github')">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub logo" height="21px">
              GitHub
            </a>
            <a class="platform keybase-blue" href="https://keybase.io/weblasagna" target="_blank" @click="track('keybase')">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Keybase_logo_official.svg/1114px-Keybase_logo_official.svg.png" alt="Keybase logo" height="21px">
              Keybase
            </a>
            <a class="platform instagram-pink" href="https://instagram.com/weblasagna" target="_blank" @click="track('instagram')">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="Instagram logo" height="21px">
              Instagram
            </a>
          </div>
          <div class="s12 m3">
            <h2>{{ $t('home.contactMe') }}</h2>
            <a class="email" ref="email">obfuscated email</a>
            <a class="platform discord-blue" href="https://discord.bio/p/l" target="_blank" @click="track('discord')">
              <img src="https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" alt="Discord logo" height="25px">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div class="row" v-if="$store.state.ssid">
        <router-link class="btn-large black waves-effect waves-light" :to="$t('links.admin.home')"><i class="material-icons white-text left">build</i>{{ $t('admin.title') }}</router-link>
      </div>
    </main>
    <footer>
      <div class="locales">
        <span :class="{ current: $store.state.locale === 'en' }" @click="changeLocale('en')">EN</span>
        <span :class="{ current: $store.state.locale === 'fr' }" @click="changeLocale('fr')">FR</span>
      </div>
      <router-link :to="'/' + $t('links.privacy')">{{ $t('home.privacyPolicy') }}</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    let email = ''
    const encodedEmail = '9cf4f9f0f0f3dcf0fdeffdfbf2fdb2f1f0'
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
  },
  methods: {
    changeLocale(locale) {
      window.analytics.track('localeChanged', {
        previous: this.$store.state.locale,
        current: locale
      })
      this.$store.commit('changeLocale', locale)
    },
    track(name) {
      if(name === 'localify') {
        window.analytics.track('projectClicked', {
          name: 'Localify'
        })
      }
      else if(name === 'orgaboard') {
        window.analytics.track('projectClicked', {
          name: 'OrgaBoard'
        })
      }
      else if(name === 'inviteGeneratorBot') {
        window.analytics.track('experimentClicked', {
          name: 'Invite Generator bot'
        })
      }
      else if(name === 'github') {
        window.analytics.track('socialMediaClicked', {
          name: 'GitHub'
        })
      }
      else if(name === 'discord') {
        window.analytics.track('socialMediaClicked', {
          name: 'Discord'
        })
      }
      else if(name === 'instagram') {
        window.analytics.track('socialMediaClicked', {
          name: 'Instagram'
        })
      }
      else if(name === 'keybase') {
        window.analytics.track('socialMediaClicked', {
          name: 'Keybase'
        })
      }
    }
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
  display: inline-flex;
  margin: 5px 0;
  font-size: 1.5rem;
  -webkit-transition: .1s ease-out;
  transition: .1s ease-out;

  &[href] {
    border-bottom: 1.5px solid currentColor;

    &:hover {
      filter: brightness(60%);
    }

    &:active {
      transform: translateY(1px);
    }
  }
}

.localify {
  color: #2518E0;
}

.vercel-bot {
  color: #000;
}

.ig-bot {
  color: #4968d6;
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

.skills {
  h3 {
    font-size: 1.3rem;
  }
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
    bottom: -2.5px;
    margin-right: 8px;
  }

  img[alt="GitHub logo"] {
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

footer {
  width: fit-content;
  margin: 30px auto;

  .locales {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    span {
      cursor: pointer;
      color: #757575;
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0 10px;
      -webkit-transition: .2s ease-in-out;
      transition: .2s ease-in-out;

      &:hover {
        color: #424242;
      }

      &.current {
        color: #212121;
      }
    }
  }

  a {
    color: #000;
  }
}
</style>