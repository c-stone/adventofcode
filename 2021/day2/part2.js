const { inputArray } = require ('./data/input');

// [horizontal, depth, aim]
const startingCoordinates = [0, 0, 0]

// down increase aim
// up decrease aim
// forward increase horizontal postion, increase depth by aim * units moved

const parseInputs = (array, startingCoordinates) => {
  let coordinates = startingCoordinates;
  
  array.forEach(input => {
    const splitInput = input.split(' ');
    const direction = splitInput[0];
    const quantity = Number(splitInput[1]);

    if (direction === 'forward') {
      //horizontal
      coordinates[0] = coordinates[0] + quantity;
      //depth
      coordinates[1] = coordinates[1] + (coordinates[2] * quantity);
    } else if (direction === 'down') {
      //aim
      coordinates[2] = coordinates[2] + quantity;
    } else if (direction === 'up') {
      //aim
      coordinates[2] = coordinates[2] - quantity;
    } else {
      console.log('invalid input', splitInput);
    }
  });

  return coordinates;
};

const finalCoordinates = parseInputs(inputArray, startingCoordinates);
const solution = finalCoordinates[0] * finalCoordinates[1];
console.log(solution);
 //🤮