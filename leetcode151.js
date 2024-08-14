// leetcode No . 151. Reverse Words in a String

// Output: "blue is sky the"

var reverseWords = function (s) {
  let words = s.split(" ");
  console.log("words =>(1) ", words);

  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    console.log("i =>(2) ", i);
    if (words[i].length == 0) continue;
    else {
      if (result.length == 0) result += words[i];
      else result += " " + words[i];
    }
  }
  console.log("result =>(3) ", result);

  return result;
};

console.log(reverseWords("the sky is blue")); // blue is sky the
