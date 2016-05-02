function palindrome(str) {
  // lowercase the string
  var lowercase = str.toLowerCase();
  // replace spaces, symbols and punctuation
  var filter = lowercase.replace(/[^a-zA-Z0-9]+/g, "");
  // reverse string
  var reverse = "";
  for (i = filter.length -1; i >= 0; i--){
    reverse += filter[i];
  }
  return (filter === reverse);
}
