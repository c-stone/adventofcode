const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const elfsSnacksCalories = data.split('\n\n').map(item => item.split('\n'));

const sumCalories = (calories) => {
  return calories.reduce((accumulator, current) => parseInt(accumulator) + parseInt(current)); 
};

const elfsTotalCalories = elfsSnacksCalories.map(sumCalories).sort();
const first = parseInt(elfsTotalCalories[elfsTotalCalories.length - 1]);
const second = parseInt(elfsTotalCalories[elfsTotalCalories.length - 2]);
const third = parseInt(elfsTotalCalories[elfsTotalCalories.length - 3]);
const topThreeTotal = first + second + third;

//Log solution
console.log(topThreeTotal);

