const entryModifiers = Array.from(document.getElementsByClassName("entry-modifiers"))

entryModifiers.forEach(function (item, index, array) {
  item.addEventListener("click", function () {

    // if(prevAct(1) != item.value){
    actLog.push(item.value)
    //   }
    Scenario()
  })
});