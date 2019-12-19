/*

Queue.js

A function to represent a queue

Created by Kate Morley - http://code.iamkate.com/ - and released under the terms
of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
function Queue() {
  // initialise the queue and offset
  var queue = [];
  var offset = 0;

  // Returns the length of the queue.
  this.getLength = function() {
    return queue.length - offset;
  };

  // Returns true if the queue is empty, and false otherwise.
  this.isEmpty = function() {
    return queue.length == 0;
  };

  /* Enqueues the specified item. The parameter is:
   *
   * item - the item to enqueue
   */
  this.enqueue = function(item) {
    queue.push(item);
  };

  /* Dequeues an item and returns it. If the queue is empty, the value
   * 'undefined' is returned.
   */
  this.dequeue = function() {
    // if the queue is empty, return immediately
    if (queue.length == 0) return undefined;

    // store the item at the front of the queue
    var item = queue[offset];

    // increment the offset and remove the free space if necessary
    if (++offset * 2 >= queue.length) {
      queue = queue.slice(offset);
      offset = 0;
    }

    // return the dequeued item
    return item;
  };

  /* Returns the item at the front of the queue (without dequeuing it). If the
   * queue is empty then undefined is returned.
   */
  this.peek = function() {
    return queue.length > 0 ? queue[offset] : undefined;
  };
}

//This list will keep track of the nodes we have visited in the tree
let marked_list = [];
let queue = new Queue();

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree_1 = new TreeNode(1);
tree_1.left = 2;
tree_1.right = null;

let tree_2 = new TreeNode(2);
tree_2.left = 5;
tree_2.right = 6;

let isSameTree = function(p, q) {
  let arr1 = [];
  let arr2 = [];

  search_tree(tree_1);
  arr1 = marked_list;

  marked_list = [];

  search_tree(tree_2);
  arr2 = marked_list;

  console.log(arr1);
  console.log(arr2);

  if (checkTrees(arr1, arr2)) {
    console.log("same!");
    return true;
  } else {
    console.log("not same!");
    return false;
  }
};

const checkTrees = (a1, a2) => {
  flag = false;

  //automatically structure is not the same
  if (a1.length !== a2.length) {
    return flag;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return flag;
    }
  }

  //If this point is reached, both trees have same value and structure
  flag = true;
  return flag;
};

const search_tree = happy_little_tree => {
  //Tree is empty
  if (happy_little_tree.val == null) {
    return;
  }

  queue.enqueue(happy_little_tree.val);

  marked_list.push(happy_little_tree.val);

  if (queue.left !== null) {
    queue.enqueue(happy_little_tree.left);
    marked_list.push(happy_little_tree.left);
    //recursion bby
    search_tree(happy_little_tree.left);
  }

  if (queue.right !== null) {
    queue.enqueue(happy_little_tree.right);
    marked_list.push(happy_little_tree.right);
    //recursion again bby
    search_tree(happy_little_tree.right);
  }
};

// search_tree(tree_2);

isSameTree(tree_1, tree_2);
