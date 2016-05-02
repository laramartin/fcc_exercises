function unite(arr1, arr2, arr3) {
  var output = [];
  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++){
      if (!(arguments[i][j] in output)){
        output.push(arguments[i][j]);
      }
    }
  }
  return output;
}
