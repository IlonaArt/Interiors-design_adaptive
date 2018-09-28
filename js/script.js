let menu = document.querySelector(".menu");
let navList = document.querySelector(".navigation-wrap");

menu.addEventListener("click", function (evt) {
    evt.preventDefault();
    navList.classList.toggle("show-nav");
});