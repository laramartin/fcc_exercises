function pairwise(arr, arg) {
  var sumIndex = [];
  if (arr.length === 0){
    return 0;
  }
  for (var i = 0; i < arr.length - 1; i++){
    for (var j = i+1; j < arr.length; j++){
      if ((arr[i] + arr[j] == arg) && sumIndex.indexOf(i) == -1 && sumIndex.indexOf(j) == -1){
          sumIndex.push(i, j);
      }
    }
  }
  var out = sumIndex.reduce(function(a,b) {
    return a + b;});
  return out;
}
