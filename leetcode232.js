// 232. Implement Queue using Stacks

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  let front = this.s2.pop();
  while (this.s2.length) {
    this.s1.push(this.s2.pop());
  }

  return front;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  let front = this.s2[this.s2.length - 1];
  while (this.s2.length) {
    this.s1.push(this.s2.pop());
  }

  return front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
