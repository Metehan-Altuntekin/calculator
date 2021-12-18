while (NumberButton.clicked == true) {
  if (previousAction != equalbutton.clicked) {    //If previous action is NOT clicking on equals,
    input += number                               //Add the number into input.
  } else {                     //If previous action is clicking on equals,
    input = number             //Change input with the number. Because previous number is processed.
  }
}

while (operatorButton.clicked == true) {
  if (output.includes(operator) == false) {
    output += operator
    if(output.includes(equals) == true){
      output.remove(equals)
    }
  } else {
    output.operator = operator
  }
}

while (equalbutton.clicked == true) {
  if (output.includes(operator) == false) {
    output = input + equals
  } else {
    if (output.includes(equals) == false) {
      input = eval(output + operator + input)
      output = output + operator + input + equals
    } else{
      output.firstNumber = input
      input = resultOfNewEquision
    }
  }
}