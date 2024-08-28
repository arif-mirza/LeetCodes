// 110.Balance binary tree



var isBalanced = function (root) {
  if (!root) return 1;
  let heightL = isBalanced(root.left);
  let heightR = isBalanced(root.right);

  if (heightL === false || heightR === false) return false;
  if (Math.abs(heightL - heightR) > 1) return false;
  return Math.max(heightL, heightR) + 1;
};








