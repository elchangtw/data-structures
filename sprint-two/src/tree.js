var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var currTree = this;
  var flag = false;

  var search = (currTree) => {
    if (currTree.value === target) {
      flag = true;
    } else {
      for (var i = 0; i < currTree.children.length; i++) {
        search(currTree.children[i]);
      }
    }
  };
  search(currTree);
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
