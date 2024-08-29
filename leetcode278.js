// 278. First Bad Version

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;

      while(left<right){
          let mid = Math.floor((left+right)/2);
          if(isBadVersion(mid)){
              right= mid;
          }else{
              left = mid+1
          }
      }
      return left;
      
  };
};

// Example 1:

// Input: n = 5, bad = 4
// Output: 4

// approach
// badversion = b
//  [1,2,3,4,5,6,7,8,9,10]
//   L       M     b    R