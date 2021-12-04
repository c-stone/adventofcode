const { inputArray } = require ('./data/input');

const sum = (prev, curr) => prev + curr;
const inputParser = (array, direction) => {
  return array
    .filter(input => input.indexOf(direction) !== -1)
    .map(input => input.split(' ').map(Number))
    .flat()
    .filter(Number)
    .reduce(sum)
};

const forwards = inputParser(inputArray, 'forward');
const ups = inputParser(inputArray, 'up');
const downs = inputParser(inputArray, 'down');

// [horizontal, depth]
const coordinates = [forwards, downs - ups];
const solution = coordinates.reduce((prev, curr) => prev * curr);

console.log(solution);
