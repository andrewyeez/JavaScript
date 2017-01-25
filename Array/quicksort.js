function quicksort (arr, start, end) {
  if (start < end) {
    q = partition(arr,start,end);
    quicksort(arr,start,q-1);
    quicksort(arr,q+1,end);
  }
  return arr;
}
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
  switch_place(arr,i+1,y);
  return i+1;
}

function switch_place (arr,a,b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

var arr = [43,12,3,14,64,4,5,7,1];
console.log('START: ' + arr);
console.log('RESULT: ' + quicksort(arr,0,arr.length-1));
