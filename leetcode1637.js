// 1637. Widest Vertical Area Between Two Points Containing No Points

var maxWidthOfVerticalArea = function (points) {
  // first of all sort the points
  points.sort((a, b) => a[0] - b[0]);
  let maxWidth;

  for (let i = 1; i < points.length; i++) {
    maxWidth = Math.max(maxWidth, points[i][0] - points[i - 1][0]);
  }

  return maxWidth;
};

// Example 1:

Input: points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];
Output: 5;
