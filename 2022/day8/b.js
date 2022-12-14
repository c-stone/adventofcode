const rows = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim().split('\n');

const width = rows[0].length;
const height = rows.length;

let visibleCount = 0;

rows.forEach((row, rowIndex) => {
  row = row.split('');

  row.forEach((currentTree, columnIndex) => {    
    const currentRow = [...row];
    const currentColumn = [...rows].map(x => x[columnIndex]);

    const above = currentColumn.slice(0, rowIndex);
    const right = currentRow.slice(columnIndex+1, width);
    const below = currentColumn.slice(rowIndex+1, height);
    const left = currentRow.slice(0, columnIndex);
    const treesToCompare = [above, right, below, left];


    const treeCounts = treesToCompare.map(treesByDirection => {
      let count = 0;

      treesByDirection.every(otherTree => {
        if (otherTree < currentTree) {
          count++
          return true;
        }

        if (otherTree >= tree) {
          count++
          return false;
        }
      })

      return count;
    });

    console.log(treeCounts);
  });
});

// Solution
console.log(visibleCount);
