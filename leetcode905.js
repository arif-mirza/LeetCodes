// 905. Sort Array By Parity

var sortArrayByParity = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] % 2 > nums[r] % 2) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }

    if (nums[l] % 2 == 0) l++;
    if (nums[r] % 2 == 1) r--;
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
