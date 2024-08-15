// 896. Monotonic Array

var isMonotonic = function (nums) {
  let inc = true,
    dec = true;

  for (let i = 1; i < nums.length; i++) {
    console.log(i);

    if (nums[i - 1] > nums[i]) inc = false;
    if (nums[i - 1] < nums[i]) dec = false;
    console.log("inc", inc);
    console.log("dec", dec);

    if (!inc && !dec) return false;
  }

  return true;
};

console.log(isMonotonic([1, 2, 2, 3])); // true
