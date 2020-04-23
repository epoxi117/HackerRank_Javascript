/**
   https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/ 
 **/

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
    this.count = 0;
  }

  print_inOrder(node) {
    if (node !== null) {
      this.print_inOrder(node.left);
      console.log(node.val);
      this.print_inOrder(node.right);
    }
  }

  diameter(node) {
    if (node == null) {
      return 0;
    }

    //The first iteration will start from the root
    let left_height = this.height(node.left);
    let right_height = this.height(node.right);

    console.log("left_height", left_height);
    console.log("right_height", right_height);

    let left_diameter = this.diameter(node.left);
    let right_diameter = this.diameter(node.right);

    console.log("left_diameter", left_diameter);
    console.log("right_diameter", right_diameter);

    let result = Math.max(
      left_height + right_height + 1,
      Math.max(left_diameter, right_diameter)
    );

    return result;
  }

  height(node) {
    if (node == null) {
      return 0;
    }
    let left_count = this.height(node.left);
    let right_count = this.height(node.right);

    let height_count = 0;

    if (left_count > right_count) {
      height_count = left_count + 1;
    } else {
      height_count = right_count + 1;
    }
    return height_count;
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
      } else if (current_node.right == null) {
        current_node = current_node.left;
        return current_node;
      }

      // Deleting node with two children
      // minumum node of the rigt subtree is stored in aux
    }
  }
}

let BST = new BinarySearchTree();

BST.insert(10);
BST.insert(5);
BST.insert(19);
BST.insert(1);
BST.insert(6);
BST.insert(17);
BST.insert(21);
console.log("height", BST.height(BST.root));
BST.diameter(BST.root);

BST.print_inOrder(BST.root);
