function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++){
    if (! Number.isInteger(arguments[i])) {
      return undefined;
    } else {
      if (arguments.length == 1){
        return function addTwo(y) {
          return add(2, arguments[0]);
        };
      } else {
        sum += arguments[i];
      }
    }
  }
  return sum;
}
