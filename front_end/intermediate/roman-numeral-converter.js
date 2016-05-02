var roman = [
  ["I", "V", "X"],
  ["X", "L", "C"],
  ["C", "D", "M"],
  ["M", "-V", "-X"]
];

function convert(num) {

 var arr = String(num).split("");

 function oneDigit(digit, a, b, c){
   var str = "";
   if (digit <= 3){
     str = a.repeat(digit);
   } else if (digit == 4) {
     str = a.concat(b);
   } else if (digit < 9){
     str = b.concat(a.repeat(digit - 5));
   } else if (digit == 9){
     str = a.concat(c);
   }

   return str;
 }

  var output = "";
  var j = 0;

 for (var i = arr.length - 1; i >= 0; i--){
   var a = roman[j%4][0];
   var b = roman[j%4][1];
   var c = roman[j%4][2];
   output = oneDigit(arr[i], a, b, c) + output;
   j++;
 }

 return output;
}

convert(4000);
