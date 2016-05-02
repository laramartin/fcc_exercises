function reverseString(str) {
  var split = str.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  return join;
}
