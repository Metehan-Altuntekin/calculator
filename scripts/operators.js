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