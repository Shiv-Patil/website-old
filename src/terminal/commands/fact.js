import facts_raw from "raw-loader!./facts.txt";

const facts = facts_raw.split("\n").filter(function (fact) {
  return fact.replace(/(\r|\n|\r\n)/gm, "");
});

let exports = {};

exports.getRandomFact = () => {
  let rand = Math.random();
  rand *= facts.length;
  rand = Math.floor(rand);
  return facts[rand];
};

export default exports;
