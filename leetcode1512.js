// 1512. Number of Good Pairs

nums = [1, 2, 3, 1, 1, 3];

var numIdenticalPairs = function (nums) {
  let dic = {};

  let count = 0;

  for (let i of nums) {
    if (i in dic) {
      count += dic[i];
      dic[i] += 1;
    } else {
      dic[i] = 1;
    }
  }
};

console.log(numIdenticalPairs(nums)); // Output: 6
