const input:string = await Deno.readTextFile("./input.txt");

const sum: number = input
.split('\n')
.reduce((prev: number, curr: string, index: number, array: string[]): number => {
  return curr > array[index-1] ? prev+1 : prev;
}, 1);

console.log(sum);