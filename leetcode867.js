// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

var transpose = function (matrix) {
  // for saving the result
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let rows = [];

    for (let j = 0; j < matrix.length; j++) {
      rows.push(matrix[j][i]);
    }

    result.push(rows);
  }
  return result;
};
