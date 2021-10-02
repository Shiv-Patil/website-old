let exports = {};

exports.specificProjectCommand = (args) => {
  let response;
  if (args.length > 2) {
    response = "Project: Unexpected argument received";
  } else if (args.length < 2) {
    response =
      "Please specify a project number\nRun 'help project' for more info";
  } else {
    switch (args[1]) {
      case "1":
        response =
          "\nStudent Portal\n\n\
An app for students made as a part of a code jam\n\
Made in python using the Kivy GUI framework\n\n\
Source code is available at:\n\
    https://github.com/FirePlank/Student-Portal\n";
        break;
      case "2":
        response =
          "\nAccount Safe\n\n\
A simple and secure app to store all your passwords in one place\n\
Made in python using the Kivy GUI framework\n\n\
Source code is available at:\n\
    https://github.com/Shiv-Patil/Account-Safe\n\n\
Also available on Google Play Store:\n\
    https://play.google.com/store/apps/details?id=org.krymzin.locker\n";
        break;
      default:
        response = "No such project";
        break;
    }
  }
  return response;
};

export default exports;
