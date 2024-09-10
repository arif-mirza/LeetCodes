// 334 . Increaseing triplet subsequence
var increasingTriplet = function(nums) {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;

  for (let num of nums){
      if(num <= first){
          first = num
      }else if( num <= second){
         second = num
      }else{
          return true
      }
  }
  return false

  
};

console.log(increasingTriplet([1,2,3,4,5])); // true