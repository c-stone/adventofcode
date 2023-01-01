const input = require("fs").readFileSync("input.txt", { encoding: "utf-8" })

let worryLevel = 0;

const parseItemNums = (items) => {
  return items
    .replace(':', ',')
    .split(',')
    .filter(item => !isNaN(item));
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
  console.log(ifPhraseSplit);
  return parseInt(ifPhraseSplit[9]);
}

const parseMonkeys = (monkiesInput) => {
 let byMonkey = monkiesInput.split('\n\n');
 
 let monkeys = byMonkey.map(monk => {
  const monkStats = monk.split('\n');
  const items = monkStats[1];
  const operation = monkStats[2];
  const test = monkStats[3];
  const ifTrue = monkStats[4];
  const ifFalse = monkStats[5];

  const parsedMonkey = {
    startingItems: parseItemNums(items),
    worryModifier: makeWorryMod(operation),
    divisibleBy: parseDivisibilityNum(test),
    trueIndex: parseMonkeyIndex(ifTrue),
    falseIndex: parseMonkeyIndex(ifFalse),
  }

  return parsedMonkey;
 });

 return monkeys
};

const parsedMonkeys = parseMonkeys(input);
