const numberButtons = [];

for (let i = 0; i < document.getElementsByClassName("number").length; i++) {
  numberButtons.push(document.getElementsByClassName("number")[i])
}

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

  if (prevAct(1) == undefined) {
    num2 = value
  }
  if (prevAct(1) == "number") {
    num2 += value
  }
  if (prevAct(1) == "operator") {
    num2 = value
  }
  if (prevAct(1) == "equal") {
    num2 = value
  }
  if (prevAct(1) == "backspace") {
    num2 += value
  }
  if (prevAct(1) == "dot"){
    num2 += value
  }

  actLog.push("number")
}