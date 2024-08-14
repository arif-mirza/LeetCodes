// leetcode No.1422 maximum-score-after-splitting-a-string

var maxScore = function (s) {
  let runningSCore = 0;
  for (let l of s) {
    if (l == "1") runningSCore++;
  }

  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == "0") runningSCore++;
    else runningSCore--;
  }

  return score;
};

console.log(maxScore("011101")); // 5
