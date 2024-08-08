// leetcode No. 94 Binary Tree Inorder Traversal

var inorderTraversal = function (root) {
  let list = [];
  if (root === null) {
    return list;
  }
  return inorder(root, list);
};

function inorder(root, list) {
  if (root.left != null) {
    inorder(root.left, list);
  }
  list.push(root.val);
  if (root.right != null) {
    inorder(root.right, list);
  }
  return list;
}
