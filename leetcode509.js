// leetcode no. 509. Fibonacci Number

var fib = function(n) {
  if( n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // Output: 55