function fearNotLetter(str) {
  var letter;
  var i = 0;
  while (i < str.length - 1){
    if ((str.charCodeAt(i) - str.charCodeAt(i + 1)) == -1){
      i++;
    } else {
      var num = str.charCodeAt(i) + 1 ;
      letter = String.fromCharCode(num);
      break;
    }
  }
  return letter;
}
