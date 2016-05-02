function chunk(arr, size) {
  var subarray = [];
  for (i = 0; i < arr.length; i += size){
    // make slices of length = size
    var sliceFromArr = arr.slice(i, (i + size));
    // store slices on subarray
    subarray.push(sliceFromArr);
  }
  // return array with subarrays
  return subarray;
}
