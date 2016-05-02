function compare(a, b){
    return a-b;
}

function diff(arr1, arr2) {
  var newArr = [];
  var sorted1 = arr1.sort(compare);
  var sorted2 = arr2.sort(compare);

  for (var i = 0; i < sorted1.length;i++){
    if (sorted2.indexOf(sorted1[i]) == -1){
      newArr.push(sorted1[i]);
    }
  }

  for (var j = 0; j < sorted2.length; j++){
    if (sorted1.indexOf(sorted2[j]) == -1){
      newArr.push(sorted2[j]);
    }
  }

  return newArr;
}
