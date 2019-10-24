

// Instantiate a new graph
var Graph = function() {
  // this.nodes = [];
  this.nodes = {};

};

var Node = function(value) {
  this.value = value;
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Node(node);
  this.nodes[node] = newNode;
  // this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var flag = false;
  // for (var i = 0; i < this.nodes.length; i++) {
  for (var i in this.nodes ) {
    if (this.nodes[i].value === node) {
      flag = true;
    }
  }
  return flag;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var i = 0; i < this.nodes.length; i++) {
  // if (this.nodes[i].value === node) {
    // this.nodes.splice(i, 1);
  // }
  // }
  delete this.nodes[node];
  for (key in this.nodes) {
    if (this.nodes[key].edges[node]) {
      delete this.nodes[key].edges[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var flag = false;
  // var from = this.nodes[fromNode];
  // var to = this.nodes[toNode];
  // for (var i = 0; i < from.edges.length; i++) {
  //   if (from.edges[i] === toNode ) {
  //     flag = true;
  //   }
  // }
  // return flag;
  if (this.nodes[fromNode].edges[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = true;
  this.nodes[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


