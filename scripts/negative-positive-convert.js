document.getElementById("neg-pos-convert-button").addEventListener("click", DotButtonFunction)

function DotButtonFunction() {

  if (prevAct(1) == "" || prevAct(1) == undefined) {
    if(num2 === ""){
      return
    } else{
      num2 = -(parseFloat(num2))
    }
  }
  if (prevAct(1) == "number") {
    num2 = -(parseFloat(num2))
  }
  if (prevAct(1) == "operator") {
    if (num2 === "") {
      return
    } else {
      num2 = -(parseFloat(num2))
    }
  }
  if (prevAct(1) == "equal") {
    if (num1 === "") {
      return
    } else {
      num1 = -(parseFloat(num1))
    }
  }
  if (prevAct(1) == "backspace") {
    if (num2 === "") {
      return
    } else {
      num2 = -(parseFloat(num2))
    }
  }
  if (prevAct(1) == "dot") {
    num2 = -(parseFloat(num2))
  }
  if (prevAct(1) == "negPosConvert") {
    for (let i = 2; i < actLog.length; i++){    //Run a loop for:
      if(prevAct(i) != "negPosConvert"){        //Finding out what was the last action before all negPosConvert actions
        console.log(prevAct(i))
        actLog.push(prevAct(i))                 //Log it as last action
        DotButtonFunction()                     //Rerun this function as last action is what it was before negPosConvert
        return;                                 //Don't keep going
      }
    }
  }


  actLog.push("negPosConvert")
}