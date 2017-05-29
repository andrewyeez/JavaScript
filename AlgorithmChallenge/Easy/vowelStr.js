// Replace every letter in the string with the
// letter following it in the alphabet
// (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string
// (a, e, i, o, u) and finally return this modified string.


function LetterChanges(str) {
  var arr = Array.from(str);
  return arr.map(function(letter){
    if(letter == 'z'){
      return letter = 'A';
    }
    else if( ((97<=letter.charCodeAt(0)) && (122>=letter.charCodeAt(0))) ||
             ((65<=letter.charCodeAt(0)) && ( 90>=letter.charCodeAt(0))) ){
      var nxtLtr = letter.charCodeAt(0)+1;
      var nextLetter = String.fromCharCode(nxtLtr);
      if( (nextLetter == 'a') || (nextLetter == 'e') ||
          (nextLetter == 'i') || (nextLetter == 'o') ||
          (nextLetter == 'u') ){
        return nextLetter.toUpperCase();
      }
      return nextLetter;
    }
    else {
      return letter;
    }
  }).join('');
}
console.log(LetterChanges('123456789ae'));

/**
FAILED these test cases
  1. For the input "123456789ae" your output was incorrect. The correct answer is 123456789bf.
  2. For the input "this long cake@&" your output was incorrect. The correct answer is UIjt mpOh dblf@&.
  3. For the input "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect. The correct answer is b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~.

FIXED
  update the conditional statement for letters (line 14-15)

**/
