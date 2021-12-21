const keypadButtons = Array.from(document.getElementsByClassName("keypad-button"))

keypadButtons.forEach(function (item, index, array) {
  item.addEventListener("click", function () {
    
    actLog.push(item.value)
    Scenario()
  })
});