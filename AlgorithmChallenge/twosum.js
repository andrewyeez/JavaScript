/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// ASCENDING ARRAY
numbers = [1,3,5,6,8,12];

// RANDOM ARRAY
// numbers = [4,2,6,1,12,3,15]
target = 4;

var twoSum1 = function(numbers, target) {
  start = 0;
  end = numbers.length - 1;
  while(start < end){
    if(numbers[start] + numbers[end] == target){ break; }
    else if( numbers[start] + numbers[end] > target){ end--; }
    else{ start++; }
  }
  return [start,end];
};

var twoSum2 =  function(numbers,target){
  for(var i=0; i < numbers.length; i++){
    for(var j=0; j < numbers.length; j++){
      if((i != j) && (numbers[i]+numbers[j]==target)){
        return [i,j];
      }
    }
  }
}

console.log(twoSum1(numbers,target));
console.log(twoSum2(numbers,target));
