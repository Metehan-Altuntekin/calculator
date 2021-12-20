const numberButtons = [];

for (let i = 0; i < document.getElementsByClassName("number").length; i++) {
  numberButtons.push(document.getElementsByClassName("number")[i])
}

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

  if (previousAction == "") {
    num2 = value
  }
  if (previousAction == "numberButton") {
    num2 += value
  }
  if (previousAction == "operatorButton") {
    num2 = value
  }
  if (previousAction == "equalButton") {
    num2 = value
  }
  if (previousAction == "backspaceButton") {
    num2 += value
  }

  previousAction = "numberButton"
}