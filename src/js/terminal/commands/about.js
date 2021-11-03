let exports = {};

exports.aboutCommand = () => {
  const age = new Date().getFullYear() - 2005;
  return (
    "\nHey! My name is Shiv Patil, and I am a student programmer currently living in India. \
I am currently " +
    age.toString() +
    " years old, and am programming for about " +
    (age - 12).toString() +
    " years now.\n\n\
I have worked mostly with python, and am well-versed with the language.\n\
Most of my projects were made using the Kivy GUI framework in python, \
and I have also done various freelance projects using it.\n\n\
I have also dabbled with some other languages such as C#, C++, JavaScript and have beginner-level experience with all of them.\n\n\
Outside Computer Science, I love Physics and enjoy intellectual problems related to it.\n\
I also love to hear about the latest technology news and its workings!\n"
  );
};

export default exports;
