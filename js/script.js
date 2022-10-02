$(document).ready(function () {
  $(".nav-item").hover(function () {
    $(this).children(".dropdown-menu").animate({
      height: 'toggle'
    });
  });
});