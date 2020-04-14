/**
   https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/ 
 **/ m;

let root = [10, 5, 15, 3, 7, null, 18];
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  print_inOrder(node) {
    if (node !== null) {
      this.print_inOrder(node.left);
      console.log(node.val);
      this.print_inOrder(node.right);
    }
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(current_node, newNode) {
    if (newNode.val < current_node.val) {
      if (current_node.left == null) {
        current_node.left = newNode;
      } else {
        this.insertNode(current_node.left, newNode);
      }
    } else {
      if (current_node.right == null) {
        current_node.right = newNode;
      } else {
        this.insertNode(current_node.right, newNode);
      }
    }
  }

  remove(key) {
    this.removeNode(this.root, key);
  }

  removeNode(current_node, key) {
    if (current_node == null) {
      return null;
    }

    //Walk through left branch
    else if (key < current_node.val) {
      current_node.left = this.removeNode(current_node.left, key);
      return current_node;
    }
    //Walk through right branch
    else if (key > current_node.val) {
      current_node.right = this.removeNode(current_node.right, key);
      return current_node;
    } else {
      //case 1 -> Deleting node with no children
      if (current_node.left == null && current_node.right == null) {
        current_node = null;
        return current_node;
      }

      //case 2 -> Deleting node with one child
      if (current_node.left == null) {
        current_node = current_node.right;
        return current_node;
      }
      if (current_node.right == null) {
        current_node = current_node.left;
        return current_node;
      }
    }
  }
}

let BST = new BinarySearchTree();

BST.insert(117);
BST.insert(25);
BST.insert(135);
BST.insert(15);

BST.print_inOrder(BST.root);
