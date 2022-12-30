/* Mobile Menu Interaction */
const btnOpenMenu = document.getElementById('open-menu');
const btnCloseMenu = document.getElementById('close-menu');
const btnShowMore = document.getElementById("btn-show-more")
const menu = document.getElementById('list-nav');
btnOpenMenu.addEventListener('click', () => {
  menu.style.transform = 'translateX(100vw)';
});
btnCloseMenu.addEventListener('click', () => {
  menu.style.transform = 'translateX(-100vw)';
});

menu.addEventListener('click', () => {
  btnCloseMenu.click()
})