

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.otherStorage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var obj = {};
  // var arr = [];
  // obj[k] = v;
  // if (this._storage.get(index)) {
  //   _.extend(obj, this._storage.get(index));
  // }

  if (this._storage.get(index)) {
    this.otherStorage.set(index, v);
    return;
  }

  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.otherStorage.get(index)) {
    return this.otherStorage.get(index);
  } else {
    return this._storage.get(index);
  }
  // if (this._storage.get(index)[k]) {
  //   return k;
  // } else {
  //   return false;
  // }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


