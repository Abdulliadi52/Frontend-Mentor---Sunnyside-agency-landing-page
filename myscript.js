const buttons = document.getElementById("btn");
const navBar = document.getElementById("navbar");

buttons.addEventListener("click", () => {
  navBar.classList.toggle("active");

  if (buttons.src.endsWith("images/icon-hamburger.svg")) {
    buttons.src = "images/close-line.svg"; // Change to the new image source
    buttons.style.width = "30px";
    buttons.style.height = "30px";
  } else {
    buttons.src = "images/icon-hamburger.svg"; // Revert to the original image source
    buttons.style.width = "20px";
    buttons.style.height = "18px";
  }
});
