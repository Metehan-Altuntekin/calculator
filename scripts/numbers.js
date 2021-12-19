const numberButtons = [];

for (let i = 0; i < document.getElementsByClassName("number").length; i++) {
  numberButtons.push(document.getElementsByClassName("number")[i])
}

numberButtons.forEach(NumberFunction);
function NumberFunction(item, index, array) {
  item.addEventListener("click", function () { NumberButton(item.value) })
}

function NumberButton(value) {

  if(lastEvent != "equalButton" && lastEvent != "operatorButton" && input != "0"){
    input += value;
    inputDisplay.value = input;
  } else if(lastEvent == "equalButton" || lastEvent == "operatorButton" || input == "0"){
    input = value;
    inputDisplay.value = input;
  }
  
  lastEvent = "numberButton"
}