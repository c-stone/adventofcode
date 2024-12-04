import type { BunFile } from "bun";

const input = await Bun.file("./input.txt").text();

function solve(input: string) {
  const lines: string[] = input.trim().split("\n");

  // Create two arrays by splitting each line and mapping to numbers
  const [lefts, rights] = lines.reduce<[number[], number[]]>(
    (acc, line) => {
      const [num1, num2] = line.trim().split(/\s+/).map(Number);
      acc[0].push(num1);
      acc[1].push(num2);
      return acc;
    },
    [[], []]
  );

  const leftsSorted = lefts.sort((a, b) => a - b);
  const rightsSorted = rights.sort((a, b) => a - b);

  let differences: number[] = [];

  for (let i = 0; i < leftsSorted.length; i++) {
    differences.push(Math.abs(rightsSorted[i] - leftsSorted[i]));
  }

  return differences.reduce((acc, curr) => acc + curr, 0);
}

console.log(solve(input));
