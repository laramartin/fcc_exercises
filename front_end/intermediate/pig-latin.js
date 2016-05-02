function translate(str) {
  var vocal = ["a", "e", "i", "o", "u"];
  var newStr = "";

  if (vocal.indexOf(str[0]) != -1){
    newStr = str + "way";
  } else {
    var consonants = "";
    var i = 0;
    while (vocal.indexOf(str[i]) == -1){
      consonants += str[i];
      i++;
    }
    newStr = str.substr(i) + consonants + "ay";
  }
  return newStr;
}
