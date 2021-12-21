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
    num2 = value
  }
  if (prevAct(1) == "number") {
    if (num2 === "0") {
      num2 = value
    } else {
      num2 += value
    }
  }
  if (prevAct(1) == "operator") {
    num2 = value
  }
  if (prevAct(1) == "equal") {        //Need changes
    num2 = value
  }
  if (prevAct(1) == "backspace") {
    if (num2 === "0") {
      num2 = value
    } else {
      num2 += value
    }
  }
  if (prevAct(1) == "dot") {
    num2 += value
  }
  if (prevAct(1) == "negPosConvert"){
    for (let i = 2; i < actLog.length; i++){    //Run a loop for:
      if(prevAct(i) != "negPosConvert"){        //Finding out what was the last action before all negPosConvert actions
        console.log(prevAct(i))
        actLog.push(prevAct(i))                 //Log it as last action
        NumberButton(value)                     //Rerun this function as last action is what it was before negPosConvert
        return;                                 //Don't keep going
      }
    }
  }

  actLog.push("number")
}