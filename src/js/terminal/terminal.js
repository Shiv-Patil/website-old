// noinspection JSDeprecatedSymbols

import commands from "./commands/commands";
import iostream from "./iostream";

let exports = {};
let that;

exports.init = () => {
  that = window.vue_terminal;
  const history = JSON.parse(localStorage.getItem("terminal_text_delay"));
  if (Array.isArray(history) && history.length === 2) {
    window.terminal_delay = history;
  } else {
    window.terminal_delay = 0;
  }
};

exports.getSelectedText = () => {
  let text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  }
  return text;
};

exports.gotInput = async () => {
  const old = that.old_text;

  if (that.text.slice(0, that.user_start) !== old) {
    that.text = old;
    return;
  }

  const userInput = that.text.slice(that.user_start, that.text.length);
  const userCommands = userInput.split("\n").map(function (txt) {
    return txt.replace(/(\r|\n|\r\n)/gm, "");
  });
  if (userCommands.length > 1) {
    that.text = that.text.slice(0, that.user_start);

    const lastCommand = userCommands.pop();
    for (const lineCommand of userCommands) {
      that.user_start = that.text.length;
      await commands.executeCommand(that, lineCommand);
    }
    that.text += lastCommand;
  }
};

exports.keyDown = (event) => {
  event = event || window.event;
  const isCtrl = event.ctrlKey || event.metaKey;
  const pos = iostream.getCursorPos(that.$refs.textarea);

  if (that.accept_input === false) {
    event.stopPropagation();
    event.preventDefault();
  }

  if (event.keyCode === 67 && isCtrl && exports.getSelectedText()) {
    // Ctrl+C with text selected
    setTimeout(() => {
      that.$refs.textarea.setSelectionRange(pos.end, pos.end);
    });
    return;
  } else if (isCtrl) {
    // Ctrl pressed
    return;
  }

  commands.keyDown(that, event, isCtrl, pos);
};

export default exports;
