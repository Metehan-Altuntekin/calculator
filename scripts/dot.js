document.getElementById("dot-button").addEventListener("click", function () {

  if (previousAction == "") {
    num2 = "0."
  }
  if (previousAction == "numberButton") {
    num2 += "."
  }
  if (previousAction == "operatorButton") {
    num2 = "0."
  }
  if (previousAction == "equalButton") {
    num2 = "0."
  }
  if (previousAction == "backspaceButton") {
    if(num2.includes(".") == true){
      //Do nothing
    } else{
      num2 += "."
    }
  }
  if (previousAction == "dotButton"){
    //Do nothing
  }

  previousAction = "dotButton"
})