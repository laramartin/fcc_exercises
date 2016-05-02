function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multipleMax = 0;
  var common = false;
  var divisor = true;
  var i = 0;
  while (true){
    multipleMax += max;
    divisor = true;
    i = max - 1;
    while (i > 0){
      if (multipleMax % i !== 0) {
        divisor = false;
        break;
      }
      i--;
    }
    if (divisor){
      return multipleMax;
    }
  }
}
