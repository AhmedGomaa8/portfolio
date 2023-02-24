let menu = document.getElementById("burger-menu");
let ulMenu = document.getElementById("ul-menu");

menu.addEventListener("click", () => {
  ulMenu.classList.toggle("drop");
});
