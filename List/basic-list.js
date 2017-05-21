// This is more like an ArrayList in java
//
// A list can grow and shrink dynamically
// The size does not need to be known during creation
// Can insert and remove from the middle without ???
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

}
