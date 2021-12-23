const keypadButtons = Array.from(document.getElementsByClassName("keypad-button"))

keypadButtons.forEach(function (item, index, array) {
  item.addEventListener("click", function () {
    
   // if(prevAct(1) != item.value){
      actLog.push(item.value)
 //   }
    Scenario()
  })
});