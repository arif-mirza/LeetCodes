// 799. Champagne Tower

var champagneTower = function (poured, query_row, query_glass) {
  if (poured == 0) return 0;

  let prevRow = [poured];
  while (query_row > 0) {
    let currRow = [];

    for (let i = 0; i <= prevRow.length; i++) {
      let p1 = i - 1 >= 0 ? Math.max(0, (prevRow[i - 1] - 1) / 2) : 0;
      let p2 = i < prevRow.length ? Math.max(0, (prevRow[i] - 1) / 2) : 0;

      let amount = p1 + p2;
      currRow.push(amount);
    }

    prevRow = currRow;
    query_row--;
  }

  return Math.min(1, prevRow[query_glass]);
};
