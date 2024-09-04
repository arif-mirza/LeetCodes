// 853. Car Fleet

var carFleet = function (target, position, speed) {
  let pair = position.map((p, i) => [p, speed[i]]);
  pair.sort((a, b) => b[0] - a[0]);

  let stack = [];

  for (let [p, s] of pair) {
    stack.push((target - p) / s);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  return stack.length;
};

// example

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]); // 3

carFleet(10, [3, 5, 12, 18, 20], [4, 5, 3, 6, 3]); // 2

carFleet(3, [1, 2, 3], [1, 1, 1]); // 1

// details
