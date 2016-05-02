function orderArr(a,b){
  var strA = a[1].toString().toLowerCase();
  var strB = b[1].toString().toLowerCase();
  console.log("strA: " + strA);
  console.log("strB: " + strB);
  if (strA < strB) {
    return -1;
  }
  if (strA > strB) {
    return 1;
  }
  return 0;
}

function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var inventory = arr1;
  var newItems = [];
  var hasItem = false;
  // iterate through new items array
  for (var i = 0; i < arr2.length; i++){
    hasItem = false;
    // iterate through inventory
    for (var j = 0; j < inventory.length; j++){
      if (arr2[i][1] == inventory[j][1]){
        var num = inventory[j][0] + arr2[i][0];
        inventory[j][0] += arr2[i][0];
        hasItem = true;
      }
    }
    if (!hasItem) {
      newItems.push(arr2[i]);
    }
  }
  for (var y = 0; y < newItems.length; y++){
    inventory.push(newItems[y]);
  }
  inventory = inventory.sort(orderArr);
  return inventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
