const operatorButtons = [];

for (let i = 0; i < document.getElementsByClassName("operator").length; i++) {
  operatorButtons.push(document.getElementsByClassName("operator")[i])
}

operatorButtons.forEach(OperatorFunction);
function OperatorFunction(item, index, array) {
  item.addEventListener("click", function () { OperatorButton(item.value) });
}

function OperatorButton(value) {
  if(lastEvent != "operatorButton"){
    if(Boolean(output.match(/\W/)) == false){
      output = input + value;
      outputDisplay.value = output.replace("/","÷").replace("*","×");
    } else if(lastEvent == "numberButton"){
      input = eval(output + input);
      output = input + value;
      outputDisplay.value = output
    }
  }

  lastEvent = "operatorButton";
}