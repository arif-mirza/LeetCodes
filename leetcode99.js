leetcode 99 = Recover Binary Search Tree


var recoverTree = function(root) {
  let first = null;
    let second = null;
    let prev = new TreeNode(Number.NEGATIVE_INFINITY);

    function inorder(node) {
        if (!node) return;

        inorder(node.left);


        if (prev.val > node.val) {
            if (!first) first = prev; 
           
            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);


    let temp = first.val;
    first.val = second.val;
    second.val = temp;
    
};

Example:

Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.