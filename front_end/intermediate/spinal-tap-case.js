function spinalCase(str) {
  var output = str.replace(/\s+/g, "-");
  output = output.split(/(?=[A-Z])/);
  output = output.join("-");
  output= output.replace(/\_+/g, "");
  output = output.replace(/(--)+/g, "-");
  output = output.toLowerCase();
  return output;
}
