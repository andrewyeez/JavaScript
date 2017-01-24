function quicksort (arr, start, end) {
  if (start < end) {
    q = partition(arr,start,end);
    quicksort(arr,start,q-1);
    quicksort(arr,q+1,end);
  }
  function partition (arr, x, y) {
    // pivot is the last index of the given array
    var pivot = arr[y];
    // i is the first index of the array
    var i = x - 1;
    // traverse through the given array
    for(var traverse = x; traverse <= y-1; traverse++) {
      if (arr[traverse] <= pivot) {
        i = i+1;
        switch_place(i,traverse);
      }
    }
    function switch_place (i,traverse) {
      var temp = arr[i]
      arr[i] = arr[traverse]
      arr[traverse] = temp;
    }
    switch_place(i+1,y);
    return i+1;
  }
}

var arr = [43,12,3,14,64,4,5];
console.log(quicksort(arr,0,arr.length-1));
