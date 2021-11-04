let exports = {};

exports.aboutCommand = () => {
  const age = new Date().getFullYear() - 2005;
  return (
    "\nHey! My name is Shiv Patil, and I am an Indian student programmer. \
I'm roughly " +
    age.toString() +
    " years old and have been programming for 4 years.\n\n\
I've largely worked with Python and am quite acquainted with it.\n\
The Kivy GUI framework in Python was used in the majority of my projects, \
and I've also completed several freelancing tasks with it.\n\n\
Aside from Python, I've experimented in other languages like C# and C++ and have some beginner-level knowledge with them.\n\
I am also well-versed in JavaScript.\n\n\
Discord ID: KrYmZiN#0311\n"
  );
};

export default exports;
