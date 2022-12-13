const data = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim().split('\n');

const width = data[0].length;
const height = data.length;

let visibleCount = 0;

data.forEach((row, rowIndex) => {
  row = row.split('');

  row.forEach((tree, columnIndex) => {
    const isFirstOrLastRow = rowIndex === 0 || rowIndex === height-1;
    const isFirstOrLastTree = !isFirstOrLastRow && columnIndex === 0 || columnIndex === width-1;
    const currentRow = row;
    const currentColumn = data.map(x => x[columnIndex]);

    // Remove current tree
    currentRow.splice(columnIndex, 1);
    currentColumn.splice(rowIndex, 1);

    const treesToCompare = currentRow.concat(currentColumn);
    const rowInvisible = treesToCompare.some(x => x > tree);
    
    if (isFirstOrLastRow || isFirstOrLastTree) {
      visibleCount++;
      return;
    }

    if (!rowInvisible) {
      visibleCount++;
      return;
    }
  });
});

console.log(visibleCount);