var BinarySearchTree = function(value) {
  var newTree = Object.create(methods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};
var methods = {};

methods.insert = function(value) {
  var child = BinarySearchTree(value);
  if (this.value > value) {
    if (this.left === null) {
      this.left = child;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = child;
    } else {
      this.right.insert(value);
    }
  }
};

methods.contains = function(value) {
  var result = false;

  if (this.value === value) {
    result = true;
  } else {
    if (this.value < value && this.right !== null) {
      result = this.right.contains(value);
    } else if (this.value > value && this.left !== null) {
      result = this.left.contains(value);
    }
  }
  return result;
};

methods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
