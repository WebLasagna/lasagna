<template>
  <div id="chat-button">
    <div class="fixed-action-btn" v-if="!showChat">
      <a class="btn-floating btn-large green accent-4 waves-effect waves-light" @click="toggleChat"><i class="material-icons">chat_bubble</i></a>
    </div>
    <div class="card support-chat green" v-else>
      <div class="card-content">
        <div class="row">
          <div class="col">
            <i class="material-icons action-icon small" @click="toggleChat">arrow_back</i>
          </div>
          <div class="col">
            <span class="navbar-title">M'envoyer un message</span>
          </div>
        </div>
        <span class="card-title">ZZZ</span>
        <p>ZZZ</p>
        <div class="row msg-row">
          <div class="col">
            <textarea class="materialize-textarea msg-box" v-model="chat.msgInput"></textarea>
          </div>
          <div class="col">
            <a class="btn-floating yellow accent-4 waves-effect"><i class="material-icons">insert_emoticon</i></a>
          </div>
          <div class="col" v-if="chat.msgInput">
            <a class="btn-floating btn-send green accent-4 waves-effect scale-transition scale-in"><i class="material-icons">send</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportChat',
  data() {
    return {
      showChat: false,
      chat: {
        msgInput: null
      }
    }
  },
  methods: {
    toggleChat() {
      if(this.showChat) this.showChat = false
      else this.showChat = true
    }
  }
}
</script>

<style lang="scss" scoped>
.support-chat {
  position: fixed;
  right: 23px;
  bottom: 23px;
  z-index: 997;
  margin: 0;
  width: 360px;
  height: 90%;
  border-radius: 20px;

  .card-content {
    padding: 20px;
  }

  .col {
    padding: 0 15px 0 0;
  }


  .msg-row {
    position: absolute;
    bottom: 20px;
    margin: 0;

    .msg-box {
      margin-bottom: 0;
      height: 35px;
      line-height: 30px;
      padding: 6px 12px 6px 12px;
      border: 1px solid #bdbdbd !important;
      border-radius: 20px;
    }

    .btn-send {
      height: 50px;
      width: 50px;
      
      .material-icons {
        line-height: 50px;
      }
    }
  }

  .navbar-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .msg-box:hover, .msg-box:focus {
    -webkit-box-shadow: 1px 1px 8px 1px #757575;
    -moz-box-shadow: 1px 1px 8px 1px #757575;
    box-shadow: 1px 1px 8px -1px #757575;
  }
}
@media only screen and (max-width: 600px) {
  .support-chat {
    margin-right: 5%;
    width: 80%;
  }
}
</style>