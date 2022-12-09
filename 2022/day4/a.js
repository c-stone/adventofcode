const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const pairs = data.split('\n').map(pair => pair.split(','))

const enumerateRange = (range) => {
  const startNum = parseInt(range.split('-')[0]);
  const endNum = parseInt(range.split('-')[1]);
  let numList = [];

  if (startNum === endNum) {
    return [startNum];
  }

  for (let i = startNum; i < endNum+1; i++) {
    numList.push(i);
  }

  return numList;
};

const detectOverlaps = (rangePair) => {
  const range1 = rangePair[0];
  const range2 = rangePair[1];

  const containedInFirst = range1
    .map(num => range2.includes(num) ? 0 : 1)
    .reduce((a,b)=> a+b);

  const containedInSecond = range2
    .map(num => range1.includes(num) ? 0 : 1)
    .reduce((a,b)=> a+b);

  return [containedInFirst, containedInSecond];
};

const countOverlaps = (acc, currRange) => {
  if (currRange.includes(0)) {
    return ++acc;
  }
  return acc;
};

const enumeratedRanges = pairs.map(pair => pair.map(enumerateRange));
const overlapedRanges = enumeratedRanges.map(detectOverlaps);
const overlapedCount = overlapedRanges.reduce(countOverlaps, 0);

// Log Solution
console.log(overlapedCount);