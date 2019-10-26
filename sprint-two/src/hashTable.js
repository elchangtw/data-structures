

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._usage = 0;
  //this.otherStorage = LimitedArray(this._limit);
};

//var MAX_TUPLE_COUNT; //potentially to implement dynamic bucket size

HashTable.prototype.findTuple = function(bucket, key) {
  var result;
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
    this._usage++;
  }

  if (this.findTuple(bucket, k) === undefined) {
    bucket.push(tuple);
  } else {
    bucket[this.findTuple(bucket, k)][1] = v;
  }

  this._storage.set(index, bucket);
  if ((this._usage / this._limit) > .6) {
    var newHash = [];
    for (var i = 0; i < this._limit; i++) {
      // get our current storage and place into new one
      newHash.push(this._storage.get(i)) === undefined ? newHash.push([]) : newHash.push(this._storage.get(i));
    }
    this._storage = LimitedArray(this._limit * 2);
    this._limit = this._limit * 2;
    for (var i = 0; i < newHash.length; i++) {
      if (newHash[i] !== undefined && newHash[i].length > 0) {
        for (var j = 0; j < newHash[i].length; j++) {
          var index = getIndexBelowMaxForKey(newHash[i][j][0], this._limit);
          var bucket = this._storage.get(index);
          if (bucket === undefined) {
            bucket = [];
          }
          bucket.push(newHash[i][j]);
          this._storage.set(index, bucket);
        }
      }
    }
  }
  // var obj = {};
  // var arr = [];
  // obj[k] = v;
  // if (this._storage.get(index)) {
  //   _.extend(obj, this._storage.get(index));
  // }

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
    if (bucket.length === 0) {
      this._usage--;
    }
  }
  this._storage.set(index, bucket);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


