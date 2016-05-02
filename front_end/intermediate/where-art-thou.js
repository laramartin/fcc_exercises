function where(collection, source) {
  var arr = [];
  var sourceKey = Object.keys(source);
  for (var i = 0; i < collection.length; i++){
    var match = true;
    for (var j = 0; j < sourceKey.length; j++){
      if(collection[i].hasOwnProperty(sourceKey[j])) {
        var actualValue = source[sourceKey[j]];
        if (collection[i][sourceKey[j]] != actualValue) {
          match = false;
        }
      } else {
        match = false;
      }
    }
    if (match){
      arr.push(collection[i]);
    }
  }
  return arr;
}
