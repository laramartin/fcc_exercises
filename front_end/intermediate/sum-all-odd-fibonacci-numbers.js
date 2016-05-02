function sumFibs(num) {
  var i = 2;
  var fibonacci = [1, 1, 2];
  var output = 2;
  var newNum = 0;
  while (num > newNum) {
    newNum = fibonacci[i] + fibonacci[i - 1];
    fibonacci.push(newNum);
    i++;
    if (newNum % 2 !== 0 && num >= newNum){
      output += newNum;
    }
  }
  return output;
}
