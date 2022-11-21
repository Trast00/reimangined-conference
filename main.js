/* Mobile Menu Interaction */
const btnOpenMenu = document.getElementById("open-menu")
const btnCloseMenu = document.getElementById("close-menu")
const menu = document.getElementById("mobile-nav")
btnOpenMenu.addEventListener('click', () => {
  menu.style.left = "0"
})
btnCloseMenu.addEventListener('click', () => {
  menu.style.left = "-100vw"
})