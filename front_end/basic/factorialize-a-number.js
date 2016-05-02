function factorialize(num) {
  var product = 1;
  for (i = 1; i <= num; i++){
    product *= i;
  }
  return product;
}
