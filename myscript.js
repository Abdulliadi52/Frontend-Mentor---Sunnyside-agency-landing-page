const buttons = document.getElementById("btn");
const navBar = document.getElementById("navbar");

buttons.addEventListener("click", () => {
  buttons.classList.toggle("active");
  navBar.classList.toggle("active");
});
