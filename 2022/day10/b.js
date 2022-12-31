const lines = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .trim()
  .split('\n')

  let x = 1;
  const instructions = [];

  for (let i = 0; i < lines.length; i++) {
    instructions.push(0);

    const [ins, amount] = lines[i].split(" ");
    if (ins === "addx") instructions.push(parseInt(amount));
  }

  // define grid of 40x6
  const grid = Array.from({ length: 6 }, () =>
    new Array(40).fill(" ")
  );

  instructions.forEach((ins, index) => {
    const [dx, dy] = [index % 40, Math.floor(index / 40)];

    const shouldPaint = dx === x || dx === x - 1 || dx === x + 1;
    grid[dy][dx] = shouldPaint ? "X" : " ";
    x += ins;
  });

  grid.forEach((row) => {
    console.log(row.join(""));
  });