function Scenario(value) {

  if (prevAct(1) == "number") {
    Chron()
    if (chronology[0] == "start") {
      entry += value
    }
    else if (chronology[0] == "operator") {
      entry += value
    } 
    else if(chronology[0] == "execute"){
      entry += value
    }
    else{
      entry += value
    }


  }
  if (prevAct(1) == "operator") {
    /*if (entry === "") {
      actLog.pop()      //Did nothing, so delete it from log
      return
    } else {*/
    Chron()

    if (chronology[0] == "number") {
      if (chronology[1] == "start") {
        if(entry !== ""){
          num1 = entry
          entry = ""
        }
        operator = value
      }
      if (chronology[1] == "operator") {  //...operator > number > operator
        if (entry !== "") {
          num2 = entry
        } else {
          actLog.pop()      //Did nothing, so delete it from log
          return
        }
        previousResult = Result()
        num1 = previousResult
        entry = ""
        num2 = ""
        operator = value
      }
      if (chronology[1] == "execute") {
        num1 = entry
        num2 = ""
        entry = ""
        operator = value
      }

    }
    if(chronology[0] == "execute"){
      num1 = previousResult
      num2 = ""
      operator = value

    }

    //}
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
      actLog.pop()      //Did nothing, so delete it from log
      return
    } else {
      entry += "."
    }
  }
  if (prevAct(1) == "execute") {
    Chron()
    
    if (prevAct(2) == "number"){
      if (prevAct(3) == ""){

      }
    } 
    if (prevAct(2) == "operator"){
      
    } 
    if (prevAct(2) == "execute") {
      num1 = previousResult
      previousResult = Result()

    } 
    
    if(entry !== ""){
      num2 = entry
      entry = ""
    }
    previousResult = Result()
    
  }



  if (isNaN(entry) == true) {     //If entry becomes NaN, clear it
    entry = ""
    console.log("NaN happened")
  }
}