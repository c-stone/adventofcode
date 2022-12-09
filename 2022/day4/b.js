const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const pairs = data.split('\n').map(pair => pair.split(','))