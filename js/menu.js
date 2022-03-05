menu = document.getElementById("menu");
burgerButton = document.getElementById("burger-button");
closeButton = document.getElementById("close-button");

function openMenu() {
    menu.style.display = "flex";
    closeButton.style.display = "flex";
    burgerButton.style.display = "none";
}

function closeMenu() {
    menu.style.display = "none";
    closeButton.style.display = "none";
    burgerButton.style.display = "flex";
}