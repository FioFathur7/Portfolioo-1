const hamBurger = document.getElementById("hamburger");
const navMenu = document.getElementById("menu")

hamBurger.addEventListener("click", function(){
  navMenu.classList.toggle('hidden')
});