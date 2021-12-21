document.getElementById("dot-button").addEventListener("click", function () {

  if (prevAct(1) == "") {
    num2 = "0."
  }
  if (prevAct(1) == "number") {
    num2 += "."
  }
  if (prevAct(1) == "operator") {
    num2 = "0."
  }
  if (prevAct(1) == "equal") {
    num2 = "0."
  }
  if (prevAct(1) == "backspace") {
    if(num2.includes(".") == true){
      //Do nothing
    } else{
      num2 += "."
    }
  }
  if (prevAct(1) == "dot"){
    //Do nothing
  }

  actLog.push("dot")
})