const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const PROCEDURES = data
  .split('\n')
  .map(input => input.split(' '))
  .map(procedure => [parseInt(procedure[1]), parseInt(procedure[3]), parseInt(procedure[5])]);

// bottom -> top
const STACKS = [
  ['D', 'Z', 'T', 'H'],
  ['S', 'C', 'G', 'T', 'W', 'R', 'Q'],
  ['H', 'C', 'R', 'N', 'Q', 'F', 'B', 'P'],
  ['Z', 'H', 'F', 'N', 'C', 'L'],
  ['S', 'Q', 'F', 'L', 'G'],
  ['S', 'C', 'R', 'B', 'Z', 'W', 'P', 'V'],
  ['J', 'F', 'Z'],
  ['Q', 'H', 'R', 'Z', 'V', 'L', 'D'],
  ['D', 'L', 'Z', 'F', 'N', 'G', 'H', 'B'],
].map(stack => stack.reverse()); // lol whoops

for (let i = 0; i < PROCEDURES.length; i++) {
  const procedure = PROCEDURES[i];
  const count = procedure[0];
  const from = procedure[1]-1;
  const to = procedure[2]-1;
  const queue = [];

  for (let i = 0; i < count; i++) {
    queue.push(STACKS[from].pop());
  }

  const stepsToWatch = [1];

  STACKS[to].push(...queue.reverse());
  if(stepsToWatch.includes(i)) {
    // console.log(STACKS);
  }
}

const cratesOnTop = STACKS.map(stack => stack.pop()).join('');

// Solution
console.log(STACKS);