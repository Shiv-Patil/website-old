let exports = {};
let that;

exports.init = () => {
  that = window.vue_terminal;
};

function getSpeed(speedRange) {
  if (Array.isArray(speedRange) && speedRange.length === 2) {
    const min = speedRange[0];
    const max = speedRange[1];
    return Math.random() * Math.abs(max - min) + min;
  }
  return 0;
}

function asyncLetter(letter, speed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(letter);
    }, speed);
  });
}

async function* asyncGenerator(text, speedRange) {
  const letters = text.split("");
  while (letters.length > 0) {
    const letter = letters.shift();
    yield asyncLetter(letter, getSpeed(speedRange));
  }
}

exports.send = async (text, speedRange = undefined) => {
  that.accept_input = false;
  if (speedRange === undefined) {
    speedRange = window.terminal_delay;
  }
  if (speedRange === 0 || (speedRange[0] === 0 && speedRange[1] === 0)) {
    that.text = that.text + text;
  } else {
    for await (const letter of asyncGenerator(text, speedRange)) {
      that.text = that.text + letter;
      that.$refs.textarea.scrollTop = that.$refs.textarea.scrollHeight;
    }
  }
  that.old_text = that.text;
  that.user_start = that.old_text.length;
  that.accept_input = true;
};

exports.getTextLength = () => {
  return that.text.length;
};

exports.sliceText = (len) => {
  that.text = that.text.slice(0, len);
};

exports.resetInput = (char = "> ") => {
  // Resets the input in text area (when a command is executed).
  that.text = that.text.replace(/(\r)/gm, "");
  that.text += that.text === "" ? char : "\n\n" + char;
  that.old_text = that.text;
  that.user_start = that.old_text.length;
  that.accept_input = true;
  setTimeout(() => {
    that.$refs.textarea.scrollTop = that.$refs.textarea.scrollHeight;
    that.$refs.textarea.focus();
  });
};

exports.clearTerminal = () => {
  that.text = "";
};

exports.blockAllInput = () => {
  that.old_text = that.text;
  that.user_start = that.old_text.length + 69;
};

exports.getCursorPos = () => {
  const input = that.$refs.textarea;
  if ("selectionStart" in input && document.activeElement === input) {
    return {
      start: input.selectionStart,
      end: input.selectionEnd,
    };
  }
  return {
    start: 0,
    end: -1,
  };
};

export default exports;
