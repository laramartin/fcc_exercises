function day(a){
  var termination = "";
  if (a == 1) {
    termination = "st";
  } else if (a == 2) {
    termination = "nd";
  } else if (a == 3) {
    termination = "rd";
  } else {
    termination = "th";
  }
  var str = String(a).concat(termination);
  str = str.replace(/^0/, "");
  return str;
}

function makeFriendlyDates(arr) {
  var out = [];
  var date1 = new Date(arr[0]);
  var date2 = new Date(arr[1]);
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();
  var day1 = date1.getDate();
  var day2 = date2.getDate();
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var str1 = "";
  str1 = str1.concat(monthNames[month1], " ", day(day1), ", ", year1);
  var str2 = "";
  str2 = str2.concat(monthNames[month2], " ", day(day2), ", ", year2);

  if (year1 == year2){
    if (month1 == month2){
      if (day1 == day2) {
        // same year, month and day
        out.push(str1);
      } else {
        // same year and month
        str1 = "";
        out.push(str1.concat(monthNames[month1], " ", day(day1)), day(day2));
      }
    } else {
      // same year, diff month & day
      out.push(str1);
      str2 = "";
      str2 = str2.concat(monthNames[month2], " ", day(day2));
      out.push(str2);
    }
  } else if ((year2 - year1) == 1 ) { // if different years
    if (month1 == month2) { // same month
      if (day1 !== day2){ // diff days
        out.push(str1);
        str2 = "";
        str2 = str2.concat(monthNames[month2], " ", day(day2));
        out.push(str2);
      } else { // difference 1 year, same month, same day -> means 1 whole year
        out.push(str1, str2);
      }
    } else if (12 + (month2 - month1) < 12){
      // difference 1 year, different months, but still less 12 months in total
      // means less than 1 year
      str1 = "";
      out.push(str1.concat(monthNames[month1], " ", day(day1)));
      str2 = "";
      str2 = str2.concat(monthNames[month2], " ", day(day2));
      out.push(str2);
    }
  } else { // more 1 year
    out.push(str1, str2);
  }
  return out;
}
