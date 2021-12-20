
var num1 = "";
var operator = "";
var num2 = "";
var previousResult = "";
var Result = function () {
  let result = eval(num1 + operator + num2);
 // num1 = result;       //When result() is called, change num1 as result
  return (result);
}


const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

var previousAction = "";


document.getElementById("clearEntry").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearOutput);

function ClearInput() {
  num2 = "0"
  inputDisplay.value = num2
}
function ClearOutput() {
  num1 = ""
  operator = ""
  outputDisplay.value = "";
}


setInterval(function () {
  console.log("num1 = " + num1);  
  console.log("num2 = " + num2);  
  console.log("operator = " +operator);
  console.log("previousAction = " + previousAction);  
  console.log("\n")
  
}, 3000)

