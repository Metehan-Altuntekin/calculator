var step1 = "0";
var step2 = "";

const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

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


