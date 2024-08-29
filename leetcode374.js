// 374. Guess Number Higher or Lower

var guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let result = guess(mid);

      if (result === 0) {
          return mid;
      } else if (result === -1) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return -1;
};
