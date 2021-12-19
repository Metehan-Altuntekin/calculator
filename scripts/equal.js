const equalButton = document.getElementById("equal-button");

equalButton.addEventListener("click", function(){

  if(previousAction != "equalButton"){
    outputDisplay.value = operation.num1 + operation.operator + operation.num2 + "=";
    inputDisplay.value = operation.result();
    operation.num1 = operation.result();
    previousAction = "equalButton";
  }
})