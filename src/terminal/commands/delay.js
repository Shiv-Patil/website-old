let exports = {};

exports.delayCommand = (args) => {
  let response;
  if (args.length > 3) {
    response = "Project: Unexpected argument received";
  } else if (args.length === 1) {
    let delay = 0;
    const history = JSON.parse(localStorage.getItem("terminal_text_delay"));
    if (Array.isArray(history) && history.length === 2) {
      if (history[0] === history[1]) {
        delay = history[0];
      } else {
        delay = history[0] + " - " + history[1];
      }
    } else {
      window.terminal_delay = delay;
    }
    response = "Current delay: " + delay;
  } else if (args.length === 2) {
    let delay = parseFloat(args[1]);
    if (isNaN(delay) || delay < 0 || delay > 20) {
      response = "Please enter a valid delay";
    } else {
      let history = [delay, delay];
      localStorage.setItem("terminal_text_delay", JSON.stringify(history));
      window.terminal_delay = history;
      response = "Delay saved successfully";
    }
  } else {
    let range1 = parseFloat(args[1]);
    let range2 = parseFloat(args[2]);
    if (
      isNaN(range1) ||
      range1 < 0 ||
      range1 > 20 ||
      isNaN(range2) ||
      range2 < 0 ||
      range2 > 20
    ) {
      response = "Please enter a valid delay range";
    } else {
      let history = [range1, range2];
      localStorage.setItem("terminal_text_delay", JSON.stringify(history));
      window.terminal_delay = history;
      response = "Delay range saved successfully";
    }
  }
  return response;
};

export default exports;
