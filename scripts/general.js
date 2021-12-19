var input = "0";
var output = "";

const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

var lastEvent = "";


document.getElementById("clearEntry").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearOutput);

function ClearInput() {
  input = "0";
  inputDisplay.value = input;
}
function ClearOutput() {
  output = "";
  outputDisplay.value = output;
}



