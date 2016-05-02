function pair(str) {
  var split = str.split("");
  var arr = [];
  var dnaDict = {
      "A" : "T",
      "T" : "A",
      "C" : "G",
      "G" : "C"
  };
  for (var i = 0; i < split.length; i++){
    var char = split[i];
    var actualValue = dnaDict[split[i]];
    arr.push([char, actualValue]);
  }
  return arr;
}
