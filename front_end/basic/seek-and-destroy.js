function destroyer(arr) {
  // arguments given in function
  var argumentsVar = arguments;
  // store actual argument being processed
  var actualArgm = 0;
  // the array to be filtered
  var givenArray = argumentsVar[0];
  // function to retreive numbers that aren't equal to arguments given
  var numsToBeRemoved = function(val){
    return val != actualArgm;
  };
  // for every argument given (except the array in index 0)
  for (i = 1; i < argumentsVar.length; i++){
    // actual number being removed from array
    actualArgm = argumentsVar[i];
    // replace the given array with the array filtered in every loop
    givenArray = givenArray.filter(numsToBeRemoved);
  }
  // return the given array, which has been filtered
  return givenArray;
}
