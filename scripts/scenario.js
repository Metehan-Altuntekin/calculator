function Scenario(value) {

  if (prevAct(1) == "number") {
    if (prevAct(2) == "execute") {
      num1 = previousResult
      BottomDisplay(entry)
    }
    if(entry === "0"){
      entry = ""
    }
    entry += value
    BottomDisplay(entry)
  }
  if (prevAct(1) == "operator") {
    /*if (entry === "") {
      actLog.pop()      //Did nothing, so delete it from log
      return
    } else {*/
    Chron()
    if (chronology[0] == "start") {
      num1 = "0"
      operator = value
      UpperDisplay(`${num1} ${operator}`)
    }
    if (chronology[0] == "number") {
      if (chronology[1] == "start") {
        if (entry !== "") {
          num1 = entry
          entry = ""
        }
        operator = value
        UpperDisplay(`${num1} ${operator}`)
      }
      if (chronology[1] == "operator") {  //...operator > number > operator
        if (entry !== "") {
          num2 = entry
        }
        previousResult = Result()
        num1 = previousResult
        operator = value
        UpperDisplay(`${num1} ${operator}`)
        BottomDisplay(`${num1}`)
        num2 = ""
        entry = ""
      }
      if (chronology[1] == "execute") {
        num1 = entry
        UpperDisplay(`${num1} ${operator}`)
        num2 = ""
        entry = ""
        operator = value
      }

    }
    if (chronology[0] == "operator") {
      operator = value
      UpperDisplay(`${num1} ${operator}`)
    }
    if (chronology[0] == "execute") {
      num1 = previousResult
      num2 = ""
      operator = value
      UpperDisplay(`${num1} ${operator}`)

    }

    //}
  }
  if (prevAct(1) == "percent") {
    if (num1 !== "") {
      if (entry !== "") {
        num2 = parseFloat(((parseFloat(num1) / 100) * parseFloat(entry)).toPrecision(12))
        entry = ""
      } else if(num2 !== ""){
        num2 = parseFloat(((parseFloat(num1) / 100) * parseFloat(num2)).toPrecision(12))
      } else{
        num2 = parseFloat(((parseFloat(num1) / 100) * parseFloat(num1)).toPrecision(12))       
      }
      UpperDisplay(`${num1} ${operator} ${num2}`)
      BottomDisplay(`${num2}`)
    }
  }
  if (prevAct(1) == "backspace") {
    entry = entry.slice(0, -1)
    if (entry === "") {
      BottomDisplay(0)
    } else {
      BottomDisplay(entry)
    }
  }
  if (prevAct(1) == "invert") {
    if (entry === ""){
      entry = previousResult
    } 
    entry = (1 / parseFloat(entry)).toString()
    BottomDisplay(entry)
    UpperDisplay("")
  }
  if (prevAct(1) == "square") {
    if (entry === ""){
      entry = previousResult
    }
    entry = Math.pow(parseFloat(entry), 2)
    BottomDisplay(entry)
    UpperDisplay("")
  }
  if (prevAct(1) == "squareRoot") {
    if (entry === ""){
      entry = previousResult
    }
    entry = Math.sqrt(parseFloat(entry))
    BottomDisplay(entry)
    UpperDisplay("")
  }
  if (prevAct(1) == "negate") {
    if (entry === ""){
      entry = previousResult
    }
    entry = (-(parseFloat(entry))).toString()
    BottomDisplay(entry)
    UpperDisplay("")
  }
  if (prevAct(1) == "dot") {
    if (entry.includes(".") == true) {
      actLog.pop()      //Did nothing, so delete it from log
      return
    } else {
      if (entry === "") {
        entry = "0."
      } else {
        entry += "."
      }
      BottomDisplay(entry)
      UpperDisplay("")

    }
  }
  if (prevAct(1) == "execute") {
    Chron()

    if (chronology[0] == "start") {
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
      UpperDisplay(`${num1} ${operator} ${num2} =`)
      BottomDisplay(`${previousResult}`)
    }
    if (chronology[0] == "operator") {
      num2 = num1
      previousResult = Result()
      UpperDisplay(`${num1} ${operator} ${num2} =`)
      BottomDisplay(`${previousResult}`)
    }
    if (chronology[0] == "execute") {
      if (entry !== "" || num2 !== "") {
        num1 = previousResult
        previousResult = Result()
        UpperDisplay(`${num1} ${operator} ${num2} =`)
        BottomDisplay(`${previousResult}`)
      }
    }


  }



  if (isNaN(entry) == true) {     //If entry becomes NaN, clear it
    entry = ""
    console.log("NaN happened")
  }
}