const commands = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .trim()
  .split('\n').map(input => input.split(' '));

const cycleCheck = [20, 60, 100, 140, 180, 220];

let x = 1;
let cycleIndex = 0;
let buffer = 0;
let signals = [];

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
      signals.push(cycleIndex * x);
    }
  }

  if (Math.abs(buffer) > 0) {
    x += buffer;
    console.log(x);
    buffer = 0;
  }
})

console.log(signals, signals.reduce((a,b)=>a+b));
