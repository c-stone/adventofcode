const { inputsRaw } = require ('./data/input');

const inputsArray = inputsRaw.split('\n');

const countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Perform counts, modify starter array
const oneOrZeroByPosition = (position, inputsArray, countArray) => {
  let starterArray = countArray;
  inputsArray.map(input => {
    input.map((digit, i) => {
      digit ? starterArray[i]++ : starterArray[i];
    })
  });

  return starterArray[position] <= inputsArray.length/2 ? 1 : 0
};

console.log(
  inputsArray
    .filter(input => input[0] == oneOrZeroByPosition(0, inputsArray, countArray))
    .filter(input => input[1] == oneOrZeroByPosition(1, inputsArray, countArray))
    .filter(input => input[2] == oneOrZeroByPosition(2, inputsArray, countArray))
    .filter(input => input[3] == oneOrZeroByPosition(3, inputsArray, countArray))
    .filter(input => input[4] == oneOrZeroByPosition(4, inputsArray, countArray))
    .filter(input => input[5] == oneOrZeroByPosition(5, inputsArray, countArray))
    .filter(input => input[6] == oneOrZeroByPosition(6, inputsArray, countArray))
    .filter(input => input[7] == oneOrZeroByPosition(7, inputsArray, countArray))
    .filter(input => input[8] == oneOrZeroByPosition(8, inputsArray, countArray))
);

// O2GeneratorRating = 011110000011 (4089)
// cO2ScrubberRating = 111111111001 (1923)
