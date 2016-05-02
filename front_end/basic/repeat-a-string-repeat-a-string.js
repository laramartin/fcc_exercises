function repeat(str, num) {
  // if num is positive
  if (num >= 0){
    // store repetition as array
    var arrayRepetition = [];
    // init var to store final string
    var repeatedStr = "";
        // for every time in number of times in "num"
    for (i = 0; i < num; i++){
      // add a repetition onto the array
      arrayRepetition.push(str);
    }
    repeatedStr = arrayRepetition.join("");
    // return repeated string
    return repeatedStr;
  }
  // if num is negative
  else{
    return "";
  }
  return str;
}
