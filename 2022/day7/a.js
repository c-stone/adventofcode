const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();
const command = data.split('\n');


console.log(command);
