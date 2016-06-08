var result = [];

function generateResult(freeArr, res){
  if (freeArr.length === 0){
    result.push(res);
    return;
  }

  for (var i = 0; i < freeArr.length; i++) {
    var c = freeArr[i];
    if (c != res[res.length - 1]){
      var resCopy = res.slice(0);
      resCopy.push(c);
      var freeArrCopy = freeArr.slice(0);
      freeArrCopy.splice(i, 1);
      generateResult(freeArrCopy, resCopy);
    }

  }
}

function permAlone(str) {
  result = [];
  var split = str.split("");
  generateResult(split, []);
  return result.length;
}
