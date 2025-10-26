// 448. Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function (nums) {
  const seen = new Set(nums);
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) {
      result.push(i);
    }
  }

  return result;
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
// console.log(findDisappearedNumbers([1,1])); // [2]
// console.log(findDisappearedNumbers([2,2])); // [1]
