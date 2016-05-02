function drop(arr, func) {
  var i = 0;
  while (func(arr[i]) !== true){
    i++;
  }
  return arr.slice(i);
}
