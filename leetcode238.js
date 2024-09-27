// 238. Product of Array Except Self

Input: nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

var productExceptSelf = function (nums) {
  let n = nums.length;
  console.log("nums.length => ", n); // 4

  let ans = new Array(n).fill(1); //  [1,1,1,1]
  console.log("ans => ", ans);

  let prefixProduct = 1;
  let sufixProduct = 1;

  // prefixProduct
  for (let i = 1; i < n; i++) {
    ans[i] = prefixProduct;
    console.log("ans[i] =>P ", ans[i]);

    prefixProduct *= nums[i];
    console.log(prefixProduct);
  }

  //sufixProduct
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= sufixProduct;
    console.log("ans[i] =>S ", ans[i]);

    sufixProduct *= nums[i];
    console.log(sufixProduct);
  }

  // final answ

  console.log("final ans => ", ans);
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
