function binaryAgent(str) {
  var output = [];
  var split = str.split(" ");
  for (var i = 0; i < split.length; i++){
    var int = parseInt(split[i], 2);
    var character = String.fromCharCode(int);
    output += character;
  }
  return output;
}
