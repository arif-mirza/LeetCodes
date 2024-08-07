// leetcode No. 242 Valid anagram

 let s = "anagram", t = "nagaram";

 var isAnagram = function(s,t){
  // check the length of both strings if its not equal it not anagram
  let str1 = s.length;
  let str2 = t.length;

  if(str1!== str2){
    return false;
  }else{
    let count = new Array(26).fill(0);
    // create for loop for str1

    for(let i = 0; i < str1; i++){
      count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // create for loop for str2

    for( let i = 0; i < str2; i++){
      count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    // for loop for count 
    for(let i = 0; i < count.length; i++){
      if(count[i]!== 0){
        return false;
      }
    }

    return true;


  }

 }

 