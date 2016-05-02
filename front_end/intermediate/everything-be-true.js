function every(collection, pre) {
  for (var i = 0; i < collection.length; i++){
    var prop = collection[i].hasOwnProperty(pre);
    if (!prop || !collection[i][pre]){
      return false;
    }
  }
  return true;
}
