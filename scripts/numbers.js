const numberButtons = [];

for (let i = 0; i < document.getElementsByClassName("number").length; i++) {
  numberButtons.push(document.getElementsByClassName("number")[i])
}

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

  if (prevAct(1) == undefined || prevAct(1) == "") {

  }
  if (prevAct(1) == "number") {

  }
  if (prevAct(1) == "operator") {

  }
  if (prevAct(1) == "equal") {

  }
  if (prevAct(1) == "backspace") {

  }
  if (prevAct(1) == "dot") {

  }
  if (prevAct(1) == "negPosConvert") {

  }

  actLog.push("number")
}