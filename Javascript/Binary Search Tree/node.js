function Node(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
};

Node.prototype.preOrder = function() {
  console.log(this.value);

  if (this.left != null) {
    this.left.preOrder();
  }

  if (this.right != null) {
    this.right.preOrder();
  }
};

Node.prototype.inOrder = function() {
  if (this.left != null) {
    this.left.inOrder();
  }

  console.log(this.value);

  if (this.right != null) {
    this.right.inOrder();
  }
};

Node.prototype.postOrder = function() {
  if (this.left != null) {
    this.left.postOrder();
  }

  if (this.right != null) {
    this.right.postOrder();
  }

  console.log(this.value);
};

//equal #'s don't get added
Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};
