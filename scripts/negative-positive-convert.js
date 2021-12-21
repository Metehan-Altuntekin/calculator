document.getElementById("neg-pos-convert-button").addEventListener("click", function () {

  if (prevAct(1) == "") {
    //Do nothing
  }
  if (prevAct(1) == "number") {
    if (num2.startsWith("-" == true)) {
      num2 = num2.substring(1)
    } else {
      num2 = "-" + num2
    }
  }
  if (prevAct(1) == "operator") {
    if (num2 === "") {
      //do nothing
    } else {
      if (num2.startsWith("-" == true)) {
        num2 = num2.substring(1)
      } else {
        num2 = "-" + num2
      }
    }
  }
  if (prevAct(1) == "equal") {
    if (num1 === "") {
      //do nothing
    } else {
      if (num1.startsWith("-" == true)) {
        num1 = num1.substring(1)
      } else {
        num1 = "-" + num1
      }
    }
  }
  if (prevAct(1) == "backspace") {

  }
  if (prevAct(1) == "dot") {

  }
  if (prevAct(1) == "negPosConvert") {

  }


  actLog.push("negPosConvert")
})