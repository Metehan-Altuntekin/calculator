const operatorButtons = Array.from(document.getElementsByClassName("operator"));

operatorButtons.forEach(OperatorFunction);
function OperatorFunction(item, index, array) {
  item.addEventListener("click", function () { OperatorButton(item.value) });
}

function OperatorButton(value) {

  actLog.push("operator")
  Scenario(value)
}