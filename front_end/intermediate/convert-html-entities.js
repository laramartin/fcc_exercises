function convert(str) {
  var entities = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  };
  var output = "";
  output = str.replace(/\&/g, entities["&"]);
  output = output.replace(/</g, entities["<"]);
  output = output.replace(/\>/g, entities[">"]);
  output = output.replace(/\"/g, entities['"']);
  output = output.replace(/\'/g, entities["'"]);

  return output;
}
