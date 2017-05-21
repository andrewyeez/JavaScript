// This is more like an ArrayList in java
//
// 1)  A list can grow and shrink dynamically.
// 2)  The size does not need to be known during creation.
// 3)  This implementation uses the SPLICE method to insert
//     a value in the middle of a list. (see BigO as array for inserts)
// 4) This implementation uses the array data structure to
//    find an element in a list. (see BigO as array for search)
function BasicList() {
  this.data = [];
  this.size = 0;

  // this.position = 0;
  // this.next = next;
  // this.previous = previous;
  // this.beginning = beginning;
  // this.end = end;

  //
  // this.remove = remove;
  // this.removeFrom = removeFrom;

  // Inserts the value at index value of size
  // After executing the size is incremented by 1
  this.insert = function(value) {
    this.data[this.size++] = value;
    return true;
  };

  // Inserts after a specific value
  // that already exist in the list
  this.insertAfter = function(value, locationVal){
    var locationPos = this.find(locationVal);
    if (locationPos){
      this.data.splice[locationPos+1,0,value];
      this.size++;
      return true;
    }
    // index given is out of bounds.
    return false;
  };

  // The find method makes use of the array data structure
  // that we build upon when creating a list.
  this.find = function(value){
    for(var i=0; i < this.data.length; ++i){
      if(this.data[i] == value){
        return i;
      }
    }
    // did not find the value
    return false;
  }

}
