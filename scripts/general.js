var step1 = "0";
var step2 = "";

const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

const numberButtons = [];
for (let i = 0; i < document.getElementsByClassName("number").length; i++) {
  numberButtons.push(document.getElementsByClassName("number")[i])
}
numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { AddInput(item.value) })
}
function AddInput(value) {
  if (step1 == "0") {
    step1 = "";
  }
  Step1(value);

}

const operatorButtons = [];
for (let i = 0; i < document.getElementsByClassName("operator").length; i++) {
  operatorButtons.push(document.getElementsByClassName("operator")[i])
}
operatorButtons.forEach(OperatorFunction);
function OperatorFunction(item, index, array) {
  item.addEventListener("click", function () { Operate(item.value) });
}
function Operate(value) {
  if (step2 == "" || step2 == "0") {
    Step2(value);
  }
}






document.getElementById("clear").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearOutput);

function ClearInput() {
  step1 = "0";
  inputDisplay.value = step1;
}
function ClearOutput() {
  Step2Clear();
}


function Step1(char) {
  step1 += char;
  inputDisplay.value = step1.replaceAll("*", "×").replaceAll("/", "÷")
}

function Step2(char) {

  if (step2.includes("/") == false && step2.includes("*") == false && step2.includes("-") == false && step2.includes("+") == false) {
    step2 = step1 + char;
    outputDisplay.value = step1.replaceAll("*", "×").replaceAll("/", "÷")
  }
}

function Step2Clear() {
  step2 = "";
  outputDisplay.value = step2.replaceAll("*", "×").replaceAll("/", "÷")
}


