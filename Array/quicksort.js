/**
 * [quicksort description]
 *  A simple divide and conquer algorithm. We will chose the pivot to be the
 *  element at the end of the array; some tutorials/books will chose the pivot
 *  to be the middle element or the first. Once the pivot is chosen we iterate
 *  through the entire array and move values around to comply with the rule that
 *  the left side will have the values less than the pivot and the right side
 *  will have the values greater than the pivot. Once we finish traversing the
 *  array, we "divide" the array into two partition. One parition will be the
 *  left side holding the values lower than the pivot and the other partition
 *  will be the values higher than the pivot. We repeat the process of selecting
 *  the last element to be the pivot and traversing the array. It repeats itself
 *  until all the elements are sorted from least to greatest.
 *
 *  Time
 *  Best = O(n log(n)) [When partion array sizes are equal]
 *  Average = O(n log(n)) [When partition of the array size are sometimes equal]
 *  Worst = O(n^2) [When one partion is n-1 of the original array]
 *
 * Space
 * Worst = O(n) [When one partition is n-1 of the original array and stack call
 *               will be as big as n]
 *
 * @param  {[Array]} arr   [Array containg the elements to be sorted]
 * @param  {[type]} start  [the first index of the array]
 * @param  {[type]} end    [the last index of the array]
 * @return {[Array]}       [The sorted ascending array]
 */
function quicksort (arr, start, end) {
  if (start < end) {
    q = partition(arr,start,end);
    quicksort(arr,start,q-1);
    quicksort(arr,q+1,end);
  }
  return arr;
}
/**
 * [partition description]
 *   The goal of this function is to pick a pivot element, place the pivot
 *   element in its correct index order in the array and then return the
 *   index of the pivot element after it has been placed in the right order.
 *
 * @param  {[Array]} arr [array containing the elements to be sorted]
 * @param  {[Integer]} x   [the first index of the array]
 * @param  {[Integer]} y   [the last index of the array, used to get the pivot value]
 * @return {[Integer]}     [returns the position of the pivot element after it has
 *                          been switched.]
 */
function partition (arr, x, y) {
  // pivot is the last index of the array
  var pivot = arr[y];
  // i is the first index of the array
  var i = x - 1;
  // traverse through the array
  // traverse starts with the index of the first element of the array
  // y is the index of the last element of the array
  for(var traverse = x; traverse <= y-1; traverse++) {
    // as traverse iterates through the array
    // we will compare every element to the pivot
    // example of a single for loop run:
    //
    //   array = [1,2,3]
    //   pivot = 3;
    //
    //   y = (index 2)
    //   x = (index 0)
    //   i = (index -1)
    //   traverse = (index 0)
    //
    //   array[y] = 3, array[x] = 1
    //   array[i] = undefined, array[traverse] = 1
    //
    //   if ( array[traverse] <= 3)
    //     increment i by 1
    //     then switch the values of array[i] with array[traverse]
    //     repeat the for loop until condition is met
    //
    if (arr[traverse] <= pivot) {
      i = i+1;
      switch_place(arr,i,traverse);
    }
  }
  // as we exit the for loop, we now have to switch
  // the value of the pivot with the value of (i+1)
  // this will place the pivot element right where it
  // needs to be in the array for the array to be sorted
  switch_place(arr,i+1,y);
  // the index of the pivot is the return value which will
  // be used as a divider when we split the array into two
  // sections
  return i+1;
}
/**
 * [switch_place description]
 *   Switch the value of arr[a] and arr[b].
 * @param  {[Array]} arr [Array that may or may not have elements]
 * @param  {[Integer]} a   [Index of the element to switch with b]
 * @param  {[Integer]} b   [Index of the element to switch with a]
 */
function switch_place (arr,a,b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
