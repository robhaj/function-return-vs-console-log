function returnF(str) {
  return "This function returns: " + str;
}

function loggF(str) {
  console.log("This function logs: " + str);
}
var test = returnF("apples");

if (test !== undefined)
  console.log("test variable is defined!")

loggF("oranges");
