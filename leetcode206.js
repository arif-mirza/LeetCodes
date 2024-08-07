// leetcode 206. Reverse Linked List

let head = [1, 2, 3, 4, 5];

var linkedList = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

// explaination
// curr means the each element
// curr.next means the 2 position
// prev is equal to null and 2 become null
// pre = curr means
