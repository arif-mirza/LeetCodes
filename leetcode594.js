// 594. Longest Harmonious Subsequence

var findLHS = function (nums) {
  let hsh = {};
  for (let i of hsh) {
    if (i in hsh) {
      hsh[i] += 1;
    } else {
      hsh[i] = 1;
    }
  }

  let ans = 0;
  for (let i in hsh) {
    let x = hsh[i];
    if (parseInt(i) + 1 in hsh) {
      let y = hsh[parseInt(i) + 1];
      let z = x + y;
      if (z > ans) {
        ans = z;
      }
    }
  }
  return ans;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // output 5

// requirement

// Given an integer array `nums`, return _the length of the longest_ **harmonious subsequence** _in the array_.

// A **harmonious subsequence** is a subsequence that can be formed by choosing two different elements from the array and swapping them.

// **Example 1:**
//
// **Input:** nums = \[1,3,2,2,5,2,3,7\]
// **Output:** 5
// **Explanation:** The longest harmonious subsequence is \[3,2,2,2,3\].
