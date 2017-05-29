function FirstReverse(str) {
  var rts = [];
  for(var i=str.length-1; i>=0; i--){
    rts.push(str.charAt(i));
  }
  // code goes here
  return rts.join('');
}

// keep this function call here
console.log(FirstReverse('this'));
