//  LetterCapitalize(str) take the str parameter being
//  passed and capitalize the first letter of each word.
//  Words will be separated by only one space.

function LetterCapitalize(str){
  var arr = str.split(" ");
  for(var i=0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}

console.log(LetterCapitalize('all lower case'));
