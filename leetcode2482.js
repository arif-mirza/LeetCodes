// 2482. Difference Between Ones and Zeros in Row and Column

var onesMinusZeros = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let diffRow = new Array().fill(0);
  let diffCol = new Array().fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        diffRow[i]++;
        diffCol[j]++;
      } else {
        diffRow[i]--;
        diffCol[j]--;
      }
    }
  }

  let diff = new Array(m).fill().map(() => new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = diffRow[i] + diffCol[j];
    }
  }

  return diff;
};

console.log(
  onesMinusZeros([
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ])
); // [[1,-1,1],[-1,1,-1],[1,-1,1]]
