function where(arr, num) {
  // compare value a with b to order the array ascending
  var comparison = function(a,b){
    return (a-b);
  };
  // sort requires a function to compare the values, which in this
  // case is in variable comparison
  var sortedArr = arr.sort(comparison);
  // for item in array
  for (var i = 0; i < sortedArr.length; i++){
    // get the item to compare to num
    var a = sortedArr[i];
    // if the number is less than or equal to A, return i (position of a)
    if (a >= num) {
      return i;
    }
  }
  // if number is bigger than a and not found in array, return the length
  return sortedArr.length;
}
