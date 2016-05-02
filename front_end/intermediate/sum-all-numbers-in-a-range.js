function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var numbers = [];
  for (var i = min; i < max + 1; i++){
    numbers.push(i);
  }
  var reduce = numbers.reduce(function(a, b) {
    return a + b;
  });
  return reduce;
}
