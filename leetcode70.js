// leetcode No. 70 climbing stairs

var climbStairs = function (n){
  if(n <= 3){
    return n;
  }

  let a = 3; b = 2;

  for(let i =0; i < n-3; i++){
    a = a+b;
    b = a-b;
  }
  return a;
};

console.log(climbStairs(3)); // 3

// explaination
// spose n = 4;
// then for loop is just like as
// a = 3+2 = 5 so a = 5;
// b = 3-2 = 1 so b = 1;
// we return a so answer is 5