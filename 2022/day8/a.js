const rows = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim().split('\n');

const width = rows[0].length;
const height = rows.length;

let visibleCount = 0;

rows.forEach((row, rowIndex) => {
  row = row.split('');

  row.forEach((tree, columnIndex) => {
    const isFirstOrLastRow = rowIndex === 0 || rowIndex === height-1;
    const isFirstOrLastTreeInRow = !isFirstOrLastRow && columnIndex === 0 || columnIndex === width-1;
    
    const currentRow = [...row];
    const currentColumn = [...rows].map(x => x[columnIndex]);

    const above = currentColumn.slice(0, rowIndex);
    const right = currentRow.slice(columnIndex+1, width);
    const below = currentColumn.slice(rowIndex+1, height);
    const left = currentRow.slice(0, columnIndex);

    const treesToCompare = [above, right, below, left];
    const treeVisibilityByDirection = treesToCompare.map(direction => direction.some(otherTree => otherTree >= tree));
    const isTreeVisible = treeVisibilityByDirection.some(invisible => !invisible);
g
    if (isFirstOrLastRow || isFirstOrLastTreeInRow) {
      visibleCount++;
      return;
    }

    if (isTreeVisible) {
      visibleCount++;
      return;
    }
  });
});

// Solution
console.log(visibleCount);
