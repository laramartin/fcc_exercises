function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var out = [];
  for (var i = 0; i < arr.length; i++){
    var sqrtAlfaMu = Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3)/GM);
    var orbitalPeriod = Math.round(2 * Math.PI * sqrtAlfaMu);
    out.push({
      name:   arr[i].name,
      orbitalPeriod: orbitalPeriod
    });
  }
  return out;
}
