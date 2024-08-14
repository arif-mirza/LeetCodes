// Leetcode No. 2706 buy choco

var buyChoco = function (prices, money) {
  let min = Infinity;
  let secMin = Infinity;

  for (const price of prices) {
    if (min > price) {
      secMin = min;
      min = price;
    } else if (secMin > price) {
      secMin = price;
    }
  }

  let leftOver = money - min - secMin;
  return leftOver >= 0 ? leftOver : money;
};

console.log(buyChoco([1, 2, 3, 4, 5], 10)); // 8
