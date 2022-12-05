const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const divideItems = (items) => {
  const itemCount = items.length;
  const compartment1 = items.substring(0, itemCount/2);
  const compartment2 = items.substring(itemCount/2, itemCount);

  return [compartment1, compartment2];
};

const findMatchingLetter = (rucksack) => {
  const part1 = rucksack[0].split('');
  const part2 = rucksack[1];

  for (let i = 0; i < part1.length; i++) {
    const currentItem = part1[i];
    if (part2.includes(currentItem)) {
      return currentItem;
    }
  }
};

const findLetterScore = (letter) => {
  const modifier = (letter == letter.toUpperCase()) ? 27 : 1;
  return ALPHABET.indexOf(letter.toLowerCase()) + modifier;
};

const rucksacks = data.split('\n').map(divideItems);
const matchingLetters =  rucksacks.map(findMatchingLetter);
const score = matchingLetters.map(findLetterScore).reduce((a, b) => a + b);

// Log solution
console.log(score);
