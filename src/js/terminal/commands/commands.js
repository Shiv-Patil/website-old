import cog_help from "./help";
import cog_projects from "./projects";
import cog_project from "./project";
import cog_about from "./about";
import cog_fact from "./fact";
import cog_history from "./history";
import cog_delay from "./delay";
import iostream from "../iostream";

const clear = iostream.clearTerminal;
const send = iostream.send;
const resetInput = iostream.resetInput;

let exports = {};

function notRecognizedCommand(cmd) {
  return "'" + cmd + "' is not a recognized command";
}

exports.executeCommand = async (that, cmd) => {
  that.text += cmd;
  const user_commands = cmd.toLowerCase().split(";");
  cog_history.updateHistory(cmd);

  for (const command of user_commands) {
    that.text === "" ? await send("") : await send("\n\n");
    const commands = command.match(
      /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+/g
    );
    if (!commands || commands.length === 0) {
      that.text = that.text.slice(0, -2);
      continue;
    }
    switch (commands[0]) {
      case "help":
        await send(cog_help.helpCommand(commands));
        break;
      case "info":
      case "about":
        await send(cog_about.aboutCommand());
        break;
      case "projects":
        await send(cog_projects.projectsCommand());
        break;
      case "project":
        await send(cog_project.specificProjectCommand(commands));
        break;
      case "clean":
      case "clear":
        clear();
        break;
      case "fact":
        await send(cog_fact.getRandomFact());
        break;
      case "delay":
        await send(cog_delay.delayCommand(commands));
        break;
      case (commands[0].match(/"|'([^"|'\\]|\\.)*"|'/) || {}).input:
        if (commands.length > 1) {
          for (let i = 1; i < commands.length; i++) {
            await send(
              "Unexpected token '" +
                commands[i] +
                "' in expression or statement.\n\n"
            );
          }
          that.text = that.text.trim();
          break;
        }
        commands[0].substring(1).indexOf(commands[0][0]) > -1
          ? await send(commands[0].substring(1).replace(commands[0][0], ""))
          : await send(commands[0].substring(1));
        break;
      case "":
        break;
      default:
        await send(notRecognizedCommand(commands[0]));
        break;
    }
  }
  resetInput();
};

exports.keyDown = (that, event, isCtrl, pos) => {
  if (isCtrl && event.keyCode === 67) {
    // Ctrl+C with no selection
    that.text += "^C";
    resetInput(that);
    event.preventDefault();
    event.stopPropagation();
  } else if (event.key === "ArrowUp") {
    // Up arrow
    event.preventDefault();
    event.stopPropagation();
    cog_history.previousCommand(that);
    that.$refs.textarea.setSelectionRange(that.text.length, that.text.length);
  } else if (event.key === "ArrowDown") {
    // Down arrow
    event.preventDefault();
    event.stopPropagation();
    cog_history.nextCommand(that);
    that.$refs.textarea.setSelectionRange(that.text.length, that.text.length);
  } else if (event.key === "ArrowLeft" && pos.start <= that.user_start) {
    // Left arrow at the start of user input
    event.preventDefault();
    event.stopPropagation();
  } else if (pos.start < that.user_start) {
    // Set cursor to end
    that.$refs.textarea.setSelectionRange(that.text.length, that.text.length);
  }
};

export default exports;
