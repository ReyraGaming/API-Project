const toggleButton = document.querySelector("#button-menu");
const Menulist = document.querySelector("#mobile-menu");

toggleButton.addEventListener("click", () => {
  Menulist.classList.toggle("hidden");
});
