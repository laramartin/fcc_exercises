function sumPrimes(num) {
  var output = 0;
  for (var i = 2; i <= num; i++){
    var prime = true;
    for (var j = 2; j < i; j++){
      if (i % j === 0){
        prime = false;
        break;
      }
    }
    if (prime){
      output += i;
    }
  }
  return output;
}
