$(document).ready(function () {
  $('.fade').slick({
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: '.header__right',
    nextArrow: '.header__left',
  });
});

$.validate({
  borderColorOnError: '#f00',
  addValidClassOnAll: true,
});

$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger, .header__nav').toggleClass('active');
  });
});

let menu = $("#menu")
let burgerMenu = $("#burger-menu");

function closeMenu() {
  burgerMenu.toggleClass('active');

  if (menu.hasClass('active')) {
    menu.toggleClass('active');
  }
}

$(document).ready(function () {
  $(menu).on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);

    if (menu.hasClass('active')) {
      closeMenu();
    }
  });
});