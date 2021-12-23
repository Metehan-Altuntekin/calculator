const numberButtons = Array.from(document.getElementsByClassName("number"));

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

//  if (prevAct(1) != "number") {   //Only one action log for continous number clicks
    actLog.push("number")
//  }
  Scenario(value)
}