//the function LongestWord(sen) take the sen parameter
//being passed and return the largest word in the string.
//If there are two or more words that are the same length,
//Ireturn the first word from the string with that length.
//IIgnore punctuation and assume sen will not be empty.
//

/**
 *  Design Thoughts
 *
 * First, we should split the string by spaces which will
 *        result in an array filled with the words from the string
 * Second, replace function each word to remove the punctuation
 * Third, keep track of each word and count, return the largest word back
 */

function LongestWord(sen) {
  var senArr = sen.split(" ");
  var longestWordCount= 0;
  var locationLongestWord = 0;
  for(var i=0; i<senArr.length; i++){
    // had to google the regex pattern to remove punctuations
    var word = senArr[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if (word.length > longestWordCount){
      longestWordCount = word.length;
      locationLongestWord = i;
    }
  }

  // code goes here
  return senArr[locationLongestWord];

}

// keep this function call here
// LongestWord(readline());

console.log(LongestWord('This#~!! prototype the not really longest'));
