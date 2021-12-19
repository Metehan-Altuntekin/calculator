const numberButtons = [];

for (let i = 0; i < document.getElementsByClassName("number").length; i++) {
  numberButtons.push(document.getElementsByClassName("number")[i])
}

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

  if(previousAction != "equalButton" && previousAction != "operatorButton"){
    operation.num2 += value
    inputDisplay.value = operation.num2
    previousAction = "numberButton"
  } else if(previousAction == "equalButton" || previousAction == "operatorButton" ){
    operation.num2 = value
    inputDisplay.value = operation.num2
    previousAction = "numberButton"
  }
  
}