const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")

menuButton.addEventListener("click", function () {
  if(getComputedStyle(menu).left == "0px"){
    menu.style.left = "-250px"
  } else{
    menu.style.left = "0px"
  }
})