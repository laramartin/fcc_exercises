function myReplace(str, before, after) {
  var strSplice = str.split(" ");
  var index = strSplice.indexOf(before);
  var character = before[0];
  if (character === character.toUpperCase()){
    var afterSplit = after.split("");
    var charReplace = after[0].toUpperCase();
    afterSplit.splice(0, 1, charReplace);
    strSplice[index] = afterSplit.join("");
  } else {
    strSplice[index] = after;
  }
  return strSplice.join(" ");
}
