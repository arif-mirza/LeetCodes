// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.

var myPow = function (x, n) {
  isNegative = n < 0;
  n = Math.abs(n);
  let result = 1;
  while (n > 0) {
    if (n & 1) {
      result *= x;
    }
    x *= x;
    n >>= 1;
  }
  return isNegative ? 1 / result : result;
};
