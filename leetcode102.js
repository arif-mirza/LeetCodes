// 102. Binary Tree Level Order Traversal
Input: root = [3, 9, 20, null, null, 15, 7];
Output: [[3], [9, 20], [15, 7]];

var levelOrder = function (root) {
  if (root === null) return [];

  let Q = [];
  let elements = [];

  Q.push(root); //

  while (Q.length > 0) {
    const level_length = Q.length;
    const array_length = [];

    for (let i = 0; i < level_length; i++) {
      const currentNode = Q.shift();

      if (currentNode.left) Q.push(currentNode.left);
      if (currentNode.right) Q.push(currentNode.right);

      array_length.push(currentNode.val);
    }
    elements.push(array_length);
  }
  return elements;
};
