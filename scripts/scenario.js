function Scenario(value) {

  if (prevAct(1) == "number") {
    entry += value
  }
  if (prevAct(1) == "operator") {
    if (entry === "") {
      actLog.pop()      //Did nothing, so delete it from log
      return
    } else {
      chronology.splice(1, chronology.length)       //Clear array before using it

      for (let i = 2; i < actLog.length + 1; i++) {     //Not current action, only previous ones
        if (prevAct(i) == "start" || prevAct(i) == "number" || prevAct(i) == "operator" || prevAct(i) == "equal") {
          if(chronology[chronology.length -1] != prevAct(i)){    //Don't double log the same act
            chronology.push(prevAct(i))
          }
        }
      }
      
      if (chronology[0] == "number") {
        if(chronology[1] == "start"){
          num1 = entry
          entry = ""
          operator = value
        }
        if (chronology[1] == "operator") {  //...operator > number > operator
          if(entry !== ""){
            num2 = entry
          } else{
            num2 = ""
          }
          previousResult = Result()
          num1 = previousResult
          entry = ""
          operator = value
        }
        if (chronology[1] == "equal") {
          num1 = entry
          num2 = ""
          entry = ""
          operator = value
        }

      }

    }
  }
  if (prevAct(1) == "percent") {
    entry = (parseFloat(entry) / 100).toString()
  }
  if (prevAct(1) == "backspace") {
    entry = entry.slice(0, -1)
  }
  if (prevAct(1) == "invert") {
    entry = (1 / parseFloat(entry)).toString()
  }
  if (prevAct(1) == "square") {
    entry = Math.pow(parseFloat(entry), 2)
  }
  if (prevAct(1) == "squareRoot") {
    entry = Math.sqrt(parseFloat(entry))
  }
  if (prevAct(1) == "negate") {
    entry = (-(parseFloat(entry))).toString()
  }
  if (prevAct(1) == "dot") {
    if (entry.includes(".") == true) {
      return
    } else {
      entry += "."
    }
  }
  if (prevAct(1) == "equal") {

  }



  if (isNaN(entry) == true) {     //If entry becomes NaN, clear it
    entry = ""
    alert("Nan happened")
  }
}