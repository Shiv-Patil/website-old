let exports = {};

exports.helpCommand = (args) => {
  let response;
  if (args.length > 2) {
    response = "Help: Unexpected argument received";
  } else if (args.length > 1) {
    switch (args[1]) {
      case "about":
        response =
          "Presents some background information about myself\nAlias: info";
        break;
      case "projects":
        response = "Showcases my latest work";
        break;
      case "project":
        response =
          "Displays details regarding a certain project \
project.\nSyntax: project [project number]\nRun 'projects' to view all projects";
        break;
      case "clear":
        response = "Clears the terminal\nAlias: clean";
        break;
      case "help":
        response = "Lists available commands";
        break;
      case "fact":
        response = "Prints out a arbitrarily selected fact";
        break;
      case "delay":
        response =
          "\nSet the delay for text typing animation.\n\n\
Syntax: delay -- shows the current delay\n\
        delay [number] -- sets the delay\n\
        delay [range 1] [range 2] -- sets the delay range\n\n\
where 0 <= [number/range] <= 20\n";
        break;
      default:
        response = "No help available for '" + args[1] + "'\nNo such command";
        break;
    }
  } else {
    response =
      "\n'help <command>' for more info\n\n\
Portfolio commands:\n\
    about -- about me\n\
    projects -- showcases my latest work\n\
    project -- displays details regarding a certain project\n\n\
General commands:\n\
    clear -- clears the terminal\n\
    help -- shows this\n\n\
Fun commands:\n\
    fact -- prints out a randomly selected fact\n\n\
Config commands:\n\
    delay -- changes the text typing delay\n";
  }
  return response;
};

export default exports;
