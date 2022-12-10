const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const letters = data.split('');
let buffer = [];

const hasDupes = (array) => {
  return (new Set(array)).size !== array.length;
}

letters.every(((letter, i) => {
  buffer.push(letter);

  if (buffer.length === 4) {
    if (!hasDupes(buffer)) {
      console.log(i+1, buffer);
      return false;
    }

    buffer.reverse().pop();
    buffer.reverse();
  }

  return true;
}));
