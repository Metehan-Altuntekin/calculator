const equalButton = document.getElementById("equal-button");

equalButton.addEventListener("click", function () {

  if (previousAction == "") {
    num1 = num2;
  }
  if (previousAction == "numberButton") {
    previousResult = Result()
    num1 = previousResult
  }
  if (previousAction == "operatorButton") {
    if (num2 === "") {
      num2 = num1
    } else {
      previousResult = Result()
      num1 = previousResult
    }
  }
  if (previousAction == "equalButton") {
    previousResult = Result()
    num1 = previousResult
  }
  if (previousAction == "backspaceButton") {
    if (num2 === "") {
      num2 = num1
    }
    previousResult = Result()
    num1 = previousResult

  }
  //num2 = ""
  previousAction = "equalButton";

})