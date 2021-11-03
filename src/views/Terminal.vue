<template>
  <div class="terminal">
    <div id="titlebar">
      <div id="title-text-container">
        <img id="icon" alt="icon" src="@/assets/terminal-icon.png" />
        <div id="title-text">Terminal</div>
      </div>
      <router-link to="/gui">
        <button class="button">GUI</button>
      </router-link>
    </div>
    <div id="text-area-container">
      <textarea
        id="textarea"
        ref="textarea"
        v-model="text"
        data-gramm_editor="false"
        ondragstart="return false"
        ondrop="return false"
        spellcheck="false"
        @input="gotInput()"
        @keydown="keyDown($event)"
        @paste="gotInput()"
      ></textarea>
    </div>
  </div>
</template>

<script>
import terminal from "../js/terminal/terminal";
import iostream from "../js/terminal/iostream";

export default {
  name: "Home",
  data() {
    return {
      accept_input: true,
      user_start: 35,
      text: "To list all commands, type help\n\n> ",
      old_text: "To list all commands, type help\n\n> ",
    };
  },
  components: {},
  methods: {
    gotInput() {
      terminal.gotInput(this);
    },
    keyDown(event) {
      terminal.keyDown(event, this);
    },
  },
  mounted() {
    this.$refs.textarea.focus();
    window.vue_terminal = this;
    terminal.init();
    iostream.init();
  },
};

document.oncontextmenu = function (e) {
  if (!e) return;
  const target = e.target;
  if (target.id === "text-area-container" || target.id === "textarea") {
    const copied = terminal.getSelectedText();
    if (!copied) {
      navigator.clipboard
        .readText()
        .then((text) => {
          window.vue_terminal.text += text;
          window.vue_terminal.gotInput();
        })
        .catch((err) => {
          alert("Failed to read clipboard contents: " + err);
        });
    } else {
      navigator.clipboard.writeText(copied);
    }
    return false;
  }
};
</script>

<style scoped>
.terminal {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

#titlebar {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  height: auto;
  background: #333333;
}

#title-text-container {
  display: inline-flex;
  flex: 1;
}

#icon {
  position: relative;
  width: 32px;
  height: 26px;
}

#title-text {
  position: relative;
  width: auto;
  height: auto;
  margin: auto 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #ffffff;
  cursor: default;
}

#text-area-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: #0c0c0c;
}

#textarea {
  flex: 1;
  height: 100%;
  background: #0000;
  border: none;
  outline: none;
  overflow: auto;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
  border-radius: 0;
  cursor: default;
  color: white;
}
</style>
