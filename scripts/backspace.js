const backspaceButton = document.getElementById("backspace-button");

document.getElementById("backspace-button").addEventListener("click", function () {
  
  if(prevAct(1) == "" || prevAct(1) == undefined){
    return    
  }
  if(prevAct(1) == "number"){
    num2 = num2.slice(0,-1)
  }
  if(prevAct(1) == "operator"){
    return
  }
  if(prevAct(1) == "equal"){
    num1 = ""
  }
  if(prevAct(1) == "backspace"){
    if(num2 === ""){
      return
    } else{
      num2 = num2.slice(0,-1)
    }
  }
  

  actLog.push("backspace")
})