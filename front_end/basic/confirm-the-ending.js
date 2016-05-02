function end(str, target) {
  /* Check if a string (first argument) ends with
  the given target string (second argument).
  */
  var startSubstring = str.length - target.length;
  var substring = str.substr(startSubstring);
  return substring == target;
}
