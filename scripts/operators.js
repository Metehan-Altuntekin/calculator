const operatorButtons = [];

for (let i = 0; i < document.getElementsByClassName("operator").length; i++) {
  operatorButtons.push(document.getElementsByClassName("operator")[i])
}

operatorButtons.forEach(OperatorFunction);
function OperatorFunction(item, index, array) {
  item.addEventListener("click", function () { OperatorButton(item.value) });
}

function OperatorButton(value) {


  if (prevAct(1) == "" || prevAct(1) == undefined) {
    num1 = num2
    operator = value
  }
  if (prevAct(1) == "number") {
    if (num1 === "") {
      num1 = num2
      operator = value
    } else {
      previousResult = Result()
      num1 = previousResult
      operator = value
    }
  }
  if (prevAct(1) == "operator") {
    operator = value
  }
  if (prevAct(1) == "equal") {
    operator = value
  }
  if (prevAct(1) == "backspace") {
    num1 = num2
    operator = value
  }
  if (prevAct(1) == "dot") {
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

  actLog.push("operator")



//This block down there is the previous mess version that i was struggling
  /*if (prevAct(1) != "operatorButton" && prevAct(1) != "equalButton") {
    if (operator == "") {
      operator = value;
      num1 = num2;
      num2 = "";
      outputDisplay.value = num1 + operator

      prevAct(1) = "operatorButton";
    } else if (prevAct(1) == "numberButton") {
      let result = result()
      inputDisplay.value = result
      outputDisplay.value = result + value;
      operator = value
      
      prevAct(1) = "operatorButton";
    }
  } else if (prevAct(1) == "operatorButton") {
    operator = value
    outputDisplay.value = num1 + operator

    prevAct(1) = "operatorButton";
  } else if (prevAct(1) == "equalButton") {
    operator = value;
    outputDisplay.value = num1 + operator;

    prevAct(1) = "operatorButton"
  }
*/



}