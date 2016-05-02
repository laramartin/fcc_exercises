function undoArr(arr, output){
  for (var i = 0; i < arr.length; i++){
    if (! Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else {
      undoArr(arr[i], output);
    }
  }
  return output;
}

function steamrollArray(arr) {
  var output = [];
  undoArr(arr, output);
  return output;
}
