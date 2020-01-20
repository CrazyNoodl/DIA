$(document).ready(function () {
  $('.fade').slick({
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: '.header__right',
    nextArrow: '.header__left'
  });
});

$.validate({
  borderColorOnError: '#f00',
  addValidClassOnAll: true,
});