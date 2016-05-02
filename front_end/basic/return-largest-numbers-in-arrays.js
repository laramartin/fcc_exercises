function largestOfFour(arr) {
  // You can do this!
  // Return an array consisting of the largest number from each provided sub-array.

  // store the largest number of every subarray as an array
  var largestNumArray = [];

  // for item in array
  for (i = 0; i < arr.length; i++){

    // store largest number of every array
    largestNum = 0;

    // get first subarray
    var actualSubarray = arr[i];

    // iterate through subarray
    for (j = 0; j < actualSubarray.length; j++){

      // keep actual number if is larger than the number stored in largestNum
      if (actualSubarray[j] > largestNum){
        largestNum = actualSubarray[j];
      }
    }

    // store the largest number of the actual array in an array
    largestNumArray.push(largestNum);
  
  }

  // return the array with the largest numbers
  return largestNumArray;
}
