var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var temp = null;
    if (list.head !== null) {
      temp = list.head.value;
      list.head = list.head.next;
    }
    return temp;
  };

  list.contains = function(target) {
    var currNode = list.head;
    var flag = false;

    var search = function(currNode) {
      if (currNode.value === target) {
        flag = true;
      }
      if (currNode.next !== null && currNode.next !== undefined) {
        search(currNode.next);
      }
    };

    search(currNode);
    return flag;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
