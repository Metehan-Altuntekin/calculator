const numberButtons = Array.from(document.getElementsByClassName("number"));

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

  actLog.push("number")
  Scenario(value)
}