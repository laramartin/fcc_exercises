function findLongestWord(str) {
  // split string in words
  var split = str.split(" ");
  var lengths = 0;
  // check length of words
  for (i = 0; i < split.length; i++){
    if ((split[i].length) > lengths){
      lengths = split[i].length;
    }
  }
  return lengths;
}
