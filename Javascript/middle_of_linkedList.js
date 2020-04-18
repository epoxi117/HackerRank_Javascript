/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.


EXAMPLE 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.


EXAMPLE 2: 

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.


CONSTRAINT: The number of nodes in the given list will be between 1 and 100.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      let walker = this.head;

      while (walker.next !== null) {
        walker = walker.next;
      }
      walker.next = node;
    }
  }

  print() {
    let walker = this.head;

    while (walker) {
      console.log(walker.val);
      walker = walker.next;
    }
  }

  createLinkedListFromArray(arr) {
    for (let ii = 0; ii < arr.length; ii++) {
      this.addNode(new ListNode(arr[ii]));
    }
  }

  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  middleNode() {
    let stack = [];
    let middle_element = "";

    let walker = this.head;

    while (walker.next !== null) {
      stack.push(walker);
      walker = walker.next;
    }
    stack.push(walker);

    middle_element = stack[Math.floor(stack.length / 2)];

    console.log(middle_element);

    return middle_element;
  }
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let arr_1 = [1, 2, 3, 4, 5, 6];
let arr_2 = [1, 2, 3, 4, 5];

let myLinkedList = new LinkedList();
myLinkedList.createLinkedListFromArray(arr_1);
myLinkedList.middleNode();
