function checkDiff(arrA, arrB){
  var output = [];
  for (var i = 0; i < arrA.length; i++){
    if (arrB.indexOf(arrA[i]) == -1 && output.indexOf(arrA[i]) == -1){
      output.push(arrA[i]);
    }
  }
  for (var j = 0; j < arrB.length; j++){
    if (arrA.indexOf(arrB[j]) == -1 && output.indexOf(arrB[i]) == -1){
      output.push(arrB[j]);
    }
  }
  return output;
}

function sym(args) {
  var allArgs = [];
  for (var i = 0; i < arguments.length; i++){
    allArgs.push(arguments[i]);
  }
  return recursive(allArgs);
}

function recursive(allArgs){
  var output = [];
  console.log("allArgs: " + allArgs);
  console.log("type: " + typeof allArgs);
  if (allArgs.length == 1){
    return allArgs[0];
  } else {
    var lastElem = allArgs.pop();
    return checkDiff(recursive(allArgs), lastElem);
  }

}
