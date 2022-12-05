const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const splitIntoTrios = (rucksacks) => {
  let trios = [];

  while (rucksacks.length > 0) {
    trios.push([rucksacks.shift(), rucksacks.shift(), rucksacks.shift()])
  }

  return trios;
};

const findLetterScore = (letter) => {
  const modifier = (letter == letter.toUpperCase()) ? 27 : 1;

  return ALPHABET.indexOf(letter.toLowerCase()) + modifier;
};

const findMatchingLetterScores = (trio) => {
  const first = trio[0];
  const second = trio[1];
  const third = trio[2];

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];

    if (second.includes(letter) && third.includes(letter)) {
      return findLetterScore(letter);
    }
  }
};

const rucksacks = data.split('\n');
const groupedSacks = splitIntoTrios(rucksacks);
const score = groupedSacks.map(findMatchingLetterScores).reduce((a,b)=>a+b);

// Log solution
console.log(score);