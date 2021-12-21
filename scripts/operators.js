const operatorButtons = [];

for (let i = 0; i < document.getElementsByClassName("operator").length; i++) {
  operatorButtons.push(document.getElementsByClassName("operator")[i])
}

operatorButtons.forEach(OperatorFunction);
function OperatorFunction(item, index, array) {
  item.addEventListener("click", function () { OperatorButton(item.value) });
}

function OperatorButton(value) {


  if (previousAction == "") {
    num1 = num2
    operator = value
  }
  if (previousAction == "numberButton") {
    if (num1 === "") {
      num1 = num2
      operator = value
    } else {
      previousResult = Result()
      num1 = previousResult
      operator = value
    }
  }
  if (previousAction == "operatorButton") {
    operator = value
  }
  if (previousAction == "equalButton") {
    // num2 = ""
    operator = value
  }
  if (previousAction == "backspaceButton") {
    num1 = num2
    operator = value
  }
  if (previousAction == "dotButton") {
    num2 = num2.slice(0, -1)
    if (num1 === "") {
      num1 = num2
      operator = value
    } else {
      previousResult = Result()
      num1 = previousResult
      operator = value
    }
  }

  previousAction = "operatorButton"




  /*if (previousAction != "operatorButton" && previousAction != "equalButton") {
    if (operator == "") {
      operator = value;
      num1 = num2;
      num2 = "";
      outputDisplay.value = num1 + operator

      previousAction = "operatorButton";
    } else if (previousAction == "numberButton") {
      let result = result()
      inputDisplay.value = result
      outputDisplay.value = result + value;
      operator = value
      
      previousAction = "operatorButton";
    }
  } else if (previousAction == "operatorButton") {
    operator = value
    outputDisplay.value = num1 + operator

    previousAction = "operatorButton";
  } else if (previousAction == "equalButton") {
    operator = value;
    outputDisplay.value = num1 + operator;

    previousAction = "operatorButton"
  }
*/



}