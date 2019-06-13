function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function() {
  //   this.root.postOrder();
  //   this.root.inOrder();
  this.root.preOrder();
};

Tree.prototype.addValue = function(val) {
  let n = new Node(val);
  if (this.root == null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
};

Tree.prototype.search = function(val) {
  let found = this.root.search(val);

  return found;
};
