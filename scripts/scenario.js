function Scenario(value) {

  if (prevAct(1) == "number") {
    if (prevAct(2) == "execute"){
      num1 = previousResult
    }
    entry += value
  }
  if (prevAct(1) == "operator") {
    /*if (entry === "") {
      actLog.pop()      //Did nothing, so delete it from log
      return
    } else {*/
    Chron()

    if (chronology[0] == "number") {
      if (chronology[1] == "start") {
        if (entry !== "") {
          num1 = entry
          entry = ""
        }
        operator = value
      }
      if (chronology[1] == "operator") {  //...operator > number > operator
        if (entry !== "") {
          num2 = entry
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
    if(chronology[0] == "operator"){
      operator = value
    }
    if (chronology[0] == "execute") {
      num1 = previousResult
      num2 = ""
      operator = value

    }

    //}
  }
  if (prevAct(1) == "percent") {
    if(num1 !== ""){
      if(entry !== ""){
        num2 = (parseFloat(num1) / 100) * parseFloat(entry)
        entry = ""
      } else{
        num2 = (parseFloat(num1) / 100) * parseFloat(num2)
      }
    }
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
      if(entry === ""){
        entry = "0."
      }else{
        entry += "."
      }
    }
  }
  if (prevAct(1) == "execute") {
    Chron()

    if (chronology[0] == "start"){
      actLog.pop()      //Did nothing, so delete it from log
      console.log(`big chungus`)
      return
    }
    if (chronology[0] == "number") {
      if (entry !== "") {
        num2 = entry
        entry = ""
      }
      previousResult = Result()
    }
    if (chronology[0] == "operator") {
      num2 = num1
      previousResult = Result()
    }
    if (chronology[0] == "execute") {
      if (entry !== "" || num2 !== "") {
        num1 = previousResult
        previousResult = Result()
      }
    }


  }



  if (isNaN(entry) == true) {     //If entry becomes NaN, clear it
    entry = ""
    console.log("NaN happened")
  }
}