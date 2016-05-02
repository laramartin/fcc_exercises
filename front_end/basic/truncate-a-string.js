function truncate(str, num) {
  // store substring
  var substring = "";
  // get substring of str with length = num
  // if the str's length is bigger than num
  if (str.length > num) {
    // the str's slice ends on index = num
    var indexEndSlice = num;
    //only if num >= 3,
    if (num >= 3){
      // we substract 3, because "..." adds length
      indexEndSlice -= 3;
    }
    // obtain the slice
    var strSlice = str.slice(0, indexEndSlice);
    // construct substring with the slice and the "..." at the end
    substring =  strSlice + "...";
    // return resulting substring
    return substring;
  }
  // if str.length < num
  else {
    // return the original str
    return str;
  }
}
