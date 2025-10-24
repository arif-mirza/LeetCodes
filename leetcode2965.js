var findMissingAndRepeatedValues = function(grid) {
  let ans = [];
 const s = new Set();
 const n = grid.length;
 let a = -1;
 let b = -1;
 let actualSum = 0;

 for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const val = grid[i][j];
    actualSum += val;

    if(s.has(val)) {
      a = val;
    }
    s.add(val);
    
  }
  
 }
// for find the missing value
 const total = n*n;
 const expSum = (total * (total + 1)) / 2;

 b= expSum - (actualSum - a);

 ans.push(a, b);
 return ans;

}