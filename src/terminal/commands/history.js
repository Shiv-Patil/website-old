let exports = {};

exports.getTerminalHistory = () => {
  const history = JSON.parse(sessionStorage.getItem("terminal_history"));
  let index = parseInt(sessionStorage.getItem("terminal_history_index"));
  if (!history) {
    return [[], NaN];
  }
  if (isNaN(index)) {
    index = 0;
    sessionStorage.setItem("terminal_history_index", "0");
  }
  return [history, index];
};

exports.previousCommand = (that) => {
  that.text = that.text.slice(0, that.user_start);
  const terminal_history = exports.getTerminalHistory();
  const history = terminal_history[0];
  let index = terminal_history[1];
  if (!history) {
    return;
  }
  if (isNaN(index)) {
    index = 0;
    sessionStorage.setItem("terminal_history_index", "0");
  } else {
    index = index + 1;
  }
  const cmd = history[index];
  if (cmd !== undefined) {
    sessionStorage.setItem("terminal_history_index", index);
    that.text += cmd;
  } else {
    that.text += history[index - 1];
  }
};

exports.nextCommand = (that) => {
  that.text = that.text.slice(0, that.user_start);
  const terminal_history = exports.getTerminalHistory();
  const history = terminal_history[0];
  let index = terminal_history[1];
  if (!history) {
    return;
  }
  if (isNaN(index)) {
    index = 0;
    sessionStorage.setItem("terminal_history_index", "0");
  } else {
    index = index - 1;
  }
  if (index < 0) {
    sessionStorage.setItem("terminal_history_index", "-1");
    return;
  }
  const cmd = history[index];
  if (cmd !== undefined) {
    sessionStorage.setItem("terminal_history_index", index);
    that.text += cmd;
  }
};

exports.updateHistory = (cmd) => {
  const history = exports.getTerminalHistory()[0];
  if (cmd !== history[0]) {
    cmd ? history.unshift(cmd) : null;
  }
  if (history.length > 50) {
    history.pop();
  }
  sessionStorage.setItem("terminal_history", JSON.stringify(history));
  sessionStorage.setItem("terminal_history_index", "-1");
};

export default exports;
