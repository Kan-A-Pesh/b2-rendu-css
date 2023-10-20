const nav = document.getElementById("MAIN_NAV");
const burger = document.getElementById("MAIN_BURGER");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});
