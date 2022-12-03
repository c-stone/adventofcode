const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const strategyGuide = data.split('\n').map(command => command.split(' '));

const WIN = 6;
const DRAW = 3;
const LOSE = 0;

const RPS_MAP = {
  A: {
    X: {
      outcome: DRAW,
      score: 1,
    },
    Y: {
      outcome: WIN,
      score: 2,
    },
    Z: {
      outcome: LOSE,
      score: 3,
    },
  },
  B: {
    X: {
      outcome: LOSE,
      score: 1,
    },
    Y: {
      outcome: DRAW,
      score: 2,
    },
    Z: {
      outcome: WIN,
      score: 3,
    },
  },
  C: {
    X: {
      outcome: WIN,
      score: 1,
    },
    Y: {
      outcome: LOSE,
      score: 2,
    },
    Z: {
      outcome: DRAW,
      score: 3,
    },
  },
};

const compileScores = (inputPair) => {
  const enemyMove = inputPair[0];
  const myMove = inputPair[1];
  const gameScore =  RPS_MAP[enemyMove][myMove].outcome;
  const moveScore = RPS_MAP[enemyMove][myMove].score;
  const totalScore = gameScore + moveScore;

  return totalScore;
}

const matchScores = strategyGuide.map(compileScores);
const total = matchScores.reduce((a, b) => a + b);

// Solution
console.log(total);
