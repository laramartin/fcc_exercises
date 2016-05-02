function rot13(str) { // LBH QVQ VG!
  var charA = "A".charCodeAt();
  var charN = "N".charCodeAt();
  var charZ = "Z".charCodeAt();
  var output = "";
  for (var i = 0; i < str.length; i++){
    var charCode = str[i].charCodeAt();
    var letter = "";
    if (charCode < charN && charCode >= charA){
      letter = String.fromCharCode(charCode + 13);
    } else if (charCode >= charN && charCode <= charZ){
      letter = String.fromCharCode(charCode - 13);
    } else {
      letter = str[i];
    }
    output += letter;
  }
  return output;
}
