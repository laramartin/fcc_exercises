function changeCalc(cashCurrency, cashAvailable, difference){
  var diff = difference;
  var cashFromCurrency = 0;
  var change = [];
  if (diff === 0){
    return change;
  }
  for (var j = cashCurrency.length -1; j >=0; j--){
    // check if currency can be used for change, if it's < 0 then it's too big
    var division = diff / cashCurrency[j][1];
    cashFromCurrency = 0;
    /* continue if the coin/bill can be used to give change (is not bigger than the difference to give) & if there's enough cash of that coin/bill available
    if not, go to the next coin/bill */
    if (division >= 1 && cashAvailable[j][1] > 0) {
      var times =  (cashAvailable[j][1] / cashCurrency[j][1]);
      for (var i = 0; i < times; i++){
        var cashToGet = cashCurrency[j][1];
        // if cash isn't bigger than pending difference
        if ((diff - cashToGet) >= 0) {
          diff -= (cashToGet.toFixed(2));
          diff = diff.toFixed(2);
          cashFromCurrency += cashToGet;
        } else {
          break;
        }
      }
      change.push([cashCurrency[j][0], cashFromCurrency]);
    }
  }
  if (diff > 0) {
    // if there's still difference, there's no enough change
    return "Insufficient Funds";
  } else {
    return change;
  }
}

function checkCashRegister(price, cash, cid) {
  var change = [];
  var diff = cash - price;
  var cashValues = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1.00],
    ["FIVE", 5.00],
    ["TEN", 10.00],
    ["TWENTY", 20.00],
    ["ONE HUNDRED", 100.00]
  ];

  var totalCid = 0;
  for (var i = 0; i < cid.length; i++) {
    totalCid += (cid[i][1]);
  }
  totalCid = totalCid.toFixed(2);

  if (totalCid < diff){
    return "Insufficient Funds";
  } else if (totalCid == diff){
    return "Closed";
  } else {
    return changeCalc(cashValues, cid, diff);
  }
}
