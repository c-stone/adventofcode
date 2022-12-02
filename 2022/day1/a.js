const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const elfsSnacksCalories = data.split('\n\n').map(item => item.split('\n'));

const sumCalories = (calories) => {
  return calories.reduce((accumulator, current) => parseInt(accumulator) + parseInt(current)); 
};

const elfsTotalCalories = elfsSnacksCalories.map(sumCalories).sort();
const lastItem = elfsTotalCalories.length - 1;
const mostCalories = elfsTotalCalories[lastItem];

// Log solution
console.log(mostCalories);

