

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.otherStorage = LimitedArray(this._limit);
};

//var MAX_TUPLE_COUNT; //potentially to implement dynamic bucket size

HashTable.prototype.findTuple = function(bucket, key) {
  var result;
  //debugger
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      result = i;
      i = bucket.length; // exit for loop
    }
  }
  return result;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];
  if (bucket === undefined) {
    bucket = [];
  }
  if (this.findTuple(bucket, k) === undefined) {
    bucket.push(tuple);
  } else {
    bucket[this.findTuple(bucket, k)][1] = v;
  }
  // var obj = {};
  // var arr = [];
  // obj[k] = v;
  // if (this._storage.get(index)) {
  //   _.extend(obj, this._storage.get(index));
  // }

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(index)[k]) {
  //   return k;
  // } else {
  //   return false;
  // }
  var bucket = this._storage.get(index);
  var result;
  if (this.findTuple(bucket, k) !== undefined) {
    result = bucket[this.findTuple(bucket, k)][1];
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  if (this.findTuple(bucket, k) !== undefined) {
    result = bucket.splice(this.findTuple(bucket, k), 1);
  }
  this._storage.set(index, bucket);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


