/**
 * [make_num_array description]
 *     generates an array of integers from 0 to 100, where the size of the
 *     array is determined by the parameter 'size'
 *
 * @param  {[number]} size [determins the size of the array]
 * @return {[array]}       [the generated array with numbers from 0 to 100]
 */
function make_num_array (size) {
  // must be a number and value greater than 0
  if (typeof(size) === 'number' && size > 0) {
    var arr = [];
    // size will determine how big our array will be
    for (i = 0; i < size; i++) {
      // Return a random number between 1 and 100
      // Math.floor((Math.random() * 100) + 1)
      arr.push(Math.floor((Math.random() * 100) + 1));
    }
    // returns the generated array filled with numbers from 0 to 100
    return arr;
  }
  // failed to pass the if statement
  return false;
}
