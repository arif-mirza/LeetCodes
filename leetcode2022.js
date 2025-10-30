// 2022. Convert 1D Array Into 2D Array

var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  const result = [];

  for (let i = 0; i < m; i++) {
    const row = original.slice(i * n, i * n + n);
    result.push(row);
  }
  return result;
};

// console.log(construct2DArray([1,2,3,4],2,2));
// [[1,2],[3,4]]// console.log(construct2DArray([1,2,3],1,3)); // [[1,2,3]]
// console.log(construct2DArray([1,2],1,1)); // []
