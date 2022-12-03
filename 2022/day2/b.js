const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const strategyGuide = data.split('\n').map(command => command.split(' '));

const WIN = 6;
const DRAW = 3;
const LOSE = 0;

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const RPS_MAP = {
  A: { // rock
    X: {
      score: LOSE,
      myMove: SCISSORS,
    },
    Y: {
      score: DRAW,
      myMove: ROCK,
    },
    Z: {
      score: WIN,
      myMove: PAPER
    },
  },
  B: { // paper
    X: {
      score: LOSE,
      myMove: ROCK,
    },
    Y: {
      score: DRAW,
      myMove: PAPER,
    },
    Z: {
      score: WIN,
      myMove: SCISSORS,
    },
  },
  C: { // scissors
    X: {
      score: LOSE,
      myMove: PAPER,
    },
    Y: {
      score: DRAW,
      myMove: SCISSORS,
    },
    Z: {
      score: WIN,
      myMove: ROCK,
    },
  },
};

const compileScores = (inputPair) => {
  const enemyMove = inputPair[0];
  const outcome = inputPair[1];

  const gameScore =  RPS_MAP[enemyMove][outcome].score;
  const moveScore = RPS_MAP[enemyMove][outcome].myMove;
  const totalScore = gameScore + moveScore;

  return totalScore;
}

const matchScores = strategyGuide.map(compileScores);
const total = matchScores.reduce((a, b) => a + b);

// Solution
console.log(total);
