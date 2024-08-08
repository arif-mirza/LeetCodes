// leetcode No. 101 Symetric tree

var isSymmetric = function(root) {
  if (root === null) return true;
  const isMirror = function (left,right){
    if(left === null && right === null) return true;

    if(left === null || right === null) return false;

    reutrn (left.val === right.val) && 
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left);
  }
  return isMirror(root.left,root.right);
}