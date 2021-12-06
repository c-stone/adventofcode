const { inputsRaw } = require ('./data/input');
const inputsArray = inputsRaw
  .split('\n')
  .map(input => input.split('').map(Number));

let starterArray = [0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0]

// Perform counts, modify starter array
inputsArray.map(input => {
  input.map((digit, i) => {
    digit ? starterArray[i]++ : starterArray[i];
  })
})

const gamma = starterArray.map(count => count > 500 ? 1 : 0).join('');
const epsilon = starterArray.map(count => count < 500 ? 1 : 0).join('');
const solution = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log(solution);

