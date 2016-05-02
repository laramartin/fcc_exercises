function titleCase(str) {
  // lowercase string
  var lowerCase = str.toLowerCase();
  // split the string by words
  var split = lowerCase.split(" ");
  // empty array to store all the final words
  var finalWordsArray = [];

  // for every word in array
  for (i = 0; i < split.length; i++){

    // store actual word
    var actualWord = split[i].split("");

    // get first letter of actual word
    var firstLetter = actualWord.shift();

    // upper case that letter
    var firstLetterUpper = firstLetter.toUpperCase();

    // introduce first letter on word in first position
    actualWord.unshift(firstLetterUpper);

    // join the letters of the word (array) to make a word
    var finalWord = actualWord.join("");

    // join the strings on the array to get a string
    finalWordsArray.push(finalWord);
  }

  var finalString = finalWordsArray.join(" ");

  return finalString;

}
