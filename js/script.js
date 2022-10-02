$(init);

function init() {
  new WOW().init();

  $("body").addClass("wow animate__animated animate__fadeIn");
  $("header").addClass("wow animate__animated animate__fadeIn");
  $(".nav-link").addClass("wow animate__animated animate__fadeIn");
  $(".dropdown-menu").addClass("wow animate__animated animate__fadeIn");
  $("footer").addClass("wow animate__animated animate__fadeIn");

  /*$(".dropdown").hover(function () {
    $(this).children(".dropdown-menu").animate({
      height:"toggle"
    });
  });*/
}