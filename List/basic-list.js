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
  this.position = 0;
  /**
   * [Insert]
   *
   * Inserts a value at the location of SIZE
   * SIZE as the index should give back the value
   * at the end of the array. So we are inserting at
   * the end of the array.
   *
   * @param  {[*]} value [Value to be inserted]
   * @return {[boolean]} [TRUE]
   */
  this.insert = function(value) {
    this.data[this.size++] = value;
    return true;
  };

  /**
   * [Remove]
   *
   * Looks for the value to be removed
   * IF found, THEN we use SPLICE to remove the value.
   *
   * DECEREMENTS the value of SIZE
   *
   * @param  {[*]} value [value to be removed]
   * @return {[boolean]} [TRUE if removed, FALSE if not found]
   */
  this.remove = function(value){
    var location = this.find(value);
    if (location){
      this.data.splice(location,1);
      --this.size;
      return true;
    }
    return false;
  };

  /**
   * [Insert After]
   *
   * Looks for the location that we want to insert our value AFTER,
   * IF found, THEN we use SPLICE to insert the value after that
   * said location.
   *
   * INCREMENTS the value of SIZE
   *
   * @param  {[*]} value       [Value to be inserted]
   * @param  {[*]} locationVal [Value that will determine the
   *                            location of insertion]
   * @return {[boolean]}       [TRUE if inserted, FALSE if not found]
   */
  this.insertAfter = function(value, locationVal){
    var location = this.find(locationVal);
    if (location){
      this.data.splice[location+1,0,value];
      ++this.size;
      return true;
    }
    return false;
  };

  /**
   * [Find]
   *
   * Looks for a value by using a FOR loop on an array
   * IF value is found, THEN we return the index value
   * at the point of location.
   *
   * @param  {[*]} value [Value to be found]
   * @return {[*]}       [FALSE if not found, NUMBER index of found position]
   */
  this.find = function(value){
    for(var i=0; i < this.data.length; ++i){
      if(this.data[i] == value){ return i; }
    }
    return false;
  };
}
