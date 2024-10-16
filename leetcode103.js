// 103 binary tree zigzag order transversal

var zigzagLevelOrder = function (root) {
  if (root === null) return [];

  let Q = [];
  let elements = [];

  Q.push(root);

  while (Q.length > 0) {
    let level_length = Q.length;
    let array_length = [];

    for (let i = 0; i < level_length; i++) {
      let currentNode = Q.shift();

      if (currentNode.left) Q.push(currentNode.left);
      if (currentNode.right) Q.push(currentNode.right);

      array_length.push(currentNode.val);
    }
    elements.push(array_length);
  }
  for (let i = 0; i < elements.length; i++) {
    if (i % 2 === 1) {
      elements[i].reverse();
    }
  }

  return elements;
};
