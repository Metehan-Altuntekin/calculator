const operatorButtons = [];

for (let i = 0; i < document.getElementsByClassName("operator").length; i++) {
  operatorButtons.push(document.getElementsByClassName("operator")[i])
}

operatorButtons.forEach(OperatorFunction);
function OperatorFunction(item, index, array) {
  item.addEventListener("click", function () { OperatorButton(item.value) });
}

function OperatorButton(value) {
  if (previousAction != "operatorButton" && previousAction != "equalButton") {
    if (operation.operator == "") {
      operation.operator = value;
      operation.num1 = operation.num2;
      outputDisplay.value = operation.num1 + operation.operator

      previousAction = "operatorButton";
    } else if (previousAction == "numberButton") {
      inputDisplay.value = operation.result()
      outputDisplay.value = operation.result() + value;
      operation.num1 = operation.result()
      operation.operator = value
      
      previousAction = "operatorButton";
    }
  } else if (previousAction == "operatorButton") {
    operation.operator = value
    outputDisplay.value = operation.num1 + operation.operator
    previousAction = "operatorButton";
  } else if (previousAction == "equalButton") {
    operation.operator = value;
    outputDisplay.value = operation.num1 + operation.operator;
  }




}