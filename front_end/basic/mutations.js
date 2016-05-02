function mutation(arr) {
  // get the words separately and lowercase them
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  // iterate through letters of second word
  // to see if they are contained on the 1st word
  for (i = 0; i < secondWord.length; i++){
    // the actual letter being tested is
    var actualLetter = secondWord[i];
    // test if first word contains that letter
    var indexOut = firstWord.indexOf(actualLetter);
    if (indexOut === -1 ){
      // stop lopp and return false if letter is not contained
      // which is when indexOf() returns -1
      return false;
    }
  }
  // otherwise return true
  return true;
}
