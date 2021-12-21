const equalButton = document.getElementById("equal-button");

equalButton.addEventListener("click", function () {

  if (prevAct(1) == "" || prevAct(1) == undefined) {
    num1 = num2;
  }
  if (prevAct(1) == "number") {
    previousResult = Result()
    num1 = previousResult
  }
  if (prevAct(1) == "operator") {
    if (num2 === "") {
      num2 = num1
    } else {
      previousResult = Result()
      num1 = previousResult
    }
  }
  if (prevAct(1) == "equal") {
    if (operator === "") {
      return
    } else {
      previousResult = Result()
      num1 = previousResult
    }
  }
  if (prevAct(1) == "backspace") {
    if (num2 === "") {
      num2 = num1
    }
    previousResult = Result()
    num1 = previousResult

  }
  if (prevAct(1) == "dot") {
    num2 = num2.slice(0, -1)
    previousResult = Result()
    num1 = previousResult

  }
  if(prevAct(1) == "negPosConvert"){
    previousResult = Result()
    num1 = previousResult
  }


  actLog.push("equal");

})