var operation = {
  num1 : "",
  operator : "",
  num2 : "",
  result : function () {
    return (eval(this.num1 + this.operator + this.num2));
  }
}

const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");

var previousAction = "";


document.getElementById("clearEntry").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearInput);
document.getElementById("clearAll").addEventListener("click", ClearOutput);

function ClearInput() {
  operation.num2 = ""
  inputDisplay.value = "0"
}
function ClearOutput() {
  operation.num1 = ""
  operation.operator = ""
  outputDisplay.value = "";
}



