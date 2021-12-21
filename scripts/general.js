var num1 = "";
var operator = "";
var num2 = "";      //In this method, num2 is a part of output area too
var entry = "";     //This variable is for determining if it is gonna be num1 or num2

var previousResult = "";
var Result = function () {
  let result = parseFloat(eval((num1) + operator + (num2)).toFixed(12)).toString();    //limit digits, remove extra zeros, convert to string
  return (result);
}


const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

const actLog = [""];       //Array used for logging user actions
const prevAct = (order) => {return(actLog[actLog.length - order])};   //Last action of user (stands for previousAction)


document.getElementById("clearEntry").addEventListener("click", ClearEntry);
document.getElementById("clearAll").addEventListener("click", ClearAll);

function ClearEntry() {
  entry = ""
  inputDisplay.value = entry
  actLog.push("clearEntry")
}
function ClearAll() {
  entry = ""
  inputDisplay.value = entry
  num1 = ""
  operator = ""
  num2 = ""
  outputDisplay.value = "";
  actLog.push("clearAll")
}


setInterval(function () {
  console.log(num1 + operator + num2);  
  console.log(`prev res = ${previousResult}`)
  console.log(`entry = ${entry}`);
  console.log(`prevAct = ${prevAct(1)}`);  
  console.log("\n")
  
}, 3000)

