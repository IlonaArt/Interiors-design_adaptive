let menu = document.querySelector(".menu");
let navList = document.querySelector(".navigation-wrap");

menu.addEventListener("click", function (evt) {
    evt.preventDefault();
    navList.classList.toggle("show-nav");
});

$(document).ready(function(){
  $('.slider-box2').slick({
    centerMode: true,
    variableWidth: true,
    centerPadding: '290px',
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint:2000,
      settings: "slick"
    },
    {
      breakpoint:4000,
      settings: "unslick"
    }]
  });
  $('.slider-box1').slick({
    arrows: false,
    dots: true
  });
});