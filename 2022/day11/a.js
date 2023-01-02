const input = require("fs").readFileSync("input.txt", { encoding: "utf-8" });

const parseItemNums = (items) => {
  return items
    .replace(':', ',')
    .split(',')
    .filter(item => !isNaN(item))
    .map(item => parseInt(item));
};

const makeWorryMod = (operation) => {
  const opSplit = operation.split(' ');
  const operator = opSplit[6];
  const num = opSplit[7];
  let func;

  if (isNaN(num)) {
    if (operator === '*') {
      func = (worryLevel) => worryLevel * worryLevel;
    } else {
      func = (worryLevel) => worryLevel + worryLevel;
    }
  } else {
    if (operator === '*') {
      func = (worryLevel) => worryLevel * parseInt(num);
    } else {
      func = (worryLevel) => worryLevel + parseInt(num);
    }
  }

  return func;
}

const parseDivisibilityNum = (test) => {
  const testSplit = test.split(' ');
  return parseInt(testSplit[5]);
}

const parseMonkeyIndex = (ifPhrase) => {
  const ifPhraseSplit = ifPhrase.split(' ');
  return parseInt(ifPhraseSplit[9]);
}

const parseMonkey = (monk) => {
  const monkStats = monk.split('\n');
  const [_, items, operation, test, ifTrue, ifFalse] = monkStats;

  return {
    startingItems: parseItemNums(items),
    worryModifier: makeWorryMod(operation),
    divisibleBy: parseDivisibilityNum(test),
    trueIndex: parseMonkeyIndex(ifTrue),
    falseIndex: parseMonkeyIndex(ifFalse),
  }
}

const parseMonkeys = (monkiesInput) => {
 return monkiesInput
  .split('\n\n')
  .map(parseMonkey);
};

const lowerWorryLevel = (worryLevel) => Math.floor(worryLevel / 3);

const doRound = (monkies) => {
  monkies.forEach((monk, i) => {
    const {
      startingItems,
      worryModifier,
      divisibleBy,
      trueIndex,
      falseIndex
    }  = monk;

    while (startingItems.length > 0) {
      let worryLevel = startingItems.shift();

      // inspect
      worryLevel = worryModifier(worryLevel);
      inspectCounts[i]++;

      // relief
      worryLevel = lowerWorryLevel(worryLevel);

      // monk tests worry level and throws
      if (worryLevel % divisibleBy === 0) {
        parsedMonkeys[trueIndex].startingItems.push(worryLevel);
      } else {
        parsedMonkeys[falseIndex].startingItems.push(worryLevel);
      }
    }

  });
};

// Go
const inspectCounts = [0, 0, 0, 0, 0, 0, 0, 0];
let parsedMonkeys = parseMonkeys(input);

for (let i = 0; i < 20; i++) {
  doRound(parsedMonkeys);
}

// Log Solution
const sortedCounts = inspectCounts.sort((a, b) => a - b).reverse();
console.log(sortedCounts[0] * sortedCounts[1]);
