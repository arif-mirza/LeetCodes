// 367. Valid Perfect Square

var isPerfectSquare = function(num) {
  let left = 0;
  let right = num;

  while (left<=right){
      let mid = Math.floor((left + right) /2);
      
       if (mid * mid < num) {
          left = mid + 1;
      } else if (mid * mid > num) {
          right = mid - 1;
      } else {
          return true;
      }
  }
  return false;
  
};



console.log(isPerfectSquare(16)); // true

// [1,2,3,4,5,6,7,8,9,10]
//  L       M          R