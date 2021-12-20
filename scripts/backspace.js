const backspaceButton = document.getElementById("backspace-button");

document.getElementById("backspace-button").addEventListener("click", function () {
  
  if(previousAction == ""){
    //do nothing    
  }
  if(previousAction == "numberButton"){
    num2 = num2.slice(0,-1)
  }
  if(previousAction == "operatorButton"){
    //do nothing
  }
  if(previousAction == "equalButton"){
    num1 = ""
  }
  if(previousAction == "backspaceButton"){
    if(num2 === ""){
      //do nothing
    } else{
      num2 = num2.slice(0,-1)
    }
  }
  

  previousResult = "backspaceButton"
})