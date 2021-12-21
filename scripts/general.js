var num1 = "";
var operator = "";
var num2 = "";
var previousResult = "";
var Result = function () {
  let result = parseFloat(eval((num1) + operator + (num2)).toFixed(12)).toString();    //limit digits to 8, remove extra zeros, convert to string
  return (result);
}


const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

const actLog = [];       //Array used for logging user actions
const prevAct = (order) => {return(actLog[actLog.length - order])};   //Last action of user (stands for previousAction)


document.getElementById("clearEntry").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearOutput);

function ClearInput() {
  num2 = ""
  inputDisplay.value = num2
  actLog.push("")
}
function ClearOutput() {
  num1 = ""
  operator = ""
  outputDisplay.value = "";
  actLog.push("")
}


setInterval(function () {
  console.log("num1 = " + num1);  
  console.log("num2 = " + num2);  
  console.log("operator = " +operator);
  console.log("previousAction = " + prevAct(1));  
  console.log("\n")
  
}, 3000)

