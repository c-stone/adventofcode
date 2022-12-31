const commands = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .trim()
  .split('\n').map(input => input.split(' '));

const cycleCheck = [40, 80, 120, 160, 200, 240];

let x = 1;
let cycleIndex = 0;
let buffer = 0;
let spritePositions = [0, 1, 2];

let imgRowIndex = 0;
let img = [
  [],
  [],
  [],
  [],
  [],
  []
]

commands.forEach(command => {
  let cycleCount = 1;
  
  if (command[1]) {
    cycleCount = 2;
    buffer = parseInt(command[1]);
  }

  while (cycleCount > 0) {
    cycleIndex++;
    cycleCount--;

    if (cycleCheck.includes(cycleIndex)) {
      imgRowIndex++;
    }

    if (spritePositions.includes(cycleIndex)) {
      img[imgRowIndex].push('#');
    } else {
      img[imgRowIndex].push('.');
    }
  }

  if (Math.abs(buffer) > 0) {
    x += buffer;
    buffer = 0;

    spritePositions = [];

    for (let i = 0; i < 2; i++) {
      spritePositions.push[x-1+i];
    }

  }
})

console.log(img);
