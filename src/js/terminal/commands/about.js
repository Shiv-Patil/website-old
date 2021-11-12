let exports = {};

exports.aboutCommand = () => {
  const age = new Date().getFullYear() - 2005;
  return (
    "Hey there! My name is Shiv, and I'm currently " +
    age.toString() +
    ".\nI'm a self-taught programmer who is well-acquainted with python and has some experience with JavaScript and C++.\n" +
    "I have largely worked with the Kivy python framework to make cross-platform GUI apps.\n" +
    "Currently I am trying to learn new technologies and trying out different programming languages to work with.\n" +
    "I like rock/metal music :P\n"
  );
};

export default exports;
