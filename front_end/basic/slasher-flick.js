function slasher(arr, howMany) {
  // copy the array because splice modifies the array content, and that's dangerous!
  var arrCopy = arr;
  // remove so many elements from index 0 as "howMany" indicates
  var slice = arrCopy.splice(0, howMany);
  // return the modified array
  return arrCopy;
}
