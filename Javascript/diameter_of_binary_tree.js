/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 
Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  //   this.print();
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  //   this.print();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  //   this.print();
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min_num = this.stack[0];

  for (let ii = 1; ii < this.stack.length; ii++) {
    if (parseInt(this.stack[ii]) < parseInt(min_num)) {
      min_num = this.stack[ii];
    }
  }
  //   console.log("min", min_num);
  return min_num;
};

MinStack.prototype.print = function () {
  console.log("stack", this.stack);
};

var newObj = new MinStack();
newObj.push(2);
newObj.push(0);
newObj.push(3);
newObj.push(0);
newObj.getMin();
newObj.pop();
newObj.getMin();
newObj.pop();
newObj.getMin();
newObj.pop();
newObj.getMin();

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
