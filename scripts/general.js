var num1 = "";
var operator = "";
var num2 = "";      //In this method, num2 is a part of output area too

var entry = "";     //This variable is for determining if it is gonna be num1 or num2

var previousResult = "";
var Result = function () {
  let result = parseFloat(eval(`${num1} ${operator} ${num2}`).toFixed(12)).toString();    //limit digits, remove extra zeros, convert to string
  return (result);
}

const actLog = ["start"];       //Array used for logging user actions
const prevAct = (order) => { return (actLog[actLog.length - order]) };   //Last action of user (stands for previousAction)

const chronology = [];     //Array of events for easier determination of chronology
const prevChron = (order) => { return (chronology[chronology.length - order]) }

function Chron() {
  chronology.splice(0, chronology.length)       //Clear array before using it

  for (let i = 2; i < actLog.length + 1; i++) {     //Not current action, only previous ones
    if (prevAct(i) == "start" || prevAct(i) == "number" || prevAct(i) == "operator" || prevAct(i) == "execute") {
      if (chronology[chronology.length - 1] != prevAct(i)) {    //Don't double log the same act
        chronology.push(prevAct(i))
      }
    }
  }
}


const bottomDisplay = document.getElementById("input");
const upperDisplay = document.getElementById("output");

function Display(area, val) {
  if(area == "up"){
    bottomDisplay.value = val
  }
  if(area == "down"){
    upperDisplay.value = val
  }
}




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

const pre = {
  num1: num1,
  operator: operator,
  num2: num2,
  entry: entry,
  previousResult: previousResult
}
setInterval(function () {
  //Check for variable changes and log them only when they change
  for (const key in pre) {
    if (pre[key] != window[key]) {
      console.log(num1 + operator + num2)
      console.log(`entry: ${entry}`)
      console.log(`preRes: ${previousResult}`)
      console.log(`prevAct: ${prevAct(1)}`)
      
      for(const key in pre){
        pre[key] = window[key]
      }
    }

  }

}, 100)

