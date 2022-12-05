const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();

// Camp Clean Up
  // Sections contain unique ID
  // Each elf assigned a range of section IDs, like 2-6
    // Elfs grouped by pairs
      // Some assignments are fully contained by their pairs assignement: 4-6, fully contained by 2-6
  // In how many pairs does one range fully contain the other?

const pairs = data.split('\n');





console.log(pairs);