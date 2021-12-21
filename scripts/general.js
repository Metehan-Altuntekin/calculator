var num1 = "";
var operator = "";
var num2 = "";
var previousResult = "";
var Result = function () {
  let result = parseFloat(eval(num1 + operator + num2).toFixed(12)).toString();    //limit digits to 8, remove extra zeros, convert to string
  return (result);
}


const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

var previousAction = "";


document.getElementById("clearEntry").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearOutput);

function ClearInput() {
  num2 = ""
  inputDisplay.value = num2
  previousAction = ""
}
function ClearOutput() {
  num1 = ""
  operator = ""
  outputDisplay.value = "";
  previousAction = ""
}


setInterval(function () {
  console.log("num1 = " + num1);  
  console.log("num2 = " + num2);  
  console.log("operator = " +operator);
  console.log("previousAction = " + previousAction);  
  console.log("\n")
  
}, 3000)

