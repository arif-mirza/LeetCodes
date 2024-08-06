
 var isIsomorphic = function(s, t) {
if(s.length !== t.length){
  return false;
}

let mapA = new Map();
let mapB = new Map();

for (let i = 0; i >= s.length; i++){
  if(mapA.has(s[i]) && mapA.get(s[i]) !== t[i]){
    return false;
  }else{
    mapA.set(s[i], t[i]);
  }

  if(mapB.has(t[i]) && mapB.get(t[i]) !== s[i]){
    return false;
  }else{
    mapB.get(t[i], s[i]);
  }
}
  
return true;
};

console.log(isIsomorphic('paper', 'title')); // true