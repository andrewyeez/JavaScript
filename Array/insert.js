/**
 * [insert_into_arr description]
 *  1) create an array that will hold the first half of the given array
 *     where the first half is consisted of the values inside the
 *     index < target
 *  2) create another array that will consist of the values inside the
 *     index >= target
 *  3) combine the 3 arrays in order of (1)(what we want to insert)(3)
 *
 * @param  {[array]}  value  [what we want to insert]
 * @param  {[number]} target [where we want it to be inserted]
 * @param  {[array]}  array  [where we want to value to be in]
 * @return {[array]}         [returns the array w/ inserted value or false]
 */
function insert_into_arr (value,target,array) {
  // make sure we use an integer target value
  var check_value = (typeOf(value) == 'number');
  var check_target = (typeOf(target) == 'number');
  // array must not be empty
  // target and value must be a number
  if (check_value && check_target && array.length != 0) {
    // target is an integer
    target = Math.round(target);
    // handle the 4 cases that may occur
    switch (target) {
      // target value is the last index of the array
      case (target == array.length):
        array.push(value);
        break;
      // target value is the beginning of the array
      case (target == 0):
        array.unshift(value);
        break;
      // target value is in between the beginning and the end of the array
      case (0 < target < array.length):
        var first_half = array.slice(0,target);
        var second_half = array.slice(target, array.length);
        array = first_half.concat(value).concat(second_half);
        break;
      // target value is larger than the length of the array or is negative
      default:
        return false;
    }
    // returns the array w/ inserted value
    return array;
  }
  // returns false if it fails to pass the check
  return false;
}
