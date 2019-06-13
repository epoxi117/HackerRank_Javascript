function LinkedList() {
  this.head = null;
  this.next = null;
}

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};

LinkedList.prototype.size = function() {
  let count = 0;

  let walker = this.head;

  while (walker !== null) {
    walker = walker.next;
    count++;
  }

  return count;
};

//add a node to beginning of list
LinkedList.prototype.prepend = function(val) {
  let newNode = {
    data: val,
    next: this.head
  };

  this.head = newNode;
};

LinkedList.prototype.append = function(val) {
  let newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
    return;
  }

  let walker = this.head;
  while (walker.next !== null) {
    walker = walker.next;
  }
  walker.next = newNode;
};

let list = new LinkedList();
list.prepend(234);
list.prepend(10);
list.prepend(5);
console.log(list.isEmpty());
list.append(22);
console.log(list);
