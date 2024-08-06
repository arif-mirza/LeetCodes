// leetcode125 Valid Palindrome

let s = "A man, a plan, a canal: Panama";

var isPalindrime = function (s){
  // convert string in lower case and remove non- Apha numeric words
  s = s.toLowerCase().replace(/[^a-z0-9]/g , "");

  // create a while loop to check
  let left = 0;
  let right = s.length - 1;

  while(left <= right){
    if(s.charAt(left) !== s.charAt(right)){
      return false;
    }
    left++;
    right--;
  }

  return true;
  
}

console.log(isPalindrime(s)); // true