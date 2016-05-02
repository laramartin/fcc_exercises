function bouncer(arr) {
  // return the value if it's true
  var isFalsy = function(val){
    return val;
  };
  // return the array filtered
  return arr.filter(isFalsy);
}
